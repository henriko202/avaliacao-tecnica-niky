import { IPresencaDTO } from '../../dtos/IPresencaDTO'
import { Presenca } from '../../entities/presenca'
import { IPresencasRepository } from '../../repositories/presenca-repository'
import { validate } from '../../utils/validate'

function handleValidate(presenca: IPresencaDTO): void {
  validate(presenca.matricula === null, 'Matrícula do aluno não pode ser nulo')
  validate(presenca.data === null, 'Data não pode ser nula')
  validate(presenca.data > new Date(), 'Data não pode ser maior que a data atual')
  validate(presenca.presente === null, 'Presença não pode ser nula')
}

type PresencaResponse = Presenca

export class PresencaService {
  constructor(private presencasRepository: IPresencasRepository) {}

  async handleCreate(presenca: IPresencaDTO): Promise<PresencaResponse> {
    const newPresenca = await this.presencasRepository.create(presenca)

    return newPresenca
  }

  async handleFindAll(): Promise<PresencaResponse[]> {
    const presencas = await this.presencasRepository.findAll()

    return presencas
  }

  async handleFindById(id: number): Promise<PresencaResponse | null> {
    const presenca = await this.presencasRepository.findById(id)

    return presenca
  }

  async handleDelete(id: number): Promise<void> {
    const presenca = await this.presencasRepository.findById(id)

    if (!presenca) {
      throw new Error('Presença não encontrada')
    }

    await this.presencasRepository.delete(id)
  }

  async handleUpdate(id: number, presenca: IPresencaDTO): Promise<PresencaResponse> {
    const presenca_antiga = await this.presencasRepository.findById(id)

    if (!presenca_antiga) {
      throw new Error('Presença não encontrada')
    }

    handleValidate(presenca)

    const newPresenca = await this.presencasRepository.save(id, presenca)

    return newPresenca
  }
}
