import{a as Z,d as yt,s as ye,b as ht,g as ze,n as Ke,p as Ae,f as ce,c as ue,e as Te,B as fe,h as Le,i as Me,m as pt,u as wt,j as bt,k as xt,l as _t,V as Et,o as he,q as de}from"./VGrid-5b550c39.js";import{i as Ue,e as Ye,g as ie,c as St,a as kt,m as Ge,h as Ot,b as _,d as I,T as pe,p as U,r as D,I as z,u as _e,w as V,o as W,f as Ct,j as P,n as ee,k as H,l as Fe,q as Ee,s as Xe,t as Se,v as ke,x as De,y as Pt,z as Y,A as At,B as Tt,C as Je,D as Ze,E as Lt,F as Mt,G as Ft,H as Qe,J as Dt,K as Vt,L as Bt,M as Rt,N as et,O as It,P as Nt,Q as Ht,R as $t,S as tt,U as jt,V as Wt,W as Ve,X as qt,Y as Be,Z as Oe,_ as nt,$ as Q,a0 as ve,a1 as F,a2 as C,a3 as K,a4 as zt,a5 as Kt,a6 as ot,a7 as at,a8 as it,a9 as st,aa as Ut,ab as Yt}from"./index-b82911a5.js";import{m as Gt,a as Xt,u as Jt,M as Zt,f as Qt}from"./forwardRefs-780d71a6.js";const te=new WeakMap;function en(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const o=Ye(t),a=te.get(e);if(n[t]==null)a==null||a.forEach(s=>{const[r,i]=s;r===o&&(e.removeEventListener(o,i),a.delete(s))});else if(!a||![...a].some(s=>s[0]===o&&s[1]===n[t])){e.addEventListener(o,n[t]);const s=a||new Set;s.add([o,n[t]]),te.has(e)||te.set(e,s)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function tn(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const o=Ye(t),a=te.get(e);a==null||a.forEach(s=>{const[r,i]=s;r===o&&(e.removeEventListener(o,i),a.delete(s))})}else e.removeAttribute(t)})}function nn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return ie()({name:t??St(kt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...Ge()},setup(o,a){let{slots:s}=a;return()=>{var r;return Ot(o.tag,{class:[e,o.class],style:o.style},(r=s.default)==null?void 0:r.call(s))}}})}function rt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function on(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?an(e):Ce(e))return e;e=e.parentElement}return document.scrollingElement}function oe(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Ce(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Ce(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function an(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function sn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const rn="/assets/menu-ee0b645c.svg",ln="/assets/mfa-logo-6aecc9b1.png",cn=nn("v-spacer","div","VSpacer");const un=U({target:[Object,Array]},"v-dialog-transition"),fn=ie()({name:"VDialogTransition",props:un(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,s){var x;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:r,y:i,sx:u,sy:f,speed:d}=Ie(e.target,a),p=Z(a,[{transform:`translate(${r}px, ${i}px) scale(${u}, ${f})`,opacity:0},{}],{duration:225*d,easing:yt});(x=Re(a))==null||x.forEach(g=>{Z(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:ye})}),p.finished.then(()=>s())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,s){var x;await new Promise(g=>requestAnimationFrame(g));const{x:r,y:i,sx:u,sy:f,speed:d}=Ie(e.target,a);Z(a,[{},{transform:`translate(${r}px, ${i}px) scale(${u}, ${f})`,opacity:0}],{duration:125*d,easing:ht}).finished.then(()=>s()),(x=Re(a))==null||x.forEach(g=>{Z(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:ye})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?_(pe,I({name:"dialog-transition"},o,{css:!1}),t):_(pe,{name:"dialog-transition"},t)}});function Re(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ie(e,n){const t=ze(e),o=Ke(n),[a,s]=getComputedStyle(n).transformOrigin.split(" ").map(w=>parseFloat(w)),[r,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;r==="left"||i==="left"?u-=t.width/2:(r==="right"||i==="right")&&(u+=t.width/2);let f=t.top+t.height/2;r==="top"||i==="top"?f-=t.height/2:(r==="bottom"||i==="bottom")&&(f+=t.height/2);const d=t.width/o.width,p=t.height/o.height,x=Math.max(1,d,p),g=d/x||0,v=p/x||0,c=o.width*o.height/(window.innerWidth*window.innerHeight),y=c>.12?Math.min(1.5,(c-.12)*10+1):1;return{x:u-(a+o.left),y:f-(s+o.top),sx:g,sy:v,speed:y}}function me(e,n){return{x:e.x+n.x,y:e.y+n.y}}function dn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ne(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,s=t==="top"?0:t==="bottom"?n.height:t;return me({x:a,y:s},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,s=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return me({x:a,y:s},n)}return me({x:n.width/2,y:n.height/2},n)}const lt={static:gn,connected:hn},vn=U({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in lt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function mn(e,n){const t=D({}),o=D();z&&_e(()=>!!(n.isActive.value&&e.locationStrategy),s=>{var r,i;V(()=>e.locationStrategy,s),W(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation:o.value=(i=lt[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function a(s){var r;(r=o.value)==null||r.call(o,s)}return{contentStyles:t,updateLocation:o}}function gn(){}function yn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ke(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function hn(e,n,t){(Array.isArray(e.target.value)||sn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:s}=Ct(()=>{const v=Ae(n.location,e.isRtl.value),c=n.origin==="overlap"?v:n.origin==="auto"?ce(v):Ae(n.origin,e.isRtl.value);return v.side===c.side&&v.align===ue(c).align?{preferredAnchor:Te(v),preferredOrigin:Te(c)}:{preferredAnchor:v,preferredOrigin:c}}),[r,i,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>P(()=>{const c=parseFloat(n[v]);return isNaN(c)?1/0:c})),d=P(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const v=n.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let p=!1;const x=new ResizeObserver(()=>{p&&g()});V([e.target,e.contentEl],(v,c)=>{let[y,w]=v,[h,b]=c;h&&!Array.isArray(h)&&x.unobserve(h),y&&!Array.isArray(y)&&x.observe(y),b&&x.unobserve(b),w&&x.observe(w)},{immediate:!0}),W(()=>{x.disconnect()});function g(){if(p=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>p=!0)}),!e.target.value||!e.contentEl.value)return;const v=ze(e.target.value),c=yn(e.contentEl.value,e.isRtl.value),y=oe(e.contentEl.value),w=12;y.length||(y.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(c.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),c.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const h=y.reduce((O,S)=>{const m=S.getBoundingClientRect(),E=new fe({x:S===document.documentElement?0:m.x,y:S===document.documentElement?0:m.y,width:S.clientWidth,height:S.clientHeight});return O?new fe({x:Math.max(O.left,E.left),y:Math.max(O.top,E.top),width:Math.min(O.right,E.right)-Math.max(O.left,E.left),height:Math.min(O.bottom,E.bottom)-Math.max(O.top,E.top)}):E},void 0);h.x+=w,h.y+=w,h.width-=w*2,h.height-=w*2;let b={anchor:a.value,origin:s.value};function L(O){const S=new fe(c),m=Ne(O.anchor,v),E=Ne(O.origin,S);let{x:R,y:N}=dn(m,E);switch(O.anchor.side){case"top":N-=d.value[0];break;case"bottom":N+=d.value[0];break;case"left":R-=d.value[0];break;case"right":R+=d.value[0];break}switch(O.anchor.align){case"top":N-=d.value[1];break;case"bottom":N+=d.value[1];break;case"left":R-=d.value[1];break;case"right":R+=d.value[1];break}return S.x+=R,S.y+=N,S.width=Math.min(S.width,u.value),S.height=Math.min(S.height,f.value),{overflows:Me(S,h),x:R,y:N}}let B=0,T=0;const l={x:0,y:0},M={x:!1,y:!1};let re=-1;for(;!(re++>10);){const{x:O,y:S,overflows:m}=L(b);B+=O,T+=S,c.x+=O,c.y+=S;{const E=Le(b.anchor),R=m.x.before||m.x.after,N=m.y.before||m.y.after;let G=!1;if(["x","y"].forEach(A=>{if(A==="x"&&R&&!M.x||A==="y"&&N&&!M.y){const q={anchor:{...b.anchor},origin:{...b.origin}},X=A==="x"?E==="y"?ue:ce:E==="y"?ce:ue;q.anchor=X(q.anchor),q.origin=X(q.origin);const{overflows:$}=L(q);($[A].before<=m[A].before&&$[A].after<=m[A].after||$[A].before+$[A].after<(m[A].before+m[A].after)/2)&&(b=q,G=M[A]=!0)}}),G)continue}m.x.before&&(B+=m.x.before,c.x+=m.x.before),m.x.after&&(B-=m.x.after,c.x-=m.x.after),m.y.before&&(T+=m.y.before,c.y+=m.y.before),m.y.after&&(T-=m.y.after,c.y-=m.y.after);{const E=Me(c,h);l.x=h.width-E.x.before-E.x.after,l.y=h.height-E.y.before-E.y.after,B+=E.x.before,c.x+=E.x.before,T+=E.y.before,c.y+=E.y.before}break}const le=Le(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:H(ge(T)),left:e.isRtl.value?void 0:H(ge(B)),right:e.isRtl.value?H(ge(-B)):void 0,minWidth:H(le==="y"?Math.min(r.value,v.width):r.value),maxWidth:H(He(Fe(l.x,r.value===1/0?0:r.value,u.value))),maxHeight:H(He(Fe(l.y,i.value===1/0?0:i.value,f.value)))}),{available:l,contentBox:c}}return V(()=>[a.value,s.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),ee(()=>{const v=g();if(!v)return;const{available:c,contentBox:y}=v;y.height>c.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function ge(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function He(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let we=!0;const ae=[];function pn(e){!we||ae.length?(ae.push(e),be()):(we=!1,e(),be())}let $e=-1;function be(){cancelAnimationFrame($e),$e=requestAnimationFrame(()=>{const e=ae.shift();e&&e(),ae.length?be():we=!0})}const ne={none:null,close:xn,block:_n,reposition:En},wn=U({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ne}},"VOverlay-scroll-strategies");function bn(e,n){if(!z)return;let t;Ee(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Xe(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ne[e.scrollStrategy])==null||o.call(ne,n,e,t)}))}),W(()=>{t==null||t.stop()})}function xn(e){function n(t){e.isActive.value=!1}ct(e.targetEl.value??e.contentEl.value,n)}function _n(e,n){var r;const t=(r=e.root.value)==null?void 0:r.offsetParent,o=[...new Set([...oe(e.targetEl.value,n.contained?t:void 0),...oe(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,s=(i=>Ce(i)&&i)(t||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",H(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",H(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",H(a)),i.classList.add("v-overlay-scroll-blocked")}),W(()=>{o.forEach((i,u)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-d}),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function En(e,n,t){let o=!1,a=-1,s=-1;function r(i){pn(()=>{var d,p;const u=performance.now();(p=(d=e.updateLocation).value)==null||p.call(d,i),o=(performance.now()-u)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{ct(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{r(i)})})):r(i)})})}),W(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(a)})}function ct(e,n){const t=[document,...oe(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),W(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const xe=Symbol.for("vuetify:v-menu"),Sn=U({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function kn(e,n){const t={},o=a=>()=>{if(!z)return Promise.resolve(!0);const s=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(r=>{const i=parseInt(e[a]??0,10);t[a]=window.setTimeout(()=>{n==null||n(s),r(s)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const On=U({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Sn()},"VOverlay-activator");function Cn(e,n){let{isActive:t,isTop:o}=n;const a=Se("useActivator"),s=D();let r=!1,i=!1,u=!0;const f=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:p,runCloseDelay:x}=kn(e,l=>{l===(e.openOnHover&&r||f.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),g=D(),v={onClick:l=>{l.stopPropagation(),s.value=l.currentTarget||l.target,t.value||(g.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var M;(M=l.sourceCapabilities)!=null&&M.firesTouchEvents||(r=!0,s.value=l.currentTarget||l.target,p())},onMouseleave:l=>{r=!1,x()},onFocus:l=>{Pt(l.target,":focus-visible")!==!1&&(i=!0,l.stopPropagation(),s.value=l.currentTarget||l.target,p())},onBlur:l=>{i=!1,l.stopPropagation(),x()}},c=P(()=>{const l={};return d.value&&(l.onClick=v.onClick),e.openOnHover&&(l.onMouseenter=v.onMouseenter,l.onMouseleave=v.onMouseleave),f.value&&(l.onFocus=v.onFocus,l.onBlur=v.onBlur),l}),y=P(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{r=!0,p()},l.onMouseleave=()=>{r=!1,x()}),f.value&&(l.onFocusin=()=>{i=!0,p()},l.onFocusout=()=>{i=!1,x()}),e.closeOnContentClick){const M=ke(xe,null);l.onClick=()=>{t.value=!1,M==null||M.closeParents()}}return l}),w=P(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(r=!0,u=!1,p())},l.onMouseleave=()=>{r=!1,x()}),l});V(o,l=>{l&&(e.openOnHover&&!r&&(!f.value||!i)||f.value&&!i&&(!e.openOnHover||!r))&&(t.value=!1)}),V(t,l=>{l||setTimeout(()=>{g.value=void 0})},{flush:"post"});const h=D();Ee(()=>{h.value&&ee(()=>{s.value=De(h.value)})});const b=D(),L=P(()=>e.target==="cursor"&&g.value?g.value:b.value?De(b.value):ut(e.target,a)||s.value),B=P(()=>Array.isArray(L.value)?void 0:L.value);let T;return V(()=>!!e.activator,l=>{l&&z?(T=Xe(),T.run(()=>{Pn(e,a,{activatorEl:s,activatorEvents:c})})):T&&T.stop()},{flush:"post",immediate:!0}),W(()=>{T==null||T.stop()}),{activatorEl:s,activatorRef:h,target:L,targetEl:B,targetRef:b,activatorEvents:c,contentEvents:y,scrimEvents:w}}function Pn(e,n,t){let{activatorEl:o,activatorEvents:a}=t;V(()=>e.activator,(u,f)=>{if(f&&u!==f){const d=i(f);d&&r(d)}u&&ee(()=>s())},{immediate:!0}),V(()=>e.activatorProps,()=>{s()}),W(()=>{r()});function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&en(u,I(a.value,f))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&tn(u,I(a.value,f))}function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=ut(u,n);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function ut(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let s=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;s!=null&&s.hasAttribute("data-no-activator");)s=s.parentNode;t=s}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function An(){if(!z)return Y(!1);const{ssr:e}=At();if(e){const n=Y(!1);return Tt(()=>{n.value=!0}),n}else return Y(!0)}function ft(){const n=Se("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const je=Symbol.for("vuetify:stack"),J=Je([]);function Tn(e,n,t){const o=Se("useStack"),a=!t,s=ke(je,void 0),r=Je({activeChildren:new Set});Ze(je,r);const i=Y(+n.value);_e(e,()=>{var p;const d=(p=J.at(-1))==null?void 0:p[1];i.value=d?d+10:+n.value,a&&J.push([o.uid,i.value]),s==null||s.activeChildren.add(o.uid),W(()=>{if(a){const x=Mt(J).findIndex(g=>g[0]===o.uid);J.splice(x,1)}s==null||s.activeChildren.delete(o.uid)})});const u=Y(!0);a&&Ee(()=>{var p;const d=((p=J.at(-1))==null?void 0:p[0])===o.uid;setTimeout(()=>u.value=d)});const f=P(()=>!r.activeChildren.size);return{globalTop:Lt(u),localTop:f,stackStyles:P(()=>({zIndex:i.value}))}}function Ln(e){return{teleportTarget:P(()=>{const t=e.value;if(t===!0||!z)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Mn(){return!0}function dt(e,n,t){if(!e||vt(e,t)===!1)return!1;const o=rt(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(s=>s==null?void 0:s.contains(e.target))}function vt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Mn)(e)}function Fn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&dt(e,n,t)&&setTimeout(()=>{vt(e,t)&&o&&o(e)},0)}function We(e,n){const t=rt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Dn={mounted(e,n){const t=a=>Fn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=dt(a,e,n)};We(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(We(e,t=>{var s;if(!t||!((s=e._clickOutside)!=null&&s[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Vn(e){const{modelValue:n,color:t,...o}=e;return _(pe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&_("div",I({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const mt=U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...On(),...Ge(),...pt(),...Gt(),...vn(),...wn(),...Ft(),...Xt()},"VOverlay"),qe=ie()({name:"VOverlay",directives:{ClickOutside:Dn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...mt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const s=Qe(e,"modelValue"),r=P({get:()=>s.value,set:k=>{k&&e.disabled||(s.value=k)}}),{teleportTarget:i}=Ln(P(()=>e.attach||e.contained)),{themeClasses:u}=Dt(e),{rtlClasses:f,isRtl:d}=Vt(),{hasContent:p,onAfterLeave:x}=Jt(e,r),g=wt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:v,localTop:c,stackStyles:y}=Tn(r,Bt(e,"zIndex"),e._disableGlobalStack),{activatorEl:w,activatorRef:h,target:b,targetEl:L,targetRef:B,activatorEvents:T,contentEvents:l,scrimEvents:M}=Cn(e,{isActive:r,isTop:c}),{dimensionStyles:re}=bt(e),le=An(),{scopeId:O}=ft();V(()=>e.disabled,k=>{k&&(r.value=!1)});const S=D(),m=D(),{contentStyles:E,updateLocation:R}=mn(e,{isRtl:d,contentEl:m,target:b,isActive:r});bn(e,{root:S,contentEl:m,targetEl:L,isActive:r,updateLocation:R});function N(k){a("click:outside",k),e.persistent?$():r.value=!1}function G(){return r.value&&v.value}z&&V(r,k=>{k?window.addEventListener("keydown",A):window.removeEventListener("keydown",A)},{immediate:!0}),Rt(()=>{z&&window.removeEventListener("keydown",A)});function A(k){var j,Pe;k.key==="Escape"&&v.value&&(e.persistent?$():(r.value=!1,(j=m.value)!=null&&j.contains(document.activeElement)&&((Pe=w.value)==null||Pe.focus())))}const q=xt();_e(()=>e.closeOnBack,()=>{_t(q,k=>{v.value&&r.value?(k(!1),e.persistent?$():r.value=!1):k()})});const X=D();V(()=>r.value&&(e.absolute||e.contained)&&i.value==null,k=>{if(k){const j=on(S.value);j&&j!==document.scrollingElement&&(X.value=j.scrollTop)}});function $(){e.noClickAnimation||m.value&&Z(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ye})}function gt(){x(),a("afterLeave")}return et(()=>{var k;return _(tt,null,[(k=t.activator)==null?void 0:k.call(t,{isActive:r.value,props:I({ref:h,targetRef:B},T.value,e.activatorProps)}),le.value&&p.value&&_(It,{disabled:!i.value,to:i.value},{default:()=>[_("div",I({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[y.value,{top:H(X.value)},e.style],ref:S},O,o),[_(Vn,I({color:g,modelValue:r.value&&!!e.scrim},M.value),null),_(Zt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:gt},{default:()=>{var j;return[Nt(_("div",I({ref:m,class:["v-overlay__content",e.contentClass],style:[re.value,E.value]},l.value,e.contentProps),[(j=t.default)==null?void 0:j.call(t,{isActive:r})]),[[Ht,r.value],[$t("click-outside"),{handler:N,closeConditional:G,include:()=>[w.value]}]])]}})])]})])}),{activatorEl:w,target:b,animateClick:$,contentEl:m,globalTop:v,localTop:c,updateLocation:R}}}),Bn=U({id:String,...jt(mt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:fn}}),["absolute"])},"VMenu"),Rn=ie()({name:"VMenu",props:Bn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Qe(e,"modelValue"),{scopeId:a}=ft(),s=Wt(),r=P(()=>e.id||`v-menu-${s}`),i=D(),u=ke(xe,null),f=Y(0);Ze(xe,{register(){++f.value},unregister(){--f.value},closeParents(){setTimeout(()=>{f.value||(o.value=!1,u==null||u.closeParents())},40)}});async function d(c){var h,b,L;const y=c.relatedTarget,w=c.target;await ee(),o.value&&y!==w&&((h=i.value)!=null&&h.contentEl)&&((b=i.value)!=null&&b.globalTop)&&![document,i.value.contentEl].includes(w)&&!i.value.contentEl.contains(w)&&((L=Ve(i.value.contentEl)[0])==null||L.focus())}V(o,c=>{c?(u==null||u.register(),document.addEventListener("focusin",d,{once:!0})):(u==null||u.unregister(),document.removeEventListener("focusin",d))});function p(){u==null||u.closeParents()}function x(c){var y,w,h;e.disabled||c.key==="Tab"&&(qt(Ve((y=i.value)==null?void 0:y.contentEl,!1),c.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(o.value=!1,(h=(w=i.value)==null?void 0:w.activatorEl)==null||h.focus()))}function g(c){var w;if(e.disabled)return;const y=(w=i.value)==null?void 0:w.contentEl;y&&o.value?c.key==="ArrowDown"?(c.preventDefault(),Be(y,"next")):c.key==="ArrowUp"&&(c.preventDefault(),Be(y,"prev")):["ArrowDown","ArrowUp"].includes(c.key)&&(o.value=!0,c.preventDefault(),setTimeout(()=>setTimeout(()=>g(c))))}const v=P(()=>I({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":r.value,onKeydown:g},e.activatorProps));return et(()=>{const c=qe.filterProps(e);return _(qe,I({ref:i,class:["v-menu",e.class],style:e.style},c,{modelValue:o.value,"onUpdate:modelValue":y=>o.value=y,absolute:!0,activatorProps:v.value,"onClick:outside":p,onKeydown:x},a),{activator:t.activator,default:function(){for(var y=arguments.length,w=new Array(y),h=0;h<y;h++)w[h]=arguments[h];return _(Et,{root:"VMenu"},{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t,...w)]}})}})}),Qt({id:r,ΨopenChildren:f},i)}}),se=e=>(ot("data-v-19f2ae90"),e=e(),at(),e),In={class:"d-flex align-center justify-space-between flex-wrap pa-4"},Nn=se(()=>C("img",{width:"100px",src:ln,class:"mr-4"},null,-1)),Hn={class:"d-flex flex-column base-card base-card-card ml-4"},$n=se(()=>C("div",{class:"d-flex align-center justify-center"},[C("p",{class:"header"},"Contact & Social Links")],-1)),jn={class:"d-flex flex-column mt-2 base-card base-card-menu",style:{gap:"0.6rem"}},Wn={class:"d-flex align-center",style:{gap:"0.6rem"}},qn=se(()=>C("p",null,"ferasatali14@gmail.com",-1)),zn={class:"d-flex align-center",style:{gap:"0.6rem"}},Kn=se(()=>C("p",null,"03424658936",-1)),Un=["src"],Yn=["href"],Gn={class:"d-flex flex-column mt-2 base-card base-card-menu"},Xn=Oe({__name:"HeaderComponent",setup(e){const n=D(!1),t=D([{name:"GitHub",link:"https://github.com/ferasatali",icon:"/github.png"},{name:"LinkedIn",link:"https://www.linkedin.com/in/ali-ferasat-ali-7b1b3b1b0/",icon:"/linkedin-02.png"},{name:"GitHub Aslase",link:"https://github.com/fali-aslase",icon:"/github.png"},{name:"Twitter",link:"https://twitter.com/AliFerasat",icon:"/twitter.png"},{name:"Instagram",link:"https://www.instagram.com/mferasatali/",icon:"/instagram.png"},{name:"Facebook",link:"https://www.facebook.com/mferasatali",icon:"/facebook-01.png"}]);return(o,a)=>{const s=nt("RouterLink");return Q(),ve("div",In,[_(s,{to:"/"},{default:F(()=>[Nn]),_:1}),_(cn),C("div",null,[_(Rn,{location:"left","close-on-content-click":!1,"model-value":n.value,"onUpdate:modelValue":a[0]||(a[0]=r=>n.value=r)},{activator:F(({props:r})=>[_(he,I({class:"text-capitalize free-trail-btn",height:"45px"},r),{default:F(()=>[K(" Connect With Ferasat ")]),_:2},1040)]),default:F(()=>[C("div",Hn,[$n,C("div",jn,[C("div",Wn,[_(de,null,{default:F(()=>[K(" mdi-email ")]),_:1}),qn]),C("div",zn,[_(de,null,{default:F(()=>[K(" mdi-phone ")]),_:1}),Kn])]),(Q(!0),ve(tt,null,zt(t.value,(r,i)=>(Q(),ve("div",{class:"d-flex align-center flex-row mt-3 base-card base-card-menu",style:{gap:"0.6rem"},key:i},[C("img",{width:"25px",class:"social-icons",src:r.icon},null,8,Un),C("p",null,[K(Kt(r.name)+" : ",1),C("a",{href:r.link,target:"_blank"}," MFerasatAli",8,Yn)])]))),128)),C("div",Gn,[_(he,{variant:"text",href:"https://drive.google.com/file/d/1NKosJ2dj94GCBNEzmjgpjcA82yuKfUsp/view?usp=sharing",target:"_blank"},{default:F(()=>[_(de,{class:"mr-2"},{default:F(()=>[K(" mdi-download ")]),_:1}),K(" Download Resume ")]),_:1})])])]),_:1},8,["model-value"])])])}}});const Jn=it(Xn,[["__scopeId","data-v-19f2ae90"]]),Zn=Oe({__name:"View",setup(e){return(n,t)=>{const o=nt("router-view");return Q(),st(Ut,null,{default:F(()=>[_(o)]),_:1})}}}),Qn=e=>(ot("data-v-b7a08410"),e=e(),at(),e),eo={class:"app-container"},to={class:"mt-auto d-flex align-center justify-center pt-7"},no=Qn(()=>C("img",{src:rn},null,-1)),oo=Oe({__name:"Default",setup(e){return(n,t)=>(Q(),st(Yt,null,{default:F(()=>[C("div",eo,[_(Jn),_(Zn)]),C("div",to,[_(he,{variant:"text",class:"btn-explore",to:"/discover"},{prepend:F(()=>[no]),default:F(()=>[K(" Discover ")]),_:1})])]),_:1}))}});const ro=it(oo,[["__scopeId","data-v-b7a08410"]]);export{ro as default};
