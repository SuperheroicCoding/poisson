webpackJsonp([4],{lVUo:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("LMZF"),i=function(){},o=t("911F"),u=t("SMsG"),a=t("YXpL"),r=t("V8+5"),s=t("Un6q"),c=t("pvRN"),d=t("Ioj9"),h=function(){function n(n,l){this.x=n,this.y=l}return n.prototype.mag=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},n.prototype.magFast=function(){return this.x*this.x+this.y*this.y},n.prototype.unit=function(){return this.scalar(1/this.mag())},n.prototype.scalar=function(l){return new n(this.x*l,this.y*l)},n.prototype.setMag=function(n){return this.unit().scalar(n)},n.prototype.dot=function(n){return n.x*this.x+n.y*this.y},n.prototype.add=function(l,t){return new n(this.x+l,this.y+t)},n.prototype.addVec=function(l){return new n(this.x+l.x,this.y+l.y)},n.prototype.fastDist=function(n){return Math.abs(Math.pow(this.x-n.x,2)+Math.pow(this.y-n.y,2))},n.prototype.dist=function(n){return Math.sqrt(this.fastDist(n))},n}(),_=t("M0QU"),p=function(){function n(){this.onAddObject=new e.m,this.onReadyToPaint=new e.m,this.frameRate=0,this.time=1,this.maxR=2}return n.prototype.ngAfterContentInit=function(){var n=this;this.scetch=new _(function(l){return n.initP5(l)},this.p5Canvas.nativeElement)},n.prototype.onClick=function(n){this.onAddObject.emit(new h(n.offsetX,n.offsetY))},n.prototype.initP5=function(n){var l,t=this;n.preload=function(){l=n.loadImage("assets/wood.jpeg")},n.setup=function(){n.createCanvas(t.width,t.height,"webgl"),n.frameRate(60)},n.draw=function(){var e=n.frameCount,i=n.frameRate();if(i){e%30==0&&(t.frameRate=i);var o=Math.floor(1e3/i);t.time+=o}n.colorMode("hsl"),n.ambientLight(0,0,80);var u=-2*(n.mouseY/n.height-.5),a=2*(n.mouseX/n.width-.5),r=360*n.noise(.001*t.time+5e3),s=100*n.noise(.001*t.time+3e4);n.directionalLight(r,s,50,a,u,.25),n.camera(0,0,0),n.orbitControl(),n.background(0),n.push();var c=n.createVector(n.mouseX-n.width/2,n.mouseY-n.height/2);c.setMag(500),n.translate(c.x,c.y,30),n.fill(r,s,50),n.pop(),t.drawAreaFrame(n),t.circles&&t.circles.length&&(n.push(),n.translate(-n.width/2,-n.height/2),t.circles.forEach(function(e){n.texture(l),t.drawCircle(e,t.time,n)}),n.pop()),t.onReadyToPaint.emit(0)}},n.prototype.drawAreaFrame=function(n){var l=n.width/2;n.push(),n.translate(-l-10,0,10),n.cylinder(.5,n.height+20),n.pop(),n.push(),n.translate(l+10,0,10),n.cylinder(.5,n.height+20),n.pop(),n.push();var t=n.height/2;n.translate(0,-t-10,10),n.rotateZ(n.PI/2),n.cylinder(.5,n.width+20),n.pop(),n.push(),n.translate(0,t+10,10),n.rotateZ(n.PI/2),n.cylinder(.5,n.width+20),n.pop()},n.prototype.drawCircle=function(n,l,t){t.push();var e=n.pos,i=e.x,o=e.y;t.translate(Math.floor(i),Math.floor(o),10),t.rotate(n.pos.magFast(),t.createVector(i,o,0));var u=n.r;this.maxR=Math.max(this.maxR,u);var a=t.floor(t.map(u,1,this.maxR,4,24)),r=t.floor(t.map(u,1,this.maxR,4,16));t.sphere(u,a,r),t.pop()},n}(),f=e._1({encapsulation:0,styles:[["[_nghost-%COMP%]{-webkit-box-flex:0;-ms-flex:0 0 600px;flex:0 0 600px}"]],data:{}});function m(n){return e._25(2,[e._21(402653184,1,{p5Canvas:0}),(n()(),e._3(1,0,[[1,0],["p5Canvas",1]],null,1,"div",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClick(t)&&e),e},null,null)),(n()(),e._23(-1,null,["\n"])),(n()(),e._23(-1,null,["\n"])),(n()(),e._3(4,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._23(5,null,["",""])),(n()(),e._23(-1,null,["\n"]))],null,function(n,l){n(l,5,0,l.component.frameRate)})}var g=t("ESfO"),b=t("ghl+"),y=t("8Xfy"),v=t("ulOE"),C=t("Lpd/"),w=t("j5BN"),x=t("0nO6"),F=t("SlD5"),j=t("eoFs"),M=(t("GQSG"),5),k=function(){return function(){this.k$=new j.a(15),this.iterationsPerFrame$=new j.a(10),this.r$=new j.a(15),this.w=M/Math.sqrt(2)}}(),P=function(){function n(n){this.poissonConfig=n,this.playChanged=new e.m,this.onReset=new e.m,this.play=!1,this.subscriptions=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.poissonConfig.r$.subscribe(function(l){return n.radius=l})),this.subscriptions.push(this.poissonConfig.k$.subscribe(function(l){return n.k=l})),this.subscriptions.push(this.poissonConfig.iterationsPerFrame$.subscribe(function(l){return n.iterationsPerFrame=l}))},n.prototype.ngOnDestroy=function(){this.subscriptions.forEach(function(n){return n.unsubscribe()})},n.prototype.radiusChanged=function(n){n&&this.poissonConfig.r$.next(n)},n.prototype.kChanged=function(n){n&&this.poissonConfig.k$.next(n)},n.prototype.iterationsPerFrameChanged=function(n){n&&this.poissonConfig.iterationsPerFrame$.next(n)},n.prototype.emitPlay=function(){this.playChanged.emit(this.play)},n.prototype.togglePlay=function(){this.play=!this.play,this.emitPlay()},n.prototype.reset=function(){this.play=!1,this.emitPlay(),this.onReset.emit(!0)},n}(),S=e._1({encapsulation:0,styles:[[""]],data:{}});function R(n){return e._25(0,[(n()(),e._3(0,0,null,null,85,"mat-card",[["class","mat-card"]],null,null,null,c.d,c.a)),e._2(1,49152,null,0,d.a,[],null,null),(n()(),e._23(-1,0,["\n  "])),(n()(),e._3(3,0,null,0,10,"mat-card",[["class","mat-card"]],null,null,null,c.d,c.a)),e._2(4,49152,null,0,d.a,[],null,null),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(6,0,null,0,2,"button",[["mat-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.togglePlay()&&e),e},g.d,g.b)),e._2(7,180224,null,0,b.b,[e.k,r.a,y.g],null,null),(n()(),e._23(8,0,["",""])),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(10,0,null,0,2,"button",[["color","accent"],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reset()&&e),e},g.d,g.b)),e._2(11,180224,null,0,b.b,[e.k,r.a,y.g],{color:[0,"color"]},null),(n()(),e._23(-1,0,["Reset"])),(n()(),e._23(-1,0,["\n  "])),(n()(),e._23(-1,0,["\n  "])),(n()(),e._3(15,0,null,0,69,"mat-card",[["class","mat-card"]],null,null,null,c.d,c.a)),e._2(16,49152,null,0,d.a,[],null,null),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(18,0,null,0,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),e._2(19,16384,null,0,d.i,[],null,null),(n()(),e._23(-1,null,["Configs"])),(n()(),e._23(-1,0,["\n\n    "])),(n()(),e._3(22,0,null,0,19,"mat-input-container",[["class","mat-input-container mat-form-field"]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-focused",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,v.b,v.a)),e._2(23,7389184,null,7,C.a,[e.k,e.h,[2,w.h]],null,null),e._21(335544320,1,{_control:0}),e._21(335544320,2,{_placeholderChild:0}),e._21(335544320,3,{_labelChild:0}),e._21(603979776,4,{_errorChildren:1}),e._21(603979776,5,{_hintChildren:1}),e._21(603979776,6,{_prefixChildren:1}),e._21(603979776,7,{_suffixChildren:1}),(n()(),e._23(-1,1,["\n      "])),(n()(),e._3(32,0,null,1,8,"input",[["class","mat-input-element mat-form-field-autofill-control"],["id","radius"],["matInput",""],["min","5.0"],["name","radius"],["placeholder","Min Radius between points"],["step","0.1"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"]],function(n,l,t){var i=!0,o=n.component;return"input"===l&&(i=!1!==e._15(n,33)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==e._15(n,33).onTouched()&&i),"compositionstart"===l&&(i=!1!==e._15(n,33)._compositionStart()&&i),"compositionend"===l&&(i=!1!==e._15(n,33)._compositionEnd(t.target.value)&&i),"change"===l&&(i=!1!==e._15(n,34).onChange(t.target.value)&&i),"input"===l&&(i=!1!==e._15(n,34).onChange(t.target.value)&&i),"blur"===l&&(i=!1!==e._15(n,34).onTouched()&&i),"blur"===l&&(i=!1!==e._15(n,39)._focusChanged(!1)&&i),"focus"===l&&(i=!1!==e._15(n,39)._focusChanged(!0)&&i),"input"===l&&(i=!1!==e._15(n,39)._onInput()&&i),"ngModelChange"===l&&(i=!1!==(o.radius=t)&&i),"ngModelChange"===l&&(i=!1!==o.radiusChanged(t)&&i),i},null,null)),e._2(33,16384,null,0,x.d,[e.B,e.k,[2,x.a]],null,null),e._2(34,16384,null,0,x.s,[e.B,e.k],null,null),e._19(1024,null,x.j,function(n,l){return[n,l]},[x.d,x.s]),e._2(36,671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e._19(2048,null,x.k,null,[x.o]),e._2(38,16384,null,0,x.l,[x.k],null,null),e._2(39,933888,null,0,F.a,[e.k,r.a,[2,x.k],[2,x.n],[2,x.g],w.b,[8,null]],{id:[0,"id"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e._19(2048,[[1,4]],C.b,null,[F.a]),(n()(),e._23(-1,1,["\n    "])),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(43,0,null,0,19,"mat-input-container",[["class","mat-input-container mat-form-field"]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-focused",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,v.b,v.a)),e._2(44,7389184,null,7,C.a,[e.k,e.h,[2,w.h]],null,null),e._21(335544320,8,{_control:0}),e._21(335544320,9,{_placeholderChild:0}),e._21(335544320,10,{_labelChild:0}),e._21(603979776,11,{_errorChildren:1}),e._21(603979776,12,{_hintChildren:1}),e._21(603979776,13,{_prefixChildren:1}),e._21(603979776,14,{_suffixChildren:1}),(n()(),e._23(-1,1,["\n      "])),(n()(),e._3(53,0,null,1,8,"input",[["class","mat-input-element mat-form-field-autofill-control"],["id","samples"],["matInput",""],["min","1"],["name","samples"],["placeholder","Samples per iteration"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"]],function(n,l,t){var i=!0,o=n.component;return"input"===l&&(i=!1!==e._15(n,54)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==e._15(n,54).onTouched()&&i),"compositionstart"===l&&(i=!1!==e._15(n,54)._compositionStart()&&i),"compositionend"===l&&(i=!1!==e._15(n,54)._compositionEnd(t.target.value)&&i),"change"===l&&(i=!1!==e._15(n,55).onChange(t.target.value)&&i),"input"===l&&(i=!1!==e._15(n,55).onChange(t.target.value)&&i),"blur"===l&&(i=!1!==e._15(n,55).onTouched()&&i),"blur"===l&&(i=!1!==e._15(n,60)._focusChanged(!1)&&i),"focus"===l&&(i=!1!==e._15(n,60)._focusChanged(!0)&&i),"input"===l&&(i=!1!==e._15(n,60)._onInput()&&i),"ngModelChange"===l&&(i=!1!==(o.k=t)&&i),"ngModelChange"===l&&(i=!1!==o.kChanged(t)&&i),i},null,null)),e._2(54,16384,null,0,x.d,[e.B,e.k,[2,x.a]],null,null),e._2(55,16384,null,0,x.s,[e.B,e.k],null,null),e._19(1024,null,x.j,function(n,l){return[n,l]},[x.d,x.s]),e._2(57,671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e._19(2048,null,x.k,null,[x.o]),e._2(59,16384,null,0,x.l,[x.k],null,null),e._2(60,933888,null,0,F.a,[e.k,r.a,[2,x.k],[2,x.n],[2,x.g],w.b,[8,null]],{id:[0,"id"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e._19(2048,[[8,4]],C.b,null,[F.a]),(n()(),e._23(-1,1,["\n    "])),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(64,0,null,0,19,"mat-input-container",[["class","mat-input-container mat-form-field"]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-focused",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,v.b,v.a)),e._2(65,7389184,null,7,C.a,[e.k,e.h,[2,w.h]],null,null),e._21(335544320,15,{_control:0}),e._21(335544320,16,{_placeholderChild:0}),e._21(335544320,17,{_labelChild:0}),e._21(603979776,18,{_errorChildren:1}),e._21(603979776,19,{_hintChildren:1}),e._21(603979776,20,{_prefixChildren:1}),e._21(603979776,21,{_suffixChildren:1}),(n()(),e._23(-1,1,["\n      "])),(n()(),e._3(74,0,null,1,8,"input",[["class","mat-input-element mat-form-field-autofill-control"],["id","iterationsPerFrame"],["matInput",""],["min","1"],["name","iterationsPerFrame"],["placeholder","Iterations per frame"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"]],function(n,l,t){var i=!0,o=n.component;return"input"===l&&(i=!1!==e._15(n,75)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==e._15(n,75).onTouched()&&i),"compositionstart"===l&&(i=!1!==e._15(n,75)._compositionStart()&&i),"compositionend"===l&&(i=!1!==e._15(n,75)._compositionEnd(t.target.value)&&i),"change"===l&&(i=!1!==e._15(n,76).onChange(t.target.value)&&i),"input"===l&&(i=!1!==e._15(n,76).onChange(t.target.value)&&i),"blur"===l&&(i=!1!==e._15(n,76).onTouched()&&i),"blur"===l&&(i=!1!==e._15(n,81)._focusChanged(!1)&&i),"focus"===l&&(i=!1!==e._15(n,81)._focusChanged(!0)&&i),"input"===l&&(i=!1!==e._15(n,81)._onInput()&&i),"ngModelChange"===l&&(i=!1!==(o.iterationsPerFrame=t)&&i),"ngModelChange"===l&&(i=!1!==o.iterationsPerFrameChanged(t)&&i),i},null,null)),e._2(75,16384,null,0,x.d,[e.B,e.k,[2,x.a]],null,null),e._2(76,16384,null,0,x.s,[e.B,e.k],null,null),e._19(1024,null,x.j,function(n,l){return[n,l]},[x.d,x.s]),e._2(78,671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e._19(2048,null,x.k,null,[x.o]),e._2(80,16384,null,0,x.l,[x.k],null,null),e._2(81,933888,null,0,F.a,[e.k,r.a,[2,x.k],[2,x.n],[2,x.g],w.b,[8,null]],{id:[0,"id"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e._19(2048,[[15,4]],C.b,null,[F.a]),(n()(),e._23(-1,1,["\n    "])),(n()(),e._23(-1,0,["\n\n  "])),(n()(),e._23(-1,0,["\n"])),(n()(),e._23(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,11,0,"accent"),n(l,36,0,"radius",t.radius),n(l,39,0,"radius","Min Radius between points","number"),n(l,57,0,"samples",t.k),n(l,60,0,"samples","Samples per iteration","number"),n(l,78,0,"iterationsPerFrame",t.iterationsPerFrame),n(l,81,0,"iterationsPerFrame","Iterations per frame","number")},function(n,l){var t=l.component;n(l,6,0,e._15(l,7).disabled||null),n(l,8,0,t.play?"Pause":"Play"),n(l,10,0,e._15(l,11).disabled||null),n(l,22,1,[e._15(l,23)._control.errorState,e._15(l,23)._control.errorState,e._15(l,23)._canLabelFloat,e._15(l,23)._shouldLabelFloat(),e._15(l,23)._hideControlPlaceholder(),e._15(l,23)._control.disabled,e._15(l,23)._control.focused,e._15(l,23)._shouldForward("untouched"),e._15(l,23)._shouldForward("touched"),e._15(l,23)._shouldForward("pristine"),e._15(l,23)._shouldForward("dirty"),e._15(l,23)._shouldForward("valid"),e._15(l,23)._shouldForward("invalid"),e._15(l,23)._shouldForward("pending")]),n(l,32,1,[e._15(l,38).ngClassUntouched,e._15(l,38).ngClassTouched,e._15(l,38).ngClassPristine,e._15(l,38).ngClassDirty,e._15(l,38).ngClassValid,e._15(l,38).ngClassInvalid,e._15(l,38).ngClassPending,e._15(l,39)._isServer,e._15(l,39).id,e._15(l,39).placeholder,e._15(l,39).disabled,e._15(l,39).required,e._15(l,39).readonly,e._15(l,39)._ariaDescribedby||null,e._15(l,39).errorState,e._15(l,39).required.toString()]),n(l,43,1,[e._15(l,44)._control.errorState,e._15(l,44)._control.errorState,e._15(l,44)._canLabelFloat,e._15(l,44)._shouldLabelFloat(),e._15(l,44)._hideControlPlaceholder(),e._15(l,44)._control.disabled,e._15(l,44)._control.focused,e._15(l,44)._shouldForward("untouched"),e._15(l,44)._shouldForward("touched"),e._15(l,44)._shouldForward("pristine"),e._15(l,44)._shouldForward("dirty"),e._15(l,44)._shouldForward("valid"),e._15(l,44)._shouldForward("invalid"),e._15(l,44)._shouldForward("pending")]),n(l,53,1,[e._15(l,59).ngClassUntouched,e._15(l,59).ngClassTouched,e._15(l,59).ngClassPristine,e._15(l,59).ngClassDirty,e._15(l,59).ngClassValid,e._15(l,59).ngClassInvalid,e._15(l,59).ngClassPending,e._15(l,60)._isServer,e._15(l,60).id,e._15(l,60).placeholder,e._15(l,60).disabled,e._15(l,60).required,e._15(l,60).readonly,e._15(l,60)._ariaDescribedby||null,e._15(l,60).errorState,e._15(l,60).required.toString()]),n(l,64,1,[e._15(l,65)._control.errorState,e._15(l,65)._control.errorState,e._15(l,65)._canLabelFloat,e._15(l,65)._shouldLabelFloat(),e._15(l,65)._hideControlPlaceholder(),e._15(l,65)._control.disabled,e._15(l,65)._control.focused,e._15(l,65)._shouldForward("untouched"),e._15(l,65)._shouldForward("touched"),e._15(l,65)._shouldForward("pristine"),e._15(l,65)._shouldForward("dirty"),e._15(l,65)._shouldForward("valid"),e._15(l,65)._shouldForward("invalid"),e._15(l,65)._shouldForward("pending")]),n(l,74,1,[e._15(l,80).ngClassUntouched,e._15(l,80).ngClassTouched,e._15(l,80).ngClassPristine,e._15(l,80).ngClassDirty,e._15(l,80).ngClassValid,e._15(l,80).ngClassInvalid,e._15(l,80).ngClassPending,e._15(l,81)._isServer,e._15(l,81).id,e._15(l,81).placeholder,e._15(l,81).disabled,e._15(l,81).required,e._15(l,81).readonly,e._15(l,81)._ariaDescribedby||null,e._15(l,81).errorState,e._15(l,81).required.toString()])})}var O=t("TO51"),T=t("AP4T"),I=t("3Wv1"),D=function(){function n(n,l){this.pos=n,this.r=l}return n.prototype.getColor=function(n){return{h:365*Math.abs(Math.sin(.03*(n+this.pos.x))),s:100*Math.abs(Math.cos(this.r)),l:50}},n.prototype.getColorString=function(n){var l=this.getColor(n),t=this.hslToRgb(l.h,l.s,l.l);return this.toRGBtoHex(t)},n.prototype.toRGBtoHex=function(n){var l=n.g,t=n.b;return"#"+this.toHex(n.r)+this.toHex(l)+this.toHex(t)},n.prototype.toHex=function(n){var l=Math.floor(n%255).toString(16);return l.length>1?l:"0"+l},n.prototype.hslToRgb=function(n,l,t){var e,i;return{r:255*this.hueToRgb(e=2*t-(i=t<=.5?t*(l+1):t+l-t*l),i,2+(n/=60)),g:255*this.hueToRgb(e,i,n),b:255*this.hueToRgb(e,i,n-2)}},n.prototype.hueToRgb=function(n,l,t){return t<0&&(t+=6),t>=6&&(t-=6),t<1?(l-n)*t+n:t<3?l:t<4?(l-n)*(4-t)+n:n},n}(),A=function(){function n(){}return n.prototype.randomVector=function(){var n=2*Math.random()*Math.PI,l=Math.cos(n),t=Math.sin(n);return new h(l,t).unit()},n.prototype.createVector=function(n,l){return new h(n,l)},n.prototype.createCircle=function(n,l){return new D(n,l)},n.prototype.createLine=function(n,l){return new function(n,l){this.from=n,this.to=l}(n,l)},n}(),V=t("GROE"),$=t("0T+h"),q=t("GZB0"),E=t("3kHg"),G=function(){function n(n,l,t){var e=this;this.poissonConfig=n,this.shapeFactory=l,this.random=t,this.grid=[],this.active=[],this.subscriptions=this.poissonConfig.iterationsPerFrame$.subscribe(function(n){return e.iterationsPerFrame=n}).add(this.poissonConfig.k$.subscribe(function(n){return e.k=n})).add(this.poissonConfig.r$.subscribe(function(n){return e.r=n})),this.w=this.poissonConfig.w}return n.prototype.setup=function(n,l){this.width=n,this.height=l,this.rows=Math.floor(this.width/this.w),this.cols=Math.floor(this.height/this.w),this.grid=[],this.active=[],this.grid=new Array(this.rows);for(var t=0;t<this.rows;t++)this.grid[t]=new Array(this.cols);this.foundCirclesSubject&&this.foundCirclesSubject.complete(),this.foundCirclesSubject=new O.a,this.foundCircles$=this.foundCirclesSubject.asObservable().pipe(Object(V.h)(function(n,l){return n.push(l),n},[])),this.activesSubject&&this.activesSubject.complete(),this.activesSubject=new O.a,this.activeVectors$=this.activesSubject.asObservable(),this.calculationCompletedSubject=new O.a,this.linesSubject&&this.linesSubject.complete(),this.lineSubject=new O.a,this.linesSubject=new O.a,this.lines$=this.linesSubject.asObservable(),this.calculationSubject=new O.a,this.initCalculation()},n.prototype.calculate=function(){var n=this;this.lineSubject=new O.a,this.lineSubject.pipe(Object(V.l)(this.calculationCompletedSubject),Object(V.p)()).subscribe(function(l){return n.linesSubject.next(l)}),this.calculationSubject.next()},n.prototype.initCalculation=function(){var n=this,l=Object(E.a)(function(){return T.a.range(0,n.iterationsPerFrame)}).pipe(Object(V.m)(function(l){return n.active.length>0}),Object(V.n)(void 0,void 0,function(){return n.calculationCompletedSubject.next()})),t=$.a.create(function(){return Object(q.a)(Math.floor(n.random.randomTo(n.active.length)))}).pipe(Object(V.e)(function(l){return{active:n.active[l],randomActiveIndex:l}}));this.calculationSubject.pipe(Object(V.k)(function(){return l}),Object(V.k)(function(n){return t}),Object(V.n)(this.onNextCalculation.bind(this))).subscribe(function(n){},function(n){return console.error("error calculating",n)},function(){return console.log("Calculation completed")})},n.prototype.onNextCalculation=function(n){for(var l=this,t=n.active,e=n.randomActiveIndex,i=!1,o=this.currentDistanceForPos(t),u=function(n){var e=a.shapeFactory.randomVector().setMag(a.random.random(o,2*o)).addVec(t),u=Math.floor(e.x/a.w),r=Math.floor(e.y/a.w);r>-1&&u>-1&&r<a.cols&&u<a.rows&&!a.getFromGrid(e)&&a.getNeighbours(e,o).every(function(n){if(n){l.lineSubject.next(l.shapeFactory.createLine(e,n.pos));var t=l.currentCircleRadius(e);return e.fastDist(n.pos)-(t*t+n.r*n.r)>=o*o}})&&(i=!0,a.addToGrid(e,a.currentCircleRadius(e)),a.addToActive(e))},a=this,r=0;r<this.k;r++)u();i||this.removeFromActive(e)},n.prototype.getFromGrid=function(n){var l=Math.floor(n.x/this.w),t=Math.floor(n.y/this.w);return this.grid[l][t]},n.prototype.addPointForCalculation=function(n){this.addToGrid(n),this.addToActive(n)},n.prototype.addToGrid=function(n,l){void 0===l&&(l=this.currentCircleRadius(n));var t=Math.floor(n.x/this.w),e=Math.floor(n.y/this.w),i=this.shapeFactory.createCircle(n,l);this.grid[t][e]=i,this.foundCirclesSubject.next(i)},n.prototype.getNeighbours=function(n,l){void 0===l&&(l=this.r);var t=this.w,e=Math.floor(n.x/t),i=Math.floor(n.y/t),o=this.isInDistanceFactory(e,i,l),u=[];return this.grid.forEach(function(n,l){return n.forEach(function(n,t){o(l,t)&&u.push(n)})}),u},n.prototype.currentCircleRadius=function(n){return.2*this.currentDistanceForPos(n)},n.prototype.currentDistanceForPos=function(n){return this.r*(1+2*Math.abs(Math.sin(.01*(n.x+n.y))))},n.prototype.isInDistanceFactory=function(n,l,t){var e=this;return function(i,o){return e.isInDistance(i-n,o-l,t)}},n.prototype.isInDistance=function(n,l,t){var e=this.w*n,i=this.w*l;return t*t>=e*e+i*i},n.prototype.addToActive=function(n){this.active.push(n),this.activesSubject.next(this.active)},n.prototype.removeFromActive=function(n){this.active.splice(n,1),this.activesSubject.next(this.active)},n}(),L=function(){function n(n){this.poissonCalc=n,this.width=600,this.height=600,this.play=!1}return n.prototype.ngOnInit=function(){this.setup()},n.prototype.setup=function(){this.poissonCalc.setup(this.width,this.height)},n.prototype.reset=function(){this.setup()},n.prototype.calculate=function(){this.play&&this.poissonCalc.calculate()},n.prototype.addPoint=function(n){this.poissonCalc.addPointForCalculation(n)},n.prototype.setPlay=function(n){this.play=n},n}(),B=e._1({encapsulation:0,styles:[[".simContent[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}"]],data:{}});function Z(n){return e._25(2,[(n()(),e._3(0,0,null,null,21,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,u.b,u.a)),e._2(1,4243456,null,1,a.a,[e.k,r.a,s.d],{color:[0,"color"]},null),e._21(603979776,1,{_toolbarRows:1}),(n()(),e._23(-1,0,["\n  "])),(n()(),e._3(4,0,null,1,5,"mat-toolbar-row",[["class","mat-toolbar-row"]],null,null,null,null,null)),e._2(5,16384,[[1,4]],0,a.c,[],null,null),(n()(),e._23(-1,null,["\n    "])),(n()(),e._3(7,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e._23(-1,null,["Poisson Distribution"])),(n()(),e._23(-1,null,["\n  "])),(n()(),e._23(-1,0,["\n  "])),(n()(),e._3(11,0,null,1,9,"mat-toolbar-row",[["class","mat-toolbar-row"]],null,null,null,null,null)),e._2(12,16384,[[1,4]],0,a.c,[],null,null),(n()(),e._23(-1,null,["\n    "])),(n()(),e._3(14,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e._23(-1,null,["\n      "])),(n()(),e._3(16,0,null,null,1,"span",[["class","mat-subheading-2"]],null,null,null,null,null)),(n()(),e._23(-1,null,["Evenly distribute balls of wood on a plane"])),(n()(),e._3(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e._23(-1,null,["\n    "])),(n()(),e._23(-1,null,["\n  "])),(n()(),e._23(-1,0,["\n"])),(n()(),e._23(-1,null,["\n\n"])),(n()(),e._23(-1,null,["\n"])),(n()(),e._3(24,0,null,null,26,"div",[["class","simContent"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n  "])),(n()(),e._3(26,0,null,null,20,"mat-card",[["class","mat-card"]],null,null,null,c.d,c.a)),e._2(27,49152,null,0,d.a,[],null,null),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(29,0,null,0,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),e._2(30,16384,null,0,d.i,[],null,null),(n()(),e._23(-1,null,["Simulation"])),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(33,0,null,0,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),e._2(34,16384,null,0,d.h,[],null,null),(n()(),e._23(-1,null,["Click to add balls as seed"])),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(37,0,null,0,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),e._2(38,16384,null,0,d.h,[],null,null),(n()(),e._23(-1,null,["Watch the lightning. It always comes from your mouse pointer"])),(n()(),e._23(-1,0,["\n    "])),(n()(),e._3(41,0,null,0,4,"app-p5-view",[],null,[[null,"onAddObject"],[null,"onReadyToPaint"]],function(n,l,t){var e=!0,i=n.component;return"onAddObject"===l&&(e=!1!==i.addPoint(t)&&e),"onReadyToPaint"===l&&(e=!1!==i.calculate()&&e),e},m,f)),e._2(42,1097728,null,0,p,[],{width:[0,"width"],height:[1,"height"],circles:[2,"circles"],actives:[3,"actives"]},{onAddObject:"onAddObject",onReadyToPaint:"onReadyToPaint"}),e._17(131072,s.b,[e.h]),e._17(131072,s.b,[e.h]),(n()(),e._23(-1,null,["\n    "])),(n()(),e._23(-1,0,["\n  "])),(n()(),e._23(-1,null,["\n  "])),(n()(),e._3(48,0,null,null,1,"app-sim-controls",[],null,[[null,"playChanged"],[null,"onReset"]],function(n,l,t){var e=!0,i=n.component;return"playChanged"===l&&(e=!1!==i.setPlay(t)&&e),"onReset"===l&&(e=!1!==i.reset()&&e),e},R,S)),e._2(49,245760,null,0,P,[k],null,{playChanged:"playChanged",onReset:"onReset"}),(n()(),e._23(-1,null,["\n"])),(n()(),e._23(-1,null,["\n\n"]))],function(n,l){var t=l.component;n(l,1,0,"primary"),n(l,42,0,t.width,t.height,e._24(l,42,2,e._15(l,43).transform(t.poissonCalc.foundCircles$)),e._24(l,42,3,e._15(l,44).transform(t.poissonCalc.activeVectors$))),n(l,49,0)},function(n,l){n(l,0,0,e._15(l,1)._toolbarRows.length,!e._15(l,1)._toolbarRows.length)})}var H=e.Z("app-poisson",L,function(n){return e._25(0,[(n()(),e._3(0,0,null,null,1,"app-poisson",[],null,null,null,Z,B)),e._2(1,114688,null,0,L,[G],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),U=t("l6RC"),N=t("ppgG"),Y=t("4jwp"),X=t("OFGE"),J=t("3Czw"),W=t("jk5D"),Q=t("vgc3"),z=t("9iV4"),K=t("RyBE"),nn=t("gOiy"),ln=t("UHIZ"),tn=t("0cZJ"),en=t("CZgk"),on=t("ki1d"),un=t("dYU3"),an=t("e0rv"),rn=t("4+t2"),sn=t("3uJi"),cn=t("ZFRd"),dn=t("kMVV"),hn=t("ZYB1"),_n=t("T2Au"),pn=function(){},fn=function(){};t.d(l,"PoissonModuleNgFactory",function(){return mn});var mn=e._0(i,[],function(n){return e._11([e._12(512,e.j,e.W,[[8,[o.a,H]],[3,e.j],e.v]),e._12(4608,s.m,s.l,[e.s,[2,s.u]]),e._12(4608,x.u,x.u,[]),e._12(6144,U.b,null,[s.d]),e._12(4608,U.c,U.c,[[2,U.b]]),e._12(4608,r.a,r.a,[]),e._12(4608,y.i,y.i,[r.a]),e._12(4608,y.h,y.h,[y.i,e.x,s.d]),e._12(136192,y.d,y.b,[[3,y.d],s.d]),e._12(5120,y.l,y.k,[[3,y.l],[2,y.j],s.d]),e._12(5120,y.g,y.e,[[3,y.g],e.x,r.a]),e._12(4608,N.b,N.b,[]),e._12(4608,w.b,w.b,[]),e._12(5120,Y.d,Y.b,[[3,Y.d],e.x,r.a]),e._12(5120,Y.g,Y.f,[[3,Y.g],r.a,e.x]),e._12(4608,X.i,X.i,[Y.d,Y.g,e.x,s.d]),e._12(5120,X.e,X.j,[[3,X.e],s.d]),e._12(4608,X.h,X.h,[Y.g,s.d]),e._12(5120,X.f,X.m,[[3,X.f],s.d]),e._12(4608,X.c,X.c,[X.i,X.e,e.j,X.h,X.f,e.g,e.p,e.x,s.d]),e._12(5120,X.k,X.l,[X.c]),e._12(4608,J.d,J.d,[r.a]),e._12(135680,J.a,J.a,[J.d,e.x]),e._12(5120,W.b,W.c,[X.c]),e._12(5120,Q.d,Q.a,[[3,Q.d],[2,z.a],K.c,[2,s.d]]),e._12(5120,nn.a,nn.b,[X.c]),e._12(4608,K.f,w.c,[[2,w.g],[2,w.l]]),e._12(4608,A,A,[]),e._12(4608,k,k,[]),e._12(4608,G,G,[k,A,I.a]),e._12(512,ln.o,ln.o,[[2,ln.t],[2,ln.l]]),e._12(512,s.c,s.c,[]),e._12(512,x.r,x.r,[]),e._12(512,x.h,x.h,[]),e._12(512,U.a,U.a,[]),e._12(256,w.d,!0,[]),e._12(512,w.l,w.l,[[2,w.d]]),e._12(512,r.b,r.b,[]),e._12(512,w.v,w.v,[]),e._12(512,y.a,y.a,[]),e._12(512,b.c,b.c,[]),e._12(512,N.c,N.c,[]),e._12(512,tn.c,tn.c,[]),e._12(512,C.c,C.c,[]),e._12(512,F.b,F.b,[]),e._12(512,a.b,a.b,[]),e._12(512,en.e,en.e,[]),e._12(512,Y.c,Y.c,[]),e._12(512,X.g,X.g,[]),e._12(512,J.c,J.c,[]),e._12(512,W.e,W.e,[]),e._12(512,Q.c,Q.c,[]),e._12(512,d.g,d.g,[]),e._12(512,w.m,w.m,[]),e._12(512,w.t,w.t,[]),e._12(512,on.a,on.a,[]),e._12(512,un.c,un.c,[]),e._12(512,w.r,w.r,[]),e._12(512,nn.d,nn.d,[]),e._12(512,an.h,an.h,[]),e._12(512,rn.a,rn.a,[]),e._12(512,sn.b,sn.b,[]),e._12(512,cn.j,cn.j,[]),e._12(512,dn.b,dn.b,[]),e._12(512,hn.b,hn.b,[]),e._12(512,_n.a,_n.a,[]),e._12(512,pn,pn,[]),e._12(512,fn,fn,[]),e._12(512,i,i,[]),e._12(256,W.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),e._12(256,an.a,!1,[]),e._12(1024,ln.j,function(){return[[{path:"",component:L}]]},[])])})}});