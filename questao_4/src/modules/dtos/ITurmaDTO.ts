export interface ITurmaDTO {
  id: number
  tipo_atividade: number
  instrutor: number
  monitor: number
  qtde_max_alunos: number
  horario_aula: string
  duracao_aula: number
  data_inicial: Date
  data_final?: Date
  nome: string
  descricao: string
}
