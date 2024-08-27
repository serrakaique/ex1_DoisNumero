let firstNumber = prompt("Digite o peimeiro número");
let secondNumber = prompt("Digite o segundo número");
if (firstNumber === secondNumber) {
    alert('Os dois números são iguais')
} else {
    alert('Os dois números são diferentes')
}


firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert("soma: " + sum);
if (sum % 2 == 0) {
    alert("O número é par");
} else {
    alert("O número é ímpar");
}
alert("subtração: " + sub);
alert("multiplicação: " + multi);
alert("divisão: " + div);
alert("resto: " + restDiv);







