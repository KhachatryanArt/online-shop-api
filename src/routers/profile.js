const Router = require("koa-router");
const router = new Router();
const auth = require("../middleware/auth");
const ProfileController = require("../controllers/ProfileController");

router.prefix("/api/v1/profile");

router.use(auth)

router.get("/",ProfileController.getProfile);
router.post("/account",ProfileController.topUpAccount)

module.exports = router