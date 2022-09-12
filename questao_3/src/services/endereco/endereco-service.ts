import { IAtividadeDTO } from '../../dtos/IAtividadeDTO'
import { Atividade } from '../../entities/atividade'
import { IAtividadesRepository } from '../../repositories/atividade-repository'

type AtividadeResponse = Atividade

export class EnderecoService {
  //  Açúcar sintático para:
  //  private atividadesRepository: AtividadesRepository
  //  constructor(atividadesRepository: AtividadesRepository) {
  //    this.atividadesRepository = atividadesRepository
  //  }
  constructor(private atividadesRepository: IAtividadesRepository) {}

  async handleCreate(atividade: IAtividadeDTO): Promise<AtividadeResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<AtividadeResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<AtividadeResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(atividade: IAtividadeDTO): Promise<AtividadeResponse> {
    throw new Error('Method not implemented.')
  }
}
