/*
  Warnings:

  - The primary key for the `alunos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cod_matricula` on the `alunos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `id_pessoa` on the `alunos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `atividades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `atividades` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `enderecos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `enderecos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `pessoa` on the `enderecos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `instrutores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `instrutores` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `id_pessoa` on the `instrutores` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `matriculas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `matriculas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `aluno` on the `matriculas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `turma` on the `matriculas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `pessoas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `pessoas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `presencas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `presencas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `matricula` on the `presencas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `endereco` on the `telefones_enderecos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `titulacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `titulacoes` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `instrutor` on the `titulacoes` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `turmas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `turmas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `instrutor` on the `turmas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `tipo_atividade` on the `turmas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `monitor` on the `turmas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `qtde_max_alunos` on the `turmas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.

*/
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

-- AlterTable
ALTER TABLE `alunos` DROP PRIMARY KEY,
    MODIFY `cod_matricula` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `id_pessoa` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`cod_matricula`);

-- AlterTable
ALTER TABLE `atividades` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `enderecos` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `pessoa` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `instrutores` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `id_pessoa` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `matriculas` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `aluno` INTEGER UNSIGNED NOT NULL,
    MODIFY `turma` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`, `aluno`, `turma`);

-- AlterTable
ALTER TABLE `pessoas` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `presencas` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `matricula` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `telefones_enderecos` MODIFY `endereco` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `titulacoes` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `instrutor` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `turmas` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `instrutor` INTEGER UNSIGNED NOT NULL,
    MODIFY `tipo_atividade` INTEGER UNSIGNED NOT NULL,
    MODIFY `monitor` INTEGER UNSIGNED NOT NULL,
    MODIFY `qtde_max_alunos` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `instrutores` ADD CONSTRAINT `instrutores_ibfk_1` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `titulacoes` ADD CONSTRAINT `titulacoes_ibfk_1` FOREIGN KEY (`instrutor`) REFERENCES `instrutores`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_ibfk_1` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `turmas` ADD CONSTRAINT `turmas_ibfk_1` FOREIGN KEY (`instrutor`) REFERENCES `instrutores`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `turmas` ADD CONSTRAINT `turmas_ibfk_2` FOREIGN KEY (`tipo_atividade`) REFERENCES `atividades`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `turmas` ADD CONSTRAINT `turmas_ibfk_3` FOREIGN KEY (`monitor`) REFERENCES `alunos`(`cod_matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `enderecos` ADD CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`pessoa`) REFERENCES `pessoas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `matriculas` ADD CONSTRAINT `matriculas_ibfk_1` FOREIGN KEY (`aluno`) REFERENCES `alunos`(`cod_matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `matriculas` ADD CONSTRAINT `matriculas_ibfk_2` FOREIGN KEY (`turma`) REFERENCES `turmas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `presencas` ADD CONSTRAINT `presencas_ibfk_1` FOREIGN KEY (`matricula`) REFERENCES `matriculas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `telefones_enderecos` ADD CONSTRAINT `telefones_enderecos_ibfk_1` FOREIGN KEY (`endereco`) REFERENCES `enderecos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
