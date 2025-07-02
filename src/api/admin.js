const { registerAdmin } = require("../controllers/adminControllers");

module.exports = (app) => {
  app.post("/create-admin", registerAdmin);
  // app.post("/create-admin", async (req, res) =>
  //   res.status(201).json({ msg: "create-admin hit" })
  // );
};
