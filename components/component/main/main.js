
var Vue = require('component_modules/vue.js');
var Router = require('component_modules/director.js').Router;
var bar = require('bar/bar.js');
var home = require('page/home/home.js');
var header = require('header/header.js');
var Service = require("main/service.js");
var lazy = require("lazyload/lazyload.js");


window.app = new Vue({
    el:"#app",
    debug:true,
    data:{
        "currentView":"home",
        "layout":[

        ]
    },
    components:{
        "bar":bar,
        "home":home
    },
    methods:{
        onBodyClick: function (e) {
            this.$broadcast("bodyClick",e);
        }
    },
    ready: function () {
        var self = this;
        var height = document.documentElement.clientHeight - 50;
        $("body").css("height",height);

        //var self = this;
        //Service.getLayout( function (rep) {
        //    self.layout = rep.Response;
        //})
    }
});

var router = new Router();

function doRouter(view,component){
    var coms = window.app.$options.components;

    if(!coms[view]){
        coms[view] = component;
    }
    app.currentView = view;
}


router.on("/home", function () {
    require.async(["components/page/home/home.js"], function (p) {
        doRouter("home",p);
    })
});

router.on("/component", function () {
    require.async(["components/page/component/component.js"], function (p) {
        doRouter("component",p);
    })
});


router.on("/component/create", function () {
    require.async(["components/page/component/create/create.js"], function (p) {
        doRouter("c-create",p);
    })
});


router.init("/home");


