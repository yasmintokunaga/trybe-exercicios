// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    for (let count = 0 ; count < (numbers.length - 1); count += 1) {
        if (numbers[count] < numbers [count + 1]) {
            let menor = numbers[count];
            let maior = numbers[count + 1];
            numbers[count + 1] = menor;
            numbers[count] = maior;
        }
    }
}

console.log(numbers);