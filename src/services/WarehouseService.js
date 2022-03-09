const Warehouse = require("../db/models/warehouse")

class WarehouseService {
    static async createWarehouse(body) {
        const product = await Warehouse.findOne({where: {product_Id: body.product_Id}})
        if (product === null) {
            return await Warehouse.create(body)
        } else {
            return await Warehouse.update({
                product_Id: body.product_Id,
                count: product.count + body.count
            }, {where: {product_Id: body.product_Id}})
        }
    }
}

module.exports = WarehouseService