import prisma from '../../../database/prisma'
import { IAtividadeDTO } from '../../../dtos/IAtividadeDTO'
import { Atividade } from '../../../entities/atividade'
import { IAtividadesRepository } from '../../../repositories/atividade-repository'

export class AtividadesRepository implements IAtividadesRepository {
  async create(atividade: IAtividadeDTO): Promise<Atividade> {
    const atividadeCreated = await prisma.atividades.create({
      data: {
        nome: atividade.nome,
      },
    })

    return new Atividade({
      ...atividadeCreated,
    })
  }

  async save(id: number, atividade: IAtividadeDTO): Promise<Atividade> {
    const atividadeUpdated = await prisma.atividades.update({
      where: {
        id: +id,
      },
      data: {
        nome: atividade.nome,
      },
    })

    return new Atividade({
      ...atividadeUpdated,
    })
  }

  async findById(id: number): Promise<Atividade | null> {
    const atividade = await prisma.atividades.findFirst({
      where: {
        id: +id,
      },
    })

    if (!atividade) {
      return null
    }

    return new Atividade({
      ...atividade,
    })
  }

  async findAll(): Promise<Atividade[]> {
    const atividades = await prisma.atividades.findMany()

    return atividades.map((atividade) => new Atividade(atividade))
  }

  async delete(id: number): Promise<void> {
    await prisma.atividades.delete({
      where: {
        id: +id,
      },
    })
  }
}
