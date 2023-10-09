"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[67060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,h=s["".concat(c,".").concat(u)]||s[u]||p[u]||a;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Cool thing&#58; Pulling content directly from the Docker Daemon...",layout:"default",author:"dwalsh",categories:["blogs"],tags:["podman","containers"]},i=void 0,l={permalink:"/blog/2018/09/25/pulling-images-from-docker",source:"@site/blog/2018-09-25-pulling-images-from-docker.md",title:"Cool thing&#58; Pulling content directly from the Docker Daemon...",description:"podman logo",date:"2018-09-25T00:00:00.000Z",formattedDate:"September 25, 2018",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"}],readingTime:1.39,hasTruncateMarker:!0,authors:[{name:"dwalsh"}],frontMatter:{title:"Cool thing&#58; Pulling content directly from the Docker Daemon...",layout:"default",author:"dwalsh",categories:["blogs"],tags:["podman","containers"]},prevItem:{title:"Replacing Docker with Podman",permalink:"/blog/2018/10/01/talk-replace-docker-with-podman"},nextItem:{title:"Using systemd to control the startup of Podman containers",permalink:"/blog/2018/09/13/systemd"}},c={authorsImageUrls:[void 0]},d=[{value:"By Dan Walsh GitHub",id:"by-dan-walsh-github",level:2},{value:"Cool things you can do with Podman.",id:"cool-things-you-can-do-with-podman",level:2}],m={toc:d},s="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"pulling-content-directly-from-the-docker-daemon"},"Pulling content directly from the Docker Daemon..."),(0,r.kt)("h2",{id:"by-dan-walsh-github"},"By Dan Walsh ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/rhatdan"},"GitHub")),(0,r.kt)("h2",{id:"cool-things-you-can-do-with-podman"},"Cool things you can do with Podman."),(0,r.kt)("p",null,"I recently received a bug report about some huge container images not working correctly in Docker. So I suggested to the reporter that they try them with Podman. He responded that he saw the images with docker images, but did not see them with podman images."),(0,r.kt)("p",null,"I explained to him that the Docker image and container database are separate from the Podman image and container database. I told him he would have to pull the images into Podman. Then I decided to try a cool feature of Podman, where I could pull images directly out of the Docker daemon."))}p.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);