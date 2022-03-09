const WarehouseService = require("../services/WarehouseService")
class WarehouseController {

    static async createWarehouse(ctx){
        const body = ctx.request.body;
        await WarehouseService.createWarehouse(body)
    }
}

module.exports = WarehouseController