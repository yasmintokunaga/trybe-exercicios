// --------------EXERCICIO 1--------------

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// // implemente seus testes aqui

// module.exports = myRemove;

// --------------EXERCICIO 2--------------

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // implemente seus testes aqui

// module.exports = myFizzBuzz;

// --------------EXERCICIO 3--------------

// const mapString = (objectMap, string) => {
//   const splitString = string.split('');
//   const mappedArray = [];
//   for (let index = 0; index < splitString.length; index += 1) {
//     const character = splitString[index];
//     const mappedValue = objectMap[character];
    
//     if (mappedValue) {
//       mappedArray.push(mappedValue);
//     } else {
//       mappedArray.push(character);
//     }
//   }
//   return mappedArray.join('');
// }
// const encode = (string) => {
//   const map = {
//     a: 1,
//     e: 2,
//     i: 3,
//     o: 4,
//     u: 5,
//   };
//   return mapString(map, string);
// }
// const decode = (string) => {
//   const map = {
//     1: 'a',
//     2: 'e',
//     3: 'i',
//     4: 'o',
//     5: 'u',
//   };
//   return mapString(map, string);
// }

// console.log(encode('ana'));

// const functions = { encode, decode };
// module.exports = functions;

// --------------EXERCICIO 4--------------

// const techList = (array, string) => {
//   if (array.length === 0) {
//     return 'Vazio!';
//   }
//   const arrayTechList = array.sort();
//   const arrayObj = [];
//   for (let index = 0; index < arrayTechList.length; index += 1) {
//     let newObj = {};
//     newObj['tech'] = arrayTechList[index];
//     newObj['name'] = string;
//     arrayObj.push(newObj);
//   }
//   return arrayObj;
// };

// // console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));


// module.exports = techList;

// --------------EXERCICIO 5--------------

const hydrate = (string) => {
  const array = string.split('');
  const regex = /[0-9]/;
  let cont = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (regex.test(array[index])) {
      cont += parseInt(array[index]);
    }
  }
  if (cont === 1) {
    return '1 copo de água';
  }
  return `${cont} copos de água`;
};

// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
module.exports = hydrate;