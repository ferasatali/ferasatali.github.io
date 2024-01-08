import{aD as j,p as b,ar as P,j as c,aE as O,f as _e,aF as ge,aG as et,aH as tt,aI as nt,b as v,S as at,au as he,m as A,ae as D,G as M,g as E,J as G,ag as Be,L as V,N as $,t as U,V as st,D as Ie,v as it,M as ae,w as se,C as lt,H as Ve,B as ot,al as Pe,at as rt,aJ as ut,d as ct,aK as dt,k as y,ac as ee,r as ie,aL as vt,aM as ft,aN as mt,z as gt,aj as ht,af as yt,q as bt,K as Ee,T as Ct,aO as pt,aP as ye,I as xt,n as Le,o as St,ah as kt,aQ as be,P as wt,R as _t}from"./index-c121083e.js";const Te=["top","bottom"],Bt=["start","end","left","right"];function It(e,t){let[a,n]=e.split(" ");return n||(n=j(Te,a)?"start":j(Bt,a)?"top":"center"),{side:Ce(a,t),align:Ce(n,t)}}function Ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function vn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function fn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function mn(e){return{side:e.align,align:e.side}}function gn(e){return j(Te,e.side)?"y":"x"}class F{constructor(t){let{x:a,y:n,width:s,height:i}=t;this.x=a,this.y=n,this.width=s,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function hn(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function yn(e){return Array.isArray(e)?new F({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function bn(e){const t=e.getBoundingClientRect(),a=getComputedStyle(e),n=a.transform;if(n){let s,i,l,u,o;if(n.startsWith("matrix3d("))s=n.slice(9,-1).split(/, /),i=+s[0],l=+s[5],u=+s[12],o=+s[13];else if(n.startsWith("matrix("))s=n.slice(7,-1).split(/, /),i=+s[0],l=+s[3],u=+s[4],o=+s[5];else return new F(t);const g=a.transformOrigin,h=t.x-u-(1-i)*parseFloat(g),C=t.y-o-(1-l)*parseFloat(g.slice(g.indexOf(" ")+1)),r=i?t.width/i:e.offsetWidth+1,d=l?t.height/l:e.offsetHeight+1;return new F({x:h,y:C,width:r,height:d})}else return new F(t)}function Cn(e,t,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let n;try{n=e.animate(t,a)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(s=>{n.onfinish=()=>{s(n)}})),n}const pn="cubic-bezier(0.4, 0, 0.2, 1)",xn="cubic-bezier(0.0, 0, 0.2, 1)",Sn="cubic-bezier(0.4, 0, 1, 1)";const $e=b({border:[Boolean,Number,String]},"border");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:c(()=>{const n=O(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))s.push(`border-${i}`);return s})}}const Vt=[null,"default","comfortable","compact"],Re=b({density:{type:String,default:"default",validator:e=>Vt.includes(e)}},"density");function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const Oe=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ae(e){return{elevationClasses:c(()=>{const a=O(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const le=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:c(()=>{const n=O(e)?e.value:e.rounded,s=[];if(n===!0||n==="")s.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))s.push(`rounded-${i}`);return s})}}function re(e){return _e(()=>{const t=[],a={};if(e.value.background)if(ge(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&et(e.value.background)){const n=tt(e.value.background);if(n.a==null||n.a===1){const s=nt(n);a.color=s,a.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ge(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function q(e,t){const a=c(()=>({text:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=re(a);return{textColorClasses:n,textColorStyles:s}}function pe(e,t){const a=c(()=>({background:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=re(a);return{backgroundColorClasses:n,backgroundColorStyles:s}}const Pt=["elevated","flat","tonal","outlined","text","plain"];function Et(e,t){return v(at,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const De=b({color:String,variant:{type:String,default:"elevated",validator:e=>Pt.includes(e)}},"variant");function Lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const a=c(()=>{const{variant:i}=he(e);return`${t}--variant-${i}`}),{colorClasses:n,colorStyles:s}=re(c(()=>{const{variant:i,color:l}=he(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const Me=b({divided:Boolean,...$e(),...A(),...Re(),...Oe(),...le(),...D(),...M(),...De()},"VBtnGroup"),xe=E()({name:"VBtnGroup",props:Me(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=G(e),{densityClasses:s}=ze(e),{borderClasses:i}=Ne(e),{elevationClasses:l}=Ae(e),{roundedClasses:u}=oe(e);Be({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),$(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,i.value,s.value,l.value,u.value,e.class],style:e.style},a))}}),Tt=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),$t=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function Nt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=U("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=st();Ie(Symbol.for(`${t.description}:id`),s);const i=it(t,null);if(!i){if(!a)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=V(e,"value"),u=c(()=>!!(i.disabled.value||e.disabled));i.register({id:s,value:l,disabled:u},n),ae(()=>{i.unregister(s)});const o=c(()=>i.isSelected(s)),g=c(()=>o.value&&[i.selectedClass.value,e.selectedClass]);return se(o,h=>{n.emit("group:selected",{value:h})}),{id:s,isSelected:o,toggle:()=>i.select(s,!o.value),select:h=>i.select(s,h),selectedClass:g,value:l,disabled:u,group:i}}function Rt(e,t){let a=!1;const n=lt([]),s=Ve(e,"modelValue",[],r=>r==null?[]:Ge(n,rt(r)),r=>{const d=Ot(n,r);return e.multiple?d:d[0]}),i=U("useGroup");function l(r,d){const p=r,m=Symbol.for(`${t.description}:id`),S=ut(m,i==null?void 0:i.vnode).indexOf(d);S>-1?n.splice(S,0,p):n.push(p)}function u(r){if(a)return;o();const d=n.findIndex(p=>p.id===r);n.splice(d,1)}function o(){const r=n.find(d=>!d.disabled);r&&e.mandatory==="force"&&!s.value.length&&(s.value=[r.id])}ot(()=>{o()}),ae(()=>{a=!0});function g(r,d){const p=n.find(m=>m.id===r);if(!(d&&(p!=null&&p.disabled)))if(e.multiple){const m=s.value.slice(),w=m.findIndex(f=>f===r),S=~w;if(d=d??!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;w<0&&d?m.push(r):w>=0&&!d&&m.splice(w,1),s.value=m}else{const m=s.value.includes(r);if(e.mandatory&&m)return;s.value=d??!m?[r]:[]}}function h(r){if(e.multiple,s.value.length){const d=s.value[0],p=n.findIndex(S=>S.id===d);let m=(p+r)%n.length,w=n[m];for(;w.disabled&&m!==p;)m=(m+r)%n.length,w=n[m];if(w.disabled)return;s.value=[n[m].id]}else{const d=n.find(p=>!p.disabled);d&&(s.value=[d.id])}}const C={register:l,unregister:u,selected:s,select:g,disabled:V(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:r=>s.value.includes(r),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:r=>zt(n,r)};return Ie(t,C),C}function zt(e,t){const a=Ge(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Ge(e,t){const a=[];return t.forEach(n=>{const s=e.find(l=>Pe(n,l.value)),i=e[n];(s==null?void 0:s.value)!=null?a.push(s.id):i!=null&&a.push(i.id)}),a}function Ot(e,t){const a=[];return t.forEach(n=>{const s=e.findIndex(i=>i.id===n);if(~s){const i=e[s];a.push(i.value!=null?i.value:s)}}),a}const He=Symbol.for("vuetify:v-btn-toggle"),At=b({...Me(),...Tt()},"VBtnToggle");E()({name:"VBtnToggle",props:At(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:s,prev:i,select:l,selected:u}=Rt(e,He);return $(()=>{const o=xe.filterProps(e);return v(xe,ct({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:n,next:s,prev:i,select:l,selected:u})]}})}),{next:s,prev:i,select:l}}});const Dt=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),J=E(!1)({name:"VDefaultsProvider",props:Dt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:s,reset:i,root:l,scoped:u}=dt(e);return Be(n,{reset:i,root:l,scoped:u,disabled:s}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}});const Mt=["x-small","small","default","large","x-large"],ue=b({size:{type:[String,Number],default:"default"}},"size");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return _e(()=>{let a,n;return j(Mt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:y(e.size),height:y(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Gt=b({color:String,start:Boolean,end:Boolean,icon:ee,...A(),...ue(),...D({tag:"i"}),...M()},"VIcon"),Q=E()({name:"VIcon",props:Gt(),setup(e,t){let{attrs:a,slots:n}=t;const s=ie(),{themeClasses:i}=G(e),{iconData:l}=vt(c(()=>s.value||e.icon)),{sizeClasses:u}=ce(e),{textColorClasses:o,textColorStyles:g}=q(V(e,"color"));return $(()=>{var C,r;const h=(C=n.default)==null?void 0:C.call(n);return h&&(s.value=(r=ft(h).filter(d=>d.type===mt&&d.children&&typeof d.children=="string")[0])==null?void 0:r.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,u.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:y(e.size),height:y(e.size),width:y(e.size)},g.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[h]})}),{}}});function We(e,t){const a=ie(),n=gt(!1);if(ht){const s=new IntersectionObserver(i=>{e==null||e(i,s),n.value=!!i.find(l=>l.isIntersecting)},t);ae(()=>{s.disconnect()}),se(a,(i,l)=>{l&&(s.unobserve(l),n.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Ht=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...A(),...ue(),...D({tag:"div"}),...M()},"VProgressCircular"),Wt=E()({name:"VProgressCircular",props:Ht(),setup(e,t){let{slots:a}=t;const n=20,s=2*Math.PI*n,i=ie(),{themeClasses:l}=G(e),{sizeClasses:u,sizeStyles:o}=ce(e),{textColorClasses:g,textColorStyles:h}=q(V(e,"color")),{textColorClasses:C,textColorStyles:r}=q(V(e,"bgColor")),{intersectionRef:d,isIntersecting:p}=We(),{resizeRef:m,contentRect:w}=yt(),S=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=c(()=>Number(e.width)),x=c(()=>o.value?Number(e.size):w.value?w.value.width:Math.max(f.value,32)),I=c(()=>n/(1-f.value/x.value)*2),B=c(()=>f.value/x.value*I.value),N=c(()=>y((100-S.value)/100*s));return bt(()=>{d.value=i.value,m.value=i.value}),$(()=>v(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,u.value,g.value,e.class],style:[o.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[v("circle",{class:["v-progress-circular__underlay",C.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":s,"stroke-dashoffset":N.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Ft=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function jt(e){return{dimensionStyles:c(()=>({height:y(e.height),maxHeight:y(e.maxHeight),maxWidth:y(e.maxWidth),minHeight:y(e.minHeight),minWidth:y(e.minWidth),width:y(e.width)}))}}const Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Fe=b({location:String},"location");function je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ee();return{locationStyles:c(()=>{if(!e.location)return{};const{side:i,align:l}=It(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function u(g){return a?a(g):0}const o={};return i!=="center"&&(t?o[Se[i]]=`calc(100% - ${u(i)}px)`:o[i]=0),l!=="center"?t?o[Se[l]]=`calc(100% - ${u(l)}px)`:o[l]=0:(i==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),o})}}const qt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...A(),...Fe({location:"top"}),...le(),...D(),...M()},"VProgressLinear"),Xt=E()({name:"VProgressLinear",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ve(e,"modelValue"),{isRtl:s,rtlClasses:i}=Ee(),{themeClasses:l}=G(e),{locationStyles:u}=je(e),{textColorClasses:o,textColorStyles:g}=q(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:C}=pe(c(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:d}=pe(e,"color"),{roundedClasses:p}=oe(e),{intersectionRef:m,isIntersecting:w}=We(),S=c(()=>parseInt(e.max,10)),f=c(()=>parseInt(e.height,10)),x=c(()=>parseFloat(e.bufferValue)/S.value*100),I=c(()=>parseFloat(n.value)/S.value*100),B=c(()=>s.value!==e.reverse),N=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),H=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function Y(k){if(!m.value)return;const{left:L,right:K,width:T}=m.value.getBoundingClientRect(),W=B.value?T-k.clientX+(K-T):k.clientX-L;n.value=Math.round(W/T*S.value)}return $(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},p.value,l.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?y(f.value):0,"--v-progress-linear-height":y(f.value),...u.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&Y},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...g.value,[B.value?"left":"right"]:y(-f.value),borderTop:`${y(f.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${y(f.value/4)})`,width:y(100-x.value,"%"),"--v-progress-linear-stream-to":y(f.value*(B.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",h.value],style:[C.value,{opacity:H.value,width:y(e.stream?x.value:100,"%")}]},null),v(Ct,{name:N.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>v("div",{key:k,class:["v-progress-linear__indeterminate",k,r.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",r.value],style:[d.value,{width:y(I.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:I.value,buffer:x.value})])]})),{}}}),Ut=b({loading:[Boolean,String]},"loader");function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function kn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Xt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Kt=["static","relative","fixed","absolute","sticky"],Jt=b({position:{type:String,validator:e=>Kt.includes(e)}},"position");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function Zt(){const e=U("useRoute");return c(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function wn(){var e,t;return(t=(e=U("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function en(e,t){const a=pt("RouterLink"),n=c(()=>!!(e.href||e.to)),s=c(()=>(n==null?void 0:n.value)||ye(t,"click")||ye(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:s,href:V(e,"href")};const i=e.to?a.useLink(e):void 0,l=Zt();return{isLink:n,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&c(()=>{var u,o,g;return e.exact?l.value?((g=i.isExactActive)==null?void 0:g.value)&&Pe(i.route.value.query,l.value.query):(o=i.isExactActive)==null?void 0:o.value:(u=i.isActive)==null?void 0:u.value}),href:c(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const tn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Z=!1;function _n(e,t){let a=!1,n,s;xt&&(Le(()=>{window.addEventListener("popstate",i),n=e==null?void 0:e.beforeEach((l,u,o)=>{Z?a?t(o):o():setTimeout(()=>a?t(o):o()),Z=!0}),s=e==null?void 0:e.afterEach(()=>{Z=!1})}),St(()=>{window.removeEventListener("popstate",i),n==null||n(),s==null||s()}));function i(l){var u;(u=l.state)!=null&&u.replaced||(a=!0,setTimeout(()=>a=!1))}}function nn(e,t){se(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Le(()=>{t(!0)})},{immediate:!0})}const te=Symbol("rippleStop"),an=80;function ke(e,t){e.style.transform=t,e.style.webkitTransform=t}function ne(e){return e.constructor.name==="TouchEvent"}function qe(e){return e.constructor.name==="KeyboardEvent"}const sn=function(e,t){var C;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,s=0;if(!qe(e)){const r=t.getBoundingClientRect(),d=ne(e)?e.touches[e.touches.length-1]:e;n=d.clientX-r.left,s=d.clientY-r.top}let i=0,l=.3;(C=t._ripple)!=null&&C.circle?(l=.15,i=t.clientWidth/2,i=a.center?i:i+Math.sqrt((n-i)**2+(s-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-i*2)/2}px`,o=`${(t.clientHeight-i*2)/2}px`,g=a.center?u:`${n-i}px`,h=a.center?o:`${s-i}px`;return{radius:i,scale:l,x:g,y:h,centerX:u,centerY:o}},X={show(e,t){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:i,scale:l,x:u,y:o,centerX:g,centerY:h}=sn(e,t,a),C=`${i*2}px`;s.className="v-ripple__animation",s.style.width=C,s.style.height=C,t.appendChild(n);const r=window.getComputedStyle(t);r&&r.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ke(s,`translate(${u}, ${o}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ke(s,`translate(${g}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),s=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=a.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function Xe(e){return typeof e>"u"||!!e}function R(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[te])){if(e[te]=!0,ne(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||qe(e),a._ripple.class&&(t.class=a._ripple.class),ne(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{X.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},an)}else X.show(e,a,t)}}function we(e){e[te]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function Ue(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let z=!1;function Ye(e){!z&&(e.keyCode===be.enter||e.keyCode===be.space)&&(z=!0,R(e))}function Ke(e){z=!1,_(e)}function Je(e){z&&(z=!1,_(e))}function Qe(e,t,a){const{value:n,modifiers:s}=t,i=Xe(n);if(i||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,kt(n)&&n.class&&(e._ripple.class=n.class),i&&!a){if(s.stop){e.addEventListener("touchstart",we,{passive:!0}),e.addEventListener("mousedown",we);return}e.addEventListener("touchstart",R,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Ue,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",R),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Ye),e.addEventListener("keyup",Ke),e.addEventListener("blur",Je),e.addEventListener("dragstart",_,{passive:!0})}else!i&&a&&Ze(e)}function Ze(e){e.removeEventListener("mousedown",R),e.removeEventListener("touchstart",R),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Ue),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Ye),e.removeEventListener("keyup",Ke),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Je)}function ln(e,t){Qe(e,t,!1)}function on(e){delete e._ripple,Ze(e)}function rn(e,t){if(t.value===t.oldValue)return;const a=Xe(t.oldValue);Qe(e,t,a)}const un={mounted:ln,unmounted:on,updated:rn},cn=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:He},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ee,appendIcon:ee,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...$e(),...A(),...Re(),...Ft(),...Oe(),...$t(),...Ut(),...Fe(),...Jt(),...le(),...tn(),...ue(),...D({tag:"button"}),...M(),...De({variant:"elevated"})},"VBtn"),Bn=E()({name:"VBtn",directives:{Ripple:un},props:cn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=G(e),{borderClasses:i}=Ne(e),{colorClasses:l,colorStyles:u,variantClasses:o}=Lt(e),{densityClasses:g}=ze(e),{dimensionStyles:h}=jt(e),{elevationClasses:C}=Ae(e),{loaderClasses:r}=Yt(e),{locationStyles:d}=je(e),{positionClasses:p}=Qt(e),{roundedClasses:m}=oe(e),{sizeClasses:w,sizeStyles:S}=ce(e),f=Nt(e,e.symbol,!1),x=en(e,a),I=c(()=>{var k;return e.active!==void 0?e.active:x.isLink.value?(k=x.isActive)==null?void 0:k.value:f==null?void 0:f.isSelected.value}),B=c(()=>(f==null?void 0:f.disabled.value)||e.disabled),N=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function Y(k){var L;B.value||x.isLink.value&&(k.metaKey||k.ctrlKey||k.shiftKey||k.button!==0||a.target==="_blank")||((L=x.navigate)==null||L.call(x,k),f==null||f.toggle())}return nn(x,f==null?void 0:f.select),$(()=>{var de,ve;const k=x.isLink.value?"a":e.tag,L=!!(e.prependIcon||n.prepend),K=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),W=(f==null?void 0:f.isSelected.value)&&(!x.isLink.value||((de=x.isActive)==null?void 0:de.value))||!f||((ve=x.isActive)==null?void 0:ve.value);return wt(v(k,{type:k==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":N.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,i.value,W?l.value:void 0,g.value,C.value,r.value,p.value,m.value,w.value,o.value,e.class],style:[W?u.value:void 0,h.value,d.value,S.value,e.style],disabled:B.value||void 0,href:x.href.value,onClick:Y,value:H.value},{default:()=>{var fe;return[Et(!0,"v-btn"),!e.icon&&L&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(J,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(Q,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(Q,{key:"content-icon",icon:e.icon},null):v(J,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var me;return[((me=n.default)==null?void 0:me.call(n))??e.text]}})]),!e.icon&&K&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(J,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(Q,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((fe=n.loader)==null?void 0:fe.call(n))??v(Wt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[_t("ripple"),!B.value&&e.ripple,null]])}),{}}});export{ue as A,F as B,De as C,Lt as D,oe as E,ce as F,Et as G,$e as H,Oe as I,$t as J,tn as K,Ne as L,Ae as M,Nt as N,en as O,Xt as P,Ut as Q,un as R,Yt as S,kn as T,J as V,Cn as a,Sn as b,fn as c,xn as d,mn as e,vn as f,yn as g,gn as h,hn as i,jt as j,wn as k,_n as l,Ft as m,bn as n,Bn as o,It as p,Q as q,cn as r,pn as s,q as t,pe as u,Tt as v,Rt as w,Re as x,ze as y,le as z};
