import { EnumPessoa } from '../entities/pessoa'

export interface IPessoaDTO {
  pessoa_id: number
  tipo: EnumPessoa
  nome: string
  data_nascimento: Date
}
