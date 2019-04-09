const PrimeChecker = require("../models/prime_checker.js");
const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(){


};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("number-checked", (event) => {
    const checkedNum = event.detail;
    this.displayResult(checkedNum)

  });
};

ResultView.prototype.displayResult = function(checkedNum){
  const resultElement = document.querySelector("#result");
  if (checkedNum === false){
  resultElement.textContent = `Your number is NOT Prime`
  } else {
  resultElement.textContent = `Your number is Prime`
  }
};

module.exports = ResultView;
