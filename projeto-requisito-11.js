// Implemente a função generatePhoneNumber que recebe um array com 11 numeros e retorna um numero de telefone respeitando parenteses, traços e espaços

function noValidationNumber (array) {
let countOutline = 0;  
  for (value of array) {
    countOutline = value < 0 || value > 9 ? countOutline += 1 : countOutline;
  }
  return countOutline > 0 ? true : false;
}

function repetitionThreeTimes (array) {
  let countMoreThreeTimes = 0;  
  for (valueExt of array) {
    let countTimesEachNumber = 0;    
    for (value of array) {
      countTimesEachNumber = valueExt === value ? countTimesEachNumber += 1 : countTimesEachNumber;      
    }
    countMoreThreeTimes = countTimesEachNumber >= 3 ? countMoreThreeTimes += 1 : countMoreThreeTimes;
  }
  return countMoreThreeTimes > 0 ? true : false;
}

function generatePhoneNumber(array) {
  if (array.length != 11) {
    return `Array com tamanho incorreto.`;
  } else if (noValidationNumber(array) || repetitionThreeTimes(array)){
    return `não é possível gerar um número de telfone com esses valores`;
  } else {
    let dd = [];
    let telLeft = [];
    let telRight = [];
    for (let index = 0; index < array.length; index += 1) {
      if (index <= 1) {
        dd.push(array[index])
      } else if (index <= 6) {
        telLeft.push(array[index]);
      } else {
        telRight.push(array[index]);
      }
    }
    return `(${dd.join('')}) ${telLeft.join('')}-${telRight.join('')}`;
  }
}

let telTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7];

// console.log(noValidationNumber(telTeste));
// console.log(repetitionThreeTimes(telTeste));

console.log(generatePhoneNumber(telTeste));