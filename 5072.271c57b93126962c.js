"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[5072],{5072:(Q,A,i)=>{i.d(A,{Q:()=>q});var z=i(1368),e=i(4496),G=i(9072),O=i(2476),_=i(2812),f=i(1912),h=i(1316),R=i(5657),y=i(3616),N=i(4704),E=i(5880),k=i(4384),M=i(6088),S=i(2680),I=i(1900);function F(t,p){if(1&t&&(e.SAx(0),e.wR5(1,"span",9),e.k70()),2&t){const a=p.$implicit,r=e.GaO(2);e.yG2(),e.E7m("nzType",a||r.getBackIcon())}}function U(t,p){if(1&t){const a=e.KQA();e.I0R(0,"div",6),e.qCj("click",function(){e.usT(a);const c=e.GaO();return e.CGJ(c.onBack())}),e.I0R(1,"div",7),e.yuY(2,F,2,1,"ng-container",8),e.C$Y()()}if(2&t){const a=e.GaO();e.yG2(2),e.E7m("nzStringTemplateOutlet",a.nzBackIcon)}}function $(t,p){if(1&t&&(e.SAx(0),e.OEk(1),e.k70()),2&t){const a=e.GaO(2);e.yG2(),e.cNF(a.nzTitle)}}function Y(t,p){if(1&t&&(e.I0R(0,"span",10),e.yuY(1,$,2,1,"ng-container",8),e.C$Y()),2&t){const a=e.GaO();e.yG2(),e.E7m("nzStringTemplateOutlet",a.nzTitle)}}function L(t,p){1&t&&e._Xx(0,6,["*ngIf","!nzTitle"])}function w(t,p){if(1&t&&(e.SAx(0),e.OEk(1),e.k70()),2&t){const a=e.GaO(2);e.yG2(),e.cNF(a.nzSubtitle)}}function K(t,p){if(1&t&&(e.I0R(0,"span",11),e.yuY(1,w,2,1,"ng-container",8),e.C$Y()),2&t){const a=e.GaO();e.yG2(),e.E7m("nzStringTemplateOutlet",a.nzSubtitle)}}function W(t,p){1&t&&e._Xx(0,7,["*ngIf","!nzSubtitle"])}const j=[[["nz-breadcrumb","nz-page-header-breadcrumb",""]],[["nz-avatar","nz-page-header-avatar",""]],[["nz-page-header-tags"],["","nz-page-header-tags",""]],[["nz-page-header-extra"],["","nz-page-header-extra",""]],[["nz-page-header-content"],["","nz-page-header-content",""]],[["nz-page-header-footer"],["","nz-page-header-footer",""]],[["nz-page-header-title"],["","nz-page-header-title",""]],[["nz-page-header-subtitle"],["","nz-page-header-subtitle",""]]],X=["nz-breadcrumb[nz-page-header-breadcrumb]","nz-avatar[nz-page-header-avatar]","nz-page-header-tags, [nz-page-header-tags]","nz-page-header-extra, [nz-page-header-extra]","nz-page-header-content, [nz-page-header-content]","nz-page-header-footer, [nz-page-header-footer]","nz-page-header-title, [nz-page-header-title]","nz-page-header-subtitle, [nz-page-header-subtitle]"];let b=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275dir=e.Sc5({type:t,selectors:[["nz-page-header-content"],["","nz-page-header-content",""]],hostAttrs:[1,"ant-page-header-content"],exportAs:["nzPageHeaderContent"],standalone:!0})}return t})(),D=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275dir=e.Sc5({type:t,selectors:[["nz-page-header-extra"],["","nz-page-header-extra",""]],hostAttrs:[1,"ant-page-header-heading-extra"],exportAs:["nzPageHeaderExtra"],standalone:!0})}return t})(),n=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275dir=e.Sc5({type:t,selectors:[["nz-page-header-footer"],["","nz-page-header-footer",""]],hostAttrs:[1,"ant-page-header-footer"],exportAs:["nzPageHeaderFooter"],standalone:!0})}return t})(),l=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275dir=e.Sc5({type:t,selectors:[["nz-breadcrumb","nz-page-header-breadcrumb",""]],exportAs:["nzPageHeaderBreadcrumb"],standalone:!0})}return t})(),d=(()=>{class t{constructor(a,r,c,T,v,ee){this.location=a,this.nzConfigService=r,this.elementRef=c,this.nzResizeObserver=T,this.cdr=v,this.directionality=ee,this._nzModuleName="pageHeader",this.nzBackIcon=null,this.nzGhost=!0,this.nzBack=new e._w7,this.compact=!1,this.destroy$=new R.E,this.dir="ltr"}ngOnInit(){this.directionality.change?.pipe((0,y.a)(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterViewInit(){this.nzResizeObserver.observe(this.elementRef).pipe((0,N.k)(([a])=>a.contentRect.width),(0,y.a)(this.destroy$)).subscribe(a=>{this.compact=a<768,this.cdr.markForCheck()})}onBack(){if(this.nzBack.observers.length)this.nzBack.emit();else{if(!this.location)throw new Error(`${k.of} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);this.location.back()}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getBackIcon(){return"rtl"===this.dir?"arrow-right":"arrow-left"}static#e=this.\u0275fac=function(r){return new(r||t)(e.GI1(z.oB,8),e.GI1(E.gl),e.GI1(e.GMv),e.GI1(S.go),e.GI1(e.kD9),e.GI1(I.yG,8))};static#t=this.\u0275cmp=e.In1({type:t,selectors:[["nz-page-header"]],contentQueries:function(r,c,T){if(1&r&&(e.szK(T,n,5),e.szK(T,l,5)),2&r){let v;e.wto(v=e.Gqi())&&(c.nzPageHeaderFooter=v.first),e.wto(v=e.Gqi())&&(c.nzPageHeaderBreadcrumb=v.first)}},hostAttrs:[1,"ant-page-header"],hostVars:10,hostBindings:function(r,c){2&r&&e.eAK("has-footer",c.nzPageHeaderFooter)("ant-page-header-ghost",c.nzGhost)("has-breadcrumb",c.nzPageHeaderBreadcrumb)("ant-page-header-compact",c.compact)("ant-page-header-rtl","rtl"===c.dir)},inputs:{nzBackIcon:"nzBackIcon",nzTitle:"nzTitle",nzSubtitle:"nzSubtitle",nzGhost:"nzGhost"},outputs:{nzBack:"nzBack"},exportAs:["nzPageHeader"],standalone:!0,features:[e.UHJ],ngContentSelectors:X,decls:13,vars:5,consts:[[1,"ant-page-header-heading"],[1,"ant-page-header-heading-left"],["class","ant-page-header-back",3,"click",4,"ngIf"],["class","ant-page-header-heading-title",4,"ngIf"],[4,"ngIf"],["class","ant-page-header-heading-sub-title",4,"ngIf"],[1,"ant-page-header-back",3,"click"],["role","button","tabindex","0",1,"ant-page-header-back-button"],[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"],[1,"ant-page-header-heading-title"],[1,"ant-page-header-heading-sub-title"]],template:function(r,c){1&r&&(e.kPM(j),e._Xx(0),e.I0R(1,"div",0)(2,"div",1),e.yuY(3,U,3,1,"div",2),e._Xx(4,1),e.yuY(5,Y,2,1,"span",3)(6,L,1,0,"ng-content",4)(7,K,2,1,"span",5)(8,W,1,0,"ng-content",4),e._Xx(9,2),e.C$Y(),e._Xx(10,3),e.C$Y(),e._Xx(11,4),e._Xx(12,5)),2&r&&(e.yG2(3),e.E7m("ngIf",null!==c.nzBackIcon),e.yG2(2),e.E7m("ngIf",c.nzTitle),e.yG2(),e.E7m("ngIf",!c.nzTitle),e.yG2(),e.E7m("ngIf",c.nzSubtitle),e.yG2(),e.E7m("ngIf",!c.nzSubtitle))},dependencies:[z.u_,f.u,f.C,M.Wy,M.If],encapsulation:2,changeDetection:0})}return(0,h.UN)([(0,E.Mb)()],t.prototype,"nzGhost",void 0),t})(),g=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.a4G({type:t});static#n=this.\u0275inj=e.s3X({imports:[d]})}return t})();function u(t,p){if(1&t&&(e.I0R(0,"nz-breadcrumb-item")(1,"a"),e.OEk(2),e.C$Y()()),2&t){const a=p.$implicit;e.yG2(2),e.cNF(a)}}function B(t,p){if(1&t&&(e.SAx(0),e.OEk(1),e.k70()),2&t){const a=e.GaO();e.yG2(),e.cNF(a.pageHeaderInfo.extra)}}function H(t,p){if(1&t&&(e.SAx(0),e.OEk(1),e.k70()),2&t){const a=e.GaO(2);e.yG2(),e.cNF(a.pageHeaderInfo.desc)}}function m(t,p){if(1&t&&(e.I0R(0,"nz-page-header-content"),e.yuY(1,H,2,1,"ng-container",3),e.C$Y()),2&t){const a=e.GaO();e.yG2(),e.E7m("nzStringTemplateOutlet",a.pageHeaderInfo.desc)}}function V(t,p){if(1&t&&(e.SAx(0),e.OEk(1),e.k70()),2&t){const a=e.GaO(2);e.yG2(),e.cNF(a.pageHeaderInfo.footer)}}function Z(t,p){if(1&t&&(e.I0R(0,"nz-page-header-footer"),e.yuY(1,V,2,1,"ng-container",3),e.C$Y()),2&t){const a=e.GaO();e.yG2(),e.E7m("nzStringTemplateOutlet",a.pageHeaderInfo.footer)}}let q=(()=>{class t{constructor(){this.themesService=(0,e.uUt)(O.a),this.router=(0,e.uUt)(G.E5),this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275cmp=e.In1({type:t,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl",extraTpl:"extraTpl"},standalone:!0,features:[e.UHJ],decls:7,vars:7,consts:[[1,"site-page-header",3,"nzBackIcon","nzGhost","nzTitle","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(r,c){1&r&&(e.I0R(0,"nz-page-header",0),e.qCj("nzBack",function(){return c.back()}),e.I0R(1,"nz-breadcrumb",1),e.yuY(2,u,3,1,"nz-breadcrumb-item",2),e.C$Y(),e.I0R(3,"nz-page-header-extra"),e.yuY(4,B,2,1,"ng-container",3),e.C$Y(),e.yuY(5,m,2,1,"nz-page-header-content",4)(6,Z,2,1,"nz-page-header-footer",4),e.C$Y()),2&r&&(e.E7m("nzBackIcon",c.backTpl?c.backTpl:null)("nzGhost",!1)("nzTitle",c.pageHeaderInfo.title),e.yG2(2),e.E7m("ngForOf",c.pageHeaderInfo.breadcrumb),e.yG2(2),e.E7m("nzStringTemplateOutlet",c.pageHeaderInfo.extra),e.yG2(),e.E7m("ngIf",c.pageHeaderInfo.desc),e.yG2(),e.E7m("ngIf",c.pageHeaderInfo.footer))},dependencies:[g,d,b,D,n,l,_.Ir,_.s5,_.Ih,z.Iw,f.u,f.C,z.u_],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{margin:10px auto;padding:24px 24px 0;background:#fff}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0})}return t})()},2812:(Q,A,i)=>{i.d(A,{Ih:()=>b,Ir:()=>D,s5:()=>x});var z=i(1368),e=i(4496),G=i(1912),O=i(2004),_=i(6088),f=i(1316),h=i(9072),R=i(5657),y=i(3616),N=i(6684),E=i(5568),k=i(4384),M=i(6208),S=i(1900);const I=["*"];function F(n,l){}function U(n,l){if(1&n&&(e.I0R(0,"span",2),e.yuY(1,F,0,0,"ng-template",3),e.wR5(2,"span",4),e.C$Y()),2&n){const o=e.GaO(),s=e.Gew(4);e.E7m("nzDropdownMenu",o.nzOverlay),e.yG2(),e.E7m("ngTemplateOutlet",s)}}function $(n,l){}function Y(n,l){if(1&n&&e.yuY(0,$,0,0,"ng-template",3),2&n){e.GaO();const o=e.Gew(4);e.E7m("ngTemplateOutlet",o)}}function L(n,l){if(1&n&&(e.SAx(0),e.OEk(1),e.k70()),2&n){const o=e.GaO(2);e.yG2(),e.oRS(" ",o.nzBreadCrumbComponent.nzSeparator," ")}}function w(n,l){if(1&n&&(e.I0R(0,"nz-breadcrumb-separator"),e.yuY(1,L,2,1,"ng-container",5),e.C$Y()),2&n){const o=e.GaO();e.yG2(),e.E7m("nzStringTemplateOutlet",o.nzBreadCrumbComponent.nzSeparator)}}function K(n,l){1&n&&(e.I0R(0,"span",6),e._Xx(1),e.C$Y())}const W=(n,l)=>l.url;function j(n,l){if(1&n){const o=e.KQA();e.I0R(0,"nz-breadcrumb-item")(1,"a",0),e.qCj("click",function(d){const g=e.usT(o).$implicit,u=e.GaO(2);return e.CGJ(u.navigate(g.url,d))}),e.OEk(2),e.C$Y()()}if(2&n){const o=l.$implicit;e.yG2(),e.e48("href",o.url,e.K6U),e.yG2(),e.cNF(o.label)}}function X(n,l){if(1&n&&e.c53(0,j,3,2,"nz-breadcrumb-item",null,W),2&n){const o=e.GaO();e.oho(o.breadcrumbs)}}let J=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["nz-breadcrumb-separator"]],hostAttrs:[1,"ant-breadcrumb-separator"],exportAs:["nzBreadcrumbSeparator"],standalone:!0,features:[e.UHJ],ngContentSelectors:I,decls:1,vars:0,template:function(s,d){1&s&&(e.kPM(),e._Xx(0))},encapsulation:2})}return n})();class P{}let b=(()=>{class n{constructor(o){this.nzBreadCrumbComponent=o}static#e=this.\u0275fac=function(s){return new(s||n)(e.GI1(P))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],standalone:!0,features:[e.UHJ],ngContentSelectors:I,decls:5,vars:2,consts:[["class","ant-breadcrumb-overlay-link","nz-dropdown","",3,"nzDropdownMenu"],["noMenuTpl",""],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nz-icon","","nzType","down"],[4,"nzStringTemplateOutlet"],[1,"ant-breadcrumb-link"]],template:function(s,d){1&s&&(e.kPM(),e.yuY(0,U,3,2,"span",0)(1,Y,1,1)(2,w,2,1,"nz-breadcrumb-separator")(3,K,2,0,"ng-template",null,1,e.gJz)),2&s&&(e.C0Y(0,d.nzOverlay?0:1),e.yG2(2),e.C0Y(2,d.nzBreadCrumbComponent.nzSeparator?2:-1))},dependencies:[z.XV,J,O.KE,O.cN,_.Wy,_.If,G.u,G.C],encapsulation:2,changeDetection:0})}return n})(),x=(()=>{class n{constructor(o,s,d,C,g){this.injector=o,this.cdr=s,this.elementRef=d,this.renderer=C,this.directionality=g,this.nzAutoGenerate=!1,this.nzSeparator="/",this.nzRouteLabel="breadcrumb",this.nzRouteLabelFn=u=>u,this.breadcrumbs=[],this.dir="ltr",this.destroy$=new R.E}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe((0,y.a)(this.destroy$)).subscribe(o=>{this.dir=o,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(o,s){s.preventDefault(),this.injector.get(h.E5).navigateByUrl(o)}registerRouterChange(){try{const o=this.injector.get(h.E5),s=this.injector.get(h.gV);o.events.pipe((0,N.I)(d=>d instanceof h.MT),(0,y.a)(this.destroy$),(0,E.W)(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(s.root),this.cdr.markForCheck()})}catch{throw new Error(`${k.of} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(o,s="",d=[]){const C=o.children;if(0===C.length)return d;for(const g of C)if(g.outlet===h.gf){const u=g.snapshot.url.map(m=>m.path).filter(m=>m).join("/"),B=u?`${s}/${u}`:s,H=this.nzRouteLabelFn(g.snapshot.data[this.nzRouteLabel]);return u&&H&&d.push({label:H,params:g.snapshot.params,url:B}),this.getBreadcrumbs(g,B,d)}return d}prepareComponentForRtl(){"rtl"===this.dir?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}static#e=this.\u0275fac=function(s){return new(s||n)(e.GI1(e.zZn),e.GI1(e.kD9),e.GI1(e.GMv),e.GI1(e.q87),e.GI1(S.yG,8))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:"nzAutoGenerate",nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn"},exportAs:["nzBreadcrumb"],standalone:!0,features:[e.M5G([{provide:P,useExisting:n}]),e.UHJ],ngContentSelectors:I,decls:2,vars:1,consts:[[3,"click"]],template:function(s,d){1&s&&(e.kPM(),e._Xx(0),e.yuY(1,X,2,0)),2&s&&(e.yG2(),e.C0Y(1,d.nzAutoGenerate&&d.breadcrumbs.length?1:-1))},dependencies:[b],encapsulation:2,changeDetection:0})}return(0,f.UN)([(0,M.U7)()],n.prototype,"nzAutoGenerate",void 0),n})(),D=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.a4G({type:n});static#n=this.\u0275inj=e.s3X({imports:[x,b]})}return n})()}}]);