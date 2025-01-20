# React Application with JSON Server

Este repositório contém uma aplicação React integrada com **JSON Server** para simulação de uma API local, além de **Jest** para testes automatizados. A aplicação simula a transferência, agendamento e extratos

A API simulada pelo JSON Server inclui duas rotas principais:

- **`/users`** – Retorna uma lista com 3 itens de usuários.
- **`/transfers`** – Retorna uma lista com 5 itens de transferências.

## Pré-requisitos

Antes de começar, você precisará ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS) v22
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)

## Instalação

Siga os passos abaixo para configurar o ambiente local:

1. Clone o repositório:

```bash
git clone https://github.com/disabela-maria20/react-banco-topaz-app.git
cd react-banco-topaz-app
```

2. Instale as dependências do projeto:

```bash
npm install
```

## Executando a Aplicação

Para iniciar a aplicação no ambiente de desenvolvimento, utilize o comando:

```bash
npm run dev
```

Este comando irá executar dois processos simultaneamente utilizando o **concurrently**:

- `npm run dev:react` – Inicia o servidor de desenvolvimento do React com Vite.
- `npm run dev:server` – Inicia o JSON Server, que simula uma API local e observa alterações no arquivo `db.json` na porta `3001`.

### URLs Locais

- A aplicação React estará disponível em: [http://localhost:3000](http://localhost:3000)
- O JSON Server estará disponível em: [http://localhost:3001](http://localhost:3001)

### Endpoints da API

A API simulada possui os seguintes endpoints:

## Testes

A aplicação também utiliza o Jest para testes automatizados. Para rodar os testes, utilize o seguinte comando:

```bash
npm run test
```
