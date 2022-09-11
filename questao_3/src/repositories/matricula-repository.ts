import { Matricula } from '../entities/matricula'

export interface MatriculasRepository {
  create(matricula: Matricula): Promise<Matricula>
  save(matricula: Matricula): Promise<Matricula>
  findById(id: number): Promise<Matricula | null>
  findAll(): Promise<Matricula[]>
  delete(id: number): Promise<void>
}
