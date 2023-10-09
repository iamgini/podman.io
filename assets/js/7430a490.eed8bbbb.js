"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[46878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(b,s(s({ref:t},c),{},{components:n})):o.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Using Podman and Docker Compose",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","oci","api","kubernetes","kube","v2","hpc","windows","mac","docker compose","compose"]},s=void 0,l={permalink:"/blog/2021/01/11/new",source:"@site/blog/2021-01-11-new.md",title:"Using Podman and Docker Compose",description:'One of the questions that the Podman development team has been hearing a lot over the past year or so is "Does Podman support Docker Compose? Up until recently, the answer was "not yet". With the soon to be released Podman v3.0, that answer changes to "NOW!" Brent Baude explains the how to in a recent blog post on the Red Hat Enable Sysadmin site, Using Podman and Docker Compose. This functionality is now available in the upstream version of Podman if you want to take a real sneak peak.',date:"2021-01-11T00:00:00.000Z",formattedDate:"January 11, 2021",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"oci",permalink:"/blog/tags/oci"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"mac",permalink:"/blog/tags/mac"},{label:"docker compose",permalink:"/blog/tags/docker-compose"},{label:"compose",permalink:"/blog/tags/compose"}],readingTime:.45,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Using Podman and Docker Compose",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","oci","api","kubernetes","kube","v2","hpc","windows","mac","docker compose","compose"]},prevItem:{title:"Podman&#58; Managing pods and containers in a local container runtime",permalink:"/blog/2021/01/15/new"},nextItem:{title:"Using Podman and Docker Compose",permalink:"/blog/2021/01/11/podman-compose"}},i={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'One of the questions that the Podman development team has been hearing a lot over the past year or so is "Does Podman support Docker Compose? Up until recently, the answer was "not yet". With the soon to be released Podman v3.0, that answer changes to "NOW!" ',(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbaude"},"Brent Baude")," explains the how to in a recent blog post on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-docker-compose"},"Using Podman and Docker Compose"),". This functionality is now available in the upstream version of Podman if you want to take a real sneak peak."))}d.isMDXComponent=!0}}]);