import { PessoaProps } from './pessoa'

/**
 * Instrutor tem um campo a mais que pessoa, que é o RG
 */
export interface InstrutorProps extends PessoaProps {
  id: number
  rg: string
}

export class Instrutor {
  private props: InstrutorProps

  constructor(props: InstrutorProps) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  get rg() {
    return this.props.rg
  }
}
