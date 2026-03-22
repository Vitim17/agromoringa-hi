# SEO e atualização da indexação no Google

## O que foi feito no código

- **Meta description** (até ~160 caracteres) em todas as páginas: `index.html`, `produtos.html`, `checkout.html`.
- **Títulos** ajustados para busca (incluindo termos como sementes, Moringa, forragem, agronegócio).
- **Open Graph** (og:title, og:description, og:url, og:locale) para compartilhamento e para o Google usar em resultados.
- **Twitter Card** para quando o link for compartilhado no Twitter.
- **Canonical** (link rel="canonical") em cada página para evitar conteúdo duplicado.

As descrições antigas (ex.: “So I said nice one…”) vinham de outro template ou deploy; neste código só existem textos da Agro Moringa.

## Domínio usado nos metadados

Foi usado **https://agromoringa.com.br** em `canonical` e `og:url`.  
Se o site estiver em outro endereço (ex.: `agro-moringa.vercel.app` ou outro domínio), faça busca e substituição no projeto:

- `https://agromoringa.com.br` → sua URL final (com barra no final para a home).

## Depois de publicar na Vercel

1. **Google Search Console**
   - Acesse [Google Search Console](https://search.google.com/search-console).
   - Adicione a propriedade do site (URL prefix ou domínio).
   - Em **Inspeção de URL**, cole a URL da página (ex.: `https://agromoringa.com.br/`).
   - Clique em **Solicitar indexação** para as páginas principais (home, produtos, etc.).

2. **Tempo**
   - O Google não atualiza na hora. Em alguns dias ou semanas os novos títulos e descrições tendem a aparecer na busca.

3. **Imagem de compartilhamento (opcional)**
   - Para controlar a imagem quando o link é compartilhado (Facebook, WhatsApp, etc.), adicione no `<head>` de cada página, usando sua URL absoluta:
   - `<meta property="og:image" content="https://agromoringa.com.br/caminho/para/imagem.jpg">`
   - Tamanho sugerido: 1200x630 px.
