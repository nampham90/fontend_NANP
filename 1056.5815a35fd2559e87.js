"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[1056],{1056:(Mn,b,l)=>{l.r(b),l.d(b,{Spot00101Component:()=>Rn});var m=l(1368),t=l(4496),p=l(4872),c=l(6504),L=l(472),E=l(592),C=l(7592);let $=(()=>{class e{constructor(){this.http=(0,t.uUt)(E.k)}listRcdkbn(n){return this.http.post(C.S0,{RCDKBN:n})}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var B=l(6844),A=l(3652),H=l(5072),T=l(5240),Q=l(7340),h=l(460),f=l(5128),u=l(1752),d=l(2532),S=l(6088),O=l(9116),_=l(268),I=l(2700),F=l(8824),P=l(9432),Y=l(2624),N=l(7960);let q=(()=>{class e{constructor(){this.http=(0,t.uUt)(E.k)}findAllStck(n){return this.http.post(C.Yb,n)}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var V=l(6128),k=l(3692),K=l(8488),J=l(2604),D=l(3064),R=l(5584);function j(e,s){if(1&e){const n=t.KQA();t.I0R(0,"div",2)(1,"app-input-currency",7),t.qCj("changeAmount",function(o){t.usT(n);const a=t.GaO(2);return t.CGJ(a.changeAmountTECHNICALPRICE(o))}),t.C$Y()()}if(2&e){const n=t.GaO(2);t.yG2(),t.E7m("Amount",n.amountModeTECHNICALPRICE())}}function W(e,s){if(1&e){const n=t.KQA();t.I0R(0,"div",2)(1,"app-input-currency",7),t.qCj("changeAmount",function(o){t.usT(n);const a=t.GaO(2);return t.CGJ(a.changeAmountSELLPIRCE(o))}),t.C$Y()()}if(2&e){const n=t.GaO(2);t.yG2(),t.E7m("Amount",n.amountModeSELLPIRCE())}}function Z(e,s){if(1&e&&(t.I0R(0,"div",2),t.OEk(1),t.wVc(2,"currency"),t.C$Y()),2&e){const n=t.GaO(2);t.yG2(),t.oRS(" ",t.g7$(2,1,n.exPriceTECHNICALPRICE(),"VND")," ")}}function tt(e,s){if(1&e&&(t.I0R(0,"div",2),t.OEk(1),t.wVc(2,"currency"),t.C$Y()),2&e){const n=t.GaO(2);t.yG2(),t.oRS(" ",t.g7$(2,1,n.exPrice(),"VND")," ")}}const nt=()=>[16,16];function et(e,s){if(1&e){const n=t.KQA();t.I0R(0,"div",0)(1,"div",1),t.OEk(2),t.C$Y(),t.yuY(3,j,2,1,"div",2)(4,W,2,1),t.I0R(5,"div",2)(6,"nz-input-number",3),t.iHE("ngModelChange",function(o){t.usT(n);const a=t.GaO();return t.kNx(a.cartItem().quantity,o)||(a.cartItem().quantity=o),t.CGJ(o)}),t.qCj("ngModelChange",function(o){t.usT(n);const a=t.GaO();return t.CGJ(a.change(o))}),t.C$Y()(),t.I0R(7,"div",2)(8,"app-input-number",4),t.qCj("changeNumber",function(o){t.usT(n);const a=t.GaO();return t.CGJ(a.changeWarranty(o))}),t.C$Y()(),t.yuY(9,Z,3,4,"div",2)(10,tt,3,4),t.I0R(11,"div",5)(12,"button",6),t.qCj("click",function(){t.usT(n);const o=t.GaO();return t.CGJ(o.onRemove())}),t.OEk(13,"Delete"),t.C$Y()()()}if(2&e){const n=t.GaO();t.E7m("nzGutter",t.q4q(9,nt)),t.yG2(2),t.oRS(" ",n.cartItem().productstck.product.product_name," "),t.yG2(),t.C0Y(3,4===n.phongban_id()?3:4),t.yG2(3),t.OKB("ngModel",n.cartItem().quantity),t.E7m("nzMin",1)("nzMax",1e3)("nzStep",1),t.yG2(2),t.E7m("Number",n.cartItem().warranty),t.yG2(),t.C0Y(9,4===n.phongban_id()?9:10)}}let ot=(()=>{class e{constructor(){this.cartService=(0,t.uUt)(T.c),this.cartItem=(0,t.OCB)(this.item),this.phongban_id=(0,t.S6b)(()=>this.cartService.phongban_id()),this.amountModeSELLPIRCE=(0,t.S6b)(()=>this.cartItem().productstck.SELLPIRCE/1e3),this.amountModeTECHNICALPRICE=(0,t.S6b)(()=>this.cartItem().productstck.TECHNICALPRICE/1e3),this.exPrice=(0,t.S6b)(()=>this.cartItem().quantity*Number(this.cartItem().productstck.SELLPIRCE)),this.exPriceTECHNICALPRICE=(0,t.S6b)(()=>this.cartItem().quantity*Number(this.cartItem().productstck.TECHNICALPRICE))}get item(){return this._item}set item(n){this._item=n,this.cartItem.set(n)}changeAmountSELLPIRCE(n){this.cartItem().productstck.SELLPIRCE=1e3*n,this.cartService.updatePriceCart(this.cartItem())}changeAmountTECHNICALPRICE(n){this.cartItem().productstck.TECHNICALPRICE=1e3*n,this.cartService.updatePriceCart(this.cartItem())}onRemove(){this.cartService.removeFromCart(this.cartItem())}change(n){this.cartService.updateInCart(this.cartItem(),Number(n))}changeWarranty(n){this.cartService.updateWarrantyInCart(this.cartItem(),Number(n))}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-cart-item"]],inputs:{item:"item"},standalone:!0,features:[t.M5G([m.cf,m.hl]),t.UHJ],decls:1,vars:1,consts:[["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","5"],["nz-col","","nzSpan","4"],[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],[3,"Number","changeNumber"],["nz-col","","nzSpan","3"],["nz-button","","nzType","primary",3,"click"],[3,"Amount","changeAmount"]],template:function(i,o){1&i&&t.yuY(0,et,14,10,"div",0),2&i&&t.C0Y(0,o.cartItem()?0:-1)},dependencies:[k.uw,k.mG,c.y,c.ue,c._G,d.Ko,d.QD,d.ox,h.EV,h.Ez,D.k,R.o9,m.MD,m.cf,K.S,J.S]})}return e})();function it(e,s){if(1&e&&(t.I0R(0,"div",3),t.OEk(1),t.wVc(2,"currency"),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.cNF(t.g7$(2,1,n.deliveryFee(),"VND"))}}const at=()=>({color:"#177DDC"});function rt(e,s){1&e&&(t.I0R(0,"div",3)(1,"span",4),t.OEk(2,"Free"),t.C$Y()()),2&e&&(t.yG2(),t.E7m("ngStyle",t.q4q(1,at)))}const st=()=>[16,16];let lt=(()=>{class e{constructor(){this.cartService=(0,t.uUt)(T.c),this.cartItems=this.cartService.cartItems,this.subTotal=this.cartService.subTotal,this.deliveryFee=this.cartService.deliveryFee,this.tax=this.cartService.tax,this.totalPrice=this.cartService.totalPrice}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-cart-total"]],standalone:!0,features:[t.UHJ],decls:25,vars:15,consts:[["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","6","nzOffset","16"],["nz-row",""],["nz-col","","nzSpan","12"],[3,"ngStyle"]],template:function(i,o){1&i&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.OEk(4,"Th\xe0nh ti\u1ec1n"),t.C$Y(),t.I0R(5,"div",3),t.OEk(6),t.wVc(7,"currency"),t.C$Y()(),t.I0R(8,"div",2)(9,"div",3),t.OEk(10,"Ph\xed v\u1eadn chuy\u1ec3n"),t.C$Y(),t.yuY(11,it,3,4,"div",3)(12,rt,3,2),t.C$Y(),t.I0R(13,"div",2)(14,"div",3),t.OEk(15,"Thu\u1ebf VAT"),t.C$Y(),t.I0R(16,"div",3),t.OEk(17),t.wVc(18,"currency"),t.C$Y()(),t.I0R(19,"div",2)(20,"div",3),t.OEk(21,"T\u1ed5ng c\u1ed9ng"),t.C$Y(),t.I0R(22,"div",3),t.OEk(23),t.wVc(24,"currency"),t.C$Y()()()()),2&i&&(t.E7m("nzGutter",t.q4q(14,st)),t.yG2(6),t.cNF(t.g7$(7,5,o.subTotal(),"VND")),t.yG2(5),t.C0Y(11,o.deliveryFee()>0?11:12),t.yG2(6),t.cNF(t.g7$(18,8,o.tax(),"VND")),t.yG2(6),t.cNF(t.g7$(24,11,o.totalPrice(),"VND")))},dependencies:[d.Ko,d.QD,d.ox,m.MD,m.Qt,m.cf]})}return e})();function ct(e,s){1&e&&t.wR5(0,"app-cart-item",4),2&e&&t.E7m("item",s.$implicit)}const dt=()=>[16,16];function mt(e,s){if(1&e&&(t.I0R(0,"div",0)(1,"div",1),t.OEk(2,"T\xean s\u1ea3n ph\u1ea9m"),t.C$Y(),t.I0R(3,"div",2),t.OEk(4,"Gi\xe1 B\xe1n"),t.C$Y(),t.I0R(5,"div",2),t.OEk(6,"S\u1ed1 l\u01b0\u1ee3ng"),t.C$Y(),t.I0R(7,"div",2),t.OEk(8,"B\u1ea3o h\xe0nh"),t.C$Y(),t.I0R(9,"div",2),t.OEk(10,"Th\xe0nh ti\u1ec1n"),t.C$Y(),t.I0R(11,"div",3),t.OEk(12,"Delete"),t.C$Y()(),t.c53(13,ct,1,1,"app-cart-item",4,t.oxv),t.wR5(15,"app-cart-total")),2&e){const n=t.GaO();t.E7m("nzGutter",t.q4q(1,dt)),t.yG2(13),t.oho(n.cartItems())}}function pt(e,s){1&e&&t.OEk(0," No items in cart\n")}let ut=(()=>{class e{constructor(){this.cartService=(0,t.uUt)(T.c),this.cartItems=this.cartService.cartItems}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-list-cart"]],standalone:!0,features:[t.UHJ],decls:2,vars:1,consts:[["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","5"],["nz-col","","nzSpan","4"],["nz-col","","nzSpan","3"],[3,"item"]],template:function(i,o){1&i&&t.yuY(0,mt,16,2)(1,pt,1,0),2&i&&t.C0Y(0,o.cartItems().length>0?0:1)},dependencies:[ot,d.Ko,d.QD,d.ox,lt]})}return e})();var Ct=l(4832),ht=l(836),x=l(2672);const _t=["operationTpl"],gt=["productnameTpl"],Tt=["sellpirceTpl"],zt=["imageTpl"],Et=["qtynmTpl"];function ft(e,s){1&e&&(t.I0R(0,"div",8),t.wR5(1,"app-list-cart"),t.C$Y())}function St(e,s){if(1&e&&t.wR5(0,"nz-option",23),2&e){const n=s.$implicit;t.E7m("nzLabel",n.name)("nzValue",n.id)}}function yt(e,s){if(1&e&&t.wR5(0,"nz-option",23),2&e){const n=s.$implicit;t.E7m("nzLabel",n.name)("nzValue",n.id)}}function Ot(e,s){if(1&e&&t.wR5(0,"nz-option",23),2&e){const n=s.$implicit;t.E7m("nzLabel",n.QTYNM)("nzValue",n.QTYCD)}}function It(e,s){if(1&e&&t.wR5(0,"nz-option",23),2&e){const n=s.$implicit;t.E7m("nzLabel",n.name)("nzValue",n.id)}}function Dt(e,s){}const Rt=()=>({"padding-bottom":0}),v=()=>[16,16];function vt(e,s){if(1&e){const n=t.KQA();t.I0R(0,"div",8)(1,"nz-card",9)(2,"form",10)(3,"div",11)(4,"div",12)(5,"nz-form-item")(6,"nz-form-label",13),t.OEk(7,"Danh m\u1ee5c"),t.C$Y(),t.I0R(8,"nz-form-control")(9,"nz-select",14),t.iHE("ngModelChange",function(o){t.usT(n);const a=t.GaO();return t.kNx(a.searchParam.CATCD,o)||(a.searchParam.CATCD=o),t.CGJ(o)}),t.c53(10,St,1,2,"nz-option",23,t.oxv),t.C$Y()()()(),t.I0R(12,"div",12)(13,"nz-form-item")(14,"nz-form-label",13),t.OEk(15,"H\xe3ng s\u1ea3n xu\u1ea5t"),t.C$Y(),t.I0R(16,"nz-form-control")(17,"nz-select",14),t.iHE("ngModelChange",function(o){t.usT(n);const a=t.GaO();return t.kNx(a.searchParam.MANUFACTTURECD,o)||(a.searchParam.MANUFACTTURECD=o),t.CGJ(o)}),t.c53(18,yt,1,2,"nz-option",23,t.oxv),t.C$Y()()()()(),t.I0R(20,"div",11)(21,"div",12)(22,"nz-form-item")(23,"nz-form-label",13),t.OEk(24,"Ch\u1ea5t l\u01b0\u1ee3ng"),t.C$Y(),t.I0R(25,"nz-form-control")(26,"nz-select",14),t.iHE("ngModelChange",function(o){t.usT(n);const a=t.GaO();return t.kNx(a.searchParam.QTYCD,o)||(a.searchParam.QTYCD=o),t.CGJ(o)}),t.c53(27,Ot,1,2,"nz-option",23,t.oxv),t.C$Y()()()(),t.I0R(29,"div",12)(30,"nz-form-item")(31,"nz-form-label",13),t.OEk(32,"Nh\xe0 cung c\u1ea5p"),t.C$Y(),t.I0R(33,"nz-form-control")(34,"nz-select",14),t.iHE("ngModelChange",function(o){t.usT(n);const a=t.GaO();return t.kNx(a.searchParam.SUPPLYCD,o)||(a.searchParam.SUPPLYCD=o),t.CGJ(o)}),t.c53(35,It,1,2,"nz-option",23,t.oxv),t.C$Y()()()()(),t.I0R(37,"div",11)(38,"div",15)(39,"button",16),t.qCj("click",function(){t.usT(n);const o=t.GaO();return t.CGJ(o.getDataList())}),t.wR5(40,"i",17),t.OEk(41," T\xecm ki\u1ebfm "),t.C$Y(),t.I0R(42,"button",18),t.qCj("click",function(){t.usT(n);const o=t.GaO();return t.CGJ(o.resetForm())}),t.wR5(43,"i",19),t.OEk(44,"Reset"),t.C$Y()()()()(),t.I0R(45,"app-card-table-wrap",20),t.qCj("reload",function(){t.usT(n);const o=t.GaO();return t.CGJ(o.reloadTable())}),t.I0R(46,"app-ant-table",21),t.qCj("changePageSize",function(o){t.usT(n);const a=t.GaO();return t.CGJ(a.changePageSize(o))})("changePageNum",function(o){t.usT(n);const a=t.GaO();return t.CGJ(a.getDataList(o))}),t.C$Y()(),t.yuY(47,Dt,0,0,"ng-template",null,22,t.gJz),t.C$Y()}if(2&e){const n=t.Gew(48),i=t.GaO();t.yG2(),t.E7m("nzBodyStyle",t.q4q(43,Rt)),t.yG2(2),t.E7m("nzGutter",t.q4q(44,v)),t.yG2(),t.E7m("nzLg",12)("nzMd",24)("nzSm",24)("nzXl",12)("nzXs",24)("nzXXl",12),t.yG2(5),t.OKB("ngModel",i.searchParam.CATCD),t.yG2(),t.oho(i.catcds()),t.yG2(2),t.E7m("nzLg",12)("nzMd",24)("nzSm",24)("nzXl",12)("nzXs",24)("nzXXl",12),t.yG2(5),t.OKB("ngModel",i.searchParam.MANUFACTTURECD),t.yG2(),t.oho(i.manufcds()),t.yG2(2),t.E7m("nzGutter",t.q4q(45,v)),t.yG2(),t.E7m("nzLg",12)("nzMd",24)("nzSm",24)("nzXl",12)("nzXs",24)("nzXXl",12),t.yG2(5),t.OKB("ngModel",i.searchParam.QTYCD),t.yG2(),t.oho(i.qtycds()),t.yG2(2),t.E7m("nzLg",12)("nzMd",24)("nzSm",24)("nzXl",12)("nzXs",24)("nzXXl",12),t.yG2(5),t.OKB("ngModel",i.searchParam.SUPPLYCD),t.yG2(),t.oho(i.supplycds()),t.yG2(2),t.E7m("nzGutter",t.q4q(46,v)),t.yG2(),t.E7m("nzLg",24)("nzMd",24)("nzSm",24)("nzXl",24)("nzXs",24)("nzXXl",24),t.yG2(),t.E7m("nzType","primary"),t.yG2(6),t.E7m("tableTitle","Danh s\xe1ch chi ti\u1ebft")("btnTpl",n),t.yG2(),t.E7m("tableConfig",i.tableConfig)("tableData",i.dataList())}}function Mt(e,s){1&e&&t.OEk(0),2&e&&t.oRS(" ",s.product.product_name,"\n")}function Gt(e,s){1&e&&t.wR5(0,"img",24)}const bt=()=>({width:"70px",height:"50px"});function Lt(e,s){1&e&&t.wR5(0,"img",25),2&e&&t.E7m("ngStyle",t.q4q(1,bt))}function At(e,s){1&e&&t.yuY(0,Gt,1,0,"img",24)(1,Lt,1,2),2&e&&t.C0Y(0,s.IMAGE?0:1)}function Pt(e,s){if(1&e&&(t.OEk(0),t.wVc(1,"currency")),2&e){const n=t.GaO().TECHNICALPRICE;t.oRS(" ",t.g7$(1,1,n,"VND")," ")}}function Yt(e,s){if(1&e&&(t.OEk(0),t.wVc(1,"currency")),2&e){const n=t.GaO().SELLPIRCE;t.oRS(" ",t.g7$(1,1,n,"VND")," ")}}function Nt(e,s){if(1&e&&t.yuY(0,Pt,2,4)(1,Yt,2,4),2&e){const n=t.GaO();t.C0Y(0,4===n.phongban_id()?0:1)}}function kt(e,s){1&e&&(t.I0R(0,"span"),t.OEk(1,"M\u1edbi"),t.C$Y())}function xt(e,s){1&e&&(t.I0R(0,"span"),t.OEk(1,"C\u1ee7"),t.C$Y())}function wt(e,s){1&e&&(t.I0R(0,"span"),t.OEk(1,"Qua s\u1eed d\u1ee5ng"),t.C$Y())}function Ut(e,s){1&e&&(t.I0R(0,"div"),t.OEk(1,"M\u1edbi"),t.C$Y())}function Xt(e,s){if(1&e&&t.yuY(0,kt,2,0)(1,xt,2,0)(2,wt,2,0)(3,Ut,2,0),2&e){let i;t.C0Y(0,"01"===(i=s.QTYCD)?0:"02"===i?1:"03"===i?2:3)}}const $t=e=>({addtocart:e});function Bt(e,s){if(1&e){const n=t.KQA();t.I0R(0,"span",26)(1,"button",27),t.qCj("click",function(){const a=t.usT(n).PRODUCTCD,r=t.GaO();return t.CGJ(r.addCart(a))}),t.wR5(2,"span",28),t.OEk(3," Add cart "),t.C$Y()()}if(2&e){const n=s.ISADDTOCART;t.yG2(),t.E7m("ngClass",t.S45(1,$t,void 0!==n&&n))}}let Ht=(()=>{class e{constructor(n){this.modalRef=n,this.nzModalData=(0,t.uUt)(O.aG),this.ishowCart=(0,t.OCB)(!1),this.dataList=(0,t.OCB)([]),this.ActionCode=L.i,this.message=(0,t.uUt)(P.yo),this.destroyRef=(0,t.uUt)(t.eM9),this.cdr=(0,t.uUt)(t.kD9),this.stockService=(0,t.uUt)(q),this.cartService=(0,t.uUt)(T.c),this.productCategoriesService=(0,t.uUt)(Ct.I),this.tmt140Service=(0,t.uUt)(ht.e),this.accountService=(0,t.uUt)(x.u),this.searchParam={},this.qtycds=(0,t.OCB)([]),this.catcds=(0,t.OCB)([]),this.manufcds=(0,t.OCB)([]),this.supplycds=(0,t.OCB)([]),this.isAddtocart=(0,t.OCB)(!1),this.animationState=!1,this.phongban_id=(0,t.OCB)(0),this.cartCount=(0,t.S6b)(()=>this.cartService.cartItems().length)}getAsyncFnData(n){return(0,I.of)(n)}getCurrentValue(){return 0===this.cartService.cartItems().length?(this.message.info("V\xf9i l\xf2ng th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng !"),(0,I.of)(!1)):(0,I.of)(this.cartService.cartItems())}ngOnInit(){this.initTable(),this.apiProductCategories(),this.apiGetlistQualities(),this.apiGetsupplys(),this.phongban_id.set(this.nzModalData.phongban_id),this.cartService.updatePhongbanID(this.phongban_id())}getDataList(n){this.stockService.findAllStck({pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,F.U)(()=>{this.tableLoading(!1)}),(0,p.ay)(this.destroyRef)).subscribe(o=>{const{list:a,total:r,pageNum:G}=o;this.dataList.set(a),this.tableConfig.total=r,this.tableConfig.pageIndex=G,this.tableLoading(!1)})}removeCart(){}addCart(n){let i=this.dataList().find(o=>o.PRODUCTCD===n);this.cartService.addToCart(i),i&&(i.ISADDTOCART=!0,setTimeout(()=>{i.ISADDTOCART=!1},1e3))}resetForm(){}showcart(n){this.ishowCart.set(!n)}tableChangeDectction(){this.cdr.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}changePageSize(n){this.tableConfig.pageSize=n}apiProductCategories(){this.productCategoriesService.category().pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{this.catcds.set(n)})}apiGetsupplys(){this.accountService.getListUserByDepartmentId(C.Ok).pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{this.supplycds.set(n)})}apiGetlistQualities(){this.tmt140Service.listQualities().pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{this.qtycds.set(n)})}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"H\xecnh \u1ea3nh",field:"IMAGE",tdTemplate:this.imageTpl,width:60},{title:"T\xean s\u1ea3n ph\u1ea9m",field:"prodname",tdTemplate:this.productnameTpl,width:200},{title:"S\u1ed1 l\u01b0\u1ee3ng",field:"TOTALALLWQTY",width:80},{title:"\u0110\u01a1n gi\xe1",field:"SELLPIRCE",tdTemplate:this.sellpirceTpl,width:120},{title:"Ch\u1ea5t l\u01b0\u1ee3ng",field:"QTYCD",tdTemplate:this.qtynmTpl,width:80},{title:"Ng\xe0y h\u1ebft h\u1ea1n",field:"LIMITDATE",pipe:"date: dd/MM/yyyy",width:120},{title:"Th\xeam v\xe0o gi\u1ecf h\xe0ng",tdTemplate:this.operationTpl,width:120,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(O.U7))};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-product-list"]],viewQuery:function(i,o){if(1&i&&(t.CC$(_t,7),t.CC$(gt,7),t.CC$(Tt,7),t.CC$(zt,7),t.CC$(Et,7)),2&i){let a;t.wto(a=t.Gqi())&&(o.operationTpl=a.first),t.wto(a=t.Gqi())&&(o.productnameTpl=a.first),t.wto(a=t.Gqi())&&(o.sellpirceTpl=a.first),t.wto(a=t.Gqi())&&(o.imageTpl=a.first),t.wto(a=t.Gqi())&&(o.qtynmTpl=a.first)}},standalone:!0,features:[t.UHJ],decls:14,vars:3,consts:[["class","normal-table-wrap"],["productnameTpl",""],["imageTpl",""],["sellpirceTpl",""],["qtynmTpl",""],["operationTpl",""],[1,"bst-badge",3,"nzCount"],["nz-icon","","nzTheme","outline",1,"head-example",3,"nzType","click"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],["name","available","nzAllowClear","","nzPlaceHolder","",3,"ngModel","ngModelChange"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"tableTitle","btnTpl","reload"],[3,"tableConfig","tableData","changePageSize","changePageNum"],["tableBtns",""],[3,"nzLabel","nzValue"],["src",""],["src","./assets/imgs/bf.jpg","alt","",3,"ngStyle"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"ngClass","click"],["nz-icon","","nzType","plus"]],template:function(i,o){1&i&&(t.yuY(0,ft,2,0,"div",0)(1,vt,49,47)(2,Mt,1,1,"ng-template",null,1,t.gJz)(4,At,2,1,"ng-template",null,2,t.gJz)(6,Nt,2,1,"ng-template",null,3,t.gJz)(8,Xt,4,1,"ng-template",null,4,t.gJz)(10,Bt,4,3,"ng-template",null,5,t.gJz),t.I0R(12,"nz-badge",6)(13,"span",7),t.qCj("click",function(){return o.showcart(o.ishowCart())}),t.C$Y()()),2&i&&(t.C0Y(0,o.ishowCart()?0:1),t.yG2(12),t.E7m("nzCount",o.cartCount()),t.yG2(),t.E7m("nzType",o.ishowCart()?"home":"shopping-cart"))},dependencies:[d.Ko,d.QD,d.ox,f.iq,f.Q9,c.y,c.sz,c.ue,c.u,c._G,c.SC,u.WO,u.BN,u.qU,u.Qo,u.YZ,_.VL,_.eE,_.Mh,h.EV,h.Ez,D.k,R.o9,N.M7,N.Er,m.MD,m.QF,m.Qt,m.cf,S.Wy,S.If,Y.E,A.Q,ut],styles:[".head-example[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:50%;background:#1f1f1f;display:flex;justify-content:center;align-items:center;vertical-align:middle;font-size:20px;transition:.3s}.head-example[_ngcontent-%COMP%]:hover{background:#177ddc}.bst-badge[_ngcontent-%COMP%]{position:absolute;top:8px;right:70px}.addtocart[_ngcontent-%COMP%]{position:relative;transition:.5s}.addtocart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;right:0;color:#ff0;animation:_ngcontent-%COMP%_fly 2s ease-in-out forwards}@keyframes _ngcontent-%COMP%_fly{0%{opacity:0}10%{opacity:1}90%{transform:translateY(-100px)}to{opacity:0}}"],data:{animation:[(0,V.gb)()]}})}return e})(),Qt=(()=>{class e{constructor(){this.modalWrapService=(0,t.uUt)(Q.K)}getContentComponent(){return Ht}show(n={},i){return this.modalWrapService.show(this.getContentComponent(),n,i)}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ft=l(2300),w=l(1188),y=l(2605),M=l(3120),qt=l(872),Vt=l(7856);let Kt=(()=>{class e{constructor(){this.http=(0,t.uUt)(E.k)}getListDelimthd(){return this.http.post(C.wZ,{})}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Jt=(()=>{class e{constructor(){this.http=(0,t.uUt)(E.k)}getListPaymethd(){return this.http.post(C.KY,{})}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var jt=l(9140),U=l(3024),Wt=l(520),Zt=l(2880),tn=l.n(Zt),nn=l(9276),en=l(4804);const on=["productnameTpl"],an=["qtynmTpl"],rn=["sopriceTpl"];function sn(e,s){if(1&e&&t.wR5(0,"nz-option",32),2&e){const n=s.$implicit;t.E7m("nzLabel",n.DELIMTHNM)("nzValue",n.DELIMTHCD)}}function ln(e,s){if(1&e&&t.wR5(0,"nz-option",32),2&e){const n=s.$implicit;t.E7m("nzLabel",n.PAYMETHDNM)("nzValue",n.PAYMETHDCD)}}function cn(e,s){if(1&e){const n=t.KQA();t.I0R(0,"button",33),t.qCj("click",function(){t.usT(n);const o=t.GaO();return t.CGJ(o.resultUser())}),t.wR5(1,"span",34),t.C$Y()}}function dn(e,s){if(1&e&&t.OEk(0),2&e){const n=t.GaO().$implicit;t.oRS(" ",n.errors.message," ")}}function mn(e,s){1&e&&t.OEk(0," Ph\u1ea7n b\u1eaft bu\u1ed9c ")}function pn(e,s){if(1&e&&t.yuY(0,dn,1,1)(1,mn,1,0),2&e){const n=s.$implicit;t.C0Y(0,n.hasError("message")?0:-1),t.yG2(),t.C0Y(1,n.hasError("required")?1:-1)}}function un(e,s){if(1&e&&(t.I0R(0,"span"),t.OEk(1),t.C$Y()),2&e){const n=t.GaO().product;t.yG2(),t.cNF(n.product_name)}}function Cn(e,s){1&e&&t.yuY(0,un,2,1,"span"),2&e&&t.C0Y(0,s.product?0:-1)}function hn(e,s){1&e&&(t.I0R(0,"span"),t.OEk(1,"M\u1edbi"),t.C$Y())}function _n(e,s){1&e&&(t.I0R(0,"span"),t.OEk(1,"C\u1ee7"),t.C$Y())}function gn(e,s){1&e&&(t.I0R(0,"span"),t.OEk(1,"Qua s\u1eed d\u1ee5ng"),t.C$Y())}function Tn(e,s){1&e&&(t.I0R(0,"div"),t.OEk(1,"M\u1edbi"),t.C$Y())}function zn(e,s){if(1&e&&t.yuY(0,hn,2,0)(1,_n,2,0)(2,gn,2,0)(3,Tn,2,0),2&e){let i;t.C0Y(0,"01"===(i=s.QTYCD)?0:"02"===i?1:"03"===i?2:3)}}function En(e,s){1&e&&(t.OEk(0),t.wVc(1,"currency")),2&e&&t.oRS(" ",t.g7$(1,1,s.SOPRICE,"VND")," ")}function fn(e,s){if(1&e){const n=t.KQA();t.I0R(0,"button",36),t.qCj("click",function(){t.usT(n);const o=t.GaO(2);return t.CGJ(o.showProdutList())}),t.wR5(1,"i",37),t.OEk(2),t.C$Y()}if(2&e){const n=t.GaO(2);t.yG2(2),t.oRS(" ",n.namebtnAdd()," ")}}function Sn(e,s){if(1&e&&t.yuY(0,fn,3,1,"button",35),2&e){const n=t.GaO();t.E7m("appAuth",n.ActionCode.AddListProduct)}}function yn(e,s){if(1&e){const n=t.KQA();t.I0R(0,"button",36),t.qCj("click",function(){t.usT(n);const o=t.GaO(3);return t.CGJ(o.btnInbaogia())}),t.wR5(1,"i",39),t.OEk(2," In b\xe1o gi\xe1 "),t.C$Y()}}function On(e,s){if(1&e&&t.yuY(0,yn,3,0,"button",35),2&e){const n=t.GaO(2);t.E7m("appAuth",n.ActionCode.Inbaogia)}}function In(e,s){if(1&e&&t.yuY(0,On,1,1,"button",38),2&e){const n=t.GaO();t.C0Y(0,n.dataList.length>0?0:-1)}}const X=()=>({"padding-bottom":0}),z=()=>({xs:8,sm:16,md:24}),g=()=>["bgdisable"],Dn=()=>({minRows:1,maxRows:6});let Rn=(()=>{class e extends B.G{constructor(){super(),this.tmt050Service=(0,t.uUt)($),this.cdr=(0,t.uUt)(t.kD9),this.orderService=(0,t.uUt)(Vt.w),this.productListService=(0,t.uUt)(Qt),this.resultUserService=(0,t.uUt)(Ft.C),this.destroyRef=(0,t.uUt)(t.eM9),this.cartService=(0,t.uUt)(T.c),this.fb=(0,t.uUt)(c.im),this.message=(0,t.uUt)(P.yo),this.windownService=(0,t.uUt)(jt.s),this.tmt170Service=(0,t.uUt)(Kt),this.tmt171Service=(0,t.uUt)(Jt),this.spot00101Service=(0,t.uUt)(Wt.u),this.spinService=(0,t.uUt)(nn._),this.modalSrv=(0,t.uUt)(O.mU),this.accountService=(0,t.uUt)(x.u),this.listOrderService=(0,t.uUt)(en.i),this.listPaymeth=(0,t.OCB)([]),this.listDelimth=(0,t.OCB)([]),this.order=(0,t.S6b)(()=>this.orderService.order()),this.userDetail=(0,t.OCB)({CSTMCD:"",CSTNAME:"",CSTMOBILE:"",CSTADDRESS:"",CSTEMAIL:""}),this.cartItems=(0,t.OCB)([]),this.listDetail=(0,t.OCB)([]),this.filenamePdf=(0,t.OCB)(""),this.phongban_id=(0,t.OCB)(0),this.dataList=[],this.namebtnAdd=(0,t.S6b)(()=>this.listDetail().length>0?"C\u1eadp nh\u1eadt":"Th\xeam m\u1edbi"),this.ActionCode=L.i,this.checkedCashArray=[]}getDataList(n){this.dataList=[...this.listDetail()],this.orderService.updateListDetail(this.dataList),this.tableLoading(!1)}tableChangeDectction(){this.cdr.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}changePageSize(n){this.tableConfig.pageSize=n}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}ngOnInit(){super.ngOnInit(),""===this.order().SOODNO&&this.orderService.updateOrder(JSON.parse(this.windownService.getStorage(U.YN))),this.apiGetListPaymethd(),this.apiGetListDelimthd(),this.initTable(),this.order().tot020_ordhed.tot040_orddtls.length>0&&(this.listDetail.set(this.order().tot020_ordhed.tot040_orddtls),this.tableChangeDectction()),null!==this.order().tot020_ordhed.CSTMCD&&""===this.userDetail().CSTNAME&&this.apiGetDetaiUser()}get f(){return this.headerForm.controls}showProdutList(){""!==this.userDetail().CSTMCD?this.confirmOK():this.modalSrv.confirm({nzTitle:"Th\u1ed1ng b\xe1o",nzContent:"N\u1ebfu kh\xf4ng ch\u1ecdn kh\xe1ch h\xe0ng m\u1eb7c \u0111\u1ecbnh hi\u1ec3n th\xec gi\xe1 l\u1ebb !",nzOnOk:()=>{this.confirmOK()}})}confirmOK(){this.mergeTot040ToCart(),this.productListService.show({nzTitle:"Trong Kho",nzWidth:1224},{showCart:!0,phongban_id:this.phongban_id()}).pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{n&&0!==n.status?(this.cartItems.set(n.modalValue),this.mergeCartToTot040(),this.getDataList()):this.cartService.cartItems.set([])})}mergeCartToTot040(){if(this.listDetail.set([]),this.cartItems().length>0)for(let n=0;n<this.cartItems().length;n++){let i={SOODNO:this.order().SOODNO,SODTLNO:n+1,ORDLIMITDATE:new Date,SOPRICE:this.computerSoprice(n),SHIPMNTORDQTY:this.cartItems()[n].quantity,SHIPMNTORDREMAINQTY:this.cartItems()[n].productstck.TOTALALLWQTY,WARRANTY:this.cartItems()[n].warranty,SOREMARK:"",PRODUCTCD:this.cartItems()[n].productstck.PRODUCTCD,product:this.cartItems()[n].productstck.product,QTYCD:this.cartItems()[n].productstck.QTYCD};this.listDetail().push(i)}}computerSoprice(n){return 4===this.phongban_id()?this.cartItems()[n].productstck.TECHNICALPRICE:this.cartItems()[n].productstck.SELLPIRCE}mergeTot040ToCart(){let n=[];if(this.dataList.length>0){for(let i of this.dataList)n.push({productstck:{PRODUCTCD:null==i.PRODUCTGROUPCD?i.PRODUCTCD:i.PRODUCTGROUPCD,TOTALALLWQTY:0,PURPIRCE:0,TECHNICALPRICE:i.SOPRICE,SELLPIRCE:i.SOPRICE,LIMITDATE:i.ORDLIMITDATE,QTYCD:i.QTYCD,TOTALSHIPQTY:0,IMAGE:"",product:i.product,ISADDTOCART:!0},quantity:i.SHIPMNTORDQTY,warranty:i.WARRANTY});this.cartService.updateListCart(n)}}apiGetDetaiUser(){this.accountService.getAccountDetail(Number(this.order().tot020_ordhed.CSTMCD)).pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{this.userDetail.set({CSTMCD:n.id+"",CSTNAME:null==n.name?"":n.name,CSTADDRESS:null==n.address?"":n.address,CSTMOBILE:null==n.dienthoai?"":n.dienthoai,CSTEMAIL:null==n.email?"":n.email}),this.phongban_id.set(n.phongban_id)})}resultUser(){this.resultUserService.show({nzTitle:C.S8,nzWidth:1424},{showcomfirm:!1,department:C.S8}).pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{!n||0===n.status||(console.log(n.modalValue),this.phongban_id.set(n.modalValue.phongban_id),this.userDetail.set({CSTMCD:n.modalValue.id,CSTNAME:n.modalValue.name,CSTMOBILE:"0"+n.modalValue.dienthoai,CSTADDRESS:(null==n.modalValue.BUYERADRS1ENC?"":n.modalValue.BUYERADRS1ENC)+" "+(null==n.modalValue.BUYERADRS2ENC?"":n.modalValue.BUYERADRS2ENC)+" "+(null==n.modalValue.BUYERADRS3ENC?"":n.modalValue.BUYERADRS3ENC),CSTEMAIL:n.modalValue.email}),this.orderService.updateCustomer(this.userDetail()))})}apiGetListPaymethd(){this.tmt171Service.getListPaymethd().pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{this.listPaymeth.set(n)})}apiGetListDelimthd(){this.tmt170Service.getListDelimthd().pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{this.listDelimth.set(n)})}onChangeOrddate(n){}onChangeShipdate(n){}submitForm(){}btnInbaogia(){this.spinService.setCurrentGlobalSpinStore(!0),this.spot00101Service.updateOD(this.orderService.order()).pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{""!==n&&(this.filenamePdf.set(n),this.updateListOrder(),this.xuatbaogia())})}updateListOrder(){this.spot00101Service.orderStatus().pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{this.listOrderService.updateListNew(n.lstnewOd),this.listOrderService.updateListQTESTS(n.lstQTESTS),this.updateOrderService(n.lstQTESTS)})}updateOrderService(n){let i=n.find(o=>o.SOODNO===this.filenamePdf());i?(this.orderService.updateLocalStorageSelectedOD(i),this.orderService.updateOrder(JSON.parse(this.windownService.getStorage(U.YN)))):this.message.error("Order kh\xf4ng t\u1ed3n t\u1ea1i")}xuatbaogia(){this.spot00101Service.inbaogia(this.orderService.order()).pipe((0,p.ay)(this.destroyRef)).subscribe(n=>{tn().saveAs(n,this.filenamePdf()),this.spinService.setCurrentGlobalSpinStore(!1)})}changeDelimthd(n){this.orderService.updateDelimthd(n)}onSubmit(){}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"T\xean s\u1ea3n ph\u1ea9m",field:"PRODUCTNAME",tdTemplate:this.productnameTpl,width:200},{title:"S\u1ed1 l\u01b0\u1ee3ng",field:"SHIPMNTORDQTY",width:80},{title:"Gi\xe1",field:"SOPRICE",tdTemplate:this.sopriceTpl,width:100},{title:"Ch\u1ea5t l\u01b0\u1ee3ng",field:"QTYNM",tdTemplate:this.qtynmTpl,width:120},{title:"B\u1ea3o h\xe0nh",field:"WARRANTY",width:120},{title:"Ghi ch\xfa",field:"SOREMARK",width:300}],total:0,loading:!0,pageSize:10,pageIndex:1}}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.In1({type:e,selectors:[["app-spot00101"]],viewQuery:function(i,o){if(1&i&&(t.CC$(on,7),t.CC$(an,7),t.CC$(rn,7)),2&i){let a;t.wto(a=t.Gqi())&&(o.productnameTpl=a.first),t.wto(a=t.Gqi())&&(o.qtynmTpl=a.first),t.wto(a=t.Gqi())&&(o.sopriceTpl=a.first)}},standalone:!0,features:[t.eg9,t.UHJ],decls:105,vars:128,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzType","card"],["nz-form",""],["nzTitle","Th\xf4ng tin"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzLg","nzMd","nzSm","nzXl","nzXs","nzXXl"],[3,"nzFor"],[3,"nzErrorTip"],["name","SOODNO","id","SOODNO","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["name","DELIMTHDCD","id","DELIMTHDCD",3,"ngModel","ngModelChange"],["name","PAYMETHDCD","id","PAYMETHDCD",3,"ngModel","ngModelChange"],["name","STATUS","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["name","ORDERDATE",3,"ngModel","ngModelChange"],["name","SHIPDATE",3,"ngModel","ngModelChange"],["nz-input","",3,"ngModel","nzAutosize","ngModelChange"],["nzSearch","",3,"nzAddOnAfter"],["name","CSTMCD","id","CSTMCD","type","text","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["suffixIconButton",""],["name","CSTNAME","id","CSTNAME","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["name","CSTMOBILE","id","CSTMOBILE","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["name","CSTADDRESS","id","CSTADDRESS","nz-input","",3,"ngModel","readOnly","ngClass","ngModelChange"],["combineTpl",""],["nzTitle","Thanh to\xe1n"],[3,"tableTitle","btnTpl","btnConfirm","reload"],[3,"tableConfig","tableData","changePageNum"],["productnameTpl",""],["qtynmTpl",""],["sopriceTpl",""],["tableBtns",""],["tableBtnsConfirm",""],[3,"nzLabel","nzValue"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","search"],["class","m-r-8","nz-button","","nzType","primary",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"],["class","m-r-8","nz-button","","nzType","primary"],["nz-icon","","nzType","printer"]],template:function(i,o){if(1&i&&(t.wR5(0,"app-page-header",0),t.I0R(1,"div",1)(2,"nz-tabset",2)(3,"form",3)(4,"nz-tab",4)(5,"nz-card",5)(6,"div",6)(7,"div",7)(8,"nz-form-item")(9,"nz-form-label",8),t.OEk(10,"S\u1ed1 h\xf3a \u0111\u01a1n"),t.C$Y(),t.I0R(11,"nz-form-control",9)(12,"input",10),t.iHE("ngModelChange",function(r){return t.kNx(o.order().SOODNO,r)||(o.order().SOODNO=r),r}),t.C$Y()()()(),t.I0R(13,"div",7)(14,"nz-form-item")(15,"nz-form-label",8),t.OEk(16,"PT v\u1eadn chuy\u1ec3n: "),t.C$Y(),t.I0R(17,"nz-form-control",9)(18,"nz-select",11),t.iHE("ngModelChange",function(r){return t.kNx(o.order().tot020_ordhed.DELIMTHDCD,r)||(o.order().tot020_ordhed.DELIMTHDCD=r),r}),t.c53(19,sn,1,2,"nz-option",32,t.oxv),t.C$Y()()()(),t.I0R(21,"div",7)(22,"nz-form-item")(23,"nz-form-label",8),t.OEk(24,"PT Thanh to\xe1n"),t.C$Y(),t.I0R(25,"nz-form-control",9)(26,"nz-select",12),t.iHE("ngModelChange",function(r){return t.kNx(o.order().tot020_ordhed.PAYMETHDCD,r)||(o.order().tot020_ordhed.PAYMETHDCD=r),r}),t.c53(27,ln,1,2,"nz-option",32,t.oxv),t.C$Y()()()()(),t.I0R(29,"div",6)(30,"div",7)(31,"nz-form-item")(32,"nz-form-label",8),t.OEk(33,"Tr\u1ea1ng th\xe1i"),t.C$Y(),t.I0R(34,"nz-form-control",9)(35,"input",13),t.iHE("ngModelChange",function(r){return t.kNx(o.order().STSNM,r)||(o.order().STSNM=r),r}),t.C$Y()()()(),t.I0R(36,"div",7)(37,"nz-form-item")(38,"nz-form-label",8),t.OEk(39,"Ng\xe0y \u0111\u1eb7t h\xe0ng"),t.C$Y(),t.I0R(40,"nz-form-control",9)(41,"nz-date-picker",14),t.iHE("ngModelChange",function(r){return t.kNx(o.order().tot020_ordhed.ORDERDATE,r)||(o.order().tot020_ordhed.ORDERDATE=r),r}),t.qCj("ngModelChange",function(r){return o.onChangeOrddate(r)}),t.C$Y()()()(),t.I0R(42,"div",7)(43,"nz-form-item")(44,"nz-form-label",8),t.OEk(45,"Ng\xe0y xu\u1ea5t h\xe0ng"),t.C$Y(),t.I0R(46,"nz-form-control",9)(47,"nz-date-picker",15),t.iHE("ngModelChange",function(r){return t.kNx(o.order().tot020_ordhed.SHIPDATE,r)||(o.order().tot020_ordhed.SHIPDATE=r),r}),t.qCj("ngModelChange",function(r){return o.onChangeShipdate(r)}),t.C$Y()()()()(),t.I0R(48,"div",6)(49,"div",7)(50,"nz-form-item")(51,"nz-form-label",8),t.OEk(52,"Ghi ch\xfa"),t.C$Y(),t.I0R(53,"nz-form-control")(54,"textarea",16),t.iHE("ngModelChange",function(r){return t.kNx(o.order().tot020_ordhed.SOREMARK,r)||(o.order().tot020_ordhed.SOREMARK=r),r}),t.C$Y()()()()()(),t.I0R(55,"nz-card",5)(56,"div",6)(57,"div",7)(58,"nz-form-item")(59,"nz-form-label",8),t.OEk(60,"M\xe3 kh\xe1ch h\xe0ng"),t.C$Y(),t.I0R(61,"nz-form-control",9)(62,"nz-input-group",17)(63,"input",18),t.iHE("ngModelChange",function(r){return t.kNx(o.order().tot020_ordhed.CSTMCD,r)||(o.order().tot020_ordhed.CSTMCD=r),r}),t.C$Y()(),t.yuY(64,cn,2,0,"ng-template",null,19,t.gJz),t.C$Y()()(),t.I0R(66,"div",7)(67,"nz-form-item")(68,"nz-form-label",8),t.OEk(69,"T\xean kh\xe1ch h\xe0ng"),t.C$Y(),t.I0R(70,"nz-form-control",9)(71,"input",20),t.iHE("ngModelChange",function(r){return t.kNx(o.userDetail().CSTNAME,r)||(o.userDetail().CSTNAME=r),r}),t.C$Y()()()(),t.I0R(72,"div",7)(73,"nz-form-item")(74,"nz-form-label",8),t.OEk(75,"S\u1ed1 \u0111i\u1ec7n tho\xe0i"),t.C$Y(),t.I0R(76,"nz-form-control",9)(77,"input",21),t.iHE("ngModelChange",function(r){return t.kNx(o.userDetail().CSTMOBILE,r)||(o.userDetail().CSTMOBILE=r),r}),t.C$Y()()()()(),t.I0R(78,"div",6)(79,"div",7)(80,"nz-form-item")(81,"nz-form-label",8),t.OEk(82,"\u0110\u1ecba ch\u1ec9"),t.C$Y(),t.I0R(83,"nz-form-control",9)(84,"input",22),t.iHE("ngModelChange",function(r){return t.kNx(o.userDetail().CSTADDRESS,r)||(o.userDetail().CSTADDRESS=r),r}),t.C$Y()()()()()(),t.yuY(85,pn,2,2,"ng-template",null,23,t.gJz),t.C$Y(),t.I0R(87,"nz-tab",24)(88,"h2"),t.OEk(89,"Thanh to\xe1n"),t.C$Y()()()(),t.I0R(90,"app-card-table-wrap",25),t.qCj("reload",function(){return o.reloadTable()}),t.I0R(91,"app-ant-table",26),t.qCj("changePageNum",function(r){return o.getDataList(r)}),t.C$Y(),t.yuY(92,Cn,1,1,"ng-template",null,27,t.gJz)(94,zn,4,1,"ng-template",null,28,t.gJz)(96,En,2,4,"ng-template",null,29,t.gJz),t.C$Y(),t.yuY(98,Sn,1,1,"ng-template",null,30,t.gJz)(100,In,1,1,"ng-template",null,31,t.gJz),t.C$Y(),t.I0R(102,"pre"),t.OEk(103,"    "),t.OEk(104,"\n"),t.C$Y()),2&i){const a=t.Gew(65),r=t.Gew(86),G=t.Gew(99),vn=t.Gew(101);t.E7m("pageHeaderInfo",o.pageHeaderInfo),t.yG2(5),t.E7m("nzBodyStyle",t.q4q(114,X)),t.yG2(),t.E7m("nzGutter",t.q4q(115,z)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.order().SOODNO),t.E7m("readOnly",!0)("ngClass",t.q4q(116,g)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.order().tot020_ordhed.DELIMTHDCD),t.yG2(),t.oho(o.listDelimth()),t.yG2(2),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.order().tot020_ordhed.PAYMETHDCD),t.yG2(),t.oho(o.listPaymeth()),t.yG2(2),t.E7m("nzGutter",t.q4q(117,z)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.order().STSNM),t.E7m("readOnly",!0)("ngClass",t.q4q(118,g)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.order().tot020_ordhed.ORDERDATE),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.order().tot020_ordhed.SHIPDATE),t.yG2(),t.E7m("nzGutter",t.q4q(119,z)),t.yG2(),t.E7m("nzLg",24)("nzMd",24)("nzSm",24)("nzXl",24)("nzXs",24)("nzXXl",24),t.yG2(5),t.OKB("ngModel",o.order().tot020_ordhed.SOREMARK),t.E7m("nzAutosize",t.q4q(120,Dn)),t.yG2(),t.E7m("nzBodyStyle",t.q4q(121,X)),t.yG2(),t.E7m("nzGutter",t.q4q(122,z)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.E7m("nzAddOnAfter",a),t.yG2(),t.OKB("ngModel",o.order().tot020_ordhed.CSTMCD),t.E7m("readOnly",!0)("ngClass",t.q4q(123,g)),t.yG2(3),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.userDetail().CSTNAME),t.E7m("readOnly",!0)("ngClass",t.q4q(124,g)),t.yG2(),t.E7m("nzLg",8)("nzMd",12)("nzSm",24)("nzXl",8)("nzXs",24)("nzXXl",8),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.userDetail().CSTMOBILE),t.E7m("readOnly",!0)("ngClass",t.q4q(125,g)),t.yG2(),t.E7m("nzGutter",t.q4q(126,z)),t.yG2(),t.E7m("nzLg",24)("nzMd",24)("nzSm",24)("nzXl",24)("nzXs",24)("nzXXl",24),t.yG2(4),t.E7m("nzErrorTip",r),t.yG2(),t.OKB("ngModel",o.userDetail().CSTADDRESS),t.E7m("readOnly",!0)("ngClass",t.q4q(127,g)),t.yG2(6),t.E7m("tableTitle","Danh s\xe1ch S\u1ea3n ph\u1ea9m")("btnTpl",G)("btnConfirm",vn),t.yG2(),t.E7m("tableConfig",o.tableConfig)("tableData",o.dataList)}},dependencies:[H.Q,S.Wy,S.If,w.fO,w.iO,_.VL,_.eE,_.Mh,c.y,c.sz,c.ot,c.ue,c.u,c._G,c.SC,y.OA,y.cv,y.qG,y.cL,u.WO,d.QD,d.ox,u.BN,u.qU,u.Qo,u.YZ,d.Ko,h.EV,h.Ez,D.k,R.o9,M.K6,M.g1,M.Yh,m.QF,f.iq,f.Q9,Y.E,qt.s,c.sl,A.Q,m.cf]})}return e})()}}]);