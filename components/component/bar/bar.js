/**
 * Created by jack on 2015/12/2.
 */

var Vue = require("component_modules/vue.js");
var echarts = require("component_modules/echarts.min.js");
var header = require("header/header.js");
var drag = require("drag/drag.js");
var Service = require("main/service.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("bar.html"),
    props:["cid"],
    components:{
        drag:drag
    },
    data: function () {
        return {
            chart:"",
            options:{},
            styles:{}
        }
    },
    methods:{
        render: function () {
            var self = this;
            Vue.nextTick(function () {
                self.renderChart();
            })
        },
        renderChart: function () {
            var target = $(this.$el.nextElementSibling).find(".chart");
            this.chart = echarts.init(target[0]);
            this.chart.setOption(this.getData());
        },
        getData: function () {
            return  eval("("+this.item.options+")");
        },
        onSave: function (e) {
            var self = this;
            Service.updateComponent(this.item._id,{styles:this.styles,options:this.options,type:"bar"}, function (rep) {
                $(".modal").modal("hide");
            });
        },
        showTab: function (v) {
            this.tab = v;
        },
        onResize: function () {
            this.chart.resize();
        }
    },
    ready: function () {
        this.render();
    }
})