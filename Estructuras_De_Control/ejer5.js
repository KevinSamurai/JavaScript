let salario = parseFloat(prompt("Ingresa tu salario mensual:"));

if (salario < 1000000) {
    impuesto = salario * 0.01;
} else if (salario >= 1000000 && salario < 2000000) {
    impuesto = salario * 0.03;
} else if (salario >= 2000000 && salario < 4000000) {
    impuesto = salario * 0.05;
} else if (salario >= 4000000 && salario < 10000000) {
    impuesto = salario * 0.07;
}
else if (salario >= 10000000) {
    impuesto = salario * 0.10;
}

console.log("Debes pagar de impuesto: ",  impuesto, " pesos.");
