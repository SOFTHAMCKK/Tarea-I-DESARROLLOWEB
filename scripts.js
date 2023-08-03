//Ejemplo condicional 'else Statement' y 'Logical Operator ||'
const pais = "Canada";

if (pais === "Colombia" || pais === "Mexico" || pais === "Argentina") {
  console.log("Hablas español.");
} else {
  console.log("No hablas español.");
}
/*
PRINT:
No hablas español
*/

//Ejemplo 'Ternary Operator'
const hora = 14;
const mensaje = hora < 12 ? "Buenos dias" : "Buenas tardes";
console.log(mensaje);
/*
PRINT:
Buenas tardes
*/


//Ejemplo condicional 'else Statement' y 'Logical Operator &&'
const estaRegistrado = true;
const tieneAccesoPremium = false;

if (estaRegistrado && tieneAccesoPremium) {
  console.log("¡Bienvenido! Tienes acceso a contenido premium");
} else {
  console.log("¡Bienvenido! Tienes acceso a contenido básico");
}
/*
PRINT:
¡Bienvenido! Tienes acceso a contenido básico
*/


// Ejemplo de un condicional 'switch Statement'
const dia = "Lunes";
switch (dia) {
  case "Lunes":
    console.log("Hoy es lunes.");
    break;
  case "Martes":
    console.log("Hoy es martes.");
    break;
  case "Miercoles":
    console.log("Hoy es miercoles.");
    break;
  case "Jueves":
    console.log("Hoy es jueves."); 
    break;
  case "Viernes":
    console.log("Hoy es viernes"); 
    break;  
  default:
    console.log("Hoy no es fin de semana");
    break;
}
/*
PRINT:
Hoy es lunes.
*/


// Ejemplo de un condicional 'if Statement' y 'Comparison Operators'
const edad = 25;

if (edad >= 18) {
  console.log("Eres mayor de edad. Puedes votar");
}
/*
PRINT:
Eres mayor de edad. Puedes votar
*/


// Ejemplo de un condicional 'Logical Operator !'
const esHoraDeDormir = false;

if (!esHoraDeDormir) {
  console.log("Aún no es hora de dormir");
} else {
  console.log("Es hora de dormir");
}
/*
PRINT:
Aún no es hora de dormir
*/


// Ejemplo de un condicional 'else if Clause'
const numero1 = 10;
const numero2 = 5;
let resultado;

if (numero1 > numero2) {
  resultado = "El primer número es mayor que el segundo.";
} else if (numero1 < numero2) {
  resultado = "El segundo número es mayor que el primero.";
} else {
  resultado = "Los números son iguales.";
}
console.log(resultado);
/*
PRINT:
El primer número es mayor que el segundo.
*/


// Ejemplo de un condicional 'Truthy and Falsy'
const nombre = '';

if (nombre) {
  console.log("Hola " + nombre);
} else {
  console.log("Hola, ¿cómo estás?");
}
/*
PRINT:
Hola, ¿cómo estás?
*/

//---------------------------------------------------------


// Ejemplo bucle 'for'
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma de los números es: ", suma);
/*
PRINT:
La suma de los números es: 15
*/


// Ejemplo bucle 'do-while'
let contador = 0;
do {
  console.log("Iteración número: " + contador);
  contador++;
} while (contador < 5);
/*
PRINT:
Iteración número: 0
Iteración número: 1
Iteración número: 2
Iteración número: 3
Iteración número: 4
*/


// Ejemplo bucle 'while'
let cuentaRegresiva = 5;
while (cuentaRegresiva > 0) {
  console.log("Cuenta atrás: " + cuentaRegresiva);
  cuentaRegresiva--;
}
/*
PRINT: 
Cuenta atrás: 5
Cuenta atrás: 4
Cuenta atrás: 3
Cuenta atrás: 2
Cuenta atrás: 1
*/


//Ejemplo bucle 'for...in'
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Medellín",
  profesion: "Doctora"
};

for (const propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}
/*
PRINT: 
nombre: Ana
edad: 25
ciudad: Medellín
profesion: Doctora
*/

//Ejemplo bucle 'for...of'
const colors = ["rojo", "verde", "azul", "amarillo"];

for (const color of colors) {
  console.log(color);
}
/*
PRINT: 
rojo
verde
azul
amarillo
*/