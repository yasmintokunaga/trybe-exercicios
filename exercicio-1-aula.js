const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => b.age > a.age ? 1 : -1);

console.log(people);

// [
//   { name: 'Ana', age: 23 },
//   { name: 'Bruna', age: 19 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'José', age: 16 },
//   { name: 'Mateus', age: 18 }
// ]