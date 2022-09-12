import { IPresencaDTO } from '../../dtos/IPresencaDTO'
import { Presenca } from '../../entities/presenca'
import { IPresencasRepository } from '../presenca-repository'

export class InMemoryPresencaRepository implements IPresencasRepository {
  async create(presenca: IPresencaDTO): Promise<Presenca> {
    throw new Error('Method not implemented.')
  }

  async save(presenca: IPresencaDTO): Promise<Presenca> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Presenca | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Presenca[]> {
    throw new Error('Method not implemented.')
  }

  async delete(presenca: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
