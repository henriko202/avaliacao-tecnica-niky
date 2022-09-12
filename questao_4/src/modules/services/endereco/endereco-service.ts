import { IEnderecoDTO } from '../../dtos/IEnderecoDTO'
import { Endereco } from '../../entities/endereco'
import { IEnderecosRepository } from '../../repositories/endereco-repository'
import { validate } from '../../utils/validate'

type EnderecoResponse = Endereco

function handleValidate(endereco: IEnderecoDTO): void {
  validate(endereco.cep.length < 9, 'CEP não pode ter menos de 9 caracteres')
  validate(endereco.logradouro.length < 3, 'Logradouro não pode ter menos de 3 caracteres')
  validate(endereco.bairro.length < 3, 'Bairro não pode ter menos de 3 caracteres')
  validate(endereco.cidade.length < 3, 'Cidade não pode ter menos de 3 caracteres')
  validate(endereco.estado.length < 2, 'Estado não pode ter menos de 2 caracteres')
  validate(endereco.estado.length > 2, 'Estado não pode ter mais de 2 caracteres')
  validate(endereco.numero.length < 1, 'Número não pode ter menos de 1 caracteres')
}

export class EnderecoService {
  //  Açúcar sintático para:
  //  private enderecosRepository: EnderecosRepository
  //  constructor(enderecosRepository: EnderecosRepository) {
  //    this.enderecosRepository = enderecosRepository
  //  }
  constructor(private enderecosRepository: IEnderecosRepository) {}

  async handleCreate(endereco: IEnderecoDTO): Promise<EnderecoResponse> {
    handleValidate(endereco)

    const newEndereco = await this.enderecosRepository.create(endereco)

    return newEndereco
  }

  async handleFindAll(): Promise<EnderecoResponse[]> {
    const enderecos = await this.enderecosRepository.findAll()

    return enderecos
  }

  async handleFindById(id: number): Promise<EnderecoResponse | null> {
    const endereco = await this.enderecosRepository.findById(id)

    return endereco
  }

  async handleDelete(id: number): Promise<void> {
    const endereco = await this.enderecosRepository.findById(id)

    if (!endereco) {
      throw new Error('Endereço não encontrado')
    }

    await this.enderecosRepository.delete(endereco.id)
  }

  async handleUpdate(id: number, endereco: IEnderecoDTO): Promise<EnderecoResponse> {
    const endereco_antigo = await this.enderecosRepository.findById(id)

    if (!endereco_antigo) {
      throw new Error('Endereço não encontrado')
    }

    handleValidate(endereco)

    const newEndereco = await this.enderecosRepository.save(id, endereco)

    return newEndereco
  }
}
