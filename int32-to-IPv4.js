function int32ToIp(int32){
  const oct1 = (int32  >>> 24) & 0xFF; //1st 8 bit/1st octet extraction and execute an and operation by 255 and same thing goes for other
  const oct2 = (int32  >>> 16) & 0xFF;
  const oct3 = (int32  >>> 8) & 0xFF;
  const oct4 = (int32) & 0xFF;
  
  return `${oct1}.${oct2}.${oct3}.${oct4}`;
}
