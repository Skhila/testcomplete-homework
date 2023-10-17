var TestData = require("TestData");
var CommonFunctions = require("CommonFunctions");
var DateFunctions = require("DateFunctions");

function runConcatSumOfDigits(){
  
  Log.Message("Result: " + CommonFunctions.concatSumOfDigits(TestData.testNum1, TestData.testNum2));  

}

function runCustomTodayDateFunction(){
  
  DateFunctions.myCurrentDatePattern();

}