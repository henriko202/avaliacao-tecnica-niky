-- CreateTable
CREATE TABLE `atividades` (
    `id` INTEGER NOT NULL,
    `nome` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `instrutores` (
    `id` INTEGER NOT NULL,
    `id_pessoa` INTEGER NOT NULL,
    `rg` VARCHAR(255) NOT NULL,

    INDEX `id_pessoa`(`id_pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `titulacoes` (
    `id` INTEGER NOT NULL,
    `instrutor` INTEGER NOT NULL,
    `instituicao` VARCHAR(255) NOT NULL,
    `curso` VARCHAR(255) NOT NULL,
    `grau` VARCHAR(255) NOT NULL,

    INDEX `instrutor`(`instrutor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alunos` (
    `cod_matricula` INTEGER NOT NULL,
    `id_pessoa` INTEGER NOT NULL,
    `data_matricula` DATE NOT NULL,
    `altura` FLOAT NOT NULL,
    `peso` FLOAT NOT NULL,

    INDEX `id_pessoa`(`id_pessoa`),
    PRIMARY KEY (`cod_matricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turmas` (
    `id` INTEGER NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `instrutor` INTEGER NOT NULL,
    `tipo_atividade` INTEGER NOT NULL,
    `monitor` INTEGER NOT NULL,
    `qtde_max_alunos` INTEGER NOT NULL,
    `horario_aula` TIME(0) NOT NULL,
    `duracao_aula` FLOAT NOT NULL,
    `data_inicial` DATE NOT NULL,
    `data_final` DATE NOT NULL,

    INDEX `instrutor`(`instrutor`),
    INDEX `monitor`(`monitor`),
    INDEX `tipo_atividade`(`tipo_atividade`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enderecos` (
    `id` INTEGER NOT NULL,
    `pessoa` INTEGER NOT NULL,
    `cep` VARCHAR(255) NOT NULL,
    `logradouro` VARCHAR(255) NOT NULL,
    `numero` VARCHAR(255) NOT NULL,
    `bairro` VARCHAR(255) NOT NULL,
    `complemento` VARCHAR(255) NULL,
    `estado` VARCHAR(255) NOT NULL,
    `cidade` VARCHAR(255) NOT NULL,
    `tipo` VARCHAR(255) NOT NULL,

    INDEX `pessoa`(`pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `matriculas` (
    `id` INTEGER NOT NULL,
    `aluno` INTEGER NOT NULL,
    `turma` INTEGER NOT NULL,

    UNIQUE INDEX `matriculas_id_key`(`id`),
    INDEX `aluno`(`aluno`),
    INDEX `turma`(`turma`),
    PRIMARY KEY (`id`, `aluno`, `turma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pessoas` (
    `id` INTEGER NOT NULL,
    `tipo` ENUM('INSTRUTOR', 'ALUNO') NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `data_nascimento` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `presencas` (
    `id` INTEGER NOT NULL,
    `matricula` INTEGER NOT NULL,
    `data` DATE NOT NULL,
    `presente` BOOLEAN NOT NULL,

    INDEX `matricula`(`matricula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `telefones_enderecos` (
    `telefone` VARCHAR(255) NOT NULL,
    `endereco` INTEGER NOT NULL,
    `whatsapp` BOOLEAN NOT NULL,

    INDEX `endereco`(`endereco`),
    PRIMARY KEY (`telefone`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
