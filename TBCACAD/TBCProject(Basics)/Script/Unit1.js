function Test2()
{
  TestedApps.Orders.Run();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|Edit order...");
  //Clicks the 'btnOK' button.
  Aliases.Orders.dlgWarning.btnOK.ClickButton();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(46, 7);
  //Enters the text '1' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("1");
  //Clicks the 'OrderForm' object.
  Aliases.Orders.OrderForm.Click(340, 441);
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Closes the 'MainForm' window.
  TestedApps.Orders.Close();
    //Clicks the 'btnNo' button.
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}