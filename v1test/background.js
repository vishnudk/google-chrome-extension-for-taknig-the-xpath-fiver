
var item = {
    "id":"hello world",
    "title":"the fiver extension",
    "contexts":['selection']
};
console.log("helloo bro")
chrome.contextMenus.create(item,function(){
    console.log("hello bro...")
});
chrome.contextMenus.onClicked.addListener(function(clickData,tab){
    console.log(clickData);
});
// console.log("hello world");
// blockedUrls = [
//     "*://*.doubleclick.net/*",
// 	"*://partner.googleadservices.com/*",
// 	"*://*.googlesyndication.com/*",
// 	"*://*.google-analytics.com/*",
// 	"*://creative.ak.fbcdn.net/*",
// 	"*://*.adbrite.com/*",
// 	"*://*.exponential.com/*",
// 	"*://*.quantserve.com/*",
// 	"*://*.scorecardresearch.com/*",
//     "*://*.zedo.com/*",
//     "*://*.indiafightscovid.com/*",
//     "*://*.tabnine.com/*",
//     "*://*.brands.zee5.com/*",
//     "*://*.zapmeta.co.in/*",
 
//     "*://*.izito.co.in/*",
// ]
// // chrome.tabs.executeScript({
// //     code: 'console.log("addd")'
// // })
// // const log = chrome.extension.getBackgroundPage().console.log;
// // log('something')
// // chrome.extension.getBackgroundPage().console.log('foo');



// chrome.webRequest.onBeforeRequest.addListener(
//     function(details){
        
//     //     if (window.location.href != "*://*.youtube.com/*"){
//     //         return {cancel:true}
//     // }
//     return {cancel:true}
// },
//     {
//         urls: blockedUrls
        
//     },
//     ['blocking']
    
// )
// function myFunction() { 
//     //prints in console 
//     console.log("log:Tony sent a message");  
    
//     //prints in console 
//     console.info("info:Quill recieved.");  
// } 
// myFunction()
// console.log("hello world ")
// console.log(chrome.webRequest.urls)


// console.log("Loaded extension");


// function blockRequest(details) {
//    return {cancel: true};
// }

// function updateFilters(urls) {
//    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
//      chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
//    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.facebook.com/*", "*://*.facebook.net/*","*://*.youtube.com/*"]}, ['blocking']);
// }

// updateFilters();