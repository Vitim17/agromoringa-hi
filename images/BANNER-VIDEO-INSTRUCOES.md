# 🎬 BANNER DE VÍDEO INSTITUCIONAL - INSTRUÇÕES

## ✅ O Que Foi Implementado

Adicionamos uma **seção de Banner com Vídeo Institucional** no centro da página inicial, entre "Quem Somos" e "Benefícios".

### Componentes:
1. ✅ **Header** com título e descrição
2. ✅ **Player de vídeo** com thumbnail personalizada
3. ✅ **Botão Play animado** com efeito pulse
4. ✅ **Informações destaque** abaixo do vídeo (3 blocos)
5. ✅ **CTAs** para produtos e canal YouTube
6. ✅ **Responsivo 100%** (desktop, tablet, mobile)

---

## 🎥 Como Configurar o Vídeo

Você tem **3 opções** para adicionar o vídeo institucional:

### OPÇÃO 1: YouTube Embed (RECOMENDADO) ⭐

**Vantagens:**
- ✅ Sem limite de tamanho
- ✅ Streaming otimizado
- ✅ Não consome espaço do servidor
- ✅ Player nativo do YouTube

**Como fazer:**

1. **Faça upload do vídeo no YouTube**
   - Acesse: https://studio.youtube.com
   - Upload do vídeo institucional
   - Configure como "Não listado" (se não quiser que apareça no canal)

2. **Pegue o ID do vídeo**
   ```
   URL: https://www.youtube.com/watch?v=ABC123XYZ
   ID: ABC123XYZ
   ```

3. **Atualize o index.html (linha 234)**
   ```html
   <!-- Encontre esta linha: -->
   data-src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&rel=0&modestbranding=1"
   
   <!-- Substitua SEU_VIDEO_ID pelo ID real: -->
   data-src="https://www.youtube.com/embed/ABC123XYZ?autoplay=1&rel=0&modestbranding=1"
   ```

4. **Atualize a duração (linha 229)**
   ```html
   <span>2:30</span> <!-- Coloque a duração real do seu vídeo -->
   ```

5. **Pronto!** O vídeo vai carregar automaticamente ao clicar no botão Play

---

### OPÇÃO 2: Arquivo Local (MP4)

**Vantagens:**
- ✅ Controle total sobre o player
- ✅ Funciona offline
- ✅ Sem dependência de terceiros

**Como fazer:**

1. **Prepare o vídeo**
   - Formato: MP4 (H.264)
   - Resolução: 1920x1080 (Full HD)
   - Tamanho recomendado: < 15 MB
   - Duração: 2-5 minutos

2. **Comprima o vídeo (se necessário)**
   ```bash
   ffmpeg -i institucional-original.mp4 -vcodec h264 -crf 28 -vf scale=1920:-1 institucional.mp4
   ```

