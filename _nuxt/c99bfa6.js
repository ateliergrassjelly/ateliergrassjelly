(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{537:function(t,n,o){"use strict";o.r(n);var e={data:function(){return{story:{content:{}}}},created:function(){this.$router.push({name:"about"})},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"==n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):n.slugChanged||window.location.reload()}))},asyncData:function(t){}},c=o(18),component=Object(c.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this.story.content.component?n(this._f("dashify")(this.story.content.component),{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);