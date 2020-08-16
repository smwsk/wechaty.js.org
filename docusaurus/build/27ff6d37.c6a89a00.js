(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{141:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(a),h=n,d=s["".concat(o,".").concat(h)]||s[h]||b[h]||c;return a?r.a.createElement(d,i(i({ref:t},u),{},{components:a})):r.a.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(141)),o={title:"Wechaty FAQ: Miscellaneous",sidebar_label:"Miscellaneous"},i={unversionedId:"faq/miscellaneous",id:"faq/miscellaneous",isDocsHomePage:!1,title:"Wechaty FAQ: Miscellaneous",description:"Table of Contents",source:"@site/docs/faq/miscellaneous.md",permalink:"/docs/faq/miscellaneous",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/faq/miscellaneous.md",lastUpdatedBy:"lijiarui",lastUpdatedAt:1597583850,sidebar_label:"Miscellaneous",sidebar:"docs",previous:{title:"Wechaty FAQ: Puppet",permalink:"/docs/faq/puppet"},next:{title:"Troubleshooting Index",permalink:"/docs/troubleshooting"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[{value:"What is a <code>Puppet</code> in Wechaty",id:"what-is-a-puppet-in-wechaty",children:[]},{value:"Wechaty &amp; Queue",id:"wechaty--queue",children:[]},{value:"What&#39;s the difference between wechaty and wechat4u?",id:"whats-the-difference-between-wechaty-and-wechat4u",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"General"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#11-i-can-not-login-with-my-wechat-account"}),"Cannot login")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#a"}),"What wechaty cannot do on wechat")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Others"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#b"}),"Can wechaty send url rich media message?")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#c"}),"I don't know wechaty support for personal account of wechat official account?"))))),Object(c.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(c.b)("h3",{id:"what-is-a-puppet-in-wechaty"},"What is a ",Object(c.b)("inlineCode",{parentName:"h3"},"Puppet")," in Wechaty"),Object(c.b)("p",null,"The term ",Object(c.b)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat","(","that's the reason we call it puppet",")","."),Object(c.b)("p",null,"The plugins are named ",Object(c.b)("inlineCode",{parentName:"p"},"XXXPuppet"),", like ",Object(c.b)("inlineCode",{parentName:"p"},"PuppetPuppeteer")," is using the chrome puppeteer to control the WeChat Web API via a chrome browser, ",Object(c.b)("inlineCode",{parentName:"p"},"PuppetPadchat")," is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program."),Object(c.b)("h3",{id:"wechaty--queue"},"Wechaty & Queue"),Object(c.b)("p",null,"In order not blocked by wechat, we add queue in wechaty, see more: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zixia/rx-queue"}),"rx-queue")),Object(c.b)("h3",{id:"whats-the-difference-between-wechaty-and-wechat4u"},"What's the difference between wechaty and wechat4u?"),Object(c.b)("p",null,"Wechaty can implement many wechat protocol plughins. The plugins are the component that helps Wechaty to control the Wechat. Wechaty provide same API in web, ipad, ios solutions. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nodeWechat/wechat4u"}),"wechat4u")," is ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/spacelan"}),"SPACELAN")," write as a web solution on github. Wechaty can use wechaty API call wechat 4u API"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Is this right: wechaty has All api in wechat4u, but wechat 4u don't have all api wechaty has.")),Object(c.b)("p",null,"No, wechaty use wechaty itself API for wechat4u. They are totally 2 different project and no one contains another."))}p.isMDXComponent=!0}}]);