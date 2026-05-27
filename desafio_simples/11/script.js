function converterParaDolar(valorReal) {
    let cotacao = 5.40;

    return valorReal / cotacao;
}

let reais = Number(prompt("Digite o valor em reais:"));

alert("Em dólar: $" + converterParaDolar(reais).toFixed(2));