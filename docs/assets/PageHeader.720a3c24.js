import{_ as u,f as i,A as p,H as d,j as b,P as _,o as t,c as s,i as a,s as r,x as o,b as f,t as n,y as h}from"./app.b71ffdc9.js";const k={class:"title"},y={key:1,class:"subtitle"},I=i({props:{pageInfo:{type:Object,default:()=>({})}},setup(l){const c=l,{pageInfo:e}=p(c),g=d(),m=b(()=>e.value.bgImage?{backgroundImage:`url(${_(e.value.bgImage.path)})`}:{});return(v,P)=>(t(),s("div",{class:h(["page-header",{"use-image":a(e).bgImage}]),style:r(a(m))},[a(e).bgImage&&a(e).bgImage.mask?(t(),s("div",{key:0,class:"header-mask",style:r({background:a(e).bgImage.mask})},null,4)):o("",!0),f("h1",k,n(a(e).title||a(g).title),1),a(e).subtitle?(t(),s("h3",y,n(a(e).subtitle),1)):o("",!0)],6))}});var B=u(I,[["__file","PageHeader.vue"]]);export{B as P};
