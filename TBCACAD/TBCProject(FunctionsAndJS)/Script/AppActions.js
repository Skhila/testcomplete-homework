function runOrdersApp(){
  TestedApps.Orders.Run();
}

function terminateOrdersApp(){
  TestedApps.Orders.Terminate();
}

module.exports.runOrdersApp = runOrdersApp;
module.exports.terminateOrdersApp = terminateOrdersApp;