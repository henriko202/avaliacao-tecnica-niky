/*
  Warnings:

  - Made the column `complemento` on table `enderecos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `enderecos` MODIFY `complemento` VARCHAR(255) NOT NULL DEFAULT '';
