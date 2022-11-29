// Agora inverta o lado do triângulo

let n = 5;

let arrayString = [];

for (let index = 1; index <= n; index += 1) {
    arrayString.push(" ");
}

for (let indexPrint = 0; indexPrint < n; indexPrint += 1) {
    for (let indexAsterisco = n; indexAsterisco >= (n - indexPrint); indexAsterisco -= 1) {
        arrayString[indexAsterisco] = '*';
    }
    console.log(arrayString.join(''));
}