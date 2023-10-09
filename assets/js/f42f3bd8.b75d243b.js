"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[35638],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,u=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"Podman in HPC environments",layout:"default",author:"adrianr",categories:["blogs"],tags:["podman","containers","hpc"]},o=void 0,p={permalink:"/blog/2019/09/26/podman-in-hpc",source:"@site/blog/2019-09-26-podman-in-hpc.md",title:"Podman in HPC environments",description:"podman logo",date:"2019-09-26T00:00:00.000Z",formattedDate:"September 26, 2019",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"hpc",permalink:"/blog/tags/hpc"}],readingTime:4.51,hasTruncateMarker:!0,authors:[{name:"adrianr"}],frontMatter:{title:"Podman in HPC environments",layout:"default",author:"adrianr",categories:["blogs"],tags:["podman","containers","hpc"]},prevItem:{title:"Configuring container networking with Podman",permalink:"/blog/2019/10/02/new"},nextItem:{title:"Podman in HPC environments",permalink:"/blog/2019/09/25/new"}},l={authorsImageUrls:[void 0]},s=[{value:"By Adrian Reber GitHub",id:"by-adrian-reber-github",level:2}],m={toc:s},c="wrapper";function h(e){let{components:n,...i}=e;return(0,r.kt)(c,(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-in-hpc-environments"},"Podman in HPC environments"),(0,r.kt)("h2",{id:"by-adrian-reber-github"},"By Adrian Reber ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/adrianreber"},"GitHub")),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"High-Performance Computing")," (",(0,r.kt)("strong",{parentName:"p"},"HPC"),") environment can mean a lot of things,\nbut in this article I want to focus on running ",(0,r.kt)("em",{parentName:"p"},"Message Passing Interface"),"\n(",(0,r.kt)("strong",{parentName:"p"},"MPI"),") parallelized programs with the help of Podman."),(0,r.kt)("p",null,"The following is a simple MPI based example taken from Open MPI: ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/open-mpi/ompi/master/orte/test/mpi/ring.c"},"ring.c")),(0,r.kt)("p",null,"To use it on a Fedora 30 system I first installed Open MPI and then I compiled\nthe example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ sudo dnf install openmpi-devel\n$ module load mpi/openmpi-x86_64\n$ echo "module load mpi/openmpi-x86_64" >> .bashrc\n$ mpicc -o ring ring.c\n')),(0,r.kt)("p",null,"Running this on my test system (Fedora 30) with 4 CPUs gives me this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mpirun ./ring\nRank 3 has cleared MPI_Init\nRank 1 has cleared MPI_Init\nRank 2 has cleared MPI_Init\nRank 0 has cleared MPI_Init\nRank 1 has completed ring\nRank 2 has completed ring\nRank 3 has completed ring\nRank 0 has completed ring\nRank 3 has completed MPI_Barrier\nRank 1 has completed MPI_Barrier\nRank 0 has completed MPI_Barrier\nRank 2 has completed MPI_Barrier\n")),(0,r.kt)("p",null,"To be able to use Podman in combination with mpirun I created a container with\nthe following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat Dockerfile\nFROM registry.fedoraproject.org/fedora:30\n\nRUN dnf -y install openmpi && \\\n    dnf clean all\n\nCOPY ring /home/ring\n")),(0,r.kt)("p",null,"After building the container (",(0,r.kt)("inlineCode",{parentName:"p"},"podman build --tag=mpi-test:31 ."),") I pushed the\ncontainer to the ",(0,r.kt)("a",{parentName:"p",href:"https://quay.io"},"quay.io")," container registry (",(0,r.kt)("inlineCode",{parentName:"p"},"podman push\nmpi-test:31 quay.io/adrianreber/mpi-test:31"),") and can now pull it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ podman pull quay.io/adrianreber/mpi-test:30\n")),(0,r.kt)("p",null,"And then I can run mpirun to start multiple containers. In my case 4 containers\nare started as each of the two involved systems has 2 CPUs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mpirun --hostfile hostfile \\\n   --mca orte_tmpdir_base /tmp/podman-mpirun \\\n   podman run --env-host \\\n     -v /tmp/podman-mpirun:/tmp/podman-mpirun \\\n     --userns=keep-id \\\n     --net=host --pid=host --ipc=host \\\n     quay.io/adrianreber/mpi-test:30 /home/ring\nRank 2 has cleared MPI_Init\nRank 2 has completed ring\nRank 2 has completed MPI_Barrier\nRank 3 has cleared MPI_Init\nRank 3 has completed ring\nRank 3 has completed MPI_Barrier\nRank 1 has cleared MPI_Init\nRank 1 has completed ring\nRank 1 has completed MPI_Barrier\nRank 0 has cleared MPI_Init\nRank 0 has completed ring\nRank 0 has completed MPI_Barrier\n")),(0,r.kt)("p",null,"Now mpirun starts up 4 Podman containers and each container is running one\ninstance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ring"),". All 4 processes are communicating over MPI with each other."),(0,r.kt)("p",null,"The following mpirun options are used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--hostfile hostfile")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hostfile")," tells Open MPI on which systems to run how many processes.\nIn the case of this example it contained:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"host1 slots=2"),(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("inlineCode",{parentName:"p"},"host2 slots=2")),(0,r.kt)("p",{parentName:"li"},"This means to run two processes on ",(0,r.kt)("inlineCode",{parentName:"p"},"host1")," and two processes on ",(0,r.kt)("inlineCode",{parentName:"p"},"host2"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--mca orte_tmpdir_base /tmp/podman-mpirun")),(0,r.kt)("p",{parentName:"li"},"This tells Open MPI to create all its temporary files in ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/podman-mpirun"),"\nand not in ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp"),". If this is not specified Open MPI will create its temporary\nfiles in a directory with a host name in it in ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," and if using more than one\nnode this directory will be named differently on other nodes. This requires\nmounting the complete ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," directory into the container which is a bit more\ncomplicated due to not being able to change SELinux labels of ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp"),"."))),(0,r.kt)("p",null,"This is it for all the necessary parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"mpirun"),", now the command is\nspecified that ",(0,r.kt)("inlineCode",{parentName:"p"},"mpirun")," should start; ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," in this case."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"run")),(0,r.kt)("p",{parentName:"li"},"This just tells Podman to run a container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--env-host")),(0,r.kt)("p",{parentName:"li"},"This copies all environment variables from the host into the container. This\nis necessary to make Open MPI work at all. When ",(0,r.kt)("inlineCode",{parentName:"p"},"mpirun")," is started it creates a\ndaemon with which all other processes in this MPI job are communicating, it\nalso tells all the MPI processes how to communicate with each other. All this\nis passed from ",(0,r.kt)("inlineCode",{parentName:"p"},"mpirun")," to the actual MPI processes using environment variables."),(0,r.kt)("p",{parentName:"li"},"Options passed from the user to ",(0,r.kt)("inlineCode",{parentName:"p"},"mpirun")," are also communicated through\nenvironment variables. Now that the MPI process in the container has all the\nenvironment variables it can communicate with the main process (",(0,r.kt)("em",{parentName:"p"},"Head Node\nProcess")," (",(0,r.kt)("strong",{parentName:"p"},"HNP"),")) and all the other involved processes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-v /tmp/podman-mpirun:/tmp/podman-mpirun")),(0,r.kt)("p",{parentName:"li"},"This tells Podman to mount the directory where Open MPI creates its temporary\ndirectories and files to be available in the container. Through the environment\nvariables from above the MPI process knows where to look for this directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--userns=keep-id")),(0,r.kt)("p",{parentName:"li"},"The user ID in the container should be mapped to the same ID on the outside of\nthe container. This is necessary as all processes are communicating with each\nother over shared memory and this fails if the processes have different user\nIDs. Also the access of the temporary files in ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/podman-mpirun")," breaks\nwithout this.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--net=host --pid=host --ipc=host")),(0,r.kt)("p",{parentName:"li"},"Do not use separate namespace for ",(0,r.kt)("em",{parentName:"p"},"network"),", ",(0,r.kt)("em",{parentName:"p"},"PID")," and ",(0,r.kt)("em",{parentName:"p"},"IPC"),". Without this nothing\nworks, as all processes are also communicating via TCP on ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," which fails\nwith separate network namespaces. Shared memory communication will also not work\nif the processes are not in the same ",(0,r.kt)("em",{parentName:"p"},"PID")," and ",(0,r.kt)("em",{parentName:"p"},"IPC")," namespace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"quay.io/adrianreber/mpi-testmpi-test:30")),(0,r.kt)("p",{parentName:"li"},"This is the name of the container as downloaded previously with ",(0,r.kt)("inlineCode",{parentName:"p"},"podman pull"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"mpirun")," will spawn processes on a host which has not yet downloaded\nthis container image, Podman will do it before launching this container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/home/ring")),(0,r.kt)("p",{parentName:"li"},"The MPI program in the container which should be started."))),(0,r.kt)("p",null,"Thanks to Podman's fork-exec model it is really simple to use it in combination\nwith Open MPI as Open MPI will start Podman just as it would start the actual\nMPI application."))}h.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);