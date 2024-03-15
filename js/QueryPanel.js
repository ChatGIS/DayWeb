var QueryPanel = (function(){
    console.log('Hello QueryPanel');
    var _index = '内部属性'
    console.log(_index);
    
    var QueryPanelFun = function(){
        console.log('Hello QueryPanelFun');
        console.log(_index);
    }

    var QueryPanelSelect = function(){
        console.log('Hello QueryPanelSelect');
        console.log(_index);
    }

    QueryPanelFun.prototype.init = function (params){
        console.log('Hello QueryPanel-init');
    }

    return {
        QueryPanelFun: QueryPanelFun,
        QueryPanelSelect: QueryPanelSelect                                                                               
    }
})()