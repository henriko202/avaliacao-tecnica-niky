import { IMatriculaDTO } from '../dtos/IMatriculaDTO'
import { Matricula } from '../entities/matricula'

export interface IMatriculasRepository {
  create(matricula: IMatriculaDTO): Promise<Matricula>
  save(id: number, matricula: IMatriculaDTO): Promise<Matricula>
  findById(id: number): Promise<Matricula | null>
  findAll(): Promise<Matricula[]>
  delete(id: number): Promise<void>
}
