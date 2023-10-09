"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[80948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Podman, contenedores sin Docker",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},i=void 0,l={permalink:"/blog/2019/08/23/podman-en-espanol",source:"@site/blog/2019-08-23-podman-en-espanol.md",title:"Podman, contenedores sin Docker",description:"podman logo",date:"2019-08-23T00:00:00.000Z",formattedDate:"August 23, 2019",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"images",permalink:"/blog/tags/images"},{label:"docker",permalink:"/blog/tags/docker"},{label:"buildah",permalink:"/blog/tags/buildah"},{label:"podman",permalink:"/blog/tags/podman"},{label:"oci",permalink:"/blog/tags/oci"}],readingTime:.265,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Podman, contenedores sin Docker",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},prevItem:{title:"Podman, contenedores sin Docker",permalink:"/blog/2019/08/23/new"},nextItem:{title:"Using the rootless containers Tech Preview in RHEL 8.0",permalink:"/blog/2019/08/22/new"}},c={authorsImageUrls:[void 0]},s=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-contendores-sin-docker"},"Podman, contendores sin Docker"),(0,r.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,r.kt)("p",null,"How's your espanol? If it's good or you want to work on it, checkout this video blog on YouTube from I\xf1igo Serrano ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pzRf0G43DYw&feature=youtu.be"},"Podman, contenedores sin Docker"),". In it I\xf1igo Serrano shows how to run Wildfly in a Podman container without Docker."))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);