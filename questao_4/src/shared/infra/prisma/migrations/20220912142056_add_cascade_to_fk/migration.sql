-- DropForeignKey
ALTER TABLE `alunos` DROP FOREIGN KEY `alunos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `enderecos` DROP FOREIGN KEY `enderecos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `instrutores` DROP FOREIGN KEY `instrutores_ibfk_1`;

-- DropForeignKey
ALTER TABLE `matriculas` DROP FOREIGN KEY `matriculas_ibfk_1`;

-- DropForeignKey
ALTER TABLE `matriculas` DROP FOREIGN KEY `matriculas_ibfk_2`;

-- DropForeignKey
ALTER TABLE `presencas` DROP FOREIGN KEY `presencas_ibfk_1`;

-- DropForeignKey
ALTER TABLE `telefones_enderecos` DROP FOREIGN KEY `telefones_enderecos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `titulacoes` DROP FOREIGN KEY `titulacoes_ibfk_1`;

-- DropForeignKey
ALTER TABLE `turmas` DROP FOREIGN KEY `turmas_ibfk_1`;

-- DropForeignKey
ALTER TABLE `turmas` DROP FOREIGN KEY `turmas_ibfk_2`;

-- DropForeignKey
ALTER TABLE `turmas` DROP FOREIGN KEY `turmas_ibfk_3`;

-- AddForeignKey
ALTER TABLE `instrutores` ADD CONSTRAINT `instrutores_fk_pessoa` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `titulacoes` ADD CONSTRAINT `titulacoes_fk_instrutor` FOREIGN KEY (`instrutor`) REFERENCES `instrutores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_fk_pessoa` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turmas` ADD CONSTRAINT `turmas_fk_instrutor` FOREIGN KEY (`instrutor`) REFERENCES `instrutores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turmas` ADD CONSTRAINT `turmas_fk_atividade` FOREIGN KEY (`tipo_atividade`) REFERENCES `atividades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turmas` ADD CONSTRAINT `turmas_fk_monitor` FOREIGN KEY (`monitor`) REFERENCES `alunos`(`cod_matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enderecos` ADD CONSTRAINT `enderecos_fk_pessoa` FOREIGN KEY (`pessoa`) REFERENCES `pessoas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `matriculas` ADD CONSTRAINT `matriculas_fk_aluno` FOREIGN KEY (`aluno`) REFERENCES `alunos`(`cod_matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `matriculas` ADD CONSTRAINT `matriculas_fk_turma` FOREIGN KEY (`turma`) REFERENCES `turmas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `presencas` ADD CONSTRAINT `presencas_fk_matricula` FOREIGN KEY (`matricula`) REFERENCES `matriculas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `telefones_enderecos` ADD CONSTRAINT `telefones_enderecos_fk_endereco` FOREIGN KEY (`endereco`) REFERENCES `enderecos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
