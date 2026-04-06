# Testes de API com Postman + Newman — F1 API

Projeto de qualidade de software realizando testes de integração, documentação e geração de artefatos.

Utiliza a **F1 API** (https://f1api.dev) — API REST pública sobre Fórmula 1 e o **Newman** (CLI do Postman) para execução automatizada via terminal e CI/CD.

---

## O que é testado?

|  Request | Descrição |
|---|---|
| GET /drivers | Lista pilotos

tem outros endpoints que podem ser testados


## Tecnologias

- **Postman** — criação dos testes
- **Newman** — execução via linha de comando
- **newman-reporter-htmlextra** — relatório HTML
---

## Pré-requisitos

- Node.js 20+
- npm

---

## Instalação

```bash
# Clonar o repositorio remoto do projeto
git clone https://github.com/Nicholasnas/testing-api-f1
# Entrar na pasta do projeto
cd f1-api-testing
# Instalar as dependencias
npm install
```


## Execução dos Testes

### Saida simples
```bash
npm test
```
### Rodar com relatório HTML
```bash
npm run test:relatorio
```
Após Rodar o será gerado um arquivo relatorio.html na raiz do projeto.

## Estrutura do projeto

f1-api-testing/
│
├── collections/
│   └── f1api.collection.json
│
├── environments/
│   └── f1api.environment.json
│
├── .github/
│   └── workflows/
│       └── api-tests.yml
│
├── package.json
└── README.md

## Conceitos Abordados

- Testes de Integração REST
- Assertions automatizadas
- Status Codes HTTP
- Testes Positivos e Negativos
- Variáveis de Ambiente
- Execução CLI
- CI/CD 


