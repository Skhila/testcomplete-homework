function Test1()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  let toolBar = mainForm.ToolBar;
  toolBar.ClickItem(4, false);
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(47, 9);
  textBox.SetText("123123");
  let button = orderForm.ButtonOK;
  button.ClickButton();
  let listView = mainForm.OrdersView;
  listView.Click(131, 54);
  listView.ClickItem("123123", "MyMoney");
  toolBar.ClickItem(5, false);
  textBox = groupBox.Street;
  textBox.Click(78, 12);
  textBox.SetText("123");
  button.ClickButton();
}
