# Questão 1 - Resultado

Utilizei o [dbdiagram.io](https://dbdiagram.io/home) para criar o diagrama de entidade relacionamento.

Eu geralmente escrevo as minhas tabelas e campos em inglês, mas para um melhor entendimento, eu escrevi tudo em português.

![Diagrama de entidade relacionamento](<./DER%20-%20Niky%20(Academia%20de%20Gin%C3%A1stica).png>)
O diagrama pode ser acessado [aqui](https://dbdiagram.io/d/631bd5af0911f91ba5780fd1).
Ou caso queira ver a imagem em tamanho maior, [clique aqui](<./DER%20-%20Niky%20(Academia%20de%20Gin%C3%A1stica).png>)

## Observações

- As chave primárias estão em negrito.
- Adicionado um campo "tipo" na tabela de "enderecos" para diferenciar entre endereço comercial e endereço residencial, esse campo atualmente é do tipo varchar, mas poderia ser um enum.
- Adicionado um campo "whatsapp" na tabela de "telefones_enderecos" para saber se o telefone é um número de whatsapp ou não (pois também existe whatsapp de telefones fixos, geralmente empresariais).
- Tanto Aluno quanto Instrutor possuem "endereço" e "telefone", que são duas tabelas diferentes, então eles foram colocados em uma generalização, que é a tabela de "pessoa".
