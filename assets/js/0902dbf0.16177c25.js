"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[53015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={title:"Podman&#58; Managing pods and containers in a local container runtime",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","oci","api","kubernetes","kube","v2","hpc","windows","mac","docker compose","compose"]},i=void 0,l={permalink:"/blog/2021/01/15/new",source:"@site/blog/2021-01-15-new.md",title:"Podman&#58; Managing pods and containers in a local container runtime",description:"Podman has the ability to handle pod deployment which is a differentiator from other container runtimes. Brent Baude explains the how to in a recent blog post on the Red Hat Enable Sysadmin site, Podman: Managing pods and containers in a local container runtime. This functionality is now available in the upstream version of Podman if you want to take a sneak peak.",date:"2021-01-15T00:00:00.000Z",formattedDate:"January 15, 2021",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"oci",permalink:"/blog/tags/oci"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"mac",permalink:"/blog/tags/mac"},{label:"docker compose",permalink:"/blog/tags/docker-compose"},{label:"compose",permalink:"/blog/tags/compose"}],readingTime:.315,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Podman&#58; Managing pods and containers in a local container runtime",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","oci","api","kubernetes","kube","v2","hpc","windows","mac","docker compose","compose"]},prevItem:{title:"Podman&#58; Managing pods and containers in a local container runtime",permalink:"/blog/2021/01/15/managing-pods"},nextItem:{title:"Using Podman and Docker Compose",permalink:"/blog/2021/01/11/new"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podman has the ability to handle pod deployment which is a differentiator from other container runtimes. ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/bbaude"},"Brent Baude")," explains the how to in a recent blog post on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,o.kt)("a",{parentName:"p",href:"https://developers.redhat.com/blog/2019/01/15/podman-managing-containers-pods/"},"Podman: Managing pods and containers in a local container runtime"),". This functionality is now available in the upstream version of Podman if you want to take a sneak peak."))}d.isMDXComponent=!0}}]);