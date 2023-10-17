function myCurrentDatePattern(){
  let currentDate = aqDateTime.Now();
  
  let currentDayOfMonth = aqDateTime.GetDay(currentDate);
  let currentMonth = aqDateTime.GetMonth(currentDate);
  let currentYear = aqDateTime.GetYear(currentDate);
  
  let currentHour = aqDateTime.GetHours(currentDate);
  let currentMinutes = aqDateTime.GetMinutes(currentDate);
  let currentSeconds = aqDateTime.GetSeconds(currentDate);
  
  let newYearDate = aqConvert.StrToDateTime("01/01/2024");
  let timeLeftBeforeNewYear = aqDateTime.TimeInterval(currentDate, newYearDate);
    
  Log.Message("Current Date (D/M/Y): " + currentDayOfMonth + "/" + currentMonth + "/" + currentYear);
  Log.Message("Current Time (H/M/S): " + currentHour + ":" + currentMinutes + ":" + currentSeconds);
  Log.Message("Time Left Before New Year 2024 (D/H/M/S): " + aqConvert.TimeIntervalToStr(timeLeftBeforeNewYear));
}
module.exports.myCurrentDatePattern = myCurrentDatePattern;