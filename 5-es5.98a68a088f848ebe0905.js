function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qaCZ:function(n,e,t){"use strict";t.r(e),t.d(e,"SocialLoginModule",(function(){return p}));var o=t("ofXK"),i=t("tyNb");function c(n,e,t,o){return new(t||(t=Promise))((function(i,c){function r(n){try{a(o.next(n))}catch(e){c(e)}}function s(n){try{a(o.throw(n))}catch(e){c(e)}}function a(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(r,s)}a((o=o.apply(n,e||[])).next())}))}var r,s,a,u=t("fXoL"),l=[{path:"",component:(r=function(){function n(){_classCallCheck(this,n),FB.init({appId:"219335406525429",cookie:!0,xfbml:!0,version:"v9.0"})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getLoginStatus",value:function(){return c(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,e){FB.getLoginStatus((function(t){console.log(t),"connected"==t.status?n({status:"connected",response:t}):e({status:"not connected",response:t})}))})));case 1:case"end":return n.stop()}}),n)})))}},{key:"loginFb",value:function(){return c(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getLoginStatus();case 2:this.loginStatus=n.sent,"not connected"==this.loginStatus.status?FB.login((function(n){"connected"===n.status&&this.fbApiCall()}),{scope:"public_profile,email"}):"connected"==this.loginStatus.status&&this.fbApiCall();case 4:case"end":return n.stop()}}),n,this)})))}},{key:"fbApiCall",value:function(){var n=this;console.log("Welcome!  Fetching your information.... "),FB.api("/me?fields=email,name",(function(e){console.log("Successful login for: ",e),n.loginRes=e}))}}]),n}(),r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u.Eb({type:r,selectors:[["app-facebook"]],decls:10,vars:6,consts:[[1,"btn","btn-primary",3,"click"]],template:function(n,e){1&n&&(u.Nb(0,"p"),u.lc(1,"facebook works!"),u.Mb(),u.Nb(2,"button",0),u.Ub("click",(function(){return e.loginFb()})),u.lc(3,"Login"),u.Mb(),u.Nb(4,"h2"),u.lc(5),u.Zb(6,"json"),u.Mb(),u.Nb(7,"h2"),u.lc(8),u.Zb(9,"json"),u.Mb()),2&n&&(u.Ab(5),u.mc("Login Status: ",u.ac(6,2,e.loginStatus),""),u.Ab(3),u.mc("Login Response: ",u.ac(9,4,e.loginRes),""))},pipes:[o.e],styles:[""]}),r)}],f=((a=function n(){_classCallCheck(this,n)}).\u0275mod=u.Ib({type:a}),a.\u0275inj=u.Hb({factory:function(n){return new(n||a)},imports:[[i.b.forChild(l)],i.b]}),a),p=((s=function n(){_classCallCheck(this,n)}).\u0275mod=u.Ib({type:s}),s.\u0275inj=u.Hb({factory:function(n){return new(n||s)},imports:[[o.b,f]]}),s)}}]);