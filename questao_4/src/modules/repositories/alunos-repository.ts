import { IAlunoDTO } from '../dtos/IAlunoDTO'
import { Aluno } from '../entities/aluno'

export interface IAlunosRepository {
  create(aluno: IAlunoDTO): Promise<Aluno>
  save(id: number, aluno: IAlunoDTO): Promise<Aluno>
  findByCodMatricula(cod_matricula: number): Promise<Aluno | null>
  findAll(): Promise<Aluno[]>
  delete(cod_matricula: number): Promise<void>
}
