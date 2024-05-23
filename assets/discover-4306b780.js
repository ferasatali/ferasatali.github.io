import{V as ne,A as pe,a as be,b as he}from"./app-c85ffff2.js";import{g as q,T as xe}from"./TextPlugin-190e56bf.js";import{p as J,o as ye,g as Q,f as S,s as P,r as H,k as Z,b as u,F as Se,d as G,P as ie,m as _e,Q as Ce,R as de,S as Te,U as ke,W as re,X as Ve,w as we,l as ze,Y as Pe,u as Re,Z as z,$ as Ie,a0 as Be,a1 as Ee,v as Me,K as Ae,O as $e,x as Oe,J as Fe,A as y,M as He,y as Ge,B as k,C as $,H as Ne,I as je,_ as De}from"./index-3ed8879b.js";import{j as Ue,k as We,h as L,a as Xe,s as Ye,l as qe,o as Le,i as K,p as Ke,q as Je,r as Qe}from"./forwardRefs-7520d781.js";import{V as Ze}from"./VTooltip-0c0a4380.js";const et="/assets/augur-(rep)-7ce7de33.svg",tt="/assets/dent-(dent)-07a06830.svg",at="/assets/civic-(cvc)-98c66a61.svg",lt="/assets/wanchain-(wan)-50094005.svg";const fe=Symbol.for("vuetify:v-tabs"),st=J({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ye(Ue({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),O=Q()({name:"VTab",props:st(),setup(e,c){let{slots:l,attrs:r}=c;const{textColorClasses:g,textColorStyles:d}=We(e,"sliderColor"),s=S(()=>e.direction==="horizontal"),o=P(!1),t=H(),i=H();function f(v){var R,m;let{value:p}=v;if(o.value=p,p){const V=(m=(R=t.value)==null?void 0:R.$el.parentElement)==null?void 0:m.querySelector(".v-tab--selected .v-tab__slider"),I=i.value;if(!V||!I)return;const j=getComputedStyle(V).color,h=V.getBoundingClientRect(),_=I.getBoundingClientRect(),w=s.value?"x":"y",B=s.value?"X":"Y",F=s.value?"right":"bottom",C=s.value?"width":"height",D=h[w],E=_[w],T=D>E?h[F]-_[F]:h[w]-_[w],U=Math.sign(T)>0?s.value?"right":"bottom":Math.sign(T)<0?s.value?"left":"top":"center",W=(Math.abs(T)+(Math.sign(T)<0?h[C]:_[C]))/Math.max(h[C],_[C])||0,b=h[C]/_[C]||0,M=1.5;Xe(I,{backgroundColor:[j,"currentcolor"],transform:[`translate${B}(${T}px) scale${B}(${b})`,`translate${B}(${T/M}px) scale${B}(${(W-1)/M+1})`,"none"],transformOrigin:Array(3).fill(U)},{duration:225,easing:Ye})}}return Z(()=>{const v=L.filterProps(e);return u(L,G({symbol:fe,ref:t,class:["v-tab",e.class],style:e.style,tabindex:o.value?0:-1,role:"tab","aria-selected":String(o.value),active:!1},v,r,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":f}),{...l,default:()=>{var p;return u(Se,null,[((p=l.default)==null?void 0:p.call(l))??e.text,!e.hideSlider&&u("div",{ref:i,class:["v-tab__slider",g.value],style:d.value},null)])}})}),{}}});function ue(e){const l=Math.abs(e);return Math.sign(e)*(l/((1/.501-2)*(1-l)+1))}function ce(e){let{selectedElement:c,containerSize:l,contentSize:r,isRtl:g,currentScrollOffset:d,isHorizontal:s}=e;const o=s?c.clientWidth:c.clientHeight,t=s?c.offsetLeft:c.offsetTop,i=g&&s?r-t-o:t,f=l+d,v=o+i,p=o*.4;return i<=d?d=Math.max(i-p,0):f<=v&&(d=Math.min(d-(f-v-p),r-l)),d}function ot(e){let{selectedElement:c,containerSize:l,contentSize:r,isRtl:g,isHorizontal:d}=e;const s=d?c.clientWidth:c.clientHeight,o=d?c.offsetLeft:c.offsetTop,t=g&&d?r-o-s/2-l/2:o+s/2-l/2;return Math.min(r-l,Math.max(0,t))}const nt=Symbol.for("vuetify:v-slide-group"),me=J({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:nt},nextIcon:{type:ie,default:"$next"},prevIcon:{type:ie,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},..._e(),...Ce(),...de(),...qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ve=Q()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:l}=c;const{isRtl:r}=Te(),{displayClasses:g,mobile:d}=ke(e),s=Le(e,e.symbol),o=P(!1),t=P(0),i=P(0),f=P(0),v=S(()=>e.direction==="horizontal"),{resizeRef:p,contentRect:R}=re(),{resizeRef:m,contentRect:V}=re(),I=S(()=>s.selected.value.length?s.items.value.findIndex(a=>a.id===s.selected.value[0]):-1),j=S(()=>s.selected.value.length?s.items.value.findIndex(a=>a.id===s.selected.value[s.selected.value.length-1]):-1);if(Ve){let a=-1;we(()=>[s.selected.value,R.value,V.value,v.value],()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{if(R.value&&V.value){const n=v.value?"width":"height";i.value=R.value[n],f.value=V.value[n],o.value=i.value+1<f.value}if(I.value>=0&&m.value){const n=m.value.children[j.value];I.value===0||!o.value?t.value=0:e.centerActive?t.value=ot({selectedElement:n,containerSize:i.value,contentSize:f.value,isRtl:r.value,isHorizontal:v.value}):o.value&&(t.value=ce({selectedElement:n,containerSize:i.value,contentSize:f.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:v.value}))}})})}const h=P(!1);let _=0,w=0;function B(a){const n=v.value?"clientX":"clientY";w=(r.value&&v.value?-1:1)*t.value,_=a.touches[0][n],h.value=!0}function F(a){if(!o.value)return;const n=v.value?"clientX":"clientY",x=r.value&&v.value?-1:1;t.value=x*(w+_-a.touches[0][n])}function C(a){const n=f.value-i.value;t.value<0||!o.value?t.value=0:t.value>=n&&(t.value=n),h.value=!1}function D(){p.value&&(p.value[v.value?"scrollLeft":"scrollTop"]=0)}const E=P(!1);function T(a){if(E.value=!0,!(!o.value||!m.value)){for(const n of a.composedPath())for(const x of m.value.children)if(x===n){t.value=ce({selectedElement:x,containerSize:i.value,contentSize:f.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:v.value});return}}}function U(a){E.value=!1}function ee(a){var n;!E.value&&!(a.relatedTarget&&((n=m.value)!=null&&n.contains(a.relatedTarget)))&&b()}function W(a){m.value&&(v.value?a.key==="ArrowRight"?b(r.value?"prev":"next"):a.key==="ArrowLeft"&&b(r.value?"next":"prev"):a.key==="ArrowDown"?b("next"):a.key==="ArrowUp"&&b("prev"),a.key==="Home"?b("first"):a.key==="End"&&b("last"))}function b(a){var n,x,le,se,oe;if(m.value)if(!a)(n=ze(m.value)[0])==null||n.focus();else if(a==="next"){const A=(x=m.value.querySelector(":focus"))==null?void 0:x.nextElementSibling;A?A.focus():b("first")}else if(a==="prev"){const A=(le=m.value.querySelector(":focus"))==null?void 0:le.previousElementSibling;A?A.focus():b("last")}else a==="first"?(se=m.value.firstElementChild)==null||se.focus():a==="last"&&((oe=m.value.lastElementChild)==null||oe.focus())}function M(a){const n=t.value+(a==="prev"?-1:1)*i.value;t.value=Pe(n,0,f.value-i.value)}const ge=S(()=>{let a=t.value>f.value-i.value?-(f.value-i.value)+ue(f.value-i.value-t.value):-t.value;t.value<=0&&(a=ue(-t.value));const n=r.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${n*a}px)`,transition:h.value?"none":"",willChange:h.value?"transform":""}}),X=S(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),Y=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return o.value||Math.abs(t.value)>0;case"mobile":return d.value||o.value||Math.abs(t.value)>0;default:return!d.value&&(o.value||Math.abs(t.value)>0)}}),te=S(()=>Math.abs(t.value)>0),ae=S(()=>f.value>Math.abs(t.value)+i.value);return Z(()=>u(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":Y.value,"v-slide-group--is-overflowing":o.value},g.value,e.class],style:e.style,tabindex:E.value||s.selected.value.length?-1:0,onFocus:ee},{default:()=>{var a,n,x;return[Y.value&&u("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!te.value}],onClick:()=>te.value&&M("prev")},[((a=l.prev)==null?void 0:a.call(l,X.value))??u(ne,null,{default:()=>[u(K,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),u("div",{key:"container",ref:p,class:"v-slide-group__container",onScroll:D},[u("div",{ref:m,class:"v-slide-group__content",style:ge.value,onTouchstartPassive:B,onTouchmovePassive:F,onTouchendPassive:C,onFocusin:T,onFocusout:U,onKeydown:W},[(n=l.default)==null?void 0:n.call(l,X.value)])]),Y.value&&u("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ae.value}],onClick:()=>ae.value&&M("next")},[((x=l.next)==null?void 0:x.call(l,X.value))??u(ne,null,{default:()=>[u(K,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:M,scrollOffset:t,focus:b}}});function it(e){return e?e.map(c=>Ee(c)?c:{text:c,value:c}):[]}const rt=J({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...me({mandatory:"force"}),...Ke(),...de()},"VTabs"),ut=Q()({name:"VTabs",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:l}=c;const r=Re(e,"modelValue"),g=S(()=>it(e.items)),{densityClasses:d}=Je(e),{backgroundColorClasses:s,backgroundColorStyles:o}=Qe(z(e,"bgColor"));return Ie({VTab:{color:z(e,"color"),direction:z(e,"direction"),stacked:z(e,"stacked"),fixed:z(e,"fixedTabs"),sliderColor:z(e,"sliderColor"),hideSlider:z(e,"hideSlider")}}),Z(()=>{const t=ve.filterProps(e);return u(ve,G(t,{modelValue:r.value,"onUpdate:modelValue":i=>r.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},d.value,s.value,e.class],style:[{"--v-tabs-height":Be(e.height)},o.value,e.style],role:"tablist",symbol:fe}),{default:()=>[l.default?l.default():g.value.map(i=>u(O,G(i,{key:i.text}),null))]})}),{}}}),N=e=>(Ne("data-v-f16649c2"),e=e(),je(),e),ct={class:"mt-4"},vt=N(()=>k("img",{src:et,class:"pl-7"},null,-1)),dt=N(()=>k("img",{src:tt,class:"pl-7"},null,-1)),ft=N(()=>k("img",{src:at,class:"pl-7"},null,-1)),mt=N(()=>k("img",{src:lt,class:"pl-7"},null,-1)),gt={style:{"max-width":"1700px",margin:"0 auto"}},pt={class:"mt-auto"},bt=Me({__name:"discover",setup(e){const c=Ae();q.registerPlugin(xe);const l=pe(),r=H(1),g=H(null);$e(()=>{q.to(g.value,{duration:1,opacity:1,display:"block",x:1}),sessionStorage.getItem("exploreCurrentTab")?l.setExploreCurrentTab(Number(sessionStorage.getItem("exploreCurrentTab"))):l.setExploreCurrentTab(1),r.value=l.exploreCurrentTab});const d=o=>{sessionStorage.setItem("exploreCurrentTab",o),l.setExploreCurrentTab(o)},s=async()=>{sessionStorage.removeItem("page"),await q.to(g.value,{opacity:1,delay:.6,x:"-2000px"}),c.back()};return(o,t)=>{const i=Oe("router-view");return Ge(),Fe(He,null,{default:y(()=>[k("div",{ref_key:"animation",ref:g,class:"animation"},[k("div",ct,[u(ut,{modelValue:r.value,"onUpdate:modelValue":[t[0]||(t[0]=f=>r.value=f),d],color:"deep-white-accent-4","align-tabs":"center"},{default:y(()=>[u(O,{value:1},{default:y(()=>[$("Journey "),vt]),_:1}),u(O,{value:2},{default:y(()=>[$("Experience "),dt]),_:1}),u(O,{value:3},{default:y(()=>[$("Projects "),ft]),_:1}),u(O,{value:5},{default:y(()=>[$("Contact Me "),mt]),_:1})]),_:1},8,["modelValue"])]),k("div",gt,[u(i)])],512),k("div",pt,[u(he,{align:"center",class:"px-10 mb-6 align-center justify-space-between"},{default:y(()=>[u(be,{cols:"12",class:"d-flex align-center justify-center mt-0 pt-0"},{default:y(()=>[u(Ze,{text:"Close",location:"end",theme:"primary"},{activator:y(({props:f})=>[u(L,G({variant:"text",class:"btn-explore",onClick:s},f),{default:y(()=>[u(K,null,{default:y(()=>[$(" mdi-close")]),_:1})]),_:2},1040)]),_:1})]),_:1})]),_:1})])]),_:1})}}});const Ct=De(bt,[["__scopeId","data-v-f16649c2"]]);export{Ct as default};
