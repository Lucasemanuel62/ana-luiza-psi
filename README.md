# 🌟 Site Ana Luiza - Psicóloga

Site profissional desenvolvido para Ana Luiza, psicóloga especializada em Gestalt-terapia com atendimento online.

## 📋 Sobre o Projeto

Este é um site moderno e responsivo desenvolvido para apresentar os serviços de psicologia da Ana Luiza, incluindo informações sobre sua abordagem terapêutica, serviços oferecidos e formas de contato.

### 🎯 Objetivos
- Apresentar profissionalmente os serviços de psicologia
- Facilitar o agendamento de consultas
- Estabelecer confiança através de informações claras sobre a abordagem terapêutica
- Proporcionar experiência de usuário otimizada em todos os dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React para desenvolvimento web
- **TypeScript** - Linguagem de programação tipada
- **Tailwind CSS** - Framework CSS para estilização
- **React** - Biblioteca para interface de usuário

### Ferramentas de Desenvolvimento
- **Git** - Controle de versão
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal da aplicação
│   └── page.tsx            # Página inicial
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Hero.tsx            # Seção inicial com apresentação
│   ├── About.tsx           # Seção "Sobre mim"
│   ├── Services.tsx        # Seção de serviços oferecidos
│   ├── Approach.tsx        # Seção "Como trabalho"
│   ├── Testimonials.tsx    # Seção de depoimentos
│   ├── Contact.tsx         # Seção de contato
│   └── Footer.tsx          # Rodapé
└── public/
    └── images/
        ├── logo-ana-luiza.png    # Logo da psicóloga
        └── ana-luiza-ok.png      # Foto profissional
```

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: Teal (#0d9488) - Botões e elementos de destaque
- **Secundária**: Neutral (#6b7280) - Textos e elementos secundários
- **Background**: Bege claro (#F7F4E9) - Fundo da seção hero
- **Branco**: Elementos de contraste e fundos

### Características do Design
- **Responsivo**: Adaptado para mobile, tablet e desktop
- **Moderno**: Interface limpa e profissional
- **Acessível**: Cores contrastantes e navegação clara
- **Transições**: Elementos com animações suaves

## 📱 Seções do Site

### 1. Header
- Logo da Ana Luiza
- Menu de navegação (Sobre, Serviços, Abordagem, Depoimentos, Contato)
- Botão "Agendar" em destaque

### 2. Hero
- Apresentação principal com foto profissional
- Badge "Psicologia Clínica"
- Nome e título profissional
- Descrição dos serviços
- Botões de call-to-action
- Transição em onda para próxima seção

### 3. Sobre
- Informações pessoais e profissionais
- Destaque para CRP e especialização
- Modalidade de atendimento (online)
- Abordagem terapêutica (Gestalt-terapia)

### 4. Serviços
- Psicoterapia Individual
- Terapia de Casal
- Atendimento Online
- Orientação Profissional

### 5. Abordagem
- Escuta acolhedora
- Baseado em evidências
- Plano personalizado

### 6. Depoimentos
- Seção para depoimentos de clientes
- Cards com citações e autores

### 7. Contato
- Informações para agendamento
- Botões para e-mail e WhatsApp
- Modalidades de atendimento

### 8. Footer
- Copyright
- Links de navegação
- Crédito do desenvolvedor

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta do projeto
cd analuiza

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Executa em modo de desenvolvimento
npm run build        # Gera build de produção
npm run start        # Executa build de produção
npm run lint         # Executa verificação de código
```

## 📊 Informações da Psicóloga

### Dados Profissionais
- **Nome**: Ana Luiza
- **CRP**: 05/75904
- **Especialização**: Gestalt-terapia
- **Modalidade**: Atendimento online
- **Abordagem**: Acolhimento e reflexões

### Serviços Oferecidos
- Psicoterapia individual para adolescentes e adultos
- Terapia de casal
- Orientação profissional
- Atendimento online com qualidade presencial

## 🔧 Personalização

### Alterando Informações
Para alterar informações da psicóloga, edite os seguintes arquivos:
- `src/components/About.tsx` - Informações pessoais
- `src/components/Services.tsx` - Serviços oferecidos
- `src/components/Contact.tsx` - Dados de contato

### Alterando Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js` ou diretamente nos componentes usando classes Tailwind.

### Adicionando Novas Seções
1. Crie um novo componente em `src/components/`
2. Importe e adicione na `src/app/page.tsx`
3. Adicione link de navegação no `Header.tsx`

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first:
- **Mobile**: Layout otimizado para telas pequenas
- **Tablet**: Adaptações para telas médias
- **Desktop**: Layout completo com duas colunas

### Breakpoints Utilizados
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎯 SEO e Performance

### Otimizações Implementadas
- **Next.js Image**: Otimização automática de imagens
- **Meta tags**: Configuradas para SEO
- **Performance**: Código otimizado e lazy loading
- **Acessibilidade**: Estrutura semântica e contraste adequado

## 👨‍💻 Desenvolvimento

### Desenvolvedor
**Lucas Emanuel** - Desenvolvedor Front-end
- **Portfólio**: [https://lucasemanuel62.github.io/portifolio/](https://lucasemanuel62.github.io/portifolio/)
- **Especialização**: React, Next.js, TypeScript, Tailwind CSS

### Metodologia
- **Componentização**: Cada seção em componente separado
- **TypeScript**: Tipagem para maior segurança
- **Responsive Design**: Mobile-first approach
- **Clean Code**: Código limpo e bem documentado

## 📄 Licença

Este projeto foi desenvolvido especificamente para Ana Luiza - Psicóloga.

## 🤝 Contribuições

Para sugestões ou melhorias, entre em contato através do portfólio do desenvolvedor.

---

**Desenvolvido por [Lucas Emanuel](https://lucasemanuel62.github.io/portifolio/)**