import { Router } from 'express'

import { MatriculasRepository } from '../../../../modules/infra/prisma/repositories/matricula-repository'
import { MatriculaService } from '../../../../modules/services/matricula/matricula-service'

const MatriculaRoutes = Router()

// Essa injeção de dependência não deveria estar aqui
const matriculasRepository = new MatriculasRepository()
const matriculaService = new MatriculaService(matriculasRepository)

// Isso daqui é um pouco feio e muito errado
MatriculaRoutes.get('/', async (request, response) => {
  const matriculas = await matriculaService.handleFindAll()

  return response.json(matriculas)
})

MatriculaRoutes.post('/', async (request, response) => {
  const matricula = await matriculaService.handleCreate(request.body)

  return response.status(201).json(matricula)
})

MatriculaRoutes.put('/:id', async (request, response) => {
  const { id } = request.params

  const matricula = await matriculaService.handleUpdate(id, request.body)

  return response.status(200).json(matricula)
})

MatriculaRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  await matriculaService.handleDelete(Number(id))

  return response.status(204).send()
})

MatriculaRoutes.get('/:id', async (request, response) => {
  const { id } = request.params

  const matricula = await matriculaService.handleFindById(Number(id))

  return response.json(matricula)
})

export { MatriculaRoutes }
