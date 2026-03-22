/* ===================================
   PÁGINA DE PRODUTOS - JAVASCRIPT
   =================================== */

// ===== FILTROS DE PRODUTOS =====
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

// Função para filtrar produtos
function filterProducts(category) {
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const wrapper = card.closest('.seed-card-buybox');
        
        // Remover animação
        card.style.animation = 'none';
        
        if (category === 'todos' || cardCategory === category) {
            card.classList.remove('hidden');
            if (wrapper) wrapper.classList.remove('hidden');
            // Reativar animação após um frame
            setTimeout(() => {
                card.style.animation = '';
            }, 10);
        } else {
            card.classList.add('hidden');
            if (wrapper) wrapper.classList.add('hidden');
        }
    });
}

// Event listeners para botões de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona active no botão clicado
        button.classList.add('active');
        
        // Filtra os produtos
        const category = button.getAttribute('data-filter');
        filterProducts(category);
        
        // Analytics (opcional)
        console.log(`Filtro ativado: ${category}`);
        
        // Scroll suave para o topo dos produtos
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid) {
            const offset = 120; // altura do header + filtros
            const targetPosition = productsGrid.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== CONTADOR DE PRODUTOS VISÍVEIS =====
function updateProductCount() {
    const visibleProducts = document.querySelectorAll('.product-card:not(.hidden)');
    const activeFilter = document.querySelector('.filter-btn.active');
    
    if (activeFilter) {
        const count = visibleProducts.length;
        console.log(`Produtos visíveis: ${count}`);
    }
}

// Atualizar contador quando filtrar
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        setTimeout(updateProductCount, 100);
    });
});

// ===== HOVER EFFECTS AVANÇADOS =====
productCards.forEach(card => {
    const image = card.querySelector('.product-card__image img');
    
    if (image) {
        card.addEventListener('mouseenter', () => {
            // Efeito parallax suave na imagem
            card.addEventListener('mousemove', handleParallax);
        });
        
        card.addEventListener('mouseleave', () => {
            card.removeEventListener('mousemove', handleParallax);
            // Reset da posição
            if (image) {
                image.style.transform = 'scale(1.1) translate(0, 0)';
            }
        });
    }
});

function handleParallax(e) {
    const card = e.currentTarget;
    const image = card.querySelector('.product-card__image img');
    
    if (!image) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) / centerX * 10;
    const moveY = (y - centerY) / centerY * 10;
    
    image.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
}

// ===== BOTÕES DE ORÇAMENTO - TRACKING =====
const quoteButtons = document.querySelectorAll('.product-card__btn, .btn--full');

quoteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            const productName = card.querySelector('.product-card__title')?.textContent;
            console.log(`Orçamento solicitado: ${productName}`);
            
            // Feedback visual
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Redirecionando...';
            button.style.background = '#27ae60';
            
            // Restaurar após delay (caso o usuário não seja redirecionado)
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 3000);
        }
    });
});

// ===== DESTACAR PRODUTOS EM PROMOÇÃO =====
const featuredCards = document.querySelectorAll('.product-card--featured');

featuredCards.forEach((card, index) => {
    // Animação de pulso periódica
    setInterval(() => {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    }, 5000 + (index * 1000)); // Offset para cada card
});

// ===== SCROLL REVEAL PARA PRODUTOS =====
const productObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Delay escalonado
            
            productObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Aplicar observer apenas se os cards ainda não foram observados
document.addEventListener('DOMContentLoaded', () => {
    productCards.forEach(card => {
        if (!card.style.opacity) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        productObserver.observe(card);
    });
});

// ===== BUSCA RÁPIDA (OPCIONAL - PODE SER EXPANDIDA) =====
function quickSearch(query) {
    const lowerQuery = query.toLowerCase();
    let visibleCount = 0;
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-card__title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.product-card__description')?.textContent.toLowerCase() || '';
        const category = card.querySelector('.product-card__category')?.textContent.toLowerCase() || '';
        
        const matches = title.includes(lowerQuery) || 
                       description.includes(lowerQuery) || 
                       category.includes(lowerQuery);
        
        if (matches || query === '') {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    console.log(`Busca: "${query}" - ${visibleCount} produtos encontrados`);
    return visibleCount;
}

// Exportar função de busca para uso externo (se necessário)
window.productQuickSearch = quickSearch;

// ===== SHARE PRODUCT (FUTURO) =====
function shareProduct(productName, productUrl) {
    if (navigator.share) {
        navigator.share({
            title: `${productName} - Agromoringa`,
            text: `Confira este produto incrível da Agromoringa: ${productName}`,
            url: productUrl || window.location.href
        }).then(() => {
            console.log('Produto compartilhado com sucesso!');
        }).catch((error) => {
            console.log('Erro ao compartilhar:', error);
        });
    } else {
        // Fallback: copiar link
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

window.shareProduct = shareProduct;

// ===== COMPARAÇÃO DE PRODUTOS (FUTURO) =====
let comparisonList = [];

function addToComparison(productId) {
    if (comparisonList.length < 3 && !comparisonList.includes(productId)) {
        comparisonList.push(productId);
        console.log('Produto adicionado à comparação:', productId);
        console.log('Lista de comparação:', comparisonList);
        updateComparisonUI();
    } else if (comparisonList.includes(productId)) {
        console.log('Produto já está na lista de comparação');
    } else {
        alert('Você pode comparar até 3 produtos por vez.');
    }
}

function removeFromComparison(productId) {
    comparisonList = comparisonList.filter(id => id !== productId);
    console.log('Produto removido da comparação:', productId);
    updateComparisonUI();
}

function updateComparisonUI() {
    // Implementar UI visual para comparação (futuro)
    console.log(`${comparisonList.length} produtos na comparação`);
}

window.addToComparison = addToComparison;
window.removeFromComparison = removeFromComparison;

// ===== FAVORITOS (LOCAL STORAGE) =====
function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('agromoringa_favorites') || '[]');
    
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        console.log('Produto removido dos favoritos:', productId);
    } else {
        favorites.push(productId);
        console.log('Produto adicionado aos favoritos:', productId);
    }
    
    localStorage.setItem('agromoringa_favorites', JSON.stringify(favorites));
    return favorites.includes(productId);
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('agromoringa_favorites') || '[]');
}

window.toggleFavorite = toggleFavorite;
window.getFavorites = getFavorites;

// ===== ANIMAÇÃO DO HERO =====
const productsHero = document.querySelector('.products-hero');

if (productsHero) {
    // Parallax simples no scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled < productsHero.offsetHeight) {
            productsHero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ===== STICKY FILTERS =====
const filtersSection = document.querySelector('.products-filters');
let filtersTop = 0;

if (filtersSection) {
    window.addEventListener('load', () => {
        filtersTop = filtersSection.offsetTop;
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= filtersTop - 80) {
            filtersSection.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            filtersSection.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Buyboxes (sementes/pellets) agora redirecionam direto ao checkout.

// ===== LOG DE INICIALIZAÇÃO =====
console.log('%c📦 PRODUTOS AGROMORINGA', 'color: #2d5016; font-size: 18px; font-weight: bold;');
console.log(`%c${productCards.length} produtos carregados`, 'color: #4a7c1c; font-size: 12px;');
console.log(`%c${filterButtons.length} filtros disponíveis`, 'color: #4a7c1c; font-size: 12px;');