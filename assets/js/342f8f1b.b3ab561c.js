"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[76194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Update on Podman v2",layout:"default",author:"baude",categories:["blogs"],tags:["containers","docker-compose","podman","networking","pod","api","rest","rest-api","v2"]},i=void 0,s={permalink:"/blog/2020/05/13/podman-v2-update",source:"@site/blog/2020-05-13-podman-v2-update.md",title:"Update on Podman v2",description:"podman logo",date:"2020-05-13T00:00:00.000Z",formattedDate:"May 13, 2020",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"docker-compose",permalink:"/blog/tags/docker-compose"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"api",permalink:"/blog/tags/api"},{label:"rest",permalink:"/blog/tags/rest"},{label:"rest-api",permalink:"/blog/tags/rest-api"},{label:"v2",permalink:"/blog/tags/v-2"}],readingTime:2,hasTruncateMarker:!1,authors:[{name:"baude"}],frontMatter:{title:"Update on Podman v2",layout:"default",author:"baude",categories:["blogs"],tags:["containers","docker-compose","podman","networking","pod","api","rest","rest-api","v2"]},prevItem:{title:"Update on Podman v2",permalink:"/blog/2020/05/13/new"},nextItem:{title:"Podman installation documentation in French",permalink:"/blog/2020/05/06/new"}},l={authorsImageUrls:[void 0]},p=[{value:"By Brent Baude GitHub",id:"by-brent-baude-github",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"update-on-podman-v2"},"Update on Podman v2"),(0,a.kt)("h2",{id:"by-brent-baude-github"},"By Brent Baude ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/baude"},"GitHub")),(0,a.kt)("p",null,"A few weeks ago, we made an announcement about the development of Podman V2. In the announcement, we mentioned that the state of upstream code would be jumbled for a while and that we would be temporarily disabling many of our CI/CD tests. The upstream development team has been hard at work, and we are starting to see that work pay off."),(0,a.kt)("p",null,"Today, we are very excited to announce:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The local Podman v2 client is complete. It is passing all of its rootful and rootless system and integration tests.")),(0,a.kt)("p",null,"The CI/CID tests have been re-enabled upstream and are run with each pull request submission. We are now hard at work finishing up some of the core podman-remote functions. Once those functions are complete, we can then begin to run our podman-remote system and integration tests to catch any regressions."),(0,a.kt)("p",null,"We have re-enabled the autobuilds for Podman v2 in Fedora rawhide. As mentioned earlier, the Podman remote client is not complete, so that binary is temporarily being removed from the RPM. It will be re-added when the remote client is complete. As a corollary, the Windows and OS/X clients are also not being compiled or tested. This will occur once the remote client for Linux is complete."),(0,a.kt)("p",null,"We encourage you to pull the latest upstream Podman code and exercise it with your use cases to help us protect against regressions from Podman v1. We hope to make a full Podman v2.0 release in several weeks, once we are confident it is stable. We look forward to hearing what you think, and please do not hesitate to raise issues and comments on this in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/issues"},"GitHub repository"),", our Freenode IRC channel ",(0,a.kt)("inlineCode",{parentName:"p"},"#podman"),", or to the Podman mailing list."),(0,a.kt)("p",null,"We\u2019re very excited to bring Podman v2.0 to you as it offers a lot more flexibility through it\u2019s new REST API interface and adds several enhancements to the existing commands. If your project builds on top of Podman, we would especially love to have you test this new version out so we can ensure complete compatibility with Podman v1.0 and address any issues found ASAP."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This announcement was first released to the Podman mailing list. If you are not yet a member of that community, please join us by sending an email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:podman-join@lists.podman.io?subject=subscribe"},"podman-join@lists.podman.io")," with the word \u201csubscribe\u201d as the title."))}c.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);