const Appeal = require("../models/Appeal");

class AppealController {
  async store(req, res) {
    try {
      const appeal = await Appeal.create(req.body);
      res.status(201).send(appeal);
    } catch (error) {
      res.sstatus(500).send({ error });
    }
  }
}

module.exports = new AppealController();
