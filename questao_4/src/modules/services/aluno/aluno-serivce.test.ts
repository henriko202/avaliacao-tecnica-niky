import { describe, it, expect, beforeAll } from 'vitest'

import { Aluno } from '../../entities/aluno'
import { EnumPessoa } from '../../entities/pessoa'
import { InMemoryAlunoRepository } from '../../repositories/in-memory/in-memory-alunos-repository'
import { AlunoService } from './aluno-service'

describe('Cria um Aluno', () => {
  let alunosRepository: InMemoryAlunoRepository
  let sut: AlunoService

  beforeAll(() => {
    alunosRepository = new InMemoryAlunoRepository()

    // System Under Test
    sut = new AlunoService(alunosRepository)
  })

  it('Deveria criar um aluno', async () => {
    const aluno = await sut.handleCreate({
      cod_matricula: 1,
      data_matricula: new Date(),
      altura: 1.8,
      data_nascimento: new Date(),
      nome: 'João',
      peso: 80,
      tipo: EnumPessoa.ALUNO,
      pessoa_id: 1,
    })

    expect(aluno).toBeInstanceOf(Aluno)
    expect(aluno.cod_matricula).toBe(1)
    expect(aluno.cod_matricula).not.toBe(2)
  })

  it('Deveria lançar um erro se a data de matrícula for maior que a data atual', async () => {
    const dataFutura = new Date()
    dataFutura.setDate(dataFutura.getDate() + 1)

    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: dataFutura,
        altura: 1.8,
        data_nascimento: new Date(),
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se a data de nascimento for maior que a data atual', async () => {
    const dataFutura = new Date()
    dataFutura.setDate(dataFutura.getDate() + 1)

    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: new Date(),
        altura: 1.8,
        data_nascimento: dataFutura,
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se a data de matrícula for menor que a data de nascimento', async () => {
    const dataMatricula = new Date()
    dataMatricula.setDate(dataMatricula.getDate() - 1)

    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: dataMatricula,
        altura: 1.8,
        data_nascimento: new Date(),
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se a altura for menor ou igual a zero', async () => {
    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: new Date(),
        altura: 0,
        data_nascimento: new Date(),
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se o peso for menor ou igual a zero', async () => {
    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: new Date(),
        altura: 1.8,
        data_nascimento: new Date(),
        nome: 'João',
        peso: 0,

        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se o nome for vazio', async () => {
    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: new Date(),
        altura: 1.8,
        data_nascimento: new Date(),
        nome: '',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se o tipo for diferente de ALUNO', async () => {
    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: new Date(),
        altura: 1.8,
        data_nascimento: new Date(),
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.INSTRUTOR,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se o código de matrícula já existir', async () => {
    await expect(() =>
      sut.handleCreate({
        cod_matricula: 1,
        data_matricula: new Date(),
        altura: 1.8,
        data_nascimento: new Date(),
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })
})

describe('Atualiza um Aluno:', () => {
  let alunosRepository: InMemoryAlunoRepository
  let sut: AlunoService

  beforeAll(() => {
    alunosRepository = new InMemoryAlunoRepository()

    // System Under Test
    sut = new AlunoService(alunosRepository)
  })

  it('Deveria atualizar um aluno', async () => {
    const dataMatricula = new Date()
    dataMatricula.setDate(dataMatricula.getDate() - 1)

    const aluno = await sut.handleCreate({
      cod_matricula: 1,
      data_matricula: new Date(),
      altura: 1.8,
      data_nascimento: dataMatricula,
      nome: 'João',
      peso: 80,
      tipo: EnumPessoa.ALUNO,
      pessoa_id: 1,
    })

    const alunoAtualizado = await sut.handleUpdate({
      cod_matricula: 1,
      data_matricula: new Date(),
      altura: 1.9,
      peso: 70,
      nome: 'João Atualizado',
      pessoa_id: 1,
      tipo: EnumPessoa.ALUNO,
      data_nascimento: dataMatricula,
    })

    const alunos = await alunosRepository.findAll()

    expect(alunoAtualizado.altura).toBe(1.9)
    expect(alunoAtualizado.peso).toBe(70)
    expect(alunoAtualizado.nome).toBe('João Atualizado')

    expect(aluno).toBeInstanceOf(Aluno)
    expect(aluno.cod_matricula).toBe(1)
    expect(aluno.cod_matricula).not.toBe(2)
    expect(alunos.length).toBe(1)
  })

  it('Deveria lançar um erro se a data de nascimento for maior que a data atual', async () => {
    const dataFutura = new Date()
    dataFutura.setDate(dataFutura.getDate() + 1)

    await expect(() =>
      sut.handleUpdate({
        cod_matricula: 1,
        data_matricula: new Date(),
        altura: 1.8,
        data_nascimento: dataFutura,
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })

  it('Deveria lançar um erro se o aluno não existir', async () => {
    await expect(() =>
      sut.handleUpdate({
        cod_matricula: 2,
        data_matricula: new Date(),
        altura: 1.8,
        data_nascimento: new Date(),
        nome: 'João',
        peso: 80,
        tipo: EnumPessoa.ALUNO,
        pessoa_id: 1,
      }),
    ).rejects.toThrow()
  })
})

describe('Remove um Aluno:', () => {
  let alunosRepository: InMemoryAlunoRepository
  let sut: AlunoService

  beforeAll(() => {
    alunosRepository = new InMemoryAlunoRepository()

    // System Under Test
    sut = new AlunoService(alunosRepository)
  })

  it('Deveria remover um aluno', async () => {
    const dataMatricula = new Date()
    dataMatricula.setDate(dataMatricula.getDate() - 1)

    await sut.handleCreate({
      cod_matricula: 1,
      data_matricula: new Date(),
      altura: 1.8,
      data_nascimento: dataMatricula,
      nome: 'João',
      peso: 80,
      tipo: EnumPessoa.ALUNO,
      pessoa_id: 1,
    })

    await sut.handleDelete(1)

    const alunos = await alunosRepository.findAll()

    expect(alunos.length).toBe(0)
  })

  it('Deveria lançar um erro se o aluno não existir', async () => {
    await expect(() => sut.handleDelete(1)).rejects.toThrow()
  })

  it('Deveria retornar 1 aluno', async () => {
    const dataAntiga = new Date()
    dataAntiga.setDate(dataAntiga.getDate() - 10)

    const dataMatricula = new Date()
    dataMatricula.setDate(dataMatricula.getDate() - 1)

    await sut.handleCreate({
      cod_matricula: 1,
      data_matricula: dataMatricula,
      altura: 1.8,
      data_nascimento: dataAntiga,
      nome: 'João',
      peso: 80,
      tipo: EnumPessoa.ALUNO,
      pessoa_id: 1,
    })

    await sut.handleCreate({
      cod_matricula: 2,
      data_matricula: dataMatricula,
      altura: 1.8,
      data_nascimento: dataAntiga,
      nome: 'João',
      peso: 80,
      tipo: EnumPessoa.ALUNO,
      pessoa_id: 1,
    })

    await sut.handleDelete(1)

    const alunos = await alunosRepository.findAll()

    expect(alunos.length).toBe(1)
    expect(alunos[0].cod_matricula).toBe(2)
  })
})
