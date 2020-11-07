
var item = {
    "id":"hello world",
    "title":"Get xpath",
    "contexts":['selection']
};
var data = '';
console.log("helloo bro")
chrome.contextMenus.create(item);
chrome.contextMenus.onClicked.addListener(function(clickData,tab){
    var sel = document.getElementById('scripts');
    data = Object.keys(clickData);
    // alert(data)
    chrome.tabs.executeScript({
        code: "console.log(window.location.href)"
      })
    
});
