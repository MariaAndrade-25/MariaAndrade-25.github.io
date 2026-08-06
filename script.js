// ============================
// EFEITO DE DIGITAÇÃO (TYPING)
// ============================

const typingElement = document.getElementById('typing');
const texts = [
    'DevOps Engineer',
    'Software Engineer',
    'Cloud Developer',
    'Full Stack Developer'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
        // Adicionando caracteres
        typingElement.textContent += currentText[charIndex];
        charIndex++;
        setTimeout(typeEffect, 80);
    } else if (isDeleting && charIndex > 0) {
        // Deletando caracteres
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
        // Aguarda antes de começar a deletar
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        // Muda para o próximo texto
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

// Inicia o efeito de digitação quando o DOM está pronto
document.addEventListener('DOMContentLoaded', typeEffect);

// ============================
// SCROLL SUAVE (SMOOTH SCROLL)
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignora o click no logo
        if (href === '#') {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================
// NAVBAR ATIVA AO SCROLL
// ============================

const navLinks = document.querySelectorAll('header a:not(.logo)');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;
        
        const section = document.querySelector(href);
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(l => l.style.color = 'var(--text)');
            link.style.color = 'var(--primary)';
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ============================
// ANIMAÇÃO DE ENTRADA (FADE-IN)
// ============================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplica observador em elementos com classe 'fade-in'
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============================
// EFEITO AO PASSAR O MOUSE EM BOTÕES
// ============================

const buttons = document.querySelectorAll('.btn, .btn-outline');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================
// ANIMAÇÃO DE APARIÇÃO NA CARGA
// ============================

window.addEventListener('load', () => {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    
    if (heroLeft) heroLeft.style.animation = 'slideInLeft 0.8s ease-out';
    if (heroRight) heroRight.style.animation = 'slideInRight 0.8s ease-out';
});

// ============================
// MENU MOBILE (OPCIONAL - PARA FUTURO)
// ============================

// Se você adicionar um menu hamburger no HTML, use este código:
// const menuToggle = document.querySelector('.menu-toggle');
// const navMenu = document.querySelector('header ul');
//
// menuToggle?.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });

// ============================
// COPY EMAIL (OPCIONAL)
// ============================

document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email);
        
        // Feedback visual
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fa-solid fa-check"></i>';
        
        setTimeout(() => {
            this.innerHTML = originalText;
        }, 2000);
    });
});

// ============================
// THROTTLE PARA SCROLL
// ============================

let scrollTimeout;

window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            updateActiveNav();
            scrollTimeout = null;
        }, 100);
    }
});

// ============================
// DETECTAR TEMA DO SISTEMA
// ============================

// Se quiser adicionar tema escuro/claro no futuro
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

prefersDark.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.style.colorScheme = 'dark';
    } else {
        document.documentElement.style.colorScheme = 'light';
    }
});

console.log('🚀 Portfólio de Maria Andrade carregado com sucesso!');
