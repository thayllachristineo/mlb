# Mini clone do MELI

[![Coverage Status](https://coveralls.io/repos/github/thayllachristineo/kju/badge.svg?branch=main)](https://coveralls.io/github/thayllachristineo/mlb?branch=main) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/thayllachristineo/kju/.github%2Fworkflows%2Fclient-build.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/d26e51ec-c806-4f6a-aa02-b882f680a10f/deploy-status)](https://app.netlify.com/sites/mlb/deploys)

> Este repositório contém a solução de teste técnico do Mercado Livre para uma posição de front-end.

## Tecnologias utilizadas 

### `client side`
- [Jest](https://jestjs.io/pt-BR/) 
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [styled components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/) 
- [vitejs](https://vitejs.dev/)

### `server side`
- [cors](https://www.npmjs.com/package/cors)
- [express](https://expressjs.com/pt-br/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [nodemon](https://nodemon.io/)
- [TypeScript](https://www.typescriptlang.org/) 

Observação: o [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) foram configurados em ambos sides.
    
## Como rodar o projeto?
1 - Clone o projeto para a sua máquina: 

```
git clone git@github.com:thayllachristineo/mlb.git
```

2 - Instale as dependências: 
```
npm install
```

3 - Crie um arquivo `.env` similar ao `.env.example` no `client` e no `server`.

4 - Agora, retorne ao terminal e dê start ao servidor de desenvolvimento: 
```
npm run dev
```

> Observação: Para que o *client* e o *server* rodem simultaneamente, sem a necessidade de dois terminais, foi adicionada a biblioteca `concurrently`.


## Como rodar os testes?

Foram criados testes unitários para alguns componentes. Para visualizá-los, basta rodar o comando abaixo em seu terminal: 

```
npm run test
```
