# Dashboard Integrador

Dashboard web completo desenvolvido com React, CSS puro e React Router DOM, com tema escuro moderno.

## 🎨 Cores do Projeto (Tema Escuro)

O projeto utiliza uma paleta de cores escura e moderna:

- **Fundo Principal**: `#252836` - Fundo geral da aplicação
- **Sidebar**: `#1f1d2b` - Fundo da barra lateral (mais escuro)
- **Cor Secundária**: `#ff7622` - Laranja para botões e destaques
- **Cards**: `#2d303e` - Fundo dos cards e elementos
- **Texto Principal**: `#ffffff` - Textos principais
- **Texto Secundário**: `#9ca3af` - Textos secundários e labels
- **Verde**: `#10b981` - Status "Confirmado", valores positivos
- **Amarelo**: `#f59e0b` - Status "Relatório", alertas

## 📁 Estrutura do Projeto

```
dashboardintegrador/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── MaisVendidos.js
│   │   ├── MaisVendidos.css
│   │   ├── Pedidos.js
│   │   ├── Pedidos.css
│   │   ├── Cardapio.js
│   │   ├── Cardapio.css
│   │   ├── CriarItem.js
│   │   ├── EditarItem.js
│   │   └── FormItem.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Páginas Implementadas

### 1. Dashboard Principal (`/`)
- Cards com estatísticas de vendas, pedidos, clientes e produtos
- Gráfico de barras com vendas da semana
- Mapa de localização (placeholder)
- Lista de atividades recentes

### 2. Mais Vendidos (`/mais-vendidos`)
- Tabela com ranking de produtos
- Filtros por período e categoria
- Barras de progresso "Passagem de coma"
- Cards de resumo com totais

### 3. Pedidos (`/pedidos`)
- Tabela de pedidos com informações completas
- Status com badges coloridos (Confirmado/Relatório)
- Filtros por status
- Busca de pedidos
- Ações de visualizar, editar e imprimir

### 4. Cardápio (`/cardapio`)
- Grid de cards de produtos
- Filtros por categoria
- Indicadores de disponibilidade
- Ações de editar e excluir
- Botão para adicionar novo item

### 5. Criar Item (`/criar-item`)
- Formulário completo para novo item
- Campos: nome, categoria, descrição, preço
- Checkbox de disponibilidade
- Validação de campos obrigatórios

### 6. Editar Item (`/editar-item`)
- Formulário pré-preenchido
- Mesmos campos do criar item
- Informações adicionais do item

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para UI
- **React Router DOM 6.20.0** - Roteamento entre páginas
- **CSS Puro** - Estilização sem frameworks
- **JavaScript ES6+** - Sintaxe moderna

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento:**
```bash
npm start
```

3. **Acessar no navegador:**
```
http://localhost:3000
```

## 🎯 Funcionalidades

### Navegação
- **Sidebar lateral fixa** com ícones e navegação intuitiva
- Navegação via React Router
- Links contextuais entre páginas relacionadas
- Sidebar responsiva (colapsa em telas menores)

### Componentes Visuais (Tema Escuro)
- **Cards**: Fundo escuro `#2d303e`, bordas sutis, sombra profunda
- **Tabelas**: Headers laranja `#ff7622`, linhas zebradas escuras, hover effects
- **Botões**: Laranja `#ff7622` para ações principais, cinza transparente para secundárias
- **Status Badges**: Verde para confirmado, amarelo para relatório
- **Formulários**: Campos escuros com foco laranja, validação visual
- **Sidebar**: Fundo `#1f1d2b` com hover effects laranja

### Responsividade
- Layout adaptável para diferentes tamanhos de tela
- Grid responsivo para cards e tabelas
- Sidebar colapsa em mobile (apenas ícones)
- Conteúdo ajusta-se automaticamente

## 📊 Dados Mockados

O projeto utiliza dados mockados (hardcoded) para demonstração:
- Estatísticas de vendas
- Lista de produtos mais vendidos
- Pedidos recentes
- Itens do cardápio

## 🎨 Customização de Cores

As cores são definidas como variáveis CSS no arquivo `src/index.css`:

```css
:root {
  /* Cores do tema escuro */
  --fundo-principal: #252836;
  --sidebar-bg: #1f1d2b;
  --cor-secundaria: #ff7622;
  --card-bg: #2d303e;
  --texto-principal: #ffffff;
  --texto-secundario: #9ca3af;
  
  /* Cores mantidas */
  --verde: #10b981;
  --amarelo: #f59e0b;
  --branco: #ffffff;
}
```

Para alterar as cores, basta modificar os valores dessas variáveis. O tema escuro foi implementado com fundo `#252836` e sidebar `#1f1d2b`, com botões e destaques em laranja `#ff7622`.

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa testes
- `npm run eject` - Ejeta configurações do Create React App

## 🔧 Próximos Passos (Sugestões)

- Integração com API backend
- Autenticação de usuários
- Persistência de dados
- Gráficos mais avançados (Chart.js, Recharts)
- Upload de imagens para produtos
- Sistema de notificações
- Impressão de pedidos
- Exportação de relatórios

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 👨‍💻 Desenvolvimento

Desenvolvido com React e CSS puro, seguindo as especificações de design fornecidas. Implementado com tema escuro moderno, sidebar lateral fixa e cores laranja para destaques.
