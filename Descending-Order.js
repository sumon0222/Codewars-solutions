function descendingOrder(n){
  
  return parseInt(n.toString().split('').map(Number).sort((a, b) => b - a).join(''), 10);
}
