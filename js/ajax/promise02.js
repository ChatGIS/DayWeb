console.log('进入promise模块');

function loadImageAsync(url){
    return new Promise(function(resolve, reject){
        let image = new Image()

        image.onload = function(){
            resolve(image)
        }

        image.onerror = function(){
            reject(new Error("无法加载图片：" + url))
        }

        image.src =url
    })
}

loadImageAsync("https://developer.mozilla.org/favicon-48x48.cbbd161b.png1").then(
    res => {
        console.log(res);
        document.body.appendChild(res);
    }
).catch(res => {
    console.log(res);    
})

