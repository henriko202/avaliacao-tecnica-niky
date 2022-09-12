import { Router } from 'express'

import { AlunosRepository } from '../../../../modules/infra/prisma/repositories/aluno-repository'
import { AlunoService } from '../../../../modules/services/aluno/aluno-service'

const AlunoRoutes = Router()

const alunosRepository = new AlunosRepository()
const alunoService = new AlunoService(alunosRepository)

// Isso daqui é um pouco feio e muito errado, mas infelizmente não terei tempo de fazer do jeito certo
AlunoRoutes.get('/', async (request, response) => {
  const alunos = await alunoService.handleFindAll()

  return response.json(alunos)
})

AlunoRoutes.post('/', async (request, response) => {
  const aluno = await alunoService.handleCreate(request.body)

  return response.status(201).json(aluno)
})

AlunoRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const aluno = await alunoService.handleUpdate(id, request.body)

  return response.status(200).json(aluno)
})

AlunoRoutes.delete('/:cod_matricula', async (request, response) => {
  const { cod_matricula } = request.params

  await alunoService.handleDelete(Number(cod_matricula))

  return response.status(204).send()
})

AlunoRoutes.get('/:cod_matricula', async (request, response) => {
  const { cod_matricula } = request.params

  const aluno = await alunoService.handleFindById(Number(cod_matricula))

  return response.json(aluno)
})

export { AlunoRoutes }
