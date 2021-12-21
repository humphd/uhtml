self.uhtml=function(e){"use strict";class t extends Map{set(e,t){return super.set(e,t),t}}class n extends WeakMap{set(e,t){return super.set(e,t),t}}const r=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,s=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g,l=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x00/g,o=/\x00=?/g;const{isArray:i}=Array,{indexOf:a,slice:c}=[],u=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,d=e=>{const t=document.createElement("template");return t.innerHTML=e,t.content},f=document.createElementNS("http://www.w3.org/2000/svg","svg"),p=document.createRange(),h=e=>(f.innerHTML=e,p.setStartBefore(f.firstChild),p.setEndAfter(f.lastChild),p.extractContents()),m=(e,t)=>("svg"===t?h:d)(e);let g=!1;class b{constructor(e,t){g=!0,this._=(...n)=>e(...n,t)}}const w=(e,t)=>{let n,r,s=t.slice(2);return!(t in e)&&(r=t.toLowerCase())in e&&(s=r.slice(2)),t=>{const r=i(t)?t:[t,!1];n!==r[0]&&(n&&e.removeEventListener(s,n,r[1]),(n=r[0])&&e.addEventListener(s,n,r[1]))}},v=({childNodes:e},t)=>e[t],y=(e,t,n)=>((e,t,n,r,s)=>{const l=n.length;let o=t.length,i=l,a=0,c=0,u=null;for(;a<o||c<i;)if(o===a){const t=i<l?c?r(n[c-1],-0).nextSibling:r(n[i-c],0):s;for(;c<i;)e.insertBefore(r(n[c++],1),t)}else if(i===c)for(;a<o;)u&&u.has(t[a])||e.removeChild(r(t[a],-1)),a++;else if(t[a]===n[c])a++,c++;else if(t[o-1]===n[i-1])o--,i--;else if(t[a]===n[i-1]&&n[c]===t[o-1]){const s=r(t[--o],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[a++],-1).nextSibling),e.insertBefore(r(n[--i],1),s),t[o]=n[i]}else{if(!u){u=new Map;let e=c;for(;e<i;)u.set(n[e],e++)}if(u.has(t[a])){const s=u.get(t[a]);if(c<s&&s<i){let l=a,d=1;for(;++l<o&&l<i&&u.get(t[l])===s+d;)d++;if(d>s-c){const l=r(t[a],0);for(;c<s;)e.insertBefore(r(n[c++],1),l)}else e.replaceChild(r(n[c++],1),r(t[a++],-1))}else a++}else e.removeChild(r(t[a++],-1))}return n})(e.parentNode,t,n,u,e),x=(e,t)=>{switch(t[0]){case"?":return((e,t,n)=>r=>{n!==!!r&&((n=!!r)?e.setAttribute(t,""):e.removeAttribute(t))})(e,t.slice(1),!1);case".":return((e,t)=>"dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):n=>{e[t]=n})(e,t.slice(1));case"@":return w(e,"on"+t.slice(1));case"o":if("n"===t[1])return w(e,t)}switch(t){case"ref":return(e=>{let t;return n=>{t!==n&&(t=n,"function"==typeof n?n(e):n.current=e)}})(e);case"aria":return(e=>t=>{for(const n in t){const r="role"===n?n:`aria-${n}`,s=t[n];null==s?e.removeAttribute(r):e.setAttribute(r,s)}})(e)}return((e,t)=>{let n,r=!0;const s=document.createAttributeNS(null,t);return l=>{if(n!==l)if(n=l,null==n)r||(e.removeAttributeNode(s),r=!0);else{const n=g&&l instanceof b?l._(e,t):l;null==n?(r||e.removeAttributeNode(s),r=!0):(s.value=n,r&&(e.setAttributeNodeNS(s),r=!1))}}})(e,t)};function C(e){const{type:t,path:n}=e,r=n.reduceRight(v,this);return"node"===t?(e=>{let t,n,r=[];const s=l=>{switch(typeof l){case"string":case"number":case"boolean":t!==l&&(t=l,n||(n=document.createTextNode("")),n.data=l,r=y(e,r,[n]));break;case"object":case"undefined":if(null==l){t!=l&&(t=l,r=y(e,r,[]));break}if(i(l)){t=l,0===l.length?r=y(e,r,[]):"object"==typeof l[0]?r=y(e,r,l):s(String(l));break}t!==l&&"ELEMENT_NODE"in l&&(t=l,r=y(e,r,11===l.nodeType?c.call(l.childNodes):[l]));break;case"function":s(l(e))}};return s})(r):"attr"===t?x(r,e.name):(e=>{let t;return n=>{t!=n&&(t=n,e.textContent=null==n?"":n)}})(r)}const N=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(a.call(n.childNodes,e)),e=n,({parentNode:n}=e);return t},A="isµ",E=new n,k=/^(?:plaintext|script|style|textarea|title|xmp)$/i;class T{constructor(){this.stack=[],this.entry=null,this.wire=null}}const S=(e,n)=>{const i=((e,t,n)=>{let i=0;return e.join("\0").replace(s,((e,t,s,o)=>{let i=t+s.replace(l,"\0=$2$1").trimEnd();return o.length&&(i+=n||r.test(t)?" /":"></"+t),"<"+i+">"})).replace(o,(e=>e.length>1?t+i+++"=":"\x3c!--"+t+i+++"--\x3e"))})(n,A,"svg"===e),a=m(i,e),c=document.createTreeWalker(a,129),u=[],d=new t,f=n.length-1;let p=0,h=`isµ${p}`;for(;p<f;){const e=c.nextNode();if(!e)throw`bad template: ${i}`;if(8===e.nodeType)e.data===h&&(u.push({type:"node",path:d.get(e)||d.set(e,N(e))}),h="isµ"+ ++p);else{for(;e.hasAttribute(h);)u.push({type:"attr",path:d.get(e)||d.set(e,N(e)),name:e.getAttribute(h)}),e.removeAttribute(h),h="isµ"+ ++p;k.test(e.tagName)&&e.textContent.trim()===`\x3c!--${h}--\x3e`&&(e.textContent="",u.push({type:"text",path:d.get(e)||d.set(e,N(e))}),h="isµ"+ ++p)}}return{content:a,nodes:u}},O=(e,t)=>{const{content:n,nodes:r}=E.get(t)||E.set(t,S(e,t)),s=document.importNode(n,!0);return{content:s,updates:r.map(C,s)}},$=(e,{type:t,template:n,values:r})=>{L(e,r);let{entry:s}=e;s&&s.template===n&&s.type===t||(e.entry=s=((e,t)=>{const{content:n,updates:r}=O(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:l,updates:o,wire:i}=s;for(let e=0;e<r.length;e++)o[e](r[e]);return i||(s.wire=(e=>{const{firstChild:t,lastChild:n}=e;if(t===n)return n||e;const{childNodes:r}=e,s=c.call(r,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:t,lastChild:n,valueOf:()=>(r.length!==s.length&&e.append(...s),e)}})(l))},L=({stack:e},t)=>{const{length:n}=t;for(let r=0;r<n;r++){const n=t[r];n instanceof M?t[r]=$(e[r]||(e[r]=new T),n):i(n)?L(e[r]||(e[r]=new T),n):e[r]=null}n<e.length&&(e.length=n)};class M{constructor(e,t,n){this.type=e,this.template=t,this.values=n}}const{create:B,defineProperties:_}=Object,j=e=>{const t=new n;return _(((t,...n)=>new M(e,t,n)),{for:{value:(n,r)=>{const s=t.get(n)||t.set(n,B(null));return s[r]||(s[r]=(t=>(n,...r)=>$(t,{type:e,template:n,values:r}))(new T))}},node:{value:(t,...n)=>$(new T,{type:e,template:t,values:n}).valueOf()}})},H=new n,R=j("html"),z=j("svg");return e.Hole=M,e.foreign=(e,t)=>new b(e,t),e.html=R,e.render=(e,t)=>{const n="function"==typeof t?t():t,r=H.get(e)||H.set(e,new T),s=n instanceof M?$(r,n):n;return s!==r.wire&&(r.wire=s,e.textContent="",e.appendChild(s.valueOf())),e},e.svg=z,e}({});