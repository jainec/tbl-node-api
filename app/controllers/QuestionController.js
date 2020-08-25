const Question = require("../models/Question");
const User = require("../models/User");
const QuestionType = require("../models/QuestionType");
const Quiz = require("../models/Quiz");

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
          { model: Quiz },
        ],
      });
      res.send(questions);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const question = await Question.findOne({
        where: { id: req.params.id },
        include: [
          { model: User, as: "question_creator" },
          { model: QuestionType, as: "question_type" },
          { model: Quiz },
        ],
      });
      if (!question) {
        return res.status(404).send({ error: "Question not found" });
      }
      res.send(question);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const result = await Question.update(req.body, {
        where: { id: req.params.id },
      });
      if (!result) {
        return res.status(404).send({ error: "Question not found" });
      }
      const question = await Question.findOne({
        where: { id: req.params.id },
        include: [
          { model: User, as: "question_creator" },
          { model: QuestionType, as: "question_type" },
          { model: Quiz },
        ],
      });
      res.send(question);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const question = await Question.destroy({ where: { id: req.params.id } });
      if (!question) {
        return res.status(404).send({ error: "Question not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new QuestionController();
