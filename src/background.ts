


chrome.runtime.onInstalled.addListener(()=>{
    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
          console.log(id);
        });
      }, { url: [{ urlMatches: 'google.com' }] });
});