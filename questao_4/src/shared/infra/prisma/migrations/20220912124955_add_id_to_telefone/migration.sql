/*
  Warnings:

  - The primary key for the `telefones_enderecos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `telefones_enderecos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `telefones_enderecos` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
