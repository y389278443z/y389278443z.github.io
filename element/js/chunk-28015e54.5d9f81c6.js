(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28015e54"],{"0e9f":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"addAddress"},[t("header-top",{attrs:{text:e.text,fixed:"false"}}),t("el-form",{ref:"ruleForm",staticClass:"addForm marginT10",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"1.4rem"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"姓名"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{prop:"sex",label:"性别"}},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.ruleForm.sex,callback:function(r){e.$set(e.ruleForm,"sex",r)},expression:"ruleForm.sex"}},[t("el-radio",{attrs:{label:"1",border:""}},[e._v("男")]),t("el-radio",{attrs:{label:"2",border:""}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{attrs:{placeholder:"手机号码"},model:{value:e.ruleForm.phone,callback:function(r){e.$set(e.ruleForm,"phone",r)},expression:"ruleForm.phone"}})],1),t("el-form-item",{attrs:{label:"备用号",prop:"saphone"}},[t("el-input",{attrs:{placeholder:"备用号"},model:{value:e.ruleForm.saphone,callback:function(r){e.$set(e.ruleForm,"saphone",r)},expression:"ruleForm.saphone"}})],1),t("el-form-item",{attrs:{label:"地址",prop:"address"},nativeOn:{click:function(r){return e.searchAddress(r)}}},[t("el-input",{attrs:{placeholder:"小区/写字楼/学校等",readonly:"","suffix-icon":"el-icon-arrow-right"},model:{value:e.ruleForm.address,callback:function(r){e.$set(e.ruleForm,"address",r)},expression:"ruleForm.address"}})],1),t("el-form-item",{attrs:{label:"门牌",prop:"house"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.house,callback:function(r){e.$set(e.ruleForm,"house",r)},expression:"ruleForm.house"}})],1),t("el-form-item",{staticClass:"kind-item",attrs:{prop:"kind",label:"标签"}},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.ruleForm.kind,callback:function(r){e.$set(e.ruleForm,"kind",r)},expression:"ruleForm.kind"}},[t("el-radio",{attrs:{label:"家",border:""}}),t("el-radio",{attrs:{label:"公司",border:""}}),t("el-radio",{attrs:{label:"学校",border:""}})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.addAddress("ruleForm")}}},[e._v("添加")])],1)],1),t("router-view")],1)},a=[],o=t("cebc"),n=(t("7f7f"),t("f392")),l=t("2f62"),u=t("365c"),i=t("ed08"),c="user_info",d="geo_hash",m="SET_ADDRESS_CHOICE",f={name:"addAddress",components:{headerTop:n["a"]},data:function(){return{text:"添加地址",ruleForm:{name:"",sex:"",address:"",house:"",kind:"",phone:"",saphone:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:2,max:8,message:"长度在 2 到 8 个字符",trigger:"blur"}],phone:[{required:!0,message:"请输入正确格式的手机号",trigger:"blur"}],saphone:[{required:!0,message:"请输入备用号码",trigger:"blur"}],address:[{required:!0,message:"请选择正确的地址",trigger:"change"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],house:[{required:!0,message:"请输入详细的门牌等信息",trigger:"blur"}],kind:[{required:!0,message:"请选择地址标签",trigger:"blur"}]},userId:"",geohash:"",tag_type:null}},methods:{addAddress:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;var t=r.ruleForm;switch(t.kind){case"家":r.tag_type=1;break;case"学校":r.tag_type=2;break;case"公司":r.tag_type=3;break}Object(u["a"])(r.userId,t.address,t.house,r.geohash,t.name,t.phone,t.saphone,t.sex,r.tag_type).then(function(e){1===e.status?r.$alert({message:"添加成功!",type:"success",success:function(){r.$store.commit(m),r.$router.back(-1)}}):0===e.status&&r.$alert({message:e.message,type:"error"})})})},searchAddress:function(){this.$router.push({name:"csearchAddress"})}},created:function(){var e=JSON.parse(Object(i["b"])(c));this.userId=e.user_id,this.geohash=Object(i["b"])(d)},computed:Object(o["a"])({},Object(l["c"])(["choiceAddress"])),watch:{choiceAddress:function(e){this.ruleForm.address=e}}},p=f,b=(t("fec2"),t("bb75"),t("2877")),h=Object(b["a"])(p,s,a,!1,null,"5f9e950c",null);r["default"]=h.exports},"268f":function(e,r,t){e.exports=t("fde4")},a7be:function(e,r,t){},aa99:function(e,r,t){},bb75:function(e,r,t){"use strict";var s=t("a7be"),a=t.n(s);a.a},bf90:function(e,r,t){var s=t("36c3"),a=t("bf0b").f;t("ce7e")("getOwnPropertyDescriptor",function(){return function(e,r){return a(s(e),r)}})},cebc:function(e,r,t){"use strict";t.d(r,"a",function(){return c});var s=t("268f"),a=t.n(s),o=t("e265"),n=t.n(o),l=t("a4bb"),u=t.n(l),i=t("bd86");function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},s=u()(t);"function"===typeof n.a&&(s=s.concat(n()(t).filter(function(e){return a()(t,e).enumerable}))),s.forEach(function(r){Object(i["a"])(e,r,t[r])})}return e}},e265:function(e,r,t){e.exports=t("ed33")},ed33:function(e,r,t){t("014b"),e.exports=t("584a").Object.getOwnPropertySymbols},f392:function(e,r,t){"use strict";var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"yz-header baseBg",class:{fixed:e.fixed}},[t("div",{staticClass:"lc-header"},[t("span",{staticClass:"el-icon-arrow-left header-left-icon",on:{click:e.back}}),t("span",[e._v(e._s(e.text))])])])},a=[],o={name:"headerTop",props:{text:{},fixed:{default:!1}},methods:{back:function(){this.$router.back(-1)}}},n=o,l=t("2877"),u=Object(l["a"])(n,s,a,!1,null,"583480de",null);r["a"]=u.exports},fde4:function(e,r,t){t("bf90");var s=t("584a").Object;e.exports=function(e,r){return s.getOwnPropertyDescriptor(e,r)}},fec2:function(e,r,t){"use strict";var s=t("aa99"),a=t.n(s);a.a}}]);