# To-Do List (Versão 2.0) 🚀

Um aplicativo de Lista de Tarefas moderno, refatorado com muito carinho para oferecer uma experiência "Premium" e interações mais orgânicas. 

## 🌟 Novidades da Versão 2.0
- **UI/UX Premium:** Design moderno com foco em "Glassmorphism" escuro, micro-animações, e uma interface bem clean utilizando tipografia `Inter` (Google Fonts).
- **Persistência de Dados Local (`localStorage`):** Agora as tarefas não desaparecem ao recarregar a página! O seu navegador salvará suas tarefas ativas.
- **Checkboxes de Concluído:** Opção para marcar as tarefas vencidas sem necessariamente apagá-las.
- **Refatoração "Clean Code":**
  - Correção de erros na língua (O antigo termo "*Taks*" foi migrado para "*Task*", tanto em interfaces quanto componentes).
  - Remoção de más-práticas do React antigo (como manipulação direta do DOM via `document.querySelector`). O Modal e seus estados agora usam states saudáveis (`useState`).
  - Função de edição (que estava incorreta na raiz do projeto) consertada e operante.

## 🛠 Tecnologias Utilizadas
- **React 19**
- **TypeScript** (Tipagem rigorosa e fluída)
- **Vite** (Build e Hot Module Replacement super rápidos)
- **Vanilla CSS + CSS Modules** para estilização componentizada e isolada.

## 💻 Como rodar o projeto localmente
Para iniciar a aplicação na sua máquina, siga os passos abaixo no terminal:

1. **Clone do Repositório (se aplicável):**
```bash
git clone https://github.com/vitordavips/To-Do-List.git
cd To-Do-List
```

2. **Instalação das dependências:**
```bash
npm install
```

3. **Inicie o servidor de Desenvolvimento:**
```bash
npm run dev
```

Abra o seu navegador a partir do link retornado no terminal *(provavelmente `http://localhost:5173/`)* para ver a aplicação rodando!

---
> Projeto aprimorado por um Assistant AI "Antigravity". 🚀
