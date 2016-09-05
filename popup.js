let timeInterval;


function getTimeInterval(event){
  event.preventDefault();

  chrome.alarms.clearAll();

  timeInterval = parseInt(event.target.timeInterval.value);
  chrome.alarms.create("Reminder", { periodInMinutes: timeInterval });
  chrome.alarms.onAlarm.addListener(alertUser);
}

function alertUser(){
  console.log("Drink up!");
  window.alert("Time!");
}

function clearAlarm(event){
  event.preventDefault();
  chrome.alarms.clearAll();
}

document.addEventListener('DOMContentLoaded', function(){

  document.getElementById("timer-form").addEventListener("submit", getTimeInterval, false);

  document.getElementById("disable-btn").addEventListener("click", clearAlarm, false);

 }, false
)
