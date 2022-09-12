import { IEnderecoDTO } from '../dtos/IEnderecoDTO'
import { Endereco } from '../entities/endereco'

export interface IEnderecosRepository {
  create(endereco: IEnderecoDTO): Promise<Endereco>
  save(endereco: IEnderecoDTO): Promise<Endereco>
  findById(id: number): Promise<Endereco | null>
  findAll(): Promise<Endereco[]>
  delete(id: number): Promise<void>
}
