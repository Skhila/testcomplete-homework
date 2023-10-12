// Script For Step 3 :)

var TestData = require("TestData");
var StepThreeSteps = require("StepThreeSteps");
var CommonSteps = require("CommonSteps");

function runOrdersTest(){
  
  // Initiate Customer
  let currentCustomer = TestData.firstCustomer;
  
  // Open The App
  CommonSteps.runOrdersApp();
  
  // Add Order Using Keyword Test
  StepThreeSteps.addOrderUsingKeywordTest(currentCustomer);
  
  // Validate Added Customer
  CommonSteps.validateCustomer(currentCustomer);
  
  // Close The App
  CommonSteps.closeOrdersApp();
}