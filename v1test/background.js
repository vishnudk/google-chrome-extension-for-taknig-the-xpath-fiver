
var item = {
    "id":"hello world",
    "title":"the fiver extension",
    "contexts":['selection']
};
chrome.contextMenus.create(item);
chrome.contextMenus.onClicked.addListener(function(clickData,tab){
    console.log(clickData)
});
// console.log("hello world");