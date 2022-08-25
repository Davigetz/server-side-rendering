var jsonServer = require("json-server");
var demodata = require("./personajes-jujutsu-kaisen.json");
var server_port = 8080;

var router = jsonServer.router(demodata);
var server = jsonServer.create();

server.use(jsonServer.defaults(["./public"])); //for static files
server.use(router);
server.listen(server_port, () => {
  console.log("Running at port " + server_port + " ");
});
