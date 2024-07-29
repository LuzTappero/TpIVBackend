import express from "express";
import ProductsController from "../controllers/productController.js";
import validateProduct from "../middlewares/productValidator.js";

const routes = express.Router();

routes.get("/", ProductsController.getAll);
routes.get("/:id", ProductsController.getById);

routes.post("/create", validateProduct, ProductsController.create);
routes.delete("/:id", ProductsController.delete);
routes.patch("/:id", validateProduct, ProductsController.update);

export default routes;
