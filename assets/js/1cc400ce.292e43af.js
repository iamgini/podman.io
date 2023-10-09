"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[20769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Podman remote clients for macOS and Windows",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},i=void 0,l={permalink:"/blog/2020/09/02/running_windows_or_mac",source:"@site/blog/2020-09-02-running_windows_or_mac.md",title:"Podman remote clients for macOS and Windows",description:"podman logo",date:"2020-09-02T00:00:00.000Z",formattedDate:"September 2, 2020",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"mac",permalink:"/blog/tags/mac"}],readingTime:.43,hasTruncateMarker:!1,authors:[{name:"baude"}],frontMatter:{title:"Podman remote clients for macOS and Windows",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},prevItem:{title:"Podman remote clients for macOS and Windows",permalink:"/blog/2020/09/02/new"},nextItem:{title:"The podman play kube command now supports deployments",permalink:"/blog/2020/08/31/new"}},s={authorsImageUrls:[void 0]},c=[{value:"By Brent Baude GitHub",id:"by-brent-baude-github",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-remote-clients-for-macos-and-windows"},"Podman remote clients for macOS and Windows"),(0,r.kt)("h2",{id:"by-brent-baude-github"},"By Brent Baude ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/baude"},"GitHub")),(0,r.kt)("p",null,"In a recent blog post on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-clients-macos-windows"},"Podman remote clients for macOS and Windows"),", Brent Baude and ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/cuicodes"},"Ashley Cui")," walk you through setting up a remote client on either Windows or macOS to let you manage your containers and images on your Linux backend. The post covers installation, ssh setup, creating the initial connection and finally how to use the client. Give it a quick look!"))}d.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);