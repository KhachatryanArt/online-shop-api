const Router = require('koa-router');
const authRouter = require('./auth');
const productRouter = require('./product');
const basketRouter = require('./basket');
const profileRouter = require("./profile")
const warehouseRouter = require('./warehouse');

const router = new Router();

router.use(authRouter.routes());
router.use(productRouter.routes())
router.use(basketRouter.routes());
router.use(warehouseRouter.routes());
router.use(profileRouter.routes());


module.exports = router;

