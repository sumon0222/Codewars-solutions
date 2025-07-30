function divisors(integer) {
  let arrayOfDivisors=[];
  for(let i=2; i<integer; i++){
    let divisor=integer/i;
    if(Number.isInteger(divisor)){
      arrayOfDivisors.push(divisor);
    }
  }
  if(arrayOfDivisors.length===0){
    return `${integer} is prime`;
  }
  else{
  return arrayOfDivisors.sort((a,b)=>a-b);
  }
}
