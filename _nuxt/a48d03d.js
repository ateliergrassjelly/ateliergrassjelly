(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{555:function(t,e,n){var content=n(556);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("0cd63bd9",content,!0,{sourceMap:!1})},556:function(t,e,n){(e=n(23)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},563:function(t,e,n){"use strict";n.r(e);var o={name:"About",props:{info:{}}},r=n(5),l=n(48),c=n.n(l),h=n(560),d=n(269),f=(n(35),n(555),n(0).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),m=n(25),v=Object(m.a)(f).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),w=n(562),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden mb-1",class:{"ma-16":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"about"}},[n("v-row",{style:{height:t.$vuetify.breakpoint.mdAndUp?"100vh":""},attrs:{"no-gutters":"",align:"center",justify:"center"}},[n("v-col",{attrs:{md:"5",align:"center"}},[t.$vuetify.breakpoint.mdAndUp?n("v-img",{attrs:{src:t.info.images[1].filename,height:"35vh"}}):n("div",[n("v-parallax",{staticStyle:{width:"100vw"},attrs:{height:"300",src:t.info.images[1].filename}})],1)],1),t._v(" "),n("v-col",{staticClass:"px-6 py-12",staticStyle:{"background-color":"#495464",color:"white","z-index":"1"},style:{height:t.$vuetify.breakpoint.mdAndUp?"80vh":""},attrs:{md:"3"}},[n("base-heading",{staticClass:"mb-6",class:{"text-center":!t.$vuetify.breakpoint.mdAndUp}},[t._v("\n            "+t._s(t.info.secondary_header)+"\n          ")]),t._v(" "),n("base-text",{class:{"text-center":!t.$vuetify.breakpoint.mdAndUp}},[t._v("\n            "+t._s(t.info.secondary_sub_info)+"\n          ")])],1),t._v(" "),n("v-col",{attrs:{md:"4"}},[t.$vuetify.breakpoint.mdAndUp?n("v-img",{attrs:{src:t.info.images[2].filename,height:"50vh"}}):n("div",[n("v-parallax",{staticStyle:{width:"100vw"},attrs:{height:"300",src:t.info.images[2].filename}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:h.a,VImg:d.a,VParallax:v,VRow:w.a})}}]);