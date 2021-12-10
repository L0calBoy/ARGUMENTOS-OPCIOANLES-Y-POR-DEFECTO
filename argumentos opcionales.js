"use strict";
(function () {
    //1.-PRIMERO ARGUMENTOS OBLIGATORIOS , 2.-LUEGO OPCIONALES , 3-LUEGO POR DEFECTO
    function llamar(nombre, momento, señal = "PAPUSEÑAL") {
        // si asignamos un valor = en el parametro se vuelve por defecto
        if (momento) {
            console.log(`${nombre} a sido llamado con la ${señal} en ${momento}`);
        }
        else {
            console.log(`${nombre} a sido llamado con la ${señal}`);
        }
    }
    llamar("El papu"); // lo de abajo
    // llamar("El papu","las duchas","maradona señal"); // el segundo string y el 3 string son completamente opcionales
})();
