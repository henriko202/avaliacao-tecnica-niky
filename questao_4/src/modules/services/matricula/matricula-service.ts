import { IMatriculaDTO } from '../../dtos/IMatriculaDTO'
import { Matricula } from '../../entities/matricula'
import { IMatriculasRepository } from '../../repositories/matricula-repository'
import { validate } from '../../utils/validate'

function handleValidate(matricula: IMatriculaDTO): void {
  validate(matricula.aluno === null, 'Aluno não pode ser nulo')
  validate(matricula.turma === null, 'Atividade não pode ser nula')
}

type MatriculaResponse = Matricula

export class MatriculaService {
  constructor(private matriculasRepository: IMatriculasRepository) {}

  async handleCreate(matricula: IMatriculaDTO): Promise<MatriculaResponse> {
    handleValidate(matricula)

    const newMatricula = await this.matriculasRepository.create(matricula)

    return newMatricula
  }

  async handleFindAll(): Promise<MatriculaResponse[]> {
    const matriculas = await this.matriculasRepository.findAll()

    return matriculas
  }

  async handleFindById(id: number): Promise<MatriculaResponse | null> {
    const matricula = await this.matriculasRepository.findById(id)

    return matricula
  }

  async handleDelete(id: number): Promise<void> {
    const matricula = await this.matriculasRepository.findById(id)

    if (!matricula) {
      throw new Error('Matricula não encontrada')
    }

    await this.matriculasRepository.delete(id)
  }

  async handleUpdate(id: number, matricula: IMatriculaDTO): Promise<MatriculaResponse> {
    const matricula_antiga = await this.matriculasRepository.findById(id)

    if (!matricula_antiga) {
      throw new Error('Matricula não encontrada')
    }

    handleValidate(matricula)

    const newMatricula = await this.matriculasRepository.save(id, matricula)

    return newMatricula
  }
}
