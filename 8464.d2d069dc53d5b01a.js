"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[8464],{8464:(Ae,M,l)=>{l.r(M),l.d(M,{default:()=>Me});var A=l(2195),e=l(2223),m=l(5855),s=l(9401),Q=l(8746),D=l(5529),g=l(8397),u=l(4755);class O{}let L=(()=>{class t{constructor(n,o){this.cdr=n,this.decimalPipe=o,this.changeNumber=new e.vpe}set Number(n){this._number=this.decimalPipe.transform(n,"1.0-0")}get Number(){return this.inputChangeDectction(),this._number}ngOnInit(){}inputChangeDectction(){this.cdr.markForCheck()}onQueryParamsChange(n){this.changeNumber.emit(n.target.value.replace(/[^0-9.]+/g,""))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO),e.Y36(u.JJ))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-input-number"]],inputs:{Number:"Number"},outputs:{changeNumber:"changeNumber"},standalone:!0,features:[e._Bn([{provide:O,useExisting:t}]),e.jDz],decls:1,vars:1,consts:[["nz-input","","type","text","autocomplete","off","appInputNumber","","maxDigits","9",1,"form-control",3,"ngModel","ngModelChange","blur"]],template:function(n,o){1&n&&(e.TgZ(0,"input",0),e.NdJ("ngModelChange",function(r){return o._number=r})("blur",function(r){return o.onQueryParamsChange(r)}),e.qZA()),2&n&&e.Q6J("ngModel",o._number)},dependencies:[g.o7,g.Zp,s.u5,s.Fj,s.JJ,s.On],changeDetection:0}),t})();var k=l(4178),y=l(4895),Y=l(5656),h=l(4259),f=l(3642),C=l(4247),p=l(4701),_=l(1929),b=l(2701);class U{}let P=(()=>{class t{set Amount(n){this._amount=this.currencyPipe.transform(1e3*n,"VND")}get Amount(){return this.inputChangeDectction(),this._amount}set Disable(n){this._disable=n}get Disable(){return this._disable}inputChangeDectction(){this.cdr.markForCheck()}constructor(n,o){this.cdr=n,this.currencyPipe=o,this._disable=!1,this.changeAmount=new e.vpe}ngOnInit(){}onQueryParamsChange(n){this.changeAmount.emit(n.target.value.replace(/[^0-9.]+/g,"")/1e3)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO),e.Y36(u.H9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-input-currency"]],inputs:{Amount:"Amount",Disable:"Disable"},outputs:{changeAmount:"changeAmount"},standalone:!0,features:[e._Bn([{provide:U,useExisting:t}]),e.jDz],decls:1,vars:2,consts:[["nz-input","","type","text","autocomplete","off","appInputCurrency","","maxDigits","9",1,"form-control",3,"disabled","ngModel","ngModelChange","blur"]],template:function(n,o){1&n&&(e.TgZ(0,"input",0),e.NdJ("ngModelChange",function(r){return o._amount=r})("blur",function(r){return o.onQueryParamsChange(r)}),e.qZA()),2&n&&e.Q6J("disabled",o._disable)("ngModel",o._amount)},dependencies:[g.o7,g.Zp,s.u5,s.Fj,s.JJ,s.On],changeDetection:0}),t})();var R=l(3621),N=l(8551),X=l(3715),z=l(9646),H=l(4902);let B=(()=>{class t{constructor(n,o){this.modalRef=n,this.fb=o,this.params={}}initForm(){this.addEditForm=this.fb.group({rolename:[null,[s.kI.required]],mota:[null]})}getAsyncFnData(n){return(0,z.of)(n)}getCurrentValue(){return(0,H.r7)(this.addEditForm)?(0,z.of)(this.addEditForm.value):(0,z.of)(!1)}ngOnInit(){this.initForm(),Object.keys(this.params).length>0&&this.addEditForm.patchValue(this.params)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(N.Lf),e.Y36(s.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-role-manage-modal"]],standalone:!0,features:[e.jDz],decls:11,vars:9,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","rolename",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean nh\xe2n v\u1eadt",3,"nzSm","nzXs"],["nz-input","","formControlName","rolename","name","rolename","placeholder","Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2","id","rolename"],["nzFor","mota",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","mota","name","mota","placeholder","Vui l\xf2ng nh\u1eadp m\xf4 t\u1ea3","id","mota"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),e._uU(3,"T\xean vai tr\xf2"),e.qZA(),e.TgZ(4,"nz-form-control",2),e._UZ(5,"input",3),e.qZA()(),e.TgZ(6,"nz-form-item")(7,"nz-form-label",4),e._uU(8,"M\xf4 t\u1ea3"),e.qZA(),e.TgZ(9,"nz-form-control",5),e._UZ(10,"input",6),e.qZA()()()),2&n&&(e.Q6J("formGroup",o.addEditForm),e.xp6(2),e.Q6J("nzSm",4)("nzXs",24),e.xp6(2),e.Q6J("nzSm",18)("nzXs",24),e.xp6(3),e.Q6J("nzSm",4)("nzXs",24),e.xp6(2),e.Q6J("nzSm",18)("nzXs",24))},dependencies:[s.u5,s._Y,s.Fj,s.JJ,s.JL,p.U5,_.t3,_.SK,p.Lr,p.Nx,p.iK,p.Fd,s.UX,s.sg,s.u,_.Jb,g.o7,g.Zp],encapsulation:2,changeDetection:0}),t})();var G=l(7017);let w=(()=>{class t{constructor(n){this.modalWrapService=n}getContentComponent(){return B}show(n={},o){return this.modalWrapService.show(this.getContentComponent(),n,o)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(G.U))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=l(9085),S=l(3272),Z=l(2242);const K=["operationTpl"];function $(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"app-input-currency",19),e.NdJ("changeAmount",function(a){e.CHM(n);const r=e.oxw();return e.KtG(r.changeAmount(a))}),e.qZA(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("Amount",n.amountMode)}}function q(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"app-input-number",20),e.NdJ("changeNumber",function(a){e.CHM(n);const r=e.oxw();return e.KtG(r.changeNumber(a))}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("Number",n.numberMode)}}function V(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"span",22),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().id,r=e.oxw();return e.KtG(r.setRole(a))}),e._uU(1,"\u0110\u1eb7c quy\u1ec1n"),e.qZA()}}function j(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"span",22),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().id,r=e.oxw();return e.KtG(r.edit(a))}),e._uU(1,"C\u1eadp nh\u1eadt"),e.qZA()}}function W(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"span",22),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().id,r=e.oxw();return e.KtG(r.del(a))}),e._uU(1,"X\xf3a"),e.qZA()}}function ee(t,i){if(1&t&&(e.YNc(0,V,2,0,"span",21),e.YNc(1,j,2,0,"span",21),e.YNc(2,W,2,0,"span",21)),2&t){const n=e.oxw();e.Q6J("appAuth",n.ActionCode.RoleManagerSetRole),e.xp6(1),e.Q6J("appAuth",n.ActionCode.RoleManagerEdit),e.xp6(1),e.Q6J("appAuth",n.ActionCode.RoleManagerDel)}}function ne(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return e.KtG(a.add())}),e._UZ(1,"i",25),e._uU(2," Th\xeam m\u1edbi "),e.qZA()}}function te(t,i){if(1&t&&e.YNc(0,ne,3,0,"button",23),2&t){const n=e.oxw();e.Q6J("appAuth",n.ActionCode.RoleManagerAdd)}}const oe=function(){return{"padding-bottom":0}},ae=function(){return{xs:8,sm:16,md:24}};let ie=(()=>{class t{constructor(n,o,a,r,c,d,v){this.dataService=n,this.modalSrv=o,this.cdr=a,this.messageService=r,this.modalService=c,this.router=d,this.message=v,this.searchParam={},this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd vai tr\xf2",breadcrumb:["Home","Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng","Qu\u1ea3n l\xfd vai tr\xf2"]},this.dataList=[],this.checkedCashArray=[],this.ActionCode=A.h,this.destroyRef=(0,e.f3M)(e.ktI),this.flg=!0,this.numberMode=1e3,this.amountMode=1e3}changeNumber(n){this.numberMode=n}changeAmount(n){this.amountMode=n}selectedChecked(n){this.checkedCashArray=[...n]}resetForm(){this.searchParam={},this.getDataList()}getDataList(n){this.tableConfig.loading=!0,this.dataService.getRoles({pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,Q.x)(()=>{this.tableLoading(!1)}),(0,m.sL)(this.destroyRef)).subscribe(a=>{const{list:r,total:c,pageNum:d}=a;this.dataList=[...r],this.tableConfig.total=c,this.tableConfig.pageIndex=d,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}setRole(n){this.router.navigate(["/default/system/role-manager/set-role"],{queryParams:{id:n}})}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}add(){this.modalService.show({nzTitle:"Th\xeam m\u1edbi"}).pipe((0,m.sL)(this.destroyRef)).subscribe(n=>{if(!n||0===n.status)return;const o={...n.modalValue};this.tableLoading(!0),this.addEditData(o,"addRoles")},n=>this.tableLoading(!1))}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}edit(n){this.dataService.getRolesDetail(n).pipe((0,m.sL)(this.destroyRef)).subscribe(o=>{this.modalService.show({nzTitle:"C\u1eadp nh\u1eadt"},o).pipe((0,m.sL)(this.destroyRef)).subscribe(({modalValue:a,status:r})=>{0!==r&&(a.id=n,this.tableLoading(!0),this.addEditData(a,"editRoles"))},a=>this.tableLoading(!1))})}addEditData(n,o){this.dataService[o](n).pipe((0,m.sL)(this.destroyRef)).subscribe(()=>{this.getDataList()})}del(n){const o=[n];this.modalSrv.confirm({nzTitle:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng\uff1f",nzContent:"Kh\xf4ng kh\xf4i ph\u1ee5c \u0111\u01b0\u1ee3c khi d\u1eef li\u1ec7u b\u1ecb x\xf3a !",nzOnOk:()=>{this.tableLoading(!0),this.dataService.delRoles(o).pipe((0,m.sL)(this.destroyRef)).subscribe(()=>{1===this.dataList.length&&this.tableConfig.pageIndex--,this.getDataList()},a=>this.tableLoading(!1))}})}changePageSize(n){this.tableConfig.pageSize=n}ngOnInit(){this.initTable()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"T\xean vai tr\xf2",field:"rolename",width:100},{title:"M\xf4 t\u1ea3",width:400,field:"mota"},{title:"V\u1eadn h\xe0nh",tdTemplate:this.operationTpl,width:280,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(R.N),e.Y36(N.Sf),e.Y36(e.sBO),e.Y36(X.e),e.Y36(w),e.Y36(T.F0),e.Y36(S.dD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-role-manage"]],viewQuery:function(n,o){if(1&n&&e.Gf(K,7),2&n){let a;e.iGM(a=e.CRH())&&(o.operationTpl=a.first)}},standalone:!0,features:[e._Bn([u.JJ,u.H9]),e.jDz],decls:32,vars:31,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],["name","rolename","nz-input","","placeholder","Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["numberTpl",""],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzTheme","outline","nzType","close-circle"],[3,"btnTpl","tableTitle","reload"],[3,"tableConfig","tableData","changePageNum","changePageSize"],["operationTpl",""],["tableBtns",""],[3,"Amount","changeAmount"],[3,"Number","changeNumber"],["class","operate-text",3,"click",4,"appAuth"],[1,"operate-text",3,"click"],["class","m-r-8","nz-button","","nzType","primary",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"]],template:function(n,o){if(1&n&&(e._UZ(0,"app-page-header",0),e.TgZ(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),e._uU(8,"T\xean vai tr\xf2"),e.qZA(),e.TgZ(9,"nz-form-control")(10,"input",7),e.NdJ("ngModelChange",function(r){return o.searchParam.rolename=r}),e.qZA()()()(),e.TgZ(11,"div",5)(12,"nz-form-item")(13,"nz-form-label",6),e._uU(14,"Input Number"),e.qZA(),e.TgZ(15,"nz-form-control"),e.YNc(16,$,2,1,"ng-container",8),e.YNc(17,q,1,1,"ng-template",null,9,e.W1O),e.qZA()()(),e.TgZ(19,"div",10)(20,"button",11),e.NdJ("click",function(){return o.getDataList()}),e._UZ(21,"i",12),e._uU(22," T\xecm ki\u1ebfm "),e.qZA(),e.TgZ(23,"button",13),e.NdJ("click",function(){return o.resetForm()}),e._UZ(24,"i",14),e._uU(25," C\xe0i l\u1ea1i "),e.qZA()()()()(),e.TgZ(26,"app-card-table-wrap",15),e.NdJ("reload",function(){return o.reloadTable()}),e.TgZ(27,"app-ant-table",16),e.NdJ("changePageNum",function(r){return o.getDataList(r)})("changePageSize",function(r){return o.changePageSize(r)}),e.qZA(),e.YNc(28,ee,3,3,"ng-template",null,17,e.W1O),e.qZA()(),e.YNc(30,te,1,1,"ng-template",null,18,e.W1O)),2&n){const a=e.MAs(18),r=e.MAs(31);e.Q6J("pageHeaderInfo",o.pageHeaderInfo),e.xp6(2),e.Q6J("nzBodyStyle",e.DdM(29,oe)),e.xp6(2),e.Q6J("nzGutter",e.DdM(30,ae)),e.xp6(1),e.Q6J("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),e.xp6(5),e.Q6J("ngModel",o.searchParam.rolename),e.xp6(1),e.Q6J("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),e.xp6(5),e.Q6J("ngIf",1==o.flg)("ngIfElse",a),e.xp6(3),e.Q6J("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),e.xp6(1),e.Q6J("nzType","primary"),e.xp6(6),e.Q6J("btnTpl",r)("tableTitle","Danh s\xe1ch vai tr\xf2"),e.xp6(1),e.Q6J("tableConfig",o.tableConfig)("tableData",o.dataList)}},dependencies:[y.q,f.vh,f.bd,s.u5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,p.U5,_.t3,_.SK,p.Lr,p.Nx,p.iK,p.Fd,_.Jb,g.o7,g.Zp,h.sL,h.ix,Z.w,C.dQ,C.vG,b.PV,b.Ls,k.p,D.q,Y.x,L,P,u.O5],encapsulation:2,changeDetection:0}),t})();var re=l(4351),le=l(2017),x=l(8442),J=l(6243),F=l(4839),I=l(7908),se=l(6706),ce=l(4471);function pe(t,i){1&t&&e._uU(0,"Quay l\u1ea1i")}function me(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"span",13),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().$implicit;return e.KtG(a.isOpen=!a.isOpen)}),e._UZ(1,"i",14),e.TgZ(2,"span",15),e._uU(3),e.qZA()()}if(2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("nzType",n.isOpen?"down":"right"),e.xp6(2),e.Oqu(n.isOpen?"\u1ea8n":"M\u1edf r\u1ed9ng")}}function ue(t,i){1&t&&e.GkF(0)}function ge(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"span",13),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2).$implicit;return e.KtG(a.isOpen=!a.isOpen)}),e._UZ(1,"i",14),e.TgZ(2,"span",15),e._uU(3),e.qZA()()}if(2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.Q6J("nzType",n.isOpen?"down":"right"),e.xp6(2),e.Oqu(n.isOpen?"\u1ea8n":"M\u1ee1 r\u1ed9ng")}}const _e=function(t){return{paddingLeft:t}};function de(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",19)(2,"label",7),e.NdJ("ngModelChange",function(a){e.CHM(n);const r=e.oxw().$implicit;return e.KtG(r.checked=a)}),e._uU(3),e.qZA(),e.YNc(4,ge,4,2,"span",8),e.qZA(),e.BQk()}if(2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngStyle",e.VKq(4,_e,16*n.level+"px")),e.xp6(1),e.Q6J("ngModel",n.checked),e.xp6(1),e.Oqu(n.menuName),e.xp6(1),e.Q6J("ngIf",n.children&&n.children.length>0)}}function he(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"label",7),e.NdJ("ngModelChange",function(a){const c=e.CHM(n).$implicit;return e.KtG(c.checked=a)}),e._uU(1),e.qZA()}if(2&t){const n=i.$implicit;e.Q6J("ngModel",n.checked),e.xp6(1),e.Oqu(n.menuName)}}function fe(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",20)(2,"span"),e._uU(3,"Quy\u1ec1n ho\u1ea1t \u0111\u1ed9ng\uff1a"),e.qZA(),e.YNc(4,he,2,2,"label",21),e._UZ(5,"nz-divider",9),e.qZA(),e.BQk()),2&t){const n=e.oxw(4).$implicit;e.xp6(4),e.Q6J("ngForOf",n)}}function Ce(t,i){if(1&t&&e.YNc(0,fe,6,1,"ng-container",16),2&t){const n=e.oxw().first;e.Q6J("ngIf",n)}}function be(t,i){1&t&&e.GkF(0)}const E=function(t,i){return{$implicit:t,isOpen:i}};function ze(t,i){if(1&t&&(e.ynx(0),e.YNc(1,de,5,6,"ng-container",17),e.YNc(2,Ce,1,1,"ng-template",null,18,e.W1O),e.YNc(4,be,1,0,"ng-container",11),e.BQk()),2&t){const n=i.$implicit,o=e.MAs(3);e.oxw(3);const a=e.MAs(9);e.xp6(1),e.Q6J("ngIf","C"===n.menuType)("ngIfElse",o),e.xp6(3),e.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",e.WLB(4,E,n.children,n.isOpen))}}function Te(t,i){if(1&t&&(e.ynx(0),e.YNc(1,ze,5,7,"ng-container",3),e.BQk()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",n)}}function xe(t,i){1&t&&e.YNc(0,Te,2,1,"ng-container",16),2&t&&e.Q6J("ngIf",i.isOpen)}function ve(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"li")(1,"div",6)(2,"label",7),e.NdJ("ngModelChange",function(a){const c=e.CHM(n).$implicit;return e.KtG(c.checked=a)}),e._uU(3),e.qZA(),e.YNc(4,me,4,2,"span",8),e.qZA(),e._UZ(5,"nz-divider",9),e.TgZ(6,"div",10),e.YNc(7,ue,1,0,"ng-container",11),e.qZA(),e.YNc(8,xe,1,1,"ng-template",null,12,e.W1O),e.qZA()}if(2&t){const n=i.$implicit,o=e.MAs(9);e.xp6(2),e.Q6J("ngModel",n.checked),e.xp6(1),e.Oqu(n.menuName),e.xp6(1),e.Q6J("ngIf",n.children&&n.children.length>0),e.xp6(3),e.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",e.WLB(5,E,n.children,n.isOpen))}}const Me=[{path:"",component:ie,data:{title:"Qu\u1ea3n l\xfd vai tr\xf2",key:"role-manage"}},{path:"set-role",component:(()=>{class t{constructor(n,o,a,r,c,d,v){this.dataService=n,this.cdr=o,this.menusService=a,this.routeInfo=r,this.router=c,this.message=d,this.userService=v,this.pageHeaderInfo={title:"Thi\u1ebft l\u1eadp quy\u1ec1n",desc:"Vai tr\xf2 hi\u1ec7n t\u1ea1i\uff1a",breadcrumb:["Home","Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng","Qu\u1ea3n l\xfd vai tr\xf2","Thi\u1ebft l\u1eadp quy\u1ec1n"]},this.authCodeArr=[],this.permissionList=[],this.destroyRef=(0,e.f3M)(e.ktI)}initPermission(){this.dataService.getPermissionById(this.id).pipe((0,re.b)(n=>(this.authCodeArr=n,this.menusService.getMenuList({pageNum:0,pageSize:0}))),(0,m.sL)(this.destroyRef)).subscribe(n=>{const o=n.list;o.forEach(a=>{a.isOpen=!1,a.checked=this.authCodeArr.includes(a.code)}),this.permissionList=(0,x.i5)((0,x.RA)(o)),this.cdr.markForCheck()})}getRoleName(){""!=this.userId&&this.dataService.getRolesDetail(this.userId).pipe((0,m.sL)(this.destroyRef)).subscribe(({rolename:n})=>{this.pageHeaderInfo={...this.pageHeaderInfo,desc:`Vai tr\xf2 hi\u1ec7n t\u1ea1i: ${n}`},this.cdr.markForCheck()})}back(){this.router.navigateByUrl("/default/system/role-manager")}submit(){const n=[...this.permissionList],o=(0,x.Ll)(n),a=[];o.forEach(c=>{c.checked&&a.push(`${c.id}`)}),this.dataService.updatePermission({permissionIds:a,roleId:this.id}).pipe((0,m.sL)(this.destroyRef)).subscribe(()=>{this.message.success("C\xe0i \u0111\u1eb7t th\xe0nh c\xf4ng, v\xe0 n\xf3 s\u1ebd c\xf3 hi\u1ec7u l\u1ef1c sau khi \u0111\u0103ng nh\u1eadp l\u1ea1i")})}_onReuseInit(){this.ngOnInit()}ngOnInit(){this.userService.getUserInfo().subscribe(n=>{this.userId=n.userId}),this.getRoleName(),this.initPermission()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(R.N),e.Y36(e.sBO),e.Y36(se.O),e.Y36(T.gz),e.Y36(T.F0),e.Y36(S.dD),e.Y36(ce.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-set-role"]],inputs:{id:"id"},standalone:!0,features:[e.jDz],decls:12,vars:4,consts:[[3,"backTpl","backUrl","pageHeaderInfo"],["backTpl",""],[1,"normal-table-wrap"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary",1,"right",3,"click"],["nz-button","","nzGhost","","nzType","primary",1,"right","m-l-20",3,"click"],[1,"first-menu"],["nz-checkbox","",3,"ngModel","ngModelChange"],["class","hand-model",3,"click",4,"ngIf"],[1,"m-0"],["nz-result-content","",1,"m-0","p-0"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["permissionTpl",""],[1,"hand-model",3,"click"],["nz-icon","","nzTheme","outline",3,"nzType"],[1,"operate-text"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["operateTpl",""],[1,"first-menu",3,"ngStyle"],[1,"operate-line","li-height","m-0","p-0","p-l-35"],["nz-checkbox","",3,"ngModel","ngModelChange",4,"ngFor","ngForOf"]],template:function(n,o){if(1&n&&(e._UZ(0,"app-page-header",0),e.YNc(1,pe,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"div",2)(4,"nz-card")(5,"ul"),e.YNc(6,ve,10,8,"li",3),e.qZA()()(),e.TgZ(7,"app-footer-submit")(8,"button",4),e.NdJ("click",function(){return o.submit()}),e._uU(9,"Thi\u1ebft l\u1eadp"),e.qZA(),e.TgZ(10,"button",5),e.NdJ("click",function(){return o.back()}),e._uU(11,"Quay l\u1ea1i"),e.qZA()()),2&n){const a=e.MAs(2);e.Q6J("backTpl",a)("backUrl","/default/system/role-manager")("pageHeaderInfo",o.pageHeaderInfo),e.xp6(6),e.Q6J("ngForOf",o.permissionList)}},dependencies:[y.q,f.vh,f.bd,u.ax,J.Wr,J.Ie,s.u5,s.JJ,s.On,u.O5,b.PV,b.Ls,h.sL,h.ix,Z.w,C.dQ,F.S,F.g,I.XD,I.HO,u.tP,u.PC,le.J,C.vG],styles:[".li-height{height:40px;line-height:40px}.first-menu{display:flex;align-items:center;justify-content:space-between;height:40px;line-height:40px}.ant-card-body{display:block!important}\n"],encapsulation:2,changeDetection:0}),t})(),data:{title:"Qu\u1ea3n l\xfd vai tr\xf2",key:"set-role",authCode:A.h.RoleManagerSetRole}}]}}]);