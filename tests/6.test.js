const expect = require('chai').expect;

/* eslint-disable no-undef */
const {
  Queue,
  cardGame
} = require('../checkpoint.js');

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