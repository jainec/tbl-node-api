const Quiz = require("../models/Quiz");
const User = require("../models/User");

class QuizController {
  async store(req, res) {
    try {
      const quiz = await Quiz.create(req.body);
      res.status(201).send(quiz);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const quizzes = await Quiz.findAll({
        include: [{ model: User }],
      });
      res.send(quizzes);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new QuizController();
