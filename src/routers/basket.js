const Router = require("koa-router");
const router = new Router();
const auth = require("../middleware/auth")
const BasketController = require("../controllers/BasketController")

router.prefix("/api/v1/basket");


router.use(auth)
router.get("/",BasketController.getBasketContent);
router.post("/",BasketController.createBasket);
router.delete("/:id",BasketController.deleteBasket);
router.delete("/buy/:id",BasketController.buyProduct)

module.exports = router