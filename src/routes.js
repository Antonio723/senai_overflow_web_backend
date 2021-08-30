const routes = require("express").Router();
const postController = require("./controllers/posts")
const sessionControler = require("./controllers/sessions")
const userControler = require("./controllers/users")

routes.post('/sessions', sessionControler.store)

routes.post("/users",  userControler.store);

routes.get("/posts",  postController.index);



module.exports = routes;