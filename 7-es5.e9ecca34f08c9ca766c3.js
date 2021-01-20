function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{XPsC:function(e,t,n){"use strict";n.r(t),n.d(t,"UtilsModule",(function(){return K}));var r,o,i,s,a=n("ofXK"),c=n("tyNb"),b=n("fXoL"),u=n("6NWb"),l=function(){return["fas","home"]},p=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=b.Fb({type:r,selectors:[["app-fontawesome"]],decls:41,vars:3,consts:[[1,"container","bg-light"],["href","https://github.com/FortAwesome/angular-fontawesome","target","_blank"],[1,"commands"],["href","https://github.com/FortAwesome/angular-fontawesome#compatibility-table","target","_blank"],["href","https://github.com/FortAwesome/angular-fontawesome#usage","target","_blank"],["type","hidden","value","import { CommonModule } from '@angular/common';\n        import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';\n        import { fas } from '@fortawesome/free-solid-svg-icons';\n        import { far } from '@fortawesome/free-regular-svg-icons';\n        import { fab } from '@fortawesome/free-brands-svg-icons';\n    \n        @NgModule({\n          declarations: [],\n          imports: [CommonModule,FontAwesomeModule ],\n          exports: [ FontAwesomeModule]\n        })\n        export class SharedModule { \n    \n          constructor(private iconLib: FaIconLibrary) {\n              iconLib.addIconPacks(fas);\n              iconLib.addIconPacks(far);\n              iconLib.addIconPacks(fab);\n          }\n    \n        }"],["HowToUse1",""],[3,"innerHTML"],[3,"icon"]],template:function(e,t){if(1&e&&(b.Qb(0,"div",0),b.Qb(1,"h1"),b.uc(2,"How to use fontawesome in angular"),b.Pb(),b.Qb(3,"a",1),b.uc(4,"Official angular componet for Font Awesome"),b.Pb(),b.Mb(5,"hr"),b.Qb(6,"h2"),b.uc(7,"Installtion"),b.Pb(),b.Qb(8,"div",2),b.uc(9," $ npm install @fortawesome/angular-fontawesome@<version> "),b.Mb(10,"br"),b.Qb(11,"a",3),b.uc(12,"# See Compatibility table below to choose a correct version"),b.Pb(),b.Mb(13,"br"),b.Mb(14,"br"),b.uc(15," $ npm install @fortawesome/fontawesome-svg-core "),b.Mb(16,"br"),b.uc(17," $ npm install @fortawesome/free-solid-svg-icons "),b.Pb(),b.Qb(18,"h2"),b.uc(19,"How to use "),b.Pb(),b.Qb(20,"p"),b.uc(21,"To get up and running using Font Awesome with Angular follow below steps:"),b.Pb(),b.Qb(22,"h3"),b.uc(23,"1. Creates shared module and Add FontAwesomeModule to imports in src/app/shared/shared.module.ts "),b.Qb(24,"a",4),b.uc(25,"Or follow"),b.Pb(),b.Pb(),b.Mb(26,"input",5,6),b.Qb(28,"pre",2),b.uc(29,"        "),b.Qb(30,"code",7),b.uc(31,"\n        "),b.Pb(),b.uc(32,"\n    "),b.Pb(),b.Qb(33,"h3"),b.uc(34,"2. Import this shared module in your multiple modules and use it: "),b.Pb(),b.Qb(35,"p"),b.uc(36,"Icon : "),b.Mb(37,"fa-icon",8),b.Pb(),b.Qb(38,"pre",2),b.uc(39,"        <fa-icon [icon]=\"['fas','home']\"></fa-icon>\n    "),b.Pb(),b.Mb(40,"br"),b.Pb()),2&e){var n=b.lc(27);b.Bb(30),b.ic("innerHTML",n.value,b.nc),b.Bb(7),b.ic("icon",b.jc(2,l))}},directives:[u.a],styles:[""]}),r),f=function(){return["fas","external-link-alt"]},h=((o=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=b.Fb({type:o,selectors:[["app-pwa"]],decls:127,vars:4,consts:[[1,"container"],["href","https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"],["href","https://angular.io/guide/service-worker-intro"],[3,"icon"],["href","https://angular.io/guide/service-worker-getting-started#adding-a-service-worker-to-your-project"],[1,"commands"],[1,"text-primary"],[1,"text-danger"],[1,"text-success"],[1,"text-center"],["src","assets/images/angular-json.png","alt","angilar-json",1,"responsive"],["src","assets/images/ngsw-config-json.png","alt","angilar-json",1,"responsive"]],template:function(e,t){1&e&&(b.Qb(0,"div",0),b.Qb(1,"h2"),b.uc(2,"Angular - Progressive Web App (PWA) "),b.Qb(3,"small"),b.Qb(4,"a",1),b.uc(5,"MDN Docs"),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"p"),b.uc(7,"A progressive web application (PWA) is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices."),b.Pb(),b.Qb(8,"p"),b.uc(9,"While web applications have been available for mobile devices from the start, they have generally been slower, have had fewer features, and have been less used than native apps. PWA features narrow the gap between user experience in web-based and native applications. Features include"),b.Pb(),b.Qb(10,"ul"),b.Qb(11,"li"),b.uc(12,"Ability to run offline"),b.Pb(),b.Qb(13,"li"),b.uc(14,"High performance"),b.Pb(),b.Qb(15,"li"),b.uc(16,"Background processing in service workers in a separate thread"),b.Pb(),b.Qb(17,"li"),b.uc(18,"Access to the phone's sensors"),b.Pb(),b.Qb(19,"li"),b.uc(20,"Support for push notifications"),b.Pb(),b.Qb(21,"li"),b.uc(22,"An icon on the phone\u2018s home screen"),b.Pb(),b.Pb(),b.Qb(23,"h2"),b.uc(24,"Angular Service Worker "),b.Qb(25,"small"),b.Qb(26,"a",2),b.Mb(27,"fa-icon",3),b.Pb(),b.Pb(),b.Pb(),b.Qb(28,"p"),b.uc(29,"Angular's service worker is designed to optimize the end user experience of using an application over a slow or unreliable network connection, while also minimizing the risks of serving outdated content."),b.Pb(),b.Qb(30,"p"),b.uc(31,"The Angular service worker's behavior follows that design goal:"),b.Pb(),b.Qb(32,"ul"),b.Qb(33,"li"),b.uc(34,"Caching an application is like installing a native application. The application is cached as one unit, and all files update together."),b.Pb(),b.Qb(35,"li"),b.uc(36,"A running application continues to run with the same version of all files. It does not suddenly start receiving cached files from a newer version, which are likely incompatible."),b.Pb(),b.Qb(37,"li"),b.uc(38,"When users refresh the application, they see the latest fully cached version. New tabs load the latest cached code."),b.Pb(),b.Qb(39,"li"),b.uc(40,"Updates happen in the background, relatively quickly after changes are published. The previous version of the application is served until an update is installed and ready."),b.Pb(),b.Qb(41,"li"),b.uc(42,"The service worker conserves bandwidth when possible. Resources are only downloaded if they've changed."),b.Pb(),b.Pb(),b.Qb(43,"h2"),b.uc(44,"Adding a service worker to your project "),b.Qb(45,"small"),b.Qb(46,"a",4),b.Mb(47,"fa-icon",3),b.Pb(),b.Pb(),b.Pb(),b.Qb(48,"p"),b.uc(49,"To set up the Angular service worker in your project, use the CLI command: "),b.Pb(),b.Qb(50,"div",5),b.Qb(51,"p"),b.uc(52,"ng add @angular/pwa"),b.Pb(),b.Qb(53,"p"),b.uc(54,"ng build --prod"),b.Pb(),b.Qb(55,"p"),b.Qb(56,"span",6),b.uc(57,"#Skip this if http-server already installed"),b.Pb(),b.Mb(58,"br"),b.uc(59," npm install --global http-server"),b.Pb(),b.Qb(60,"p"),b.Qb(61,"span",6),b.uc(62,"To serve the directory containing your web files with http-server, run the following command:"),b.Pb(),b.Mb(63,"br"),b.uc(64,"http-server -p <PORT> -c-1 dist/<project-name> "),b.Pb(),b.Qb(65,"p"),b.Qb(66,"span",7),b.uc(67,"Ex. http-serve -p 8080 -c-1 dist/pwaspp"),b.Pb(),b.Pb(),b.uc(68," Open browser - http://localhost:8080 "),b.Pb(),b.Mb(69,"br"),b.Qb(70,"h2"),b.uc(71,"Register Service Worker in app.module.ts"),b.Pb(),b.Qb(72,"div",5),b.Qb(73,"pre"),b.uc(74,"    import { "),b.Qb(75,"span",8),b.uc(76,"ServiceWorkerModule"),b.Pb(),b.uc(77," } from '@angular/service-worker';\n    import { "),b.Qb(78,"span",8),b.uc(79,"environment"),b.Pb(),b.uc(80," } from 'src/environments/environment';\n\n    \n    @NgModule({ \n        declaration: [....],\n        imports: [\n            ......\n            "),b.Qb(81,"span",8),b.uc(82,"ServiceWorkerModule.register('ngsw-worker.js',{enabled: environment.production})"),b.Pb(),b.uc(83,"\n        ],\n        providers: [....],\n        bootstrap: [....]\n    })\n\n    export class AppModule { }\n"),b.Pb(),b.Pb(),b.Qb(84,"h2"),b.uc(85,"Some small chamges in angular.json"),b.Pb(),b.Qb(86,"div",9),b.Mb(87,"img",10),b.Pb(),b.Mb(88,"br"),b.Qb(89,"h2"),b.uc(90,"ngsw-config.json"),b.Pb(),b.Qb(91,"div",9),b.Mb(92,"img",11),b.Pb(),b.Mb(93,"br"),b.Qb(94,"h2"),b.uc(95,"Caching external resources"),b.Pb(),b.Qb(96,"p"),b.uc(97,"By default Service-worker does not cache external resources included via a CDN like font etc. We add some configration to "),b.Qb(98,"b",7),b.uc(99,"ngsw-config.json"),b.Pb(),b.Mb(100,"br"),b.uc(101," In the "),b.Qb(102,"b"),b.uc(103,"assetGroups"),b.Pb(),b.uc(104," in first element just need to add 'urls:[]' "),b.Pb(),b.Qb(105,"div",5),b.Qb(106,"pre"),b.uc(107,'    "assetGroups": [\n    {\n      "name": "app",\n      "installMode": "prefetch",\n      "resources": {\n        "files": [\n          "/favicon.ico",\n          "/index.html",\n          "/manifest.webmanifest",\n          "/*.css",\n          "/*.js"\n        ],\n        '),b.Qb(108,"span",8),b.uc(109,'"urls":["https://fonts.googleapis.com/css2?family=Roboto&display=swap"]'),b.Pb(),b.uc(110,'\n      }\n    }, {\n      "name": "assets",\n      "installMode": "lazy",\n      "updateMode": "prefetch",\n      "resources": {\n        "files": [\n          "/assets/**",\n          "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)"\n        ]\n      }\n    }\n  ]\n'),b.Pb(),b.Pb(),b.Mb(111,"br"),b.Qb(112,"h2"),b.uc(113,"Configure Service-Worker for booking API's Calls"),b.Pb(),b.Qb(114,"p"),b.uc(115,"Open "),b.Qb(116,"b",7),b.uc(117,"ngsw-config.json"),b.Pb(),b.uc(118," and add this configration:"),b.Pb(),b.Qb(119,"div",5),b.Qb(120,"pre"),b.Qb(121,"code"),b.uc(122,'\n    "dataGroups": [\n        {\n            "name": "api-calls",\n            "urls": [\n            "/shipments"\n            ],\n            "cacheConfig": {\n            "strategy": "freshness",   '),b.Qb(123,"span",8),b.uc(124,"// Can do 'performance' otherwise"),b.Pb(),b.uc(125,'\n            "maxSize": 100,\n            "maxAge": "3d"\n            }\n        }\n    ]\n'),b.Pb(),b.uc(126,"\n"),b.Pb(),b.Pb(),b.Pb()),2&e&&(b.Bb(27),b.ic("icon",b.jc(2,f)),b.Bb(20),b.ic("icon",b.jc(3,f)))},directives:[u.a],styles:[""]}),o),d=n("xgIS"),m=n("vkgz"),v=n("l7GE"),g=n("51Dv"),P=n("ZUHj"),w=n("lJxs"),y=n("Cfvw"),Q=function(){function e(t){_classCallCheck(this,e),this.project=t}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new k(e,this.project))}}]),e}(),k=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var o;return _classCallCheck(this,n),(o=t.call(this,e)).project=r,o.hasSubscription=!1,o.hasCompleted=!1,o.index=0,o}return _createClass(n,[{key:"_next",value:function(e){this.hasSubscription||this.tryNext(e)}},{key:"tryNext",value:function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this.hasSubscription=!0,this._innerSub(t,e,n)}},{key:"_innerSub",value:function(e,t,n){var r=new g.a(this,t,n),o=this.destination;o.add(r);var i=Object(P.a)(this,e,void 0,void 0,r);i!==r&&o.add(i)}},{key:"_complete",value:function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete(),this.unsubscribe()}},{key:"notifyNext",value:function(e,t,n,r,o){this.destination.next(t)}},{key:"notifyError",value:function(e){this.destination.error(e)}},{key:"notifyComplete",value:function(e){this.destination.remove(e),this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()}}]),n}(v.a),_=n("Kj3r"),C=n("/uUt"),M=n("eIep"),j=n("z6cu"),x=n("JIr8"),O=n("tk/3"),S=((i=function(){function e(t){_classCallCheck(this,e),this._http=t}return _createClass(e,[{key:"handleError",value:function(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error("Backend returned code ".concat(e.status,", body was: ")+e.error),Object(j.a)("Something bad happened; please try again later.")}},{key:"fatchUserData",value:function(e){return this._http.get("https://jsonplaceholder.typicode.com/users?username="+e).pipe(Object(x.a)(this.handleError))}},{key:"fatchData",value:function(){return this._http.get("https://jsonplaceholder.typicode.com/users").pipe(Object(x.a)(this.handleError))}}]),e}()).\u0275fac=function(e){return new(e||i)(b.Ub(O.b))},i.\u0275prov=b.Hb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),U=n("pUyz"),A=n("3Pt+"),I=((s=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;return console.log(e,t),""==n||null==n?e:e.filter((function(e){return e[t].toLowerCase().includes(n)}))}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275pipe=b.Kb({name:"filter",type:s,pure:!0}),s),D=["btnGetUsrDtls"],B=["SearchByUserName"];function N(e,t){if(1&e&&(b.Qb(0,"tr"),b.Qb(1,"td"),b.uc(2),b.Pb(),b.Qb(3,"td"),b.uc(4),b.Pb(),b.Qb(5,"td"),b.uc(6),b.Pb(),b.Qb(7,"td"),b.uc(8),b.Pb(),b.Qb(9,"td"),b.uc(10),b.Pb(),b.Qb(11,"td"),b.uc(12),b.Pb(),b.Qb(13,"td"),b.uc(14),b.Pb(),b.Pb()),2&e){var n=t.$implicit,r=t.index;b.Bb(2),b.vc(r+1),b.Bb(2),b.vc(n.name),b.Bb(2),b.vc(n.username),b.Bb(2),b.vc(n.email),b.Bb(2),b.vc(n.phone),b.Bb(2),b.vc(n.company.name),b.Bb(2),b.vc(n.address.city)}}function E(e,t){if(1&e&&(b.Qb(0,"div"),b.Qb(1,"div",9),b.Mb(2,"input",10,11),b.Pb(),b.Mb(4,"br"),b.Mb(5,"br"),b.Qb(6,"table",12),b.Qb(7,"tr"),b.Qb(8,"th"),b.uc(9,"Srno"),b.Pb(),b.Qb(10,"th"),b.uc(11,"Name"),b.Pb(),b.Qb(12,"th"),b.uc(13,"User Name"),b.Pb(),b.Qb(14,"th"),b.uc(15,"Email"),b.Pb(),b.Qb(16,"th"),b.uc(17,"Phone"),b.Pb(),b.Qb(18,"th"),b.uc(19,"Company"),b.Pb(),b.Qb(20,"th"),b.uc(21,"City"),b.Pb(),b.Pb(),b.tc(22,N,15,7,"tr",13),b.dc(23,"filter"),b.Pb(),b.Pb()),2&e){var n=b.lc(3),r=b.cc();b.Bb(22),b.ic("ngForOf",b.fc(23,1,r.usersDetails,"name",n.value))}}function F(e,t){1&e&&(b.Qb(0,"div",15),b.uc(1,"No result found."),b.Pb())}function T(e,t){if(1&e&&(b.Qb(0,"div"),b.uc(1),b.dc(2,"json"),b.Pb()),2&e){var n=b.cc(2);b.Bb(1),b.vc(b.ec(2,1,n.singleUser))}}function R(e,t){if(1&e&&(b.Qb(0,"div"),b.Qb(1,"h2"),b.Qb(2,"strong"),b.uc(3),b.Pb(),b.Pb(),b.tc(4,F,2,0,"div",14),b.tc(5,T,3,3,"div",6),b.Pb()),2&e){var n=b.cc(),r=b.lc(33);b.Bb(3),b.wc("Result For: ",r.userName,""),b.Bb(1),b.ic("ngIf",0==n.singleUser.length),b.Bb(1),b.ic("ngIf",0!=n.singleUser.length)}}var G,L,W,J=[{path:"fontawesome",component:p},{path:"rxjsops",component:(G=function(){function e(t,n){_classCallCheck(this,e),this._httpserv=t,this._tds=n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var e=this;Object(d.a)(this.btnGetUsrDtls.nativeElement,"click").pipe(Object(m.a)((function(){e.btnGetUsrDtls.nativeElement.disabled=!0,e.btnGetUsrDtls.nativeElement.innerText="Fetching Data..."})),function e(t,n){return n?function(r){return r.pipe(e((function(e,r){return Object(y.a)(t(e,r)).pipe(Object(w.a)((function(t,o){return n(e,t,r,o)})))})))}:function(e){return e.lift(new Q(t))}}((function(){return e._httpserv.fatchData()})),Object(m.a)((function(){e.btnGetUsrDtls.nativeElement.disabled=!1,e.btnGetUsrDtls.nativeElement.innerText="Get Users Details"}))).subscribe((function(t){console.log(t),e.usersDetails=t})),this.SearchByUserName.valueChanges.pipe(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length;if(0===r)throw new Error("list of properties cannot be empty.");return function(e){return Object(w.a)(function(e,t){return function(n){for(var r=n,o=0;o<t;o++){var i=r[e[o]];if(void 0===i)return;r=i}return r}}(t,r))(e)}}("userName"),Object(_.a)(200),Object(C.a)(),Object(M.a)((function(t){return e._httpserv.fatchUserData(t)}))).subscribe((function(t){e.singleUser=t,console.log(t)}))}}]),e}(),G.\u0275fac=function(e){return new(e||G)(b.Lb(S),b.Lb(U.a))},G.\u0275cmp=b.Fb({type:G,selectors:[["app-rxjsops"]],viewQuery:function(e,t){var n;1&e&&(b.xc(D,!0),b.xc(B,!0)),2&e&&(b.kc(n=b.Zb())&&(t.btnGetUsrDtls=n.first),b.kc(n=b.Zb())&&(t.SearchByUserName=n.first))},decls:37,vars:2,consts:[[1,"container"],[1,"font-weight-bold"],[1,"row"],[1,"col-md"],[1,"btn","btn-primary"],["btnGetUsrDtls",""],[4,"ngIf"],["SearchByUserName","ngForm"],["type","text","name","userName","ngModel","","placeholder","User Name",1,"form-control","col-6"],[1,"d-flex","flex-row-reverse"],["type","text","ngModel","","placeholder","Search by Name",1,"form-control","col-3"],["searchUser",""],[1,"table"],[4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(e,t){1&e&&(b.Mb(0,"br"),b.Qb(1,"div",0),b.Qb(2,"h3"),b.Qb(3,"b"),b.uc(4,"RxJS"),b.Pb(),b.uc(5," is a JavaScript library that uses observables to work with reactive programming that deals with asynchronous data calls, callbacks and event-based programs. It is supported by JavaScript and also with typescript."),b.Pb(),b.Qb(6,"p"),b.uc(7,"Some of mostly used Rxjs Operators like: Map, ExhaustMap, SwitchMap, Zip, ForkJoin, Tap, DebounceTime, Timer, FormEvent, Of...etc"),b.Pb(),b.Mb(8,"hr"),b.Qb(9,"h2"),b.uc(10,"Get Users Details"),b.Pb(),b.Qb(11,"p",1),b.uc(12,"Example for Rxjs FromEvent, Tap, DebounceTime, ExhaustMap Operators."),b.Pb(),b.Qb(13,"div",2),b.Qb(14,"div",3),b.Qb(15,"button",4,5),b.uc(17,"Get Users Details"),b.Pb(),b.Pb(),b.Pb(),b.Mb(18,"br"),b.Mb(19,"br"),b.tc(20,E,24,5,"div",6),b.Mb(21,"hr"),b.Qb(22,"h2"),b.uc(23,"Get User By UserName"),b.Pb(),b.Qb(24,"p",1),b.uc(25,"Example for Map, DebounceTime, DistinctUntilChanged, SwitchMap Operators."),b.Pb(),b.Qb(26,"p"),b.Qb(27,"b"),b.uc(28,"Example result for:"),b.Pb(),b.uc(29," [Bret, Antonette, Samantha, Karianne, Kamren, Leopoldo_Corkery, Elwyn.Skiles, Maxime_Nienow, Delphine, Moriah.Stanton]"),b.Pb(),b.Qb(30,"div",2),b.Qb(31,"div",3),b.Qb(32,"form",null,7),b.Mb(34,"input",8),b.Pb(),b.Pb(),b.Pb(),b.Mb(35,"br"),b.tc(36,R,6,3,"div",6),b.Pb()),2&e&&(b.Bb(20),b.ic("ngIf",null!=t.usersDetails),b.Bb(16),b.ic("ngIf",t.singleUser))},directives:[a.l,A.h,A.e,A.f,A.a,A.d,A.g,a.k],pipes:[I,a.f],styles:[""]}),G)},{path:"pwa",component:h}],z=((L=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:L}),L.\u0275inj=b.Ib({factory:function(e){return new(e||L)},imports:[[c.b.forChild(J)],c.b]}),L),H=n("PCNd"),K=((W=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:W}),W.\u0275inj=b.Ib({factory:function(e){return new(e||W)},imports:[[a.c,z,H.a]]}),W)}}]);