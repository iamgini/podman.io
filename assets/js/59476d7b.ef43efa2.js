"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[25297],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(o),u=n,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||a;return o?r.createElement(g,i(i({ref:t},l),{},{components:o})):r.createElement(g,i({ref:t},l))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},59298:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"Moving from docker-compose to Podman pods",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},i=void 0,p={permalink:"/blog/2020/08/11/migrate-from-docker-compose",source:"@site/blog/2020-08-11-migrate-from-docker-compose.md",title:"Moving from docker-compose to Podman pods",description:"podman logo",date:"2020-08-11T00:00:00.000Z",formattedDate:"August 11, 2020",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"github",permalink:"/blog/tags/github"},{label:"rename",permalink:"/blog/tags/rename"}],readingTime:.235,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Moving from docker-compose to Podman pods",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},prevItem:{title:"Learning Red Hat's Podman (docker), Buildah, Skopeo and Quay.io",permalink:"/blog/2020/08/13/walk-through"},nextItem:{title:"Moving from docker-compose to Podman pods",permalink:"/blog/2020/08/11/new"}},m={authorsImageUrls:[void 0]},s=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],l={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"podman logo",src:o(1382).Z,width:"228",height:"61"})),(0,n.kt)("h1",{id:"moving-from-docker-compose-to-podman-pods"},"Moving from docker-compose to Podman pods"),(0,n.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/gangrif"},"Nathan Lager")," just landed a blog post on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site ",(0,n.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/compose-podman-pods"},"Moving from docker-compose to Podman pods"),". In the post, Nathan talks about ins and outs of the migration process."))}d.isMDXComponent=!0},1382:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);