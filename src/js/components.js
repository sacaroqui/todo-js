import { Todo } from '../classes/todo.class';
import { listaTodos } from '../index'


//referencias Html
const divListaTodo = document.querySelector('.todo-list');
const insertarNuevoTodo = document.querySelector('.new-todo');
const btnBorrarCompeltado = document.querySelector('.clear-completed');
const filtros = document.querySelector('.filters');
const selectorFiltros = document.querySelectorAll('.filtro');


export const crearHtmlTodo = (todo) => {
    const htmlTodo = `
    <li class="${(!todo.completado)?'':'completed'}" data-id=${todo.id}>
        <div class="view">
            <input class="toggle" type="checkbox" ${(!todo.completado)?' ':'checked'}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;
    const elemento = document.createElement('div');
    elemento.innerHTML = htmlTodo;
    divListaTodo.append(elemento.firstElementChild);
    //console.log(divListaTodo);
}

insertarNuevoTodo.addEventListener('keyup', (event) => {
    //console.log(event.keyCode);
    //console.log(insertarNuevoTodo.value);
    if (event.keyCode === 13 && insertarNuevoTodo.value != '') {
        //console.log(' si inseratara tarea');
        const nuevoTodo = new Todo(insertarNuevoTodo.value);
        listaTodos.nuevoTodo(nuevoTodo);
        crearHtmlTodo(nuevoTodo);
        insertarNuevoTodo.value = '';

    }

})

divListaTodo.addEventListener('click', (event) => {
    //console.log(event.target.parentElement.parentElement);
    //console.log(listaTodos);
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    //console.log(todoId);
    if (nombreElemento.includes('input')) {
        //console.log('sepresiono el boton');
        todoElemento.classList.toggle('completed');
        listaTodos.completadoTodo(todoId);

    } else if (nombreElemento.includes('button')) {
        console.log('presiono el boton');
        divListaTodo.removeChild(todoElemento);
        listaTodos.eliminarTodo(todoId);
    }
})

btnBorrarCompeltado.addEventListener('click', () => {
    //console.log('estoy en boton borrar');
    listaTodos.eliminarCompletados();
    //console.log(divListaTodo.childElementCount);
    for (let i = divListaTodo.childElementCount - 1; i >= 0; i--) {

        const pp = divListaTodo.children[i];
        //console.log(pp);
        if (pp.classList.contains('completed')) {
            divListaTodo.removeChild(pp);
        }
    }
    //console.log(listaTodos);
})

filtros.addEventListener('click', (events) => {

    //console.log(events.target.text);
    const filtro = events.target.text;
    //console.log(filtro);
    //console.log(selectorFiltros);
    selectorFiltros.forEach((element) => element.classList.remove('selected'));
    events.target.classList.add('selected');
    //console.log(divListaTodo);
    if (!filtro) {
        return;
    }
    //console.log(divListaTodo);
    for (let element of divListaTodo.children) {
        //console.log(element);
        const evaluador = element.classList.contains('completed');
        //console.log(evaluador);
        element.classList.remove('hidden');
        switch (filtro) {
            case 'Pendientes':
                if (evaluador) {
                    element.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!evaluador) {
                    element.classList.add('hidden');
                }
                break;
                //default:
                //element.classList.remove('hidden');
        }


        //element.classList.remove('completed');
    }

    // for (let element of divListaTodo.children) {
    //     //console.log(element);
    //     divListaTodo.classList.remove('hidden');
    //     const tareaCompletada = element.classList.contains('completed');
    //     console.log(tareaCompletada);

    //     switch (filtro) {
    //         case 'pendientes':
    //             if (!tareaCompletada) {
    //                 divListaTodo.classList.add('hidden');
    //             }
    //             break;
    //         case 'completados':
    //             if (tareaCompletada) {
    //                 divListaTodo.classList.add('hidden');
    //             }
    //             break;



    //     }
    //     if (tareaCompletada) {
    //         element.classList.add('hidden');
    //     }
    // }

    // console.log(divListaTodo);




})