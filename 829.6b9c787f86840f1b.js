"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[829],{3483:(E,i,n)=>{n.r(i),n.d(i,{GaodeMapComponent:()=>c});var _=n(9401),m=n(6925),g=n.n(m),l=n(4895),h=n(5037),s=n(3642),d=n(8397),e=n(2223);let c=(()=>{class o{constructor(a){this.cdr=a,this.pageHeaderInfo={title:"\u9ad8\u5fb7\u5730\u56fe\uff0c\u53ef\u4e0d\u8981\u66b4\u9732\u884c\u8e2a\u4e86\u54df",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u56fe\u8868","\u9ad8\u5fb7\u5730\u56fe"]},this.marker=[116.437253,39.935033],this.markerPosition=this.marker.join(",")}ngAfterViewInit(){g().load({key:"1c1b77fae2e59c25eb26ced9a0801103",version:"1.4.15",AMapUI:{version:"1.1",plugins:["overlay/SimpleMarker"]}}).then(a=>{let t=new a.Map("container",{resizeEnable:!0,zoom:11,center:[116.397428,39.90923]});const r=new a.Marker({position:new a.LngLat(this.marker[0],this.marker[1]),draggable:!0});r.on("dragend",()=>{this.marker=[r.getPosition().R,r.getPosition().Q],this.markerPosition=this.marker.join(","),this.cdr.markForCheck(),console.log(this.markerPosition)}),r.setMap(t)}).catch(a=>{console.error(a)})}ngOnInit(){}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-gaode-map"]],standalone:!0,features:[e.jDz],decls:6,vars:2,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-input","",3,"ngModel","ngModelChange"],["id","container",2,"height","500px","width","100%"]],template:function(a,t){1&a&&(e._UZ(0,"app-page-header",0),e.TgZ(1,"div",1)(2,"nz-card"),e._UZ(3,"app-water-mark"),e.TgZ(4,"input",2),e.NdJ("ngModelChange",function(M){return t.markerPosition=M}),e.qZA(),e._UZ(5,"div",3),e.qZA()()),2&a&&(e.Q6J("pageHeaderInfo",t.pageHeaderInfo),e.xp6(4),e.Q6J("ngModel",t.markerPosition))},dependencies:[l.q,s.vh,s.bd,h.U,d.o7,d.Zp,_.u5,_.Fj,_.JJ,_.On],encapsulation:2,changeDetection:0}),o})()}}]);