"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[69300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"OpenStack Containerization with Podman \u2013 Part 1 (Undercloud)",layout:"default",author:"emacchi",categories:["blogs"],tags:["podman","containers","openstack"]},i=void 0,l={permalink:"/blog/2018/10/05/tripleo-undercloud",source:"@site/blog/2018-10-05-tripleo-undercloud.md",title:"OpenStack Containerization with Podman \u2013 Part 1 (Undercloud)",description:"podman logo",date:"2018-10-05T00:00:00.000Z",formattedDate:"October 5, 2018",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"openstack",permalink:"/blog/tags/openstack"}],readingTime:.155,hasTruncateMarker:!1,authors:[{name:"emacchi"}],frontMatter:{title:"OpenStack Containerization with Podman \u2013 Part 1 (Undercloud)",layout:"default",author:"emacchi",categories:["blogs"],tags:["podman","containers","openstack"]},prevItem:{title:"OpenStack Containerization with Podman \u2013 Part 2 (systemd)",permalink:"/blog/2018/10/05/tripleo-systemd"},nextItem:{title:"SELinux blocks Podman container from talking to libvirt",permalink:"/blog/2018/10/04/selinux-libvirt"}},c={authorsImageUrls:[void 0]},p=[{value:"By Emilien Macchi GitHub",id:"by-emilien-macchi-github",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"deploy-openstack-tripleo-undercloud-podman-containers"},"Deploy OpenStack TripleO Undercloud Podman containers"),(0,o.kt)("h2",{id:"by-emilien-macchi-github"},"By Emilien Macchi ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/EmilienM"},"GitHub")),(0,o.kt)("p",null,"I wrote a blog post about how we deploy OpenStack TripleO Undercloud with\nPodman containers."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://my1.fr/blog/openstack-containerization-with-podman-part-1-undercloud/"},"Read More")))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);