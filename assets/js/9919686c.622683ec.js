"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[38153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,b=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(b,l(l({ref:t},c),{},{components:n})):o.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"Using Podman and Docker Compose",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","networking","pod","oci","api","kubernetes","kube","v2","hpc","windows","mac","docker compose","compose"]},l=void 0,i={permalink:"/blog/2021/01/11/podman-compose",source:"@site/blog/2021-01-11-podman-compose.md",title:"Using Podman and Docker Compose",description:"podman logo",date:"2021-01-11T00:00:00.000Z",formattedDate:"January 11, 2021",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"oci",permalink:"/blog/tags/oci"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"mac",permalink:"/blog/tags/mac"},{label:"docker compose",permalink:"/blog/tags/docker-compose"},{label:"compose",permalink:"/blog/tags/compose"}],readingTime:.515,hasTruncateMarker:!1,authors:[{name:"baude"}],frontMatter:{title:"Using Podman and Docker Compose",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","networking","pod","oci","api","kubernetes","kube","v2","hpc","windows","mac","docker compose","compose"]},prevItem:{title:"Using Podman and Docker Compose",permalink:"/blog/2021/01/11/new"},nextItem:{title:"Containers com Podman",permalink:"/blog/2020/12/23/containers-com-podman"}},p={authorsImageUrls:[void 0]},s=[{value:"By Brent Baude GitHub",id:"by-brent-baude-github",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"using-podman-and-docker-compose"},"Using Podman and Docker Compose"),(0,a.kt)("h2",{id:"by-brent-baude-github"},"By Brent Baude ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/baude"},"GitHub")),(0,a.kt)("p",null,'One of the questions that the Podman development team has been hearing a lot over the past year or so is "Does Podman support Docker Compose? Up until recently, the answer was "not yet". With the soon to be released Podman v3.0, that answer changes to "NOW!" ',(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbaude"},"Brent Baude")," explains the how to in a recent blog post on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-docker-compose"},"Using Podman and Docker Compose"),". This functionality is now available in the upstream version of Podman if you want to take a real sneak peak."))}d.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);