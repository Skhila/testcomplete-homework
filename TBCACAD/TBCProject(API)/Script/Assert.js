function assertEquals(expected, actual)
{
  if(expected === actual){
    Log.Checkpoint("Assert Passed");
  }else{
    Log.Error("Assert Failed; " + "\n" + "Expected: " 
    + expected + "; \n" + "Actual: " + actual + "; ");
  }
}

module.exports.assertEquals = assertEquals;