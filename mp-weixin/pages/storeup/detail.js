(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/storeup/detail"],{"0266":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,s,a,i){try{var u=t[a](i),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(r,s)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var i=t.apply(e,n);function u(t){a(i,r,s,u,o,"next",t)}function o(t){a(i,r,s,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:3e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=i(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var e=i(r.default.mark((function e(n){var s,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),s=t.getStorageSync("nowTable"),e.next=4,this.$api.session(s);case 4:a=e.sent,this.user=a.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","storeup"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(e){t.setStorageSync("crossTable","storeup"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=i(r.default.mark((function t(){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("storeup",this.id);case 2:e=t.sent,this.detail=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=i(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussstoreup/add-or-update?refid=".concat(this.id))},zan:function(){var e=i(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=i(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.thumbsupnum=parseInt(n.detail.thumbsupnum)+1,t.next=4,n.$api.update("storeup",n.detail);case 4:n.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),cai:function(){var e=i(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=i(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.crazilynum=parseInt(n.detail.crazilynum)+1,t.next=4,n.$api.update("storeup",n.detail);case 4:n.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("storeup",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},"08cd":function(t,e,n){},"68d0":function(t,e,n){"use strict";n.r(e);var r=n("e785"),s=n("711e");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("c15e");var i,u=n("f0c5"),o=Object(u["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=o.exports},"711e":function(t,e,n){"use strict";n.r(e);var r=n("0266"),s=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=s.a},"947e":function(t,e,n){"use strict";(function(t){n("c81d"),n("921b");r(n("66fd"));var e=r(n("68d0"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c15e:function(t,e,n){"use strict";var r=n("08cd"),s=n.n(r);s.a},e785:function(t,e,n){"use strict";var r={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"85df"))},"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"fe80"))}},s=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))}},[["947e","common/runtime","common/vendor"]]]);