3. **Adicione na pasta videos/**
   ```
   videos/institucional.mp4
   ```

4. **Edite o index.html (linhas 238-247)**
   ```html
   <!-- Comente o YouTube Embed: -->
   <!--
   <iframe id="youtube-player" ... ></iframe>
   -->
   
   <!-- Descomente o HTML5 Player: -->
   <video 
       id="html5-player"
       controls 
       playsinline 
       webkit-playsinline
       poster="images/lavoura-estufa.jpg"
       class="video-html5">
       <source src="videos/institucional.mp4" type="video/mp4">
       Seu navegador não suporta vídeos HTML5.
   </video>
   ```

5. **Pronto!** O vídeo local será reproduzido

---

### OPÇÃO 3: Vimeo Embed

**Vantagens:**
- ✅ Player mais limpo (sem anúncios)
- ✅ Melhor controle sobre branding
- ✅ Analytics detalhado

**Como fazer:**

1. **Upload no Vimeo**
   - Acesse: https://vimeo.com/upload
   - Faça upload do vídeo

2. **Pegue o ID**
   ```
   URL: https://vimeo.com/123456789
   ID: 123456789
   ```

3. **Substitua o iframe (linha 232-237)**
   ```html
   <iframe 
       id="vimeo-player"
       src="https://player.vimeo.com/video/123456789?autoplay=1&title=0&byline=0&portrait=0"
       frameborder="0" 
       allow="autoplay; fullscreen" 
       allowfullscreen
       class="video-iframe">
   </iframe>
   ```

---

## 🎨 Personalização

### Alterar Thumbnail do Vídeo

**Linha 221 do index.html:**
```html
<img src="images/lavoura-estufa.jpg" alt="Thumbnail Vídeo Institucional Agromoringa">

<!-- Substitua por uma imagem específica: -->
<img src="images/thumbnail-video.jpg" alt="...">
```

**Dica:** Use uma imagem que represente bem o vídeo (ex: Arthur e Rhayana na lavoura, logo da empresa, etc.)

### Alterar Duração Exibida

**Linha 229:**
```html
<span>2:30</span> <!-- Coloque a duração real -->
```

### Alterar Textos

**Linha 208-212:**
```html
<span class="video-banner__subtitle">Conheça Nossa História</span>
<h2 class="video-banner__title">Vídeo Institucional</h2>
<p class="video-banner__description">
    Descubra como a Agromoringa está revolucionando...
</p>
```

### Alterar Informações Abaixo do Vídeo

**Linhas 250-272:**
```html
<div class="video-info-item">
    <i class="fas fa-award"></i>
    <div>
        <strong>Referência Internacional</strong>
        <p>Especialistas reconhecidos em Moringa oleifera</p>
    </div>
</div>
<!-- Edite conforme necessário -->
```

---

## 🎯 Como Ficou

### Desktop:
```
┌─────────────────────────────────────────┐
│     CONHEÇA NOSSA HISTÓRIA              │
│     Vídeo Institucional                 │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │         THUMBNAIL              │   │
│  │           ▶ PLAY               │   │
│  │                        ⏱ 2:30  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  🏆 Referência   ✅ Certificado  👥 500+ │
│     Internacional   MAPA         Parceiros│
│                                         │
│  [Nossos Produtos] [Canal YouTube]     │
└─────────────────────────────────────────┘
```

### Mobile:
```
┌──────────────────┐
│ Vídeo Institucional│
│                  │
│ ┌──────────────┐ │
│ │   ▶ PLAY    │ │
│ │   Thumbnail  │ │
│ └──────────────┘ │
│                  │
│ 🏆 Referência    │
│ ✅ Certificado   │
│ 👥 500+ Parceiros│
│                  │
│ [Ver Produtos]   │
│ [Canal YouTube]  │
└──────────────────┘
```

---

## 🚀 Recursos Implementados

### Funcionalidades:
- ✅ **Thumbnail personalizada** com imagem real
- ✅ **Botão Play animado** com efeito pulse
- ✅ **Duração exibida** no canto inferior direito
- ✅ **Autoplay** ao clicar (YouTube ou HTML5)
- ✅ **Scroll automático** para centralizar vídeo
- ✅ **Player responsivo** (16:9 aspect ratio)
- ✅ **CTAs abaixo do vídeo** para conversão

### Animações:
- ✅ Fade-in ao scroll
- ✅ Pulse no botão Play
- ✅ Hover effect na thumbnail
- ✅ Zoom suave na imagem ao hover

### Performance:
- ✅ **Lazy loading** do iframe YouTube
- ✅ **Thumbnail leve** carrega primeiro
- ✅ **Vídeo só carrega ao clicar** (economiza dados)

---

## 📊 Localização na Página

```
[Header com Navegação]
        ↓
[Hero com Vídeo Background]
        ↓
[Quem Somos + Galeria]
        ↓
    🎬 [BANNER DE VÍDEO INSTITUCIONAL] ← NOVO!
        ↓
[Benefícios da Moringa]
        ↓
[Depoimentos]
        ↓
[Footer]
```

---

## 🎨 Cores e Estilo

**Background:** Gradiente cinza claro suave  
**Botão Play:** Branco com verde no ícone  
**Informações:** Cards brancos com sombra  
**CTAs:** Verde primário + Outline branco  

**Seguindo a identidade visual da Agromoringa!** 🌱

---

## 🐛 Troubleshooting

### Vídeo não carrega (YouTube)?
1. Verifique se o ID do vídeo está correto
2. Confirme que o vídeo não está "Privado" no YouTube
3. Use "Não listado" ou "Público"

### Vídeo não reproduz (HTML5)?
1. Confirme que o arquivo está em `videos/institucional.mp4`
2. Teste em navegadores diferentes
3. Verifique o console do navegador (F12)

### Botão Play não funciona?
1. Abra o console (F12) e procure erros
2. Verifique se o JavaScript está carregando
3. Teste em outro navegador

---

## 📝 Checklist de Implementação

- [ ] Escolher opção de vídeo (YouTube, Local ou Vimeo)
- [ ] Fazer upload do vídeo (se YouTube/Vimeo)
- [ ] Atualizar ID/caminho no HTML
- [ ] Atualizar duração exibida
- [ ] Trocar thumbnail (opcional)
- [ ] Personalizar textos e informações
- [ ] Testar em desktop
- [ ] Testar em mobile
- [ ] Verificar autoplay funcionando
- [ ] Publicar!

---

## 💡 Dicas Profissionais

### Para o Vídeo Institucional:
📹 **Estrutura recomendada (2-3 min):**
1. **Abertura** (10s): Logo + slogan
2. **Problema** (20s): Desafios do agronegócio
3. **Solução** (30s): Como a Agromoringa ajuda
4. **Diferenciais** (40s): Certificação MAPA, experiência, resultados
5. **Depoimentos** (30s): Clientes reais
6. **Call-to-Action** (10s): "Fale com a gente"

🎬 **Elementos visuais:**
- Imagens aéreas da lavoura
- Close-up das sementes
- Arthur e Rhayana explicando
- Clientes satisfeitos
- Números e estatísticas
- Maquinário e tecnologia

🎵 **Áudio:**
- Música de fundo discreta
- Narração profissional
- Depoimentos autênticos

---

**Status: ✅ BANNER DE VÍDEO PRONTO!**

Agora é só adicionar o link do seu vídeo e arrasar! 🎬🌱