
let howMany;

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({windowType:'normal'}, function(tabs) {
        console.log('Number of open tabs in all normal browser windows:',tabs.length);
        howMany = tabs.length;
    }); 
  });

// export default howMany;