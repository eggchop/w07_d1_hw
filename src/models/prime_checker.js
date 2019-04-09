const PubSub = require("../helpers/pub_sub.js")

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function(){
  const callback = (event) => {
  const inputtedNumber = event.detail;
  const boolOfIsPrime = this.checkIfPrime(inputtedNumber);
  console.log(inputtedNumber);
  PubSub.publish('number-checked', boolOfIsPrime);

  }

  PubSub.subscribe('number-typed', callback);
};

PrimeChecker.prototype.checkIfPrime = function (number) { // NEW
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
