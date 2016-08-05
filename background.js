
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?wikipedia\.org/;

function callback(r) {
  console.log("callback: " + r);
}

chrome.browserAction.onClicked.addListener(function (tab) {
  if (urlRegex.test(tab.url)) {
    chrome.tabs.executeScript(null, { "file": "content.js" });
  }
});

