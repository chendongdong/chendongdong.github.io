webpackJsonp([2],{"7Gu/":function(e,t,i){e.exports=i.p+"static/img/bg24.3d25478.png"},"9bRQ":function(e,t,i){"use strict";t.a={getAngle:function(e,t){return 180*Math.atan2(t,e)/Math.PI},getDirection:function(e,t,i,n){var a=i-e,s=n-t,r=0;if(Math.abs(a)<2&&Math.abs(s)<2)return r;var o=this.getAngle(a,s);return o>=-135&&o<=-45?r=1:o>45&&o<135?r=2:o>=135&&o<=180||o>=-180&&o<-135?r=3:o>=-45&&o<=45&&(r=4),r}}},E1Sg:function(e,t,i){e.exports=i.p+"static/img/frame_border2.3d89f9d.png"},E2H7:function(e,t,i){e.exports=i.p+"static/media/frame4.3de1aa2.mp4"},EekA:function(e,t,i){e.exports=i.p+"static/img/longPressBtn4.df25648.png"},"G+CJ":function(e,t,i){e.exports=i.p+"static/media/frame2.0303c54.mp4"},GN3G:function(e,t,i){e.exports=i.p+"static/media/animation2.edafd81.mp4"},H1v6:function(e,t,i){e.exports=i.p+"static/media/frame3.a61d18f.mp4"},Ju8T:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),s=i("NYxO"),r=i("2sLL"),o=i("ABCa"),c=i("9bRQ"),g=(r.a,o.a,a()({},Object(s.b)(["sidebar","language"]),{swiperStyle:function(){return{left:"-"+this.index+"00%"}}}),{components:{XButton:r.a,XHeader:o.a},data:function(){return{canvasDOM:{width:0,height:0},longVideoDOM:null,ctx:null,dynamicSrc:["","","",""],swiperMarkX:null,touchStartPoint:{clientX:null,clientY:null},index:0,isSwipering:!1,isCanvasShow:!1,intervalTimer:null,timeoutTimer:null,canvasPicArr:[],frameNum:30,upendSpeed:2,swiperCardList:[{height:50.7,videoTop:8,borderTop:9.3,borderHeight:76.3,bgUrl:i("Nzh7"),borderImgSrc:i("O/0A"),shortVideoSrc:i("n54Z"),longPressSrc:i("jRgP"),longVideoSrc:i("Nzxm"),isSatisfied:!1},{height:44.1,videoTop:9.7,borderTop:10.8,borderHeight:74.7,bgUrl:i("7Gu/"),borderImgSrc:i("E1Sg"),shortVideoSrc:i("G+CJ"),longPressSrc:i("aPFU"),longVideoSrc:i("GN3G"),isSatisfied:!1},{height:30.5,videoTop:8.9,borderTop:18.6,borderHeight:67,bgUrl:i("Nzh7"),borderImgSrc:i("ohzi"),shortVideoSrc:i("H1v6"),longPressSrc:i("oj/A"),longVideoSrc:i("ToTH"),isSatisfied:!1},{height:49,videoTop:14,borderTop:3.5,borderHeight:82,bgUrl:i("7Gu/"),borderImgSrc:i("igA9"),shortVideoSrc:i("E2H7"),longPressSrc:i("EekA"),longVideoSrc:i("wcqD"),isSatisfied:!1}],longTouchRange:{xRange:[.162,.676],yRange:[.686,.169]},leftArrowRange:{xRange:[.016,.123],yRange:[.374,.088]},rightArrowRange:{xRange:[.861,.123],yRange:[.374,.088]},downArrowRange:{xRange:[.469,.063],yRange:[.899,.016]},startx:null,starty:null,endx:null,endy:null}},computed:a()({},Object(s.b)(["sidebar","language"]),{swiperStyle:function(){return{left:"-"+this.index+"00%"}}}),methods:{touchStart:function(e){console.log("touchStart---"),this.startx=e.touches[0].pageX,this.starty=e.touches[0].pageY},touchEnd:function(e){switch(console.log("touchEnd---"),this.endx=e.changedTouches[0].pageX,this.endy=e.changedTouches[0].pageY,c.a.getDirection(this.startx,this.starty,this.endx,this.endy)){case 0:console.log("未滑动！");break;case 1:console.log("向上！"),this.$router.push({path:"/swiper-next"});break;case 2:console.log("向下！");break;case 3:console.log("向左！");break;case 4:console.log("向右！")}},validate:function(e,t,i,n,a,s){var r=e/this.canvasDOM.width,o=t/this.canvasDOM.height;return r>=i&&r<=n&&o>=a&&o<=s},tapArrow:function(e){for(var t={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY},i=[this.leftArrowRange,this.rightArrowRange,this.downArrowRange],n=void 0,a=void 0,s=void 0,r=void 0,o=null,c=0;c<3;c++)if(n=i[c].xRange[0],a=i[c].xRange[0]+i[c].xRange[1],s=i[c].yRange[0],r=i[c].yRange[0]+i[c].yRange[1],this.validate(t.x,t.y,n,a,s,r)){o=c;break}switch(o){case 0:0!==this.index&&(console.log(this.index),this.setIndex(this.index-1));break;case 1:3!==this.index&&this.setIndex(this.index+1);break;case 2:console.log("tap 点击了"),this.$router.push({path:"/swiper-next"})}},swiper:function(e){switch(e.direction){case"Left":3!==this.index&&this.setIndex(this.index+1);break;case"Right":0!==this.index&&this.setIndex(this.index-1)}},longTap:function(e){var t=this,i={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY},n=this.longTouchRange.xRange[0],a=this.longTouchRange.xRange[0]+this.longTouchRange.xRange[1],s=this.longTouchRange.yRange[0],r=this.longTouchRange.yRange[0]+this.longTouchRange.yRange[1];if(this.validate(i.x,i.y,n,a,s,r)){this.canvasPicArr=[],this.timeoutTimer=setTimeout(function(){null!==t.intervalTimer&&(clearInterval(t.intervalTimer),t.intervalTimer=null)},1e3*this.longVideoDOM[this.index].duration),this.longVideoDOM[this.index].play(),this.ctx.drawImage(this.longVideoDOM[this.index],0,0,this.canvasDOM.width,this.canvasDOM.height),this.isCanvasShow=!0;var o=void 0,c=0;this.intervalTimer=setInterval(function(){t.ctx.drawImage(t.longVideoDOM[t.index],0,0,t.canvasDOM.width,t.canvasDOM.height),c%t.upendSpeed==0&&((o=new Image).src=t.$refs.canvas.toDataURL("image/png"),t.canvasPicArr[c/t.upendSpeed]=o),c++},1e3/this.frameNum)}},touchend:function(){var e=this;if(this.isCanvasShow){clearInterval(this.intervalTimer),this.longVideoDOM[this.index].pause(),this.longVideoDOM[this.index].currentTime>=2&&(this.swiperCardList[this.index].isSatisfied=!0);var t=new Image;this.intervalTimer=setInterval(function(){0===e.canvasPicArr.length?(clearInterval(e.intervalTimer),e.intervalTimer=null,e.isCanvasShow=!1,e.longVideoDOM[e.index].currentTime=0):(t=e.canvasPicArr.pop(),e.ctx.drawImage(t,0,0,e.canvasDOM.width,e.canvasDOM.height))},1e3/(this.frameNum*this.upendSpeed))}},setIndex:function(e){var t=this;this.index=e,this.isSwipering=!0,null!==this.timeoutTimer&&(clearTimeout(this.timeoutTimer),this.timeoutTimer=null),this.timeoutTimer=setTimeout(function(){t.isSwipering=!1,clearTimeout(t.timeoutTimer),t.timeoutTimer=null,""===t.dynamicSrc[t.index]&&(t.dynamicSrc[t.index]=t.swiperCardList[t.index].longVideoSrc)},300)}},mounted:function(){var e=document.getElementsByClassName("swiper-img")[0];this.longVideoDOM=document.getElementsByClassName("big-video"),this.canvasDOM.width=e.getBoundingClientRect().width/4,this.canvasDOM.height=e.getBoundingClientRect().height,this.ctx=this.$refs.canvas.getContext("2d"),this.dynamicSrc[0]=i("Nzxm")}}),h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-img",style:e.swiperStyle},[e._l(e.swiperCardList,function(t,i){return n("div",{staticClass:"swiper-card",style:{backgroundImage:"url("+t.bgUrl+")"}},[n("div",{staticClass:"container",style:{height:t.borderHeight+"vh",top:t.borderTop+"vh",backgroundImage:"url("+t.borderImgSrc+")"}},[n("video",{style:{height:t.height+"vh",top:t.videoTop+"vh"},attrs:{src:t.shortVideoSrc,autoplay:"",loop:""}}),e._v(" "),n("img",{attrs:{src:t.longPressSrc,alt:"长按查看"}})]),e._v(" "),n("video",{staticClass:"big-video",attrs:{src:e.dynamicSrc[i],preload:"auto"}})])}),e._v(" "),0!==e.index?n("img",{class:["left","btn",{isTransparent:e.isSwipering}],attrs:{src:i("fLW0"),alt:"右滑"}}):e._e(),e._v(" "),3!==e.index?n("img",{class:["right","btn",{isTransparent:e.isSwipering}],attrs:{src:i("yHrG"),alt:"左滑"}}):e._e(),e._v(" "),n("img",{class:["click","btn",{isTransparent:!1}],attrs:{src:i("hFx7"),alt:"查看详细"}}),e._v(" "),n("canvas",{directives:[{name:"finger",rawName:"v-finger:tap",value:e.tapArrow,expression:"tapArrow",arg:"tap"},{name:"finger",rawName:"v-finger:swipe",value:e.swiper,expression:"swiper",arg:"swipe"},{name:"finger",rawName:"v-finger:long-tap",value:e.longTap,expression:"longTap",arg:"long-tap"},{name:"finger",rawName:"v-finger:touch-end",value:e.touchend,expression:"touchend",arg:"touch-end"}],ref:"canvas",style:{opacity:e.isCanvasShow?1:0},attrs:{width:e.canvasDOM.width,height:e.canvasDOM.height},on:{touchstart:e.touchStart,touchend:e.touchEnd}})],2)},staticRenderFns:[]};var d=i("VU/8")(g,h,!1,function(e){i("p1d/")},null,null);t.default=d.exports},Nzh7:function(e,t,i){e.exports=i.p+"static/img/bg13.5838ad7.png"},Nzxm:function(e,t,i){e.exports=i.p+"static/media/animation1.2340466.mp4"},"O/0A":function(e,t,i){e.exports=i.p+"static/img/frame_border1.9802c7a.png"},ToTH:function(e,t,i){e.exports=i.p+"static/media/animation3.05943df.mp4"},aPFU:function(e,t,i){e.exports=i.p+"static/img/longPressBtn2.e51e691.png"},fLW0:function(e,t,i){e.exports=i.p+"static/img/left_btn.d8c1e74.png"},hFx7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAmCAYAAABqDa0qAAAAAXNSR0IArs4c6QAAA15JREFUaAXlmjtvFDEURpkIJMQjSEAVngUVAjpeggoooImUX0oJBdAhWNEBoqLIQkgFFKAgJBDL+VbX0ayZ2fE69jxYSzcej+07954Z+9vNbLGPMplMjlBdw05jf7Bt7FVRFN+pl7bA5SjJX8XWsBVsCxvBZaewzg1OHMTK5ReNpwz6UD65LMdwOUuud7EDXs4/aT8UuDscXPA6XXPCwXPgvXMnlqGGyUXyvIUVNfm+30+HHsO6oom3cbRKrUdUIP/bQp7K9zp2pSHJNYHT2m0qcnQMx1q6v5sGD7Gf3MRCS/NcQPwrbsMLGDt1uM4FDoUMHtIYy2mdmEOgKbUtgRth2vBCykkGbXCh4yGDhzDGcpE4KreQIlaj6ebH5BM07mOHQ2YyRor7hGX7MXB8L4eR9xkCu4f5ylkX7w4dj8n7y65q4ERLUPBCyQ9accm3STl9eJ8N2g917IJTA2eLbJCaovIaG4zikmOock6Tsz9j6hlhnAGnQeb4JoeX1A4sm4x71nfFtQdDn1vPY6HlLQNfkNvMR7F/wDlvXGRPj7Lz05eafJJuRbXglDAXi9k8H3F3vvYFmOWhTwEPsGTiNxecXXTQiht586fKqfzrSiM4TUz9mNcFk/o8cWfbboLAGbzBKC7AlFfId87yvRrTmFHOcqd/HAxOEy2gXisuMeoGJ1FOH1a5vRA4NzHnEnDXiKmJK6lyzoshCpwcEmSvFJd4kitnFnAGrxeKG3kTG5UzGziD19ryqEoEaNmUs+p67lz0UnUOVBN8jOK+YepL/6tM2e+8Y66p2G9gl+eN8/rGtIOV05s700wCTh4jE9lk6sLfcbu4UcqxXJKBc05JKuvSwX+nW4PLMzk4OSa5LIqL31aV00GqqrOAM3hJk8x1M6qghJzLBs7gJVlWQMu6/ENA+WOygjN40YprwXamnD6scjs7OIOn68QA0PTQV3Yau6ePOHIQWloB54KJWHJualPd+oujVsEp+4hNvglaJ68qWwdn8BZV3Dp4es/Zyb/qOwFn8BZVXB/ezHtOvzN3uzNwBi9GcTV1jCX5zilnMaVTcAqYPU8xLKK4rSnnPKCdg3PBBShu68rpYquqewNOwc1R3E6UswqYO9crcAZvlVo/WD5lQX6i1g+5v1m7F9VfZyx7qGsbCm4AAAAASUVORK5CYII="},igA9:function(e,t,i){e.exports=i.p+"static/img/frame_border4.07972b0.png"},jRgP:function(e,t,i){e.exports=i.p+"static/img/longPressBtn1.ab03794.png"},n54Z:function(e,t,i){e.exports=i.p+"static/media/frame1.41e5f9e.mp4"},ohzi:function(e,t,i){e.exports=i.p+"static/img/frame_border3.d46434c.png"},"oj/A":function(e,t,i){e.exports=i.p+"static/img/longPressBtn3.5a48261.png"},"p1d/":function(e,t){},wcqD:function(e,t,i){e.exports=i.p+"static/media/animation4.96d072f.mp4"},yHrG:function(e,t,i){e.exports=i.p+"static/img/right_btn.31d154f.png"}});
//# sourceMappingURL=2.cb05b92ebd87423e93bb.js.map