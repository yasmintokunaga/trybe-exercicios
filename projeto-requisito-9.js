// Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais

function encode(frase) {
let newFrase =frase.split('');
    decode = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }

    for (let index = 0; index < newFrase.length; index += 1) {
      if (newFrase[index] === 'a' || newFrase[index] === 'e' || newFrase[index] === 'i' || newFrase[index] === 'o' || newFrase[index] === 'u'){
        newFrase[index] = decode[newFrase[index]];
      }
    }
    return newFrase.join('');
}

let fraseTeste = 'hello';

console.log(encode(fraseTeste));