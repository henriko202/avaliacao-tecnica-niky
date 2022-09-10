-- A) Para etiquetar uma remessa de correspondência, crie uma query que apresente o nome da pessoa e seu endereço.
-- Importante: Apenas pessoas com endereço devem ser exibidas na lista;
SELECT
    pessoas.id,
    nome,
    enderecos.*,
    cep.*
FROM
    avaliacao_niky.pessoas
    INNER JOIN enderecos
    INNER JOIN cep
WHERE
    pessoas.id = enderecos.pessoa_id
    AND enderecos.cep = cep.cep
ORDER BY
    pessoas.id;

-- B) Para que possamos alertar a equipe responsável, crie uma query que identifique 
-- eventuais pessoas que não possuam endereço;
SELECT
    *
FROM
    pessoas
WHERE
    pessoas.id NOT IN (
        SELECT
            enderecos.pessoa_id
        FROM
            enderecos
    );

-- C)Levando em conta que todos os campos do cadastro dos dados pessoa são obrigatórios, 
-- crie uma query que apresente as pessoas que possuem erro em seu cadastro, 
-- para que a equipe possa complementá-lo;
SELECT
    *
FROM
    pessoas
WHERE
    pessoas.id IS NULL
    OR pessoas.nome IS NULL
    OR pessoas.rg IS NULL
    OR pessoas.data_nascimento IS NULL
    OR pessoas.sexo IS NULL;

-- D) Monte uma lista telefônica com “Nome”, “Sexo”, “Telefone” e “Contato”, onde telefone deve exibir celular ou fixo.
-- Importante: Todas as pessoas devem ser exibidas na lista, mesmo quem não tenha telefone;
SELECT
    pessoas.id,
    pessoas.nome,
    pessoas.sexo,
    contatos.tipo,
    contatos.valor,
    contatos.contato
FROM
    pessoas
    LEFT JOIN contatos ON pessoas.id = contatos.pessoa_id;

-- E) Crie uma query que apresente as pessoas com mais de 1 filho;
SELECT
    pessoas.*,
    count(*) AS qtde_filhos
FROM
    dependentes
    INNER JOIN pessoas
WHERE
    dependentes.pessoa_id = pessoas.id
    AND parentesco = "Filho(a)"
GROUP BY
    pessoa_id
HAVING
    count(*) > 1