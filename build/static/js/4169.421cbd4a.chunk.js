"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[4169],{84273:(e,a,s)=>{s(27929)},8042:(e,a,s)=>{s.d(a,{A:()=>t});const t=[{id:"item-1",img:s.p+"static/media/1.55532f12ca5190a85437.webp",name:"Nike Dri-FIT Element Half-Zip",category:"Sweatshirts",price:70,rating:5},{id:"item-2",img:s.p+"static/media/2.4e33c361f4d57731d4f3.webp",name:"Nike Dri-FIT Challenger Tights",category:"Running tights",price:65,rating:5},{id:"item-3",img:s.p+"static/media/3.abd9887826578ced503c.webp",name:"Nike Sportswear Club Jacket",category:"Jackets",price:90,rating:4},{id:"item-4",img:s.p+"static/media/4.3e8d3e6a2c3be7535ab0.webp",name:"Nike Utility Elite Backpack",category:"Accessories",price:112,rating:5},{id:"item-5",img:s.p+"static/media/5.437780596054ad1cf2bd.webp",name:"High-Waisted Biker Shorts",category:"Shorts",price:65,rating:5},{id:"item-6",img:s.p+"static/media/6.d98f13b46dbc6a7de59a.webp",name:"Oversized French Terry Hoodie",category:"Hoodies",price:95,rating:4},{id:"item-7",img:s.p+"static/media/7.35ea64da2f04be9aa7fd.webp",name:"Nike Yoga Luxe Tie-Dye Set",category:"Yoga sets",price:200,rating:4},{id:"item-8",img:s.p+"static/media/8.d65d8bc7941d29ea83f0.webp",name:"Jordan Flight Control Pack",category:"Accessories",price:65.97,rating:4.5}]},6849:(e,a,s)=>{s.r(a),s.d(a,{default:()=>y});var t=s(27565);var i=s(8975),l=s(27929);const n=()=>{const[e,a]=(0,t.useState)([]),[s,n]=(0,t.useState)(Array(11).fill(null));(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch("http://localhost:3000/User/getallPlayers",{method:"GET"});if(!e.ok)throw new Error("Failed to fetch players");const s=await e.json();a(s)}catch(e){console.error(e)}})()}),[]);const r=(e,a)=>{const t=[...s];t[e]=a.fullname,n(t)};return console.log(e),(0,l.jsx)(i.JY,{onDragEnd:t=>{if(!t.destination)return;const i=t.source.droppableId,l=t.destination.droppableId,c=e[t.source.index];if("players"===i&&"lineup"===l){const s=[...e];s.splice(t.source.index,1),a(s),r(t.destination.index,c)}else if("lineup"===i&&"players"===l){const i=[...s];i.splice(t.destination.index,1,null),n(i),a([...e,c])}},children:(0,l.jsxs)("div",{className:"lineup",children:[(0,l.jsx)("h2",{children:"Available Players"}),(0,l.jsx)(i.gL,{droppableId:"players",children:a=>(0,l.jsxs)("ul",{className:"players",...a.droppableProps,ref:a.innerRef,children:[e.length>0&&e.map(((e,a)=>e&&e._id&&(0,l.jsx)(i.sx,{draggableId:e._id,index:a,children:a=>(0,l.jsx)("li",{className:"player",ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,children:e.fullname})},a))),a.placeholder]})}),(0,l.jsx)("h2",{children:"Lineup"}),(0,l.jsx)(i.gL,{droppableId:"lineup",children:e=>(0,l.jsxs)("ul",{className:"lineup",...e.droppableProps,ref:e.innerRef,children:[s.map(((e,a)=>(0,l.jsx)(i.sx,{draggableId:e||"spot-".concat(a),index:a,children:a=>(0,l.jsx)("li",{className:"spot",ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,children:e||"-"})},e||"spot-".concat(a)))),e.placeholder]})})]})})};var r=s(96529),c=s(54556),o=s(44260),d=s(61040),m=s(98364),p=s(3676),u=s(22092),h=(s(14368),s(3894));const f=()=>{const[e,a]=(0,t.useState)("realmadrid");return(0,l.jsx)(r.A,{className:"card h-2 card-padded",children:(0,l.jsxs)(p.t,{className:"d-flex flex-column h-100 g-30",value:e,children:[(0,l.jsx)(d.j,{className:"tab-nav col",children:(0,l.jsx)(c.A,{title:"Real Madrid",onClick:()=>a("realmadrid"),active:"realmadrid"===e,type:"color",color:"accent"})}),(0,l.jsx)("div",{className:"flex-1 h-100",children:(0,l.jsx)(m.K,{className:"h-100",value:"realmadrid",children:(0,l.jsx)(u.A,{in:"realmadrid"===e,timeout:400,children:(0,l.jsx)("div",{className:"h-100",style:{marginTop:10},children:(0,l.jsx)(o.A,{data:h.A})})})})})]})})};s(84273);var g=s(27937);const y=()=>{const e={teams_lineups:(0,l.jsx)(f,{})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.A,{title:" Teams Linup"}),(0,l.jsx)(n,{}),(0,l.jsx)(f,{id:"Test",widgets:e})]})}},14368:(e,a,s)=>{s.d(a,{w:()=>M});var t=s(27565),i=s(62690),l=s(29108),n=s(79419),r=s(99236);const c="styleee_container__pSgfg",o="styleee_pitchContainer__blheA",d="styleee_pitch__I+TKM",m="styles_grid__kF8x7";var p=s(96529);const u="styles_container__WFwgQ",h="styles_media__0hs+a",f="styles_main__D5S4z",g="styles_main_title__IXRkD",y="styles_addButton__nollt",x="styles_removeButton__9lxTJ";var w=s(89105),j=s(20477),b=(s(87852),s(59178),s(24202),s(65493)),v=s(780),_=s(27929);const N=["https://pbs.twimg.com/media/DCZBKuMXsAYRDVi?format=png&name=small","https://media.asroma.com/prod/images/square_medium_fill/c431a82a89dd-5be9a56f0985-lukaku-copia.png","https://www.orlandopiratesfc.com/storage/2024/01/01eb1374cd229ff7c7433e966baae768.png","https://www.indiansuperleague.com/static-assets/images/players/33676.png?v=100.82","https://media.asroma.com/prod/images/square_medium_fill/143a6bf28f85-rui-patricio-copia.png","https://www.valenciacf.com/public/Image/2024/1/diakhaby_Retrato.png","https://media.ol.fr/uploads/assets/Henrique_e2b12fe9f1.png?twic=v1/focus=auto/cover=400x533","https://www.olympiacos.org/wp-content/uploads/2024/01/02/Martins-PANIGIRIKO.png"],k=e=>{let{player:a,isSlide:s=!1,addPlayer:i,homeTeam:l}=e;const n=s?"div":p.A,[r,{width:c}]=(0,b.A)(),{width:o}=(0,v.A)(),[d,m]=(0,t.useState)(null),k=(null===a||void 0===a?void 0:a.avatar)||N[d];(0,t.useEffect)((()=>{const e=localStorage.getItem("randomImageIndex");if(null!==e)m(parseInt(e));else{const e=Math.floor(Math.random()*N.length);m(e),localStorage.setItem("randomImageIndex",e.toString())}}),[]);Object.values(l.squad).flat().some((e=>e&&e.name===a.fullname));return(0,_.jsxs)(n,{className:"".concat(u," card card-padded ").concat(o>=414?"h-1":""),children:[(0,_.jsx)("img",{className:h,src:k,alt:(null===a||void 0===a?void 0:a.fullname)||"Player Image"}),(0,_.jsxs)("div",{className:f,ref:r,children:[(0,_.jsxs)("div",{className:"d-flex flex-column flex-1",children:[(0,_.jsx)("span",{className:"label label--store h6",children:null===a||void 0===a?void 0:a.position}),(0,_.jsx)(j.N_,{className:g,to:"/player",children:(0,_.jsx)(w.A,{className:"h3",width:c,text:null===a||void 0===a?void 0:a.fullname})})]}),(0,_.jsx)("button",{className:"".concat(y," ").concat(Object.values(l.squad).flat().some((e=>e&&e.name===a.fullname))?x:""),onClick:()=>i(a),children:Object.values(l.squad).flat().some((e=>e&&e.name===a.fullname))?"Remove from Lineup":"Add to Lineup"})]})]})};var S=s(12455),A=s(23740),L=s(37088),T=s(7477);s(8042);const C=e=>{let{children:a}=e;return(0,_.jsx)("div",{className:m,children:a})},R=e=>{let{children:a}=e;const{direction:s}=(0,T.q)(),[i,l]=(0,t.useState)(null);return(0,t.useEffect)((()=>{i&&(i.changeLanguageDirection(s),i.update())}),[i,s]),(0,_.jsx)(p.A,{children:(0,_.jsxs)("div",{className:"p-relative",children:[(0,_.jsx)(S.RC,{className:"h-100",onSwiper:l,modules:[A.Vx,A.Ij],navigation:!0,slidesPerView:1,spaceBetween:24,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:1500,breakpoints:{767:{slidesPerView:2},1279:{slidesPerView:3},1499:{slidesPerView:4}},children:a}),(0,_.jsx)(L.A,{swiper:i,withShadow:!0})]})})},I=e=>{let{isSlider:a=!1,players:s,addPlayer:i,homeTeam:l}=e;const[n,r]=(0,t.useState)([]),{direction:c}=(0,T.q)(),o=a?R:C,d=a?S.qr:t.Fragment,m=a?{style:{margin:"ltr"===c?"0 24px 0 0":"0 0 0 24px"}}:{};return(0,_.jsx)(o,{children:s.map(((e,s)=>(0,_.jsx)(d,{...m,children:(0,_.jsx)(k,{index:s,player:e,isSlide:a,addPlayer:i,homeTeam:l})},e.id)))})},M=()=>{const{USER:e}=(0,n.Z)(),[a,s]=(0,t.useState)({squad:{gk:null,df:[],cm:[],cdm:[],cam:[],fw:[]}}),[m,p]=(0,t.useState)([]),[u,h]=(0,t.useState)([]);(0,t.useEffect)((()=>{!async function(){const a=(await r.A.get("http://localhost:3000/User/getbyemail?email=".concat(e.email))).data._id,s=await g(a);if(s){const e={GK:1,CB:2,RB:3,LB:4,RWB:5,LWB:6,CM:7,CDM:8,CAM:9,RM:10,LM:11,ST:12,CF:13,RF:14,LF:15,RW:16,LW:17},a=s.playerNames.sort(((a,s)=>e[a.position]-e[s.position]));p(a)}f()}()}),[]);const f=async()=>{try{const a=(await r.A.get("http://localhost:3000/User/getbyemail?email=".concat(e.email))).data.currentTeam,t=await fetch("http://localhost:3000/Team/getLineup/".concat(a)),i=await t.json();if(console.log("Lineup Data:",i),i&&i.lineup&&i.lineup.playerNames){const e=i.lineup.playerNames,a={gk:null,df:[],cm:[],cdm:[],cam:[],fw:[]},t={GK:"gk",CB:"df",RB:"df",LB:"df",RWB:"df",LWB:"df",CM:"cm",CDM:"cdm",CAM:"cam",RM:"cm",LM:"cm",ST:"fw",CF:"fw",RF:"fw",LF:"fw",RW:"fw",LW:"fw"};e.forEach((e=>{const s=t[e.position.toUpperCase()];if(console.log(s,a[s]),s&&s in a){const t={name:e.fullname,number:e.jersyNumber,position:e.position};"gk"===s?(console.log("goalkeeper info:",t),a.gk=t):(Array.isArray(a[s])||(a[s]=[]),a[s].push(t))}else console.log("Position ".concat(e.position," doesn't exist in updatedSquad"))})),s({squad:a})}else console.log("Player names not found in lineup data")}catch(a){console.error("Error fetching lineup:",a)}},g=async e=>{try{const a=await fetch("http://localhost:3000/Team/getTeambyCoach/".concat(e));return await a.json()}catch(a){return console.error(a),null}};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:c,children:(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("h2",{children:"Field"}),(0,_.jsx)("div",{className:d,children:(0,_.jsx)(i.A,{homeTeam:a,pattern:"lines"})})]})}),(0,_.jsx)("br",{}),(0,_.jsx)(I,{isSlider:!0,players:m,addPlayer:e=>{if(!e||!e.position||!e.fullname)return;if(Object.values(a.squad).flat().filter((e=>null!==e)).length>=11)return void alert("Maximum number of players on the field (11) reached.");const t={id:(0,l.Ak)(),name:e.fullname,number:e.jersyNumber,position:e.position};if(Object.values(a.squad).flat().some((a=>a&&a.name===e.fullname))){if(window.confirm("".concat(e.fullname," is already in the field. Do you want to remove them?"))){const t={...a.squad};Object.keys(t).forEach((a=>{Array.isArray(t[a])?t[a]=t[a].filter((a=>a&&a.name!==e.fullname)):t[a]&&t[a].name===e.fullname&&(t[a]=null)})),s({squad:t})}}else p((a=>a.filter((a=>a.name!==e.fullname)))),s((a=>{const s={...a.squad},i={GK:"gk",CB:"df",RB:"df",LB:"df",RWB:"df",LWB:"df",CM:"cm",CDM:"cdm",CAM:"cam",RM:"cm",LM:"cm",ST:"fw",CF:"fw",RF:"fw",LF:"fw",RW:"fw",LW:"fw"}[e.position];return"gk"===i?s.gk=t:s[i].push(t),{...a,squad:s}}))},homeTeam:a}),(0,_.jsx)("br",{}),(0,_.jsx)("button",{onClick:()=>(async s=>{try{const t=s.filter((e=>Object.values(a.squad).flat().some((a=>a&&a.name===e.fullname))));h(t);const i=s.map((e=>e.id)),l=(await r.A.get("http://localhost:3000/User/getbyemail?email=".concat(e.email))).data.currentTeam,n=await fetch("http://localhost:3000/Team/getLineup/".concat(l));if(1==(await n.json()).success){const e=await fetch("http://localhost:3000/Team/updateLineup/".concat(l),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({playerNames:t,players:i})}),a=await e.json();console.log("Lineup updated:",a)}else{const e=await fetch("http://localhost:3000/Team/addLineup/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({team:l,playerNames:t,players:i})}),a=await e.json();console.log("Lineup added :",a)}}catch(t){console.error("Error saving lineup:",t)}})(m),children:"Save Lineup"})]})}}}]);
//# sourceMappingURL=4169.421cbd4a.chunk.js.map