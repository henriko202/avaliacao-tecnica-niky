import { Router } from 'express'

import { PresencasRepository } from '../../../../modules/infra/prisma/repositories/presenca-repository'
import { PresencaService } from '../../../../modules/services/presenca/presenca-service'

const PresencaRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const presencasRepository = new PresencasRepository()
const presencaService = new PresencaService(presencasRepository)

// Isso daqui é um pouco feio e muito errado
PresencaRoutes.get('/', async (request, response) => {
  const presencas = await presencaService.handleFindAll()

  return response.json(presencas)
})

PresencaRoutes.post('/', async (request, response) => {
  const presenca = await presencaService.handleCreate(request.body)

  return response.status(201).json(presenca)
})

PresencaRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const presenca = await presencaService.handleUpdate(id, request.body)

  return response.status(200).json(presenca)
})

PresencaRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await presencaService.handleDelete(Number(id))

  return response.status(204).send()
})

PresencaRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const presenca = await presencaService.handleFindById(Number(id))

  return response.json(presenca)
})

export { PresencaRoutes }
