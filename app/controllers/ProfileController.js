const Profile = require("../models/Profile");

class ProfileController {
  async getAll(req, res) {
    try {
      const profiles = await Profile.findAll();
      res.send(profiles);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new ProfileController();
