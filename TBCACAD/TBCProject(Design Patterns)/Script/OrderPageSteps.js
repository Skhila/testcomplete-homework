class OrderPageClass{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    
    this.nameField = this.orderForm.Group.Customer;
    this.streetField = this.orderForm.Group.Street;
    this.cityField = this.orderForm.Group.City;
    this.stateField = this.orderForm.Group.State;
    this.zipField = this.orderForm.Group.Zip;
    
    this.productsDropDown = this.orderForm.Group.ProductNames;
    this.quantityInput = this.orderForm.Group.Quantity;
    this.price = this.orderForm.Group.Price;
    this.discount = this.orderForm.Group.Discount;
    this.total = this.orderForm.Group.groupBox1.Total;
    this.date = this.orderForm.Group.Date
    
    this.okButton = this.orderForm.ButtonOK;
  }
  
  fillName(name){
    this.nameField.Keys(name);
  }
  
  fillStreet(street){
    this.streetField.Keys(street);
  }
  
  fillCity(city){
    this.cityField.Keys(city);
  }
  
  fillState(state){
    this.stateField.Keys(state);
  }

  fillZip(zip){
    this.zipField.Keys(zip);
  }
  
  clickOk(){
    this.okButton.ClickButton();
  }
  
  getProductsCount(){
    return this.productsDropDown.wItemCount;
  }
  
  setQuantity(number){
    this.quantityInput.Keys(number);
  }
  
  getQuantiy(){
    return this.quantityInput.wValue;
  }
  
  setPrice(price){
    this.price.setText(price);
  }
  
  setDiscount(discount){
    this.discount.setText(discount);
  }
  
  setTotal(total){
    this.total.setText(total);
  }
  
  getPrice(){
    return this.price.wText;
  }
  
  getDiscount(){
    return this.discount.wText;
  }
  
  getTotal(){
    return this.total.wText;
  }
  
  setDate(date){
    this.date.wDate = date;
  }
  
  getDate(){
    return this.date.wDate;
  }
  
}

var orderPageClass = new OrderPageClass();

module.exports.orderPageClass = orderPageClass;
