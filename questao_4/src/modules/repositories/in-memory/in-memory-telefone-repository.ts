import { ITelefoneDTO } from '../../dtos/ITelefoneDTO'
import { Telefone } from '../../entities/telefone'
import { ITelefonesRepository } from '../telefone-repository'

export class InMemoryTelefoneRepository implements ITelefonesRepository {
  async create(telefone: ITelefoneDTO): Promise<Telefone> {
    throw new Error('Method not implemented.')
  }

  async save(telefone: ITelefoneDTO): Promise<Telefone> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Telefone | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Telefone[]> {
    throw new Error('Method not implemented.')
  }

  async delete(telefone: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
