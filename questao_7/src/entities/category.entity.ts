type ICategory = {
  categoria: string;
  recorrencia: string;
  valor: number;
  valor_total: number;
  qtde_beneficiarios: number;
};

export class Category {
  categoria: string;
  recorrencia: string;
  valor: number;
  valor_total: number;
  qtde_beneficiarios: number;

  constructor(props: ICategory) {
    this.categoria = props.categoria;
    this.recorrencia = props.recorrencia;
    this.valor = props.valor;
    this.valor_total = props.valor_total;
    this.qtde_beneficiarios = props.qtde_beneficiarios;
  }
}
