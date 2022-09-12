import prisma from '../../../database/prisma'
import { IPresencaDTO } from '../../../dtos/IPresencaDTO'
import { Presenca } from '../../../entities/presenca'
import { IPresencasRepository } from '../../../repositories/presenca-repository'
import { MatriculaService } from '../../../services/matricula/matricula-service'
import { toDate } from '../../../utils/toDate'
import { MatriculasRepository } from './matricula-repository'

const matriculasRepository = new MatriculasRepository()
const matriculaService = new MatriculaService(matriculasRepository)

export class PresencasRepository implements IPresencasRepository {
  async create(presenca: IPresencaDTO): Promise<Presenca> {
    const matricula = await matriculaService.handleFindById(presenca.matricula)

    if (!matricula) {
      throw new Error('Matrícula não encontrada')
    }

    const presencaAntiga = await prisma.presencas.findMany({
      where: {
        data: toDate(presenca.data),
        matricula: matricula.id,
      },
    })

    if (presencaAntiga.length > 0) {
      throw new Error('Presença já cadastrada')
    }

    const presencaCreated = await prisma.presencas.create({
      data: {
        ...presenca,
        data: toDate(presenca.data),
      },
    })

    return new Presenca({ ...presencaCreated, matricula })
  }

  async save(id: number, presenca: IPresencaDTO): Promise<Presenca> {
    const matricula = await matriculaService.handleFindById(presenca.matricula)

    if (!matricula) {
      throw new Error('Matrícula não encontrada')
    }

    const presencaUpdated = await prisma.presencas.update({
      where: {
        id: +id,
      },
      data: {
        ...presenca,
        data: toDate(presenca.data),
      },
    })

    return new Presenca({ ...presencaUpdated, matricula })
  }

  async findById(id: number): Promise<Presenca | null> {
    const presenca = await prisma.presencas.findUnique({
      where: {
        id: +id,
      },
    })

    if (!presenca) {
      return null
    }

    const matricula = await matriculaService.handleFindById(presenca.matricula)

    if (!matricula) {
      throw new Error('Matrícula não encontrada')
    }

    return new Presenca({ ...presenca, matricula })
  }

  async findAll(): Promise<Presenca[]> {
    const presencas = await prisma.presencas.findMany()

    const presencasMapped = await Promise.all(
      presencas.map(async (presenca) => {
        const matricula = await matriculaService.handleFindById(presenca.matricula)

        if (!matricula) {
          throw new Error('Matrícula não encontrada')
        }

        return new Presenca({ ...presenca, matricula })
      }),
    )

    return presencasMapped
  }

  async delete(id: number): Promise<void> {
    await prisma.presencas.delete({
      where: {
        id: +id,
      },
    })
  }
}
