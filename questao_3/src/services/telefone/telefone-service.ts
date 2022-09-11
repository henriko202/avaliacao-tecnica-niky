import { ITelefoneDTO } from '../../dtos/ITelefoneDTO'
import { Telefone } from '../../entities/telefone'
import { TelefonesRepository } from '../../repositories/telefone-repository'

type TelefoneResponse = Telefone

export class TelefoneService {
  constructor(private telefonesRepository: TelefonesRepository) {}

  async handleCreate(telefone: ITelefoneDTO): Promise<TelefoneResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<TelefoneResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<TelefoneResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(telefone: ITelefoneDTO): Promise<TelefoneResponse> {
    throw new Error('Method not implemented.')
  }
}
