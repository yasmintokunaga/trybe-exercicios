// Implemente a função splitSentence que divide uma frase de acordo com a quantidade de palavras
// A função splitSentence recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula

// function splitSentence (frase) {
//     let arrayFrase = frase.split(' ');
//     return arrayFrase;
// }

 const splitSentence = (frase) => frase.split(' ');

let frase = 'Olá Yasmin Souza';
console.log(splitSentence(frase));