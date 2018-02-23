chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf("spreadshirt.com")) {
    chrome.pageAction.show(tabId);
  }
});
