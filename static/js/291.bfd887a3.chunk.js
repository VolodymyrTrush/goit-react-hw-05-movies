"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[291],{6083:function(n,e,t){t.d(e,{Hx:function(){return h},Mc:function(){return p},SU:function(){return l},cn:function(){return f},uV:function(){return d}});var r=t(5861),i=t(7757),c=t.n(i),s=t(4569),a=t.n(s);a().defaults.baseURL="https://api.themoviedb.org/3";var u="0d3c19a06e728eab3e881b744ba766c6",o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,i,s,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:"",r={api_key:u},t&&(r.query=t),i=new URLSearchParams(r),n.next=7,a().get("".concat(e,"?").concat(i));case 7:return s=n.sent,n.next=10,s.data;case 10:return n.abrupt("return",n.sent);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("/trending/movie/week");case 2:return e=n.sent,n.abrupt("return",e.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("/movie/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("/search/movie",e);case 2:return t=n.sent,n.abrupt("return",t.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1291:function(n,e,t){t.r(e),t.d(e,{MovieDetailsPage:function(){return R},default:function(){return A}});var r,i,c,s,a,u,o,l,p,d=t(8152),h=t(3504),f=t(6871),x=t(2791),v=t(6083),m=t(168),j=t(6031),g=j.ZP.div(r||(r=(0,m.Z)(["\ndisplay: flex;\npadding-bottom: 20px;\nborder-bottom: 1px solid #ccc;\n"]))),w=j.ZP.img(i||(i=(0,m.Z)(["\n  display: block;\n  max-width: 100%;\n  width: 500px;\n  height: auto;\n"]))),b=j.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: fit-content;\n  margin-left: 30px;\n"]))),Z=j.ZP.h2(s||(s=(0,m.Z)(["\n  font-weight: 700;\n"]))),k=j.ZP.p(a||(a=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n"]))),_=j.ZP.p(u||(u=(0,m.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),y=j.ZP.button(o||(o=(0,m.Z)(["\n  margin-bottom: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  padding: 10px;\n  border: 1px solid #ccc;\n    &:hover {\n    background-color: #orange;\n  "]))),P=t(2547),E=j.ZP.div(l||(l=(0,m.Z)(["\n    width: 150px;\n    margin-right: 20px;\n    "]))),O=j.ZP.div(p||(p=(0,m.Z)(["\n    padding: 10px;\n    width: 500px;\n    > img {\n        width: 200px;\n    }\n    "]))),S=t(184),U=function(n){var e=n.id,t=(0,x.useState)(null),r=(0,d.Z)(t,2),i=r[0],c=r[1];return(0,x.useEffect)((function(){v.uV(e).then(c)}),[e]),(0,S.jsx)(S.Fragment,{children:i&&(0,S.jsx)("ul",{children:i.map((function(n){var e=n.name,t=n.character,r=n.profile_path,i=n.id;return(0,S.jsx)("li",{children:(0,S.jsxs)(O,{children:[r&&(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r),alt:e}),(0,S.jsxs)(E,{children:[(0,S.jsx)("p",{children:e}),(0,S.jsxs)("p",{children:["Character: ",t]})]})]})},i)}))})})},C=function(n){var e=n.id,t=(0,x.useState)([]),r=(0,d.Z)(t,2),i=r[0],c=r[1];return(0,x.useEffect)((function(){v.Hx(e).then(c)}),[e]),(0,S.jsx)(S.Fragment,{children:i.length>0?(0,S.jsx)("ul",{children:i.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,S.jsx)("li",{children:(0,S.jsx)("div",{children:(0,S.jsxs)("div",{children:[(0,S.jsxs)("h3",{children:["Author: ",e]}),(0,S.jsx)("p",{children:t})]})})},r)}))}):(0,S.jsx)("p",{children:"There is no reviews yet!"})})},L={init:!0,title:"",poster_path:"",vote_average:"",overview:"",genres:[]},R=function(){var n,e=(0,x.useState)(L),t=(0,d.Z)(e,2),r=t[0],i=t[1],c=(0,f.s0)(),s=(0,f.TH)().state,a=(0,x.useRef)(null);(0,x.useEffect)((function(){s&&(a.current=s)}),[s]);var u=(0,f.UO)().slug.match(/[a-z0-9]+$/)[0];(0,x.useEffect)((function(){v.Mc(u).then(i)}),[u]);var o=r.title,l=r.poster_path,p=r.vote_average,m=r.overview,j=r.genres.map((function(n){return n.name})).join(", ");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(y,{type:"button",onClick:function(){var n=a.current?a.current:"/";c(n)},children:["Back",null===(n=a.current)||void 0===n?void 0:n.label]}),!r.init&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(g,{children:[(0,S.jsx)(w,{src:l?"https://image.tmdb.org/t/p/w300".concat(l):P,alt:o}),(0,S.jsxs)(b,{children:[(0,S.jsx)(Z,{children:o}),(0,S.jsxs)(k,{children:["User score: ",10*p," %"]}),(0,S.jsx)(k,{children:"Overview"}),(0,S.jsx)(_,{children:m}),(0,S.jsx)(k,{children:"Genres"}),(0,S.jsx)("p",{children:j})]})]}),(0,S.jsxs)("ul",{children:[(0,S.jsx)("li",{children:(0,S.jsx)(h.OL,{to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(h.OL,{to:"reviews",children:"Reviews"})})]}),(0,S.jsx)(x.Suspense,{fallback:(0,S.jsx)("h1",{children:"LOADING THE ROUTE..."}),children:(0,S.jsxs)(f.Z5,{children:[(0,S.jsx)(f.AW,{path:"cast",element:(0,S.jsx)(U,{id:u})}),(0,S.jsx)(f.AW,{path:"reviews",element:(0,S.jsx)(C,{id:u})})]})})]})]})},A=R},2547:function(n,e,t){n.exports=t.p+"static/media/poster.4b6b033ad55f686f9601.jpg"}}]);
//# sourceMappingURL=291.bfd887a3.chunk.js.map