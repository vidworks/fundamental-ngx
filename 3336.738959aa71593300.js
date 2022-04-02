"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3336],{36854:(v,_,t)=>{t.d(_,{h:()=>F}),t(77135);var n=t(5e3),m=t(8674),f=t(74042),p=t(69808),s=t(87757),h=t(63043),T=t(50578),A=t(27078),P=t(42437),e=t(24919);const x=["menu"];function Z(g,C){if(1&g&&n._UZ(0,"button",8),2&g){const l=n.oxw(),d=n.MAs(6);n.Q6J("label","Select a file ("+l.files.length+")")("fdMenu",!0)("fdMenuTrigger",d)}}function y(g,C){if(1&g){const l=n.EpF();n.TgZ(0,"li",9),n.NdJ("click",function(){const b=n.CHM(l).$implicit;return n.oxw().getFile(b)}),n.TgZ(1,"div",10)(2,"span",11),n._uU(3),n.qZA()()()}if(2&g){const l=C.$implicit,d=n.oxw();n.ekj("is-selected",l===d.activeFile),n.xp6(3),n.Oqu(l)}}let F=(()=>{class g{constructor(l,d){this.route=l,this.apiService=d}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(l){this.apiService.getComponentHtml(l).subscribe(d=>{this.result=d,this.activeFile=l,this.menu.close()},d=>{console.warn("Did not find file "+l+".\nError: "+d)})}}return g.\u0275fac=function(l){return new(l||g)(n.Y36(m.gz),n.Y36(f.S))},g.\u0275cmp=n.Xpm({type:g,selectors:[["fd-api"]],viewQuery:function(l,d){if(1&l&&n.Gf(x,5),2&l){let u;n.iGM(u=n.CRH())&&(d.menu=u.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(l,d){1&l&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2),n.qZA(),n._UZ(3,"span",2),n.YNc(4,Z,1,3,"button",3),n.TgZ(5,"fd-menu",4,5),n.YNc(7,y,4,3,"li",6),n.qZA()(),n._UZ(8,"div",7)),2&l&&(n.xp6(2),n.Oqu(d.activeFile),n.xp6(2),n.Q6J("ngIf",d.files.length>1),n.xp6(1),n.Q6J("fillControlMode",null),n.xp6(2),n.Q6J("ngForOf",d.files),n.xp6(1),n.Q6J("innerHTML",d.result,n.oJD))},directives:[p.O5,s.r,h.k,T.M,p.sg,A.qv,P.K,e.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),g})()},63710:(v,_,t)=>{t.d(_,{c:()=>A});var i=t(5e3),n=t(17791),m=t(66997),f=t(8674),p=t(1726),s=t(55124),h=t(33089);const T=function(){return{exact:!0}};let A=(()=>{class P{}return P.\u0275fac=function(x){return new(x||P)},P.\u0275cmp=i.Xpm({type:P,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(x,Z){if(1&x&&(i.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),i._uU(5,"Examples"),i.qZA()()(),i.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),i._uU(10,"API"),i.qZA()()()(),i._UZ(11,"separator",7)),2&x){const y=i.MAs(3),F=i.MAs(8);i.xp6(2),i.Q6J("active",y.isActive)("routerLinkActiveOptions",i.DdM(3,T)),i.xp6(5),i.Q6J("active",F.isActive)}},directives:[n.d,m.w,f.yS,p.w,f.Od,s.P6,h.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),P})()},24882:(v,_,t)=>{t.d(_,{G:()=>m});var i=t(5e3);const n=["*"];let m=(()=>{class f{}return f.\u0275fac=function(s){return new(s||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["header"]],ngContentSelectors:n,decls:2,vars:0,consts:[[1,"header"]],template:function(s,h){1&s&&(i.F$t(),i.TgZ(0,"h1",0),i.Hsn(1),i.qZA())},styles:[".header[_ngcontent-%COMP%]{margin-top:2rem;font-size:2.2rem}"]}),f})()},98791:(v,_,t)=>{t.d(_,{k:()=>n});var i=t(5e3);let n=(()=>{class m{constructor(p){this.currentLib=p}ngOnInit(){const p=["@fundamental-ngx",this.currentLib];this.subPackage&&p.push(this.subPackage),this.library=p.join("/")}}return m.\u0275fac=function(p){return new(p||m)(i.Y36("CURRENT_LIB"))},m.\u0275cmp=i.Xpm({type:m,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(p,s){1&p&&(i.TgZ(0,"code")(1,"span",0),i._uU(2,"import"),i.qZA(),i._uU(3),i.TgZ(4,"span",0),i._uU(5,"from "),i.qZA(),i.TgZ(6,"span",1),i._uU(7),i.qZA(),i._uU(8,"; "),i.qZA()),2&p&&(i.xp6(3),i.hij(" { ",s.module," } "),i.xp6(4),i.hij("'",s.library,"'"))},encapsulation:2}),m})()},74042:(v,_,t)=>{t.d(_,{S:()=>m});var i=t(5e3),n=t(40520);let m=(()=>{class f{constructor(s,h){this.httpClient=s,this.currentLib=h,this.BASE_URL="assets/typedoc/"}getComponentHtml(s){s=s.toLocaleLowerCase()+".html";const h=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",s);return this.httpClient.get(h,{responseType:"text"})}buildUrl(...s){return s.join("/").replace(/\/+/g,"/")}}return f.\u0275fac=function(s){return new(s||f)(i.LFG(n.eN),i.LFG("CURRENT_LIB"))},f.\u0275prov=i.Yz7({token:f,factory:f.\u0275fac}),f})()},28674:(v,_,t)=>{t.d(_,{g:()=>d});var i=t(69808),n=t(8674),m=t(52382),f=t(62970),p=t(53732),s=t(74042),h=t(32818),T=t(30825),A=t(90523),P=t(80848),e=t(31258),x=t(77135),Z=t(89282),y=t(95037),F=t(46394),g=t(75394);const C=[F.P4,x.$9,P.Q,y.o,T.hJ,Z.H,A.nY,e.L,g.s];var l=t(5e3);let d=(()=>{class u{}return u.\u0275fac=function(U){return new(U||u)},u.\u0275mod=l.oAB({type:u}),u.\u0275inj=l.cJS({providers:[p.t,s.S],imports:[[m.u5,i.ez,n.Bz,h.f,C,f.JP.forChild()],m.u5,m.UX,h.f,i.ez,F.P4,x.$9,P.Q,y.o,T.hJ,Z.H,A.nY,e.L,g.s]}),u})()},73336:(v,_,t)=>{t.r(_),t.d(_,{PlatformDocPageFooterModule:()=>Q});var i=t(8674),n=t(45665),m=t(36854),f=t(28674),p=t(31258),s=t(24409),h=t(24847),T=t(62894),A=t(74857),P=t(37822),e=t(5e3),x=t(93943),Z=t(44969),y=t(28595),F=t(69808);function g(o,r){1&o&&e.Hsn(0,0,["*ngTemplateOutlet","logo"])}function C(o,r){1&o&&e.Hsn(0,1,["*ngTemplateOutlet","content"])}const l=["*","*"];let d=(()=>{class o{constructor(a,c){this._elRef=a,this._cdRef=c,this.size="xl"}onResize(){this.screenWidth=window.innerWidth,this.size=this.screenWidth>0&&this.screenWidth<=360?"sm":this.screenWidth>361&&this.screenWidth<=768?"md":this.screenWidth>769&&this.screenWidth<=1024?"lg":"xl"}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(e.SBq),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["fdp-page-footer"]],hostBindings:function(a,c){1&a&&e.NdJ("resize",function(M){return c.onResize(M)},!1,e.Jf7)},inputs:{logo:"logo",content:"content"},ngContentSelectors:l,decls:5,vars:10,consts:[[1,"fd-page-footer"],[1,"fd-page-footer__logo"],[4,"ngTemplateOutlet"],[1,"fd-page-footer__container"]],template:function(a,c){1&a&&(e.F$t(l),e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,g,1,0,"ng-content",2),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,C,1,0,"ng-content",2),e.qZA()()),2&a&&(e.ekj("fd-page-footer--xl","xl"===c.size)("fd-page-footer--lg","lg"===c.size)("fd-page-footer--md","md"===c.size)("fd-page-footer--sm","sm"===c.size),e.xp6(2),e.Q6J("ngTemplateOutlet",c.logo),e.xp6(2),e.Q6J("ngTemplateOutlet",c.content))},directives:[F.tP],styles:["/*!\n * Fundamental Library Styles v0.24.0-rc.8\n * Copyright (c) 2022 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n */.fd-page-footer{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;background:var(--sapBaseColor);position:relative;padding-top:1.5rem;padding-bottom:2rem}.fd-page-footer:after,.fd-page-footer:before{box-sizing:inherit;font-size:inherit}.fd-page-footer__logo{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;width:3rem;height:1.5rem;overflow:hidden}.fd-page-footer__logo:after,.fd-page-footer__logo:before{box-sizing:inherit;font-size:inherit}.fd-page-footer__row{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;word-break:break-all;width:70%}.fd-page-footer__row:after,.fd-page-footer__row:before{box-sizing:inherit;font-size:inherit}.fd-page-footer__row-item{margin-right:1.5rem}.fd-page-footer__row-item[dir=rtl],[dir=rtl] .fd-page-footer__row-item{margin-right:0;margin-left:1.5rem}.fd-page-footer__row-image{display:block}.fd-page-footer__row:not(:first-child){padding-top:.25rem}.fd-page-footer__text{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-self:flex-end;width:30%;text-align:right;position:absolute}.fd-page-footer__text:after,.fd-page-footer__text:before{box-sizing:inherit;font-size:inherit}.fd-page-footer__text[dir=rtl],[dir=rtl] .fd-page-footer__text{text-align:left}.fd-page-footer--xl{padding-right:3rem;padding-left:3rem}.fd-page-footer--xl .fd-page-footer__container{display:flex;flex-direction:column;padding-top:.75rem}.fd-page-footer--lg{padding-right:2rem;padding-left:2rem}.fd-page-footer--lg .fd-page-footer__container{display:flex;flex-direction:column;padding-top:.75rem}.fd-page-footer--md{padding-right:1rem;padding-left:1rem}.fd-page-footer--md .fd-page-footer__container{display:flex;flex-direction:column;padding-top:.75rem}.fd-page-footer--sm{padding-right:.5rem;padding-left:.5rem}.fd-page-footer--sm .fd-page-footer__container{display:flex;flex-direction:column;padding-top:.75rem}@media (max-width: 768px){.fd-page-footer .fd-page-footer__row{margin-right:0;width:100%}.fd-page-footer .fd-page-footer__row:not(:first-child){padding-top:0}.fd-page-footer .fd-page-footer__row-item{padding-top:.25rem}.fd-page-footer .fd-page-footer__text{width:90%;text-align:left;padding-top:.75rem}.fd-page-footer .fd-page-footer__container{display:inline-block;flex-direction:row;width:100%}}\n"],encapsulation:2}),o})();var u=t(18147),b=t(61357);function U(o,r){1&o&&e._UZ(0,"img",3)}function O(o,r){1&o&&(e.TgZ(0,"div",4)(1,"fdp-link",5),e._uU(2,"Supported Browser"),e.qZA(),e.TgZ(3,"fdp-link",6),e._uU(4,"Security Disclosure"),e.qZA(),e.TgZ(5,"fdp-link",7),e._uU(6,"Privacy Statement"),e.qZA(),e.TgZ(7,"fdp-link",8),e._uU(8,"Cookie Statement"),e.qZA(),e.TgZ(9,"fdp-link",9),e._uU(10,"Participant Team"),e.qZA()(),e.TgZ(11,"div",10)(12,"span",11),e._uU(13," 1992-2021 @copyright all right reserved."),e.qZA()())}function S(o,r){1&o&&e._UZ(0,"img",3)}function k(o,r){1&o&&(e.TgZ(0,"div",4)(1,"fdp-link",5),e._uU(2,"Supported Browser"),e.qZA()(),e.TgZ(3,"div",4)(4,"fdp-link",6),e._uU(5,"Security Disclosure"),e.qZA(),e.TgZ(6,"fdp-link",7),e._uU(7,"Privacy Statement"),e.qZA(),e.TgZ(8,"fdp-link",8),e._uU(9,"Cookie Statement"),e.qZA(),e.TgZ(10,"fdp-link",9),e._uU(11,"Participant Team"),e.qZA()(),e.TgZ(12,"div",10)(13,"span",11),e._uU(14," 1992-2021 @copyright all right reserved."),e.qZA()())}function w(o,r){1&o&&e._UZ(0,"img",3)}function D(o,r){1&o&&(e.TgZ(0,"div",4)(1,"fdp-link",5),e._UZ(2,"fd-icon",6),e._uU(3," Supported Browser "),e.qZA()(),e.TgZ(4,"div",4)(5,"fdp-link",7),e._UZ(6,"img",8),e._uU(7," Security Disclosure "),e.qZA(),e.TgZ(8,"fdp-link",9),e._UZ(9,"img",8),e._uU(10," Privacy Statement "),e.qZA()(),e.TgZ(11,"div",10)(12,"span",11),e._uU(13," 1992-2021 @copyright all right reserved."),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("title","On click you will get to target page"),e.xp6(4),e.Q6J("title","On click you will get to target page"),e.xp6(3),e.Q6J("title","On click you will get to target page"))}let L=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["fdp-platform-footer-example"]],decls:5,vars:2,consts:[[3,"logo","content"],["logo",""],["content",""],["id","fd-logo-1","src","/assets/images/logo-sap.svg","alt",""],[1,"fd-page-footer__row"],["id","fd-link-1","href","/","title","Supported Browser",1,"fd-page-footer__row-item"],["id","fd-link-2","href","/","title","Security Disclosure",1,"fd-page-footer__row-item"],["id","fd-link-3","href","/","title","Privacy Statement",1,"fd-page-footer__row-item"],["id","fd-link-4","href","/","title","Cookie Statement",1,"fd-page-footer__row-item"],["id","fd-link-5","href","/","title","Participant Team",1,"fd-page-footer__row-item"],[1,"fd-page-footer__text"],[1,"fd-form-label"]],template:function(a,c){if(1&a&&(e._UZ(0,"fdp-page-footer",0),e.YNc(1,U,1,0,"ng-template",null,1,e.W1O),e.YNc(3,O,14,0,"ng-template",null,2,e.W1O)),2&a){const E=e.MAs(2),M=e.MAs(4);e.Q6J("logo",E)("content",M)}},directives:[d,u.N],encapsulation:2}),o})(),B=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["fdp-platform-footer-multiple-example"]],decls:5,vars:2,consts:[[3,"logo","content"],["logo",""],["content",""],["id","fd-logo-2","src","/assets/images/logo-sap.svg","alt",""],[1,"fd-page-footer__row"],["id","fd-link-6","href","/","title","Supported Browser",1,"fd-page-footer__row-item"],["id","fd-link-6","href","/","title","Security Disclosure",1,"fd-page-footer__row-item"],["id","fd-link-7","href","/","title","Privacy Statement",1,"fd-page-footer__row-item"],["id","fd-link-8","href","/","title","Cookie Statement",1,"fd-page-footer__row-item"],["id","fd-link-9","href","/","title","Participant Team",1,"fd-page-footer__row-item"],[1,"fd-page-footer__text"],[1,"fd-form-label"]],template:function(a,c){if(1&a&&(e._UZ(0,"fdp-page-footer",0),e.YNc(1,S,1,0,"ng-template",null,1,e.W1O),e.YNc(3,k,15,0,"ng-template",null,2,e.W1O)),2&a){const E=e.MAs(2),M=e.MAs(4);e.Q6J("logo",E)("content",M)}},directives:[d,u.N],encapsulation:2}),o})(),I=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["fdp-platform-footer-with-icon-example"]],decls:5,vars:2,consts:[[3,"logo","content"],["logo",""],["content",""],["src","/assets/images/logo-sap.svg","alt","","aria-label","sap icon Image"],[1,"fd-page-footer__row"],["id","fd-icon-link","href","/",1,"fd-page-footer__row-item",3,"title"],["glyph","chain-link"],["id","fd-img-link-1","href","/",1,"fd-page-footer__row-item",3,"title"],["src","https://picsum.photos/id/1021/50/50",1,"fd-page-footer__row-image"],["id","fd-img-link-2","href","/",1,"fd-page-footer__row-item",3,"title"],[1,"fd-page-footer__text"],[1,"fd-form-label"]],template:function(a,c){if(1&a&&(e._UZ(0,"fdp-page-footer",0),e.YNc(1,w,1,0,"ng-template",null,1,e.W1O),e.YNc(3,D,14,3,"ng-template",null,2,e.W1O)),2&a){const E=e.MAs(2),M=e.MAs(4);e.Q6J("logo",E)("content",M)}},directives:[d,u.N,b.o],encapsulation:2}),o})();var W=t(29871);let z=(()=>{class o{constructor(){this.PlatformDefaultFooter=[{language:"html",code:T,fileName:"platform-footer-example"}],this.PlatformMultiLineFooter=[{language:"html",code:P,fileName:"platform-footer-multiple-line-example"}],this.PlatformWithIconFooter=[{language:"html",code:A,fileName:"platform-footer-with-icon-example"}]}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["fdp-platform-page-footer-docs"]],decls:24,vars:3,consts:[["id","default","componentName","page-footer"],[3,"exampleFiles"],["id","multi-line","componentName","page-footer"],["id","with-icon","componentName","page-footer"]],template:function(a,c){1&a&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Single Line Of Links Page Footer\n"),e.qZA(),e.TgZ(2,"description"),e._uU(3," Standard default Page Footer component with single line of links. "),e.qZA(),e.TgZ(4,"component-example"),e._UZ(5,"fdp-platform-footer-example"),e.qZA(),e._UZ(6,"code-example",1),e.TgZ(7,"fd-docs-section-title",2),e._uU(8,"Multiple Line Of Links Page Footer\n"),e.qZA(),e.TgZ(9,"description"),e._uU(10," Standard default Page Footer component with Multiple line of link. Multi Line can be achived by embedding the template under "),e.TgZ(11,"code"),e._uU(12,"div"),e.qZA(),e._uU(13," tags for the line seperation.\n"),e.qZA(),e.TgZ(14,"component-example"),e._UZ(15,"fdp-platform-footer-multiple-example"),e.qZA(),e._UZ(16,"code-example",1),e.TgZ(17,"fd-docs-section-title",3),e._uU(18,"Page Footer with Icon and Image."),e.qZA(),e.TgZ(19,"description"),e._uU(20," Standard Page Footer with icon link and images component. "),e.qZA(),e.TgZ(21,"component-example"),e._UZ(22,"fdp-platform-footer-with-icon-example"),e.qZA(),e._UZ(23,"code-example",1)),2&a&&(e.xp6(6),e.Q6J("exampleFiles",c.PlatformDefaultFooter),e.xp6(10),e.Q6J("exampleFiles",c.PlatformMultiLineFooter),e.xp6(7),e.Q6J("exampleFiles",c.PlatformWithIconFooter))},directives:[x.k,Z.w,y.O,L,W.E,B,I],encapsulation:2}),o})();var R=t(24882),H=t(87960),J=t(98791),N=t(63710);const K=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["fd-platform-page-footer-header"]],decls:12,vars:0,consts:[["label","SAP Ariba Component","title","SAP Ariba Component","color","8"],["module","PlatformPageFooterModule","subPackage","page-footer"]],template:function(a,c){1&a&&(e.TgZ(0,"header"),e._uU(1,"Page Footer Component"),e.qZA(),e._UZ(2,"fd-info-label",0),e.TgZ(3,"description")(4,"p"),e._uU(5," Generic page footer representation of the component for the web pages. The component accepts the html template as the input form the user end to handle diffrent type of templating in the footer section. "),e.qZA(),e.TgZ(6,"code"),e._uU(7,"logo, copyright, content "),e.qZA(),e._uU(8," accepts the HTML template as the input.\n"),e.qZA(),e._UZ(9,"import",1)(10,"fd-header-tabs")(11,"router-outlet"))},directives:[R.G,H.e,Z.w,J.k,N.c,i.lC],encapsulation:2}),o})(),children:[{path:"",component:z},{path:"api",component:m.h,data:{content:n.X.footer}}]}];let Q=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.Bz.forChild(K),f.g,h.S,s.F,p.L],i.Bz]}),o})()},62894:v=>{v.exports='<fdp-page-footer [logo]="logo" [content]="content"></fdp-page-footer>\n<ng-template #logo>\n    <img id="fd-logo-1" src="/assets/images/logo-sap.svg" alt="" />\n</ng-template>\n\n<ng-template #content>\n    <div class="fd-page-footer__row">\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-1" href="/" title="Supported Browser"\n            >Supported Browser</fdp-link\n        >\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-2" href="/" title="Security Disclosure"\n            >Security Disclosure</fdp-link\n        >\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-3" href="/" title="Privacy Statement"\n            >Privacy Statement</fdp-link\n        >\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-4" href="/" title="Cookie Statement"\n            >Cookie Statement</fdp-link\n        >\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-5" href="/" title="Participant Team"\n            >Participant Team</fdp-link\n        >\n    </div>\n    <div class="fd-page-footer__text">\n        <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>\n    </div>\n</ng-template>\n'},37822:v=>{v.exports='<fdp-page-footer [logo]="logo" [content]="content"></fdp-page-footer>\n<ng-template #logo>\n    <img id="fd-logo-2" src="/assets/images/logo-sap.svg" alt="" />\n</ng-template>\n\n<ng-template #content>\n    <div class="fd-page-footer__row">\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-6" href="/" title="Supported Browser"\n            >Supported Browser</fdp-link\n        >\n    </div>\n    <div class="fd-page-footer__row">\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-6" href="/" title="Security Disclosure"\n            >Security Disclosure</fdp-link\n        >\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-7" href="/" title="Privacy Statement"\n            >Privacy Statement</fdp-link\n        >\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-8" href="/" title="Cookie Statement"\n            >Cookie Statement</fdp-link\n        >\n        <fdp-link class="fd-page-footer__row-item" id="fd-link-9" href="/" title="Participant Team"\n            >Participant Team</fdp-link\n        >\n    </div>\n    <div class="fd-page-footer__text">\n        <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>\n    </div>\n</ng-template>\n'},74857:v=>{v.exports='<fdp-page-footer [logo]="logo" [content]="content"></fdp-page-footer>\n<ng-template #logo>\n    <img src="/assets/images/logo-sap.svg" alt="" aria-label="sap icon Image" />\n</ng-template>\n\n<ng-template #content>\n    <div class="fd-page-footer__row">\n        <fdp-link\n            class="fd-page-footer__row-item"\n            id="fd-icon-link"\n            href="/"\n            [title]="\'On click you will get to target page\'"\n        >\n            <fd-icon glyph="chain-link"></fd-icon>\n            Supported Browser\n        </fdp-link>\n    </div>\n    <div class="fd-page-footer__row">\n        <fdp-link\n            class="fd-page-footer__row-item"\n            id="fd-img-link-1"\n            href="/"\n            [title]="\'On click you will get to target page\'"\n        >\n            <img class="fd-page-footer__row-image" src="https://picsum.photos/id/1021/50/50" />\n            Security Disclosure\n        </fdp-link>\n        <fdp-link\n            class="fd-page-footer__row-item"\n            id="fd-img-link-2"\n            href="/"\n            [title]="\'On click you will get to target page\'"\n        >\n            <img class="fd-page-footer__row-image" src="https://picsum.photos/id/1021/50/50" />\n            Privacy Statement\n        </fdp-link>\n    </div>\n    <div class="fd-page-footer__text">\n        <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>\n    </div>\n</ng-template>\n'}}]);