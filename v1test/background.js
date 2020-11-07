
var item = {                      // details for manking a context menu item 
    "id":"hello world",
    "title":"Get xpath",
    "contexts":['selection']
};
var data = ''; // just to make a global var
chrome.contextMenus.create(item); // to create a context menu item
chrome.contextMenus.onClicked.addListener(function(clickData,tab){  //function to be called when the extension is invoked
    // var sel = document.getElementById('scripts');
    data = Object.keys(clickData);            
    // alert(data)
    chrome.tabs.executeScript({                    // function to print in google chrome console
        code: "console.log(window.location.href)" //used a js function to get the current url
      })
    
});
