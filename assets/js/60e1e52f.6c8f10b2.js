"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[98437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,b=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Build Podman RPMs with a container image",layout:"default",author:"baude",categories:["blogs"],tags:["podman","containers"]},i=void 0,l={permalink:"/blog/2018/11/19/build_libpod-container-images",source:"@site/blog/2018-11-19-build_libpod-container-images.md",title:"Build Podman RPMs with a container image",description:"podman logo",date:"2018-11-19T00:00:00.000Z",formattedDate:"November 19, 2018",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"}],readingTime:2.395,hasTruncateMarker:!0,authors:[{name:"baude"}],frontMatter:{title:"Build Podman RPMs with a container image",layout:"default",author:"baude",categories:["blogs"],tags:["podman","containers"]},prevItem:{title:"Podman container|image exists",permalink:"/blog/2018/11/27/podman-exists"},nextItem:{title:"The State of Container Technologies in the Operating System",permalink:"/blog/2018/11/01/talk-state_of_container_technologies"}},d={authorsImageUrls:[void 0]},s=[{value:"By Brent Baude GitHub",id:"by-brent-baude-github",level:2},{value:"A bit about the images themselves",id:"a-bit-about-the-images-themselves",level:4},{value:"Create the temporary directory",id:"create-the-temporary-directory",level:3},{value:"Build the RPMs",id:"build-the-rpms",level:3},{value:"Future",id:"future",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"build-podman-rpms-with-a-container-image"},"Build Podman RPMs with a container image"),(0,r.kt)("h2",{id:"by-brent-baude-github"},"By Brent Baude ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/baude"},"GitHub")),(0,r.kt)("p",null,"Libpod development is still very much active and on-going. We often have folks who are looking\nto test out the latest libpod and Podman for either new features or bug fixes. We typically\nbuild RPMs for distributions like Fedora on a release cadence, which used to be weekly but now\nhas slowed down as libpod has stabilized. Building libpod from source is not difficult, but\nsometimes the user's environment will not allow them to install all the packages needed; or\nperhaps the user is intimidated by building from source; or perhaps the user would prefer\nthe RPM package because it will make the upgrade process easier down the road."),(0,r.kt)("p",null,"To solve this problem, I have created a series of container images for CentOS7, Fedora 28, and Fedora 29 that are capable of building a development Podman RPM and associated packages."),(0,r.kt)("h4",{id:"a-bit-about-the-images-themselves"},"A bit about the images themselves"),(0,r.kt)("p",null,"The image that can used to build the RPMs is called ",(0,r.kt)("em",{parentName:"p"},"quay.io/libpod/build_libpod"),". You simply\nalter the tag to build for the various distributions. The ",(0,r.kt)("em",{parentName:"p"},"latest")," tag will build CentOS7\nRPMs. Two other tags exist: ",(0,r.kt)("em",{parentName:"p"},"fedora28")," and ",(0,r.kt)("em",{parentName:"p"},"fedora29"),"."),(0,r.kt)("h3",{id:"create-the-temporary-directory"},"Create the temporary directory"),(0,r.kt)("p",null,"Create a directory for where the RPMs will be volume mounted. It ",(0,r.kt)("strong",{parentName:"p"},"must")," be ",(0,r.kt)("em",{parentName:"p"},"/tmp/rpms"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mkdir /tmp/rpms\n")),(0,r.kt)("h3",{id:"build-the-rpms"},"Build the RPMs"),(0,r.kt)("p",null,"Building the RPMs is a simple Podman command that leverages the ",(0,r.kt)("inlineCode",{parentName:"p"},"container runlabel")," function in Podman. Once the image is pulled by Podman, it will install the required packages for building the RPMs. After the build is complete, the container will also test to make sure the RPMs install correctly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo podman container runlabel -p run quay.io/libpod/build_libpod:fedora29\nTrying to pull quay.io/libpod/build_libpod:fedora29...Getting image source signatures\nSkipping fetch of repeat blob sha256:7692efc5f81cadc73ca1afde08b1a5ea126749fd7520537ceea1a9871329efde\nCopying blob sha256:af79f3045c1f7e253b5952752ae4ecabb15f5ee1e2c7e4148132ed37ea7e0091\n 24.70 MB / 24.70 MB [======================================================] 2s\nCopying blob sha256:ff2caf91b3889620d64f6fa5529531c3fed78222ce33a89ac85318e410d302fb\n 206 B / 206 B [============================================================] 0s\nCopying blob sha256:dd6fe2d1ef4e4ca5252881a6ab2db0eecc1166486af08384eab121512fd8e1dd\n 253 B / 253 B [============================================================] 0s\nCopying blob sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4\n 32 B / 32 B [==============================================================] 0s\nSkipping fetch of repeat blob sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4\nWriting manifest to image destination\nStoring signatures\nCommand: /proc/self/exe run -it --rm --net=host -v /tmp/rpms:/root/rpmbuild/RPMS/x86_64/:Z quay.io/libpod/build_libpod:fedora29\nCloning into '/go/src/github.com/containers/libpod'...\nwarning: redirecting to https://github.com/containers/podman/\nremote: Enumerating objects: 34, done.\nremote: Counting objects: 100% (34/34), done.\nremote: Compressing objects: 100% (31/31), done.\nremote: Total 23112 (delta 12), reused 12 (delta 3), pack-reused 23078\nReceiving objects: 100% (23112/23112), 15.96 MiB | 10.16 MiB/s, done.\nResolving deltas: 100% (13753/13753), done.\n/go/src/github.com/containers/libpod\n++ command -v dnf\n+ pkg_manager=/usr/bin/dnf\n\n... ** SHORTENED FOR BREVITY ***\n\nInstalled:\n  python3-podman-0.11.2-1542207420.git2b911b0c.fc29.noarch            python3-pypodman-0.11.2-1542207420.git2b911b0c.fc29.noarch\n  python3-dateutil-1:2.7.0-3.fc29.noarch                              python3-humanize-0.5.1-14.fc29.noarch\n  python3-psutil-5.4.3-6.fc29.x86_64\n\nComplete!\n")),(0,r.kt)("p",null,"The resulting RPMs will end up in your temporary directory of ",(0,r.kt)("em",{parentName:"p"},"/tmp/rpms"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ find /tmp/rpms/\n/tmp/rpms/\n/tmp/rpms/noarch\n/tmp/rpms/noarch/python3-pypodman-0.11.2-1542210510.git2b911b0c.fc29.noarch.rpm\n/tmp/rpms/noarch/python3-podman-0.11.2-1542210510.git2b911b0c.fc29.noarch.rpm\n/tmp/rpms/x86_64\n/tmp/rpms/x86_64/podman-debuginfo-0.11.2-1542210510.git2b911b0c.fc29.x86_64.rpm\n/tmp/rpms/x86_64/podman-debugsource-0.11.2-1542210510.git2b911b0c.fc29.x86_64.rpm\n/tmp/rpms/x86_64/podman-0.11.2-1542210510.git2b911b0c.fc29.x86_64.rpm\n")),(0,r.kt)("h3",{id:"future"},"Future"),(0,r.kt)("p",null,"If folks like this, I'll consider adding the ability to pass in a specific git commit to build."))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);