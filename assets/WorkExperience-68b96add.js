import{g as l}from"./index-0fa819ad.js";import{T as y}from"./TextPlugin-7f8d2251.js";import{b as E}from"./googleSpreadSheetAPI-1c4cac29.js";import{V as b,a as g}from"./VRow-6bd757f4.js";import{d as I,t as i,J as S,K as a,a as c,w as p,o as t,C as e,aj as x,al as h,an as w,L as n,ao as A,G as J,H as N,_ as V}from"./index-3e6849eb.js";const W=[{companyName:"House of Tech (HOT)",role:"Full Stack Developer",duration:"08/2022 - 07/2023",content:["Application used for Online Booking of cars","Technologies: NodeJs, VueJs, Javascript, Google API, Express Js","Work on Database and API's Integration","Work on Backend and Frontend of the project."]},{companyName:"Aslase",role:"Full Stack Software Engineer",duration:"07/2023 - Present",content:["Integrate Recruitment portal for Hiring candidates","Technologies: NodeJs, VueJs, Javascript, Google API, Express Js","Work on Database and API's Integration","Work on Backend and Frontend of the project."]}],D=s=>(J("data-v-79be7801"),s=s(),N(),s),P=D(()=>e("p",{class:"header-simple"},"Details",-1)),j={class:"main-heading1 mt-3"},F={class:"sub-heading1"},T={class:"sub-heading1 ml-2 d-flex justify-end"},B={class:"px-3"},C=I({__name:"WorkExperience",setup(s){l.registerPlugin(y);const u=i(null),f=i(null),_=i(null),d=i([]);return S(async()=>{const o=await E();o&&o.length?d.value=o.reverse():d.value=W.reverse(),l.to(u.value,{duration:.6,text:"Professional Experience",ease:"slow(0.7,0.7,false)",x:0}),l.to(f.value,{duration:1,text:"Navigating Challenges and Driving Success in the Work Arena",ease:"none",delay:1}),l.to(_.value,{duration:1,opacity:1,display:"block",x:1})}),(o,H)=>(t(),a("section",null,[c(b,{align:"center",justify:"center"},{default:p(()=>[c(g,{cols:"12",class:"d-flex align-center justify-center flex-column mt-8"},{default:p(()=>[e("p",{class:"main-heading",ref_key:"title1",ref:u},null,512),e("p",{class:"paragraph",ref_key:"title2",ref:f},null,512)]),_:1}),c(g,{cols:"12",class:"d-flex align-center justify-center flex-wrap mt-6",style:{gap:"2rem"}},{default:p(()=>[e("div",{class:"d-flex base-card flex-column animation-div",ref_key:"workExperienceAnimation",ref:_},[P,(t(!0),a(x,null,h(d.value,(r,m)=>(t(),a("div",{key:m},[e("p",j,[w(n(m+1)+" - "+n(r.companyName)+" ",1),e("span",F," - "+n(r.role),1),e("span",T,n(r.duration),1)]),e("div",B,[(t(!0),a(x,null,h(r.content,(k,v)=>(t(),a("ul",{key:v},[e("li",null,n(k),1)]))),128))]),c(A,{thickness:"2",color:"blue",class:"mt-3"})]))),128))],512)]),_:1})]),_:1})]))}});const M=V(C,[["__scopeId","data-v-79be7801"]]);export{M as default};
