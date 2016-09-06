let timeInterval;
let bg = chrome.extension.getBackgroundPage()


function getTimeInterval(event){
  event.preventDefault();
  console.log("Submitted Interval");
  timeInterval = parseInt(event.target.timeInterval.value);
  bg.createAlarm(timeInterval);
  window.close();
}

function disableAlarm(event){
  event.preventDefault();
  console.log("Disabled Alarm");
  bg.clearAlarm();
  window.close();
}


document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("timer-form").addEventListener("submit", getTimeInterval, false);

  document.getElementById("disable-btn").addEventListener("click", disableAlarm, false);
 }, false
)
