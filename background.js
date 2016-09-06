function createAlarm(timeInterval) {
  chrome.alarms.clearAll();
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
