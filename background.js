
function createAlarm(timeInterval) {
  chrome.alarms.clearAll();
  chrome.alarms.create("Reminder", { periodInMinutes: timeInterval });
  chrome.alarms.onAlarm.addListener(alertUser);
}

let opt = {
  type: "basic",
  title: "Reminder:",
  message: "Time to Rehydrate",
  iconUrl: "icon-128.png"
}

function alertUser(){
  chrome.notifications.create("HydrationReminder", opt, function(){
    console.log("ALERT");
  })
}

function clearAlarm(event){
  event.preventDefault();
  chrome.alarms.clearAll();
}
