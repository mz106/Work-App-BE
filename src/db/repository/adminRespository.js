const { Admin } = require("../models/index");

class AdminRepository {
  async CreateAdmin(adminname, password, salt = 10) {
    console.log(
      "create admin: " + "adminname: " + adminname + " password: " + password
    );
    try {
      const admin = await Admin.create({ adminname, password });
      return admin;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AdminRepository;
