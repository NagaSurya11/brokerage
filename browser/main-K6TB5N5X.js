import{a as D}from"./chunk-G2UL4QRC.js";import{b as M,c as w,e as F,f as P,g as S}from"./chunk-ULDCP6DR.js";import{Da as f,Jb as R,Ta as g,Va as y,W as c,Xa as v,Y as l,Za as A,_a as C,_b as I,ba as d,ca as p,ha as u,ka as m,qb as b}from"./chunk-RBD45MZP.js";var x=(()=>{let e=class e{constructor(r,i){this.authService=r,this.router=i}canActivate(){return this.authService.isLoggedIn()?!0:(this.router.navigate(["/login"]),!1)}};e.\u0275fac=function(i){return new(i||e)(d(D),d(P))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var E=[{path:"login",loadChildren:()=>import("./chunk-I5CC7M3X.js").then(o=>o.AuthModule),pathMatch:"full"},{path:"register",loadChildren:()=>import("./chunk-XY2UJQFH.js").then(o=>o.RegisterModule),pathMatch:"full"},{path:"",loadChildren:()=>import("./chunk-IPJZWX5H.js").then(o=>o.DashboardModule),pathMatch:"full",canActivate:[x]},{path:"**",redirectTo:""}];var B="@",V=(()=>{let e=class e{constructor(r,i,n,s,a){this.doc=r,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=p(y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-KWNPSS5Y.js")).catch(i=>{throw new c(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,i){let n=this.delegate.createRenderer(r,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new h(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let k=a.createRenderer(r,i);s.use(k)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){g()},e.\u0275prov=l({token:e,factory:e.\u0275fac});let o=e;return o})(),h=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,i){this.delegate.insertBefore(e,t,r,i)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,i){this.delegate.setAttribute(e,t,r,i)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,i){this.delegate.setStyle(e,t,r,i)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(B)}};function O(o="animations"){return A("NgAsyncAnimations"),m([{provide:v,useFactory:(e,t,r)=>new V(e,t,r,o),deps:[I,M,C]},{provide:f,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var T={providers:[S(E),O()]};var j=(()=>{let e=class e{constructor(){this.title="Brokerage"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[R],decls:1,vars:0,template:function(i,n){i&1&&b(0,"router-outlet")},dependencies:[F]});let o=e;return o})();w(j,T).catch(o=>console.error(o));
