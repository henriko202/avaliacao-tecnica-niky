import prisma from '../../../database/prisma'
import { ITurmaDTO } from '../../../dtos/ITurmaDTO'
import { Turma } from '../../../entities/turma'
import { ITurmasRepository } from '../../../repositories/turma-repository'
import { AlunoService } from '../../../services/aluno/aluno-service'
import { AtividadeService } from '../../../services/atividade/atividade-service'
import { InstrutorService } from '../../../services/instrutor/instrutor-service'
import { toDate } from '../../../utils/toDate'
import { AlunosRepository } from './aluno-repository'
import { AtividadesRepository } from './atividade-repository'
import { InstrutoresRepository } from './instrutor-repository'

// isso tá errado, não pode importar o service aqui
const atividadesRepository = new AtividadesRepository()
const atividadeService = new AtividadeService(atividadesRepository)

const instrutoresRepository = new InstrutoresRepository()
const instrutorService = new InstrutorService(instrutoresRepository)

const alunosRepository = new AlunosRepository()
const alunoService = new AlunoService(alunosRepository)

export class TurmasRepository implements ITurmasRepository {
  async create(turma: ITurmaDTO): Promise<Turma> {
    const atividade = await atividadeService.handleFindById(turma.tipo_atividade)

    if (!atividade) {
      throw new Error('Atividade não encontrada')
    }

    const instrutor = await instrutorService.handleFindById(turma.instrutor)

    if (!instrutor) {
      throw new Error('Instrutor não encontrado')
    }

    const monitor = await alunoService.handleFindById(turma.monitor)

    if (!monitor) {
      throw new Error('Monitor não encontrado')
    }

    const turmaCreated = await prisma.turmas.create({
      data: {
        ...turma,
        data_final: turma.data_final ? toDate(turma.data_final) : undefined,
        data_inicial: toDate(turma.data_inicial),
      },
    })

    return new Turma({
      ...turmaCreated,
      tipo_atividade: atividade,
      instrutor,
      monitor,
      horario_aula: turmaCreated.horario_aula,
      data_final: turmaCreated.data_final || undefined,
    })
  }

  async save(id: number, turma: ITurmaDTO): Promise<Turma> {
    const atividade = await atividadeService.handleFindById(turma.tipo_atividade)

    if (!atividade) {
      throw new Error('Atividade não encontrada')
    }

    const instrutor = await instrutorService.handleFindById(turma.instrutor)

    if (!instrutor) {
      throw new Error('Instrutor não encontrado')
    }

    const monitor = await alunoService.handleFindById(turma.monitor)

    if (!monitor) {
      throw new Error('Monitor não encontrado')
    }

    const turmaUpdated = await prisma.turmas.update({
      where: {
        id: +id,
      },
      data: {
        ...turma,
        data_final: turma.data_final ? toDate(turma.data_final) : undefined,
        data_inicial: toDate(turma.data_inicial),
      },
    })

    return new Turma({
      ...turmaUpdated,
      tipo_atividade: atividade,
      instrutor,
      monitor,
      horario_aula: turmaUpdated.horario_aula,
      data_final: turmaUpdated.data_final || undefined,
    })
  }

  async findById(id: number): Promise<Turma | null> {
    const turma = await prisma.turmas.findUnique({
      where: {
        id: +id,
      },
      include: {
        instrutores: true,
        alunos: true,
        atividades: true,
      },
    })

    if (!turma) {
      return null
    }

    return new Turma({
      ...turma,
      horario_aula: turma.horario_aula,
      data_final: turma.data_final || undefined,
      tipo_atividade: turma.atividades[0],
      instrutor: turma.instrutores[0],
      monitor: turma.alunos[0],
    })
  }

  async findAll(): Promise<Turma[]> {
    const turmas = await prisma.turmas.findMany({
      include: {
        instrutores: true,
        alunos: true,
        atividades: true,
      },
    })

    return turmas.map((turma) => {
      return new Turma({
        ...turma,
        horario_aula: turma.horario_aula,
        data_final: turma.data_final || undefined,
        tipo_atividade: turma.atividades[0],
        instrutor: turma.instrutores[0],
        monitor: turma.alunos[0],
      })
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.turmas.delete({
      where: {
        id: +id,
      },
    })
  }
}
