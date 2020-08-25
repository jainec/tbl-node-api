const TeamStudent = require("../models/TeamStudent");
const Team = require("../models/Team");
const User = require("../models/User");

class TeamStudentController {
  async store(req, res) {
    try {
      const team_student = await TeamStudent.create(req.body);
      res.send(team_student);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const team_students = await TeamStudent.findAll({
        include: [{ model: Team }, { model: User }],
      });
      res.send(team_students);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const team_student = await TeamStudent.findOne({
        where: { id: req.params.id },
        include: [{ model: Team }, { model: User }],
      });
      if (!team_student) {
        return res.status(404).send({ error: "Team student not found" });
      }
      res.send(team_student);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const team_student = await TeamStudent.destroy({
        where: { id: req.params.id },
      });
      if (!team_student) {
        return res.status(404).send({ error: "Team student not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new TeamStudentController();
