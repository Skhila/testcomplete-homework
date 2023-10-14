var Assert = require("Assert");
var AppActions = require("AppActions");
var TestData = require("TestData");
var MainPageSteps = require("MainPageSteps");
var OrderPageSteps = require("OrderPageSteps");

var mainPageClass = MainPageSteps.mainPageClass;
var orderPageClass = OrderPageSteps.orderPageClass;

var testOrderOne = TestData.orderWithGlobalVars;
var testOrderTwo = TestData.orderWithoutGlobalVars;

function addOrderFromMainFormTest(){
  
  mainPageClass.openAddOrderPageFromMainForm();
  
  orderPageClass.fillName(testOrderOne.name);
  
  orderPageClass.fillStreet(testOrderOne.street);
  
  orderPageClass.fillState(testOrderOne.state);
  
  orderPageClass.fillCity(testOrderOne.city);
  
  orderPageClass.fillZip(testOrderOne.zip);
  
  orderPageClass.clickOk();
  
}

function addOrderFromToolbarTest(){
  
  mainPageClass.openAddOrderPageFromToolbar();
  
  orderPageClass.fillName(testOrderTwo.name);
  
  orderPageClass.fillStreet(testOrderTwo.street);
  
  orderPageClass.fillState(testOrderTwo.state);
  
  orderPageClass.fillCity(testOrderTwo.city);
  
  orderPageClass.fillZip(testOrderTwo.zip);
  
  orderPageClass.clickOk();
  
}

function validateAddOrdersFunctionality(){
  
  addOrderFromMainFormTest();
  
  mainPageClass.openSpecificOrder(testOrderOne.name);
  Assert.assertEquals(testOrderOne.name, orderPageClass.nameField.wText)
  Assert.assertEquals(testOrderOne.street, orderPageClass.streetField.wText)
  Assert.assertEquals(testOrderOne.state, orderPageClass.stateField.wText)
  Assert.assertEquals(testOrderOne.city, orderPageClass.cityField.wText)
  Assert.assertEquals(testOrderOne.zip, orderPageClass.zipField.wText)
  orderPageClass.clickOk();
  
  addOrderFromToolbarTest();
  
  mainPageClass.openSpecificOrder(testOrderTwo.name);
  Assert.assertEquals(testOrderTwo.name, orderPageClass.nameField.wText)
  Assert.assertEquals(testOrderTwo.street, orderPageClass.streetField.wText)
  Assert.assertEquals(testOrderTwo.state, orderPageClass.stateField.wText)
  Assert.assertEquals(testOrderTwo.city, orderPageClass.cityField.wText)
  Assert.assertEquals(testOrderTwo.zip, orderPageClass.zipField.wText)
  orderPageClass.clickOk();
  
}

function validateProductsCount(){
  mainPageClass.openAddOrderPageFromToolbar();
  
  Assert.assertEquals(TestData.expectedProductCount, orderPageClass.getProductsCount())  
  orderPageClass.clickOk();
}

function validateQuantity(){
  mainPageClass.openAddOrderPageFromMainForm();
  
  orderPageClass.setQuantity(TestData.newQuantity);
  
  Assert.assertEquals(TestData.newQuantity, orderPageClass.getQuantiy());
  orderPageClass.clickOk();
}

function validatePriceDiscountAndTotal(){
  
  let currName = "priceTest";
  
  mainPageClass.openAddOrderPageFromToolbar();
  
  orderPageClass.fillName(currName);
  
  orderPageClass.setPrice(TestData.newPrice);
  
  orderPageClass.setDiscount(TestData.newDiscount);
  
  orderPageClass.setTotal(TestData.newTotal);
  
  orderPageClass.clickOk();
  
  mainPageClass.openSpecificOrder(currName);
  
  Assert.assertEquals(TestData.newPrice, orderPageClass.getPrice());
  Assert.assertEquals(TestData.newDiscount, orderPageClass.getDiscount());
  Assert.assertEquals(TestData.newTotal, orderPageClass.getTotal());
  
  orderPageClass.clickOk();
}

function validateDate(){
  
  let currName = "dateTest";
  
  mainPageClass.openAddOrderPageFromMainForm();
  
  orderPageClass.fillName(currName);
  
  orderPageClass.setDate(TestData.invalidDate);
  // There Will Be An Error, So No Need To Write More Code :D
}

function summarizedOrderCheckCase(){
  AppActions.runOrdersApp();
  
  // Step 3.1
  validateAddOrdersFunctionality()
  
  // Step 3.2
  validateProductsCount();
  
  // Step 3.3
  validateQuantity();
  
  // Step 3.4
  validatePriceDiscountAndTotal();
  
  // Step 3.5
  validateDate();
  
  AppActions.terminateOrdersApp();
}

module.exports.summarizedOrderCheckCase = summarizedOrderCheckCase;