"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[4895],{4895:(K,E,c)=>{c.d(E,{q:()=>X});var n=c(4755),u=c(8631),m=c(2643),C=c(8930),e=c(2223),B=c(2701),_=c(655),S=c(7579),x=c(2722),F=c(4004),N=c(9436),R=c(2588),k=c(2222);function D(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"span",9),e.BQk()),2&t){const a=i.$implicit,d=e.oxw(2);e.xp6(1),e.Q6J("nzType",a||d.getBackIcon())}}function Y(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){e.CHM(a);const b=e.oxw();return e.KtG(b.onBack())}),e.TgZ(1,"div",7),e.YNc(2,D,2,1,"ng-container",8),e.qZA()()}if(2&t){const a=e.oxw();e.xp6(2),e.Q6J("nzStringTemplateOutlet",a.nzBackIcon)}}function U(t,i){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw(2);e.xp6(1),e.Oqu(a.nzTitle)}}function Q(t,i){if(1&t&&(e.TgZ(0,"span",10),e.YNc(1,U,2,1,"ng-container",8),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",a.nzTitle)}}function Z(t,i){1&t&&e.Hsn(0,6,["*ngIf","!nzTitle"])}function L(t,i){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw(2);e.xp6(1),e.Oqu(a.nzSubtitle)}}function J(t,i){if(1&t&&(e.TgZ(0,"span",11),e.YNc(1,L,2,1,"ng-container",8),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",a.nzSubtitle)}}function w(t,i){1&t&&e.Hsn(0,7,["*ngIf","!nzSubtitle"])}const G=[[["nz-breadcrumb","nz-page-header-breadcrumb",""]],[["nz-avatar","nz-page-header-avatar",""]],[["nz-page-header-tags"],["","nz-page-header-tags",""]],[["nz-page-header-extra"],["","nz-page-header-extra",""]],[["nz-page-header-content"],["","nz-page-header-content",""]],[["nz-page-header-footer"],["","nz-page-header-footer",""]],[["nz-page-header-title"],["","nz-page-header-title",""]],[["nz-page-header-subtitle"],["","nz-page-header-subtitle",""]]],H=["nz-breadcrumb[nz-page-header-breadcrumb]","nz-avatar[nz-page-header-avatar]","nz-page-header-tags, [nz-page-header-tags]","nz-page-header-extra, [nz-page-header-extra]","nz-page-header-content, [nz-page-header-content]","nz-page-header-footer, [nz-page-header-footer]","nz-page-header-title, [nz-page-header-title]","nz-page-header-subtitle, [nz-page-header-subtitle]"];let T=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.lG2({type:t,selectors:[["nz-page-header-content"],["","nz-page-header-content",""]],hostAttrs:[1,"ant-page-header-content"],exportAs:["nzPageHeaderContent"]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.lG2({type:t,selectors:[["nz-page-header-extra"],["","nz-page-header-extra",""]],hostAttrs:[1,"ant-page-header-heading-extra"],exportAs:["nzPageHeaderExtra"]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.lG2({type:t,selectors:[["nz-page-header-footer"],["","nz-page-header-footer",""]],hostAttrs:[1,"ant-page-header-footer"],exportAs:["nzPageHeaderFooter"]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.lG2({type:t,selectors:[["nz-breadcrumb","nz-page-header-breadcrumb",""]],exportAs:["nzPageHeaderBreadcrumb"]}),t})(),o=(()=>{class t{constructor(a,d,b,v,q,ee){this.location=a,this.nzConfigService=d,this.elementRef=b,this.nzResizeObserver=v,this.cdr=q,this.directionality=ee,this._nzModuleName="pageHeader",this.nzBackIcon=null,this.nzGhost=!0,this.nzBack=new e.vpe,this.compact=!1,this.destroy$=new S.x,this.dir="ltr"}ngOnInit(){this.directionality.change?.pipe((0,x.R)(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterViewInit(){this.nzResizeObserver.observe(this.elementRef).pipe((0,F.U)(([a])=>a.contentRect.width),(0,x.R)(this.destroy$)).subscribe(a=>{this.compact=a<768,this.cdr.markForCheck()})}onBack(){if(this.nzBack.observers.length)this.nzBack.emit();else{if(!this.location)throw new Error(`${R.Bq} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);this.location.back()}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getBackIcon(){return"rtl"===this.dir?"arrow-right":"arrow-left"}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(n.Ye,8),e.Y36(N.jY),e.Y36(e.SBq),e.Y36(k.D3),e.Y36(e.sBO),e.Y36(C.Is,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-page-header"]],contentQueries:function(a,d,b){if(1&a&&(e.Suo(b,O,5),e.Suo(b,P,5)),2&a){let v;e.iGM(v=e.CRH())&&(d.nzPageHeaderFooter=v.first),e.iGM(v=e.CRH())&&(d.nzPageHeaderBreadcrumb=v.first)}},hostAttrs:[1,"ant-page-header"],hostVars:10,hostBindings:function(a,d){2&a&&e.ekj("has-footer",d.nzPageHeaderFooter)("ant-page-header-ghost",d.nzGhost)("has-breadcrumb",d.nzPageHeaderBreadcrumb)("ant-page-header-compact",d.compact)("ant-page-header-rtl","rtl"===d.dir)},inputs:{nzBackIcon:"nzBackIcon",nzTitle:"nzTitle",nzSubtitle:"nzSubtitle",nzGhost:"nzGhost"},outputs:{nzBack:"nzBack"},exportAs:["nzPageHeader"],ngContentSelectors:H,decls:13,vars:5,consts:[[1,"ant-page-header-heading"],[1,"ant-page-header-heading-left"],["class","ant-page-header-back",3,"click",4,"ngIf"],["class","ant-page-header-heading-title",4,"ngIf"],[4,"ngIf"],["class","ant-page-header-heading-sub-title",4,"ngIf"],[1,"ant-page-header-back",3,"click"],["role","button","tabindex","0",1,"ant-page-header-back-button"],[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"],[1,"ant-page-header-heading-title"],[1,"ant-page-header-heading-sub-title"]],template:function(a,d){1&a&&(e.F$t(G),e.Hsn(0),e.TgZ(1,"div",0)(2,"div",1),e.YNc(3,Y,3,1,"div",2),e.Hsn(4,1),e.YNc(5,Q,2,1,"span",3),e.YNc(6,Z,1,0,"ng-content",4),e.YNc(7,J,2,1,"span",5),e.YNc(8,w,1,0,"ng-content",4),e.Hsn(9,2),e.qZA(),e.Hsn(10,3),e.qZA(),e.Hsn(11,4),e.Hsn(12,5)),2&a&&(e.xp6(3),e.Q6J("ngIf",null!==d.nzBackIcon),e.xp6(2),e.Q6J("ngIf",d.nzTitle),e.xp6(1),e.Q6J("ngIf",!d.nzTitle),e.xp6(1),e.Q6J("ngIf",d.nzSubtitle),e.xp6(1),e.Q6J("ngIf",!d.nzSubtitle))},dependencies:[n.O5,m.f,B.Ls],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,N.oS)()],t.prototype,"nzGhost",void 0),t})(),g=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.vT,n.ez,m.T,B.PV]}),t})();var f=c(9576),l=c(9085);function z(t,i){if(1&t&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&t){const a=i.$implicit;e.xp6(2),e.Oqu(a)}}function I(t,i){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.pageHeaderInfo.extra)}}function A(t,i){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw(2);e.xp6(1),e.Oqu(a.pageHeaderInfo.desc)}}function h(t,i){if(1&t&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,A,2,1,"ng-container",3),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",a.pageHeaderInfo.desc)}}function W(t,i){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw(2);e.xp6(1),e.Oqu(a.pageHeaderInfo.footer)}}function V(t,i){if(1&t&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,W,2,1,"ng-container",3),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",a.pageHeaderInfo.footer)}}let X=(()=>{class t{constructor(a,d){this.themesService=a,this.router=d,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(f.f),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl",extraTpl:"extraTpl"},standalone:!0,features:[e.jDz],decls:7,vars:7,consts:[[1,"site-page-header",3,"nzBackIcon","nzGhost","nzTitle","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(a,d){1&a&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return d.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,z,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,I,2,1,"ng-container",3),e.qZA(),e.YNc(5,h,2,1,"nz-page-header-content",4),e.YNc(6,V,2,1,"nz-page-header-footer",4),e.qZA()),2&a&&(e.Q6J("nzBackIcon",d.backTpl?d.backTpl:null)("nzGhost",!1)("nzTitle",d.pageHeaderInfo.title),e.xp6(2),e.Q6J("ngForOf",d.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",d.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",d.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",d.pageHeaderInfo.footer))},dependencies:[g,o,T,M,O,P,u.lt,u.Dg,u.MO,n.ax,m.T,m.f,n.O5],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{margin:10px auto;padding:24px 24px 0;background:#fff}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),t})()},8631:(K,E,c)=>{c.d(E,{Dg:()=>M,MO:()=>y,lt:()=>P});var n=c(2223),u=c(4755),m=c(2643),C=c(2973),e=c(2701),B=c(655),_=c(9085),S=c(7579),x=c(2722),F=c(9300),N=c(8675),R=c(2588),k=c(4780),D=c(8930),Y=c(5441),U=c(7052);function Q(r,s){}function Z(r,s){1&r&&n._UZ(0,"span",6)}function L(r,s){if(1&r&&(n.ynx(0),n.TgZ(1,"span",3),n.YNc(2,Q,0,0,"ng-template",4),n.YNc(3,Z,1,0,"span",5),n.qZA(),n.BQk()),2&r){const o=n.oxw(),p=n.MAs(2);n.xp6(1),n.Q6J("nzDropdownMenu",o.nzOverlay),n.xp6(1),n.Q6J("ngTemplateOutlet",p),n.xp6(1),n.Q6J("ngIf",!!o.nzOverlay)}}function J(r,s){1&r&&(n.TgZ(0,"span",7),n.Hsn(1),n.qZA())}function w(r,s){if(1&r&&(n.ynx(0),n._uU(1),n.BQk()),2&r){const o=n.oxw(2);n.xp6(1),n.hij(" ",o.nzBreadCrumbComponent.nzSeparator," ")}}function G(r,s){if(1&r&&(n.TgZ(0,"span",8),n.YNc(1,w,2,1,"ng-container",9),n.qZA()),2&r){const o=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",o.nzBreadCrumbComponent.nzSeparator)}}const H=["*"];function $(r,s){if(1&r){const o=n.EpF();n.TgZ(0,"nz-breadcrumb-item")(1,"a",2),n.NdJ("click",function(g){const l=n.CHM(o).$implicit,z=n.oxw(2);return n.KtG(z.navigate(l.url,g))}),n._uU(2),n.qZA()()}if(2&r){const o=s.$implicit;n.xp6(1),n.uIk("href",o.url,n.LSH),n.xp6(1),n.Oqu(o.label)}}function j(r,s){if(1&r&&(n.ynx(0),n.YNc(1,$,3,2,"nz-breadcrumb-item",1),n.BQk()),2&r){const o=n.oxw();n.xp6(1),n.Q6J("ngForOf",o.breadcrumbs)}}class T{}let y=(()=>{class r{constructor(o){this.nzBreadCrumbComponent=o}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(T))},r.\u0275cmp=n.Xpm({type:r,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],ngContentSelectors:H,decls:4,vars:3,consts:[[4,"ngIf","ngIfElse"],["noMenuTpl",""],["class","ant-breadcrumb-separator",4,"ngIf"],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nz-icon","","nzType","down",4,"ngIf"],["nz-icon","","nzType","down"],[1,"ant-breadcrumb-link"],[1,"ant-breadcrumb-separator"],[4,"nzStringTemplateOutlet"]],template:function(o,p){if(1&o&&(n.F$t(),n.YNc(0,L,4,3,"ng-container",0),n.YNc(1,J,2,0,"ng-template",null,1,n.W1O),n.YNc(3,G,2,1,"span",2)),2&o){const g=n.MAs(2);n.Q6J("ngIf",!!p.nzOverlay)("ngIfElse",g),n.xp6(3),n.Q6J("ngIf",p.nzBreadCrumbComponent.nzSeparator)}},dependencies:[u.O5,u.tP,m.f,C.cm,e.Ls],encapsulation:2,changeDetection:0}),r})(),M=(()=>{class r{constructor(o,p,g,f,l){this.injector=o,this.cdr=p,this.elementRef=g,this.renderer=f,this.directionality=l,this.nzAutoGenerate=!1,this.nzSeparator="/",this.nzRouteLabel="breadcrumb",this.nzRouteLabelFn=z=>z,this.breadcrumbs=[],this.dir="ltr",this.destroy$=new S.x}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe((0,x.R)(this.destroy$)).subscribe(o=>{this.dir=o,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(o,p){p.preventDefault(),this.injector.get(_.F0).navigateByUrl(o)}registerRouterChange(){try{const o=this.injector.get(_.F0),p=this.injector.get(_.gz);o.events.pipe((0,F.h)(g=>g instanceof _.m2),(0,x.R)(this.destroy$),(0,N.O)(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(p.root),this.cdr.markForCheck()})}catch{throw new Error(`${R.Bq} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(o,p="",g=[]){const f=o.children;if(0===f.length)return g;for(const l of f)if(l.outlet===_.eC){const z=l.snapshot.url.map(h=>h.path).filter(h=>h).join("/"),I=z?`${p}/${z}`:p,A=this.nzRouteLabelFn(l.snapshot.data[this.nzRouteLabel]);return z&&A&&g.push({label:A,params:l.snapshot.params,url:I}),this.getBreadcrumbs(l,I,g)}return g}prepareComponentForRtl(){"rtl"===this.dir?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(n.zs3),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(D.Is,8))},r.\u0275cmp=n.Xpm({type:r,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:"nzAutoGenerate",nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn"},exportAs:["nzBreadcrumb"],features:[n._Bn([{provide:T,useExisting:r}])],ngContentSelectors:H,decls:2,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(o,p){1&o&&(n.F$t(),n.Hsn(0),n.YNc(1,j,2,1,"ng-container",0)),2&o&&(n.xp6(1),n.Q6J("ngIf",p.nzAutoGenerate&&p.breadcrumbs.length))},dependencies:[u.sg,u.O5,y],encapsulation:2,changeDetection:0}),(0,B.gn)([(0,k.yF)()],r.prototype,"nzAutoGenerate",void 0),r})(),P=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[u.ez,m.T,Y.U8,U.e4,C.b1,e.PV,D.vT]}),r})()}}]);