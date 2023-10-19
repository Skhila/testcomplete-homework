var Assert = require("Assert");
var TestData = require("TestData");
var AppActions = require("AppActions");
var MainPageSteps = require("MainPageSteps");
var OrderPageSteps = require("OrderPageSteps");

var mainPageClass = MainPageSteps.mainPageClass;
var orderPageClass = OrderPageSteps.orderPageClass;

function checkRadioButtons()
{
  mainPageClass.openAddOrderPageFromToolbar();
  
  // Validate RadioButtons' Count
  Assert.assertEquals(TestData.expectedRadioButtonCount, orderPageClass.getRadioButtonsCount());

  orderPageClass.clickCancel();
}

function cardNumberTest()
{
  mainPageClass.openAddOrderPageFromToolbar();
  
  orderPageClass.fillCardNo(TestData.randomCardNumber);
  
  Log.Message("Card Number: " + orderPageClass.copyPasteCardNo());
  
  orderPageClass.clickOk();
}

function checkOrderEditFunctionality()
{
  mainPageClass.openAddOrderPageFromToolbar();
  
  orderPageClass.fillName(TestData.testCustomer.name);
  
  orderPageClass.clickOk();
  
  mainPageClass.openSpecificOrder(TestData.testCustomer.name);
  
  orderPageClass.fillName(TestData.newName);
  
  orderPageClass.clickOk();
  
  mainPageClass.openSpecificOrder(TestData.newName);
  
  // Validate Edited Name
  Assert.assertEquals(TestData.newName, orderPageClass.getName());
  
  orderPageClass.clickOk();
}

function summarizedStepTwoCase()
{
  // Run App
  AppActions.runOrdersApp();
  
  checkRadioButtons();
  
  cardNumberTest();
  
  checkOrderEditFunctionality();
  
  // Close App Without Saving
  AppActions.terminateOrdersApp();
}

module.exports.summarizedStepTwoCase = summarizedStepTwoCase;