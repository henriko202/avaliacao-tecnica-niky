import { PessoaProps } from './pessoa'

/**
 * Aluno tem data de matrícula, altura e peso
 */
export interface AlunoProps extends PessoaProps {
  cod_matricula: number
  data_matricula: Date
  altura: number
  peso: number
}

export class Aluno {
  private props: AlunoProps

  constructor(props: AlunoProps) {
    this.props = props
  }

  get cod_matricula() {
    return this.props.cod_matricula
  }

  get data_matricula() {
    return this.props.data_matricula
  }

  get altura() {
    return this.props.altura
  }

  get peso() {
    return this.props.peso
  }

  get nome() {
    return this.props.nome
  }
}
