import { CategoriesRepositoryMock } from "../../repositories/mock/CategoriesRepositoryMock";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesService } from "./ListCategoriesService";

const CategoryRepository = new CategoriesRepositoryMock();
const listCategoriesService = new ListCategoriesService(CategoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

export { listCategoriesController };
