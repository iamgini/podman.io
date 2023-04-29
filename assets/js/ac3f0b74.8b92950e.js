"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[6130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(g,p(p({ref:t},m),{},{components:n})):a.createElement(g,p({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},p=void 0,l={unversionedId:"podman-untag",id:"podman-untag",title:"podman-untag",description:"% podman-untag 1",source:"@site/docs/podman-untag.md",sourceDirName:".",slug:"/podman-untag",permalink:"/websites-new/docs/podman-untag",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-untag.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-unshare",permalink:"/websites-new/docs/podman-unshare"},next:{title:"podman-update",permalink:"/websites-new/docs/podman-update"}},i={},s=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-untag 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","untag - Removes one or more names from a locally-stored image"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman untag")," ",(0,r.kt)("em",{parentName:"p"},"image")," [",(0,r.kt)("em",{parentName:"p"},"name"),"[:",(0,r.kt)("em",{parentName:"p"},"tag"),"]","...]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman image untag")," ",(0,r.kt)("em",{parentName:"p"},"image")," [",(0,r.kt)("em",{parentName:"p"},"name"),"[:",(0,r.kt)("em",{parentName:"p"},"tag"),"]","...]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Remove one or more names from an image in the local storage. The image can be referred to by ID or reference. If no name is specified, all names are removed from the image. If a specified name is a short name and does not include a registry, ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost/")," will be prefixed (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"fedora")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost/fedora"),"). If a specified name does not include a tag, ",(0,r.kt)("inlineCode",{parentName:"p"},":latest")," will be appended (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost/fedora")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost/fedora:latest"),")."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--help--h"},(0,r.kt)("strong",{parentName:"h4"},"--help"),", ",(0,r.kt)("strong",{parentName:"h4"},"-h")),(0,r.kt)("p",null,"Print usage statement"),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman untag 0e3bbc2\n\n$ podman untag imageName:latest otherImageName:latest\n\n$ podman untag httpd myregistryhost:5000/fedora/httpd:v2\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"December 2019, Originally compiled by Sascha Grunert ",(0,r.kt)("a",{parentName:"p",href:"mailto:sgrunert@suse.com"},"sgrunert@suse.com")))}c.isMDXComponent=!0}}]);