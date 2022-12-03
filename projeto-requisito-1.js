//Crie uma função usando o operador &&
// Implemente a função compareTrue utilizando somente o operador &&
// A função compareTrue ao receber dois parâmentros booleanos deve:
//  - retornar true se ambos os valores forem verdadeiros
//  - retornar false se um ou ambos os parâmetros forem falsos

function compareTrue (boolean1, boolean2) {
    if(boolean1 && boolean2) {
        return true;
    } else {
        return false;
    }
}

console.log(compareTrue(true, false));