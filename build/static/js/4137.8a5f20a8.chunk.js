"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[4137],{4056:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(53727),o=a(23163),n=a.n(o),i=a(27929);const s=e=>{let{avatar:t,number:a,title:o,subtitle:s,wrapperClass:c,style:l={}}=e;return(0,i.jsxs)("div",{className:n()(c,{"d-flex justify-content-between align-items-center":t}),style:{...l},children:[(0,i.jsxs)("div",{className:"d-flex align-items-center g-12",children:[t?(0,i.jsx)(r.A,{className:"square-avatar",src:t,alt:o}):(0,i.jsx)("span",{className:"player-number",children:a}),(0,i.jsxs)("div",{className:"d-flex flex-column",children:[(0,i.jsx)("h3",{children:o}),(0,i.jsx)("span",{className:"text-12",children:s})]})]}),t&&(0,i.jsx)("span",{className:"player-number",children:a})]})}},51086:(e,t,a)=>{a.d(t,{A:()=>w});const r={list_item:"styles_list_item__CrcHd",title:"styles_title__3KQ8c",category:"styles_category__+khl-",category_label:"styles_category_label__9CfOy",secondary:"styles_secondary__Co2ku",content:"styles_content__DBayg",delete:"styles_delete__CVFXg",planner_item:"styles_planner_item__MLGib",light:"styles_light__Uh3k6",dark:"styles_dark__tZ+6I",checked:"styles_checked__E7b1L",timestamp:"styles_timestamp__T7DP9",category_color:"styles_category_color__6oncR"};var o=a(57336),n=a(13248),i=a(17407),s=a(51932),c=a.n(s),l=a(96476),d=a(94584),m=a(53292),h=a(7477),p=a(27929);const g=e=>{let{data:t,variant:a}=e;const{theme:s}=(0,h.q)(),{id:g,name:u,timestamp:f,complete:x,label:b,expanded:y}=t,v=(0,m.wA)(),w=d.Z.find((e=>e.text.toLowerCase()===b.toLowerCase())).color,j=()=>{switch(a){default:case"list":return(0,p.jsx)("div",{className:r.list_item,tabIndex:0,children:(0,p.jsxs)("div",{className:r.content,children:[(0,p.jsx)(n.A,{id:"task-".concat(g),color:w,checked:x,onChange:()=>v((0,l.q5)({id:g}))}),(0,p.jsxs)("div",{className:"d-flex flex-column g-2 flex-1",children:[(0,p.jsx)("input",{className:"".concat(r.title," text-overflow"),type:"text",defaultValue:u,readOnly:!0}),(0,p.jsx)("span",{className:"label h6",children:c()(f).format("DD MMM YYYY / HH:mm")})]}),(0,p.jsxs)("div",{className:r.secondary,children:[(0,p.jsx)("button",{className:"".concat(r.delete," label h6"),onClick:()=>v((0,l.H9)({id:g})),children:"Remove"}),(0,p.jsxs)("div",{className:r.category,children:[(0,p.jsx)("span",{className:"".concat(r.category_label," label h6"),children:b}),(0,p.jsx)("span",{className:r.category_color,style:{backgroundColor:"var(--".concat(w,")")}})]})]})]})});case"planner":return(0,p.jsxs)("div",{className:"".concat(r.planner_item," ").concat(r[s]," ").concat(x?r.checked:""),tabIndex:0,children:[(0,p.jsxs)("div",{className:"d-flex flex-column g-8",children:[(0,p.jsx)("span",{className:r.title,children:u}),(0,p.jsxs)("div",{className:"d-flex align-items-center g-8",children:[(0,p.jsx)("span",{className:r.category_color,style:{backgroundColor:"var(--".concat(w,")")}}),(0,p.jsx)("span",{className:"".concat("dark"===s?r.timestamp:""," label h6"),children:c()(f).format("DD MMM YYYY")})]})]}),(0,p.jsx)(i.A,{id:"task-".concat(g),checked:x,onChange:()=>v((0,l.q5)({id:g}))})]})}};return(0,p.jsx)(o.A,{in:y,timeout:300,children:(0,p.jsx)(j,{})})};var u=a(61611),f=a(94818),x=a(33618),b=a(70130),y=a(23933),v=a.n(y);const w=e=>{let{variant:t,data:a}=e;const r=v()(),o=(0,m.d4)((e=>e.todos.todos)),n=(0,m.wA)(),i=(0,u.FR)((0,u.MS)(u.AN,{activationConstraint:{distance:15}}),(0,u.MS)(u.IG,{activationConstraint:{delay:2e3,tolerance:5}})),s=e=>{const{attributes:t,listeners:a,setNodeRef:r,transform:o,transition:n,isOver:i,isDragging:s}=(0,f.gl)({id:e.id}),c={transform:x.Ks.Transform.toString(o),transition:n,zIndex:i||s?10:0,position:"relative",touchAction:"none"};return(0,p.jsx)("div",{ref:r,style:c,...t,...a,children:e.children})},c=a||o;return(0,p.jsx)(u.Mp,{sensors:i,collisionDetection:u.fp,onDragEnd:e=>{const{active:t,over:a}=e;if(t.id!==a.id){const e=o.findIndex((e=>{let{id:a}=e;return a===t.id})),r=o.findIndex((e=>{let{id:t}=e;return t===a.id}));n((0,l.iY)((0,f.be)(o,e,r)))}},modifiers:[b.FN],autoScroll:!0,children:(0,p.jsx)(f.gB,{items:c,strategy:f._G,disabled:!r.isDesktop(),children:c.map((e=>(0,p.jsx)(s,{id:e.id,children:(0,p.jsx)(g,{data:e,variant:t})},e.id)))})})}},94584:(e,t,a)=>{a.d(t,{Z:()=>r,o:()=>o});const r=[{color:"turquoise",text:"Family"},{color:"blue",text:"Work"},{color:"orange",text:"Other"}],o=[{value:"family",label:"Family"},{value:"work",label:"Work"},{value:"other",label:"Other"}]},92212:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var r=a(27937),o=a(2643),n=a(41128),i=(a(28091),a(10436)),s=a(96529),c=(a(4863),a(51695),a(54556),a(61576),a(27565)),l=(a(7477),a(27929));a(17787),a(17478),a(22145);a(53727),a(37296),a(24279);var d=a(75633),m=a(81427),h=a(21998),p=a.n(h);m.default.div.withConfig({componentId:"sc-j6n8ht-0"})([".rbc-month-view,.rbc-time-view,.rbc-time-header{border:1px solid var(--border);}.rbc-off-range-bg,.rbc-today{background:transparent;}.rbc-header{border-bottom:1px solid var(--border);height:40px;display:flex;align-items:center;justify-content:center;font-family:var(--heading-font);font-size:10px;text-transform:uppercase;color:var(--header);font-weight:600;button{font-weight:600;}}.rbc-day-bg + .rbc-day-bg,.rbc-header + .rbc-header,.rbc-time-header-content,.rbc-time-content > * + * > *{border-left:1px solid var(--border);}.rbc-time-content,.rbc-time-content:first-of-type{border-top:none;}.rbc-time-header.rbc-overflowing{border-right:1px solid var(--border);}.rbc-month-row + .rbc-month-row{border-top:1px solid var(--border);}.rbc-day-slot .rbc-time-slot{border-top:1px dashed var(--border);}.rbc-timeslot-group{border-bottom:1px dashed var(--border);position:relative;&:last-of-type{border-bottom:none;}}.rbc-current-time-indicator{background:",";}.rbc-time-gutter{width:68px;.rbc-timeslot-group{.rbc-time-slot{&:first-of-type{flex:1;align-items:center;justify-content:center;position:relative;&:before{content:'';position:absolute;top:50%;left:0;width:100%;height:1px;border-top:1px dashed var(--border);transform:translateY(-50%);z-index:1;}.rbc-label{position:relative;z-index:2;font-family:var(--heading-font);font-size:9px;letter-spacing:0.45px;font-weight:600;color:var(--btn-text);height:20px;width:40px;background:var(--widget);border-radius:8px;display:flex;align-items:center;justify-content:center;line-height:11px;}}&:last-of-type{display:none;}}}}&.day{.rbc-day-slot .rbc-timeslot-group:first-of-type .rbc-time-slot:first-of-type{border-top:none;}.rbc-time-header{display:none;}}&.week{.rbc-allday-cell,.rbc-current-time-indicator{display:none;}.rbc-time-header{border:none;}}&.month .rbc-month-view{min-height:500px;.rbc-date-cell{padding:4px 0 0 0;text-align:center;&.rbc-off-range{opacity:.5;}&.rbc-now .rbc-button-link{font-weight:600;color:",";}.rbc-button-link{font-size:0.75rem;font-family:var(--heading-font);font-weight:500;}}@media screen and (min-width:768px){min-height:800px;.rbc-date-cell{text-align:right;padding:10px;}}@media screen and (min-width:1280px){min-height:1200px;}}.rbc-time-view{flex:unset;}.rbc-timeslot-group{max-height:40px;.rbc-time-slot{display:flex;align-items:center;height:20px;}}.rbc-events-container{margin:0 !important;.rbc-event{padding:0;background:transparent;border:none;border-radius:0;&-label{display:none;}}}.rbc-event{padding:0;background:transparent !important;border-radius:0;outline:none !important;}.rbc-show-more{color:",";background:transparent;margin:10px auto 0;}.rbc-row-segment{min-height:20px;@media screen and (min-width:1280px){min-height:40px;}}"],p()("theme",{light:"var(--azure)",dark:"var(--accent)"}),p()("theme",{light:"var(--blue)",dark:"var(--accent)"}),p()("theme",{light:"var(--blue)",dark:"var(--accent)"})),m.default.div.withConfig({componentId:"sc-j6n8ht-1"})(['margin-bottom:20px;display:flex;flex-direction:column;gap:20px;text-align:center;@media screen and (min-width:1024px){flex-direction:row;align-items:center;justify-content:space-between;&[dir="ltr"]{&[data-view="day"] .date{margin-left:68px;}}&[dir="rtl"]{&[data-view="day"] .date{margin-right:68px;}}}']),m.default.div.withConfig({componentId:"sc-j6n8ht-2"})(["grid-template-columns:repeat(3,1fr);width:100%;@media screen and (min-width:1024px){max-width:300px;}"]);var g=a(20477),u=a(51047),f=a(79419),x=a(99236),b=a(58168),y=a(98587),v=a(71099),w=a(68788),j=a(54874),A=a(93725),_=a(31406),N=a(92230);function C(e){return(0,N.Ay)("MuiCardActionArea",e)}const M=(0,_.A)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var k=a(13196);const R=["children","className","focusVisibleClassName"],I=(0,A.Ay)(k.A,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",["&:hover .".concat(M.focusHighlight)]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},["&.".concat(M.focusVisible," .").concat(M.focusHighlight)]:{opacity:(t.vars||t).palette.action.focusOpacity}}})),D=(0,A.Ay)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((e=>{let{theme:t}=e;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),T=c.forwardRef((function(e,t){const a=(0,j.A)({props:e,name:"MuiCardActionArea"}),{children:r,className:o,focusVisibleClassName:n}=a,i=(0,y.A)(a,R),s=a,c=(e=>{const{classes:t}=e;return(0,w.A)({root:["root"],focusHighlight:["focusHighlight"]},C,t)})(s);return(0,l.jsxs)(I,(0,b.A)({className:(0,v.A)(c.root,o),focusVisibleClassName:(0,v.A)(n,c.focusVisible),ref:t,ownerState:s},i,{children:[r,(0,l.jsx)(D,{className:c.focusHighlight,ownerState:s})]}))}));var F=a(20240);function S(e){return(0,N.Ay)("MuiCard",e)}(0,_.A)("MuiCard",["root"]);const Y=["className","raised"],O=(0,A.Ay)(F.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),E=c.forwardRef((function(e,t){const a=(0,j.A)({props:e,name:"MuiCard"}),{className:r,raised:o=!1}=a,n=(0,y.A)(a,Y),i=(0,b.A)({},a,{raised:o}),s=(e=>{const{classes:t}=e;return(0,w.A)({root:["root"]},S,t)})(i);return(0,l.jsx)(O,(0,b.A)({className:(0,v.A)(s.root,r),elevation:o?8:void 0,ref:t,ownerState:i},n))}));function z(e){return(0,N.Ay)("MuiCardContent",e)}(0,_.A)("MuiCardContent",["root"]);const H=["className","component"],L=(0,A.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),B=c.forwardRef((function(e,t){const a=(0,j.A)({props:e,name:"MuiCardContent"}),{className:r,component:o="div"}=a,n=(0,y.A)(a,H),i=(0,b.A)({},a,{component:o}),s=(e=>{const{classes:t}=e;return(0,w.A)({root:["root"]},z,t)})(i);return(0,l.jsx)(L,(0,b.A)({as:o,className:(0,v.A)(s.root,r),ownerState:i,ref:t},n))}));function V(e){return(0,N.Ay)("MuiCardMedia",e)}(0,_.A)("MuiCardMedia",["root","media","img"]);const q=["children","className","component","image","src","style"],G=(0,A.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:r,isImageComponent:o}=a;return[t.root,r&&t.media,o&&t.img]}})((e=>{let{ownerState:t}=e;return(0,b.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),P=["video","audio","picture","iframe","img"],U=["picture","img"],W=c.forwardRef((function(e,t){const a=(0,j.A)({props:e,name:"MuiCardMedia"}),{children:r,className:o,component:n="div",image:i,src:s,style:c}=a,d=(0,y.A)(a,q),m=-1!==P.indexOf(n),h=!m&&i?(0,b.A)({backgroundImage:'url("'.concat(i,'")')},c):c,p=(0,b.A)({},a,{component:n,isMediaComponent:m,isImageComponent:-1!==U.indexOf(n)}),g=(e=>{const{classes:t,isMediaComponent:a,isImageComponent:r}=e,o={root:["root",a&&"media",r&&"img"]};return(0,w.A)(o,V,t)})(p);return(0,l.jsx)(G,(0,b.A)({className:(0,v.A)(g.root,o),as:n,role:!m&&i?"img":void 0,ref:t,style:h,ownerState:p,src:m?i||s:void 0},d,{children:r}))}));var Z=a(5802),K=a(11030);const Q={GK:"Goalkeeper",CB:"Defender",RB:"Defender",LB:"Defender",RWB:"Defender",LWB:"Defender",CM:"Midfielder",CDM:"Midfielder",CAM:"Midfielder",RM:"Midfielder",LM:"Midfielder",ST:"Forward",CF:"Forward",RF:"Forward",LF:"Forward",RW:"Forward",LW:"Forward"},X=["https://media.asroma.com/prod/images/square_medium_fill/c431a82a89dd-5be9a56f0985-lukaku-copia.png","https://www.orlandopiratesfc.com/storage/2024/01/01eb1374cd229ff7c7433e966baae768.png","https://www.indiansuperleague.com/static-assets/images/players/33676.png?v=100.82","https://media.asroma.com/prod/images/square_medium_fill/143a6bf28f85-rui-patricio-copia.png","https://www.valenciacf.com/public/Image/2024/1/diakhaby_Retrato.png","https://media.ol.fr/uploads/assets/Henrique_e2b12fe9f1.png?twic=v1/focus=auto/cover=400x533","https://www.olympiacos.org/wp-content/uploads/2024/01/02/Martins-PANIGIRIKO.png"],J=()=>{var e;const[t,a]=(0,c.useState)(""),[r,o]=(0,c.useState)([]),{USER:n}=(0,f.Z)(),{state:i}=(0,K.zy)(),m=i?i.teamId:null;(0,c.useEffect)((()=>{!async function(){try{let e;if(m)e=await fetch("http://localhost:3000/Team/getbyid/".concat(m));else{const t=(await x.A.get("http://localhost:3000/User/getbyemail?email=".concat(n.email))).data._id;e=await fetch("http://localhost:3000/Team/getTeambyTeamManger/".concat(t))}const t=await e.json();o(t)}catch(e){console.error(e)}}()}),[]);const h={};null===(e=r.playerNames)||void 0===e||e.forEach((e=>{console.log("team players : "+e.position);const t=Q[e.position]||"Other";h[t]=[...h[t]||[],e]}));return(0,l.jsx)(s.A,{className:"card h-fit card-padded",children:(0,l.jsxs)("div",{className:"card h-fit card-padded",children:[(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,l.jsx)("h3",{children:"Players"})}),(0,l.jsx)(s.A,{className:"card h-fit card-padded",children:["Forward","Midfielder","Defender","Goalkeeper"].map((e=>{var t;return(0,l.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,l.jsx)("h4",{children:e}),(0,l.jsx)("hr",{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{style:{textAlign:"left",display:"inline-flex",justifyContent:"space-between",padding:"10px"},children:null===(t=h[e])||void 0===t?void 0:t.map(((e,t)=>(0,l.jsxs)(l.Fragment,{children:[!m&&(0,l.jsx)(d.A,{onClick:()=>(async(e,t)=>{try{if(!window.confirm("Are you sure you want to remove ".concat(t," from the team?")))return;const a=await x.A.delete("http://localhost:3000/Team/removePlayerFromTeam?idPlayer=".concat(e));return u.oR.success(t+" has been successfully removed from the team!"),a.data}catch(a){throw console.error("Error removing player from team:",a),a}})(e.id,e.fullname),children:"Remove"}),(0,l.jsx)(g.N_,{to:"/player-profile",state:{playerId:e.id},style:{textDecoration:"none",color:"inherit"},children:(0,l.jsx)(E,{sx:{width:160,height:180,marginBottom:"100px",backgroundColor:"#FCC93F",margin:"0 6px"},children:(0,l.jsxs)(T,{children:[(0,l.jsx)("br",{}),(0,l.jsx)(W,{component:"img",height:"50",image:e.avatar?e.avatar:X[t],alt:"avatar",style:{borderRadius:"50%",width:70,height:70,background:"white",display:"block",marginLeft:"auto",marginRight:"auto"}}),(0,l.jsx)(Z.A,{variant:"body2",color:"text.secondary",style:{position:"absolute",bottom:0,right:0,backgroundColor:"rgba(255, 255, 255, 0.5)",padding:"8px 12px",borderRadius:"4px"},children:e.jersyNumber}),(0,l.jsxs)(B,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},children:[(0,l.jsxs)(Z.A,{gutterBottom:!0,variant:"h5",component:"div",style:{maxWidth:"150px",overflow:"hidden",textOverflow:"ellipsis"},children:[e.fullname.length>7?"".concat(e.fullname.substring(0,7),"..."):e.fullname," "]}),(0,l.jsx)(Z.A,{variant:"body2",color:"text.secondary",children:(0,l.jsx)("strong",{children:e.position})})]})]})})},t)]})))})]},e)}))})]})})};var $=a(44565),ee=(a(9648),a(77506));const te=()=>{const{findTours:e,tournaments:t,isLoading:a}=(0,ee.Q)();let s,d=t.length;const{state:m}=(0,K.zy)(),h=m?m.teamId:null,[p,g]=(0,c.useState)([]),[u,b]=(0,c.useState)([]),{USER:y}=(0,f.Z)();(0,c.useEffect)((()=>{(async function(){if(h){b(h);try{const t=await fetch("http://localhost:3000/Team/getbyid/".concat(h)),a=(await t.json()).teamManagerName[0].id;await e(a)}catch(t){console.error("Error fetching team data:",t)}}else{const t=await x.A.get("http://localhost:3000/User/getbyemail?email=".concat(y.email));s=t.data.currentTeam,console.log("userId :"+s+"...."),b(s),await e()}})().then((()=>{d=t.length,console.log(d," Tournaments, data :",t)})),console.log("TeamId :"+u+"....")}),[d,u]);const v=u&&!a,w={profile_card:(0,l.jsx)(n.A,{}),calendar:v&&(0,l.jsx)(i.A,{teamId:u}),listplayers:v&&(0,l.jsx)(J,{teamId:u}),messages:(0,l.jsx)($.A,{tournaments:t})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{title:"Team Profile"}),(0,l.jsx)(o.A,{id:"Team_Managment",widgets:w})]})}},22145:(e,t,a)=>{a(96529),a(53727),a(4056);a.p;a(25099),a(27929)},17478:(e,t,a)=>{a.d(t,{A:()=>u});const r="styles_header__4LO2j",o="styles_main__xbcwz",n="styles_main_group__9VANp";var i=a(96529),s=a(30596),c=a(3896),l=a(90403),d=a(65493),m=a(51932),h=a.n(m),p=a(92649),g=a(27929);const u=()=>{const[e,{height:t}]=(0,d.A)(),a=[...new Set(p.A.map((e=>h()(e.timestamp).format("DD.MM.YY"))))],m=a.map((e=>p.A.filter((t=>h()(t.timestamp).format("DD.MM.YY")===e))));return(0,g.jsxs)(i.A,{className:"card h-2",children:[(0,g.jsx)("h3",{className:r,ref:e,children:"Latest messages"}),(0,g.jsx)(l.A,{height:t,bg:"widget-bg",children:(0,g.jsx)("div",{className:"".concat(o," track d-flex flex-column g-10"),children:a.map(((e,t)=>{const a=h()().format("DD.MM.YY")===e;return(0,g.jsxs)("div",{children:[(0,g.jsx)(c.A,{date:a?"Today":e}),(0,g.jsx)("div",{className:n,children:m[t].map(((e,t)=>(0,g.jsx)(s.A,{index:t,...e},t)))})]},t)}))})})]})}},41128:(e,t,a)=>{a.d(t,{A:()=>p});const r={container:"styles_container__TD-TF",media:"styles_media__b33Yo",main_info:"styles_main_info__rOObp"};var o=a(96529),n=a(87852),i=(a(4536),a(5428),a(27565)),s=a(53727),c=a(79419),l=a(99236),d=a(20477),m=a(11030),h=a(27929);const p=()=>{const[e,t]=(0,i.useState)([]),[a,p]=(0,i.useState)([]),[g,u]=(0,i.useState)(null),{USER:f}=(0,c.Z)(),{state:x}=(0,m.zy)(),b=x?x.teamId:null;return(0,i.useEffect)((()=>{const e=async e=>{try{const t=await fetch("http://localhost:3000/Team/getTeamRating/".concat(e)),a=(await t.json()).rating;u(a)}catch(t){console.error("Error fetching team rating:",t)}};!async function(){try{let a;if(b)a=await fetch("http://localhost:3000/Team/getbyid/".concat(b));else{const e=(await l.A.get("http://localhost:3000/User/getbyemail?email=".concat(f.email))).data._id;a=await fetch("http://localhost:3000/Team/getTeambyTeamManger/".concat(e))}const r=await a.json();t(r),e(r._id)}catch(a){console.error(a)}}()}),[]),(0,i.useEffect)((()=>{console.log("teamRating changed:",g)}),[g]),(0,h.jsx)(o.A,{className:"".concat(r.container," card h-1 g-30 card-padded"),children:(0,h.jsxs)("div",{className:"d-flex",children:[(0,h.jsx)("div",{className:r.media,children:(0,h.jsx)(s.A,{style:r.img,src:e.logo?e.logo:"https://static.vecteezy.com/system/resources/previews/027/385/965/original/blank-e-sport-shield-badge-png.png",alt:"https://clipart-library.com/img/1094138.jpg"})}),(0,h.jsxs)("div",{className:"d-flex flex-column justify-content-between",style:{width:"100%"},children:[(0,h.jsx)("div",{className:"".concat(r.main_info," d-flex flex-column g-14"),children:(0,h.jsxs)("div",{className:"d-flex flex-column g-4",children:[(0,h.jsx)("h1",{className:"text-20 text-overflow",children:e.name}),(0,h.jsxs)(h.Fragment,{children:[e.teamManagerName&&e.teamManagerName.map((e=>(0,h.jsxs)("span",{className:"text-12",children:[" Team Manager: ",e.fullname," "]},e.id))),e.coachName&&e.coachName.length>0&&!e.coachNameRendered&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d.N_,{to:"/coach-profile",state:{playerId:e.coach},style:{textDecoration:"none",color:"inherit"},children:e.coachName&&e.coachName.map((e=>(0,h.jsxs)("span",{className:"text-12",children:[" Coach: ",e.fullname," "]},e.id)))})})]})]})}),(0,h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:null!==g?(0,h.jsx)(n.A,{value:g,max:5,type:"stars",isCompact:!0}):null})]})]})})}},17787:(e,t,a)=>{a(96529),a(21643),a(90403),a(51086),a(27565),a(53292),a(51932),a(27929)},5428:(e,t,a)=>{e.exports=a.p+"static/media/player_tshirt.140a384d69855f7e6682.webp"}}]);
//# sourceMappingURL=4137.8a5f20a8.chunk.js.map