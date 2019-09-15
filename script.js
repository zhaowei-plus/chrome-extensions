// 插件显示文字
chrome.browserAction.setBadgeText({text: '119'});
chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});

// 访问 background js方法
var bg = chrome.extension.getBackgroundPage();
bg.test(); // 访问bg的函数
alert(bg.document.body.innerHTML); // 访问bg的DOM

