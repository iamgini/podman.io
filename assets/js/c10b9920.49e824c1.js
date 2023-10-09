"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[65051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Bioinformatics with rootless Podman",layout:"default",author:"bhepworth",categories:["blogs"],tags:["bioinformatics","rootless","podman"]},i=void 0,l={permalink:"/blog/2020/01/15/bioinformatics-with-rootless-podman",source:"@site/blog/2020-01-15-bioinformatics-with-rootless-podman.md",title:"Bioinformatics with rootless Podman",description:"podman logo",date:"2020-01-15T00:00:00.000Z",formattedDate:"January 15, 2020",tags:[{label:"bioinformatics",permalink:"/blog/tags/bioinformatics"},{label:"rootless",permalink:"/blog/tags/rootless"},{label:"podman",permalink:"/blog/tags/podman"}],readingTime:9.82,hasTruncateMarker:!0,authors:[{name:"bhepworth"}],frontMatter:{title:"Bioinformatics with rootless Podman",layout:"default",author:"bhepworth",categories:["blogs"],tags:["bioinformatics","rootless","podman"]},prevItem:{title:"New API coming for Podman",permalink:"/blog/2020/01/17/podman-new-api"},nextItem:{title:"Bioinformatics and rootless containers with Podman",permalink:"/blog/2020/01/15/new"}},s={authorsImageUrls:[void 0]},p=[{value:"By Valentin Rothberg GitHub",id:"by-valentin-rothberg-github",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"bioinformatics-with-rootless-podman"},"Bioinformatics with rootless podman"),(0,o.kt)("h2",{id:"by-valentin-rothberg-github"},"By Valentin Rothberg ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/BryanHepworth"},"GitHub")),(0,o.kt)("p",null,"Over the last 10 years I've seen machines and workflows evolve where I work. From the initial dedicated server, to hpc environments\nand now the latest instance, containers."),(0,o.kt)("p",null,"From an admin point of view this is great - The initial servers had to be carefully built and maintained so that everything would work nicely together. Incompatible programs at that time were run through a VM until such time as they could be folded in to the mix."),(0,o.kt)("p",null,"The HPC's had versioned software and environment modules and were built to load the relevant dependencies at run time."),(0,o.kt)("p",null,"Now we are into a new era, containers - and not just any old containers, but containers that end users can build and run up fairly\nquickly to perform what-if's, and move on quickly through iterations until they perform the required functions."),(0,o.kt)("p",null,"Podman has developed very rapidly and is incredibly easy to use. You can use it in conjunction with quay.io or run it on a local machine."),(0,o.kt)("p",null,"I should add that Adrian Reber gave a ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/TtHSNsbU24E"},"talk")," and has also created a Podman ",(0,o.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2019/09/26/podman-in-hpc.html"},"article")," using openhpc; well worth a watch and a read."),(0,o.kt)("p",null,"If you don't have a RedHat Developer Subscription now is an ideal time to get one:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.redhat.com/articles/getting-red-hat-developer-subscription-what-rhel-users-need-know/"},"https://developers.redhat.com/articles/getting-red-hat-developer-subscription-what-rhel-users-need-know/")),(0,o.kt)("p",null,"..and download RedHat Enterprise 8.1"))}u.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);