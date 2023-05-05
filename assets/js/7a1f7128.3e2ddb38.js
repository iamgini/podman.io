"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[4557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"tutorials/podman-derivative-api",id:"tutorials/podman-derivative-api",title:"podman-derivative-api",description:"PODMAN logo",source:"@site/docs/tutorials/podman-derivative-api.md",sourceDirName:"tutorials",slug:"/tutorials/podman-derivative-api",permalink:"/docs/tutorials/podman-derivative-api",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/podman-derivative-api.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Podman performance guide",permalink:"/docs/tutorials/performance"},next:{title:"podman-for-windows",permalink:"/docs/tutorials/podman-for-windows"}},s={},p=[{value:"Using the REST API",id:"using-the-rest-api",level:2},{value:"Running as a subprocess",id:"running-as-a-subprocess",level:2},{value:"Vendoring into a Go project",id:"vendoring-into-a-go-project",level:2},{value:"Making the choice",id:"making-the-choice",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/containers/common/main/logos/podman-logo-full-vert.png",alt:"PODMAN logo"})),(0,r.kt)("h1",{id:"how-to-use-libpod-for-customderivative-projects"},"How to use libpod for custom/derivative projects"),(0,r.kt)("p",null,"libpod today is a Golang library and a CLI. The choice of interface you make has advantages and disadvantages."),(0,r.kt)("h2",{id:"using-the-rest-api"},"Using the REST API"),(0,r.kt)("p",null,"Advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stable, versioned API"),(0,r.kt)("li",{parentName:"ul"},"Language-agnostic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.podman.io/en/latest/_static/api.html"},"Well-documented")," API")),(0,r.kt)("p",null,"Disadvantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error handling is less verbose than Golang API"),(0,r.kt)("li",{parentName:"ul"},"May be slower")),(0,r.kt)("h2",{id:"running-as-a-subprocess"},"Running as a subprocess"),(0,r.kt)("p",null,"Advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Many commands output JSON"),(0,r.kt)("li",{parentName:"ul"},"Works with languages other than Golang"),(0,r.kt)("li",{parentName:"ul"},"Easy to get started")),(0,r.kt)("p",null,"Disadvantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error handling is harder"),(0,r.kt)("li",{parentName:"ul"},"May be slower"),(0,r.kt)("li",{parentName:"ul"},"Can't hook into or control low-level things like how images are pulled")),(0,r.kt)("h2",{id:"vendoring-into-a-go-project"},"Vendoring into a Go project"),(0,r.kt)("p",null,"Advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Significant power and control")),(0,r.kt)("p",null,"Disadvantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are now on the hook for container runtime security updates (partially, ",(0,r.kt)("inlineCode",{parentName:"li"},"runc"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"crun")," are separate)"),(0,r.kt)("li",{parentName:"ul"},"Binary size"),(0,r.kt)("li",{parentName:"ul"},"Potential skew between multiple libpod versions operating on the same storage can cause problems")),(0,r.kt)("h2",{id:"making-the-choice"},"Making the choice"),(0,r.kt)("p",null,"A good question to ask first is: Do you want users to be able to use ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," to manipulate the containers created by your project?\nIf so, that makes it more likely that you want to run ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," as a subprocess or using the HTTP API. If you want a separate image store and a fundamentally\ndifferent experience; if what you're doing with containers is quite different from those created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," CLI,\nthat may drive you towards vendoring."))}d.isMDXComponent=!0}}]);