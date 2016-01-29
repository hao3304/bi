/**
 * Created by jack on 2015/12/2.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");

module.exports = Vue.component("c-header",{
    inherit:true,
    template:__inline("header.html"),
    props:["target"],
    data: function () {

    },
    methods:{

    },
    ready: function () {
    }
})