function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qaCZ:function(n,t,e){"use strict";e.r(t),e.d(t,"SocialLoginModule",(function(){return p}));var o=e("ofXK"),i=e("tyNb"),c=e("fXoL");function s(n,t){if(1&n){var e=c.Ob();c.Nb(0,"button",4),c.Vb("click",(function(){return c.ic(e),c.Zb().login()})),c.nc(1,"Login"),c.Mb()}}function a(n,t){if(1&n){var e=c.Ob();c.Nb(0,"button",5),c.Vb("click",(function(){return c.ic(e),c.Zb().logout()})),c.nc(1,"Logout"),c.Mb()}}function r(n,t){if(1&n&&(c.Nb(0,"div"),c.Nb(1,"h2"),c.nc(2),c.ac(3,"json"),c.Mb(),c.Lb(4,"hr"),c.Nb(5,"h2"),c.nc(6),c.ac(7,"json"),c.Mb(),c.Mb()),2&n){var e=c.Zb();c.Ab(2),c.oc("Login Status: ",c.bc(3,2,e.loginStatus),""),c.Ab(4),c.oc("Login Response: ",c.bc(7,4,e.loginRes),"")}}var u,l,f,b=[{path:"",component:(u=function(){function n(){_classCallCheck(this,n),this.isLoggedin=!1,FB.init({appId:"219335406525429",cookie:!0,xfbml:!0,version:"v9.0"})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getLoginStatus",value:function(){return new Promise((function(n,t){FB.getLoginStatus((function(t){console.log(t),n("connected"==t.status?{status:"connected",response:t}:{status:"not connected",response:t})}))}))}},{key:"fbLogin",value:function(){return new Promise((function(n,t){FB.login((function(e){"connected"===e.status?n({status:"connected",response:e}):t({status:"rejected",response:e})}),{scope:"public_profile,email"})}))}},{key:"fbApiCall",value:function(){var n=this;console.log("Welcome!  Fetching your information.... "),FB.api("/me?fields=email,name",(function(t){console.log("Successful login for: ",t),n.loginRes=t,n.isLoggedin=!0}))}},{key:"login",value:function(){return n=this,e=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getLoginStatus();case 2:if(this.loginStatus=n.sent,console.log(1,this.loginStatus),"not connected"!=this.loginStatus.status){n.next=18;break}return n.prev=5,n.next=8,this.fbLogin();case 8:this.loginStatus=n.sent,console.log(2,this.loginStatus),this.fbApiCall(),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(5),console.log(n.t0);case 16:n.next=19;break;case 18:"connected"==this.loginStatus.status&&this.fbApiCall();case 19:case"end":return n.stop()}}),n,this,[[5,13]])})),new((t=void 0)||(t=Promise))((function(o,i){function c(n){try{a(e.next(n))}catch(t){i(t)}}function s(n){try{a(e.throw(n))}catch(t){i(t)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,s)}a((e=e.apply(n,[])).next())}));var n,t,e}},{key:"logout",value:function(){FB.logout((function(n){console.log(n),this.isLoggedin=!1}))}}]),n}(),u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=c.Eb({type:u,selectors:[["app-facebook"]],decls:7,vars:3,consts:[[1,"container"],["class","btn btn-success",3,"click",4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(n,t){1&n&&(c.Nb(0,"div",0),c.Nb(1,"p"),c.nc(2,"facebook works!"),c.Mb(),c.mc(3,s,2,0,"button",1),c.mc(4,a,2,0,"button",2),c.Lb(5,"hr"),c.mc(6,r,8,6,"div",3),c.Mb()),2&n&&(c.Ab(3),c.ec("ngIf",!t.isLoggedin),c.Ab(1),c.ec("ngIf",t.isLoggedin),c.Ab(2),c.ec("ngIf",t.isLoggedin))},directives:[o.i],pipes:[o.e],styles:[""]}),u)}],g=((f=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ib({type:f}),f.\u0275inj=c.Hb({factory:function(n){return new(n||f)},imports:[[i.b.forChild(b)],i.b]}),f),p=((l=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ib({type:l}),l.\u0275inj=c.Hb({factory:function(n){return new(n||l)},imports:[[o.b,g]]}),l)}}]);