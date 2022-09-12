import { Router } from 'express'

import { EnderecosRepository } from '../../../../modules/infra/prisma/repositories/endereco-repository'
import { EnderecoService } from '../../../../modules/services/endereco/endereco-service'

const EnderecoRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const enderecosRepository = new EnderecosRepository()
const enderecoService = new EnderecoService(enderecosRepository)

// Isso daqui é um pouco feio e muito errado
EnderecoRoutes.get('/', async (request, response) => {
  const enderecos = await enderecoService.handleFindAll()

  return response.json(enderecos)
})

EnderecoRoutes.post('/', async (request, response) => {
  const endereco = await enderecoService.handleCreate(request.body)

  return response.status(201).json(endereco)
})

EnderecoRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const endereco = await enderecoService.handleUpdate(id, request.body)

  return response.status(200).json(endereco)
})

EnderecoRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await enderecoService.handleDelete(Number(id))

  return response.status(204).send()
})

EnderecoRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const endereco = await enderecoService.handleFindById(Number(id))

  return response.json(endereco)
})

export { EnderecoRoutes }
