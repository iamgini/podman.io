"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[63048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"How to use Podman inside of Kubernetes",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},i=void 0,s={permalink:"/blog/2021/07/01/new",source:"@site/blog/2021-07-01-new.md",title:"How to use Podman inside of Kubernetes",description:"Do you want to know how to use Podman inside of Kubernetes? Urvashi Mohnani and Dan Walsh show you how to in a recent blog post on the Red Hat Enable Sysadmin site, How to use Podman inside of Kubernetes.",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"mac",permalink:"/blog/tags/mac"}],readingTime:.2,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"How to use Podman inside of Kubernetes",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},prevItem:{title:"How to use Podman inside of a container",permalink:"/blog/2021/07/02/podman-inside-container"},nextItem:{title:"How to use Podman inside of Kubernetes",permalink:"/blog/2021/07/01/podman-inside-kubernets"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Do you want to know how to use Podman inside of Kubernetes? ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/umohnani8"},"Urvashi Mohnani")," and ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/rhatdan"},"Dan Walsh")," show you how to in a recent blog post on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-inside-kubernetes"},"How to use Podman inside of Kubernetes"),"."))}m.isMDXComponent=!0}}]);