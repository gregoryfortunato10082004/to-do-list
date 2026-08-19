# 📝 To-Do List em React

Uma aplicação de lista de tarefas dinâmica, interativa e visualmente agradável, construída com React e CSS puro. Este projeto foi desenvolvido com foco em componentização, gerenciamento de estados (`useState`) e uma excelente experiência de usuário (UX).

## ✨ Funcionalidades

* **Criar Tarefas (C):** Adicione novas tarefas escolhendo o nível de prioridade (Baixa, Média, Alta).
* **Ler Tarefas (R):** Visualize sua lista de afazeres com tags de cores diferentes baseadas na prioridade.
* **Atualizar Tarefas (U):** Edite o nome e a prioridade de qualquer tarefa já criada.
* **Deletar Tarefas (D):** Remova tarefas da lista com um clique.
* **Status de Conclusão:** Marque tarefas como concluídas com um checkbox, aplicando um efeito visual de texto riscado e esmaecido.
* **Feedback Visual e Animações:** 
  * As novas tarefas surgem na tela com uma animação suave de *fade-in* (`@keyframes`).
  * Botões de interação ganham destaque ao passar o mouse (`:hover`).
* **Tipografia Moderna:** Uso de fontes do Google Fonts (*Fredoka* para títulos e *Quicksand* para o conteúdo).

## 🚀 Tecnologias Utilizadas

* **React.js:** Criação de interface, renderização de listas (`.map()`) e gerenciamento de estados (`useState`).
* **JavaScript (ES6+):** Lógica de filtragem, atualização imutável de arrays e operadores ternários para estilos condicionais.
* **CSS3:** Animações, transições, customização de tags e integração de fontes externas.
* **Vite / Create React App:** Ambiente de desenvolvimento.

## 🛠️ Como rodar o projeto na sua máquina

1. Certifique-se de ter o **Node.js** instalado.
2. Faça o clone deste repositório.
3. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install
   npm run dev