const somaNumeros = require('./somaNumeros'); 

test('Soma de dois números inteiros', () => {
    expect(somaNumeros(2, 3)).toBe(5);
});
