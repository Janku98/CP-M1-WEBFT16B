const expect = require('chai').expect;

/* eslint-disable no-undef */
const {
  secuenciaHenry
} = require('../checkpoint.js');

describe('EJERCICIO 2: secuencia Henry', function() {
  var obj = {
    1: true,
    a: [1,2,3],
    7: ['F','r','a','n','c','o!'],
    h: {a: 1},
    z: []
  }
  it('Debería devolver 2 cuando n es 0 y obj el mostrado en el ejemplo', function() {
    expect(secuenciaHenry(obj, 0)).to.equal(2);
  });
  it('Debería devolver 9 cuando n es 1 y obj el mostrado en el ejemplo', function() {
    expect(secuenciaHenry(obj, 1)).to.equal(9);
  });
  it('Debería devolver 289305 cuando n es 5 y obj el mostrado en el ejemplo', function() {
    expect(secuenciaHenry(obj, 5)).to.equal(289305);
  });
  it('Debería devolver null cuando n es negativo', function() {
    expect(secuenciaHenry(obj, -3)).to.equal(null);
  });
});