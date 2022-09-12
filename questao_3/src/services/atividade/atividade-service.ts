import { IEnderecoDTO } from '../../dtos/IEnderecoDTO'
import { Endereco } from '../../entities/endereco'
import { IEnderecosRepository } from '../../repositories/endereco-repository'

type EnderecoResponse = Endereco

export class AtividadeService {
  //  Açúcar sintático para:
  //  private enderecosRepository: EnderecosRepository
  //  constructor(enderecosRepository: EnderecosRepository) {
  //    this.enderecosRepository = enderecosRepository
  //  }
  constructor(private enderecosRepository: IEnderecosRepository) {}

  async handleCreate(endereco: IEnderecoDTO): Promise<EnderecoResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<EnderecoResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<EnderecoResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(endereco: IEnderecoDTO): Promise<EnderecoResponse> {
    throw new Error('Method not implemented.')
  }
}
