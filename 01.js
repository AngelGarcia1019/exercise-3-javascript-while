/**
 * 1. Crea un programa que pregunte al usuario un número. Mostrar los números
 * que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
 */

let stop = parseInt(prompt("Introduce un número: "));
let index = 1;
let result = "";
while (stop >= index) {
  if (index % 5 == 0) result += index + " ";
  index++;
}

alert(
  result === ""
    ? "No hay multiplos de 5 en ese rango"
    : `Los numeros multiplos de 5 son: ${result}`
);
