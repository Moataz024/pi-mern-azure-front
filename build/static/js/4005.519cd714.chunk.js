"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[4005],{35961:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(25984),s=r(32430),l=r(13248),o=r(86340),a=r(418),i=r(39442),c=r(27565),d=r(23163),u=r.n(d),m=r(79419),x=r(51047),h=r(73292),b=r(11030);var j=r(20477),f=r(27929);const g=()=>{const[e,t]=(0,c.useState)(!1),{login:r,error:n,isLoading:d}=(()=>{var e,t;const[r,n]=(0,c.useState)(""),[s,l]=(0,c.useState)(null),{dispatch:o}=(0,m.Z)(),a=(0,b.Zp)(),i=(null===(e=(0,b.zy)().state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)||"/";return{login:async(e,t)=>{l(!0),n("");const r=await fetch("http://localhost:3000/User/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}),s=await r.json();if(s.error&&(n(s.error),l(!1),x.oR.error(s.error)),!s.error){localStorage.setItem("token",s.accessToken);const e=(0,h.s)(s.accessToken.toString()).user;e.isBlocked||(o({type:"LOGIN",payload:e}),l(!1),a(i,{replace:!0})),e.isBlocked&&(n("Your account has been suspended by an admin"),l(!1),x.oR.error("Your account has been suspended by an admin"))}},isLoading:s,error:r}})(),{register:g,handleSubmit:p,formState:{errors:y},control:v}=(0,i.mN)({defaultValues:{email:"",password:"",rememberMe:!1}}),k=async e=>{await r(e.email,e.password)};(0,c.useEffect)((()=>{const e=e=>{"Enter"===e.key&&(e.preventDefault(),p(k)())};return document.querySelector("form").addEventListener("keypress",e),()=>{document.querySelector("form").removeEventListener("keypress",e)}}),[p,k]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Account login"}),(0,f.jsxs)("form",{onSubmit:p(k),children:[(0,f.jsxs)("div",{className:"d-flex flex-column g-10",style:{margin:"20px 0 30px"},children:[(0,f.jsxs)("div",{className:"d-flex flex-column g-20",children:[(0,f.jsx)("input",{className:u()("field",{"field--error":y.email}),type:"text",placeholder:"Email",...g("email",{required:!0,pattern:/^\S+@\S+$/i})}),(0,f.jsx)(i.xI,{control:v,name:"password",rules:{required:!0},render:e=>{let{field:{ref:t,onChange:r,value:n},fieldState:{error:l}}=e;return(0,f.jsx)(s.A,{className:u()("field",{"field--error":l}),value:n,onChange:e=>r(e.target.value),placeholder:"Password",innerRef:t})}})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center g-10",children:[(0,f.jsx)(i.xI,{control:v,name:"rememberMe",render:e=>{let{field:{ref:t,onChange:r,value:n}}=e;return(0,f.jsx)(l.A,{id:"rememberMe",checked:n,onChange:e=>r(e.target.checked),innerRef:t})}}),(0,f.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})]})]}),n&&(0,f.jsx)("div",{style:{color:"red",fontWeight:"bold",textAlign:"center",margin:"20px"},children:n}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,f.jsx)("button",{style:{backgroundColor:"#FDCA40",color:"black",width:"40%"},disabled:d,className:"btn btn--sm",type:"submit",children:"Login"}),(0,f.jsx)("button",{disabled:d,className:"text-button text-button--sm",onClick:e=>{e.preventDefault(),t(!0)},children:"Reset password"})]})]}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("hr",{}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("form",{className:"d-flex justify-content-center align-items-end",action:"http://localhost:3000/auth/google",children:(0,f.jsxs)("button",{className:"btn justify-content-between",children:[(0,f.jsx)("p",{children:"Sign in with"})," ",(0,f.jsx)("span",{children:(0,f.jsx)(a.F4b,{})})]})}),(0,f.jsx)("br",{}),(0,f.jsx)("div",{style:{justifyContent:"center",textAlign:"center",alignContent:"center"},children:(0,f.jsx)(j.k2,{to:"/sign-up",children:(0,f.jsxs)("button",{disabled:d,className:"text-button text-button--sm",children:["Don't have an account?",(0,f.jsx)("b",{children:" Register"})]})})}),(0,f.jsx)(o.A,{open:e,onClose:()=>t(!1)})]})]})},p=()=>(0,f.jsx)(n.A,{title:"Login",children:(0,f.jsx)(g,{})})}}]);
//# sourceMappingURL=4005.519cd714.chunk.js.map