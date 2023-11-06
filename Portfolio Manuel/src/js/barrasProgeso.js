import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const barraProgreso = document.querySelector('.progreso');
gsap.to('.barra-progreso', {
  scrollTrigger: {
    trigger: '.seccion-exp',
    start: 'top 90%',
    end: 'bottom 10%',
    onEnter: () => {
      barraProgreso.classList.add('barra-progreso-animacion');
    },
    onLeaveBack: () => {
      barraProgreso.classList.remove('barra-progreso-animacion');
    },
  },
});