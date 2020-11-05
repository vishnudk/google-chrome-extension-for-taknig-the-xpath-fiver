console.log("hello")
chrome.contextMenus.create({
    "id":"hello world",
    "title":"the fiver extension",
    "contexts":['pages']
})

chrome.contexMenus.onClicked.addListener(function(clickData,tab){
    console.log(clickData)
})