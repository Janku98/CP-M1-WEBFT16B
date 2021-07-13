const expect = require('chai').expect;

/* eslint-disable no-undef */
const {
  LinkedList
} = require('../checkpoint.js');

describe('LinkedList', function() {
  var linkedList = new LinkedList();

  it('EJERCICIO 4: switchPos debe intercambiar dos nodos segun las posiciones dadas', function() {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    expect(linkedList.switchPos(1, 8)).to.equal(false);
    expect(linkedList.switchPos(-1, 2)).to.equal(false);
    expect(linkedList.switchPos(1, 3)).to.equal(true);
    expect(linkedList.head.next.value).to.equal(4);
    expect(linkedList.head.next.next.value).to.equal(3);
    expect(linkedList.head.next.next.next.value).to.equal(2);
    expect(linkedList.head.next.next.next.next.value).to.equal(5);

    expect(linkedList.switchPos(0, 4)).to.equal(true);
    expect(linkedList.head.value).to.equal(5);
    expect(linkedList.head.next.value).to.equal(4);
    expect(linkedList.head.next.next.value).to.equal(3);
    expect(linkedList.head.next.next.next.value).to.equal(2);
    expect(linkedList.head.next.next.next.next.value).to.equal(1);
  });
});