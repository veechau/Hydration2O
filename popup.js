let timeInterval;
let bg = chrome.extension.getBackgroundPage()


function getTimeInterval(event){
  event.preventDefault();
  console.log("listener works for submit")
  timeInterval = parseInt(event.target.timeInterval.value);
  bg.createAlarm(timeInterval);
}


document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("timer-form").addEventListener("submit", getTimeInterval, false);

  document.getElementById("disable-btn").addEventListener("click", bg.clearAlarm, false);
 }, false
)
