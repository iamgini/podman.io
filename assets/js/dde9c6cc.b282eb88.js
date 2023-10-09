"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[15771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(s,".").concat(m)]||c[m]||b[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"The history of an API&#58; GitLab Runner and Podman",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac","GitLab","Runner"]},i=void 0,l={permalink:"/blog/2020/11/13/new",source:"@site/blog/2020-11-13-new.md",title:"The history of an API&#58; GitLab Runner and Podman",description:"In a recent blog post on the Red Hat Enable Sysadmin site, The history of an API: GitLab Runner and Podman, Pablo Greco from the CentOS QA team in Buenos Aires, Argentia documented his journey through a Podman and GitLab Runner integration. When Podman v2.2 arrives, GitLab Runner will be able to run with Podman right out of the box. Give the article a read to see how he got there.",date:"2020-11-13T00:00:00.000Z",formattedDate:"November 13, 2020",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"mac",permalink:"/blog/tags/mac"},{label:"GitLab",permalink:"/blog/tags/git-lab"},{label:"Runner",permalink:"/blog/tags/runner"}],readingTime:.355,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"The history of an API&#58; GitLab Runner and Podman",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac","GitLab","Runner"]},prevItem:{title:"The history of an API&#58; GitLab Runner and Podman",permalink:"/blog/2020/11/13/gitlab-runner-and-podman"},nextItem:{title:"Exploring Podman RESTful API using Python and Bash",permalink:"/blog/2020/10/17/expoloring-restful-api"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},c="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a recent blog post on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/history-api"},"The history of an API: GitLab Runner and Podman"),", Pablo Greco from the CentOS QA team in Buenos Aires, Argentia documented his journey through a Podman and GitLab Runner integration. When Podman v2.2 arrives, GitLab Runner will be able to run with Podman right out of the box. Give the article a read to see how he got there."))}b.isMDXComponent=!0}}]);