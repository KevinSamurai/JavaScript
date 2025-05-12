let edad = parseInt(prompt("¿Cuántos años tienes?"));
let tieneCedula = prompt("¿Tienes cédula? (si/no)");
let cedulaInscrita = prompt("¿Tu cédula está inscrita? (si/no)");

if (edad >= 18 && tieneCedula === "si" && cedulaInscrita === "si") {
    console.log("Puedes votar.");
} else {
    console.log("No puedes votar.");
}
