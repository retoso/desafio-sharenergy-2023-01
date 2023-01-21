import { Router } from "express";
import auth from "./middlewares/auth";
import HelloController from "./controllers/HelloController";
import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController";
import RespositoriesController from "./controllers/RespositoriesControllers";

const routes = new Router();

routes.post('/sessions', SessionsController.create);
routes.get('/hello', HelloController.index);

routes.use(auth)

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users/', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

routes.get('/users/:user_id/repositories', RespositoriesController.index);
routes.post('/users/:user_id/repositories', RespositoriesController.create);
routes.delete('/users/:user_id/repositories', RespositoriesController.destroy);

export default routes; 
