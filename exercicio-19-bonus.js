// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
     if (index < numbers.length -1 ) {
        multiNumbers[index] = numbers[index] * numbers[index + 1];    
     } else {
     multiNumbers [index]= numbers[index] * 2;  
    }
} 

console.log(multiNumbers);