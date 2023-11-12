import { gsap } from "gsap";
import { animacionesSeccionManuel } from "./js/animacionesSeccionManuel";
import { animacionesSobreMi } from "./js/animacionesSobreMi";
import { animacionesExp } from "./js/animacionesExperiencia";
import { animacionesProyectos } from "./js/animacionesProyectos";
import { animacionesContacto } from "./js/animacionesContacto";

const menu = document.getElementById("menu");
const menuDesplegable = document.getElementById("menu-desplegable");
const menuDesplegableItems = document.querySelectorAll(".menu-desplegable a");
const header = document.querySelector("header");

const enlacesMenu = document.querySelectorAll(".menu-desplegable a");


const tl = gsap.timeline();
tl.from(enlacesMenu[0], { duration: 0.5, opacity: 0, x: 100, delay: 0.5, ease: "power3.out" });
tl.from(enlacesMenu[1], { duration: 0.5, opacity: 0, x: 100, ease: "power3.out" }, "-=0.2");
tl.from(enlacesMenu[2], { duration: 0.5, opacity: 0, x: 100, ease: "power3.out" }, "-=0.2");
tl.from(enlacesMenu[3], { duration: 0.5, opacity: 0, x: 100, ease: "power3.out" }, "-=0.2");
tl.from(enlacesMenu[4], { duration: 0.5, opacity: 0, x: 100, ease: "power3.out" }, "-=0.2");
tl.from(enlacesMenu[5], { duration: 0.5, opacity: 0, x: 100, ease: "power3.out" }, "-=0.2");

menu.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  menuDesplegable.classList.toggle("menu-desplegable-open");

  if (menuDesplegable.classList.contains("menu-desplegable-open")) {
    header.style.background = "transparent";
    menuDesplegable.classList.add("cerrar-animacion");
    tl.restart().play();
  }
});

menuDesplegableItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("menu-open");
    menuDesplegable.classList.remove("menu-desplegable-open");
  });
});




animacionesSeccionManuel(
  document.querySelector(".parrafo-superior"),
  document.querySelector(".parrafo-inferior"),
  document.querySelector("h1")
);
animacionesSobreMi(
  document.querySelector(".seccion-sobreMi"),
  document.querySelector(".primer-parrafo"),
  document.querySelector(".segundo-parrafo"),
  document.querySelector(".tercer-parrafo"),
  document.querySelector(".boton-descarga-CV"),
  document.querySelector(".seccion-sobreMi h2")
);

animacionesExp();
animacionesProyectos();
animacionesContacto();
