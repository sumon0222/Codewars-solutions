function solution(number){
  if(number<0){
    return 0;
  }
  let sum=0
  let arr=[];
  for(let i=3; i<number;i+=3){
    arr.push(i);
  }
  for(let j=5; j<number;j+=5){
    arr.push(j);
  }
  let set=new Set(arr);
  let newArr=[...set];
  for(let k=0; k<newArr.length; k++){
    sum+=newArr[k];
  }
  return sum;
}
