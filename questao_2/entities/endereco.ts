import { Telefone } from './telefone'

enum TipoEndereco {
  RESIDENCIAL = 'Residencial',
  COMERCIAL = 'Comercial',
}

export interface EnderecoProps {
  id: number;
  cep: string;
  logradouro: string;
  /**
   * Número foi definido como string pois pode ser um número ou uma letra
   * ou pode ser S/N
   */
  numero: string;
  bairro: string;
  complemento: string;
  estado: string;
  cidade: string;
  tipo: TipoEndereco;
  telefones: Telefone[];
}

export class Endereco {
  private props: EnderecoProps

  constructor (props: EnderecoProps) {
    this.props = props
  }

  get id () {
    return this.props.id
  }

  get cep () {
    return this.props.cep
  }

  get logradouro () {
    return this.props.logradouro
  }

  get numero () {
    return this.props.numero
  }

  get bairro () {
    return this.props.bairro
  }

  get complemento () {
    return this.props.complemento
  }

  get estado () {
    return this.props.estado
  }

  get cidade () {
    return this.props.cidade
  }

  get tipo () {
    return this.props.tipo
  }

  get telefones () {
    return this.props.telefones
  }
}
