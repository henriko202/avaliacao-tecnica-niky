/**
 * Telefone vai ter o número e um boolen para saber se é whatsapp ou não
 */
export interface TelefoneProps {
  telefone: string;
  whatsapp: boolean;
}

export class Telefone {
  private props: TelefoneProps

  constructor (props: TelefoneProps) {
    this.props = props
  }

  get telefone () {
    return this.props.telefone
  }

  get whatsapp () {
    return this.props.whatsapp
  }
}
