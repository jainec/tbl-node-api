const Team = require("../models/Team");
const Launch = require("../models/Launch");

class TeamController {
  async store(req, res) {
    try {
      const team = await Team.create(req.body);
      res.status(201).send(team);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const teams = await Team.findAll({ include: [{ model: Launch }] });
      res.send(teams);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const team = await Team.findOne({
        where: { id: req.params.id },
        include: [{ model: Launch }],
      });
      if (!team) {
        return res.status(404).send({ error: "Team not found" });
      }
      res.send(team);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const result = await Team.update(req.body, {
        where: { id: req.params.id },
      });

      if (!result) {
        return res.status(500).send({ error: "Team update failed" });
      }
      const team = await Team.findOne({ where: { id: req.params.id } });
      res.send(team);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const team = await Team.destroy({ where: { id: req.params.id } });
      if (!team) {
        return res.status(404).send({ error: "Team not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new TeamController();
