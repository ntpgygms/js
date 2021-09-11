// Global
const ver = (data) =>{
    console.log(data)
}

//datos del Html
const clic = document.getElementById('nombre');
const clic2 = document.getElementById('apellido');

// variables
var dato = '';
let dato2 = '';
const dato3 = '';

// arrays
const frutas = ["manzana", "pera", "melo",1];

// frutas.push('papaya');
// frutas.pop();
// frutas.unshift()
// frutas.shift()
// ver(frutas)


// objetos
const obj = {
    nombre:'pepito',
    edad:'25',
    correo:'example@gmail.com'
}

//coleccion de datos

const data = [
    {
        nombre:'carlos',
        edad:'35'
    },
    {
        nombre:'carlos',
        edad:'35'
    }
]

//funciones

function pruebas(){
    nombre = document.getElementById('nombrep').value
    if(nombre === ""){nombre = "sin nombre"}
    console.log(nombre)
}

const pruebas2 = () =>{
    console.log()
}




// manipulacion del dom

clic.addEventListener("click", pruebas);
clic2.addEventListener("click", pruebas2);


