const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1947,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// const expectedResult = 'Stephen King';
// const authorBornIn1947 = () => {
//   const authorObj = books.find((elemento) => elemento.author.birthYear === 1947);
//   const nameAuthor = authorObj.author.name;
//   return nameAuthor;
// };
// console.log(authorBornIn1947());

// const expectedResult = 'Duna';
// const smallerName = () => {
//   let nameBook = 'As Crônicas de Gelo e Fogo';
//   books.forEach((element) => {
//     if (element.name.length < nameBook.length) {
//       nameBook = element.name;
//     }
//   });
//   return nameBook;
// };

// console.log(smallerName());

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// const getNamedBook = () => {
// return books.find((element) => element.name.length === 26);
// };

// console.log(getNamedBook());

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000);
// };
// console.log(everyoneWasBornOnSecXX());

// const expectedResult = true;

// const someBookWasReleaseOnThe80s = () => {
//   return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990);
// };

// console.log(someBookWasReleaseOnThe80s());

const expectedResult = false;

const authorUnique = () => {
  const arrayBirthYear = [];
  const arrayCount = [];
  books.forEach((element) => {
    arrayBirthYear.push(element.author.birthYear)
    arrayCount.push(0);
  });
  
  arrayBirthYear.forEach((year, index) => {
    arrayBirthYear.forEach((year2) => {
      if (year === year2) {
        arrayCount[index] += 1;
      }
    })
  });

  return arrayCount.some((element) => element >=2);

};

console.log(authorUnique());