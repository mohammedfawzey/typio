(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{407:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("d702d0ca",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n(407)},410:function(t,e,n){var r=n(31)(!1);r.push([t.i,".main-bg[data-v-14146ca8]{background:#191919}.input_disabled[data-v-14146ca8],.input_disabled .v-text-field>.v-input__control>.v-input__slot[data-v-14146ca8],.input_disabled>*[data-v-14146ca8]{cursor:not-allowed!important}.currend-word[data-v-14146ca8]{background:#333}.test-word[data-v-14146ca8]{word-break:break-word}.custom-loader[data-v-14146ca8]{transform:rotate(0deg);-webkit-animation:loader-14146ca8 .625s infinite forwards;animation:loader-14146ca8 .625s infinite forwards}@-webkit-keyframes loader-14146ca8{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes loader-14146ca8{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]),t.exports=r},426:function(t,e,n){"use strict";n.r(e);var r=n(403),o=n(398),c=n(396),l=n(460),d=n(405),h=n(465),f=n(411),x=n(459),m=n(458),T=n(462),v=(n(21),n(55),n(60),n(80),n(72),n(61),n(62),n(6),n(16),n(266),n(44),{data:function(){return{snackbar:!1,snackText:"",text:"person play long program home public open through place need very around the best way to learn mother father training it since go another page day head by good bad since could stand turn off then look for this where show which",testText:"",isRightText:!0,currentInd:0,userText:[],isTypeTextEnd:!1,time:10,timer:1e4,isTyping:!1,isBtnClicked:!1}},mounted:function(){this.shuffleText()},methods:{typing:function(){this.C_currentWord(this.currentInd).includes(this.testText)?this.isRightText=!0:this.isRightText=!1},goToNextWord:function(){0!=this.testText.trim().length&&(this.userText.push(this.testText),this.currentInd++,this.isRightText=!0,this.testText="")},repeatTyping:function(){var t=this;this.isBtnClicked=!0,t.userText=[],t.currentInd=0,t.testText="",t.isTypeTextEnd=!1,t.isTyping=!1,t.time=10,t.shuffleText(),t.$refs.input.focus(),setTimeout((function(){t.isBtnClicked=!1}),625)},setTimer:function(){var t=this,e=setInterval((function(){t.time--,t.time<10&&(t.time="0".concat(t.time))}),1e3);setTimeout((function(){t.isTypeTextEnd=!0,t.snackText="good record ".concat(t.C_wpm," wpm"),clearInterval(e)}),this.timer)},shuffleText:function(){for(var t=this.text.split(" "),i=0;i<t.length;i++){var e=Math.floor(Math.random()*i),n=[t[e],t[i]];t[i]=n[0],t[e]=n[1]}this.text=t.join(" ")}},computed:{C_currentWord:function(){var t=this;return function(e){return t.text.split(" ")[e]}},C_text:function(){return 0!=this.userText.length?this.userText:[]},C_isTypeTextEnd:function(){return this.currentInd==this.text.split(" ").length||this.isTypeTextEnd},C_isTyping:function(){return 0!=this.userText.length||0!=this.testText.length},C_wpm:function(){var t=0,e=this.text.split(" "),n=this.userText;return n.forEach((function(n,r){n==e[r]&&t++})),0!=n.length&&10!=this.time?Number(t*(60/(10-this.time))).toFixed():0}},watch:{C_isTypeTextEnd:function(t){t&&(this.snackbar=!0)},C_isTyping:function(t){t&&this.setTimer()}}}),_=(n(409),n(69)),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e(d.a,[e(m.a,{attrs:{timeout:"3000",top:"",color:"secondary",right:"",transition:"slide-x-reverse-transition"},scopedSlots:t._u([{key:"action",fn:function(n){n.on;var o=n.attrs;return[e(r.a,t._b({attrs:{icon:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[e(f.a,{attrs:{small:""}},[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "),e("span",[t._v(t._s(t.snackText))])]),t._v(" "),e(o.a,{staticClass:"mx-auto",attrs:{"max-width":"800",flat:"",color:"transparent"}},[e(x.a,{attrs:{dense:""}},[e(l.a,{staticClass:"mb-3",attrs:{cols:"12"}},[e(o.a,{staticClass:"mx-auto",attrs:{flat:"",color:"main-bg","max-height":""}},[e(c.a,{staticClass:"type-text pa-8 py-9"},[e("div",{staticClass:"text-h5 white--text d-flex flex-wrap"},t._l(t.text.split(" "),(function(n,r){return e("span",{key:r,staticClass:"test-text pa-1",class:[t.C_text[r]==n&&t.currentInd>=r+1?"success--text text--darken-1":t.currentInd<r+1&&t.currentInd!=r?"white--text":t.currentInd==r?"currend-word":"error--text"]},[t._v(t._s(n))])})),0)])],1)],1),t._v(" "),e(l.a,[e(x.a,{attrs:{dense:""}},[e(l.a,{attrs:{cols:"6"}},[e("div",{class:{input_disabled:t.C_isTypeTextEnd}},[e(T.a,{ref:"input",attrs:{"hide-details":"",outlined:"",color:t.isRightText?"primary":"error",disabled:t.C_isTypeTextEnd},on:{input:t.typing,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:(e.preventDefault(),t.goToNextWord.apply(null,arguments))}},model:{value:t.testText,callback:function(e){t.testText=e},expression:"testText"}})],1)]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e("div",{staticClass:"speed-test main-bg d-flex align-center text-center fill-height"},[e(c.a,{staticClass:"py-2 rounded-lg d-flex align-center justify-center"},[e("h6",[e("span",{staticClass:"text-h5"},[t._v(t._s(t.C_wpm)+" ")]),t._v(" "),e("span",{staticClass:"text-h6 font-weight-light"},[t._v("WPM")])])])],1)]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e("div",{staticClass:"test-timer main-bg fill-height d-flex align-center"},[e(c.a,{staticClass:"py-2 rounded-lg d-flex align-center justify-center"},[e("h6",[e("span",{staticClass:"text-h5"},[t._v("0")]),t._v(" "),e("span",{staticClass:"text-h5"},[t._v(":")]),t._v(" "),e("span",{staticClass:"text-h5"},[t._v(t._s(t.time))])])])],1)]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e(h.a,{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[e(o.a,{staticClass:"fill-height ease-in",attrs:{width:"100%",link:"",flat:"",color:r?"primary":"main-bg"},on:{click:t.repeatTyping}},[e("div",{staticClass:"repeat-test fill-height d-flex align-center"},[e(c.a,{staticClass:"text-center"},[e("span",[e(f.a,{class:{"custom-loader":t.isBtnClicked}},[t._v("mdi-cached")])],1)])],1)])]}}])})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"14146ca8",null);e.default=component.exports},463:function(t,e,n){"use strict";n.r(e);var r=n(402),o=n(404),c={name:"IndexPage",data:function(){return{selectedItem:"",items:["omar","ahmed","ali"]}},methods:{submitSelectedItem:function(){console.log(this.selectedItem)}}},l=n(69),component=Object(l.a)(c,(function(){var t=this._self._c;return t(r.a,[t(o.a,[t("div",{staticClass:"type-form mt-10"},[t("HomeTypingForm")],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeTypingForm:n(426).default})}}]);