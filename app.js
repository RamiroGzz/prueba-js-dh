/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
let fs = require("fs");
exports.leerTareas = function () {

    let data = fs.readFileSync("tareas.json");
    let tareas = JSON.parse(data);

}

exports.agregarTarea = function (tarea) {

    let data = JSON.stringify(tarea);
    fs.writeFileSync("tareas.json", data)
    /*
        Registra y guarda una nueva tarea.
    */
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
    let data = fs.readFileSync("tareas.json");
    let tareas = JSON.parse(data);
    let resultado = tareas.filter(function (tarea) {
        return tarea.status == estado;
    });
}