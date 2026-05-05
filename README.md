# API de Livros

Atividade da faculdade para criar uma API REST usando Node.js e Express.

A API guarda os livros em memoria, usando um array no proprio codigo. Por isso, quando o servidor e reiniciado, os livros cadastrados somem.

## Como executar

Primeiro instale as dependencias:

```bash
npm install
```

Depois inicie o servidor:

```bash
npm start
```

O servidor vai rodar em:

```text
http://localhost:3000
```

## Formato dos dados

Cada livro possui:

```json
{
  "id": 1,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899,
  "genero": "Romance"
}
```

## Rotas da API

Listar todos os livros:

```http
GET /livros
```

Buscar um livro pelo ID:

```http
GET /livros/1
```

Cadastrar um livro:

```http
POST /livros
```

Exemplo de JSON:

```json
{
  "titulo": "O Hobbit",
  "autor": "J.R.R. Tolkien",
  "ano": 1937,
  "genero": "Fantasia"
}
```

Atualizar todos os dados de um livro:

```http
PUT /livros/1
```

Atualizar apenas o titulo ou o genero:

```http
PATCH /livros/1
```

Exemplo:

```json
{
  "genero": "Literatura Brasileira"
}
```

Remover um livro:

```http
DELETE /livros/1
```

## Filtro por genero

Tambem foi feito o filtro por genero usando Query Params:

```http
GET /livros?genero=Fantasia
```

## Observacao

Antes de compactar o projeto para entregar, a pasta `node_modules` deve ser removida.
