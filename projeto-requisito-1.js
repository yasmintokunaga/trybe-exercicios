//Crie uma função usando o operador &&
// Implemente a função compareTrue utilizando somente o operador &&
// A função compareTrue ao receber dois parâmentros booleanos deve:
//  - retornar true se ambos os valores forem verdadeiros
//  - retornar false se um ou ambos os parâmetros forem falsos

const compareTrue = (boolean1, boolean2) => boolean1 && boolean2 ? true : false;

console.log(compareTrue(true, true));