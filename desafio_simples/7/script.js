let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite um número:"));
    soma += numero;
}

let media = soma / 5;

alert("A média é: " + media);