(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){e.exports=a(91)},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(33),u=a(12),s=a(18),i=a(8),m=a.n(i),p=a(14),d=a(9),f=a(13),E=a(6),b=function(e,t){switch(t.type){case"GET_TRANSACTIOS":return Object(E.a)({},e,{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(E.a)({},e,{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(E.a)({},e,{transactions:[].concat(Object(f.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(E.a)({},e,{error:t.payload});case"LOGIN":return Object(E.a)({},e,{data:[].concat(Object(f.a)(e.data),[t.payload]),success:!0});case"LOGIN_ERROR":return Object(E.a)({},e,{login:{success:!1,error:t.payload,status:t.status}});case"LOGOUT":return Object(E.a)({},e,{success:!1});default:return e}},v=a(17),O=a.n(v),h={transactions:[],error:[],data:[],loading:!0,success:!!localStorage.getItem("token"),login:{status:"",error:[]}},g=Object(n.createContext)(h),y=function(e){var t=e.children,a=Object(n.useReducer)(b,h),c=Object(d.a)(a,2),o=c[0],l=c[1],u={headers:{Authorization:localStorage.getItem("token")}};function s(){return(s=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://mysterious-basin-48046.herokuapp.com/api/v2/",u);case 3:t=e.sent,setTimeout((function(){l({type:"GET_TRANSACTIOS",payload:t.data.data})}),1e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function i(){return(i=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://mysterious-basin-48046.herokuapp.com/api/v2/".concat(t),u);case 3:l({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function f(){return(f=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("https://mysterious-basin-48046.herokuapp.com/api/v2/",t,u);case 3:a=e.sent,l({type:"ADD_TRANSACTION",payload:a.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function E(){return(E=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-type":"application/json"}},e.prev=1,e.next=4,O.a.post("https://mysterious-basin-48046.herokuapp.com/api/v1/login",t,a);case 4:n=e.sent,l({type:"LOGIN",payload:n.data}),localStorage.setItem("token",n.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),l({type:"LOGIN_ERROR",payload:e.t0.response.data,status:e.t0.response.status});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.removeItem("token");case 3:l({type:"LOGOUT"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return r.a.createElement(g.Provider,{value:{transactions:o.transactions,error:o.error,loading:o.loading,success:o.success,getTransactions:function(){return s.apply(this,arguments)},deleteTransaction:function(e){return i.apply(this,arguments)},addTransaction:function(e){return f.apply(this,arguments)},authLogin:function(e){return E.apply(this,arguments)},login:o.login,Logout:function(){return v.apply(this,arguments)}}},t)},j=function(){var e=Object(n.useContext)(g),t=e.success,a=e.Logout,c=Object(u.g)();return Object(n.useEffect)((function(){if(!1===t)return c.push("/")})),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),a()}},"Logout"),r.a.createElement("h2",null,"Expense Tracker"))};function x(e){var t=e.toString().split("").reverse().join("").match(/\d{1,3}/g);return t=t.join(".").split("").reverse().join("")}var N=function(){var e=Object(n.useContext)(g).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"Rp. ",x(e)))},T=function(){var e=Object(n.useContext)(g).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),a=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},x(t))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},x(a))))},k=a(36),R=function(e){var t=e.transaction,a=Object(n.useContext)(g).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("div",null,r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"$",Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return a(t._id)}},"x")))},A=a(1),C=a(37);function S(){var e=Object(k.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return S=function(){return e},e}var I=Object(A.css)(S()),w=function(){var e=Object(n.useContext)(g),t=e.transactions,a=e.getTransactions,c=e.loading;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"History"),c?r.a.createElement((function(){return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(C.HashLoader,{css:I,size:40,color:"#123abc",loading:c}))}),null):"",r.a.createElement("ul",{id:"list",className:"list"},t.map((function(e){return r.a.createElement(R,{key:e._id,transaction:e})}))))},L=function(){var e=Object(n.useContext)(g),t=e.addTransaction,a=e.error,c=Object(n.useState)(""),o=Object(d.a)(c,2),l=o[0],u=o[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),m=i[0],p=i[1],b=Object(f.a)(a).reduce((function(e,t){return Object(E.a)({},e,{},t)}),{}),v=function(e){return!!b[e]},O=function(e){if(v(e))return r.a.createElement("small",{style:{color:"red",fontStyle:"italic"}}," ",b[e][0]," ")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({text:l,amount:m})}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",className:"".concat(v("text")?"is-invalid":""),value:l,onChange:function(e){return u(e.target.value)},placeholder:"Enter text..."}),O("text")),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),r.a.createElement("small",null," (negative - expense, positive - income)")),r.a.createElement("input",{type:"number",className:"".concat(v("amount")?"is-invalid":""),value:m,onChange:function(e){return p(e.target.value)},placeholder:"Enter amount..."}),O("amount")),r.a.createElement("button",{className:"btn"},"Add transaction")))};a(90);var _=function(){return Object(n.useEffect)((function(){document.title="Halaman Home"})),r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement(T,null),r.a.createElement(w,null),r.a.createElement(L,null)))};var D=function(){var e=Object(n.useContext)(g),t=e.authLogin,a=e.login,c=e.success,o=Object(n.useState)(""),l=Object(d.a)(o,2),s=l[0],i=l[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),b=p[0],v=p[1],O=Object(u.g)(),h=[];422===a.status?h.push.apply(h,Object(f.a)(a.error)):h.push(a.error.message);var y=h.reduce((function(e,t){return Object(E.a)({},e,{},t)}),{}),j=function(e){return!!y[e]},x=function(e){if(j(e))return r.a.createElement("small",{style:{color:"red",fontStyle:"italic"}}," ",y[e][0]," ")};return Object(n.useEffect)((function(){!0===c&&O.push("/home")})),r.a.createElement("div",{className:"container"},400===a.status?r.a.createElement((function(){return r.a.createElement("div",{style:{background:"#ff9085",padding:"2px"}},r.a.createElement("h5",{style:{color:"#fff",textAlign:"center"}}," ",a.error.message))}),null):"",r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({email:s,password:b})}},r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",className:"".concat(j("email")?"is-invalid":""),value:s,onChange:function(e){return i(e.target.value)},placeholder:"Enter email..."}),x("email")),r.a.createElement("br",null),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",className:"".concat(j("password")?"is-invalid":""),value:b,onChange:function(e){return v(e.target.value)},placeholder:"Enter password..."}),x("password")),r.a.createElement("button",{className:"btn"},"Login")))},G=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){document.title="You clicked ".concat(a," times")})),r.a.createElement("div",null,r.a.createElement("p",null,"You clicked ",a," times"),r.a.createElement("button",{onClick:function(){return c(a+1)}},"Click me"))},F=function(e){var t=e.component,a=Object(l.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))};o.a.render(r.a.createElement((function(){return r.a.createElement(s.a,null,r.a.createElement(y,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:D}),r.a.createElement(F,{path:"/home",component:_}),r.a.createElement(u.b,{path:"/hooks",component:G}))))}),null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e1a460e2.chunk.js.map