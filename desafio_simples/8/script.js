let palavra = prompt("Digite uma palavra:");
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();

    if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
    ) {
        contador++;
    }
}

alert("Quantidade de vogais: " + contador);