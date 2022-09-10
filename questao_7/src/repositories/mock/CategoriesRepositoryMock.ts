import { Category } from "../../entities/category.entity";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryMock implements ICategoriesRepository {
  list(): Category[] {
    return [
      {
        categoria: "Alimentação",
        recorrencia: "Diária",
        valor: 45.5,
        valor_total: 63700,
        qtde_beneficiarios: 70,
      },
      {
        categoria: "Combustível",
        recorrencia: "Mensal",
        valor: 100,
        valor_total: 3500,
        qtde_beneficiarios: 35,
      },
      {
        categoria: "Cultura",
        recorrencia: "Mensal",
        valor: 100,
        valor_total: 4200,
        qtde_beneficiarios: 42,
      },
      {
        categoria: "Educação",
        recorrencia: "Anual",
        valor: 1200,
        valor_total: 42000,
        qtde_beneficiarios: 35,
      },
      {
        categoria: "Flexível",
        recorrencia: "Mensal",
        valor: 120,
        valor_total: 7200,
        qtde_beneficiarios: 60,
      },
      {
        categoria: "Transporte",
        recorrencia: "Diária",
        valor: 12,
        valor_total: 8400,
        qtde_beneficiarios: 35,
      },
      {
        categoria: "Saúde",
        recorrencia: "Mensal",
        valor: 420,
        valor_total: 41160,
        qtde_beneficiarios: 70,
      },
    ];
  }
}

export { CategoriesRepositoryMock };
