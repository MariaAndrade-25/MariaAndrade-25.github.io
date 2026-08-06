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
        typingElement.textContent += currentText[charIndex];
        charIndex++;
        setTimeout(typeEffect, 80);
    } else if (isDeleting && charIndex > 0) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);

// ============================
// HAMBURGER MENU
// ============================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================
// SCROLL SUAVE (SMOOTH SCROLL)
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
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
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ============================
// SKILL BAR ANIMATION
// ============================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ============================
// FORMULÁRIO DE CONTATO
// ============================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const inputs = this.querySelectorAll('input, textarea');
        
        // Validação básica
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--danger)';
            } else {
                input.style.borderColor = 'var(--border)';
            }
        });

        if (!isValid) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Simulação de envio
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Enviado!';
        submitBtn.style.background = 'linear-gradient(135deg, #00ff88, #00d9ff)';
        
        // Limpar formulário
        setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            
            // Resetar estilos dos inputs
            inputs.forEach(input => {
                input.style.borderColor = 'var(--border)';
            });

            alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
        }, 1500);

        // Aqui você poderia integrar com um serviço de email como EmailJS
        // ou enviar para um backend
    });

    // Remover erro ao digitado
    contactForm.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = 'var(--border)';
            }
        });
    });
}

// ============================
// EFEITO AO PASSAR O MOUSE EM BOTÕES
// ============================

const buttons = document.querySelectorAll('.btn, .btn-outline, .btn-small');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================
// COPY EMAIL (OPCIONAL)
// ============================

document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        // Permitir o comportamento padrão do mailto
        // Se quiser copiar em vez de abrir o cliente de email, descomente:
        
        // e.preventDefault();
        // const email = this.getAttribute('href').replace('mailto:', '');
        // navigator.clipboard.writeText(email);
        
        // const originalText = this.innerHTML;
        // this.innerHTML = '<i class="fa-solid fa-check"></i>';
        
        // setTimeout(() => {
        //     this.innerHTML = originalText;
        // }, 2000);
    });
});

// ============================
// PROJETO CARDS HOVER EFFECT
// ============================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('.project-image img');
        if (img) {
            img.style.transform = 'scale(1.1)';
        }
    });

    card.addEventListener('mouseleave', function() {
        const img = this.querySelector('.project-image img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
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
// CONTADOR DE ESTATÍSTICAS (ANIMAÇÃO)
// ============================

let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            animateStats();
            hasAnimated = true;
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat h3');
    statNumbers.forEach(stat => {
        const finalNumber = parseInt(stat.textContent);
        let currentNumber = 0;
        const increment = Math.ceil(finalNumber / 50);
        
        const interval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                currentNumber = finalNumber;
                clearInterval(interval);
            }
            stat.textContent = currentNumber + (stat.textContent.match(/[+%]/) ? stat.textContent.match(/[+%]/)[0] : '');
        }, 20);
    });
}

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ============================
// DETECTAR TEMA DO SISTEMA
// ============================

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

prefersDark.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.style.colorScheme = 'dark';
    } else {
        document.documentElement.style.colorScheme = 'light';
    }
});

// ============================
// SCROLL TO TOP (BÔNUS)
// ============================

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        // Aqui você pode adicionar um botão de scroll to top se quiser
    }
});

// ============================
// CONSOLE LOG
// ============================

console.log('🚀 Portfólio de Maria Andrade carregado com sucesso!');
console.log('💼 Entre em contato através dos links de redes sociais');
