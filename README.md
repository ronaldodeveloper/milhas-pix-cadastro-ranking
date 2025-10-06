
# Teste Técnico - Milhas Pix
Projeto desenvolvido em Next.js para o teste técnico!

#### A aplicação consiste em duas páginas 
A primeira página tem um formulário para cadastrar novas ofertas e exibir em tempo real o ranking consumindo da API
A segunda página mostra uma listagem das ofertas cadastradas com campo de busca e filtro.


### Funcionalidades
- [x] Consumo de API externa
- [x] Filtro por categoria e busca por nome
- [x] Exibição de loading e tratamento de erros
- [x] Layout 100% responsivo
- [x] Animações suaves nas transições


## Tecnologias Utilizadas
- [React] — Biblioteca principal
- [Nextjs] — Biblioteca React
- [sass] — Estilização, torna o CSS mais poderoso
- [TailwindCss] — Estilização, escreve classes diretamente no HTML
- [jsuites] - Projetado para aprimorar a experiência de entrada do usuário
- [fetchAPI] — Requisições HTTP


##  Decisões Técnicas
- Usei fetchA PI pela simplicidade de interceptar erros e requisições
- SASS foi escolhido embora o CSS puro tenha evoluído o Sass permite que você utilize uma abordagem mais programática e escalável 
- A organização em pastas segue princípios de escalabilidade para novos módulos.
- jsuites fornece funcionalidade de mascaramento para elementos de entrada


## Arquitetura do projeto
```
src/
├── app/
│ ├── api/
│ │ ├── minhas-ofertas/             # Endpoint da API para listagem de ofertas
│ │ └── nova-oferta/                # Endpoint da API para criação de novas ofertas
│ │
│ ├── minhas-ofertas/               # Página "Minhas Ofertas"
│ │ ├── MinhasOfertas.module.scss
│ │ └── page.jsx
│ │
│ ├── favicon.ico                   # favicon personalizado
│ ├── globals.scss                  # Estilos globais da aplicação
│ ├── home.module.scss              # Estilos da página inicial
│ ├── layout.jsx                    # Layout principal
│ └── page.jsx                      # Página inicial da aplicação
│
├── components/                     # Componentes reutilizáveis
├── data/                           # Dados mockados estáticos
├── hook/                           # Hooks personalizados
├── styles/                         # Arquivos SCSS e variáveis globais
└── util/ 
```                          


##  Link da aplicação
 - https://milhas-pix-cadastro-ranking.vercel.app


## Instalação e Execução
1. Clone o repositório:
```bash
       git clone  https://github.com/ronaldodeveloper/milhas-pix-cadastro-ranking.git
```

2 . instalar dependências
```bash
       npm install
```

3. Rode o projeto
```bash
       npm run dev
       # or
       yarn dev
```     
