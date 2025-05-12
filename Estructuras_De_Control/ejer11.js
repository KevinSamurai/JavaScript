let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numnero"));
let suma = 0;
let x =0;
let y=0;
let promedio =0;
 for (let i = num1; i<=num2; i++){
    if (i % 2 === 0){
        suma = suma  + i;
    } else {
    x = x + i;
    y = y + 1;
}
 }
 (promedio = x / y);
 console.log("La suma e los numeros pares es", suma);
 console.log("El promedio de los numeros impares es", promedio);