import prisma from '../../../database/prisma'
import { ITitulacaoDTO } from '../../../dtos/ITitulacaoDTO'
import { Titulacao } from '../../../entities/titulacao'
import { ITitulacoesRepository } from '../../../repositories/titulacao-repository'
import { InstrutorService } from '../../../services/instrutor/instrutor-service'
import { InstrutoresRepository } from './instrutor-repository'

const instrutoresRepository = new InstrutoresRepository()
const instrutorService = new InstrutorService(instrutoresRepository)

export class TitulacoesRepository implements ITitulacoesRepository {
  async create(titulacao: ITitulacaoDTO): Promise<Titulacao> {
    const instrutor = await instrutorService.handleFindById(titulacao.instrutor)

    if (!instrutor) {
      throw new Error('Instrutor não encontrado')
    }

    const titulacaoCreated = await prisma.titulacoes.create({
      data: {
        ...titulacao,
      },
    })

    return new Titulacao({ ...titulacaoCreated, instrutor })
  }

  async save(id: number, titulacao: ITitulacaoDTO): Promise<Titulacao> {
    const instrutor = await instrutorService.handleFindById(titulacao.instrutor)

    if (!instrutor) {
      throw new Error('Instrutor não encontrado')
    }

    const titulacaoUpdated = await prisma.titulacoes.update({
      where: {
        id: +id,
      },
      data: {
        ...titulacao,
      },
    })

    return new Titulacao({ ...titulacaoUpdated, instrutor })
  }

  async findById(id: number): Promise<Titulacao | null> {
    const titulacao = await prisma.titulacoes.findUnique({
      where: {
        id: +id,
      },
    })

    if (!titulacao) {
      return null
    }

    const instrutor = await instrutorService.handleFindById(titulacao.instrutor)

    if (!instrutor) {
      throw new Error('Instrutor não encontrado')
    }

    return new Titulacao({ ...titulacao, instrutor })
  }

  async findAll(): Promise<Titulacao[]> {
    const titulacoes = await prisma.titulacoes.findMany()

    const titulacoesWithInstrutor = await Promise.all(
      titulacoes.map(async (titulacao) => {
        const instrutor = await instrutorService.handleFindById(titulacao.instrutor)

        if (!instrutor) {
          throw new Error('Instrutor não encontrado')
        }

        return new Titulacao({ ...titulacao, instrutor })
      }),
    )

    return titulacoesWithInstrutor
  }

  async delete(id: number): Promise<void> {
    await prisma.titulacoes.delete({
      where: {
        id: +id,
      },
    })
  }
}
