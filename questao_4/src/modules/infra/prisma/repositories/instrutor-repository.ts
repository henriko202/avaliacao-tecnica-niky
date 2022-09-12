import prisma from '../../../database/prisma'
import { IInstrutorDTO } from '../../../dtos/IInstrutorDTO'
import { Instrutor } from '../../../entities/instrutor'
import { EnumPessoa } from '../../../entities/pessoa'
import { IInstrutoresRepository } from '../../../repositories/instrutor-repository'
import { toDate } from '../../../utils/toDate'

export class InstrutoresRepository implements IInstrutoresRepository {
  async create(instrutor: IInstrutorDTO): Promise<Instrutor> {
    const pessoaCreated = await prisma.pessoas.create({
      data: {
        nome: instrutor.nome,
        data_nascimento: toDate(instrutor.data_nascimento),
        tipo: EnumPessoa.INSTRUTOR,
      },
    })

    const instrutorCreated = await prisma.instrutores.create({
      data: {
        id_pessoa: pessoaCreated.id,
        rg: instrutor.rg,
      },
    })

    return new Instrutor({
      ...instrutorCreated,
      data_nascimento: pessoaCreated.data_nascimento,
      tipo: EnumPessoa[pessoaCreated.tipo],
      nome: pessoaCreated.nome,
    })
  }

  async save(id: number, instrutor: IInstrutorDTO): Promise<Instrutor> {
    const pessoaUpdated = await prisma.pessoas.update({
      where: {
        id: +id,
      },
      data: {
        nome: instrutor.nome,
        data_nascimento: toDate(instrutor.data_nascimento),
      },
    })

    const instrutorUpdated = await prisma.instrutores.update({
      where: {
        id: +id,
      },
      data: {
        rg: instrutor.rg,
      },
    })

    return new Instrutor({
      ...instrutorUpdated,
      data_nascimento: pessoaUpdated.data_nascimento,
      tipo: EnumPessoa[pessoaUpdated.tipo],
      nome: pessoaUpdated.nome,
    })
  }

  async findById(id: number): Promise<Instrutor | null> {
    const instrutor = await prisma.instrutores.findUnique({
      where: {
        id: +id,
      },
      include: {
        pessoas: true,
      },
    })

    if (!instrutor) {
      return null
    }

    return new Instrutor({
      ...instrutor,
      data_nascimento: instrutor.pessoas.data_nascimento,
      tipo: EnumPessoa[instrutor.pessoas.tipo],
      nome: instrutor.pessoas.nome,
    })
  }

  async findAll(): Promise<Instrutor[]> {
    const instrutores = await prisma.instrutores.findMany({
      include: {
        pessoas: true,
      },
    })

    return instrutores.map((instrutor) => {
      return new Instrutor({
        ...instrutor,
        data_nascimento: instrutor.pessoas.data_nascimento,
        tipo: EnumPessoa[instrutor.pessoas.tipo],
        nome: instrutor.pessoas.nome,
      })
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.instrutores.delete({
      where: {
        id: +id,
      },
    })
  }
}
