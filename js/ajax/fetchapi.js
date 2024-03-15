console.log('进入fetch api模块');

// 简单使用
fetch("http://localhost:3007/api/dictionary")
    .then(res => res.json())
    .then(resJson => {
        // console.log(resJson)
        // console.log(resJson.meta);
        // console.log(resJson.data);
    })

// 
fetch("http://localhost:3007/api/dictionary")
    .then(res => {
        if(res.ok && res.headers.get("Content-Type") === "application/json; charset=utf-8"){
            return res.json()
        }
    })
    .then(resJson => {
        console.log(resJson)
        console.log(resJson.meta);
        console.log(resJson.data);
    })
    .catch(err => {
        console.log("Fetch Error", err);
    })