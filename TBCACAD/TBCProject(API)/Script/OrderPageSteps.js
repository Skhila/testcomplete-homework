class OrderPageClass{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;

    this.nameField = this.orderForm.Group.Customer;
    this.cardNoField = this.orderForm.Group.CardNo;    

    this.okButton = this.orderForm.ButtonOK;
    this.cancelButton = this.orderForm.ButtonCancel;
  }

  fillName(name){
    this.nameField.Keys(name);
  }
  
  getName(){
    return this.nameField.wText;
  }

  fillCardNo(cardNo){
    this.cardNoField.Keys(cardNo);
  }
  
  getCardNo(){
    return this.cardNoField.wText;
  }
  
  copyPasteCardNo(){
    this.cardNoField.Keys("^a^c");
    return Sys.Clipboard;
  }
  
  
  clickOk(){
    this.okButton.ClickButton();
  }
  
  clickCancel(){
    this.cancelButton.ClickButton();
  }
  
  getRadioButtonsCount(){
    return Aliases.Orders.OrderForm.Group.FindAllChildren("ClrClassName", "RadioButton").length;
  }
}

var orderPageClass = new OrderPageClass();

module.exports.orderPageClass = orderPageClass;