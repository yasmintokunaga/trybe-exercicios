// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'laranja', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite condensado', 'chantilly'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));