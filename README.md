# 🚀 AI by Auchan - Hub de Assistentes

Esta é uma Web App (PWA) desenvolvida para centralizar o acesso aos assistentes de Inteligência Artificial da Auchan. Permite aos colaboradores selecionar a sua loja e aceder rapidamente às ferramentas relevantes para o seu formato.

🔗 **Aceder à App:** https://filiperod-byte.github.io/ai-by-auchan/

---

## ✨ Funcionalidades

### 🧩 App (Utilizador)
* **Personalização:** Filtra assistentes com base no **Formato** (Hiper, Super, Prox, Serviços) e **Loja**.
* **Mobile-First / PWA:** Desenhada para funcionar como App nativa no telemóvel.
* **Acesso rápido:** Botões com imagem + label para abrir assistentes com 1 toque.
* **Logging automático:** Regista acessos por assistente e loja via Google Forms (modo `no-cors`).

### 🛠️ Admin (Gestão)
* **Painel de Administração:** Permite **adicionar / editar / remover** lojas e assistentes diretamente na App.
* **Scopes por Assistente:** Cada assistente pode ser configurado para:
  - Formato específico + Loja específica  
  - `*` (Qualquer Formato)  
  - `*` (Qualquer Loja)
* **Validações anti-caos:** Bloqueia conflitos de nome por sobreposição de escopo e duplicados exatos.
* **Duplicar assistente:** Cria cópia rápida (e obriga a definir scope antes de “aparecer” sem querer).

### 🧾 QRCodes (Novo)
* **Separador “QRCodes” no Admin:** Geração de PDF para impressão de QRCodes **sem sair do Admin**.
* **Formato/Loja dentro do Admin:** Permite imprimir QRCodes para qualquer loja/formato sem mexer na seleção da App.
  - Pode usar: seleção do **Admin** ou “**Usar seleção da App**”.
* **Lista de impressão com estado:**
  - **🆕 Novo** → Assistente existente localmente mas não publicado no `config.js` (comparação por URL)
  - **⚠️ Alterado** → Descrição local diferente da publicada (comparação por URL)
  - Destaques visuais com sombreado para não passar nada “pela porta do cavalo”.
* **Selecionar tudo / Seleção parcial:** Checkbox global com estado indeterminado.
* **Validação de descrições:** Se algum assistente selecionado estiver sem descrição:
  - abre modal para preencher,
  - guarda no estado local,
  - e **só depois** permite gerar o PDF.
* **Aviso de sincronização:** Se existirem alterações face ao publicado, a App avisa para fazer download e atualizar o `config.js`.

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

A gestão de lojas e assistentes é feita através da própria aplicação, gerando um ficheiro de configuração que deve ser atualizado no GitHub.

### 1. Aceder ao Admin
* Toca **5 vezes seguidas** no logótipo (AI by Auchan) no topo da App.
* Insere a senha de administrador.

### 2. Fluxo de Atualização (Como atualizar os dados)
Como este projeto não usa base de dados online, o processo de atualização é:

1. Fazer as alterações no menu Admin (Lojas / Assistentes).
2. (Opcional) Ir ao separador **QRCodes** e gerar PDF(s) para impressão.
3. Ir ao separador **Guardar**.
4. Clicar em **"📥 Download Ficheiro de Configuração"**.
5. Será descarregado um ficheiro `config.js`.
6. **Fazer upload** desse `config.js` para este repositório (substituindo o existente).

> **Nota:** As alterações só ficam visíveis para todos os utilizadores depois de o ficheiro `config.js` ser atualizado no GitHub.

---

## 🧾 QRCodes (Como imprimir)

1. Entrar no **Admin** → separador **QRCodes**
2. Selecionar:
   - Formato/Loja **no Admin** (ou clicar em “Usar seleção da App”)
3. Selecionar os assistentes a imprimir (ou “Selecionar tudo”)
4. Clicar **📄 Gerar PDF QRCodes**

> Se aparecerem assistentes com badge **🆕 Novo** ou **⚠️ Alterado**, significa que existem diferenças face ao `config.js` publicado.  
> Depois de imprimir, vai ao separador **Guardar** e atualiza o `config.js` no GitHub para ficar tudo alinhado.

---

## 📂 Estrutura do Projeto

* `index.html`: Código principal da aplicação (layout, lógica e estilos).
* `config.js`: Base de dados (Lojas e Assistentes). **É o ficheiro mais atualizado com frequência.**
* `manifest.json`: Configurações PWA (ícone, nome, cores).
* `service-worker.js`: Gestão de cache e funcionamento offline.
* `imagens/`: Logótipos e ícones.

---

## 🛠️ Tecnologias
* HTML5 / CSS3 / JavaScript (Vanilla)
* PWA (Progressive Web App)
* GitHub Pages (Hospedagem)

---

## 👷 Créditos
Desenvolvido por IAD3.0 no G2G
