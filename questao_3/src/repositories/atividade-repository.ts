import { Atividade } from '../entities/atividade'

export interface AtividadesRepository {
  create(atividade: Atividade): Promise<Atividade>
  save(atividade: Atividade): Promise<Atividade>
  findById(id: number): Promise<Atividade | null>
  findAll(): Promise<Atividade[]>
  delete(id: number): Promise<void>
}
