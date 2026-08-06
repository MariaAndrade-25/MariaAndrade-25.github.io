const text = [
    "DevOps em Formação",
    "Linux • Git • Python",
    "42 São Paulo",
    "Infraestrutura & Automação"
];

let line = 0;
let index = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = text[line];

    if (!deleting) {

        typing.innerHTML = current.substring(0, index);

        index++;

        if (index > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.innerHTML = current.substring(0, index);

        index--;

        if (index < 0) {

            deleting = false;

            line++;

            if (line >= text.length)
                line = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);

}

typeEffect();