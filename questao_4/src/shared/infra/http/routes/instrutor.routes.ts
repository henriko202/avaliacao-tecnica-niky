import { Router } from 'express'

import { InstrutoresRepository } from '../../../../modules/infra/prisma/repositories/instrutor-repository'
import { InstrutorService } from '../../../../modules/services/instrutor/instrutor-service'

const InstrutorRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const instrutoresRepository = new InstrutoresRepository()
const instrutorService = new InstrutorService(instrutoresRepository)

// Isso daqui é um pouco feio e muito errado
InstrutorRoutes.get('/', async (request, response) => {
  const instrutors = await instrutorService.handleFindAll()

  return response.json(instrutors)
})

InstrutorRoutes.post('/', async (request, response) => {
  const instrutor = await instrutorService.handleCreate(request.body)

  return response.status(201).json(instrutor)
})

InstrutorRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const instrutor = await instrutorService.handleUpdate(id, request.body)

  return response.status(200).json(instrutor)
})

InstrutorRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await instrutorService.handleDelete(Number(id))

  return response.status(204).send()
})

InstrutorRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const instrutor = await instrutorService.handleFindById(Number(id))

  return response.json(instrutor)
})

export { InstrutorRoutes }
