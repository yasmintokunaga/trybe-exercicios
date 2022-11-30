// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function sinal(numero) {
  if (numero > 0) {
    return 'positive';
  } else if (numero < 0){
    return 'negative';
  } else {
    return 0;
  }
}


console.log(sinal(0));