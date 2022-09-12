import { Router } from 'express'

import { TelefonesRepository } from '../../../../modules/infra/prisma/repositories/telefone-repository'
import { TelefoneService } from '../../../../modules/services/telefone/telefone-service'

const TelefoneRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const telefonesRepository = new TelefonesRepository()
const telefoneService = new TelefoneService(telefonesRepository)

// Isso daqui é um pouco feio e muito errado
TelefoneRoutes.get('/', async (request, response) => {
  const telefones = await telefoneService.handleFindAll()

  return response.json(telefones)
})

TelefoneRoutes.post('/', async (request, response) => {
  const telefone = await telefoneService.handleCreate(request.body)

  return response.status(201).json(telefone)
})

TelefoneRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const telefone = await telefoneService.handleUpdate(id, request.body)

  return response.status(200).json(telefone)
})

TelefoneRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await telefoneService.handleDelete(Number(id))

  return response.status(204).send()
})

TelefoneRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const telefone = await telefoneService.handleFindById(Number(id))

  return response.json(telefone)
})

export { TelefoneRoutes }
