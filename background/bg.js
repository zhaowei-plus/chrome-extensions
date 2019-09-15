/**
 * 本文件打开浏览器就执行，直到关闭浏览器
 * 
 */
setInterval(()=>{
    // 桌面通知
    chrome.notifications.create(null, {
        type: 'basic',
        // iconUrl: 'img/icon.png',
        title: '这是标题',
        message: '您刚才点击了自定义右键菜单！'
    });
},2000)

function test(){
    alert('我是background！');
}


// 监听消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    alert(message)
    sendResponse({content:"hi,it is bg.js"})
});

// 鼠标右键菜单
chrome.contextMenus.create({
    title: '使用度娘搜索：%s', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
    }
});

