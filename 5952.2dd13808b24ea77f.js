"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[5952],{5952:(wt,M,s)=>{s.r(M),s.d(M,{Spin00101Component:()=>Bt});var t=s(4496),k=s(6844),x=s(5072),z=s(5128),c=s(2532),d=s(1752),p=s(6504),_=s(6088),u=s(268),m=s(2605),I=s(1188),g=s(1368),C=s(460),v=s(3652),O=s(472),L=s(9432),A=s(2624),h=s(4872),P=s(7960),f=s(9116),T=s(2700),V=s(8824);let S=(()=>{class o{constructor(){this.products=(0,t.OCB)([])}addProduct(n){const i=this.products().findIndex(e=>e.product.id===n.product.id);if(-1===i){const e=this.products().length+1;Object.assign(n,{SODTLNO:e}),this.products.update(a=>[...a,n])}else this.products.update(e=>[...e.slice(0,i),{...e[i],ARVLPLNQTY:e[i].ARVLPLNQTY+1},...e.slice(i+1)])}removeProduct(n){this.products.update(i=>i.filter(e=>e.product.id!==n.product.id))}refesh(){this.products.set([])}updateListProduct(n){this.products.set(n)}static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275prov=t.wxM({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var D=s(3692),X=s(836),Q=s(8488),E=s(3064),y=s(5584);function B(o,r){if(1&o&&t.wR5(0,"nz-option",10),2&o){const n=r.$implicit;t.E7m("nzLabel",n.QTYNM)("nzValue",n.QTYCD)}}const w=()=>[16,16];function U(o,r){if(1&o){const n=t.KQA();t.I0R(0,"div",0)(1,"div",1),t.OEk(2),t.C$Y(),t.I0R(3,"div",2),t.OEk(4),t.C$Y(),t.I0R(5,"div",3)(6,"nz-input-number",4),t.iHE("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.kNx(a._product().ARVLPLNQTY,e)||(a._product().ARVLPLNQTY=e),t.CGJ(e)}),t.qCj("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.CGJ(a.change(e))}),t.C$Y()(),t.I0R(7,"div",1)(8,"nz-select",5),t.iHE("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.kNx(a._product().QTYCD,e)||(a._product().QTYCD=e),t.CGJ(e)}),t.c53(9,B,1,2,"nz-option",10,t.oxv),t.C$Y()(),t.I0R(11,"div",3)(12,"app-input-currency",6),t.qCj("changeAmount",function(e){t.usT(n);const a=t.GaO();return t.CGJ(a.changeSELLPIRCE(e))}),t.C$Y()(),t.I0R(13,"div",3)(14,"nz-input-number",7),t.iHE("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.kNx(a._product().GUARANTEQTY,e)||(a._product().GUARANTEQTY=e),t.CGJ(e)}),t.qCj("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.CGJ(a.changeGua(e))}),t.C$Y()(),t.I0R(15,"div",2)(16,"input",8),t.iHE("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.kNx(a._product().SIDTLREMARK,e)||(a._product().SIDTLREMARK=e),t.CGJ(e)}),t.C$Y()(),t.I0R(17,"div",3)(18,"button",9),t.qCj("click",function(){t.usT(n);const e=t.GaO();return t.CGJ(e.onRemove())}),t.OEk(19,"Delete"),t.C$Y()()()}if(2&o){const n=t.GaO();t.E7m("nzGutter",t.q4q(14,w)),t.yG2(2),t.oRS(" ",n._product().product.id," "),t.yG2(2),t.oRS(" ",n._product().product.product_name," "),t.yG2(2),t.OKB("ngModel",n._product().ARVLPLNQTY),t.E7m("nzMin",1)("nzMax",1e3)("nzStep",1),t.yG2(2),t.OKB("ngModel",n._product().QTYCD),t.yG2(),t.oho(n.qtycds()),t.yG2(3),t.E7m("Amount",n.SIPRICE()),t.yG2(2),t.OKB("ngModel",n._product().GUARANTEQTY),t.E7m("nzMin",0)("nzMax",100)("nzStep",1),t.yG2(2),t.OKB("ngModel",n._product().SIDTLREMARK)}}let $=(()=>{class o{constructor(){this.destroyRef=(0,t.uUt)(t.eM9),this.productStore=(0,t.uUt)(S),this.tmt140Service=(0,t.uUt)(X.e),this.qtycds=(0,t.OCB)([]),this._product=(0,t.YhN)(this.tin040,{alias:"product",transform:n=>n}),this.SIPRICE=(0,t.S6b)(()=>this._product().SIPRICE/1e3)}changeSELLPIRCE(n){this._product().SIPRICE=1e3*n}ngOnInit(){this.apiGetlistQualities()}apiGetlistQualities(){this.tmt140Service.listQualities().pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{this.qtycds.set(n)})}change(n){}onRemove(){this.productStore.removeProduct(this._product())}changeGua(n){}static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275cmp=t.In1({type:o,selectors:[["app-product-item"]],inputs:{_product:[t.Wk5.SignalBased,"product","_product"]},standalone:!0,features:[t.M5G([g.cf,g.hl]),t.UHJ],decls:1,vars:1,consts:[["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","3"],["nz-col","","nzSpan","5"],["nz-col","","nzSpan","2"],[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],["name","available","nzPlaceHolder","",3,"ngModel","ngModelChange"],[3,"Amount","changeAmount"],["name","GUARANTEQTY",3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],["nz-input","","name","SIDTLREMARK",3,"ngModel","ngModelChange"],["nz-button","","nzType","primary",3,"click"],[3,"nzLabel","nzValue"]],template:function(i,e){1&i&&t.yuY(0,U,20,15,"div",0),2&i&&t.C0Y(0,e._product()?0:-1)},dependencies:[c.Ko,c.QD,c.ox,m.OA,m.cv,u.VL,u.eE,u.Mh,D.uw,D.mG,C.EV,C.Ez,E.k,y.o9,p.y,p.ot,p.ue,p._G,Q.S]})}return o})();function K(o,r){1&o&&t.wR5(0,"app-product-item",4),2&o&&t.E7m("product",r.$implicit)}const J=()=>[16,16];function F(o,r){if(1&o&&(t.I0R(0,"div",0)(1,"div",1),t.OEk(2,"M\xe3 s\u1ea3n ph\u1ea9m"),t.C$Y(),t.I0R(3,"div",2),t.OEk(4,"T\xean s\u1ea3n ph\u1ea9m"),t.C$Y(),t.I0R(5,"div",3),t.OEk(6,"S\u1ed1 l\u01b0\u1ee3ng"),t.C$Y(),t.I0R(7,"div",1),t.OEk(8,"Ch\u1ea5t l\u01b0\u1ee3ng"),t.C$Y(),t.I0R(9,"div",3),t.OEk(10,"Gi\xe1 nh\u1eadp"),t.C$Y(),t.I0R(11,"div",3),t.OEk(12,"B\u1ea3o h\xe0nh"),t.C$Y(),t.I0R(13,"div",2),t.OEk(14,"Ghi ch\xfa"),t.C$Y(),t.I0R(15,"div",3),t.OEk(16,"Delete"),t.C$Y()(),t.c53(17,K,1,1,"app-product-item",4,t.oxv)),2&o){const n=t.GaO();t.E7m("nzGutter",t.q4q(1,J)),t.yG2(17),t.oho(n.products())}}function q(o,r){1&o&&t.OEk(0," No Produts in Product Store\n")}let H=(()=>{class o{constructor(){this.productStore=(0,t.uUt)(S),this.products=this.productStore.products}static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275cmp=t.In1({type:o,selectors:[["app-list-product"]],standalone:!0,features:[t.UHJ],decls:2,vars:1,consts:[["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","3"],["nz-col","","nzSpan","5"],["nz-col","","nzSpan","2"],[3,"product"]],template:function(i,e){1&i&&t.yuY(0,F,19,2)(1,q,1,0),2&i&&t.C0Y(0,e.products().length>0?0:1)},dependencies:[c.Ko,c.QD,c.ox,$]})}return o})();var j=s(4832),W=s(2192);const Z=["operationTpl"];function tt(o,r){1&o&&t.wR5(0,"app-list-product")}function nt(o,r){if(1&o&&t.wR5(0,"nz-option",16),2&o){const n=r.$implicit;t.E7m("nzLabel",n.name)("nzValue",n.id)}}function et(o,r){}const Y=()=>[16,16];function ot(o,r){if(1&o){const n=t.KQA();t.I0R(0,"div",3)(1,"div",4)(2,"nz-form-item")(3,"nz-form-label",5),t.OEk(4,"T\xean s\u1ea3n ph\u1ea9m"),t.C$Y(),t.I0R(5,"nz-form-control")(6,"input",6),t.iHE("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.kNx(a.searchParam().product_name,e)||(a.searchParam().product_name=e),t.CGJ(e)}),t.C$Y()()()(),t.I0R(7,"div",4)(8,"nz-form-item")(9,"nz-form-label",5),t.OEk(10,"Danh m\u1ee5c"),t.C$Y(),t.I0R(11,"nz-form-control")(12,"nz-select",7),t.iHE("ngModelChange",function(e){t.usT(n);const a=t.GaO();return t.kNx(a.searchParam().category_id,e)||(a.searchParam().category_id=e),t.CGJ(e)}),t.c53(13,nt,1,2,"nz-option",16,t.oxv),t.C$Y()()()()(),t.I0R(15,"div",3)(16,"div",8)(17,"button",9),t.qCj("click",function(){t.usT(n);const e=t.GaO();return t.CGJ(e.getDataList())}),t.wR5(18,"i",10),t.OEk(19," T\xecm ki\u1ebfm "),t.C$Y(),t.I0R(20,"button",11),t.qCj("click",function(){t.usT(n);const e=t.GaO();return t.CGJ(e.resetForm())}),t.wR5(21,"i",12),t.OEk(22,"Reset"),t.C$Y()()(),t.I0R(23,"app-card-table-wrap",13)(24,"app-ant-table",14),t.qCj("changePageNum",function(e){t.usT(n);const a=t.GaO();return t.CGJ(a.getDataList(e))}),t.C$Y()(),t.yuY(25,et,0,0,"ng-template",null,15,t.gJz)}if(2&o){const n=t.Gew(26),i=t.GaO();t.E7m("nzGutter",t.q4q(27,Y)),t.yG2(),t.E7m("nzLg",12)("nzMd",24)("nzSm",24)("nzXl",12)("nzXs",24)("nzXXl",12),t.yG2(5),t.OKB("ngModel",i.searchParam().product_name),t.yG2(),t.E7m("nzLg",12)("nzMd",24)("nzSm",24)("nzXl",12)("nzXs",24)("nzXXl",12),t.yG2(5),t.OKB("ngModel",i.searchParam().category_id),t.yG2(),t.oho(i.lstCat()),t.yG2(2),t.E7m("nzGutter",t.q4q(28,Y)),t.yG2(),t.E7m("nzLg",24)("nzMd",24)("nzSm",24)("nzXl",24)("nzXs",24)("nzXXl",24),t.yG2(),t.E7m("nzType","primary"),t.yG2(6),t.E7m("tableTitle","Danh s\xe1ch s\u1ea3n ph\u1ea9m")("btnTpl",n),t.yG2(),t.E7m("tableConfig",i.tableConfig)("tableData",i.dataList())}}const it=o=>({addtocart:o});function at(o,r){if(1&o){const n=t.KQA();t.I0R(0,"span",17)(1,"button",18),t.qCj("click",function(){const a=t.usT(n).id,l=t.GaO();return t.CGJ(l.addCart(a))}),t.wR5(2,"span",19),t.OEk(3," Th\xeam linh ki\u1ec7n "),t.C$Y()()}if(2&o){const n=r.isaddproduct;t.yG2(),t.E7m("ngClass",t.S45(1,it,void 0!==n&&n))}}let st=(()=>{class o{constructor(n){this.modalRef=n,this.destroyRef=(0,t.uUt)(t.eM9),this.cdr=(0,t.uUt)(t.kD9),this.nzModalData=(0,t.uUt)(f.aG),this.message=(0,t.uUt)(L.yo),this.spmt00101Service=(0,t.uUt)(W.w),this.productCategoriesService=(0,t.uUt)(j.I),this.productStoreService=(0,t.uUt)(S),this.dataList=(0,t.OCB)([]),this.checkedCashArray=[],this.ActionCode=O.i,this.ishowCart=(0,t.OCB)(!1),this.searchParam=(0,t.OCB)({}),this.cartCount=(0,t.S6b)(()=>this.productStoreService.products().length),this.lstCat=(0,t.OCB)([])}getAsyncFnData(n){return(0,T.of)(n)}getCurrentValue(){return 0===this.productStoreService.products().length?(this.message.info("V\xf9i l\xf2ng th\xeam linh ki\xean !"),(0,T.of)(!1)):(0,T.of)(this.productStoreService.products())}showcart(n){this.ishowCart.set(!n)}resetForm(){}add(){}addCart(n){let i=this.dataList().find(e=>e.id===n);i?(i.isaddproduct=!0,this.productStoreService.addProduct({QTYCD:"01",SIPLNNO:"",ARVLPLNQTY:1,ARVLPLNREMAINQTY:0,GUARANTEQTY:0,LIMITDATE:null,product:i,SIDTLREMARK:"",SIPRICE:0,SODTLNO:1,PRODUCTGRPCD:""}),setTimeout(()=>{i.isaddproduct=!1},500)):this.message.error("Linh ki\u1ec7n kh\xf4ng c\xf3 trong danh s\xe1ch !")}ngOnInit(){this.initTable(),this.apiProductCategories(),this.searchParam.set({category_id:3})}apiProductCategories(){this.productCategoriesService.category().pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{this.lstCat.set(n)})}getDataList(n){const i={pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||1,filters:this.searchParam()};this.spmt00101Service.findCondition(i).pipe((0,V.U)(()=>{this.tableLoading(!1)}),(0,h.ay)(this.destroyRef)).subscribe(e=>{const{list:a,total:l,pageNum:G}=e;this.dataList.set(a),this.tableConfig.total=l,this.tableConfig.pageIndex=G,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}tableChangeDectction(){this.cdr.detectChanges()}changePageSize(n){this.tableConfig.pageSize=n}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"M\xe3 s\u1ea3n ph\u1ea9m",width:100,field:"id"},{title:"T\xean s\u1ea3n ph\u1ea9m",width:250,field:"product_name"},{title:"C\u1eadp nh\u1eadt",tdTemplate:this.operationTpl,width:150,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}static#t=this.\u0275fac=function(i){return new(i||o)(t.GI1(f.U7))};static#n=this.\u0275cmp=t.In1({type:o,selectors:[["app-product-sub"]],viewQuery:function(i,e){if(1&i&&t.CC$(Z,7),2&i){let a;t.wto(a=t.Gqi())&&(e.operationTpl=a.first)}},standalone:!0,features:[t.UHJ],decls:6,vars:3,consts:[[1,"bst-badge",3,"nzCount"],["nz-icon","","nzTheme","outline",1,"head-example",3,"nzType","click"],["operationTpl",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],["nz-input","","name","product_name","placeholder","search name",3,"ngModel","ngModelChange"],["name","category_id","id","category_id",3,"ngModel","ngModelChange"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"tableTitle","btnTpl"],[3,"tableConfig","tableData","changePageNum"],["tableBtns",""],[3,"nzLabel","nzValue"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"ngClass","click"],["nz-icon","","nzType","plus"]],template:function(i,e){1&i&&(t.yuY(0,tt,1,0,"app-list-product")(1,ot,27,29),t.I0R(2,"nz-badge",0)(3,"span",1),t.qCj("click",function(){return e.showcart(e.ishowCart())}),t.C$Y()(),t.yuY(4,at,4,3,"ng-template",null,2,t.gJz)),2&i&&(t.C0Y(0,e.ishowCart()?0:1),t.yG2(2),t.E7m("nzCount",e.cartCount()),t.yG2(),t.E7m("nzType",e.ishowCart()?"home":"shopping-cart"))},dependencies:[c.Ko,c.QD,c.ox,z.iq,p.y,p.ot,p.ue,p._G,d.WO,d.qU,d.Qo,d.YZ,m.OA,m.cv,u.VL,u.eE,u.Mh,C.EV,C.Ez,E.k,y.o9,_.Wy,_.If,A.E,v.Q,P.M7,P.Er,H,g.QF],styles:[".head-example[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:50%;background:#1f1f1f;display:flex;justify-content:center;align-items:center;vertical-align:middle;font-size:20px;transition:.3s}.head-example[_ngcontent-%COMP%]:hover{background:#177ddc}.bst-badge[_ngcontent-%COMP%]{position:absolute;top:8px;right:70px}.addtocart[_ngcontent-%COMP%]{position:relative;transition:.5s}.addtocart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;right:0;color:#ff0;animation:_ngcontent-%COMP%_fly 2s ease-in-out forwards}@keyframes _ngcontent-%COMP%_fly{0%{opacity:0}10%{opacity:1}90%{transform:translateY(-100px)}to{opacity:0}}"]})}return o})();var rt=s(7340);let lt=(()=>{class o{constructor(){this.modalWrapService=(0,t.uUt)(rt.K)}getContentComponent(){return st}show(n={},i){return this.modalWrapService.show(this.getContentComponent(),n,i)}static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275prov=t.wxM({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ct=s(2300),N=s(7592),pt=s(5196),ut=s(4656),dt=s(872),mt=s(988),ht=s(9276);const Ct=["operationTpl"],gt=["product_nameTpl"],_t=["proidTpl"],zt=["qtycdTpl"],ft=["sipriceTpl"],Tt=["soluongTpl"],St=["thanhtienTpl"];function Et(o,r){if(1&o&&t.wR5(0,"nz-option",28),2&o){const n=r.$implicit;t.E7m("nzLabel",n.DIVNM)("nzValue",n.DIVKBN)}}function yt(o,r){if(1&o){const n=t.KQA();t.I0R(0,"button",29),t.qCj("click",function(){t.usT(n);const e=t.GaO();return t.CGJ(e.resultSupply())}),t.wR5(1,"span",30),t.C$Y()}}function bt(o,r){}function Rt(o,r){1&o&&t.OEk(0),2&o&&t.oRS(" ",r.product.product_name," ")}function Gt(o,r){1&o&&t.OEk(0),2&o&&t.oRS(" ",r.product.id," ")}function Mt(o,r){1&o&&(t.I0R(0,"span"),t.OEk(1,"M\u1edbi"),t.C$Y())}function It(o,r){1&o&&(t.I0R(0,"span"),t.OEk(1,"C\u1ee7"),t.C$Y())}function vt(o,r){1&o&&(t.I0R(0,"span"),t.OEk(1,"Qua s\u1eed d\u1ee5ng"),t.C$Y())}function Ot(o,r){1&o&&(t.I0R(0,"div"),t.OEk(1,"M\u1edbi"),t.C$Y())}function Lt(o,r){if(1&o&&t.yuY(0,Mt,2,0)(1,It,2,0)(2,vt,2,0)(3,Ot,2,0),2&o){let i;t.C0Y(0,"01"===(i=r.QTYCD)?0:"02"===i?1:"03"===i?2:3)}}function At(o,r){1&o&&(t.OEk(0),t.wVc(1,"currency")),2&o&&t.oRS(" ",t.g7$(1,1,r.SIPRICE,"VND")," ")}function Pt(o,r){1&o&&t.OEk(0),2&o&&t.oRS(" ",r.ARVLPLNQTY," ")}function Dt(o,r){1&o&&(t.OEk(0),t.wVc(1,"currency")),2&o&&t.oRS(" ",t.g7$(1,1,r.ARVLPLNQTY*r.SIPRICE,"VND")," ")}function Yt(o,r){if(1&o){const n=t.KQA();t.I0R(0,"button",32),t.qCj("click",function(){t.usT(n);const e=t.GaO(2);return t.CGJ(e.add())}),t.wR5(1,"i",33),t.OEk(2," Th\xeam m\u1edbi "),t.C$Y()}}function Nt(o,r){if(1&o&&t.yuY(0,Yt,3,0,"button",31),2&o){const n=t.GaO();t.E7m("appAuth",n.ActionCode.Spin00101AddEdit)}}function kt(o,r){if(1&o){const n=t.KQA();t.I0R(0,"button",35),t.qCj("click",function(){t.usT(n);const e=t.GaO(2);return t.CGJ(e.btnConfirm())}),t.wR5(1,"i",36),t.OEk(2," X\xe1c nh\u1eadn "),t.C$Y()}if(2&o){const n=t.GaO(2);t.E7m("disabled",!n.showConfirm)}}function xt(o,r){if(1&o&&t.yuY(0,kt,3,1,"button",34),2&o){const n=t.GaO();t.E7m("appAuth",n.ActionCode.Spin00101Confirm)}}const Vt=()=>({"padding-bottom":0}),b=()=>({xs:8,sm:16,md:24}),R=()=>["bgdisable"],Xt=()=>["styleName"],Qt=()=>({minRows:2,maxRows:6});let Bt=(()=>{class o extends k.G{constructor(){super(...arguments),this.message=(0,t.uUt)(L.yo),this.productSubSevice=(0,t.uUt)(lt),this.cdr=(0,t.uUt)(t.kD9),this.resultUserService=(0,t.uUt)(ct.C),this.tin020Service=(0,t.uUt)(pt.q),this.tmt280Service=(0,t.uUt)(ut.K),this.modalSrv=(0,t.uUt)(f.mU),this.spin00101Service=(0,t.uUt)(mt.G),this.spinService=(0,t.uUt)(ht._),this.ActionCode=O.i,this.dataList=[],this.checkedCashArray=[],this.visibleOptions=[],this.phongban_id=(0,t.OCB)(0),this.userDetail=(0,t.OCB)({CSTMCD:"",CSTNAME:"",CSTMOBILE:"",CSTADDRESS:"",CSTEMAIL:""}),this.tin020=(0,t.S6b)(()=>this.tin020Service.tin020()),this.divkbns=(0,t.OCB)([]),this.showConfirm=!1,this.mode=0}apiGetListDivkbn(){this.tmt280Service.getListDivKbn().pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{this.divkbns.set(n)})}btnConfirm(){0===this.tin020().SPPLYCD||null===this.tin020().ARVLPLNDATE?this.message.error("Vui l\xf2ng nh\u1eadp \u0111\xe2y \u0111\u1ee7a th\xf4ng tin"):this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n t\u1ea1o kh\xf4ng ?",nzContent:"Nh\u1ea5n OK \u0111\u1ec3 ho\xe0n th\xe0nh vi\u1ec7c \u0111\u0103ng k\xfd ",nzOnOk:()=>{this.spinService.setCurrentGlobalSpinStore(!0),this.spin00101Service.create(this.tin020()).pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{this.spinService.setCurrentGlobalSpinStore(!1),this.confirmOK()})}})}confirmOK(){this.modalSrv.success({nzTitle:"\u0110\u0103ng k\xfd \u0111\u01a1n h\xe0ng th\xe0nh c\xf4ng !",nzOnOk:()=>{this.tin020Service.refeshTin020(),this.showConfirm=!1,this.dataList=[],this.userDetail.set({CSTMCD:"",CSTNAME:"",CSTMOBILE:"",CSTADDRESS:"",CSTEMAIL:""}),this.getDataList()}})}getDataList(n){this.dataList.length>0&&(this.showConfirm=!0),this.tableLoading(!1)}tableChangeDectction(){this.cdr.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}changePageSize(n){this.tableConfig.pageSize=n}selectedChecked(n){this.checkedCashArray=[...n]}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}ngOnInit(){super.ngOnInit(),this.apiGetListDivkbn(),this.initTable()}add(){this.productSubSevice.show({nzTitle:"Th\xeam m\u1edbi",nzWidth:1280}).pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{!n||0===n.status||(this.dataList=[...n.modalValue],this.getDataList(),this.tin020Service.updateListDetail(this.dataList))})}resultSupply(){this.resultUserService.show({nzTitle:N.UF,nzWidth:1424},{showcomfirm:!1,department:N.UF}).pipe((0,h.ay)(this.destroyRef)).subscribe(n=>{!n||0===n.status||(this.phongban_id.set(n.modalValue.phongban_id),this.userDetail.set({CSTMCD:n.modalValue.id,CSTNAME:n.modalValue.name,CSTMOBILE:"0"+n.modalValue.dienthoai,CSTADDRESS:(null==n.modalValue.BUYERADRS1ENC?"":n.modalValue.BUYERADRS1ENC)+" "+(null==n.modalValue.BUYERADRS2ENC?"":n.modalValue.BUYERADRS2ENC)+" "+(null==n.modalValue.BUYERADRS3ENC?"":n.modalValue.BUYERADRS3ENC),CSTEMAIL:n.modalValue.email}),this.tin020Service.updateSpplycd(Number(n.modalValue.id)))})}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"M\xe3 s\u1ea3n ph\u1ea9m",field:"id",tdTemplate:this.proidTpl,width:100},{title:"T\xean s\u1ea3n ph\u1ea3m",field:"product_name",tdTemplate:this.product_nameTpl,width:250},{title:"S\u1ed1 l\u01b0\u1ee3ng",field:"ARVLPLNQTY",tdTemplate:this.soluongTpl,width:80},{title:"Ch\u1ea5t l\u01b0\u1ee3ng",field:"QTYCD",tdTemplate:this.qtycdTpl,width:80},{title:"Gi\xe1 nh\u1eadp",field:"SIPRICE",tdTemplate:this.sipriceTpl,width:80},{title:"Th\xe0nh ti\u1ec1n",field:"thanhtien",tdTemplate:this.thanhtienTpl,width:80},{title:"C\u1eadp nh\u1eadt",tdTemplate:this.operationTpl,width:250,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}static#t=this.\u0275fac=(()=>{let n;return function(e){return(n||(n=t.otF(o)))(e||o)}})();static#n=this.\u0275cmp=t.In1({type:o,selectors:[["app-spin00101"]],viewQuery:function(i,e){if(1&i&&(t.CC$(Ct,7),t.CC$(gt,7),t.CC$(_t,7),t.CC$(zt,7),t.CC$(ft,7),t.CC$(Tt,7),t.CC$(St,7)),2&i){let a;t.wto(a=t.Gqi())&&(e.operationTpl=a.first),t.wto(a=t.Gqi())&&(e.product_nameTpl=a.first),t.wto(a=t.Gqi())&&(e.proidTpl=a.first),t.wto(a=t.Gqi())&&(e.qtycdTpl=a.first),t.wto(a=t.Gqi())&&(e.sipriceTpl=a.first),t.wto(a=t.Gqi())&&(e.soluongTpl=a.first),t.wto(a=t.Gqi())&&(e.thanhtienTpl=a.first)}},standalone:!0,features:[t.eg9,t.UHJ],decls:70,vars:77,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],[3,"nzErrorTip"],["name","SIPLNNO","id","SIPLNNO","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["name","STSNM","id","STSNM","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["name","DIVKBN","id","DIVKBN",3,"ngModel","ngModelChange"],["nzRequired","",3,"nzFor"],["name","ARVLPLNDATE",3,"ngModel","ngModelChange"],["nzSearch","",3,"nzAddOnAfter"],["name","SPPLYCD","id","SPPLYCD","type","text","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["suffixIconButton",""],[3,"ngClass"],["nz-input","",3,"nzAutosize"],[3,"tableTitle","btnTpl","btnConfirm","reload"],[3,"tableConfig","tableData","changePageNum"],["operationTpl",""],["product_nameTpl",""],["proidTpl",""],["qtycdTpl",""],["sipriceTpl",""],["soluongTpl",""],["thanhtienTpl",""],["tableBtns",""],["tableBtnsConfirm",""],[3,"nzLabel","nzValue"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","search"],["nz-button","","nzType","primary","class","m-r-8",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","primary","class","m-r-8",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"disabled","click"],["nz-icon","","nzType","caret-right"]],template:function(i,e){if(1&i&&(t.wR5(0,"app-page-header",0),t.I0R(1,"div",1)(2,"nz-card",2)(3,"div",3)(4,"div",4)(5,"nz-form-item")(6,"nz-form-label",5),t.OEk(7,"S\u1ed1 h\xf3a \u0111\u01a1n"),t.C$Y(),t.I0R(8,"nz-form-control",6)(9,"input",7),t.iHE("ngModelChange",function(l){return t.kNx(e.tin020().SIPLNNO,l)||(e.tin020().SIPLNNO=l),l}),t.C$Y()()()(),t.I0R(10,"div",4)(11,"nz-form-item")(12,"nz-form-label",5),t.OEk(13,"Tr\u1ea1ng th\xe1i"),t.C$Y(),t.I0R(14,"nz-form-control",6)(15,"input",8),t.iHE("ngModelChange",function(l){return t.kNx(e.tin020().STSNM,l)||(e.tin020().STSNM=l),l}),t.C$Y()()()(),t.I0R(16,"div",4)(17,"nz-form-item")(18,"nz-form-label",5),t.OEk(19,"PT Thanh to\xe1n"),t.C$Y(),t.I0R(20,"nz-form-control")(21,"nz-select",9),t.iHE("ngModelChange",function(l){return t.kNx(e.tin020().DIVKBN,l)||(e.tin020().DIVKBN=l),l}),t.c53(22,Et,1,2,"nz-option",28,t.oxv),t.C$Y()()()()(),t.I0R(24,"div",3)(25,"div",4)(26,"nz-form-item")(27,"nz-form-label",10),t.OEk(28,"Ng\xe0y nh\u1eadp h\xe0ng"),t.C$Y(),t.I0R(29,"nz-form-control")(30,"nz-date-picker",11),t.iHE("ngModelChange",function(l){return t.kNx(e.tin020().ARVLPLNDATE,l)||(e.tin020().ARVLPLNDATE=l),l}),t.C$Y()()()(),t.I0R(31,"div",4)(32,"nz-form-item")(33,"nz-form-label",10),t.OEk(34,"Nh\xe0 cung c\u1ea5p"),t.C$Y(),t.I0R(35,"nz-form-control",6)(36,"nz-input-group",12)(37,"input",13),t.iHE("ngModelChange",function(l){return t.kNx(e.userDetail().CSTMCD,l)||(e.userDetail().CSTMCD=l),l}),t.C$Y()(),t.yuY(38,yt,2,0,"ng-template",null,14,t.gJz),t.C$Y()()(),t.I0R(40,"div",4)(41,"span",15),t.OEk(42),t.C$Y()()(),t.I0R(43,"div",3)(44,"div",4)(45,"nz-form-item")(46,"nz-form-label",5),t.OEk(47,"Ghi ch\xfa"),t.C$Y(),t.I0R(48,"nz-form-control"),t.wR5(49,"textarea",16),t.C$Y()()()()(),t.I0R(50,"app-card-table-wrap",17),t.qCj("reload",function(){return e.reloadTable()}),t.I0R(51,"app-ant-table",18),t.qCj("changePageNum",function(l){return e.getDataList(l)}),t.C$Y(),t.yuY(52,bt,0,0,"ng-template",null,19,t.gJz)(54,Rt,1,1,"ng-template",null,20,t.gJz)(56,Gt,1,1,"ng-template",null,21,t.gJz)(58,Lt,4,1,"ng-template",null,22,t.gJz)(60,At,2,4,"ng-template",null,23,t.gJz)(62,Pt,1,1,"ng-template",null,24,t.gJz)(64,Dt,2,4,"ng-template",null,25,t.gJz),t.C$Y(),t.yuY(66,Nt,1,1,"ng-template",null,26,t.gJz)(68,xt,1,1,"ng-template",null,27,t.gJz),t.C$Y()),2&i){const a=t.Gew(39),l=t.Gew(67),G=t.Gew(69);t.E7m("pageHeaderInfo",e.pageHeaderInfo),t.yG2(2),t.E7m("nzBodyStyle",t.q4q(68,Vt)),t.yG2(),t.E7m("nzGutter",t.q4q(69,b)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",e.tin020().SIPLNNO),t.E7m("readOnly",!0)("ngClass",t.q4q(70,R)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",e.tin020().STSNM),t.E7m("readOnly",!0)("ngClass",t.q4q(71,R)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",e.tin020().DIVKBN),t.yG2(),t.oho(e.divkbns()),t.yG2(2),t.E7m("nzGutter",t.q4q(72,b)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(5),t.OKB("ngModel",e.tin020().ARVLPLNDATE),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip","Vui l\xf2ng ch\u1ecdn nh\xe0 cung c\u1ea5p"),t.yG2(),t.E7m("nzAddOnAfter",a),t.yG2(),t.OKB("ngModel",e.userDetail().CSTMCD),t.E7m("readOnly",!0)("ngClass",t.q4q(73,R)),t.yG2(3),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(),t.E7m("ngClass",t.q4q(74,Xt)),t.yG2(),t.cNF(e.userDetail().CSTNAME),t.yG2(),t.E7m("nzGutter",t.q4q(75,b)),t.yG2(),t.E7m("nzLg",24)("nzMd",24)("nzSm",24)("nzXl",24)("nzXs",24)("nzXXl",24),t.yG2(5),t.E7m("nzAutosize",t.q4q(76,Qt)),t.yG2(),t.E7m("tableTitle","Danh s\xe1ch s\u1ea3n ph\u1ea9m")("btnTpl",l)("btnConfirm",G),t.yG2(),t.E7m("tableConfig",e.tableConfig)("tableData",e.dataList)}},dependencies:[x.Q,z.iq,z.Q9,c.Ko,c.QD,c.ox,d.WO,d.qU,d.Qo,d.YZ,p.y,p.ot,p.ue,p._G,_.Wy,_.If,u.VL,u.eE,u.Mh,m.OA,m.cv,m.qG,m.cL,I.fO,I.iO,g.QF,C.EV,C.Ez,E.k,y.o9,A.E,v.Q,g.cf,dt.s],styles:[".styleName[_ngcontent-%COMP%]{font-weight:700;text-decoration-line:underline}"]})}return o})()}}]);