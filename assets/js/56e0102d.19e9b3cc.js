"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[42807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Podman REST API and Docker compatibility",layout:"default",author:"mheon",categories:["blogs"],tags:["podman","containers","api","rest-api","hpc","rest","v2"]},i=void 0,l={permalink:"/blog/2020/07/01/rest-versioning",source:"@site/blog/2020-07-01-rest-versioning.md",title:"Podman REST API and Docker compatibility",description:"podman logo",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"api",permalink:"/blog/tags/api"},{label:"rest-api",permalink:"/blog/tags/rest-api"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"rest",permalink:"/blog/tags/rest"},{label:"v2",permalink:"/blog/tags/v-2"}],readingTime:1.835,hasTruncateMarker:!0,authors:[{name:"mheon"}],frontMatter:{title:"Podman REST API and Docker compatibility",layout:"default",author:"mheon",categories:["blogs"],tags:["podman","containers","api","rest-api","hpc","rest","v2"]},prevItem:{title:"Podman REST API and Docker compatibility",permalink:"/blog/2020/07/01/new"},nextItem:{title:"Announcing Podman v2.0",permalink:"/blog/2020/06/29/new"}},p={authorsImageUrls:[void 0]},s=[{value:"By Matthew Heon GitHub",id:"by-matthew-heon-github",level:2},{value:"Versioning the REST API",id:"versioning-the-rest-api",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-rest-api-and-docker-compatibility"},"Podman REST API and Docker compatibility"),(0,r.kt)("h2",{id:"by-matthew-heon-github"},"By Matthew Heon ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mheon"},"GitHub")),(0,r.kt)("h2",{id:"versioning-the-rest-api"},"Versioning the REST API"),(0,r.kt)("p",null,"Podman v2.0.0 launched recently, and with it the REST API. We\u2019ve seen a great deal of excitement with this new API because of what it will enable - enabling applications and automation to use Podman when the could previously only use Docker. As you may know, Podman\u2019s REST API is split into two halves: one providing a Docker-compatible API, and a Libpod API providing support for Podman\u2019s unique features such as pods. We would love for all projects to eventually grow to support for our native Libpod API, but this will take time (and may be impossible for older, no longer maintained projects). As such, we need to talk about the Compatibility API and how it can be used."))}u.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);