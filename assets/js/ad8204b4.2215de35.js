"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,m=d["".concat(i,".").concat(c)]||d[c]||b[c]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Build Kubernetes pods with Podman play kube",layout:"default",author:"bbaude",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","sudo","rootless"]},l=void 0,p={permalink:"/blog/2021/10/28/build-kubernetes-pods-with-podman-play-kube",source:"@site/blog/2021-10-28-build-kubernetes-pods-with-podman-play-kube.md",title:"Build Kubernetes pods with Podman play kube",description:"podman logo",date:"2021-10-28T00:00:00.000Z",formattedDate:"October 28, 2021",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"sudo",permalink:"/blog/tags/sudo"},{label:"rootless",permalink:"/blog/tags/rootless"}],readingTime:.235,hasTruncateMarker:!1,authors:[{name:"bbaude"}],frontMatter:{title:"Build Kubernetes pods with Podman play kube",layout:"default",author:"bbaude",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","sudo","rootless"]},prevItem:{title:"Testing Podman 4 with new network stack",permalink:"/blog/2022/02/04/new"},nextItem:{title:"Build Kubernetes pods with Podman play kube",permalink:"/blog/2021/10/28/new"}},i={authorsImageUrls:[void 0]},s=[],u={toc:s},d="wrapper";function b(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"build-kubernetes-pods-with-podman-play-kube"},"Build Kubernetes pods with Podman play kube"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"podman play kube")," command has ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose")," features in it to make it easier to transition your compose workloads. Brent Baude explains how in the recent blog post on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-play-kube-updates"},"https://www.redhat.com/sysadmin/podman-play-kube-updates"),"."))}b.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);