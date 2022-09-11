import { EnumPessoa } from '../entities/pessoa'

export interface IInstrutorDTO {
  id: number
  rg: string
  pessoa_id?: number
  tipo: EnumPessoa
  nome: string
  data_nascimento: Date
}
