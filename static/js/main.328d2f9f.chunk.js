(this.webpackJsonpsoc_net=this.webpackJsonpsoc_net||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(0),a=n.n(r),o=n(134),c=n(25),s=o.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1203fa1f-c9a4-43f5-bca3-2e2f29d0227d"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return s.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return s.delete("follow/".concat(e)).then((function(e){return e.data}))},getUserLogo:function(e){return s.get("profile/".concat(e)).then((function(e){return e.data}))},getUserProfile:function(e){return console.warn("Obsolete methode! Use profileAPI object instead!"),u.getUserProfile(e)}},u={getUserProfile:function(e){return s.get("profile/".concat(e)).then((function(e){return e.data}))},getUserStatus:function(e){return s.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatuse:function(e){return s.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},updateUserProfile:function(e){return s.put("profile",e).then((function(e){return e.data}))}},l={checkIfLogged:function(){return s.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return s.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return s.delete("auth/login").then((function(e){return e.data})).then(a.a.createElement(c.a,{to:"/login"}))}},f={getCaptchaUrl:function(){return s.get("security/get-captcha-url").then((function(e){return e.data}))}}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(46),a=n(4),o={messages:[{id:1,message:"Hi!"},{id:2,message:"Are you Ok?"},{id:3,message:"Please let me know. Be kind!"},{id:4,message:"Thanks< I'm allright!"},{id:5,message:"Ohh, thanks god!"},{id:6,message:"Handle backend logic or databases;"},{id:7,message:"Under the hood, it uses Babel and webpack, but you don\u2019t need to know anything about them."}],dialogs:[{id:1,name:"Mark"},{id:2,name:"John"},{id:3,name:"Sarah"},{id:4,name:"Jessie"},{id:5,name:"Andrew"}]},c=function(e){return{type:"SEND-MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:8,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},131:function(e,t){e.exports="data:image/png;base64,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"},136:function(e,t,n){e.exports=n.p+"static/media/preloader.142ac818.svg"},14:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__psxWY",userCardUnderline:"Users_userCardUnderline__1fNbc",item:"Users_item__14vt8",userPhoto:"Users_userPhoto__noMMW",UserFollowStatus:"Users_UserFollowStatus__1TJzd",usersRightBlock:"Users_usersRightBlock__1PSzG",userName:"Users_userName__2ckIH",page:"Users_page__3mZRZ",selectedPage:"Users_selectedPage__oOQBI",usersLeftBlock:"Users_usersLeftBlock__dGnlS",userStatus:"Users_userStatus__qOCc1",userCity:"Users_userCity__3F4HG",userCountry:"Users_userCountry__26QIZ"}},165:function(e,t,n){e.exports=n(293)},17:function(e,t,n){e.exports={nav:"Navbar_nav__2Kzpr",item:"Navbar_item__1rGtI",activeLink:"Navbar_activeLink__TJZ7V"}},170:function(e,t,n){},193:function(e,t,n){},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));var r=n(139),a=n(0),o=n.n(a),c=n(60),s=n.n(c),i=n(91),u=function(e){var t=e.input,n=e.type,r=e.meta,a=r.touched,c=r.error,i=r.warning;return o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,{placeholder:"some text from formsControls",type:n})),a&&(c&&o.a.createElement("span",{className:s.a.error},c)||i&&o.a.createElement("span",{className:s.a.warning},i)))},l=function(e){var t=e.input,n=e.type,a=e.meta,c=a.touched,i=a.error,u=a.warning,l=Object(r.a)(e,["input","type","meta"]);return o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,l,{type:n})),c&&(i&&o.a.createElement("span",{className:s.a.error},i)||u&&o.a.createElement("span",{className:s.a.warning},u)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return o.a.createElement("div",null,o.a.createElement(i.a,{placeholder:e,component:t,validate:n,name:r,type:a,warn:c}),s?o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null),o.a.createElement("div",null,s)):null)}},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(69),c=n.n(o),s=(n(170),n(35)),i=n(36),u=n(39),l=n(38),f=n(59),d=n.n(f),m=n(11),p=n(70),g=n.n(p),h=n(131),E=n.n(h),b=function(e){return a.a.createElement("header",{className:d.a.header},a.a.createElement("div",{className:d.a.logoContainer},a.a.createElement("img",{src:E.a}),a.a.createElement("div",{className:d.a.NetwName},"FACEBOORK")),a.a.createElement("div",{className:d.a.loginBlock},e.isAuth?a.a.createElement(a.a.Fragment,null,e.login,e.profileIconSrc?a.a.createElement("img",{src:e.profileIconSrc,alt:"user logo"}):a.a.createElement("img",{src:g.a,alt:"user default photo"}),a.a.createElement("span",{onClick:e.logout},"Logout")):a.a.createElement(m.b,{to:"/login"},"Login")))},v=n(19),O=n(6),j=n.n(O),w=n(12),C=n(4),S=n(10),U=n(27),I={id:null,login:null,email:null,profileIconSrc:null,isFetching:!1,isAuth:!1,captchaUrl:null},k=function(e,t,n,r){return{type:"SET-USERS-DATA",data:{id:e,login:t,email:n,isAuth:r}}},y=function(e){return{type:"SET-USER-PROFILE-LOGO",profileIconSrc:e}},N=function(e){return{type:"GET-CAPTCHA-URL-SUCCESS",url:e}},P=function(){return function(){var e=Object(w.a)(j.a.mark((function e(t){var n,r,a,o,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(w.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.d.getUserLogo(n);case 2:r=e.sent,t(y(r.photos.small));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=3,S.a.checkIfLogged();case 3:0===(r=e.sent).resultCode&&(a=r.data,o=a.id,c=a.login,s=a.email,t(k(o,c,s,!0)),n(o));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(w.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(N(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USERS-DATA":return Object(C.a)(Object(C.a)({},e),t.data);case"SET-USER-PROFILE-LOGO":return Object(C.a)(Object(C.a)({},e),{},{profileIconSrc:t.profileIconSrc});case"GET-CAPTCHA-URL-SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{captchaUrl:t.url});default:return e}},R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(b,this.props)}}]),n}(a.a.Component),x=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.id,profileIconSrc:e.auth.profileIconSrc}}),{logout:function(){return function(){var e=Object(w.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(R),L=(n(193),n(17)),G=n.n(L),F=function(){return a.a.createElement("nav",{className:G.a.nav},a.a.createElement("div",{className:G.a.item},a.a.createElement(m.b,{to:"/profile",activeClassName:G.a.activeLink},"Profile")),a.a.createElement("div",{className:G.a.item},a.a.createElement(m.b,{to:"/dialogs",activeClassName:G.a.activeLink},"Message")),a.a.createElement("div",{className:G.a.item},a.a.createElement(m.b,{to:"/news",activeClassName:G.a.activeLink},"News")),a.a.createElement("div",{className:G.a.item},a.a.createElement(m.b,{to:"/music",activeClassName:G.a.activeLink},"Music")),a.a.createElement("div",{className:G.a.item},a.a.createElement(m.b,{to:"/users",activeClassName:G.a.activeLink},"Users")),a.a.createElement("div",{className:G.a.item},a.a.createElement(m.b,{to:"/settings",activeClassName:G.a.activeLink},"Settings")))},D=n(25),M=n(46),z=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(C.a)(Object(C.a)({},e),r):e}))},_={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowingInProgress:[]},Q=function(e){return{type:"FOLLOW",id:e}},B=function(e){return{type:"UNFOLLOW",id:e}},H=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},W=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},J=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-IN-PROGRESS",isInProgress:e,id:t}},K=function(){var e=Object(w.a)(j.a.mark((function e(t,n,r,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(J(!0,t)),e.next=3,r(t);case 3:0==e.sent.resultCode&&n(a(t)),n(J(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:z(e.users,t.id,"id",{followed:!0})});case"UNFOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:z(e.users,t.id,"id",{followed:!1})});case"SET-USERS":return Object(C.a)(Object(C.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-IN-PROGRESS":return Object(C.a)(Object(C.a)({},e),{},{isFollowingInProgress:t.isInProgress?[].concat(Object(M.a)(e.isFollowingInProgress),[t.id]):e.isFollowingInProgress.filter((function(e){return e!=t.id}))});default:return e}},V=n(42),q=n(52),Y=n(94),X=n.n(Y),$=n(135),ee=n.n($),te=function(e){for(var t=e.currentPage,n=e.onPageChanged,o=e.totalItemsCount,c=e.pageSize,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(o/c),l=[],f=1;f<=u;f++)l.push(f);var d=Math.ceil(u/i),m=Object(r.useState)(1),p=Object(q.a)(m,2),g=p[0],h=p[1],E=(g-1)*i+1,b=g*i;return a.a.createElement("div",{className:X.a.page},g>1&&a.a.createElement("button",{onClick:function(){h(1)}},"<<"),g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"<"),l.filter((function(e){return e>=E&&e<=b})).map((function(e){return a.a.createElement("span",{key:e,className:ee()(Object(V.a)({},X.a.selectedPage,t===e)),onClick:function(t){n(e)}},e)})),d>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},">"),d>g&&a.a.createElement("button",{onClick:function(){h(d)}},">>"))},ne=n(14),re=n.n(ne),ae=function(e){return a.a.createElement("div",{className:re.a.item},a.a.createElement("div",{className:re.a.usersLeftBlock},a.a.createElement("div",{className:re.a.userPhoto},a.a.createElement(m.b,{to:"profile/"+e.user.id},a.a.createElement("img",{src:null!=e.user.photos.small?e.user.photos.small:g.a}))),a.a.createElement("div",{className:re.a.UserFollowStatus},!0===e.user.followed?a.a.createElement("button",{disabled:e.isFollowingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unFollow(e.user.id)}}," unfollow"):a.a.createElement("button",{disabled:e.isFollowingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)}},"follow"))),a.a.createElement("div",{className:re.a.usersRightBlock},a.a.createElement("div",{className:re.a.userDescr},a.a.createElement("div",{className:re.a.userName},a.a.createElement(m.b,{to:"profile/"+e.user.id},e.user.name)),a.a.createElement("div",{className:re.a.userStatus},null!=e.user.status?e.user.status:"Hey I using FaceBoorks now")),a.a.createElement("div",{className:re.a.userLocation},a.a.createElement("div",{className:re.a.userCity},"props.user.location.country"),a.a.createElement("div",{className:re.a.userCountry},"props.user.location.city"))))},oe=function(e){return a.a.createElement("div",null,e.users.map((function(t){return a.a.createElement(ae,{key:t.id,user:t,isFollowingInProgress:e.isFollowingInProgress,unFollow:e.unFollow,follow:e.follow})})),a.a.createElement(te,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}))},ce=n(41),se=n(9),ie=function(e){return e.usersPage.users},ue=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},me=function(e){return e.usersPage.isFollowingInProgress},pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){e.props.getUsers(e.props.currentPage,e.props.pageSize)},e.onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:re.a.usersContainer},this.props.isFetching?a.a.createElement(ce.a,null):null,a.a.createElement(oe,{className:re.a.userCardGeneral,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unFollow:this.props.unFollow,follow:this.props.follow,isFollowingInProgress:this.props.isFollowingInProgress}))}}]),n}(a.a.Component),ge=Object(se.d)(Object(v.b)((function(e){return{users:ie(e),pageSize:ue(e),totalUsersCount:le(e),currentPage:fe(e),isFetching:de(e),isFollowingInProgress:me(e)}}),{follow:function(e){return function(t){K(e,t,S.d.followUser.bind(S.d),Q)}},unFollow:function(e){return function(t){K(e,t,S.d.unfollowUser.bind(S.d),B)}},setCurPage:H,getUsers:function(e,t){return function(){var n=Object(w.a)(j.a.mark((function n(r){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(W(!0)),r(H(e)),n.next=4,S.d.getUsers(e,t);case 4:a=n.sent,r(W(!1)),r({type:"SET-USERS",users:a.items}),r({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(pe),he=n(129),Ee=n(29),be=n(51),ve=n(47),Oe=n.n(ve),je=Object(be.b)(25),we=Object(he.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("div",{className:Oe.a.loginForm},a.a.createElement("form",{onSubmit:t},Object(Ee.a)("email",Ee.b,[be.d,je],"email"),Object(Ee.a)("password",Ee.b,[be.d,je],"pass","password"),a.a.createElement("label",{className:Oe.a.loginLabel},Object(Ee.a)(null,"input",[],"rememberMe","checkbox",null," remember me")),r&&a.a.createElement("img",{className:Oe.a.captchaImg,src:r,alt:"captcha"}),r&&a.a.createElement("div",null,Object(Ee.a)("please enter the symbols",Ee.b,[be.d],"captchaInput")),n&&a.a.createElement("div",{className:Oe.a.error}," ",n," "),a.a.createElement("div",null,a.a.createElement("button",null,"LOGIN"))))})),Ce=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(w.a)(j.a.mark((function a(o){var c,s;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.login(e,t,n,r);case 2:0===(c=a.sent).resultCode?(o(P()),o(N(null))):(10===c.resultCode&&o(A()),s=c.messages.length>0?c.messages[0]:"Some error",o(Object(U.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(D.a,{to:"/profile"}):a.a.createElement("div",{className:Oe.a.loginFormContainer},a.a.createElement("h2",null,"LOGIN"),a.a.createElement(we,{onSubmit:function(t){e.login(t.email,t.pass,t.rememberMe,t.captchaInput)},captchaUrl:e.captchaUrl}))})),Se=(n(291),function(){return a.a.createElement("div",null,a.a.createElement("div",null,"Some Settings Going To Be There"),a.a.createElement("div",null,"So please be ready!"))});n(292);function Ue(e){var t=e.step,n=Object(r.useReducer)((function(e,n){if("tick"===n.type)return e+t;throw new Error}),0),o=Object(q.a)(n,2),c=o[0],s=o[1];return Object(r.useEffect)((function(){var e=setInterval((function(){s({type:"tick"})}),1e3);return function(){return clearInterval(e)}}),[s]),a.a.createElement("h1",null,c)}var Ie=function(){var e=Object(r.useState)(1),t=Object(q.a)(e,2),n=t[0],o=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ue,{step:n}),a.a.createElement("input",{value:n,onChange:function(e){return o(Number(e.target.value))}}))},ke={initialized:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZING":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},Ne=n(138),Pe=n(97),Ae=n(128),Te={},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;arguments.length>1&&arguments[1];return e},xe=n(130),Le=Object(se.c)({profilePage:Pe.b,dialogsPage:Ae.b,sidebar:Re,usersPage:Z,auth:T,app:ye,form:xe.a}),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,Fe=Object(se.e)(Le,Ge(Object(se.a)(Ne.a)));window.__store__=Fe;var De=Fe,Me=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(ce.a,null)},a.a.createElement(e,t))}},ze=a.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),_e=a.a.lazy((function(){return n.e(4).then(n.bind(null,312))})),Qe=a.a.lazy((function(){return n.e(5).then(n.bind(null,310))})),Be=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(){console.log("Some error ocurred!!! UnhandledError hsndler")},e.componentDidMount=function(){e.props.initializeApp(),window.addEventListener("unhandledrejection",e.catchAllUnhandledErrors)},e.componentWillUnmount=function(){window.removeEventListener("unhandledrejection",e.catchAllUnhandledErrors)},e}return Object(i.a)(n,[{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(x,null),a.a.createElement(F,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(D.d,null,a.a.createElement(D.b,{exact:!0,path:"/",render:function(){return a.a.createElement(D.a,{to:"/profile"})}}),a.a.createElement(D.b,{path:"/profile/:userId?",render:Me(ze)}),a.a.createElement(D.b,{path:"/dialogs",render:Me(_e)}),a.a.createElement(D.b,{path:"/news",render:Me(Qe)}),a.a.createElement(D.b,{path:"/music",render:function(){return a.a.createElement(Ie,null)}}),a.a.createElement(D.b,{path:"/users",render:function(){return a.a.createElement(ge,null)}}),a.a.createElement(D.b,{path:"/settings",render:function(){return a.a.createElement(Se,null)}}),a.a.createElement(D.b,{path:"/login",render:function(){return a.a.createElement(Ce,null)}}),a.a.createElement(D.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(ce.a,null)}}]),n}(a.a.Component),He=Object(se.d)(D.g,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(w.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(P()),e.next=3,Promise.all([n]);case 3:t({type:"SET-INITIALIZING"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Be),We=function(){return a.a.createElement(a.a.StrictMode,null,a.a.createElement(m.a,null,a.a.createElement(v.a,{store:De},a.a.createElement(He,null))))};c.a.render(a.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){"use strict";var r=n(136),a=n.n(r),o=n(0),c=n.n(o);t.a=function(e){return c.a.createElement("img",{src:a.a})}},47:function(e,t,n){e.exports={loginFormContainer:"Login_loginFormContainer__2lrxu",error:"Login_error__1LgPq",warning:"Login_warning__1GEVP",loginForm:"Login_loginForm__QzTGT",loginLabel:"Login_loginLabel__wB4Hu",captchaImg:"Login_captchaImg__2wQJa"}},51:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c}));n(0);var r=function(e){return e||"number"===typeof e?void 0:"Required"},a=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},o=function(e){return function(t){return t&&t.length<e?"Must be ".concat(e," characters or more"):void 0}},c=function(e){return e&&/[^a-zA-Z0-9 ]/i.test(e)?"Only alphanumeric characters":void 0}},59:function(e,t,n){e.exports={header:"Header_header__1RSq5",logoContainer:"Header_logoContainer__1ebL8",NetwName:"Header_NetwName__243Pq",loginBlock:"Header_loginBlock__eGG01"}},60:function(e,t,n){e.exports={error:"FormsControls_error__2Ou9r",warning:"FormsControls_warning__1CAZl"}},70:function(e,t,n){e.exports=n.p+"static/media/user.f2d08977.jpg"},94:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2oY6T",page:"Paginator_page__2Pn8u"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return E})),n.d(t,"f",(function(){return b}));var r=n(42),a=n(6),o=n.n(a),c=n(12),s=n(46),i=n(4),u=n(10),l=n(27),f={posts:[{id:1,likes:12,post:"Hi! How are you?"},{id:2,likes:122,post:"It s my first post."},{id:3,likes:1,post:"Gatsby is the best way to"},{id:4,likes:65,post:"The following toolchains offer more flexibility and choice."},{id:5,likes:3,post:"We recommend them to more experienced users"}],profile:null,status:""},d=function(e){return{type:"ADD-POST",text:e}},m=function(e){return{type:"SET-USER-STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserProfile(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserStatus(e);case 2:r=t.sent,n(m(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatuse(e);case 2:0===t.sent.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n({type:"SAVE-PHOTO-SUCCESS",photos:r.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateUserProfile(e);case 2:if(0!==(a=t.sent).resultCode){t.next=7;break}n(p(e.userId)),t.next=11;break;case 7:return(c=a.messages.length>0?a.messages[0]:"Some error").includes("Invalid url format")?(s=v(e.contacts,c),n(Object(l.a)("profile",Object(r.a)({},s,c)))):n(Object(l.a)("profile",{_error:c})),console.log("reducer"),t.abrupt("return",Promise.reject());case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){var n=t.substring(0,t.length-1).split("->")[1];if(Object.keys(e).length>0)return Object.keys(e).find((function(e){return e.charAt(0).toUpperCase()+e.slice(1)==n}))};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:6,likes:0,post:t.text};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET-USER-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE-PHOTO-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.328d2f9f.chunk.js.map