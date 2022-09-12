import { IAlunoDTO } from '../../dtos/IAlunoDTO'
import { Aluno } from '../../entities/aluno'
import { IAlunosRepository } from '../alunos-repository'

export class InMemoryAlunoRepository implements IAlunosRepository {
  private alunos: Aluno[] = []

  findAll(): Promise<Aluno[]> {
    return Promise.resolve(this.alunos)
  }

  delete(aluno: number): Promise<void> {
    const id = aluno
    const index = this.alunos.findIndex((a) => a.cod_matricula === id)

    if (index === -1) {
      throw new Error('Aluno não encontrado')
    }

    this.alunos.splice(index, 1)

    return Promise.resolve()
  }

  async create({
    cod_matricula,
    data_matricula,
    altura,
    peso,
    nome,
    tipo,
    data_nascimento,
    pessoa_id,
  }: IAlunoDTO): Promise<Aluno> {
    const id = cod_matricula
    const exists = await this.findByCodMatricula(id)

    const newAluno = new Aluno({
      cod_matricula,
      data_matricula,
      altura,
      peso,
      nome,
      tipo,
      data_nascimento,
      pessoa_id,
    })

    if (exists) {
      throw new Error('Aluno já existe')
    }

    this.alunos.push(newAluno)

    return newAluno
  }

  async save({
    cod_matricula,
    data_matricula,
    altura,
    peso,
    nome,
    tipo,
    data_nascimento,
    pessoa_id,
  }: IAlunoDTO): Promise<Aluno> {
    const index = this.alunos.findIndex((a) => a.cod_matricula === cod_matricula)

    if (index === -1) {
      throw new Error('Aluno não encontrado')
    }

    const alunoAtualizado = new Aluno({
      cod_matricula,
      data_matricula,
      altura,
      peso,
      nome,
      tipo,
      data_nascimento,
      pessoa_id,
    })

    this.alunos[index] = alunoAtualizado

    return this.alunos[index]
  }

  async findByCodMatricula(cod_matricula: number): Promise<Aluno | null> {
    const aluno = this.alunos.find((a) => a.cod_matricula === cod_matricula)

    if (!aluno) {
      return null
    }

    return aluno
  }
}
