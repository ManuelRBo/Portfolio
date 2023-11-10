import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const menu = document.getElementById('menu');
const menuDesplegable = document.getElementById('menu-desplegable');
const menuDesplegableItems = document.querySelectorAll('.menu-desplegable a');
const header = document.querySelector('header');
const contenedorProyectos = document.querySelectorAll('.contenedor-p');
const enlacesMenu = document.querySelectorAll('.menu-desplegable a');
const progresoExp = document.querySelectorAll('.progreso');


const tl = gsap.timeline();
tl.from(enlacesMenu[0], {duration: 0.5, opacity:0, x: 100, delay:0.5});
tl.from(enlacesMenu[1], {duration: 0.5, opacity:0, x: 100}, '-=0.2');
tl.from(enlacesMenu[2], {duration: 0.5, opacity:0, x: 100}, '-=0.2');
tl.from(enlacesMenu[3], {duration: 0.5, opacity:0, x: 100}, '-=0.2');
tl.from(enlacesMenu[4], {duration: 0.5, opacity:0, x: 100}, '-=0.2');
tl.from(enlacesMenu[5], {duration: 0.5, opacity:0, x: 100}, '-=0.2');


menu.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
  menuDesplegable.classList.toggle('menu-desplegable-open');
  
  if (menuDesplegable.classList.contains('menu-desplegable-open')) {
    header.style.background = 'transparent';
    menuDesplegable.classList.add('cerrar-animacion');
    tl.restart().play();
  }
});

menuDesplegableItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('menu-open');
    menuDesplegable.classList.remove('menu-desplegable-open');
  });
});


contenedorProyectos.forEach((proyecto) => {
  proyecto.addEventListener('mouseenter', () => {
    const proyectos  = proyecto.querySelector('.proyectos-hover');
    gsap.to(proyectos, {display: 'flex', opacity: 1, duration: 0.5});
  });

  proyecto.addEventListener('mouseleave', () => {
    const proyectos  = proyecto.querySelector('.proyectos-hover');
    gsap.to(proyectos, {display: 'none', opacity: 0, duration: 0.5});
  });
});

gsap.registerPlugin(ScrollTrigger);

progresoExp.forEach((progreso) => {
  gsap.to(progreso, {
    scrollTrigger: {
      trigger: '.contenedor-experiencia',
      start: 'top 80%',
      end: '500 80%',
      toggleActions: 'play reverse play reverse',
      markers: true,
    },
    width: progreso.dataset.width,
    duration: 1,
  });
});

