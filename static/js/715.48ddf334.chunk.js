"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[715],{9887:function(n,r,t){t.d(r,{Z:function(){return h}});var e,a,u,c=t(3504),i=t(6871),s=t(168),o=t(6031),p=o.ZP.h1(e||(e=(0,s.Z)(["\n  margin-bottom: 20px;\n"]))),f=o.ZP.ul(a||(a=(0,s.Z)(["\n  padding-left: 20px;\n"]))),v=o.ZP.li(u||(u=(0,s.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),l=t(2277),d=t(184),h=function(n){var r=n.films,t=n.title,e=(0,i.TH)();return(0,d.jsxs)(l.$,{children:[t&&(0,d.jsx)(p,{children:t}),(0,d.jsx)(f,{children:r.map((function(n){var r=n.title,t=n.id;return(0,d.jsx)(v,{children:(0,d.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})]})}},2277:function(n,r,t){t.d(r,{$:function(){return u}});var e,a=t(168),u=t(6031).ZP.section(e||(e=(0,a.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"])))},1715:function(n,r,t){t.r(r),t.d(r,{default:function(){return s}});var e=t(9887),a=t(885),u=t(2791),c=t(4390),i=t(184),s=function(){var n=function(){var n=(0,u.useState)([]),r=(0,a.Z)(n,2),t=r[0],e=r[1];return(0,u.useEffect)((function(){(0,c.JS)().then((function(n){Array.isArray(n)&&e(n)}))}),[]),t}();return(0,i.jsx)("div",{children:(0,i.jsx)(e.Z,{films:n,title:"Trending films"})})}},4390:function(n,r,t){t.d(r,{JS:function(){return f},Q_:function(){return h},cI:function(){return l},kh:function(){return d},ts:function(){return v}});var e=t(1413),a=t(5861),u=t(7757),c=t.n(u),i=t(4569),s=t.n(i),o=t(8174);s().defaults.baseURL="https://api.themoviedb.org/3";var p={params:{api_key:"6b956d9320e8e098b01748da89295179"}},f=function(){var n=(0,a.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("/trending/movie/day",p);case 3:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),o.Am.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("/movie/".concat(r),p);case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),o.Am.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("/movie/".concat(r,"/credits"),p);case 3:return t=n.sent,e=t.data.cast,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),o.Am.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("/movie/".concat(r,"/reviews"),p);case 3:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),o.Am.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(c().mark((function n(r){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("/search/movie",{params:(0,e.Z)((0,e.Z)({},p.params),{},{query:r})});case 3:return t=n.sent,a=t.data.results,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),o.Am.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=715.48ddf334.chunk.js.map