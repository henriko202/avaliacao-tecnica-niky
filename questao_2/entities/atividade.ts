export interface AtividadeProps {
  id: number;
  nome: string;
}

export class Atividade {
  private props: AtividadeProps;

  constructor(props: AtividadeProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get nome() {
    return this.props.nome;
  }
}
