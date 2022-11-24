// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const angle1 = 30;
const angle2 = 50;
const angle3 = 100;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log('Valor de angulo inválido, por favor todos os anglos devem ter mais do que 0 graus');
} else if (angle1 + angle2 + angle3 != 180) {
    console.log('Verificar valores, a soma dos angulos deve ser igual a 180');
} else {
    console.log('Valores válidos!!');
}