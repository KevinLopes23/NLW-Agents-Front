# 🤖 NLW Agents - Frontend

Um aplicativo web moderno que permite criar salas de perguntas e respostas com interação por voz, onde uma IA responde às perguntas baseando-se no áudio gravado.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Funcionalidades

- ✨ Criação de salas de perguntas e respostas
- 🎙️ Gravação de áudio em tempo real
- 🤖 Respostas geradas por IA
- 🎯 Interface moderna e responsiva
- ⚡ Performance otimizada com chunks de áudio
- 🔄 Atualização em tempo real das respostas

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM ou Yarn
- Backend do projeto rodando localmente

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e bundler
- **TailwindCSS** - Framework CSS utility-first
- **Shadcn/ui** - Componentes React reutilizáveis
- **React Query** - Gerenciamento de estado e cache
- **React Router** - Roteamento da aplicação
- **Day.js** - Biblioteca para manipulação de datas

## 💻 Instalação

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/KevinLopes23/NLW-Agents-Front.git
   cd NLW-Agents-Front
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install

# ou

yarn
\`\`\`

3. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev

# ou

yarn dev
\`\`\`

## 🏗️ Estrutura do Projeto

\`\`\`
src/
├── components/ # Componentes reutilizáveis
│ ├── ui/ # Componentes de UI base
│ └── ... # Outros componentes
├── http/ # Lógica de comunicação com API
│ ├── types/ # Tipos TypeScript para requests/responses
│ └── ... # Hooks de requisições
├── lib/ # Utilitários e configurações
├── pages/ # Páginas da aplicação
└── assets/ # Recursos estáticos
\`\`\`

## 📱 Páginas

- **/** - Lista de salas disponíveis
- **/create-room** - Criação de nova sala
- **/room/:id** - Visualização de perguntas da sala
- **/record-room-audio/:id** - Gravação de áudio para a sala

## 🔄 Fluxo de Funcionamento

1. Usuário cria uma nova sala
2. Acessa a sala e pode começar a gravar áudio
3. O áudio é enviado em chunks de 5 segundos para o backend
4. A IA processa o áudio e gera respostas
5. As respostas são exibidas em tempo real na interface


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

- Rocketseat pela iniciativa NLW
- Comunidade pelo suporte e feedback
