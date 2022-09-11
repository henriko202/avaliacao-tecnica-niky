import { Endereco } from '../entities/endereco'

export interface EnderecosRepository {
  create(endereco: Endereco): Promise<Endereco>
  save(endereco: Endereco): Promise<Endereco>
  findById(id: number): Promise<Endereco | null>
  findAll(): Promise<Endereco[]>
  delete(id: number): Promise<void>
}
