import prisma from '../../../database/prisma'
import { ITelefoneDTO } from '../../../dtos/ITelefoneDTO'
import { Telefone } from '../../../entities/telefone'
import { ITelefonesRepository } from '../../../repositories/telefone-repository'
import { EnderecoService } from '../../../services/endereco/endereco-service'
import { EnderecosRepository } from './endereco-repository'

const enderecosRepository = new EnderecosRepository()
const enderecoService = new EnderecoService(enderecosRepository)

export class TelefonesRepository implements ITelefonesRepository {
  async create(telefone: ITelefoneDTO): Promise<Telefone> {
    const endereco = await enderecoService.handleFindById(telefone.endereco)

    if (!endereco) {
      throw new Error('Endereço não encontrado')
    }

    const telefoneCreated = await prisma.telefones_enderecos.create({
      data: {
        ...telefone,
      },
    })

    return new Telefone({ ...telefoneCreated, endereco })
  }

  async save(id: number, telefone: ITelefoneDTO): Promise<Telefone> {
    const endereco = await enderecoService.handleFindById(telefone.endereco)

    if (!endereco) {
      throw new Error('Endereço não encontrado')
    }

    const telefoneUpdated = await prisma.telefones_enderecos.update({
      where: {
        id: +id,
      },
      data: {
        ...telefone,
      },
    })

    return new Telefone({ ...telefoneUpdated, endereco })
  }

  async findById(id: number): Promise<Telefone | null> {
    const telefone = await prisma.telefones_enderecos.findUnique({
      where: {
        id: +id,
      },
    })

    if (!telefone) {
      return null
    }

    const endereco = await enderecoService.handleFindById(telefone.endereco)

    if (!endereco) {
      throw new Error('Endereço não encontrado')
    }

    return new Telefone({ ...telefone, endereco })
  }

  async findAll(): Promise<Telefone[]> {
    const telefones = await prisma.telefones_enderecos.findMany()

    const telefonesMapped = await Promise.all(
      telefones.map(async (telefone) => {
        const endereco = await enderecoService.handleFindById(telefone.endereco)

        if (!endereco) {
          throw new Error('Endereço não encontrado')
        }

        return new Telefone({ ...telefone, endereco })
      }),
    )

    return telefonesMapped
  }

  async delete(id: number): Promise<void> {
    await prisma.telefones_enderecos.delete({
      where: {
        id: +id,
      },
    })
  }
}
