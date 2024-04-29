"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[2864],{32864:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(27937),s=n(2643),o=n(27565),r=n(96529),l=n(780),i=n(95586),c=n(51047),d=n(39442),h=n(91742),u=n(65744),x=n(47514),m=n(21696),b=n(98490),y=n(75633),j=n(79419),p=n(99236),f=n(23163),g=n.n(f),S=n(26788),w=n(27929);const k=()=>{const[e,t]=(0,o.useState)(""),[n,a]=(0,o.useState)(""),[s,f]=(0,o.useState)([]),[k,C]=(0,o.useState)(0),{width:T}=(0,l.A)(),[v,N]=(0,o.useState)(0),[D,I]=(0,o.useState)(0),[A,F]=(0,o.useState)(0),[M,E]=(0,o.useState)(0),[O,_]=(0,o.useState)(0),[z,U]=(0,o.useState)(0),[Y,G]=(0,o.useState)(0),{USER:L}=(0,j.Z)(),[P,W]=(0,o.useState)(""),[V,B]=(0,o.useState)(""),[R,H]=(0,o.useState)(null),[J,Z]=(0,o.useState)(null),{handleSubmit:q}=(0,d.mN)(),[K,Q]=(0,o.useState)(!0),[X,$]=(0,o.useState)(!1);(0,o.useEffect)((()=>{L&&L.email&&(async()=>{try{const e=(await p.A.get("http://localhost:3000/User/getbyemail?email=".concat(L.email))).data._id;console.log(e);const t=await p.A.get("http://localhost:3000/Tournament/getByUserId/".concat(e)),n=t.data&&t.data.tournaments?t.data.tournaments:[];console.log(n),f(n)}catch(e){console.error("Error fetching tournaments:",e.message)}})()}),[L]),console.log("email user",L.email);return(0,w.jsx)("form",{className:"d-flex flex-column g-20",onSubmit:q((e=>{c.oR.info("Your details have been successfully saved! Please proceed with the payment process.")})),children:(0,w.jsx)(r.A,{className:"card d-flex flex-column card-padded",children:(0,w.jsxs)("div",{className:"d-flex flex-column justify-content-between flex-1",children:[(0,w.jsx)(h.A,{style:{width:"100%",backgroundColor:"#FDCA40",color:"black",justifyContent:"center"},children:(0,w.jsx)("h3",{style:{paddingTop:"10px",marginLeft:"270px",color:"black"},children:"Payment with Stripe"})}),(0,w.jsx)("br",{}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("label",{children:["User Name",(0,w.jsx)("input",{className:g()("field text-700"),type:"text",placeholder:"Name",disabled:!0,value:L.fullname,onChange:e=>W(e.target.value)})]}),(0,w.jsxs)("label",{children:["User Email",(0,w.jsx)("input",{className:g()("field text-700"),type:"text",placeholder:"Name",disabled:!0,value:L.email,onChange:e=>W(e.target.value)})]}),(0,w.jsx)("br",{}),(0,w.jsx)("hr",{style:{margin:"20px 0"}}),e?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("label",{children:["Tournament Title:",(0,w.jsx)("input",{className:g()("field text-700"),type:"text",value:n,readOnly:!0})]}),(0,w.jsxs)("label",{children:["Tournament Start Data:",(0,w.jsx)("input",{className:g()("field text-700"),type:"text",value:R&&"".concat(R.day,"/").concat(R.month,"/").concat(R.year),readOnly:!0})]}),(0,w.jsxs)("label",{children:["Tournament End Data:",(0,w.jsx)("input",{className:g()("field text-700"),type:"text",value:J&&"".concat(J.day,"/").concat(J.month,"/").concat(J.year),readOnly:!0})]}),(0,w.jsxs)("label",{children:["Tournament Duration:",(0,w.jsx)("input",{className:g()("field text-700"),type:"text",value:v,readOnly:!0})]}),(0,w.jsx)("button",{className:"btn",type:"button",style:{marginLeft:"150px",width:"60%",backgroundColor:"red",color:"white"},onClick:()=>{t(""),a(""),I(0),F(0),E(0),_(0),U(0),G(0),H(null),Z(null),N(0),$(!1)},children:"Cancel Selection"})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("label",{children:["Tournament Title:",(0,w.jsx)(i.A,{className:"custom-select",options:(s||[]).map((e=>({label:e.title,value:e._id}))),value:{label:e,value:e},onChange:e=>{(e=>{t(e);const n=s.find((t=>t._id===e));if(n){a(n.title),I(n.startDay),F(n.startMonth),E(n.startYear),_(n.endDay),U(n.endMonth),G(n.endYear);const e=new Date(n.startYear,n.startMonth-1,n.startDay),t=new Date(n.endYear,n.endMonth-1,n.endDay);H({day:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()}),Z({day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear()});const s=Math.ceil((t-e)/864e5);N(s)}})(e.value),$(!0)}})]}),X?null:(0,w.jsx)("p",{style:{color:"red",marginLeft:"10px"},children:"Please select a tournament."})]}),(0,w.jsx)("br",{}),(0,w.jsx)("br",{})]}),(0,w.jsx)("button",{className:"btn",type:"submit",style:{marginLeft:"150px",width:"60%",backgroundColor:"#FDCA40",color:"black"},onClick:async()=>{try{const t=(await p.A.get("http://localhost:3000/User/getbyemail?email=".concat(L.email))).data._id;console.log(t);const a=await fetch("http://localhost:3000/payment/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t,tournamentId:e,items:[{title:n}]})});if(!a.ok)return void console.error("Server error:",a.statusText);const s=await a.json();window.location.href=s.url}catch(t){console.error("Error during checkout:",t.message)}},children:"Proceed to Checkout"}),(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),(0,w.jsx)("button",{className:"btn",type:"button",style:{width:"100%",backgroundColor:"transparent",color:"white"},onClick:()=>Q(!0),children:(0,w.jsx)("u",{children:"View the Terms & Conditions before completing your payment with GSCoin or Stripe."})}),(0,w.jsxs)(u.A,{open:K,onClose:()=>Q(!1),children:[(0,w.jsx)(x.A,{children:"Terms & Conditions"}),(0,w.jsxs)(m.A,{children:[(0,w.jsx)("div",{style:{marginLeft:"20%",marginBottom:"5%",width:"100%",fontWeight:"bold",fontSize:"20px",color:"red"},children:(0,w.jsx)("b",{children:"Here are the terms and conditions"})}),(0,w.jsxs)("ul",{children:[(0,w.jsxs)("li",{children:[" ",(0,w.jsx)("b",{style:{fontWeight:"bold",fontSize:"14px",color:"blue"},children:"Term 1 :"}),"  Every tournament has a different amount. If your tournament is a ",(0,w.jsx)("b",{children:"league"}),", you must pay ",(0,w.jsx)("b",{children:"50 TND"}),". If your tournament is a ",(0,w.jsx)("b",{children:"knockout"}),", you should pay  ",(0,w.jsx)("b",{children:"30 TND."})," If the tournament is a ",(0,w.jsx)("b",{children:"Championship,"})," you need to pay ",(0,w.jsx)("b",{children:"40 TND"}),"."]}),(0,w.jsxs)("li",{children:[(0,w.jsx)("b",{style:{fontWeight:"bold",fontSize:"14px",color:"blue"},children:"Term 2 :"}),"  The amount may vary depending on the duration of the tournament. ",(0,w.jsx)("b",{children:"The first two days are free"}),", and after these two days, each additional ",(0,w.jsx)("b",{children:"day costs 2 TND"}),". ",(0,w.jsx)("u",{children:"For example, if the tournament duration is 6 days, the amount would be ((6-2) * 2)."})]}),(0,w.jsxs)("li",{children:[(0,w.jsx)("b",{style:{fontWeight:"bold",fontSize:"14px",color:"blue"},children:"Term 3 :"}),"    If you want to pay with Coin, ",(0,w.jsx)("br",{}),(0,w.jsx)("b",{children:"I - "}),"  first go to this link ",(0,w.jsx)("a",{style:{fontWeight:"bold",fontSize:"13px",color:"green"},href:"https://garksportscoin.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"https://garksportscoin.netlify.app/"})," . ",(0,w.jsx)("br",{}),(0,w.jsx)("b",{children:"II - "}),"  connect with your Metamask wallet. ",(0,w.jsx)("br",{}),(0,w.jsx)("b",{children:" III -"})," Navigate to the 'Send Token' section and ensure you send the token to this wallet address: ",(0,w.jsx)("b",{style:{color:"green"},children:"0x83d9C5d7DfD1D2f5BeD9aDb3bf187e52F4D914DF"}),".",(0,w.jsx)("br",{}),(0,w.jsx)("b",{children:(0,w.jsx)("u",{children:"If you don't have the token, you can buy a Coin or pay with Stripe."})}),(0,w.jsx)("br",{}),(0,w.jsx)("b",{children:" IV -"})," After successfully completing your transaction with Coin, you should go to ",(0,w.jsx)("a",{style:{fontWeight:"bold",fontSize:"13px",color:"green"},href:"https://bscscan.com/",target:"_blank",rel:"noopener noreferrer",children:"https://bscscan.com/"})," ",(0,w.jsx)("br",{}),(0,w.jsx)("b",{children:" V -"})," Take a screenshot of your payment transaction.",(0,w.jsx)("br",{}),(0,w.jsx)("img",{src:S,alt:"Transaction Screenshot",style:{display:"block",width:"100%",border:"2px solid black",height:"auto"},className:"transaction-screenshot-image"}),(0,w.jsx)("b",{children:"VI -"}),"  Once you've done that, you can continue with your payment like this one.",(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),(0,w.jsxs)("p",{children:["Every tournament has a different amount in GSC: ",(0,w.jsx)("br",{}),"** If your tournament is a ",(0,w.jsx)("b",{children:"league"}),", you must pay ",(0,w.jsx)("b",{children:"6 GSC"}),".",(0,w.jsx)("br",{}),"** If your tournament is a ",(0,w.jsx)("b",{children:"knockout"}),", you should pay  ",(0,w.jsx)("b",{children:"19 GSC."}),(0,w.jsx)("br",{}),"** If the tournament is a ",(0,w.jsx)("b",{children:"Championship,"})," you need to pay ",(0,w.jsx)("b",{children:"5 GSC"})]}),(0,w.jsx)("p",{style:{fontSize:"11px",color:"blue"},children:"The amount does not depend on the duration of the tournament when paying with GSCoin."}),(0,w.jsx)("br",{}),(0,w.jsx)("p",{children:(0,w.jsxs)("u",{children:["If you need any support, you can contact us.",(0,w.jsx)("a",{href:"https://gmail.com/",children:(0,w.jsx)("b",{children:"LinkUpTournament@gmail.com"})})," "]})}),(0,w.jsx)("br",{})]})]})]}),(0,w.jsx)(b.A,{children:(0,w.jsx)(y.A,{style:{width:"100%",backgroundColor:"green",color:"white"},onClick:()=>Q(!1),children:"CONFIRM"})})]})]})})})},C=()=>{const e={settings:(0,w.jsx)(k,{})};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a.A,{title:"Payment with Stripe"}),(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),(0,w.jsx)(s.A,{id:"settings",widgets:e})]})}},26788:(e,t,n)=>{e.exports=n.p+"static/media/transactionimage.8695e9aebfa87636ecc6.png"}}]);
//# sourceMappingURL=2864.f872db7a.chunk.js.map