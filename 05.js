/**
 * 5. Crea un programa que solicite al usuario un día de la semana
 * (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje
 * personalizado para cada día de la semana por medio de un alert.
 * Y seguirá pidiendo al usuario introducir otro día.
 * En caso de que el día introducido sea domingo mostrar al usuario el mensaje
 * “Ve a descansar” y terminar la captura de información.
 */

let day = "";
while (day != "domingo") {
  let message = "";
  day = prompt("Introduce un dia de la semana").toLowerCase();
  switch (day) {
    case "lunes":
      message = "Inicio de semana!";
      break;
    case "martes":
      message = "Vamos que esta semana recien empieza!";
      break;
    case "miercoles":
      message = "En el ombligo de la semana!";
      break;
    case "jueves":
      message = "Vamooos, jueves, casi viernes!";
      break;
    case "viernes":
      message = "Es viernes y el cuerpo lo sabe!";
      break;
    case "sabado":
      message = "No abuses de la fiesta";
      break;
    case "domingo":
      message = "Ve a descansar!";
      break;
    default:
      message = "Introduce un dia de la semana correcto.";
      break;
  }
  alert(message);
}
