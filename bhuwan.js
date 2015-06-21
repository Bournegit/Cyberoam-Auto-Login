{

chrome.runtime.sendMessage({method: "getLocalStorage",key:"username1"}, function(response) {
  var cid = response.data;
   document.querySelector("input[name=username]").value  = cid;
 
});
chrome.runtime.sendMessage({method: "getLocalStorage",key:"password1"}, function(response) {
  var pid = response.data;
   document.querySelector("input[name= password]").value  =pid;
   
});

chrome.runtime.sendMessage({method: "clickme"}, function(response) {
    document.getElementById("logincaption").click();
   
   
});

}

