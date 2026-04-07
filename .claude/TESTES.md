# Documentação dos Testes — F1 API

Este documento descreve todos os testes automatizados realizados neste projeto, que valida a API pública de Fórmula 1 disponível em `https://f1api.dev/api`.

---

## Visão Geral

| Item              | Detalhe                                         |
|-------------------|-------------------------------------------------|
| API testada       | [f1api.dev](https://f1api.dev)                  |
| Ferramenta        | Postman + Newman                                |
| Tipo de teste     | Integração (REST API)                           |
| Total de testes   | 9 casos de teste (5 positivos + 4 negativos)    |
| Relatório         | HTML gerado via `newman-reporter-htmlextra`     |
| CI/CD             | GitHub Actions (`.github/workflows/api-test.yml`) |

---

## Como Executar

```bash
# Rodar os testes com saída no terminal
npm test

# Rodar os testes e gerar relatório HTML (relatorio.html)
npm run test:relatorio
```

---

## Casos de Teste

### Testes Positivos (Fluxo Esperado)

#### TC-001 — Listar Pilotos
- **Endpoint:** `GET /drivers`
- **Objetivo:** Verificar que o endpoint de pilotos está disponível e retorna dados válidos.
- **Validações:**
  - Status HTTP `200 OK`
  - Resposta no formato JSON

---

#### TC-002 — Buscar Piloto Específico (Verstappen)
- **Endpoint:** `GET /drivers/search?q=verstappen`
- **Objetivo:** Verificar que a busca por nome retorna o piloto correto.
- **Validações:**
  - Status HTTP `200 OK`
  - Encontra Max Verstappen pelo `driverId`
  - Sobrenome do piloto é `"Verstappen"`
  - Total de resultados é `>= 1`

---

#### TC-003 — Listar Temporadas Anteriores
- **Endpoint:** `GET /seasons`
- **Objetivo:** Verificar que o histórico de temporadas está disponível.
- **Validações:**
  - Status HTTP `200 OK`
  - Resposta contém o campo `championships` (array)
  - O array possui ao menos `20` temporadas

---

#### TC-004 — Buscar Piloto Específico (Hamilton)
- **Endpoint:** `GET /drivers/search?q=hamilton`
- **Objetivo:** Verificar que a busca retorna corretamente o piloto Lewis Hamilton.
- **Validações:**
  - Status HTTP `200 OK`
  - Piloto encontrado não é `undefined`
  - Sobrenome do piloto é `"Hamilton"`
  - Total de resultados é `>= 1`

---

#### TC-005 — Listar Circuitos
- **Endpoint:** `GET /circuits`
- **Objetivo:** Verificar que o endpoint de circuitos está disponível e retorna dados.
- **Validações:**
  - Status HTTP `200 OK`
  - Resposta contém o campo `circuits` (array)
  - O array possui ao menos `10` circuitos

---

### Testes Negativos (Tratamento de Erros)

#### TC-011 — Buscar Temporada por Ano Inválido
- **Endpoint:** `GET /races/2011`
- **Objetivo:** Verificar que a API retorna erro ao buscar um ano sem dados cadastrados.
- **Validações:**
  - Status HTTP `404 Not Found`
  - Mensagem de erro contém `"No seasons found"`

---

#### TC-012 — Buscar Piloto Inexistente
- **Endpoint:** `GET /drivers/search?q=piloto_que_nao_existe`
- **Objetivo:** Verificar que a API retorna erro ao buscar um piloto que não existe.
- **Validações:**
  - Status HTTP `404 Not Found`
  - Mensagem de erro é exatamente `"No drivers found."`
  - Campo `status` na resposta é `404`

---

#### TC-013 — Buscar Corridas de Ano Inválido (1800)
- **Endpoint:** `GET /races/1800`
- **Objetivo:** Verificar que a API rejeita anos que estão muito fora do alcance histórico da F1.
- **Validações:**
  - Status HTTP `404 Not Found`
  - Campo `status` na resposta é `404`

---

#### TC-014 — Buscar Circuito Inexistente
- **Endpoint:** `GET /circuits/circuito_invalido_xyz`
- **Objetivo:** Verificar que a API retorna erro ao buscar um circuito que não existe.
- **Validações:**
  - Status HTTP `404 Not Found`
  - Campo `status` na resposta é `404`

---

## Estrutura dos Arquivos de Teste

```
testing-api-f1/
├── collections/
│   ├── f1api.collection.json             # Coleção Postman (usada pelo CI)
│   └── f1api.postman_collection.json     # Coleção Postman (usada pelo npm test)
└── environments/
    └── f1api.environment.json            # Variável baseUrl da API
```

### Variável de Ambiente

| Variável  | Valor                      |
|-----------|----------------------------|
| `baseUrl` | `https://f1api.dev/api`    |

---

## Relatório de Execução

O relatório HTML é gerado em `relatorio.html` na raiz do projeto ao rodar `npm run test:relatorio`. Ele é produzido pelo plugin `newman-reporter-htmlextra` e apresenta:

- Resumo geral de execução (passou / falhou)
- Detalhes de cada requisição (headers, body, tempo de resposta)
- Resultado de cada assertion por teste

---

## CI/CD

O arquivo `.github/workflows/api-test.yml` configura a execução automática dos testes via **GitHub Actions** a cada `push` ou `pull request`, garantindo que regressões sejam detectadas antes do merge.
