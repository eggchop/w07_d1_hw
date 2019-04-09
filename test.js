function primeCheck(num) {
  let answer = [];
  if (num === 1){
    return false;
  }
  for (let i=2;i < num; i++){
    answer.push(i,num % i == 0)
    return num % i == 0 ? false : true
    }
    console.log(answer);
  }


console.log(primeCheck(21));
