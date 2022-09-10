import { Category } from "../entities/category.entity";

interface ICategoriesRepository {
  list(): Category[];
}

export { ICategoriesRepository };
