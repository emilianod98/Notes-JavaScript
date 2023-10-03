const respuesta = document.getElementById("respuesta");
const ejecutar = document.getElementById("ejecutar");
ejecutar.addEventListener("click", iniciar);

//ARRAY - LISTA
let frutas = ["Manzana", "Banana", "Mango", "Fresa", "Pera", "Kiwi"];

function iniciar(){
    frutas.forEach(function(item, index, array){
        respuesta.innerText = array;
    });
}