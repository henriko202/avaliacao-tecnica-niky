import { ITelefoneDTO } from '../dtos/ITelefoneDTO'
import { Telefone } from '../entities/telefone'

export interface ITelefonesRepository {
  create(telefone: ITelefoneDTO): Promise<Telefone>
  save(id: number, telefone: ITelefoneDTO): Promise<Telefone>
  findById(id: number): Promise<Telefone | null>
  findAll(): Promise<Telefone[]>
  delete(id: number): Promise<void>
}
