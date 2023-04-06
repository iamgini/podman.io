"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[849],{1320:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(2074),r=a(1743);const o=e=>{let{grid:t,display:a,layout:n,title:o,description:i}=e;return l.createElement("div",{className:`${t} ${a} ${n}`},l.createElement("h1",{className:"mb-6 max-w-sm text-purple-700 dark:text-purple-500 lg:max-w-lg "},o),l.createElement(r.D,{children:i,className:"leading-relaxed"}))},i=e=>{let{grid:t,display:a,layout:n,image:r={path:"images/raw/podman-2-196w-172h.png",alt:"Podman Logo"}}=e;return l.createElement("div",null,l.createElement("img",{src:r.path,alt:r.alt,className:`${t} ${a} ${n}`}))};function s(e){let{title:t,description:a,image:r,lightColor:s="white",darkColor:m="gray-900"}=e;return l.createElement("header",{className:`h-5/6  xl:h-96 bg-${s} dark:bg-${m}`},l.createElement("div",{className:"bg-gradient-to-r from-blue-500 to-blue-700 pt-2 dark:from-blue-700 dark:to-blue-900 lg:pt-8"},l.createElement(n.Z,null)),l.createElement("div",{className:"container grid justify-items-center gap-3 md:grid-cols-2"},l.createElement(o,{title:t,description:a,layout:"mt-12 lg:mt-0"}),l.createElement(i,{image:r,layout:"mb-8 lg:mb-0"})))}},3198:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(1743);function r(e){let{title:t,description:a,textGradientStops:r="from-blue-700 via-blue-700 to-blue-900 dark:from-blue-500  dark:to-blue-700",textGradient:o=!1,textColor:i="text-gray-900",fontWeight:s,layout:m,bgColor:c}=e;const u=o?`bg-gradient-radial bg-clip-text text-transparent dark:bg-gradient-radial dark:text-transparent ${r}`:`${i}`;return l.createElement("header",{className:`${c}  ${m}`},l.createElement("div",{className:"container mx-auto mb-4 mt-12 text-center  lg:mt-16"},l.createElement("h2",{className:`${u} ${s}`},t),l.createElement(n.D,{children:a,className:"mx-auto my-4 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-100"})))}},2074:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);function n(e){let{light:t="fill-white",dark:a="dark:fill-gray-900",width:n="100",height:r="130",grid:o,layout:i}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${o} ${i}`,width:`${n}%`,viewBox:`-8620 -1968 1400 ${r}`},l.createElement("path",{className:`${t} ${a}`,d:"M-8629-1935v-10.614s78.25-20.752 155.47-20.752c131.788 0 169.95 23.309 233.125 23.309 108.108 0 138.56-21.268 208.573-21.268s108.701 25.151 233.283 25.151c124.581 0 120.881-43.085 251.082-22.031 112.227 18.148 187.023 22.031 264.45 7.825 76.957-14.12 79.117 14.113 79.014 18.38l.003 258h-1425v-258Z"}))}},7528:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(1743),r=a(1954);function o(e){let{title:t,description:a,image:o,icon:i,bgColor:s="from-blue-700 via-blue-700 to-blue-900 dark:from-blue-500  dark:to-blue-700",titleColor:m="text-purple-700 dark:text-purple-500",marginHeight:c="mt-8 lg:mt-16"}=e;return l.createElement("section",{className:`${s} ${c} mx-auto w-full`},l.createElement("div",{className:"mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4 py-4 md:py-8 lg:gap-8 xl:max-w-fit"},l.createElement("div",null,i?l.createElement(r.JO,{icon:i,className:"text-4xl text-white dark:text-gray-50"}):o?l.createElement("img",{src:o.src,alt:o.alt}):l.createElement("p",null,"No image or icon")),t?l.createElement("div",{className:"mx-auto text-center md:text-start lg:pl-4"},l.createElement("h3",{className:`mx-auto mb-4 text-3xl font-bold ${m}`},t),l.createElement(n.D,{children:a,className:"mx-auto max-w-4xl leading-relaxed text-gray-700"})):l.createElement(n.D,{children:a,className:"mx-auto leading-relaxed"})))}},4307:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(1954);function r(e){let{as:t="link",outline:a,colors:r,icon:o,text:i,method:s,path:m}=e;const c="my-2 block max-w-fit cursor-pointer rounded-md px-6 py-2 font-semibold transition duration-150 ease-in-out hover:no-underline hover:shadow-md",u=a?` outline outline-2 outline-purple-700 dark:bg-white dark:outline-purple-900 text-purple-700 dark:text-purple-900 hover:dark:bg-purple-900 hover:dark:text-white ${r}`:`bg-purple-700 dark:bg-purple-900 text-white dark:text-gray-50 hover:bg-purple-900 hover:dark:bg-purple-700 ${r}`;return"button"===t?l.createElement("button",{onClick:s,className:`${c} ${u}`},o?l.createElement("span",{className:"flex items-center gap-2"},i," ",l.createElement(n.JO,{icon:o})):l.createElement("span",null,i)):l.createElement("a",{href:m,className:`${c} ${u}`},o?l.createElement("span",{className:"flex items-center gap-2"},i," ",l.createElement(n.JO,{icon:o})):l.createElement("span",null,i))}},3269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var l=a(7294),n=a(7961),r=a(1320),o=a(3198),i=a(7462),s=a(4307),m=a(1743);function c(e){const{title:t,subtitle:a,details:n}=e;return l.createElement("div",{className:"mx-2 mt-4"},l.createElement("h3",{className:"mb-3 font-bold text-gray-700 dark:text-gray-50"},t),l.createElement(m.D,{children:a,className:"text-gray-700"}),l.createElement(m.D,{children:n,className:"text-gray-700"}))}function u(e){const{text:t}=e;return l.createElement("div",{className:"mx-2 my-6 lg:my-8"},l.createElement("p",{className:"max-w-sm text-gray-700 dark:text-gray-100"},t))}function d(e){let{data:t=[{text:"button text"}]}=e;return l.createElement("div",{className:" mx-2 mb-4 flex justify-center gap-2 lg:mb-8"},t.map(((e,t)=>l.createElement("div",{key:t},0==t?l.createElement(s.Z,(0,i.Z)({as:"link"},e)):l.createElement(s.Z,(0,i.Z)({as:"link",outline:!0},e))))))}function g(e){return l.createElement("article",{className:"m-4 flex flex-col justify-between rounded-lg bg-gray-50 p-4 shadow-xl dark:bg-gray-700 dark:shadow-none lg:m-2"},l.createElement(c,e),l.createElement(u,e),l.createElement(d,e))}function p(e){let{cards:t}=e;return l.createElement("div",{className:"mb-8 flex flex-wrap justify-center gap-4 lg:mb-12 lg:gap-8"},t.map(((e,t)=>l.createElement(g,{key:t,title:e.title,subtitle:e.date,details:e.timeZone,text:e.subtitle,data:e.buttons}))))}function h(){const e=new Date,t=(e.getHours(),e.getMinutes(),new Intl.DateTimeFormat("en-US",{timeZoneName:"long"}).format().split(",")[1],[e.toLocaleString("en-US",{timeZone:"Europe/Paris",hour:"numeric",minute:"numeric",hour12:!1}),Intl.DateTimeFormat("en-US",{timeZone:"Europe/Paris",timeZoneName:"long"}).format().split(",")[1]]),a=[e.toLocaleString("en-US",{timeZone:"America/New_York",hour:"numeric",minute:"numeric",hour12:!1}),Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",timeZoneName:"long"}).format().split(",")[1]];return l.createElement("article",{className:"mb-10 max-w-lg rounded-lg bg-aqua shadow-md dark:bg-purple-900"},l.createElement("div",{className:"m-4 grid grid-cols-2 gap-x-4 lg:m-8"},l.createElement("div",{className:"col-span-full mb-5 text-center"},l.createElement("h3",{className:"font-bold text-gray-300 dark:text-gray-100"},"Current Time")),l.createElement("div",{className:"text-center"},l.createElement("h4",{className:"mb-2 text-3xl font-extrabold text-purple-500 dark:text-gray-100"},t[0]),l.createElement("p",{className:"w-40 font-bold text-blue-900"},t[1])),l.createElement("div",{className:"text-center"},l.createElement("h4",{className:"mb-2 text-3xl font-extrabold text-purple-500 dark:text-gray-100"},a[0]),l.createElement("p",{className:"w-40 font-bold text-blue-900"},a[1]))))}function b(e){let{title:t,text:a,darkBg:n="dark:bg-purple-900"}=e;return l.createElement("aside",{className:`rounded-lg bg-aqua ${n} max-w-lg px-6 py-8 text-gray-700 shadow-xl dark:shadow-md dark:shadow-gray-900`},l.createElement("h4",{className:"mx-auto mb-2 max-w-md font-bold dark:text-gray-50"},t),l.createElement("p",{className:"mx-auto max-w-md dark:text-gray-100"},a))}var x=a(7528),f=a(1954);function E(e){let{text:t,path:a,icon:n,image:r,textLogo:o}=e;return l.createElement("a",{href:a,className:"mx-auto flex flex-col items-center text-center"},l.createElement("div",{className:"max-w-fit rounded-full bg-white p-8 shadow-sm  dark:bg-gray-900"},n?l.createElement(f.JO,{icon:n,className:"text-5xl"}):o?l.createElement("span",{className:"block py-2 font-display text-4xl font-extrabold"},o):l.createElement("img",{src:r.path,alt:r.alt,className:"w-16"})),l.createElement("span",{className:"underline-offset-6 duration-149 mt-4 block text-blue-700 underline transition ease-linear hover:text-blue-900"},t))}function y(e){let{title:t,subtitle:a,button:n}=e;return l.createElement("article",{className:" my-4 flex max-w-xs flex-col justify-between"},l.createElement("h4",{className:"text-gray-700"},t),l.createElement(m.D,{children:a,className:"mb-4 mt-2 w-[198px] md:w-64"}),l.createElement(s.Z,(0,i.Z)({outline:!0,as:"link"},n)))}var w=a(2074);const k={title:"Community",subtitle:"We want your feedback, issues, patches, and involvement in the development of Podman. **Chat** with us on Slack, IRC, or on our **mailing list**. Submit **issues & pull requests** (see our [CONTRIBUTING guide]() on how.) Participate in one of our twice-monthly community meetings. You are welcome in our community!",image:"images/raw/podman-2-196w-172h.png",banner:{text:"To help ensure all feel welcome in the Podman community, we expect all who participate to adhere to our [Code of Conduct](https://github.com/containers/common/blob/main/CODE-OF-CONDUCT.md)",icon:"fa6-regular:handshake"}},N={title:"Chat with the Podman community",subtitle:"The Podman developers are generally around during CEST and Eastern Time business hours, so please be patient if you\u2019re in another time zone!",links:[{text:"#podman:matrix.org",path:"#",image:{path:"logos/raw/element-56w-59h.png",alt:"Element Matrix Logo"}},{text:"#podman on libera.chat",path:"",textLogo:"IRC"},{text:"Podman Discord",path:"#",icon:"logos:discord-icon"},{text:"Slack",path:"#",icon:"logos:slack-icon"}]},v={title:"Podman Community Meetings",subtitle:"Many of the maintainers for the Podman project attend both of these meetings, so it's a great chance for community members like you to ask them questions or address concerns directly. If you have a topic that you\u2019d like to propose for either meeting, please send a note to the [Mailing List]().",image:{path:"images/optimized/community-call-554w-219h.webp",alt:"An image of podman team members in a virtual meeting"},cards:[{title:"Podman Community Meeting",subtitle:"This meeting is used to show demos for or to have general discussions about Podman or other related container technologies. It is also used to make announcements about Podman and the other projects in the Containers repository on GitHub.",date:"**1st Tuesday** every month",timeZone:"11 AM US ET /5 PM CET",buttons:[{text:"Join Meeting",path:"#"},{text:"Meeting Agenda",path:"#"}]},{title:"Podman Community Cabal",subtitle:"The focus of the cabal meeting is the planning and discussion of possible future changes to Podman or the related Containers projects and discussing any outstanding issues that might need solving.",date:"**3rd Thursday** every month",timeZone:"11 AM US ET /5 PM CET",buttons:[{text:"Join Meeting",path:"#"},{text:"Meeting Agenda",path:"#"}]}]},C={title:"Mailing List",subtitle:"The Podman Mailing list is available for your questions, concerns or comments about Podman.",browseInfo:{title:"Browse the mailing list",subtitle:"Simply visit the Podman mailing list website to browse or search previous postings to the Podman mailing list."},subscribeInfo:{title:"Subscribe or post to the mailing list",subtitle:"Simply visit [the Podman mailing list website](#) to browse or search previous postings to the Podman mailing list.",description:"Regardless of which method you use, a confirmation email will be sent to you. After you reply back to that confirmation email, you'll then be able to send mail directly to [podman@lists.podman.io](). You can then also go to [the list's web page]() and manage your subscription.",options:[{title:"Option 1",subtitle:'Send an email to [podman-join@lists.podman.io](#) with the word "Subscribe" in the subject.',button:{text:"Send email",path:"#"}},{title:"Option 2",subtitle:'Enter your email at the bottom of [the mailing list sign up page](#), and hit the "Subscribe" button.',button:{text:"Sign up page",path:"#"}}]},extraInfo:{image:{path:"images/optimized/mailing-list-screenshot-580w-376h.webp",alt:"A screenshot of the Podman mailing list home screen."},note:{title:"Please note:",text:"If you have a bug that you\u2019d like to report, it\u2019s best to report it here by creating a \u201cNew issue\u201d rather than sending an email to the list."}}},I=[{title:"Submitting Issues & Pull Requests",subtitle:"The following is a quick cheat-sheet of sorts on how to submit issues and pull requests to the Podman project. For the most up-to-date and more comprehensive information, please take a look at  [CONTRIBUTING.md]() in the Podman repo."},{title:"Submitting Issues",subtitle:"Don't include private / sensitive info in issues!",sections:[{text:"**Before reporting an issue**, [check our backlog of open issues](#) to see if someone else has already reported it. If so:",checkList:["Feel free to add your scenario, or additional information, to the discussion.","Subscribe to the issue to be notified when it is updated."],button:{text:"Check Open Issues",path:"#"}},{text:"**If you find a new issue**, we'd love to hear about it! The most important aspect of a bug report is that it includes enough information for us to reproduce it. So, please:",checkList:["Include as much detail as possible","Try to remove any extra stuff that doesn't really relate to the issue itself"],button:{text:"File a New Issue",path:"#"}}]},{title:"Submitting Pull Requets",subtitle:"No Pull Request (PR) is too small! Typos, additional comments in the code, new test cases, bug fixes, new features, more documentation, ... it's all welcome! ",description:"If you have a bug that you\u2019d like to report, it\u2019s best to report it here by creating a \u201cNew issue\u201d rather than sending an email to the list.",checkList:["Well-documented code changes.","Additional testcases. Ideally m they should fail w/o your code change applied.","Documentation changes."],button:{text:"More PR Submission Details",path:"#"}}];function P(){const e=N.links.map((e=>e));return l.createElement("ul",{className:"mb-12 flex flex-wrap items-end justify-around gap-8 lg:gap-16"},e.map(((e,t)=>l.createElement("li",{key:t},l.createElement(E,e)))))}function Z(){return l.createElement(n.Z,null,l.createElement(r.Z,{title:k.title,description:k.subtitle}),l.createElement(x.Z,{description:k.banner.text,icon:k.banner.icon,bgColor:"bg-purple-500 dark:bg-purple-700"}),l.createElement("section",{className:"bg-gray-50 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-gray-900 "},l.createElement(o.Z,{title:N.title}),l.createElement("div",{className:"mx-4 mt-8 flex flex-wrap justify-around gap-4 sm:mx-8 lg:mx-auto lg:mt-16 lg:max-w-6xl"},l.createElement("div",{className:""},l.createElement("p",{className:"max-w-sm text-center text-gray-700 md:max-w-md md:text-start lg:max-w-xl"},N.subtitle)),l.createElement(h,null)),l.createElement("div",{className:"container pt-12 lg:pt-20"},l.createElement(P,null)),l.createElement(w.Z,null)),l.createElement("section",{className:"bg-gradient-to-b from-white via-gray-50 to-gray-100 pb-8 dark:from-gray-900 dark:to-gray-900"},l.createElement("div",{className:"container flex flex-col"},l.createElement(o.Z,{title:v.title,description:v.subtitle,textColor:"from-purple-500 to-purple-700 dark:text-purple-500"}),l.createElement("img",{src:v.image.path,alt:v.image.alt,className:"order-first mx-auto object-cover lg:max-w-lg"}),l.createElement(p,{cards:v.cards}))),l.createElement("section",null,l.createElement("div",{className:"container grid gap-4 lg:grid-cols-2"},l.createElement(o.Z,{title:C.title,description:C.subtitle,layout:"col-span-full",textColor:"dark:text-blue-700"}),l.createElement("section",{className:"container mb-8"},l.createElement("h3",{className:"mb-2 font-medium text-purple-700 dark:text-purple-500"},C.browseInfo.title),l.createElement("p",{className:"max-w-prose text-gray-500"},C.browseInfo.subtitle)),l.createElement("section",{className:"container mb-8"},l.createElement("h3",{className:"mb-2 font-medium text-purple-700 dark:text-purple-500"},C.subscribeInfo.title),l.createElement(m.D,{children:C.subscribeInfo.subtitle,className:"max-w-prose "}),l.createElement("div",{className:"flex flex-wrap gap-6"},C.subscribeInfo.options.map(((e,t)=>l.createElement(y,e)))),l.createElement("div",{className:"my-4 max-w-prose"},l.createElement(m.D,{children:C.subscribeInfo.description}))),l.createElement("section",{className:"mb-8 lg:col-start-2 lg:row-span-2 lg:row-start-2"},l.createElement("div",null,l.createElement("img",{src:C.extraInfo.image.path,alt:C.extraInfo.image.alt,className:"w-full  object-cover"})),l.createElement("div",{className:"ml-8 xl:ml-10"},l.createElement(b,{title:C.extraInfo.note.title,text:C.extraInfo.note.text}))))),l.createElement("section",{className:"bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900"},l.createElement(o.Z,{title:I[0].title,description:I[0].subtitle,textColor:"from-purple-500 to-purple-700 dark:text-blue-700"})))}}}]);