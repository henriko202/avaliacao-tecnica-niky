import prisma from '../../../database/prisma'
import { IAlunoDTO } from '../../../dtos/IAlunoDTO'
import { Aluno } from '../../../entities/aluno'
import { EnumPessoa } from '../../../entities/pessoa'
import { IAlunosRepository } from '../../../repositories/alunos-repository'
import { toDate } from '../../../utils/toDate'

// Isso daqui está um pouco errado e feio, mas infelizmente não terei tempo de fazer do jeito certo
export class AlunosRepository implements IAlunosRepository {
  async create(aluno: IAlunoDTO): Promise<Aluno> {
    const pessoaCreated = await prisma.pessoas.create({
      data: {
        nome: aluno.nome,
        data_nascimento: toDate(aluno.data_nascimento),
        tipo: EnumPessoa.ALUNO,
      },
    })

    const alunoCreated = await prisma.alunos.create({
      data: {
        id_pessoa: pessoaCreated.id,
        data_matricula: toDate(aluno.data_matricula),
        altura: +aluno.altura,
        peso: +aluno.peso,
      },
    })

    return new Aluno({
      ...alunoCreated,
      data_nascimento: pessoaCreated.data_nascimento,
      tipo: EnumPessoa[pessoaCreated.tipo],
      nome: pessoaCreated.nome,
    })
  }

  async save(id: number, aluno: IAlunoDTO): Promise<Aluno> {
    const alunoAntigo = await prisma.alunos.findFirst({
      where: {
        cod_matricula: +id,
      },
      select: {
        pessoas: {
          select: {
            id: true,
          },
        },
      },
    })

    if (!alunoAntigo) {
      throw new Error('Aluno não encontrado')
    }

    const pessoaUpdated = await prisma.pessoas.update({
      where: {
        id: +alunoAntigo.pessoas.id,
      },
      data: {
        nome: aluno.nome,
        data_nascimento: toDate(aluno.data_nascimento),
        tipo: EnumPessoa.ALUNO,
      },
    })

    const alunoUpdated = await prisma.alunos.update({
      where: {
        cod_matricula: +id,
      },
      include: {
        pessoas: true,
      },
      data: {
        data_matricula: toDate(aluno.data_matricula),
        altura: +aluno.altura,
        peso: +aluno.peso,
      },
    })

    return new Aluno({
      ...alunoUpdated,
      data_nascimento: pessoaUpdated.data_nascimento,
      tipo: EnumPessoa[pessoaUpdated.tipo],
      nome: pessoaUpdated.nome,
    })
  }

  async findByCodMatricula(cod_matricula: number): Promise<Aluno | null> {
    const aluno = await prisma.alunos.findFirst({
      where: {
        cod_matricula: +cod_matricula,
      },
      include: {
        pessoas: true,
      },
    })

    if (!aluno) {
      return null
    }

    const alunoRes = new Aluno({
      ...aluno,
      data_nascimento: aluno.pessoas.data_nascimento,
      tipo: EnumPessoa[aluno.pessoas.tipo],
      nome: aluno.pessoas.nome,
    })

    return alunoRes
  }

  async findAll(): Promise<Aluno[]> {
    const res: Aluno[] = []

    const alunos = await prisma.alunos.findMany({
      include: {
        pessoas: true,
      },
    })

    alunos.forEach((aluno) => {
      res.push(
        new Aluno({
          ...aluno,
          data_nascimento: aluno.pessoas.data_nascimento,
          tipo: EnumPessoa[aluno.pessoas.tipo],
          nome: aluno.pessoas.nome,
        }),
      )
    })

    return res
  }

  async delete(cod_matricula: number): Promise<void> {
    const aluno = await prisma.alunos.findFirst({
      where: {
        cod_matricula,
      },
      select: {
        pessoas: {
          select: {
            id: true,
          },
        },
      },
    })

    if (!aluno) {
      throw new Error('Aluno não encontrado')
    }

    await prisma.pessoas.delete({
      where: {
        id: aluno.pessoas.id,
      },
    })
  }
}
