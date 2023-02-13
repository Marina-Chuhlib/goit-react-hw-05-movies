"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[42],{6042:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(9439),s=r(7757),i=r.n(s),c=r(2791),u=r(1087),o=r(7689),l=r(8407),p=r(8790),v=r(7596),d=(r(5462),"MovieDetailsPage_wrapper__TH-Xi"),f="MovieDetailsPage_button__mSHH6",m="MovieDetailsPage_icon__PTpsZ",h="MovieDetailsPage_title__63V3V",_="MovieDetailsPage_img__+Nbrw",x="MovieDetailsPage_info__wQ8PP",g="MovieDetailsPage_topic__XiARy",w="MovieDetailsPage_list__xeLC8",j="MovieDetailsPage_wrapperLink__m8P4T",b="MovieDetailsPage_buttonLink__2NjbM",k="MovieDetailsPage_link__rhdjc",P=r(6856),N=r(184),y=function(){var e,t=(0,c.useState)(null),r=(0,a.Z)(t,2),s=r[0],y=r[1],Z=(0,c.useState)(!1),M=(0,a.Z)(Z,2),D=M[0],S=M[1],T=(0,c.useState)(null),C=(0,a.Z)(T,2),U=C[0],H=C[1],L=(0,c.useState)([]),F=(0,a.Z)(L,2),R=F[0],A=F[1],G=(0,c.useState)(""),I=(0,a.Z)(G,2),O=I[0],V=I[1],X=(0,o.UO)().movieId,q=(0,o.s0)(),z=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/movies";(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,(0,l.TP)(X);case 4:t=e.sent,console.log(t),y(t),A(t.genres),V(t.release_date),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),r=e.t0.response,H(r.data.message),v.Am.error("\ud83e\udd84 Sorry,".concat(r.data.message));case 16:return e.prev=16,S(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,11,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[X,y,S]);var E=R.map((function(e){var t=e.name,r=e.id;return(0,N.jsx)("li",{children:t},r)})),J=new Date(O).getFullYear();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("button",{type:"button",onClick:function(){return q(z)},className:f,children:[(0,N.jsx)(P.dWm,{className:m})," Go back"]}),D&&(0,N.jsx)(p.Z,{}),U&&(0,N.jsx)(v.Ix,{theme:"colored"}),s&&(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(s.poster_path),alt:s.original_title,loading:"lazy",className:_,width:"300px",height:"450px"}),(0,N.jsxs)("div",{className:x,children:[(0,N.jsxs)("h2",{className:h,children:[s.original_title,(0,N.jsxs)("span",{children:[" (",J,")"]})]}),(0,N.jsxs)("p",{children:["User score: ",(s.vote_average/10*100).toFixed(0),"%"]}),(0,N.jsx)("h3",{className:g,children:"Genres"}),(0,N.jsx)("ul",{className:w,children:E}),(0,N.jsx)("h3",{className:g,children:"Overview"}),(0,N.jsx)("p",{children:s.overview})]})]}),(0,N.jsxs)("div",{className:j,children:[(0,N.jsxs)("button",{type:"button",className:b,children:[" ",(0,N.jsx)(u.rU,{state:{from:z},to:"/movies/".concat(X,"/cast"),className:k,children:"Cast"})]}),(0,N.jsx)("button",{type:"button",className:b,children:(0,N.jsx)(u.rU,{state:{from:z},to:"/movies/".concat(X,"/reviews"),className:k,children:"Reviews"})})]}),(0,N.jsx)(o.j3,{})]})}},8407:function(e,t,r){r.d(t,{Jh:function(){return p},M1:function(){return l},TP:function(){return u},Zf:function(){return o},x1:function(){return c}});var n=r(5861),a=r(7757),s=r.n(a),i=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b73de80df2ed50327adfc0ab4da97097"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,i.get("/trending/movie/day?",{params:{page:t}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"//reviews?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.c02d1108.chunk.js.map