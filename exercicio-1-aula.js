const generateRandomNumber = () => Math.round(Math.random() * 10);

const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber < 5) {
        resolve(randomNumber);
      } else {
        reject(new Error(`O número ${randomNumber} é inválido, pois é maior ou igual a 5`));
      }
    }, 1000);
  });

randomPromise()
  .then((response) => {
    console.log(`resolvedPromise: o número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(`rejectedPromise: ${error.message}`);
  })
  .finally(() => console.log('Fim da execução'));