const Router = require("koa-router");
const router = new Router();
const AuthController = require("../controllers/AuthController")
const sms = require("../middleware/smsMiddlware")

router.prefix("/api/v1/auth");

router.post("/register",sms, AuthController.register)
router.post("/admin/register", AuthController.adminRegister)
router.post("/login", AuthController.login)

module.exports = router