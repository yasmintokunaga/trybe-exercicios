// Implemente a função generatePhoneNumber que recebe um array com 11 numeros e retorna um numero de telefone respeitando parenteses, traços e espaços

const traingleCheckFirstCondition = (lineA, lineB, lineC) => (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) || (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) || (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) ? true : false;

const traingleCheckSecondCondition = (lineA, lineB, lineC) => lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB) ? true : false;

const triangleCheck = (lineA, lineB, lineC) => traingleCheckFirstCondition(lineA, lineB, lineC) || traingleCheckSecondCondition(lineA,lineB,lineC) ? true : false;

console.log(triangleCheck(10, 14, 8));