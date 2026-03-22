# 📹 VÍDEOS DA AGROMORINGA

## Vídeos Fornecidos

### 1. **20230110_125024.mp4** (29 MB)
- URL: https://www.genspark.ai/api/files/s/Gatxh3dT
- **USO RECOMENDADO:** Vídeo principal do Hero (página inicial)
- **STATUS:** ⚠️ Arquivo grande demais para download automático

### 2. **Tratamento de sementes com a bitoneira.mp4** (41 MB)
- URL: https://www.genspark.ai/api/files/s/IVR5idIf
- **USO RECOMENDADO:** Seção de produtos ou página "Como Fazemos"
- **STATUS:** ⚠️ Arquivo grande demais para download automático

---

## 🛠️ Como Adicionar os Vídeos Manualmente

### Opção 1: Download Manual
1. Acesse os links acima no navegador
2. Faça download dos arquivos
3. Renomeie para `hero-video.mp4` (vídeo principal)
4. Coloque na pasta `videos/` do projeto
5. O HTML já está configurado para usar!

### Opção 2: Hospedagem Externa (RECOMENDADO para performance)

**YouTube (melhor opção):**
```html
<!-- No index.html, substitua a linha 59-62 por: -->
<div class="hero__video-container">
    <iframe 
        src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&playlist=SEU_VIDEO_ID" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
        class="hero__video">
    </iframe>
</div>
```

**Vimeo:**
```html
<iframe 
    src="https://player.vimeo.com/video/SEU_VIDEO_ID?autoplay=1&loop=1&muted=1&background=1" 
    frameborder="0" 
    allow="autoplay; fullscreen" 
    class="hero__video">
</iframe>
```

---

## ⚡ Recomendações de Otimização

### Para melhor performance:

1. **Comprima os vídeos:**
   - Use HandBrake ou FFmpeg
   - Reduza resolução para 1920x1080 (Full HD)
   - Target: 5-10 MB para web

2. **Comando FFmpeg para compressão:**
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -vf scale=1920:-1 -crf 28 hero-video-compressed.mp4
```

3. **Use serviço de CDN:**
   - Cloudflare Stream
   - AWS S3 + CloudFront
   - Bunny.net

---

## 📝 Status Atual

✅ **Imagens:** Todas substituídas por fotos reais da Agromoringa  
⚠️ **Vídeos:** Precisam ser adicionados manualmente (arquivo muito grande)

**Próximo passo:** 
- Upload manual do vídeo comprimido OU
- Hospedar no YouTube e usar embed