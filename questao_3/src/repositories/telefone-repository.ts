import { Telefone } from '../entities/telefone'

export interface TelefonesRepository {
  create(telefone: Telefone): Promise<Telefone>
  save(telefone: Telefone): Promise<Telefone>
  findById(id: number): Promise<Telefone | null>
  findAll(): Promise<Telefone[]>
  delete(telefone: string): Promise<void>
}
