import { Atividade } from "./atividade";
import { Instrutor } from "./instrutor";
import { Aluno } from "./aluno";

export interface TurmaProps {
  id?: number;
  nome: string;
  descricao: string;
  tipo_atividade: Atividade;
  instrutor: Instrutor;
  monitor: Aluno;
  qtde_max_alunos: number;
  horario_aula: string;
  duracao_aula: number;
  data_inicial: Date;
  data_final: Date;
}

export class Turma {
  private props: TurmaProps;

  constructor(props: TurmaProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get tipo_atividade() {
    return this.props.tipo_atividade;
  }

  get instrutor() {
    return this.props.instrutor;
  }

  get monitor() {
    return this.props.monitor;
  }

  get qtde_max_alunos() {
    return this.props.qtde_max_alunos;
  }

  get horario_aula() {
    return this.props.horario_aula;
  }

  get duracao_aula() {
    return this.props.duracao_aula;
  }

  get data_inicial() {
    return this.props.data_inicial;
  }

  get data_final() {
    return this.props.data_final;
  }

  get nome() {
    return this.props.nome;
  }

  get descricao() {
    return this.props.descricao;
  }
}
