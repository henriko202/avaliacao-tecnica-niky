import { ITurmaDTO } from '../../dtos/ITurmaDTO'
import { Turma } from '../../entities/turma'
import { ITurmasRepository } from '../../repositories/turma-repository'

type TurmaResponse = Turma

export class TurmaService {
  constructor(private turmasRepository: ITurmasRepository) {}

  async handleCreate(turma: ITurmaDTO): Promise<TurmaResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<TurmaResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<TurmaResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(id: number, turma: ITurmaDTO): Promise<TurmaResponse> {
    throw new Error('Method not implemented.')
  }
}
