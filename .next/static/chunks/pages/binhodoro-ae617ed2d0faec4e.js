(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58],{8905:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/binhodoro",function(){return s(1052)}])},7476:function(e,t,s){"use strict";var a=s(5893),r=s(7294),i=s(5733);let n=()=>{let[e,t]=(0,r.useState)({latitude:30.618939,longitude:-96.33654,zoom:14}),s={latitude:30.618939,longitude:-96.33654};return(0,a.jsx)("div",{className:"map_wrap",children:(0,a.jsx)("div",{className:"map",children:(0,a.jsx)(i.ZP,{mapStyle:"mapbox://style/mapbox/dark-v9",mapboxApiAccessToken:"pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA",...e,onViewportChange:e=>t(e),children:(0,a.jsx)(i.Jx,{latitude:s.latitude,longitude:s.longitude,style:{width:"0",height:"0",borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderBottom:"20px solid red"}})})})})};t.Z=n},9709:function(e,t,s){"use strict";var a=s(5893),r=s(7294);let i=e=>{let{onPasswordCorrect:t}=e,[s,i]=(0,r.useState)(""),n=e=>{e.preventDefault(),"24863b"===s?t():alert("Incorrect password. Please try again.")};return(0,a.jsxs)("form",{onSubmit:n,style:{textAlign:"center",marginTop:"2em"},children:[(0,a.jsx)("input",{type:"password",value:s,onChange:e=>i(e.target.value),placeholder:"Enter Password"}),(0,a.jsx)("button",{type:"submit",children:"Submit"})]})};t.Z=i},97:function(e,t,s){"use strict";var a=s(5893),r=s(9008),i=s.n(r);let n=e=>{let{pageTitle:t}=e;return(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:t&&"".concat(t," | Binh Do-Cao")})})};t.Z=n},4669:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var a=s(5893),r=s(5675),i=s.n(r),n=s(1664),c=s.n(n),l=s(6e3),o=s.n(l),d=s(7294);let h=()=>(0,a.jsx)("div",{className:"copyright",children:(0,a.jsxs)("p",{children:["\xa9 ",new Date().getFullYear(),(0,a.jsx)("br",{})]})}),u=(e,t)=>{if(e&&t)return e.replace(/\/\d+/,"")===t.replace(/\/\d+/,"")};var m=s(1163),x=s(9709);let v=()=>{let e=(0,m.useRouter)(),[t,s]=(0,d.useState)(!1),[r,n]=(0,d.useState)(!1),[l,v]=(0,d.useState)(""),g=()=>s(!t),j=e=>{n(!0),v(e)},p=()=>{n(!1),e.push(l)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"header",children:(0,a.jsxs)("div",{className:"header-inner",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)(c(),{className:"navbar-brand",href:"/",children:(0,a.jsx)(i(),{width:80,height:28,src:"/img/logo/dark.png",alt:"brand"})})}),(0,a.jsx)("div",{className:"my_trigger",onClick:g,children:(0,a.jsx)("div",{className:t?"hamburger hamburger--collapse-r is-active":"hamburger",children:(0,a.jsx)("div",{className:"hamburger-box",children:(0,a.jsx)("div",{className:"hamburger-inner"})})})})]})}),(0,a.jsx)("div",{className:t?"leftpart active":"leftpart",children:(0,a.jsxs)("div",{className:"leftpart_inner",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)(c(),{className:"navbar-brand",href:"/",children:(0,a.jsx)(i(),{width:80,height:28,src:"/img/logo/dark.png",alt:"brand"})})}),(0,a.jsx)("div",{className:"menu",children:(0,a.jsx)("ul",{children:o().map(t=>(0,a.jsx)("li",{onClick:g,children:t.isLocked?(0,a.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),j(t.routePath)},className:"".concat(u(t.routePath,e.asPath)?"active ":""),children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i(),{width:15,height:15,className:"svg",src:t.icon,alt:"homerun"}),(0,a.jsx)("span",{className:"menu_content",children:t.menuName})]})}):(0,a.jsxs)(c(),{className:"".concat(u(t.routePath,e.asPath)?"active ":""),href:"/"===t.routePath?"/":"".concat(t.routePath,"/"),children:[(0,a.jsx)(i(),{width:15,height:15,className:"svg",src:t.icon,alt:"homerun"}),(0,a.jsx)("span",{className:"menu_content",children:t.menuName})]})},t.id))})}),r&&(0,a.jsx)(x.Z,{onPasswordCorrect:p}),(0,a.jsx)(h,{})]})})]})};var g=v},6e3:function(e){"use strict";e.exports=[{id:1,icon:"/img/svg/home-run.svg",menuName:"Home",routePath:"/",isLocked:!1},{id:2,icon:"/img/svg/avatar.svg",menuName:"About",routePath:"/about",isLocked:!1},{id:3,icon:"/img/svg/setting.svg",menuName:"Programs",routePath:"/service",isLocked:!0},{id:4,icon:"/img/svg/briefcase.svg",menuName:"Portfolio",routePath:"/portfolio",isLocked:!1},{id:6,icon:"/img/svg/mail.svg",menuName:"Contact",routePath:"/contact",isLocked:!1}]},1052:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=s(5893),r=s(97);s(5247);var i=s(5678);s(7134);var n=s(7294);s(7476);let c=()=>{let[e,t]=(0,n.useState)(1500),[s,r]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let a;return s&&e>0?a=setInterval(()=>{t(e=>e-1)},1e3):0===e&&(clearInterval(a),i.Am.success("Pomodoro completed!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})),()=>{clearInterval(a)}},[s,e]);let c=()=>{r(!0)},l=()=>{r(!1)},o=()=>{t(1500),r(!1)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"tokyo_tm_contact",children:[(0,a.jsx)("div",{className:"tokyo_tm_title",children:(0,a.jsx)("div",{className:"title_flex",children:(0,a.jsxs)("div",{className:"left",children:[(0,a.jsx)("span",{children:"Binhodoro"}),(0,a.jsx)("h3",{children:"Be productive Davis."})]})})}),(0,a.jsxs)("div",{className:"pomodoro-timer",children:[(0,a.jsx)("div",{className:"timer-display",children:(0,a.jsx)("span",{children:"".concat(Math.floor(e/60).toString().padStart(2,"0"),":").concat((e%60).toString().padStart(2,"0"))})}),(0,a.jsxs)("div",{className:"timer-buttons",children:[s?(0,a.jsx)("button",{onClick:l,children:"Stop"}):(0,a.jsx)("button",{onClick:c,children:"Start"}),(0,a.jsx)("button",{onClick:o,children:"Reset"})]})]})]})})})};var l=s(4669);let o=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{pageTitle:"binhodoro"}),(0,a.jsx)(l.Z,{}),(0,a.jsx)("div",{className:"rightpart",children:(0,a.jsx)("div",{className:"rightpart_in",children:(0,a.jsx)("div",{className:"tokyo_tm_section",children:(0,a.jsx)("div",{"data-aos":"fade-right","data-aos-duration":"1200",children:(0,a.jsx)(c,{})})})})})]});var d=o}},function(e){e.O(0,[634,247,11,789,774,888,179],function(){return e(e.s=8905)}),_N_E=e.O()}]);