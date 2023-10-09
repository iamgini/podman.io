"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[29106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Podman Go bindings",layout:"default",author:"lsm5",categories:["blogs"],tags:["podman","containers","v2","bindings","go"]},i=void 0,l={permalink:"/blog/2020/08/10/podman-go-bindings",source:"@site/blog/2020-08-10-podman-go-bindings.md",title:"Podman Go bindings",description:"podman logo",date:"2020-08-10T00:00:00.000Z",formattedDate:"August 10, 2020",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"bindings",permalink:"/blog/tags/bindings"},{label:"go",permalink:"/blog/tags/go"}],readingTime:12.21,hasTruncateMarker:!0,authors:[{name:"lsm5"}],frontMatter:{title:"Podman Go bindings",layout:"default",author:"lsm5",categories:["blogs"],tags:["podman","containers","v2","bindings","go"]},prevItem:{title:"Podman Go bindings",permalink:"/blog/2020/08/10/new"},nextItem:{title:"Improved systemd integration with Podman 2.0",permalink:"/blog/2020/08/02/new"}},s={authorsImageUrls:[void 0]},c=[{value:"By Lokesh Mandvekar GitHub and Parker VanRoy",id:"by-lokesh-mandvekar-github-and-parker-vanroy",level:2},{value:"Introduction",id:"introduction",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"podman-go-bindings"},"Podman Go bindings"),(0,o.kt)("h2",{id:"by-lokesh-mandvekar-github-and-parker-vanroy"},"By Lokesh Mandvekar ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/lsm5"},"GitHub")," and Parker VanRoy"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the release of Podman 2.0, we removed the experimental tag\nfrom its recently introduced RESTful service. While it might\nbe interesting to interact with a RESTFul server using curl,\nusing a set of Go based bindings is probably a more direct\nroute to a production ready application. Let\u2019s take a look\nat how easily that can be accomplished."))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);