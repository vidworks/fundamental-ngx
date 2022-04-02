"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2139],{36854:(p,v,t)=>{t.d(v,{h:()=>Z}),t(77135);var n=t(5e3),f=t(8674),u=t(74042),m=t(69808),s=t(87757),e=t(63043),E=t(50578),C=t(27078),b=t(42437),h=t(24919);const P=["menu"];function T(g,_){if(1&g&&n._UZ(0,"button",8),2&g){const l=n.oxw(),c=n.MAs(6);n.Q6J("label","Select a file ("+l.files.length+")")("fdMenu",!0)("fdMenuTrigger",c)}}function A(g,_){if(1&g){const l=n.EpF();n.TgZ(0,"li",9),n.NdJ("click",function(){const D=n.CHM(l).$implicit;return n.oxw().getFile(D)}),n.TgZ(1,"div",10)(2,"span",11),n._uU(3),n.qZA()()()}if(2&g){const l=_.$implicit,c=n.oxw();n.ekj("is-selected",l===c.activeFile),n.xp6(3),n.Oqu(l)}}let Z=(()=>{class g{constructor(l,c){this.route=l,this.apiService=c}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(l){this.apiService.getComponentHtml(l).subscribe(c=>{this.result=c,this.activeFile=l,this.menu.close()},c=>{console.warn("Did not find file "+l+".\nError: "+c)})}}return g.\u0275fac=function(l){return new(l||g)(n.Y36(f.gz),n.Y36(u.S))},g.\u0275cmp=n.Xpm({type:g,selectors:[["fd-api"]],viewQuery:function(l,c){if(1&l&&n.Gf(P,5),2&l){let x;n.iGM(x=n.CRH())&&(c.menu=x.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(l,c){1&l&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2),n.qZA(),n._UZ(3,"span",2),n.YNc(4,T,1,3,"button",3),n.TgZ(5,"fd-menu",4,5),n.YNc(7,A,4,3,"li",6),n.qZA()(),n._UZ(8,"div",7)),2&l&&(n.xp6(2),n.Oqu(c.activeFile),n.xp6(2),n.Q6J("ngIf",c.files.length>1),n.xp6(1),n.Q6J("fillControlMode",null),n.xp6(2),n.Q6J("ngForOf",c.files),n.xp6(1),n.Q6J("innerHTML",c.result,n.oJD))},directives:[m.O5,s.r,e.k,E.M,m.sg,C.qv,b.K,h.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),g})()},63710:(p,v,t)=>{t.d(v,{c:()=>C});var i=t(5e3),n=t(17791),f=t(66997),u=t(8674),m=t(1726),s=t(55124),e=t(33089);const E=function(){return{exact:!0}};let C=(()=>{class b{}return b.\u0275fac=function(P){return new(P||b)},b.\u0275cmp=i.Xpm({type:b,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(P,T){if(1&P&&(i.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),i._uU(5,"Examples"),i.qZA()()(),i.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),i._uU(10,"API"),i.qZA()()()(),i._UZ(11,"separator",7)),2&P){const A=i.MAs(3),Z=i.MAs(8);i.xp6(2),i.Q6J("active",A.isActive)("routerLinkActiveOptions",i.DdM(3,E)),i.xp6(5),i.Q6J("active",Z.isActive)}},directives:[n.d,f.w,u.yS,m.w,u.Od,s.P6,e.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),b})()},24882:(p,v,t)=>{t.d(v,{G:()=>f});var i=t(5e3);const n=["*"];let f=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["header"]],ngContentSelectors:n,decls:2,vars:0,consts:[[1,"header"]],template:function(s,e){1&s&&(i.F$t(),i.TgZ(0,"h1",0),i.Hsn(1),i.qZA())},styles:[".header[_ngcontent-%COMP%]{margin-top:2rem;font-size:2.2rem}"]}),u})()},98791:(p,v,t)=>{t.d(v,{k:()=>n});var i=t(5e3);let n=(()=>{class f{constructor(m){this.currentLib=m}ngOnInit(){const m=["@fundamental-ngx",this.currentLib];this.subPackage&&m.push(this.subPackage),this.library=m.join("/")}}return f.\u0275fac=function(m){return new(m||f)(i.Y36("CURRENT_LIB"))},f.\u0275cmp=i.Xpm({type:f,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(m,s){1&m&&(i.TgZ(0,"code")(1,"span",0),i._uU(2,"import"),i.qZA(),i._uU(3),i.TgZ(4,"span",0),i._uU(5,"from "),i.qZA(),i.TgZ(6,"span",1),i._uU(7),i.qZA(),i._uU(8,"; "),i.qZA()),2&m&&(i.xp6(3),i.hij(" { ",s.module," } "),i.xp6(4),i.hij("'",s.library,"'"))},encapsulation:2}),f})()},74042:(p,v,t)=>{t.d(v,{S:()=>f});var i=t(5e3),n=t(40520);let f=(()=>{class u{constructor(s,e){this.httpClient=s,this.currentLib=e,this.BASE_URL="assets/typedoc/"}getComponentHtml(s){s=s.toLocaleLowerCase()+".html";const e=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",s);return this.httpClient.get(e,{responseType:"text"})}buildUrl(...s){return s.join("/").replace(/\/+/g,"/")}}return u.\u0275fac=function(s){return new(s||u)(i.LFG(n.eN),i.LFG("CURRENT_LIB"))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac}),u})()},28674:(p,v,t)=>{t.d(v,{g:()=>c});var i=t(69808),n=t(8674),f=t(52382),u=t(62970),m=t(53732),s=t(74042),e=t(32818),E=t(30825),C=t(90523),b=t(80848),h=t(31258),P=t(77135),T=t(89282),A=t(95037),Z=t(46394),g=t(75394);const _=[Z.P4,P.$9,b.Q,A.o,E.hJ,T.H,C.nY,h.L,g.s];var l=t(5e3);let c=(()=>{class x{}return x.\u0275fac=function(L){return new(L||x)},x.\u0275mod=l.oAB({type:x}),x.\u0275inj=l.cJS({providers:[m.t,s.S],imports:[[f.u5,i.ez,n.Bz,e.f,_,u.JP.forChild()],f.u5,f.UX,e.f,i.ez,Z.P4,P.$9,b.Q,A.o,E.hJ,T.H,C.nY,h.L,g.s]}),x})()},42139:(p,v,t)=>{t.r(v),t.d(v,{PlatformPanelDocsModule:()=>W});var i=t(8674),n=t(36854),f=t(45665),u=t(28674),m=t(35243),s=t(52537),e=t(5e3),E=t(24882),C=t(44969),b=t(98791),h=t(63710);let P=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-panel-header"]],decls:24,vars:0,consts:[["routerLink","/core/panel"],["module","PlatformPanelModule","subPackage","panel"]],template:function(o,d){1&o&&(e.TgZ(0,"header"),e._uU(1,"Panel"),e.qZA(),e.TgZ(2,"description"),e._uU(3," This is a wrapper of the Platform component present in "),e.TgZ(4,"a",0),e._uU(5,"@fundamental-ngx/core"),e.qZA(),e._uU(6,". "),e._UZ(7,"br"),e._uU(8," It provides component signature for Panel Title and Panel Content directives. Also it includes option to add buttons to panel header (future feature enhancement). "),e._UZ(9,"br")(10,"br"),e.TgZ(11,"h3"),e._uU(12,"Platform specific enhancements:"),e.qZA(),e.TgZ(13,"ul")(14,"li"),e._uU(15,"Develop the Panel and sub-elements as components as opposed to core directive approach."),e.qZA(),e.TgZ(16,"li"),e._uU(17,'Internalize "expand/collapse" button and controller logic.'),e.qZA(),e.TgZ(18,"li"),e._uU(19,"Include option to add buttons to panel header (future feature enhancement)."),e.qZA()()(),e._UZ(20,"br")(21,"import",1)(22,"fd-header-tabs")(23,"router-outlet"))},directives:[E.G,C.w,i.yS,b.k,h.c,i.lC],encapsulation:2}),a})();var T=t(24616),A=t(91835),Z=t(61797),g=t(10402),_=t(11541),l=t(61972),c=t(76943),x=t(70776),D=t(93943),L=t(28595),y=t(95209),M=t(51887),U=t(32673);let V=(()=>{class a{constructor(){this.expanded=!0}onExpandChange(o){this.expanded=o.payload}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-platform-panel-expandable-example"]],decls:10,vars:5,consts:[["ariaControlsId","fdp-panel-content-112","label","Toggle Expand",3,"ariaPressed","ariaExpanded","click"],["id","panel-id","title","Panel Title","contentDensity","cozy",3,"expanded","expandable","panelExpandChange"],["id","fdp-panel-content-112"]],template:function(o,d){1&o&&(e.TgZ(0,"fdp-button",0),e.NdJ("click",function(){return d.expanded=!d.expanded}),e.qZA(),e._UZ(1,"br")(2,"br"),e._uU(3),e._UZ(4,"br")(5,"br")(6,"br"),e.TgZ(7,"fdp-panel",1),e.NdJ("panelExpandChange",function(X){return d.onExpandChange(X)}),e.TgZ(8,"fdp-panel-content",2),e._uU(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),e.qZA()()),2&o&&(e.Q6J("ariaPressed",d.expanded)("ariaExpanded",d.expanded),e.xp6(3),e.hij("\nExpanded value is: ",d.expanded,"\n"),e.xp6(4),e.Q6J("expanded",d.expanded)("expandable",!0))},directives:[y.r,M.y,U.n],encapsulation:2}),a})();var O=t(29871),F=t(33089);let N=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-panel-fixed-example"]],decls:3,vars:1,consts:[["id","fixed-panel-id","title","Panel Header",3,"expandable"]],template:function(o,d){1&o&&(e.TgZ(0,"fdp-panel",0)(1,"fdp-panel-content"),e._uU(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),e.qZA()()),2&o&&e.Q6J("expandable",!1)},directives:[M.y,U.n],encapsulation:2}),a})(),q=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-panel-compact-example"]],decls:3,vars:0,consts:[["id","compact-panel-id","title","Compact Panel Title","contentDensity","compact","expandLabel","Collapse Panel","collapseLabel","Expand Panel"]],template:function(o,d){1&o&&(e.TgZ(0,"fdp-panel",0)(1,"fdp-panel-content"),e._uU(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),e.qZA()())},directives:[M.y,U.n],encapsulation:2}),a})(),S=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-panel-fixed-height-example"]],decls:3,vars:0,consts:[["id","fixed-panel-id","title","Panel Header"],["contentHeight","86px"]],template:function(o,d){1&o&&(e.TgZ(0,"fdp-panel",0)(1,"fdp-panel-content",1),e._uU(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),e.qZA()())},directives:[M.y,U.n],encapsulation:2}),a})();var I=t(5816);let H=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-panel-actions-example"]],decls:6,vars:0,consts:[["id","panel-actions-id","title","Panel Title"],["label","Edit"],["label","Delete"]],template:function(o,d){1&o&&(e.TgZ(0,"fdp-panel",0)(1,"fdp-panel-actions"),e._UZ(2,"fdp-button",1)(3,"fdp-button",2),e.qZA(),e.TgZ(4,"fdp-panel-content"),e._uU(5," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),e.qZA()())},directives:[M.y,I.R,y.r,U.n],encapsulation:2}),a})();var B=t(19803);const R=s.xH.createProviderFactory({collapseLabel:"New Default Collapse Label",expandLabel:"New Default Expand Label"}),J={provide:s.xH,useFactory:R,deps:[B.SY]};let j=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-platform-panel-config-example"]],features:[e._Bn([J])],decls:3,vars:0,consts:[["title","Panel Header"]],template:function(o,d){1&o&&(e.TgZ(0,"fdp-panel",0)(1,"fdp-panel-content"),e._uU(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),e.qZA()())},directives:[M.y,U.n],encapsulation:2}),a})();const K=[{path:"",component:P,children:[{path:"",component:(()=>{class a{constructor(){this.panelExpandable=[{language:"html",code:T,fileName:"platform-panel-expandable-example"},{language:"typescript",code:A,fileName:"platform-panel-expandable-example",component:"PlatformPanelExpandableExampleComponent"}],this.panelActions=[{language:"html",code:Z,fileName:"platform-panel-actions-example"}],this.panelFixed=[{language:"html",code:g,fileName:"platform-panel-fixed-example"}],this.panelFixedHeight=[{language:"html",code:_,fileName:"platform-panel-fixed-height-example"}],this.panelCompact=[{language:"html",code:l,fileName:"platform-panel-compact-example"}],this.panelConfig=[{language:"html",code:c,fileName:"platform-panel-config-example"},{language:"typescript",code:x,fileName:"platform-panel-config-example",component:"PlatformPanelConfigExampleComponent"}]}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-panel"]],decls:56,vars:6,consts:[["id","expandable","componentName","panel"],[3,"exampleFiles"],["id","fixed","componentName","panel"],["id","compact","componentName","panel"],["id","fixed-height","componentName","panel"],["id","actions","componentName","panel"],["id","config","componentName","panel"]],template:function(o,d){1&o&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Expandable Panel "),e.qZA(),e.TgZ(2,"description"),e._uU(3," Expandable panels are much like fixed panels, except their content can be expanded and collapsed.\n"),e.qZA(),e.TgZ(4,"component-example"),e._UZ(5,"fdp-platform-panel-expandable-example"),e.qZA(),e._UZ(6,"code-example",1)(7,"separator"),e.TgZ(8,"fd-docs-section-title",2),e._uU(9," Fixed Panel "),e.qZA(),e.TgZ(10,"description"),e._uU(11," Fixed panels are useful for grouping custom content. To create a fixed panel, add "),e.TgZ(12,"code"),e._uU(13,'[expandable]="false"'),e.qZA(),e._uU(14," to the Panel.\n"),e.qZA(),e.TgZ(15,"component-example"),e._UZ(16,"fdp-panel-fixed-example"),e.qZA(),e._UZ(17,"code-example",1)(18,"separator"),e.TgZ(19,"fd-docs-section-title",3),e._uU(20," Compact Panel "),e.qZA(),e.TgZ(21,"description"),e._uU(22," For a compact panel, set the "),e.TgZ(23,"code"),e._uU(24,'contentDensity="compact"'),e.qZA(),e._uU(25,". "),e.qZA(),e.TgZ(26,"component-example"),e._UZ(27,"fdp-panel-compact-example"),e.qZA(),e._UZ(28,"code-example",1)(29,"separator"),e.TgZ(30,"fd-docs-section-title",4),e._uU(31," Fixed Height Content Panel "),e.qZA(),e.TgZ(32,"description"),e._uU(33," It's possible to set height of panel content by "),e.TgZ(34,"code"),e._uU(35,"[contentHeight]"),e.qZA(),e._uU(36," option. "),e.qZA(),e.TgZ(37,"component-example"),e._UZ(38,"fdp-panel-fixed-height-example"),e.qZA(),e._UZ(39,"code-example",1)(40,"separator"),e.TgZ(41,"fd-docs-section-title",5),e._uU(42," Panel Actions "),e.qZA(),e.TgZ(43,"description"),e._uU(44," Buttons and other action elements with in this tag will be placed in the Panel header toolbar\n"),e.qZA(),e.TgZ(45,"component-example"),e._UZ(46,"fdp-panel-actions-example"),e.qZA(),e._UZ(47,"code-example",1)(48,"separator"),e.TgZ(49,"fd-docs-section-title",6),e._uU(50," Panel Config "),e.qZA(),e.TgZ(51,"description"),e._uU(52," Use Panel Config to override default options "),e.qZA(),e.TgZ(53,"component-example"),e._UZ(54,"fdp-platform-panel-config-example"),e.qZA(),e._UZ(55,"code-example",1)),2&o&&(e.xp6(6),e.Q6J("exampleFiles",d.panelExpandable),e.xp6(11),e.Q6J("exampleFiles",d.panelFixed),e.xp6(11),e.Q6J("exampleFiles",d.panelCompact),e.xp6(11),e.Q6J("exampleFiles",d.panelFixedHeight),e.xp6(8),e.Q6J("exampleFiles",d.panelActions),e.xp6(8),e.Q6J("exampleFiles",d.panelConfig))},directives:[D.k,C.w,L.O,V,O.E,F.N,N,q,S,H,j],encapsulation:2}),a})()},{path:"api",component:n.h,data:{content:f.X.panel}}]}];let W=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[i.Bz.forChild(K),u.g,s.F,m.R],i.Bz]}),a})()},61797:p=>{p.exports='<fdp-panel id="panel-actions-id" title="Panel Title">\n    <fdp-panel-actions>\n        <fdp-button label="Edit"></fdp-button>\n        <fdp-button label="Delete"></fdp-button>\n    </fdp-panel-actions>\n\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n'},61972:p=>{p.exports='<fdp-panel\n    id="compact-panel-id"\n    title="Compact Panel Title"\n    contentDensity="compact"\n    expandLabel="Collapse Panel"\n    collapseLabel="Expand Panel"\n>\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n'},76943:p=>{p.exports='<fdp-panel title="Panel Header">\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n'},70776:p=>{p.exports="import { Component } from '@angular/core';\n\nimport { PlatformConfig } from '@fundamental-ngx/platform/shared';\nimport { PanelConfig } from '@fundamental-ngx/platform/panel';\n\nexport const panelConfigFactory = PanelConfig.createProviderFactory({\n    collapseLabel: 'New Default Collapse Label',\n    expandLabel: 'New Default Expand Label'\n});\n\nexport const customPanelConfigProvider = {\n    provide: PanelConfig,\n    useFactory: panelConfigFactory,\n    deps: [PlatformConfig]\n};\n\n@Component({\n    selector: 'fdp-platform-panel-config-example',\n    templateUrl: './platform-panel-config-example.component.html',\n    providers: [customPanelConfigProvider]\n})\nexport class PlatformPanelConfigExampleComponent {}\n"},24616:p=>{p.exports='<fdp-button\n    (click)="expanded = !expanded"\n    [ariaPressed]="expanded"\n    [ariaExpanded]="expanded"\n    ariaControlsId="fdp-panel-content-112"\n    label="Toggle Expand"\n></fdp-button>\n<br />\n<br />\nExpanded value is: {{ expanded }}\n<br />\n<br />\n<br />\n\n<fdp-panel\n    id="panel-id"\n    title="Panel Title"\n    contentDensity="cozy"\n    [expanded]="expanded"\n    [expandable]="true"\n    (panelExpandChange)="onExpandChange($event)"\n>\n    <fdp-panel-content id="fdp-panel-content-112">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n'},91835:p=>{p.exports="import { Component } from '@angular/core';\n\nimport { PanelExpandChangeEvent } from '@fundamental-ngx/platform/panel';\n\n@Component({\n    selector: 'fdp-platform-panel-expandable-example',\n    templateUrl: './platform-panel-expandable-example.component.html'\n})\nexport class PlatformPanelExpandableExampleComponent {\n    public expanded = true;\n\n    public onExpandChange(event: PanelExpandChangeEvent): void {\n        this.expanded = event.payload;\n    }\n}\n"},10402:p=>{p.exports='<fdp-panel id="fixed-panel-id" title="Panel Header" [expandable]="false">\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n'},11541:p=>{p.exports='<fdp-panel id="fixed-panel-id" title="Panel Header">\n    <fdp-panel-content contentHeight="86px">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet\n        lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis\n        aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi\n        neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor.\n        Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at\n        molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse\n        facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.\n        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n'}}]);