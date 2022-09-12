import { ITitulacaoDTO } from '../dtos/ITitulacaoDTO'
import { Titulacao } from '../entities/titulacao'

export interface ITitulacoesRepository {
  create(titulacao: ITitulacaoDTO): Promise<Titulacao>
  save(titulacao: ITitulacaoDTO): Promise<Titulacao>
  findById(id: number): Promise<Titulacao | null>
  findAll(): Promise<Titulacao[]>
  delete(id: number): Promise<void>
}
