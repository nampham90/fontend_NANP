"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[8372],{8332:(x,C,s)=>{s.d(C,{O:()=>l});var f=s(4496),t=s(592),u=s(7592);let l=(()=>{class h{constructor(){this.http=(0,f.uUt)(t.k)}getMenuList(m){return this.http.post(u.sh,m)}getMenuListParams(m){return this.http.post(u.uo,m)}addMenus(m){return this.http.post(u.Al,m,{needSuccessInfo:!0})}editMenus(m){return this.http.put(u.yU,m,{needSuccessInfo:!0})}delMenus(m){return this.http.post(u.cr,{ids:[m]},{needSuccessInfo:!0})}getMenuDetail(m){return this.http.post(u.Yt,{menuId:m},{needSuccessInfo:!0})}getMenuDetailFromUrl(m){return this.http.post(u.y4,{url:m},{needSuccessInfo:!0})}static#t=this.\u0275fac=function(v){return new(v||h)};static#e=this.\u0275prov=f.wxM({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},8372:(x,C,s)=>{s.r(C),s.d(C,{default:()=>Et});var f=s(472),t=s(4496),u=s(4872),l=s(6504),h=s(9072),F=s(8824),m=s(5224),v=s(3652),p=s(1368),d=s(2605);let N=(()=>{class n{regexString(e){return`^(\\d${e?`{0,${e}}`:"+"}(\\.\\d{0,2})?|\\.\\d{0,2})$`}setRegex(e){this.digitRegex=new RegExp(this.regexString(e),"g")}set maxDigits(e){this.setRegex(e)}constructor(){this.elementRef=(0,t.uUt)(t.GMv),this.decimalPipe=(0,t.uUt)(p.hl),this.lastValid="",this.el=this.elementRef.nativeElement,this.setRegex()}ngOnInit(){this.el.value=this.decimalPipe.transform(this.el.value,"1.0-0")}onFocus(e){this.el.value=e.replace(/[^0-9.]+/g,""),this.el.select()}onBlur(e){this.el.value=this.decimalPipe.transform(e,"1.0-0")}onUndo(e){this.el.value=""}onInput(e){const a=(e.target.value.match(this.digitRegex)||[]).join("");(a||!e.target.value)&&(this.lastValid=a),this.el.value=a||this.lastValid}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275dir=t.Sc5({type:n,selectors:[["","appInputNumber",""]],hostBindings:function(a,i){1&a&&t.qCj("focus",function(o){return i.onFocus(o.target.value)})("blur",function(o){return i.onBlur(o.target.value)})("keydown.control.z",function(o){return i.onUndo(o.target.value)})("input",function(o){return i.onInput(o)})},inputs:{maxDigits:"maxDigits"},standalone:!0})}return n})();class Y{}let U=(()=>{class n{constructor(){this.cdr=(0,t.uUt)(t.kD9),this.decimalPipe=(0,t.uUt)(p.hl),this.changeNumber=new t._w7}set Number(e){this._number=this.decimalPipe.transform(e,"1.0-0")}get Number(){return this.inputChangeDectction(),this._number}inputChangeDectction(){this.cdr.markForCheck()}onQueryParamsChange(e){this.changeNumber.emit(e.target.value.replace(/[^0-9.]+/g,""))}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-input-number"]],inputs:{Number:"Number"},outputs:{changeNumber:"changeNumber"},standalone:!0,features:[t.M5G([{provide:Y,useExisting:n}]),t.UHJ],decls:1,vars:1,consts:[["nz-input","","type","text","autocomplete","off","appInputNumber","","maxDigits","9",1,"form-control",3,"ngModel","ngModelChange","blur"]],template:function(a,i){1&a&&(t.I0R(0,"input",0),t.iHE("ngModelChange",function(o){return t.kNx(i._number,o)||(i._number=o),o}),t.qCj("blur",function(o){return i.onQueryParamsChange(o)}),t.C$Y()),2&a&&t.OKB("ngModel",i._number)},dependencies:[d.OA,d.cv,l.y,l.ot,l.ue,l._G,N],changeDetection:0})}return n})();var P=s(2624),M=s(5072),$=s(872),H=s(7340),E=s(2700),B=s(788),g=s(1752),_=s(2532),I=s(9116);let L=(()=>{class n{constructor(e){this.modalRef=e,this.nzModalData=(0,t.uUt)(I.aG),this.fb=(0,t.uUt)(l.im),this.params={}}initForm(){this.addEditForm=this.fb.group({rolename:[null,[l.AQ.required]],mota:[null]})}getAsyncFnData(e){return(0,E.of)(e)}getCurrentValue(){return(0,B.qg)(this.addEditForm)?(0,E.of)(this.addEditForm.value):(0,E.of)(!1)}ngOnInit(){this.initForm(),this.nzModalData&&this.addEditForm.patchValue(this.nzModalData)}static#t=this.\u0275fac=function(a){return new(a||n)(t.GI1(I.U7))};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-role-manage-modal"]],standalone:!0,features:[t.UHJ],decls:11,vars:9,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","rolename",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean nh\xe2n v\u1eadt",3,"nzSm","nzXs"],["nz-input","","formControlName","rolename","name","rolename","placeholder","Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2","id","rolename"],["nzFor","mota",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","mota","name","mota","placeholder","Vui l\xf2ng nh\u1eadp m\xf4 t\u1ea3","id","mota"]],template:function(a,i){1&a&&(t.I0R(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t.OEk(3,"T\xean vai tr\xf2"),t.C$Y(),t.I0R(4,"nz-form-control",2),t.wR5(5,"input",3),t.C$Y()(),t.I0R(6,"nz-form-item")(7,"nz-form-label",4),t.OEk(8,"M\xf4 t\u1ea3"),t.C$Y(),t.I0R(9,"nz-form-control",5),t.wR5(10,"input",6),t.C$Y()()()),2&a&&(t.E7m("formGroup",i.addEditForm),t.yG2(2),t.E7m("nzSm",4)("nzXs",24),t.yG2(2),t.E7m("nzSm",18)("nzXs",24),t.yG2(3),t.E7m("nzSm",4)("nzXs",24),t.yG2(2),t.E7m("nzSm",18)("nzXs",24))},dependencies:[l.y,l.sz,l.ot,l.ue,l.u,g.WO,_.QD,_.ox,g.BN,g.qU,g.Qo,g.YZ,l.sl,l.uW,l.Wo,_.Ko,d.OA,d.cv],encapsulation:2,changeDetection:0})}return n})(),Q=(()=>{class n{constructor(){this.modalWrapService=(0,t.uUt)(H.K)}getContentComponent(){return L}show(e={},a){return this.modalWrapService.show(this.getContentComponent(),e,a)}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275prov=t.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var y=s(460),z=s(5128),b=s(5584),R=s(6088),O=s(9432);let X=(()=>{class n{regexString(e){return`^(\\d${e?`{0,${e}}`:"+"}(\\.\\d{0,2})?|\\.\\d{0,2})$`}setRegex(e){this.digitRegex=new RegExp(this.regexString(e),"g")}set maxDigits(e){this.setRegex(e)}constructor(){this.elementRef=(0,t.uUt)(t.GMv),this.decimalPipe=(0,t.uUt)(p.hl),this.lastValid="",this.el=this.elementRef.nativeElement,this.setRegex()}ngOnInit(){this.el.value=this.decimalPipe.transform(this.el.value,"1.0-0")}onFocus(e){this.el.value=e.replace(/[^0-9.]+/g,""),this.el.select()}onBlur(e){this.el.value=this.decimalPipe.transform(e,"1.0-0")}onUndo(e){this.el.value=""}onInput(e){const a=(e.target.value.match(this.digitRegex)||[]).join("");(a||!e.target.value)&&(this.lastValid=a),this.el.value=a||this.lastValid}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275dir=t.Sc5({type:n,selectors:[["","appInputCurrency",""]],hostBindings:function(a,i){1&a&&t.qCj("focus",function(o){return i.onFocus(o.target.value)})("blur",function(o){return i.onBlur(o.target.value)})("keydown.control.z",function(o){return i.onUndo(o.target.value)})("input",function(o){return i.onInput(o)})},inputs:{maxDigits:"maxDigits"},standalone:!0})}return n})();class w{}let K=(()=>{class n{constructor(){this.cdr=(0,t.uUt)(t.kD9),this.currencyPipe=(0,t.uUt)(p.cf),this._disable=!1,this.changeAmount=new t._w7}set Amount(e){this._amount=this.currencyPipe.transform(1e3*e,"VND")}get Amount(){return this.inputChangeDectction(),this._amount}set Disable(e){this._disable=e}get Disable(){return this._disable}inputChangeDectction(){this.cdr.markForCheck()}onQueryParamsChange(e){this.changeAmount.emit(e.target.value.replace(/[^0-9.]+/g,"")/1e3)}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-input-currency"]],inputs:{Amount:"Amount",Disable:"Disable"},outputs:{changeAmount:"changeAmount"},standalone:!0,features:[t.M5G([{provide:w,useExisting:n}]),t.UHJ],decls:1,vars:2,consts:[["nz-input","","type","text","autocomplete","off","appInputCurrency","","maxDigits","9",1,"form-control",3,"disabled","ngModel","ngModelChange","blur"]],template:function(a,i){1&a&&(t.I0R(0,"input",0),t.iHE("ngModelChange",function(o){return t.kNx(i._amount,o)||(i._amount=o),o}),t.qCj("blur",function(o){return i.onQueryParamsChange(o)}),t.C$Y()),2&a&&(t.E7m("disabled",i._disable),t.OKB("ngModel",i._amount))},dependencies:[d.OA,d.cv,l.y,l.ot,l.ue,l._G,X],changeDetection:0})}return n})();var S=s(3064);const j=["operationTpl"];function J(n,c){if(1&n){const e=t.KQA();t.SAx(0),t.I0R(1,"app-input-currency",19),t.qCj("changeAmount",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.changeAmount(i))}),t.C$Y(),t.k70()}if(2&n){const e=t.GaO();t.yG2(),t.E7m("Amount",e.amountMode)}}function V(n,c){if(1&n){const e=t.KQA();t.I0R(0,"app-input-number",20),t.qCj("changeNumber",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.changeNumber(i))}),t.C$Y()}if(2&n){const e=t.GaO();t.E7m("Number",e.numberMode)}}function W(n,c){if(1&n){const e=t.KQA();t.I0R(0,"span",22),t.qCj("click",function(){t.usT(e);const i=t.GaO().id,r=t.GaO();return t.CGJ(r.setRole(i))}),t.OEk(1,"\u0110\u1eb7c quy\u1ec1n"),t.C$Y()}}function Z(n,c){if(1&n){const e=t.KQA();t.I0R(0,"span",22),t.qCj("click",function(){t.usT(e);const i=t.GaO().id,r=t.GaO();return t.CGJ(r.edit(i))}),t.OEk(1,"C\u1eadp nh\u1eadt"),t.C$Y()}}function q(n,c){if(1&n){const e=t.KQA();t.I0R(0,"span",22),t.qCj("click",function(){t.usT(e);const i=t.GaO().id,r=t.GaO();return t.CGJ(r.del(i))}),t.OEk(1,"X\xf3a"),t.C$Y()}}function tt(n,c){if(1&n&&t.yuY(0,W,2,0,"span",21)(1,Z,2,0,"span",21)(2,q,2,0,"span",21),2&n){const e=t.GaO();t.E7m("appAuth",e.ActionCode.RoleManagerSetRole),t.yG2(),t.E7m("appAuth",e.ActionCode.RoleManagerEdit),t.yG2(),t.E7m("appAuth",e.ActionCode.RoleManagerDel)}}function et(n,c){if(1&n){const e=t.KQA();t.I0R(0,"button",24),t.qCj("click",function(){t.usT(e);const i=t.GaO(2);return t.CGJ(i.add())}),t.wR5(1,"i",25),t.OEk(2," Th\xeam m\u1edbi "),t.C$Y()}}function nt(n,c){if(1&n&&t.yuY(0,et,3,0,"button",23),2&n){const e=t.GaO();t.E7m("appAuth",e.ActionCode.RoleManagerAdd)}}const it=()=>({"padding-bottom":0}),at=()=>({xs:8,sm:16,md:24});let ot=(()=>{class n{constructor(){this.dataService=(0,t.uUt)(m.q),this.modalSrv=(0,t.uUt)(I.mU),this.cdr=(0,t.uUt)(t.kD9),this.modalService=(0,t.uUt)(Q),this.router=(0,t.uUt)(h.E5),this.message=(0,t.uUt)(O.yo),this.searchParam={},this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd vai tr\xf2",breadcrumb:["Home","Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng","Qu\u1ea3n l\xfd vai tr\xf2"]},this.dataList=[],this.checkedCashArray=[],this.ActionCode=f.i,this.destroyRef=(0,t.uUt)(t.eM9),this.flg=!1,this.numberMode=1e3,this.amountMode=1e3}changeNumber(e){this.numberMode=e}changeAmount(e){this.amountMode=e}selectedChecked(e){this.checkedCashArray=[...e]}resetForm(){this.searchParam={},this.getDataList()}getDataList(e){this.tableConfig.loading=!0,this.dataService.getRoles({pageSize:this.tableConfig.pageSize,pageNum:e?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,F.U)(()=>{this.tableLoading(!1)}),(0,u.ay)(this.destroyRef)).subscribe(i=>{const{list:r,total:o,pageNum:It}=i;this.dataList=[...r],this.tableConfig.total=o,this.tableConfig.pageIndex=It,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}setRole(e){this.router.navigate(["/default/system/role-manager/set-role"],{queryParams:{id:e}})}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(e){this.tableConfig.loading=e,this.tableChangeDectction()}add(){this.modalService.show({nzTitle:"Th\xeam m\u1edbi"}).pipe((0,u.ay)(this.destroyRef)).subscribe(e=>{if(!e||0===e.status)return;const a={...e.modalValue};this.tableLoading(!0),this.addEditData(a,"addRoles")},e=>this.tableLoading(!1))}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}edit(e){this.dataService.getRolesDetail(e).pipe((0,u.ay)(this.destroyRef)).subscribe(a=>{this.modalService.show({nzTitle:"C\u1eadp nh\u1eadt"},a).pipe((0,u.ay)(this.destroyRef)).subscribe(({modalValue:i,status:r})=>{0!==r&&(i.id=e,this.tableLoading(!0),this.addEditData(i,"editRoles"))},i=>this.tableLoading(!1))})}addEditData(e,a){this.dataService[a](e).pipe((0,u.ay)(this.destroyRef)).subscribe(()=>{this.getDataList()})}del(e){const a=[e];this.modalSrv.confirm({nzTitle:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng\uff1f",nzContent:"Kh\xf4ng kh\xf4i ph\u1ee5c \u0111\u01b0\u1ee3c khi d\u1eef li\u1ec7u b\u1ecb x\xf3a !",nzOnOk:()=>{this.tableLoading(!0),this.dataService.delRoles(a).pipe((0,u.ay)(this.destroyRef)).subscribe(()=>{1===this.dataList.length&&this.tableConfig.pageIndex--,this.getDataList()},i=>this.tableLoading(!1))}})}changePageSize(e){this.tableConfig.pageSize=e}ngOnInit(){this.initTable()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"T\xean vai tr\xf2",field:"rolename",width:100},{title:"M\xf4 t\u1ea3",width:400,field:"mota"},{title:"V\u1eadn h\xe0nh",tdTemplate:this.operationTpl,width:280,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-role-manage"]],viewQuery:function(a,i){if(1&a&&t.CC$(j,7),2&a){let r;t.wto(r=t.Gqi())&&(i.operationTpl=r.first)}},standalone:!0,features:[t.M5G([p.hl,p.cf]),t.UHJ],decls:32,vars:31,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],["name","rolename","nz-input","","placeholder","Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["numberTpl",""],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzTheme","outline","nzType","close-circle"],[3,"btnTpl","tableTitle","reload"],[3,"tableConfig","tableData","changePageNum","changePageSize"],["operationTpl",""],["tableBtns",""],[3,"Amount","changeAmount"],[3,"Number","changeNumber"],["class","operate-text",3,"click",4,"appAuth"],[1,"operate-text",3,"click"],["class","m-r-8","nz-button","","nzType","primary",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"]],template:function(a,i){if(1&a&&(t.wR5(0,"app-page-header",0),t.I0R(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),t.OEk(8,"T\xean vai tr\xf2"),t.C$Y(),t.I0R(9,"nz-form-control")(10,"input",7),t.iHE("ngModelChange",function(o){return t.kNx(i.searchParam.rolename,o)||(i.searchParam.rolename=o),o}),t.C$Y()()()(),t.I0R(11,"div",5)(12,"nz-form-item")(13,"nz-form-label",6),t.OEk(14,"Input Number"),t.C$Y(),t.I0R(15,"nz-form-control"),t.yuY(16,J,2,1,"ng-container",8)(17,V,1,1,"ng-template",null,9,t.gJz),t.C$Y()()(),t.I0R(19,"div",10)(20,"button",11),t.qCj("click",function(){return i.getDataList()}),t.wR5(21,"i",12),t.OEk(22," T\xecm ki\u1ebfm "),t.C$Y(),t.I0R(23,"button",13),t.qCj("click",function(){return i.resetForm()}),t.wR5(24,"i",14),t.OEk(25," C\xe0i l\u1ea1i "),t.C$Y()()()()(),t.I0R(26,"app-card-table-wrap",15),t.qCj("reload",function(){return i.reloadTable()}),t.I0R(27,"app-ant-table",16),t.qCj("changePageNum",function(o){return i.getDataList(o)})("changePageSize",function(o){return i.changePageSize(o)}),t.C$Y(),t.yuY(28,tt,3,3,"ng-template",null,17,t.gJz),t.C$Y()(),t.yuY(30,nt,1,1,"ng-template",null,18,t.gJz)),2&a){const r=t.Gew(18),o=t.Gew(31);t.E7m("pageHeaderInfo",i.pageHeaderInfo),t.yG2(2),t.E7m("nzBodyStyle",t.q4q(29,it)),t.yG2(2),t.E7m("nzGutter",t.q4q(30,at)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",i.searchParam.rolename),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.E7m("ngIf",1==i.flg)("ngIfElse",r),t.yG2(3),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(),t.E7m("nzType","primary"),t.yG2(6),t.E7m("btnTpl",o)("tableTitle","Danh s\xe1ch vai tr\xf2"),t.yG2(),t.E7m("tableConfig",i.tableConfig)("tableData",i.dataList)}},dependencies:[M.Q,z.iq,z.Q9,l.y,l.sz,l.ot,l.ue,l.u,l._G,l.SC,g.WO,_.QD,_.ox,g.BN,g.qU,g.Qo,g.YZ,_.Ko,d.OA,d.cv,y.EV,y.Ez,S.k,b.o9,b.gn,R.Wy,R.If,P.E,v.Q,$.s,U,K,p.u_],encapsulation:2,changeDetection:0})}return n})();var rt=s(6020),st=s(4504),lt=s(8332),ct=s(7823),T=s(4984),G=s(9640),k=s(280),A=s(8288);function ut(n,c){1&n&&t.OEk(0,"Quay l\u1ea1i")}function mt(n,c){if(1&n){const e=t.KQA();t.I0R(0,"span",13),t.qCj("click",function(){t.usT(e);const i=t.GaO().$implicit;return t.CGJ(i.isOpen=!i.isOpen)}),t.wR5(1,"i",14),t.I0R(2,"span",15),t.OEk(3),t.C$Y()()}if(2&n){const e=t.GaO().$implicit;t.yG2(),t.E7m("nzType",e.isOpen?"down":"right"),t.yG2(2),t.cNF(e.isOpen?"\u1ea8n":"M\u1edf r\u1ed9ng")}}function pt(n,c){1&n&&t.C_f(0)}function gt(n,c){if(1&n){const e=t.KQA();t.I0R(0,"span",13),t.qCj("click",function(){t.usT(e);const i=t.GaO(2).$implicit;return t.CGJ(i.isOpen=!i.isOpen)}),t.wR5(1,"i",14),t.I0R(2,"span",15),t.OEk(3),t.C$Y()()}if(2&n){const e=t.GaO(2).$implicit;t.yG2(),t.E7m("nzType",e.isOpen?"down":"right"),t.yG2(2),t.cNF(e.isOpen?"\u1ea8n":"M\u1ee1 r\u1ed9ng")}}const ht=n=>({paddingLeft:n});function dt(n,c){if(1&n){const e=t.KQA();t.SAx(0),t.I0R(1,"div",19)(2,"label",7),t.iHE("ngModelChange",function(i){t.usT(e);const r=t.GaO().$implicit;return t.kNx(r.checked,i)||(r.checked=i),t.CGJ(i)}),t.OEk(3),t.C$Y(),t.yuY(4,gt,4,2,"span",8),t.C$Y(),t.k70()}if(2&n){const e=t.GaO().$implicit;t.yG2(),t.E7m("ngStyle",t.S45(4,ht,16*e.level+"px")),t.yG2(),t.OKB("ngModel",e.checked),t.yG2(),t.cNF(e.menuName),t.yG2(),t.E7m("ngIf",e.children&&e.children.length>0)}}function _t(n,c){if(1&n){const e=t.KQA();t.I0R(0,"label",7),t.iHE("ngModelChange",function(i){const o=t.usT(e).$implicit;return t.kNx(o.checked,i)||(o.checked=i),t.CGJ(i)}),t.OEk(1),t.C$Y()}if(2&n){const e=c.$implicit;t.OKB("ngModel",e.checked),t.yG2(),t.cNF(e.menuName)}}function ft(n,c){if(1&n&&(t.SAx(0),t.I0R(1,"div",20)(2,"span"),t.OEk(3,"Quy\u1ec1n ho\u1ea1t \u0111\u1ed9ng\uff1a"),t.C$Y(),t.yuY(4,_t,2,2,"label",21),t.wR5(5,"nz-divider",9),t.C$Y(),t.k70()),2&n){const e=t.GaO(4).$implicit;t.yG2(4),t.E7m("ngForOf",e)}}function Ct(n,c){if(1&n&&t.yuY(0,ft,6,1,"ng-container",16),2&n){const e=t.GaO().first;t.E7m("ngIf",e)}}function yt(n,c){1&n&&t.C_f(0)}const D=(n,c)=>({$implicit:n,isOpen:c});function zt(n,c){if(1&n&&(t.SAx(0),t.yuY(1,dt,5,6,"ng-container",17)(2,Ct,1,1,"ng-template",null,18,t.gJz)(4,yt,1,0,"ng-container",11),t.k70()),2&n){const e=c.$implicit,a=t.Gew(3);t.GaO(3);const i=t.Gew(9);t.yG2(),t.E7m("ngIf","C"===e.menuType)("ngIfElse",a),t.yG2(3),t.E7m("ngTemplateOutlet",i)("ngTemplateOutletContext",t.IBC(4,D,e.children,e.isOpen))}}function bt(n,c){if(1&n&&(t.SAx(0),t.yuY(1,zt,5,7,"ng-container",3),t.k70()),2&n){const e=t.GaO().$implicit;t.yG2(),t.E7m("ngForOf",e)}}function Rt(n,c){1&n&&t.yuY(0,bt,2,1,"ng-container",16),2&n&&t.E7m("ngIf",c.isOpen)}function vt(n,c){if(1&n){const e=t.KQA();t.I0R(0,"li")(1,"div",6)(2,"label",7),t.iHE("ngModelChange",function(i){const o=t.usT(e).$implicit;return t.kNx(o.checked,i)||(o.checked=i),t.CGJ(i)}),t.OEk(3),t.C$Y(),t.yuY(4,mt,4,2,"span",8),t.C$Y(),t.wR5(5,"nz-divider",9),t.I0R(6,"div",10),t.yuY(7,pt,1,0,"ng-container",11),t.C$Y(),t.yuY(8,Rt,1,1,"ng-template",null,12,t.gJz),t.C$Y()}if(2&n){const e=c.$implicit,a=t.Gew(9);t.yG2(2),t.OKB("ngModel",e.checked),t.yG2(),t.cNF(e.menuName),t.yG2(),t.E7m("ngIf",e.children&&e.children.length>0),t.yG2(3),t.E7m("ngTemplateOutlet",a)("ngTemplateOutletContext",t.IBC(5,D,e.children,e.isOpen))}}const Et=[{path:"",component:ot,data:{title:"Qu\u1ea3n l\xfd vai tr\xf2",key:"role-manage"}},{path:"set-role",component:(()=>{class n{constructor(){this.dataService=(0,t.uUt)(m.q),this.cdr=(0,t.uUt)(t.kD9),this.menusService=(0,t.uUt)(lt.O),this.router=(0,t.uUt)(h.E5),this.message=(0,t.uUt)(O.yo),this.userService=(0,t.uUt)(st.u),this.pageHeaderInfo={title:"Thi\u1ebft l\u1eadp quy\u1ec1n",desc:"Vai tr\xf2 hi\u1ec7n t\u1ea1i\uff1a",breadcrumb:["Home","Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng","Qu\u1ea3n l\xfd vai tr\xf2","Thi\u1ebft l\u1eadp quy\u1ec1n"]},this.authCodeArr=[],this.permissionList=[],this.destroyRef=(0,t.uUt)(t.eM9)}initPermission(){this.dataService.getPermissionById(this.id).pipe((0,rt.m)(e=>(this.authCodeArr=e,this.menusService.getMenuList({pageNum:0,pageSize:0}))),(0,u.ay)(this.destroyRef)).subscribe(e=>{const a=e.list;a.forEach(i=>{i.isOpen=!1,i.checked=this.authCodeArr.includes(i.code)}),this.permissionList=(0,T.oZ)((0,T.ot)(a)),this.cdr.markForCheck()})}getRoleName(){this.userId>0&&this.dataService.getRolesDetail(this.userId).pipe((0,u.ay)(this.destroyRef)).subscribe(({rolename:e})=>{this.pageHeaderInfo={...this.pageHeaderInfo,desc:`Vai tr\xf2 hi\u1ec7n t\u1ea1i: ${e}`},this.cdr.markForCheck()})}back(){this.router.navigateByUrl("/default/system/role-manager")}submit(){const e=[...this.permissionList],a=(0,T.q0)(e),i=[];a.forEach(o=>{o.checked&&i.push(`${o.id}`)}),this.dataService.updatePermission({permissionIds:i,roleId:this.id}).pipe((0,u.ay)(this.destroyRef)).subscribe(()=>{this.message.success("C\xe0i \u0111\u1eb7t th\xe0nh c\xf4ng, v\xe0 n\xf3 s\u1ebd c\xf3 hi\u1ec7u l\u1ef1c sau khi \u0111\u0103ng nh\u1eadp l\u1ea1i")})}_onReuseInit(){this.ngOnInit()}ngOnInit(){this.userService.getUserInfo().subscribe(e=>{this.userId=e.userId}),this.getRoleName(),this.initPermission()}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-set-role"]],inputs:{id:"id"},standalone:!0,features:[t.UHJ],decls:12,vars:4,consts:[[3,"backTpl","backUrl","pageHeaderInfo"],["backTpl",""],[1,"normal-table-wrap"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary",1,"right",3,"click"],["nz-button","","nzGhost","","nzType","primary",1,"right","m-l-20",3,"click"],[1,"first-menu"],["nz-checkbox","",3,"ngModel","ngModelChange"],["class","hand-model",3,"click",4,"ngIf"],[1,"m-0"],["nz-result-content","",1,"m-0","p-0"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["permissionTpl",""],[1,"hand-model",3,"click"],["nz-icon","","nzTheme","outline",3,"nzType"],[1,"operate-text"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["operateTpl",""],[1,"first-menu",3,"ngStyle"],[1,"operate-line","li-height","m-0","p-0","p-l-35"],["nz-checkbox","",3,"ngModel","ngModelChange",4,"ngFor","ngForOf"]],template:function(a,i){if(1&a&&(t.wR5(0,"app-page-header",0),t.yuY(1,ut,1,0,"ng-template",null,1,t.gJz),t.I0R(3,"div",2)(4,"nz-card")(5,"ul"),t.yuY(6,vt,10,8,"li",3),t.C$Y()()(),t.I0R(7,"app-footer-submit")(8,"button",4),t.qCj("click",function(){return i.submit()}),t.OEk(9,"Thi\u1ebft l\u1eadp"),t.C$Y(),t.I0R(10,"button",5),t.qCj("click",function(){return i.back()}),t.OEk(11,"Quay l\u1ea1i"),t.C$Y()()),2&a){const r=t.Gew(2);t.E7m("backTpl",r)("backUrl","/default/system/role-manager")("pageHeaderInfo",i.pageHeaderInfo),t.yG2(6),t.E7m("ngForOf",i.permissionList)}},dependencies:[M.Q,z.iq,z.Q9,p.Iw,G.UN,G.Ep,l.y,l.ue,l._G,p.u_,R.Wy,R.If,y.EV,y.Ez,S.k,b.o9,k.o,k.M,A.k3,A.oZ,p.XV,p.Qt,ct.k,b.gn],styles:[".li-height{height:40px;line-height:40px}.first-menu{display:flex;align-items:center;justify-content:space-between;height:40px;line-height:40px}.ant-card-body{display:block!important}\n"],encapsulation:2,changeDetection:0})}return n})(),data:{title:"Qu\u1ea3n l\xfd vai tr\xf2",key:"set-role",authCode:f.i.RoleManagerSetRole}}]}}]);