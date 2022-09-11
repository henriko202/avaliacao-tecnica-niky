import { IMatriculaDTO } from '../../dtos/IMatriculaDTO'
import { Matricula } from '../../entities/matricula'
import { MatriculasRepository } from '../../repositories/matricula-repository'

type MatriculaResponse = Matricula

export class PessoaService {
  constructor(private matriculasRepository: MatriculasRepository) {}

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

  async handleUpdate(matricula: IMatriculaDTO): Promise<MatriculaResponse> {
    throw new Error('Method not implemented.')
  }
}
