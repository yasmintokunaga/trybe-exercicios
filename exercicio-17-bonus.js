// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    for (let count = 0 ; count < (numbers.length - 1); count += 1) {
        if (numbers[count] > numbers [count + 1]) {
            let maior = numbers[count];
            let menor = numbers[count + 1];
            numbers[count + 1] = maior;
            numbers[count] = menor;
        }
    }
}

console.log(numbers);