/**
 * 3. Crea un programa que solicite al usuario números, si lo que este
 * introduce es un número guardarlo en un arreglo. Para terminar el capturar
 * el usuario debe ingresar el número 0. Finalmente mostrar la lista de números
 * capturados en pantalla o en la consola.
 */

let numbers = [];
let number = 1;

while (number != 0) {
  number = parseInt(
    prompt("Introduce un numero o 0 para terminar el programa.")
  );
  if (number != 0) numbers.push(number);
}

alert(`Los numeros introducidos fueron: ${numbers.toString()}`);
