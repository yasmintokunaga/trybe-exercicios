//Crie uma função usando o operador &&
// Implemente a função compareTrue utilizando somente o operador &&
// A função compareTrue ao receber dois parâmentros booleanos deve:
//  - retornar true se ambos os valores forem verdadeiros
//  - retornar false se um ou ambos os parâmetros forem falsos

// const compareTrue = (boolean1, boolean2) => boolean1 && boolean2 ? true : false;

const compareTrue = (param1, param2) => param1 === true && param2 === true;

let param1 = true;
let param2 = true;

console.log(compareTrue(param1,param2));