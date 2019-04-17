!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);const r=document.querySelector("#search"),o=document.querySelector("#button"),i=document.querySelector(".container"),a="https://api.github.com/users/",s=(e,n)=>{return n.appendChild(document.createElement(e))},c=e=>{const n=s("div",i);n.className="repo-container",s("h4",n).innerHTML=e.name;const t=s("div",n);t.className="repo-details-container",s("P",t).innerHTML=e.watchers_count,s("i",t).className="fas fa-code-branch",s("P",t).innerHTML=e.forks_count,s("i",t).className="fas fa-star"};o.addEventListener("click",async()=>{!function(){const e=document.querySelector(".error-message");e&&e.remove()}(),function(){const e=document.querySelector(".user-container"),n=document.querySelector(".repo-title-section");e&&n&&(e.remove(),n.remove())}(),function(){const e=document.querySelectorAll(".repo-container");e&&e.forEach(e=>{e.remove()})}();const e=await u(r.value);if(e.userDetails.message){const n=s("div",i);n.className="error-message",s("P",n).innerHTML=e.userDetails.message}else(({userDetails:e})=>{const n=s("div",i),t=s("div",n),r=s("div",n);let o=s("img",r),a=s("h1",t),c=s("h2",t),u=s("P",t);n.className="user-container",t.className="user-details-container",r.className="avatar-container",o.src=e.avatar_url,a.innerHTML=`@${e.login}`,a.className="username",c.innerHTML=e.name,c.className="name",u.innerHTML=e.bio,u.className="bio"})(e),(({reposList:e})=>{const n=s("h3",i);n.innerHTML="Repositories",n.className="repo-title-section",e.data.forEach(e=>{c(e)})})(e)});const u=async e=>{return{...await(async e=>{const n=await fetch(a+e);return{userDetails:await n.json()}})(e),reposList:await(async e=>{const n=await fetch(`${a+e}/repos`);return{data:await n.json()}})(e)}}},function(e,n,t){var r=t(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(3)(!1)).push([e.i,"body {\n  background-color: #F0F0F0;\n  font-family: Arial; }\n\n.container {\n  margin: 0 auto;\n  max-height: 60vh;\n  padding: 5vh;\n  background-color: white;\n  box-shadow: 10px 15px 30px 5px grey;\n  border-radius: 15px;\n  width: 50vh;\n  overflow: scroll; }\n\n/* SEARCH BAR */\n.searchbar {\n  display: flex;\n  justify-content: space-between; }\n\n#search {\n  width: 80%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid #D9D9D9;\n  margin-right: 6px; }\n\n#button {\n  padding: 6px 8px;\n  font-weight: 600;\n  border: 1px solid #D9D9D9; }\n\n/* USER INFO */\n.user-container {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row-reverse;\n  width: 100%;\n  height: 120px;\n  margin-top: 15px; }\n\n.avatar-container {\n  width: 120px;\n  height: 120px; }\n\n.avatar-container img {\n  width: 100%; }\n\n.user-details-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 5px; }\n\n.username {\n  font-style: italic;\n  font-weight: 100;\n  font-size: 20px;\n  margin: 0; }\n\n.name {\n  font-size: 25px;\n  margin: 0; }\n\n.bio {\n  font-size: 15px;\n  width: 85%; }\n\n/* REPOS */\n.repo-title-section {\n  padding-bottom: 10px;\n  border-bottom: 2px solid #000000; }\n\n.repo-container {\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid darkgrey; }\n\n.repo-details-container {\n  margin-left: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.repo-details-container p {\n  margin-left: 10px; }\n\n.repo-details-container i {\n  margin-left: 5px; }\n\n/* error message */\n.error-message {\n  margin-top: 15px;\n  background-color: #F9DEDE;\n  color: #d14d4d;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #d14d4d; }\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,u=0,l=[],f=t(5);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),l.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,t);t.insertBefore(n,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=l.indexOf(e);n>=0&&l.splice(n,1)}function v(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return b(n,e.attrs),m(e,n),n}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function y(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=u++;t=c||(c=v(n)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}e&&d(p(e,n),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,x=(g=[],function(e,n){return g[e]=n,g.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);