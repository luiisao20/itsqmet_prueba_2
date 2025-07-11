
const estudiantes = [
    { nombre: "Nicole", promedio: 8.5 },
    { nombre: "Josue", promedio: 9.2 },
    { nombre: "Kevin", promedio: 7.8 }
];

let suma = 0;
for (let i = 0; i < estudiantes.length; i++) {
    suma += estudiantes[i].promedio;
}

let promedioGeneral = suma / estudiantes.length;
let mejor = estudiantes[0];
for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > mejor.promedio) {
        mejor = estudiantes[i];
    }
}

let listaOrdenada = [];
for (let i = 0; i < estudiantes.length; i++) {
    listaOrdenada[i] = estudiantes[i];
}

for (let i = 0; i < listaOrdenada.length - 1; i++) {
    for (let j = 0; j < listaOrdenada.length - 1 - i; j++) {
        if (listaOrdenada[j].promedio < listaOrdenada[j + 1].promedio) {
            let temp = listaOrdenada[j];
            listaOrdenada[j] = listaOrdenada[j + 1];
            listaOrdenada[j + 1] = temp;
        }
    }
}

alert(`Promedio general: ${promedioGeneral.toFixed(2)}`);
alert(`Estudiante con mejor promedio: ${mejor.nombre} con promedio ${mejor.promedio}`);
document.writeln("<h3>Lista de estudiantes ordenada en forma descendente:</h3>");
document.writeln("<ol>");
for (let i = 0; i < listaOrdenada.length; i++) {
    document.writeln(`<li>${listaOrdenada[i].nombre} - ${listaOrdenada[i].promedio}</li>`);
}
document.writeln("</ol>");