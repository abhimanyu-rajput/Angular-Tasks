(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qaCZ:function(n,t,o){"use strict";o.r(t),o.d(t,"SocialLoginModule",(function(){return b}));var c=o("ofXK"),i=o("tyNb"),s=o("fXoL");function e(n,t){if(1&n){const n=s.Rb();s.Qb(0,"button",4),s.Yb("click",(function(){return s.mc(n),s.cc().login()})),s.uc(1,"Login"),s.Pb()}}function u(n,t){if(1&n){const n=s.Rb();s.Qb(0,"button",5),s.Yb("click",(function(){return s.mc(n),s.cc().logout()})),s.uc(1,"Logout"),s.Pb()}}function l(n,t){if(1&n&&(s.Qb(0,"div"),s.Qb(1,"h2"),s.uc(2),s.dc(3,"json"),s.Pb(),s.Mb(4,"hr"),s.Qb(5,"h2"),s.uc(6),s.dc(7,"json"),s.Pb(),s.Pb()),2&n){const n=s.cc();s.Bb(2),s.wc("Login Status: ",s.ec(3,2,n.loginStatus),""),s.Bb(4),s.wc("Login Response: ",s.ec(7,4,n.loginRes),"")}}const r=[{path:"facebook",component:(()=>{class n{constructor(){this.isLoggedin=!1,FB.init({appId:"219335406525429",cookie:!0,xfbml:!0,version:"v9.0"})}ngOnInit(){}getLoginStatus(){return new Promise((n,t)=>{FB.getLoginStatus(t=>{console.log(t),n("connected"==t.status?{status:"connected",response:t}:{status:"not connected",response:t})})})}fbLogin(){return new Promise((n,t)=>{FB.login(o=>{"connected"===o.status?n({status:"connected",response:o}):t({status:"rejected",response:o})},{scope:"public_profile,email"})})}fbApiCall(){console.log("Welcome!  Fetching your information.... "),FB.api("/me?fields=email,name",n=>{console.log("Successful login for: ",n),this.loginRes=n,this.isLoggedin=!0})}login(){return n=this,void 0,o=function*(){if(this.loginStatus=yield this.getLoginStatus(),console.log(1,this.loginStatus),"not connected"==this.loginStatus.status)try{this.loginStatus=yield this.fbLogin(),console.log(2,this.loginStatus),this.fbApiCall()}catch(n){console.log(n)}else"connected"==this.loginStatus.status&&this.fbApiCall()},new((t=void 0)||(t=Promise))((function(c,i){function s(n){try{u(o.next(n))}catch(t){i(t)}}function e(n){try{u(o.throw(n))}catch(t){i(t)}}function u(n){var o;n.done?c(n.value):(o=n.value,o instanceof t?o:new t((function(n){n(o)}))).then(s,e)}u((o=o.apply(n,[])).next())}));var n,t,o}logout(){FB.logout((function(n){console.log(n),this.isLoggedin=!1}))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Fb({type:n,selectors:[["app-facebook"]],decls:7,vars:3,consts:[[1,"container"],["class","btn btn-success",3,"click",4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(n,t){1&n&&(s.Qb(0,"div",0),s.Qb(1,"p"),s.uc(2,"facebook works!"),s.Pb(),s.tc(3,e,2,0,"button",1),s.tc(4,u,2,0,"button",2),s.Mb(5,"hr"),s.tc(6,l,8,6,"div",3),s.Pb()),2&n&&(s.Bb(3),s.ic("ngIf",!t.isLoggedin),s.Bb(1),s.ic("ngIf",t.isLoggedin),s.Bb(2),s.ic("ngIf",t.isLoggedin))},directives:[c.l],pipes:[c.f],styles:[""]}),n})()}];let a=(()=>{class n{}return n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({factory:function(t){return new(t||n)},imports:[[i.b.forChild(r)],i.b]}),n})(),b=(()=>{class n{}return n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({factory:function(t){return new(t||n)},imports:[[c.c,a]]}),n})()}}]);