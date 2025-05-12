let num = parseInt(prompt("Ingrese un numero"));
let x=1;
let y=0;

for (let i=1 ; i<=num; i++){
    y = x *i;
    x = y;
}
console.log("El factorial  de ", num, "es :", y);