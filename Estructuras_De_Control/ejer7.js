let numero = parseInt(prompt("Ingresa un número entero:"));
let esPrimo = true;
if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log("El número es primo.");
} else {
    console.log("El número no es primo.");
}