function findShort(s){
  let newArr=s.split(' ').sort((a,b)=>a.length-b.length);
  return newArr[0].length;
  
}
