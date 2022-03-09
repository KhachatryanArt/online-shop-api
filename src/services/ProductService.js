const Product = require("../db/models/product")
const Image = require("../db/models/image")
const Category = require("../db/models/category")
const redisService = require("../db/connection/redis-connetion")
const fs = require("fs");


class ProductService {
    static async getAllProduct(id) {
        const productCache = await redisService.getCache(`userID-${id}`);
        if (productCache) {
        console.log(productCache,7777)
            return productCache
        } else {
            const products = await Product.findAll({
                attributes: {
                    model: Product,
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: Category,
                        attributes: ["name"]
                    },
                    {
                        model: Image,
                        attributes: ["name", "path"]
                    }
                ]
            });
            await redisService.setCache(`userID-${id}`, products)
            return products;
        }
    }

    static async createProduct(productName, price, description, category, name, filePath,user_id) {
        const product = await Product.create({
            name: productName,
            price: price,
            description: description,
        });
        await product.save();

        const id = product.id
        const categoryName = await Category.create({
            product_Id: id,
            name: category
        });

        await categoryName.save()

        const imageName = await Image.create({
            product_Id: id,
            name: name,
            path: filePath
        });

        await imageName.save();
        await redisService.delKey(`userID-${user_id}`)

        return product
    }

    static async updateProduct(productName, price, description, category, filePath, name, id, product_Id) {
        const oneProduct = await Image.findOne({where: {product_Id: product_Id}})

        const oldPath = `${oneProduct.path}\\${oneProduct.name}`;
        await fs.unlinkSync(oldPath);
        await Product.update({
            name: productName,
            price: price,
            description: description,
        }, {where: {id: product_Id}});

        await Category.update({
            name: category
        }, {where: {product_Id: product_Id}});

        await Image.update({
            name: name,
            path: filePath
        }, {where: {product_Id: product_Id}});

        await redisService.delKey(`userID-${id}`)
    }

    static async deleteProduct(id,user_Id) {
        const oneProduct = await Image.findOne({where: {product_Id: id}})
        const oldPath = `${oneProduct.path}\\${oneProduct.name}`;
        await fs.unlinkSync(oldPath);
        await Product.destroy({where: {id: id}});
        await redisService.delKey(`userID-${user_Id}`)

    }

}

module.exports = ProductService