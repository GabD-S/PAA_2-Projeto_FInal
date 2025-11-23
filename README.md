# Projeto PAA - Sistema de Perguntas e Respostas (QA System)

[cite_start]Este projeto visa desenvolver um sistema capaz de responder perguntas feitas em linguagem natural, utilizando algoritmos eficientes implementados pelo grupo, com foco na análise de complexidade[cite: 5, 12, 20].

## 🚀 Organização do Repositório

### Fluxo de Trabalho (Git Flow)
Para mantermos o código organizado e evitar conflitos, seguiremos estas regras:

1.  **Branches:**
    * `main`: Apenas código estável e pronto para entrega.
    * `develop`: Branch de integração. Todos os Pull Requests (PRs) devem vir para cá.
    * **Feature Branches:** Cada dupla ou tarefa deve criar uma branch separada a partir da `develop`.
        * Padrão de nome: `feature/nome-da-tarefa` (ex: `feature/interface-web`, `feature/algoritmo-busca`).

2.  **Commits (Conventional Commits):**
    Use mensagens claras e padronizadas:
    * `feat:` para novas funcionalidades.
    * `fix:` para correção de bugs.
    * `docs:` para alterações na documentação.
    * `refactor:` para melhorias de código que não mudam funcionalidade.
    * *Exemplo:* `feat: adiciona endpoint de busca no backend`

---

## 🛠️ Divisão de Tarefas por Duplas

### Dupla 1: Frontend e Interface Web
**Responsáveis:** @UserGithub1, @UserGithub2

[cite_start]O objetivo é criar a interface onde o usuário interage com o sistema[cite: 10, 11].

* **Fase 1: Setup Inicial**
    * Criar a estrutura básica do frontend (HTML/CSS/JS ou Framework escolhido).
    * Configurar a conexão básica com o servidor (ex: definir a URL base da API).
* **Fase 2: Layout e Input**
    * Desenvolver a tela principal com caixa de texto para a pergunta.
    * Criar a área de exibição da resposta retornada.
* **Fase 3: Integração**
    * Implementar a chamada assíncrona (fetch/axios) para o endpoint do backend.
    * Tratar estados de "Carregando..." e erros de conexão.

---

### Dupla 2: Backend e Processamento de Dados
**Responsáveis:** @UserGithub3, @UserGithub4

[cite_start]Responsáveis pelo servidor, ingestão de dados e orquestração[cite: 8, 9, 11].

* **Fase 1: Setup do Servidor**
    * Configurar o ambiente (Python/Flask/FastAPI).
    * Criar o endpoint principal (ex: `POST /api/ask`) que recebe o JSON com a pergunta.
* **Fase 2: Leitura e Limpeza de Dados (ETL)**
    * [cite_start]Implementar função para ler os arquivos de texto (base de conhecimento)[cite: 8].
    * Aplicar pré-processamento: remover pontuação, *stop words* e normalizar texto (tudo minúsculo).
* **Fase 3: Conexão com o Core**
    * Receber a pergunta limpa e passar para o módulo da Dupla 3.
    * Receber a resposta processada e devolver para o Frontend em formato JSON.

---

### Dupla 3: Algoritmos e Otimização (Core PAA)
**Responsáveis:** @GabD-S, @UserGithub6

Responsáveis pela inteligência do sistema. [cite_start]Devem **implementar** os algoritmos de busca/otimização e realizar a análise de complexidade[cite: 12, 20].

* **Fase 1: Pesquisa e Definição**
    * Definir qual algoritmo será implementado (ex: TF-IDF, Similaridade de Cosseno, Bag of Words).
    * Esboçar a estrutura de dados para indexação.
* **Fase 2: Implementação da Indexação (Treinamento)**
    * [cite_start]Criar função que transforma os textos da base em vetores ou índices[cite: 9].
    * *Nota:* O código deve ser autoral para fins de avaliação da disciplina.
* **Fase 3: Implementação da Busca**
    * Criar função que compara a pergunta do usuário com a base indexada e retorna a melhor resposta.
* **Fase 4: Análise de Complexidade**
    * Documentar a complexidade de tempo e espaço (Big O) dos algoritmos criados.
    * [cite_start]Gerar gráficos ou tabelas comparativas para o relatório final[cite: 23].

---

## 📄 Documentação e Entrega

[cite_start]O relatório final deve ser um PDF contendo[cite: 23]:
1.  Descrição dos algoritmos utilizados.
2.  Análise detalhada da complexidade.
3.  Instruções de como rodar o projeto.

**Importante:** Mantenham o código comentado, especialmente nas funções complexas da Dupla 3, para facilitar a escrita do relatório final.
