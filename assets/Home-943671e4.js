import{g as s}from"./index-0fa819ad.js";import{T as b}from"./TextPlugin-7f8d2251.js";import{d as g,I as f,t,J as x,K as v,E as k,C as e,L as S,o as w,G as I,H as E,_ as D}from"./index-e7851f1e.js";import{g as W}from"./googleSpreadSheetAPI-2c00ed21.js";const j="/assets/mferasatali-b71bdda2.png",C=o=>(I("data-v-8330421b"),o=o(),E(),o),H={class:"d-flex align-center justify-center flex-column home"},B={class:"d-flex align-center flex-row flex-wrap mt-6"},L={class:"image"},M=C(()=>e("img",{src:j,alt:"ferasat"},null,-1)),P={class:"header-simple mt-4 text-grey"},Y={class:"mt-5 mt-md-12 text-center home-title"},q=g({__name:"Home",setup(o){s.registerPlugin(b);const n=f("2021-02-01"),i=f(),r=t(0),l=t(0),c=t(null),d=t(null),m=t(null),u=t(null),p=t("Welcome();! <br> I'm a passionate Software Engineer and Web Developer based in Lahore, Pakistan. <br> With expertise in building scalable web applications and a commitment to innovation, <br> I bring a unique blend of technical skills and creativity to drive success in every project. <br> Explore my journey through code and creativity below. <br> Let's build something amazing together! <br> Unlock more about my journey by clicking the button on right side.");x(async()=>{const a=await W();a&&(p.value=a),h(),s.to(u.value,{duration:1,display:"block",opacity:1,x:1,y:1,delay:3}),s.to(c.value,{duration:2,text:"Muhammad Ferasat Ali",ease:"none",delay:.5}),s.to(d.value,{duration:1,text:"Full Stack Software Engineer",ease:"none",delay:.1}),s.to(m.value,{duration:3,text:p.value,ease:"none",delay:1})});const h=()=>{const a=i.diff(n,"years"),_=n.clone().add(a,"years"),y=i.diff(_,"months");l.value=y,r.value=a};return(a,_)=>(w(),v("div",H,[k("",!0),e("div",B,[e("div",L,[e("div",{class:"base-card mr-md-4 d-flex align-center flex-column",ref_key:"image",ref:u,style:{"min-height":"360px"}},[M,e("p",P,S(`${r.value-1}.${l.value}`)+"+ Years ",1)],512)]),e("div",Y,[e("p",{class:"base-title",ref_key:"title1",ref:c},null,512),e("p",{class:"mt-4 base-title unique-title mt-2",ref_key:"title2",ref:d},null,512)])]),e("p",{ref_key:"description",ref:m,class:"base-body-text mt-2 home-description text-center text-text"},null,512)]))}});const $=D(q,[["__scopeId","data-v-8330421b"]]);export{$ as default};
