import{E as $r,y as le,g as T,F as Ge,G as B,n as Er,H as Or,I as Cr,J as Sr,K as Ir,h as Rr,k as gr,i as br,b as Tr,L as Pr,C as yr,z as k,_ as C,d as We,M as Nr,N as _r,O as wr,P as jr,Q as P,R as Dr,S as Mr,T as He,U as Ur,V as Je,W as Ke,a as Qe,X as Ar,Y as Lr,Z as xr,D as Br,$ as kr,a0 as Vr}from"./es.function.name-033df6c0.js";import{g as Fr,c as Ee}from"./_commonjsHelpers-042e6b4d.js";var Gr=$r,V=typeof process<"u"&&Gr(process)=="process",Wr=TypeError,Hr=function(e,r){if(e<r)throw Wr("Not enough arguments");return e},Jr=le,qe=/(?:ipad|iphone|ipod).*applewebkit/i.test(Jr),c=T,Kr=Ir,Qr=Ge,Oe=B,qr=Rr,Ye=Er,Ce=Or,Yr=Cr,Se=Sr,zr=Hr,Xr=qe,Zr=V,ae=c.setImmediate,te=c.clearImmediate,ea=c.process,H=c.Dispatch,ra=c.Function,Ie=c.MessageChannel,aa=c.String,J=0,R={},Re="onreadystatechange",b,u,K,Q;Ye(function(){b=c.location});var ue=function(e){if(qr(R,e)){var r=R[e];delete R[e],r()}},q=function(e){return function(){ue(e)}},ge=function(e){ue(e.data)},be=function(e){c.postMessage(aa(e),b.protocol+"//"+b.host)};(!ae||!te)&&(ae=function(r){zr(arguments.length,1);var a=Oe(r)?r:ra(r),t=Yr(arguments,1);return R[++J]=function(){Kr(a,void 0,t)},u(J),J},te=function(r){delete R[r]},Zr?u=function(e){ea.nextTick(q(e))}:H&&H.now?u=function(e){H.now(q(e))}:Ie&&!Xr?(K=new Ie,Q=K.port2,K.port1.onmessage=ge,u=Qr(Q.postMessage,Q)):c.addEventListener&&Oe(c.postMessage)&&!c.importScripts&&b&&b.protocol!=="file:"&&!Ye(be)?(u=be,c.addEventListener("message",ge,!1)):Re in Se("script")?u=function(e){Ce.appendChild(Se("script"))[Re]=function(){Ce.removeChild(this),ue(e)}}:u=function(e){setTimeout(q(e),0)});var ze={set:ae,clear:te},Xe=function(){this.head=null,this.tail=null};Xe.prototype={add:function(e){var r={item:e,next:null},a=this.tail;a?a.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};var Ze=Xe,ta=le,na=/ipad|iphone|ipod/i.test(ta)&&typeof Pebble<"u",ia=le,oa=/web0s(?!.*chrome)/i.test(ia),d=T,Te=Ge,sa=gr.f,Y=ze.set,va=Ze,ca=qe,la=na,ua=oa,z=V,Pe=d.MutationObserver||d.WebKitMutationObserver,ye=d.document,Ne=d.process,_=d.Promise,_e=sa(d,"queueMicrotask"),ne=_e&&_e.value,m,X,Z,w,we;if(!ne){var j=new va,D=function(){var e,r;for(z&&(e=Ne.domain)&&e.exit();r=j.get();)try{r()}catch(a){throw j.head&&m(),a}e&&e.enter()};!ca&&!z&&!ua&&Pe&&ye?(X=!0,Z=ye.createTextNode(""),new Pe(D).observe(Z,{characterData:!0}),m=function(){Z.data=X=!X}):!la&&_&&_.resolve?(w=_.resolve(void 0),w.constructor=_,we=Te(w.then,w),m=function(){we(D)}):z?m=function(){Ne.nextTick(D)}:(Y=Te(Y,d),m=function(){Y(D)}),ne=function(e){j.head||m(),j.add(e)}}var fa=ne,da=function(e,r){try{arguments.length==1?console.error(e):console.error(e,r)}catch{}},fe=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}},pa=T,F=pa.Promise,er=typeof Deno=="object"&&Deno&&typeof Deno.version=="object",ma=er,ha=V,$a=!ma&&!ha&&typeof window=="object"&&typeof document=="object",Ea=T,g=F,Oa=B,Ca=br,Sa=Pr,Ia=Tr,Ra=$a,ga=er,ee=yr;g&&g.prototype;var ba=Ia("species"),ie=!1,rr=Oa(Ea.PromiseRejectionEvent),Ta=Ca("Promise",function(){var e=Sa(g),r=e!==String(g);if(!r&&ee===66)return!0;if(!ee||ee<51||!/native code/.test(e)){var a=new g(function(i){i(1)}),t=function(i){i(function(){},function(){})},n=a.constructor={};if(n[ba]=t,ie=a.then(function(){})instanceof t,!ie)return!0}return!r&&(Ra||ga)&&!rr}),y={CONSTRUCTOR:Ta,REJECTION_EVENT:rr,SUBCLASSING:ie},S={},je=k,Pa=TypeError,ya=function(e){var r,a;this.promise=new e(function(t,n){if(r!==void 0||a!==void 0)throw Pa("Bad Promise constructor");r=t,a=n}),this.resolve=je(r),this.reject=je(a)};S.f=function(e){return new ya(e)};var Na=C,L=V,l=T,O=P,De=We,Me=Nr,_a=_r,wa=wr,ja=k,A=B,Da=He,Ma=Dr,Ua=Mr,ar=ze.set,de=fa,Aa=da,La=fe,xa=Ze,tr=jr,x=F,pe=y,nr=S,G="Promise",ir=pe.CONSTRUCTOR,Ba=pe.REJECTION_EVENT,ka=pe.SUBCLASSING,re=tr.getterFor(G),Va=tr.set,h=x&&x.prototype,f=x,M=h,or=l.TypeError,oe=l.document,me=l.process,se=nr.f,Fa=se,Ga=!!(oe&&oe.createEvent&&l.dispatchEvent),sr="unhandledrejection",Wa="rejectionhandled",Ue=0,vr=1,Ha=2,he=1,cr=2,U,Ae,Ja,Le,lr=function(e){var r;return Da(e)&&A(r=e.then)?r:!1},ur=function(e,r){var a=r.value,t=r.state==vr,n=t?e.ok:e.fail,i=e.resolve,o=e.reject,s=e.domain,v,N,p;try{n?(t||(r.rejection===cr&&Qa(r),r.rejection=he),n===!0?v=a:(s&&s.enter(),v=n(a),s&&(s.exit(),p=!0)),v===e.promise?o(or("Promise-chain cycle")):(N=lr(v))?O(N,v,i,o):i(v)):o(a)}catch(W){s&&!p&&s.exit(),o(W)}},fr=function(e,r){e.notified||(e.notified=!0,de(function(){for(var a=e.reactions,t;t=a.get();)ur(t,e);e.notified=!1,r&&!e.rejection&&Ka(e)}))},dr=function(e,r,a){var t,n;Ga?(t=oe.createEvent("Event"),t.promise=r,t.reason=a,t.initEvent(e,!1,!0),l.dispatchEvent(t)):t={promise:r,reason:a},!Ba&&(n=l["on"+e])?n(t):e===sr&&Aa("Unhandled promise rejection",a)},Ka=function(e){O(ar,l,function(){var r=e.facade,a=e.value,t=xe(e),n;if(t&&(n=La(function(){L?me.emit("unhandledRejection",a,r):dr(sr,r,a)}),e.rejection=L||xe(e)?cr:he,n.error))throw n.value})},xe=function(e){return e.rejection!==he&&!e.parent},Qa=function(e){O(ar,l,function(){var r=e.facade;L?me.emit("rejectionHandled",r):dr(Wa,r,e.value)})},$=function(e,r,a){return function(t){e(r,t,a)}},E=function(e,r,a){e.done||(e.done=!0,a&&(e=a),e.value=r,e.state=Ha,fr(e,!0))},ve=function(e,r,a){if(!e.done){e.done=!0,a&&(e=a);try{if(e.facade===r)throw or("Promise can't be resolved itself");var t=lr(r);t?de(function(){var n={done:!1};try{O(t,r,$(ve,n,e),$(E,n,e))}catch(i){E(n,i,e)}}):(e.value=r,e.state=vr,fr(e,!1))}catch(n){E({done:!1},n,e)}}};if(ir&&(f=function(r){Ma(this,M),ja(r),O(U,this);var a=re(this);try{r($(ve,a),$(E,a))}catch(t){E(a,t)}},M=f.prototype,U=function(r){Va(this,{type:G,done:!1,notified:!1,parent:!1,reactions:new xa,rejection:!1,state:Ue,value:void 0})},U.prototype=De(M,"then",function(r,a){var t=re(this),n=se(Ua(this,f));return t.parent=!0,n.ok=A(r)?r:!0,n.fail=A(a)&&a,n.domain=L?me.domain:void 0,t.state==Ue?t.reactions.add(n):de(function(){ur(n,t)}),n.promise}),Ae=function(){var e=new U,r=re(e);this.promise=e,this.resolve=$(ve,r),this.reject=$(E,r)},nr.f=se=function(e){return e===f||e===Ja?new Ae(e):Fa(e)},A(x)&&h!==Object.prototype)){Le=h.then,ka||De(h,"then",function(r,a){var t=this;return new f(function(n,i){O(Le,t,n,i)}).then(r,a)},{unsafe:!0});try{delete h.constructor}catch{}Me&&Me(h,M)}Na({global:!0,constructor:!0,wrap:!0,forced:ir},{Promise:f});_a(f,G,!1);wa(G);var qa=F,Ya=Ur,za=y.CONSTRUCTOR,pr=za||!Ya(function(e){qa.all(e).then(void 0,function(){})}),Xa=C,Za=P,et=k,rt=S,at=fe,tt=Je,nt=pr;Xa({target:"Promise",stat:!0,forced:nt},{all:function(r){var a=this,t=rt.f(a),n=t.resolve,i=t.reject,o=at(function(){var s=et(a.resolve),v=[],N=0,p=1;tt(r,function(W){var mr=N++,$e=!1;p++,Za(s,a,W).then(function(hr){$e||($e=!0,v[mr]=hr,--p||n(v))},i)}),--p||n(v)});return o.error&&i(o.value),t.promise}});var it=C,ot=y.CONSTRUCTOR,ce=F,st=Ke,vt=B,ct=We,Be=ce&&ce.prototype;it({target:"Promise",proto:!0,forced:ot,real:!0},{catch:function(e){return this.then(void 0,e)}});if(vt(ce)){var ke=st("Promise").prototype.catch;Be.catch!==ke&&ct(Be,"catch",ke,{unsafe:!0})}var lt=C,ut=P,ft=k,dt=S,pt=fe,mt=Je,ht=pr;lt({target:"Promise",stat:!0,forced:ht},{race:function(r){var a=this,t=dt.f(a),n=t.reject,i=pt(function(){var o=ft(a.resolve);mt(r,function(s){ut(o,a,s).then(t.resolve,n)})});return i.error&&n(i.value),t.promise}});var $t=C,Et=P,Ot=S,Ct=y.CONSTRUCTOR;$t({target:"Promise",stat:!0,forced:Ct},{reject:function(r){var a=Ot.f(this);return Et(a.reject,void 0,r),a.promise}});var St=Qe,It=He,Rt=S,gt=function(e,r){if(St(e),It(r)&&r.constructor===e)return r;var a=Rt.f(e),t=a.resolve;return t(r),a.promise},bt=C,Tt=Ke,Pt=y.CONSTRUCTOR,yt=gt;Tt("Promise");bt({target:"Promise",stat:!0,forced:Pt},{resolve:function(r){return yt(this,r)}});var Nt=Object.is||function(r,a){return r===a?r!==0||1/r===1/a:r!=r&&a!=a},_t=P,wt=Ar,jt=Qe,Dt=Lr,Mt=xr,Ve=Nt,Fe=Br,Ut=kr,At=Vr;wt("search",function(e,r,a){return[function(n){var i=Mt(this),o=Dt(n)?void 0:Ut(n,e);return o?_t(o,n,i):new RegExp(n)[e](Fe(i))},function(t){var n=jt(this),i=Fe(t),o=a(r,n,i);if(o.done)return o.value;var s=n.lastIndex;Ve(s,0)||(n.lastIndex=0);var v=At(n,i);return Ve(n.lastIndex,s)||(n.lastIndex=s),v===null?-1:v.index}]});var I;typeof window<"u"?I=window:typeof Ee<"u"?I=Ee:typeof self<"u"?I=self:I={};var Lt=I;const kt=Fr(Lt);export{kt as g};
//# sourceMappingURL=window-515f0b81.js.map