(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2df1e900":"781044a9","chunk-704ecfce":"7752217e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2df1e900":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2df1e900":"d985e498","chunk-704ecfce":"31d6cfe0"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-components/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e8d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"wrapper"};function o(e,t,n,o,i,c){var u=Object(r["v"])("router-link"),l=Object(r["v"])("router-view");return Object(r["o"])(),Object(r["d"])("div",a,[Object(r["f"])("header",null,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(i.menu,(function(e){return Object(r["o"])(),Object(r["d"])(u,{class:"nav-item","active-class":"active",key:e.path,to:e.path},{default:Object(r["C"])((function(){return[Object(r["e"])(Object(r["y"])(e.title),1)]})),_:2},1032,["to"])})),128))]),Object(r["f"])("section",null,[Object(r["f"])(l)])])}var i=[{title:"主页",path:"/"},{title:"放大镜",path:"/magnifier"}],c={name:"App",data:function(){return{menu:i}}};n("b7dc");c.render=o;var u=c,l=(n("b0c0"),n("9911"),Object(r["E"])("data-v-4ac70f77")),s=l((function(e,t,n,a,o,i){var c=Object(r["w"])("magnifier");return Object(r["D"])((Object(r["o"])(),Object(r["d"])("div",{class:"magnifier-wrap",style:{width:n.width+"px",height:n.height+"px"}},[Object(r["f"])("a",{class:"mag-wrap",href:n.link,target:n.blank?"_blank":"",style:{width:n.magWidth+"px",height:n.magHeight+"px"}},[Object(r["f"])("img",{class:"mag-img",src:n.imgUrl,alt:n.imgAlt,style:{width:n.width+"px",height:n.height+"px"}},null,12,["src","alt"])],12,["href","target"]),Object(r["f"])("a",{class:"img-lk",href:n.link},[Object(r["f"])("img",{class:"static-img",src:n.imgUrl,alt:n.imgAlt},null,8,["src","alt"])],8,["href"])],4)),[[c]])}));n("a9e3");function f(e,t){return parseInt(window.getComputedStyle(e,null)[t])}var d={mounted:function(e){var t=e,n=t.querySelector(".mag-wrap"),r=n.querySelector(".mag-img"),a=f(t,"width"),o=f(t,"height"),i=f(n,"width"),c=f(n,"height"),u=t.offsetLeft,l=t.offsetTop,s=function(){d()};function d(){t.addEventListener("mouseover",(function(e){n.className+=" show";var t=g(e),r=t.x,a=t.y,o=t.mouseX,i=t.mouseY;h(r,a,o,i),document.addEventListener("mousemove",p,!1)}),!1),t.addEventListener("mouseout",m,!1)}function p(e){var t=g(e),n=t.x,r=t.y,a=t.mouseX,o=t.mouseY;h(n,r,a,o)}function m(){n.className="mag-wrap",document.removeEventListener("mousemove",p,!1)}function h(e,t,i,c){n.style.left=e+"px",n.style.top=t+"px",r.style.left=-e+"px",r.style.top=-t+"px",(i<0||c<0||i>a||c>o)&&(n.className="mag-wrap",document.removeEventListener("mousemove",p,!1))}function g(e){return{x:e.pageX-u-i/2,y:e.pageY-l-c/2,mouseX:e.pageX-u,mouseY:e.pageY-l}}s()}},p={name:"Magnifier",directives:{magnifier:d},props:{width:{type:Number,default:375},height:{type:Number,default:375},magWidth:{type:Number,default:150},magHeight:{type:Number,default:150},blank:{type:Boolean,default:!1},link:String,imgUrl:String,imgAlt:String}};n("8d1d");p.render=s,p.__scopeId="data-v-4ac70f77";var m=p,h={install:function(e){e.component(m.name,m)}},g=h,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),v=[{path:"/",component:function(){return n.e("chunk-2df1e900").then(n.bind(null,"51f6"))}},{path:"/magnifier",component:function(){return n.e("chunk-704ecfce").then(n.bind(null,"bf19"))}}],y=Object(b["a"])({history:Object(b["b"])(),routes:v});Object(r["c"])(u).use(g).use(y).mount("#app")},6294:function(e,t,n){},"8d1d":function(e,t,n){"use strict";n("6294")},b7dc:function(e,t,n){"use strict";n("2e8d")}});
//# sourceMappingURL=app.4f6bae36.js.map