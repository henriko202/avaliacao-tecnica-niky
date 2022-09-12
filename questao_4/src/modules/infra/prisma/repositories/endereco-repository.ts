import prisma from '../../../database/prisma'
import { IEnderecoDTO } from '../../../dtos/IEnderecoDTO'
import { Endereco } from '../../../entities/endereco'
import { IEnderecosRepository } from '../../../repositories/endereco-repository'

export class EnderecosRepository implements IEnderecosRepository {
  async create(endereco: IEnderecoDTO): Promise<Endereco> {
    const enderecoCreated = await prisma.enderecos.create({
      data: {
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        tipo: endereco.tipo,
        complemento: endereco.complemento,
        pessoa: +endereco.pessoa,
      },
    })

    return new Endereco({
      ...enderecoCreated,
    })
  }

  async save(id: number, endereco: IEnderecoDTO): Promise<Endereco> {
    const enderecoUpdated = await prisma.enderecos.update({
      where: {
        id: +id,
      },
      data: {
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        tipo: endereco.tipo,
        complemento: endereco.complemento,
        pessoa: +endereco.pessoa,
      },
    })

    return new Endereco({
      ...enderecoUpdated,
    })
  }

  async findById(id: number): Promise<Endereco | null> {
    const endereco = await prisma.enderecos.findUnique({
      where: {
        id: +id,
      },
      include: {
        pessoas: true,
      },
    })

    if (!endereco) {
      return null
    }

    return new Endereco({
      ...endereco,
    })
  }

  async findAll(): Promise<Endereco[]> {
    const enderecos = await prisma.enderecos.findMany({
      include: {
        pessoas: true,
      },
    })

    return enderecos.map((endereco) => new Endereco(endereco))
  }

  async delete(id: number): Promise<void> {
    await prisma.enderecos.delete({
      where: {
        id: +id,
      },
    })
  }
}
