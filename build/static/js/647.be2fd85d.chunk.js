"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[647],{60647:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(27565),s=a(27937),r=a(99236),o=a(8975),d=a(51047),i=a(55370),l=a(85953),c=a(64824),h=a(13815);const p="AddTeamsWidget_teamContainer__BLnyv",m="AddTeamsWidget_teamLogo__FIHOY",u="AddTeamsWidget_teamName__F+jNS",g="AddTeamsWidget_selectedTeamsContainer__JF2Vw",f="AddTeamsWidget_addButton__ULlf5",x="AddTeamsWidget_teamsList__ghTXi";var b=a(11030),j=a(27929);const T=e=>{let{tournamentId:t}=e;const[a,s]=(0,n.useState)([]),[T,_]=(0,n.useState)([]),[w,y]=(0,n.useState)(null),v=String(t),k=(0,b.Zp)(),E=()=>{const e=[i,l,c,h];return e[Math.floor(Math.random()*e.length)]};(0,n.useEffect)((()=>{(async()=>{try{const e=await fetch("http://localhost:3000/Tournament/getbyid/".concat(v));if(!e.ok)throw new Error("Failed to fetch tournament details");const t=await e.json();y(t)}catch(e){console.error("Error fetching tournament details:",e)}})()}),[t]),(0,n.useEffect)((()=>{console.log(t),(async()=>{try{const e=await r.A.get("http://localhost:3000/Team/getall");s(e.data)}catch(e){console.error("Error fetching teams:",e)}})()}),[]);const[I,S]=(0,n.useState)([]);return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2.5fr 0.5fr"},className:"wrapper",children:[(0,j.jsxs)("div",{style:{paddingLeft:"10%"},children:[" ",(0,j.jsxs)("h2",{children:[" ",(0,j.jsx)("u",{children:"Available Teams"})]})]}),(0,j.jsxs)("div",{style:{paddingLeft:"50%"},children:[" ",(0,j.jsx)("h2",{children:(0,j.jsx)("u",{children:"Selected Teams"})})]}),(0,j.jsx)("div",{children:(0,j.jsx)("button",{onClick:async e=>{const t=w.numberOfTeams;if(T.map((e=>e._id)).length==t)try{if(!(await fetch("http://localhost:3000/Tournament/addteams/".concat(w._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({teams:T})})).ok)throw new Error("Failed to add teams to the tournament");if(d.oR.success("Selected teams added to the tournament successfully."),"League"===w.TournamentType)try{const[e,t]=await Promise.all([fetch("http://localhost:3000/Tournament/generateRoundRobinSchedule/".concat(w._id)),fetch("http://localhost:3000/Standings/CreateStandings/".concat(w._id))]);if(!e.ok)throw new Error("Failed to generate round robin schedule");if(!t.ok)throw new Error("Failed to generate standings")}catch(a){console.error("Error during schedule or standings generation:",a)}else if("Knockout"===w.TournamentType){if(!(await fetch("http://localhost:3000/Tournament/KnockoutTournamentBuild/".concat(w._id))).ok)throw new Error("Failed to generate Knockout rounds");console.log("Knockout rounds generated successfully.")}else{if("Championship"!==w.TournamentType)throw new Error("Invalid tournament type");if(!(await fetch("http://localhost:3000/Tournament/ChampionshipGroupsAndMatches/".concat(w._id))).ok)throw new Error("Failed to generate championship tournament");console.log("championship tournament generated successfully.")}k("/TournamentCreated")}catch(a){console.error("Error adding teams to tournament:",a)}else d.oR.error("Number of the teams selected is not valid")},className:f,children:"Save Tournament"})}),(0,j.jsxs)(o.JY,{onDragEnd:e=>{if(!e.destination)return;const t=e.source.index,n=e.destination.index,r="teams"===e.source.droppableId?a:T,o="teams"===e.destination.droppableId?a:T,d=r[t];e.source.droppableId===e.destination.droppableId?(r.splice(t,1),r.splice(n,0,d),"teams"===e.source.droppableId?s([...r]):_([...r])):(r.splice(t,1),o.splice(n,0,d),s([...a]),_([...T]))},children:[(0,j.jsx)("div",{style:{border:"2px dashed #948409",width:"270px",padding:"15px",minHeight:"170px",maxHeight:"690px",borderRadius:"5px",overflowY:"scroll"},children:(0,j.jsx)(o.gL,{droppableId:"teams",children:e=>(0,j.jsxs)("div",{className:x,...e.droppableProps,ref:e.innerRef,children:[a.map(((e,t)=>(0,j.jsx)(o.sx,{draggableId:e._id,index:t,children:t=>(0,j.jsxs)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,className:p,children:[(0,j.jsx)("img",{src:e.logo||E(),alt:e.name,className:m}),(0,j.jsx)("span",{className:u,children:e.name})," "]})},e._id))),e.placeholder]})})}),(0,j.jsx)("div",{style:{padding:"15px",Height:"100%",overflowY:"scroll"},children:(0,j.jsx)(o.gL,{droppableId:"selected-teams",children:e=>(0,j.jsxs)("div",{className:g,...e.droppableProps,ref:e.innerRef,children:[T.map(((e,t)=>(0,j.jsx)(o.sx,{draggableId:e._id,index:t,children:t=>(0,j.jsxs)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:[(0,j.jsx)("img",{src:e.logo||E(),alt:e.name,className:m}),e.name]})},e._id))),e.placeholder]})})})]})]})})},_=()=>{const{state:e}=(0,b.zy)(),t=e.responseData.tournamentId;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.A,{title:"Add Teams"}),(0,j.jsx)(T,{tournamentId:t})]})}},55370:(e,t,a)=>{e.exports=a.p+"static/media/Def1.f733a85862457ed90892.png"},85953:(e,t,a)=>{e.exports=a.p+"static/media/Def2.4ae828d0b7d75243692e.png"},64824:(e,t,a)=>{e.exports=a.p+"static/media/Def3.d6e810e986466b7df008.png"},13815:(e,t,a)=>{e.exports=a.p+"static/media/Def4.8f10e11b899bc73bbaa9.png"}}]);
//# sourceMappingURL=647.be2fd85d.chunk.js.map