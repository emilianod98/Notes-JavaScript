// FUNCIONES

const numeroganador = 42; // Definimos un número ganador!
var ganaste = "Has adivinado el número ganador!"

function adivinaelnumero(numero1){
    if(isNaN(numero1)){
        return "Por favor, ingresa un número válido.";
    }
    if(numero1 == numeroganador){
        return console.log(ganaste);
    } else {
        console.log("El número: " + numero1 + " no es el número ganador!");
    }
}


var prueba1 = adivinaelnumero(42);