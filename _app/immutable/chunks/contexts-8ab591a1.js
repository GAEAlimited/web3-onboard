import{a7 as f,r as p}from"./index-9cb557dd.js";import{r as E,d as c}from"./singletons-e07d0660.js";function F(e){return e===null}function j(e){return typeof e=="undefined"}function N(e){return typeof e=="string"}function G(e){return typeof e=="function"}function K(e){return e===window}function I(e){return e instanceof RegExp}function h(e){var t,s,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=h(e[t]))&&(n&&(n+=" "),n+=s);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function X(){for(var e=0,t,s,n="";e<arguments.length;)(t=arguments[e++])&&(s=h(t))&&(n&&(n+=" "),n+=s);return n}const O=()=>{const e=f("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},_={subscribe(e){return O().page.subscribe(e)}};function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}function m(e){var t;return v((t=e==null?void 0:e.replace(/-./g,s=>" "+s[1].toUpperCase()))!=null?t:"")}function w(e){var t;return(t=e==null?void 0:e.replace(/\s/g,"-").toLowerCase())!=null?t:""}const T=Symbol(""),V={canUpdateHash:()=>!0,cleanHash:e=>e};function Y(){try{return f(T)}catch(e){console.error(e),console.warn("[kit-docs]: attempted to get navigation context before setting it.")}}function M(e){p(T,e)}const k=Symbol("");function P(){try{return f(k)}catch(e){console.error(e),console.warn("[kit-docs]: attempted to get navbar context before setting it.")}}function W(e){p(k,e)}function R(e){var n,a;if(!e)return{links:{}};const t={},s=(a=(n=e.baseUrl)==null?void 0:n.replace(/\/$/,""))!=null?a:"";for(const i of Object.keys(e.links)){const d=e.links[i],b=w(i),u=N(e.links[i][0])?m(i):i;for(const l of d){const o=N(l)?{title:m(l),slug:`${s}/${b}/${l}`}:l;t[u]||(t[u]=[]),t[u].push(o)}}return{...e,links:t}}function U({match:e,slug:t},s){const n=s.replace(/\.html/,"");return e==="deep"?n===t||n.startsWith(t)&&n[t.length]==="/":I(e)?e.test(t):n===t}const S=Symbol();function z(e){const t=e&&"subscribe"in e?e:E(e),s=c(t,o=>R(o)),n=c(s,o=>Object.values(o.links).flat()),a=c([n,_],([o,r])=>o.findIndex(g=>U(g,r.url.pathname))),i=c([n,a],([o,r])=>o[r]),d=c([n,a],([o,r])=>o[r-1]),b=c([n,a],([o,r])=>o[r+1]),u=c([s,i],([o,r])=>{const g=Object.keys(o.links).find(A=>{var y;return(y=o.links[A])==null?void 0:y.some(C=>C.title===(r==null?void 0:r.title)&&C.slug===(r==null?void 0:r.slug))});return g!=="."?g:null});return{config:s,allLinks:n,activeLinkIndex:a,activeLink:i,previousLink:d,nextLink:b,activeCategory:u}}function B(e){p(S,e)}function H(){try{return f(S)}catch(e){console.error(e),console.warn("[kit-docs]: attempted to get sidebar context before setting it.")}}const q={nav:{previous:"Previous",next:"Next",mainMenu:"Main navigation menu",openSidebar:"Open main sidebar",options:"Options",links:"Links"},toc:{title:"On this page"},colorScheme:{title:"Color Scheme",light:"Light",dark:"Dark",system:"System",theme:"Theme"},dialog:{close:"Close dialog"},admonition:{note:"NOTE",info:"INFO",tip:"TIP",warning:"WARNING",danger:"DANGER",experimental:"EXPERIMENTAL"},code:{copy:"Copy code",copied:"Copied!"}},x=Symbol();function J(){try{return f(x)}catch(e){console.error(e),console.warn("[kit-docs]: attempted to get i18n context before setting it.")}}function Q(e){p(x,e)}export{V as D,K as a,F as b,X as c,P as d,G as e,H as f,J as g,U as h,j as i,Y as j,W as k,B as l,z as m,Q as n,q as o,_ as p,N as q,M as s,v as u};
