"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[9788],{9788:(de,F,r)=>{r.r(F),r.d(F,{HuongdanComponent:()=>se});var T=r(5855),d=r(9401),A=r(8746),it=r(2195),ot=r(5529),st=r(4178),rt=r(4895),lt=r(5656),M=r(8877),I=r(4259),Z=r(3642),m=r(4701),H=r(2701),t=r(2223),U=r(1655),b=r(4556),dt=r(4246);let k=(()=>{class n{constructor(e){this.http=e}Create(e){return this.http.post(b.hq,e,{needSuccessInfo:!1})}Detail(e){return this.http.post(b.Qq,{id:e},{needSuccessInfo:!1})}getIdyoutube(e){return this.http.post(b._Q,{urldisplayid:e},{needSuccessInfo:!1})}Update(e){return this.http.post(b.A4,e,{needSuccessInfo:!1})}PostAll(e){return this.http.post(b.Wo,e,{needSuccessInfo:!1})}PostSearchParams(e){return this.http.post(b.YV,e,{needSuccessInfo:!1})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(dt.q))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var ut=r(4755),C=r(7579),p=r(1135),f=r(9646),P=r(9751),x=r(576),X=r(3268);function V(n,o,e){return e?V(n,o).pipe((0,X.Z)(e)):new P.y(a=>{const i=(...l)=>a.next(1===l.length?l[0]:l),s=n(i);return(0,x.m)(o)?()=>o(i,s):void 0})}var y=r(9841),Y=r(9635),ht=r(6451),Q=r(5698),R=r(8675),z=r(4004),ct=r(8505),L=r(2722),pt=r(4033),mt=r(8421),E=r(4482);const ft={connector:()=>new C.x};function J(n,o=ft){const{connector:e}=o;return(0,E.e)((a,i)=>{const s=e();(0,mt.Xf)(n(function gt(n){return new P.y(o=>n.subscribe(o))}(s))).subscribe(i),i.add(a.subscribe(s))})}var zt=r(3900),vt=r(5577),D=r(1365),St=r(5026),Ct=r(1884);const{isArray:_t}=Array;function Tt(n){return 1===n.length&&_t(n[0])?n[0]:n}var Pt=r(3269);function O(...n){const o=(0,Pt.jO)(n);return o?(0,Y.z)(O(...n),(0,X.Z)(o)):(0,E.e)((e,a)=>{(0,y.l)([e,...Tt(n)])(a)})}var At=r(5403),xt=r(9300);const Yt=["youtubeContainer"];let j=(()=>{class n{get videoId(){return this._videoId.value}set videoId(e){this._videoId.next(e)}get height(){return this._height.value}set height(e){this._height.next(e||390)}get width(){return this._width.value}set width(e){this._width.next(e||640)}set startSeconds(e){this._startSeconds.next(e)}set endSeconds(e){this._endSeconds.next(e)}set suggestedQuality(e){this._suggestedQuality.next(e)}get playerVars(){return this._playerVars.value}set playerVars(e){this._playerVars.next(e)}get disableCookies(){return this._disableCookies.value}set disableCookies(e){this._disableCookies.next(!!e)}constructor(e,a){this._ngZone=e,this._youtubeContainer=new C.x,this._destroyed=new C.x,this._playerChanges=new p.X(void 0),this._videoId=new p.X(void 0),this._height=new p.X(390),this._width=new p.X(640),this._startSeconds=new p.X(void 0),this._endSeconds=new p.X(void 0),this._suggestedQuality=new p.X(void 0),this._playerVars=new p.X(void 0),this._disableCookies=new p.X(!1),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=(0,ut.NF)(a)}ngOnInit(){if(!this._isBrowser)return;let e=(0,f.of)(!0);if(!window.YT||!window.YT.Player){const s=new C.x;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>s.next(!0))},e=s.pipe((0,Q.q)(1),(0,R.O)(!1))}const a=this._disableCookies.pipe((0,z.U)(s=>s?"https://www.youtube-nocookie.com":void 0)),i=function wt(n,o,e,a,i,s,l,h){const g=(0,y.a)([o,e,l]).pipe((0,D.M)((0,y.a)([i,s])),(0,z.U)(([v,u])=>{const[c,S,N]=v,[re,le]=u;return c?{videoId:c,playerVars:N,width:re,height:le,host:S}:void 0}));return(0,y.a)([n,g,(0,f.of)(h)]).pipe(function Nt(n){return(0,Y.z)(O(n),function It(n){return(0,E.e)((o,e)=>{let a=!1,i=0;o.subscribe((0,At.x)(e,s=>(a||(a=!n(s,i++)))&&e.next(s)))})}(([o,e])=>!e),(0,z.U)(([o])=>o))}(a),(0,St.R)(Ft,void 0),(0,Ct.x)())}(this._youtubeContainer,this._videoId,a,e,this._width,this._height,this._playerVars,this._ngZone).pipe((0,ct.b)(s=>{this._playerChanges.next(s)}),function Dt(n){return(0,vt.z)(o=>o?W(o)?(0,f.of)(o):new P.y(e=>{let a=!1,i=!1;const s=l=>{i=!0,a||(l.target.removeEventListener("onReady",s),e.next(l.target))};return o.addEventListener("onReady",s),()=>{a=!0,i||n(o)}}).pipe((0,Q.q)(1),(0,R.O)(void 0)):(0,f.of)(void 0))}(s=>{W(s)||s.destroy()}),(0,L.R)(this._destroyed),function bt(n){return n?o=>J(n)(o):o=>function yt(n,o){const e=(0,x.m)(n)?n:()=>n;return(0,x.m)(o)?J(o,{connector:e}):a=>new pt.c(a,e)}(new C.x)(o)}());i.subscribe(s=>{this._player=s,s&&this._pendingPlayerState&&this._initializePlayer(s,this._pendingPlayerState),this._pendingPlayerState=void 0}),function Lt(n,o,e){(0,y.a)([n,o,e]).subscribe(([a,i,s])=>a&&a.setSize(i,s))}(i,this._width,this._height),function Et(n,o){(0,y.a)([n,o]).subscribe(([e,a])=>e&&a&&e.setPlaybackQuality(a))}(i,this._suggestedQuality),function Mt(n,o,e,a,i,s){const l=(0,y.a)([e,a]).pipe((0,z.U)(([u,c])=>({startSeconds:u,endSeconds:c}))),h=l.pipe(w(n,u=>!!u&&!function Zt(n){const o=n.getPlayerState();return o!==YT.PlayerState.UNSTARTED&&o!==YT.PlayerState.CUED}(u))),g=o.pipe(w(n,(u,c)=>!!u&&u.videoId!==c)),v=n.pipe(w((0,y.a)([o,l]),([u,c],S)=>!(!S||u==S.videoId&&!c.startSeconds&&!c.endSeconds)));(0,ht.T)(v,g,h).pipe((0,D.M)((0,y.a)([n,o,l,i])),(0,z.U)(([u,c])=>c),(0,L.R)(s)).subscribe(([u,c,S,N])=>{!c||!u||(u.videoId=c,u.cueVideoById({videoId:c,suggestedQuality:N,...S}))})}(i,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),i.connect()}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=YT.PlayerState.PLAYING}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=YT.PlayerState.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=YT.PlayerState.CUED}seekTo(e,a){this._player?this._player.seekTo(e,a):this._getPendingState().seek={seconds:e,allowSeekAhead:a}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:YT.PlayerState.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(e,a){const{playbackState:i,playbackRate:s,volume:l,muted:h,seek:g}=a;switch(i){case YT.PlayerState.PLAYING:e.playVideo();break;case YT.PlayerState.PAUSED:e.pauseVideo();break;case YT.PlayerState.CUED:e.stopVideo()}null!=s&&e.setPlaybackRate(s),null!=l&&e.setVolume(l),null!=h&&(h?e.mute():e.unMute()),null!=g&&e.seekTo(g.seconds,g.allowSeekAhead)}_getLazyEmitter(e){return this._playerChanges.pipe((0,zt.w)(a=>a?V(i=>{a.addEventListener(e,i)},i=>{try{a.removeEventListener&&a.removeEventListener(e,i)}catch{}}):(0,f.of)()),a=>new P.y(i=>a.subscribe({next:s=>this._ngZone.run(()=>i.next(s)),error:s=>i.error(s),complete:()=>i.complete()})),(0,L.R)(this._destroyed))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.R0b),t.Y36(t.Lbi))},n.\u0275cmp=t.Xpm({type:n,selectors:[["youtube-player"]],viewQuery:function(e,a){if(1&e&&t.Gf(Yt,5),2&e){let i;t.iGM(i=t.CRH())&&(a.youtubeContainer=i.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",disableCookies:"disableCookies",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,a){1&e&&t._UZ(0,"div",null,0)},encapsulation:2,changeDetection:0}),n})();function Ft(n,[o,e,a]){if(n&&e&&(n.playerVars!==e.playerVars||n.host!==e.host))n.destroy();else{if(!e)return void(n&&n.destroy());if(n)return n}const i=a.runOutsideAngular(()=>new YT.Player(o,e));return i.videoId=e.videoId,i.playerVars=e.playerVars,i.host=e.host,i}function W(n){return"getPlayerStatus"in n}function w(n,o){return(0,Y.z)((0,D.M)(n),(0,xt.h)(([e,a])=>o(a,e)),(0,z.U)(([e])=>e))}let Ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();var K=r(8551);let Ut=(()=>{class n{constructor(e,a,i){this.modalRef=e,this.fb=a,this.cdf=i,this.apiLoaded=!1,this.videoId="cH_T9iFJ1kw",this.height=400,this.width=670,this.startSeconds=0,this.endSeconds=120}ngOnInit(){if(null!=this.params.idvideo&&this.params.idvideo.length>0&&(this.videoId=this.params.idvideo),!this.apiLoaded){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e),this.apiLoaded=!0}}getAsyncFnData(e){return(0,f.of)(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(K.Lf),t.Y36(d.qu),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-youtube"]],standalone:!0,features:[t.jDz],decls:1,vars:3,consts:[["suggestedQuality","small",3,"videoId","height","width"]],template:function(e,a){1&e&&t._UZ(0,"youtube-player",0),2&e&&t.Q6J("videoId",a.videoId)("height",a.height)("width",a.width)},dependencies:[Ht,j],encapsulation:2,changeDetection:0}),n})();var $=r(7017);let q=(()=>{class n{constructor(e){this.modalWrapService=e}getContentComponent(){return Ut}show(e={},a){return this.modalWrapService.show(this.getContentComponent(),e,a)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG($.U))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var tt=r(9085),et=r(6706);const kt=["huongdanTpl"];let Xt=(()=>{class n{constructor(e,a,i,s,l,h){this.cdr=e,this.spinService=a,this.dataService=i,this.youtubeModalService=s,this.router=l,this.menusService=h,this.destroyRef=(0,t.f3M)(t.ktI),this.formItemNm={},this.pageHeaderInfo={title:"",breadcrumb:["","",""],extra:this.huongdanTpl}}ngOnInit(){this.formItemName()}showVideo(){this.dataService.getIdyoutube(this.router.url).pipe((0,T.sL)(this.destroyRef)).subscribe(a=>{this.youtubeModalService.show({nzTitle:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng"},{showcomfirm:!1,idvideo:a}).subscribe(i=>{})})}formItemName(){this.spinService.setCurrentGlobalSpinStore(!0),this.menusService.getMenuDetailFromUrl(this.router.url).subscribe(a=>{a.forEach(i=>{this.formItemNm[i.stt]=i.title1}),this.pageHeaderInfo={title:this.formItemNm[2],breadcrumb:[this.formItemNm[1],this.formItemNm[7],this.formItemNm[2]],extra:this.huongdanTpl},this.cdr.markForCheck(),this.spinService.setCurrentGlobalSpinStore(!1)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(U.a),t.Y36(k),t.Y36(q),t.Y36(tt.F0),t.Y36(et.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-abs"]],viewQuery:function(e,a){if(1&e&&t.Gf(kt,7),2&e){let i;t.iGM(i=t.CRH())&&(a.huongdanTpl=i.first)}},standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(e,a){},encapsulation:2,changeDetection:0}),n})(),Vt=(()=>{class n{constructor(){this.datascArray$=new p.X({}),this.idyoutube$=new p.X("")}setDatascArrayStore(e){this.datascArray$.next(e)}getDatascArrayStore(){return this.datascArray$.asObservable()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var nt=r(3272),Qt=r(4902),_=r(1929),at=r(8397),Rt=r(5216);let Jt=(()=>{class n{constructor(e,a,i,s){this.modalRef=e,this.fb=a,this.vf=i,this.message=s,this.isEdit=!1}getAsyncFnData(e){return(0,f.of)(e)}getCurrentValue(){return(0,Qt.r7)(this.addEditForm)?(0,f.of)(this.addEditForm.value):(0,f.of)(!1)}get f(){return this.addEditForm.controls}ngOnInit(){this.initForm(),Object.keys(this.params).length>0&&this.addEditForm.patchValue(this.params)}initForm(){this.addEditForm=this.fb.group({idyoutube:[null,[d.kI.required]],urldisplayid:[null,[d.kI.required]],title:[null],content:[null]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(K.Lf),t.Y36(d.qu),t.Y36(Rt.m),t.Y36(nt.dD))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-huongdan-modal"]],standalone:!0,features:[t.jDz],decls:21,vars:17,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","idyoutube",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ID Youtube",3,"nzSm","nzXs"],["nz-input","","formControlName","idyoutube","name","idyoutube","placeholder","Vui l\xf2ng nh\u1eadp ID Youtube","id","idyoutube"],["nzRequired","","nzFor","urldisplayid",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp m\xe3 m\xe0n h\xecnh",3,"nzSm","nzXs"],["nz-input","","formControlName","urldisplayid","name","urldisplayid","placeholder","vd: khachhang/spkh00101","id","urldisplayid"],["nzFor","title",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ",3,"nzSm","nzXs"],["nz-input","","formControlName","title","name","title","placeholder","Vui l\xf2ng nh\u1eadp ...","id","title"],["nzFor","content",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ...",3,"nzSm","nzXs"],["nz-input","","formControlName","content","name","content","placeholder","Vui l\xf2ng nh\u1eadp ...","id","content"]],template:function(e,a){1&e&&(t.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t._uU(3,"ID Youtube"),t.qZA(),t.TgZ(4,"nz-form-control",2),t._UZ(5,"input",3),t.qZA()(),t.TgZ(6,"nz-form-item")(7,"nz-form-label",4),t._uU(8,"M\xe3 m\xe0n h\xecnh"),t.qZA(),t.TgZ(9,"nz-form-control",5),t._UZ(10,"input",6),t.qZA()(),t.TgZ(11,"nz-form-item")(12,"nz-form-label",7),t._uU(13,"Ti\xeau \u0111\u1ec1"),t.qZA(),t.TgZ(14,"nz-form-control",8),t._UZ(15,"input",9),t.qZA()(),t.TgZ(16,"nz-form-item")(17,"nz-form-label",10),t._uU(18,"N\u1ed9i dung"),t.qZA(),t.TgZ(19,"nz-form-control",11),t._UZ(20,"input",12),t.qZA()()()),2&e&&(t.Q6J("formGroup",a.addEditForm),t.xp6(2),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24))},dependencies:[d.u5,d._Y,d.Fj,d.JJ,d.JL,m.U5,_.t3,_.SK,m.Lr,m.Nx,m.iK,m.Fd,d.UX,d.sg,d.u,_.Jb,at.o7,at.Zp,I.sL],encapsulation:2,changeDetection:0}),n})(),Ot=(()=>{class n{constructor(e){this.modalWrapService=e}getContentComponent(){return Jt}show(e={},a){return this.modalWrapService.show(this.getContentComponent(),e,a)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG($.U))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Gt=r(2242),Bt=r(4247);const jt=["operationTpl"];function Wt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showVideo())}),t._UZ(1,"span",21),t._uU(2,"H\u01b0\u1edbng d\u1eabn "),t.qZA()}2&n&&t.Q6J("nzSize","large")}function Kt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"span",23)(1,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().id,s=t.oxw();return t.KtG(s.edit(i))}),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(2),t.Oqu(e.formItemNm[10])}}function $t(n,o){if(1&n&&t.YNc(0,Kt,3,1,"span",22),2&n){const e=t.oxw();t.Q6J("appAuth",e.ActionCode.HuongdanUpdate)}}function qt(n,o){}function te(n,o){}function ee(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.add())}),t._UZ(1,"i",29),t._uU(2),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(2),t.hij(" ",e.formItemNm[8]," ")}}function ne(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.allDel())}),t._UZ(1,"i",30),t._uU(2),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(2),t.hij(" ",e.formItemNm[9]," ")}}function ae(n,o){if(1&n){const e=t.EpF();t.YNc(0,ee,3,1,"button",25),t.YNc(1,ne,3,1,"button",26),t.TgZ(2,"button",27),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.error())}),t._uU(3,"chuy\u1ec3n sang trang l\u1ed7i"),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("appAuth",e.ActionCode.HuongdanAdd),t.xp6(1),t.Q6J("appAuth",e.ActionCode.HuongdanallDel)}}const ie=function(){return{"padding-bottom":0}},oe=function(){return{xs:8,sm:16,md:24}};let se=(()=>{class n extends Xt{constructor(e,a,i,s,l,h,g,v,u){super(s,l,h,g,v,u),this.datascStoreService=e,this.message=a,this.huongdanModalService=i,this.cdr=s,this.spinService=l,this.dataService=h,this.youtubeModalService=g,this.router=v,this.menusService=u,this.ActionCode=it.h,this.searchParam={},this.dataList=[],this.checkedCashArray=[],this.visibleOptions=[]}ngOnInit(){super.ngOnInit(),this.initTable(),this.visibleOptions=[...M.b.transformMapToArray(M.V.visible,2)]}add(){this.huongdanModalService.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(e=>{!e||0===e.status||(this.tableLoading(!0),this.addEditData(e.modalValue,"Create"))},e=>this.tableLoading(!1))}edit(e){this.dataService.Detail(e).pipe((0,T.sL)(this.destroyRef)).subscribe(a=>{this.huongdanModalService.show({nzTitle:this.formItemNm[10]},a).subscribe(({modalValue:i,status:s})=>{0!==s&&(i.id=e,this.tableLoading(!0),this.addEditData(i,"Update"))})})}addEditData(e,a){this.dataService[a](e).pipe((0,A.x)(()=>{this.tableLoading(!1)})).subscribe(i=>{this.getDataList()})}allDel(){}error(){this.router.navigate(["/error404"])}searchName(e){this.dataService.PostSearchParams({pageSize:this.tableConfig.pageSize,pageNum:1,filters:e.target.value}).pipe((0,A.x)(()=>{this.tableLoading(!1)}),(0,T.sL)(this.destroyRef)).subscribe(i=>{console.log(i);const{list:s,total:l,pageNum:h}=i;this.dataList=[...s],this.tableConfig.total=l,this.tableConfig.pageIndex=h,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}getDataList(e){this.tableLoading(!0),this.dataService.PostAll({pageSize:this.tableConfig.pageSize,pageNum:e?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,A.x)(()=>{this.tableLoading(!1)}),(0,T.sL)(this.destroyRef)).subscribe(i=>{const{list:s,total:l,pageNum:h}=i;this.dataList=[...s],this.tableConfig.total=l,this.tableConfig.pageIndex=h,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray],this.initTable()})}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(e){this.tableConfig.loading=e,this.tableChangeDectction()}resetForm(){this.searchParam={},this.getDataList()}selectedChecked(e){this.checkedCashArray=[...e]}changePageSize(e){this.tableConfig.pageSize=e}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:this.formItemNm[12],field:"idyoutube",width:180},{title:this.formItemNm[13],width:180,field:"urldisplayid"},{title:this.formItemNm[14],width:120,field:"title"},{title:this.formItemNm[15],width:150,field:"content"},{title:this.formItemNm[16],tdTemplate:this.operationTpl,width:250,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Vt),t.Y36(nt.dD),t.Y36(Ot),t.Y36(t.sBO),t.Y36(U.a),t.Y36(k),t.Y36(q),t.Y36(tt.F0),t.Y36(et.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-huongdan"]],viewQuery:function(e,a){if(1&e&&t.Gf(jt,7),2&e){let i;t.iGM(i=t.CRH())&&(a.operationTpl=i.first)}},standalone:!0,features:[t.qOj,t.jDz],decls:31,vars:33,consts:[[3,"pageHeaderInfo"],["huongdanTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzFor"],["nz-input","","name","text","placeholder","search name",3,"ngModel","ngModelChange","keyup.enter"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"tableTitle","btnTpl","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["operationTpl",""],["linkidTpl",""],["sotienno",""],["tableBtns",""],["nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","star","nzTheme","outline"],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"click"],["nz-button","","nzType","primary","class","m-r-8",3,"click",4,"appAuth"],["nz-button","","nzType","default",3,"click",4,"appAuth"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"],["nz-icon","","nzType","delete"]],template:function(e,a){if(1&e&&(t._UZ(0,"app-page-header",0),t.YNc(1,Wt,3,1,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2)(4,"nz-card",3)(5,"form",4)(6,"div",5)(7,"div",6)(8,"nz-form-item")(9,"nz-form-label",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-form-control")(12,"input",8),t.NdJ("ngModelChange",function(s){return a.searchParam.urldisplayid=s})("keyup.enter",function(s){return a.searchName(s)}),t.qZA()()()(),t._UZ(13,"div",6),t.TgZ(14,"div",9)(15,"button",10),t.NdJ("click",function(){return a.getDataList()}),t._UZ(16,"i",11),t._uU(17),t.qZA(),t.TgZ(18,"button",12),t.NdJ("click",function(){return a.resetForm()}),t._UZ(19,"i",13),t._uU(20),t.qZA()()()()(),t.TgZ(21,"app-card-table-wrap",14),t.NdJ("reload",function(){return a.reloadTable()}),t.TgZ(22,"app-ant-table",15),t.NdJ("selectedChange",function(s){return a.selectedChecked(s)})("changePageSize",function(s){return a.changePageSize(s)})("changePageNum",function(s){return a.getDataList(s)}),t.qZA(),t.YNc(23,$t,1,1,"ng-template",null,16,t.W1O),t.YNc(25,qt,0,0,"ng-template",null,17,t.W1O),t.YNc(27,te,0,0,"ng-template",null,18,t.W1O),t.qZA(),t.YNc(29,ae,4,2,"ng-template",null,19,t.W1O),t.qZA()),2&e){const i=t.MAs(30);t.Q6J("pageHeaderInfo",a.pageHeaderInfo),t.xp6(4),t.Q6J("nzBodyStyle",t.DdM(31,ie)),t.xp6(2),t.Q6J("nzGutter",t.DdM(32,oe)),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(3),t.Oqu(a.formItemNm[4]),t.xp6(2),t.Q6J("ngModel",a.searchParam.urldisplayid),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzType","primary"),t.xp6(2),t.Oqu(a.formItemNm[5]),t.xp6(3),t.Oqu(a.formItemNm[6]),t.xp6(1),t.Q6J("tableTitle",a.formItemNm[7])("btnTpl",i),t.xp6(1),t.Q6J("checkedCashArrayFromComment",a.checkedCashArray)("tableConfig",a.tableConfig)("tableData",a.dataList)}},dependencies:[rt.q,I.sL,I.ix,Gt.w,Bt.dQ,Z.vh,Z.bd,d.u5,d._Y,d.Fj,d.JJ,d.JL,d.On,d.F,m.U5,_.t3,_.SK,m.Lr,m.Nx,m.iK,m.Fd,st.p,ot.q,H.PV,H.Ls,lt.x],encapsulation:2,changeDetection:0}),n})()}}]);