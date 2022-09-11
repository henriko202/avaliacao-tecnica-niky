import { Pessoa } from '../entities/pessoa'

export interface PessoasRepository {
  create(pessoa: Pessoa): Promise<Pessoa>
  save(pessoa: Pessoa): Promise<Pessoa>
  findById(id: number): Promise<Pessoa | null>
  findAll(): Promise<Pessoa[]>
  delete(id: number): Promise<void>
}
