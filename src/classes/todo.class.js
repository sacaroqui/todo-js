export class Todo {
    static fromJson({ tarea, completado, id, fecha }) {
        const tempTarea = new Todo(tarea);
        tempTarea.id = id;
        tempTarea.completado = completado;
        tempTarea.fecha = fecha;

        return tempTarea;

    }



    constructor(todo) {
        this.tarea = todo;
        this.completado = false;
        this.id = new Date().getTime();
        this.fecha = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}