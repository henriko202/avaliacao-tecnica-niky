import { Router } from 'express'

import { PessoasRepository } from '../../../../modules/infra/prisma/repositories/pessoa-repository'
import { PessoaService } from '../../../../modules/services/pessoa/pessoa-service'

const PessoaRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const pessoasRepository = new PessoasRepository()
const pessoaService = new PessoaService(pessoasRepository)

// Isso daqui é um pouco feio e muito errado
PessoaRoutes.get('/', async (request, response) => {
  const pessoas = await pessoaService.handleFindAll()

  return response.json(pessoas)
})

PessoaRoutes.post('/', async (request, response) => {
  const pessoa = await pessoaService.handleCreate(request.body)

  return response.status(201).json(pessoa)
})

PessoaRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const pessoa = await pessoaService.handleUpdate(id, request.body)

  return response.status(200).json(pessoa)
})

PessoaRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await pessoaService.handleDelete(Number(id))

  return response.status(204).send()
})

PessoaRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const pessoa = await pessoaService.handleFindById(Number(id))

  return response.json(pessoa)
})

export { PessoaRoutes }
