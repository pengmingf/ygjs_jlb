(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuser/tuser"],{"0ba6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"3b51":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("f888"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r={data:function(){return{showImg:!0,token:null,list:[],array:[],array2:[.1,.2,.3,.4,.5,.6,.7,.8,.9],allarray:[],multiIndex:[35,2]}},methods:{daka:function(t){e.request({url:"https://ygjs.mfmeat.top/index.php/api/user/didi",data:{token:this.token,tuser_id:t.id,tuser_name:t.name,admin_id:e.getStorageSync("tuser_id")},method:"POST",dataType:"json",success:function(a){if(1==a.data.code)for(var n=0;n<a.data.message.length;n++)t.qiandao=!0;else e.showToast({icon:"none",title:"网络异常"})}})},add:function(){e.navigateTo({url:"../reg/reg"})},delet:function(){e.showToast({title:"不准删除"})},detail:function(t){e.navigateTo({url:"../tuser_detail/tuser_detail?id="+t.id})},before_weight:function(e){var t=e.currentTarget.dataset.id,a=this.allarray[0][e.detail.value[0]]+this.allarray[1][e.detail.value[1]],n=10;this.weight_to(t,a,n),this.list[e.currentTarget.dataset.index].before_sp=a},after_weight:function(e){var t=e.currentTarget.dataset.id,a=this.allarray[0][e.detail.value[0]]+this.allarray[1][e.detail.value[1]],n=11;this.weight_to(t,a,n),this.list[e.currentTarget.dataset.index].after_sp=a},weight_to:function(t,a,n){e.request({url:"https://ygjs.mfmeat.top/index.php/api/user/weightin",data:{token:this.token,tuser_id:t,weight:a,status:n},dataType:"json",method:"POST",success:function(t){1==t.data.code||e.showModal({title:"出错了"})},fail:function(){e.showModal({title:"网络异常，请检查网络"})}})},weight:function(){for(var e=70;e<200;e++)this.array.push(e)}},onLoad:function(){var t=this;this.token=(0,n.default)("allDetailpmf"),e.request({url:"https://ygjs.mfmeat.top/index.php/api/user/alldetail",data:{token:this.token},method:"POST",dataType:"json",success:function(a){if(1==a.data.code)for(var n=0;n<a.data.message.length;n++){var i,r=(i={id:a.data.message[n].Id,name:a.data.message[n].name,phone:a.data.message[n].phone,img:a.data.message[n].image,qiandao:a.data.message[n].qiandao},s(i,"id",a.data.message[n].Id),s(i,"before_sp",a.data.message[n].before_weight),s(i,"after_sp",a.data.message[n].after_weight),s(i,"before_value",a.data.message[n].before_weight-70),s(i,"after_value",a.data.message[n].after_weight-70),i);a.data.message[n].before_weight||(r.before_value=35,r.before_sp=null),a.data.message[n].after_weight||(r.after_value=33,r.after_sp=null),t.list.push(r)}else e.showModal({content:a.data.message,showCancel:!1})}})},onReady:function(){this.weight(),this.allarray=[this.array,this.array2]}};t.default=r}).call(this,a("6e42")["default"])},4641:function(e,t,a){"use strict";(function(e){a("1cbe"),a("921b");n(a("66fd"));var t=n(a("723d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},4967:function(e,t,a){"use strict";a.r(t);var n=a("3b51"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},"723d":function(e,t,a){"use strict";a.r(t);var n=a("0ba6"),i=a("4967");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("9b5a");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},"963a":function(e,t,a){},"9b5a":function(e,t,a){"use strict";var n=a("963a"),i=a.n(n);i.a}},[["4641","common/runtime","common/vendor"]]]);