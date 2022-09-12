import { IPessoaDTO } from '../../dtos/IPessoaDTO'
import { Pessoa } from '../../entities/pessoa'
import { IPessoasRepository } from '../../repositories/pessoa-repository'
import { validate } from '../../utils/validate'

function handleValidate(pessoa: IPessoaDTO): void {
  validate(pessoa.nome.length < 3, 'Nome não pode ter menos de 3 caracteres')
  validate(pessoa.data_nascimento > new Date(), 'Data de nascimento não pode ser maior que a data atual')
}

type PessoaResponse = Pessoa

export class PessoaService {
  constructor(private pessoasRepository: IPessoasRepository) {}

  async handleCreate(pessoa: IPessoaDTO): Promise<PessoaResponse> {
    handleValidate(pessoa)

    const newPessoa = await this.pessoasRepository.create(pessoa)

    return newPessoa
  }

  async handleFindAll(): Promise<PessoaResponse[]> {
    const pessoas = await this.pessoasRepository.findAll()

    return pessoas
  }

  async handleFindById(id: number): Promise<PessoaResponse | null> {
    const pessoa = await this.pessoasRepository.findById(id)

    return pessoa
  }

  async handleDelete(id: number): Promise<void> {
    const pessoa = await this.pessoasRepository.findById(id)

    if (!pessoa) {
      throw new Error('Pessoa não encontrada')
    }

    await this.pessoasRepository.delete(id)
  }

  async handleUpdate(id: number, pessoa: IPessoaDTO): Promise<PessoaResponse> {
    const pessoa_antiga = await this.pessoasRepository.findById(id)

    if (!pessoa_antiga) {
      throw new Error('Pessoa não encontrada')
    }

    handleValidate(pessoa)

    const newPessoa = await this.pessoasRepository.save(id, pessoa)

    return newPessoa
  }
}
