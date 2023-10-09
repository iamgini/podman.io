"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[26599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"SELinux blocks Podman container from talking to libvirt",layout:"default",author:"dwalsh",categories:["blogs"],tags:["podman","containers"]},i=void 0,l={permalink:"/blog/2018/10/04/selinux-libvirt",source:"@site/blog/2018-10-04-selinux-libvirt.md",title:"SELinux blocks Podman container from talking to libvirt",description:"podman logo",date:"2018-10-04T00:00:00.000Z",formattedDate:"October 4, 2018",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"}],readingTime:.28,hasTruncateMarker:!1,authors:[{name:"dwalsh"}],frontMatter:{title:"SELinux blocks Podman container from talking to libvirt",layout:"default",author:"dwalsh",categories:["blogs"],tags:["podman","containers"]},prevItem:{title:"OpenStack Containerization with Podman \u2013 Part 1 (Undercloud)",permalink:"/blog/2018/10/05/tripleo-undercloud"},nextItem:{title:"Why can\u2019t I delete storage files created by non-root podman?",permalink:"/blog/2018/10/03/podman-remove-content-homedir"}},c={authorsImageUrls:[void 0]},s=[{value:"By Dan Walsh GitHub",id:"by-dan-walsh-github",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"selinux-blocks-podman-container-from-talking-to-libvirt"},"SELinux blocks Podman container from talking to libvirt"),(0,o.kt)("h2",{id:"by-dan-walsh-github"},"By Dan Walsh ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/rhatdan"},"GitHub")),(0,o.kt)("p",null,"I wrote a SELinux blog on running a container with Podman. The talks explains why SELinux blocks the connection to the\nlibvirt socket. It then goes on to explain how to setup the container to allow\nthe communication."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://danwalsh.livejournal.com/81143.html"},"Read More")))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);