function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qaCZ:function(n,e,t){"use strict";t.r(e),t.d(e,"SocialLoginModule",(function(){return p}));var o=t("ofXK"),i=t("tyNb");function r(n,e,t,o){return new(t||(t=Promise))((function(i,r){function c(n){try{s(o.next(n))}catch(e){r(e)}}function a(n){try{s(o.throw(n))}catch(e){r(e)}}function s(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,a)}s((o=o.apply(n,e||[])).next())}))}var c,a,s,u=t("fXoL"),f=[{path:"",component:(c=function(){function n(){_classCallCheck(this,n),console.log("facebook")}return _createClass(n,[{key:"ngOnInit",value:function(){return r(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.init();case 1:case"end":return n.stop()}}),n,this)})))}},{key:"loginFb",value:function(){return r(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.login();case 2:e=n.sent,console.log(e);case 4:case"end":return n.stop()}}),n,this)})))}},{key:"init",value:function(){var n,e,t,o;window.fbAsyncInit=function(){FB.init({appId:"219335406525429",cookie:!0,xfbml:!0,version:"v9.0"})},e="facebook-jssdk",o=(n=document).getElementsByTagName("script")[0],n.getElementById(e)||((t=n.createElement("script")).id=e,t.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(t,o))}},{key:"login",value:function(){return new Promise((function(n,e){FB.login((function(e){"connected"===e.status&&FB.api("/me?fields=email,name",(function(e){n(e)}))}),{scope:"public_profile,email"})}))}}]),n}(),c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=u.Eb({type:c,selectors:[["app-facebook"]],decls:4,vars:0,consts:[[1,"btn","btn-primary",3,"click"]],template:function(n,e){1&n&&(u.Nb(0,"p"),u.jc(1,"facebook works!"),u.Mb(),u.Nb(2,"button",0),u.Ub("click",(function(){return e.loginFb()})),u.jc(3,"Login"),u.Mb())},styles:[""]}),c)}],l=((s=function n(){_classCallCheck(this,n)}).\u0275mod=u.Ib({type:s}),s.\u0275inj=u.Hb({factory:function(n){return new(n||s)},imports:[[i.b.forChild(f)],i.b]}),s),p=((a=function n(){_classCallCheck(this,n)}).\u0275mod=u.Ib({type:a}),a.\u0275inj=u.Hb({factory:function(n){return new(n||a)},imports:[[o.b,l]]}),a)}}]);