"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[75092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Here\u2019s why podman is more secured than Docker \u2013 DevSecOps",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},i=void 0,c={permalink:"/blog/2019/10/14/docker-vs-podman-security",source:"@site/blog/2019-10-14-docker-vs-podman-security.md",title:"Here\u2019s why podman is more secured than Docker \u2013 DevSecOps",description:"podman logo",date:"2019-10-14T00:00:00.000Z",formattedDate:"October 14, 2019",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"images",permalink:"/blog/tags/images"},{label:"docker",permalink:"/blog/tags/docker"},{label:"buildah",permalink:"/blog/tags/buildah"},{label:"podman",permalink:"/blog/tags/podman"},{label:"oci",permalink:"/blog/tags/oci"}],readingTime:.25,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Here\u2019s why podman is more secured than Docker \u2013 DevSecOps",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},prevItem:{title:"Say \u201cHello\u201d to Buildah, Podman, and Skopeo",permalink:"/blog/2019/10/14/SayHello"},nextItem:{title:"Configuring container networking with Podman",permalink:"/blog/2019/10/02/container-networking"}},s={authorsImageUrls:[void 0]},l=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:r(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"heres-why-podman-is-more-secured-than-docker--devsecops"},"Here\u2019s why podman is more secured than Docker \u2013 DevSecOps"),(0,o.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,o.kt)("p",null,"Ganesh Mani discusses why Podman is more secure than Docker ",(0,o.kt)("a",{parentName:"p",href:"https://cloudnweb.dev/2019/10/heres-why-podman-is-more-secured-than-docker-devsecops/"},"here")," on the ",(0,o.kt)("a",{parentName:"p",href:"https://cloudnweb.dev/"},"CLOUDNWEB")," site. Ganesh talks about why Podman's fork and execute model is more secure than Docker's client server model."))}d.isMDXComponent=!0},1382:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);