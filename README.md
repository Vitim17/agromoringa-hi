# 🌱 AGROMORINGA - Website Institucional

![Status](https://img.shields.io/badge/Status-Prototipo-green)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/Licença-Proprietária-red)

## 📋 Sobre o Projeto

**Agromoringa** é o website institucional da maior empresa brasileira especializada em **sementes certificadas de Moringa oleifera** para o agronegócio. Sediada em Parnaíba-PI, a empresa é liderada por:

- **Arthur Henrique Begliomini** - Engenheiro Agrônomo, Especialista em Solos e Moringa, Referência Internacional
- **Rhayana Aline** - CEO Comercial/Operacional, Produtora Rural, Psicóloga, Vice-Presidente da Associação Moringa do Brasil

### 🎯 Objetivos do Website

Este website foi desenvolvido para:
- ✅ Transmitir **credibilidade e profissionalismo** no setor do agronegócio
- ✅ Apresentar produtos e serviços com **fotos e vídeos reais** das lavouras
- ✅ Facilitar contato direto via **WhatsApp integrado**
- ✅ Educar produtores sobre os **benefícios da Moringa oleifera**
- ✅ Diferenciar a Agromoringa como **líder de mercado** com sementes certificadas MAPA

---

## 🚀 Funcionalidades Implementadas

### ✅ Página Inicial (index.html)

1. **Hero Section com Vídeo Background**
   - Vídeo em loop mostrando trator, colheita e processamento
   - Call-to-Action destacado para produtos
   - Badges de certificação MAPA e credenciais

2. **Seção Quem Somos**
   - História e credenciais da Agromoringa
   - Estatísticas de impacto (+50ha cultivados, 100% certificado, +500 parceiros)
   - **Grid de fotos reais** das lavouras e clientes ✅

3. **Banner de Vídeo Institucional** 🎬 NOVO!
   - Player responsivo com thumbnail personalizada
   - Botão Play animado com efeito pulse
   - Suporte YouTube Embed, Vimeo ou HTML5 local
   - 3 blocos informativos abaixo do vídeo
   - CTAs estratégicos (Produtos + Canal YouTube)
   - Lazy loading (vídeo só carrega ao clicar)

4. **Benefícios da Moringa para Forragem**
   - 6 cards detalhando vantagens científicas e econômicas
   - Alta produtividade, proteína, tolerância à seca, desempenho animal
   - CTA para canal Mestre da Moringa no YouTube

5. **Depoimentos de Clientes**
   - 3 casos de sucesso reais
   - Prova social para gerar confiança

6. **Footer Completo**
   - Links para redes sociais (Instagram, YouTube, Facebook, LinkedIn)
   - Informações de contato (telefone, email, endereço)
   - CNPJ da empresa
   - Botão WhatsApp integrado

7. **Botão Flutuante WhatsApp**
   - Sempre visível durante navegação
   - Mensagem pré-formatada para contato

### ✅ Página de Produtos (produtos.html)

1. **Catálogo Completo de Produtos**
   - **Sementes Certificadas MAPA** (produto principal)
   - **Silagem de Moringa** (forragem)
   - **Pellets de Moringa** (processado)
   - **Feno de Moringa** (forragem)
   - **Farelo de Moringa** (processado)
   - **Moringa Horse** (linha premium - lançamento) ⭐
   - **Consultoria Técnica Especializada**
   - **Cursos e Capacitação** (Canal Mestre da Moringa)

2. **Filtros Interativos**
   - Todos os Produtos
   - Sementes
   - Forragem
   - Processados
   - Serviços

3. **Cards de Produto com:**
   - Foto de alta qualidade (placeholder - aguardando imagens reais)
   - Badge de certificação/destaque
   - Descrição detalhada
   - Especificações técnicas (4 atributos por produto)
   - Botão de orçamento via WhatsApp

### ✅ Funcionalidades JavaScript

- **Menu Mobile Responsivo** (hamburger menu)
- **Scroll Suave** entre seções
- **Active Link** no scroll (destaca seção atual no menu)
- **Animações ao Scroll** (fade in + slide up)
- **Player de Vídeo Institucional** (YouTube/HTML5) 🎬 NOVO!
- **Filtro de Produtos** com transições suaves
- **Lazy Loading de Imagens** (otimização de performance)
- **Galeria com Zoom** (clique para ampliar fotos)
- **Contador Animado** (estatísticas na home)
- **Parallax Suave** no hero e imagens de produtos
- **Botão WhatsApp Flutuante** com tracking de scroll

### ✅ Design & UI/UX

- **Paleta de Cores Profissional**
  - Verde Natural: `#2d5016` (primary)
  - Verde Accent: `#4a7c1c` (destaque)
  - Marrom Terra: `#8b4513` (secondary)
  - Branco Clean e tons de cinza neutros

- **Tipografia**
  - **Títulos:** Poppins (bold, moderna)
  - **Textos:** Inter (legível, profissional)

- **Responsividade Total**
  - Desktop (1280px+)
  - Tablet (768px - 1024px)
  - Mobile (320px - 767px)

---

## 📂 Estrutura de Arquivos

```
agromoringa/
│
├── index.html              # Página inicial
├── produtos.html           # Página de produtos
│
├── css/
│   ├── style.css          # Estilos principais
│   └── produtos.css       # Estilos da página de produtos
│
├── js/
│   ├── main.js            # JavaScript principal (menu, animações, scroll)
│   └── produtos.js        # JavaScript específico de produtos (filtros, hover)
│
├── videos/
│   └── hero-video.mp4     # ⚠️ Adicionar manualmente (29MB - veja VIDEOS-INSTRUCOES.md)
│
├── images/                 # ✅ IMAGENS REAIS ADICIONADAS!
│   ├── lavoura-estufa.jpg       # Mudas em estufa (282 KB)
│   ├── sementes-moringa.jpg     # Sementes certificadas (266 KB)
│   ├── equipe-feira.jpg         # Equipe em evento (146 KB)
│   ├── plantio-mecanizado.jpg   # Plantadeira (117 KB)
│   └── campo-moringa.jpg        # Campo estabelecido (228 KB)
│
└── README.md              # Este arquivo

```

---

## 🎨 Próximos Passos (Recomendações)

### 📸 URGENTE - ~~Substituir Placeholders~~ ✅ CONCLUÍDO!

**O que foi feito:**
✅ **5 Fotos Reais Implementadas:**
   - Lavoura de moringa em estufa (mudas)
   - Sementes certificadas (close-up)
   - Equipe em feira técnica
   - Plantio mecanizado (plantadeira)
   - Campo de moringa estabelecido

**Vídeos pendentes:**
**Vídeos pendentes:**

⚠️ **Vídeo Hero** (hero-video.mp4)
   - Arquivo disponível mas muito grande (29 MB)
   - **Opção 1:** Comprimir e adicionar manualmente na pasta `videos/`
   - **Opção 2:** Hospedar no YouTube e usar embed
   - Veja instruções completas em `VIDEOS-INSTRUCOES.md`

**Fotos adicionais recomendadas (opcional):**
**Fotos adicionais recomendadas (opcional):**
   - Embalagens de produtos com branding
   - Pellets/farelo empacotados
   - Silagem em fardos
   - Cavalos consumindo moringa (Moringa Horse)
   - Arthur e Rhayana na propriedade

### 🔧 Personalizações Necessárias

**Atualize os seguintes dados reais:**

1. **Links de Redes Sociais** (footer)
   ```html
   <!-- Substituir URLs genéricas por perfis reais -->
   <a href="https://instagram.com/[SEU_INSTAGRAM]">
   <a href="https://youtube.com/@[SEU_CANAL]">
   <a href="https://facebook.com/[SEU_FACEBOOK]">
   <a href="https://linkedin.com/company/[SUA_EMPRESA]">
   ```

2. **Número de WhatsApp** (todos os botões)
   ```javascript
   // Substituir: 5586999999999
   // Por: 55[DDD][SEU_NUMERO]
   ```

3. **CNPJ e Dados de Contato** (footer)
   ```html
   <span>CNPJ: [SEU_CNPJ_REAL]</span>
   <span>(86) [TELEFONE_REAL]</span>
   <span>contato@[EMAIL_REAL].com.br</span>
   ```

4. **URL do Canal Mestre da Moringa**
   ```html
   <!-- Se já existe, substituir em todos os links -->
   <a href="https://youtube.com/@mestremoringa">
   ```

### 🚀 Melhorias Futuras (Fase 2)

**Recursos Avançados:**
- [ ] Sistema de Newsletter (captura de emails)
- [ ] Blog com artigos técnicos sobre Moringa
- [ ] Calculadora de ROI (retorno sobre investimento)
- [ ] Mapa interativo de produtores parceiros
- [ ] Portal do cliente (área restrita)
- [ ] Integração com CRM (gestão de leads)
- [ ] Loja online (e-commerce) para venda direta
- [ ] Sistema de agendamento de consultorias
- [ ] Certificados digitais de autenticidade (blockchain?)

### 📊 SEO e Performance

**Otimizações recomendadas:**
- [ ] Criar arquivo `sitemap.xml`
- [ ] Configurar `robots.txt`
- [ ] Adicionar meta tags Open Graph (compartilhamento social)
- [ ] Implementar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Otimizar imagens (WebP, compressão)
- [ ] Adicionar Schema.org markup (rich snippets)
- [ ] Implementar PWA (Progressive Web App)
- [ ] Configurar CDN para assets

---

## 🌐 Deployment (Publicação)

### Como Publicar o Website

**Opção 1: Usar a Aba "Publish" desta plataforma**
- Clique na aba **Publish** no topo
- Siga as instruções para deploy automático
- Receberá uma URL pública imediatamente

**Opção 2: Hospedagem Própria**
1. Comprar domínio (exemplo: `agromoringa.com.br`)
2. Contratar hospedagem (recomendação: Hostinger, Locaweb, Cloudflare Pages)
3. Fazer upload dos arquivos via FTP ou Git
4. Configurar DNS para apontar para o servidor

**Opção 3: GitHub Pages (Gratuito)**
```bash
# 1. Criar repositório no GitHub
# 2. Fazer upload dos arquivos
# 3. Ativar GitHub Pages nas configurações
# 4. Acessar via: username.github.io/agromoringa
```

---

## 📱 Contato e Suporte

### Informações da Empresa

**Agromoringa**
- 📍 Endereço: Parnaíba - PI, Brasil
- 📞 Telefone: [ATUALIZAR COM NÚMERO REAL]
- 📧 Email: [ATUALIZAR COM EMAIL REAL]
- 🌐 Website: [URL após publicação]

### Canais Digitais

- 🔴 **YouTube**: Canal Mestre da Moringa
- 📸 **Instagram**: @agromoringa
- 💼 **LinkedIn**: Agromoringa
- 📘 **Facebook**: /agromoringa

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo (Grid, Flexbox, Animations)
- **JavaScript (Vanilla)** - Interatividade sem frameworks
- **Google Fonts** - Tipografia (Inter, Poppins)
- **Font Awesome 6** - Ícones profissionais
- **Unsplash** - Imagens placeholder (temporárias)

**Nenhuma dependência externa ou framework pesado!** ⚡
- Zero jQuery
- Zero Bootstrap
- Zero React/Vue/Angular
- 100% código nativo e otimizado

---

## 📄 Licença e Direitos

© 2026 **Agromoringa**. Todos os direitos reservados.

Este website é propriedade exclusiva da Agromoringa.  
Reprodução, distribuição ou modificação sem autorização é proibida.

---

## ✨ Créditos

**Desenvolvimento do Protótipo:** 2026-02-15  
**Versão:** 1.0.0 (Protótipo Inicial)

---

## 📞 Precisa de Ajuda?

**Para sua equipe de desenvolvedores:**

Este protótipo está 100% funcional e pronto para receber:
1. Vídeos e fotos reais
2. Dados de contato atualizados
3. Personalizações de marca
4. Integrações avançadas (CRM, Analytics, etc.)

**Arquivos principais para editar:**
- `index.html` - Conteúdo da home
- `produtos.html` - Catálogo de produtos
- `css/style.css` - Estilos e cores
- `js/main.js` - Funcionalidades JavaScript

**Precisa alterar cores?** → Veja variáveis CSS em `:root` (linha 10 do style.css)  
**Precisa adicionar produtos?** → Copie um `.product-card` existente em produtos.html  
**Precisa mudar textos?** → Edite diretamente nos arquivos HTML

---

## 🎉 Feedback

Este protótipo foi criado com atenção aos detalhes e foco na experiência do produtor rural.  
Se este trabalho atendeu suas expectativas, ficarei feliz em saber! 🌱

**Próximos passos?** Envie os materiais reais (vídeos e fotos) que faremos os ajustes finais! 🚜💚

---

**#Agromoringa #Moringa #Agronegócio #BancoDeProteína #SementesCertificadas #MesteDaMoringa**