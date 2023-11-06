const menu = document.getElementById('menu');
const menuDesplegable = document.getElementById('menu-desplegable');
const menuDesplegableItems = document.querySelectorAll('.menu-desplegable a');
const header = document.querySelector('header');

menu.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
  menuDesplegable.classList.toggle('menu-desplegable-open');
  if (menuDesplegable.classList.contains('menu-desplegable-open')) {
    header.style.background = 'transparent';
    menuDesplegable.classList.add('cerrar-animacion');
  }
});

menuDesplegableItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        menuDesplegable.classList.remove('menu-desplegable-open');
    });
});


