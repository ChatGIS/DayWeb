
// 类声明
class CMap {
    #privateAttr = '私有属性'
    constructor(lon, lat) {
        this.lon = lon
        this.lat = lat
    }
    getLon() {
        console.log("地图经纬为", this.lon);
    }
}

/* // 类表达式；类是匿名的，但是它被赋值给了变量
const CMap = class {
    constructor(lon, lat) {
        this.lon = lon
        this.lat = lat        
    }
}
// 类表达式；类有它自己的名字
const CMap = class ChatMap {
    constructor(lon, lat) {
        this.lon = lon
        this.lat = lat
    }
} */