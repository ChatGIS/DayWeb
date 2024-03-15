console.log("进入arraysort");
var array = [
    {"id":"10024221","gis_sceneid":"10019905","gis_layerconfigid":"10013031","maxzoom":"15","minzoom":"1","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"网格","type":"3","url":"http://$serverHostAndPort$/arcgis/rest/services/gridding_msg/MapServer/0/query","basemap":"0","tablename":"NETGRID","propertynames":"OBJECTID,GRIDDING_CODE,GRIDDING_NAME,REGION_CODE,DISTRICT_CODE,GRIDDING_AREA,ID,CENTER_LONLAT,COUNTY_GROUP_ID,CHANNEL_NUM,COMM_NUM,INCOME_SUM,CUST_NUM","geomerryfieldname":"","name":"网格","seq":"7","coordinatetype":"1","basemaptype":"2","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"300","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10024224","gis_sceneid":"10019905","gis_layerconfigid":"10013042","maxzoom":"15","minzoom":"1","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"责任田","type":"3","url":"http://$serverHostAndPort$/arcgis/rest/services/resp_field/MapServer/0/query","basemap":"0","tablename":"RESFIELD","propertynames":"RESPFIELD_TYPENAME,OBJECTID,RESPFIELD_CODE,RESPFIELD_NAME,REGION_CODE,DISTRICT_CODE,GRIDDING_CODE,RESPFIELD_AREA,ID,CENTER_LONLAT,COUNTY_GROUP_ID,CHANNEL_NUM,COMM_NUM,INCOME_SUM,CUST_NUM,COLOR","geomerryfieldname":"","name":"责任田","seq":"8","coordinatetype":"1","basemaptype":"2","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"1000","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10019937","gis_sceneid":"10019905","gis_layerconfigid":"10014077","maxzoom":"18","minzoom":"9","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"渠道画像","type":"1","url":"http://$serverHostAndPort$/arcgis/rest/services/group_pic/MapServer/0/query","basemap":"0","tablename":"GROUP","propertynames":"LON,LAT,ID,OBJECTID,REGION_CODE,REGION_NAME,COUNTY_ID,COUNTY_NAME,RESPFIELD_CODE,RESPFIELD_NAME,GROUP_ID,GROUP_NAME,START_LEVEL,CHANNEL_TYPE,CHANNELTYPE_NAME,MANAGER_NAME,MANAGER_MOBILE,OPEN_DATE,IS_ACTIVE","geomerryfieldname":"","name":"渠道画像","seq":"2","coordinatetype":"1","basemaptype":"2","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"300","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10019946","gis_sceneid":"10019905","gis_layerconfigid":"10014078","maxzoom":"18","minzoom":"1","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"小区画像","type":"3","url":"http://$serverHostAndPort$/arcgis/rest/services/comm_pic/MapServer/0/query","basemap":"0","tablename":"COMM_PIC","propertynames":"OBJECTID,ID,COMM_CODE,COMM_NAME,COUN_NAME,CITY_NAME,POI_ID,SHAPE,KD_COVER,CUST_NUM,KD_USERNUM,PORT_NUM,REMAIN_PORT_NUM,PORT_OVERPLUS_RATE,CUSTMANAGER,CUSTMANAGER_PHONE,INSTALLMANAGER,COVER_TYPE,DATAQUALITY,DATAMAINTAIN,ZHZG_COMM_NAME","geomerryfieldname":"","name":"小区画像","seq":"3","coordinatetype":"1","basemaptype":"2","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"300","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10019949","gis_sceneid":"10019905","gis_layerconfigid":"10014079","maxzoom":"18","minzoom":"9","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"基站画像","type":"3","url":"http://$serverHostAndPort$/arcgis/rest/services/bts_pic/MapServer/0/query","basemap":"0","tablename":"BTS_PIC","propertynames":"BTS_NAME","geomerryfieldname":"","name":"基站画像","seq":"4","coordinatetype":"1","basemaptype":"2","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"300","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10019934","gis_sceneid":"10019905","gis_layerconfigid":"10021768","maxzoom":"19","minzoom":"8","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"山西省地图","type":"4","url":"http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}","basemap":"1","tablename":"公网高德地图","propertynames":"","geomerryfieldname":"","name":"公网高德地图","seq":"1","coordinatetype":"EPSG:4326","basemaptype":"6","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"100","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10021811","gis_sceneid":"10019905","gis_layerconfigid":"10021810","maxzoom":"18","minzoom":"8","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"分线箱","type":"1","url":"http://$serverHostAndPort$/arcgis/rest/services/fxx/MapServer/0/query","basemap":"0","tablename":"FXX","propertynames":"OBJECTID,PORT_RATE,REGION_DESC,CITY_DESC,FXX_NAME,ID,JINGDU,WEIDU,PORT_NUM,REST_PORT_NUM","geomerryfieldname":"","name":"分线箱","seq":"5","coordinatetype":"1","basemaptype":"2","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"100","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10022974","gis_sceneid":"10019905","gis_layerconfigid":"10022973","maxzoom":"18","minzoom":"8","filterxml":"comm_code=0","visible":"1","visiblelabel":"1","locatable":"","layertitle":"分光器","type":"","url":"","basemap":"","tablename":"","propertynames":"","geomerryfieldname":"","name":"","seq":"6","coordinatetype":"","basemaptype":"","imagetype":"","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}
    ,{"id":"10024804","gis_sceneid":"10019905","gis_layerconfigid":"10024803","maxzoom":"18","minzoom":"1","filterxml":"","visible":"1","visiblelabel":"1","locatable":"1","layertitle":"BRAS小区","type":"1","url":"http://$serverHostAndPort$/arcgis/rest/services/commpoint_bras/MapServer/0/query","basemap":"0","tablename":"COMM_POINT_BRAS","propertynames":"OBJECTID,COMM_NAME,COMM_CODE,CITY_NAME","geomerryfieldname":"","name":"BRAS小区","seq":"9","coordinatetype":"1","basemaptype":"2","imagetype":"png","datasource_id":"","icon":"","islonlatindex":"","issharding":"","layer_delay_time":"100","cor_type":0,"scene_layer_filter_xml":[],"scenelayerfilter":[],"scenelayerclass":[]}]
// 冒泡法
console.log("图层数组arr", array);
for(let i = 0; i < array.length - 1; i++){
    for(let j = 0; j < array.length - 1 - i; j++){
        if(array[j].seq > array[j + 1].seq){
            let val = array[j];
            array[j] = array[j + 1];
            array[j + 1] = val;
        }
    }
}
console.log(array);


// 待排序数组
let arr1 = [1, 8, 7, 9, 16, 2, 4];
console.log("原数组arr1", arr1);
// sort()
console.log("sort()", arr1.sort());
// sort()比值函数
console.log("sort()比值函数", arr1.sort(function(a, b){return a - b}));
// 冒泡法
let arr = [5, 4, 3, 2, 1];
console.log("原数组arr", arr);
for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
        if(arr[j] > arr[j + 1]){
            let val = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = val;
        }
    }
}
console.log(arr);

// 选择排序

