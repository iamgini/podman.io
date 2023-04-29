"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7741],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(t),c=o,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},s=void 0,i={unversionedId:"podman-login",id:"podman-login",title:"podman-login",description:"% podman-login 1",source:"@site/docs/podman-login.md",sourceDirName:".",slug:"/podman-login",permalink:"/websites-new/docs/podman-login",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-login.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-load",permalink:"/websites-new/docs/podman-load"},next:{title:"podman-logout",permalink:"/websites-new/docs/podman-logout"}},p={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--get-login</strong>",id:"--get-login",level:4},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"<strong>--password</strong>, <strong>-p</strong>=<em>password</em>",id:"--password--ppassword",level:4},{value:"<strong>--password-stdin</strong>",id:"--password-stdin",level:4},{value:"<strong>--username</strong>, <strong>-u</strong>=<em>username</em>",id:"--username--uusername",level:4},{value:"<strong>--verbose</strong>, <strong>-v</strong>",id:"--verbose--v",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],d={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-login 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","login - Login to a container registry"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman login")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"][*registry*]"),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman login")," logs into a specified registry server with the correct username\nand password. If the registry is not specified, the first registry under ","[registries.search]","\nfrom registries.conf will be used. ",(0,o.kt)("strong",{parentName:"p"},"podman login")," reads in the username and password from STDIN.\nThe username and password can also be set using the ",(0,o.kt)("strong",{parentName:"p"},"username")," and ",(0,o.kt)("strong",{parentName:"p"},"password")," flags.\nThe path of the authentication file can be specified by the user by setting the ",(0,o.kt)("strong",{parentName:"p"},"authfile"),"\nflag. The default path for reading and writing credentials is ",(0,o.kt)("strong",{parentName:"p"},"${XDG_RUNTIME_DIR}/containers/auth.json"),".\nPodman will use existing credentials if the user does not pass in a username.\nPodman will first search for the username and password in the ",(0,o.kt)("strong",{parentName:"p"},"${XDG_RUNTIME_DIR}/containers/auth.json"),", if they are not valid,\nPodman will then use any existing credentials found in ",(0,o.kt)("strong",{parentName:"p"},"$HOME/.docker/config.json"),".\nIf those credentials are not present, Podman will create ",(0,o.kt)("strong",{parentName:"p"},"${XDG_RUNTIME_DIR}/containers/auth.json")," (if the file does not exist) and\nwill then store the username and password from STDIN as a base64 encoded string in it.\nFor more details about format and configurations of the auth.json file, please refer to containers-auth.json(5)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman ","[GLOBAL OPTIONS]")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman login ","[GLOBAL OPTIONS]")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman login ","[OPTIONS][REGISTRY]"," ","[GLOBAL OPTIONS]")),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("p",null,"@@option authfile"),(0,o.kt)("p",null,"@@option cert-dir"),(0,o.kt)("h4",{id:"--get-login"},(0,o.kt)("strong",{parentName:"h4"},"--get-login")),(0,o.kt)("p",null,"Return the logged-in user for the registry. Return error if no login is found."),(0,o.kt)("h4",{id:"--help--h"},(0,o.kt)("strong",{parentName:"h4"},"--help"),", ",(0,o.kt)("strong",{parentName:"h4"},"-h")),(0,o.kt)("p",null,"Print usage statement"),(0,o.kt)("h4",{id:"--password--ppassword"},(0,o.kt)("strong",{parentName:"h4"},"--password"),", ",(0,o.kt)("strong",{parentName:"h4"},"-p"),"=",(0,o.kt)("em",{parentName:"h4"},"password")),(0,o.kt)("p",null,"Password for registry"),(0,o.kt)("h4",{id:"--password-stdin"},(0,o.kt)("strong",{parentName:"h4"},"--password-stdin")),(0,o.kt)("p",null,"Take the password from stdin"),(0,o.kt)("p",null,"@@option tls-verify"),(0,o.kt)("h4",{id:"--username--uusername"},(0,o.kt)("strong",{parentName:"h4"},"--username"),", ",(0,o.kt)("strong",{parentName:"h4"},"-u"),"=",(0,o.kt)("em",{parentName:"h4"},"username")),(0,o.kt)("p",null,"Username for registry"),(0,o.kt)("h4",{id:"--verbose--v"},(0,o.kt)("strong",{parentName:"h4"},"--verbose"),", ",(0,o.kt)("strong",{parentName:"h4"},"-v")),(0,o.kt)("p",null,"print detailed information about credential store"),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman login docker.io\nUsername: umohnani\nPassword:\nLogin Succeeded!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman login -u testuser -p testpassword localhost:5000\nLogin Succeeded!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman login --authfile authdir/myauths.json docker.io\nUsername: umohnani\nPassword:\nLogin Succeeded!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman login --tls-verify=false -u test -p test localhost:5000\nLogin Succeeded!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman login --cert-dir /etc/containers/certs.d/ -u foo -p bar localhost:5000\nLogin Succeeded!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman login -u testuser  --password-stdin < testpassword.txt docker.io\nLogin Succeeded!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ echo $testpassword | podman login -u testuser --password-stdin docker.io\nLogin Succeeded!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman login quay.io --verbose\nUsername: myusername\nPassword:\nUsed: /run/user/1000/containers/auth.json\nLogin Succeeded!\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-logout"},"podman-logout(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-auth.json.5.md"},"containers-auth.json(5)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-certs.d.5.md"},"containers-certs.d(5)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md"},"containers-registries.conf(5)"))),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"August 2017, Originally compiled by Urvashi Mohnani ",(0,o.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")))}u.isMDXComponent=!0}}]);