"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[25088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,u=d["".concat(s,".").concat(c)]||d[c]||h[c]||r;return n?o.createElement(u,i(i({ref:t},m),{},{components:n})):o.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"The Podman repository has been renamed",layout:"default",author:"mheon",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},i=void 0,l={permalink:"/blog/2020/07/07/repo-rename",source:"@site/blog/2020-07-07-repo-rename.md",title:"The Podman repository has been renamed",description:"podman logo",date:"2020-07-07T00:00:00.000Z",formattedDate:"July 7, 2020",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"github",permalink:"/blog/tags/github"},{label:"rename",permalink:"/blog/tags/rename"}],readingTime:1.745,hasTruncateMarker:!0,authors:[{name:"mheon"}],frontMatter:{title:"The Podman repository has been renamed",layout:"default",author:"mheon",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},prevItem:{title:"The Podman repository has been renamed",permalink:"/blog/2020/07/07/new"},nextItem:{title:"Podman REST API and Docker compatibility",permalink:"/blog/2020/07/01/new"}},s={authorsImageUrls:[void 0]},p=[{value:"By Matthew Heon GitHub",id:"by-matthew-heon-github",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"the-podman-repository-has-been-renamed"},"The Podman repository has been renamed"),(0,a.kt)("h2",{id:"by-matthew-heon-github"},"By Matthew Heon ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mheon"},"GitHub")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io/"},"Podman")," repository on Github is moving from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/libpod"},"github.com/containers/libpod")," to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman"},"github.com/containers/podman"),"! Read on to find out why, and how it will affect you."),(0,a.kt)("p",null,"Three years ago, we created a new Git repository to hold our new container-management tool and the library it was based on. At the time, Podman was not named Podman, but ",(0,a.kt)("inlineCode",{parentName:"p"},"kpod")," - a name no one on the team liked, and one we\u2019d hoped to replace quickly. Given this, we decided to name the repository after the library we\u2019d written to manage containers - ",(0,a.kt)("inlineCode",{parentName:"p"},"libpod"),". Four months after that, we made the first public release of the tool, and with it came a new name - Podman (POD MANager). The rest is, as they say, history. The Podman team is incredibly grateful for the success we\u2019ve seen since then, and the way that the community has grown."),(0,a.kt)("p",null,"With the release of Podman 2.0, we decided it was a good time to for the rename our repository to better match how it\u2019s used today. We\u2019ve decided to rename our Github repository from ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/libpod")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/podman"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"libpod")," name made sense when we first made the repository, but it hasn\u2019t been the focus of development for some time. We\u2019ve actually been considering moving the ",(0,a.kt)("inlineCode",{parentName:"p"},"libpod")," library into a separate repository, to make it easier to include in our other tools (and it would be very confusing for ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/libpod")," to not include ",(0,a.kt)("inlineCode",{parentName:"p"},"libpod"),"!). Given this, and the fact that there are far more users of Podman the tool than ",(0,a.kt)("inlineCode",{parentName:"p"},"libpod")," the library, renaming the repository makes a great deal of sense."),(0,a.kt)("p",null,"Finally, this rename helps make the repository more discoverable - it\u2019s hard for a new Podman user to know that issues should be filed against ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/libpod")," since they probably don\u2019t know what ",(0,a.kt)("inlineCode",{parentName:"p"},"libpod")," is."),(0,a.kt)("p",null,"We don\u2019t expect this move will break anyone\u2019s workflow. Github will ensure that the old URLs redirect to the new location, so access to the repo itself, as well as our issues and pull requests, should be unaffected."))}h.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);