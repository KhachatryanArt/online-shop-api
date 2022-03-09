const Router = require("koa-router");
const router = new Router();
const ProductController = require("../controllers/ProductController")
const auth = require("../middleware/auth")
const role = require("../middleware/roleMiddleware")
const upload = require("../middleware/image")

router.prefix("/api/v1/product");

router.use(auth)

router.get("/", ProductController.getAllProduct)
router.use(role)
router.post("/",upload.single("image"), ProductController.createProduct)
router.put("/:id",upload.single("image"), ProductController.updateProduct)
router.delete("/:id", ProductController.deleteProduct)


module.exports = router