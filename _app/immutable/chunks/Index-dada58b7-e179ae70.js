import{j as R,k as E,s as I,C as O,G as h,J as m,n as w,r as A,X as we,u as V,v as _,t as x,w as z,l as me,a5 as Y,aw as _e,ax as ze,a2 as H,z as q,H as T,ay as B,A as D,K as y,q as S,U as be,az as je,aA as xe,aB as Ce,Z as Le,$ as Te,a1 as Pe,aa as Se,B as G,aC as Me,af as Z,ag as Ne,a9 as N,aD as ge,a8 as Re,V as Ee,aE as J,aF as F,M as he,R as $,a3 as Ie,a4 as ye,aG as Oe,aH as He,aI as U,aJ as X,x as ke,aK as Q,aL as P,I as M,L as W,aM as ee,aN as qe,aO as te,N as De,ab as K,aP as Ge}from"./_...1_connect-wallet-5c185c3a.js";import"./index-9cb557dd.js";import"./contexts-8ab591a1.js";import"./singletons-e07d0660.js";import"./scroll-f06ca868.js";import"./preload-helper-60cab3ee.js";import"./CodeFence-5d76eda7.js";import"./Link-28c9e4a5.js";/* empty css                                              */function Ae(i,{from:e,to:t},n={}){const o=getComputedStyle(i),a=o.transform==="none"?"":o.transform,[f,s]=o.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*f/t.width-(t.left+f),r=e.top+e.height*s/t.height-(t.top+s),{delay:c=0,duration:d=u=>Math.sqrt(u)*120,easing:v=ge}=n;return{delay:c,duration:Ee(d)?d(Math.sqrt(l*l+r*r)):d,easing:v,css:(u,g)=>{const p=g*l,b=g*r,j=u+g*e.width/t.width,C=u+g*e.height/t.height;return`transform: ${a} translate(${p}px, ${b}px) scale(${j}, ${C});`}}}function Ve(i){O(i,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function $e(i){let e,t;return{c(){e=h("div"),m(e,"class","border svelte-13cuwwo"),m(e,"style",t=`
    width: ${i[2]-i[3]*2}px; 
    height: ${i[2]-i[3]*2}px; 
    border-color: var(${i[1]}); 
    padding: ${i[3]}px; 
    background-color: ${i[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)},m(n,o){w(n,e,o),e.innerHTML=i[0]},p(n,[o]){o&1&&(e.innerHTML=n[0]),o&30&&t!==(t=`
    width: ${n[2]-n[3]*2}px; 
    height: ${n[2]-n[3]*2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)&&m(e,"style",t)},i:N,o:N,d(n){n&&z(e)}}}function Be(i,e,t){let{icon:n}=e,{borderColorVar:o}=e,{size:a}=e,{padding:f=0}=e,{background:s="transparent"}=e;return i.$$set=l=>{"icon"in l&&t(0,n=l.icon),"borderColorVar"in l&&t(1,o=l.borderColorVar),"size"in l&&t(2,a=l.size),"padding"in l&&t(3,f=l.padding),"background"in l&&t(4,s=l.background)},[n,o,a,f,s]}class Fe extends R{constructor(e){super(),E(this,e,Be,$e,I,{icon:0,borderColorVar:1,size:2,padding:3,background:4},Ve)}}function Ke(i){O(i,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function ne(i){let e,t,n,o,a=P[i[1].type].eventIcon+"",f,s,l,r=!i[1].id.includes("customNotification")&&!i[1].id.includes("preflight"),c,d=i[1].type==="pending"&&ie(),v=r&&oe(i);return{c(){e=h("div"),d&&d.c(),t=T(),n=h("div"),o=h("div"),l=T(),v&&v.c(),m(o,"class",f=B(`notification-icon flex items-center justify-center ${i[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"),m(n,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),m(n,"style",s=`background:${P[i[1].type].backgroundColor}; color: ${P[i[1].type].iconColor||""}; ${i[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[i[1].type].borderColor}`}; `),m(e,"class","relative")},m(u,g){w(u,e,g),d&&d.m(e,null),y(e,t),y(e,n),y(n,o),o.innerHTML=a,y(e,l),v&&v.m(e,null),c=!0},p(u,g){u[1].type==="pending"?d||(d=ie(),d.c(),d.m(e,t)):d&&(d.d(1),d=null),(!c||g&2)&&a!==(a=P[u[1].type].eventIcon+"")&&(o.innerHTML=a),(!c||g&2&&f!==(f=B(`notification-icon flex items-center justify-center ${u[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"))&&m(o,"class",f),(!c||g&2&&s!==(s=`background:${P[u[1].type].backgroundColor}; color: ${P[u[1].type].iconColor||""}; ${u[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[u[1].type].borderColor}`}; `))&&m(n,"style",s),g&2&&(r=!u[1].id.includes("customNotification")&&!u[1].id.includes("preflight")),r?v?(v.p(u,g),g&2&&_(v,1)):(v=oe(u),v.c(),_(v,1),v.m(e,null)):v&&(A(),x(v,1,1,()=>{v=null}),V())},i(u){c||(_(v),c=!0)},o(u){x(v),c=!1},d(u){u&&z(e),d&&d.d(),v&&v.d()}}}function ie(i){let e;return{c(){e=h("div"),m(e,"class","border-action absolute svelte-jvic9v")},m(t,n){w(t,e,n)},d(t){t&&z(e)}}}function oe(i){let e,t,n;return t=new Fe({props:{icon:i[0].icon,size:16,background:i[0].color,borderColorVar:"--onboard-gray-600, var(--gray-600)",padding:3}}),{c(){e=h("div"),q(t.$$.fragment),m(e,"class","absolute chain-icon-container svelte-jvic9v")},m(o,a){w(o,e,a),D(t,e,null),n=!0},p(o,a){const f={};a&1&&(f.icon=o[0].icon),a&1&&(f.background=o[0].color),t.$set(f)},i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){x(t.$$.fragment,o),n=!1},d(o){o&&z(e),G(t)}}}function We(i){let e,t,n=i[1].type&&ne(i);return{c(){n&&n.c(),e=me()},m(o,a){n&&n.m(o,a),w(o,e,a),t=!0},p(o,[a]){o[1].type?n?(n.p(o,a),a&2&&_(n,1)):(n=ne(o),n.c(),_(n,1),n.m(e.parentNode,e)):n&&(A(),x(n,1,1,()=>{n=null}),V())},i(o){t||(_(n),t=!0)},o(o){x(n),t=!1},d(o){n&&n.d(o),o&&z(e)}}}function Ye(i,e,t){let{chainStyles:n=De}=e,{notification:o}=e;return i.$$set=a=>{"chainStyles"in a&&t(0,n=a.chainStyles),"notification"in a&&t(1,o=a.notification)},[n,o]}class Ze extends R{constructor(e){super(),E(this,e,Ye,We,I,{chainStyles:0,notification:1},Ke)}}function Je(i){O(i,"svelte-1qgnr32",`div.svelte-1qgnr32{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-1qgnr32{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-1qgnr32{color:var(
      --notify-onboard-gray-300,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`)}function ae(i){let e,t,n=i[2](i[1]-i[0])+"",o,a;return{c(){e=M(`-
    `),t=h("span"),o=M(n),a=M(`
    ago`),m(t,"class","svelte-1qgnr32")},m(f,s){w(f,e,s),w(f,t,s),y(t,o),w(f,a,s)},p(f,s){s&3&&n!==(n=f[2](f[1]-f[0])+"")&&W(o,n)},d(f){f&&z(e),f&&z(t),f&&z(a)}}}function Ue(i){let e,t=i[0]&&ae(i);return{c(){e=h("div"),t&&t.c(),m(e,"class","time svelte-1qgnr32")},m(n,o){w(n,e,o),t&&t.m(e,null)},p(n,[o]){n[0]?t?t.p(n,o):(t=ae(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:N,o:N,d(n){n&&z(e),t&&t.d()}}}function Xe(i,e,t){let n,o;H(i,ye,r=>t(3,n=r)),H(i,Ge,r=>t(4,o=r));let{startTime:a}=e;function f(r){const c=Math.floor(r/1e3),d=c<0?0:c;return d>=60?`${Math.floor(d/60).toLocaleString(o)} ${n("notify.time.minutes")}`:`${d.toLocaleString(o)} ${n("notify.time.seconds")}`}let s=Date.now();const l=setInterval(()=>{t(1,s=Date.now())},1e3);return ke(()=>{clearInterval(l)}),i.$$set=r=>{"startTime"in r&&t(0,a=r.startTime)},[a,s,f]}class Qe extends R{constructor(e){super(),E(this,e,Xe,Ue,I,{startTime:0},Je)}}function et(i){O(i,"svelte-g7vehc",`div.notify-transaction-data.svelte-g7vehc{font-size:var(
      --notify-onboard-font-size-6,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-g7vehc{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-font-size-7,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-font-line-height-4,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-g7vehc{color:var(
      --notify-onboard-primary-200,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-g7vehc{color:var(
      --notify-onboard-primary-400,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-g7vehc{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-g7vehc{color:var(
      --notify-onboard-primary-100,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`)}function re(i){let e,t,n,o;function a(l,r){return l[0].link?nt:tt}let f=a(i),s=f(i);return n=new Qe({props:{startTime:i[0].startTime}}),{c(){e=h("span"),s.c(),t=T(),q(n.$$.fragment),m(e,"class","hash-time svelte-g7vehc")},m(l,r){w(l,e,r),s.m(e,null),y(e,t),D(n,e,null),o=!0},p(l,r){f===(f=a(l))&&s?s.p(l,r):(s.d(1),s=f(l),s&&(s.c(),s.m(e,t)));const c={};r&1&&(c.startTime=l[0].startTime),n.$set(c)},i(l){o||(_(n.$$.fragment,l),o=!0)},o(l){x(n.$$.fragment,l),o=!1},d(l){l&&z(e),s.d(),G(n)}}}function tt(i){let e,t=K(i[0].id)+"",n;return{c(){e=h("div"),n=M(t),m(e,"class","address-hash svelte-g7vehc")},m(o,a){w(o,e,a),y(e,n)},p(o,a){a&1&&t!==(t=K(o[0].id)+"")&&W(n,t)},d(o){o&&z(e)}}}function nt(i){let e,t=K(i[0].id)+"",n,o;return{c(){e=h("a"),n=M(t),m(e,"class","address-hash svelte-g7vehc"),m(e,"href",o=i[0].link),m(e,"target","_blank"),m(e,"rel","noreferrer noopener")},m(a,f){w(a,e,f),y(e,n)},p(a,f){f&1&&t!==(t=K(a[0].id)+"")&&W(n,t),f&1&&o!==(o=a[0].link)&&m(e,"href",o)},d(a){a&&z(e)}}}function it(i){let e,t,n=i[0].message+"",o,a,f=i[0].id&&!i[0].id.includes("customNotification")&&!i[0].id.includes("preflight"),s,l=f&&re(i);return{c(){e=h("div"),t=h("span"),o=M(n),a=T(),l&&l.c(),m(t,"class","transaction-status svelte-g7vehc"),m(e,"class","flex flex-column notify-transaction-data svelte-g7vehc")},m(r,c){w(r,e,c),y(e,t),y(t,o),y(e,a),l&&l.m(e,null),s=!0},p(r,[c]){(!s||c&1)&&n!==(n=r[0].message+"")&&W(o,n),c&1&&(f=r[0].id&&!r[0].id.includes("customNotification")&&!r[0].id.includes("preflight")),f?l?(l.p(r,c),c&1&&_(l,1)):(l=re(r),l.c(),_(l,1),l.m(e,null)):l&&(A(),x(l,1,1,()=>{l=null}),V())},i(r){s||(_(l),s=!0)},o(r){x(l),s=!1},d(r){r&&z(e),l&&l.d()}}}function ot(i,e,t){let{notification:n}=e;return i.$$set=o=>{"notification"in o&&t(0,n=o.notification)},[n]}class at extends R{constructor(e){super(),E(this,e,ot,it,I,{notification:0},et)}}var rt=`
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;const lt=["txPool"],st=["main","matic-main"],ct=["Ledger","Trezor","Keystone","Keepkey"],le=i=>lt.includes(i),se=i=>st.includes(i),ce=i=>i&&ct.includes(i.label);async function fe({type:i,wallet:e,transaction:t}){const{from:n,input:o,value:a,to:f,nonce:s,gas:l,network:r}=t,c=F[r],{gasPriceProbability:d}=Y.get().notify.replacement,{gas:v,apiKey:u}=Z,[g]=await v.get({chains:[F[r]],endpoint:"blockPrices",apiKey:u}),{maxFeePerGas:p,maxPriorityFeePerGas:b}=g.blockPrices[0].estimatedPrices.find(({confidence:L})=>L===(i==="speedup"?d.speedup:d.cancel)),j=ee(p),C=ee(b),k=o==="0x"?{}:{data:o};return e.provider.request({method:"eth_sendTransaction",params:[{type:"0x2",from:n,to:i==="cancel"?n:f,chainId:parseInt(c),value:`${qe.from(a).toHexString()}`,nonce:te(s),gasLimit:te(l),maxFeePerGas:j,maxPriorityFeePerGas:C,...k}]})}function ft(i){O(i,"svelte-1kwzx6j",`.bn-notify-notification.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;background:var(
      --notify-onboard-gray-600,
      var(--onboard-gray-600, var(--gray-600))
    );border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );display:flex;flex-direction:column;position:relative;overflow:hidden}.bn-notify-notification-inner.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{padding:0.75rem}.bn-notify-notification.svelte-1kwzx6j:hover>div.bn-notify-notification-inner.svelte-1kwzx6j>div.notify-close-btn-desktop.svelte-1kwzx6j{visibility:visible;opacity:1}div.notify-close-btn.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-1kwzx6j .close-icon.svelte-1kwzx6j.svelte-1kwzx6j{width:20px;margin:auto}.notify-close-btn.svelte-1kwzx6j>.close-icon.svelte-1kwzx6j.svelte-1kwzx6j{color:var(
      --notify-onboard-gray-300,
      var(--onboard-gray-300, var(--gray-300))
    )}.notify-close-btn.svelte-1kwzx6j:hover>.close-icon.svelte-1kwzx6j.svelte-1kwzx6j{color:var(
      --notify-onboard-gray-100,
      var(--onboard-gray-100, var(--gray-100))
    )}.transaction-status.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{color:var(
      --notify-onboard-primary-100,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{height:48px}.dropdown-buttons.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{background-color:var(
      --notify-onboard-gray-700,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j{padding:4px 12px;border-radius:var(
      --notify-onboard-border-radius-5,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-font-size-6,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-primary-400,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-1kwzx6j.svelte-1kwzx6j.svelte-1kwzx6j:hover{background-color:rgba(146, 155, 237, 0.2)}`)}function de(i){let e,t,n,o,a,f;return{c(){e=h("div"),t=h("button"),t.textContent="Cancel",n=T(),o=h("button"),o.textContent="Speed-up",m(t,"class","dropdown-button svelte-1kwzx6j"),m(o,"class","dropdown-button svelte-1kwzx6j"),m(e,"class","dropdown-buttons flex items-center justify-end svelte-1kwzx6j")},m(s,l){w(s,e,l),y(e,t),y(e,n),y(e,o),a||(f=[S(t,"click",i[9]),S(o,"click",i[10])],a=!0)},p:N,d(s){s&&z(e),a=!1,he(f)}}}function dt(i){let e,t,n,o,a,f,s,l,r,c,d,v,u,g;n=new Ze({props:{notification:i[0],chainStyles:J[F[i[0].network]]}}),a=new at({props:{notification:i[0]}});let p=i[0].eventCode==="txPool"&&de(i);return{c(){e=h("div"),t=h("div"),q(n.$$.fragment),o=T(),q(a.$$.fragment),f=T(),s=h("div"),l=h("div"),r=T(),c=h("div"),p&&p.c(),m(l,"class","flex items-center close-icon svelte-1kwzx6j"),m(s,"class","notify-close-btn notify-close-btn-"+i[4].type+" pointer flex svelte-1kwzx6j"),m(t,"class","flex bn-notify-notification-inner svelte-1kwzx6j"),m(c,"class","dropdown svelte-1kwzx6j"),$(c,"dropdown-visible",i[2]&&i[5]&&le(i[0].eventCode)&&se(i[0].network)&&ce(i[7])),m(e,"class",d="bn-notify-notification bn-notify-notification-"+i[0].type+"} svelte-1kwzx6j"),$(e,"bn-notify-clickable",i[0].onClick)},m(b,j){w(b,e,j),y(e,t),D(n,t,null),y(t,o),D(a,t,null),y(t,f),y(t,s),y(s,l),l.innerHTML=rt,y(e,r),y(e,c),p&&p.m(c,null),v=!0,u||(g=[S(s,"click",be(i[8])),S(e,"mouseenter",i[11]),S(e,"mouseleave",i[12]),S(e,"click",i[13])],u=!0)},p(b,[j]){const C={};j&1&&(C.notification=b[0]),j&1&&(C.chainStyles=J[F[b[0].network]]),n.$set(C);const k={};j&1&&(k.notification=b[0]),a.$set(k),b[0].eventCode==="txPool"?p?p.p(b,j):(p=de(b),p.c(),p.m(c,null)):p&&(p.d(1),p=null),j&165&&$(c,"dropdown-visible",b[2]&&b[5]&&le(b[0].eventCode)&&se(b[0].network)&&ce(b[7])),(!v||j&1&&d!==(d="bn-notify-notification bn-notify-notification-"+b[0].type+"} svelte-1kwzx6j"))&&m(e,"class",d),j&1&&$(e,"bn-notify-clickable",b[0].onClick)},i(b){v||(_(n.$$.fragment,b),_(a.$$.fragment,b),v=!0)},o(b){x(n.$$.fragment,b),x(a.$$.fragment,b),v=!1},d(b){b&&z(e),G(n),G(a),p&&p.d(),u=!1,he(g)}}}function ut(i,e,t){let n,o;H(i,Ie,k=>t(15,n=k)),H(i,ye,k=>t(3,o=k));const{device:a,gas:f}=Z;let{notification:s}=e,{updateParentOnRemove:l}=e,r,c=!1;const d=Oe.getValue().find(({hash:k})=>k===s.id),v=d&&n.find(({accounts:k})=>!!k.find(({address:L})=>L.toLowerCase()===d.from.toLowerCase()));He(()=>{s.autoDismiss&&(r=setTimeout(()=>{U(s.id),X(s.id)},s.autoDismiss))}),ke(()=>{clearTimeout(r)});const u=()=>{U(s.id),X(s.id),l()},g=async()=>{try{await fe({type:"cancel",wallet:v,transaction:d})}catch{const L=`${d.hash.slice(0,9)}:txReplaceError${d.hash.slice(-5)}`;Q({id:L,type:"hint",eventCode:"txError",message:o("notify.transaction.txReplaceError"),key:L,autoDismiss:4e3})}},p=async()=>{try{await fe({type:"speedup",wallet:v,transaction:d})}catch{const L=`${d.hash.slice(0,9)}:txReplaceError${d.hash.slice(-5)}`;Q({id:L,type:"hint",eventCode:"txError",message:o("notify.transaction.txReplaceError"),key:L,autoDismiss:4e3})}},b=()=>t(2,c=!0),j=()=>t(2,c=!1),C=k=>s.onClick&&s.onClick(k);return i.$$set=k=>{"notification"in k&&t(0,s=k.notification),"updateParentOnRemove"in k&&t(1,l=k.updateParentOnRemove)},[s,l,c,o,a,f,d,v,u,g,p,b,j,C]}class vt extends R{constructor(e){super(),E(this,e,ut,dt,I,{notification:0,updateParentOnRemove:1},ft)}}function pt(i){O(i,"svelte-14inrvn",`ul.svelte-14inrvn{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:300;font-family:var(
      --notify-onboard-font-family-normal,
      var(--onboard-font-family-normal, var(--font-family-normal))
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-14inrvn{overflow-y:scroll}.y-visible.svelte-14inrvn{overflow-y:visible}li.notification-list-top.svelte-14inrvn:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-14inrvn:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-14inrvn,ul.bn-notify-bottomRight.svelte-14inrvn{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-14inrvn{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-14inrvn::-webkit-scrollbar{display:none}`)}function ue(i,e,t){const n=i.slice();return n[12]=e[t],n}function ve(i){let e,t=[],n=new Map,o,a,f,s=i[2];const l=r=>r[12].key;for(let r=0;r<s.length;r+=1){let c=ue(i,s,r),d=l(c);n.set(d,t[r]=pe(d,c))}return{c(){e=h("ul");for(let r=0;r<t.length;r+=1)t[r].c();m(e,"class",o="bn-notify-"+i[0]+" "+i[5]+" svelte-14inrvn"),m(e,"style",a=`${i[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${i[6].expanded?"412px":i[1]&&i[7].type!=="mobile"?"82px":!i[1]&&i[7].type==="mobile"?"108px":"24px"})`)},m(r,c){w(r,e,c);for(let d=0;d<t.length;d+=1)t[d].m(e,null);f=!0},p(r,c){if(c&517){s=r[2],A();for(let d=0;d<t.length;d+=1)t[d].r();t=we(t,c,l,1,r,s,n,e,Me,pe,null,ue);for(let d=0;d<t.length;d+=1)t[d].a();V()}(!f||c&33&&o!==(o="bn-notify-"+r[0]+" "+r[5]+" svelte-14inrvn"))&&m(e,"class",o),(!f||c&67&&a!==(a=`${r[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${r[6].expanded?"412px":r[1]&&r[7].type!=="mobile"?"82px":!r[1]&&r[7].type==="mobile"?"108px":"24px"})`))&&m(e,"style",a)},i(r){if(!f){for(let c=0;c<s.length;c+=1)_(t[c]);f=!0}},o(r){for(let c=0;c<t.length;c+=1)x(t[c]);f=!1},d(r){r&&z(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}function pe(i,e){let t,n,o,a,f,s,l,r=N,c,d,v;return n=new vt({props:{notification:e[12],updateParentOnRemove:e[9]}}),{key:i,first:null,c(){t=h("li"),q(n.$$.fragment),o=T(),m(t,"class",a=B(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-14inrvn"),this.first=t},m(u,g){w(u,t,g),D(n,t,null),y(t,o),c=!0,d||(v=S(t,"click",be(e[10])),d=!0)},p(u,g){e=u;const p={};g&4&&(p.notification=e[12]),n.$set(p),(!c||g&1&&a!==(a=B(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-14inrvn"))&&m(t,"class",a)},r(){l=t.getBoundingClientRect()},f(){je(t),r(),xe(t,l)},a(){r(),r=Ce(t,l,Ae,{duration:500})},i(u){c||(_(n.$$.fragment,u),Le(()=>{s&&s.end(1),f=Te(t,Pe,{duration:1200,delay:300,x:e[3],y:e[4],easing:bt}),f.start()}),c=!0)},o(u){x(n.$$.fragment,u),f&&f.invalidate(),s=Se(t,Re,{duration:300,easing:ge}),c=!1},d(u){u&&z(t),G(n),u&&s&&s.end(),d=!1,v()}}}function mt(i){let e,t,n=i[2].length&&ve(i);return{c(){n&&n.c(),e=me()},m(o,a){n&&n.m(o,a),w(o,e,a),t=!0},p(o,[a]){o[2].length?n?(n.p(o,a),a&4&&_(n,1)):(n=ve(o),n.c(),_(n,1),n.m(e.parentNode,e)):n&&(A(),x(n,1,1,()=>{n=null}),V())},i(o){t||(_(n),t=!0)},o(o){x(n),t=!1},d(o){n&&n.d(o),o&&z(e)}}}function bt(i){return Math.sin(-13*(i+1)*Math.PI/2)*Math.pow(2,-35*i)+1}function gt(i,e,t){let n;const{device:o}=Z,a=Y.select("accountCenter").pipe(_e(Y.get().accountCenter),ze(1));H(i,a,p=>t(6,n=p));let{position:f}=e,{sharedContainer:s}=e,{notifications:l}=e,r,c;r=0,c=0;let d="y-scroll";const v=()=>{d!=="y-visible"&&t(5,d="y-visible"),u(function(){t(5,d="y-scroll")},1e3)},u=function(){let p=null;return(b,j)=>{clearTimeout(p),p=setTimeout(b,j)}}();function g(p){Ne.call(this,i,p)}return i.$$set=p=>{"position"in p&&t(0,f=p.position),"sharedContainer"in p&&t(1,s=p.sharedContainer),"notifications"in p&&t(2,l=p.notifications)},i.$$.update=()=>{i.$$.dirty&1&&(f.includes("top")?t(4,c=-50):t(4,c=50))},[f,s,l,r,c,d,n,o,a,v,g]}class Lt extends R{constructor(e){super(),E(this,e,gt,mt,I,{position:0,sharedContainer:1,notifications:2},pt)}}export{Lt as default};
