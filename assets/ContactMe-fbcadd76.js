import{p as U,m as Y,O as qe,g as H,u as fe,i as G,a as t,aD as Ke,t as b,aE as Xe,aF as Je,aG as Ye,$ as Pe,P as Qe,e as me,j as Ze,k as et,l as le,aH as tt,aI as at,n as lt,f as Ie,a5 as nt,a8 as we,aq as te,ar as E,J as de,aJ as st,x as _e,ae as ot,at as it,ah as ut,v as q,y as ge,aK as rt,aA as X,aL as Be,aM as Fe,s as d,ac as ae,ai as Me,az as Ae,a3 as ct,ag as dt,aN as $e,U as Z,T as ee,aO as vt,aP as ft,q as ye,aQ as mt,S as gt,aR as Te,aS as yt,au as Re,aT as bt,aU as ht,af as xt,aj as J,aV as Vt,aW as _t,aX as Ct,aY as re,aw as kt,am as St,B as pt,aZ as De,a_ as Ce,X as Pt,a6 as It,a$ as Ne,b0 as Le,ad as Ee,b1 as wt,b2 as Ue,b3 as Bt,b4 as Ft,b5 as Mt,d as At,c as $t,w as L,o as Tt,C as W,F as Rt,an as ke,L as Dt,G as Nt,H as Lt,_ as Et}from"./index-fc900b46.js";import{g as Se}from"./index-0fa819ad.js";import{l as Ut}from"./googleSpreadSheetAPI-1c4cac29.js";import{a as K,V as pe}from"./VRow-da62032f.js";const zt=U({fluid:{type:Boolean,default:!1},...Y(),...qe()},"VContainer"),Ot=H()({name:"VContainer",props:zt(),setup(e,i){let{slots:s}=i;const{rtlClasses:l}=fe();return G(()=>t(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},l.value,e.class],style:e.style},s)),{}}}),Ht={}.VITE_APP_BASE_URL,Gt=Ht,jt=Ke("app",()=>{const e=b(0),i=b("Home");function s(o){i.value=o}function l(){return i.value}function a(o){e.value=o}async function n(o){try{return(await Xe.post(`${Gt}/public/chatbot/chat`,o)).data.data}catch(f){console.log(f,"error")}}return{exploreCurrentTab:e,setNavBar:s,getNavBar:l,setExploreCurrentTab:a,chatBotApi:n}});function Wt(e){const i=te(e);let s=-1;function l(){clearInterval(s)}function a(){l(),X(()=>i.value=e)}function n(o){const f=o?getComputedStyle(o):{transitionDuration:.2},P=parseFloat(f.transitionDuration)*1e3||200;if(l(),i.value<=0)return;const k=performance.now();s=window.setInterval(()=>{const I=performance.now()-k+P;i.value=Math.max(e-I,0),i.value<=0&&l()},P)}return rt(l),{clear:l,time:i,start:n,reset:a}}const qt=U({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Je({location:"bottom"}),...Ye(),...Pe(),...Qe(),...me(),...Ze(et({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Kt=H()({name:"VSnackbar",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:s}=i;const l=le(e,"modelValue"),{locationStyles:a}=tt(e),{positionClasses:n}=at(e),{scopeId:o}=lt(),{themeClasses:f}=Ie(e),{colorClasses:P,colorStyles:k,variantClasses:I}=nt(e),{roundedClasses:S}=we(e),C=Wt(Number(e.timeout)),w=b(),p=b(),r=te(!1);E(l,h),E(()=>e.timeout,h),de(()=>{l.value&&h()});let m=-1;function h(){C.reset(),window.clearTimeout(m);const x=Number(e.timeout);if(!l.value||x===-1)return;const u=st(p.value);C.start(u),m=window.setTimeout(()=>{l.value=!1},x)}function D(){C.reset(),window.clearTimeout(m)}function B(){r.value=!0,D()}function v(){r.value=!1,h()}return G(()=>{const x=_e.filterProps(e),u=!!(s.default||s.text||e.text);return t(_e,q({ref:w,class:["v-snackbar",{"v-snackbar--active":l.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},n.value,e.class],style:e.style},x,{modelValue:l.value,"onUpdate:modelValue":_=>l.value=_,contentProps:q({class:["v-snackbar__wrapper",f.value,P.value,S.value,I.value],style:[a.value,k.value],onPointerenter:B,onPointerleave:v},x.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},o),{default:()=>{var _,g;return[ot(!1,"v-snackbar"),e.timer&&t("div",{key:"timer",class:"v-snackbar__timer"},[t(it,{ref:p,active:!r.value,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":C.time.value},null)]),u&&t("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((_=s.text)==null?void 0:_.call(s))??e.text,(g=s.default)==null?void 0:g.call(s)]),s.actions&&t(ut,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t("div",{class:"v-snackbar__actions"},[s.actions()])]})]},activator:s.activator})}),ge({},w)}});const Xt=U({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Y(),...Be({transition:{component:Fe}})},"VCounter"),ze=H()({name:"VCounter",functional:!0,props:Xt(),setup(e,i){let{slots:s}=i;const l=d(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return G(()=>t(Ae,{transition:e.transition},{default:()=>[ae(t("div",{class:["v-counter",e.class],style:e.style},[s.default?s.default({counter:l.value,max:e.max,value:e.value}):l.value]),[[Me,e.active]])]})),{}}});const Jt=U({text:String,clickable:Boolean,...Y(),...me()},"VLabel"),Yt=H()({name:"VLabel",props:Jt(),setup(e,i){let{slots:s}=i;return G(()=>{var l;return t("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(l=s.default)==null?void 0:l.call(s)])}),{}}}),Qt=U({floating:Boolean,...Y()},"VFieldLabel"),ie=H()({name:"VFieldLabel",props:Qt(),setup(e,i){let{slots:s}=i;return G(()=>t(Yt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},s)),{}}});function Oe(e){const{t:i}=ct();function s(l){let{name:a}=l;const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],o=e[`onClick:${a}`],f=o&&n?i(`$vuetify.input.${n}`,e.label??""):void 0;return t(dt,{icon:e[`${a}Icon`],"aria-label":f,onClick:o},null)}return{InputIcon:s}}const He=U({focused:Boolean,"onUpdate:focused":Z()},"focus");function be(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$e();const s=le(e,"focused"),l=d(()=>({[`${i}--focused`]:s.value}));function a(){s.value=!0}function n(){s.value=!1}return{focusClasses:l,isFocused:s,focus:a,blur:n}}const Zt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],he=U({appendInnerIcon:ee,bgColor:String,clearable:Boolean,clearIcon:{type:ee,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ee,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Zt.includes(e)},"onClick:clear":Z(),"onClick:appendInner":Z(),"onClick:prependInner":Z(),...Y(),...vt(),...Pe(),...me()},"VField"),xe=H()({name:"VField",inheritAttrs:!1,props:{id:String,...He(),...he()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:s,emit:l,slots:a}=i;const{themeClasses:n}=Ie(e),{loaderClasses:o}=ft(e),{focusClasses:f,isFocused:P,focus:k,blur:I}=be(e),{InputIcon:S}=Oe(e),{roundedClasses:C}=we(e),{rtlClasses:w}=fe(),p=d(()=>e.dirty||e.active),r=d(()=>!e.singleLine&&!!(e.label||a.label)),m=ye(),h=d(()=>e.id||`input-${m}`),D=d(()=>`${h.value}-messages`),B=b(),v=b(),x=b(),u=d(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:_,backgroundColorStyles:g}=mt(gt(e,"bgColor")),{textColorClasses:F,textColorStyles:T}=Te(d(()=>e.error||e.disabled?void 0:p.value&&P.value?e.color:e.baseColor));E(p,y=>{if(r.value){const V=B.value.$el,A=v.value.$el;requestAnimationFrame(()=>{const N=yt(V),$=A.getBoundingClientRect(),R=$.x-N.x,z=$.y-N.y-(N.height/2-$.height/2),O=$.width/.75,j=Math.abs(O-N.width)>1?{maxWidth:Re(O)}:void 0,Q=getComputedStyle(V),ne=getComputedStyle(A),ve=parseFloat(Q.transitionDuration)*1e3||150,se=parseFloat(ne.getPropertyValue("--v-field-label-scale")),oe=ne.getPropertyValue("color");V.style.visibility="visible",A.style.visibility="hidden",bt(V,{transform:`translate(${R}px, ${z}px) scale(${se})`,color:oe,...j},{duration:ve,easing:Ct,direction:y?"normal":"reverse"}).finished.then(()=>{V.style.removeProperty("visibility"),A.style.removeProperty("visibility")})})}},{flush:"post"});const c=d(()=>({isActive:p,isFocused:P,controlRef:x,blur:I,focus:k}));function M(y){y.target!==document.activeElement&&y.preventDefault()}return G(()=>{var R,z,O;const y=e.variant==="outlined",V=a["prepend-inner"]||e.prependInnerIcon,A=!!(e.clearable||a.clear),N=!!(a["append-inner"]||e.appendInnerIcon||A),$=()=>a.label?a.label({...c.value,label:e.label,props:{for:h.value}}):e.label;return t("div",q({class:["v-field",{"v-field--active":p.value,"v-field--appended":N,"v-field--center-affix":e.centerAffix??!u.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":V,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!$(),[`v-field--variant-${e.variant}`]:!0},n.value,_.value,f.value,o.value,C.value,w.value,e.class],style:[g.value,e.style],onClick:M},s),[t("div",{class:"v-field__overlay"},null),t(ht,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),V&&t("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t(S,{key:"prepend-icon",name:"prependInner"},null),(R=a["prepend-inner"])==null?void 0:R.call(a,c.value)]),t("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&r.value&&t(ie,{key:"floating-label",ref:v,class:[F.value],floating:!0,for:h.value,style:T.value},{default:()=>[$()]}),t(ie,{ref:B,for:h.value},{default:()=>[$()]}),(z=a.default)==null?void 0:z.call(a,{...c.value,props:{id:h.value,class:"v-field__input","aria-describedby":D.value},focus:k,blur:I})]),A&&t(xt,{key:"clear"},{default:()=>[ae(t("div",{class:"v-field__clearable",onMousedown:j=>{j.preventDefault(),j.stopPropagation()}},[a.clear?a.clear():t(S,{name:"clear"},null)]),[[Me,e.dirty]])]}),N&&t("div",{key:"append",class:"v-field__append-inner"},[(O=a["append-inner"])==null?void 0:O.call(a,c.value),e.appendInnerIcon&&t(S,{key:"append-icon",name:"appendInner"},null)]),t("div",{class:["v-field__outline",F.value],style:T.value},[y&&t(J,null,[t("div",{class:"v-field__outline__start"},null),r.value&&t("div",{class:"v-field__outline__notch"},[t(ie,{ref:v,floating:!0,for:h.value},{default:()=>[$()]})]),t("div",{class:"v-field__outline__end"},null)]),u.value&&r.value&&t(ie,{ref:v,floating:!0,for:h.value},{default:()=>[$()]})])])}),{controlRef:x}}});function Ge(e){const i=Object.keys(xe.props).filter(s=>!Vt(s)&&s!=="class"&&s!=="style");return _t(e,i)}const ea=U({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Y(),...Be({transition:{component:Fe,leaveAbsolute:!0,group:!0}})},"VMessages"),ta=H()({name:"VMessages",props:ea(),setup(e,i){let{slots:s}=i;const l=d(()=>re(e.messages)),{textColorClasses:a,textColorStyles:n}=Te(d(()=>e.color));return G(()=>t(Ae,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[n.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&l.value.map((o,f)=>t("div",{class:"v-messages__message",key:`${f}-${l.value}`},[s.message?s.message({message:o}):o]))]})),{}}}),aa=Symbol.for("vuetify:form");function la(){return kt(aa,null)}const na=U({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...He()},"validation");function sa(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$e(),s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ye();const l=le(e,"modelValue"),a=d(()=>e.validationValue===void 0?l.value:e.validationValue),n=la(),o=b([]),f=te(!0),P=d(()=>!!(re(l.value===""?null:l.value).length||re(a.value===""?null:a.value).length)),k=d(()=>!!(e.disabled??(n==null?void 0:n.isDisabled.value))),I=d(()=>!!(e.readonly??(n==null?void 0:n.isReadonly.value))),S=d(()=>{var v;return(v=e.errorMessages)!=null&&v.length?re(e.errorMessages).concat(o.value).slice(0,Math.max(0,+e.maxErrors)):o.value}),C=d(()=>{let v=(e.validateOn??(n==null?void 0:n.validateOn.value))||"input";v==="lazy"&&(v="input lazy");const x=new Set((v==null?void 0:v.split(" "))??[]);return{blur:x.has("blur")||x.has("input"),input:x.has("input"),submit:x.has("submit"),lazy:x.has("lazy")}}),w=d(()=>{var v;return e.error||(v=e.errorMessages)!=null&&v.length?!1:e.rules.length?f.value?o.value.length||C.value.lazy?null:!0:!o.value.length:!0}),p=te(!1),r=d(()=>({[`${i}--error`]:w.value===!1,[`${i}--dirty`]:P.value,[`${i}--disabled`]:k.value,[`${i}--readonly`]:I.value})),m=d(()=>e.name??St(s));pt(()=>{n==null||n.register({id:m.value,validate:B,reset:h,resetValidation:D})}),De(()=>{n==null||n.unregister(m.value)}),de(async()=>{C.value.lazy||await B(!0),n==null||n.update(m.value,w.value,S.value)}),Ce(()=>C.value.input,()=>{E(a,()=>{if(a.value!=null)B();else if(e.focused){const v=E(()=>e.focused,x=>{x||B(),v()})}})}),Ce(()=>C.value.blur,()=>{E(()=>e.focused,v=>{v||B()})}),E(w,()=>{n==null||n.update(m.value,w.value,S.value)});function h(){l.value=null,X(D)}function D(){f.value=!0,C.value.lazy?o.value=[]:B(!0)}async function B(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const x=[];p.value=!0;for(const u of e.rules){if(x.length>=+(e.maxErrors??1))break;const g=await(typeof u=="function"?u:()=>u)(a.value);if(g!==!0){if(g!==!1&&typeof g!="string"){console.warn(`${g} is not a valid value. Rule functions must return boolean true or a string.`);continue}x.push(g||"")}}return o.value=x,p.value=!1,f.value=v,o.value}return{errorMessages:S,isDirty:P,isDisabled:k,isReadonly:I,isPristine:f,isValid:w,isValidating:p,reset:h,resetValidation:D,validate:B,validationClasses:r}}const Ve=U({id:String,appendIcon:ee,centerAffix:{type:Boolean,default:!0},prependIcon:ee,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":Z(),"onClick:append":Z(),...Y(),...Pt(),...na()},"VInput"),ce=H()({name:"VInput",props:{...Ve()},emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:s,slots:l,emit:a}=i;const{densityClasses:n}=It(e),{rtlClasses:o}=fe(),{InputIcon:f}=Oe(e),P=ye(),k=d(()=>e.id||`input-${P}`),I=d(()=>`${k.value}-messages`),{errorMessages:S,isDirty:C,isDisabled:w,isReadonly:p,isPristine:r,isValid:m,isValidating:h,reset:D,resetValidation:B,validate:v,validationClasses:x}=sa(e,"v-input",k),u=d(()=>({id:k,messagesId:I,isDirty:C,isDisabled:w,isReadonly:p,isPristine:r,isValid:m,isValidating:h,reset:D,resetValidation:B,validate:v})),_=d(()=>{var g;return(g=e.errorMessages)!=null&&g.length||!r.value&&S.value.length?S.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return G(()=>{var M,y,V,A;const g=!!(l.prepend||e.prependIcon),F=!!(l.append||e.appendIcon),T=_.value.length>0,c=!e.hideDetails||e.hideDetails==="auto"&&(T||!!l.details);return t("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},n.value,o.value,x.value,e.class],style:e.style},[g&&t("div",{key:"prepend",class:"v-input__prepend"},[(M=l.prepend)==null?void 0:M.call(l,u.value),e.prependIcon&&t(f,{key:"prepend-icon",name:"prepend"},null)]),l.default&&t("div",{class:"v-input__control"},[(y=l.default)==null?void 0:y.call(l,u.value)]),F&&t("div",{key:"append",class:"v-input__append"},[e.appendIcon&&t(f,{key:"append-icon",name:"append"},null),(V=l.append)==null?void 0:V.call(l,u.value)]),c&&t("div",{class:"v-input__details"},[t(ta,{id:I.value,active:T,messages:_.value},{message:l.message}),(A=l.details)==null?void 0:A.call(l,u.value)])])}),{reset:D,resetValidation:B,validate:v,isValid:m,errorMessages:S}}}),oa=["color","file","time","date","datetime-local","week","month"],ia=U({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ve(),...he()},"VTextField"),ue=H()({name:"VTextField",directives:{Intersect:Ne},inheritAttrs:!1,props:ia(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:s,emit:l,slots:a}=i;const n=le(e,"modelValue"),{isFocused:o,focus:f,blur:P}=be(e),k=d(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),I=d(()=>{if(s.maxlength)return s.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),S=d(()=>["plain","underlined"].includes(e.variant));function C(u,_){var g,F;!e.autofocus||!u||(F=(g=_[0].target)==null?void 0:g.focus)==null||F.call(g)}const w=b(),p=b(),r=b(),m=d(()=>oa.includes(e.type)||e.persistentPlaceholder||o.value||e.active);function h(){var u;r.value!==document.activeElement&&((u=r.value)==null||u.focus()),o.value||f()}function D(u){l("mousedown:control",u),u.target!==r.value&&(h(),u.preventDefault())}function B(u){h(),l("click:control",u)}function v(u){u.stopPropagation(),h(),X(()=>{n.value=null,Ue(e["onClick:clear"],u)})}function x(u){var g;const _=u.target;if(n.value=_.value,(g=e.modelModifiers)!=null&&g.trim&&["text","search","password","tel","url"].includes(e.type)){const F=[_.selectionStart,_.selectionEnd];X(()=>{_.selectionStart=F[0],_.selectionEnd=F[1]})}}return G(()=>{const u=!!(a.counter||e.counter!==!1&&e.counter!=null),_=!!(u||a.details),[g,F]=Le(s),{modelValue:T,...c}=ce.filterProps(e),M=Ge(e);return t(ce,q({ref:w,modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":S.value},e.class],style:e.style},g,c,{centerAffix:!S.value,focused:o.value}),{...a,default:y=>{let{id:V,isDisabled:A,isDirty:N,isReadonly:$,isValid:R}=y;return t(xe,q({ref:p,onMousedown:D,onClick:B,"onClick:clear":v,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},M,{id:V.value,active:m.value||N.value,dirty:N.value||e.dirty,disabled:A.value,focused:o.value,error:R.value===!1}),{...a,default:z=>{let{props:{class:O,...j}}=z;const Q=ae(t("input",q({ref:r,value:n.value,onInput:x,autofocus:e.autofocus,readonly:$.value,disabled:A.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:h,onBlur:P},j,F),null),[[Ee("intersect"),{handler:C},null,{once:!0}]]);return t(J,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[t("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?t("div",{class:O,"data-no-activator":""},[a.default(),Q]):wt(Q,{class:O}),e.suffix&&t("span",{class:"v-text-field__suffix"},[t("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:_?y=>{var V;return t(J,null,[(V=a.details)==null?void 0:V.call(a,y),u&&t(J,null,[t("span",null,null),t(ze,{active:e.persistentCounter||o.value,value:k.value,max:I.value},a.counter)])])}:void 0})}),ge({},w,p,r)}});const ua=U({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ve(),...he()},"VTextarea"),ra=H()({name:"VTextarea",directives:{Intersect:Ne},inheritAttrs:!1,props:ua(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:s,emit:l,slots:a}=i;const n=le(e,"modelValue"),{isFocused:o,focus:f,blur:P}=be(e),k=d(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),I=d(()=>{if(s.maxlength)return s.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function S(c,M){var y,V;!e.autofocus||!c||(V=(y=M[0].target)==null?void 0:y.focus)==null||V.call(y)}const C=b(),w=b(),p=te(""),r=b(),m=d(()=>e.persistentPlaceholder||o.value||e.active);function h(){var c;r.value!==document.activeElement&&((c=r.value)==null||c.focus()),o.value||f()}function D(c){h(),l("click:control",c)}function B(c){l("mousedown:control",c)}function v(c){c.stopPropagation(),h(),X(()=>{n.value="",Ue(e["onClick:clear"],c)})}function x(c){var y;const M=c.target;if(n.value=M.value,(y=e.modelModifiers)!=null&&y.trim){const V=[M.selectionStart,M.selectionEnd];X(()=>{M.selectionStart=V[0],M.selectionEnd=V[1]})}}const u=b(),_=b(+e.rows),g=d(()=>["plain","underlined"].includes(e.variant));Bt(()=>{e.autoGrow||(_.value=+e.rows)});function F(){e.autoGrow&&X(()=>{if(!u.value||!w.value)return;const c=getComputedStyle(u.value),M=getComputedStyle(w.value.$el),y=parseFloat(c.getPropertyValue("--v-field-padding-top"))+parseFloat(c.getPropertyValue("--v-input-padding-top"))+parseFloat(c.getPropertyValue("--v-field-padding-bottom")),V=u.value.scrollHeight,A=parseFloat(c.lineHeight),N=Math.max(parseFloat(e.rows)*A+y,parseFloat(M.getPropertyValue("--v-input-control-height"))),$=parseFloat(e.maxRows)*A+y||1/0,R=Mt(V??0,N,$);_.value=Math.floor((R-y)/A),p.value=Re(R)})}de(F),E(n,F),E(()=>e.rows,F),E(()=>e.maxRows,F),E(()=>e.density,F);let T;return E(u,c=>{c?(T=new ResizeObserver(F),T.observe(u.value)):T==null||T.disconnect()}),De(()=>{T==null||T.disconnect()}),G(()=>{const c=!!(a.counter||e.counter||e.counterValue),M=!!(c||a.details),[y,V]=Le(s),{modelValue:A,...N}=ce.filterProps(e),$=Ge(e);return t(ce,q({ref:C,modelValue:n.value,"onUpdate:modelValue":R=>n.value=R,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":g.value},e.class],style:e.style},y,N,{centerAffix:_.value===1&&!g.value,focused:o.value}),{...a,default:R=>{let{id:z,isDisabled:O,isDirty:j,isReadonly:Q,isValid:ne}=R;return t(xe,q({ref:w,style:{"--v-textarea-control-height":p.value},onClick:D,onMousedown:B,"onClick:clear":v,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},$,{id:z.value,active:m.value||j.value,centerAffix:_.value===1&&!g.value,dirty:j.value||e.dirty,disabled:O.value,focused:o.value,error:ne.value===!1}),{...a,default:ve=>{let{props:{class:se,...oe}}=ve;return t(J,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ae(t("textarea",q({ref:r,class:se,value:n.value,onInput:x,autofocus:e.autofocus,readonly:Q.value,disabled:O.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:h,onBlur:P},oe,V),null),[[Ee("intersect"),{handler:S},null,{once:!0}]]),e.autoGrow&&ae(t("textarea",{class:[se,"v-textarea__sizer"],id:`${oe.id}-sizer`,"onUpdate:modelValue":We=>n.value=We,ref:u,readonly:!0,"aria-hidden":"true"},null),[[Ft,n.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:M?R=>{var z;return t(J,null,[(z=a.details)==null?void 0:z.call(a,R),c&&t(J,null,[t("span",null,null),t(ze,{active:e.persistentCounter||o.value,value:k.value,max:I.value},a.counter)])])}:void 0})}),ge({},C,w,r)}}),je=e=>(Nt("data-v-ecb6cca4"),e=e(),Lt(),e),ca=je(()=>W("p",{class:"main-heading"},"Contact Me",-1)),da=[ca],va=je(()=>W("p",{class:"sub-heading px-2"}," We would love to speak with you. Feel free to reach out using the below details. ",-1)),fa=[va],ma={class:"form-field"},ga={class:"form-field"},ya={class:"form-field"},ba={class:"form-field"},ha={class:"form-field"},xa=At({__name:"ContactMe",setup(e){const i=jt(),s=b(null),l=b(null),a=b(!1),n=b("Please Fill the form completely."),o=b(""),f=b(""),P=b(""),k=b(""),I=b(""),S=b("error"),C=b(!1);de(async()=>{i.setNavBar("ContactUs"),Se.to(s.value,{opacity:1,display:"block",x:1,y:1,delay:.5}),Se.to(l.value,{duration:1,opacity:1,display:"block",x:1})});const w=async()=>{if(C.value=!0,!o.value||!f.value||!P.value||!k.value||!I.value){a.value=!0,C.value=!1;return}try{const p={Name:`${o.value} ${f.value}`,Email:P.value,Message:k.value,Phone:I.value};try{await Ut(p),a.value=!0,S.value="success",o.value="",f.value="",P.value="",k.value="",I.value="",n.value="Detail Submitted Successfully."}catch{a.value=!0,S.value="error",n.value="Error Submitting Details."}}catch{a.value=!0,S.value="error",n.value="Error Submitting Details."}C.value=!1};return(p,r)=>(Tt(),$t(Ot,{id:"contact-me"},{default:L(()=>[t(pe,{align:"center"},{default:L(()=>[t(K,{cols:"12",class:"px-2 px-md-5"},{default:L(()=>[W("div",{ref_key:"contact",ref:s,class:"contact"},da,512),W("div",{ref_key:"contact1",ref:l,class:"contact1"},fa,512)]),_:1})]),_:1}),t(pe,{align:"center",class:"px-2 px-md-5 mt-4"},{default:L(()=>[t(K,{cols:"12",sm:"6",class:"my-0 py-0"},{default:L(()=>[W("div",ma,[t(ue,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value=m),class:"form-field-input",variant:"solo",placeholder:"First Name"},null,8,["modelValue"])])]),_:1}),t(K,{cols:"12",sm:"6",class:"my-0 py-0"},{default:L(()=>[W("div",ga,[t(ue,{modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=m=>f.value=m),class:"form-field-input",variant:"solo",placeholder:"Last Name"},null,8,["modelValue"])])]),_:1}),t(K,{cols:"12",sm:"6",class:"my-0 py-0"},{default:L(()=>[W("div",ya,[t(ue,{modelValue:P.value,"onUpdate:modelValue":r[2]||(r[2]=m=>P.value=m),class:"form-field-input",variant:"solo",placeholder:"Email"},null,8,["modelValue"])])]),_:1}),t(K,{cols:"12",sm:"6",class:"my-0 py-0"},{default:L(()=>[W("div",ba,[t(ue,{modelValue:I.value,"onUpdate:modelValue":r[3]||(r[3]=m=>I.value=m),class:"form-field-input",variant:"solo",placeholder:"phoneNumber",type:"number"},null,8,["modelValue"])])]),_:1}),t(K,{cols:"12",class:"my-0 py-0"},{default:L(()=>[W("div",ha,[t(ra,{modelValue:k.value,"onUpdate:modelValue":r[4]||(r[4]=m=>k.value=m),rows:"6",class:"form-field-input",variant:"solo",placeholder:"Message"},null,8,["modelValue"])])]),_:1}),t(K,{cols:"12",class:"d-flex align-center justify-end"},{default:L(()=>[t(Rt,{variant:"text",class:"contact-btn",onClick:w,loading:C.value},{default:L(()=>[ke(" Submit ")]),_:1},8,["loading"])]),_:1})]),_:1}),t(Kt,{"model-value":a.value,"onUpdate:modelValue":r[5]||(r[5]=m=>a.value=m),timeout:4e3,color:S.value,variant:"tonal",location:"top right"},{default:L(()=>[ke(Dt(n.value),1)]),_:1},8,["model-value","color"])]),_:1}))}});const Sa=Et(xa,[["__scopeId","data-v-ecb6cca4"]]);export{Sa as default};
