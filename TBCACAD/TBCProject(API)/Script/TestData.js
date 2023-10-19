var CommonFunctions = require("CommonFunctions");

const testCustomer = {name: "Lekso Nizharadze", street: "L.Nizharadze Street"
                                ,state: "Georgia", city: "Tbilisi", zip: "0159"};

const randomCardNumber = CommonFunctions.generateRandomCardNumber();
const newName = "Bidzina Tabagari";
const expectedRadioButtonCount = 3;

const keyFieldName = "key";
const activityFieldName = "activity";

const apiBaseURL = "http://www.boredapi.com";
const activityURL = apiBaseURL + "/api/activity";
const musicURL = activityURL + "?type=music";

module.exports.testCustomer = testCustomer;
module.exports.randomCardNumber = randomCardNumber;
module.exports.newName = newName;
module.exports.expectedRadioButtonCount = expectedRadioButtonCount;
module.exports.keyFieldName = keyFieldName;
module.exports.activityURL = activityURL;
module.exports.musicURL = musicURL;
module.exports.activityFieldName = activityFieldName;