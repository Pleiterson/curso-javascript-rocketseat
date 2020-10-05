/* Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
    // código aqui
}

pares(32, 321); */

// resolução do exercício dois
var numPares = [];

function pares(x, y) {
    while (x <= y) {
        if ((x%2) == 0) {
            numPares.push(x);
        }
        x++;
    }
}

pares(32, 321);
console.log(numPares);