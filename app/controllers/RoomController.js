const Room = require("../models/Room");
const User = require("../models/User");

class RoomController {
  async store(req, res) {
    try {
      const room = await Room.create(req.body);
      res.status(201).send(room);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const rooms = await Room.findAll({
        include: [{ model: User, as: "creator" }],
      });
      res.send(rooms);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async get(req, res) {
    try {
      const room = await Room.findOne({
        where: { id: req.params.id },
        include: [{ model: User, as: "creator" }],
      });
      if (!room) {
        res.status(404).send({ error: "Room not found" });
      }
      res.send(room);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const result = await Room.update(req.body, {
        where: { id: req.params.id },
      });

      if (!result) {
        res.satus(404).send({ error: "Room not found" });
      }

      const room = await Room.findOne({ where: { id: req.params.id } });
      res.send(room);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const room = await Room.destroy({ where: { id: req.params.id } });
      if (!room) {
        res.status(404).send({ error: "Room not found" });
      }
      res.send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new RoomController();
