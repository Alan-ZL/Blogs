import{_ as u,d as i,z as d,G as p,h as b,O as _,o as t,i as s,g as a,q as r,s as o,b as f,t as n,x as h}from"./app.18ce1f0d.js";const k={class:"title"},I={key:1,class:"subtitle"},y=i({props:{pageInfo:{type:Object,default:()=>({})}},setup(l){const c=l,{pageInfo:e}=d(c),g=p(),m=b(()=>e.value.bgImage?{backgroundImage:`url(${_(e.value.bgImage.path)})`}:{});return(v,x)=>(t(),s("div",{class:h(["page-header",{"use-image":a(e).bgImage}]),style:r(a(m))},[a(e).bgImage&&a(e).bgImage.mask?(t(),s("div",{key:0,class:"header-mask",style:r({background:a(e).bgImage.mask})},null,4)):o("",!0),f("h1",k,n(a(e).title||a(g).title),1),a(e).subtitle?(t(),s("h3",I,n(a(e).subtitle),1)):o("",!0)],6))}});var P=u(y,[["__file","PageHeader.vue"]]);export{P};
