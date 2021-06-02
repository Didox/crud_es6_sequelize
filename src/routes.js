require("dotenv/config");

import { Router } from "express";

import ClientesController from "./app/controller/ClienteController";

const routes = new Router();

routes.get("/", ClientesController.index);
routes.post("/clientes", ClientesController.store);
routes.get("/clientes", ClientesController.index);
routes.put("/clientes/:id", ClientesController.update);
routes.delete("/clientes/:id", ClientesController.destroy);

export default routes;
