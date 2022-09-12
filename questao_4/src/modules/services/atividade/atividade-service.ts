import { IAtividadeDTO } from '../../dtos/IAtividadeDTO'
import { Atividade } from '../../entities/atividade'
import { IAtividadesRepository } from '../../repositories/atividade-repository'
import { validate } from '../../utils/validate'

type AtividadeResponse = Atividade

function handleValidate(atividade: IAtividadeDTO): void {
  validate(atividade.nome.length < 3, 'Nome não pode ter menos de 3 caracteres')
}

export class AtividadeService {
  //  Açúcar sintático para:
  //  private atividadesRepository: AtividadesRepository
  //  constructor(atividadesRepository: AtividadesRepository) {
  //    this.atividadesRepository = atividadesRepository
  //  }
  constructor(private atividadesRepository: IAtividadesRepository) {}

  async handleCreate(atividade: IAtividadeDTO): Promise<AtividadeResponse> {
    handleValidate(atividade)

    const newAtividade = await this.atividadesRepository.create(atividade)

    return newAtividade
  }

  async handleFindAll(): Promise<AtividadeResponse[]> {
    const atividades = await this.atividadesRepository.findAll()

    return atividades
  }

  async handleFindById(id: number): Promise<AtividadeResponse | null> {
    const atividade = await this.atividadesRepository.findById(id)

    return atividade
  }

  async handleDelete(id: number): Promise<void> {
    const atividade = await this.atividadesRepository.findById(id)

    if (!atividade) {
      throw new Error('Atividade não encontrada')
    }

    await this.atividadesRepository.delete(atividade.id)
  }

  async handleUpdate(id: number, atividade: IAtividadeDTO): Promise<AtividadeResponse> {
    const atividade_antiga = await this.atividadesRepository.findById(id)

    if (!atividade_antiga) {
      throw new Error('Atividade não encontrada')
    }

    handleValidate(atividade)

    const newAtividade = await this.atividadesRepository.save(id, atividade)

    return newAtividade
  }
}
