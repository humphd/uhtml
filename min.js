var uhtml=function(e){"use strict";function t(n){return{get:function(e){return n.get(e)},set:function(e,t){return n.set(e,t),t}}}function u(e,t,n){return c.test(t)?e:"<".concat(t).concat(n.replace(p,""),"></").concat(t,">")}function f(n,a,e){for(var o=[],t=function(r,e){var t=n[r];l.test(t)&&function(e,t){for(;t--;){var n=e[t];if(s.test(n))return!0;if(d.test(n))return!1}return!1}(n,r+1)?o.push(t.replace(l,function(e,t,n){return"".concat(a).concat(r,"=").concat(n||'"').concat(t).concat(n?"":'"')})):r+1<e?o.push(t,"\x3c!--".concat(a).concat(r,"--\x3e")):o.push(t)},r=0,i=n.length;r<i;r++)t(r,i);var c=o.join("").trim();return e?c:c.replace(v,u)}function r(e,t){return 111===e.nodeType?1/t<0?t?(r=(n=e).firstChild,a=n.lastChild,(o=document.createRange()).setStartAfter(r),o.setEndAfter(a),o.deleteContents(),r):e.lastChild:t?e.valueOf():e.firstChild:e;var n,r,a,o}var n,o,i,a,l=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,c=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,s=/<[a-z][^>]+$/i,d=/>[^<>]*$/,v=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,p=/\s+$/,h=Array.isArray,g=[],m=g.indexOf,y=g.slice,w=(n=document,o="fragment",a="content"in C(i="template")?function(e){var t=C(i);return t.innerHTML=e,t.content}:function(e){var t=C(o),n=C(i),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var a=RegExp.$1;n.innerHTML="<table>"+e+"</table>",r=n.querySelectorAll(a)}else n.innerHTML=e,r=n.childNodes;return b(t,r),t},function(e,t){return("svg"===t?function(e){var t=C(o),n=C("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",b(t,n.firstChild.childNodes),t}:a)(e)});function b(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function C(e){return e===o?n.createDocumentFragment():n.createElementNS("http://www.w3.org/1999/xhtml",e)}function x(e,t){return e.childNodes[t]}function N(e){for(var t=[],n=e.parentNode;n;)t.unshift(m.call(n.childNodes,e)),n=(e=n).parentNode;return t}function A(e,t,n){return function(e,t,n,r,a){for(var o=n.length,i=t.length,c=o,u=0,l=0,f=null;u<i||l<c;)if(i===u)for(var s=c<o?l?r(n[l-1],-0).nextSibling:r(n[c-l],0):a;l<c;)e.insertBefore(r(n[l++],1),s);else if(c===l)for(;u<i;)f&&f.has(t[u])||e.removeChild(r(t[u],-1)),u++;else if(t[u]===n[l])u++,l++;else if(t[i-1]===n[c-1])i--,c--;else{if(i-u==1&&c-l==1){f&&f.has(t[u])?e.insertBefore(r(n[l],1),r(c<o?n[c]:a,0)):e.replaceChild(r(n[l],1),r(t[u],-1));break}if(t[u]===n[c-1]&&n[l]===t[i-1]){var d=r(t[--i],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[u++],-1).nextSibling),e.insertBefore(r(n[--c],1),d),t[i]=n[c]}else{if(!f){f=new Map;for(var v=l;v<c;)f.set(n[v],v++)}if(f.has(t[u])){var p=f.get(t[u]);if(l<p&&p<c){for(var h=u,g=1;++h<i&&h<c&&f.has(t[h])&&f.get(t[h])===p+g;)g++;if(p-l<g)for(var m=r(t[u],0);l<p;)e.insertBefore(r(n[l++],1),m);else e.replaceChild(r(n[l++],1),r(t[u++],-1))}else u++}else e.removeChild(r(t[u++],-1))}}return n}(e.parentNode,t,n,r,e)}var E=document,k=E.createTreeWalker,T=E.importNode,L=1!=T.length,M=L?function(e,t){return T.call(document,w(e,t),!0)}:w,O=L?function(e){return k.call(document,e,129,null,!1)}:function(e){return k.call(document,e,129)};function S(e){var t,n,r,a,o,i,c=e.type,u=e.path.reduce(x,this);return"node"===c?(r=u,a=[],function e(t){switch(typeof t){case"string":case"number":case"boolean":o!==t&&(o=t,(i=i||document.createTextNode("")).textContent=t,a=A(r,a,[i]));break;case"object":case"undefined":if(null==t){o&&(o=t,a=A(r,a,[]));break}h(t)?0===(o=t).length?a=A(r,a,[]):"object"==typeof t[0]?a=A(r,a,t):e(String(t)):"ELEMENT_NODE"in t&&t!==o&&(a=A(r,a,11===(o=t).nodeType?y.call(t.childNodes):[t]))}}):"attr"===c?function(n,e){if("ref"===e)return function(e){e.current=n};if("."===e.slice(0,1)){var t=e.slice(1);return function(e){n[t]=e}}var r;if("on"===e.slice(0,2)){var a=e.slice(2);return!(e in n)&&e.toLowerCase()in n&&(a=a.toLowerCase()),function(e){var t=h(e)?e:[e,!1];r!==t[0]&&(r&&n.removeEventListener(a,r,t[1]),(r=t[0])&&n.addEventListener(a,r,t[1]))}}var o=!0,i=document.createAttribute(e);return function(e){r!==e&&(null==(r=e)?o||(n.removeAttributeNode(i),o=!0):(i.value=e,o&&(n.setAttributeNode(i),o=!1)))}}(u,e.name):(t=u,function(e){n!==e&&(n=e,t.textContent=null==e?"":e)})}function $(){return{stack:[],entry:null,wire:null}}function j(e,t){var n=t.type,r=t.template,a=t.values,o=a.length;z(e,a,o);var i,c,u,l=e.entry;l&&l.template===r&&l.type===n||(e.entry=(u=W(i=n,c=r),l={type:i,template:c,content:u.content,updates:u.updates,wire:null}));for(var f=l.content,s=l.updates,d=l.wire,v=0;v<o;v++)s[v](a[v]);return d||(l.wire=function(t){var n=t.childNodes,r=n.length;if(r<2)return n[0];var a=y.call(n,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:a[0],lastChild:a[r-1],valueOf:function(){if(n.length!==r)for(var e=0;e<r;)t.appendChild(a[e++]);return t}}}(f))}var B="isµ",H=t(new WeakMap),W=function(e,t){var n=H.get(t)||H.set(t,function(e,t){for(var n=f(t,B,"svg"===e),r=M(n,e),a=O(r),o=[],i=t.length-1,c=0,u="".concat(B).concat(c);c<i;){var l=a.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===u&&(o.push({type:"node",path:N(l)}),u="".concat(B).concat(++c));else{for(;l.hasAttribute(u);)o.push({type:"attr",path:N(l),name:l.getAttribute(u)}),l.removeAttribute(u),u="".concat(B).concat(++c);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(u,"--\x3e")&&(o.push({type:"text",path:N(l)}),u="".concat(B).concat(++c))}}return{content:r,nodes:o}}(e,t)),r=n.content,a=n.nodes,o=T.call(document,r,!0);return{content:o,updates:a.map(S,o)}},z=function e(t,n,r){for(var a=t.stack,o=0;o<r;o++){var i=n[o];i instanceof D?n[o]=j(a[o]||(a[o]=$()),i):h(i)?e(a[o]||(a[o]=$()),i,i.length):a[o]=null}r<a.length&&a.splice(r)};function D(e,t,n){this.type=e,this.template=t,this.values=n}function _(o){var r=t(new WeakMap);return q(function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new D(o,e,n)},{for:{value:function(e,t){var a,n=r.get(e)||r.set(e,R(null));return n[t]||(n[t]=(a=$(),function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return j(a,{type:o,template:e,values:n})}))}},node:{value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return j($(),{type:o,template:e,values:n}).valueOf()}}})}var R=Object.create,q=Object.defineProperties,F=t(new WeakMap),P=_("html"),G=_("svg");return e.html=P,e.render=function(e,t){var n="function"==typeof t?t():t,r=F.get(e)||F.set(e,$()),a=n instanceof D?j(r,n):n;return a!==r.wire&&(r.wire=a,e.textContent="",e.appendChild(a.valueOf())),e},e.svg=G,e}({});