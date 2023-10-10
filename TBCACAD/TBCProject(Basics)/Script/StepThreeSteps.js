function sayHelloWorld(){
  Log.Message("Hello World!");
}

function addOrderUsingKeywordTest(customer){
  
  KeywordTests.addOrder.Run(customer.name, customer.street,
  customer.state, customer.city, customer.zip);
  
}
module.exports.sayHelloWorld = sayHelloWorld;
module.exports.addOrderUsingKeywordTest = addOrderUsingKeywordTest;