"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[41910],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"Easy Development Dependency Management With Podman and Tent",layout:"default",author:"fhsinchy",categories:["new"],tags:["tent","hpc","podman","containers","dependency-management","linux"]},i=void 0,p={permalink:"/blog/2021/02/08/new",source:"@site/blog/2021-02-08-new.md",title:"Easy Development Dependency Management With Podman and Tent",description:"Tent is an open-source CLI tool for running development dependencies such as MySQL, Mongo, ElasticSearch etc inside pre-configured containers using simple one-liners. Developed using Go and the official golang bindings, tent is fast, reliable and secure. Checkout Easy Development Dependency Management With Podman and Tent to learn about the project.",date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[{label:"tent",permalink:"/blog/tags/tent"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"dependency-management",permalink:"/blog/tags/dependency-management"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:.25,hasTruncateMarker:!1,authors:[{name:"fhsinchy"}],frontMatter:{title:"Easy Development Dependency Management With Podman and Tent",layout:"default",author:"fhsinchy",categories:["new"],tags:["tent","hpc","podman","containers","dependency-management","linux"]},prevItem:{title:"Easy Development Dependency Management With Podman and Tent",permalink:"/blog/2021/02/08/easy-development-dependency-management-with-podman-and-tent"},nextItem:{title:"From Docker Compose to Kubernetes with Podman",permalink:"/blog/2021/01/26/docker-compose-to-podman"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fhsinchy/tent/"},"Tent")," is an open-source CLI tool for running development dependencies such as MySQL, Mongo, ElasticSearch etc inside pre-configured containers using simple one-liners. Developed using ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev"},"Go")," and the official ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/containers/podman/v2@v2.2.1/pkg/bindings"},"golang bindings"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tent")," is fast, reliable and secure. Checkout ",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2021/02/08/easy-development-dependency-management-with-podman-and-tent.html"},"Easy Development Dependency Management With Podman and Tent")," to learn about the project."))}d.isMDXComponent=!0}}]);