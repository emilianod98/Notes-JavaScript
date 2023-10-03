// DOM (Document Object Model)


// Capturar elementos de la pagina
const txtn1 = document.querySelector("#n1")
const txtn2 = document.getElementById("n2")

const respuesta = document.getElementById("respuesta")
const calcular = document.getElementById("calcular")

calcular.addEventListener("click", calcularevento)

// Funcion para calcular eventos (click)
function calcularevento(){
    const op1 =parseFloat(txtn1.value);
    const op2 =parseFloat(txtn2.value);
    let resp = op1+op2
    respuesta.innerText = "La respuesta es : " + resp;  // Texto interno
}
