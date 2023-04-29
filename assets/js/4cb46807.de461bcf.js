"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[4398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[c]="string"==typeof e?e:r,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,m={unversionedId:"podman-commit",id:"podman-commit",title:"podman-commit",description:"% podman-commit 1",source:"@site/docs/podman-commit.md",sourceDirName:".",slug:"/podman-commit",permalink:"/websites-new/docs/podman-commit",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-commit.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-build",permalink:"/websites-new/docs/podman-build"},next:{title:"podman-completion",permalink:"/websites-new/docs/podman-completion"}},p={},s=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--author</strong>, <strong>-a</strong>=<em>author</em>",id:"--author--aauthor",level:4},{value:"<strong>--change</strong>, <strong>-c</strong>=<em>instruction</em>",id:"--change--cinstruction",level:4},{value:"<strong>--format</strong>, <strong>-f</strong>=<strong>oci</strong> | <em>docker</em>",id:"--format--foci--docker",level:4},{value:"<strong>--iidfile</strong>=<em>ImageIDfile</em>",id:"--iidfileimageidfile",level:4},{value:"<strong>--include-volumes</strong>",id:"--include-volumes",level:4},{value:"<strong>--message</strong>, <strong>-m</strong>=<em>message</em>",id:"--message--mmessage",level:4},{value:"<strong>--pause</strong>, <strong>-p</strong>",id:"--pause--p",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"<strong>--squash</strong>, <strong>-s</strong>",id:"--squash--s",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],l={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-commit 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","commit - Create new image based on the changed container"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman commit")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"container")," ","[",(0,r.kt)("em",{parentName:"p"},"image"),"]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container commit")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"container")," ","[",(0,r.kt)("em",{parentName:"p"},"image"),"]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman commit")," creates an image based on a changed ",(0,r.kt)("em",{parentName:"p"},"container"),". The author of the image can be set using the ",(0,r.kt)("strong",{parentName:"p"},"--author")," OPTION. Various image instructions can be configured with the ",(0,r.kt)("strong",{parentName:"p"},"--change")," OPTION and a commit message can be set using the ",(0,r.kt)("strong",{parentName:"p"},"--message")," OPTION. The ",(0,r.kt)("em",{parentName:"p"},"container")," and its processes aren't paused while the image is committed. If this is not desired, the ",(0,r.kt)("strong",{parentName:"p"},"--pause")," OPTION can be set to ",(0,r.kt)("em",{parentName:"p"},"true"),". When the commit is complete, Podman will print out the ID of the new image."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," does not begin with a registry name component, ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," will be added to the name.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," is not provided, the values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"REPOSITORY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TAG")," values of the created image will each be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"<none>"),"."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--author--aauthor"},(0,r.kt)("strong",{parentName:"h4"},"--author"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a"),"=",(0,r.kt)("em",{parentName:"h4"},"author")),(0,r.kt)("p",null,"Set the author for the committed image."),(0,r.kt)("h4",{id:"--change--cinstruction"},(0,r.kt)("strong",{parentName:"h4"},"--change"),", ",(0,r.kt)("strong",{parentName:"h4"},"-c"),"=",(0,r.kt)("em",{parentName:"h4"},"instruction")),(0,r.kt)("p",null,"Apply the following possible instructions to the created image:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CMD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ENTRYPOINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ENV")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"EXPOSE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"LABEL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ONBUILD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"STOPSIGNAL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"USER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"VOLUME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"WORKDIR"))),(0,r.kt)("p",null,"Can be set multiple times."),(0,r.kt)("h4",{id:"--format--foci--docker"},(0,r.kt)("strong",{parentName:"h4"},"--format"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f"),"=",(0,r.kt)("strong",{parentName:"h4"},"oci")," | ",(0,r.kt)("em",{parentName:"h4"},"docker")),(0,r.kt)("p",null,"Set the format of the image manifest and metadata. The currently supported formats are ",(0,r.kt)("strong",{parentName:"p"},"oci")," and ",(0,r.kt)("em",{parentName:"p"},"docker"),".\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"oci"),"."),(0,r.kt)("h4",{id:"--iidfileimageidfile"},(0,r.kt)("strong",{parentName:"h4"},"--iidfile"),"=",(0,r.kt)("em",{parentName:"h4"},"ImageIDfile")),(0,r.kt)("p",null,"Write the image ID to the file."),(0,r.kt)("h4",{id:"--include-volumes"},(0,r.kt)("strong",{parentName:"h4"},"--include-volumes")),(0,r.kt)("p",null,"Include in the committed image any volumes added to the container by the ",(0,r.kt)("strong",{parentName:"p"},"--volume")," or ",(0,r.kt)("strong",{parentName:"p"},"--mount")," OPTIONS to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-create"},"podman create"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-run"},"podman run"))," commands.\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("h4",{id:"--message--mmessage"},(0,r.kt)("strong",{parentName:"h4"},"--message"),", ",(0,r.kt)("strong",{parentName:"h4"},"-m"),"=",(0,r.kt)("em",{parentName:"h4"},"message")),(0,r.kt)("p",null,"Set commit message for committed image.\\\n",(0,r.kt)("em",{parentName:"p"},"IMPORTANT: The message field is not supported in ",(0,r.kt)("inlineCode",{parentName:"em"},"oci")," format.")),(0,r.kt)("h4",{id:"--pause--p"},(0,r.kt)("strong",{parentName:"h4"},"--pause"),", ",(0,r.kt)("strong",{parentName:"h4"},"-p")),(0,r.kt)("p",null,"Pause the container when creating an image.\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("h4",{id:"--quiet--q"},(0,r.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,r.kt)("strong",{parentName:"h4"},"-q")),(0,r.kt)("p",null,"Suppresses output.\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("h4",{id:"--squash--s"},(0,r.kt)("strong",{parentName:"h4"},"--squash"),", ",(0,r.kt)("strong",{parentName:"h4"},"-s")),(0,r.kt)("p",null,"Squash newly built layers into a single new layer.\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("p",null,"Create image from container with entrypoint and label"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman commit --change CMD=/bin/bash --change ENTRYPOINT=/bin/sh --change "LABEL blue=image" reverent_golick image-committed\nGetting image source signatures\nCopying blob sha256:b41deda5a2feb1f03a5c1bb38c598cbc12c9ccd675f438edc6acd815f7585b86\n 25.80 MB / 25.80 MB [======================================================] 0s\nCopying config sha256:c16a6d30f3782288ec4e7521c754acc29d37155629cb39149756f486dae2d4cd\n 448 B / 448 B [============================================================] 0s\nWriting manifest to image destination\nStoring signatures\ne3ce4d93051ceea088d1c242624d659be32cf1667ef62f1d16d6b60193e2c7a8\n')),(0,r.kt)("p",null,"Create image from container with commit message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman commit -q --message "committing container to image"\nreverent_golick image-committed\ne3ce4d93051ceea088d1c242624d659be32cf1667ef62f1d16d6b60193e2c7a8\n')),(0,r.kt)("p",null,"Create image from container with author"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman commit -q --author "firstName lastName" reverent_golick image-committed\ne3ce4d93051ceea088d1c242624d659be32cf1667ef62f1d16d6b60193e2c7a8\n')),(0,r.kt)("p",null,"Pause a running container while creating the image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman commit -q --pause=true containerID image-committed\ne3ce4d93051ceea088d1c242624d659be32cf1667ef62f1d16d6b60193e2c7a8\n")),(0,r.kt)("p",null,"Create an image from a container with a default image tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman commit containerID\ne3ce4d93051ceea088d1c242624d659be32cf1667ef62f1d16d6b60193e2c7a8\n")),(0,r.kt)("p",null,"Create an image from container with default required capabilities are SETUID and SETGID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman commit -q --change LABEL=io.containers.capabilities=setuid,setgid epic_nobel privimage\n400d31a3f36dca751435e80a0e16da4859beb51ff84670ce6bdc5edb30b94066\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-run"},"podman-run(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-create"},"podman-create(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"December 2017, Originally compiled by Urvashi Mohnani ",(0,r.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")))}d.isMDXComponent=!0}}]);