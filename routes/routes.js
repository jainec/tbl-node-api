const router = require("express").Router();
const UserController = require("../app/controllers/UserController");
const QuizController = require("../app/controllers/QuizController");
const ProfileController = require("../app/controllers/ProfileController");
const RoomController = require("../app/controllers/RoomController");
const QuestionTypeController = require("../app/controllers/QuestionTypeController");
const QuestionController = require("../app/controllers/QuestionController");

// Users routes
router.post("/users", UserController.store);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.get);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

// Quizzes routes
router.post("/quizzes", QuizController.store);
router.get("/quizzes", QuizController.getAll);

// Profile routes
router.get("/profiles", ProfileController.getAll);

// Question types routes
router.get("/question_types", QuestionTypeController.getAll);

// Rooms routes
router.post("/rooms", RoomController.store);
router.get("/rooms", RoomController.getAll);
router.get("/rooms/:id", RoomController.get);
router.patch("/rooms/:id", RoomController.update);
router.delete("/rooms/:id", RoomController.delete);

// Questions routes
router.post("/questions", QuestionController.store);
router.get("/questions", QuestionController.getAll);

module.exports = router;
