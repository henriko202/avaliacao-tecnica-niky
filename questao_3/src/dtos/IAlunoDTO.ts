import { EnumPessoa } from '../entities/pessoa'

export interface IAlunoDTO {
  cod_matricula: number
  data_matricula: Date
  altura: number
  peso: number
  nome: string
  tipo: EnumPessoa
  data_nascimento: Date
  pessoa_id: number
}
