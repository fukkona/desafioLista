const input = document.querySelector('#tarea');
const agregar = document.querySelector('#agregar');
const borrar = document.querySelector('#borrar');
const lista = document.querySelector('ol');
const mensajeError = document.querySelector('#error');
const listaTarea = [];

agregar.addEventListener('click', () => {
  const tarea = input.value;
  
  if (tarea !== '') {

    listaTarea.push(tarea);
    const elementoLista = document.createElement('li');
    elementoLista.textContent = tarea;
    lista.appendChild(elementoLista);
    input.value = '';
    
    mensajeError.textContent = '';
    
    } else { 

    mensajeError.textContent = 'Debe ingresar una tarea!!'
  }
});

borrar.addEventListener('click', () => {
  listaTarea.length = 0;
  lista.innerHTML = '';
  mensajeError.textContent = '';
});