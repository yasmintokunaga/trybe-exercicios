const numeros = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index]);
    if (typeof array[index] !== 'number') {
      return false;
    }
  }
  return true;
};

console.log(numeros([1, 2, '3', 4, 5]));

module.exports = numeros;
