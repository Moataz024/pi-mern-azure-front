"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[2244],{8730:(t,e,n)=>{n.d(e,{X:()=>M});var r=n(27565),i=n(5516),a=n(79568),o=n.n(a),s=n(9963),c=n.n(s),l=n(32827),p=n.n(l),u=n(71099),y=n(52118),f=n(63917),d=n(27606),m=n(20925),h=n(24921),v=n(99066),b=n(24715),x=n(23131),A=n(90749),g=n(53187),O=n(50993),P=n(34631),j=n(70344),w=["option","isActive"];function S(){return S=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},S.apply(this,arguments)}function E(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function k(t){var e=t.option,n=t.isActive,i=E(t,w);return"string"===typeof e?r.createElement(j.yp,S({option:r.createElement(P.i,S({type:e},i)),isActive:n,shapeType:"symbols"},i)):r.createElement(j.yp,S({option:e,isActive:n,shapeType:"symbols"},i))}function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function T(){return T=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},T.apply(this,arguments)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,J(r.key),r)}}function I(t,e,n){return e=N(e),function(t,e){if(e&&("object"===K(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return F(t)}(t,_()?Reflect.construct(e,n||[],N(t).constructor):e.apply(t,n))}function _(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_=function(){return!!t})()}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t,e){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},W(t,e)}function B(t,e,n){return(e=J(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){var e=function(t,e){if("object"!=K(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==K(e)?e:String(e)}var M=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return B(F(t=I(this,e,[].concat(r))),"state",{isAnimationFinished:!1}),B(F(t),"handleAnimationEnd",(function(){t.setState({isAnimationFinished:!0})})),B(F(t),"handleAnimationStart",(function(){t.setState({isAnimationFinished:!1})})),B(F(t),"id",(0,A.NF)("recharts-scatter-")),t}var n,a,s;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&W(t,e)}(e,t),n=e,s=[{key:"getDerivedStateFromProps",value:function(t,e){return t.animationId!==e.prevAnimationId?{prevAnimationId:t.animationId,curPoints:t.points,prevPoints:e.curPoints}:t.points!==e.curPoints?{curPoints:t.points}:null}}],(a=[{key:"renderSymbolsStatically",value:function(t){var e=this,n=this.props,i=n.shape,a=n.activeShape,o=n.activeIndex,s=(0,d.J9)(this.props,!1);return t.map((function(t,n){var c=o===n,l=c?a:i,p=D(D({key:"symbol-".concat(n)},s),t);return r.createElement(y.W,T({className:"recharts-scatter-symbol"},(0,O.XC)(e.props,t,n),{key:"symbol-".concat(null===t||void 0===t?void 0:t.cx,"-").concat(null===t||void 0===t?void 0:t.cy,"-").concat(null===t||void 0===t?void 0:t.size,"-").concat(n),role:"img"}),r.createElement(k,T({option:l,isActive:c},p)))}))}},{key:"renderSymbolsWithAnimation",value:function(){var t=this,e=this.props,n=e.points,a=e.isAnimationActive,o=e.animationBegin,s=e.animationDuration,c=e.animationEasing,l=e.animationId,p=this.state.prevPoints;return r.createElement(i.Ay,{begin:o,duration:s,isActive:a,easing:c,from:{t:0},to:{t:1},key:"pie-".concat(l),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(e){var i=e.t,a=n.map((function(t,e){var n=p&&p[e];if(n){var r=(0,A.Dj)(n.cx,t.cx),a=(0,A.Dj)(n.cy,t.cy),o=(0,A.Dj)(n.size,t.size);return D(D({},t),{},{cx:r(i),cy:a(i),size:o(i)})}var s=(0,A.Dj)(0,t.size);return D(D({},t),{},{size:s(i)})}));return r.createElement(y.W,null,t.renderSymbolsStatically(a))}))}},{key:"renderSymbols",value:function(){var t=this.props,e=t.points,n=t.isAnimationActive,r=this.state.prevPoints;return!(n&&e&&e.length)||r&&c()(r,e)?this.renderSymbolsStatically(e):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var t=this.props,e=t.points,n=t.xAxis,i=t.yAxis,a=t.children,o=(0,d.aS)(a,b.u);return o?o.map((function(t,a){var o=t.props,s=o.direction,c=o.dataKey;return r.cloneElement(t,{key:"".concat(s,"-").concat(c,"-").concat(e[a]),data:e,xAxis:n,yAxis:i,layout:"x"===s?"vertical":"horizontal",dataPointFormatter:function(t,e){return{x:t.cx,y:t.cy,value:"x"===s?+t.node.x:+t.node.y,errorVal:(0,g.kr)(t,e)}}})})):null}},{key:"renderLine",value:function(){var t,e,n=this.props,i=n.points,a=n.line,o=n.lineType,s=n.lineJointType,c=(0,d.J9)(this.props,!1),l=(0,d.J9)(a,!1);if("joint"===o)t=i.map((function(t){return{x:t.cx,y:t.cy}}));else if("fitting"===o){var u=(0,A.jG)(i),f=u.xmin,m=u.xmax,h=u.a,b=u.b,x=function(t){return h*t+b};t=[{x:f,y:x(f)},{x:m,y:x(m)}]}var g=D(D(D({},c),{},{fill:"none",stroke:c&&c.fill},l),{},{points:t});return e=r.isValidElement(a)?r.cloneElement(a,g):p()(a)?a(g):r.createElement(v.I,T({},g,{type:s})),r.createElement(y.W,{className:"recharts-scatter-line",key:"recharts-scatter-line"},e)}},{key:"render",value:function(){var t=this.props,e=t.hide,n=t.points,i=t.line,a=t.className,s=t.xAxis,c=t.yAxis,l=t.left,p=t.top,d=t.width,m=t.height,h=t.id,v=t.isAnimationActive;if(e||!n||!n.length)return null;var b=this.state.isAnimationFinished,x=(0,u.A)("recharts-scatter",a),A=s&&s.allowDataOverflow,g=c&&c.allowDataOverflow,O=A||g,P=o()(h)?this.id:h;return r.createElement(y.W,{className:x,clipPath:O?"url(#clipPath-".concat(P,")"):null},A||g?r.createElement("defs",null,r.createElement("clipPath",{id:"clipPath-".concat(P)},r.createElement("rect",{x:A?l:l-d/2,y:g?p:p-m/2,width:A?d:2*d,height:g?m:2*m}))):null,i&&this.renderLine(),this.renderErrorBar(),r.createElement(y.W,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!v||b)&&f.Z.renderCallByParent(this.props,n))}}])&&C(n.prototype,a),s&&C(n,s),Object.defineProperty(n,"prototype",{writable:!1}),e}(r.PureComponent);B(M,"displayName","Scatter"),B(M,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!m.m.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"}),B(M,"getComposedData",(function(t){var e=t.xAxis,n=t.yAxis,r=t.zAxis,i=t.item,a=t.displayedData,s=t.xAxisTicks,c=t.yAxisTicks,l=t.offset,p=i.props.tooltipType,u=(0,d.aS)(i.props.children,x.f),y=o()(e.dataKey)?i.props.dataKey:e.dataKey,f=o()(n.dataKey)?i.props.dataKey:n.dataKey,m=r&&r.dataKey,v=r?r.range:h.K.defaultProps.range,b=v&&v[0],A=e.scale.bandwidth?e.scale.bandwidth():0,O=n.scale.bandwidth?n.scale.bandwidth():0,P=a.map((function(t,a){var l=(0,g.kr)(t,y),d=(0,g.kr)(t,f),h=!o()(m)&&(0,g.kr)(t,m)||"-",v=[{name:o()(e.dataKey)?i.props.name:e.name||e.dataKey,unit:e.unit||"",value:l,payload:t,dataKey:y,type:p},{name:o()(n.dataKey)?i.props.name:n.name||n.dataKey,unit:n.unit||"",value:d,payload:t,dataKey:f,type:p}];"-"!==h&&v.push({name:r.name||r.dataKey,unit:r.unit||"",value:h,payload:t,dataKey:m,type:p});var x=(0,g.nb)({axis:e,ticks:s,bandSize:A,entry:t,index:a,dataKey:y}),P=(0,g.nb)({axis:n,ticks:c,bandSize:O,entry:t,index:a,dataKey:f}),j="-"!==h?r.scale(h):b,w=Math.sqrt(Math.max(j,0)/Math.PI);return D(D({},t),{},{cx:x,cy:P,x:x-w,y:P-w,xAxis:e,yAxis:n,zAxis:r,width:2*w,height:2*w,size:j,node:{x:l,y:d,z:h},tooltipPayload:v,tooltipPosition:{x:x,y:P},payload:t},u&&u[a]&&u[a].props)}));return D({points:P},l)}))},24921:(t,e,n)=>{n.d(e,{K:()=>r});var r=function(){return null};r.displayName="ZAxis",r.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"}},22244:(t,e,n)=>{n.d(e,{t:()=>l});var r=n(21980),i=n(8730),a=n(51143),o=n(89280),s=n(24921),c=n(78404),l=(0,r.gu)({chartName:"ScatterChart",GraphicalChild:i.X,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:a.W},{axisType:"yAxis",AxisComp:o.h},{axisType:"zAxis",AxisComp:s.K}],formatAxisMap:c.pr})}}]);
//# sourceMappingURL=2244.b30cd232.chunk.js.map