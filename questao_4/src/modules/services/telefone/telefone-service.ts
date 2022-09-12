import { ITelefoneDTO } from '../../dtos/ITelefoneDTO'
import { Telefone } from '../../entities/telefone'
import { ITelefonesRepository } from '../../repositories/telefone-repository'
import { validate } from '../../utils/validate'

function handleValidate(telefone: ITelefoneDTO): void {
  validate(telefone.telefone.length < 3, 'Numero não pode ter menos de 3 caracteres')
  validate(telefone.whatsapp === undefined, 'Whatsapp não pode ser nulo')
  validate(telefone.whatsapp === null, 'Whatsapp não pode ser nulo')
  validate(telefone.endereco === undefined, 'Endereco não pode ser nulo')
  validate(telefone.endereco === null, 'Endereco não pode ser nulo')
}

type TelefoneResponse = Telefone

export class TelefoneService {
  constructor(private telefonesRepository: ITelefonesRepository) {}

  async handleCreate(telefone: ITelefoneDTO): Promise<TelefoneResponse> {
    handleValidate(telefone)

    const newTelefone = await this.telefonesRepository.create(telefone)

    return newTelefone
  }

  async handleFindAll(): Promise<TelefoneResponse[]> {
    const telefones = await this.telefonesRepository.findAll()

    return telefones
  }

  async handleFindById(id: number): Promise<TelefoneResponse | null> {
    const telefone = await this.telefonesRepository.findById(id)

    return telefone
  }

  async handleDelete(id: number): Promise<void> {
    const telefone = await this.telefonesRepository.findById(id)

    if (!telefone) {
      throw new Error('Telefone não encontrado')
    }

    await this.telefonesRepository.delete(id)
  }

  async handleUpdate(id: number, telefone: ITelefoneDTO): Promise<TelefoneResponse> {
    handleValidate(telefone)

    const telefoneUpdated = await this.telefonesRepository.save(id, telefone)

    return telefoneUpdated
  }
}
