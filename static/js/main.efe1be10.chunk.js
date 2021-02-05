(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{109:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"changeFilter",(function(){return O}));var a={};r.r(a),r.d(a,"fetchContacts",(function(){return D})),r.d(a,"addContact",(function(){return Z})),r.d(a,"deleteContact",(function(){return H}));var c={};r.r(c),r.d(c,"getContacts",(function(){return K})),r.d(c,"getFilter",(function(){return Y})),r.d(c,"getLoadingData",(function(){return J})),r.d(c,"getErrorData",(function(){return $})),r.d(c,"getFilteredContacts",(function(){return Q}));var s={};r.r(s),r.d(s,"createUser",(function(){return ae})),r.d(s,"loginUser",(function(){return ce})),r.d(s,"logoutUser",(function(){return se})),r.d(s,"fetchCurrentUser",(function(){return ie}));var i={};r.r(i),r.d(i,"getIsLoggedIn",(function(){return oe})),r.d(i,"getUsername",(function(){return ue})),r.d(i,"getIsFetchingCurrentUser",(function(){return le}));var o=r(0),u=r.n(o),l=r(28),d=r.n(l),j=r(5),p=r(57),b=r(7),m=r(10),h=r(24),f=r(58),g=r.n(f),O=Object(m.b)("filter/change"),x=r(3),_=r.n(x),v=r(6),N=r(18),w=r.n(N);w.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var y=function(e){w.a.defaults.headers.common.Authorization="Bearer ".concat(e)},L=function(){w.a.defaults.headers.common.Authorization=""};function F(e,t,r){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(_.a.mark((function e(t,r,n){var a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t,email:r,password:n},console.log(a),e.next=4,w.a.post("/users/signup",a);case 4:return c=e.sent,y(c.data.token),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return U.apply(this,arguments)}function U(){return(U=Object(v.a)(_.a.mark((function e(t,r){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={email:t,password:r},console.log(n),e.next=4,w.a.post("/users/login",n);case 4:return a=e.sent,y(a.data.token),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return S.apply(this,arguments)}function S(){return(S=Object(v.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/users/logout");case 2:return t=e.sent,L(),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return M.apply(this,arguments)}function M(){return(M=Object(v.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/users/current");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return A.apply(this,arguments)}function A(){return(A=Object(v.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return P.apply(this,arguments)}function P(){return(P=Object(v.a)(_.a.mark((function e(t,r){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t,number:r},e.next=3,w.a.post("/contacts",n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return R.apply(this,arguments)}function R(){return(R=Object(v.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T,V,D=Object(m.c)("contacts/fetchContacts",function(){var e=Object(v.a)(_.a.mark((function e(t,r){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,W();case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),Z=Object(m.c)("contacts/addContact",function(){var e=Object(v.a)(_.a.mark((function e(t,r){var n,a,c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.number,c=r.rejectWithValue,e.prev=2,e.next=5,B(n,a);case 5:return s=e.sent,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",c(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,r){return e.apply(this,arguments)}}()),H=Object(m.c)("contacts/deleteContact",function(){var e=Object(v.a)(_.a.mark((function e(t,r){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,a=z(t),e.abrupt("return",a);case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,r){return e.apply(this,arguments)}}()),E=r(40),K=function(e){return e.contacts.entries},Y=function(e){return e.contacts.filter},J=function(e){return e.contacts.isLoading},$=function(e){return e.contacts.error},Q=Object(E.a)([Y,K],(function(e,t){var r=e.toLowerCase().trim();return t.filter((function(e){var t;return null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(r)}))})),G=r(4),X=a.fetchContacts,ee=a.addContact,te=a.deleteContact,re=n.changeFilter,ne=Object(m.d)({name:"contacts",initialState:{entries:[],filter:"",isLoading:!1,error:null},extraReducers:(T={},Object(G.a)(T,re,(function(e,t){var r=t.payload;e.filter=r})),Object(G.a)(T,X.fulfilled,(function(e,t){var r=t.payload;e.entries=r,e.isLoading=!1})),Object(G.a)(T,X.pending,(function(e){e.isLoading=!0,e.error=null})),Object(G.a)(T,X.rejected,(function(e,t){var r=t.payload;e.isLoading=!1,e.error=r})),Object(G.a)(T,ee.fulfilled,(function(e,t){var r=t.payload;e.entries=[].concat(Object(b.a)(e.entries),[r]),e.isLoading=!1})),Object(G.a)(T,ee.pending,(function(e){e.isLoading=!0,e.error=null})),Object(G.a)(T,ee.rejected,(function(e,t){var r=t.payload;e.isLoading=!1,e.error=r})),Object(G.a)(T,te.fulfilled,(function(e,t){var r=t.payload;e.entries=e.entries.filter((function(e){return e.id!==r})),e.isLoading=!1})),Object(G.a)(T,te.pending,(function(e){e.isLoading=!0,e.error=null})),Object(G.a)(T,te.rejected,(function(e,t){var r=t.payload;e.isLoading=!1,e.error=r})),T)}).reducer,ae=Object(m.c)("auth/createUser",function(){var e=Object(v.a)(_.a.mark((function e(t,r){var n,a,c,s,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.email,c=t.password,s=r.rejectWithValue,e.prev=2,e.next=5,F(n,a,c);case 5:return i=e.sent,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",s(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,r){return e.apply(this,arguments)}}()),ce=Object(m.c)("auth/loginUser",function(){var e=Object(v.a)(_.a.mark((function e(t,r){var n,a,c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,c=r.rejectWithValue,e.prev=2,e.next=5,C(n,a);case 5:return s=e.sent,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",c(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,r){return e.apply(this,arguments)}}()),se=Object(m.c)("auth/logoutUser",function(){var e=Object(v.a)(_.a.mark((function e(t,r){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,I();case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,r){return e.apply(this,arguments)}}()),ie=Object(m.c)("auth/fetchCurrentUser",function(){var e=Object(v.a)(_.a.mark((function e(t,r){var n,a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.getState(),null!==(a=n.auth.token)){e.next=4;break}return e.abrupt("return",r.rejectWithValue("you have to log in"));case 4:return w.a.defaults.headers.common.Authorization="Bearer ".concat(a),e.prev=5,e.next=8,q();case 8:return c=e.sent,e.abrupt("return",c);case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",r.rejectWithValue(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()),oe=function(e){return e.auth.isLoggedIn},ue=function(e){return e.auth.user.name},le=function(e){return e.auth.isFetchingCurrentUser},de=s.createUser,je=s.loginUser,pe=s.logoutUser,be=s.fetchCurrentUser,me={user:{name:null,email:null},token:null,isLoggedIn:!1,error:null,isFetchingCurrentUser:!1},he=Object(m.d)({name:"auth",initialState:me,extraReducers:(V={},Object(G.a)(V,de.fulfilled,(function(e,t){var r=t.payload;e.user=r.user,e.token=r.token,e.isLoggedIn=!0})),Object(G.a)(V,de.pending,(function(e){e.error=null})),Object(G.a)(V,de.rejected,(function(e,t){var r=t.payload;e.error=r})),Object(G.a)(V,je.fulfilled,(function(e,t){var r=t.payload;e.user=r.user,e.token=r.token,e.isLoggedIn=!0})),Object(G.a)(V,je.pending,(function(e){e.error=null})),Object(G.a)(V,je.rejected,(function(e,t){var r=t.payload;e.error=r})),Object(G.a)(V,pe.fulfilled,(function(e){e.user=me.user,e.token=null,e.isLoggedIn=!1})),Object(G.a)(V,pe.pending,(function(e){e.error=null})),Object(G.a)(V,pe.rejected,(function(e,t){var r=t.payload;e.error=r})),Object(G.a)(V,be.fulfilled,(function(e,t){var r=t.payload;e.user=r,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(G.a)(V,be.pending,(function(e){e.error=null,e.isFetchingCurrentUser=!0})),Object(G.a)(V,be.rejected,(function(e,t){var r=t.payload;e.error=r,e.isFetchingCurrentUser=!1})),V)}).reducer,fe={key:"auth",storage:g.a,whitelist:["token"]},ge=Object(b.a)(Object(m.e)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),Oe=Object(h.g)(fe,he),xe=Object(m.a)({reducer:{contacts:ne,auth:Oe},middleware:ge,devTools:!1}),_e=Object(h.h)(xe),ve=(r(98),r(8)),Ne=r(41),we=r.n(Ne),ye=r(1);var Le=function(e){var t=e.title,r=e.children,n=e.flex?we.a.flex:"";return Object(ye.jsxs)("section",{className:we.a.section+" "+n,children:[Object(ye.jsx)("p",{className:we.a.title,children:t}),r]})},Fe=r(20),ke=r.p+"static/media/book2.92deeb0e.png",Ce=r(27),Ue=r.n(Ce);var Ie=function(){return Object(ye.jsx)(ye.Fragment,{children:Object(ye.jsxs)("div",{className:Ue.a.wrapper,children:[Object(ye.jsx)("h1",{className:Ue.a.title,children:"Phonebook"}),Object(ye.jsx)("img",{className:Ue.a.image,src:ke,alt:"open book"}),Object(ye.jsx)("p",{className:Ue.a.text,children:"Welcome to our service! Please Log In or Sign Up to continue."}),Object(ye.jsx)(Fe.Link,{to:"/signup",className:Ue.a.link,children:"Sign Up"}),Object(ye.jsx)(Fe.Link,{to:"/login",className:Ue.a.link,children:"Log In"})]})})};var Se=function(){return Object(ye.jsx)(Le,{flex:!0,children:Object(ye.jsx)(Ie,{})})},qe=r(60),Me=r.n(qe),We=r(61),Ae=r.n(We),Be=r(62),Pe=r.n(Be),ze=r(31),Re=r.n(ze),Te=r(25),Ve=r(33),De=r(59),Ze=r.n(De);function He(e){var t=e.children,r=e.onClick,n=Object(Ve.a)(e,["children","onClick"]);return Object(ye.jsx)("button",Object(Te.a)(Object(Te.a)({type:"button",className:Ze.a.iconBtn,onClick:r},n),{},{children:t}))}He.defaultProps={onClick:function(){return null},children:null};var Ee=He;var Ke=function(e){var t=e.id,r=e.name,n=e.phone,a=e.deleteHandler;return Object(ye.jsxs)("li",{className:Re.a.contact,children:[Object(ye.jsxs)("span",{className:Re.a.name,children:[Object(ye.jsx)(Me.a,{className:Re.a.icon}),r]}),Object(ye.jsxs)("span",{className:Re.a.phone,children:[Object(ye.jsx)(Ae.a,{className:Re.a.icon}),n]}),Object(ye.jsx)(Ee,{onClick:a,"aria-label":"delete contact",children:Object(ye.jsx)(Pe.a,{})})]},t)},Ye=r(63),Je=r.n(Ye),$e=c.getContacts,Qe=c.getFilter,Ge=c.getFilteredContacts;var Xe=function(){var e=Object(j.c)($e),t=Object(j.c)(Qe),r=Object(j.c)(Ge),n=Object(j.b)(),c=t.trim()?r:e;return Object(ye.jsx)("ul",{className:Je.a.contactList,children:c.map((function(e){return Ke({id:e.id,name:e.name,phone:e.number,deleteHandler:function(){return n(a.deleteContact(e.id))}})}))})},et=r(30),tt=r(14),rt=r.n(tt);var nt=function(){var e=Object(et.a)(),t=e.register,r=e.handleSubmit,n=e.errors,s=e.reset,i=Object(o.useRef)(),u=Object(j.c)(c.getContacts),l=Object(j.b)();return Object(ye.jsxs)("form",{className:rt.a.form,onSubmit:r((function(e){u.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in Phonebook")):(l(a.addContact({name:e.name.trim(),number:e.number.trim()})),i.current.blur(),s({}))})),children:[Object(ye.jsxs)("label",{className:rt.a.label,children:[Object(ye.jsx)("input",{ref:t({required:!0,minLength:3,maxLength:18,pattern:/^[A-Za-z]+([ A-Za-z]+)*$/}),className:rt.a.addField,type:"text",name:"name",placeholder:"name"}),n.name&&"required"===n.name.type&&Object(ye.jsx)("p",{className:rt.a.error,children:"Name is required"}),n.name&&"minLength"===n.name.type&&Object(ye.jsx)("p",{className:rt.a.error,children:"Name is too short. Minimum 3 characters."}),n.name&&"maxLength"===n.name.type&&Object(ye.jsx)("p",{className:rt.a.error,children:"Name is too long. Maximum 18 characters."}),n.name&&"pattern"===n.name.type&&Object(ye.jsx)("p",{className:rt.a.error,children:"Name can contain only english letters."})]}),Object(ye.jsxs)("label",{className:rt.a.label,children:[Object(ye.jsx)("input",{ref:t({required:!0,maxLength:12,pattern:/^\d+$/}),className:rt.a.addField,type:"text",name:"number",placeholder:"phone number"}),n.number&&"required"===n.number.type&&Object(ye.jsx)("p",{className:rt.a.error,children:"Number is required"}),n.number&&"pattern"===n.number.type&&Object(ye.jsx)("p",{className:rt.a.error,children:"Phone number should consist only from numbers."}),n.number&&"maxLength"===n.number.type&&Object(ye.jsx)("p",{className:rt.a.error,children:"Number is too long. Maximum 12 digits."})]}),Object(ye.jsx)("button",{ref:i,className:rt.a.btn,type:"submit",children:"Add contact"})]})},at=r(34),ct=r.n(at);var st=function(){var e=Object(j.c)(c.getFilter),t=Object(j.b)();return Object(ye.jsx)("form",{className:ct.a.form,children:Object(ye.jsxs)("label",{className:ct.a.label,children:[Object(ye.jsx)("span",{className:ct.a.title,children:"Find contacts by name"}),Object(ye.jsx)("input",{className:ct.a.searchField,type:"text",value:e,onChange:function(e){return t(n.changeFilter(e.target.value))}})]})})},it=r(64),ot=r.n(it);var ut=function(){return Object(ye.jsx)(ot.a,{size:30,margin:10,color:"black",loading:!0})};var lt=function(){var e=Object(j.c)(c.getContacts),t=Object(j.c)(c.getErrorData),r=Object(j.c)(c.getLoadingData),n=Object(j.b)();return Object(o.useEffect)((function(){n(a.fetchContacts())}),[]),Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsx)(Le,{flex:!1,children:Object(ye.jsx)(nt,{})}),Object(ye.jsx)(Le,{title:"Contacts",flex:!0,children:r?Object(ye.jsx)(ut,{}):e.length?Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsx)(st,{}),Object(ye.jsx)(Xe,{})]}):t?Object(ye.jsxs)("div",{children:["Oops. ",t,"."]}):Object(ye.jsx)("div",{children:"Oops. no contacts here! Let's add some data!"})})]})},dt=r(9),jt=r.n(dt);var pt=function(){var e=Object(et.a)(),t=e.register,r=e.handleSubmit,n=e.errors,a=e.reset,c=Object(o.useRef)(),i=Object(j.b)();return Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsx)("h2",{className:jt.a.title,children:"Sign Up now and receive a full access to our service!"}),Object(ye.jsxs)("form",{className:jt.a.form,onSubmit:r((function(e){console.log(e),i(s.createUser({name:e.login.trim(),email:e.email.trim(),password:e.password.trim()})),c.current.blur(),a({})})),children:[Object(ye.jsxs)("label",{className:jt.a.label,children:[Object(ye.jsx)("input",{ref:t({required:!0,minLength:3,maxLength:8,pattern:/^[A-Za-z]+([ A-Za-z]+)*$/}),className:jt.a.addField,type:"text",name:"login",placeholder:"login"}),n.login&&"required"===n.login.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Login is required"}),n.login&&"minLength"===n.login.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Login is too short. Minimum 3 characters."}),n.login&&"maxLength"===n.login.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Login is too long. Maximum 8 characters."}),n.login&&"pattern"===n.login.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Login can contain only english letters."})]}),Object(ye.jsxs)("label",{className:jt.a.label,children:[Object(ye.jsx)("input",{ref:t({required:!0}),className:jt.a.addField,type:"email",name:"email",placeholder:"email"}),n.email&&"required"===n.email.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Login is required"})]}),Object(ye.jsxs)("label",{className:jt.a.label,children:[Object(ye.jsx)("input",{ref:t({required:!0,minLength:7,maxLength:12}),className:jt.a.addField,type:"password",name:"password",placeholder:"password"}),n.password&&"required"===n.password.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Password is required"}),n.password&&"minLength"===n.password.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Password is too short. Minimum 7 characters."}),n.password&&"maxLength"===n.password.type&&Object(ye.jsx)("p",{className:jt.a.error,children:"Password is too long. Maximum 12 characters."})]}),Object(ye.jsx)("button",{ref:c,className:jt.a.btn,type:"submit",children:"Sign Up"})]}),Object(ye.jsxs)("p",{className:jt.a.disclaimer,children:["Already Have an account? Please"," ",Object(ye.jsx)(Fe.Link,{to:"/login",className:jt.a.link,children:"Log In"})]})]})};var bt=function(){return Object(ye.jsx)(Le,{flex:!0,children:Object(ye.jsx)(pt,{})})},mt=r(15),ht=r.n(mt);var ft=function(){var e=Object(et.a)(),t=e.register,r=e.handleSubmit,n=e.errors,a=e.reset,c=Object(o.useRef)(),i=Object(j.b)();return Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsx)("h2",{className:ht.a.title,children:"Log In to Your Account"}),Object(ye.jsxs)("form",{className:ht.a.form,onSubmit:r((function(e){i(s.loginUser({email:e.email.trim(),password:e.password.trim()})),console.log(e),c.current.blur(),a({})})),children:[Object(ye.jsxs)("label",{className:ht.a.label,children:[Object(ye.jsx)("input",{ref:t({required:!0}),className:ht.a.addField,type:"email",name:"email",placeholder:"email"}),n.email&&"required"===n.email.type&&Object(ye.jsx)("p",{className:ht.a.error,children:"Login is required"})]}),Object(ye.jsxs)("label",{className:ht.a.label,children:[Object(ye.jsx)("input",{ref:t({required:!0,minLength:3,maxLength:12}),className:ht.a.addField,type:"password",name:"password",placeholder:"password"}),n.password&&"required"===n.password.type&&Object(ye.jsx)("p",{className:ht.a.error,children:"Password is required"}),n.password&&"minLength"===n.password.type&&Object(ye.jsx)("p",{className:ht.a.error,children:"Password is too short. Minimum 3 characters."}),n.password&&"maxLength"===n.password.type&&Object(ye.jsx)("p",{className:ht.a.error,children:"Password is too long. Maximum 12 characters."})]}),Object(ye.jsx)("button",{ref:c,className:ht.a.btn,type:"submit",children:"Log In"})]}),Object(ye.jsxs)("p",{className:ht.a.disclaimer,children:["Don't have an account yet?"," ",Object(ye.jsx)(Fe.Link,{to:"/signup",className:ht.a.link,children:"Sign Up"})," ","Now"]})]})};var gt=function(){return Object(ye.jsx)(Le,{flex:!0,children:Object(ye.jsx)(ft,{})})},Ot=r(65),xt=r.n(Ot);function _t(e){var t=e.children;return Object(ye.jsx)("div",{className:xt.a.container,children:t})}var vt=r(42),Nt=r.n(vt),wt=r.p+"static/media/logo.142df8e6.png",yt=r(66),Lt=r.n(yt),Ft=r(35),kt=r.n(Ft);var Ct=function(){var e=Object(o.useRef)(),t=Object(j.c)(i.getUsername),r=Object(j.b)();return Object(ye.jsxs)("div",{className:kt.a.userMenu,children:[Object(ye.jsx)(Lt.a,{style:{fontSize:42},className:kt.a.icon}),Object(ye.jsx)("span",{className:kt.a.userName,children:t}),Object(ye.jsx)("button",{ref:e,className:kt.a.btn,type:"button",onClick:function(){r(s.logoutUser()),e.current.blur()},children:"Log Out"})]})};var Ut=function(){var e=Object(j.c)(i.getIsLoggedIn);return Object(ye.jsxs)("div",{className:Nt.a.wrapper,children:[Object(ye.jsx)("a",{className:Nt.a.logo,href:"/",children:Object(ye.jsx)("img",{className:Nt.a.img,src:wt,alt:"phonebook logotype"})}),e?Object(ye.jsx)(Ct,{}):Object(ye.jsx)(ye.Fragment,{})]})},It=r(67),St=r.n(It);var qt=function(){return Object(ye.jsx)("div",{className:St.a.wrapper,children:"(c) My project"})},Mt=r(20),Wt=Mt.Route,At=Mt.Redirect;function Bt(e){var t=e.children,r=e.redirectTo,n=void 0===r?"/":r,a=e.restricted,c=void 0!==a&&a,s=Object(Ve.a)(e,["children","redirectTo","restricted"]),o=Object(j.c)(i.getIsLoggedIn)&&c;return Object(ye.jsx)(Wt,Object(Te.a)(Object(Te.a)({},s),{},{children:o?Object(ye.jsx)(At,{to:n}):t}))}function Pt(e){var t=e.children,r=e.redirectTo,n=void 0===r?"/":r,a=Object(Ve.a)(e,["children","redirectTo"]),c=Object(j.c)(i.getIsLoggedIn);return Object(ye.jsx)(Wt,Object(Te.a)(Object(Te.a)({},a),{},{children:c?t:Object(ye.jsx)(At,{to:n})}))}var zt=function(){var e=Object(j.b)(),t=Object(j.c)(i.getIsFetchingCurrentUser);return Object(o.useEffect)((function(){e(s.fetchCurrentUser())}),[e]),Object(ye.jsxs)(_t,{children:[Object(ye.jsx)(Ut,{}),!t&&Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsxs)(ve.g,{children:[Object(ye.jsx)(Bt,{exact:!0,path:"/",restricted:!0,redirectTo:"/contacts",children:Object(ye.jsx)(Se,{})}),Object(ye.jsx)(Bt,{path:"/signup",restricted:!0,redirectTo:"/contacts",children:Object(ye.jsx)(bt,{})}),Object(ye.jsx)(Bt,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(ye.jsx)(gt,{})}),Object(ye.jsx)(Pt,{path:"/contacts",redirectTo:"/login",children:Object(ye.jsx)(lt,{})})]}),Object(ye.jsx)(qt,{})]})]})};d.a.render(Object(ye.jsx)(u.a.StrictMode,{children:Object(ye.jsx)(j.a,{store:xe,children:Object(ye.jsx)(p.a,{loading:null,persistor:_e,children:Object(ye.jsx)(Fe.BrowserRouter,{children:Object(ye.jsx)(zt,{})})})})}),document.getElementById("root"))},14:function(e,t,r){e.exports={form:"ContactForm_form__3H9iI",label:"ContactForm_label__NpYI0",addField:"ContactForm_addField__3H_HI",btn:"ContactForm_btn__2u2Uw",error:"ContactForm_error__1SKqk"}},15:function(e,t,r){e.exports={title:"LogInForm_title__14vmb",form:"LogInForm_form__3WF-N",label:"LogInForm_label__1ZWpd",addField:"LogInForm_addField__p4oNz",btn:"LogInForm_btn__1vrtz",error:"LogInForm_error__3eZwk",disclaimer:"LogInForm_disclaimer__3BROD",link:"LogInForm_link__QhvMa"}},27:function(e,t,r){e.exports={wrapper:"WelcomeScreen_wrapper__3Agch",title:"WelcomeScreen_title__lSPyJ",image:"WelcomeScreen_image__BCwhk",text:"WelcomeScreen_text__2eD0c",link:"WelcomeScreen_link__3VnU7"}},31:function(e,t,r){e.exports={contact:"Contact_contact__3IwYz",icon:"Contact_icon__2RNlb",name:"Contact_name__1gm8C",phone:"Contact_phone__wqf2T"}},34:function(e,t,r){e.exports={form:"Filter_form__mvHgM",label:"Filter_label__2W6Kc",title:"Filter_title__3-xuZ",searchField:"Filter_searchField__2_1hI"}},35:function(e,t,r){e.exports={userMenu:"UserMenu_userMenu__3hU7k",icon:"UserMenu_icon__1BW-F",userName:"UserMenu_userName__39zUB",btn:"UserMenu_btn__13fvF"}},41:function(e,t,r){e.exports={section:"Section_section__14rcK",title:"Section_title__1Sfa3",flex:"Section_flex__2hksS"}},42:function(e,t,r){e.exports={wrapper:"AppBar_wrapper__1Gaha",img:"AppBar_img__1Y_8b"}},59:function(e,t,r){e.exports={iconBtn:"IconButton_iconBtn__3-ntA"}},63:function(e,t,r){e.exports={contactList:"ContactList_contactList__2aXLb"}},65:function(e,t,r){e.exports={container:"Container_container__2yZVP"}},67:function(e,t,r){e.exports={wrapper:"Footer_wrapper__2AjQN"}},9:function(e,t,r){e.exports={title:"SignUpForm_title__1y6v1",form:"SignUpForm_form__3rKO9",label:"SignUpForm_label__2N1jP",addField:"SignUpForm_addField__1igho",btn:"SignUpForm_btn__3afLD",error:"SignUpForm_error__1BDgs",disclaimer:"SignUpForm_disclaimer__3mrje",link:"SignUpForm_link__1ach_"}},98:function(e,t,r){}},[[109,1,2]]]);
//# sourceMappingURL=main.efe1be10.chunk.js.map