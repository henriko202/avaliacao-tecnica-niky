// eslint-disable-next-line @typescript-eslint/no-var-requires
const Prisma = require('@prisma/client')

const { PrismaClient } = Prisma

const prisma = new PrismaClient()

module.exports = prisma
