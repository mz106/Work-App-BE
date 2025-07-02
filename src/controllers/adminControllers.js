const AdminService = require("../services/adminService");

// class UserControllers {
//   constructor() {
//     this.service = new UserService();
//   }

//   async RegisterController(req, res) {
//     const service = new UserService();
//     const user = await service.RegisterUser(req.body);
//     console.log("user: ", user);
//     res.status(201).json({ message: "success", user });
//   }
// }

// module.exports = UserControllers;
// const service = new AdminService();

const registerAdmin = async (req, res) => {
  try {
    console.log("hello registerAdmin");
    const service = new AdminService();
    const admin = await service.RegisterAdmin(req.body);
    console.log("admin obj: ", admin);
    res.status(201).json({ message: "success", admin });
  } catch (error) {}
};

module.exports = { registerAdmin };
