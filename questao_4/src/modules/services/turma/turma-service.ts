import { ITurmaDTO } from '../../dtos/ITurmaDTO'
import { Turma } from '../../entities/turma'
import { ITurmasRepository } from '../../repositories/turma-repository'
import { validate } from '../../utils/validate'

function handleValidate(turma: ITurmaDTO): void {
  validate(turma.tipo_atividade === null, 'Tipo de atividade não pode ser nulo')
  validate(turma.tipo_atividade === undefined, 'Tipo de atividade não pode ser nulo')
  validate(turma.instrutor === null, 'Professor não pode ser nulo')
  validate(turma.instrutor === undefined, 'Professor não pode ser nulo')
  validate(turma.monitor === null, 'Monitor não pode ser nulo')
  validate(turma.monitor === undefined, 'Monitor não pode ser nulo')
  validate(turma.data_inicial === null, 'Data inicial não pode ser nula')
  validate(turma.data_inicial === undefined, 'Data inicial não pode ser nula')
  if (turma.data_final) {
    validate(turma.data_final < turma.data_inicial, 'Data final não pode ser menor que a data inicial')
    validate(turma.data_final < new Date(), 'Data final não pode ser menor que a data atual')
  }
  validate(turma.qtde_max_alunos < 1, 'Quantidade máxima de alunos não pode ser menor que 1')
  validate(turma.qtde_max_alunos > 100, 'Quantidade máxima de alunos não pode ser maior que 100')
  validate(turma.tipo_atividade === null || turma.tipo_atividade === undefined, 'Tipo de atividade não pode ser nulo')
}

type TurmaResponse = Turma

export class TurmaService {
  constructor(private turmasRepository: ITurmasRepository) {}

  async handleCreate(turma: ITurmaDTO): Promise<TurmaResponse> {
    handleValidate(turma)

    const newTurma = await this.turmasRepository.create(turma)

    return newTurma
  }

  async handleFindAll(): Promise<TurmaResponse[]> {
    const turmas = await this.turmasRepository.findAll()

    return turmas
  }

  async handleFindById(id: number): Promise<TurmaResponse | null> {
    const turma = await this.turmasRepository.findById(id)

    return turma
  }

  async handleDelete(id: number): Promise<void> {
    const turma = await this.turmasRepository.findById(id)

    if (!turma) {
      throw new Error('Turma não encontrada')
    }

    await this.turmasRepository.delete(id)
  }

  async handleUpdate(id: number, turma: ITurmaDTO): Promise<TurmaResponse> {
    const turma_antiga = await this.turmasRepository.findById(id)

    if (!turma_antiga) {
      throw new Error('Turma não encontrada')
    }

    handleValidate(turma)

    const newTurma = await this.turmasRepository.save(id, turma)

    return newTurma
  }
}
