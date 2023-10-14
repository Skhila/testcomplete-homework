function assertEquals(expected, actual){
  if(expected === actual){
    Log.Message("Assert Passed")
  }else{
    Log.Error("Assert Failed; " + "\n" + "Expected: " 
    + expected + "; \n" + "Actual: " + actual + "; ");
  }
}
module.exports.assertEquals = assertEquals;