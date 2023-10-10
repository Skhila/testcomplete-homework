var orders = Aliases.Orders;
var mainForm = orders.MainForm;
var orderForm = orders.OrderForm;

function runOrdersApp(){
  
  TestedApps.Orders.Run();
  
}

function validateCustomer(customer){
  
  mainForm.OrdersView.DblClickItem(customer.name);
  
  aqObject.CheckProperty(orderForm.Group.Customer, "wText", cmpEqual, customer.name);
  aqObject.CheckProperty(orderForm.Group.Street, "wText", cmpEqual, customer.street);
  aqObject.CheckProperty(orderForm.Group.State, "wText", cmpEqual, customer.state);
  aqObject.CheckProperty(orderForm.Group.City, "wText", cmpEqual, customer.city);
  aqObject.CheckProperty(orderForm.Group.Zip, "wText", cmpEqual, customer.zip);
  
  orderForm.ButtonOK.Click();
  
  Log.Message("Customer \"" + customer.name + "\" Validated Successfully!");
  
}

function closeOrdersApp(){
  
  TestedApps.Orders.Terminate();
  
}

module.exports.runOrdersApp = runOrdersApp;
module.exports.validateCustomer = validateCustomer;
module.exports.closeOrdersApp = closeOrdersApp;