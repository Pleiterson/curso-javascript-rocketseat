/* Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master */

// resolução do exercício quatro
function experiencia(age) {
    if (age >= 0 && age <= 1) {
        console.log("Você possui " + age + " de experiência, seu nível é: Iniciante");
    } else if (age >= 1 && age <= 3) {
        console.log("Você possui " + age + " de experiência, seu nível é: Intermediário");
    } else if (age >= 3 && age <= 6) {
        console.log("Você possui " + age + " de experiência, seu nível é: Avançado");
    } else {
        console.log("Você possui " + age + " de experiência, seu nível é: Jedi Master");
    }
}

experiencia(1);
experiencia(2);
experiencia(4);
experiencia(9);