describe('bowlingGame', function(){
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('generates random pins between 0 and 10', function(){
    expect(['0','1','2','3','4','5','6','7','8','9','10']).toContain(bowlingGame.generateRandomPins().toString());
  });

  it('first frame, score STRIKE', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(10);
  });

  it('first frame, score SPARE', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(5);
    bowlingGame.bowl();
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(10);
  });

  it('first frame, score regular', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(4);
    bowlingGame.bowl();
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(8);
  });

  it('first frame STRIKE, second frame STRIKE', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(30);
  });
});

describe('example bowlingGame', function(){
  var bowlingGame = new BowlingGame();

  it('frame 1, roll 1, pins 1', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(1);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(1);
  });

  it('frame 1, roll 2, pins 4', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(4);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(5);
  });

  it('frame 2, roll 1, pins 4', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(4);
    bowlingGame.bowl();
    expect(bowlingGame._frame).toEqual(2);
  });

  it('frame 2, roll 2, pins5 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(5);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(14);
  });

  it('frame 3, roll 1, pins 6 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(6);
    bowlingGame.bowl();
    expect(bowlingGame._frame).toEqual(3);
  });

  it('frame 3, roll 2, pins 4 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(4);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(24);
  });

  it('frame 4, roll 1, pins 5 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(5);
    bowlingGame.bowl();
    expect(bowlingGame._frame).toEqual(4);
  });

  it('frame 4, roll 2, pins 5 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(5);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(39);
  });

  it('frame 5, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(59);
  });

  it('frame 6, roll 1, pins 0 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(0);
    bowlingGame.bowl();
    expect(bowlingGame._frame).toEqual(6);
  });

  it('frame 6, roll 2, pins 1 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(1);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(61);
  });

  it('frame 7, roll 1, pins 7 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(7);
    bowlingGame.bowl();
    expect(bowlingGame._frame).toEqual(7);
  });

  it('frame 7, roll 2, pins 3 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(3);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(71);
  });

  it('frame 8, roll 1, pins 6 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(6);
    bowlingGame.bowl();
    expect(bowlingGame._frame).toEqual(8);
  });

  it('frame 8, roll 2, pins 4 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(4);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(87);
  });

  it('frame 9, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(107);
  });

  it('frame 10, roll 1, pins 2 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(2);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(111);
  });

  it('frame 10, roll 2, pins 8 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(8);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(127);
  });

  it('frame 10, roll 3, pins 6 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(6);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(133);
  });
});

describe('maximum score bowlingGame', function(){
  var bowlingGame = new BowlingGame();

  it('frame 1, roll 1, pins 10', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(10);
  });

  it('frame 2, roll 1, pins 10', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(30);
  });

  it('frame 3, roll 1, pins 10', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(60);
  });

  it('frame 4, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(90);
  });

  it('frame 5, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(120);
  });

  it('frame 6, roll 1, pins 1 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(150);
  });

  it('frame 7, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(180);
  });

  it('frame 8, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(210);
  });

  it('frame 9, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(240);
  });

  it('frame 10, roll 1, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(270);
  });

  it('frame 10, roll 2, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(290);
  });

  it('frame 10, roll 3, pins 10 ', function() {
    spyOn(bowlingGame, "generateRandomPins").and.returnValue(10);
    bowlingGame.bowl();
    expect(bowlingGame._score).toEqual(300);
  });
});