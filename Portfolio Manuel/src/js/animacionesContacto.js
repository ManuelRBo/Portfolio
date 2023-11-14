import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animacionesContacto() {
    const titulo = document.querySelector(".seccion-contacto h2");
    const texto = document.querySelector(".texto-contacto");
    const formulario = document.querySelector(".contenedor-formulario");
    const tl = gsap.timeline();

    if(window.innerWidth < 768) {
        tl.from(titulo, {duration: 0.5, opacity: 0, });
        tl.from(texto, {duration: 0.5, opacity: 0});
        tl.from(formulario, {duration: 0.5, opacity: 0}); 
    }else{
        tl.from(titulo, { y:100, duration: 1, opacity: 0, });
        tl.from(texto, { x: -100, duration: 1, opacity: 0, ease: "back.out(3)"});
        tl.from(formulario, { x: 100, duration: 1, opacity: 0, ease: "back.out(3)"}, "-=1");
    }

    ScrollTrigger.create({
        trigger: ".seccion-contacto",
        animation: tl,
        start: "-100 80%",
        toggleActions: "play none none reset",
    });
}