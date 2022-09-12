import { ITitulacaoDTO } from '../../dtos/ITitulacaoDTO'
import { Titulacao } from '../../entities/titulacao'
import { ITitulacoesRepository } from '../../repositories/titulacao-repository'
import { validate } from '../../utils/validate'

function handleValidate(titulacao: ITitulacaoDTO): void {
  validate(titulacao.curso.length < 3, 'Curso não pode ter menos de 3 caracteres')
  validate(titulacao.instituicao.length < 3, 'Instituição não pode ter menos de 3 caracteres')
  validate(titulacao.grau.length < 3, 'Grau não pode ter menos de 3 caracteres')
}

type TitulacaoResponse = Titulacao

export class TitulacaoService {
  constructor(private titulacoesRepository: ITitulacoesRepository) {}

  async handleCreate(titulacao: ITitulacaoDTO): Promise<TitulacaoResponse> {
    handleValidate(titulacao)

    const newTitulacao = await this.titulacoesRepository.create(titulacao)

    return newTitulacao
  }

  async handleFindAll(): Promise<TitulacaoResponse[]> {
    const titulacoes = await this.titulacoesRepository.findAll()

    return titulacoes
  }

  async handleFindById(id: number): Promise<TitulacaoResponse | null> {
    const titulacao = await this.titulacoesRepository.findById(id)

    return titulacao
  }

  async handleDelete(id: number): Promise<void> {
    const titulacao = await this.titulacoesRepository.findById(id)

    if (!titulacao) {
      throw new Error('Titulação não encontrada')
    }

    await this.titulacoesRepository.delete(id)
  }

  async handleUpdate(id: number, titulacao: ITitulacaoDTO): Promise<TitulacaoResponse> {
    const titulacao_antiga = await this.titulacoesRepository.findById(id)

    if (!titulacao_antiga) {
      throw new Error('Titulação não encontrada')
    }

    handleValidate(titulacao)

    const newTitulacao = await this.titulacoesRepository.save(id, titulacao)

    return newTitulacao
  }
}
