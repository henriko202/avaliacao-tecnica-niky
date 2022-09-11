import { IPresencaDTO } from '../../dtos/IPresencaDTO'
import { Presenca } from '../../entities/presenca'
import { PresencasRepository } from '../../repositories/presenca-repository'

type PresencaResponse = Presenca

export class PresencaService {
  constructor(private presencasRepository: PresencasRepository) {}

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
