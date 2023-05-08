"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[4729],{3905:(n,a,e)=>{e.d(a,{Zo:()=>c,kt:()=>u});var t=e(7294);function m(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function r(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function o(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){m(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function i(n,a){if(null==n)return{};var e,t,m=function(n,a){if(null==n)return{};var e,t,m={},r=Object.keys(n);for(t=0;t<r.length;t++)e=r[t],a.indexOf(e)>=0||(m[e]=n[e]);return m}(n,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)e=r[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(m[e]=n[e])}return m}var p=t.createContext({}),d=function(n){var a=t.useContext(p),e=a;return n&&(e="function"==typeof n?n(a):o(o({},a),n)),e},c=function(n){var a=d(n.components);return t.createElement(p.Provider,{value:a},n.children)},l="mdxType",s={inlineCode:"code",wrapper:function(n){var a=n.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(n,a){var e=n.components,m=n.mdxType,r=n.originalType,p=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),l=d(e),h=m,u=l["".concat(p,".").concat(h)]||l[h]||s[h]||r;return e?t.createElement(u,o(o({ref:a},c),{},{components:e})):t.createElement(u,o({ref:a},c))}));function u(n,a){var e=arguments,m=a&&a.mdxType;if("string"==typeof n||m){var r=e.length,o=new Array(r);o[0]=h;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=n,i[l]="string"==typeof n?n:m,o[1]=i;for(var d=2;d<r;d++)o[d]=e[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,e)}h.displayName="MDXCreateElement"},4709:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=e(7462),m=(e(7294),e(3905));const r={},o=void 0,i={unversionedId:"commands/podman-machine/podman-machine",id:"commands/podman-machine/podman-machine",title:"podman-machine",description:"% podman-machine 1",source:"@site/docs/commands/podman-machine/podman-machine.md",sourceDirName:"commands/podman-machine",slug:"/commands/podman-machine/",permalink:"/docs/commands/podman-machine/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-machine/podman-machine.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-logs",permalink:"/docs/commands/podman-logs"},next:{title:"podman-machine-info",permalink:"/docs/commands/podman-machine/podman-machine-info"}},p={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"SUBCOMMANDS",id:"subcommands",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],c={toc:d},l="wrapper";function s(n){let{components:a,...e}=n;return(0,m.kt)(l,(0,t.Z)({},c,e,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"% podman-machine 1"),(0,m.kt)("h2",{id:"name"},"NAME"),(0,m.kt)("p",null,"podman","-","machine - Manage Podman's virtual machine"),(0,m.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"podman machine")," ",(0,m.kt)("em",{parentName:"p"},"subcommand")),(0,m.kt)("h2",{id:"description"},"DESCRIPTION"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"podman machine")," is a set of subcommands that manage Podman's virtual machine."),(0,m.kt)("p",null,"Podman on MacOS and Windows requires a virtual machine. This is because containers are Linux -\ncontainers do not run on any other OS because containers' core functionality are\ntied to the Linux kernel. Podman machine must be used to manage MacOS and Windows machines,\nbut can be optionally used on Linux."),(0,m.kt)("p",null,"All ",(0,m.kt)("inlineCode",{parentName:"p"},"podman machine")," commands are rootless only."),(0,m.kt)("p",null,"NOTE: The podman-machine configuration file is managed under the\n",(0,m.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/containers/podman/machine/")," directory. Changing the ",(0,m.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME"),"\nenvironment variable while the machines are running can lead to unexpected behavior."),(0,m.kt)("h2",{id:"subcommands"},"SUBCOMMANDS"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Command"),(0,m.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"info"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-info"},"podman-machine-info(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Display machine host info")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"init"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-init"},"podman-machine-init(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Initialize a new virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"inspect"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-inspect"},"podman-machine-inspect(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Inspect one or more virtual machines")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"list"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-list"},"podman-machine-list(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"List virtual machines")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"os"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-os"},"podman-machine-os(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Manage a Podman virtual machine's OS")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"rm"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-rm"},"podman-machine-rm(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Remove a virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"set"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-set"},"podman-machine-set(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Sets a virtual machine setting")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"ssh"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-ssh"},"podman-machine-ssh(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"SSH into a virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"start"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-start"},"podman-machine-start(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Start a virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"stop"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-machine/podman-machine-stop"},"podman-machine-stop(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Stop a virtual machine")))),(0,m.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-info"},"podman-machine-info(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-init"},"podman-machine-init(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-list"},"podman-machine-list(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-os"},"podman-machine-os(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-rm"},"podman-machine-rm(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-ssh"},"podman-machine-ssh(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-start"},"podman-machine-start(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-stop"},"podman-machine-stop(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/podman-machine-inspect"},"podman-machine-inspect(1)"))),(0,m.kt)("h2",{id:"history"},"HISTORY"),(0,m.kt)("p",null,"March 2021, Originally compiled by Ashley Cui ",(0,m.kt)("a",{parentName:"p",href:"mailto:acui@redhat.com"},"acui@redhat.com")))}s.isMDXComponent=!0}}]);