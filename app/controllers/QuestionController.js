const Question = require("../models/Question");
const User = require("../models/User");
const QuestionType = require("../models/QuestionType");

class QuestionController {
  async store(req, res) {
    try {
      const question = await Question.create(req.body);
      res.status(201).send(question);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const questions = await Question.findAll({
        include: [
          { model: User, as: "question_creator" },
          { model: QuestionType, as: "question_type" },
        ],
      });
      res.send(questions);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new QuestionController();
