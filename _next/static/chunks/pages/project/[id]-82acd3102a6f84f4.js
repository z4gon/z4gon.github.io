(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1244:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[id]",function(){return c(1475)}])},1475:function(k,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return K},default:function(){return L}});var l=a(6042),m=a(5893),c=a(7294),n=c.createContext({urls:[],currentIdx:null,initialize:function(a,b){},nextUrl:function(){},previousUrl:function(){},reset:function(){}}),d=a(6828),o=a.n(d),p=function(){var a=(0,c.useContext)(n),b=a.urls,d=void 0===b?[]:b,e=a.currentIdx,f=a.reset,g=a.nextUrl,h=a.previousUrl;return 0===d.length?null:(0,m.jsx)("div",{className:o().overlay,children:(0,m.jsxs)("div",{style:{backgroundImage:"url(".concat(d[e],")")},className:o().image,tabIndex:"0",onKeyDown:function(a){"ArrowRight"===a.key&&g(),"ArrowLeft"===a.key&&h(),"Escape"===a.key&&f()},children:[(0,m.jsx)("button",{className:o().closeButton,onClick:function(){return f()},children:(0,m.jsx)("img",{src:"/images/ui/close-icon.png",alt:"Close"})}),(0,m.jsx)("button",{className:o().nextButton,onClick:function(){return g()},children:(0,m.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Next"})}),(0,m.jsx)("button",{className:o().prevButton,onClick:function(){return h()},children:(0,m.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Previous"})})]})})};function q(d){var e=d.children,a=(0,c.useState)([]),f=a[0],h=a[1],b=(0,c.useState)(null),g=b[0],i=b[1];return(0,m.jsxs)(n.Provider,{value:{urls:f,currentIdx:g,initialize:function(a,b){h(a),i(b)},nextUrl:function(){i(function(a){return(a+1)%f.length})},previousUrl:function(){i(function(a){return(a-1+f.length)%f.length})},reset:function(){h([]),i(null)}},children:[e,(0,m.jsx)(p,{})]})}var r=a(3323),s=a(231),t=a(4924),e=a(4184),u=a.n(e),f=a(6399),v=a.n(f),g=a(1935),w=a.n(g),x=function(a){var b=a.href,c=a.className,d=a.icon,e=a.children;return(0,m.jsxs)("a",{className:u()(w().externalLink,c),href:b,rel:"noopener noreferrer",target:"_blank",children:[e,d||(0,m.jsx)("svg",{className:w().icon,fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"60px",height:"60px",children:(0,m.jsx)("path",{d:"M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"})})]})},y=a(9396),z=a(6066),h=a(7687),A=a.n(h),i=a(1),B=a.n(i),C=function(a){var b=a.allImagesUrls,d=a.imageIdx,e=(0,c.useContext)(n).initialize;return(0,m.jsx)("button",{className:B().openButton,onClick:function(){return e(b,d)},children:(0,m.jsx)("img",{src:"/images/ui/full-screen-icon.png",alt:"Open"})})},D={dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,lazyLoad:"ondemand",autoplay:!0,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:700,settings:{slidesToShow:1}},]},E=function(a){var b=a.imagesUrls;return(0,m.jsx)(z.Z,(0,y.Z)((0,l.Z)({className:A().slider},D),{children:b.map(function(a,c){return(0,m.jsx)("div",{children:(0,m.jsx)("div",{style:{backgroundImage:"url(".concat(a,")")},className:A().image,children:(0,m.jsx)(C,{allImagesUrls:b,imageIdx:c})})},a)})}))},F=a(9160),j=a(5662),G=a.n(j),H=function(c){var a=c.appleAppStoreUrl,b=c.googlePlayStoreUrl;return a||b?(0,m.jsxs)("div",{className:G().storeLinks,children:[a&&(0,m.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)("img",{src:"/images/badge-app-store.svg",alt:"App Store Link",className:G().appleAppStoreBadge})}),b&&(0,m.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)("img",{src:"/images/badge-google-play.png",alt:"Play Store Link",className:G().googlePlayStoreBadge})})]}):null},I=function(a){var b=a.title,c=a.children,d=a.className,e=a.mobileFullWidth;return(0,m.jsxs)("div",{className:u()(v().sectionBody,d,(0,t.Z)({},v().mobileFullWidth,e)),children:[b&&(0,m.jsx)("h2",{className:v().sectionTitle,children:b}),c]})},J=function(a){var s=a.date,b=a.imagesUrls,t=a.title,u=a.subtitle,c=a.description,d=void 0===c?[]:c,e=a.implementationDetails,f=void 0===e?[]:e,g=a.tags,h=a.links,i=void 0===h?[]:h,j=a.gitHubUrl,k=void 0===j?"":j,l=a.appleAppStoreUrl,n=void 0===l?"":l,o=a.googlePlayStoreUrl,p=void 0===o?"":o,q=a.youtubeVideoIds,r=void 0===q?[]:q;return(0,m.jsxs)("main",{className:v().container,children:[(0,m.jsx)(E,{imagesUrls:void 0===b?[]:b}),(0,m.jsxs)(I,{className:v().header,children:[(0,m.jsxs)("div",{className:v().information,children:[(0,m.jsxs)("h2",{className:v().title,children:[t,(0,m.jsx)("span",{className:v().date,children:s})]}),(0,m.jsx)("span",{className:v().subtitle,children:u}),(0,m.jsx)(F.Z,{tags:void 0===g?[]:g})]}),k&&(0,m.jsx)(x,{href:k,className:v().gitHubLink,icon:(0,m.jsx)("img",{className:v().iconImage,src:"/images/GitHub-Mark-64px.png",alt:"GitHub Logo",height:20,width:20}),children:"View on GitHub"})]}),d.length>0&&(0,m.jsx)(I,{className:v().descriptionItems,children:d.map(function(a,b){return(0,m.jsx)("p",{className:v().descriptionItem,children:a},b)})}),f.length>0&&(0,m.jsx)(I,{title:"Implementation",children:(0,m.jsx)("ul",{className:v().implementationDetails,children:f.map(function(a,b){return(0,m.jsx)("li",{className:v().bullet,children:a},b)})})}),i.length>0&&(0,m.jsx)(I,{title:"Links",className:v().externalLinks,children:(0,m.jsx)("div",{className:v().externalLinks,children:i.map(function(a,b){return(0,m.jsx)(x,{href:a.href,children:a.text},b)})})}),(n||p)&&(0,m.jsx)(I,{title:"Store Presence",children:(0,m.jsx)(H,{appleAppStoreUrl:n,googlePlayStoreUrl:p})}),r.length>0&&(0,m.jsx)(I,{title:"Videos",mobileFullWidth:!0,children:r.map(function(a){return(0,m.jsx)("div",{className:v().video,children:(0,m.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(a),title:t,frameBorder:"0",allowFullScreen:!0})},a)})})]})},K=!0;function L(b){var a=b.project;return a?(0,m.jsx)(q,{children:(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(r.Z,{title:"".concat(a.title," | Project"),description:a.description.join(""),imageUrl:a.metaImageUrl}),(0,m.jsx)(J,(0,l.Z)({},a))]})}):null}},3323:function(d,b,a){"use strict";a.d(b,{Z:function(){return g}});var e=a(5893),c=a(9008),f=a.n(c);function g(a){var d=a.title,b=void 0===d?"Gonzalo Cumini | Portfolio":d,g=a.url,h=void 0===g?"z4gon.github.io/":g,i=a.imageUrl,j=void 0===i?"/images/portfolio/starcat/meta.jpg":i,k=a.faviconUrl,l=a.description,c=void 0===l?"Gonzalo Cumini | Portfolio":l;return(0,e.jsxs)(f(),{children:[(0,e.jsx)("title",{children:b}),(0,e.jsx)("meta",{name:"title",content:b}),(0,e.jsx)("meta",{name:"description",content:c}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:url",content:h}),(0,e.jsx)("meta",{property:"og:title",content:b}),(0,e.jsx)("meta",{property:"og:description",content:c}),(0,e.jsx)("meta",{property:"og:image",content:j}),(0,e.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,e.jsx)("meta",{property:"twitter:url",content:h}),(0,e.jsx)("meta",{property:"twitter:title",content:b}),(0,e.jsx)("meta",{property:"twitter:description",content:c}),(0,e.jsx)("meta",{property:"twitter:image",content:j}),(0,e.jsx)("link",{rel:"icon",href:void 0===k?"/favicon.ico":k})]})}},9160:function(d,b,a){"use strict";var e=a(5893),c=a(910),f=a.n(c);b.Z=function(a){var b=a.tags;return(0,e.jsx)("div",{className:f().tags,children:b.map(function(a,b){return(0,e.jsx)("span",{className:f().tag,children:a},b)})})}},231:function(f,b,a){"use strict";a.d(b,{Z:function(){return o}});var g=a(5893),c=a(164),h=a.n(c),i=a(6042),d=a(1664),j=a.n(d),e=a(4666),k=a.n(e),l=function(a){var b=a.href,c=a.iconUrl;return(0,g.jsx)("a",{href:b,rel:"noopener noreferrer",target:"_blank",children:(0,g.jsx)("img",{className:k().iconImage,src:c,alt:b,height:30,width:30})})},m=[{href:"https://linkedin.com/in/gonzacn",iconUrl:"/images/In-Blue-72.png"},{href:"https://github.com/z4gon",iconUrl:"/images/GitHub-Mark-64px.png"},],n=function(){return(0,g.jsxs)("nav",{className:k().navbar,children:[(0,g.jsx)(j(),{href:"/",children:(0,g.jsx)("a",{className:k().titleLink,children:(0,g.jsx)("h1",{className:k().title,children:"Gonzalo Cumini"})})}),(0,g.jsx)("ul",{className:k().icons,children:m.map(function(a){return(0,g.jsx)("li",{className:k().icon,children:(0,g.jsx)(l,(0,i.Z)({},a))},a.href)})})]})},o=function(a){var b=a.children;return(0,g.jsxs)("div",{className:h().page,children:[(0,g.jsx)(n,{}),b]})}},1935:function(a){a.exports={externalLink:"ExternalLink_externalLink__10DeB",icon:"ExternalLink_icon__cnpvT"}},910:function(a){a.exports={tags:"Tags_tags__3Bx_D",tag:"Tags_tag__I1Kga"}},6828:function(a){a.exports={overlay:"FullScreenCarousel_overlay__hpL_y",image:"FullScreenCarousel_image__0n8jO",closeButton:"FullScreenCarousel_closeButton__zA9yL",nextButton:"FullScreenCarousel_nextButton__aBX1H",prevButton:"FullScreenCarousel_prevButton__LTQSi"}},1:function(a){a.exports={openButton:"GoFullScreenButton_openButton__mFH3e"}},7687:function(a){a.exports={slider:"ImagesSlider_slider__f3BjR",image:"ImagesSlider_image__br0Tp","slick-arrow":"ImagesSlider_slick-arrow__F4A7p","slick-next":"ImagesSlider_slick-next__pV65Z"}},4666:function(a){a.exports={navbar:"NavBar_navbar__W8B89",titleLink:"NavBar_titleLink__OtPh0",title:"NavBar_title__R8ar3",icons:"NavBar_icons__Q_6kO",icon:"NavBar_icon__MjYq8",iconImage:"NavBar_iconImage__cajrI"}},164:function(a){a.exports={page:"Page_page__0A7TG"}},6399:function(a){a.exports={container:"ProjectDetails_container__GQ6aD",header:"ProjectDetails_header__06LzA",gitHubLink:"ProjectDetails_gitHubLink__vbvNO",iconImage:"ProjectDetails_iconImage__BsJ_W",information:"ProjectDetails_information__Td_im",title:"ProjectDetails_title__aiZsZ",date:"ProjectDetails_date__CNpb0",subtitle:"ProjectDetails_subtitle__tYt6g",sectionBody:"ProjectDetails_sectionBody__L515_",mobileFullWidth:"ProjectDetails_mobileFullWidth__gku55",sectionTitle:"ProjectDetails_sectionTitle__5d6yu",descriptionItems:"ProjectDetails_descriptionItems__oqU69",descriptionItem:"ProjectDetails_descriptionItem__LJR1A",implementationDetails:"ProjectDetails_implementationDetails__QK7L_",bullet:"ProjectDetails_bullet__45nIQ",externalLinks:"ProjectDetails_externalLinks__tG0Bx",video:"ProjectDetails_video__QM3Xo"}},5662:function(a){a.exports={storeLinks:"StoreLinks_storeLinks__oKk99",appleAppStoreBadge:"StoreLinks_appleAppStoreBadge__jJXsC",googlePlayStoreBadge:"StoreLinks_googlePlayStoreBadge__WZwcX"}}},function(a){a.O(0,[996,55,774,888,179],function(){var b;return a(a.s=1244)}),_N_E=a.O()}])