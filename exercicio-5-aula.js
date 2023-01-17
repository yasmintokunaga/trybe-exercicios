const pessoaEstudante = {};

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};

let nome = 'Yasmin';
let email = 'yasmintkng@gmail.com'
let telefone = '930059995';

let newKey = 'nome';
adicionaPropriedade(pessoaEstudante, newKey, nome);
console.log(pessoaEstudante);

newKey = 'email';
adicionaPropriedade(pessoaEstudante, newKey, email);
console.log(pessoaEstudante);

newKey = 'telefone';
adicionaPropriedade(pessoaEstudante, newKey, telefone);
console.log(pessoaEstudante);