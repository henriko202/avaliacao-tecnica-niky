import { Router } from 'express'

import { TurmasRepository } from '../../../../modules/infra/prisma/repositories/turma-repository'
import { TurmaService } from '../../../../modules/services/turma/turma-service'

const TurmaRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const turmasRepository = new TurmasRepository()
const turmaService = new TurmaService(turmasRepository)

// Isso daqui é um pouco feio e muito errado
TurmaRoutes.get('/', async (request, response) => {
  const turmas = await turmaService.handleFindAll()

  return response.json(turmas)
})

TurmaRoutes.post('/', async (request, response) => {
  const turma = await turmaService.handleCreate(request.body)

  return response.status(201).json(turma)
})

TurmaRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const turma = await turmaService.handleUpdate(id, request.body)

  return response.status(200).json(turma)
})

TurmaRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await turmaService.handleDelete(Number(id))

  return response.status(204).send()
})

TurmaRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const turma = await turmaService.handleFindById(Number(id))

  return response.json(turma)
})

export { TurmaRoutes }
