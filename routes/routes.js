const router = require("express").Router();
const UserController = require("../app/controllers/UserController");

router.post("/users", UserController.store);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.get);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

module.exports = router;
