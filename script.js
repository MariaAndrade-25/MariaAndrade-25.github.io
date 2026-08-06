/* =========================
   DIGITAÇÃO
========================= */


const typingElement = document.getElementById("typing");


const words = [

    "DevOps Engineer",

    "Software Engineer",

    "Cloud Enthusiast",

    "Backend Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typing(){


    const currentWord = words[wordIndex];


    if(!deleting){


        typingElement.textContent =
        currentWord.substring(0,charIndex++);



        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typing,1200);

            return;

        }



    } else {


        typingElement.textContent =
        currentWord.substring(0,charIndex--);



        if(charIndex < 0){

            deleting=false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex=0;

            }

        }


    }


    setTimeout(typing, deleting ? 50 : 100);


}



typing();







/* =========================
 SCROLL ANIMATION
========================= */


const elements =
document.querySelectorAll(
".project-card, .card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{
threshold:.2
}

);



elements.forEach(
element=>observer.observe(element)
);







/* =========================
 ANO FOOTER
========================= */


const footer =
document.querySelector("footer p");



if(footer){


footer.innerHTML =
`© ${new Date().getFullYear()} Maria Andrade`;

}