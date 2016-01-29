/**
 * Created by jack on 2015/11/12.
 */


var Vue = require("component_modules/vue.js");
var template = require("component_modules/template.js");

function tranDate(str){
    if(str){
        var stamp = str.replace("/Date(","").replace("+0800)/","");
        var date = new Date(parseInt(stamp));
        var year = date.getFullYear(),
            month = (date.getMonth()+1),
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes();

        hour = hour<10?("0"+hour):hour;
        min = min<10?("0"+min):min;
        month = month<10?("0"+month):month;
        day = day<10?("0"+day):day;

        return year+"-"+month+"-"+day+" "+hour+":"+min;
    }else{
        return "";
    }
}


Vue.filter('datetime', function (str) {
    return tranDate(str);
});


module.exports = {
    tranDate:tranDate
}