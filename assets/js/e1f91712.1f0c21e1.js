"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[9335],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i=void 0,l={unversionedId:"podman-container/podman-container-inspect",id:"podman-container/podman-container-inspect",title:"podman-container-inspect",description:"% podman-container-inspect 1",source:"@site/docs/podman-container/podman-container-inspect.md",sourceDirName:"podman-container",slug:"/podman-container/podman-container-inspect",permalink:"/website-new/docs/podman-container/podman-container-inspect",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-container/podman-container-inspect.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-container-exists",permalink:"/website-new/docs/podman-container/podman-container-exists"},next:{title:"podman-container-prune",permalink:"/website-new/docs/podman-container/podman-container-prune"}},s={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--format</strong>, <strong>-f</strong>=<em>format</em>",id:"--format--fformat",level:4},{value:"<strong>--size</strong>, <strong>-s</strong>",id:"--size--s",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],d={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-container-inspect 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","container","-","inspect - Display a container's configuration"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container inspect")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"container")," ","[",(0,r.kt)("em",{parentName:"p"},"container")," ...]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"This displays the low-level information on containers identified by name or ID. By default, this will render\nall results in a JSON array. If a format is specified, the given template will be executed for each result."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--format--fformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Format the output using the given Go template.\nThe keys of the returned JSON can be used as the values for the --format flag (see examples below)."),(0,r.kt)("p",null,"Valid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".AppArmorProfile"),(0,r.kt)("td",{parentName:"tr",align:null},"AppArmor profile (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Args"),(0,r.kt)("td",{parentName:"tr",align:null},"Command-line arguments (array of strings)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BoundingCaps"),(0,r.kt)("td",{parentName:"tr",align:null},"Bounding capability set (array of strings)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Config ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Structure with config info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ConmonPidFile"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to file containing conmon pid (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Container creation time (string, ISO3601)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Dependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"Dependencies (array of strings)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"Storage driver (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".EffectiveCaps"),(0,r.kt)("td",{parentName:"tr",align:null},"Effective capability set (array of strings)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ExecIDs"),(0,r.kt)("td",{parentName:"tr",align:null},"Exec IDs (array of strings)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".GraphDriver ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Further details of graph driver (struct)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".HostConfig ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Host config details (struct)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".HostnamePath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to file containing hostname (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".HostsPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to container /etc/hosts file (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Container ID (full 64-char hash)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Container image ID (64-char hash)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ImageDigest"),(0,r.kt)("td",{parentName:"tr",align:null},"Container image digest (sha256:+64-char hash)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ImageName"),(0,r.kt)("td",{parentName:"tr",align:null},"Container image name (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IsInfra"),(0,r.kt)("td",{parentName:"tr",align:null},"Is this an infra container? (string: true/false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IsService"),(0,r.kt)("td",{parentName:"tr",align:null},"Is this a service container? (string: true/false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MountLabel"),(0,r.kt)("td",{parentName:"tr",align:null},"SELinux label of mount (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Mounts"),(0,r.kt)("td",{parentName:"tr",align:null},"Mounts (array of strings)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Container name (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Container namespace (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NetworkSettings ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Network settings (struct)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".OCIConfigPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to OCI config file (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".OCIRuntime"),(0,r.kt)("td",{parentName:"tr",align:null},"OCI runtime name (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Path"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to container command (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PidFile"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to file containing container PID (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Pod"),(0,r.kt)("td",{parentName:"tr",align:null},"Parent pod (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ProcessLabel"),(0,r.kt)("td",{parentName:"tr",align:null},"SELinux label of process (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ResolvConfPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to container's resolv.conf file (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".RestartCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of times container has been restarted (int)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Rootfs"),(0,r.kt)("td",{parentName:"tr",align:null},"Container rootfs (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SizeRootFs"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of rootfs, in bytes ","[1]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SizeRw"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of upper (R/W) container layer, in bytes ","[1]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".State ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Container state info (struct)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".StaticDir"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to container metadata dir (string)")))),(0,r.kt)("p",null,"[1]"," This format specifier requires the ",(0,r.kt)("strong",{parentName:"p"},"--size")," option"),(0,r.kt)("p",null,"@@option latest"),(0,r.kt)("h4",{id:"--size--s"},(0,r.kt)("strong",{parentName:"h4"},"--size"),", ",(0,r.kt)("strong",{parentName:"h4"},"-s")),(0,r.kt)("p",null,"In addition to normal output, display the total file size if the type is a container."),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman container inspect foobar\n[\n    {\n        "Id": "99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6",\n        "Created": "2021-09-16T06:09:08.936623325-04:00",\n        "Path": "echo",\n        "Args": [\n            "hi"\n        ],\n        "State": {\n            "OciVersion": "1.0.2-dev",\n            "Status": "exited",\n            "Running": false,\n            "Paused": false,\n            "Restarting": false,\n            "OOMKilled": false,\n            "Dead": false,\n            "Pid": 0,\n            "ExitCode": 0,\n            "Error": "",\n            "StartedAt": "2021-09-16T06:09:09.033564436-04:00",\n            "FinishedAt": "2021-09-16T06:09:09.036184314-04:00",\n            "Healthcheck": {\n                "Status": "",\n                "FailingStreak": 0,\n                "Log": null\n            }\n        },\n        "Image": "14119a10abf4669e8cdbdff324a9f9605d99697215a0d21c360fe8dfa8471bab",\n        "ImageName": "docker.io/library/alpine:latest",\n        "Rootfs": "",\n        "Pod": "",\n        "ResolvConfPath": "/run/user/3267/containers/overlay-containers/99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6/userdata/resolv.conf",\n        "HostnamePath": "/run/user/3267/containers/overlay-containers/99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6/userdata/hostname",\n        "HostsPath": "/run/user/3267/containers/overlay-containers/99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6/userdata/hosts",\n        "StaticDir": "/home/dwalsh/.local/share/containers/storage/overlay-containers/99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6/userdata",\n        "OCIConfigPath": "/home/dwalsh/.local/share/containers/storage/overlay-containers/99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6/userdata/config.json",\n        "OCIRuntime": "crun",\n        "ConmonPidFile": "/run/user/3267/containers/overlay-containers/99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6/userdata/conmon.pid",\n        "PidFile": "/run/user/3267/containers/overlay-containers/99f66530fe9c7249f7cf29f78e8661669d5831cbe4ee80ea757d5e922dd6a8a6/userdata/pidfile",\n        "Name": "foobar",\n        "RestartCount": 0,\n        "Driver": "overlay",\n        "MountLabel": "system_u:object_r:container_file_t:s0:c25,c695",\n        "ProcessLabel": "system_u:system_r:container_t:s0:c25,c695",\n        "AppArmorProfile": "",\n        "EffectiveCaps": [\n            "CAP_CHOWN",\n            "CAP_DAC_OVERRIDE",\n            "CAP_FOWNER",\n            "CAP_FSETID",\n            "CAP_KILL",\n            "CAP_NET_BIND_SERVICE",\n            "CAP_SETFCAP",\n            "CAP_SETGID",\n            "CAP_SETPCAP",\n            "CAP_SETUID",\n        ],\n        "BoundingCaps": [\n            "CAP_CHOWN",\n            "CAP_DAC_OVERRIDE",\n            "CAP_FOWNER",\n            "CAP_FSETID",\n            "CAP_KILL",\n            "CAP_NET_BIND_SERVICE",\n            "CAP_SETFCAP",\n            "CAP_SETGID",\n            "CAP_SETPCAP",\n            "CAP_SETUID",\n        ],\n        "ExecIDs": [],\n        "GraphDriver": {\n            "Name": "overlay",\n            "Data": {\n                "LowerDir": "/home/dwalsh/.local/share/containers/storage/overlay/e2eb06d8af8218cfec8210147357a68b7e13f7c485b991c288c2d01dc228bb68/diff",\n                "UpperDir": "/home/dwalsh/.local/share/containers/storage/overlay/8f3d70434a3db17410ec4710caf4f251f3e4ed0a96a08124e4b3d4af0a0ea300/diff",\n                "WorkDir": "/home/dwalsh/.local/share/containers/storage/overlay/8f3d70434a3db17410ec4710caf4f251f3e4ed0a96a08124e4b3d4af0a0ea300/work"\n            }\n        },\n        "Mounts": [],\n        "Dependencies": [],\n        "NetworkSettings": {\n            "EndpointID": "",\n            "Gateway": "",\n            "IPAddress": "",\n            "IPPrefixLen": 0,\n            "IPv6Gateway": "",\n            "GlobalIPv6Address": "",\n            "GlobalIPv6PrefixLen": 0,\n            "MacAddress": "",\n            "Bridge": "",\n            "SandboxID": "",\n            "HairpinMode": false,\n            "LinkLocalIPv6Address": "",\n            "LinkLocalIPv6PrefixLen": 0,\n            "Ports": {},\n            "SandboxKey": ""\n        },\n        "Namespace": "",\n        "IsInfra": false,\n        "Config": {\n            "Hostname": "99f66530fe9c",\n            "Domainname": "",\n            "User": "",\n            "AttachStdin": false,\n            "AttachStdout": false,\n            "AttachStderr": false,\n            "Tty": false,\n            "OpenStdin": false,\n            "StdinOnce": false,\n            "Env": [\n                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",\n                "TERM=xterm",\n                "container=podman",\n                "HOME=/root",\n                "HOSTNAME=99f66530fe9c"\n            ],\n            "Cmd": [\n                "echo",\n                "hi"\n            ],\n            "Image": "docker.io/library/alpine:latest",\n            "Volumes": null,\n            "WorkingDir": "/",\n            "Entrypoint": "",\n            "OnBuild": null,\n            "Labels": null,\n            "Annotations": {\n                "io.container.manager": "libpod",\n                "io.kubernetes.cri-o.Created": "2021-09-16T06:09:08.936623325-04:00",\n                "org.opencontainers.image.stopSignal": "15"\n            },\n            "StopSignal": 15,\n            "CreateCommand": [\n                "podman",\n                "run",\n                "--name",\n                "foobar",\n                "alpine",\n                "echo",\n                "hi"\n            ],\n            "Timezone": "local",\n            "Umask": "0022",\n            "Timeout": 0,\n            "StopTimeout": 10\n        },\n        "HostConfig": {\n            "Binds": [],\n            "CgroupManager": "systemd",\n            "CgroupMode": "private",\n            "ContainerIDFile": "",\n            "LogConfig": {\n                "Type": "journald",\n                "Config": null,\n                "Path": "",\n                "Tag": "",\n                "Size": "0B"\n            },\n            "NetworkMode": "slirp4netns",\n            "PortBindings": {},\n            "RestartPolicy": {\n                "Name": "",\n                "MaximumRetryCount": 0\n            },\n            "AutoRemove": false,\n            "VolumeDriver": "",\n            "VolumesFrom": null,\n            "CapAdd": [],\n            "CapDrop": [],\n            "Dns": [],\n            "DnsOptions": [],\n            "DnsSearch": [],\n            "ExtraHosts": [],\n            "GroupAdd": [],\n            "IpcMode": "shareable",\n            "Cgroup": "",\n            "Cgroups": "default",\n            "Links": null,\n            "OomScoreAdj": 0,\n            "PidMode": "private",\n            "Privileged": false,\n            "PublishAllPorts": false,\n            "ReadonlyRootfs": false,\n            "SecurityOpt": [],\n            "Tmpfs": {},\n            "UTSMode": "private",\n            "UsernsMode": "",\n            "ShmSize": 65536000,\n            "Runtime": "oci",\n            "ConsoleSize": [\n                0,\n                0\n            ],\n            "Isolation": "",\n            "CpuShares": 0,\n            "Memory": 0,\n            "NanoCpus": 0,\n            "CgroupParent": "user.slice",\n            "BlkioWeight": 0,\n            "BlkioWeightDevice": null,\n            "BlkioDeviceReadBps": null,\n            "BlkioDeviceWriteBps": null,\n            "BlkioDeviceReadIOps": null,\n            "BlkioDeviceWriteIOps": null,\n            "CpuPeriod": 0,\n            "CpuQuota": 0,\n            "CpuRealtimePeriod": 0,\n            "CpuRealtimeRuntime": 0,\n            "CpusetCpus": "",\n            "CpusetMems": "",\n            "Devices": [],\n            "DiskQuota": 0,\n            "KernelMemory": 0,\n            "MemoryReservation": 0,\n            "MemorySwap": 0,\n            "MemorySwappiness": 0,\n            "OomKillDisable": false,\n            "PidsLimit": 2048,\n            "Ulimits": [],\n            "CpuCount": 0,\n            "CpuPercent": 0,\n            "IOMaximumIOps": 0,\n            "IOMaximumBandwidth": 0,\n            "CgroupConf": null\n        }\n    }\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman container inspect nervous_fermi --format "{{.ImageName}}"\nregistry.access.redhat.com/ubi8:latest\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman container inspect foobar --format "{{.GraphDriver.Name}}"\noverlay\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman container inspect --latest --format {{.EffectiveCaps}}\n[CAP_CHOWN CAP_DAC_OVERRIDE CAP_FOWNER CAP_FSETID CAP_KILL CAP_NET_BIND_SERVICE CAP_SETFCAP CAP_SETGID CAP_SETPCAP CAP_SETUID]\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-container/"},"podman-container(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-inspect"},"podman-inspect(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"Sep 2021, Originally compiled by Dan Walsh ",(0,r.kt)("a",{parentName:"p",href:"mailto:dwalsh@redhat.com"},"dwalsh@redhat.com")))}c.isMDXComponent=!0}}]);