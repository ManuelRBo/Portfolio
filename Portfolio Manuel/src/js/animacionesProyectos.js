import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export function animacionesProyectos() {
  const contenedorProyectos = document.querySelectorAll(".contenedor-p");
  const titulo = document.querySelector(".seccion-proyectos h2");
  const tarjetas = document.querySelectorAll(".contenedor-p");

  contenedorProyectos.forEach((proyecto) => {
    proyecto.addEventListener("mouseenter", () => {
      const proyectos = proyecto.querySelector(".proyectos-hover");
      gsap.to(proyectos, { display: "flex", opacity: 1, duration: 0.5 });
    });

    proyecto.addEventListener("mouseleave", () => {
      const proyectos = proyecto.querySelector(".proyectos-hover");
      gsap.to(proyectos, { display: "none", opacity: 0, duration: 0.5 });
    });
  });

    const tl = gsap.timeline();
    tl.from(titulo, {scale: 2, duration: 1, opacity:0, ease: "back.out(2)"});
    tarjetas.forEach((tarjeta) => {
        tl.from(tarjeta, {opacity: 0, duration: 0.9, scale:2, x: -50, ease: "back.out(1.5)"}, "-=0.5");
    });

    ScrollTrigger.create({
        trigger: ".seccion-proyectos",
        animation: tl,
        start: "-150 center",
        toggleActions: "play none none reset",
    });
}
