// IF YOU WANT TO SEE TEST CASE LISTENER RESULTS RUN THE PROJECT! (Not A Single Test Functions)

function MyEventControl_OnLogError(Sender, LogParams)
{
  LogParams.Priority = pmHighest;
  LogParams.FontStyle.Bold = true;
  LogParams.FontColor = clYellow;
  LogParams.Color = clMaroon;
  
  Log.Message("Some Error Occured!!!" + " Error Message Text: " + LogParams.MessageText);
}

function MyEventControl_OnLogEvent(Sender, LogParams)
{
  LogParams.Priority = pmHighest;
  LogParams.FontStyle.Bold = true;
  LogParams.Color = clTeal;
}

function MyEventControl_OnLogCheckpoint(Sender, LogParams)
{
  LogParams.Priority = pmHighest;
  LogParams.FontStyle.Bold = true;
  LogParams.Color = clGreen;
}

function MyEventControl_OnStartTest(Sender)
{
  Log.Message("Test Started!");
}

function MyEventControl_OnStartTestCase(Sender, StartTestCaseParams)
{
  Log.Message("Test Case " + StartTestCaseParams.Name + " Started!");
}

function MyEventControl_OnStopTest(Sender)
{
  Log.Message("Test Finished!");
}

function MyEventControl_OnStopTestCase(Sender, StopTestCaseParams)
{
  Log.Message("Test Case " + StopTestCaseParams.Name + " Finished!");
  Log.Message("It Took " + StopTestCaseParams.Duration + " MiliSeconds To Run");
}

