(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"02a5":function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");u(n("66fd"));var e=u(n("e6a7"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2e17":function(t,e,n){"use strict";var u=n("481f"),a=n.n(u);a.a},3637:function(t,e,n){"use strict";n.r(e);var u=n("ab57"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},"481f":function(t,e,n){},ab57:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{is_login:!1,tuser:null,tuser_id:null}},onLoad:function(){t.getStorageSync("tuser_id")||t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){t.reLaunch({url:"../login/login"})}}),this.tuser_id=t.getStorageSync("tuser_id"),this.tuser=t.getStorageSync("tuser"),console.log(n(this.tuser," at pages\\main\\main.vue:58")),this.is_login=!0,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500)},methods:{to:function(e){"weight"==e&&t.navigateTo({url:"../tuser_weight/tuser_weight"}),"tuser"==e?t.navigateTo({url:"../tuser/tuser"}):e&&t.navigateTo({url:"../"+e+"/"+e})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},ce90:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},e6a7:function(t,e,n){"use strict";n.r(e);var u=n("ce90"),a=n("3637");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("2e17");var r=n("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports}},[["02a5","common/runtime","common/vendor"]]]);