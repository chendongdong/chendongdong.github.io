webpackJsonp([2],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=(n("uMhA"),n("yh13"),n("p8PI"),{name:"App",components:{loading:function(){return n.e(0).then(n.bind(null,"PGcd"))}},methods:{overscroll:function(t){t.addEventListener("touchstart",function(){var e=t.scrollTop,n=t.scrollHeight,o=e+t.offsetHeight;0===e?t.scrollTop=1:o===n&&(t.scrollTop=e-1)}),t.addEventListener("touchmove",function(e){t.offsetHeight<t.scrollHeight&&(e._isScroller=!0)})}},created:function(){String.prototype.padStart||(String.prototype.padStart=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",n=String(this);if(n.length>=t)return n;0===(e=String(e)).length&&(e=" ");var o=t-n.length,r=Math.ceil(o/e.length);return e.repeat(r).slice(0,o)+n})},mounted:function(){this.overscroll(document.getElementById("app")),document.body.addEventListener("touchmove",function(t){t.preventDefault()}),document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideToolbar")})}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("loading")],1)},staticRenderFns:[]};var a=n("VU/8")(r,i,!1,function(t){n("SIaq")},null,null).exports,c=n("7oBh"),l=n.n(c),u=n("L+BA"),d=n.n(u);o.a.use(d.a,{AlloyFinger:l.a}),n("v5o6").attach(document.body),o.a.config.productionTip=!1;var p=new o.a;new o.a({el:"#app",components:{App:a},data:{Bus:p},template:"<App/>"})},SIaq:function(t,e){},p8PI:function(t,e){},uMhA:function(t,e){},yh13:function(t,e){}},["NHnr"]);