import"./hoisted.a8ac998f.js";const ce=document.querySelector(".js-nav"),de="is-active",me=()=>{const n=window.location.pathname,s=n.split("/");n==="/"?ce.firstElementChild.firstElementChild.classList.add(de):ce.querySelector(`[href="/${s[1]}"]`).classList.add(de)},be=()=>me(),Te=document.querySelectorAll("a[href*='#']"),Ee=n=>{n.preventDefault();const s=n.currentTarget.hash,l=document.querySelector(`${s}`);if(!l)throw new Error(`Element doesn't exist with id ${s}`);l.scrollIntoView({behavior:"smooth"}),l.focus()},Le=()=>Te.forEach(n=>n.addEventListener("click",Ee));var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pe(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function B(n,s,l){return s>n?s:l<n?l:n}function re(n){return+(n>0)-+(n<0)}function Me(n){return Math.round(n*1e4)/1e4}var ue={};function He(n){return"-"+n[0].toLowerCase()}function ye(n){return ue[n]||(ue[n]=n.replace(/([A-Z])/g,He))}function oe(n,s){return!n||n.length===0?[]:n.nodeName?[n]:[].slice.call(n[0].nodeName?n:(s||document.documentElement).querySelectorAll(n))}function fe(n,s){for(var l in s)l.indexOf("_")&&n.setAttribute("data-"+ye(l),s[l])}function Ce(n){return function(s,l){for(var u in l)u.indexOf("_")&&(n===!0||n[u])&&s.style.setProperty("--"+ye(u),Me(l[u]))}}var R,F=[];function We(){R=0,F.slice().forEach(function(n){return n()}),we()}function we(){!R&&F.length&&(R=requestAnimationFrame(We))}function Ne(n){return F.push(n),we(),function(){F=F.filter(function(s){return s!==n}),!F.length&&R&&(cancelAnimationFrame(R),R=0)}}function he(n,s,l,u){return typeof n=="function"?n(s,l,u):n}function K(){}function Oe(n){n=n||{};var s=n.onChange||K,l=n.onHidden||K,u=n.onShown||K,T=n.onScroll||K,U=n.cssProps?Ce(n.cssProps):K,A=n.scrollingElement,D=A?oe(A)[0]:window,c=A?oe(A)[0]:document.documentElement,q=!1,h={},C=[],v,E,N;function Q(){C=oe(n.targets||"[data-scroll]",oe(n.scope||c)[0]).map(function(p){return{element:p}})}function G(){var p=c.clientWidth,g=c.clientHeight,f=re(-v+(v=c.scrollLeft||window.pageXOffset)),L=re(-E+(E=c.scrollTop||window.pageYOffset)),m=c.scrollLeft/(c.scrollWidth-p||1),P=c.scrollTop/(c.scrollHeight-g||1);q=q||h.scrollDirX!==f||h.scrollDirY!==L||h.scrollPercentX!==m||h.scrollPercentY!==P,h.scrollDirX=f,h.scrollDirY=L,h.scrollPercentX=m,h.scrollPercentY=P;for(var ee=!1,I=0;I<C.length;I++){var a=C[I],S=a.element,t=S,e=0,o=0;do e+=t.offsetLeft,o+=t.offsetTop,t=t.offsetParent;while(t&&t!==D);var r=S.clientHeight||S.offsetHeight||0,i=S.clientWidth||S.offsetWidth||0,d=(B(e+i,v,v+p)-B(e,v,v+p))/i,y=(B(o+r,E,E+g)-B(o,E,E+g))/r,w=d===1?0:re(e-v),M=y===1?0:re(o-E),te=B((v-(i/2+e-p/2))/(p/2),-1,1),_=B((E-(r/2+o-g/2))/(g/2),-1,1),W=void 0;n.offset?W=he(n.offset,S,a,c)<=E?1:0:(he(n.threshold,S,a,c)||0)<d*y?W=1:W=0;var Z=a.visible!==W,b=a._changed||Z||a.visibleX!==d||a.visibleY!==y||a.index!==I||a.elementHeight!==r||a.elementWidth!==i||a.offsetX!==e||a.offsetY!==o||a.intersectX!==a.intersectX||a.intersectY!==a.intersectY||a.viewportX!==te||a.viewportY!==_;b&&(ee=!0,a._changed=!0,a._visibleChanged=Z,a.visible=W,a.elementHeight=r,a.elementWidth=i,a.index=I,a.offsetX=e,a.offsetY=o,a.visibleX=d,a.visibleY=y,a.intersectX=w,a.intersectY=M,a.viewportX=te,a.viewportY=_,a.visible=W)}!N&&(q||ee)&&(N=Ne(V))}function V(){J(),q&&(q=!1,fe(c,{scrollDirX:h.scrollDirX,scrollDirY:h.scrollDirY}),U(c,h),T(c,h,C));for(var p=C.length,g=p-1;g>-1;g--){var f=C[g],L=f.element,m=f.visible,P=L.hasAttribute("scrollout-once")||!1;f._changed&&(f._changed=!1,U(L,f)),f._visibleChanged&&(fe(L,{scroll:m?"in":"out"}),s(L,f,c),(m?u:l)(L,f,c)),m&&(n.once||P)&&C.splice(g,1)}}function J(){N&&(N(),N=void 0)}Q(),G(),V();var $=0,X=function(){$=$||setTimeout(function(){$=0,G()},0)};return window.addEventListener("resize",X),D.addEventListener("scroll",X),{index:Q,update:G,teardown:function(){J(),window.removeEventListener("resize",X),D.removeEventListener("scroll",X)}}}var Ae=Oe;const ve=pe(Ae);ve({once:!0,threshold:.2});var ge={exports:{}};(function(n){(function(s,l){n.exports?n.exports=l():s.balanceText=l()})(Se,()=>{let s,l,u;const T={sel:[],el:[]};let U=!1,A=!1;function D(){}function c(t,e){Array.prototype.forEach.call(t,e)}function q(t){document.readyState!=="loading"?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",()=>{document.readyState!=="loading"&&t()})}function h(t,e,o,...r){let i;return function(){const d=this;function y(){o||t.apply(d,r),i=null}i?clearTimeout(i):o&&t.apply(d,r),i=setTimeout(y,e||100)}}function C(){if(typeof window>"u")return!1;const{style:t}=document.documentElement;return t.textWrap||t.WebkitTextWrap||t.MozTextWrap||t.MsTextWrap}function v(){this.reset()}v.prototype.reset=function(){this.index=0,this.width=0};function E(t){return l.some(e=>e.start<t&&t<e.end)}function N(t,e){if(t.nodeType===t.ELEMENT_NODE)if(window.getComputedStyle(t).whiteSpace==="nowrap"){const r=t.outerHTML.length;l.push({start:u,end:u+r}),u+=r}else c(t.childNodes,r=>{N(r,!0)}),e&&(u+=t.outerHTML.length-t.innerHTML.length);else t.nodeType===t.COMMENT_NODE?u+=t.length+7:t.nodeType===t.PROCESSING_INSTRUCTION_NODE?u+=t.length+2:u+=t.length}function Q(t,e,o){if(o===0)t.style.whiteSpace=e,u=0,l=[],N(t,!1),t.style.whiteSpace="nowrap";else{const r=[];l.forEach(i=>{i.start>o&&r.push({start:i.start-o,end:i.end-o})}),l=r}}function G(t){let e=t.querySelectorAll('br[data-owner="balance-text-hyphen"]');c(e,r=>{r.outerHTML=""}),e=t.querySelectorAll('br[data-owner="balance-text"]'),c(e,r=>{r.outerHTML=" "});let o=t.querySelectorAll('span[data-owner="balance-text-softhyphen"]');if(o.length>0&&c(o,r=>{const i=document.createTextNode("­");r.parentNode.insertBefore(i,r),r.parentNode.removeChild(r)}),o=t.querySelectorAll('span[data-owner="balance-text-justify"]'),o.length>0){let r="";c(o,i=>{r+=i.textContent,i.parentNode.removeChild(i)}),t.innerHTML=r}}const V=function(t){return(t.currentStyle||window.getComputedStyle(t,null)).textAlign==="justify"};function J(t,e,o){e=e.trim();const r=e.split(" ").length;if(e=`${e} `,r<2)return e;const i=document.createElement("span");i.innerHTML=e,t.appendChild(i);const d=i.offsetWidth;i.parentNode.removeChild(i);const y=Math.floor((o-d)/(r-1));i.style.wordSpacing=`${y}px`,i.setAttribute("data-owner","balance-text-justify");const w=document.createElement("div");return w.appendChild(i),w.innerHTML}function $(t,e){const o=/([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;let r;if(!s)for(s=[],r=o.exec(t);r!==null;)E(r.index)||s.push(r.index),r=o.exec(t);return s.indexOf(e)!==-1}function X(t,e){return e===0||e===t.length||$(t,e-1)&&!$(t,e)}function p(t,e,o,r,i,d,y){let w;if(e&&typeof e=="string")for(;;){for(;!X(e,d);)d+=i;if(t.innerHTML=e.substr(0,d),w=t.offsetWidth,i<0){if(w<=r||w<=0||d===0)break}else if(r<=w||o<=w||d===e.length)break;d+=i}y.index=d,y.width=w}function g(t,e){const o=document.createElement("div");o.style.display="block",o.style.position="absolute",o.style.bottom=0,o.style.right=0,o.style.width=0,o.style.height=0,o.style.margin=0,o.style.padding=0,o.style.visibility="hidden",o.style.overflow="hidden";const r=document.createElement("span");r.style.fontSize="2000px",r.innerHTML="&nbsp;",o.appendChild(r),t.appendChild(o);const i=r.getBoundingClientRect();o.parentNode.removeChild(o);const d=i.height/i.width;return e/d}function f(t){return t?typeof t=="string"?document.querySelectorAll(t):t.tagName&&t.querySelectorAll?[t]:t:[]}function L(t){c(f(t),e=>{G(e);const r=e.style.whiteSpace,i=e.style.float,d=e.style.display,y=e.style.position,w=e.style.lineHeight;e.style.lineHeight="normal";const M=e.offsetWidth,te=e.offsetHeight;e.style.whiteSpace="nowrap",e.style.float="none",e.style.display="inline",e.style.position="static";let _=e.offsetWidth;const W=e.offsetHeight,Z=r==="pre-wrap"?0:g(e,W);if(M>0&&_>M&&_<5e3){let b=e.innerHTML,x="",j="";const ae=V(e);let ne=Math.round(te/W),se=0,Y,k,H,O,z,le,ie;for(;ne>1;)s=null,Q(e,r,se),Y=Math.round((_+Z)/ne-Z),k=Math.round((b.length+1)/ne)-1,H=new v,p(e,b,M,Y,-1,k,H),O=new v,k=H.index,p(e,b,M,Y,1,k,O),H.reset(),k=O.index,p(e,b,M,Y,-1,k,H),H.index===0?z=O.index:M<O.width||H.index===O.index?z=H.index:z=Math.abs(Y-H.width)<Math.abs(O.width-Y)?H.index:O.index,j=b.substr(0,z).replace(/\s$/,""),ie=!!j.match(/\u00ad$/),ie&&(j=j.replace(/\u00ad$/,'<span data-owner="balance-text-softhyphen">-</span>')),ae?x+=J(e,j,M):(x+=j,le=ie||!!j.match(/(-|\u2014|\u2013)$/),x+=le?'<br data-owner="balance-text-hyphen" />':'<br data-owner="balance-text" aria-hidden="true" />'),b=b.substr(z),se=z,ne--,e.innerHTML=b,_=e.offsetWidth;ae?e.innerHTML=x+J(e,b,M):e.innerHTML=x+b}e.style.whiteSpace=r,e.style.float=i,e.style.display=d,e.style.position=y,e.style.lineHeight=w})}function m(){const t=T.sel.join(","),e=f(t),o=Array.prototype.concat.apply(T.el,e);L(o)}function P(){U||(q(m),window.addEventListener("load",m),window.addEventListener("resize",h(m)),U=!0)}function ee(t){typeof t=="string"?T.sel.push(t):c(f(t),e=>{T.el.push(e)}),P(),m()}function I(t){typeof t=="string"?T.sel=T.sel.filter(e=>e!==t):(t=f(t),T.el=T.el.filter(e=>t.indexOf(e)===-1))}function a(){A||(T.sel.push(".balance-text"),P(),A=!0)}function S(t,e){t?e&&e.watch===!0?ee(t):e&&e.watch===!1?I(t):L(t):a()}return S.updateWatched=m,C()?(D.updateWatched=D,D):S})})(ge);var De=ge.exports;const qe=pe(De),Pe=["h1","h2","h3","h4","h5","h6",".balance-text"],Ie=document.querySelectorAll(Pe);qe(Ie,{watch:!0});document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-nav")&&be(),Le(),ve()});
