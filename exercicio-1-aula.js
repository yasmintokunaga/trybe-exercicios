// **************EXERCICIO 1**************

// const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

// pessoasAprovadas.forEach((nome, index) => {
//   pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
// });

// console.log(pessoasAprovadas);

// **************EXERCICIO 2**************

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // numbers.forEach((element) => {
// //   console.log(element * 2);
// // });
// numbers.forEach((element) => console.log(element * 2));

// **************EXERCICIO 3**************

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// // Adicione seu código aqui

// emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

// **************EXERCICIO 4**************

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// // Adicione seu código aqui
// const verifyNumber = numbers.find((numero) => numero % 15 === 0 );

// console.log(verifyNumber);

// **************EXERCICIO 5**************

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// // Adicione seu código aqui
// const verifyName = names.find((name) => name.length === 5);

// console.log(verifyName);

// **************EXERCICIO 5**************

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// Adicione seu código aqui

// const verifyMusica = musicas.find((musica) => musica['id'] === '31031685');

// console.log(verifyMusica);

// **************EXERCICIO 6**************

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyNames = (letter, listaNames) => listaNames.some((name) => name[0] == letter);

// console.log(verifyNames('J', listNames)); 

// **************EXERCICIO 7**************

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado');

// console.log(verifyGrades);

// **************EXERCICIO 8**************

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((nameParty) => nameParty === name);

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// **************EXERCICIO 9**************

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arrayList, age) => arrayList.every((person) => person['age'] >= age);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));