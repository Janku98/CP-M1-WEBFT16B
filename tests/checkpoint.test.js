const expect = require('chai').expect;

/* eslint-disable no-undef */
const {
  isAncestor,
  secuenciaHenry,
  LinkedList,
  Queue,
  cardGame,
  binarySearch,
  allAnagrams,
  specialSort,
  closureDetect,
  BinarySearchTree,
  mergeLinkedLists
} = require('../checkpoint.js');

describe('Checkpoint Tests', function() {

  describe('EJERCICIO 1: isAncestor', function() {
    const genealogyTree = {
      "Mona Simpson": [],
      "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
      "Jacqueline Bouvier": ['Patty Bouvier', 'Marge Simpson', 'Selma Bouvier'],
      "Patty Bouvier": [],
      "Selma Bouvier": ["Ling Bouvier"],
      "Edwina": ["Abigail Simpson"],
      "Lisa Simpson": [],
      "Maggie Simpson": [],
      "Ling Bouvier": [],
      "Abigail Simpson": []
    }
    it('Debería devolver true si la primer persona es ancestro de la segunda', function() {
      expect(isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")).to.equal(true);
    });
    it('Debería devolver false si la primer persona no es ancestro de la segunda', function() {
      expect(isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")).to.equal(false);
    });
    it('No es posible buscar en el sentido inverso', function() {
      expect(isAncestor(genealogyTree, "Maggie Simpson", "Jacqueline Bouvier")).to.equal(false);
    });
  });

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
    it('Debería devolver  cuando n es 10 y obj el mostrado en el ejemplo', function() {
      expect(secuenciaHenry(obj, 7)).to.equal(179446568646375);
    });
    it('Debería devolver null cuando n es negativo', function() {
      expect(secuenciaHenry(obj, -3)).to.equal(null);
    });
  });

  describe('LinkedList', function() {
    var linkedList;

    beforeEach(function() {
      linkedList = new LinkedList();
    });

    it('EJERCICIO 3: size debe devolver el tamaño actual de la lista', function() {
      expect(linkedList.size()).to.equal(0);
      linkedList.add(1);
      linkedList.add(2);
      expect(linkedList.size()).to.equal(2);
      linkedList.add(3);
      expect(linkedList.size()).to.equal(3);
    });

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


    it('EJERCICIO 5: mergeLinkedLists debe devolver una nueva lista a partir de las originales', function () {
      linkedList.add(1);
      linkedList.add(7);
      linkedList.add(20);
      var linkedListTwo = new LinkedList();
      linkedListTwo.add(4);
      linkedListTwo.add(13);
      linkedListTwo.add(2);
      var newLinkedList = mergeLinkedLists(linkedList, linkedListTwo);
      expect(newLinkedList.head.value).to.equal(1);
      expect(newLinkedList.head.next.value).to.equal(4);
      expect(newLinkedList.head.next.next.value).to.equal(7);
      expect(newLinkedList.head.next.next.next.value).to.equal(13);
      expect(newLinkedList.head.next.next.next.next.value).to.equal(20);
      expect(newLinkedList.head.next.next.next.next.next.value).to.equal(2);


      var linkedListThree = new LinkedList();
      linkedListThree.add(5);
      linkedListThree.add(14);
      linkedListThree.add(3);
      var newLinkedList2 = mergeLinkedLists(linkedList, linkedListThree);
      expect(newLinkedList2.head.value).to.equal(1);
      expect(newLinkedList2.head.next.value).to.equal(5);
      expect(newLinkedList2.head.next.next.value).to.equal(7);
      expect(newLinkedList2.head.next.next.next.value).to.equal(14);
      expect(newLinkedList2.head.next.next.next.next.value).to.equal(20);
      expect(newLinkedList2.head.next.next.next.next.next.value).to.equal(3);
    });
  });

  describe('EJERCICIO 6: cardGame', function() {
    
		var playerOne
		var playerOneCopy
		var playerTwo
		var strongPlayer
		var weakPlayer
    
    beforeEach(function() {
      
      playerOne = new Queue();
      playerOneCopy = new Queue();
      playerTwo = new Queue();
      strongPlayer = new Queue();
      weakPlayer = new Queue();
      
      // Player One - Castle 100 --> 90
      playerOne.enqueue({attack: 5, defense: 5, type: 'Protector'});
      playerOne.enqueue({attack: 15, defense: 10, type: 'Neutral'});

      // Player One - Castle 90 --> 87
      playerOne.enqueue({attack: 14, defense: 26, type: 'Destructor'});
      playerOne.enqueue({attack: 5, defense: 12, type: 'Neutral'});

      // Player One - Castle 87 --> 77
      playerOne.enqueue({attack: 21, defense: 18, type: 'Neutral'});
      playerOne.enqueue({attack: 15, defense: 12, type: 'Destructor'});

      // Player One Copy
      playerOneCopy.enqueue({attack: 5, defense: 5, type: 'Protector'});
      playerOneCopy.enqueue({attack: 15, defense: 10, type: 'Neutral'});
      playerOneCopy.enqueue({attack: 14, defense: 26, type: 'Destructor'});
      playerOneCopy.enqueue({attack: 5, defense: 12, type: 'Neutral'});
      playerOneCopy.enqueue({attack: 21, defense: 18, type: 'Neutral'});
      playerOneCopy.enqueue({attack: 15, defense: 12, type: 'Destructor'});

      // Player Two - Castle 100 --> 100
      playerTwo.enqueue({attack: 10, defense: 26, type: 'Destructor'});
      playerTwo.enqueue({attack: 5, defense: 26, type: 'Neutral'});

      // Player Two - Castle 100 --> 78
      playerTwo.enqueue({attack: 15, defense: 15, type: 'Neutral'});
      playerTwo.enqueue({attack: 5, defense: 6, type: 'Neutral'});

      // Player Two - Castle 78 --> 78
      playerTwo.enqueue({attack: 11, defense: 1, type: 'Destructor'});
      playerTwo.enqueue({attack: 5, defense: 15, type: 'Protector'});

      // Strong Player
      strongPlayer.enqueue({attack: 19, defense: 5, type: 'Neutral'});
      strongPlayer.enqueue({attack: 15, defense: 10, type: 'Protector'});
      strongPlayer.enqueue({attack: 17, defense: 26, type: 'Destructor'});
      strongPlayer.enqueue({attack: 20, defense: 12, type: 'Neutral'});
      strongPlayer.enqueue({attack: 21, defense: 18, type: 'Neutral'});
      strongPlayer.enqueue({attack: 15, defense: 12, type: 'Destructor'});
      strongPlayer.enqueue({attack: 25, defense: 18, type: 'Destructor'});
      strongPlayer.enqueue({attack: 15, defense: 12, type: 'Protector'});
      strongPlayer.enqueue({attack: 25, defense: 18, type: 'Destructor'});
      strongPlayer.enqueue({attack: 15, defense: 12, type: 'Protector'});

      // Player One Copy
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
      weakPlayer.enqueue({attack: 5, defense: 5, type: 'Neutral'});
    });


    it('Debe devolver al jugador ganador si se acabaron los mazos', function() {
      var objFinal = {
        winner: 'PLAYER TWO',
        castleOne: 77,
        castleTwo: 78
      }
      expect(cardGame(playerOne, playerTwo)).to.deep.equal(objFinal);
    });

    it('Debe devolver "TIE" si no hubo ganador al acabarse los mazos', function() {
      var objFinal = {
        winner: 'TIE',
        castleOne: 75,
        castleTwo: 75
      }
      expect(cardGame(playerOne, playerOneCopy)).to.deep.equal(objFinal);
    });

    it('Debe devolver al jugador ganador si destruyo el castillo enemigo', function() {
      var objFinal = {
        winner: 'PLAYER ONE',
        castleOne: 100,
        castleTwo: -4
      }
      expect(cardGame(strongPlayer, weakPlayer)).to.deep.equal(objFinal);
    });
  });

  describe('BinarySearchTree EJERCICIO 7: height', function() {

    it('Debe devolver la altura de un arbol', function() {
      var tree = new BinarySearchTree(16);
      expect(tree.height()).to.equal(1);
      tree.insert(6);
      expect(tree.height()).to.equal(2);
      tree.insert(23);
      expect(tree.height()).to.equal(2);
      tree.insert(2);
      expect(tree.height()).to.equal(3);
      tree.insert(14);
      expect(tree.height()).to.equal(3);
      tree.insert(17);
      expect(tree.height()).to.equal(3);
      tree.insert(31);
      expect(tree.height()).to.equal(3);
      tree.insert(5);
      expect(tree.height()).to.equal(4);
    });

  });

  describe('EJERCICIO 8: binarySearch', function() {
    it('Debe devolver 1 para el arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] si busca el 2', function() {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.equal(1);
    });
    it('Debería devolver 4 para el arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] si busca el 5', function() {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).to.equal(4);
    });

    it('Debería devolver -1 si no encuentra el valor buscado en el arreglo', function() {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).to.equal(-1);
    });
  });


  describe('EJERCICIO 9: specialSort', function() {
    var arrayOne = [
      {name: 'Franco', age: 26, height: 1.85},
      {name: 'Toni', age: 30, height: 1.75},
      {name: 'Mati', age: 25, height: 1.77},
      {name: 'Leo', age: 40, height: 1.83}
    ]

    var arrayAgeAsc = [
      {name: 'Mati', age: 25, height: 1.77},
      {name: 'Franco', age: 26, height: 1.85},
      {name: 'Toni', age: 30, height: 1.75},
      {name: 'Leo', age: 40, height: 1.83}
    ]

    var arrayAgeDesc = [
      {name: 'Leo', age: 40, height: 1.83},
      {name: 'Toni', age: 30, height: 1.75},
      {name: 'Franco', age: 26, height: 1.85},
      {name: 'Mati', age: 25, height: 1.77}
    ]

    var functionOne = function(el1, el2) {
      if(el1.age > el2.age) return -1
      return 1
    }

    var functionOneBis = function(el1, el2) {
      if(el1.age < el2.age) return -1
      return 1
    }

    var arrayTwo = [
      {name: 'Franco', age: 26, height: 1.85},
      {name: 'Toni', age: 30, height: 1.75},
      {name: 'Mati', age: 25, height: 1.77},
      {name: 'Leo', age: 40, height: 1.83}
    ]

    var arrayHeightDesc = [
      {name: 'Franco', age: 26, height: 1.85},
      {name: 'Leo', age: 40, height: 1.83},
      {name: 'Mati', age: 25, height: 1.77},
      {name: 'Toni', age: 30, height: 1.75}
    ]

    var functionTwo = function(el1, el2) {
      if(el1.height < el2.height) return -1
      return 1
    }

    it('Debe retornar el arreglo ordenado ascendentemente por edad', function() {
      expect(specialSort(arrayOne, functionOne)).to.deep.equal(arrayAgeAsc);
    });

    it('Debe retornar el arreglo ordenado descendentemente por edad', function() {
      expect(specialSort(arrayOne, functionOneBis)).to.deep.equal(arrayAgeDesc);
    });

    it('Debe retornar el arreglo ordenado descendentemente por altura', function() {
      expect(specialSort(arrayTwo, functionTwo)).to.deep.equal(arrayHeightDesc);
    });
  });


  describe('EJERCICIO 10: closureDetect', function() {
    var symptomsCovid = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of smell'];
    var symptomsAngina = ['heaviness in chest', 'shortness of breath', 'nausea']
    var covidDetector = closureDetect(symptomsCovid, 3);
    var anginaDetector = closureDetect(symptomsAngina, 1)
    var personOne = {
      name: 'Franco',
      age: 26,
      symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
    }
    var personTwo = {
      name: 'Toni',
      age: 30,
      symptoms: ['congestion', 'tiredness', 'nausea']
    }
    var personThree = {
      name: 'Matias',
      age: 26,
      symptoms: ['heaviness in chest', 'shortness of breath']
    }
    it('Debe detectar casos positivos de COVID', function() {
      expect(covidDetector(personOne)).to.equal(true);
    });

    it('Debe detectar casos negativos de COVID', function() {
      expect(covidDetector(personTwo)).to.equal(false);
      expect(covidDetector(personThree)).to.equal(false);
    });

    it('Debe detectar casos positivos de Angina', function() {
      expect(anginaDetector(personTwo)).to.equal(true);
      expect(anginaDetector(personThree)).to.equal(true);
    });

    it('Debe detectar casos negativos de Angina', function() {
      expect(anginaDetector(personOne)).to.equal(false);
    });
  });
});
