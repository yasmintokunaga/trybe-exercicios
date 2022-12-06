// Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais

function encode(frase) {
let newFrase =frase.split('');
let code = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }

    for (let index = 0; index < newFrase.length; index += 1) {     
      for(key in code) {newFrase[index] = key === newFrase[index] ? code[key] : newFrase[index];}
    }
    return newFrase.join('');
}

function decode(frase) {
  let newFrase =frase.split('');
  let code = {
          1: 'a',
          2: 'e',
          3: 'i',
          4: 'o',
          5: 'u'
      }
  
      for (let index = 0; index < newFrase.length; index += 1) {     
        for(key in code) {newFrase[index] = key === newFrase[index] ? code[key] : newFrase[index];}
      }
      return newFrase.join('');
  }




let fraseTeste = 'how are you today?';
console.log(encode(fraseTeste));

let fraseTeste2 = 'h4w 1r2 y45 t4d1y?';
console.log(decode(fraseTeste2));