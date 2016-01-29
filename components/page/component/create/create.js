/**
 * Created by jack on 2015/12/2.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("create.html"),
    data: function () {
        return {
            vbar:{
                left:"30%"
            }
        }
    },
    methods:{
    },
    watch:{
    },
    ready: function () {
        var self = this;
        $(".v-bar").draggable({axis:"h",onDrag: function (e) {
            self.vbar.left = e.target.style.left;
        }});

        var editor = ace.edit("script-container");
        editor.setTheme("ace/theme/chrome");
        editor.session.setMode("ace/mode/javascript");
    }
})