const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const newItem = {
      name: 'banana',
      quantity: 20,
      unit: 'kg',
      price: 1.99,
    }
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual(newItem);
  });
  it('utiliza zero como quantidade padrão', () => {
      const newItem = {
        name: 'banana',
        quantity: 0,
        unit: 'kg',
        price: 1.99,
      }
      expect(createItem('banana', 'kg', 1.99)).toEqual(newItem);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error);
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(20, 'kg', 1.99, 20)).toThrow(new Error('O nome do item deve ser uma string'));
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.11, 20)).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0, 20)).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
});