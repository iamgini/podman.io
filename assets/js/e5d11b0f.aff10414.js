"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[8272],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={},i=void 0,p={unversionedId:"podman-kube/podman-kube-generate",id:"podman-kube/podman-kube-generate",title:"podman-kube-generate",description:"-% podman-kube-generate(1)",source:"@site/docs/podman-kube/podman-kube-generate.md",sourceDirName:"podman-kube",slug:"/podman-kube/podman-kube-generate",permalink:"/websites-new/docs/podman-kube/podman-kube-generate",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-kube/podman-kube-generate.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-kube-down",permalink:"/websites-new/docs/podman-kube/podman-kube-down"},next:{title:"podman-kube-play",permalink:"/websites-new/docs/podman-kube/podman-kube-play"}},s={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--filename</strong>, <strong>-f</strong>=<em>filename</em>",id:"--filename--ffilename",level:4},{value:"<strong>--replicas</strong>, <strong>-r</strong>=<em>replica count</em>",id:"--replicas--rreplica-count",level:4},{value:"<strong>--service</strong>, <strong>-s</strong>",id:"--service--s",level:4},{value:"<strong>--type</strong>, <strong>-t</strong>=<em>pod | deployment</em>",id:"--type--tpod--deployment",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:l},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"-% podman-kube-generate(1)"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman-kube-generate - Generate Kubernetes YAML based on containers, pods or volumes"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman kube generate")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"container...")," | ",(0,o.kt)("em",{parentName:"p"},"pod...")," | ",(0,o.kt)("em",{parentName:"p"},"volume...")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman kube generate")," will generate Kubernetes YAML (v1 specification) from Podman containers, pods or volumes. Regardless of whether\nthe input is for containers or pods, Podman will generate the specification as a Pod by default. The input may be in the form\nof one or more containers, pods or volumes names or IDs."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Podman Containers or Pods")),(0,o.kt)("p",null,"Volumes appear in the generated YAML according to two different volume types. Bind-mounted volumes become ",(0,o.kt)("em",{parentName:"p"},"hostPath")," volume types and named volumes become ",(0,o.kt)("em",{parentName:"p"},"persistentVolumeClaim")," volume types. Generated ",(0,o.kt)("em",{parentName:"p"},"hostPath")," volume types will be one of three subtypes depending on the state of the host path: ",(0,o.kt)("em",{parentName:"p"},"DirectoryOrCreate")," when no file or directory exists at the host, ",(0,o.kt)("em",{parentName:"p"},"Directory")," when host path is a directory, or ",(0,o.kt)("em",{parentName:"p"},"File")," when host path is a file. The value for ",(0,o.kt)("em",{parentName:"p"},"claimName")," for a ",(0,o.kt)("em",{parentName:"p"},"persistentVolumeClaim")," is the name of the named volume registered in Podman."),(0,o.kt)("p",null,"Potential name conflicts between volumes are avoided by using a standard naming scheme for each volume type. The ",(0,o.kt)("em",{parentName:"p"},"hostPath")," volume types are named according to the path on the host machine, replacing forward slashes with hyphens less any leading and trailing forward slashes. The special case of the filesystem root, ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", translates to the name ",(0,o.kt)("inlineCode",{parentName:"p"},"root"),". Additionally, the name is suffixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"-host")," to avoid naming conflicts with ",(0,o.kt)("em",{parentName:"p"},"persistentVolumeClaim")," volumes. Each ",(0,o.kt)("em",{parentName:"p"},"persistentVolumeClaim")," volume type uses the name of its associated named volume suffixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"-pvc"),"."),(0,o.kt)("p",null,"Note that if an init container is created with type ",(0,o.kt)("inlineCode",{parentName:"p"},"once")," and the pod has been started, the init container will not show up in the generated kube YAML as ",(0,o.kt)("inlineCode",{parentName:"p"},"once")," type init containers are deleted after they are run. If the pod has only been created and not started, it will be in the generated kube YAML.\nInit containers created with type ",(0,o.kt)("inlineCode",{parentName:"p"},"always")," will always be generated in the kube YAML as they are never deleted, even after running to completion."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note"),": When using volumes and generating a Kubernetes YAML for an unprivileged and rootless podman container on an ",(0,o.kt)("strong",{parentName:"p"},"SELinux enabled system"),", one of the following options must be completed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Add the "privileged: true" option to the pod spec'),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"type: spc_t")," under the ",(0,o.kt)("inlineCode",{parentName:"li"},"securityContext")," ",(0,o.kt)("inlineCode",{parentName:"li"},"seLinuxOptions")," in the pod spec"),(0,o.kt)("li",{parentName:"ul"},"Relabel the volume via the CLI command ",(0,o.kt)("inlineCode",{parentName:"li"},"chcon -t container_file_t -R <directory>"))),(0,o.kt)("p",null,"Once completed, the correct permissions will be in place to access the volume when the pod/container is created in a Kubernetes cluster."),(0,o.kt)("p",null,"Note that the generated Kubernetes YAML file can be used to re-run the deployment via podman-play-kube(1)."),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("h4",{id:"--filename--ffilename"},(0,o.kt)("strong",{parentName:"h4"},"--filename"),", ",(0,o.kt)("strong",{parentName:"h4"},"-f"),"=",(0,o.kt)("em",{parentName:"h4"},"filename")),(0,o.kt)("p",null,"Output to the given file, instead of STDOUT. If the file already exists, ",(0,o.kt)("inlineCode",{parentName:"p"},"kube generate")," will refuse to replace it and return an error."),(0,o.kt)("h4",{id:"--replicas--rreplica-count"},(0,o.kt)("strong",{parentName:"h4"},"--replicas"),", ",(0,o.kt)("strong",{parentName:"h4"},"-r"),"=",(0,o.kt)("em",{parentName:"h4"},"replica count")),(0,o.kt)("p",null,"The value to set ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," to when generating a ",(0,o.kt)("strong",{parentName:"p"},"Deployment")," kind.\nNote: this can only be set with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--type=deployment"),"."),(0,o.kt)("h4",{id:"--service--s"},(0,o.kt)("strong",{parentName:"h4"},"--service"),", ",(0,o.kt)("strong",{parentName:"h4"},"-s")),(0,o.kt)("p",null,"Generate a Kubernetes service object in addition to the Pods. Used to generate a Service specification for the corresponding Pod output. In particular, if the object has portmap bindings, the service specification will include a NodePort declaration to expose the service. A random port is assigned by Podman in the specification."),(0,o.kt)("h4",{id:"--type--tpod--deployment"},(0,o.kt)("strong",{parentName:"h4"},"--type"),", ",(0,o.kt)("strong",{parentName:"h4"},"-t"),"=",(0,o.kt)("em",{parentName:"h4"},"pod | deployment")),(0,o.kt)("p",null,"The Kubernetes kind to generate in the YAML file. Currently, the only supported Kubernetes specifications are ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment"),". By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod")," specification will be generated."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("p",null,"Create Kubernetes Pod YAML for a container called ",(0,o.kt)("inlineCode",{parentName:"p"},"some-mariadb"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ sudo podman kube generate some-mariadb\n# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-01.2-dev\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: 2018-12-03T19:07:59Z\n  labels:\n    app: some-mariadb\n  name: some-mariadb-libpod\nspec:\n  containers:\n  - command:\n    - docker-entrypoint.sh\n    - mysqld\n    env:\n    - name: HOSTNAME\n    - name: GOSU_VERSION\n      value: "10"\n    - name: GPG_KEYS\n      value: "199369E5404BD5FC7D2FE43BCBCB082A1BB943DB \\t177F4010FE56CA3336300305F1656F24C74CD1D8\n        \\t430BDF5C56E7C94E848EE60C1C4CBDCDCD2EFD2A \\t4D1BB29D63D98E422B2113B19334A25F8507EFA5"\n    - name: MARIADB_MAJOR\n      value: "10.3"\n    - name: MARIADB_VERSION\n      value: 1:10.30+maria~bionic\n    - name: MYSQL_ROOT_PASSWORD\n      value: x\n    image: quay.io/baude/demodb:latest\n    name: some-mariadb\n    ports:\n    - containerPort: 3306\n      hostPort: 36533\n    tty: true\n')),(0,o.kt)("p",null,"Create Kubernetes Deployment YAML with 3 replicas for a container called ",(0,o.kt)("inlineCode",{parentName:"p"},"dep-ctr")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ podman kube generate --type deployment --replicas 3 dep-ct\nr\n# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-4.5.0-dev\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  creationTimestamp: "2023-03-27T20:45:08Z"\n  labels:\n    app: dep-ctr-pod\n  name: dep-ctr-pod-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: dep-ctr-pod\n  template:\n    metadata:\n      annotations:\n        io.podman.annotations.ulimit: nofile=524288:524288,nproc=127332:127332\n      creationTimestamp: "2023-03-27T20:45:08Z"\n      labels:\n        app: dep-ctr-pod\n      name: dep-ctr-pod\n    spec:\n      containers:\n      - command:\n        - top\n        image: docker.io/library/alpine:latest\n        name: dep-ctr\n')),(0,o.kt)("p",null,"Create Kubernetes Pod YAML for a container with the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/user/my-data")," on the host bind-mounted in the container to ",(0,o.kt)("inlineCode",{parentName:"p"},"/volume"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ podman kube generate my-container-with-bind-mounted-data\n# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-3.0-dev\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: "2021-03-18T16:26:08Z"\n  labels:\n    app: my-container-with-bind-mounted-data\n  name: my-container-with-bind-mounted-data\nspec:\n  containers:\n  - command:\n    - /bin/sh\n    image: docker.io/library/alpine:latest\n    name: test-bind-mount\n    volumeMounts:\n    - mountPath: /volume\n      name: home-user-my-data-host\n  restartPolicy: Never\n  volumes:\n  - hostPath:\n      path: /home/user/my-data\n      type: Directory\n    name: home-user-my-data-host\n')),(0,o.kt)("p",null,"Create Kubernetes Pod YAML for a container with the named volume ",(0,o.kt)("inlineCode",{parentName:"p"},"priceless-data")," mounted in the container at ",(0,o.kt)("inlineCode",{parentName:"p"},"/volume"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ podman kube generate my-container-using-priceless-data\n# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-3.0-dev\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: "2021-03-18T16:26:08Z"\n  labels:\n    app: my-container-using-priceless-data\n  name: my-container-using-priceless-data\nspec:\n  containers:\n  - command:\n    - /bin/sh\n    image: docker.io/library/alpine:latest\n    name: test-bind-mount\n    volumeMounts:\n    - mountPath: /volume\n      name: priceless-data-pvc\n  restartPolicy: Never\n  volumes:\n  - name: priceless-data-pvc\n    persistentVolumeClaim:\n      claimName: priceless-data\n')),(0,o.kt)("p",null,"Create Kubernetes Pod YAML for a pod called ",(0,o.kt)("inlineCode",{parentName:"p"},"demoweb")," and include a service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ sudo podman kube generate -s demoweb\n# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-02.2-dev\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: 2018-12-18T15:16:06Z\n  labels:\n    app: demoweb\n  name: demoweb-libpod\nspec:\n  containers:\n  - command:\n    - python3\n    - /root/code/graph.py\n    image: quay.io/baude/demoweb:latest\n    name: practicalarchimedes\n    tty: true\n    workingDir: /root/code\n---\napiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: 2018-12-18T15:16:06Z\n  labels:\n    app: demoweb\n  name: demoweb-libpod\nspec:\n  ports:\n  - name: "8050"\n    nodePort: 31269\n    port: 8050\n    targetPort: 0\n  selector:\n    app: demoweb\n  type: NodePort\nstatus:\n  loadBalancer: {}\n')),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-container/"},"podman-container(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-pod/"},"podman-pod(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-kube/podman-kube-play"},"podman-kube-play(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-kube/podman-kube-down"},"podman-kube-down(1)"))),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"December 2018, Originally compiled by Brent Baude (bbaude at redhat dot com)"))}c.isMDXComponent=!0}}]);