const BasketService = require("../services/BasketService")

class BasketController {

    static async getBasketContent(ctx) {
        const {id} = ctx.state.user;
        ctx.body = await BasketService.getBasketContent(id)
    }

    static async createBasket(ctx) {
        const user_Id = ctx.state.user.id;
        const {product_Id, count, price} = ctx.request.body
        ctx.body = await BasketService.createBasket(product_Id, count, user_Id, price);
    }

    static async deleteBasket(ctx) {
        const {id: user_Id} = ctx.state.user
        const {id: item_Id} = ctx.request.params;
        ctx.body = await BasketService.deleteBasket(item_Id, user_Id)
    }

    static async buyProduct(ctx) {
        const {id: user_Id} = ctx.state.user;
        const {id: basketItem_Id} = ctx.request.params;
        ctx.body = await BasketService.createOrder(basketItem_Id, user_Id)
    }
}

module.exports = BasketController