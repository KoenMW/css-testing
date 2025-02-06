(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();const at=!1;var dt=Array.isArray,Lt=Array.prototype.indexOf,Rt=Array.from,Pt=Object.defineProperty,st=Object.getOwnPropertyDescriptor;function qt(t){for(var r=0;r<t.length;r++)t[r]()}const L=2,ht=4,nt=8,Mt=16,C=32,H=64,I=128,K=256,$=512,w=1024,R=2048,P=4096,B=8192,j=16384,It=32768,$t=65536,Bt=1<<19,Vt=1<<20;function Ut(t){return t===this.v}function Wt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}let et=!1,Yt=!1;function Ht(){et=!0}const Kt=1,jt=2;let d=null;function ft(t){d=t}function zt(t,r=!1,n){d={p:d,c:null,e:null,m:!1,s:t,x:null,l:null},et&&!r&&(d.l={s:null,u:null,r1:[],r2:Qt(!1)})}function Gt(t){const r=d;if(r!==null){const o=r.e;if(o!==null){var n=h,e=p;r.e=null;try{for(var l=0;l<o.length;l++){var u=o[l];x(u.effect),y(u.reaction),ar(u.fn)}}finally{x(n),y(e)}}d=r.p,r.m=!0}return{}}function Jt(){return!et||d!==null&&d.l===null}function Qt(t,r){var n={f:0,v:t,reactions:null,equals:Ut,rv:0,wv:0};return n}var ct,gt,wt;function Xt(){if(ct===void 0){ct=window;var t=Element.prototype,r=Node.prototype;gt=st(r,"firstChild").get,wt=st(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Et(t=""){return document.createTextNode(t)}function V(t){return gt.call(t)}function lt(t){return wt.call(t)}function Zt(t,r){return V(t)}function tr(t,r){{var n=V(t);return n instanceof Comment&&n.data===""?lt(n):n}}function rr(t,r=1,n=!1){let e=t;for(;r--;)e=lt(e);return e}function mt(t){var r=t.effects;if(r!==null){t.effects=null;for(var n=0;n<r.length;n+=1)N(r[n])}}function nr(t){for(var r=t.parent;r!==null;){if(!(r.f&L))return r;r=r.parent}return null}function er(t){var r,n=h;x(nr(t));try{mt(t),r=Ft(t)}finally{x(n)}return r}function lr(t){var r=er(t),n=(k||t.f&K)&&t.deps!==null?P:w;b(t,n),t.equals(r)||(t.v=r,t.wv=dr())}function ur(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function z(t,r,n,e=!0){var l=(t&H)!==0,u=h,o={ctx:d,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:r,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,wv:0};if(n){var s=A;try{_t(!0),ot(o),o.f|=It}catch(_){throw N(o),_}finally{_t(s)}}else r!==null&&Ot(o);var f=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Vt|I))===0;if(!f&&!l&&e&&(u!==null&&ur(o,u),p!==null&&p.f&L)){var c=p;(c.effects??(c.effects=[])).push(o)}return o}function or(t){const r=z(nt,null,!1);return b(r,w),r.teardown=t,r}function ir(t){const r=z(H,t,!0);return(n={})=>new Promise(e=>{n.outro?cr(r,()=>{N(r),e(void 0)}):(N(r),e(void 0))})}function ar(t){return z(ht,t,!1)}function sr(t,r=!0){return z(nt|C,t,!0,r)}function yt(t){var r=t.teardown;if(r!==null){const n=p;y(null);try{r.call(null)}finally{y(n)}}}function xt(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;N(n,r),n=e}}function fr(t){for(var r=t.first;r!==null;){var n=r.next;r.f&C||N(r),r=n}}function N(t,r=!0){var n=!1;if((r||t.f&Bt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var u=e===l?null:lt(e);e.remove(),e=u}n=!0}xt(t,r&&!n),Y(t,0),b(t,j);var o=t.transitions;if(o!==null)for(const f of o)f.stop();yt(t);var s=t.parent;s!==null&&s.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function cr(t,r){var n=[];Tt(t,n,!0),_r(n,()=>{N(t),r&&r()})}function _r(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var l of t)l.out(e)}else r()}function Tt(t,r,n){if(!(t.f&B)){if(t.f^=B,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&r.push(o);for(var e=t.first;e!==null;){var l=e.next,u=(e.f&$t)!==0||(e.f&C)!==0;Tt(e,r,u?n:!1),e=l}}}let Q=!1,X=[];function vr(){Q=!1;const t=X.slice();X=[],qt(t)}function pr(t){Q||(Q=!0,queueMicrotask(vr)),X.push(t)}let M=!1,U=!1,W=null,A=!1;function _t(t){A=t}let Z=[],D=0;let p=null,J=!1;function y(t){p=t}let h=null;function x(t){h=t}let E=null,g=0,F=null,kt=1,vt=0,k=!1;function dr(){return++kt}function ut(t){var c;var r=t.f;if(r&R)return!0;if(r&P){var n=t.deps,e=(r&K)!==0;if(n!==null){var l,u,o=(r&$)!==0,s=e&&h!==null&&!k,f=n.length;if(o||s){for(l=0;l<f;l++)u=n[l],(o||!((c=u==null?void 0:u.reactions)!=null&&c.includes(t)))&&(u.reactions??(u.reactions=[])).push(t);o&&(t.f^=$)}for(l=0;l<f;l++)if(u=n[l],ut(u)&&lr(u),u.wv>t.wv)return!0}(!e||h!==null&&!k)&&b(t,w)}return!1}function hr(t,r){for(var n=r;n!==null;){if(n.f&I)try{n.fn(t);return}catch{n.f^=I}n=n.parent}throw M=!1,t}function gr(t){return(t.f&j)===0&&(t.parent===null||(t.parent.f&I)===0)}function G(t,r,n,e){if(M){if(n===null&&(M=!1),gr(r))throw t;return}n!==null&&(M=!0);{hr(t,r);return}}function Nt(t,r,n=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var u=e[l];u.f&L?Nt(u,r,n+1):r===u&&(n===0?b(u,R):u.f&w&&b(u,P),Ot(u))}}function Ft(t){var a;var r=E,n=g,e=F,l=p,u=k,o=d,s=J,f=t.f;E=null,g=0,F=null,p=f&(C|H)?null:t,k=(f&K)!==0&&(!A||(l===null||s)&&t.parent!==null),ft(t.ctx),J=!1,vt++;try{var c=(0,t.fn)(),_=t.deps;if(E!==null){var i;if(Y(t,g),_!==null&&g>0)for(_.length=g+E.length,i=0;i<E.length;i++)_[g+i]=E[i];else t.deps=_=E;if(!k)for(i=g;i<_.length;i++)((a=_[i]).reactions??(a.reactions=[])).push(t)}else _!==null&&g<_.length&&(Y(t,g),_.length=g);if(Jt()&&F!==null&&!(t.f&(L|P|R)))for(i=0;i<F.length;i++)Nt(F[i],t);return l!==null&&vt++,c}finally{E=r,g=n,F=e,p=l,k=u,ft(o),J=s}}function wr(t,r){let n=r.reactions;if(n!==null){var e=Lt.call(n,t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&L&&(E===null||!E.includes(r))&&(b(r,P),r.f&(K|$)||(r.f^=$),mt(r),Y(r,0))}function Y(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)wr(t,n[e])}function ot(t){var r=t.f;if(!(r&j)){b(t,w);var n=h,e=d;h=t;try{r&Mt?fr(t):xt(t),yt(t);var l=Ft(t);t.teardown=typeof l=="function"?l:null,t.wv=kt;var u=t.deps,o;at&&Yt&&t.f&R}catch(s){G(s,t,n,e||t.ctx)}finally{h=n}}}function Er(){if(D>1e3){D=0;try{Wt()}catch(t){if(W!==null)G(t,W,null);else throw t}}D++}function mr(t){var r=t.length;if(r!==0){Er();var n=A;A=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&w||(l.f^=w);var u=[];At(l,u),yr(u)}}finally{A=n}}}function yr(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(j|B)))try{ut(e)&&(ot(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}catch(l){G(l,e,null,e.ctx)}}}function xr(){if(U=!1,D>1001)return;const t=Z;Z=[],mr(t),U||(D=0,W=null)}function Ot(t){U||(U=!0,queueMicrotask(xr)),W=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(H|C)){if(!(n&w))return;r.f^=w}}Z.push(r)}function At(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,u=(l&C)!==0,o=u&&(l&w)!==0,s=n.next;if(!o&&!(l&B))if(l&nt){if(u)n.f^=w;else{var f=p;try{p=n,ut(n)&&ot(n)}catch(a){G(a,n,null,n.ctx)}finally{p=f}}var c=n.first;if(c!==null){n=c;continue}}else l&ht&&e.push(n);if(s===null){let a=n.parent;for(;a!==null;){if(t===a)break t;var _=a.next;if(_!==null){n=_;continue t}a=a.parent}}n=s}for(var i=0;i<e.length;i++)c=e[i],r.push(c),At(c,r)}const br=-7169;function b(t,r){t.f=t.f&br|r}const Tr=["touchstart","touchmove"];function kr(t){return Tr.includes(t)}function Nr(t){var r=p,n=h;y(null),x(null);try{return t()}finally{y(r),x(n)}}const Fr=new Set,pt=new Set;function Or(t,r,n,e={}){function l(u){if(e.capture||S.call(r,u),!u.cancelBubble)return Nr(()=>n==null?void 0:n.call(this,u))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?pr(()=>{r.addEventListener(t,l,e)}):r.addEventListener(t,l,e),l}function Ar(t,r,n,e,l){var u={capture:e,passive:l},o=Or(t,r,n,u);(r===document.body||r===window||r===document)&&or(()=>{r.removeEventListener(t,o,u)})}function S(t){var it;var r=this,n=r.ownerDocument,e=t.type,l=((it=t.composedPath)==null?void 0:it.call(t))||[],u=l[0]||t.target,o=0,s=t.__root;if(s){var f=l.indexOf(s);if(f!==-1&&(r===document||r===window)){t.__root=r;return}var c=l.indexOf(r);if(c===-1)return;f<=c&&(o=f)}if(u=l[o]||t.target,u!==r){Pt(t,"currentTarget",{configurable:!0,get(){return u||n}});var _=p,i=h;y(null),x(null);try{for(var a,v=[];u!==null;){var m=u.assignedSlot||u.parentNode||u.host||null;try{var T=u["__"+e];if(T!==void 0&&!u.disabled)if(dt(T)){var[St,...Dt]=T;St.apply(u,[t,...Dt])}else T.call(u,t)}catch(q){a?v.push(q):a=q}if(t.cancelBubble||m===r||m===null)break;u=m}if(a){for(let q of v)queueMicrotask(()=>{throw q});throw a}}finally{t.__root=r,delete t.currentTarget,y(_),x(i)}}}function Cr(t){var r=document.createElement("template");return r.innerHTML=t,r.content}function tt(t,r){var n=h;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=r)}function Ct(t,r){var n=(r&Kt)!==0,e=(r&jt)!==0,l,u=!t.startsWith("<!>");return()=>{l===void 0&&(l=Cr(u?t:"<!>"+t),n||(l=V(l)));var o=e?document.importNode(l,!0):l.cloneNode(!0);if(n){var s=V(o),f=o.lastChild;tt(s,f)}else tt(o,o);return o}}function Sr(t=""){{var r=Et(t+"");return tt(r,r),r}}function rt(t,r){t!==null&&t.before(r)}function Dr(t,r){return Lr(t,r)}const O=new Map;function Lr(t,{target:r,anchor:n,props:e={},events:l,context:u,intro:o=!0}){Xt();var s=new Set,f=i=>{for(var a=0;a<i.length;a++){var v=i[a];if(!s.has(v)){s.add(v);var m=kr(v);r.addEventListener(v,S,{passive:m});var T=O.get(v);T===void 0?(document.addEventListener(v,S,{passive:m}),O.set(v,1)):O.set(v,T+1)}}};f(Rt(Fr)),pt.add(f);var c=void 0,_=ir(()=>{var i=n??r.appendChild(Et());return sr(()=>{if(u){zt({});var a=d;a.c=u}l&&(e.$$events=l),c=t(i,e)||{},u&&Gt()}),()=>{var m;for(var a of s){r.removeEventListener(a,S);var v=O.get(a);--v===0?(document.removeEventListener(a,S),O.delete(a)):O.set(a,v)}pt.delete(f),i!==n&&((m=i.parentNode)==null||m.removeChild(i))}});return Rr.set(c,_),c}let Rr=new WeakMap;function Pr(t,r,n,e,l){var s;var u=(s=r.$$slots)==null?void 0:s[n],o=!1;u===!0&&(u=r.children,o=!0),u===void 0||u(t,o?()=>e:e)}function qr(t,r){var u;var n=(u=t.$$events)==null?void 0:u[r.type],e=dt(n)?n.slice():n==null?[]:[n];for(var l of e)l.call(this,r)}const Mr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Mr);Ht();var Ir=Ct('<button class="button svelte-92as9z"><!></button>');function $r(t,r){var n=Ir(),e=Zt(n);Pr(e,r,"default",{}),Ar("click",n,function(l){qr.call(this,r,l)}),rt(t,n)}var Br=Ct("<body>hoi</body> <!>",1);function Vr(t){const r=()=>{console.log("clicked")};var n=Br(),e=rr(tr(n),2);$r(e,{$$events:{click:r},children:(l,u)=>{var o=Sr("wow a button");rt(l,o)},$$slots:{default:!0}}),rt(t,n)}Dr(Vr,{target:document.getElementById("app")});
