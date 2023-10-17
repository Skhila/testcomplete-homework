function concatSumOfDigits(num1, num2){
  let stringNum1 = aqConvert.VarToStr(num1);
  let stringNum2 = aqConvert.VarToStr(num2);
  
  if(stringNum1.length != 3 || stringNum2.length != 3){
    Log.Error("You Must Enter Three-Digit Number!!!");
  }
  
  let sumOfNum1 = 0;
  let sumOfNum2 = 0;
  
  while(num1 > 0 && num2 > 0){
    
    sumOfNum1 += num1 % 10;
    sumOfNum2 += num2 % 10;

    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }
  
  let concatedResult = aqString.Concat(aqConvert.VarToStr(sumOfNum1), aqConvert.VarToStr(sumOfNum2));

  return concatedResult;
}

module.exports.concatSumOfDigits = concatSumOfDigits;