const router = require("express").Router();
const UserController = require("../app/controllers/UserController");
const QuizController = require("../app/controllers/QuizController");
const ProfileController = require("../app/controllers/ProfileController");
const RoomController = require("../app/controllers/RoomController");
const QuestionTypeController = require("../app/controllers/QuestionTypeController");
const QuestionController = require("../app/controllers/QuestionController");
const AnswerController = require("../app/controllers/AnswerController");
const LaunchController = require("../app/controllers/LaunchController");
const TeamController = require("../app/controllers/TeamController");
const TeamStudentController = require("../app/controllers/TeamStudentController");
const AppealController = require("../app/controllers/AppealController");

// Users routes
router.post("/users", UserController.store);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.get);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

// Quizzes routes
router.post("/quizzes", QuizController.store);
router.get("/quizzes", QuizController.getAll);
router.get("/quizzes/:id", QuizController.get);
router.patch("/quizzes/:id", QuizController.update);
router.delete("/quizzes/:id", QuizController.delete);

// Rooms routes
router.post("/rooms", RoomController.store);
router.get("/rooms", RoomController.getAll);
router.get("/rooms/:id", RoomController.get);
router.patch("/rooms/:id", RoomController.update);
router.delete("/rooms/:id", RoomController.delete);

// Questions routes
router.post("/questions", QuestionController.store);
router.get("/questions", QuestionController.getAll);
router.get("/questions/:id", QuestionController.get);
router.patch("/questions/:id", QuestionController.update);
router.delete("/questions/:id", QuestionController.delete);

// Answer routes
router.post("/answers", AnswerController.store);
router.get("/answers", AnswerController.getAll);
router.get("/answers/:id", AnswerController.get);
router.patch("/answers/:id", AnswerController.update);
router.delete("/answers/:id", AnswerController.delete);

// Launch routes
router.post("/launches", LaunchController.store);
router.get("/launches", LaunchController.getAll);
router.get("/launches/:id", LaunchController.get);

// Teams routes
router.post("/teams", TeamController.store);
router.get("/teams", TeamController.getAll);
router.get("/teams/:id", TeamController.get);
router.patch("/teams/:id", TeamController.update);
router.delete("/teams/:id", TeamController.delete);

// Teams routes
router.post("/team_students", TeamStudentController.store);
router.get("/team_students", TeamStudentController.getAll);
router.get("/team_students/:id", TeamStudentController.get);
router.delete("/team_students/:id", TeamStudentController.delete);

// Appeal routes
router.post("/appeals", AppealController.store);

// Profile routes
router.get("/profiles", ProfileController.getAll);

// Question types routes
router.get("/question_types", QuestionTypeController.getAll);

module.exports = router;
