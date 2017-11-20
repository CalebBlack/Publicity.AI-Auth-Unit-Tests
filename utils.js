const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

function randomNumbers(length=1) {
  output = '';
  for (var i = 0; i < length; i++) {
    output += numbers[randomInt(0,numbers.length - 1)];
  }
  return output;
}
function randomLetters(length=1){
  output = '';
  for (var i = 0; i < length; i++) {
    output += letters[randomInt(0,letters.length - 1)];
  }
  return output;
}
module.exports = {randomNumbers, randomLetters, numbers, letters};
