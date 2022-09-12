import { ITitulacaoDTO } from '../../dtos/ITitulacaoDTO'
import { Titulacao } from '../../entities/titulacao'
import { ITitulacoesRepository } from '../../repositories/titulacao-repository'

type TitulacaoResponse = Titulacao

export class TitulacaoService {
  constructor(private titulacoesRepository: ITitulacoesRepository) {}

  async handleCreate(titulacao: ITitulacaoDTO): Promise<TitulacaoResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<TitulacaoResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<TitulacaoResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(id: number, titulacao: ITitulacaoDTO): Promise<TitulacaoResponse> {
    throw new Error('Method not implemented.')
  }
}
