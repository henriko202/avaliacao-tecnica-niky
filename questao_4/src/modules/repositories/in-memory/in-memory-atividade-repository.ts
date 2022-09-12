import { IAtividadeDTO } from '../../dtos/IAtividadeDTO'
import { Atividade } from '../../entities/atividade'
import { IAtividadesRepository } from '../atividade-repository'

export class InMemoryAtividadeRepository implements IAtividadesRepository {
  async create(atividade: IAtividadeDTO): Promise<Atividade> {
    throw new Error('Method not implemented.')
  }

  async save(atividade: IAtividadeDTO): Promise<Atividade> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Atividade | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Atividade[]> {
    throw new Error('Method not implemented.')
  }

  async delete(atividade: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
