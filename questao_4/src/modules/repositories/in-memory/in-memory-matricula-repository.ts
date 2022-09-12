import { IMatriculaDTO } from '../../dtos/IMatriculaDTO'
import { Matricula } from '../../entities/matricula'
import { IMatriculasRepository } from '../matricula-repository'

export class InMemoryMatriculaRepository implements IMatriculasRepository {
  async create(matricula: IMatriculaDTO): Promise<Matricula> {
    throw new Error('Method not implemented.')
  }

  async save(matricula: IMatriculaDTO): Promise<Matricula> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Matricula | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Matricula[]> {
    throw new Error('Method not implemented.')
  }

  async delete(matricula: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
