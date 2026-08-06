/* ==========================================
   EFEITO DE DIGITAÇÃO
========================================== */

const texts = [
    "DevOps em Formação",
    "Linux • Git • Python",
    "Cloud • Automação",
    "42 São Paulo"
];

const typing = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    const current = texts[textIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeWriter, 1800);

            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length)
                textIndex = 0;
        }

    }

    setTimeout(typeWriter, deleting ? 45 : 90);
}

typeWriter();

/* ==========================================
   NAVBAR
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(9,9,11,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(9,9,11,.75)";
        header.style.boxShadow = "none";

    }

});

/* ==========================================
   ANIMAÇÃO AO ROLAR
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".section,.card,.skills div").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================================
   TERMINAL
========================================== */

const terminal = document.querySelector(".terminal-body");

const commands = [

`<p><span class="green-text">maria@ubuntu</span>:~$ pwd</p>
<p>/home/maria</p>`,

`<p><span class="green-text">maria@ubuntu</span>:~$ git status</p>
<p>On branch main ✔</p>`,

`<p><span class="green-text">maria@ubuntu</span>:~$ docker ps</p>
<p>No containers running</p>`,

`<p><span class="green-text">maria@ubuntu</span>:~$ whoami</p>
<p>Maria Andrade</p>`,

`<p><span class="green-text">maria@ubuntu</span>:~$ echo "Always Learning"</p>
<p>Always Learning 🚀</p>`

];

let cmd = 0;

setInterval(() => {

    terminal.innerHTML = commands[cmd];

    cmd++;

    if (cmd >= commands.length)
        cmd = 0;

}, 3500);