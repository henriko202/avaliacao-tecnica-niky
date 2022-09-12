import { IPessoaDTO } from '../dtos/IpessoaDTO'
import { Pessoa } from '../entities/pessoa'

export interface IPessoasRepository {
  create(pessoa: IPessoaDTO): Promise<Pessoa>
  save(id: number, pessoa: IPessoaDTO): Promise<Pessoa>
  findById(id: number): Promise<Pessoa | null>
  findAll(): Promise<Pessoa[]>
  delete(id: number): Promise<void>
}
