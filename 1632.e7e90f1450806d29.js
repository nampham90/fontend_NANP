"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[1632],{8332:(D,f,i)=>{i.d(f,{O:()=>l});var h=i(4496),t=i(592),m=i(7592);let l=(()=>{class g{constructor(){this.http=(0,h.uUt)(t.k)}getMenuList(p){return this.http.post(m.sh,p)}getMenuListParams(p){return this.http.post(m.uo,p)}addMenus(p){return this.http.post(m.Al,p,{needSuccessInfo:!0})}editMenus(p){return this.http.put(m.yU,p,{needSuccessInfo:!0})}delMenus(p){return this.http.post(m.cr,{ids:[p]},{needSuccessInfo:!0})}getMenuDetail(p){return this.http.post(m.Yt,{menuId:p},{needSuccessInfo:!0})}getMenuDetailFromUrl(p){return this.http.post(m.y4,{url:p},{needSuccessInfo:!0})}static#t=this.\u0275fac=function(T){return new(T||g)};static#e=this.\u0275prov=h.wxM({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},6872:(D,f,i)=>{i.r(f),i.d(f,{default:()=>yt});var h=i(472),t=i(4496),m=i(4872),l=i(6504),g=i(9072),Y=i(8824),p=i(5224),T=i(3652),F=i(2604),$=i(2624),M=i(5072),L=i(872),U=i(7340),b=i(2700),Q=i(788),u=i(1752),d=i(2532),C=i(2605),v=i(9116);let N=(()=>{class n{constructor(e){this.modalRef=e,this.nzModalData=(0,t.uUt)(v.aG),this.fb=(0,t.uUt)(l.im),this.params={}}initForm(){this.addEditForm=this.fb.group({rolename:[null,[l.AQ.required]],mota:[null]})}getAsyncFnData(e){return(0,b.of)(e)}getCurrentValue(){return(0,Q.qg)(this.addEditForm)?(0,b.of)(this.addEditForm.value):(0,b.of)(!1)}ngOnInit(){this.initForm(),this.nzModalData&&this.addEditForm.patchValue(this.nzModalData)}static#t=this.\u0275fac=function(o){return new(o||n)(t.GI1(v.U7))};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-role-manage-modal"]],standalone:!0,features:[t.UHJ],decls:11,vars:9,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","rolename",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean nh\xe2n v\u1eadt",3,"nzSm","nzXs"],["nz-input","","formControlName","rolename","name","rolename","placeholder","Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2","id","rolename"],["nzFor","mota",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","mota","name","mota","placeholder","Vui l\xf2ng nh\u1eadp m\xf4 t\u1ea3","id","mota"]],template:function(o,a){1&o&&(t.I0R(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t.OEk(3,"T\xean vai tr\xf2"),t.C$Y(),t.I0R(4,"nz-form-control",2),t.wR5(5,"input",3),t.C$Y()(),t.I0R(6,"nz-form-item")(7,"nz-form-label",4),t.OEk(8,"M\xf4 t\u1ea3"),t.C$Y(),t.I0R(9,"nz-form-control",5),t.wR5(10,"input",6),t.C$Y()()()),2&o&&(t.E7m("formGroup",a.addEditForm),t.yG2(2),t.E7m("nzSm",4)("nzXs",24),t.yG2(2),t.E7m("nzSm",18)("nzXs",24),t.yG2(3),t.E7m("nzSm",4)("nzXs",24),t.yG2(2),t.E7m("nzSm",18)("nzXs",24))},dependencies:[l.y,l.sz,l.ot,l.ue,l.u,u.WO,d.QD,d.ox,u.BN,u.qU,u.Qo,u.YZ,l.sl,l.uW,l.Wo,d.Ko,C.OA,C.cv],encapsulation:2,changeDetection:0})}return n})(),P=(()=>{class n{constructor(){this.modalWrapService=(0,t.uUt)(U.K)}getContentComponent(){return N}show(e={},o){return this.modalWrapService.show(this.getContentComponent(),e,o)}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275prov=t.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var z=i(460),y=i(5128),E=i(5584),R=i(6088),O=i(9432),_=i(1368),X=i(8488),G=i(3064);const K=["operationTpl"];function B(n,s){if(1&n){const e=t.KQA();t.SAx(0),t.I0R(1,"app-input-currency",19),t.qCj("changeAmount",function(a){t.usT(e);const r=t.GaO();return t.CGJ(r.changeAmount(a))}),t.C$Y(),t.k70()}if(2&n){const e=t.GaO();t.yG2(),t.E7m("Amount",e.amountMode)}}function H(n,s){if(1&n){const e=t.KQA();t.I0R(0,"app-input-number",20),t.qCj("changeNumber",function(a){t.usT(e);const r=t.GaO();return t.CGJ(r.changeNumber(a))}),t.C$Y()}if(2&n){const e=t.GaO();t.E7m("Number",e.numberMode)}}function J(n,s){if(1&n){const e=t.KQA();t.I0R(0,"span",22),t.qCj("click",function(){t.usT(e);const a=t.GaO().id,r=t.GaO();return t.CGJ(r.setRole(a))}),t.OEk(1,"\u0110\u1eb7c quy\u1ec1n"),t.C$Y()}}function j(n,s){if(1&n){const e=t.KQA();t.I0R(0,"span",22),t.qCj("click",function(){t.usT(e);const a=t.GaO().id,r=t.GaO();return t.CGJ(r.edit(a))}),t.OEk(1,"C\u1eadp nh\u1eadt"),t.C$Y()}}function V(n,s){if(1&n){const e=t.KQA();t.I0R(0,"span",22),t.qCj("click",function(){t.usT(e);const a=t.GaO().id,r=t.GaO();return t.CGJ(r.del(a))}),t.OEk(1,"X\xf3a"),t.C$Y()}}function W(n,s){if(1&n&&t.yuY(0,J,2,0,"span",21)(1,j,2,0,"span",21)(2,V,2,0,"span",21),2&n){const e=t.GaO();t.E7m("appAuth",e.ActionCode.RoleManagerSetRole),t.yG2(),t.E7m("appAuth",e.ActionCode.RoleManagerEdit),t.yG2(),t.E7m("appAuth",e.ActionCode.RoleManagerDel)}}function w(n,s){if(1&n){const e=t.KQA();t.I0R(0,"button",24),t.qCj("click",function(){t.usT(e);const a=t.GaO(2);return t.CGJ(a.add())}),t.wR5(1,"i",25),t.OEk(2," Th\xeam m\u1edbi "),t.C$Y()}}function Z(n,s){if(1&n&&t.yuY(0,w,3,0,"button",23),2&n){const e=t.GaO();t.E7m("appAuth",e.ActionCode.RoleManagerAdd)}}const q=()=>({"padding-bottom":0}),tt=()=>({xs:8,sm:16,md:24});let et=(()=>{class n{constructor(){this.dataService=(0,t.uUt)(p.q),this.modalSrv=(0,t.uUt)(v.mU),this.cdr=(0,t.uUt)(t.kD9),this.modalService=(0,t.uUt)(P),this.router=(0,t.uUt)(g.E5),this.message=(0,t.uUt)(O.yo),this.searchParam={},this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd vai tr\xf2",breadcrumb:["Home","Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng","Qu\u1ea3n l\xfd vai tr\xf2"]},this.dataList=[],this.checkedCashArray=[],this.ActionCode=h.i,this.destroyRef=(0,t.uUt)(t.eM9),this.flg=!1,this.numberMode=1e3,this.amountMode=1e3}changeNumber(e){this.numberMode=e}changeAmount(e){this.amountMode=e}selectedChecked(e){this.checkedCashArray=[...e]}resetForm(){this.searchParam={},this.getDataList()}getDataList(e){this.tableConfig.loading=!0,this.dataService.getRoles({pageSize:this.tableConfig.pageSize,pageNum:e?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,Y.U)(()=>{this.tableLoading(!1)}),(0,m.ay)(this.destroyRef)).subscribe(a=>{const{list:r,total:c,pageNum:Et}=a;this.dataList=[...r],this.tableConfig.total=c,this.tableConfig.pageIndex=Et,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}setRole(e){this.router.navigate(["/default/system/role-manager/set-role"],{queryParams:{id:e}})}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(e){this.tableConfig.loading=e,this.tableChangeDectction()}add(){this.modalService.show({nzTitle:"Th\xeam m\u1edbi"}).pipe((0,m.ay)(this.destroyRef)).subscribe(e=>{if(!e||0===e.status)return;const o={...e.modalValue};this.tableLoading(!0),this.addEditData(o,"addRoles")},e=>this.tableLoading(!1))}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}edit(e){this.dataService.getRolesDetail(e).pipe((0,m.ay)(this.destroyRef)).subscribe(o=>{this.modalService.show({nzTitle:"C\u1eadp nh\u1eadt"},o).pipe((0,m.ay)(this.destroyRef)).subscribe(({modalValue:a,status:r})=>{0!==r&&(a.id=e,this.tableLoading(!0),this.addEditData(a,"editRoles"))},a=>this.tableLoading(!1))})}addEditData(e,o){this.dataService[o](e).pipe((0,m.ay)(this.destroyRef)).subscribe(()=>{this.getDataList()})}del(e){const o=[e];this.modalSrv.confirm({nzTitle:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng\uff1f",nzContent:"Kh\xf4ng kh\xf4i ph\u1ee5c \u0111\u01b0\u1ee3c khi d\u1eef li\u1ec7u b\u1ecb x\xf3a !",nzOnOk:()=>{this.tableLoading(!0),this.dataService.delRoles(o).pipe((0,m.ay)(this.destroyRef)).subscribe(()=>{1===this.dataList.length&&this.tableConfig.pageIndex--,this.getDataList()},a=>this.tableLoading(!1))}})}changePageSize(e){this.tableConfig.pageSize=e}ngOnInit(){this.initTable()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"T\xean vai tr\xf2",field:"rolename",width:100},{title:"M\xf4 t\u1ea3",width:400,field:"mota"},{title:"V\u1eadn h\xe0nh",tdTemplate:this.operationTpl,width:280,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-role-manage"]],viewQuery:function(o,a){if(1&o&&t.CC$(K,7),2&o){let r;t.wto(r=t.Gqi())&&(a.operationTpl=r.first)}},standalone:!0,features:[t.M5G([_.hl,_.cf]),t.UHJ],decls:32,vars:31,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],["name","rolename","nz-input","","placeholder","Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["numberTpl",""],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzTheme","outline","nzType","close-circle"],[3,"btnTpl","tableTitle","reload"],[3,"tableConfig","tableData","changePageNum","changePageSize"],["operationTpl",""],["tableBtns",""],[3,"Amount","changeAmount"],[3,"Number","changeNumber"],["class","operate-text",3,"click",4,"appAuth"],[1,"operate-text",3,"click"],["class","m-r-8","nz-button","","nzType","primary",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"]],template:function(o,a){if(1&o&&(t.wR5(0,"app-page-header",0),t.I0R(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),t.OEk(8,"T\xean vai tr\xf2"),t.C$Y(),t.I0R(9,"nz-form-control")(10,"input",7),t.iHE("ngModelChange",function(c){return t.kNx(a.searchParam.rolename,c)||(a.searchParam.rolename=c),c}),t.C$Y()()()(),t.I0R(11,"div",5)(12,"nz-form-item")(13,"nz-form-label",6),t.OEk(14,"Input Number"),t.C$Y(),t.I0R(15,"nz-form-control"),t.yuY(16,B,2,1,"ng-container",8)(17,H,1,1,"ng-template",null,9,t.gJz),t.C$Y()()(),t.I0R(19,"div",10)(20,"button",11),t.qCj("click",function(){return a.getDataList()}),t.wR5(21,"i",12),t.OEk(22," T\xecm ki\u1ebfm "),t.C$Y(),t.I0R(23,"button",13),t.qCj("click",function(){return a.resetForm()}),t.wR5(24,"i",14),t.OEk(25," C\xe0i l\u1ea1i "),t.C$Y()()()()(),t.I0R(26,"app-card-table-wrap",15),t.qCj("reload",function(){return a.reloadTable()}),t.I0R(27,"app-ant-table",16),t.qCj("changePageNum",function(c){return a.getDataList(c)})("changePageSize",function(c){return a.changePageSize(c)}),t.C$Y(),t.yuY(28,W,3,3,"ng-template",null,17,t.gJz),t.C$Y()(),t.yuY(30,Z,1,1,"ng-template",null,18,t.gJz)),2&o){const r=t.Gew(18),c=t.Gew(31);t.E7m("pageHeaderInfo",a.pageHeaderInfo),t.yG2(2),t.E7m("nzBodyStyle",t.q4q(29,q)),t.yG2(2),t.E7m("nzGutter",t.q4q(30,tt)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",a.searchParam.rolename),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.E7m("ngIf",1==a.flg)("ngIfElse",r),t.yG2(3),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(),t.E7m("nzType","primary"),t.yG2(6),t.E7m("btnTpl",c)("tableTitle","Danh s\xe1ch vai tr\xf2"),t.yG2(),t.E7m("tableConfig",a.tableConfig)("tableData",a.dataList)}},dependencies:[M.Q,y.iq,y.Q9,l.y,l.sz,l.ot,l.ue,l.u,l._G,l.SC,u.WO,d.QD,d.ox,u.BN,u.qU,u.Qo,u.YZ,d.Ko,C.OA,C.cv,z.EV,z.Ez,G.k,E.o9,E.gn,R.Wy,R.If,$.E,T.Q,L.s,F.S,X.S,_.u_],encapsulation:2,changeDetection:0})}return n})();var nt=i(6020),at=i(4504),ot=i(8332),it=i(7823),I=i(4984),S=i(9640),A=i(280),k=i(8288);function rt(n,s){1&n&&t.OEk(0,"Quay l\u1ea1i")}function st(n,s){if(1&n){const e=t.KQA();t.I0R(0,"span",13),t.qCj("click",function(){t.usT(e);const a=t.GaO().$implicit;return t.CGJ(a.isOpen=!a.isOpen)}),t.wR5(1,"i",14),t.I0R(2,"span",15),t.OEk(3),t.C$Y()()}if(2&n){const e=t.GaO().$implicit;t.yG2(),t.E7m("nzType",e.isOpen?"down":"right"),t.yG2(2),t.cNF(e.isOpen?"\u1ea8n":"M\u1edf r\u1ed9ng")}}function lt(n,s){1&n&&t.C_f(0)}function ct(n,s){if(1&n){const e=t.KQA();t.I0R(0,"span",13),t.qCj("click",function(){t.usT(e);const a=t.GaO(2).$implicit;return t.CGJ(a.isOpen=!a.isOpen)}),t.wR5(1,"i",14),t.I0R(2,"span",15),t.OEk(3),t.C$Y()()}if(2&n){const e=t.GaO(2).$implicit;t.yG2(),t.E7m("nzType",e.isOpen?"down":"right"),t.yG2(2),t.cNF(e.isOpen?"\u1ea8n":"M\u1ee1 r\u1ed9ng")}}const mt=n=>({paddingLeft:n});function pt(n,s){if(1&n){const e=t.KQA();t.SAx(0),t.I0R(1,"div",19)(2,"label",7),t.iHE("ngModelChange",function(a){t.usT(e);const r=t.GaO().$implicit;return t.kNx(r.checked,a)||(r.checked=a),t.CGJ(a)}),t.OEk(3),t.C$Y(),t.yuY(4,ct,4,2,"span",8),t.C$Y(),t.k70()}if(2&n){const e=t.GaO().$implicit;t.yG2(),t.E7m("ngStyle",t.S45(4,mt,16*e.level+"px")),t.yG2(),t.OKB("ngModel",e.checked),t.yG2(),t.cNF(e.menuName),t.yG2(),t.E7m("ngIf",e.children&&e.children.length>0)}}function ut(n,s){if(1&n){const e=t.KQA();t.I0R(0,"label",7),t.iHE("ngModelChange",function(a){const c=t.usT(e).$implicit;return t.kNx(c.checked,a)||(c.checked=a),t.CGJ(a)}),t.OEk(1),t.C$Y()}if(2&n){const e=s.$implicit;t.OKB("ngModel",e.checked),t.yG2(),t.cNF(e.menuName)}}function gt(n,s){if(1&n&&(t.SAx(0),t.I0R(1,"div",20)(2,"span"),t.OEk(3,"Quy\u1ec1n ho\u1ea1t \u0111\u1ed9ng\uff1a"),t.C$Y(),t.yuY(4,ut,2,2,"label",21),t.wR5(5,"nz-divider",9),t.C$Y(),t.k70()),2&n){const e=t.GaO(4).$implicit;t.yG2(4),t.E7m("ngForOf",e)}}function _t(n,s){if(1&n&&t.yuY(0,gt,6,1,"ng-container",16),2&n){const e=t.GaO().first;t.E7m("ngIf",e)}}function dt(n,s){1&n&&t.C_f(0)}const x=(n,s)=>({$implicit:n,isOpen:s});function ht(n,s){if(1&n&&(t.SAx(0),t.yuY(1,pt,5,6,"ng-container",17)(2,_t,1,1,"ng-template",null,18,t.gJz)(4,dt,1,0,"ng-container",11),t.k70()),2&n){const e=s.$implicit,o=t.Gew(3);t.GaO(3);const a=t.Gew(9);t.yG2(),t.E7m("ngIf","C"===e.menuType)("ngIfElse",o),t.yG2(3),t.E7m("ngTemplateOutlet",a)("ngTemplateOutletContext",t.IBC(4,x,e.children,e.isOpen))}}function ft(n,s){if(1&n&&(t.SAx(0),t.yuY(1,ht,5,7,"ng-container",3),t.k70()),2&n){const e=t.GaO().$implicit;t.yG2(),t.E7m("ngForOf",e)}}function Ct(n,s){1&n&&t.yuY(0,ft,2,1,"ng-container",16),2&n&&t.E7m("ngIf",s.isOpen)}function zt(n,s){if(1&n){const e=t.KQA();t.I0R(0,"li")(1,"div",6)(2,"label",7),t.iHE("ngModelChange",function(a){const c=t.usT(e).$implicit;return t.kNx(c.checked,a)||(c.checked=a),t.CGJ(a)}),t.OEk(3),t.C$Y(),t.yuY(4,st,4,2,"span",8),t.C$Y(),t.wR5(5,"nz-divider",9),t.I0R(6,"div",10),t.yuY(7,lt,1,0,"ng-container",11),t.C$Y(),t.yuY(8,Ct,1,1,"ng-template",null,12,t.gJz),t.C$Y()}if(2&n){const e=s.$implicit,o=t.Gew(9);t.yG2(2),t.OKB("ngModel",e.checked),t.yG2(),t.cNF(e.menuName),t.yG2(),t.E7m("ngIf",e.children&&e.children.length>0),t.yG2(3),t.E7m("ngTemplateOutlet",o)("ngTemplateOutletContext",t.IBC(5,x,e.children,e.isOpen))}}const yt=[{path:"",component:et,data:{title:"Qu\u1ea3n l\xfd vai tr\xf2",key:"role-manage"}},{path:"set-role",component:(()=>{class n{constructor(){this.dataService=(0,t.uUt)(p.q),this.cdr=(0,t.uUt)(t.kD9),this.menusService=(0,t.uUt)(ot.O),this.router=(0,t.uUt)(g.E5),this.message=(0,t.uUt)(O.yo),this.userService=(0,t.uUt)(at.u),this.pageHeaderInfo={title:"Thi\u1ebft l\u1eadp quy\u1ec1n",desc:"Vai tr\xf2 hi\u1ec7n t\u1ea1i\uff1a",breadcrumb:["Home","Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng","Qu\u1ea3n l\xfd vai tr\xf2","Thi\u1ebft l\u1eadp quy\u1ec1n"]},this.authCodeArr=[],this.permissionList=[],this.destroyRef=(0,t.uUt)(t.eM9)}initPermission(){this.dataService.getPermissionById(this.id).pipe((0,nt.m)(e=>(this.authCodeArr=e,this.menusService.getMenuList({pageNum:0,pageSize:0}))),(0,m.ay)(this.destroyRef)).subscribe(e=>{const o=e.list;o.forEach(a=>{a.isOpen=!1,a.checked=this.authCodeArr.includes(a.code)}),this.permissionList=(0,I.oZ)((0,I.ot)(o)),this.cdr.markForCheck()})}getRoleName(){this.userId>0&&this.dataService.getRolesDetail(this.userId).pipe((0,m.ay)(this.destroyRef)).subscribe(({rolename:e})=>{this.pageHeaderInfo={...this.pageHeaderInfo,desc:`Vai tr\xf2 hi\u1ec7n t\u1ea1i: ${e}`},this.cdr.markForCheck()})}back(){this.router.navigateByUrl("/default/system/role-manager")}submit(){const e=[...this.permissionList],o=(0,I.q0)(e),a=[];o.forEach(c=>{c.checked&&a.push(`${c.id}`)}),this.dataService.updatePermission({permissionIds:a,roleId:this.id}).pipe((0,m.ay)(this.destroyRef)).subscribe(()=>{this.message.success("C\xe0i \u0111\u1eb7t th\xe0nh c\xf4ng, v\xe0 n\xf3 s\u1ebd c\xf3 hi\u1ec7u l\u1ef1c sau khi \u0111\u0103ng nh\u1eadp l\u1ea1i")})}_onReuseInit(){this.ngOnInit()}ngOnInit(){this.userService.getUserInfo().subscribe(e=>{this.userId=e.userId}),this.getRoleName(),this.initPermission()}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-set-role"]],inputs:{id:"id"},standalone:!0,features:[t.UHJ],decls:12,vars:4,consts:[[3,"backTpl","backUrl","pageHeaderInfo"],["backTpl",""],[1,"normal-table-wrap"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary",1,"right",3,"click"],["nz-button","","nzGhost","","nzType","primary",1,"right","m-l-20",3,"click"],[1,"first-menu"],["nz-checkbox","",3,"ngModel","ngModelChange"],["class","hand-model",3,"click",4,"ngIf"],[1,"m-0"],["nz-result-content","",1,"m-0","p-0"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["permissionTpl",""],[1,"hand-model",3,"click"],["nz-icon","","nzTheme","outline",3,"nzType"],[1,"operate-text"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["operateTpl",""],[1,"first-menu",3,"ngStyle"],[1,"operate-line","li-height","m-0","p-0","p-l-35"],["nz-checkbox","",3,"ngModel","ngModelChange",4,"ngFor","ngForOf"]],template:function(o,a){if(1&o&&(t.wR5(0,"app-page-header",0),t.yuY(1,rt,1,0,"ng-template",null,1,t.gJz),t.I0R(3,"div",2)(4,"nz-card")(5,"ul"),t.yuY(6,zt,10,8,"li",3),t.C$Y()()(),t.I0R(7,"app-footer-submit")(8,"button",4),t.qCj("click",function(){return a.submit()}),t.OEk(9,"Thi\u1ebft l\u1eadp"),t.C$Y(),t.I0R(10,"button",5),t.qCj("click",function(){return a.back()}),t.OEk(11,"Quay l\u1ea1i"),t.C$Y()()),2&o){const r=t.Gew(2);t.E7m("backTpl",r)("backUrl","/default/system/role-manager")("pageHeaderInfo",a.pageHeaderInfo),t.yG2(6),t.E7m("ngForOf",a.permissionList)}},dependencies:[M.Q,y.iq,y.Q9,_.Iw,S.UN,S.Ep,l.y,l.ue,l._G,_.u_,R.Wy,R.If,z.EV,z.Ez,G.k,E.o9,A.o,A.M,k.k3,k.oZ,_.XV,_.Qt,it.k,E.gn],styles:[".li-height{height:40px;line-height:40px}.first-menu{display:flex;align-items:center;justify-content:space-between;height:40px;line-height:40px}.ant-card-body{display:block!important}\n"],encapsulation:2,changeDetection:0})}return n})(),data:{title:"Qu\u1ea3n l\xfd vai tr\xf2",key:"set-role",authCode:h.i.RoleManagerSetRole}}]}}]);