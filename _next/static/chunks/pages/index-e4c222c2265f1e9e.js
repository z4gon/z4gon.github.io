(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(15890)}])},15890:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return f}});var r,s,a=n(85893),i=n(67294),c=n(96486),o=n(58721),l=n(13686),d=n(51768),h=n(9944);let _=e=>{let{className:t}=e;return(0,a.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"})})};var u=n(50490),g=n.n(u);let j=e=>{let{allProjects:t,onFiltersChanged:n}=e,[r,s]=(0,i.useState)(""),[o,l]=(0,i.useState)(t.length),d=()=>{let e=r?(0,c.filter)(t,e=>(0,c.includes)(e.title.toLowerCase(),r.toLowerCase())):t;l(e.length),n(e)};(0,i.useEffect)(()=>{d()},[r]);let h=e=>{s(e),d()};return(0,a.jsxs)("div",{className:g().filters,children:[(0,a.jsxs)("div",{className:g().searchBox,children:[(0,a.jsx)("input",{type:"text",placeholder:"Search for projects",onChange:e=>h(e.currentTarget.value)}),(0,a.jsx)(_,{})]}),(0,a.jsx)("span",{className:g().message,children:r?"".concat(o," matching projects"):"".concat(o," total projects")})]})};var m=n(94362),x=n(38625);(r=s||(s={})).PublishedGames="Published Games",r.Shaders="Shaders",r.ComputeShaders="Compute Shaders",r.VisualEffects="Visual Effects",r._3DModelingAnimation="3D Modeling and Animation",r.GameDev="Game Dev";var p=!0;function f(e){let{projects:t}=e,[n,r]=(0,i.useState)(t),_=[s.VisualEffects,s.Shaders,s.ComputeShaders,s._3DModelingAnimation,s.PublishedGames,s.GameDev],u=e=>r(e);return(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(o.Z,{}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(x.Z,{amount:"2em"}),(0,a.jsx)(h.Z,{children:"Portfolio"}),(0,a.jsx)(x.Z,{amount:"2em"}),(0,a.jsx)(j,{allProjects:t,onFiltersChanged:u}),(0,a.jsx)(x.Z,{amount:"1em"}),_.map(e=>{let t=(0,c.filter)(n,t=>t.category===e);return t=(0,c.orderBy)(t,["priority"],["asc"]),(0,a.jsx)(m.Z,{title:e.toString(),projects:t,pageSize:8},e)}),(0,a.jsx)(x.Z,{amount:"3.5em"})]})]})}},37543:function(e,t,n){"use strict";var r=n(85893);n(67294);var s=n(94184),a=n.n(s),i=n(53836),c=n.n(i);let o=e=>{let{className:t,onClick:n,children:s}=e;return(0,r.jsx)("button",{className:a()(t,c().button),onClick:n,children:s})};t.Z=o},58721:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),s=n(9008),a=n.n(s);function i(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:s,imageUrl:i="/thumbnail.gif",faviconUrl:c="/favicon.ico",description:o="Gonzalo Cumini | Portfolio"}=e,l="".concat(t).concat(s),d="".concat(t).concat(i),h="".concat(t).concat(c);return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:o}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:o}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:l}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:o}),(0,r.jsx)("meta",{property:"twitter:image",content:d}),(0,r.jsx)("link",{rel:"icon",href:h}),(0,r.jsx)("link",{rel:"canonical",href:l},"canonical")]})}},38625:function(e,t,n){"use strict";var r=n(85893);let s=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})};t.Z=s},66568:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(85893),s=n(94184),a=n.n(s),i=n(31306),c=n.n(i);let o=e=>{let{tags:t,secondary:n=!1,dark:s=!1}=e;return(0,r.jsx)("div",{className:c().tags,children:t.map((e,t)=>(0,r.jsx)(l,{secondary:n,dark:s,children:e},t))})},l=e=>{let{children:t,className:n,secondary:s=!1,dark:i=!1}=e;return(0,r.jsx)("span",{className:a()(c().tag,n,{[c().dark]:i,[c().secondary]:s}),children:t})};t.Z=o},52665:function(e,t,n){"use strict";var r=n(85893);let s=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};t.Z=s},13686:function(e,t,n){"use strict";var r=n(85893),s=n(94184),a=n.n(s),i=n(53316),c=n.n(i);let o=e=>{let{children:t,className:n,wide:s=!0}=e;return(0,r.jsx)("main",{className:a()(c().container,{[c().wide]:s},{[c().narrow]:!s},n),children:t})};t.Z=o},51768:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(85893),s=n(94184),a=n.n(s),i=n(41664),c=n.n(i);n(67294);var o=n(90058),l=n.n(o);let d=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:l().iconSvg})})};var h=n(52665);let _=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})};var u=n(16819),g=n.n(u);let j=[{href:"https://linkedin.com/in/gonzacn",Icon:_},{href:"https://github.com/z4gon",Icon:h.Z}],m=()=>(0,r.jsxs)("nav",{className:g().navbar,children:[(0,r.jsxs)("ul",{className:g().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/",className:g().titleLink,children:(0,r.jsx)("h1",{className:g().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:g().secondaryLink,children:(0,r.jsx)(c(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:g().secondaryLink,children:(0,r.jsx)(c(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:g().icons,children:j.map(e=>(0,r.jsx)("li",{className:g().icon,children:(0,r.jsx)(d,{...e})},e.href))})]});var x=n(91290),p=n.n(x);let f=[{href:"https://linkedin.com/in/gonzacn",Icon:_},{href:"https://github.com/z4gon",Icon:h.Z}],v=()=>(0,r.jsxs)("footer",{className:p().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:p().icons,children:f.map(e=>(0,r.jsx)("li",{className:p().icon,children:(0,r.jsx)(d,{...e})},e.href))})]});var N=n(4298),w=n.n(N);let y=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(w(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]});var P=n(43285),C=n.n(P);let k=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:a()(C().page,t),children:[(0,r.jsx)(y,{}),(0,r.jsx)(m,{}),n,(0,r.jsx)(v,{})]})};var b=k},9944:function(e,t,n){"use strict";var r=n(85893),s=n(85493),a=n.n(s);let i=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:a().pageTitle,children:t})};t.Z=i},94362:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(85893),s=n(67294),a=n(37543),i=n(41664),c=n.n(i),o=n(66568),l=n(6059),d=n.n(l);let h=e=>{let{id:t,thumbnailUrl:n,title:s,tags:a,technology:i=null}=e;return(0,r.jsx)(c(),{href:"/project/".concat(t),className:d().link,children:(0,r.jsxs)("article",{className:d().card,children:[i&&(0,r.jsx)("img",{className:d().technology,src:"/images/technologies/".concat(i,".png"),alt:i}),(0,r.jsx)("div",{className:d().thumbnailContainer,children:(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:d().thumbnail,children:(0,r.jsx)("source",{src:n,type:"video/mp4"})})}),(0,r.jsxs)("div",{className:d().information,children:[(0,r.jsx)("h2",{className:d().title,children:s}),(0,r.jsx)(o.Z,{dark:!0,tags:a.slice(0,3)})]})]})})};var _=n(64394),u=n.n(_);let g=e=>{let{title:t,projects:n,pageSize:i=12,pageJump:c=2}=e,[o,l]=(0,s.useState)(0),d=n.length>(o+1)*i,_=()=>{d&&l(e=>e+c)};if(0==n.length)return null;let g=n.slice(0,(o+1)*i);return(0,r.jsxs)("div",{className:u().gridWrapper,children:[t&&(0,r.jsxs)("div",{className:u().titleWrapper,children:[(0,r.jsx)("h2",{className:u().title,children:t}),(0,r.jsx)("span",{className:u().projectCount,children:"".concat(n.length," project").concat(n.length>1?"s":"")})]}),(0,r.jsx)("div",{className:u().grid,children:g.map(e=>(0,r.jsx)(h,{...e},e.id))}),d&&(0,r.jsxs)("div",{className:u().actions,children:[(0,r.jsx)("p",{children:"Showing ".concat(g.length," of ").concat(n.length)}),(0,r.jsx)(a.Z,{onClick:()=>_(),children:"Show More"})]})]})};var j=g},53836:function(e){e.exports={button:"Button_button__q0Pdu"}},90058:function(e){e.exports={iconSvg:"IconLink_iconSvg__iWO3h"}},31306:function(e){e.exports={tags:"Tags_tags__ao0I7",tag:"Tags_tag__G2xDV",secondary:"Tags_secondary__Qvv_r",dark:"Tags_dark__jR1p0"}},16819:function(e){e.exports={navbar:"NavBar_navbar__BgTxA",links:"NavBar_links__8EQ8n",titleLink:"NavBar_titleLink__wg_c7",secondaryLink:"NavBar_secondaryLink__fWlAm",icons:"NavBar_icons__E9Osl",icon:"NavBar_icon__xI25_",iconSvg:"NavBar_iconSvg__GGDAv"}},53316:function(e){e.exports={container:"Container_container__Ng71X",wide:"Container_wide__GeceK",narrow:"Container_narrow__2IMK6"}},91290:function(e){e.exports={footer:"Footer_footer__f82OG",icons:"Footer_icons__osd5H",icon:"Footer_icon__JlrBN"}},43285:function(e){e.exports={page:"Page_page__xbupP"}},85493:function(e){e.exports={pageTitle:"PageTitle_pageTitle__ZJY0d"}},6059:function(e){e.exports={link:"ProjectCard_link__HkVgh",card:"ProjectCard_card__b93Mr",technology:"ProjectCard_technology__1RiWw",thumbnailContainer:"ProjectCard_thumbnailContainer__jAWiO",information:"ProjectCard_information__ogMjQ",title:"ProjectCard_title__0igPZ",subtitle:"ProjectCard_subtitle__xIoX_"}},50490:function(e){e.exports={filters:"ProjectFilters_filters__AC_PR",searchBox:"ProjectFilters_searchBox__rZANX",message:"ProjectFilters_message__BAQ_5"}},64394:function(e){e.exports={gridWrapper:"ProjectsGrid_gridWrapper__yQ0Y2",titleWrapper:"ProjectsGrid_titleWrapper__WyvW4",title:"ProjectsGrid_title__OsHlX",projectCount:"ProjectsGrid_projectCount__O8CHB",grid:"ProjectsGrid_grid__Iyr_i",actions:"ProjectsGrid_actions__HFyhO"}}},function(e){e.O(0,[662,151,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);