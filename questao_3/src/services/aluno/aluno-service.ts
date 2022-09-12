import { IAlunoDTO } from '../../dtos/IAlunoDTO'
import { Aluno } from '../../entities/aluno'
import { IAlunosRepository } from '../../repositories/alunos-repository'

type AlunoResponse = Aluno

export class AlunoService {
  constructor(private alunosRepository: IAlunosRepository) {}

  async handleCreate(aluno: IAlunoDTO): Promise<AlunoResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<AlunoResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<AlunoResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(aluno: IAlunoDTO): Promise<AlunoResponse> {
    throw new Error('Method not implemented.')
  }
}
