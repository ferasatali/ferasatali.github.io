import{g as T,c as J,a as Q,m as W,h as Z,b as l,d as P,T as I,p as q,o as ee,u as te,e as ae,f as B,r as z,i as ne,s as se,j as oe,w as ie,k as re,n as le,l as L,q as ce,t as M,v as F,x as N,y as k,z as $,A as g,B as u,C as w,F as ue,D as de,E as me,G as fe,H as R,I as G,_ as X,J as Y,V as pe,K as ge}from"./index-3959720a.js";import{a as E,d as ve,s as K,b as _e,g as he,n as ye,V as we,c as S,e as C}from"./VGrid-7b864be0.js";import{m as xe,u as be,V as j,a as H,f as ke}from"./forwardRefs-0cb4a7e1.js";function Ve(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return T()({name:a??J(Q(e.replace(/__/g,"-"))),props:{tag:{type:String,default:c},...W()},setup(t,n){let{slots:i}=n;return()=>{var d;return Z(t.tag,{class:[e,t.class],style:t.style},(d=i.default)==null?void 0:d.call(i))}}})}const Ee="/assets/menu-7a60e700.svg",Ce="/assets/mfa-logo-6aecc9b1.png",Se=[{name:"GitHub",link:"https://github.com/ferasatali",icon:"/github.png"},{name:"LinkedIn",link:"https://www.linkedin.com/in/mferasatali",icon:"/linkedin-02.png"},{name:"GitHub Aslase",link:"https://github.com/fali-aslase",icon:"/github.png"},{name:"Twitter",link:"https://twitter.com/AliFerasat",icon:"/twitter.png"},{name:"Instagram",link:"https://www.instagram.com/mferasatali/",icon:"/instagram.png"},{name:"Facebook",link:"https://www.facebook.com/mferasatali",icon:"/facebook-01.png"}],Pe=Ve("v-spacer","div","VSpacer");const Ae=q({target:[Object,Array]},"v-dialog-transition"),De=T()({name:"VDialogTransition",props:Ae(),setup(e,c){let{slots:a}=c;const t={onBeforeEnter(n){n.style.pointerEvents="none",n.style.visibility="hidden"},async onEnter(n,i){var h;await new Promise(f=>requestAnimationFrame(f)),await new Promise(f=>requestAnimationFrame(f)),n.style.visibility="";const{x:d,y:r,sx:s,sy:v,speed:_}=U(e.target,n),x=E(n,[{transform:`translate(${d}px, ${r}px) scale(${s}, ${v})`,opacity:0},{}],{duration:225*_,easing:ve});(h=O(n))==null||h.forEach(f=>{E(f,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*_,easing:K})}),x.finished.then(()=>i())},onAfterEnter(n){n.style.removeProperty("pointer-events")},onBeforeLeave(n){n.style.pointerEvents="none"},async onLeave(n,i){var h;await new Promise(f=>requestAnimationFrame(f));const{x:d,y:r,sx:s,sy:v,speed:_}=U(e.target,n);E(n,[{},{transform:`translate(${d}px, ${r}px) scale(${s}, ${v})`,opacity:0}],{duration:125*_,easing:_e}).finished.then(()=>i()),(h=O(n))==null||h.forEach(f=>{E(f,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*_,easing:K})})},onAfterLeave(n){n.style.removeProperty("pointer-events")}};return()=>e.target?l(I,P({name:"dialog-transition"},t,{css:!1}),a):l(I,{name:"dialog-transition"},a)}});function O(e){var a;const c=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return c&&[...c]}function U(e,c){const a=he(e),t=ye(c),[n,i]=getComputedStyle(c).transformOrigin.split(" ").map(p=>parseFloat(p)),[d,r]=getComputedStyle(c).getPropertyValue("--v-overlay-anchor-origin").split(" ");let s=a.left+a.width/2;d==="left"||r==="left"?s-=a.width/2:(d==="right"||r==="right")&&(s+=a.width/2);let v=a.top+a.height/2;d==="top"||r==="top"?v-=a.height/2:(d==="bottom"||r==="bottom")&&(v+=a.height/2);const _=a.width/t.width,x=a.height/t.height,h=Math.max(1,_,x),f=_/h||0,D=x/h||0,o=t.width*t.height/(window.innerWidth*window.innerHeight),m=o>.12?Math.min(1.5,(o-.12)*10+1):1;return{x:s-(n+t.left),y:v-(i+t.top),sx:f,sy:D,speed:m}}const $e=q({id:String,...ee(xe({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:De}}),["absolute"])},"VMenu"),Te=T()({name:"VMenu",props:$e(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:a}=c;const t=te(e,"modelValue"),{scopeId:n}=be(),i=ae(),d=B(()=>e.id||`v-menu-${i}`),r=z(),s=ne(j,null),v=se(0);oe(j,{register(){++v.value},unregister(){--v.value},closeParents(){setTimeout(()=>{v.value||(t.value=!1,s==null||s.closeParents())},40)}});async function _(o){var y,b,V;const m=o.relatedTarget,p=o.target;await le(),t.value&&m!==p&&((y=r.value)!=null&&y.contentEl)&&((b=r.value)!=null&&b.globalTop)&&![document,r.value.contentEl].includes(p)&&!r.value.contentEl.contains(p)&&((V=L(r.value.contentEl)[0])==null||V.focus())}ie(t,o=>{o?(s==null||s.register(),document.addEventListener("focusin",_,{once:!0})):(s==null||s.unregister(),document.removeEventListener("focusin",_))});function x(){s==null||s.closeParents()}function h(o){var m,p,y;e.disabled||o.key==="Tab"&&(ce(L((m=r.value)==null?void 0:m.contentEl,!1),o.shiftKey?"prev":"next",V=>V.tabIndex>=0)||(t.value=!1,(y=(p=r.value)==null?void 0:p.activatorEl)==null||y.focus()))}function f(o){var p;if(e.disabled)return;const m=(p=r.value)==null?void 0:p.contentEl;m&&t.value?o.key==="ArrowDown"?(o.preventDefault(),M(m,"next")):o.key==="ArrowUp"&&(o.preventDefault(),M(m,"prev")):["ArrowDown","ArrowUp"].includes(o.key)&&(t.value=!0,o.preventDefault(),setTimeout(()=>setTimeout(()=>f(o))))}const D=B(()=>P({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":d.value,onKeydown:f},e.activatorProps));return re(()=>{const o=H.filterProps(e);return l(H,P({ref:r,class:["v-menu",e.class],style:e.style},o,{modelValue:t.value,"onUpdate:modelValue":m=>t.value=m,absolute:!0,activatorProps:D.value,"onClick:outside":x,onKeydown:h},n),{activator:a.activator,default:function(){for(var m=arguments.length,p=new Array(m),y=0;y<m;y++)p[y]=arguments[y];return l(we,{root:"VMenu"},{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,...p)]}})}})}),ke({id:d,ΨopenChildren:v},r)}}),A=e=>(R("data-v-42c6d600"),e=e(),G(),e),Fe={class:"d-flex align-center justify-space-between flex-wrap pa-4"},Ie=A(()=>u("img",{width:"100px",src:Ce,class:"mr-4"},null,-1)),Be={class:"d-flex flex-column base-card base-card-card ml-4"},Le=A(()=>u("div",{class:"d-flex align-center justify-center"},[u("p",{class:"header"},"Contact & Social Links")],-1)),Me={class:"d-flex flex-column mt-2 base-card base-card-menu",style:{gap:"0.6rem"}},Ke={class:"d-flex align-center",style:{gap:"0.6rem"}},je=A(()=>u("p",null,"ferasatali14@gmail.com",-1)),He={class:"d-flex align-center",style:{gap:"0.6rem"}},Oe=A(()=>u("p",null,"03424658936",-1)),Ue=["src"],qe=["href"],ze={class:"d-flex flex-column mt-2 base-card base-card-menu"},Ne=F({__name:"HeaderComponent",setup(e){const c=z(!1);return(a,t)=>{const n=N("RouterLink");return k(),$("div",Fe,[l(n,{to:"/"},{default:g(()=>[Ie]),_:1}),l(Pe),u("div",null,[l(Te,{location:"left","close-on-content-click":!1,"model-value":c.value,"onUpdate:modelValue":t[0]||(t[0]=i=>c.value=i)},{activator:g(({props:i})=>[l(S,P({class:"text-capitalize free-trail-btn",height:"45px"},i),{default:g(()=>[w(" Connect With Ferasat ")]),_:2},1040)]),default:g(()=>[u("div",Be,[Le,u("div",Me,[u("div",Ke,[l(C,null,{default:g(()=>[w(" mdi-email ")]),_:1}),je]),u("div",He,[l(C,null,{default:g(()=>[w(" mdi-phone ")]),_:1}),Oe])]),(k(!0),$(ue,null,de(me(Se),(i,d)=>(k(),$("div",{class:"d-flex align-center flex-row mt-3 base-card base-card-menu",style:{gap:"0.6rem"},key:d},[u("img",{width:"25px",class:"social-icons",src:i.icon},null,8,Ue),u("p",null,[w(fe(i.name)+" : ",1),u("a",{href:i.link,target:"_blank"}," MFerasatAli",8,qe)])]))),128)),u("div",ze,[l(S,{variant:"text",href:"https://drive.google.com/file/d/1NKosJ2dj94GCBNEzmjgpjcA82yuKfUsp/view?usp=sharing",target:"_blank"},{default:g(()=>[l(C,{class:"mr-2"},{default:g(()=>[w(" mdi-download ")]),_:1}),w(" Resume ")]),_:1}),l(S,{variant:"text",href:"https://drive.google.com/file/d/18a37mXxFUQZzhxqfwQeBEKYo-eIKSacu/view?usp=sharing",target:"_blank"},{default:g(()=>[l(C,{class:"mr-2"},{default:g(()=>[w(" mdi-download ")]),_:1}),w(" Cover Letter ")]),_:1})])])]),_:1},8,["model-value"])])])}}});const Re=X(Ne,[["__scopeId","data-v-42c6d600"]]),Ge=F({__name:"View",setup(e){return(c,a)=>{const t=N("router-view");return k(),Y(pe,null,{default:g(()=>[l(t)]),_:1})}}}),Xe=e=>(R("data-v-af2779e7"),e=e(),G(),e),Ye={class:"app-container"},Je={class:"mt-auto d-flex align-center justify-center pt-7"},Qe=Xe(()=>u("img",{src:Ee,class:"ml-2"},null,-1)),We=F({__name:"Default",setup(e){return(c,a)=>(k(),Y(ge,null,{default:g(()=>[u("div",Ye,[l(Re),l(Ge)]),u("div",Je,[l(S,{variant:"text",class:"btn-explore",to:"/discover"},{prepend:g(()=>[Qe]),_:1})])]),_:1}))}});const nt=X(We,[["__scopeId","data-v-af2779e7"]]);export{nt as default};
