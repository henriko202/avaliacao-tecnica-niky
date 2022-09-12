import { IPessoaDTO } from '../../dtos/IPessoaDTO'
import { Pessoa } from '../../entities/pessoa'
import { IPessoasRepository } from '../pessoa-repository'

export class InMemoryPessoaRepository implements IPessoasRepository {
  async create(pessoa: IPessoaDTO): Promise<Pessoa> {
    throw new Error('Method not implemented.')
  }

  async save(pessoa: IPessoaDTO): Promise<Pessoa> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Pessoa | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Pessoa[]> {
    throw new Error('Method not implemented.')
  }

  async delete(pessoa: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
