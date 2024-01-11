# CRUD Cliente

## CREATE

> ## Dados

- name
- status

> ## Fluxo primário

1.  A aplicação verifica se usuário tem permissão para criar clientes
2.  Usuário solicita a criação de um cliente com os seguintes campos: name e status
3.  A aplicação verifica se o campo name é validado
4.  A aplicação faz a operação INSERT na tabela CLIENTE com as informações acima
5.  A aplicação retorna mensagem de sucesso

> ## Fluxo alternativo: Atributo status vazio ou nulo

1. Atributos status terá o valor como TRUE caso o usuário não o repasse com o valor vazio

> ## Fluxo de exceção: Atributos inválidos

1.  Caso atributos: name vazio ou nulo, retornar error
    1.1 Caso exista cliente com o mesmo nome, retornar erro

> ## Fluxo de exceção: Usuario sem permissão

1.  Caso o usuario não tenha permissão para criar cliente, retornar mensagem de erro de permissão

## LIST

> ## Dados

> ## Fluxo primário

1.  A aplicação verifica se usuário tem permissão para listar clientes
2.  Usuário solicita a listagem de todos os cliente cadastrados
3.  A aplicação faz a operação SELECT na tabela CLIENTE, retornando todas as informações do mesmo
4.  A aplicação retorna todos os cliente cadastrados na base de dados

> ## Fluxo alternativo:

> ## Fluxo de exceção: Tabela Cliente vazia

1.  Caso a tabela Cliente esteja vazia, retornar error

> ## Fluxo de exceção: Usuario sem permissão

1.  Caso o usuario não tenha permissão para criar cliente, retornar mensagem de erro de permissão

## GET by ID

> ## Dados

- cliete_id

> ## Fluxo primário

1.  A aplicação verifica se usuário tem permissão para listar clientes por id
2.  Usuário solicita a listagem de cliente por id
3.  A aplicação faz a operação SELECT na tabela CLIENTE, retornando todas as informações do mesmo
4.  A aplicação retorna o cliente cadastrados na base de dados

> ## Fluxo alternativo:

> ## Fluxo de exceção: Tabela Cliente vazia

1.  Caso o parametro cliente_id esteja vazia, retornar error
    1.1 Caso a tabela Cliente esteja vazia, retornar error

> ## Fluxo de exceção: Usuario sem permissão

1.  Caso o usuario não tenha permissão para criar cliente, retornar mensagem de erro de permissão

## UPDATE

> ## Dados

- cliete_id
- name
- status
- create_at
- updated_at

> ## Fluxo primário

1.  A aplicação verifica se usuário tem permissão para atualizar clientes
2.  Usuário solicita a atualização de um cliente com os seguintes campos: cliente_id, name e status
3.  A aplicação verifica se os campos cliente_id, name e status é validado
4.  A aplicação faz a operação UPDATE na tabela CLIENTE com as informações acima
5.  A aplicação retorna mensagem de sucesso

> ## Fluxo alternativo: Atributo status vazio ou nulo

1.  Caso o atributo name não seja passado pelo usuário, manter valor
    1.2 Caso o atributo status não seja passado pelo usuário, manter valor

> ## Fluxo de exceção: Tabela Cliente vazia

1.  Caso o parametro cliente_id esteja vazia, retornar error
    1.1 Caso a tabela Cliente esteja vazia, retornar error

> ## Fluxo de exceção: Atributos inválidos

1.  Caso atributos: name vazio ou nulo, retornar error
    1.1 Caso exista cliente com o mesmo nome, retornar erro

> ## Fluxo de exceção: Usuario sem permissão

1.  Caso o usuario não tenha permissão para criar cliente, retornar mensagem de erro de permissão

## DELETE

> ## Dados

- cliete_id

> ## Fluxo primário

1.  A aplicação verifica se usuário tem permissão para deletar clientes
2.  Usuário solicita a exclusão de um cliente
3.  A aplicação verifica se parametro cliente_id é validado
4.  A aplicação faz a operação DELETE na tabela CLIENTE com as informações acima
5.  A aplicação retorna mensagem de sucesso

> ## Fluxo de exceção: Tabela Cliente vazia

1.  Caso o parametro cliente_id esteja vazia, retornar error
    1.1 Caso a tabela Cliente esteja vazia, retornar error

> ## Fluxo de exceção: Parametro inválido

1.  Caso parametro: cliente_id vazio ou nulo, retornar error

> ## Fluxo de exceção: Usuario sem permissão

1.  Caso o usuario não tenha permissão para criar cliente, retornar mensagem de erro de permissão
