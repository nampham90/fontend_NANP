"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[8436],{8436:(Z,C,a)=>{a.r(C),a.d(C,{Spmt00101Component:()=>J});var t=a(4496),v=a(6844),T=a(5072),f=a(5128),g=a(460),d=a(2532),m=a(1752),r=a(6504),p=a(268),u=a(2605),_=a(472),G=a(3652),A=a(9432),I=a(2624),y=a(4832),h=a(4872),R=a(2192),E=a(8824),M=a(872),S=a(6088),L=a(7340),X=a(688),F=a(788),b=a(9116),z=a(2700);function D(e,c){if(1&e&&t.wR5(0,"nz-option",8),2&e){const n=c.$implicit;t.E7m("nzLabel",n.name)("nzValue",n.id)}}function O(e,c){if(1&e&&t.OEk(0),2&e){const n=t.GaO().$implicit;t.oRS(" ",n.errors.message," ")}}function Y(e,c){1&e&&t.OEk(0," Ph\u1ea7n b\u1eaft bu\u1ed9c ")}function P(e,c){if(1&e&&t.yuY(0,O,1,1)(1,Y,1,0),2&e){const n=c.$implicit;t.C0Y(0,n.hasError("message")?0:-1),t.yG2(),t.C0Y(1,n.hasError("required")?1:-1)}}let U=(()=>{class e{ngOnInit(){this.initForm(),this.apiGetListCategories()}constructor(n){this.modalRef=n,this.fb=(0,t.uUt)(r.im),this.vf=(0,t.uUt)(X.u),this.nzModalData=(0,t.uUt)(b.aG),this.categorieService=(0,t.uUt)(y.I),this.destroyRef=(0,t.uUt)(t.eM9),this.lstCats=(0,t.OCB)([])}getAsyncFnData(n){return(0,z.of)(n)}getCurrentValue(){return(0,F.qg)(this.addEditForm)?(0,z.of)(this.addEditForm.value):(0,z.of)(!1)}get f(){return this.addEditForm.controls}initForm(){this.addEditForm=this.fb.group({product_name:[null,[r.AQ.required]],category_id:[null,[r.AQ.required]]})}apiGetListCategories(){this.categorieService.category().pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{this.lstCats.set(n)})}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(b.U7))};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-spmt00101-modal"]],standalone:!0,features:[t.UHJ],decls:15,vars:9,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","product_name",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ID Youtube",3,"nzSm","nzXs"],["nz-input","","formControlName","product_name","name","product_name","placeholder","Vui l\xf2ng nh\u1eadp t\xean s\u1ea3n ph\u1ea9m","id","product_name"],["nzRequired","","nzFor","category_id",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ",3,"nzSm","nzXs"],["formControlName","category_id","name","category_id"],["combineTpl",""],[3,"nzLabel","nzValue"]],template:function(i,o){1&i&&(t.I0R(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t.OEk(3,"T\xean s\u1ea3n ph\u1ea9m"),t.C$Y(),t.I0R(4,"nz-form-control",2),t.wR5(5,"input",3),t.C$Y()(),t.I0R(6,"nz-form-item")(7,"nz-form-label",4),t.OEk(8,"Danh m\u1ee5c"),t.C$Y(),t.I0R(9,"nz-form-control",5)(10,"nz-select",6),t.c53(11,D,1,2,"nz-option",8,t.oxv),t.C$Y()()()(),t.yuY(13,P,2,2,"ng-template",null,7,t.gJz)),2&i&&(t.E7m("formGroup",o.addEditForm),t.yG2(2),t.E7m("nzSm",4)("nzXs",24),t.yG2(2),t.E7m("nzSm",18)("nzXs",24),t.yG2(3),t.E7m("nzSm",4)("nzXs",24),t.yG2(2),t.E7m("nzSm",18)("nzXs",24),t.yG2(2),t.oho(o.lstCats()))},dependencies:[r.y,r.sz,r.ot,r.ue,r.u,m.WO,d.QD,d.ox,m.BN,m.qU,m.Qo,m.YZ,r.sl,r.uW,r.Wo,d.Ko,u.OA,u.cv,g.EV,p.VL,p.eE,p.Mh]})}return e})(),$=(()=>{class e{constructor(){this.modalWrapService=(0,t.uUt)(L.K)}getContentComponent(){return U}show(n={},i){return this.modalWrapService.show(this.getContentComponent(),n,i)}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var B=a(3064),V=a(5584);const N=["operationTpl"],Q=["idTpl"];function k(e,c){if(1&e&&t.wR5(0,"nz-option",17),2&e){const n=c.$implicit;t.E7m("nzLabel",n.name)("nzValue",n.id)}}function H(e,c){if(1&e){const n=t.KQA();t.I0R(0,"button",19),t.qCj("click",function(){t.usT(n);const o=t.GaO(2);return t.CGJ(o.add())}),t.wR5(1,"i",20),t.OEk(2," Th\xeam m\u1edbi "),t.C$Y()}}function W(e,c){if(1&e&&t.yuY(0,H,3,0,"button",18),2&e){const n=t.GaO();t.E7m("appAuth",n.ActionCode.Spmt001010AddNew)}}const j=()=>({"padding-bottom":0}),K=()=>({xs:8,sm:16,md:24}),x=()=>[16,16];let J=(()=>{class e extends v.G{constructor(){super(...arguments),this.message=(0,t.uUt)(A.yo),this.productCategoriesService=(0,t.uUt)(y.I),this.spmt00101Service=(0,t.uUt)(R.w),this.spmt00101ModalService=(0,t.uUt)($),this.searchParam=(0,t.OCB)({}),this.lstCat=(0,t.OCB)([]),this.ActionCode=_.i,this.dataList=(0,t.OCB)([]),this.checkedCashArray=[],this.visibleOptions=[]}getDataList(n){const i={pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam()};this.spmt00101Service.findCondition(i).pipe((0,E.U)(()=>{this.tableLoading(!1)}),(0,h.ay)(this.destroyRef)).subscribe(o=>{const{list:s,total:l,pageNum:w}=o;this.dataList.set(s),this.tableConfig.total=l,this.tableConfig.pageIndex=w,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}tableChangeDectction(){this.cdr.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}changePageSize(n){this.tableConfig.pageSize=n}selectedChecked(n){this.checkedCashArray=[...n]}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}resetForm(){}add(){this.spmt00101ModalService.show({nzTitle:"Th\xeam m\u1edbi"}).pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{!n||0===n.status||(this.tableLoading(!0),this.addEditData(n.modalValue,"add"))},n=>this.tableLoading(!1))}addEditData(n,i){this.spmt00101Service[i](n).pipe((0,E.U)(()=>{this.tableLoading(!1)}),(0,h.ay)(this.destroyRef)).subscribe(()=>{this.getDataList()})}apiProductCategories(){this.productCategoriesService.category().pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{this.lstCat.set(n)})}ngOnInit(){super.ngOnInit(),this.initTable(),this.searchParam.set({category_id:3}),this.apiProductCategories()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"M\xe3 s\u1ea3n ph\u1ea9m",field:"id",width:80,tdTemplate:this.idTpl},{title:"T\xean s\u1ea3n ph\u1ea3m",field:"product_name",width:250},{title:"C\u1eadp nh\u1eadt",tdTemplate:this.operationTpl,width:250,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}static#t=this.\u0275fac=(()=>{let n;return function(o){return(n||(n=t.otF(e)))(o||e)}})();static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-spmt00101"]],viewQuery:function(i,o){if(1&i&&(t.CC$(N,7),t.CC$(Q,7)),2&i){let s;t.wto(s=t.Gqi())&&(o.operationTpl=s.first),t.wto(s=t.Gqi())&&(o.idTpl=s.first)}},standalone:!0,features:[t.eg9,t.UHJ],decls:31,vars:33,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],["nz-input","","name","product_name","placeholder","search name",3,"ngModel","ngModelChange"],["name","category_id","id","category_id",3,"ngModel","ngModelChange"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"tableTitle","btnTpl","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["tableBtns",""],[3,"nzLabel","nzValue"],["nz-button","","nzType","primary","class","m-r-8",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"]],template:function(i,o){if(1&i&&(t.wR5(0,"app-page-header",0),t.I0R(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),t.OEk(8,"T\xean s\u1ea3n ph\u1ea9m"),t.C$Y(),t.I0R(9,"nz-form-control")(10,"input",7),t.iHE("ngModelChange",function(l){return t.kNx(o.searchParam().product_name,l)||(o.searchParam().product_name=l),l}),t.C$Y()()()(),t.I0R(11,"div",5)(12,"nz-form-item")(13,"nz-form-label",6),t.OEk(14,"Danh m\u1ee5c"),t.C$Y(),t.I0R(15,"nz-form-control")(16,"nz-select",8),t.iHE("ngModelChange",function(l){return t.kNx(o.searchParam().category_id,l)||(o.searchParam().category_id=l),l}),t.c53(17,k,1,2,"nz-option",17,t.oxv),t.C$Y()()()()(),t.I0R(19,"div",4)(20,"div",9)(21,"button",10),t.qCj("click",function(){return o.getDataList()}),t.wR5(22,"i",11),t.OEk(23," T\xecm ki\u1ebfm "),t.C$Y(),t.I0R(24,"button",12),t.qCj("click",function(){return o.resetForm()}),t.wR5(25,"i",13),t.OEk(26,"Reset"),t.C$Y()()()()(),t.I0R(27,"app-card-table-wrap",14),t.qCj("reload",function(){return o.reloadTable()}),t.I0R(28,"app-ant-table",15),t.qCj("selectedChange",function(l){return o.selectedChecked(l)})("changePageSize",function(l){return o.changePageSize(l)})("changePageNum",function(l){return o.getDataList(l)}),t.C$Y()(),t.yuY(29,W,1,1,"ng-template",null,16,t.gJz),t.C$Y()),2&i){const s=t.Gew(30);t.E7m("pageHeaderInfo",o.pageHeaderInfo),t.yG2(2),t.E7m("nzBodyStyle",t.q4q(30,j)),t.yG2(2),t.E7m("nzGutter",t.q4q(31,K)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",o.searchParam().product_name),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",o.searchParam().category_id),t.yG2(),t.oho(o.lstCat()),t.yG2(2),t.E7m("nzGutter",t.q4q(32,x)),t.yG2(),t.E7m("nzLg",24)("nzMd",24)("nzSm",24)("nzXl",24)("nzXs",24)("nzXXl",24),t.yG2(),t.E7m("nzType","primary"),t.yG2(6),t.E7m("tableTitle","Danh s\xe1ch S\u1ea3n ph\u1ea9m")("btnTpl",s),t.yG2(),t.E7m("checkedCashArrayFromComment",o.checkedCashArray)("tableConfig",o.tableConfig)("tableData",o.dataList())}},dependencies:[T.Q,f.iq,f.Q9,d.Ko,d.QD,d.ox,m.WO,m.BN,m.qU,m.Qo,m.YZ,r.y,r.sz,r.ot,r.ue,r.u,r._G,r.SC,p.VL,p.eE,p.Mh,u.OA,u.cv,M.s,S.Wy,S.If,g.EV,g.Ez,B.k,V.o9,I.E,G.Q],changeDetection:0})}return e})()}}]);