import { TipoEndereco } from '../entities/endereco'

export interface IEnderecoDTO {
  id: number
  pessoa: number
  cep: string
  logradouro: string
  numero: string
  bairro: string
  complemento: string
  estado: string
  cidade: string
  tipo: TipoEndereco
}
