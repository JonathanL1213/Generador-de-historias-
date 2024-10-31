// Listas iniciales de personajes, lugares y acciones
let personajes = ["un dragón", "una princesa", "un mago" , "un perro" , "un soldado"    ];
let lugares = ["el castillo", "el bosque encantado", "la torre"];
let acciones = ["salva el día", "descubre un secreto", "encuentra un tesoro"];

// Función para agregar un nuevo personaje
function agregarPersonaje(nuevoPersonaje) {
    personajes.push(nuevoPersonaje);
    console.log(`Personaje agregado: ${nuevoPersonaje}`);
}

// Función para agregar un nuevo lugar
function agregarLugar(nuevoLugar) {
    lugares.push(nuevoLugar);
    console.log(`Lugar agregado: ${nuevoLugar}`);
}

// Función para agregar una nueva acción
function agregarAccion(nuevaAccion) {
    acciones.push(nuevaAccion);
    console.log(`Acción agregada: ${nuevaAccion}`);
}

// Función para generar una historia aleatoria
function generarHistoria() {
    let personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    let lugarAleatorio = lugares[Math.floor(Math.random() * lugares.length)];
    let accionAleatoria = acciones[Math.floor(Math.random() * acciones.length)];

    console.log(`Historia: ${personajeAleatorio} va a ${lugarAleatorio} y ${accionAleatoria}.`);
}

// Ejemplo de uso
agregarPersonaje("un caballero");
agregarLugar("el lago misterioso");
agregarAccion("libera una maldición");

generarHistoria();


