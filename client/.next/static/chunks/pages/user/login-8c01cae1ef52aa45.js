(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{2536:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(9521).ZP.div.withConfig({displayName:"loading__LoadingIcon",componentId:"sc-f5tguq-0"})(["width:200px;height:200px;background-image:url('/loading.gif');"]),e=c(208),f=c(5893),g=function(){return(0,f.jsx)(e.g1,{children:(0,f.jsx)(e.WB,{children:(0,f.jsxs)(e.hz,{children:[(0,f.jsx)(d,{}),(0,f.jsx)(e.jb,{children:"로딩중"})]})})})}},254:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return y}});var d=c(29),e=c(2640),f=c(7794),g=c.n(f),h=c(1664),i=c.n(h),j=c(7294),k=c(1163),l=c.n(k),m=c(461),n=c(1791),o=c(5485),p=c(2536),q=c(3023),r=c(9521),s=r.ZP.form.withConfig({displayName:"login__LoginFrm",componentId:"sc-q0kkgw-0"})(["width:360px;height:252px;display:flex;flex-direction:column;justify-content:space-between;margin:0 auto;align-items:center;padding:0 12px;box-sizing:border-box;& > ul{width:100%;& > li{margin-bottom:15px;& > input{display:block;width:100%;height:40px;border-radius:8px;border:2px solid #a6a19e;box-sizing:border-box;padding:15px;}& > input:focus{outline:black;border:1px solid dodgerblue;}}}"]),t=r.ZP.button.withConfig({displayName:"login__LoginBtn",componentId:"sc-q0kkgw-1"})(["width:100%;height:40px;margin-bottom:15px;background-color:#007f94;border:none;border-radius:8px;color:white;font-size:16px;cursor:pointer;"]),u=r.ZP.div.withConfig({displayName:"login__Border",componentId:"sc-q0kkgw-2"})(["width:100%;height:1px;background-color:#a6a19e;margin-bottom:15px;"]),v=r.ZP.a.withConfig({displayName:"login__SignUpBtn",componentId:"sc-q0kkgw-3"})(["display:block;width:100%;height:40px;border:1px solid #a6a19e;border-radius:8px;color:#a6a19e;text-align:center;box-sizing:border-box;line-height:40px;font-size:16px;cursor:pointer;"]),w=c(5893),x=function(){var a,b=(0,j.useState)(!1),c=b[0],f=b[1],h=(0,j.useState)(""),k=h[0],r=h[1],x=(0,j.useState)(""),y=x[0],z=x[1],A=(0,m.Z)(),B=(0,e.Z)(A,2),C=B[1],D=(0,j.useContext)(n.Global),E=D.isLogin,F=D.setIsLogin,G=D.setUserToken,H=(a=(0,d.Z)(g().mark(function a(b){var c,d,e,h;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b.preventDefault(),f(!0),a.prev=2,a.next=5,q.Z.post("/user/login",{userId:k,userPw:y});case 5:if(e=(d=(c=a.sent).data).token,!0!==(h=d.loginCheck)){a.next=14;break}if(!(void 0===G|| void 0===F)){a.next=10;break}return a.abrupt("return");case 10:G(e),C("DID_Token",e),a.next=15;break;case 14:!1===h&&alert("회원정보가 다릅니다.");case 15:f(!1),a.next=22;break;case 18:a.prev=18,a.t0=a.catch(2),console.log(a.t0),console.log("로그인 에러");case 22:case"end":return a.stop()}},a,null,[[2,18]])})),function(b){return a.apply(this,arguments)}),I=function(a){r(a.target.value)},J=function(a){z(a.target.value)};return(0,j.useEffect)(function(){!1!==E&&l().push("/")},[E]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{style:{height:"calc(100vh - 100px - 170px)",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"},children:[(0,w.jsxs)(o.wW,{children:[(0,w.jsx)(o.zg,{imageUrl:"/login_title_icon.png"}),(0,w.jsx)(o.Dx,{children:"Login to DID"})]}),(0,w.jsx)(s,{onSubmit:H,action:"http://localhost:3000/authorizor/auth",method:"POST",children:(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)("input",{onChange:I,name:"userId",type:"text",placeholder:"Id",autoComplete:"off"})}),(0,w.jsx)("li",{children:(0,w.jsx)("input",{onChange:J,name:"userPw",type:"password",placeholder:"Password",autoComplete:"off"})}),(0,w.jsx)(t,{type:"submit",children:"Log in"}),(0,w.jsx)(u,{}),(0,w.jsx)(i(),{href:"/user/regist",children:(0,w.jsx)(v,{children:"Sign up"})})]})})]}),c&&(0,w.jsx)(p.Z,{})]})},y=x},208:function(a,b,c){"use strict";c.d(b,{FF:function(){return l},OQ:function(){return g},SP:function(){return j},WB:function(){return f},Xp:function(){return m},g1:function(){return e},hz:function(){return h},jb:function(){return i},vq:function(){return k}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"Modal__ModalBg",componentId:"sc-1ucqyig-0"})(["position:absolute;top:0;left:0;width:100vw;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;"]),f=d.ZP.div.withConfig({displayName:"Modal__ModalAlert",componentId:"sc-1ucqyig-1"})(["width:360px;height:220px;background-color:#fff;border-radius:8px;padding:40px;display:flex;flex-direction:column;justify-content:space-between;"]),g=d.ZP.div.withConfig({displayName:"Modal__ModalIcon",componentId:"sc-1ucqyig-2"})(["width:44px;height:44px;background-image:url('/alert_icon.png');background-size:44px;margin-bottom:15px;"]),h=d.ZP.div.withConfig({displayName:"Modal__ModalContent",componentId:"sc-1ucqyig-3"})(["display:flex;flex-direction:column;align-items:center;"]),i=d.ZP.div.withConfig({displayName:"Modal__ModalDesc",componentId:"sc-1ucqyig-4"})(["font-size:25px;color:black;"]),j=d.ZP.input.withConfig({displayName:"Modal__ModalInput",componentId:"sc-1ucqyig-5"})(["width:230px;height:20px;border:2px solid #a6a19e;border-radius:5px;font-size:16px;margin-top:10px;padding:7px;:focus{border:2px solid dodgerblue;outline:none;}"]),k=d.ZP.div.withConfig({displayName:"Modal__ModalDiv",componentId:"sc-1ucqyig-6"})(["margin-top:10px;color:red;"]),l=d.ZP.div.withConfig({displayName:"Modal__ModalBtnCon",componentId:"sc-1ucqyig-7"})(["display:flex;justify-content:space-between;width:100%;height:48px;"]),m=d.ZP.button.withConfig({displayName:"Modal__ModalBtn",componentId:"sc-1ucqyig-8"})(["width:48%;font-size:20px;border-radius:4px;cursor:pointer;border:",";background-color:",";color:",";"],function(a){return a.border||"rbga(0, 0, 0, 0.6)"},function(a){return a.bgc||"white"},function(a){return a.color||"rbga(0, 0, 0, 0.6)"})},5485:function(a,b,c){"use strict";c.d(b,{Dx:function(){return g},wW:function(){return e},zg:function(){return f}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"title__ContentTitle",componentId:"sc-1fjmapq-0"})(["width:210px;height:96px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:45px;"]),f=d.ZP.div.withConfig({displayName:"title__TitleIcon",componentId:"sc-1fjmapq-1"})(["width:50px;height:50px;background-image:url(",");background-size:50px;"],function(a){return a.imageUrl}),g=d.ZP.p.withConfig({displayName:"title__Title",componentId:"sc-1fjmapq-2"})(["font-size:30px;color:white;"])},6650:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/login",function(){return c(254)}])}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=6650)}),_N_E=a.O()}])