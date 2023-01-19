// --------------EXERCICIO 1--------------

// const myRemove = require('./exercicio');

// describe('Requisito 1', () => {
//   it('A função recebe ([1, 2, 3, 4], 3) e deve retornar ([1, 2, 4])', () => {
//     expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
//   });
//   it('A função recebe ([1, 2, 3, 4], 3) e não deve retornar ([1, 2, 3, 4])', () => {
//     expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
//   });
// });

// describe('Requisito 2', () => {
//   it('A função recebe ([1, 2, 3, 4], 5) e deve retornar ([1, 2, 3, 4]', () => {
//     expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
//   });
// });

// --------------EXERCICIO 2--------------

// const myFizzBuzz = require('./exercicio');

// describe('Requisito 1', () => {
//   it('A função receber 15 deve retornar fizzbuzz', () => {
//     expect('fizzbuzz').toEqual(myFizzBuzz(15));
//   });
// });

// describe('Requisito 2', () => {
//   it('A função recebe 3 deve retornar fizz', () => {
//     expect('fizz').toEqual(myFizzBuzz(3));
//   });
// });

// describe('Requisito 3', () => {
//   it('A função recebe 5 deve retornar buzz', () => {
//     expect('buzz').toEqual(myFizzBuzz(5));
//   });
// });

// describe('Requisito 4', () => {
//   it('A função recebe 7 deve retornar 7', () => {
//     expect(7).toBe(myFizzBuzz(7));
//   });
// });

// describe('Requisito 5', () => {
//   it('A função recebe ola deve retornar false', () => {
//     expect(false).toBe(myFizzBuzz('ola'));
//   });
// });

// --------------EXERCICIO 3--------------

// const { encode, decode } = require('./exercicio');


// describe('Requisito 1', () => {
//   it('A função recebe o tipo de decode e deve retornar function', () => {
//     expect(typeof decode).toBe("function");
//   });
//   it('A função recebe o tipo de encode e deve retornar function', () => {
//     expect(typeof encode).toBe("function");
//   });
// });

// describe('Requisito 2', () => {
//   it('converte apenas a vogal "a" no número 1', () => {
//     expect(encode('ana')).toEqual('1n1');
//   });
//   it('converte a vogal "e" no número 2', () => {
//     expect(encode('ele')).toEqual('2l2');
//   });
//   it('converte a vogal "i" no número 3', () => {
//     expect(encode('xixi')).toEqual('x3x3');
//   });
//   it('converte a vogal "o" no número 4', () => {
//     expect(encode('ovo')).toEqual('4v4');
//   });
//   it('converte a vogal "u" no número 5', () => {
//     expect(encode('nu')).toEqual('n5');
//   });
// });

// describe('Requisito 3', () => {
//   it('A função decode recebe 1 e deve retornar a', () => {
//     expect('aaa').toEqual(decode('a1a'));
//   });
//   it('A função decode recebe 2 e deve retornar e', () => {
//     expect('eee').toEqual(decode('e2e'));
//   });
//   it('A função decode recebe 3 e deve retornar i', () => {
//     expect('iii').toEqual(decode('i3i'));
//   });
//   it('A função decode recebe 4 e deve retornar o', () => {
//     expect('ooo').toEqual(decode('o4o'));
//   });
//   it('A função decode recebe 5 e deve retornar u', () => {
//     expect('uuu').toEqual(decode('u5u'));
//   });
// });

// describe('Requisito 4', () => {
//   it('A função encode recebe 12345 e deve retornar 12345', () => {
//     expect(encode('12345')).toEqual('12345');
//   });
//   it('A função decode recebe aeiou e deve retornar aeiou', () => {
//     expect(decode('aeiou')).toEqual('aeiou');
//   });
// });

// describe('Requisito 5', () => {
//   it('A função encode recebe aeiou e deve retornar uma string de tamanho 5', () => {
//     expect(encode('aeiou').length).toBe(5);
//   });
//   it('A função decode recebe 12345 e deve retornar uma string de tamanho 5', () => {
//     expect(decode('12345').length).toBe(5);
//   });
// });
// --------------EXERCICIO 4--------------

// const techList = require('./exercicio');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

// --------------EXERCICIO 5--------------

const hydrate = require('./exercicio');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
