// 1. Verificar vinculación correcta
console.log('Hola mundo');

// PRIMER RETO : SEMANA 1 
/*
    Lista de nombres
    Escribe un programa que le pida al usuario 3 nombres, los almacene en un arreglo de datos y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/ 

/*let nombres = [];

for (let i = 0; i < 3; i++){
    let nombre = String (prompt('Ingrese nombre ' + (i+1) + ':'));
    if (nombres.includes(nombre)){
        alert ('Este nombre ya se encuentra incluido');
        i--;
    } else {
        nombres.push(nombre);
    }
}

alert("Nombres introducidos: " + nombres);*/

// funcion al presionar el boton aceptar
function almacenarNombres() {
    //crea variables
    let nombres = [];
    let nombresForm = document.forms['nombresForm'];
    //para cada elemento dentro del form
    for (let i = 0; i < nombresForm.length; i++) { 
        //obtencion nombre y elminacion de espacios
        let nombre = nombresForm[i].value.trim();
        //una cadena de texto vacia es false
        if (nombre && !nombres.includes(nombre)) {
            nombres.push(nombre);
        } else if (nombre) {
            alert("El nombre " + nombre + " ya está en la lista, no se añadirá.");
        }
    }
    mostrarNombres(nombres);
}

function mostrarNombres(nombres) {
    //obtiene lista y limpia
    let listaNombres = document.getElementById('listaNombres');
    listaNombres.innerHTML = '';
    //agrega el arreglo a la lista
    nombres.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

function borrarNombres() {
    //obtiene el form
    let nombresForm = document.forms['nombresForm'];
    //vacia los datos de form
    for (let i = 0; i < nombresForm.length; i++) {
        nombresForm[i].value = '';
    }
    //obtiene la lista y limpia
    let listaNombres = document.getElementById('listaNombres');
    listaNombres.innerHTML = '';
}