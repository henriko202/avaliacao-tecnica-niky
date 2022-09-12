import { ITurmaDTO } from '../dtos/ITurmaDTO'
import { Turma } from '../entities/turma'

export interface ITurmasRepository {
  create(turma: ITurmaDTO): Promise<Turma>
  save(id: number, turma: ITurmaDTO): Promise<Turma>
  findById(id: number): Promise<Turma | null>
  findAll(): Promise<Turma[]>
  delete(id: number): Promise<void>
}
