import { Todo } from "./todo.class";

export class ListaTodo {

    constructor() {
        this.cargarLocalStorage();

        //this.tareas = [];
        //this.cargarLocalStorage();
    }
    nuevoTodo(todo) {
        this.tareas.push(todo);
        this.guardarLocalStorage();
    }
    completadoTodo(id) {
        //console.log('estoy en el completadoTodo', id);
        for (let tarea of this.tareas) {
            if (tarea.id == id) {
                tarea.completado = !tarea.completado;
            }
        }
        this.guardarLocalStorage();
        //console.log(this.tareas);
    }

    eliminarTodo(id) {

        this.tareas = this.tareas.filter(tarea => tarea.id != id);
        //console.log(this.tareas);
        this.guardarLocalStorage();
    }

    eliminarCompletados() {
        //console.log('Estoy en el metodo eliminar completados');
        this.tareas = this.tareas.filter(tarea => !tarea.completado)
            //console.log(this.tareas);
        this.guardarLocalStorage();

        // for (let i = this.tareas.length - 1; i >= 0; i--) {
        //     //console.log(this.tareas[i]);


        //     if (this.tareas[i].completado) {
        //         console.log('la tarea ', i, 'esta completada');
        //     }
        // }
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.tareas));
        //console.log(this.tareas);
        //this.cargarLocalStorage();
    }

    cargarLocalStorage() {
        // if (localStorage.getItem('todo')) {
        //     //console.log(JSON.parse(localStorage.getItem('todo')));
        //     this.tareas = JSON.parse(localStorage.getItem('todo'));
        //     //console.log(this.tareas);
        // } else {

        //     this.tareas = [];

        // }

        this.tareas = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        this.tareas = this.tareas.map(obj => Todo.fromJson(obj));
        //console.log(this.tareas);
    }



}