(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JSWD:function(e,t,n){"use strict";n.r(t),n.d(t,"FavoritesModule",(function(){return x}));var o=n("tyNb"),a=n("ofXK"),r=n("fXoL"),c=n("KvfK"),i=n("3Pt+"),s=n("bN9u"),g=n("lGQG"),p=n("S9hJ"),l=n("wOwU"),b=n("eq+F"),u=n("pDGf"),h=n("Xa2L");let f=(()=>{class e{transform(e,t,n){return n.trim()||t.trim()?e.filter(e=>e.categories.join("").includes(n)).filter(e=>e.value.toLowerCase().includes(t.toLowerCase())):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r.Kb({name:"search",type:e,pure:!0}),e})();function d(e,t){1&e&&(r.Qb(0,"button",12),r.wc(1,"\xd7"),r.Pb())}function m(e,t){if(1&e&&(r.Qb(0,"div",20),r.Mb(1,"input",21),r.Qb(2,"label",22),r.wc(3),r.Pb(),r.Pb()),2&e){const e=t.$implicit;r.zb(1),r.hc("id",e)("value",e),r.zb(1),r.hc("for",e),r.zb(1),r.yc(" ",e," ")}}function C(e,t){if(1&e&&(r.Ob(0),r.Mb(1,"input",13),r.Qb(2,"div",14),r.Qb(3,"p"),r.wc(4," Search in: "),r.Pb(),r.Qb(5,"div",15),r.uc(6,m,4,4,"div",16),r.Qb(7,"div",17),r.Mb(8,"input",18),r.Qb(9,"label",19),r.wc(10," search everywhere "),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Nb()),2&e){const e=r.bc(3);r.zb(6),r.hc("ngForOf",e.jokeCategories)}}function v(e,t){1&e&&r.Mb(0,"app-favorite-card",23),2&e&&r.hc("joke",t.$implicit)}function P(e,t){if(1&e){const e=r.Rb();r.Ob(0),r.Qb(1,"form",5),r.Xb("submit",(function(){return r.oc(e),r.bc(2).reset()})),r.Qb(2,"div",6),r.Mb(3,"input",7),r.Qb(4,"label",8),r.wc(5," show search "),r.Pb(),r.uc(6,d,2,0,"button",9),r.Pb(),r.uc(7,C,11,1,"ng-container",10),r.Pb(),r.Qb(8,"div"),r.uc(9,v,1,1,"app-favorite-card",11),r.cc(10,"search"),r.Pb(),r.Nb()}if(2&e){const e=r.bc(2);r.zb(1),r.hc("formGroup",e.form),r.zb(5),r.hc("ngIf",e.getControlValue("showSearch")),r.zb(1),r.hc("ngIf",e.getControlValue("showSearch")),r.zb(2),r.hc("ngForOf",r.ec(10,4,e.jokeService.favorites,e.getControlValue("value")||"",e.getControlValue("category")||""))}}function w(e,t){if(1&e&&(r.Ob(0),r.uc(1,P,11,8,"ng-container",2),r.Nb()),2&e){const e=r.bc(),t=r.mc(4);r.zb(1),r.hc("ngIf",e.jokeService.favorites.length)("ngIfElse",t)}}function M(e,t){1&e&&r.Mb(0,"app-empty-container",24)}function O(e,t){1&e&&r.Mb(0,"mat-spinner",25)}let _=(()=>{class e{constructor(e,t,n,o){this.jokeService=e,this.fb=t,this.jokesDataService=n,this.authService=o,this.loading=!0}ngOnInit(){this.updateJokes(),this.setForm(),this.jokesDataService.currentLoadingState.subscribe(e=>{this.loading=e})}updateJokes(){this.authService.authenticated&&(this.jokesDataService.changeLoading(!0),this.jokesDataService.getDataFromDb().subscribe(e=>{this.jokeCategories=this.jokeService.getActualCategories(),this.jokeService.updateJokes(e)}).add(()=>this.jokesDataService.changeLoading(!1)))}getControlValue(e){return this.form.get(e).value}setForm(){this.form=this.fb.group({showSearch:[!1],value:[null],category:[null]})}reset(){this.form.reset()}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(c.a),r.Lb(i.d),r.Lb(s.a),r.Lb(g.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-favorites-page"]],decls:7,vars:2,consts:[["title","Favorites Jokes"],[1,"container"],[4,"ngIf","ngIfElse"],["empty",""],["loader",""],[3,"formGroup","submit"],[1,"tag-group","show-search"],["type","checkbox","id","showSearch","formControlName","showSearch",1,"tags"],["for","showSearch"],["class","btn",4,"ngIf"],[4,"ngIf"],[3,"joke",4,"ngFor","ngForOf"],[1,"btn"],["type","text","appInputFocus","","placeholder","Search...","formControlName","value",1,"base-input"],[1,"category-wrapper"],[1,"category"],["class","tag-group",4,"ngFor","ngForOf"],[1,"tag-group","everywhere"],["type","radio","id","search-everywhere","formControlName","category","value","",1,"tags"],["for","search-everywhere"],[1,"tag-group"],["type","radio","formControlName","category",1,"tags",3,"id","value"],[3,"for"],[3,"joke"],["title","No jokes saved..."],[1,"spinner"]],template:function(e,t){if(1&e&&(r.Mb(0,"app-toolbar",0),r.Qb(1,"div",1),r.uc(2,w,2,2,"ng-container",2),r.uc(3,M,1,0,"ng-template",null,3,r.vc),r.uc(5,O,1,0,"ng-template",null,4,r.vc),r.Pb()),2&e){const e=r.mc(6);r.zb(2),r.hc("ngIf",!t.loading)("ngIfElse",e)}},directives:[p.a,a.l,i.s,i.n,i.f,i.a,i.m,i.e,a.k,i.c,l.a,i.p,b.a,u.a,h.b],pipes:[f],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;width:80%;margin:0 auto}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:0;margin-bottom:10px}.container[_ngcontent-%COMP%]   .base-input[_ngcontent-%COMP%]{width:40%;display:block;margin-top:0}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]{display:flex;align-items:baseline}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex-shrink:0}@media (max-width:480px){.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]{flex-direction:column;margin-top:20px}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{font-size:.9rem}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:5px 20px}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:10px}}.container[_ngcontent-%COMP%]   .everywhere[_ngcontent-%COMP%]{flex-basis:100%;margin-top:15px}.container[_ngcontent-%COMP%]   .show-search[_ngcontent-%COMP%]{margin-left:0;display:flex;justify-content:flex-start;align-items:baseline}.container[_ngcontent-%COMP%]   .show-search[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:0;align-self:center;padding:5px 10px;line-height:10px;margin-left:30px}.container[_ngcontent-%COMP%]   .show-search[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{margin-left:0}@media (max-width:480px){.container[_ngcontent-%COMP%]{padding:20px 10px;width:auto}.container[_ngcontent-%COMP%]   .base-input[_ngcontent-%COMP%]{width:100%;display:block}}.spinner[_ngcontent-%COMP%]{margin:35px auto}"]}),e})();var y=n("PCNd"),k=n("UTcu");let x=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},providers:[k.a],imports:[[a.c,y.a,o.e.forChild([{path:"",component:_,canActivate:[k.a]}])]]}),e})()}}]);