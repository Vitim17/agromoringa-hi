/* ===================================
   AGROMORINGA - JAVASCRIPT PRINCIPAL
   =================================== */

// ===== VARIÁVEIS GLOBAIS =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');

// ===== MENU MOBILE =====
// Abrir menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        document.body.style.overflow = 'hidden';
    });
}

// Fechar menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = '';
    });
}

// Fechar menu ao clicar nos links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = '';
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show-menu')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
        }
    }
});

// ===== SCROLL HEADER =====
function scrollHeader() {
    if (this.scrollY >= 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
}
window.addEventListener('scroll', scrollHeader);

// ===== ACTIVE LINK NO SCROLL =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__link[href*="' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (link) {
                // Remove active de todos
                navLinks.forEach(l => l.classList.remove('active'));
                // Adiciona active no atual
                link.classList.add('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignora links vazios ou apenas #
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMAÇÕES AO SCROLL (Simple Scroll Animation) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos com data-aos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Aplicar delay se existir
        const delay = el.getAttribute('data-aos-delay');
        if (delay) {
            el.style.transitionDelay = `${parseInt(delay)}ms`;
        }
        
        observer.observe(el);
    });
});

// ===== VIDEO HERO =====
const heroVideo = document.getElementById('hero-video');

if (heroVideo) {
    // Tentar reproduzir o vídeo
    heroVideo.play().catch(error => {
        console.log('Autoplay foi bloqueado:', error);
        // Se autoplay falhar, mostrar controles
        heroVideo.controls = true;
    });
    
    // Otimização: pausar vídeo quando não estiver visível
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play().catch(e => console.log('Play error:', e));
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.25 });
    
    videoObserver.observe(heroVideo);
}

// ===== WHATSAPP FLOAT BUTTON =====
const whatsappFloat = document.getElementById('whatsapp-float');

if (whatsappFloat) {
    // Mostrar/ocultar botão baseado no scroll
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 300) {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.visibility = 'visible';
        } else {
            whatsappFloat.style.opacity = '0';
            whatsappFloat.style.visibility = 'hidden';
        }
        
        lastScroll = currentScroll;
    });
    
    // Estado inicial
    if (window.pageYOffset <= 300) {
        whatsappFloat.style.opacity = '0';
        whatsappFloat.style.visibility = 'hidden';
    }
}

// ===== LAZY LOADING DE IMAGENS =====
if ('loading' in HTMLImageElement.prototype) {
    // Browser suporta lazy loading nativo
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback para browsers antigos
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ===== ESTATÍSTICAS ANIMADAS (COUNT UP) =====
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current + (element.dataset.suffix || '');
        
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Observar elementos de estatísticas
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const statNumbers = entry.target.querySelectorAll('.stat__number');
            
            statNumbers.forEach(stat => {
                const finalValue = parseInt(stat.textContent);
                if (!isNaN(finalValue)) {
                    stat.dataset.suffix = stat.textContent.replace(finalValue, '');
                    animateValue(stat, 0, finalValue, 2000);
                }
            });
            
            entry.target.classList.add('counted');
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.about__stats');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

// ===== GALERIA - ZOOM EM IMAGENS =====
const galleryItems = document.querySelectorAll('.gallery__item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            // Criar modal simples para visualização
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: zoom-out;
                padding: 20px;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 8px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Fechar ao clicar
            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            });
            
            // Fechar com ESC
            const closeOnEsc = (e) => {
                if (e.key === 'Escape') {
                    if (document.body.contains(modal)) {
                        document.body.removeChild(modal);
                        document.body.style.overflow = '';
                    }
                    document.removeEventListener('keydown', closeOnEsc);
                }
            };
            document.addEventListener('keydown', closeOnEsc);
        }
    });
});

// ===== BANNER DE VÍDEO INSTITUCIONAL =====
const videoContainer = document.getElementById('video-container');
const videoThumbnail = document.getElementById('video-thumbnail');
const videoPlayBtn = document.getElementById('video-play-btn');
const videoPlayer = document.getElementById('video-player');
const youtubePlayer = document.getElementById('youtube-player');

if (videoPlayBtn && videoContainer) {
    videoPlayBtn.addEventListener('click', () => {
        // Adicionar classe playing
        videoContainer.classList.add('playing');
        
        // Se for YouTube, carregar o iframe com autoplay
        if (youtubePlayer) {
            const videoSrc = youtubePlayer.getAttribute('data-src');
            if (videoSrc) {
                youtubePlayer.src = videoSrc;
            }
        }
        
        // Se for HTML5, iniciar reprodução
        const html5Player = document.getElementById('html5-player');
        if (html5Player) {
            html5Player.play().catch(error => {
                console.log('Erro ao reproduzir vídeo:', error);
            });
        }
        
        // Analytics (opcional)
        console.log('Vídeo institucional reproduzido');
        
        // Scroll suave até o vídeo
        videoContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    });
    
    // Alternativa: Clicar em qualquer lugar do thumbnail
    videoThumbnail.addEventListener('click', () => {
        videoPlayBtn.click();
    });
}

// Detectar quando o vídeo terminar (HTML5)
const html5Player = document.getElementById('html5-player');
if (html5Player) {
    html5Player.addEventListener('ended', () => {
        console.log('Vídeo institucional finalizado');
        // Opcional: Mostrar CTA ou replay
    });
}

// ===== MENSAGENS DE CONSOLE =====
console.log('%c🌱 AGROMORINGA', 'color: #2d5016; font-size: 24px; font-weight: bold;');
console.log('%cWebsite desenvolvido com tecnologia e paixão pelo agronegócio', 'color: #4a7c1c; font-size: 12px;');
console.log('%cParnaíba - PI | Brasil', 'color: #666; font-size: 10px;');

// ===== PERFORMANCE MONITORING (DESENVOLVIMENTO) =====
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Página carregada em: ${pageLoadTime}ms`);
        }, 0);
    });
}

// ===== PREVENIR SUBMIT DE FORMULÁRIOS VAZIOS =====
document.addEventListener('submit', (e) => {
    const form = e.target;
    const requiredFields = form.querySelectorAll('[required]');
    let hasEmpty = false;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            hasEmpty = true;
            field.style.borderColor = '#e74c3c';
        } else {
            field.style.borderColor = '';
        }
    });
    
    if (hasEmpty) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

// ===== EASTER EGG - KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🌱 Você descobriu o segredo da Moringa! 30% de proteína desbloqueada! 💪');
        }, 2000);
    }
});

// Adicionar keyframes para rainbow effect
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);