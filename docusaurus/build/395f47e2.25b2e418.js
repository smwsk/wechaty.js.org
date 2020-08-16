(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{141:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},l=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=d(r),l=a,b=p["".concat(o,".").concat(l)]||p[l]||h[l]||c;return r?n.a.createElement(b,i(i({ref:t},s),{},{components:r})):n.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(6),c=(r(0),r(141)),o={title:"Advanced"},i={unversionedId:"advanced",id:"advanced",isDocsHomePage:!1,title:"Advanced",description:"1. Wechaty Tutorial",source:"@site/docs/advanced.md",permalink:"/docs/advanced",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/advanced.md",lastUpdatedBy:"lijiarui",lastUpdatedAt:1597583850,sidebar:"docs",previous:{title:"Awesome Wechaty",permalink:"/docs/awesome-wechaty"},next:{title:"Resources",permalink:"/docs/resources"}},u=[{value:"1. Wechaty Tutorial",id:"1-wechaty-tutorial",children:[]},{value:"2. Docker Wechaty Getting Started",id:"2-docker-wechaty-getting-started",children:[]},{value:"3. Heroku Wechaty Getting Started",id:"3-heroku-wechaty-getting-started",children:[]}],s={rightToc:u};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-wechaty-tutorial"},"1. Wechaty Tutorial"),Object(c.b)("p",null,"Above is a 10 minute video tutorial, which is a good way to start if you are new to Wechaty."),Object(c.b)("p",null,"For visiters come from China who can not visit YouTube.com, this video is also hosted on Tencent Video, see: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://v.qq.com/x/page/k0726ho4rce.html"}),"Getting Started with Wechaty @ Tencent")),Object(c.b)("h2",{id:"2-docker-wechaty-getting-started"},"2. Docker Wechaty Getting Started"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wechaty/docker-wechaty-getting-started"}),Object(c.b)("img",Object(a.a)({parentName:"a"},{src:"https://avatars0.githubusercontent.com/u/5429470?s=200",alt:"Docker"})))),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wechaty/docker-wechaty-getting-started"}),"https://github.com/wechaty/docker-wechaty-getting-started")),Object(c.b)("h2",{id:"3-heroku-wechaty-getting-started"},"3. Heroku Wechaty Getting Started"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wechaty/heroku-wechaty-getting-started"}),Object(c.b)("img",Object(a.a)({parentName:"a"},{src:"https://avatars3.githubusercontent.com/u/23211?s=200",alt:"Heroku"})))),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wechaty/heroku-wechaty-getting-started"}),"https://github.com/wechaty/heroku-wechaty-getting-started")))}d.isMDXComponent=!0}}]);