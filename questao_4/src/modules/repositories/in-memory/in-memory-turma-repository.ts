import { ITurmaDTO } from '../../dtos/ITurmaDTO'
import { Turma } from '../../entities/turma'
import { ITurmasRepository } from '../turma-repository'

export class InMemoryTurmaRepository implements ITurmasRepository {
  async create(turma: ITurmaDTO): Promise<Turma> {
    throw new Error('Method not implemented.')
  }

  async save(turma: ITurmaDTO): Promise<Turma> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Turma | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Turma[]> {
    throw new Error('Method not implemented.')
  }

  async delete(turma: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
