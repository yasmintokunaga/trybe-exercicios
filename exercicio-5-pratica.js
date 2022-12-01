//🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  // Altere essa estrutura para corrigir o erro.

  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  // pessoa = {
  //   nome: 'Luna',
  //   idade: 19
  // } 

  pessoa.nome = 'Luna';
  pessoa.idade = 19;

  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);