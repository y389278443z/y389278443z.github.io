(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a97ccd4"],{"023c":function(t,s,a){},"2a95":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header-top",{attrs:{text:t.text}}),a("div",{staticClass:"gold-box baseBg"},[a("div",{staticClass:"gold-info"},[a("div",{staticClass:"disFlex top"},[t._m(0),a("p",{staticClass:"baseC",on:{click:t.goldState}},[a("i",{staticClass:"el-icon-question"}),t._v("金币说明")])]),a("div",{staticClass:"pad2"},[a("el-button",{staticClass:"width100",attrs:{type:"danger"},on:{click:t.gotoMall}},[t._v("金币兑换商品")])],1)])]),t._m(1)],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("span",{staticClass:"c999"},[t._v("当前金币")]),a("p",[a("span",{staticClass:"f30"},[t._v("2")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("p",{staticClass:"title"},[t._v("最近30天积分记录")]),a("ul",{staticClass:"gold-list pad2"},[a("li",{staticClass:"alignItem"},[a("h4",[t._v("普通点餐"),a("span",{staticClass:"ce6"},[t._v("+1")])]),a("span",{staticClass:"c999"},[t._v("2019-3-1")])]),a("li",{staticClass:"alignItem"},[a("h4",[t._v("普通点餐"),a("span",{staticClass:"ce6"},[t._v("+1")])]),a("span",{staticClass:"c999"},[t._v("2019-2-26")])])])])}],i=(a("cadf"),a("551c"),a("f751"),a("097d"),a("f392")),l={name:"gold",components:{headerTop:i["a"]},data:function(){return{text:"我的金币"}},methods:{gotoMall:function(){this.$alert({type:"error",message:"金币不足，快去下单赚取大量金币吧！"})},goldState:function(){this.$router.push({name:"sDetail",params:{urlName:"金币问题"}})}}},n=l,o=(a("f003"),a("2877")),r=Object(o["a"])(n,e,c,!1,null,"ce098880",null);s["default"]=r.exports},f003:function(t,s,a){"use strict";var e=a("023c"),c=a.n(e);c.a},f392:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"yz-header baseBg",class:{fixed:t.fixed}},[a("div",{staticClass:"lc-header"},[a("span",{staticClass:"el-icon-arrow-left header-left-icon",on:{click:t.back}}),a("span",[t._v(t._s(t.text))])])])},c=[],i={name:"headerTop",props:{text:{},fixed:{default:!1}},methods:{back:function(){this.$router.back(-1)}}},l=i,n=a("2877"),o=Object(n["a"])(l,e,c,!1,null,"583480de",null);s["a"]=o.exports}}]);