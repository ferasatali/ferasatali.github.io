import{g as s,T as x}from"./TextPlugin-190e56bf.js";import{Z as b,ad as _,r as t,B as v,a0 as k,a2 as e,a6 as S,$ as w,a7 as I,a8 as j,a9 as D}from"./index-99a9f7d3.js";const f="/assets/stars-2c33d046.svg",E="/assets/mferasatali-b71bdda2.png",h=a=>(I("data-v-9412b5f5"),a=a(),j(),a),H={class:"d-flex align-center justify-center flex-column home"},M=h(()=>e("div",{class:"home-tagline d-flex align-center justify-start py-1 px-4"},[e("img",{width:"30",src:f,alt:"HCMS"}),e("p",{class:"base-body-text"},"Introduction"),e("img",{width:"30",src:f,alt:"HCMS"})],-1)),B={class:"d-flex align-center flex-row flex-wrap"},C={class:"image"},W=h(()=>e("img",{src:E,alt:"ferasat"},null,-1)),P={class:"header-simple mt-4 text-grey"},Y={class:"mt-5 mt-md-12 text-center home-title"},$=b({__name:"Home",setup(a){s.registerPlugin(x);const n=_("2021-02-01"),i=_(),l=t(0),c=t(0),r=t(null),d=t(null),m=t(null),u=t(null);v(()=>{y(),s.to(u.value,{duration:1,display:"block",opacity:1,x:1,y:1,delay:3}),s.to(r.value,{duration:2,text:"Muhammad Ferasat Ali",ease:"none",delay:.5}),s.to(d.value,{duration:1,text:"Full Stack Software Engineer",ease:"none",delay:.1}),s.to(m.value,{duration:3,text:"A passionate Software Engineer and Web Developer based in Lahore, Pakistan. With expertise in building scalable web applications and acommitment to innovation, I bring a unique blend of technical skills and creativity to drive success in every project. <br /> Explore my journey through code and creativity below. Let's build something amazing together! <br> Unlock more about my journey by clicking the discover button below.",ease:"none",delay:1})});const y=()=>{const o=i.diff(n,"years"),p=n.clone().add(o,"years"),g=i.diff(p,"months");c.value=g,l.value=o};return(o,p)=>(w(),k("div",H,[M,e("div",B,[e("div",C,[e("div",{class:"base-card mr-md-4 d-flex align-center flex-column",ref_key:"image",ref:u,style:{"min-height":"360px"}},[W,e("p",P,S(`${l.value-1}.${c.value}`)+"+ Years ",1)],512)]),e("div",Y,[e("p",{class:"base-title",ref_key:"title1",ref:r},null,512),e("p",{class:"mt-4 base-title unique-title mt-2",ref_key:"title2",ref:d},null,512)])]),e("p",{ref_key:"description",ref:m,class:"base-body-text mt-5 mt-md-12 home-description text-center text-text"},null,512)]))}});const F=D($,[["__scopeId","data-v-9412b5f5"]]);export{F as default};