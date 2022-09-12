import { IPessoaDTO } from '../../dtos/IPessoaDTO'
import { Pessoa } from '../../entities/pessoa'
import { IPessoasRepository } from '../../repositories/pessoa-repository'

type PessoaResponse = Pessoa

export class MatriculaService {
  constructor(private pessoasRepository: IPessoasRepository) {}

  async handleCreate(pessoa: IPessoaDTO): Promise<PessoaResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<PessoaResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<PessoaResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(pessoa: IPessoaDTO): Promise<PessoaResponse> {
    throw new Error('Method not implemented.')
  }
}
