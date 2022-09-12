import { IInstrutorDTO } from '../dtos/IInstrutorDTO'
import { Instrutor } from '../entities/instrutor'

export interface IInstrutoresRepository {
  create(instrutor: IInstrutorDTO): Promise<Instrutor>
  save(id: number, instrutor: IInstrutorDTO): Promise<Instrutor>
  findById(id: number): Promise<Instrutor | null>
  findAll(): Promise<Instrutor[]>
  delete(id: number): Promise<void>
}
