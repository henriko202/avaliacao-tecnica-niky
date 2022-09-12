import { ITitulacaoDTO } from '../../dtos/ITitulacaoDTO'
import { Titulacao } from '../../entities/titulacao'
import { ITitulacoesRepository } from '../titulacao-repository'

export class InMemoryTitulacaoRepository implements ITitulacoesRepository {
  async create(titulacao: ITitulacaoDTO): Promise<Titulacao> {
    throw new Error('Method not implemented.')
  }

  async save(titulacao: ITitulacaoDTO): Promise<Titulacao> {
    throw new Error('Method not implemented.')
  }

  async findById(id: number): Promise<Titulacao | null> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Titulacao[]> {
    throw new Error('Method not implemented.')
  }

  async delete(titulacao: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
