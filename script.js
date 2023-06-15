let total = 20;
let labelTotal = document.getElementById('total');

labelTotal.append(`${total}`);


// Generar seccion
let btnAdd = document.getElementById('btn-add');
let contenido = document.getElementById('contenedor');

btnAdd.addEventListener('click', e => {
  e.preventDefault();

  let clonado = document.querySelector('.clonar');
  let clon = clonado.cloneNode(true);

  contenido.appendChild(clon).classList.remove('clonar');

});