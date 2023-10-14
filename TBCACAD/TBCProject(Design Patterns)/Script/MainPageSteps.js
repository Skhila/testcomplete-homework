class MainPageClass{
  constructor(){
    this.orders = Aliases.Orders.MainForm.OrdersView;
    this.toolbar = Aliases.Orders.MainForm.ToolBar;
  }
  
  openAddOrderPageFromMainForm(){
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  }
  
  openAddOrderPageFromToolbar(){
    this.toolbar.ClickItem(4);
  }
  
  openSpecificOrder(orderName){
    this.orders.DblClickItem(orderName);
  }
}

var mainPageClass = new MainPageClass();

module.exports.mainPageClass = mainPageClass;

