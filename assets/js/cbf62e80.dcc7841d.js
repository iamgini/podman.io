"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[24340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={title:"How templating works with Podman, Kubernetes, and Red Hat OpenShift",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},i=void 0,l={permalink:"/blog/2019/08/10/podman-ibm-developer",source:"@site/blog/2019-08-10-podman-ibm-developer.md",title:"How templating works with Podman, Kubernetes, and Red Hat OpenShift",description:"podman logo",date:"2019-08-10T00:00:00.000Z",formattedDate:"August 10, 2019",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"images",permalink:"/blog/tags/images"},{label:"docker",permalink:"/blog/tags/docker"},{label:"buildah",permalink:"/blog/tags/buildah"},{label:"podman",permalink:"/blog/tags/podman"},{label:"oci",permalink:"/blog/tags/oci"}],readingTime:.375,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"How templating works with Podman, Kubernetes, and Red Hat OpenShift",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},prevItem:{title:"How templating works with Podman, Kubernetes, and Red Hat OpenShift",permalink:"/blog/2019/08/10/new"},nextItem:{title:"Command Highlight&#58; podman images",permalink:"/blog/2019/08/08/new"}},p={authorsImageUrls:[void 0]},m=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],s={toc:m},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"how-templating-works-with-podman-kubernetes-and-red-hat-openshift"},"How templating works with Podman, Kubernetes, and Red Hat OpenShift"),(0,a.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,a.kt)("p",null,"Olaph Wagner has put together a nice introduction on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.ibm.com/articles/templating-and-podman-openshift/?cm_mmc=OSocial_Twitter-_-Developer_IBM+Developer-_-WW_WW-_-ibmdev-&cm_mmca1=000037FD&cm_mmca2=10010797&linkId=71651828&es_p=9869602"},"How templating works with Podman, Kubernetes, and Red Hat OpenShift")," on the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.ibm.com/"},"IBM Developer")," blog site. If you want to find out how to\nuse Podman to create images that helps Red Hat OpenShift to make templates on the IBM Cloud(TM), then this is the article for you!"))}d.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);