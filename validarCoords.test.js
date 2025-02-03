const {validateCoords} = require('./validarCoords');

test('Coordenadas válidas. Lanzando misil', () => {
    expect(validateCoords(20, 80)).toBe(true);
});