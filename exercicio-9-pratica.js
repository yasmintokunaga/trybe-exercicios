const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionarPropriedade = (objeto, chave, valor) => {
  objeto[chave] = valor;
};

const chave = 'turno';
const valor = 'noite';

adicionarPropriedade(lesson2, chave, valor);
// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarChaves = (objeto) => {
  // console.log(Object.keys(objeto));
  return Object.keys(objeto);
};

// listarChaves(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObjeto = (objeto) => {
  const lengthObj = listarChaves(objeto).length;
  console.log(lengthObj);
};

// tamanhoObjeto(lesson2);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValoresObjeto = (objeto) => {
  return Object.values(objeto);
}

// listarValoresObjeto(lesson3);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas. 

const numeroEstudantes = (objeto) => {
  const chaves = listarChaves(objeto);
  let numEstudante = 0;
  // console.log(chaves);
  for (let index = 0; index < chaves.length; index += 1) {
    numEstudante += objeto[chaves[index]]['numeroEstudantes'];    
  }

  return numEstudante;
};

// console.log(numeroEstudantes(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (objeto, posicao) => {
  const valores = listarValoresObjeto(objeto);
  return valores[posicao];
};

// console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.

const verifyPair = (objeto, chave, valor) => {
  return objeto[chave] === valor; 
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));