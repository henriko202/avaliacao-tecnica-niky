import { IInstrutorDTO } from '../../dtos/IInstrutorDTO'
import { Instrutor } from '../../entities/instrutor'
import { EnumPessoa } from '../../entities/pessoa'
import { IInstrutoresRepository } from '../../repositories/instrutor-repository'
import { validate } from '../../utils/validate'

type InstrutorResponse = Instrutor

function handleValidate(instrutor: IInstrutorDTO): void {
  validate(instrutor.nome.length < 3, 'Nome não pode ter menos de 3 caracteres')
  validate(instrutor.rg.length < 9, 'RG não pode ter menos de 9 caracteres')
  validate(instrutor.data_nascimento > new Date(), 'Data de nascimento não pode ser maior que a data atual')
  validate(
    instrutor.tipo && instrutor.tipo !== EnumPessoa.INSTRUTOR,
    'Tipo de pessoa não pode ser diferente de instrutor',
  )
}

export class InstrutorService {
  constructor(private instrutoresRepository: IInstrutoresRepository) {}

  async handleCreate(instrutor: IInstrutorDTO): Promise<InstrutorResponse> {
    handleValidate(instrutor)

    const newInstrutor = await this.instrutoresRepository.create(instrutor)

    return newInstrutor
  }

  async handleFindAll(): Promise<InstrutorResponse[]> {
    const instrutores = await this.instrutoresRepository.findAll()

    return instrutores
  }

  async handleFindById(id: number): Promise<InstrutorResponse | null> {
    const instrutor = await this.instrutoresRepository.findById(id)

    return instrutor
  }

  async handleDelete(id: number): Promise<void> {
    const instrutor = await this.instrutoresRepository.findById(id)

    if (!instrutor) {
      throw new Error('Instrutor não encontrado')
    }

    await this.instrutoresRepository.delete(instrutor.id)
  }

  async handleUpdate(id: number, instrutor: IInstrutorDTO): Promise<InstrutorResponse> {
    const instrutor_antigo = await this.instrutoresRepository.findById(id)

    if (!instrutor_antigo) {
      throw new Error('Instrutor não encontrado')
    }

    handleValidate(instrutor)

    const newInstrutor = await this.instrutoresRepository.save(id, instrutor)

    return newInstrutor
  }
}
