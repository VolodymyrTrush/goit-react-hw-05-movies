"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[176],{9887:function(r,e,n){n.d(e,{Z:function(){return d}});var t,a,u,c=n(3504),s=n(6871),i=n(168),o=n(6031),p=o.ZP.h1(t||(t=(0,i.Z)(["\n  margin-bottom: 20px;\n"]))),f=o.ZP.ul(a||(a=(0,i.Z)(["\n  padding-left: 20px;\n"]))),l=o.ZP.li(u||(u=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),h=n(2277),v=n(184),d=function(r){var e=r.films,n=r.title,t=(0,s.TH)();return(0,v.jsxs)(h.$,{children:[n&&(0,v.jsx)(p,{children:n}),(0,v.jsx)(f,{children:e.map((function(r){var e=r.title,n=r.id;return(0,v.jsx)(l,{children:(0,v.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:t},children:e})},n)}))})]})}},2277:function(r,e,n){n.d(e,{$:function(){return u}});var t,a=n(168),u=n(6031).ZP.section(t||(t=(0,a.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"])))},2690:function(r,e,n){n.d(e,{JS:function(){return f},Q_:function(){return d},cI:function(){return h},kh:function(){return v},ts:function(){return l}});var t=n(1413),a=n(5861),u=n(7757),c=n.n(u),s=n(4569),i=n.n(s),o=n(5218);i().defaults.baseURL="https://api.themoviedb.org/3";var p={params:{api_key:"6b956d9320e8e098b01748da89295179"}},f=function(){var r=(0,a.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/trending/movie/day",p);case 3:return e=r.sent,n=e.data.results,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/movie/".concat(e),p);case 3:return n=r.sent,t=n.data,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/movie/".concat(e,"/credits"),p);case 3:return n=r.sent,t=n.data.cast,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/movie/".concat(e,"/reviews"),p);case 3:return n=r.sent,t=n.data.results,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,a.Z)(c().mark((function r(e){var n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/search/movie",{params:(0,t.Z)((0,t.Z)({},p.params),{},{query:e})});case 3:return n=r.sent,a=n.data.results,r.abrupt("return",a);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},2176:function(r,e,n){n.r(e),n.d(e,{default:function(){return g}});var t,a=n(885),u=n(2791),c=n(5705),s=n(4386),i=n(168),o=n(6031).ZP.div(t||(t=(0,i.Z)(["\n  padding: 20px;\n"]))),p=n(184),f=s.Ry({query:s.Z_().required()}),l=function(r){var e,n=r.setSearchParams,t=r.searchParams,a={query:"".concat(null!==(e=t.get("query"))&&void 0!==e?e:"")};return(0,p.jsx)(o,{children:(0,p.jsx)(c.J9,{initialValues:a,validationSchema:f,onSubmit:function(r){n({query:r.query.trim()})},children:(0,p.jsxs)(c.l0,{autoComplete:"off",children:[(0,p.jsx)(c.gN,{type:"text",name:"query",placeholder:"Please, enter a query"}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})})})},h=n(3504),v=n(2690),d=n(9887),m=n(5218),g=function(){var r=(0,h.lr)(),e=(0,a.Z)(r,2),n=e[0],t=e[1],c=n.get("query"),s=(0,u.useState)([]),i=(0,a.Z)(s,2),o=i[0],f=i[1];return(0,u.useEffect)((function(){c&&(0,v.Q_)(c).then((function(r){r.length>0?f(r):m.ZP.error("Sorry, there are no movies for your request")}))}),[c]),(0,p.jsxs)("div",{children:[(0,p.jsx)(l,{setSearchParams:t,searchParams:n}),o.length>0&&(0,p.jsx)(d.Z,{films:o})]})}}}]);
//# sourceMappingURL=176.3594a70e.chunk.js.map