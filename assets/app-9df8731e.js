import"./VGrid-2b954961.js";import{az as f,c as v,p as h,m as L,ae as _,g as d,j as A,h as y,aA as U,T as x,a as F,aB as z,r as p,aC as H}from"./index-d5d15827.js";const E=(()=>f.reduce((t,i)=>(t[i]={type:[Boolean,String,Number],default:!1},t),{}))(),$=(()=>f.reduce((t,i)=>{const s="offset"+v(i);return t[s]={type:[String,Number],default:null},t},{}))(),N=(()=>f.reduce((t,i)=>{const s="order"+v(i);return t[s]={type:[String,Number],default:null},t},{}))(),C={col:Object.keys(E),offset:Object.keys($),order:Object.keys(N)};function M(t,i,s){let a=t;if(!(s==null||s===!1)){if(i){const o=i.replace(t,"");a+=`-${o}`}return t==="col"&&(a="v-"+a),t==="col"&&(s===""||s===!0)||(a+=`-${s}`),a.toLowerCase()}}const K=["auto","start","end","center","baseline","stretch"],q=h({cols:{type:[Boolean,String,Number],default:!1},...E,offset:{type:[String,Number],default:null},...$,order:{type:[String,Number],default:null},...N,alignSelf:{type:String,default:null,validator:t=>K.includes(t)},...L(),..._()},"VCol"),at=d()({name:"VCol",props:q(),setup(t,i){let{slots:s}=i;const a=A(()=>{const o=[];let r;for(r in C)C[r].forEach(n=>{const u=t[n],c=M(r,n,u);c&&o.push(c)});const e=o.some(n=>n.startsWith("v-col-"));return o.push({"v-col":!e||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),o});return()=>{var o;return y(t.tag,{class:[a.value,t.class],style:t.style},(o=s.default)==null?void 0:o.call(s))}}}),S=["start","end","center"],P=["space-between","space-around","space-evenly"];function b(t,i){return f.reduce((s,a)=>{const o=t+v(a);return s[o]=i(),s},{})}const J=[...S,"baseline","stretch"],V=t=>J.includes(t),T=b("align",()=>({type:String,default:null,validator:V})),W=[...S,...P],k=t=>W.includes(t),B=b("justify",()=>({type:String,default:null,validator:k})),Y=[...S,...P,"stretch"],j=t=>Y.includes(t),I=b("alignContent",()=>({type:String,default:null,validator:j})),w={align:Object.keys(T),justify:Object.keys(B),alignContent:Object.keys(I)},X={align:"align",justify:"justify",alignContent:"align-content"};function D(t,i,s){let a=X[t];if(s!=null){if(i){const o=i.replace(t,"");a+=`-${o}`}return a+=`-${s}`,a.toLowerCase()}}const Q=h({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V},...T,justify:{type:String,default:null,validator:k},...B,alignContent:{type:String,default:null,validator:j},...I,...L(),..._()},"VRow"),ot=d()({name:"VRow",props:Q(),setup(t,i){let{slots:s}=i;const a=A(()=>{const o=[];let r;for(r in w)w[r].forEach(e=>{const n=t[e],u=D(r,e,n);u&&o.push(u)});return o.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),o});return()=>{var o;return y(t.tag,{class:["v-row",a.value,t.class],style:t.style},(o=s.default)==null?void 0:o.call(s))}}}),Z=h({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function l(t,i,s){return d()({name:t,props:Z({mode:s,origin:i}),setup(a,o){let{slots:r}=o;const e={onBeforeEnter(n){a.origin&&(n.style.transformOrigin=a.origin)},onLeave(n){if(a.leaveAbsolute){const{offsetTop:u,offsetLeft:c,offsetWidth:g,offsetHeight:m}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${u}px`,n.style.left=`${c}px`,n.style.width=`${g}px`,n.style.height=`${m}px`}a.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(a.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:u,top:c,left:g,width:m,height:R}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=u||"",n.style.top=c||"",n.style.left=g||"",n.style.width=m||"",n.style.height=R||""}}};return()=>{const n=a.group?U:x;return y(n,{name:a.disabled?"":t,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:e},r.default)}}})}function O(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return d()({name:t,props:{mode:{type:String,default:s},disabled:Boolean},setup(a,o){let{slots:r}=o;return()=>y(x,{name:a.disabled?"":t,css:!a.disabled,...a.disabled?{}:i},r.default)}})}function G(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=F(`offset-${s}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[s]:e.style[s]}},onEnter(e){const n=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const u=`${e[a]}px`;e.style[s]="0",e.offsetHeight,e.style.transition=n.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[s]=u})},onAfterEnter:r,onEnterCancelled:r,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[s]:e.style[s]},e.style.overflow="hidden",e.style[s]=`${e[a]}px`,e.offsetHeight,requestAnimationFrame(()=>e.style[s]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(e){const n=e._initialStyle[s];e.style.overflow=e._initialStyle.overflow,n!=null&&(e.style[s]=n),delete e._initialStyle}}l("fab-transition","center center","out-in");l("dialog-bottom-transition");l("dialog-top-transition");const it=l("fade-transition");l("scale-transition");l("scroll-x-transition");l("scroll-x-reverse-transition");l("scroll-y-transition");l("scroll-y-reverse-transition");l("slide-x-transition");l("slide-x-reverse-transition");const rt=l("slide-y-transition");l("slide-y-reverse-transition");O("expand-transition",G());const lt=O("expand-x-transition",G("",!0)),tt={}.VITE_APP_BASE_URL,et=tt,ut=z("app",()=>{const t=p(1),i=p("Home");function s(e){i.value=e}function a(){return i.value}function o(e){t.value=e}async function r(e){try{return(await H.post(`${et}/public/chatbot/chat`,e)).data.data}catch(n){console.log(n,"error")}}return{exploreCurrentTab:t,setNavBar:s,getNavBar:a,setExploreCurrentTab:o,chatBotApi:r}});export{ut as A,it as V,at as a,ot as b,lt as c,rt as d};
