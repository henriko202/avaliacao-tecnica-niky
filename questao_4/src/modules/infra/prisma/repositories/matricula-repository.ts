import prisma from '../../../database/prisma'
import { IMatriculaDTO } from '../../../dtos/IMatriculaDTO'
import { Aluno } from '../../../entities/aluno'
import { Atividade } from '../../../entities/atividade'
import { Instrutor } from '../../../entities/instrutor'
import { Matricula } from '../../../entities/matricula'
import { EnumPessoa } from '../../../entities/pessoa'
import { Turma } from '../../../entities/turma'
import { IMatriculasRepository } from '../../../repositories/matricula-repository'
import { AlunoService } from '../../../services/aluno/aluno-service'
import { AtividadeService } from '../../../services/atividade/atividade-service'
import { InstrutorService } from '../../../services/instrutor/instrutor-service'
import { TurmaService } from '../../../services/turma/turma-service'
import { AlunosRepository } from './aluno-repository'
import { AtividadesRepository } from './atividade-repository'
import { InstrutoresRepository } from './instrutor-repository'
import { TurmasRepository } from './turma-repository'

const atividadesRepository = new AtividadesRepository()
const atividadeService = new AtividadeService(atividadesRepository)

const instrutoresRepository = new InstrutoresRepository()
const instrutorService = new InstrutorService(instrutoresRepository)

const alunosRepository = new AlunosRepository()
const alunoService = new AlunoService(alunosRepository)

const turmasRepository = new TurmasRepository()
const turmaService = new TurmaService(turmasRepository)

export class MatriculasRepository implements IMatriculasRepository {
  async create(matricula: IMatriculaDTO): Promise<Matricula> {
    const aluno = await alunoService.handleFindById(matricula.aluno)

    if (!aluno) {
      throw new Error('Aluno não encontrado')
    }

    const turma = await turmaService.handleFindById(matricula.turma)

    if (!turma) {
      throw new Error('Turma não encontrada')
    }

    const matriculaCreated = await prisma.matriculas.create({
      data: {
        aluno: matricula.aluno,
        turma: matricula.turma,
      },
    })

    return new Matricula({
      ...matriculaCreated,
      aluno,
      turma,
    })
  }

  async save(id: number, matricula: IMatriculaDTO): Promise<Matricula> {
    const aluno = await alunoService.handleFindById(matricula.aluno)

    if (!aluno) {
      throw new Error('Aluno não encontrado')
    }

    const turma = await turmaService.handleFindById(matricula.turma)

    if (!turma) {
      throw new Error('Turma não encontrada')
    }

    const matriculaUpdated = await prisma.matriculas.update({
      where: {
        id: +id,
      },
      data: {
        aluno: matricula.aluno,
        turma: matricula.turma,
      },
    })

    return new Matricula({
      ...matriculaUpdated,
      aluno,
      turma,
    })
  }

  async findById(id: number): Promise<Matricula | null> {
    const matricula = await prisma.matriculas.findUnique({
      where: {
        id: +id,
      },
      include: {
        alunos: {
          include: {
            pessoas: true,
          },
        },
        turmas: {
          include: {
            atividades: true,
            instrutores: true,
            alunos: true,
          },
        },
      },
    })

    if (!matricula) {
      return null
    }
    const aluno = await alunoService.handleFindById(matricula.aluno)

    if (!aluno) {
      throw new Error('Aluno não encontrado')
    }

    const turma = await turmaService.handleFindById(matricula.turma)

    if (!turma) {
      throw new Error('Turma não encontrada')
    }

    return new Matricula({
      ...matricula,
      aluno,
      turma,
    })
  }

  async findAll(): Promise<Matricula[]> {
    const matriculas = await prisma.matriculas.findMany({
      include: {
        alunos: {
          include: {
            pessoas: true,
          },
        },
        turmas: {
          include: {
            atividades: true,
            instrutores: true,
            alunos: true,
          },
        },
      },
    })

    const matriculasMapped = await Promise.all(
      matriculas.map(async (matricula) => {
        const aluno = await alunoService.handleFindById(matricula.aluno)

        if (!aluno) {
          throw new Error('Aluno não encontrado')
        }

        const turma = await turmaService.handleFindById(matricula.turma)

        if (!turma) {
          throw new Error('Turma não encontrada')
        }

        return new Matricula({
          ...matricula,
          aluno,
          turma,
        })
      }),
    )

    return matriculasMapped
  }

  async delete(id: number): Promise<void> {
    await prisma.matriculas.delete({
      where: {
        id: +id,
      },
    })
  }
}
