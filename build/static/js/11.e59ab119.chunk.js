(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{1088:function(e,n,t){"use strict";t.r(n);t(0);var i,c,r,s,a,l,o,d,j=t(12),b=t(169),x=t.n(b),p=t(57),u=t(149),m=t(47),h=t(16),O=t(7),f=t(69),g=t(4),v=O.e.div(i||(i=Object(h.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=O.e.div(c||(c=Object(h.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),F=O.e.div(r||(r=Object(h.a)(["\n  flex: 1;\n"]))),w=O.e.img(s||(s=Object(h.a)(["\n  border-radius: 50%;\n"]))),k=Object(O.e)(j.F).attrs({as:"h3"})(a||(a=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),S=O.e.div(l||(l=Object(h.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),w,(function(e){return e.theme.mediaQueries.md})),z=O.e.div(o||(o=Object(h.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),w),E=Object(O.e)(j.o)(d||(d=Object(h.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),D=function(e){var n=e.rank,t=e.team,i=Object(m.a)(),c=Object(g.jsx)(w,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsxs)(E,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.cb,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(F,{children:[Object(g.jsxs)(j.E,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(S,{children:c}),Object(g.jsx)(k,{children:t.name})]}),Object(g.jsx)(j.cb,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:t.description}),Object(g.jsxs)(j.E,{children:[Object(g.jsxs)(j.E,{children:[Object(g.jsx)(j.V,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.cb,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.E,{ml:"24px",children:[Object(g.jsx)(j.B,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.cb,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.k,{as:f.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:i(1042,"See More")}),Object(g.jsx)(z,{children:c})]})]})},I=t(883);n.default=function(){var e=Object(m.a)(),n=Object(p.q)(),t=n.teams,i=n.isLoading,c=Object.values(t),r=x()(c,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(u.a,{children:[Object(g.jsx)(I.a,{}),Object(g.jsxs)(j.E,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.F,{size:"xl",children:e(1040,"Teams")}),i&&Object(g.jsx)(j.d,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(D,{rank:n+1,team:e},e.id)}))]})}},856:function(e,n,t){"use strict";var i,c=t(16),r=t(7).e.div(i||(i=Object(c.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},883:function(e,n,t){"use strict";t(0);var i=t(12),c=t(57),r=t(47),s=t(856),a=t(69),l=t(4),o=function(){var e=Object(r.a)();return Object(l.jsx)(i.o,{mb:"32px",isActive:!0,children:Object(l.jsx)(i.p,{children:Object(l.jsxs)(i.E,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i.F,{size:"lg",mb:"8px",children:e(1052,"You haven't set up your profile yet!")}),Object(l.jsx)(i.cb,{children:e(1054,"You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(i.k,{as:a.a,to:"/profile",mt:["16px",null,0],children:e(1050,"Set up now")})]})})})};n.a=function(){var e=Object(r.a)(),n=Object(c.o)(),t=n.isInitialized,a=n.profile,d=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.F,{as:"h1",size:"xxl",color:"secondary",children:e(1082,"Teams & Profiles")}),Object(l.jsx)(i.cb,{bold:!0,children:e(999,"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=11.e59ab119.chunk.js.map