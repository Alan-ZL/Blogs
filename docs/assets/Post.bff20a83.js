import{I as E,Z as H,_ as N,f as R,H as q,g as D,j as v,m as z,n as A,q as V,o as l,h as c,w as m,a as P,b as W,l as j,v as O,i as t,x as L,y as S,s as I,T as M,X as U,R as X}from"./app.b71ffdc9.js";import{A as Y,P as Z}from"./Page.9457a24f.js";import{u as G,C as J}from"./Common.6b11084d.js";import{P as K}from"./Pager.14d10bc7.js";import{u as Q}from"./useBlog.2501294f.js";import"./resolveTime.439cd54d.js";const x=({headers:k,activeLink:r})=>{const n=E();return H("ul",{class:{catalog:!0}},k.map(a=>H("li",{class:{active:r===a.slug,[`level-${a.level}`]:!0,[`toc-link-${a.slug}`]:!0},key:a.title,onClick:()=>{n.currentRoute.value.hash!==`#${a.slug}`&&n.push(`#${a.slug}`)}},a.title)))};x.displayName="Catalog";x.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const ee=R({setup(k){const r=U();q();const n=D(),a=E(),w=X(),b=w.resolve,F=w.pending,i=G(),$=v(()=>i.value?r.value.headers:[]),y=o=>o.children.length>0?[o].concat(...o.children.map(y)):o,u=v(()=>[].concat(...$.value.map(y))),e=z({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),p=40,T=80,d=()=>{for(let s=u.value.length-1;s>=0;s--){const C=u.value[s].slug,B=document.querySelector(`#${C}`);if((B?B.getBoundingClientRect().top:0)<=100){e.activeLink=C;break}}window.pageYOffset>e.headerHeight+p-T?(e.isFixed=!0,e.catalogTop=T):(e.isFixed=!1,e.catalogTop=e.headerHeight+p)},g=()=>{const o=document.querySelector(".post-header");e.headerHeight=o?o.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.catalogTop=e.headerHeight+p};let _;A(()=>{window.addEventListener("scroll",d),g(),window.onresize=()=>(()=>{g(),d()})(),_=a.afterEach(()=>{g()})}),V(()=>{window.removeEventListener("scroll",d),_()});const{post:f}=Q(),h=v(()=>{if(!f.value)return{};const o=f.value.next;o&&(o.text=n.value.postNext);const s=f.value.prev;return s&&(s.text=n.value.postPrev),{next:o,prev:s}});return(o,s)=>(l(),c(J,null,{page:m(()=>[P(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t(b),onBeforeLeave:t(F)},{default:m(()=>[W("div",{class:S(["post-wrapper",{"show-catalog":t(i)}])},[j(P(Y,{class:"post-header"},null,512),[[O,t(r).title]]),(l(),c(Z,{key:t(r).path,class:"post-content"},{bottom:m(()=>[t(h).next||t(h).prev?(l(),c(K,{key:0,data:t(h)},null,8,["data"])):L("",!0)]),_:1})),t(i)?(l(),c(t(x),{key:0,headers:t(u),"active-link":t(e).activeLink,class:S({fixed:t(e).isFixed}),style:I({top:`${t(e).catalogTop}px`})},null,8,["headers","active-link","class","style"])):L("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});var ce=N(ee,[["__file","Post.vue"]]);export{ce as default};
