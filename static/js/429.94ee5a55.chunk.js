"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[429],{2277:function(n,r,e){e.d(r,{$:function(){return s}});var t,a=e(168),s=e(6031).ZP.section(t||(t=(0,a.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"])))},2690:function(n,r,e){e.d(r,{JS:function(){return d},Q_:function(){return h},cI:function(){return v},kh:function(){return f},ts:function(){return l}});var t=e(1413),a=e(5861),s=e(7757),c=e.n(s),i=e(4569),o=e.n(i),u=e(5218);o().defaults.baseURL="https://api.themoviedb.org/3";var p={params:{api_key:"6b956d9320e8e098b01748da89295179"}},d=function(){var n=(0,a.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/trending/movie/day",p);case 3:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),u.ZP.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(r),p);case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),u.ZP.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(r,"/credits"),p);case 3:return e=n.sent,t=e.data.cast,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),u.ZP.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(r,"/reviews"),p);case 3:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),u.ZP.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(c().mark((function n(r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/search/movie",{params:(0,t.Z)((0,t.Z)({},p.params),{},{query:r})});case 3:return e=n.sent,a=e.data.results,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),u.ZP.error("Ups... Something went wrong :(");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}()},6429:function(n,r,e){e.r(r),e.d(r,{default:function(){return $}});var t,a,s,c,i,o,u,p,d,l=e(885),v=e(2791),f=e(6871),h=e(2690),x=e(2277),m=e(168),g=e(6031),Z=e(3504),w=(0,g.ZP)(Z.rU)(t||(t=(0,m.Z)(["\n  display: block;\n  margin-top: 20px;\n"]))),j=g.ZP.img(a||(a=(0,m.Z)(["\n  width: 300px;\n"]))),b=g.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  gap: 32px;\n"]))),k=g.ZP.div(c||(c=(0,m.Z)(["\n  padding: 20px;\n"]))),P=g.ZP.h2(i||(i=(0,m.Z)(["\n  margin-bottom: 16px;\n"]))),_=g.ZP.p(o||(o=(0,m.Z)(["\n  margin-bottom: 12px;\n"]))),y=g.ZP.h3(u||(u=(0,m.Z)(["\n  margin-bottom: 12px;\n"]))),U=(0,g.ZP)(Z.rU)(p||(p=(0,m.Z)(["\n  color: black;\n  font-size: 16px;\n"]))),S=g.ZP.div(d||(d=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),C=e(184),$=function(){var n,r,e=(0,f.TH)(),t=(0,f.UO)().movieId,a=(0,v.useState)(""),s=(0,l.Z)(a,2),c=s[0],i=s[1];console.log(e),(0,v.useEffect)((function(){(0,h.ts)(t).then((function(n){if(n)return i(n)}))}),[t]);var o=c.genres,u=c.title,p=c.vote_average,d=c.overview,m=c.release_date,g=c.poster_path;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w,{to:null!==(n=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/",children:"Go back"}),c&&(0,C.jsxs)("div",{children:[(0,C.jsx)(x.$,{children:(0,C.jsxs)(b,{children:[(0,C.jsx)(j,{src:"https://image.tmdb.org/t/p/w500".concat(g),alt:"poster"}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[u," (",m.substring(0,4),")"]}),(0,C.jsxs)(_,{children:["User Score: ",10*p,"%"]}),(0,C.jsx)(y,{children:"Overview"}),(0,C.jsx)(_,{children:d}),(0,C.jsx)(y,{children:"Genres"}),(0,C.jsx)(_,{children:o.map((function(n){return n.name})).join(" ")})]})]})}),(0,C.jsxs)(x.$,{children:[(0,C.jsx)(P,{children:"Additional information"}),(0,C.jsxs)(S,{children:[(0,C.jsx)(U,{state:{from:e.state.from},to:"cast",children:"Cast"}),(0,C.jsx)(U,{state:{from:e.state.from},to:"reviews",children:"Reviews"})]}),(0,C.jsx)(v.Suspense,{fallback:"",children:(0,C.jsx)(f.j3,{})})]})]})]})}}}]);
//# sourceMappingURL=429.94ee5a55.chunk.js.map