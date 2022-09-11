import { Matricula } from "./matricula";

export interface PresencaProps {
  id?: number;
  matricula: Matricula;
  data: Date;
  presente: boolean;
}

export class Presenca {
  private props: PresencaProps;

  constructor(props: PresencaProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get matricula() {
    return this.props.matricula;
  }

  get data() {
    return this.props.data;
  }

  get presente() {
    return this.props.presente;
  }
}
