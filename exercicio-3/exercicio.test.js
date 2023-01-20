// ----------------EXERCICIO 1----------------

// const {sum} = require('./exercicio');

// describe('Função sum(a, b)', () => {
//   it('Teste se o retorno de sum(4, 5) é 9', () => {
//     expect(sum(4, 5)).toBe(9);
//   });
//   it('Teste se o retorno de sum(0, 0) é 0', () => {
//     expect(sum(0, 0)).toBe(0);
//   })
//   it(`Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5'`, () => {
//     expect(() => sum(4,'5')).toThrow(Error);
//   })
//   it(`Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5')`, () => {
//     expect(() => sum(4,'5')).toThrow(new Error('parameters must be numbers'));
//   });
// });

// ----------------EXERCICIO 2, 3 e 4----------------

// const { info, printMessage } = require('./exercicio');

// describe('Função printMessage', () => {
//   it('O objeto info possui a propriedade personagem', () => {
//     expect(info).toHaveProperty('personagem');
//   });
//   it(`Verifique se a resposta contém a informação 'Boas vindas,', antes de chamar o nome da personagem`, () => {
//     expect(printMessage(info)).toMatch('Boas vindas,');
//   });
//   it('Verifique se a resposta contém o nome correto da personagem.', () => {
//     expect(printMessage(info)).toMatch('Margarida');
//   });
//   it('alidar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido', () => {
//     const info2 = [];
//     expect(() => printMessage(info2)).toThrow(new Error('objeto inválido'));
//   })
// });

// ----------------EXERCICIO BONUS----------------

const searchEmployee = require('./exercicio');

describe('Função searchEmployee', () => {
  it('Verificar se a função searchEmployee existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Verificar se informações estão vindo corretas', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toMatch('Cook');
  });
  it('Verificar mensagem de erro para id inexistente', () => {
    expect(() => searchEmployee('11111', 'firstName')).toThrow(new Error('ID não identificada'));
  });
  it('Verificar mensagem de erro para informação inexistente', () => {
    expect(() => searchEmployee('4678-2', 'email')).toThrow(new Error('Informação indisponível'));
  });
});