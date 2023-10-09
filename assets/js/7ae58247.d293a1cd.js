"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[81747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={title:"Podman v0.12.1.1 Released",layout:"default",author:"mheon",categories:["releases"],tags:["community","open source","podman"]},l=void 0,i={permalink:"/blog/2018/12/12/podman-alpha-v0.12.1.1",source:"@site/blog/2018-12-12-podman-alpha-v0.12.1.1.md",title:"Podman v0.12.1.1 Released",description:"podman logo",date:"2018-12-12T00:00:00.000Z",formattedDate:"December 12, 2018",tags:[{label:"community",permalink:"/blog/tags/community"},{label:"open source",permalink:"/blog/tags/open-source"},{label:"podman",permalink:"/blog/tags/podman"}],readingTime:1.2,hasTruncateMarker:!0,authors:[{name:"mheon"}],frontMatter:{title:"Podman v0.12.1.1 Released",layout:"default",author:"mheon",categories:["releases"],tags:["community","open source","podman"]},prevItem:{title:"New Blog from Emilien Macchi, Part 4!",permalink:"/blog/2018/12/14/openstack-podman-healthchecks"},nextItem:{title:"Simplifying Podman commands with labels",permalink:"/blog/2018/12/03/podman-runlabel"}},s={authorsImageUrls:[void 0]},m=[{value:"Changes",id:"changes",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-release-01211"},"Podman Release 0.12.1.1"),(0,r.kt)("p",null,"We're happy to announce the availability of Podman 0.12.1.1, our latest version. We've been very busy over the last month, and it shows! We've merged over 150 new commits since our 0.11 releases, including major new functionality and several critical bugfixes. Pods, Kubernetes compatibility, and container volumes all saw major improvements."),(0,r.kt)("p",null,"We hope everyone enjoys the release, and stays with us in the future as Podman gets closer to 1.0. As always, many thanks to everyone who contributed to this release!"),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("p",null,"This release comes with many exciting new features. To highlight a few of our biggest changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"podman generate kube")," command was added by Brent Baude, which generates Kubernetes pod and service YAML from Podman containers and pods."),(0,r.kt)("li",{parentName:"ul"},"Initial support for named volumes using the ",(0,r.kt)("inlineCode",{parentName:"li"},"podman volume")," set of commands was landed by Urvashi Mohnani"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"podman rm")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"podman rmi")," commands can now prune unused containers and images with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--prune")," flag"),(0,r.kt)("li",{parentName:"ul"},"Ports can now be published to the host from pods")),(0,r.kt)("p",null,"Numerous bugs were fixed as well, including a breaking change in rootless Podman found in 0.11.x releases."),(0,r.kt)("p",null,"To see the full changelog, please visit our release notes on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/RELEASE_NOTES.md"},"GitHub")),(0,r.kt)("p",null,"Some of this work, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman volume")," command, is still very early. We'd greatly appreciate feedback! If you have an enhancement request or a bug report, please file them on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/issues"},"issue page"),"."))}u.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);