const QuestionType = require("../models/QuestionType");

class QuestionTypeController {
  async getAll(req, res) {
    try {
      const question_types = await QuestionType.findAll();
      res.send(question_types);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new QuestionTypeController();
