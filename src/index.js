const express = require("express");
const expressApp = require("./expressApp");
const PORT = require("./config").PORT;
const port = parseInt(PORT);

const StartServer = async (port) => {
  const app = express();

  await expressApp(app);

  app
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    })
    .on("error", (err) => {
      console.log(err);
    });
};

StartServer(port);
