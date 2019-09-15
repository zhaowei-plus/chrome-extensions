/**
 * 
 * 1、content_script是个数组，定义了一些url与script的联系，当用户访问相应的网址的时
 * 候，chrome会等待页面加载完成后，执行相应的js代码。
    
 2、content_script可以访问当前页面的 dom 和 localstorage，但是无法访问当前页面的js变量

    3、content_script在每次加载相匹配的页面后执行，页面被刷新后对应的content_script也会
被重行执行。
 * 
 */
setTimeout(()=>{
    alert("hello github.com")
}, 2000)

// 当进入github.com 网址时，想bg.js 发送消息，并接受返回信息
let message = "hello"
chrome.runtime.sendMessage(message, function(response){
    console.log(response)
});