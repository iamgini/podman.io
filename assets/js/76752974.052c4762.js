"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[44164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"OpenStack Containerization with Podman \u2013 Part 2 (systemd)",layout:"default",author:"emacchi",categories:["blogs"],tags:["podman","containers","openstack"]},i=void 0,c={permalink:"/blog/2018/10/05/tripleo-systemd",source:"@site/blog/2018-10-05-tripleo-systemd.md",title:"OpenStack Containerization with Podman \u2013 Part 2 (systemd)",description:"podman logo",date:"2018-10-05T00:00:00.000Z",formattedDate:"October 5, 2018",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"openstack",permalink:"/blog/tags/openstack"}],readingTime:.155,hasTruncateMarker:!1,authors:[{name:"emacchi"}],frontMatter:{title:"OpenStack Containerization with Podman \u2013 Part 2 (systemd)",layout:"default",author:"emacchi",categories:["blogs"],tags:["podman","containers","openstack"]},prevItem:{title:"OpenStack Containerization with Podman \u2013 Part 3 (Upgrades)",permalink:"/blog/2018/10/07/tripleo-upgrade"},nextItem:{title:"OpenStack Containerization with Podman \u2013 Part 1 (Undercloud)",permalink:"/blog/2018/10/05/tripleo-undercloud"}},l={authorsImageUrls:[void 0]},p=[{value:"By Emilien Macchi GitHub",id:"by-emilien-macchi-github",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"manage-podman-containers-with-systemd"},"Manage Podman containers with systemd"),(0,a.kt)("h2",{id:"by-emilien-macchi-github"},"By Emilien Macchi ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/EmilienM"},"GitHub")),(0,a.kt)("p",null,"I wrote a blog post about how we manage Podman containers with systemd in\nOpenStack TripleO."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://my1.fr/blog/openstack-containerization-with-podman-part-2-operations/"},"Read More")))}u.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);