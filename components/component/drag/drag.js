/**
 * Created by jack on 2015/8/24.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("drag.html"),
    data: function () {
        return {

        }
    },
    methods:{
        onSave: function (e) {
            var top = this.item.styles.top;
            this.item.styles.top = e.data.top +"px";
            this.item.styles.left = e.data.left +"px";
            this.item.styles.width =e.data.width?e.data.width +"px":this.item.styles.width;
            this.item.styles.height = e.data.height?e.data.height +"px":this.item.styles.height;
            Service.updateComponent(this.item._id,{styles:this.item.styles,options:this.item.options,type:"bar"}, function (rep) {
            });
        },
        onSelect: function () {
            this.item.select = true;
        },
        onResize: function () {
            this.$parent.onResize.call(this);
        }
    },
    ready: function () {
        $(this.$el).draggable({
            edge:5,
            onStopDrag:this.onSave
        }).resizable({
            onStopResize:this.onSave,
            onResize: this.onResize
        });
    }
});