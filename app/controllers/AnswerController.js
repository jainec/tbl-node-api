const Answer = require("../models/Answer");
const Question = require("../models/Question");

class AnswerController {
  async store(req, res) {
    try {
      const answer = await Answer.create(req.body);
      res.status(201).send(answer);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const answers = await Answer.findAll({ include: [{ model: Question }] });
      res.send(answers);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const answer = await Answer.findOne({
        where: { id: req.params.id },
        include: [{ model: Question }],
      });
      if (!answer) {
        return res.status(404).send({ error: "Answer not found" });
      }
      res.send(answer);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const result = await Answer.update(req.body, {
        where: { id: req.params.id },
      });

      if (!result) {
        return res.send({ error: "Answer not found" });
      }

      const answer = await Answer.findOne({ where: { id: req.params.id } });
      res.send(answer);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const answer = await Answer.destroy({ where: { id: req.params.id } });
      if (!answer) {
        return res.status(404).send({ error: "Answer not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new AnswerController();
