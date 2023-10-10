// Script For Step 4 :)

var TestData = require("TestData");
var CommonSteps = require("CommonSteps");
var StepFourSteps = require("StepFourSteps");

function runOrdersTestSecond(){
  
  // Initiate Customers
  let firstCustomer = TestData.firstCustomer;
  let secondCustomer = TestData.secondCustomer;
  
  // Open The App
  CommonSteps.runOrdersApp();
  
  // Add Two Orders Using Script
  StepFourSteps.addOrderUsingScript(firstCustomer);
  StepFourSteps.addOrderUsingScript(secondCustomer);
  
  // Validate Added Orders
  CommonSteps.validateCustomer(firstCustomer);
  CommonSteps.validateCustomer(secondCustomer);
  
  // Remove Added Orders
  StepFourSteps.removeOrderByName(firstCustomer.name);
  StepFourSteps.removeOrderByName(secondCustomer.name);
  
  // Close The App
  CommonSteps.closeOrdersApp();
}
