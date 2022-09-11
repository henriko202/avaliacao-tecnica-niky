import { Instrutor } from '../entities/instrutor'

export interface InstrutoresRepository {
  create(instrutor: Instrutor): Promise<Instrutor>
  save(instrutor: Instrutor): Promise<Instrutor>
  findById(id: number): Promise<Instrutor | null>
  findAll(): Promise<Instrutor[]>
  delete(id: number): Promise<void>
}
