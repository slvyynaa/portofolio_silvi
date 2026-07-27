// ===================================
// NAVBAR EFFECT
// ===================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});





// ===================================
// TYPING EFFECT
// ===================================


const typingText = document.getElementById("typing");


const words = [

    "SMK Krian 1",
    "Rekayasa Perangkat Lunak",
    "Web Developer"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typingEffect(){


    let currentWord = words[wordIndex];


    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex++);

    }else{

        typingText.textContent =
        currentWord.substring(0,charIndex--);

    }



    let speed = deleting ? 60 : 120;



    if(!deleting && charIndex > currentWord.length){

        deleting = true;

        speed = 1500;

    }



    if(deleting && charIndex < 0){

        deleting = false;

        wordIndex++;


        if(wordIndex >= words.length){

            wordIndex = 0;

        }


        charIndex = 0;

    }



    setTimeout(typingEffect,speed);


}


typingEffect();






// ===================================
// SCROLL REVEAL
// ===================================


const sections = document.querySelectorAll("section");



const revealObserver = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},

{

threshold:0.15

}

);



sections.forEach(section=>{

    revealObserver.observe(section);

});








// ===================================
// BACK TO TOP BUTTON
// ===================================


const topButton =
document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        topButton.style.display="block";


    }else{


        topButton.style.display="none";


    }


});




topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});








// ===================================
// SMOOTH SCROLL NAVBAR
// ===================================


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(link=>{


    link.addEventListener(
    "click",
    function(e){


        e.preventDefault();


        const target =
        document.querySelector(
        this.getAttribute("href")
        );



        if(target){


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});








// ===================================
// ACTIVE NAVBAR
// ===================================


const allSections =
document.querySelectorAll(
"section[id]"
);



const navLinks =
document.querySelectorAll(
".nav-link"
);



window.addEventListener(
"scroll",
()=>{


let current="";



allSections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(
window.scrollY >= sectionTop
){

current =
section.getAttribute("id");

}


});




navLinks.forEach(link=>{


link.classList.remove(
"active"
);



if(
link.getAttribute("href")
===
"#"+current
){


link.classList.add(
"active"
);


}


});


}

);








// ===================================
// CLOSE MOBILE MENU AFTER CLICK
// ===================================


const menu =
document.querySelector(
".navbar-collapse"
);



const menuLinks =
document.querySelectorAll(
".nav-link"
);



menuLinks.forEach(link=>{


link.addEventListener(
"click",
()=>{


if(
menu.classList.contains("show")
){


document
.querySelector(".navbar-toggler")
.click();


}


});


});