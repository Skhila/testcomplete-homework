var appActions = require("AppActions");
var mainPageSteps = require("MainPageSteps");
var orderPageSteps = require("OrderPageSteps");
var testData = require("TestData");

let mainPageClass = mainPageSteps.mainPageClass;
let orderPageClass = orderPageSteps.orderPageClass;
let currentOrder = testData.orderWithGlobalVars;
  

function secondTaskRunner(){
  
  appActions.runOrdersApp();
  
  mainPageClass.openAddOrderPageFromMainForm();
  
  orderPageClass.fillName(currentOrder.name);
  
  orderPageClass.fillStreet(currentOrder.street);
  
  orderPageClass.fillState(currentOrder.state);
  
  orderPageClass.fillCity(currentOrder.city);
  
  orderPageClass.fillZip(currentOrder.zip);
  
  orderPageClass.clickOk();
  
  
  
  appActions.terminateOrdersApp()
}


