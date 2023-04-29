"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,c=d["".concat(o,".").concat(u)]||d[u]||f[u]||r;return a?n.createElement(c,m(m({ref:t},l),{},{components:a})):n.createElement(c,m({ref:t},l))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,m=new Array(r);m[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,m[1]=s;for(var p=2;p<r;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={},m=void 0,s={unversionedId:"podman-manifest/podman-manifest",id:"podman-manifest/podman-manifest",title:"podman-manifest",description:"% podman-manifest 1",source:"@site/docs/podman-manifest/podman-manifest.md",sourceDirName:"podman-manifest",slug:"/podman-manifest/",permalink:"/websites-new/docs/podman-manifest/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-manifest/podman-manifest.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-machine-stop",permalink:"/websites-new/docs/podman-machine/podman-machine-stop"},next:{title:"podman-manifest-add",permalink:"/websites-new/docs/podman-manifest/podman-manifest-add"}},o={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"SUBCOMMANDS",id:"subcommands",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Building a multi-arch manifest list from a Containerfile",id:"building-a-multi-arch-manifest-list-from-a-containerfile",level:3},{value:"Assembling a multi-arch manifest from separately built images",id:"assembling-a-multi-arch-manifest-from-separately-built-images",level:3},{value:"Removing and tagging a manifest list before pushing",id:"removing-and-tagging-a-manifest-list-before-pushing",level:3},{value:"SEE ALSO",id:"see-also",level:2}],l={toc:p},d="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"% podman-manifest 1"),(0,i.kt)("h2",{id:"name"},"NAME"),(0,i.kt)("p",null,"podman","-","manifest - Create and manipulate manifest lists and image indexes"),(0,i.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"podman manifest")," ",(0,i.kt)("em",{parentName:"p"},"subcommand")),(0,i.kt)("h2",{id:"description"},"DESCRIPTION"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"podman manifest")," command provides subcommands which can be used to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"* Create a working Docker manifest list or OCI image index.\n")),(0,i.kt)("h2",{id:"subcommands"},"SUBCOMMANDS"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"add"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-add"},"podman-manifest-add(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Add an image to a manifest list or image index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotate"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-annotate"},"podman-manifest-annotate(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Add or update information about an entry in a manifest list or image index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"create"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-create"},"podman-manifest-create(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Create a manifest list or image index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"exists"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-exists"},"podman-manifest-exists(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Check if the given manifest list exists in local storage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"inspect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-inspect"},"podman-manifest-inspect(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Display a manifest list or image index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"push"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-push"},"podman-manifest-push(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Push a manifest list or image index to a registry.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"remove"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-remove"},"podman-manifest-remove(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Remove an image from a manifest list or image index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rm"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/websites-new/docs/podman-manifest/podman-manifest-rm"},"podman-manifest-rm(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Remove manifest list or image index from local storage.")))),(0,i.kt)("h2",{id:"examples"},"EXAMPLES"),(0,i.kt)("h3",{id:"building-a-multi-arch-manifest-list-from-a-containerfile"},"Building a multi-arch manifest list from a Containerfile"),(0,i.kt)("p",null,"Assuming the ",(0,i.kt)("inlineCode",{parentName:"p"},"Containerfile")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN")," instructions, the host needs\na way to execute non-native binaries. Configuring this is beyond\nthe scope of this example. Building a multi-arch manifest list\n",(0,i.kt)("inlineCode",{parentName:"p"},"shazam")," in parallel across 4-threads can be done like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    $ platarch=linux/amd64,linux/ppc64le,linux/arm64,linux/s390x\n    $ podman build --jobs=4 --platform=$platarch --manifest shazam .\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"--jobs")," argument is optional, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"-t")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--tag"),"\noption should ",(0,i.kt)("em",{parentName:"p"},"not")," be used."),(0,i.kt)("h3",{id:"assembling-a-multi-arch-manifest-from-separately-built-images"},"Assembling a multi-arch manifest from separately built images"),(0,i.kt)("p",null,"Assuming ",(0,i.kt)("inlineCode",{parentName:"p"},"example.com/example/shazam:$arch")," images are built separately\non other hosts and pushed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"example.com")," registry. They may\nbe combined into a manifest list, and pushed using a simple loop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    $ REPO=example.com/example/shazam\n    $ podman manifest create $REPO:latest\n    $ for IMGTAG in amd64 s390x ppc64le arm64; do \\\n              podman manifest add $REPO:latest docker://$REPO:IMGTAG; \\\n          done\n    $ podman manifest push --all $REPO:latest\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," instruction argument order is ",(0,i.kt)("inlineCode",{parentName:"p"},"<manifest>")," then ",(0,i.kt)("inlineCode",{parentName:"p"},"<image>"),".\nAlso, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--all")," push option is required to ensure all contents are\npushed, not just the native platform/arch."),(0,i.kt)("h3",{id:"removing-and-tagging-a-manifest-list-before-pushing"},"Removing and tagging a manifest list before pushing"),(0,i.kt)("p",null,"Special care is needed when removing and pushing manifest lists, as opposed\nto the contents. You almost always want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest rm")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"manifest push --all")," subcommands. For example, a rename and push could\nbe performed like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    $ podman tag localhost/shazam example.com/example/shazam\n    $ podman manifest rm localhost/shazam\n    $ podman manifest push --all example.com/example/shazam\n")),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/podman-manifest-add"},"podman-manifest-add(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/podman-manifest-annotate"},"podman-manifest-annotate(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/podman-manifest-create"},"podman-manifest-create(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/podman-manifest-inspect"},"podman-manifest-inspect(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/podman-manifest-push"},"podman-manifest-push(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/podman-manifest-remove"},"podman-manifest-remove(1)"))))}f.isMDXComponent=!0}}]);