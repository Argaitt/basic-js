function testFunc(disksNumber, turnsSpeed) {
    let result = new Object();
    result.turns = Math.pow(2,disksNumber) - 1;
    result.seconds = result.turns  / (turnsSpeed  / 3600);
    return result
};
testFunc(414, 19279842);