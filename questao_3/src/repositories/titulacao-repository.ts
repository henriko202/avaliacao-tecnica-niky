import { Titulacao } from '../entities/titulacao'

export interface TitulacoesRepository {
  create(titulacao: Titulacao): Promise<Titulacao>
  save(titulacao: Titulacao): Promise<Titulacao>
  findById(id: number): Promise<Titulacao | null>
  findAll(): Promise<Titulacao[]>
  delete(id: number): Promise<void>
}
