"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[69678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),m=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,d=p["".concat(c,".").concat(u)]||p[u]||g[u]||a;return r?o.createElement(d,i(i({ref:t},s),{},{components:r})):o.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=r(87462),n=(r(67294),r(3905));const a={title:"Migrating from Docker to Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},i=void 0,l={permalink:"/blog/2019/11/05/docker2podman",source:"@site/blog/2019-11-05-docker2podman.md",title:"Migrating from Docker to Podman",description:"podman logo",date:"2019-11-05T00:00:00.000Z",formattedDate:"November 5, 2019",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"images",permalink:"/blog/tags/images"},{label:"docker",permalink:"/blog/tags/docker"},{label:"buildah",permalink:"/blog/tags/buildah"},{label:"podman",permalink:"/blog/tags/podman"},{label:"oci",permalink:"/blog/tags/oci"}],readingTime:.25,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Migrating from Docker to Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},prevItem:{title:"Basic security principles for containers and container runtimes",permalink:"/blog/2019/11/07/new"},nextItem:{title:"Migrating from Docker to Podman",permalink:"/blog/2019/11/05/new"}},c={authorsImageUrls:[void 0]},m=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],s={toc:m},p="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"podman logo",src:r(1382).Z,width:"228",height:"61"})),(0,n.kt)("h1",{id:"migrating-from-docker-to-podman"},"Migrating from Docker to Podman"),(0,n.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,n.kt)("p",null,"Elliott Sales de Andrade's post on ",(0,n.kt)("a",{parentName:"p",href:"https://qulogic.gitlab.io/"},"Quantum Logic"),", ",(0,n.kt)("a",{parentName:"p",href:"https://qulogic.gitlab.io/posts/2019-10-20-migrating-to-podman/"},"Migrating from Docker to Podman")," takes a look at his migration from Docker to Podman and a good assessment of where the Podman tool stands in comparison to Docker."))}g.isMDXComponent=!0},1382:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);