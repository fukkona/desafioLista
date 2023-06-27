const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const lista = document.getElementById('todo-list');



const botonBorrar = document.getElementById('clear-button');

botonBorrar.addEventListener('click', function () {
    while (listaTareas.firstChild){
        
        listaTareas.removeChild(listaTareas.firstChild);
    }
})
