const Router = require("koa-router");
const auth = require("../middleware/auth");
const role = require("../middleware/roleMiddleware")
const WarehouseController = require("../controllers/warehouseController")

const router = new Router();
router.prefix("/api/v1/warehouse");

router.use(auth);
router.use(role);

router.post("/",WarehouseController.createWarehouse)

module.exports = router