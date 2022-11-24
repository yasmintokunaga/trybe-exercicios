// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPiece = 'Queen';

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log('one square in any direction- up, down, to the sides, and diagonally');
        break;
    case 'queen':
        console.log('any one straight direction - forward, backward, sideways, or diagonally');
        break;
    case 'rook':
        console.log('forward, backward, and to the sides');
        break;
    case 'bishop':
        console.log('diagonally.');
        break;
    case 'knight':
        console.log('shape of an “L”');
        break;
    case 'pawn':
        console.log('forward but capture diagonally');
        break;
    default:
        console.log('please, insert a valid chess piece')
    
}