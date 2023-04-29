"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3285],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>g});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function p(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?p(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)o=p[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)o=p[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),i=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=i(e.components);return t.createElement(d.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(o),u=r,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||p;return o?t.createElement(g,a(a({ref:n},s),{},{components:o})):t.createElement(g,a({ref:n},s))}));function g(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=o.length,a=new Array(p);a[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var i=2;i<p;i++)a[i]=o[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9006:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var t=o(7462),r=(o(7294),o(3905));const p={},a=void 0,l={unversionedId:"podman-pod/podman-pod-logs",id:"podman-pod/podman-pod-logs",title:"podman-pod-logs",description:"% podman-pod-logs 1",source:"@site/docs/podman-pod/podman-pod-logs.md",sourceDirName:"podman-pod",slug:"/podman-pod/podman-pod-logs",permalink:"/websites-new/docs/podman-pod/podman-pod-logs",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-pod/podman-pod-logs.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-kill",permalink:"/websites-new/docs/podman-pod/podman-pod-kill"},next:{title:"podman-pod-pause",permalink:"/websites-new/docs/podman-pod/podman-pod-pause"}},d={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--container</strong>, <strong>-c</strong>",id:"--container--c",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2}],s={toc:i},m="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(m,(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-pod-logs 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","pod","-","logs - Displays logs for pod with one or more containers"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman pod logs")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"pod")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"The podman pod logs command batch-retrieves whatever logs are present with all the containers of a pod. Pod logs can be filtered by container name or ID using flag ",(0,r.kt)("strong",{parentName:"p"},"-c")," or ",(0,r.kt)("strong",{parentName:"p"},"--container")," if needed."),(0,r.kt)("p",null,"Note: Long running command of ",(0,r.kt)("inlineCode",{parentName:"p"},"podman pod log")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--follow")," needs to be reinvoked if new container is added to the pod dynamically otherwise logs of newly added containers would not be visible in log stream."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("p",null,"@@option color"),(0,r.kt)("h4",{id:"--container--c"},(0,r.kt)("strong",{parentName:"h4"},"--container"),", ",(0,r.kt)("strong",{parentName:"h4"},"-c")),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"podman pod logs")," retrieves logs for all the containers available within the pod differentiate by field ",(0,r.kt)("inlineCode",{parentName:"p"},"container"),". However there are use-cases where user would want to limit the log stream only to a particular container of a pod for such cases ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," can be used like ",(0,r.kt)("inlineCode",{parentName:"p"},"podman pod logs -c ctrNameorID podname"),"."),(0,r.kt)("p",null,"@@option follow"),(0,r.kt)("p",null,"@@option latest"),(0,r.kt)("p",null,"@@option names"),(0,r.kt)("p",null,"@@option since"),(0,r.kt)("p",null,"@@option tail"),(0,r.kt)("p",null,"@@option timestamps"),(0,r.kt)("p",null,"@@option until"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("p",null,"To view a pod's logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod logs -t podIdorName\n")),(0,r.kt)("p",null,"To view logs of a specific container on the pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod logs -c ctrIdOrName podIdOrName\n")),(0,r.kt)("p",null,"To view all pod logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod logs -t --since 0 myserver-pod-1\n")),(0,r.kt)("p",null,"To view a pod's logs since a certain time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod logs -t --since 2017-08-07T10:10:09.055837383-04:00 myserver-pod-1\n")),(0,r.kt)("p",null,"To view a pod's logs generated in the last 10 minutes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod logs --since 10m myserver-pod-1\n")),(0,r.kt)("p",null,"To view a pod's logs until 30 minutes ago:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod logs --until 30m myserver-pod-1\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-pod/"},"podman-pod(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-pod/podman-pod-rm"},"podman-pod-rm(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-logs"},"podman-logs(1)"))))}c.isMDXComponent=!0}}]);