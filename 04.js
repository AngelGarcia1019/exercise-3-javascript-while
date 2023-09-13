/**
 * 4. Crea un programa que solicite al usuario letras o palabras,
 * si es así guardar el resultado. Para terminar de capturar el usuario
 * no debe escribir valor alguno. Al terminar de capturar, mostrar
 * en pantalla la concatenación de todas las palabras capturadas.
 */

let input = null;
let result = "";

while (input != "") {
  input = prompt(
    "Introduce letras o palabras. No introduzca nada para terminar el programa"
  );
  if (input != "") result += input;
}

alert(`Lo introducido fue: ${result}`);
