import { IPresencaDTO } from '../dtos/IPresencaDTO'
import { Presenca } from '../entities/presenca'

export interface IPresencasRepository {
  create(presenca: IPresencaDTO): Promise<Presenca>
  save(id: number, presenca: IPresencaDTO): Promise<Presenca>
  findById(id: number): Promise<Presenca | null>
  findAll(): Promise<Presenca[]>
  delete(id: number): Promise<void>
}
