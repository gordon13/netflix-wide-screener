var cIcon = 0;
//	set initial icon
chrome.browserAction.setIcon({path: "icon1.png"});	

// Called when the user clicks on the extension icon
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    if(cIcon == 0){
    	chrome.browserAction.setIcon({path: "icon2.png"});
    	cIcon = 1;
    }
    else if (cIcon == 1){
    	chrome.browserAction.setIcon({path: "icon1.png"});	
    	cIcon = 0;
    }
  });
});