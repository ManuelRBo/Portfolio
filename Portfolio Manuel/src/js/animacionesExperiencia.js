import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const progresoExp = document.querySelectorAll(".progreso");
const titulo = document.querySelector(".seccion-exp h2");

export function animacionesExp(){
    
    progresoExp.forEach((progreso) => {
        gsap.to(progreso, {
          scrollTrigger: {
            trigger: ".contenedor-experiencia",
            start: "-50 80%",
            toggleActions: "play none none reset",
          },
          width: progreso.dataset.width,
          duration: 1.5,
            ease: "back.out(1)",
        });
      });

        gsap.from(titulo, {
            scrollTrigger: {
            trigger: ".contenedor-experiencia",
            start: "-100 80%",
            toggleActions: "play none none reset",
            },
            x: -100,
            opacity: 0,
            duration: 1,
        });

}

