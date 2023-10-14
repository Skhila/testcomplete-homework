const orderWithGlobalVars = {name: Project.Variables.name, street: Project.Variables.street 
                            ,state: Project.Variables.state, city: Project.Variables.city
                            ,zip: Project.Variables.zip };
                            
const orderWithoutGlobalVars = {name: "Lekso Nizharadze", street: "L.Nizharadze Street"
                                ,state: "Georgia", city: "Tbilisi", zip: "0159"};
                                
                                
const invalidDate = "24/24/2424";
const newPrice = "$200";
const newDiscount = "20%";
const newTotal = "160";
const newQuantity = "!TestComplete"; 
const expectedProductCount = 3;
                                
module.exports.orderWithGlobalVars = orderWithGlobalVars;
module.exports.orderWithoutGlobalVars = orderWithoutGlobalVars;
module.exports.invalidDate = invalidDate;
module.exports.newPrice = newPrice;
module.exports.newDiscount = newDiscount;
module.exports.newTotal = newTotal;
module.exports.newQuantity = newQuantity;
module.exports.expectedProductCount = expectedProductCount;

