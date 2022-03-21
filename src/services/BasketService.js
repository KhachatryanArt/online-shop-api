const Basket = require("../db/models/basket")
const Product = require("../db/models/product")
const Wallet = require("../db/models/wallet");
const History = require("../db/models/history")
const {QueryTypes} = require("sequelize");
const sequelize = require("../db/connection/connection")
const Warehouse = require("../db/models/warehouse")

class BasketService {

    static async getBasketContent(id) {
        return await Basket.sequelize.query(` SELECT "Basket"."id", "Basket"."user_Id",  "Basket"."count", "Basket"."total_amount", "Basket"."createdAt", "Basket"."updatedAt", "Product"."id"
                        AS "Product.id", "Product"."name" AS "Product.name", "Product"."price" AS "Product.price", "Product"."description" AS "Product.description", "Product"."createdAt" AS "Product.createdAt",
                        "Product"."updatedAt" AS "Product.updatedAt" FROM "Baskets" AS "Basket" LEFT OUTER JOIN "Products" AS "Product" ON "Basket"."product_Id" = "Product"."id" WHERE "Basket"."user_Id" = '${id}';`, {type: QueryTypes.SELECT});
    }

    static async createBasket(product_Id, count, user_Id, price) {
        const total_amount = price * count
        return await Basket.create({
            user_Id: user_Id,
            product_Id: product_Id,
            count: count,
            total_amount: total_amount
        })
    }

    static async deleteBasket(item_Id, user_Id) {

        const basket = await Basket.destroy({where: {product_Id: item_Id, user_Id: user_Id}})
        if (basket) {
            return ("Product deleted from your cart")
        }
        return ("ERROR!Product don't deleted from your cart")

    }

    static async createOrder(basketItem_Id, user_Id) {

        const t = await sequelize.transaction();

        try {
            const productCount = await Warehouse.findOne({where: {product_Id: basketItem_Id}});
            const basketRow = await Basket.findOne({where: {user_Id: user_Id, product_Id: basketItem_Id}});
            const product = await Product.findOne({where: {id: basketItem_Id}});
            const wallet = await Wallet.findOne({where: {user_Id: user_Id}});

            const actual_count = productCount.count - basketRow.count
            const actual_balance = wallet.actual_balance - basketRow.total_amount;
            const minus_balance = wallet.minus_balance + basketRow.total_amount
            if (actual_count >= 0 && actual_balance >= 0) {
                const history = await History.create({
                    user_Id: user_Id,
                    productName: product.name,
                    count: basketRow.count,
                    price: product.price
                }, {transaction: t});

                await Wallet.update({
                    minus_balance: minus_balance,
                    actual_balance: actual_balance
                }, {where: {user_Id: user_Id}, transaction: t})

                await Basket.destroy({where: {id: basketRow.id}}, {transaction: t});
                await Warehouse.update({count: actual_count}, {where: {product_Id: basketItem_Id}}, {transaction: t})

                await t.commit();

                return history
            } else {
                return ("There are not that many products in stock")
            }
        } catch (error) {
            await t.rollback();
            return (error)
        }

    }
}

module.exports = BasketService;