"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[4542],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i=void 0,s={unversionedId:"podman-container/podman-container-exists",id:"podman-container/podman-container-exists",title:"podman-container-exists",description:"% podman-container-exists 1",source:"@site/docs/podman-container/podman-container-exists.md",sourceDirName:"podman-container",slug:"/podman-container/podman-container-exists",permalink:"/websites-new/docs/podman-container/podman-container-exists",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-container/podman-container-exists.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-container-diff",permalink:"/websites-new/docs/podman-container/podman-container-diff"},next:{title:"podman-container-inspect",permalink:"/websites-new/docs/podman-container/podman-container-inspect"}},l={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--external</strong>",id:"--external",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-container-exists 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","container","-","exists - Check if a container exists in local storage"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container exists")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"container")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container exists")," checks if a container exists in local storage. The ",(0,r.kt)("em",{parentName:"p"},"container ID")," or ",(0,r.kt)("em",{parentName:"p"},"name")," is used as input. Podman will return an exit code\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," when the container is found. A ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," will be returned otherwise. An exit code of ",(0,r.kt)("inlineCode",{parentName:"p"},"125")," indicates there was an issue accessing the local storage."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--external"},(0,r.kt)("strong",{parentName:"h4"},"--external")),(0,r.kt)("p",null,"Check for external ",(0,r.kt)("em",{parentName:"p"},"containers")," as well as Podman ",(0,r.kt)("em",{parentName:"p"},"containers"),". These external ",(0,r.kt)("em",{parentName:"p"},"containers")," are generally created via other container technology such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Buildah")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CRI-O"),".\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-h"),", ",(0,r.kt)("strong",{parentName:"p"},"--help")),(0,r.kt)("p",null,"Prints usage statement.\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("p",null,'Check if a container called "webclient" exists in local storage. Here, the container does exist.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman container exists webclient\n$ echo $?\n0\n")),(0,r.kt)("p",null,'Check if a container called "webbackend" exists in local storage. Here, the container does not exist.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman container exists webbackend\n$ echo $?\n1\n")),(0,r.kt)("p",null,'Check if a container called "ubi8-working-container" created via Buildah exists in local storage. Here, the container does not exist.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman container exists --external ubi8-working-container\n$ echo $?\n1\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"November 2018, Originally compiled by Brent Baude ",(0,r.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}m.isMDXComponent=!0}}]);