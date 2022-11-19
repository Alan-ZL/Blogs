import{j as p,_ as y,f as C,g as w,I as L,o as u,c as g,E as v,y as P,s as R,i as h,e as A,t as f,F as T,r as I,d,a as _,w as B,x as N,h as S}from"./app.89f0a15e.js";import{C as V}from"./Common.1f0b964c.js";import{P as b}from"./PageHeader.148818fc.js";import{u as k,g as j,f as z}from"./useBlog.020f1959.js";import"./resolveTime.439cd54d.js";const x=n=>{if(n.length===4){const e=/\w+/.exec(n);for(const t in e)e[t]=e[t]+e[t];n=e.join("")}const l=/(\w{2})(\w{2})(\w{2})/.exec(n);return[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]},D=n=>{const l=n.map(e=>{let t=e.toString(16);return t=t.length===1?"0"+t:t,t});return"#"+l.join("")},E=(n,l,e)=>{const t=x(n);return x(l).map((c,r)=>(c-t[r])/e)},F=(n,l,e)=>{const t=x(n).map((c,r)=>{let o=Math.round(c+l[r]*e);return o>255?o=255:o<0&&(o=0),o});return D(t)},H=(n="#a5a5e4",l="#4388c4")=>{const{posts:e}=k(),t=p(()=>{const r={};for(const a of e.value){const s=a.frontmatter;for(const i of s.tags)r[i]===void 0&&(r[i]=[]),r[i].push(a)}const o=[];for(const a in r){const s={};s.pages=r[a],s.name=a,s.path=`/tags/${a}`,o.push(s)}return o.sort((a,s)=>s.pages.length-a.pages.length),o}),c=p(()=>{if(t.value.length===0)return[];const r=t.value[t.value.length-1].pages.length,o=t.value[0].pages.length,a=Math.max(o-r,1),s=E(n,l,a),i=t.value;for(const m of i){const $=m.pages.length-r;m.tagColor=F(n,s,$)}return i});return{tags:t,tagsWithColor:c}},M=["onClick"],W={key:0},G={key:1},U=C({props:{currentTag:{type:String,default:""}},setup(n){const l=w(),e=L(),t=H(),{posts:c}=k(),r=p(()=>[{name:l.value.showAllTagsText,path:"/tags/"},...t.tagsWithColor.value]);return(o,a)=>(u(!0),g(T,null,v(h(r),(s,i)=>(u(),g("span",{key:i,class:P(["article-tag",{active:s.name==n.currentTag,"tag-all":s.path=="/tags/"}]),style:R({backgroundColor:s.tagColor}),onClick:m=>h(e).push(s.path)},[A(f(s.name)+" ",1),s.path=="/tags/"?(u(),g("sup",W,f(h(c).length),1)):(u(),g("sup",G,f(s.pages.length),1))],14,M))),128))}});var Y=y(U,[["__file","TagList.vue"]]);const q={class:"year"},J={class:"title"},K={key:0,class:"subtitle"},O=d("hr",null,null,-1),Q=C({props:{data:{type:Array,default:()=>[]}},setup(n){return(l,e)=>{const t=I("RouterLink");return u(!0),g(T,null,v(n.data,(c,r)=>(u(),g("section",{key:r},[d("span",q,f(c.year),1),(u(!0),g(T,null,v(c.data,(o,a)=>(u(),g("div",{key:a,class:"item"},[_(t,{to:o.path},{default:B(()=>[d("p",J,f(o.frontmatter.title),1),o.frontmatter.subtitle?(u(),g("p",K,f(o.frontmatter.subtitle),1)):N("",!0)]),_:2},1032,["to"]),O]))),128))]))),128)}}});var X=y(Q,[["__file","TagPostList.vue"]]);const Z={class:"tags-wrapper"},tt=C({setup(n){const l=L(),e=w(),{posts:t}=k(),c=p(()=>{const a=decodeURI(l.currentRoute.value.path.replace(/\/tags/g,"").replace(/\//g,""));return a===""?e.value.showAllTagsText:a}),r=p(()=>{const a=c.value===e.value.showAllTagsText?"":c.value;return j(z(t.value,a))}),o=p(()=>{var s;const a=e.value.pages&&e.value.pages.tags?e.value.pages.tags:{};return a.title===void 0&&(a.title=(s=e.value.pageText)==null?void 0:s.tags),a});return(a,s)=>(u(),S(V,null,{page:B(()=>[_(b,{"page-info":h(o)},null,8,["page-info"]),d("div",Z,[_(Y,{"current-tag":h(c)},null,8,["current-tag"]),_(X,{data:h(r)},null,8,["data"])])]),_:1}))}});var rt=y(tt,[["__file","Tags.vue"]]);export{rt as default};
