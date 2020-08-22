const User = require("../models/User");

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user);
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.send({ users, total: users.length });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });

      if (!user) {
        res.status(404).send({ error: "User not found" });
      }

      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const result = await User.update(req.body, {
        where: { id: req.params.id },
      });

      if (!result) {
        res.satus(404).send({ error: "User not found" });
      }

      const user = await User.findOne({ where: { id: req.params.id } });
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.destroy({ where: { id: req.params.id } });
      if (!user) {
        res.status(404).send({ error: "User not found" });
      }
      res.send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new UserController();
