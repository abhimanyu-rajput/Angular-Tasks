(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qaCZ:function(n,o,t){"use strict";t.r(o),t.d(o,"SocialLoginModule",(function(){return u}));var c=t("ofXK"),e=t("tyNb"),i=t("fXoL");const r=[{path:"",component:(()=>{class n{constructor(){FB.init({appId:"219335406525429",cookie:!0,xfbml:!0,version:"v9.0"})}ngOnInit(){}loginFb(){return n=this,void 0,t=function*(){this.loginStatus=yield FB.getLoginStatus(n=>(console.log(n),n.status)),console.log("Welcome!  Fetching your information.... "),FB.api("/me",n=>{console.log("Successful login for: "+n),this.loginRes=n})},new((o=void 0)||(o=Promise))((function(c,e){function i(n){try{s(t.next(n))}catch(o){e(o)}}function r(n){try{s(t.throw(n))}catch(o){e(o)}}function s(n){var t;n.done?c(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(i,r)}s((t=t.apply(n,[])).next())}));var n,o,t}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=i.Eb({type:n,selectors:[["app-facebook"]],decls:4,vars:0,consts:[[1,"btn","btn-primary",3,"click"]],template:function(n,o){1&n&&(i.Nb(0,"p"),i.jc(1,"facebook works!"),i.Mb(),i.Nb(2,"button",0),i.Ub("click",(function(){return o.loginFb()})),i.jc(3,"Login"),i.Mb())},styles:[""]}),n})()}];let s=(()=>{class n{}return n.\u0275mod=i.Ib({type:n}),n.\u0275inj=i.Hb({factory:function(o){return new(o||n)},imports:[[e.b.forChild(r)],e.b]}),n})(),u=(()=>{class n{}return n.\u0275mod=i.Ib({type:n}),n.\u0275inj=i.Hb({factory:function(o){return new(o||n)},imports:[[c.b,s]]}),n})()}}]);