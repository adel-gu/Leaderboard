(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap);"]),s.push([e.id,'html,\r\nbody {\r\n  height: 100%;\r\n  font-family: "Lato", sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-weight: 900;\r\n}\r\n\r\nh2 {\r\n  font-weight: 700;\r\n}\r\n\r\n#main {\r\n  padding-top: 4em;\r\n  padding-inline: 5em;\r\n  min-height: 100%;\r\n  background: #373e4e;\r\n  color: white;\r\n}\r\n\r\ninput.outline {\r\n  border: none;\r\n}\r\n\r\ninput.outline:focus {\r\n  outline: 2px solid #fd7e14;\r\n}\r\n',""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=t(a[s]);n[i].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),s=t.n(a),i=t(565),c=t.n(i),u=t(216),l=t.n(u),d=t(589),p=t.n(d),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=async e=>{e.innerHTML="",(await(async()=>{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n0tbY0KgPZQ594I4ehx0/scores/");return(await e.json()).result})()).forEach((n=>{const t=`\n      <tr>\n        <td>${n.user}</td>\n        <td>${n.score}</td>\n      </tr>\n    `;e.innerHTML+=t}))},v=document.forms[0],y=document.querySelector(".score-list"),g=document.querySelector(".refresh-btn"),b=document.querySelector(".alert");v.addEventListener("submit",(e=>{e.preventDefault();(async(e,n)=>{const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n0tbY0KgPZQ594I4ehx0/scores/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e.name,score:e.score})}),r=await t.json();n.innerHTML+=`<strong>Success!</strong> ${r.result}`,n.classList.add("show")})({name:v.name.value,score:v.score.value},b),v.reset()})),g.addEventListener("click",(()=>{m(y)})),m(y)})()})();