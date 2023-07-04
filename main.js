let sections= document.querySelectorAll("section");
console.log(sections);
let navLinks = document.querySelectorAll("header nav a");
console.log(navLinks);

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Ingeniero de Sistemas"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


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
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });

