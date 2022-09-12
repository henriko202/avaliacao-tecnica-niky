import { Instrutor } from './instrutor'

export interface TitulacaoProps {
  id?: number
  instituicao: string
  curso: string
  grau: string
  instrutor: Instrutor
}

export class Titulacao {
  private props: TitulacaoProps

  constructor(props: TitulacaoProps) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  get instituicao() {
    return this.props.instituicao
  }

  get curso() {
    return this.props.curso
  }

  get grau() {
    return this.props.grau
  }
}
