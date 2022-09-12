import { IInstrutorDTO } from '../../dtos/IInstrutorDTO'
import { Instrutor } from '../../entities/instrutor'
import { IInstrutoresRepository } from '../instrutor-repository'

export class InMemoryInstrutorRepository implements IInstrutoresRepository {
  async create(instrutor: IInstrutorDTO): Promise<Instrutor> {
    throw new Error('Method not implemented.')
  }

  async save(instrutor: IInstrutorDTO): Promise<Instrutor> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Instrutor | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Instrutor[]> {
    throw new Error('Method not implemented.')
  }

  async delete(instrutor: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
