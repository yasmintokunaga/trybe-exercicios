// Agora inverta o lado do triângulo

let n = 5;

let arrayString = [];

for (let lin = 1; lin <= n; lin += 1) {
    for (let col = 1; col <= n; col += 1){
        if((lin + col) <= n) {
            arrayString[col] = ' ';
        } else {
            arrayString[col] = '*';
        }
    }
    console.log(arrayString.join(''));
}