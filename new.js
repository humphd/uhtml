var uhtml=function(t){"use strict";const e=t=>document.createElementNS("http://www.w3.org/1999/xhtml",t),n=(t,e)=>("svg"===e?o:r)(t),r=t=>{const n=e("template");return n.innerHTML=t,n.content},o=t=>{const{content:n}=e("template"),r=e("div");r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>";const{childNodes:o}=r.firstChild;let{length:l}=o;for(;l--;)n.appendChild(o[0]);return n};var l=document.importNode;const{create:c}=Object,{forEach:s}=[],{isArray:a}=Array,i=new WeakMap,u=new WeakMap,h={what:null};function m(t){this[t.getAttribute("name")]=t}function p(t){const e=[t[0]];for(let n=1,{length:r}=arguments;n<r;n++){const r=arguments[n];e.push(a(r)?r.join(" "):r,t[n])}const r=n(e.join(""),""+this);return u.set(t,r),r}return t.html=function(t){return u.get(t)||p.apply("html",arguments)},t.render=(t,e)=>{let n=i.get(t)||h;if(n.what!==e){t.textContent="",t.appendChild(l.call(t.ownerDocument,e,!0));const r=c(null);s.call(t.querySelectorAll("[name]"),m,r),i.set(t,n={what:e,names:r})}return n.names},t.svg=function(t){return u.get(t)||p.apply("svg",arguments)},t}({});
