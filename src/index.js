import './styles.css';
import { Todo } from './classes/todo.class';
import { ListaTodo } from './classes/todo-list.class';
import { crearHtmlTodo } from './js/components';


export const listaTodos = new ListaTodo();

listaTodos.tareas.forEach(tarea => crearHtmlTodo(tarea));
//const tarea = new Todo('aprender javaScript');

// //console.log(tarea);
//listaTodos.nuevoTodo(tarea);
//console.log(listaTodos.tareas);
//listaTodos.tareas[0].imprimirClase();
//console.log(listaTodos.tareas[0]);

// crearHtmlTodo(tarea);
//console.log(listaTodos);

// localStorage.setItem('mi-key', 'ADFGH456789');

// setTimeout(() => {
//     localStorage.removeItem('mi-key')
// }, 1500)