# 🚀 AI by Auchan - Hub de Assistentes

Esta é uma Web App (PWA) desenvolvida para centralizar o acesso aos assistentes de Inteligência Artificial da Auchan. Permite aos colaboradores selecionar a sua loja e aceder rapidamente às ferramentas relevantes para o seu formato.

🔗 **Aceder à App:** [Coloca aqui o teu Link do GitHub Pages]

---

## ✨ Funcionalidades

* **Personalização:** Filtra assistentes com base no Formato (Hiper, Super, Prox, Serviços) e Loja.
* **Mobile-First:** Desenhada para funcionar como uma App nativa no telemóvel.
* **Painel de Administração:** Permite adicionar, editar e remover lojas e assistentes diretamente na App.
* **Configuração Externa:** Os dados são carregados de um ficheiro `config.js` separado para facilitar a manutenção.

---

## 📱 Como Instalar no Telemóvel

A aplicação funciona como uma PWA (Progressive Web App). Para a melhor experiência:

**iPhone (iOS):**
1. Abrir no Safari.
2. Tocar no botão **Partilha**.
3. Selecionar **"Adicionar ao Ecrã Principal"**.

**Android:**
1. Abrir no Chrome.
2. Tocar nos **3 pontinhos** (menu).
3. Selecionar **"Instalar Aplicação"** ou "Adicionar ao Ecrã Principal".

---

## ⚙️ Administração e Atualização

A gestão de lojas e assistentes é feita através da própria aplicação, gerando um ficheiro de configuração que deve ser atualizado aqui no GitHub.

### 1. Aceder ao Admin
* Toque **5 vezes seguidas** no logótipo (Pássaro/AI) no topo da App.
* Insira a senha de administrador.

### 2. Fluxo de Atualização (Como atualizar os dados)
Como este projeto não usa base de dados online, o processo de atualização é:

1.  Fazer as alterações (adicionar lojas/assistentes) no menu Admin da App.
2.  Ir ao separador **"Guardar/Exportar"**.
3.  Clicar em **"📥 Baixar Ficheiro de Configuração"**.
4.  Será descarregado um ficheiro `config.js` para o seu computador.
5.  **Fazer upload** desse ficheiro `config.js` para este repositório do GitHub (substituindo o existente).

> **Nota:** As alterações só ficam visíveis para todos os utilizadores depois de o ficheiro `config.js` ser atualizado aqui no GitHub.

---

## 📂 Estrutura do Projeto

* `index.html`: O código principal da aplicação (Layout, Lógica e Estilos).
* `config.js`: Ficheiro externo que contém a base de dados (Lojas e Assistentes). **É este ficheiro que é atualizado frequentemente.**
* `manifest.json`: Configurações para a instalação no telemóvel (ícone, nome, cores).
* `service-worker.js`: Script para gestão de cache e funcionamento offline.
* `imagens/`: Pasta com os logótipos e ícones.

---

## 🛠️ Tecnologias
* HTML5 / CSS3 / JavaScript (Vanilla)
* PWA (Progressive Web App)
* GitHub Pages (Hospedagem)
