const express = require("express");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    this.routes();

    this.middlewares();
  }

  //middlewares

  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
  }

  //rutas

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port", this.port);
    });
  }
}

module.exports = Server;
