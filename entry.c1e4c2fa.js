import"./chunks/chunk.bcd4b223.js";const te=()=>{let e=document.querySelector(".js-nav-trigger"),n=document.querySelector(".js-nav"),t="is-active";if(!n)return;const o=()=>{document.querySelector(`.js-nav.${t}`)?g():(e.classList.add(t),e.setAttribute("aria-expanded",!0),n.classList.add(t))},g=()=>{e.classList.remove(t),e.setAttribute("aria-expanded",!1),n.classList.remove(t)},f=l=>{!l.target.classList.contains("js-nav-trigger")&&e.classList.contains(t)&&g()},p=()=>{const l=window.location.pathname,a=l.split("/");l=="/"?n.firstElementChild.firstElementChild.classList.add(t):n.querySelector(`[href="/${a[1]}"]`).classList.add(t)},q=()=>{e.addEventListener("click",o),document.documentElement.addEventListener("click",f)};return(()=>{p(),q()})()},ie=()=>{let e=document.querySelectorAll("a[href*='#']");if(!e.length)return;const n=o=>{o.preventDefault();const g=o.currentTarget.hash;let f=document.querySelector(`${g}`);if(!f){console.error(`Element doesn't exist with id ${g}`);return}f.scrollIntoView({behavior:"smooth"}),f.focus()};return(()=>{e.forEach(o=>o.addEventListener("click",n))})()};function P(e,n,t){return n>e?n:t<e?t:e}function I(e){return+(e>0)-+(e<0)}function oe(e){return Math.round(e*1e4)/1e4}var G={};function ae(e){return"-"+e[0].toLowerCase()}function Q(e){return G[e]||(G[e]=e.replace(/([A-Z])/g,ae))}function U(e,n){return!e||e.length===0?[]:e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(n||document.documentElement).querySelectorAll(e))}function J(e,n){for(var t in n)t.indexOf("_")&&e.setAttribute("data-"+Q(t),n[t])}function le(e){return function(n,t){for(var o in t)o.indexOf("_")&&(e===!0||e[o])&&n.style.setProperty("--"+Q(o),oe(t[o]))}}var A,b=[];function se(){A=0,b.slice().forEach(function(e){return e()}),V()}function V(){!A&&b.length&&(A=requestAnimationFrame(se))}function ce(e){return b.push(e),V(),function(){b=b.filter(function(n){return n!==e}),!b.length&&A&&(cancelAnimationFrame(A),A=0)}}function K(e,n,t,o){return typeof e=="function"?e(n,t,o):e}function Y(){}function ue(e){e=e||{};var n=e.onChange||Y,t=e.onHidden||Y,o=e.onShown||Y,g=e.onScroll||Y,f=e.cssProps?le(e.cssProps):Y,p=e.scrollingElement,q=p?U(p)[0]:window,i=p?U(p)[0]:document.documentElement,l=!1,a={},v=[],h,u,T;function W(){v=U(e.targets||"[data-scroll]",U(e.scope||i)[0]).map(function(d){return{element:d}})}function _(){var d=i.clientWidth,c=i.clientHeight,s=I(-h+(h=i.scrollLeft||window.pageXOffset)),m=I(-u+(u=i.scrollTop||window.pageYOffset)),C=i.scrollLeft/(i.scrollWidth-d||1),N=i.scrollTop/(i.scrollHeight-c||1);l=l||a.scrollDirX!==s||a.scrollDirY!==m||a.scrollPercentX!==C||a.scrollPercentY!==N,a.scrollDirX=s,a.scrollDirY=m,a.scrollPercentX=C,a.scrollPercentY=N;for(var F=!1,X=0;X<v.length;X++){var r=v[X],L=r.element,S=L,w=0,E=0;do w+=S.offsetLeft,E+=S.offsetTop,S=S.offsetParent;while(S&&S!==q);var y=L.clientHeight||L.offsetHeight||0,O=L.clientWidth||L.offsetWidth||0,$=(P(w+O,h,h+d)-P(w,h,h+d))/O,j=(P(E+y,u,u+c)-P(E,u,u+c))/y,ee=$===1?0:I(w-h),re=j===1?0:I(E-u),R=P((h-(O/2+w-d/2))/(d/2),-1,1),Z=P((u-(y/2+E-c/2))/(c/2),-1,1),D=void 0;e.offset?D=K(e.offset,L,r,i)<=u?1:0:(K(e.threshold,L,r,i)||0)<$*j?D=1:D=0;var B=r.visible!==D,ne=r._changed||B||r.visibleX!==$||r.visibleY!==j||r.index!==X||r.elementHeight!==y||r.elementWidth!==O||r.offsetX!==w||r.offsetY!==E||r.intersectX!==r.intersectX||r.intersectY!==r.intersectY||r.viewportX!==R||r.viewportY!==Z;ne&&(F=!0,r._changed=!0,r._visibleChanged=B,r.visible=D,r.elementHeight=y,r.elementWidth=O,r.index=X,r.offsetX=w,r.offsetY=E,r.visibleX=$,r.visibleY=j,r.intersectX=ee,r.intersectY=re,r.viewportX=R,r.viewportY=Z,r.visible=D)}!T&&(l||F)&&(T=ce(k))}function k(){z(),l&&(l=!1,J(i,{scrollDirX:a.scrollDirX,scrollDirY:a.scrollDirY}),f(i,a),g(i,a,v));for(var d=v.length,c=d-1;c>-1;c--){var s=v[c],m=s.element,C=s.visible,N=m.hasAttribute("scrollout-once")||!1;s._changed&&(s._changed=!1,f(m,s)),s._visibleChanged&&(J(m,{scroll:C?"in":"out"}),n(m,s,i),(C?o:t)(m,s,i)),C&&(e.once||N)&&v.splice(c,1)}}function z(){T&&(T(),T=void 0)}W(),_(),k();var M=0,H=function(){M=M||setTimeout(function(){M=0,_()},0)};return window.addEventListener("resize",H),q.addEventListener("scroll",H),{index:W,update:_,teardown:function(){z(),window.removeEventListener("resize",H),q.removeEventListener("scroll",H)}}}var x=ue;x({once:!0,threshold:.2});document.addEventListener("DOMContentLoaded",()=>{te(),ie(),x()});