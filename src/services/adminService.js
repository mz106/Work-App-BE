const { AdminRepository } = require("../db");

class AdminService {
  constructor() {
    this.repository = new AdminRepository();
  }

  async RegisterAdmin({ adminname, password }) {
    console.log("registeradmin controllers: ", adminname, password);
    const admin = await this.repository.CreateAdmin(adminname, password);
    return admin;
  }
}

module.exports = AdminService;
