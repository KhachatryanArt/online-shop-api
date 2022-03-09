const Product = require("../db/models/product")
const ProductService = require("../services/ProductService")

class ProductController {
    static async getAllProduct(ctx) {
        const {id} = ctx.state.user
        ctx.body = await ProductService.getAllProduct(id)
    }

    static async createProduct(ctx) {

        const {id} = ctx.state.user
        const name = ctx.file.filename;
        const filePath = ctx.file.destination;
        const {productName, price, description, category} = ctx.request.body;
        await ProductService.createProduct(productName, price, description, category, name, filePath,id)

    }

    static async updateProduct(ctx) {
        const product_Id = ctx.request.params.id
        const {id} = ctx.state.user;
        const name = ctx.file.filename;
        const filePath = ctx.file.destination;
        const {productName, price, description, category} = ctx.request.body;
        await ProductService.updateProduct(productName, price, description, category, filePath, name, id, product_Id)
    }

    static async deleteProduct(ctx) {
        const {id} = ctx.request.params;
        const{id:user_Id} = ctx.state.user
        await ProductService.deleteProduct(id,user_Id)
    }


}

module.exports = ProductController