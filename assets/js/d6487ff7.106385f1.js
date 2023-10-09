"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[65548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={title:"Building images using Podman and cron",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},i=void 0,l={permalink:"/blog/2020/07/16/podman-and-cron",source:"@site/blog/2020-07-16-podman-and-cron.md",title:"Building images using Podman and cron",description:"podman logo",date:"2020-07-16T00:00:00.000Z",formattedDate:"July 16, 2020",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"github",permalink:"/blog/tags/github"},{label:"rename",permalink:"/blog/tags/rename"}],readingTime:.325,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Building images using Podman and cron",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},prevItem:{title:"Building images using Podman and cron",permalink:"/blog/2020/07/16/new"},nextItem:{title:"The Podman repository has been renamed",permalink:"/blog/2020/07/07/new"}},s={authorsImageUrls:[void 0]},m=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],c={toc:m},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"building-images-using-podman-and-cron"},"Building images using Podman and cron"),(0,a.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,a.kt)("p",null,"Tom Sweeney has another blog post on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site this time he's writing about ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/building-images-podman-cron"},"Building images using Podman and cron"),". In the article Tom talks about how necessity became the mother of invention and cron was put into use to build container images on a regular schedule."))}p.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);