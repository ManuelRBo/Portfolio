import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function animacionesSobreMi(seccionSobreMi, parrafo1, parrafo2, parrafo3, boton, titulo) {

    const tl = gsap.timeline();
    tl.from(titulo, { duration: 1, opacity: 0, y: -50, ease: "power4.out"});
    tl.from(parrafo1, { duration: 1, opacity: 0, y: -50, ease: "power4.out"}, "-=0.6");
    tl.from(parrafo2, { duration: 1, opacity: 0, y: -50, ease: "power4.out" }, "-=0.6");
    tl.from(parrafo3, { duration: 1, opacity: 0, y: -50, ease: "power4.out" }, "-=0.6");
    tl.from(boton, { duration: 1, opacity: 0, y: -50, ease: "power4.out" }, "-=0.6");

    ScrollTrigger.create({
        trigger: seccionSobreMi,
        animation: tl,
        start: "top 90%",
        toggleActions: "play none none reset",
    });
}