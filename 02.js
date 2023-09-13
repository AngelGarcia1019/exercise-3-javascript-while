/**
 * 2. Crea un programa que solicite al usuario 2 números entre 1 y 50.
 * Posteriormente mostrar en consola los números del 1 hasta el 50,
 * pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados
 * por el usuario.
 */

let initRange = 1,
  endRange = 50;
let index = initRange;

const numbers = prompt("Introduce dos numeros entre el 1 y el 50")
  .replace(" ", "")
  .split(",");

while (index <= endRange) {
  console.log(numbers.includes(`${index}`) ? "Loteria!" : index);
  index++;
}
