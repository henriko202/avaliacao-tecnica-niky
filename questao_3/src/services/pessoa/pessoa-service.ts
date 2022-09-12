import { IMatriculaDTO } from '../../dtos/IMatriculaDTO'
import { Matricula } from '../../entities/matricula'
import { IMatriculasRepository } from '../../repositories/matricula-repository'

type MatriculaResponse = Matricula

export class PessoaService {
  constructor(private matriculasRepository: IMatriculasRepository) {}

  async handleCreate(matricula: IMatriculaDTO): Promise<MatriculaResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<MatriculaResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<MatriculaResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(id: number, matricula: IMatriculaDTO): Promise<MatriculaResponse> {
    throw new Error('Method not implemented.')
  }
}
