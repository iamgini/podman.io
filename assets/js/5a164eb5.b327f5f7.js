"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[36703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Podman Alpha version 0.6.4 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},l=void 0,i={permalink:"/blog/2018/07/02/podman-alpha-v0.6.4",source:"@site/blog/2018-07-02-podman-alpha-v0.6.4.md",title:"Podman Alpha version 0.6.4 Release Announcement",description:"podman logo",date:"2018-07-02T00:00:00.000Z",formattedDate:"July 2, 2018",tags:[{label:"community",permalink:"/blog/tags/community"},{label:"open source",permalink:"/blog/tags/open-source"},{label:"podman",permalink:"/blog/tags/podman"}],readingTime:2.265,hasTruncateMarker:!0,authors:[{name:"bbaude"}],frontMatter:{title:"Podman Alpha version 0.6.4 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},prevItem:{title:"Podman Alpha version 0.7.1 Release Announcement",permalink:"/blog/2018/07/09/podman-alpha-v0.7.1"},nextItem:{title:"Podman Alpha version 0.6.1 Release Announcement",permalink:"/blog/2018/06/04/podman-alpha-v0.6.1"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"podman-release-064"},"Podman release 0.6.4"),(0,a.kt)("p",null,"This afternoon we were able to overcome some last minute bugs and release a new Podman. The packages are building in Fedora and will work their way through Fedora\u2019s bodhi system. For giggles, I looked at the number of individual contributors this week and was glad to see the number at 10."),(0,a.kt)("p",null,"Mainly bugfixes this week, one big one was that we do a better job cleaning up containers that run in the back ground."))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);