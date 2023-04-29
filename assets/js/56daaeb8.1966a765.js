"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[1085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(i,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(f,p(p({ref:t},l),{},{components:n})):o.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[c]="string"==typeof e?e:r,p[1]=d;for(var s=2;s<a;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},p=void 0,d={unversionedId:"podman-pod/podman-pod-exists",id:"podman-pod/podman-pod-exists",title:"podman-pod-exists",description:"% podman-pod-exists 1",source:"@site/docs/podman-pod/podman-pod-exists.md",sourceDirName:"podman-pod",slug:"/podman-pod/podman-pod-exists",permalink:"/websites-new/docs/podman-pod/podman-pod-exists",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-pod/podman-pod-exists.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-create",permalink:"/websites-new/docs/podman-pod/podman-pod-create"},next:{title:"podman-pod-inspect",permalink:"/websites-new/docs/podman-pod/podman-pod-inspect"}},i={},s=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],l={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-pod-exists 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman-pod-exists - Check if a pod exists in local storage"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman pod exists")," ",(0,r.kt)("em",{parentName:"p"},"pod")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman pod exists")," checks if a pod exists in local storage. The ",(0,r.kt)("strong",{parentName:"p"},"ID")," or ",(0,r.kt)("strong",{parentName:"p"},"Name"),"\nof the pod may be used as input. Podman will return an exit code\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," when the pod is found. A ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," will be returned otherwise. An exit code of ",(0,r.kt)("inlineCode",{parentName:"p"},"125")," indicates there\nwas an issue accessing the local storage."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("p",null,"Check if a pod called ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," exists in local storage (the pod does actually exist)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo podman pod exists web\n$ echo $?\n0\n$\n")),(0,r.kt)("p",null,"Check if a pod called ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," exists in local storage (the pod does not actually exist)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo podman pod exists backend\n$ echo $?\n1\n$\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-pod/"},"podman-pod(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"December 2018, Originally compiled by Brent Baude (bbaude at redhat dot com)"))}m.isMDXComponent=!0}}]);