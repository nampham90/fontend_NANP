"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[2416],{1864:(M,z,o)=>{o.d(z,{G:()=>s});var h=o(4496),t=o(7592),d=o(592);let s=(()=>{class u{constructor(){this.http=(0,h.uUt)(d.k)}getDepts(m){return this.http.post(t.ii,m)}getDeptsDetail(m){return this.http.post(t.aB,{id:m},{needSuccessInfo:!0})}addDepts(m){return this.http.post(t.CT,m)}delDepts(m){return this.http.post(t.wx,{id:m},{needSuccessInfo:!0})}editDepts(m){return this.http.put(t.rD,m)}static#t=this.\u0275fac=function(C){return new(C||u)};static#n=this.\u0275prov=h.wxM({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},2416:(M,z,o)=>{o.r(z),o.d(z,{DeptComponent:()=>ot});var h=o(1368),t=o(4496),d=o(4872),s=o(6504),u=o(8824),S=o(472),m=o(1864),C=o(2624),R=o(5072),L=o(4304),F=o(872),y=o(7436),b=o(4984),X=o(7340),E=o(2700),Y=o(788),c=o(1752),g=o(2532),f=o(2605),_=o(9116),D=o(2217);function P(e,l){if(1&e&&(t.SAx(0),t.OEk(1),t.k70()),2&e){const n=t.GaO().$implicit;t.yG2(),t.cNF(n.errors.message)}}function N(e,l){1&e&&(t.SAx(0),t.OEk(1,"Ph\u1ea7n b\u1eaft bu\u1ed9c"),t.k70())}function k(e,l){if(1&e&&t.yuY(0,P,2,1,"ng-container",10)(1,N,2,0,"ng-container",10),2&e){const n=l.$implicit;t.E7m("ngIf",n.hasError("message")),t.yG2(),t.E7m("ngIf",n.hasError("required"))}}let x=(()=>{class e{constructor(n){this.modalRef=n,this.nzModalData=(0,t.uUt)(_.aG),this.fb=(0,t.uUt)(s.im),this.params={}}initForm(){this.addEditForm=this.fb.group({tenphongban:[null,[s.AQ.required]],state:[!0],orderNum:[0]})}getAsyncFnData(n){return(0,E.of)(n)}getCurrentValue(){return(0,Y.qg)(this.addEditForm)?(0,E.of)(this.addEditForm.value):(0,E.of)(!1)}ngOnInit(){this.initForm(),this.nzModalData&&this.addEditForm.patchValue(this.nzModalData)}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(_.U7))};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-dept-manage-modal"]],standalone:!0,features:[t.UHJ],decls:22,vars:18,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","tenphongban",3,"nzSm","nzXs"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","tenphongban","name","tenphongban","placeholder","Vui l\xf2ng nh\u1eadp t\xean ph\xf2ng ban","id","departmentName"],["nzRequired","","nzFor","state",3,"nzSm","nzXs"],["formControlName","state"],["nz-radio","",3,"nzValue"],["nzRequired","","nzFor","orderNum",3,"nzSm","nzXs"],["nz-input","","formControlName","orderNum","name","orderNum","placeholder","Lo\u1ea1i","id","orderNum"],["combineTpl",""],[4,"ngIf"]],template:function(i,a){if(1&i&&(t.I0R(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t.OEk(3,"T\xean b\u1ed9 ph\u1eadn"),t.C$Y(),t.I0R(4,"nz-form-control",2),t.wR5(5,"input",3),t.C$Y()(),t.I0R(6,"nz-form-item")(7,"nz-form-label",4),t.OEk(8,"T\xecnh tr\u1ea1ng b\u1ed9 ph\u1eadn"),t.C$Y(),t.I0R(9,"nz-form-control",2)(10,"nz-radio-group",5)(11,"label",6),t.OEk(12,"V\xf4 hi\u1ec7u h\xf3a"),t.C$Y(),t.I0R(13,"label",6),t.OEk(14,"Cho ph\xe9p"),t.C$Y()()()(),t.I0R(15,"nz-form-item")(16,"nz-form-label",7),t.OEk(17,"Lo\u1ea1i"),t.C$Y(),t.I0R(18,"nz-form-control",2),t.wR5(19,"input",8),t.C$Y()()(),t.yuY(20,k,2,2,"ng-template",null,9,t.gJz)),2&i){const r=t.Gew(21);t.E7m("formGroup",a.addEditForm),t.yG2(2),t.E7m("nzSm",6)("nzXs",24),t.yG2(2),t.E7m("nzSm",14)("nzXs",24)("nzErrorTip",r),t.yG2(3),t.E7m("nzSm",6)("nzXs",24),t.yG2(2),t.E7m("nzSm",14)("nzXs",24)("nzErrorTip",r),t.yG2(2),t.E7m("nzValue",!1),t.yG2(2),t.E7m("nzValue",!0),t.yG2(3),t.E7m("nzSm",6)("nzXs",24),t.yG2(2),t.E7m("nzSm",14)("nzXs",24)("nzErrorTip",r)}},dependencies:[s.y,s.sz,s.ot,s.ue,s.u,c.WO,g.QD,g.ox,c.BN,c.qU,c.Qo,c.YZ,s.sl,s.uW,s.Wo,g.Ko,f.OA,f.cv,D.sn,D.es,D.uw,h.u_],encapsulation:2,changeDetection:0})}return e})(),$=(()=>{class e{constructor(){this.modalWrapService=(0,t.uUt)(X.K)}getContentComponent(){return x}show(n={},i){return this.modalWrapService.show(this.getContentComponent(),n,i)}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var v=o(460),G=o(5128),O=o(5584),I=o(6088),U=o(9432),T=o(268),A=o(2992),B=o(3064);const Q=["operationTpl"],V=["state"];function H(e,l){if(1&e&&t.wR5(0,"nz-option",22),2&e){const n=l.$implicit;t.E7m("nzLabel",n.label)("nzValue",n.value)}}function K(e,l){if(1&e){const n=t.KQA();t.I0R(0,"span",24),t.qCj("click",function(){t.usT(n);const a=t.GaO(),r=a.id,p=a.fatherId,it=t.GaO();return t.CGJ(it.edit(r,p))}),t.OEk(1,"C\u1eadp nh\u1eadt"),t.C$Y()}}function J(e,l){if(1&e){const n=t.KQA();t.I0R(0,"span",24),t.qCj("click",function(){t.usT(n);const a=t.GaO().id,r=t.GaO();return t.CGJ(r.del(a))}),t.OEk(1,"X\xf3a"),t.C$Y()}}function w(e,l){if(1&e){const n=t.KQA();t.I0R(0,"span",24),t.qCj("click",function(){t.usT(n);const a=t.GaO().id,r=t.GaO();return t.CGJ(r.add(a))}),t.OEk(1,"Th\xeam C\u1ea5p D\u01b0\u1edbi"),t.C$Y()}}function W(e,l){if(1&e&&t.yuY(0,K,2,0,"span",23)(1,J,2,0,"span",23)(2,w,2,0,"span",23),2&e){const n=t.GaO();t.E7m("appAuth",n.ActionCode.DeptEdit),t.yG2(),t.E7m("appAuth",n.ActionCode.DeptDel),t.yG2(),t.E7m("appAuth",n.ActionCode.DeptAddLowLevel)}}function j(e,l){if(1&e){const n=t.KQA();t.I0R(0,"button",25),t.qCj("click",function(){t.usT(n);const a=t.GaO();return t.CGJ(a.add(0))}),t.wR5(1,"i",26),t.OEk(2," Th\u1ebfm m\u1edbi "),t.C$Y()}}function Z(e,l){1&e&&t.C_f(0)}function q(e,l){if(1&e&&t.yuY(0,Z,1,0,"ng-container",27),2&e){const n=l.state;t.GaO();const i=t.Gew(34),a=t.Gew(36);t.E7m("ngTemplateOutlet",n?i:a)}}function tt(e,l){1&e&&(t.I0R(0,"nz-tag",28),t.OEk(1,"Cho ph\xe9p"),t.C$Y()),2&e&&t.E7m("nzColor","green")}function nt(e,l){1&e&&(t.I0R(0,"nz-tag",28),t.OEk(1,"V\xf4 hi\u1ec7u h\xf3a"),t.C$Y()),2&e&&t.E7m("nzColor","magenta")}const et=()=>({"padding-bottom":0}),at=()=>({xs:8,sm:16,md:24});let ot=(()=>{class e{constructor(){this.deptModalService=(0,t.uUt)($),this.dataService=(0,t.uUt)(m.G),this.modalSrv=(0,t.uUt)(_.mU),this.message=(0,t.uUt)(U.yo),this.cdr=(0,t.uUt)(t.kD9),this.ActionCode=S.i,this.searchParam={},this.destroyRef=(0,t.uUt)(t.eM9),this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd b\u1ed9 ph\u1eadn",breadcrumb:["Home","Qu\u1ea3n ly h\u1ec7 th\u1ed1ng","Qu\u1ea3n l\xfd b\u1ed9 ph\u1eadn"]},this.dataList=[],this.stateOptions=[]}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}getDataList(n){this.tableConfig.loading=!0,this.dataService.getDepts({pageSize:0,pageNum:0,filters:this.searchParam}).pipe((0,u.U)(()=>{this.tableLoading(!1)}),(0,d.ay)(this.destroyRef)).subscribe(a=>{const r=(0,b.ot)(a.list);this.dataList=(0,b.q0)(r),this.tableLoading(!1)})}check(n,i,a){this.message.success(n)}resetForm(){this.searchParam={},this.getDataList()}add(n){this.deptModalService.show({nzTitle:"Th\xeam m\u1edbi"}).pipe((0,d.ay)(this.destroyRef)).subscribe(i=>{if(!i||0===i.status)return;const a={...i.modalValue};a.fatherId=n,this.tableLoading(!0),this.addEditData(a,"addDepts")},i=>this.tableLoading(!1))}addEditData(n,i){this.dataService[i](n).pipe((0,u.U)(()=>{this.tableLoading(!1)}),(0,d.ay)(this.destroyRef)).subscribe(()=>{this.getDataList()})}del(n){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng\uff1f",nzContent:"Kh\xf4ng th\u1ec3 kh\xf4i ph\xfac khi x\xf3a",nzOnOk:()=>{this.tableLoading(!0),this.dataService.delDepts(n).pipe((0,d.ay)(this.destroyRef)).subscribe(()=>{1===this.dataList.length&&this.tableConfig.pageIndex--,this.getDataList()},i=>this.tableLoading(!1))}})}edit(n,i){this.dataService.getDeptsDetail(n).pipe((0,d.ay)(this.destroyRef)).subscribe(a=>{this.deptModalService.show({nzTitle:"C\u1eadp nh\u1eadt"},a).pipe((0,d.ay)(this.destroyRef)).subscribe(({modalValue:r,status:p})=>{0!==p&&(r.id=n,r.fatherId=i,this.tableLoading(!0),this.addEditData(r,"editDepts"))},r=>this.tableLoading(!1))})}changePageSize(n){this.tableConfig.pageSize=n}initTable(){this.tableConfig={headers:[{title:"T\xean b\u1ed9 ph\u1eadn",width:180,field:"tenphongban"},{title:"Tr\u1ea1ng th\xe1i",field:"state",tdTemplate:this.state,width:100},{title:"Lo\u1ea1i",field:"orderNum",width:100},{title:"Ng\xe0y t\u1ea1o",field:"createdAt",pipe:"date:yyyy-MM-dd HH:mm",width:180},{title:"V\u1eadn h\xe0nh",tdTemplate:this.operationTpl,width:250,fixed:!0,fixedDir:"right"}],total:0,showCheckbox:!1,loading:!1,pageSize:10,pageIndex:1}}ngOnInit(){this.initTable(),this.stateOptions=[...y.e.transformMapToArray(y.c.available,2)]}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-dept"]],viewQuery:function(i,a){if(1&i&&(t.CC$(Q,7),t.CC$(V,7)),2&i){let r;t.wto(r=t.Gqi())&&(a.operationTpl=r.first),t.wto(r=t.Gqi())&&(a.state=r.first)}},standalone:!0,features:[t.UHJ],decls:37,vars:31,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],["name","departmentName","nz-input","","placeholder","Vui l\xf2ng nh\u1eadp t\xean b\u1ed9 ph\u1eadn",3,"ngModel","ngModelChange"],["name","state","nzAllowClear","","nzPlaceHolder","S\u1ed5 xu\u1ed1ng l\u1ef1a ch\u1ecdn",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzTheme","outline","nzType","close-circle"],[3,"btnTpl","tableTitle","reload"],[3,"tableConfig","tableData","changePageNum","changePageSize"],["operationTpl",""],["tableBtns",""],["state",""],["yesTpl",""],["notTpl",""],[3,"nzLabel","nzValue"],["class","operate-text",3,"click",4,"appAuth"],[1,"operate-text",3,"click"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"],[4,"ngTemplateOutlet"],[3,"nzColor"]],template:function(i,a){if(1&i&&(t.wR5(0,"app-page-header",0),t.I0R(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),t.OEk(8,"T\xean b\u1ed9 ph\u1eadn"),t.C$Y(),t.I0R(9,"nz-form-control")(10,"input",7),t.iHE("ngModelChange",function(p){return t.kNx(a.searchParam.departmentName,p)||(a.searchParam.departmentName=p),p}),t.C$Y()()()(),t.I0R(11,"div",5)(12,"nz-form-item")(13,"nz-form-label",6),t.OEk(14,"Tr\u1ea1ng th\xe1i"),t.C$Y(),t.I0R(15,"nz-form-control")(16,"nz-select",8),t.iHE("ngModelChange",function(p){return t.kNx(a.searchParam.state,p)||(a.searchParam.state=p),p}),t.yuY(17,H,1,2,"nz-option",9),t.C$Y()()()(),t.I0R(18,"div",10)(19,"button",11),t.qCj("click",function(){return a.getDataList()}),t.wR5(20,"i",12),t.OEk(21," T\xecm ki\u1ebfm "),t.C$Y(),t.I0R(22,"button",13),t.qCj("click",function(){return a.resetForm()}),t.wR5(23,"i",14),t.OEk(24," c\xe0i l\u1ea1i "),t.C$Y()()()()(),t.I0R(25,"app-card-table-wrap",15),t.qCj("reload",function(){return a.reloadTable()}),t.I0R(26,"app-tree-table",16),t.qCj("changePageNum",function(p){return a.getDataList(p)})("changePageSize",function(p){return a.changePageSize(p)}),t.C$Y(),t.yuY(27,W,3,3,"ng-template",null,17,t.gJz),t.C$Y()(),t.yuY(29,j,3,0,"ng-template",null,18,t.gJz)(31,q,1,1,"ng-template",null,19,t.gJz)(33,tt,2,1,"ng-template",null,20,t.gJz)(35,nt,2,1,"ng-template",null,21,t.gJz)),2&i){const r=t.Gew(30);t.E7m("pageHeaderInfo",a.pageHeaderInfo),t.yG2(2),t.E7m("nzBodyStyle",t.q4q(29,et)),t.yG2(2),t.E7m("nzGutter",t.q4q(30,at)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",a.searchParam.departmentName),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",a.searchParam.state),t.yG2(),t.E7m("ngForOf",a.stateOptions),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(),t.E7m("nzType","primary"),t.yG2(6),t.E7m("btnTpl",r)("tableTitle","Danh s\xe1ch b\u1ed9 ph\u1eadn"),t.yG2(),t.E7m("tableConfig",a.tableConfig)("tableData",a.dataList)}},dependencies:[R.Q,G.iq,G.Q9,s.y,s.sz,s.ot,s.ue,s.u,s._G,s.SC,c.WO,g.QD,g.ox,c.BN,c.qU,c.Qo,c.YZ,g.Ko,f.OA,f.cv,T.VL,T.eE,T.Mh,h.Iw,v.EV,v.Ez,B.k,O.o9,O.gn,I.Wy,I.If,C.E,L.s,F.s,h.XV,A.c,A.s],encapsulation:2,changeDetection:0})}return e})()}}]);