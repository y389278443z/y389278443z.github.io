(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b76f513"],{b102:function(n,o,i){},b574:function(n,o,i){"use strict";var a=i("b102"),t=i.n(a);t.a},c428:function(n,o,i){"use strict";i.r(o);var a=function(){var n=this,o=n.$createElement,i=n._self._c||o;return i("div",[i("h2",[n._v("全局方法打开")]),i("button",{on:{click:n.openLoading}},[n._v("点击打开loading")]),i("div",[i("h2",[n._v("通过指令的方式")]),i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.showLoading,expression:"showLoading"}],staticClass:"loading-demo",attrs:{"yz-loading-text":"这是一个局部的loading"}}),i("button",{on:{click:n.changeLoading}},[n._v("切换loading状态")])])])},t=[],e={name:"loading",methods:{openLoading:function(){var n=this.$loading({text:"这是一个loading加载, 3s后自动关闭"});setTimeout(function(){n.close()},3e3)},changeLoading:function(){this.showLoading=!this.showLoading}},data:function(){return{showLoading:!1}}},d=e,s=(i("b574"),i("2877")),c=Object(s["a"])(d,a,t,!1,null,"6a8cf1b8",null);o["default"]=c.exports}}]);