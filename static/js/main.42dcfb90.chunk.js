(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,r,a=n(0),i=n.n(a),o=n(5),s=n.n(o),d=n(6),b=n(7),u=n(8),j=n(11),h=n(10),l=n(2),p=n(3),x=p.a.div(c||(c=Object(l.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  padding: 40px 15px 0 15px;\n  margin-right: auto;\n"]))),O=n(1),f=function(e){var t=e.children;return Object(O.jsx)(x,{children:t})},g=p.a.button(r||(r=Object(l.a)(["\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 200px;\n  height: 50px;\n"]))),v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.OnInrement=function(t){e.setState((function(e){return Object(d.a)({},t,e[t]+1)}))},e.createBtn=function(t){return Object(O.jsx)(g,{type:"button",onClick:function(){return e.OnInrement(t)},children:t},t)},e.createBtns=function(){return Object.keys(e.state).map(e.createBtn)},e.totalfeedbacks=function(e){return e.good+e.neutral+e.bad},e.positivePercentage=function(e){var t=e.good,n=e.neutral,c=e.bad;return Math.round(100*t/(t+n+c))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(O.jsxs)(f,{children:[Object(O.jsxs)("h1",{children:["Please leave feedback",Object(O.jsx)("div",{children:this.createBtns()})]}),Object(O.jsx)("h2",{children:"Statistics"}),t||n||c>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:[" good: ",t]}),Object(O.jsxs)("p",{children:["neutral: ",n]}),Object(O.jsxs)("p",{children:["bad: ",c]}),Object(O.jsxs)("p",{children:["Total: ",this.totalfeedbacks({good:t,neutral:n,bad:c})]}),Object(O.jsxs)("p",{children:["Positive feedback:"," ",this.positivePercentage({good:t,neutral:n,bad:c}),"%"]})]}):Object(O.jsx)("p",{children:"No feedback given"})]})}}]),n}(a.Component);n(21);s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.42dcfb90.chunk.js.map