document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DIGITAÇÃO
    ===================================================== */

    const typingElement = document.getElementById("typing");

    const words = [
        "Software Engineer",
        "DevOps Engineer",
        "Cloud Enthusiast",
        "Backend Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        if (!typingElement) {
            return;
        }

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;
            }

            setTimeout(type, 85);

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                charIndex = 0;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

                setTimeout(type, 300);

                return;
            }

            setTimeout(type, 45);
        }
    }

    if (typingElement && words.length > 0) {
        type();
    }


    /* =====================================================
       MENU MOBILE
    ===================================================== */

     hamburger =
        document.querySelector(".hamburger");

     navMenu =
        document.querySelector(".nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

             isOpen =
                navMenu.classList.toggle("active");

            hamburger.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Fecha o menu ao clicar em um link */

         navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       SCROLL ANIMATION
    ===================================================== */

/* =====================================================
   SCROLL ANIMATION
===================================================== */

    const animatedElements =
    document.querySelectorAll(".fade-in");

animatedElements.forEach(element => {
    element.classList.add("animate");
});

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observerInstance.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );

    animatedElements.forEach(element => {
        observer.observe(element);
    });

} else {

    animatedElements.forEach(element => {
        element.classList.add("show");
    });

}

    /* =====================================================
       ANO DO FOOTER
    ===================================================== */

    const footerYear =
        document.querySelector(".footer-content p");

    if (footerYear) {

        footerYear.innerHTML =
            `&copy; ${new Date().getFullYear()} Maria Andrade. Todos os direitos reservados.`;

    }


    /* =====================================================
       FECHAR MENU AO REDIMENSIONAR
    ===================================================== */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 700 &&
            navMenu &&
            hamburger
        ) {

            navMenu.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =====================================================
       ESC FECHA MENU
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            navMenu &&
            hamburger
        ) {

            navMenu.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});
