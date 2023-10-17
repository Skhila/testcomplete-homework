﻿class OrderPageClass{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    
    this.nameField = this.orderForm.Group.Customer;
    this.streetField = this.orderForm.Group.Street;
    this.cityField = this.orderForm.Group.City;
    this.zipField = this.orderForm.Group.Zip;
    
    this.streetLabel = this.orderForm.Group.label8;
    
    this.okButton = this.orderForm.ButtonOK;
  }
  
  fillName(name){
    this.nameField.Keys(name);
  }
  
  fillCity(city){
    this.cityField.Keys(city);
  }
  
  fillStreet(street){
    this.streetField.Keys(street);
  }
  
  fillZip(zip){
    this.zipField.Keys(zip);
  }
  
  getName(){
    return this.nameField.wText;
  }
  
  getStreetLabel(){
    return this.streetLabel.WndCaption;
  }
  
  getStreet(){
    return this.streetField.wText;
  }
  
  getCity(){
    return this.cityField.wText;
  }
  
  getZip(){
    return this.zipField.wText;
  }
  
  clickOk(){
    this.okButton.ClickButton();
  }
  
  removeNameWithBackSpace(){
    this.nameField.Keys("^a")
    this.nameField.Keys("[BS]");
  }
  
}

var orderPageClass = new OrderPageClass();

module.exports.orderPageClass = orderPageClass;