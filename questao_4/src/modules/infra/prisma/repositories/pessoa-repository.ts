import prisma from '../../../database/prisma'
import { IPessoaDTO } from '../../../dtos/IPessoaDTO'
import { EnumPessoa, Pessoa } from '../../../entities/pessoa'
import { IPessoasRepository } from '../../../repositories/pessoa-repository'

export class PessoasRepository implements IPessoasRepository {
  async create(pessoa: IPessoaDTO): Promise<Pessoa> {
    const pessoaCreated = await prisma.pessoas.create({
      data: {
        nome: pessoa.nome,
        data_nascimento: pessoa.data_nascimento,
        tipo: pessoa.tipo,
      },
    })

    return new Pessoa({
      ...pessoaCreated,
      data_nascimento: pessoaCreated.data_nascimento,
      tipo: EnumPessoa[pessoaCreated.tipo],
      nome: pessoaCreated.nome,
    })
  }

  async save(id: number, pessoa: IPessoaDTO): Promise<Pessoa> {
    const pessoaUpdated = await prisma.pessoas.update({
      where: {
        id: +id,
      },
      data: {
        nome: pessoa.nome,
        data_nascimento: pessoa.data_nascimento,
      },
    })

    return new Pessoa({
      ...pessoaUpdated,
      data_nascimento: pessoaUpdated.data_nascimento,
      tipo: EnumPessoa[pessoaUpdated.tipo],
      nome: pessoaUpdated.nome,
    })
  }

  async findById(id: number): Promise<Pessoa | null> {
    const pessoa = await prisma.pessoas.findUnique({
      where: {
        id: +id,
      },
    })

    if (!pessoa) {
      return null
    }

    return new Pessoa({
      ...pessoa,
      data_nascimento: pessoa.data_nascimento,
      tipo: EnumPessoa[pessoa.tipo],
      nome: pessoa.nome,
    })
  }

  async findAll(): Promise<Pessoa[]> {
    const pessoas = await prisma.pessoas.findMany()

    return pessoas.map((pessoa) => {
      return new Pessoa({
        ...pessoa,
        data_nascimento: pessoa.data_nascimento,
        tipo: EnumPessoa[pessoa.tipo],
        nome: pessoa.nome,
      })
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.pessoas.delete({
      where: {
        id: +id,
      },
    })
  }
}
