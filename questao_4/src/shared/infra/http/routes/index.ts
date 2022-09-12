import { Router } from 'express'

import { AlunoRoutes } from './aluno.routes'
import { AtividadeRoutes } from './atividade.routes'
import { EnderecoRoutes } from './endereco.routes'
import { InstrutorRoutes } from './instrutor.routes'
import { MatriculaRoutes } from './matricula.routes'
import { PessoaRoutes } from './pessoa.routes'
import { PresencaRoutes } from './presenca.routes'
import { TelefoneRoutes } from './telefone.routes'
import { TitulacaoRoutes } from './titulacao.routes'
import { TurmaRoutes } from './turma.routes'

const router = Router()

router.use('/alunos', AlunoRoutes)
router.use('/atividades', AtividadeRoutes)
router.use('/enderecos', EnderecoRoutes)
router.use('/instrutores', InstrutorRoutes)
router.use('/matriculas', MatriculaRoutes)
router.use('/pessoas', PessoaRoutes)
router.use('/presencas', PresencaRoutes)
router.use('/telefones', TelefoneRoutes)
router.use('/titulacoes', TitulacaoRoutes)
router.use('/turmas', TurmaRoutes)

export { router }
