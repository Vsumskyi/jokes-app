(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/ISb":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("tk/3"),o=n("AytR"),r=n("fXoL");let a=(()=>{class t{constructor(t){this.http=t,this.mediaUrl=o.a.mediaUrl}get getImageInfo(){return this.imageData}setImageData(t){this.imageData=t}getImageData(t){return this.http.post(`${this.mediaUrl}?fileExtencion=${t}`,t)}putImage(t,e){const n=new i.d({"x-ms-blob-type":"BlockBlob",skipInterceptor:"true"});return this.http.put(e,t,{headers:n})}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(i.b))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac}),t})()},"1uah":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("yCtX"),o=n("DH7j"),r=n("7o/Q"),a=n("l7GE"),s=n("ZUHj"),c=n("Lhse");function u(...t){const e=t[t.length-1];return"function"==typeof e&&t.pop(),Object(i.a)(t,void 0).lift(new l(e))}class l{constructor(t){this.resultSelector=t}call(t,e){return e.subscribe(new h(t,this.resultSelector))}}class h extends r.a{constructor(t,e,n=Object.create(null)){super(t),this.iterators=[],this.active=0,this.resultSelector="function"==typeof e?e:null,this.values=n}_next(t){const e=this.iterators;Object(o.a)(t)?e.push(new m(t)):e.push("function"==typeof t[c.a]?new b(t[c.a]()):new f(this.destination,this,t))}_complete(){const t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(let n=0;n<e;n++){let e=t[n];e.stillUnsubscribed?this.destination.add(e.subscribe(e,n)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const t=this.iterators,e=t.length,n=this.destination;for(let r=0;r<e;r++){let e=t[r];if("function"==typeof e.hasValue&&!e.hasValue())return}let i=!1;const o=[];for(let r=0;r<e;r++){let e=t[r],a=e.next();if(e.hasCompleted()&&(i=!0),a.done)return void n.complete();o.push(a.value)}this.resultSelector?this._tryresultSelector(o):n.next(o),i&&n.complete()}_tryresultSelector(t){let e;try{e=this.resultSelector.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}class b{constructor(t){this.iterator=t,this.nextResult=t.next()}hasValue(){return!0}next(){const t=this.nextResult;return this.nextResult=this.iterator.next(),t}hasCompleted(){const t=this.nextResult;return t&&t.done}}class m{constructor(t){this.array=t,this.index=0,this.length=0,this.length=t.length}[c.a](){return this}next(t){const e=this.index++;return e<this.length?{value:this.array[e],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class f extends a.a{constructor(t,e,n){super(t),this.parent=e,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[c.a](){return this}next(){const t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(t,e,n,i,o){this.buffer.push(e),this.parent.checkIterators()}subscribe(t,e){return Object(s.a)(this,this.observable,this,e)}}},"4cth":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("3Pt+"),o=n("LRne"),r=n("PqYM"),a=n("pLZG"),s=n("eIep"),c=n("lJxs"),u=n("fXoL"),l=n("bN9u");let h=(()=>{class t{constructor(t){this.jokesDataService=t}validate(t){return t&&0!==String(t.value).length?Object(r.a)(1e3).pipe(Object(a.a)(()=>null!=t.value),Object(s.a)(()=>this.jokesDataService.categoriesExist(t.value)),Object(c.a)(t=>t?{duplicate:!0}:null)):Object(o.a)(null)}}return t.\u0275fac=function(e){return new(e||t)(u.Lb(l.a))},t.\u0275dir=u.Gb({type:t,selectors:[["","appCategoryExistValidator",""]],features:[u.yb([{provide:i.i,useExisting:t,multi:!0}])]}),t})()},S9hJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("fXoL"),o=n("/t3+"),r=n("bTqV"),a=n("tyNb");let s=(()=>{class t{constructor(){this.title="Chuck Norris Jokes"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-toolbar"]],inputs:{title:"title"},decls:5,vars:1,consts:[["mat-raised-button","","color","primary","routerLink","/","aria-label","Example icon-button with menu icon",1,"example-icon"]],template:function(t,e){1&t&&(i.Qb(0,"mat-toolbar"),i.Qb(1,"button",0),i.wc(2," Home "),i.Pb(),i.Qb(3,"span"),i.wc(4),i.Pb(),i.Pb()),2&t&&(i.zb(4),i.xc(e.title))},directives:[o.a,r.b,a.c],styles:["span[_ngcontent-%COMP%]{margin-left:auto}mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}"]}),t})()},Tk1w:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),o=n("lGQG"),r=n("tyNb");let a=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canActivate(t,e){if(this.authService.adminStatus&&this.authService.authenticated)return!0;this.router.navigate(["/"],{queryParams:{returnUrl:e.url}})}}return t.\u0275fac=function(e){return new(e||t)(i.Ub(o.a),i.Ub(r.b))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t})()},UTcu:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),o=n("lGQG"),r=n("tyNb");let a=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canActivate(t,e){if(this.authService.authenticated)return!0;this.authService.logout(),this.router.navigate(["/auth"],{queryParams:{returnUrl:e.url}})}}return t.\u0275fac=function(e){return new(e||t)(i.Ub(o.a),i.Ub(r.b))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t})()},ZGDG:function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));var i=n("3Pt+"),o=n("fXoL"),r=n("kmnG"),a=n("qFsG"),s=n("ofXK"),c=n("d3UM"),u=n("bTqV"),l=n("lJxs"),h=n("xgIS"),b=n("1uah"),m=n("/ISb");let f=(()=>{class t{constructor(t,e){this.element=t,this.jokesMediaService=e}ngOnInit(){Object(h.a)(this.element.nativeElement,"change").pipe(Object(l.a)(t=>t.target.files)).subscribe(t=>{const e=Object.values(t).reduce((t,e)=>{const n=e.name.slice(e.name.lastIndexOf(".")+1);return t.push(this.jokesMediaService.getImageData(n)),t},[]);Object(b.a)(...e).subscribe(t=>{this.jokesMediaService.setImageData(t)})})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(m.a))},t.\u0275dir=o.Gb({type:t,selectors:[["","appInputUpload",""]]}),t})();var p=n("Qu3c"),g=n("FKr1"),d=n("4cth"),v=n("Xa2L");function y(t,e){1&t&&(o.Qb(0,"mat-error"),o.wc(1," Joke is required!"),o.Pb())}function x(t,e){if(1&t&&(o.Qb(0,"span"),o.wc(1),o.Pb()),2&t){const t=o.bc();o.zb(1),o.zc(" (+",t.form.get("categories").value.length-1," ",2===(null==t.form.get("categories").value?null:t.form.get("categories").value.length)?"other":"others",") ")}}function P(t,e){if(1&t&&(o.Qb(0,"mat-option",17),o.wc(1),o.cc(2,"titlecase"),o.Pb()),2&t){const t=e.$implicit;o.hc("value",t.title),o.zb(1),o.yc("",o.dc(2,2,t.title)," ")}}function O(t,e){1&t&&(o.Qb(0,"mat-error"),o.wc(1," Category already exist!"),o.Pb())}function k(t,e){if(1&t&&(o.Qb(0,"div",1),o.Qb(1,"mat-form-field",2),o.Qb(2,"mat-label"),o.wc(3,"Add custom category"),o.Pb(),o.Mb(4,"input",18),o.uc(5,O,2,0,"mat-error",4),o.Pb(),o.Pb()),2&t){const t=o.bc();o.zb(5),o.hc("ngIf",t.form.get("customCategories").hasError("duplicate"))}}function w(t,e){if(1&t&&(o.Qb(0,"span",19),o.wc(1),o.Pb()),2&t){const t=o.bc();o.zb(1),o.yc(" (+",t.imageNames.length-1," others)")}}function C(t,e){1&t&&o.Mb(0,"mat-spinner",20),2&t&&o.hc("diameter",25)}let I=(()=>{class t{constructor(t){this.fb=t,this.imageNames=[],this.modifyOnJoke=new o.n,this.joke={}}ngOnInit(){this.setForm(this.joke)}setForm(t){this.form=this.fb.group({value:[t.value,[i.r.required,i.r.minLength(3)]],categories:[t.categories||[]],customCategories:[""]})}submit(){this.form.valid&&this.modifyOnJoke.emit(Object.assign(Object.assign({},this.form.value),{image:this.image})),this.modifyJokeMode||(this.form.reset(this.joke),this.imageNames=[],this.form.get("categories").setValue([]))}loadImg(t){this.image=t,this.imageNames=this.sliceFileName(t)}sliceFileName(t){return Object.values(t).reduce((t,e)=>{const n=e.name.slice(e.name.lastIndexOf(".")+1);return t.push(e.name.length>10?`${e.name.slice(0,7)}...${n}`:e.name),t},[])}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(i.d))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-joke-modify-form"]],inputs:{categoryList:"categoryList",modifyJokeMode:"modifyJokeMode",joke:"joke",loadingState:"loadingState"},outputs:{modifyOnJoke:"modifyOnJoke"},decls:33,vars:21,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-group"],["appearance","legacy"],["matInput","","rows","2","formControlName","value","placeholder","Type a joke...",3,"matTextareaAutosize"],[4,"ngIf"],["formControlName","categories","multiple",""],[3,"value",4,"ngFor","ngForOf"],["class","form-group",4,"ngIf"],[1,"form-group","upload-group"],["mat-raised-button","","color","accent","type","button",3,"disabled","click"],["hidden","","multiple","","type","file","appInputUpload","","type","file","id","upload","placeholder","Type icon url",3,"change"],["imgFileInput",""],["for","upload",1,"upload",3,"matTooltip"],["class","others",4,"ngIf"],[1,"submit-group"],[3,"diameter",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled"],[3,"value"],["matInput","","appCategoryExistValidator","","formControlName","customCategories","placeholder","Type a joke..."],[1,"others"],[3,"diameter"]],template:function(t,e){if(1&t){const t=o.Rb();o.Qb(0,"form",0),o.Xb("ngSubmit",(function(){return e.submit()})),o.Qb(1,"div",1),o.Qb(2,"mat-form-field",2),o.Qb(3,"mat-label"),o.wc(4,"Type a joke"),o.Pb(),o.Mb(5,"textarea",3),o.uc(6,y,2,0,"mat-error",4),o.Pb(),o.Pb(),o.Qb(7,"div",1),o.Qb(8,"mat-form-field",2),o.Qb(9,"mat-label"),o.wc(10,"Choose a category"),o.Pb(),o.Qb(11,"mat-select",5),o.Qb(12,"mat-select-trigger"),o.wc(13),o.cc(14,"titlecase"),o.uc(15,x,2,2,"span",4),o.Pb(),o.uc(16,P,3,4,"mat-option",6),o.Pb(),o.Pb(),o.Pb(),o.uc(17,k,6,1,"div",7),o.Qb(18,"div",8),o.Qb(19,"button",9),o.Xb("click",(function(){return o.oc(t),o.mc(22).click()})),o.wc(20,"Add a photos"),o.Pb(),o.Qb(21,"input",10,11),o.Xb("change",(function(t){return e.loadImg(t.target.files)})),o.Pb(),o.Qb(23,"span",12),o.cc(24,"titlecase"),o.wc(25),o.uc(26,w,2,1,"span",13),o.Pb(),o.Pb(),o.Qb(27,"div",14),o.uc(28,C,1,1,"mat-spinner",15),o.Qb(29,"button",16),o.wc(30),o.Pb(),o.Pb(),o.Pb(),o.wc(31),o.cc(32,"json")}2&t&&(o.hc("formGroup",e.form),o.zb(5),o.hc("matTextareaAutosize",!0),o.zb(1),o.hc("ngIf",e.form.get("value").touched&&e.form.get("value").invalid),o.zb(7),o.yc(" ",o.dc(14,15,e.form.get("categories").value&&e.form.get("categories").value[0])," "),o.zb(2),o.hc("ngIf",(null==e.form.get("categories").value?null:e.form.get("categories").value.length)>1),o.zb(1),o.hc("ngForOf",e.categoryList),o.zb(1),o.hc("ngIf",!e.modifyJokeMode),o.zb(2),o.hc("disabled",e.modifyJokeMode),o.zb(4),o.hc("matTooltip",o.dc(24,17,e.imageNames.join(", "))),o.zb(2),o.yc(" ",e.imageNames[0]," "),o.zb(1),o.hc("ngIf",e.imageNames.length>1),o.zb(2),o.hc("ngIf",e.loadingState),o.zb(1),o.hc("disabled",e.loadingState||e.form.invalid||e.form.pending),o.zb(1),o.xc(e.modifyJokeMode?"Update!":"Create!"),o.zb(1),o.yc("\n",o.dc(32,19,e.form.value.imageUrls),"\n"))},directives:[i.s,i.n,i.f,r.c,r.f,a.a,i.c,a.c,i.m,i.e,s.l,c.a,c.c,s.k,u.b,f,p.a,r.b,g.f,d.a,v.b],pipes:[s.r,s.f],styles:["form[_ngcontent-%COMP%]{padding:30px 40px 15px;background:#fff;box-shadow:0 4px 6px rgba(0,0,0,.1);border-radius:6px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-right:30px;margin-bottom:20px}@media (max-width:768px){form[_ngcontent-%COMP%]{padding:20px 25px 15px;margin-right:10px}}@media (max-width:600px){form[_ngcontent-%COMP%]{margin-right:0}}form[_ngcontent-%COMP%]   .base-input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{position:relative;margin-bottom:15px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}.submit-group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;width:100%}.submit-group[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%]{position:absolute;right:-5px}.form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;margin:0 auto 10px}.upload-group[_ngcontent-%COMP%]{margin-bottom:20px}.upload[_ngcontent-%COMP%]{position:relative;text-align:center;display:block;height:15px}.upload[_ngcontent-%COMP%]   .others[_ngcontent-%COMP%]{position:absolute;top:50%;right:-15px;font-size:.6rem;letter-spacing:normal;white-space:pre}"]}),t})()}}]);