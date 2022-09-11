import { ITurmaDTO } from '../dtos/ITurmaDTO'
import { Turma } from '../entities/turma'

export interface TurmasRepository {
  create(turma: ITurmaDTO): Promise<Turma>
  save(turma: ITurmaDTO): Promise<Turma>
  findById(id: number): Promise<Turma | null>
  findAll(): Promise<Turma[]>
  delete(id: number): Promise<void>
}
