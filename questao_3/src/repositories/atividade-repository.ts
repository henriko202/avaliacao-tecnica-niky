import { IAtividadeDTO } from '../dtos/IAtividadeDTO'
import { Atividade } from '../entities/atividade'

export interface IAtividadesRepository {
  create(atividade: IAtividadeDTO): Promise<Atividade>
  save(id: number, atividade: IAtividadeDTO): Promise<Atividade>
  findById(id: number): Promise<Atividade | null>
  findAll(): Promise<Atividade[]>
  delete(id: number): Promise<void>
}
