(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1244:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[id]",function(){return c(4627)}])},4627:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return V},default:function(){return W}});var d=c(6042),e=c(5893),f=c(7294),g=f.createContext({urls:[],currentIdx:null,initialize:function(a,b){},nextUrl:function(){},previousUrl:function(){},reset:function(){}}),h=c(6828),i=c.n(h),j=function(){var a=(0,f.useContext)(g),b=a.urls,c=void 0===b?[]:b,d=a.currentIdx,h=a.reset,j=a.nextUrl,k=a.previousUrl;return 0===c.length?null:(0,e.jsx)("div",{className:i().overlay,children:(0,e.jsxs)("div",{style:{backgroundImage:"url(".concat(c[d],")")},className:i().image,tabIndex:"0",onKeyDown:function(a){"ArrowRight"===a.key&&j(),"ArrowLeft"===a.key&&k(),"Escape"===a.key&&h()},children:[(0,e.jsx)("button",{className:i().closeButton,onClick:function(){return h()},children:(0,e.jsx)("img",{src:"/images/ui/close-icon.png",alt:"Close"})}),(0,e.jsx)("button",{className:i().nextButton,onClick:function(){return j()},children:(0,e.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Next"})}),(0,e.jsx)("button",{className:i().prevButton,onClick:function(){return k()},children:(0,e.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Previous"})})]})})},k=j;function l(a){var b=a.children,c=(0,f.useState)([]),d=c[0],h=c[1],i=(0,f.useState)(null),j=i[0],l=i[1];return(0,e.jsxs)(g.Provider,{value:{urls:d,currentIdx:j,initialize:function(a,b){h(a),l(b)},nextUrl:function(){l(function(a){return(a+1)%d.length})},previousUrl:function(){l(function(a){return(a-1+d.length)%d.length})},reset:function(){h([]),l(null)}},children:[b,(0,e.jsx)(k,{})]})}var m=c(3323),n=c(6287),o=c(4924),p=c(4184),q=c.n(p),r=c(6399),s=c.n(r),t=c(1935),u=c.n(t),v=function(a){var b=a.href,c=a.className,d=a.icon,f=a.children;return(0,e.jsxs)("a",{className:q()(u().externalLink,c),href:b,rel:"noopener noreferrer",target:"_blank",children:[f,d||(0,e.jsx)("svg",{className:u().iconSvg,fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"60px",height:"60px",children:(0,e.jsx)("path",{d:"M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"})})]})},w=v,x=c(3585),y=c(9396),z=c(6066),A=c(7687),B=c.n(A),C=c(1),D=c.n(C),E=function(a){var b=a.allImagesUrls,c=a.imageIdx,d=(0,f.useContext)(g).initialize;return(0,e.jsx)("button",{className:D().openButton,onClick:function(){return d(b,c)},children:(0,e.jsx)("img",{src:"/images/ui/full-screen-icon.png",alt:"Open"})})},F=E,G={dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,lazyLoad:"ondemand",autoplay:!0,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:700,settings:{slidesToShow:1}},]},H=function(a){var b=a.imagesUrls;return(0,e.jsx)(z.Z,(0,y.Z)((0,d.Z)({className:B().slider},G),{children:b.map(function(a,c){return(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{backgroundImage:"url(".concat(a,")")},className:B().image,children:(0,e.jsx)(F,{allImagesUrls:b,imageIdx:c})})},a)})}))},I=H,J=c(910),K=c.n(J),L=function(a){var b=a.tags;return(0,e.jsx)("div",{className:K().tags,children:b.map(function(a,b){return(0,e.jsx)(M,{children:a},b)})})},M=function(a){var b=a.children,c=a.className,d=a.secondary;return(0,e.jsx)("span",{className:q()(K().tag,c,(0,o.Z)({},K().secondary,void 0!==d&&d)),children:b})},N=L,O=c(5662),P=c.n(O),Q=function(a){var b=a.appleAppStoreUrl,c=a.googlePlayStoreUrl;return b||c?(0,e.jsxs)("div",{className:P().storeLinks,children:[b&&(0,e.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)("img",{src:"/images/badge-app-store.svg",alt:"App Store Link",className:P().appleAppStoreBadge})}),c&&(0,e.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)("img",{src:"/images/badge-google-play.png",alt:"Play Store Link",className:P().googlePlayStoreBadge})})]}):null},R=Q,S=function(a){var b=a.title,c=a.children,d=a.className,f=a.mobileFullWidth;return(0,e.jsxs)("div",{className:q()(s().sectionBody,d,(0,o.Z)({},s().mobileFullWidth,f)),children:[b&&(0,e.jsx)("h2",{className:s().sectionTitle,children:b}),c]})},T=function(a){var b=a.date,c=a.imagesUrls,d=a.title,f=a.subtitle,g=a.description,h=void 0===g?[]:g,i=a.implementationDetails,j=void 0===i?[]:i,k=a.tags,l=a.links,m=void 0===l?[]:l,n=a.gitHubUrl,o=void 0===n?"":n,p=a.appleAppStoreUrl,q=void 0===p?"":p,r=a.googlePlayStoreUrl,t=void 0===r?"":r,u=a.youtubeVideoIds,v=void 0===u?[]:u;return(0,e.jsxs)("main",{className:s().container,children:[(0,e.jsx)(I,{imagesUrls:void 0===c?[]:c}),(0,e.jsxs)("div",{className:s().card,children:[(0,e.jsxs)(S,{className:s().header,children:[(0,e.jsxs)("div",{className:s().information,children:[(0,e.jsxs)("h2",{className:s().title,children:[d,(0,e.jsx)(M,{secondary:!0,className:s().date,children:b})]}),(0,e.jsx)("span",{className:s().subtitle,children:f}),(0,e.jsx)(N,{tags:void 0===k?[]:k})]}),o&&(0,e.jsx)(w,{href:o,className:s().gitHubLink,icon:(0,e.jsx)(x.Z,{className:""}),children:"View on GitHub"})]}),h.length>0&&(0,e.jsx)(S,{className:s().descriptionItems,children:h.map(function(a,b){return(0,e.jsx)("p",{className:s().descriptionItem,children:a},b)})}),j.length>0&&(0,e.jsx)(S,{title:"Implementation",children:(0,e.jsx)("ul",{className:s().implementationDetails,children:j.map(function(a,b){return(0,e.jsx)("li",{className:s().bullet,children:a},b)})})}),m.length>0&&(0,e.jsx)(S,{title:"Links",className:s().externalLinks,children:(0,e.jsx)("div",{className:s().externalLinks,children:m.map(function(a,b){return(0,e.jsx)(w,{href:a.href,children:a.text},b)})})}),(q||t)&&(0,e.jsx)(S,{title:"Store Presence",children:(0,e.jsx)(R,{appleAppStoreUrl:q,googlePlayStoreUrl:t})})]}),v.length>0&&(0,e.jsx)(S,{title:"Videos",mobileFullWidth:!0,children:v.map(function(a){return(0,e.jsx)("div",{className:s().video,children:(0,e.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(a),title:d,frameBorder:"0",allowFullScreen:!0})},a)})})]})},U=T,V=!0;function W(a){var b=a.project;return b?(0,e.jsx)(l,{children:(0,e.jsxs)(n.Z,{children:[(0,e.jsx)(m.Z,{title:"".concat(b.title," | Project"),description:b.description.join(""),imageUrl:b.metaImageUrl}),(0,e.jsx)(U,(0,d.Z)({},b))]})}):null}},3323:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(5893),e=c(9008),f=c.n(e);function g(a){var b=a.title,c=void 0===b?"Gonzalo Cumini | Portfolio":b,e=a.url,g=void 0===e?"z4gon.github.io/":e,h=a.imageUrl,i=void 0===h?"/images/portfolio/starcat/meta.jpg":h,j=a.faviconUrl,k=a.description,l=void 0===k?"Gonzalo Cumini | Portfolio":k;return(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:c}),(0,d.jsx)("meta",{name:"title",content:c}),(0,d.jsx)("meta",{name:"description",content:l}),(0,d.jsx)("meta",{property:"og:type",content:"website"}),(0,d.jsx)("meta",{property:"og:url",content:g}),(0,d.jsx)("meta",{property:"og:title",content:c}),(0,d.jsx)("meta",{property:"og:description",content:l}),(0,d.jsx)("meta",{property:"og:image",content:i}),(0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{property:"twitter:url",content:g}),(0,d.jsx)("meta",{property:"twitter:title",content:c}),(0,d.jsx)("meta",{property:"twitter:description",content:l}),(0,d.jsx)("meta",{property:"twitter:image",content:i}),(0,d.jsx)("link",{rel:"icon",href:void 0===j?"/favicon.ico":j})]})}},3585:function(a,b,c){"use strict";var d=c(5893),e=function(a){var b=a.className;return(0,d.jsx)("svg",{className:b,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};b.Z=e},6287:function(a,b,c){"use strict";c.d(b,{Z:function(){return v}});var d=c(5893),e=c(164),f=c.n(e),g=c(6042),h=c(1664),i=c.n(h),j=c(4666),k=c.n(j),l=c(3585),m=function(a){var b=a.className;return(0,d.jsx)("svg",{className:b,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},n=function(a){var b=a.href,c=a.icon;return(0,d.jsx)("a",{href:b,rel:"noopener noreferrer",target:"_blank",children:c})},o=[{href:"https://linkedin.com/in/gonzacn",icon:(0,d.jsx)(m,{className:k().iconSvg})},{href:"https://github.com/z4gon",icon:(0,d.jsx)(l.Z,{className:k().iconSvg})},],p=function(){return(0,d.jsxs)("nav",{className:k().navbar,children:[(0,d.jsx)(i(),{href:"/",children:(0,d.jsx)("a",{className:k().titleLink,children:(0,d.jsx)("h1",{className:k().title,children:"Gonzalo Cumini"})})}),(0,d.jsx)("ul",{className:k().icons,children:o.map(function(a){return(0,d.jsx)("li",{className:k().icon,children:(0,d.jsx)(n,(0,g.Z)({},a))},a.href)})})]})},q=c(4298),r=c.n(q),s=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,d.jsx)(r(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]})},t=s,u=function(a){var b=a.children;return(0,d.jsxs)("div",{className:f().page,children:[(0,d.jsx)(t,{}),(0,d.jsx)(p,{}),b]})},v=u},1935:function(a){a.exports={externalLink:"ExternalLink_externalLink__10DeB"}},910:function(a){a.exports={tags:"Tags_tags__3Bx_D",tag:"Tags_tag__I1Kga",secondary:"Tags_secondary__JW80_"}},6828:function(a){a.exports={overlay:"FullScreenCarousel_overlay__hpL_y",image:"FullScreenCarousel_image__0n8jO",closeButton:"FullScreenCarousel_closeButton__zA9yL",nextButton:"FullScreenCarousel_nextButton__aBX1H",prevButton:"FullScreenCarousel_prevButton__LTQSi"}},1:function(a){a.exports={openButton:"GoFullScreenButton_openButton__mFH3e"}},7687:function(a){a.exports={slider:"ImagesSlider_slider__f3BjR",image:"ImagesSlider_image__br0Tp","slick-arrow":"ImagesSlider_slick-arrow__F4A7p","slick-next":"ImagesSlider_slick-next__pV65Z"}},4666:function(a){a.exports={navbar:"NavBar_navbar__W8B89",titleLink:"NavBar_titleLink__OtPh0",title:"NavBar_title__R8ar3",icons:"NavBar_icons__Q_6kO",icon:"NavBar_icon__MjYq8",iconSvg:"NavBar_iconSvg__yYGbL"}},164:function(a){a.exports={page:"Page_page__0A7TG"}},6399:function(a){a.exports={container:"ProjectDetails_container__GQ6aD",card:"ProjectDetails_card__xuKs1",header:"ProjectDetails_header__06LzA",gitHubLink:"ProjectDetails_gitHubLink__vbvNO",iconImage:"ProjectDetails_iconImage__BsJ_W",information:"ProjectDetails_information__Td_im",title:"ProjectDetails_title__aiZsZ",date:"ProjectDetails_date__CNpb0",subtitle:"ProjectDetails_subtitle__tYt6g",sectionBody:"ProjectDetails_sectionBody__L515_",mobileFullWidth:"ProjectDetails_mobileFullWidth__gku55",sectionTitle:"ProjectDetails_sectionTitle__5d6yu",descriptionItems:"ProjectDetails_descriptionItems__oqU69",descriptionItem:"ProjectDetails_descriptionItem__LJR1A",implementationDetails:"ProjectDetails_implementationDetails__QK7L_",bullet:"ProjectDetails_bullet__45nIQ",externalLinks:"ProjectDetails_externalLinks__tG0Bx",video:"ProjectDetails_video__QM3Xo"}},5662:function(a){a.exports={storeLinks:"StoreLinks_storeLinks__oKk99",appleAppStoreBadge:"StoreLinks_appleAppStoreBadge__jJXsC",googlePlayStoreBadge:"StoreLinks_googlePlayStoreBadge__WZwcX"}}},function(a){a.O(0,[557,55,774,888,179],function(){var b;return a(a.s=1244)}),_N_E=a.O()}])