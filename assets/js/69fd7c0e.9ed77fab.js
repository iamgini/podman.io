"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[32663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Generate SECCOMP Profiles for Containers Using Podman and eBPF",layout:"default",categories:["new"]},i=void 0,l={permalink:"/blog/2019/10/15/new",source:"@site/blog/2019-10-15-new.md",title:"Generate SECCOMP Profiles for Containers Using Podman and eBPF",description:'Valentin Rothberg checks in with the "Generate SECCOMP Profiles for Containers Using Podman and eBPF" blog here. In the article Valentin introduces the OCI seccomp hook which allows you to trace the syscalls of a container and then runs through a working example.',date:"2019-10-15T00:00:00.000Z",formattedDate:"October 15, 2019",tags:[],readingTime:.215,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Generate SECCOMP Profiles for Containers Using Podman and eBPF",layout:"default",categories:["new"]},prevItem:{title:"Generate SECCOMP Profiles for Containers Using Podman and eBPF",permalink:"/blog/2019/10/15/generate-seccomp-profiles"},nextItem:{title:"Say \u201cHello\u201d to Buildah, Podman, and Skopeo",permalink:"/blog/2019/10/14/1-new"}},c={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Valentin Rothberg checks in with the "Generate SECCOMP Profiles for Containers Using Podman and eBPF" blog ',(0,o.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2019/10/15/generate-seccomp-profiles.html"},"here"),". In the article Valentin introduces the OCI seccomp hook which allows you to trace the syscalls of a container and then runs through a working example."))}f.isMDXComponent=!0}}]);