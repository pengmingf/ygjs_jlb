(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/t-table/t-th"],{"1c2f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{align:String},data:function(){return{thBorder:"1",borderColor:"#d0dee5",fontSize:"15",color:"#3b4246",thAlign:"center"}},inject:["table","tr"],created:function(){this.thBorder=this.table.border,this.borderColor=this.table.borderColor,this.fontSize=this.tr.fontSize,this.color=this.tr.color,this.align?this.thAlign=this.align:this.thAlign=this.tr.align},computed:{thAlignCpd:function(){var t="";switch(this.thAlign){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break;default:t="center";break}return t}}};e.default=r},"49cb":function(t,e,n){},"4cbf":function(t,e,n){"use strict";n.r(e);var r=n("1c2f"),i=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e["default"]=i.a},"72c5":function(t,e,n){"use strict";n.r(e);var r=n("c180"),i=n("4cbf");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("bb74");var o=n("2877"),a=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},bb74:function(t,e,n){"use strict";var r=n("49cb"),i=n.n(r);i.a},c180:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/t-table/t-th-create-component',
    {
        'components/t-table/t-th-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("72c5"))
        })
    },
    [['components/t-table/t-th-create-component']]
]);                
