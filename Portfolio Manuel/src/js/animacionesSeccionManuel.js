import {gsap} from "gsap";

export function animacionesSeccionManuel(parrafoSuperior, parrafoInferior, titulo) {
  gsap.from(parrafoSuperior, {
    opacity: 0,
    duration: 1,
    y: -50,
  });

  gsap.from(parrafoInferior, {
    opacity: 0,
    duration: 1,
    y: 50,
  });
}