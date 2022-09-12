import { Router } from "express";
import { listCategoriesController } from "../services/listCategories";

const CategoryRoutes = Router();

CategoryRoutes.get("/categorias", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { CategoryRoutes };
