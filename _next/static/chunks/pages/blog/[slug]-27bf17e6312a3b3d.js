(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{41127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(82933)}])},82933:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return k}});var r=n(85893),a=n(16103),o=n(6653),s=n(94184),i=n.n(s),c=n(81146),l=n.n(c);let d=e=>{let{title:t,imageUrl:n,imageSourceUrl:a=null,className:o}=e;return(0,r.jsxs)("div",{className:i()(l().coverImage,o),children:[(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t)}),a&&(0,r.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"Image Source \uD83D\uDD17"})]})};var u=n(48674),h=n(31214),m=n.n(h),x=n(19003),_=n.n(x);let g=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:_().postTitle,children:t})},v=e=>{let{title:t,coverImageUrl:n,coverImageSourceUrl:a,coverVideoUrl:s="",date:i,author:c}=e;return(0,r.jsxs)("div",{className:m().postHeader,children:[(0,r.jsx)(g,{children:t}),(0,r.jsxs)("div",{className:m().authorAndDate,children:[(0,r.jsx)(o.Z,{name:c.name,pictureUrl:c.pictureUrl}),(0,r.jsx)(u.Z,{dateString:i})]}),s&&(0,r.jsx)("video",{muted:!0,playsInline:!0,controls:!0,className:m().coverVideo,children:(0,r.jsx)("source",{src:s,type:"video/mp4"})}),!s&&(0,r.jsx)(d,{title:t,imageUrl:n,imageSourceUrl:a,className:m().picture})]})},p=e=>{let{post:t}=e,{title:n,date:o,author:s,coverImageUrl:i,coverVideoUrl:c="",coverImageSourceUrl:l,markdownContent:d}=t;return(0,r.jsxs)("article",{children:[(0,r.jsx)(v,{title:n,coverImageUrl:i,coverImageSourceUrl:l,coverVideoUrl:c,date:o,author:s}),(0,r.jsx)(a.Z,{markdownString:d})]})};var j=n(58721),f=n(13686),w=n(51768),N=n(38625),y=!0;function k(e){let{post:t}=e;if(!t)return null;let{slug:n,title:a,excerpt:o,coverImageUrl:s}=t;return(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(j.Z,{title:a,description:o,imageUrl:s,pathUrl:"/blog/".concat(n)}),(0,r.jsxs)(f.Z,{wide:!1,children:[(0,r.jsx)(N.Z,{amount:"3.5em"}),(0,r.jsx)(p,{post:t}),(0,r.jsx)(N.Z,{amount:"3.5em"})]})]})}},58721:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),a=n(9008),o=n.n(a);function s(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:a,imageUrl:s="/thumbnail.gif",faviconUrl:i="/favicon.ico",description:c="Gonzalo Cumini | Portfolio"}=e,l="".concat(t).concat(a),d="".concat(t).concat(s),u="".concat(t).concat(i);return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:c}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:l}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:c}),(0,r.jsx)("meta",{property:"twitter:image",content:d}),(0,r.jsx)("link",{rel:"icon",href:u}),(0,r.jsx)("link",{rel:"canonical",href:l},"canonical")]})}},38625:function(e,t,n){"use strict";var r=n(85893);let a=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})};t.Z=a},6653:function(e,t,n){"use strict";var r=n(85893),a=n(94184),o=n.n(a),s=n(98642),i=n.n(s);let c=e=>{let{name:t,pictureUrl:n,small:a=!1}=e;return(0,r.jsxs)("div",{className:o()(i().avatar,{[i().small]:a}),children:[(0,r.jsx)("img",{src:n,alt:t}),(0,r.jsx)("div",{className:i().name,children:t})]})};t.Z=c},48674:function(e,t,n){"use strict";var r=n(85893),a=n(78420),o=n(36159),s=n(27755),i=n.n(s);let c=e=>{let{dateString:t,dateFormat:n="LLLL	d, yyyy"}=e,s=(0,a.Z)(t);return(0,r.jsx)("time",{className:i().dateFormatter,dateTime:t,children:(0,o.Z)(s,n)})};t.Z=c},52665:function(e,t,n){"use strict";var r=n(85893);let a=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};t.Z=a},16103:function(e,t,n){"use strict";var r=n(85893),a=n(67294),o=n(55299),s=n(98683),i=n(84283),c=n(22549),l=n.n(c);let d=e=>{let{node:t,inline:n,className:a,children:o,...c}=e,l=/language-(\w+)/.exec(a||"");return!n&&l?(0,r.jsx)(s.Z,{showLineNumbers:!0,language:l[1],style:i.I2,PreTag:"div",...c,children:String(o).replace(/\n$/,"")}):(0,r.jsx)("code",{className:a,...c,children:o})};function u(e,t){return"string"==typeof t?e+t:a.Children.toArray(t.props.children).reduce(u,e)}let h=e=>{var t=a.Children.toArray(e.children).reduce(u,"").toLowerCase().replace(/\W/g,"-");return a.createElement("h"+e.level,{id:t},e.children)},m=e=>{let{markdownString:t}=e;return(0,r.jsx)("div",{className:l().markdownContent,children:(0,r.jsx)(o.D,{components:{code:d,h1:h,h2:h,h3:h,h4:h,h5:h,h6:h},children:t})})};t.Z=m},13686:function(e,t,n){"use strict";var r=n(85893),a=n(94184),o=n.n(a),s=n(53316),i=n.n(s);let c=e=>{let{children:t,className:n,wide:a=!0}=e;return(0,r.jsx)("main",{className:o()(i().container,{[i().wide]:a},{[i().narrow]:!a},n),children:t})};t.Z=c},51768:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(85893),a=n(94184),o=n.n(a),s=n(41664),i=n.n(s);n(67294);var c=n(90058),l=n.n(c);let d=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:l().iconSvg})})};var u=n(52665);let h=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})};var m=n(16819),x=n.n(m);let _=[{href:"https://linkedin.com/in/gonzacn",Icon:h},{href:"https://github.com/z4gon",Icon:u.Z}],g=()=>(0,r.jsxs)("nav",{className:x().navbar,children:[(0,r.jsxs)("ul",{className:x().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/",className:x().titleLink,children:(0,r.jsx)("h1",{className:x().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:x().secondaryLink,children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:x().secondaryLink,children:(0,r.jsx)(i(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:x().icons,children:_.map(e=>(0,r.jsx)("li",{className:x().icon,children:(0,r.jsx)(d,{...e})},e.href))})]});var v=n(91290),p=n.n(v);let j=[{href:"https://linkedin.com/in/gonzacn",Icon:h},{href:"https://github.com/z4gon",Icon:u.Z}],f=()=>(0,r.jsxs)("footer",{className:p().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:p().icons,children:j.map(e=>(0,r.jsx)("li",{className:p().icon,children:(0,r.jsx)(d,{...e})},e.href))})]});var w=n(4298),N=n.n(w);let y=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(N(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]});var k=n(43285),Z=n.n(k);let C=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:o()(Z().page,t),children:[(0,r.jsx)(y,{}),(0,r.jsx)(g,{}),n,(0,r.jsx)(f,{})]})};var L=C},90058:function(e){e.exports={iconSvg:"IconLink_iconSvg__iWO3h"}},98642:function(e){e.exports={avatar:"Avatar_avatar__c4ok3",name:"Avatar_name__N7CPL",small:"Avatar_small__i2g_g"}},81146:function(e){e.exports={coverImage:"CoverImage_coverImage__eqgxn"}},27755:function(e){e.exports={dateFormatter:"DateFormatter_dateFormatter__NLLzu"}},31214:function(e){e.exports={postHeader:"PostHeader_postHeader__D24QK",authorAndDate:"PostHeader_authorAndDate__TiMg2",coverVideo:"PostHeader_coverVideo__R54Ck"}},19003:function(e){e.exports={postTitle:"PostTitle_postTitle__z_ODw"}},22549:function(e){e.exports={markdownContent:"MarkdownContent_markdownContent__2E_Qv"}},16819:function(e){e.exports={navbar:"NavBar_navbar__BgTxA",links:"NavBar_links__8EQ8n",titleLink:"NavBar_titleLink__wg_c7",secondaryLink:"NavBar_secondaryLink__fWlAm",icons:"NavBar_icons__E9Osl",icon:"NavBar_icon__xI25_",iconSvg:"NavBar_iconSvg__GGDAv"}},53316:function(e){e.exports={container:"Container_container__Ng71X",wide:"Container_wide__GeceK",narrow:"Container_narrow__2IMK6"}},91290:function(e){e.exports={footer:"Footer_footer__f82OG",icons:"Footer_icons__osd5H",icon:"Footer_icon__JlrBN"}},43285:function(e){e.exports={page:"Page_page__xbupP"}}},function(e){e.O(0,[151,358,770,774,888,179],function(){return e(e.s=41127)}),_N_E=e.O()}]);