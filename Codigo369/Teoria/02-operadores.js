// OPERADORES ARITMÉTICOS

var numero1 = 10;
var numero2 = 5;

// SUMA
var suma = numero1 + numero2;
console.log(suma);

// RESTA
var resta = numero1 - numero2;
console.log(resta);

// DIVISIÓN
var division = numero1 / numero2;
console.log(division);

// MULTIPLICACIÓN
var multiplicacion = numero1 * numero2;
console.log(multiplicacion);

// POTENCIACIÓN
var potenciacion = Math.pow(numero2, 2); // 5 elevado al cuadrado
console.log(potenciacion);
var potenciacion2 = numero2**2;
console.log(potenciacion2);

// MODULO - RESTO (Division)
var resto = numero1 % numero2;
console.log(resto);



// OPERADORES RELACIONALES

// IGUAL QUE ==
console.log("Es igual que: ",2 == 2); // Verdadero
console.log("Es igual que: ", "2" == 2); // Verdadero
console.log("Es igual que: ",3 == 2); // Falso
console.log("Es igual que: ",2.0 == 2); // Verdadero

// ESTRICTAMENTE IGUAL QUE ===
console.log("Es estrictamente igual que: ",2 === 2); // Verdadero
console.log("Es estrictamente igual que: ", "2" === 2); // Falso
console.log("Es estrictamente igual que: ",3 === 2); // Falso
console.log("Es estrictamente igual que: ",2.0 === 2); // Verdadero

// DIFERENTE QUE !=
console.log("Es diferente que: ",2 != 2); // Falso
console.log("Es diferente que: ", "2" != 2); // Falso
console.log("Es diferente que: ",3 != 2); // Verdadero
console.log("Es diferente que: ",2.0 != 2); // Falso
 
// ESTRICTAMENTE DISTINTO QUE !==
console.log("Es estrictamente distinto que: ",2 !== 2); /// Falso
console.log("Es estrictamente distinto que: ", "2" !== 2); // Verdadero
console.log("Es estrictamente distinto que: ",3 !== 2); // Verdadero
console.log("Es estrictamente distinto que: ",2.0 !== 2); // Falso

// MENOR QUE <
console.log("5 es menor que 2: ", 5 < 2); // Falso
console.log("0 es menor que 2: ", 0 < 2); // Verdadero
console.log("2 es menor que 2: ", 2 < 2); // Falso

// MAYOR QUE >
console.log("5 es MAYOR que 2: ", 5 > 2); // Verdadero
console.log("0 es MAYOR que 2: ", 0 > 2); // Falso
console.log("2 es MAYOR que 2: ", 2 > 2); // Falso

// MENOR O IGUAL QUE <=
console.log("5 es menor o igual que 2: ", 5 <= 2); // Falso
console.log("0 es menor o igual que 2: ", 0 <= 2); // Verdadero
console.log("2 es menor o igual que 2: ", 2 <= 2); // Verdadero

// MAYOR O IGUAL QUE >=
console.log("5 es MAYOR o igual que 2: ", 5 >= 2); // Verdadero
console.log("0 es MAYOR o igual que 2: ", 0 >= 2); // Falso
console.log("2 es MAYOR o igual que 2: ", 2 >= 2); // Verdadero





// OPERADORES LOGICOS

// AND (&&) Se cumple A y B
console.log((2 > 2 ) && (3 > 1)); // Falso
console.log((2 >= 2 ) && (3 > 1)); // Verdadero

// OR (||) Se cumple A o B
console.log((2 > 2 ) || (3 > 1)); // Verdadero
console.log((2 >= 2 ) || (3 > 1)); // Verdadero

// NOT (!) No a
console.log((2 > 2 ) && ! (3 > 1)); // Falso
console.log((2 >= 2 ) && ! (3 > 1)); // Falso




// OPERADORES DE ASIGNACIÓN

var a = 2;
a+=5;
console.log(a)
a-=5;
console.log(a)
