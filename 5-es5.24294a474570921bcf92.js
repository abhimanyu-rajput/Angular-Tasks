function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,o){return e&&_defineProperties(n.prototype,e),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qaCZ:function(n,e,o){"use strict";o.r(e),o.d(e,"SocialLoginModule",(function(){return f}));var t,c,a,i=o("ofXK"),r=o("tyNb"),s=o("fXoL"),l=[{path:"",component:(t=function(){function n(){_classCallCheck(this,n),console.log("facebook")}return _createClass(n,[{key:"ngOnInit",value:function(){return n=this,o=regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(FB),n.next=3,FB.init({appId:"513346442821314",cookie:!0,xfbml:!0,version:"v9.0"});case 3:FB.getLoginStatus((function(n){e.statusChangeCallback(n)}));case 4:case"end":return n.stop()}}),n)})),new((e=void 0)||(e=Promise))((function(t,c){function a(n){try{r(o.next(n))}catch(e){c(e)}}function i(n){try{r(o.throw(n))}catch(e){c(e)}}function r(n){var o;n.done?t(n.value):(o=n.value,o instanceof e?o:new e((function(n){n(o)}))).then(a,i)}r((o=o.apply(n,[])).next())}));var n,e,o}},{key:"statusChangeCallback",value:function(n){console.log("statusChangeCallback"),console.log(n),"connected"===n.status?this.loginFb():console.log("Please log into this webpage.")}},{key:"loginFb",value:function(){console.log("Welcome!  Fetching your information.... "),FB.api("/me",(function(n){console.log("Successful login for: "+n.name)}))}}]),n}(),t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-facebook"]],decls:2,vars:0,template:function(n,e){1&n&&(s.Nb(0,"p"),s.jc(1,"facebook works!"),s.Mb())},styles:[""]}),t)}],u=((a=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:a}),a.\u0275inj=s.Hb({factory:function(n){return new(n||a)},imports:[[r.b.forChild(l)],r.b]}),a),f=((c=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:c}),c.\u0275inj=s.Hb({factory:function(n){return new(n||c)},imports:[[i.b,u]]}),c)}}]);