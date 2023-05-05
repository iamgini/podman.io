"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[2537],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>u});var n=t(7294);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,m=e.mdxType,r=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(t),f=m,u=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return t?n.createElement(u,i(i({ref:a},l),{},{components:t})):n.createElement(u,i({ref:a},l))}));function u(e,a){var t=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var r=t.length,i=new Array(r);i[0]=f;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:m,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2392:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(7462),m=(t(7294),t(3905));const r={},i=void 0,o={unversionedId:"commands/podman-manifest/podman-manifest",id:"commands/podman-manifest/podman-manifest",title:"podman-manifest",description:"% podman-manifest 1",source:"@site/docs/commands/podman-manifest/podman-manifest.md",sourceDirName:"commands/podman-manifest",slug:"/commands/podman-manifest/",permalink:"/docs/commands/podman-manifest/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-manifest/podman-manifest.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-machine-stop",permalink:"/docs/commands/podman-machine/podman-machine-stop"},next:{title:"podman-manifest-add",permalink:"/docs/commands/podman-manifest/podman-manifest-add"}},s={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"SUBCOMMANDS",id:"subcommands",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Building a multi-arch manifest list from a Containerfile",id:"building-a-multi-arch-manifest-list-from-a-containerfile",level:3},{value:"Assembling a multi-arch manifest from separately built images",id:"assembling-a-multi-arch-manifest-from-separately-built-images",level:3},{value:"Removing and tagging a manifest list before pushing",id:"removing-and-tagging-a-manifest-list-before-pushing",level:3},{value:"SEE ALSO",id:"see-also",level:2}],l={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,m.kt)(d,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"% podman-manifest 1"),(0,m.kt)("h2",{id:"name"},"NAME"),(0,m.kt)("p",null,"podman","-","manifest - Create and manipulate manifest lists and image indexes"),(0,m.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"podman manifest")," ",(0,m.kt)("em",{parentName:"p"},"subcommand")),(0,m.kt)("h2",{id:"description"},"DESCRIPTION"),(0,m.kt)("p",null,"The ",(0,m.kt)("inlineCode",{parentName:"p"},"podman manifest")," command provides subcommands which can be used to:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"* Create a working Docker manifest list or OCI image index.\n")),(0,m.kt)("h2",{id:"subcommands"},"SUBCOMMANDS"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Command"),(0,m.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"add"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-add"},"podman-manifest-add(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Add an image to a manifest list or image index.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"annotate"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-annotate"},"podman-manifest-annotate(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Add or update information about an entry in a manifest list or image index.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"create"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-create"},"podman-manifest-create(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Create a manifest list or image index.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"exists"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-exists"},"podman-manifest-exists(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Check if the given manifest list exists in local storage")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"inspect"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-inspect"},"podman-manifest-inspect(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Display a manifest list or image index.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"push"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-push"},"podman-manifest-push(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Push a manifest list or image index to a registry.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"remove"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-remove"},"podman-manifest-remove(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Remove an image from a manifest list or image index.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"rm"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/commands/podman-manifest/podman-manifest-rm"},"podman-manifest-rm(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Remove manifest list or image index from local storage.")))),(0,m.kt)("h2",{id:"examples"},"EXAMPLES"),(0,m.kt)("h3",{id:"building-a-multi-arch-manifest-list-from-a-containerfile"},"Building a multi-arch manifest list from a Containerfile"),(0,m.kt)("p",null,"Assuming the ",(0,m.kt)("inlineCode",{parentName:"p"},"Containerfile")," uses ",(0,m.kt)("inlineCode",{parentName:"p"},"RUN")," instructions, the host needs\na way to execute non-native binaries. Configuring this is beyond\nthe scope of this example. Building a multi-arch manifest list\n",(0,m.kt)("inlineCode",{parentName:"p"},"shazam")," in parallel across 4-threads can be done like this:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"    $ platarch=linux/amd64,linux/ppc64le,linux/arm64,linux/s390x\n    $ podman build --jobs=4 --platform=$platarch --manifest shazam .\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Note:")," The ",(0,m.kt)("inlineCode",{parentName:"p"},"--jobs")," argument is optional, and the ",(0,m.kt)("inlineCode",{parentName:"p"},"-t")," or ",(0,m.kt)("inlineCode",{parentName:"p"},"--tag"),"\noption should ",(0,m.kt)("em",{parentName:"p"},"not")," be used."),(0,m.kt)("h3",{id:"assembling-a-multi-arch-manifest-from-separately-built-images"},"Assembling a multi-arch manifest from separately built images"),(0,m.kt)("p",null,"Assuming ",(0,m.kt)("inlineCode",{parentName:"p"},"example.com/example/shazam:$arch")," images are built separately\non other hosts and pushed to the ",(0,m.kt)("inlineCode",{parentName:"p"},"example.com")," registry. They may\nbe combined into a manifest list, and pushed using a simple loop:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"    $ REPO=example.com/example/shazam\n    $ podman manifest create $REPO:latest\n    $ for IMGTAG in amd64 s390x ppc64le arm64; do \\\n              podman manifest add $REPO:latest docker://$REPO:IMGTAG; \\\n          done\n    $ podman manifest push --all $REPO:latest\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Note:")," The ",(0,m.kt)("inlineCode",{parentName:"p"},"add")," instruction argument order is ",(0,m.kt)("inlineCode",{parentName:"p"},"<manifest>")," then ",(0,m.kt)("inlineCode",{parentName:"p"},"<image>"),".\nAlso, the ",(0,m.kt)("inlineCode",{parentName:"p"},"--all")," push option is required to ensure all contents are\npushed, not just the native platform/arch."),(0,m.kt)("h3",{id:"removing-and-tagging-a-manifest-list-before-pushing"},"Removing and tagging a manifest list before pushing"),(0,m.kt)("p",null,"Special care is needed when removing and pushing manifest lists, as opposed\nto the contents. You almost always want to use the ",(0,m.kt)("inlineCode",{parentName:"p"},"manifest rm")," and\n",(0,m.kt)("inlineCode",{parentName:"p"},"manifest push --all")," subcommands. For example, a rename and push could\nbe performed like this:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"    $ podman tag localhost/shazam example.com/example/shazam\n    $ podman manifest rm localhost/shazam\n    $ podman manifest push --all example.com/example/shazam\n")),(0,m.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-manifest/podman-manifest-add"},"podman-manifest-add(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-manifest/podman-manifest-annotate"},"podman-manifest-annotate(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-manifest/podman-manifest-create"},"podman-manifest-create(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-manifest/podman-manifest-inspect"},"podman-manifest-inspect(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-manifest/podman-manifest-push"},"podman-manifest-push(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/docs/commands/podman-manifest/podman-manifest-remove"},"podman-manifest-remove(1)"))))}c.isMDXComponent=!0}}]);