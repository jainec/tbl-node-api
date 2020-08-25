const Launch = require("../models/Launch");
const Room = require("../models/Room");
const Quiz = require("../models/Quiz");

class LaunchController {
  async store(req, res) {
    try {
      const launch = await Launch.create(req.body);
      res.status(201).send(launch);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const launches = await Launch.findAll({
        include: [{ model: Room }, { model: Quiz }],
      });
      res.send(launches);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const launch = await Launch.findOne({
        where: { id: req.params.id },
        include: [{ model: Room }, { model: Quiz }],
      });
      if (!launch) {
        return res.status(404).send({ error: "Launch not found" });
      }
      res.send(launch);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

module.exports = new LaunchController();
