"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9346],{36854:(f,g,t)=>{t.d(g,{h:()=>E}),t(77135);var i=t(5e3),u=t(8674),p=t(74042),s=t(69808),o=t(87757),k=t(63043),M=t(50578),x=t(27078),P=t(42437),A=t(24919);const v=["menu"];function Z(T,C){if(1&T&&i._UZ(0,"button",8),2&T){const d=i.oxw(),a=i.MAs(6);i.Q6J("label","Select a file ("+d.files.length+")")("fdMenu",!0)("fdMenuTrigger",a)}}function e(T,C){if(1&T){const d=i.EpF();i.TgZ(0,"li",9),i.NdJ("click",function(){const D=i.CHM(d).$implicit;return i.oxw().getFile(D)}),i.TgZ(1,"div",10)(2,"span",11),i._uU(3),i.qZA()()()}if(2&T){const d=C.$implicit,a=i.oxw();i.ekj("is-selected",d===a.activeFile),i.xp6(3),i.Oqu(d)}}let E=(()=>{class T{constructor(d,a){this.route=d,this.apiService=a}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(d){this.apiService.getComponentHtml(d).subscribe(a=>{this.result=a,this.activeFile=d,this.menu.close()},a=>{console.warn("Did not find file "+d+".\nError: "+a)})}}return T.\u0275fac=function(d){return new(d||T)(i.Y36(u.gz),i.Y36(p.S))},T.\u0275cmp=i.Xpm({type:T,selectors:[["fd-api"]],viewQuery:function(d,a){if(1&d&&i.Gf(v,5),2&d){let b;i.iGM(b=i.CRH())&&(a.menu=b.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(d,a){1&d&&(i.TgZ(0,"div",0)(1,"h2",1),i._uU(2),i.qZA(),i._UZ(3,"span",2),i.YNc(4,Z,1,3,"button",3),i.TgZ(5,"fd-menu",4,5),i.YNc(7,e,4,3,"li",6),i.qZA()(),i._UZ(8,"div",7)),2&d&&(i.xp6(2),i.Oqu(a.activeFile),i.xp6(2),i.Q6J("ngIf",a.files.length>1),i.xp6(1),i.Q6J("fillControlMode",null),i.xp6(2),i.Q6J("ngForOf",a.files),i.xp6(1),i.Q6J("innerHTML",a.result,i.oJD))},directives:[s.O5,o.r,k.k,M.M,s.sg,x.qv,P.K,A.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),T})()},63710:(f,g,t)=>{t.d(g,{c:()=>x});var n=t(5e3),i=t(17791),u=t(66997),p=t(8674),s=t(1726),o=t(55124),k=t(33089);const M=function(){return{exact:!0}};let x=(()=>{class P{}return P.\u0275fac=function(v){return new(v||P)},P.\u0275cmp=n.Xpm({type:P,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(v,Z){if(1&v&&(n.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),n._uU(5,"Examples"),n.qZA()()(),n.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),n._uU(10,"API"),n.qZA()()()(),n._UZ(11,"separator",7)),2&v){const e=n.MAs(3),E=n.MAs(8);n.xp6(2),n.Q6J("active",e.isActive)("routerLinkActiveOptions",n.DdM(3,M)),n.xp6(5),n.Q6J("active",E.isActive)}},directives:[i.d,u.w,p.yS,s.w,p.Od,o.P6,k.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),P})()},24882:(f,g,t)=>{t.d(g,{G:()=>u});var n=t(5e3);const i=["*"];let u=(()=>{class p{}return p.\u0275fac=function(o){return new(o||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["header"]],ngContentSelectors:i,decls:2,vars:0,consts:[[1,"header"]],template:function(o,k){1&o&&(n.F$t(),n.TgZ(0,"h1",0),n.Hsn(1),n.qZA())},styles:[".header[_ngcontent-%COMP%]{margin-top:2rem;font-size:2.2rem}"]}),p})()},98791:(f,g,t)=>{t.d(g,{k:()=>i});var n=t(5e3);let i=(()=>{class u{constructor(s){this.currentLib=s}ngOnInit(){const s=["@fundamental-ngx",this.currentLib];this.subPackage&&s.push(this.subPackage),this.library=s.join("/")}}return u.\u0275fac=function(s){return new(s||u)(n.Y36("CURRENT_LIB"))},u.\u0275cmp=n.Xpm({type:u,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(s,o){1&s&&(n.TgZ(0,"code")(1,"span",0),n._uU(2,"import"),n.qZA(),n._uU(3),n.TgZ(4,"span",0),n._uU(5,"from "),n.qZA(),n.TgZ(6,"span",1),n._uU(7),n.qZA(),n._uU(8,"; "),n.qZA()),2&s&&(n.xp6(3),n.hij(" { ",o.module," } "),n.xp6(4),n.hij("'",o.library,"'"))},encapsulation:2}),u})()},74042:(f,g,t)=>{t.d(g,{S:()=>u});var n=t(5e3),i=t(40520);let u=(()=>{class p{constructor(o,k){this.httpClient=o,this.currentLib=k,this.BASE_URL="assets/typedoc/"}getComponentHtml(o){o=o.toLocaleLowerCase()+".html";const k=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",o);return this.httpClient.get(k,{responseType:"text"})}buildUrl(...o){return o.join("/").replace(/\/+/g,"/")}}return p.\u0275fac=function(o){return new(o||p)(n.LFG(i.eN),n.LFG("CURRENT_LIB"))},p.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac}),p})()},28674:(f,g,t)=>{t.d(g,{g:()=>a});var n=t(69808),i=t(8674),u=t(52382),p=t(62970),s=t(53732),o=t(74042),k=t(32818),M=t(30825),x=t(90523),P=t(80848),A=t(31258),v=t(77135),Z=t(89282),e=t(95037),E=t(46394),T=t(75394);const C=[E.P4,v.$9,P.Q,e.o,M.hJ,Z.H,x.nY,A.L,T.s];var d=t(5e3);let a=(()=>{class b{}return b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=d.oAB({type:b}),b.\u0275inj=d.cJS({providers:[s.t,o.S],imports:[[u.u5,n.ez,i.Bz,k.f,C,p.JP.forChild()],u.u5,u.UX,k.f,n.ez,E.P4,v.$9,P.Q,e.o,M.hJ,Z.H,x.nY,A.L,T.s]}),b})()},29346:(f,g,t)=>{t.r(g),t.d(g,{PlatformTimePickerDocsModule:()=>K});var n=t(8674),i=t(45665),u=t(28674),p=t(36854),s=t(84527),o=t(41831),k=t(84769),M=t(85987),x=t(28352),P=t(67226),A=t(42516),v=t(41679),Z=t(93251),e=t(5e3),E=t(93943),T=t(44969),C=t(28595),d=t(11220),a=t(52382),b=t(87757);let D=(()=>{class l{constructor(){this.allowNullTimeObject=(new o._U).setTime(12,0,0),this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1}}setNull(){this.allowNullTimeObject=null}setValid(){this.allowNullTimeObject=(new o._U).setTime(12,0,0)}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["fdp-platform-time-picker-basic-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:38,vars:6,consts:[[1,"fd-form-label"],["name","24-hour",3,"displayFormat"],["name","12-hour",3,"meridian"],["name","without-seconds",3,"displaySeconds"],["name","disabled",3,"disabled"],["name","compact","contentDensity","compact"],["name","null-validity",3,"allowNull","ngModel","ngModelChange"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"]],template:function(m,r){1&m&&(e.TgZ(0,"label",0),e._uU(1,"24-Hour Time Picker"),e.qZA(),e._UZ(2,"br")(3,"fdp-time-picker",1)(4,"br")(5,"br"),e.TgZ(6,"label",0),e._uU(7,"12-Hour Time Picker"),e.qZA(),e._UZ(8,"br")(9,"fdp-time-picker",2)(10,"br")(11,"br"),e.TgZ(12,"label",0),e._uU(13,"Time Picker Without Seconds"),e.qZA(),e._UZ(14,"br")(15,"fdp-time-picker",3)(16,"br")(17,"br"),e.TgZ(18,"label",0),e._uU(19,"Disabled Time Picker"),e.qZA(),e._UZ(20,"br")(21,"fdp-time-picker",4)(22,"br")(23,"br"),e.TgZ(24,"label",0),e._uU(25,"Compact Time Picker"),e.qZA(),e._UZ(26,"br")(27,"fdp-time-picker",5)(28,"br")(29,"br"),e.TgZ(30,"label",0),e._uU(31,"Null Validity"),e.qZA(),e._UZ(32,"br"),e.TgZ(33,"fdp-time-picker",6),e.NdJ("ngModelChange",function(h){return r.allowNullTimeObject=h}),e.qZA(),e._UZ(34,"br")(35,"br"),e.TgZ(36,"button",7),e.NdJ("click",function(){return r.setNull()}),e.qZA(),e.TgZ(37,"button",8),e.NdJ("click",function(){return r.setValid()}),e.qZA()),2&m&&(e.xp6(3),e.Q6J("displayFormat",r.displayFormat),e.xp6(6),e.Q6J("meridian",!0),e.xp6(6),e.Q6J("displaySeconds",!1),e.xp6(6),e.Q6J("disabled",!0),e.xp6(12),e.Q6J("allowNull",!1)("ngModel",r.allowNullTimeObject))},directives:[d.a,a.JJ,a.On,b.r],encapsulation:2}),l})();var F=t(29871),O=t(33089),y=t(59458),U=t(36325),S=t(54643),N=t(69808);function J(l,c){1&l&&(e.TgZ(0,"span"),e._uU(1," Value is required "),e.qZA())}function V(l,c){1&l&&e.YNc(0,J,2,0,"span",22),2&l&&e.Q6J("ngIf",c.$implicit.required)}let R=(()=>{class l{constructor(){this.requiredTimeValidator=[a.kI.required],this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1},this.timePickerForm=new a.cw({disableExample:new a.NI({value:"",disabled:!0}),nullValidity:new a.NI((new o._U).setTime(0,0,0))})}onSubmit(){this.timePickerForm.valid?alert("Form Value: "+JSON.stringify(this.timePickerForm.value)):alert("Form invalid")}setNull(){this.timePickerForm.get("nullValidity").setValue(null),this.markControlAsTouched("nullValidity")}setValid(){this.timePickerForm.get("nullValidity").setValue((new o._U).setTime(0,0,0)),this.markControlAsTouched("nullValidity")}markControlAsTouched(m){const r=this.timePickerForm.get(m);r.untouched&&r.markAsTouched()}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["fdp-platform-time-picker-reactive-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:29,vars:27,consts:[[3,"formGroup","onSubmit"],["id","24-hour","placeholder","hh:mm:ss","label","24-Hour Time Picker:",3,"rank","required","validators"],["ffl1",""],["name","24-hour",3,"formControl","displayFormat"],["id","12-hour","placeholder","hh:mm:ss","label","12-Hour Time Picker:",3,"rank","required","validators"],["ffl2",""],["name","12-hour",3,"meridian","formControl"],["id","without-seconds","placeholder","hh:mm","label","Time Picker Without Seconds:",3,"rank","required","validators"],["ffl3",""],["name","without-seconds",3,"displaySeconds","formControl"],["id","compact","placeholder","hh:mm:ss","label","Compact Time Picker:",3,"rank","required","validators"],["ffl4",""],["name","compact","contentDensity","compact",3,"formControl"],["id","nullValidity","placeholder","hh:mm:ss","label","Null Validity:",3,"rank","required","validators"],["name","nullValidity","formControlName","nullValidity",3,"allowNull"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"],["id","disableExample","placeholder","hh:mm:ss","label","Disabled Time Picker:",3,"rank"],["name","disableExample","formControlName","disableExample"],["id","submitBtn",3,"rank"],["fd-button","","name","submitBtn",3,"click"],["i18n",""],[4,"ngIf"]],template:function(m,r){if(1&m&&(e.TgZ(0,"fdp-form-group",0),e.NdJ("onSubmit",function(){return r.onSubmit()}),e.TgZ(1,"fdp-form-field",1,2),e._UZ(3,"fdp-time-picker",3),e.qZA(),e.TgZ(4,"fdp-form-field",4,5),e._UZ(6,"fdp-time-picker",6),e.qZA(),e.TgZ(7,"fdp-form-field",7,8),e._UZ(9,"fdp-time-picker",9),e.qZA(),e.TgZ(10,"fdp-form-field",10,11),e._UZ(12,"fdp-time-picker",12),e.qZA(),e.TgZ(13,"fdp-form-field",13),e._UZ(14,"fdp-time-picker",14)(15,"br")(16,"br"),e.TgZ(17,"fd-segmented-button")(18,"button",15),e.NdJ("click",function(){return r.setNull()}),e.qZA(),e.TgZ(19,"button",16),e.NdJ("click",function(){return r.setValid()}),e.qZA()()(),e.TgZ(20,"fdp-form-field",17),e._UZ(21,"fdp-time-picker",18),e.qZA(),e.TgZ(22,"fdp-form-field",19)(23,"button",20),e.NdJ("click",function(){return r.onSubmit()}),e._uU(24,"Submit"),e.qZA()(),e.YNc(25,V,1,1,"ng-template",null,21,e.W1O),e.qZA(),e.TgZ(27,"span"),e._uU(28),e.qZA()),2&m){const _=e.MAs(2),h=e.MAs(5),j=e.MAs(8),Y=e.MAs(11);e.Q6J("formGroup",r.timePickerForm),e.xp6(1),e.Q6J("rank",1)("required",!0)("validators",r.requiredTimeValidator),e.xp6(2),e.Q6J("formControl",_.formControl)("displayFormat",r.displayFormat),e.xp6(1),e.Q6J("rank",1)("required",!0)("validators",r.requiredTimeValidator),e.xp6(2),e.Q6J("meridian",!0)("formControl",h.formControl),e.xp6(1),e.Q6J("rank",1)("required",!0)("validators",r.requiredTimeValidator),e.xp6(2),e.Q6J("displaySeconds",!1)("formControl",j.formControl),e.xp6(1),e.Q6J("rank",1)("required",!0)("validators",r.requiredTimeValidator),e.xp6(2),e.Q6J("formControl",Y.formControl),e.xp6(1),e.Q6J("rank",1)("required",!0)("validators",r.requiredTimeValidator),e.xp6(1),e.Q6J("allowNull",!1),e.xp6(6),e.Q6J("rank",1),e.xp6(2),e.Q6J("rank",8),e.xp6(6),e.hij("form status: ",null==r.timePickerForm?null:r.timePickerForm.valid,"")}},directives:[y.H,a.JL,a.sg,U.h,d.a,a.JJ,a.oH,a.u,S.pS,b.r,N.O5],encapsulation:2,changeDetection:0}),l})();function I(l,c){1&l&&(e.TgZ(0,"span"),e._uU(1," Value is required "),e.qZA())}function w(l,c){1&l&&e.YNc(0,I,2,0,"span",15),2&l&&e.Q6J("ngIf",c.$implicit.required)}let B=(()=>{class l{constructor(){this.time24h=(new o._U).setTime(18,0,0),this.time12h=(new o._U).setTime(18,0,0),this.timeWithoutSeconds=(new o._U).setTime(12,0,0),this.timeCompact=(new o._U).setTime(12,0,0),this.timeAllowNull=(new o._U).setTime(12,0,0),this.timeDisabled=(new o._U).setTime(12,0,0),this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1}}setNull(){this.timeAllowNull=null}setValid(){this.timeAllowNull=(new o._U).setTime(12,0,0)}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["fdp-platform-time-picker-template-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:19,vars:17,consts:[["id","24-hour","label","24-Hour Time Picker:",3,"rank"],["name","24-hour",3,"ngModel","displayFormat","ngModelChange"],["id","12-hour","label","12-Hour Time Picker:",3,"rank"],["name","12-hour",3,"meridian","ngModel","ngModelChange"],["id","without-seconds","label","Time Picker Without Seconds:",3,"rank"],["name","without-seconds",3,"displaySeconds","ngModel","ngModelChange"],["id","compact","label","Compact Time Picker:",3,"rank"],["name","compact","contentDensity","compact",3,"ngModel","ngModelChange"],["id","null-validity","label","Null Validity:",3,"rank"],["name","null-validity",3,"allowNull","ngModel","ngModelChange"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"],["id","disableExample","label","Disabled Time Picker:",3,"rank"],["name","disableExample",3,"disabled","ngModel","ngModelChange"],["i18n",""],[4,"ngIf"]],template:function(m,r){1&m&&(e.TgZ(0,"fdp-form-group")(1,"fdp-form-field",0)(2,"fdp-time-picker",1),e.NdJ("ngModelChange",function(h){return r.time24h=h}),e.qZA()(),e.TgZ(3,"fdp-form-field",2)(4,"fdp-time-picker",3),e.NdJ("ngModelChange",function(h){return r.time12h=h}),e.qZA()(),e.TgZ(5,"fdp-form-field",4)(6,"fdp-time-picker",5),e.NdJ("ngModelChange",function(h){return r.timeWithoutSeconds=h}),e.qZA()(),e.TgZ(7,"fdp-form-field",6)(8,"fdp-time-picker",7),e.NdJ("ngModelChange",function(h){return r.timeCompact=h}),e.qZA()(),e.TgZ(9,"fdp-form-field",8)(10,"fdp-time-picker",9),e.NdJ("ngModelChange",function(h){return r.timeAllowNull=h}),e.qZA(),e._UZ(11,"br")(12,"br"),e.TgZ(13,"button",10),e.NdJ("click",function(){return r.setNull()}),e.qZA(),e.TgZ(14,"button",11),e.NdJ("click",function(){return r.setValid()}),e.qZA()(),e.TgZ(15,"fdp-form-field",12)(16,"fdp-time-picker",13),e.NdJ("ngModelChange",function(h){return r.timeDisabled=h}),e.qZA()(),e.YNc(17,w,1,1,"ng-template",null,14,e.W1O),e.qZA()),2&m&&(e.xp6(1),e.Q6J("rank",1),e.xp6(1),e.Q6J("ngModel",r.time24h)("displayFormat",r.displayFormat),e.xp6(1),e.Q6J("rank",1),e.xp6(1),e.Q6J("meridian",!0)("ngModel",r.time12h),e.xp6(1),e.Q6J("rank",1),e.xp6(1),e.Q6J("displaySeconds",!1)("ngModel",r.timeWithoutSeconds),e.xp6(1),e.Q6J("rank",1),e.xp6(1),e.Q6J("ngModel",r.timeCompact),e.xp6(1),e.Q6J("rank",1),e.xp6(1),e.Q6J("allowNull",!1)("ngModel",r.timeAllowNull),e.xp6(5),e.Q6J("rank",1),e.xp6(1),e.Q6J("disabled",!0)("ngModel",r.timeDisabled))},directives:[y.H,U.h,d.a,a.JJ,a.On,b.r,N.O5],encapsulation:2,changeDetection:0}),l})(),L=(()=>{class l{constructor(){this.timePickerBasic=[{language:"html",code:M,fileName:"platform-time-picker-basic-example"},{language:"typescript",code:x,fileName:"platform-time-picker-basic-example",component:"PlatformTimePickerBasicExampleComponent"}],this.timePickerReactive=[{language:"html",code:P,fileName:"platform-time-picker-reactive-example"},{language:"typescript",code:A,fileName:"platform-time-picker-reactive-example",component:"PlatformTimePickerReactiveExampleComponent"}],this.timePickerTemplate=[{language:"html",code:v,fileName:"platform-time-picker-template-example"},{language:"typescript",code:Z,fileName:"platform-time-picker-template-example",component:"PlatformTimePickerTemplateExampleComponent"}]}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-time-picker"]],decls:33,vars:3,consts:[["id","basic","componentName","time-picker"],[3,"exampleFiles"],["id","reactive","componentName","time-picker"],["id","template","componentName","time-picker"]],template:function(m,r){1&m&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Basic Time Picker "),e.qZA(),e.TgZ(2,"description"),e._uU(3,"Basic usage of Time Picker without Forms and with options like "),e.TgZ(4,"code"),e._uU(5,"meredian"),e.qZA(),e._uU(6,", "),e.TgZ(7,"code"),e._uU(8,"allowNull"),e.qZA(),e._uU(9,", "),e.TgZ(10,"code"),e._uU(11,"disabled"),e.qZA(),e._uU(12,", pre-populating and changing dates.\n"),e.qZA(),e.TgZ(13,"component-example"),e._UZ(14,"fdp-platform-time-picker-basic-example"),e.qZA(),e._UZ(15,"code-example",1)(16,"separator"),e.TgZ(17,"fd-docs-section-title",2),e._uU(18," Time Picker with Reactive Forms\n"),e.qZA(),e.TgZ(19,"description"),e._uU(20,"Usage of Time Picker with Platform Forms using Reactive Forms."),e.qZA(),e.TgZ(21,"component-example"),e._UZ(22,"fdp-platform-time-picker-reactive-example"),e.qZA(),e._UZ(23,"code-example",1)(24,"separator"),e.TgZ(25,"fd-docs-section-title",3),e._uU(26," Time Picker with Template Forms\n"),e.qZA(),e.TgZ(27,"description"),e._uU(28,"Usage of Time Picker with Platform Forms using Template Forms."),e.qZA(),e.TgZ(29,"component-example"),e._UZ(30,"fdp-platform-time-picker-template-example"),e.qZA(),e._UZ(31,"code-example",1)(32,"separator")),2&m&&(e.xp6(15),e.Q6J("exampleFiles",r.timePickerBasic),e.xp6(8),e.Q6J("exampleFiles",r.timePickerReactive),e.xp6(8),e.Q6J("exampleFiles",r.timePickerTemplate))},directives:[E.k,T.w,C.O,D,F.E,O.N,R,B],encapsulation:2}),l})();var Q=t(24882),H=t(98791),W=t(63710);const q=[{path:"",component:(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-time-picker-header"]],decls:15,vars:0,consts:[["routerLink","/core/time-picker"],["module","PlatformTimePickerModule","subPackage","form"]],template:function(m,r){1&m&&(e.TgZ(0,"header"),e._uU(1,"Time Picker"),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," This is an extension of the TimePicker component present in "),e.TgZ(5,"a",0),e._uU(6,"fundamental-ngx/core"),e.qZA(),e._uU(7,". "),e.qZA(),e.TgZ(8,"h3"),e._uU(9,"Platform specific enhancements:"),e.qZA(),e.TgZ(10,"p"),e._uU(11," Platform TimePicker component implements the FormFieldControl interface, and thus can be used within the FormField component. "),e.qZA()(),e._UZ(12,"import",1)(13,"fd-header-tabs")(14,"router-outlet"))},directives:[Q.G,T.w,n.yS,H.k,W.c,n.lC],encapsulation:2}),l})(),children:[{path:"",component:L},{path:"api",component:p.h,data:{content:i.X.timePicker}}]}];let K=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[n.Bz.forChild(q),s.g7,u.g,o.Yp,k.ED,k.Mk],n.Bz]}),l})()},85987:f=>{f.exports='<label class="fd-form-label">24-Hour Time Picker</label>\n<br />\n<fdp-time-picker name="24-hour" [displayFormat]="displayFormat"></fdp-time-picker>\n<br />\n\n<br />\n<label class="fd-form-label">12-Hour Time Picker</label>\n<br />\n<fdp-time-picker name="12-hour" [meridian]="true"></fdp-time-picker>\n<br />\n\n<br />\n<label class="fd-form-label">Time Picker Without Seconds</label>\n<br />\n<fdp-time-picker name="without-seconds" [displaySeconds]="false"></fdp-time-picker>\n<br />\n\n<br />\n<label class="fd-form-label">Disabled Time Picker</label>\n<br />\n<fdp-time-picker name="disabled" [disabled]="true"></fdp-time-picker>\n<br />\n\n<br />\n<label class="fd-form-label">Compact Time Picker</label>\n<br />\n<fdp-time-picker name="compact" contentDensity="compact"></fdp-time-picker>\n<br />\n\n<br />\n<label class="fd-form-label">Null Validity</label>\n<br />\n<fdp-time-picker name="null-validity" [allowNull]="false" [(ngModel)]="allowNullTimeObject"></fdp-time-picker>\n<br />\n<br />\n<button fd-button label="Set To Null" (click)="setNull()"></button>\n<button fd-button label="Set Valid Time" (click)="setValid()"></button>\n'},28352:f=>{f.exports="import { Component } from '@angular/core';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-time-picker-basic-example',\n    templateUrl: './platform-time-picker-basic-example.component.html',\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformTimePickerBasicExampleComponent {\n    allowNullTimeObject: FdDate = new FdDate().setTime(12, 0, 0);\n    displayFormat = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false };\n\n    setNull(): void {\n        this.allowNullTimeObject = null;\n    }\n\n    setValid(): void {\n        this.allowNullTimeObject = new FdDate().setTime(12, 0, 0);\n    }\n}\n"},67226:f=>{f.exports='<fdp-form-group [formGroup]="timePickerForm" (onSubmit)="onSubmit()">\n    <fdp-form-field\n        #ffl1\n        id="24-hour"\n        [rank]="1"\n        [required]="true"\n        placeholder="hh:mm:ss"\n        [validators]="requiredTimeValidator"\n        label="24-Hour Time Picker:"\n    >\n        <fdp-time-picker\n            name="24-hour"\n            [formControl]="ffl1.formControl"\n            [displayFormat]="displayFormat"\n        ></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl2\n        id="12-hour"\n        [rank]="1"\n        [required]="true"\n        placeholder="hh:mm:ss"\n        [validators]="requiredTimeValidator"\n        label="12-Hour Time Picker:"\n    >\n        <fdp-time-picker name="12-hour" [meridian]="true" [formControl]="ffl2.formControl"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl3\n        id="without-seconds"\n        [rank]="1"\n        [required]="true"\n        placeholder="hh:mm"\n        [validators]="requiredTimeValidator"\n        label="Time Picker Without Seconds:"\n    >\n        <fdp-time-picker\n            name="without-seconds"\n            [displaySeconds]="false"\n            [formControl]="ffl3.formControl"\n        ></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl4\n        id="compact"\n        [rank]="1"\n        [required]="true"\n        placeholder="hh:mm:ss"\n        [validators]="requiredTimeValidator"\n        label="Compact Time Picker:"\n    >\n        <fdp-time-picker name="compact" contentDensity="compact" [formControl]="ffl4.formControl"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="nullValidity"\n        [rank]="1"\n        [required]="true"\n        placeholder="hh:mm:ss"\n        [validators]="requiredTimeValidator"\n        label="Null Validity:"\n    >\n        <fdp-time-picker name="nullValidity" [allowNull]="false" formControlName="nullValidity"></fdp-time-picker>\n\n        <br />\n        <br />\n        <fd-segmented-button>\n            <button fd-button label="Set To Null" (click)="setNull()"></button>\n            <button fd-button label="Set Valid Time" (click)="setValid()"></button>\n        </fd-segmented-button>\n    </fdp-form-field>\n\n    <fdp-form-field id="disableExample" [rank]="1" placeholder="hh:mm:ss" label="Disabled Time Picker:">\n        <fdp-time-picker name="disableExample" formControlName="disableExample"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="submitBtn" [rank]="8">\n        <button fd-button name="submitBtn" (click)="onSubmit()">Submit</button>\n    </fdp-form-field>\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required"> Value is required </span>\n    </ng-template>\n</fdp-form-group>\n\n<span>form status: {{ timePickerForm?.valid }}</span>\n'},42516:f=>{f.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-time-picker-reactive-example',\n    templateUrl: './platform-time-picker-reactive-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformTimePickerReactiveExampleComponent {\n    requiredTimeValidator: ValidatorFn[] = [Validators.required];\n    displayFormat = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false };\n\n    timePickerForm: FormGroup = new FormGroup({\n        disableExample: new FormControl({ value: '', disabled: true }),\n        nullValidity: new FormControl(new FdDate().setTime(0, 0, 0))\n    });\n\n    onSubmit(): void {\n        if (this.timePickerForm.valid) {\n            alert('Form Value: ' + JSON.stringify(this.timePickerForm.value));\n        } else {\n            alert('Form invalid');\n        }\n    }\n\n    setNull(): void {\n        this.timePickerForm.get('nullValidity').setValue(null);\n        this.markControlAsTouched('nullValidity');\n    }\n\n    setValid(): void {\n        this.timePickerForm.get('nullValidity').setValue(new FdDate().setTime(0, 0, 0));\n        this.markControlAsTouched('nullValidity');\n    }\n\n    private markControlAsTouched(controlName: string): void {\n        const control = this.timePickerForm.get(controlName);\n\n        if (control.untouched) {\n            control.markAsTouched();\n        }\n    }\n}\n"},41679:f=>{f.exports='<fdp-form-group>\n    <fdp-form-field id="24-hour" [rank]="1" label="24-Hour Time Picker:">\n        <fdp-time-picker name="24-hour" [(ngModel)]="time24h" [displayFormat]="displayFormat"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="12-hour" [rank]="1" label="12-Hour Time Picker:">\n        <fdp-time-picker name="12-hour" [meridian]="true" [(ngModel)]="time12h"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="without-seconds" [rank]="1" label="Time Picker Without Seconds:">\n        <fdp-time-picker\n            name="without-seconds"\n            [displaySeconds]="false"\n            [(ngModel)]="timeWithoutSeconds"\n        ></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="compact" [rank]="1" label="Compact Time Picker:">\n        <fdp-time-picker name="compact" contentDensity="compact" [(ngModel)]="timeCompact"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="null-validity" [rank]="1" label="Null Validity:">\n        <fdp-time-picker name="null-validity" [allowNull]="false" [(ngModel)]="timeAllowNull"></fdp-time-picker>\n\n        <br />\n        <br />\n        <button fd-button label="Set To Null" (click)="setNull()"></button>\n        <button fd-button label="Set Valid Time" (click)="setValid()"></button>\n    </fdp-form-field>\n\n    <fdp-form-field id="disableExample" [rank]="1" label="Disabled Time Picker:">\n        <fdp-time-picker name="disableExample" [disabled]="true" [(ngModel)]="timeDisabled"></fdp-time-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required"> Value is required </span>\n    </ng-template>\n</fdp-form-group>\n'},93251:f=>{f.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-time-picker-template-example',\n    templateUrl: './platform-time-picker-template-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformTimePickerTemplateExampleComponent {\n    time24h: FdDate = new FdDate().setTime(18, 0, 0);\n    time12h: FdDate = new FdDate().setTime(18, 0, 0);\n    timeWithoutSeconds: FdDate = new FdDate().setTime(12, 0, 0);\n    timeCompact: FdDate = new FdDate().setTime(12, 0, 0);\n    timeAllowNull: FdDate = new FdDate().setTime(12, 0, 0);\n    timeDisabled: FdDate = new FdDate().setTime(12, 0, 0);\n    displayFormat = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false };\n\n    setNull(): void {\n        this.timeAllowNull = null;\n    }\n\n    setValid(): void {\n        this.timeAllowNull = new FdDate().setTime(12, 0, 0);\n    }\n}\n"}}]);