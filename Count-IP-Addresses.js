function ipsBetween(start, end){
  const ipToNumber=ip=>{
    return ip.split(".").reduce((acc,octet)=>acc*256+Number(octet),0);
  };
  return ipToNumber(end)-ipToNumber(start);
}
