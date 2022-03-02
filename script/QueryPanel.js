var QueryPanel = (function(){
    console.log('Hello QueryPanel');
    var a = 'aa'
    console.log(a);
    
    var QueryPanelFun = function(){
        console.log('Hello QueryPanel-Fun');
        
    }

    QueryPanelFun.prototype.init = function (){
        console.log('Hello QueryPanel-init');
    }

    return QueryPanelFun;
})()