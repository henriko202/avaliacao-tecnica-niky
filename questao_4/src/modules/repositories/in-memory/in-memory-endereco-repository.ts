import { Endereco } from '../../entities/endereco'
import { IEnderecosRepository } from '../endereco-repository'

export class InMemoryEnderecoRepository implements IEnderecosRepository {
  private enderecos: Endereco[] = []

  async create(endereco: Endereco): Promise<Endereco> {
    const id = endereco.id
    const exists = await this.findById(id)

    if (exists) {
      throw new Error('Endereço já existe')
    }

    this.enderecos.push(endereco)

    return endereco
  }

  async save(endereco: Endereco): Promise<Endereco> {
    const index = this.enderecos.findIndex((a) => a.id === endereco.id)

    if (index === -1) {
      throw new Error('Endereço não encontrado')
    }

    this.enderecos[index] = endereco

    return endereco
  }

  async findById(id: number): Promise<Endereco | null> {
    const endereco = this.enderecos.find((a) => a.id === id)

    if (!endereco) {
      return null
    }

    return endereco
  }

  findAll(): Promise<Endereco[]> {
    return Promise.resolve(this.enderecos)
  }

  delete(endereco: number): Promise<void> {
    const index = this.enderecos.findIndex((a) => a.id === endereco)

    if (index === -1) {
      throw new Error('Endereço não encontrado')
    }

    this.enderecos.splice(index, 1)

    return Promise.resolve()
  }
}
