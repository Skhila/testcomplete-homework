var orders = Aliases.Orders;
var mainForm = orders.MainForm;
var orderForm = orders.OrderForm;

function addOrderUsingScript(customer){

  mainForm.MainMenu.Click("Orders|New order...");
  
  orderForm.Group.Customer.Keys(customer.name);
  orderForm.Group.Street.Keys(customer.street);
  orderForm.Group.City.Keys(customer.city);
  orderForm.Group.State.Keys(customer.state);
  orderForm.Group.Zip.Keys(customer.zip);
  
  orderForm.ButtonOK.ClickButton();
  
}

function removeOrderByName(customerName){  
  
  mainForm.OrdersView.ClickItem(customerName);
  mainForm.ToolBar.ClickItem(6);
  orders.dlgConfirmation.btnYes.ClickButton();
  Log.Message(customerName + "'s Order Deleted Successfully!")
  
}

module.exports.addOrderUsingScript = addOrderUsingScript;
module.exports.removeOrderByName = removeOrderByName;