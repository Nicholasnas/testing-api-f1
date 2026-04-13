# 🏎️ F1 API Automated Testing — Qualidade de Software

Projeto desenvolvido para a disciplina de **Qualidade de Software**. O objetivo é implementar uma suíte de 20 testes automatizados de integração na **F1 API** (https://f1api.dev), cobrindo cenários de sucesso e erro.

## 👥 Integrantes
* Henrique Junqueira Bicalho
* Douglas Hideaki de Almeida Otani
* Nicholas Lima do Nascimento
* Otávio Oliveira Jimenez
* Otávio Augusto Silva Lima

---

## 🛠️ Tecnologias e Ferramentas
* **Postman** — Criação e estruturação dos Casos de Teste.
* **Newman** — Executor dos testes via linha de comando (CLI).
* **Node.js + npm-run-all** — Orquestração de scripts e execução sequencial/paralela.
* **newman-reporter-htmlextra** — Geração de relatórios visuais avançados.
* **GitHub Actions** — Pipeline de CI para execução automatizada a cada push.

---

## 📋 Escopo dos Testes (TC-001 a TC-020)

A suíte está dividida em 10 cenários de sucesso e 10 cenários de erro/inválidos, conforme os requisitos do projeto.

| ID | Cenário de Teste | Endpoint | Tipo |
| :--- | :--- | :--- | :--- |
| **TC-001** | Pesquisa de Piloto (Metadados e Tipagem) | `/drivers/search` | Happy Path |
| **TC-002** | Listar Temporadas (Ordenação e Regex) | `/seasons` | Happy Path |
| **TC-003** | Tipagem de dados de equipe específica | `/teams/:id` | Happy Path |
| **TC-004** | Endpoint de corridas de temporada específica | `/:year` | Happy Path |
| **TC-005** | Drivers Championship 2021 (Funcional) | `/:year/drivers-championship` | Happy Path |
| **TC-006** | Ordenação do Campeonato | `/:year/drivers-championship` | Happy Path |
| **TC-007** | Listar pilotos da temporada 2024 | `/2024/drivers` | Happy Path |
| **TC-008** | Listar circuitos da temporada 2024 | `/2024/circuits` | Happy Path |
| **TC-009** | Listar Pilotos da Temporada Atual | `/current/drivers` | Happy Path |
| **TC-010** | Listar Circuitos | `/circuits` | Happy Path |
| **TC-011** | Buscar Pilotos de Ano Inválido | `/:year/drivers` | Inválido |
| **TC-012** | Pesquisar Piloto Inexistente | `/drivers/search` | Inválido |
| **TC-013** | Equipe inexistente em endpoint específico | `/teams/:id` | Inválido |
| **TC-014** | Corridas para uma temporada inválida | `/:year` | Inválido |
| **TC-015** | Drivers Championship Ano Inválido | `/:year/drivers-championship` | Inválido |
| **TC-016** | Endpoint Standings Inválido | `/:year/drivers-championship-invalid` | Inválido |
| **TC-017** | Buscar piloto inexistente por ID | `/drivers/:id` | Inválido |
| **TC-018** | Buscar equipe inexistente por ID | `/teams/:id` | Inválido |
| **TC-019** | Buscar Corridas de Ano Inválido (1800) | `/races/1800` | Inválido |
| **TC-020** | Buscar Circuito Inexistente | `/circuits/:id` | Inválido |

---

## 🚀 Execução

### Pré-requisitos
* Node.js v20+ e npm instalados.

### Instalação
```bash
git clone [https://github.com/Nicholasnas/testing-api-f1](https://github.com/Nicholasnas/testing-api-f1)
cd testing-api-f1
npm install
```

### Comandos de Teste
* **Execução de Desenvolvimento (CI Friendly):** Roda as collections individualmente, permitindo identificar falhas por integrante sem interromper o fluxo geral.
    ```bash
    npm run test:dev
    ```
* **Execução Unificada (Relatório):** Utiliza um orquestrador Node.js para realizar o merge, ordenar todos os testes e gerar o relatório final unificado.
    ```bash
    npm run test:all
    ```

---

## 📂 Estrutura do Repositório
```text
testing-api-f1/
├── .github/workflows/      # Configuração do GitHub Actions (CI)
├── collections/            # Collections do Postman por integrante
├── environments/           # Variáveis de ambiente (baseUrl, etc.)
├── run-tests.js            # Orquestrador de merge e ordenação de testes
├── package.json            # Scripts e dependências
└── README.md
```

---

## 🤖 Declaração de Uso de IA (Integridade Acadêmica)

Conforme exigido pelo regulamento do projeto, declaramos que ferramentas de Inteligência Artificial foram utilizadas como suporte:

## 🤖 Declaração de Uso de IA (Integridade Acadêmica)

Conforme exigido pelo regulamento do projeto (Item 11), declaramos que ferramentas de Inteligência Artificial (**Google Gemini** e **Claude AI**) foram utilizadas como suporte colaborativo no desenvolvimento deste trabalho:


* **Domínio do Código:** O grupo assegura o pleno entendimento de todo o código produzido e das configurações de infraestrutura implementadas, utilizando as ferramentas apenas como apoio à produtividade e revisão.
