import { Aluno } from "./aluno";
import { Turma } from "./turma";

export interface MatriculaProps {
  id?: number;
  aluno: Aluno;
  turma: Turma;
}

export class Matricula {
  props: MatriculaProps;

  constructor(props: MatriculaProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get aluno() {
    return this.props.aluno;
  }

  get turma() {
    return this.props.turma;
  }
}
