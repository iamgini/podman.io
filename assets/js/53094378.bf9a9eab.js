"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[78861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"New API coming for Podman",author:"baude",layout:"default",categories:["new"]},i=void 0,p={permalink:"/blog/2020/01/17/new",source:"@site/blog/2020-01-17-new.md",title:"New API coming for Podman",description:"The new API for Podman, referred to as apiv2, has been merged into the libpod repository. It's a simpler REST API that's more compatible with Docker implementations than the varlink protocol that's currently in use. For more details, see this release announcement by Brent Baude.",date:"2020-01-17T00:00:00.000Z",formattedDate:"January 17, 2020",tags:[],readingTime:.225,hasTruncateMarker:!1,authors:[{name:"baude"}],frontMatter:{title:"New API coming for Podman",author:"baude",layout:"default",categories:["new"]},prevItem:{title:"Blog posts from the Web",permalink:"/blog/2020/01/22/new"},nextItem:{title:"New API coming for Podman",permalink:"/blog/2020/01/17/podman-new-api"}},l={authorsImageUrls:[void 0]},c=[],m={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The new API for Podman, referred to as ",(0,o.kt)("em",{parentName:"p"},"apiv2"),", has been merged into the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/"},"libpod")," repository. It's a simpler REST API that's more compatible with Docker implementations than the ",(0,o.kt)("a",{parentName:"p",href:"https://varlink.org/"},"varlink")," protocol that's currently in use. For more details, see this ",(0,o.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2020/01/17/podman-new-api.html"},"release announcement")," by Brent Baude."))}u.isMDXComponent=!0}}]);