/**
 * Temos dois tipos de pessoas: Aluno e Instrutor
 */
export enum EnumPessoa {
  ALUNO = 'Aluno',
  INSTRUTOR = 'Instrutor',
}

/**
 * Interface que define as propriedades de uma pessoa, como iremos usar
 * em mais de um lugar, vamos criar uma interface para isso e exportar ela
 */
export interface PessoaProps {
  pessoa_id?: number;
  tipo: EnumPessoa;
  nome: string;
  data_nascimento: Date;
}

export class Pessoa {
  private props: PessoaProps

  constructor (props: PessoaProps) {
    this.props = props
  }

  get id () {
    return this.props.pessoa_id
  }

  get nome () {
    return this.props.nome
  }

  get data_nascimento () {
    return this.props.data_nascimento
  }

  get tipo () {
    return this.props.tipo
  }
}
