import { IPresencaDTO } from '../../dtos/IPresencaDTO'
import { Presenca } from '../../entities/presenca'
import { IPresencasRepository } from '../../repositories/presenca-repository'

type PresencaResponse = Presenca

export class PresencaService {
  constructor(private presencasRepository: IPresencasRepository) {}

  async handleCreate(presenca: IPresencaDTO): Promise<PresencaResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<PresencaResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<PresencaResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(presenca: IPresencaDTO): Promise<PresencaResponse> {
    throw new Error('Method not implemented.')
  }
}
