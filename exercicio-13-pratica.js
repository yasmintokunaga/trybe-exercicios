// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function reverser (word) {
 let newWord = '';

  for (let index = word.length -1; index >= 0; index -= 1){
    newWord += word[index];
  }
//  return newWord;

  if(word == newWord) {
    return true;
  } else {
    return false;
  }
}

console.log(reverser('asa'));