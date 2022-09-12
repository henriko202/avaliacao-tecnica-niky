import dayjs from 'dayjs'

import { IAlunoDTO } from '../../dtos/IAlunoDTO'
import { Aluno } from '../../entities/aluno'
import { EnumPessoa } from '../../entities/pessoa'
import { IAlunosRepository } from '../../repositories/alunos-repository'
import { validate } from '../../utils/validate'

type AlunoResponse = Aluno

function handleValidate(aluno: IAlunoDTO): void {
  const dataMatricula = dayjs(aluno.data_matricula, 'DD/MM/YYYY')
  const dataNascimento = dayjs(aluno.data_nascimento, 'DD/MM/YYYY')

  validate(aluno.data_matricula > new Date(), 'Data de matrícula não pode ser maior que a data atual')
  validate(aluno.data_nascimento > new Date(), 'Data de nascimento não pode ser maior que a data atual')
  validate(dataMatricula.isBefore(dataNascimento), 'Data de matrícula não pode ser menor que a data de nascimento')
  validate(aluno.altura <= 0, 'Altura não pode ser menor ou igual a zero')
  validate(aluno.peso <= 0, 'Peso não pode ser menor ou igual a zero')
  validate(aluno.tipo && aluno.tipo !== EnumPessoa.ALUNO, 'Tipo de pessoa não pode ser diferente de aluno')
  validate(aluno.nome.length < 3, 'Nome não pode ter menos de 3 caracteres')
}

export class AlunoService {
  constructor(private alunosRepository: IAlunosRepository) {}

  async handleCreate(aluno: IAlunoDTO): Promise<AlunoResponse> {
    handleValidate(aluno)

    const newAluno = await this.alunosRepository.create(aluno)

    return newAluno
  }

  async handleFindAll(): Promise<AlunoResponse[]> {
    const alunos = await this.alunosRepository.findAll()

    return alunos
  }

  async handleFindById(id: number): Promise<AlunoResponse | null> {
    const aluno = await this.alunosRepository.findByCodMatricula(id)

    return aluno
  }

  async handleDelete(id: number): Promise<void> {
    const aluno = await this.alunosRepository.findByCodMatricula(id)

    // Aqui não dá pra usar a função validate porque o typescript não percebe
    // que se aluno for null, o código não vai continuar
    // validate(!aluno, 'Aluno não encontrado')
    if (!aluno) {
      throw new Error('Aluno não encontrado')
    }

    await this.alunosRepository.delete(aluno.cod_matricula)
  }

  async handleUpdate(id: number, aluno: IAlunoDTO): Promise<AlunoResponse> {
    const aluno_antigo = await this.alunosRepository.findByCodMatricula(id)

    validate(!aluno_antigo, 'Aluno não encontrado')
    handleValidate(aluno)

    const created = await this.alunosRepository.save(id, aluno)

    return created
  }
}
