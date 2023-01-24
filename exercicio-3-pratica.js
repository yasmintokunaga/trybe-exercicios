const numeroSorteado = () => {
  const numeros = [];
  let randomNum = 0;
  for (let index = 0; index < 3; index += 1) {
    randomNum = parseInt(Math.random() * 9);
    randomNum += 1;
    numeros.push(randomNum);
  };
  return numeros;
}

const premiacaoSorteio = (quantidadeAcertos) => {
  switch (quantidadeAcertos) {
    case 3:
      return 'Parabéns, você ganhou R$3000';
    case 2:
      return 'Parabéns, você ganhou R$2000';
    case 1:
      return 'Parabéns, você ganhou R$1000';
    default:
      return 'Não foi dessa vez!';
  }
};

const checkSorteio = (array) => {
  const arraySorteado = numeroSorteado();
  let quantidadeAcertos = 0;

  arraySorteado.forEach((numeroSort) => {
    array.forEach((numeroEsolhido) => {
      if (numeroSort === numeroEsolhido) {
        quantidadeAcertos += 1;
      };
    });
  });
  const objRetorno = {
    'Numeros Sorteados': arraySorteado,
    'Numeros Escolhidos': array,
    'Resultado': premiacaoSorteio(quantidadeAcertos),
  }
  return objRetorno;
};

console.log(checkSorteio([1, 2, 3]));