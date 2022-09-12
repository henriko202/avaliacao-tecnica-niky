# Questão 2

Utilizei o TypeScript para criar as classes da questão 2, não foi estipulado no enunciado que a linguagem deveria ser JavaScript, então utilizei TypeScript pois em um contexto real e com mais programadores trabalhando no mesmo código, o TypeScript fica melhor de se trabalhar.

Iremos utilizar o vitest para fazer o TDD.

Estamos utilizando o prisma para fazer a conexão com o banco de dados.
Existem alguns drawbacks do prisma, um deles é que ele não converte automaticamente as strings para o tipo de dado, como por exemplo de String para Float

Existem outros drawbacks no projeto, que são:

- A arquitetura do projeto como um todo não está muito boa, e isso é inteiramente falha minha, pois acabei utilizando muito tempo e acabou faltando para fazer o backend 100% certo.
- As entidades possuem um campo chamado props que contém todo o conteúdo, está bem feio, não iria dar tempo de mudar as entidades para fazer elas ficarem 100% corretas.
- Tratamentos de erros não estão 100% corretamente implementados, não deveria dar um throws mas sim responder a request corretamente.

Não foram feitos os testes unitários corretamente, o repositório em `modules/repositories/in-memory` é o utilizado para fazer os teste em memória, ele foi implementado na mão, era pra ter sido usado o SQLite mas infelizmente não foi possível por causa da restrição de tempo.

## Como rodar

Para rodar o projeto, você precisa ter o NodeJS instalado na sua máquina, e o npm.
Depois de ter configurado as variáveis de ambiente no arquivo `.env`, podemos instalar as dependências usando o comando `npm install`.
E então podemos sincronizar o banco de dados com o schema do prisma usando `npm run sync_DB`.
E finalmente podemos rodar o projeto com o comando `npm run dev`.

A documentação do backend está disponível em `http://localhost:4000/api-docs`.

Os testes estão disponíveis com o comando `npm run test`.
