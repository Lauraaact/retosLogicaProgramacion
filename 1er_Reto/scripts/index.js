// 1. Verificar vinculación correcta
console.log('Hola mundo');

// PRIMER RETO : SEMANA 1 
/*
    Lista de nombres
    Escribe un programa que le pida al usuario 3 nombres, los almacene en un arreglo de datos y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/ 
let nombres = [];

for (let i = 0; i < 3; i++){
    let nombre = String (prompt('Ingrese nombre ' + (i+1) + ':'));
    if (nombres.includes(nombre)){
        alert ('Este nombre ya se encuentra incluido');
        i--;
    } else {
        nombres.push(nombre);
    }
}

alert("Nombres introducidos: " + nombres);

