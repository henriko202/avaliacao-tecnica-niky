import { IInstrutorDTO } from '../../dtos/IInstrutorDTO'
import { Instrutor } from '../../entities/instrutor'
import { IInstrutoresRepository } from '../../repositories/instrutor-repository'

type InstrutorResponse = Instrutor

export class InstrutorService {
  constructor(private instrutoresRepository: IInstrutoresRepository) {}

  async handleCreate(instrutor: IInstrutorDTO): Promise<InstrutorResponse> {
    throw new Error('Method not implemented.')
  }

  async handleFindAll(): Promise<InstrutorResponse[]> {
    throw new Error('Method not implemented.')
  }

  async handleFindById(id: number): Promise<InstrutorResponse | null> {
    throw new Error('Method not implemented.')
  }

  async handleDelete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async handleUpdate(instrutor: IInstrutorDTO): Promise<InstrutorResponse> {
    throw new Error('Method not implemented.')
  }
}
