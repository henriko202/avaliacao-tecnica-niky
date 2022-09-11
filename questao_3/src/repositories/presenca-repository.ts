import { Presenca } from '../entities/presenca'

export interface PresencasRepository {
  create(presenca: Presenca): Promise<Presenca>
  save(presenca: Presenca): Promise<Presenca>
  findById(id: number): Promise<Presenca | null>
  findAll(): Promise<Presenca[]>
  delete(id: number): Promise<void>
}
