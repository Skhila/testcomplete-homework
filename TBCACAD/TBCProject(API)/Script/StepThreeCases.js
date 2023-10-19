var CommonFunctions = require("CommonFunctions");
var MainPageSteps = require("MainPageSteps");
var OrderPageSteps = require("OrderPageSteps");
var AppActions = require("AppActions");
var TestData = require("TestData");
var Assert = require("Assert");

var mainPageClass = MainPageSteps.mainPageClass;
var orderPageClass = OrderPageSteps.orderPageClass;

function testFillCardNoWithKeyFromAPI(){
  
  mainPageClass.openAddOrderPageFromToolbar();
  
  let keyValueFromAPI = CommonFunctions.getSingleFieldInfoFromApi(TestData.activityURL, TestData.keyFieldName);
  
  orderPageClass.fillName(TestData.testCustomer.name);
  orderPageClass.fillCardNo(keyValueFromAPI);
  
  orderPageClass.clickOk();
  
  mainPageClass.openSpecificOrder(TestData.testCustomer.name);
  
  // Validate Card Number
  Assert.assertEquals(keyValueFromAPI, orderPageClass.getCardNo());

  orderPageClass.clickOk();
}

function testFillNameWithActivityFromAPI(){
  mainPageClass.openAddOrderPageFromToolbar();
  
  let activityValueFromAPI = CommonFunctions.getSingleFieldInfoFromApi(TestData.musicURL, TestData.activityFieldName);
  
  orderPageClass.fillName(activityValueFromAPI);
  
  orderPageClass.clickOk();
}

function summarizedStepThreeCase(){
  // Run App
  AppActions.runOrdersApp();
  
  testFillCardNoWithKeyFromAPI()
  
  testFillNameWithActivityFromAPI()
  
  // Close App Without Saving
  AppActions.terminateOrdersApp();
}


module.exports.summarizedStepThreeCase = summarizedStepThreeCase;