
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
      sendResponse({data: localStorage[request.key]});
    else
      sendResponse({}); // snub them.
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "clickme")
      sendResponse({data: "logincaption"});
    else
      sendResponse({}); // snub them.
});



