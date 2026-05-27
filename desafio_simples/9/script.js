for (let numero = 2; numero <= 100; numero++) {
    let primo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
        }
    }

    if (primo) {
        console.log(numero);
    }
}