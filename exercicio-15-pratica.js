// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

function substituaX (nome) {
    const frase ='Tryber x aqui!';
    
    let arrayFrase = frase.split(' ');

    for (let index = 0 ; index < arrayFrase.length; index += 1) {
        if(arrayFrase[index] === 'x') {
            arrayFrase[index] = nome;
        }
    }

    return arrayFrase.join(' ');
}

let nome ='Yasmin';

// console.log(substituaX(nome));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

function minhasSkills(substituaX) {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let concatFunctions = `${substituaX}
    Minhas três pricncipais habilidades são: `;

    for (let index = 0; index < skills.length; index += 1) {
        concatFunctions = `${concatFunctions}
         - ${skills[index]}`;
        }

    return concatFunctions;
}

console.log(minhasSkills(substituaX(nome)));