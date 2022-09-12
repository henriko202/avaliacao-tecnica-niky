import { Endereco } from './endereco'

/**
 * Telefone vai ter o número e um boolen para saber se é whatsapp ou não
 */
export interface TelefoneProps {
  id: number
  endereco: Endereco
  telefone: string
  whatsapp: boolean
}

export class Telefone {
  private props: TelefoneProps

  constructor(props: TelefoneProps) {
    this.props = props
  }

  get telefone() {
    return this.props.telefone
  }

  get whatsapp() {
    return this.props.whatsapp
  }

  get endereco() {
    return this.props.endereco
  }

  get id() {
    return this.props.id
  }
}
