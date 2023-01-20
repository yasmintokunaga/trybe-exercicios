const removeBebida = require('./exercicios');

describe('Remove sabor de bebida', () => {
  it('Remover agua', () => {
    const bebidas = ['coca', 'agua', 'suco', 'guarapa', 'groselha'];
    expect(removeBebida(bebidas, 'agua')).toEqual(['coca', 'suco', 'guarapa', 'groselha']);
  });
  it('Remover guarapa', () => {
    const bebidas = ['coca', 'agua', 'suco', 'guarapa', 'groselha'];
    expect(removeBebida(bebidas, 'guarapa')).toEqual(['coca', 'agua', 'suco', 'groselha']);
  });
  it('Remover groselha caso exista', () => {
    const bebidas = ['coca', 'agua', 'suco', 'guarapa', 'groselha'];
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  });
});