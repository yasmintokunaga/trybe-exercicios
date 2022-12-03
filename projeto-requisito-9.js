// Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais

function encode(frase) {
let newFrase =frase.split('');
let decode = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }

    for (let index = 0; index < newFrase.length; index += 1) {     
      for(key in decode) {newFrase[index] = key === newFrase[index] ? decode[key] : newFrase[index];}
    }
    return newFrase.join('');
}

let fraseTeste = 'how are you today?';
console.log(encode(fraseTeste));