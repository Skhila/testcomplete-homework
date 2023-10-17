var AppActions = require("AppActions");
var Assert = require("Assert");
var MainPageSteps = require("MainPageSteps");
var OrderPageSteps = require("OrderPageSteps");
var TestData = require("TestData");

var mainPageClass = MainPageSteps.mainPageClass;
var orderPageClass = OrderPageSteps.orderPageClass;

var testCustomer = TestData.customer;

function testAndValidateNameFieldFunctionality(){
  
  mainPageClass.openAddOrderPageFromToolbar();
  
  orderPageClass.fillName(testCustomer.name);
  
  orderPageClass.removeNameWithBackSpace();
  
  // Validating...
  Assert.assertEquals(0, orderPageClass.getName().length);
  
  orderPageClass.clickOk();
}

function validateStreetLabel(){
  
  mainPageClass.openAddOrderPageFromToolbar();
  
  // Validating...
  Assert.assertEquals(TestData.expectedStreetLabel, orderPageClass.getStreetLabel());
  
  orderPageClass.clickOk();
}

function validateStreetFieldFunctionality(){
  
  mainPageClass.openAddOrderPageFromToolbar();
  
  orderPageClass.fillName(testCustomer.name);
  
  orderPageClass.fillStreet(testCustomer.street);
  
  // Validating...
  Assert.assertEquals(testCustomer.street, orderPageClass.getStreet());
  
  orderPageClass.clickOk();
}

function validateStreetCityAndZipFunctionality(){
  
  validateStreetFieldFunctionality();
  
  mainPageClass.openSpecificOrder(testCustomer.name);

  let custStreet = orderPageClass.getStreet();
  
  // Save Default List Separator
  let baseListSeparator = aqString.ListSeparator;
  // Change List Separator
  aqString.ListSeparator = ",";
  
  let custCity = aqString.GetListItem(custStreet, 0);
  let custZip = aqString.GetListItem(custStreet, aqString.GetListLength(custStreet) - 1);
  
  // Restore Separator
  aqString.ListSeparator = baseListSeparator;
  
  orderPageClass.fillCity(custCity);
  
  orderPageClass.fillZip(custZip);
  
  // Validating...
  Assert.assertEquals(custCity, orderPageClass.getCity());
  Assert.assertEquals(custZip, orderPageClass.getZip());
  
  orderPageClass.clickOk();
}

function summarizedOrderTestCase(){
  // Run App
  AppActions.runOrdersApp();
  
  // Step 3.1
  testAndValidateNameFieldFunctionality();
  
  // Step 3.2 and 3.3
  validateStreetCityAndZipFunctionality();
  
  // Close App Without Saving
  AppActions.terminateOrdersApp()

}

module.exports.summarizedOrderTestCase = summarizedOrderTestCase;