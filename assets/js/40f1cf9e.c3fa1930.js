"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[18952],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=o,b=d["".concat(m,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},42400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Simplifying Podman commands with labels",layout:"default",author:"baude",categories:["blogs"],tags:["podman","containers"]},i=void 0,l={permalink:"/blog/2018/12/03/podman-runlabel",source:"@site/blog/2018-12-03-podman-runlabel.md",title:"Simplifying Podman commands with labels",description:"podman logo",date:"2018-12-03T00:00:00.000Z",formattedDate:"December 3, 2018",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"}],readingTime:2.015,hasTruncateMarker:!0,authors:[{name:"baude"}],frontMatter:{title:"Simplifying Podman commands with labels",layout:"default",author:"baude",categories:["blogs"],tags:["podman","containers"]},prevItem:{title:"Podman v0.12.1.1 Released",permalink:"/blog/2018/12/12/podman-alpha-v0.12.1.1"},nextItem:{title:"Podman container|image exists",permalink:"/blog/2018/11/27/podman-exists"}},m={authorsImageUrls:[void 0]},s=[{value:"By Brent Baude GitHub",id:"by-brent-baude-github",level:2},{value:"Container image Labels",id:"container-image-labels",level:3},{value:"Podman container runlabel",id:"podman-container-runlabel",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:a(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"simplifying-podman-commands-with-labels"},"Simplifying Podman commands with labels"),(0,o.kt)("h2",{id:"by-brent-baude-github"},"By Brent Baude ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/baude"},"GitHub")),(0,o.kt)("p",null,"Commands used by container runtimes to create containers have become complex. It is on purpose of course. When creating\ncontainers, we want the ability to specify various security or network attributes. But if you are in the unenviable position to have to keystroke in some of these lengthy commands, it can grow tiresome. Defining labels on the container image is a great way to define how the container should be run; however, now with Podman we can read and execute that label saving you potential command line bloat."),(0,o.kt)("h3",{id:"container-image-labels"},"Container image Labels"),(0,o.kt)("p",null,"Container images have had the concept of a label for quite some time. They are often used as identifiers for the image; i.e. version, release, author, etc. But you can create a container label for just about anything. With the Atomic CLI project, we used to leverage labels such as RUN, INSTALL, and UNINSTALL. These labels we defined for the purpose of their verbiage."),(0,o.kt)("h3",{id:"podman-container-runlabel"},"Podman container runlabel"),(0,o.kt)("p",null,"To mimic the Atomic CLI project, we added a sub-command called ",(0,o.kt)("inlineCode",{parentName:"p"},"podman container runlabel"),". This command will execute the contents of a given label as defined by the container image."),(0,o.kt)("p",null,"Lets consider an example. I have a simple container image based on mariab that I use for my Podman development. The image is made like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM docker.io/library/mariadb:latest\nLABEL RUN="podman run --name some-mariadb -P -e MYSQL_ROOT_PASSWORD=x -dt IMAGE"\nRUN echo "bind-address = 0.0.0.0" >> /etc/mysql/my.cnf\n')),(0,o.kt)("p",null,"Note the definition of the RUN label in the image. It contains the complete command line description of how to run it. The use of IMAGE here is a placeholder is automatically substituted by Podman to the real image name. On my system, this image exists as ",(0,o.kt)("inlineCode",{parentName:"p"},"quay.io/baude/demodb:latest"),"."),(0,o.kt)("p",null,"We can get a preview of what Podman would run using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--display")," switch. In the case of my mariab image, a dry-run would show something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo podman container runlabel --display run quay.io/baude/demodb:latest\nCommand: /proc/self/exe run --name some-mariadb -P -e MYSQL_ROOT_PASSWORD=x -dt quay.io/baude/demodb:latest\n")),(0,o.kt)("p",null,"Note how the IMAGE was translated into the image name. If we rerun the previous command and subtract the ",(0,o.kt)("inlineCode",{parentName:"p"},"--display")," option, podman will create the container exactly as described by the run label."),(0,o.kt)("p",null,"So, next time you create your own image, do yourself a favor and construct labels that Podman can read and simplify your life."))}u.isMDXComponent=!0},1382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);