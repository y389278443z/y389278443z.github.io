(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-518ff5c2"],{"0a0d":function(t,e,s){t.exports=s("e829")},"16fc":function(t,e,s){},"2f37":function(t,e,s){var a=s("63b6");a(a.S,"Date",{now:function(){return(new Date).getTime()}})},"5fda":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pay pr"},[s("header-top",{attrs:{text:t.text}}),s("div",{staticClass:"count-down"},[s("p",[t._v("支付剩余时间")]),s("p",{staticClass:"f20 marginT2 count-time"},[t._v(t._s(t.min)+"分："+t._s(t.sec)+"秒")]),t.order?s("div",{staticClass:"pay-info alignItem"},[s("p",[t._v(t._s(t.order.shop_name))]),s("p",{staticClass:"pointer c999",on:{click:function(e){t.showModel=!0}}},[t._v("查看详情")]),s("p",{staticClass:"cf5"},[t._v("￥"+t._s(t.order.total_quantity))])]):t._e()]),s("p",{staticClass:"pay-way c999"},[t._v("支付方式")]),s("div",{staticClass:"disFlex tc pad2"},[s("div",{staticClass:"grow1"},[t._m(0),s("el-radio",{attrs:{label:"1",border:""},model:{value:t.payWay,callback:function(e){t.payWay=e},expression:"payWay"}},[t._v("支付宝")])],1),s("div",{staticClass:"grow1"},[t._m(1),s("el-radio",{attrs:{label:"2",border:""},model:{value:t.payWay,callback:function(e){t.payWay=e},expression:"payWay"}},[t._v("微信")])],1)]),s("div",{staticClass:"pad2"},[s("el-button",{staticClass:"width100",attrs:{type:"primary"},on:{click:t.pay}},[t._v("确认支付")]),s("div",{staticClass:"marginT2"},[s("el-button",{staticClass:"width100",attrs:{type:"success"},on:{click:t.goHome}},[t._v("返回首页")])],1)],1),t.showModel?s("div",{staticClass:"order-model",on:{click:function(e){t.showModel=!1}}},[s("h3",{staticClass:"marginT20 marginB5"},[t._v("\n            "+t._s(t.order.shop_name)+"店铺的订单：\n        ")]),s("ul",{staticClass:"marginB5"},t._l(t.order.order_list,function(e,a){return s("li",[t._v("\n               "+t._s(e.name)+" * "+t._s(e.count)+"\n           ")])}),0),s("p",[t._v("地址："+t._s(t.order.total_address))])]):t._e()],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("img",{staticClass:"icon-img",attrs:{src:"images/icons/zfb.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("img",{staticClass:"icon-img",attrs:{src:"images/icons/wx.png",alt:""}})])}],i=s("0a0d"),r=s.n(i),o=s("f392"),c=s("ed08"),l=s("365c"),u="user_info",d={name:"pay",components:{headerTop:o["a"]},data:function(){return{text:"在线支付",minutes:15,seconds:0,payWay:"1",timer:null,userId:null,order:null,showModel:!1}},methods:{minus:function(){var t=this;this.timer=setInterval(function(){0==t.seconds&&0==t.minutes?(clearInterval(t.timer),t.$alert({message:"支付超时！",type:"error"})):0==t.seconds&&0!=t.minutes?(t.seconds=59,t.minutes--):t.seconds--},1e3)},toTwo:function(t){return t<10?"0"+t:t},pay:function(){this.$alert({message:"请在正经的app中支付！",type:"warning"})},goHome:function(){this.$router.push({name:"msite"})}},computed:{sec:function(){return this.toTwo(this.seconds)},min:function(){return this.toTwo(this.minutes)}},created:function(){var t=this,e=this.$route.params.restaurant_id,s=JSON.parse(Object(c["b"])(u));this.userId=s.user_id,Object(l["j"])(this.userId,e).then(function(e){t.order=e[0];var s=r()();console.log(t.order.order_time);var a=new Date(t.order.order_time).getTime();if(a+9e5<=s)t.minutes=0,t.seconds=0;else{var n=9e5-(s-a);t.minutes=Math.floor(n/6e4),t.seconds=Math.floor(n%6e3/1e3)}})},mounted:function(){this.minus()},beforeDestroy:function(){clearInterval(this.timer)}},f=d,p=(s("fcab"),s("2877")),m=Object(p["a"])(f,a,n,!1,null,"2f486a57",null);e["default"]=m.exports},e829:function(t,e,s){s("2f37"),t.exports=s("584a").Date.now},f392:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yz-header baseBg",class:{fixed:t.fixed}},[s("div",{staticClass:"lc-header"},[s("span",{staticClass:"el-icon-arrow-left header-left-icon",on:{click:t.back}}),s("span",[t._v(t._s(t.text))])])])},n=[],i={name:"headerTop",props:{text:{},fixed:{default:!1}},methods:{back:function(){this.$router.back(-1)}}},r=i,o=s("2877"),c=Object(o["a"])(r,a,n,!1,null,"583480de",null);e["a"]=c.exports},fcab:function(t,e,s){"use strict";var a=s("16fc"),n=s.n(a);n.a}}]);