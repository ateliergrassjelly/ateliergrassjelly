(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{528:function(t,e,r){var content=r(529);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("3d49e0e5",content,!0,{sourceMap:!1})},529:function(t,e,r){(e=r(23)(!1)).push([t.i,".theme--light.v-application{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-application .text--primary{color:rgba(0,0,0,.87)!important}.theme--light.v-application .text--secondary{color:rgba(0,0,0,.6)!important}.theme--light.v-application .text--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-application{background:#121212;color:#fff}.theme--dark.v-application .text--primary{color:#fff!important}.theme--dark.v-application .text--secondary{color:hsla(0,0%,100%,.7)!important}.theme--dark.v-application .text--disabled{color:hsla(0,0%,100%,.5)!important}.v-application{display:flex}.v-application a{cursor:pointer}.v-application--is-rtl{direction:rtl}.v-application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-application,.v-application--wrap{display:block}}}",""]),t.exports=e},535:function(t,e,r){"use strict";r(28),r(11),r(8),r(4),r(21);var o=r(3),n=(r(528),r(103)),c=r(25);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(n.a).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:d({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},567:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{story:{content:{}},isScrolling:!1}},created:function(){this.$router.push({name:"about"})},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(e){"input"==e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):e.slugChanged||window.location.reload()}))},asyncData:function(t){}},n=r(5),c=r(48),l=r.n(c),d=r(535),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("v-app")}),[],!1,null,null,null);e.default=component.exports;l()(component,{VApp:d.a})}}]);