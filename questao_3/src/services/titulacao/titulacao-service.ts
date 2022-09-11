import { ITitulacaoDTO } from '../../dtos/ITitulacaoDTO'
import { Titulacao } from '../../entities/titulacao'
import { TitulacoesRepository } from '../../repositories/titulacao-repository'

type TitulacaoResponse = Titulacao

export class TitulacaoService {
  constructor(private titulacoesRepository: TitulacoesRepository) {}

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

  async handleUpdate(titulacao: ITitulacaoDTO): Promise<TitulacaoResponse> {
    throw new Error('Method not implemented.')
  }
}
