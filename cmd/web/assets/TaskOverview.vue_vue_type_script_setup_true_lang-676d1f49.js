import{d as g,r as h,o as _,n as l,k as s,l as r,m as n,Z as V,a5 as k,a0 as c,j as x,O as C,W as i,$ as u,F as v,Y as w,av as y}from"./utils-077ba0c9.js";import{V as B}from"./VCol-0037af41.js";import{V as b}from"./index-faafe0c9.js";import{V as D}from"./VRow-423840fd.js";const N={class:"text-h4 mt-3"},T={class:"text-subtitle-1 font-weight-medium text-medium-emphasis mt-1"},O=g({__name:"TaskOverview",props:{config:{default:()=>[]},requestUrl:{default:""}},setup(m){const d=m;let a=h(null);const f=async()=>{const[t,o]=await y.get({url:d.requestUrl});o&&(a.value=o)};return _(()=>{f()}),(t,o)=>l(a)?(s(),r(D,{key:0,class:"text-center"},{default:n(()=>[(s(!0),V(v,null,k(t.config,(e,p)=>(s(),r(B,{cols:12/t.config.length,class:c({"border-right":p!==t.config.length-1})},{default:n(()=>[x(b,{color:"inherit",icon:"",class:c("pa-0 text-"+e.color+" bg-"+e.bgColor)},{default:n(()=>[(s(),r(C(e.icon),{"stroke-width":"1.5",size:24}))]),_:2},1032,["class"]),i("h4",N,u(e.statusText),1),i("p",T,u(`${l(a)[e.key]}${e.valueText}`),1)]),_:2},1032,["cols","class"]))),256))]),_:1})):w("",!0)}});export{O as _};