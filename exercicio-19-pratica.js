// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(word, ending) {
    let comparative = 0;
    for(let index = 0; index < ending.length; index += 1) {
        if(ending[ending.length -1 - index] == word[word.length - 1 - index]){
            comparative += 1;
        }
    }
    if(comparative === ending.length) {
        return true;
    } else {
        return false;
    }
}


console.log(verificaFimPalavra('Trybe','be'));