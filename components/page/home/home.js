/**
 * Created by jack on 2015/12/2.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("home.html"),
    data: function () {
        return {
            leftSlider:{
                left:-260,
                showAdd:false,
                pin:false
            },
            section:{
                left:"0px",
                right:"0px"
            },
            list:[
                {name:"img3.jpg"}
            ]
        }
    },
    methods:{
        onShowSlider: function (e) {
            this.leftSlider.left = 0;
            return e.stopPropagation();
        },
        onHideSlider: function () {
            this.leftSlider.left = -260;
        },
        onSliderClick: function (e) {
            return e.stopPropagation();
        },
        onShowAdd: function () {
            this.leftSlider.showAdd = !this.leftSlider.showAdd ;
        },
        onPin: function () {
            this.leftSlider.pin = !this.leftSlider.pin;
        }
    },
    watch:{
        "leftSlider.pin": function (v) {
            if(v){
                this.section.left = "260px";
            }else{
                this.section.left = "0px";
                this.onHideSlider();
            }
        }
    },
    ready: function () {
        var self = this;
        this.$on("bodyClick", function (e) {
            if(!self.leftSlider.pin){
                self.onHideSlider();
            }
        });
    }
})