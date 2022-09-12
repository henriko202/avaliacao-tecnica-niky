import { Router } from 'express'

import { TitulacoesRepository } from '../../../../modules/infra/prisma/repositories/titulacao-repository'
import { TitulacaoService } from '../../../../modules/services/titulacao/titulacao-service'

const TitulacaoRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const titulacaosRepository = new TitulacoesRepository()
const titulacaoService = new TitulacaoService(titulacaosRepository)

// Isso daqui é um pouco feio e muito errado
TitulacaoRoutes.get('/', async (request, response) => {
  const titulacaos = await titulacaoService.handleFindAll()

  return response.json(titulacaos)
})

TitulacaoRoutes.post('/', async (request, response) => {
  const titulacao = await titulacaoService.handleCreate(request.body)

  return response.status(201).json(titulacao)
})

TitulacaoRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const titulacao = await titulacaoService.handleUpdate(id, request.body)

  return response.status(200).json(titulacao)
})

TitulacaoRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await titulacaoService.handleDelete(Number(id))

  return response.status(204).send()
})

TitulacaoRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const titulacao = await titulacaoService.handleFindById(Number(id))

  return response.json(titulacao)
})

export { TitulacaoRoutes }
