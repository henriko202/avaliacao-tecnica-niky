import { Router } from 'express'

import { AtividadesRepository } from '../../../../modules/infra/prisma/repositories/atividade-repository'
import { AtividadeService } from '../../../../modules/services/atividade/atividade-service'

const AtividadeRoutes = Router()

const atividadesRepository = new AtividadesRepository()
const atividadeService = new AtividadeService(atividadesRepository)

// Isso daqui é um pouco feio e muito errado, mas infelizmente não terei tempo de fazer do jeito certo
AtividadeRoutes.get('/', async (request, response) => {
  const atividades = await atividadeService.handleFindAll()

  return response.json(atividades)
})

AtividadeRoutes.post('/', async (request, response) => {
  const atividade = await atividadeService.handleCreate(request.body)

  return response.status(201).json(atividade)
})

AtividadeRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const atividade = await atividadeService.handleUpdate(id, request.body)

  return response.status(200).json(atividade)
})

AtividadeRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await atividadeService.handleDelete(Number(id))

  return response.status(204).send()
})

AtividadeRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const atividade = await atividadeService.handleFindById(Number(id))

  return response.json(atividade)
})

export { AtividadeRoutes }
