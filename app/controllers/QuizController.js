const Quiz = require("../models/Quiz");
const User = require("../models/User");
const Question = require("../models/Question");

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
        include: [{ model: User, as: "owner" }, { model: Question }],
      });
      res.send(quizzes);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const quiz = await Quiz.findOne({
        where: { id: req.params.id },
        include: [{ model: User, as: "owner" }],
      });
      if (!quiz) {
        return res.status(404).send({ error: "Quiz not found" });
      }
      res.send(quiz);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const result = await Quiz.update(req.body, {
        where: { id: req.params.id },
      });
      if (!result) {
        return res.status(404).send("Quiz not found");
      }
      const quiz = await Quiz.findOne({
        where: { id: req.params.id },
        include: [{ model: User, as: "owner" }],
      });
      res.send(quiz);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const quiz = await Quiz.destroy({ where: { id: req.params.id } });
      if (!quiz) {
        return res.status(404).send({ error: "Quiz not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new QuizController();
