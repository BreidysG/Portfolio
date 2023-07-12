let sections= document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const $form = document.querySelector("#form");

const portfolioContainer = document.getElementById("portfolioContainer");

const container = [
    
    {
        image: "./assets/Project6.PNG",
        title: "Movies",
        description: "Aplicación para consultar películas, agregar a favoritos y demás. Proyecto para el manejo de API REST.",
        github: "https://breidysg.github.io/Movies/",
    },
    {
        image: "./assets/Project1.PNG",
        title: "Batatabit",
        description: "Landing Page hecha con HTML y CSS, aplicando el concepto de Responsive Desing y Mobile First.",
        github: "https://breidysg.github.io/Batatabit/",
    },
    {
        image: "./assets/Project2.PNG",
        title: "Blogspot",
        description: "Blogspot génerico hecho con HTML y CSS.",
        github: "https://breidysg.github.io/Blogspot/",
    },
    {
        image: "./assets/Project3.PNG",
        title: "Calculadora",
        description: "Calculadora sencilla con diferentes temas de colores, hecha con HTML, CSS y JavaScript.",
        github: "https://breidysg.github.io/Calculadora/",
    },
    {
        image: "./assets/Project4.PNG",
        title: "ToDoList",
        description: "Aplicación para crear tareas, completarlas y borrarlas. Realizada con HTML, CSS y JavaScript.",
        github: "https://breidysg.github.io/ToDoList/",
    },
    {
        image: "./assets/Project5.PNG",
        title: "LJUSTICE",
        description: "Juego de lógica realizado con HTML, CSS y JavaScript.",
        github: "https://breidysg.github.io/LJUSTICE/",
    }
]

container.forEach( function(obj){
    let portfolioBox = `
            <div class="portfolio-box">
                <img src="${obj.image}" alt="${obj.title}">
                <div class="portfolio-layer">
                    <h4>${obj.title}</h4>
                    <p>${obj.description}</p>
                    <a href="${obj.github}" target="_blank"><i class="bx bx-link-external"></i></a>
                </div>
            </div>
    `
    portfolioContainer.innerHTML += portfolioBox;

})

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Ingeniero de Sistemas"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

$form.addEventListener("submit", handleSumit)

async function handleSumit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await  fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "aplication/json"
        }
    });

    if(response.ok){
        this.reset();
        alert("Gracias por contactarme, ¡te escribiré pronto! :)")
    }
}

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset+height){
            navLinks.forEach(link =>{
                link.classList.remove("active");
                document.querySelector("header nav a[href*="+id+"]").classList.add("active");
            })
        }
    })

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>100);
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

ScrollReveal({ 
    //reset: true,
    distance: "80px",
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "top" });