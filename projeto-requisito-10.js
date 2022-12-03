// Implemente a função techlist que recebe um array e uma string e retorna um array de objetos

function techlist (arrayTech, namePerson) {
let arrayObjetc = [];
arrayTech.sort();
if(arrayTech.length >= 1) {
  for (let index = 0; index < arrayTech.length; index += 1) {
    arrayObjetc.push({ 
      tech: arrayTech[index], 
      name: namePerson});
  }
} else {
  arrayObjetc = [];
}
  return arrayObjetc;
}

let arrayTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let namePerson = 'Lucas'

console.log(techlist(arrayTech, namePerson));