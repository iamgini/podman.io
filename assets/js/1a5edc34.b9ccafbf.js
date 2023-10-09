"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[53711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Podman&#58; Linux containers made easy, part 1",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},i=void 0,l={permalink:"/blog/2019/03/22/podman-made-easy",source:"@site/blog/2019-03-22-podman-made-easy.md",title:"Podman&#58; Linux containers made easy, part 1",description:"podman logo",date:"2019-03-22T00:00:00.000Z",formattedDate:"March 22, 2019",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"images",permalink:"/blog/tags/images"},{label:"docker",permalink:"/blog/tags/docker"},{label:"buildah",permalink:"/blog/tags/buildah"},{label:"podman",permalink:"/blog/tags/podman"},{label:"oci",permalink:"/blog/tags/oci"}],readingTime:.31,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Podman&#58; Linux containers made easy, part 1",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},prevItem:{title:"Podman Saves My Crossword Habit",permalink:"/blog/2019/04/01/podman-crosswords"},nextItem:{title:"CI, and CI, and CI, oh my! &lpar;then more CI&rpar;",permalink:"/blog/2019/03/18/CI3"}},s={authorsImageUrls:[void 0]},c=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:a(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-linux-containers-made-easy-part-1"},"Podman",":"," Linux containers made easy, part 1"),(0,r.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,r.kt)("p",null,"It's in German, but a worthy read ",(0,r.kt)("a",{parentName:"p",href:"https://www.heise.de/developer/artikel/Podman-Linux-Container-einfach-gemacht-Teil-1-4329067.html"},"Podman: Linux containers made easy, part 1"),". Valentin Rothberg (@vrothberg) introduces Podman to the reader and talks about how it fits in the container eco-system. If your German is a little rusty, you may need to lean on ",(0,r.kt)("a",{parentName:"p",href:"https://translate.google.com/?hl=en&tab=TT&authuser=0"},"Google Translate"),"."))}u.isMDXComponent=!0},1382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);