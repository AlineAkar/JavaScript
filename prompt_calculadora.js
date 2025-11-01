let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

console.log("Resultados das operações:");
console.log(`${num1} + ${num2} = ${soma}`);
console.log(`${num1} - ${num2} = ${subtracao}`);
console.log(`${num1} * ${num2} = ${multiplicacao}`);
console.log(`${num1} / ${num2} = ${divisao}`);
console.log(`${num1} % ${num2} = ${resto}`);

let resultado = 0;
console.log("\nOperadores de atribuição:");
resultado += soma; 
console.log(`resultado += soma → ${resultado}`);
resultado -= subtracao; 
console.log(`resultado -= subtração → ${resultado}`);
resultado *= multiplicacao; 
console.log(`resultado *= multiplicação → ${resultado}`);
resultado /= divisao; 
console.log(`resultado /= divisão → ${resultado}`);
resultado %= resto; 
console.log(`resultado %= resto → ${resultado}`);
console.log("\nCálculos finalizados!");