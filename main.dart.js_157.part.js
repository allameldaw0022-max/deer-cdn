((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dl8(d){var x,w,v,u,t,s=A.a([],y.b)
for(x=J.ad(d),w=y.U,v=null;x.q();){u=x.gC(x)
t=u.c
if(t==null)t=u.a.fX()+"|"+u.b+"|"+A.p(u.x)
if(t!==v||s.length===0){s.push(new B.PG(u.a,u.b,u.x,A.a([],w)))
v=t}C.e.gao(s).d.push(u)}return s},
adH(d){var x=A.Q(d,"&","&amp;")
x=A.Q(x,"<","&lt;")
return A.Q(x,">","&gt;")},
dm_(a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",f="&",e="&amp;",d="<",a0="&lt;",a1=">",a2="&gt;",a3='</td><td class="n">',a4={},a5=new A.dL(""),a6='<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>'+B.adH(g)+"</title><style>body{font-family:sans-serif;font-size:12px;margin:16px}h1{font-size:18px;margin:0}table{width:100%;border-collapse:collapse;margin:6px 0 12px}td,th{border:1px solid #ccc;padding:4px 6px;text-align:right}th{background:#f3f3f3}.n{text-align:left;direction:ltr}.day{background:#e9f5ee;font-weight:bold}</style></head><body>"
a5.a=a6
a6+="<h1>"+B.adH(g)+" \xb7 "+B.adH(a9)+"</h1>"
a5.a=a6
a5.a=a6+("<div>"+B.adH("\u0645\u0646 "+B.cGw(a8)+" \u0625\u0644\u0649 "+B.cGw(b0))+"</div>")
a4.a=null
a4.b=a4.c=0
x=new B.cun(a4,a5)
for(a6=a7.length,w=y.q,v=0,u=0,t=0;t<a7.length;a7.length===a6||(0,A.y)(a7),++t){s=a7[t]
r=s.a
q=A.aW(A.as(r),A.ar(r),A.aI(r),0,0,0,0)
r=a4.a
if(r!=null)r=!(q.a===r.a&&q.b===r.b&&q.c===r.c)
else r=!0
if(r){x.$0()
a4.a=q
a4.b=a4.c=0
r=C.fu[A.jl(q)-1]
p=C.dK[A.ar(q)-1]
r=A.Q(r+"\u060c "+A.aI(q)+" "+p,f,e)
r=A.Q(r,d,a0)
r=A.Q(r,a1,a2)
p=A.Q("\u0627\u0644\u0628\u064a\u0627\u0646",f,e)
p=A.Q(p,d,a0)
p=A.Q(p,a1,a2)
o=A.Q("\u0627\u0644\u062d\u0633\u0627\u0628",f,e)
o=A.Q(o,d,a0)
o=A.Q(o,a1,a2)
n=A.Q("\u0645\u062f\u064a\u0646",f,e)
n=A.Q(n,d,a0)
n=A.Q(n,a1,a2)
m=A.Q("\u062f\u0627\u0626\u0646",f,e)
m=A.Q(m,d,a0)
r='<table><tr><th colspan="4">'+r+" "+A.as(q)+"</th></tr><tr><th>"+p+"</th><th>"+o+"</th><th>"+n+"</th><th>"+A.Q(m,a1,a2)+"</th></tr>"
a5.a+=r}for(r=A.e0(s.d,0,w),p=J.ad(r.a),o=r.b,r=new A.bz(p,o,A.q(r).i("bz<1>")),n=s.b;r.q();){m=r.c
m=m>=0?new A.D(o+m,p.gC(p)):A.W(A.bE())
l=m.b
if(m.a===0){m=A.Q(n,f,e)
m=A.Q(m,d,a0)
m=A.Q(m,a1,a2)}else m=""
k=A.Q(l.e,f,e)
k=A.Q(k,d,a0)
k=A.Q(k,a1,a2)
j=l.w
if(j==null)j=""
else{j=A.Q(j,f,e)
j=A.Q(j,d,a0)
j=" \xb7 "+A.Q(j,a1,a2)}i=l.f
i=i===0?"":A.C(i)
h=l.r
h=h===0?"":A.C(h)
h="<tr><td>"+m+"</td><td>"+k+j+a3+i+a3+h+"</td></tr>"
a5.a+=h}a4.c=a4.c+s.gXT()
a4.b=a4.b+s.gXN()
v+=s.gXT()
u+=s.gXN()}x.$0()
a6="<p><b>"+B.adH("\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u062a\u0631\u0629")+": "+A.C(v)+" / "+A.C(u)+" "+$.w().w+"</b></p></body></html>"
a6=a5.a+=a6
return A.cGR(a6.charCodeAt(0)==0?a6:a6)},
cGw(d){return""+A.as(d)+"/"+C.f.aM(C.h.j(A.ar(d)),2,"0")+"/"+C.f.aM(C.h.j(A.aI(d)),2,"0")},
d5b(){return new B.D5(null)},
PG:function PG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b54:function b54(){},
b53:function b53(){},
cun:function cun(d,e){this.a=d
this.b=e},
D5:function D5(d){this.a=d},
a8c:function a8c(){var _=this
_.w=$
_.x="\u0627\u0644\u064a\u0648\u0645"
_.z=_.y=null
_.Q=!1
_.d=$
_.c=_.a=null},
bOd:function bOd(d){this.a=d},
bOe:function bOe(d,e){this.a=d
this.b=e},
bOf:function bOf(d,e){this.a=d
this.b=e},
bOg:function bOg(d){this.a=d},
bOh:function bOh(d,e){this.a=d
this.b=e},
bOi:function bOi(d,e){this.a=d
this.b=e},
bOj:function bOj(d){this.a=d},
bOm:function bOm(){},
bOn:function bOn(){},
bOo:function bOo(d,e){this.a=d
this.b=e},
bOp:function bOp(d,e,f){this.a=d
this.b=e
this.c=f},
bOk:function bOk(){},
bOl:function bOl(){}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[55]
B=a.updateHolder(c[24],B)
D=c[56]
F=c[57]
G=c[47]
B.PG.prototype={
gXT(){return C.e.cM(this.d,0,new B.b54())},
gXN(){return C.e.cM(this.d,0,new B.b53())}}
B.D5.prototype={
X(){return new B.a8c()}}
B.a8c.prototype={
ga5p(){var x=this.gI().t(0,$.cM(),y.S).$0(),w=A.aW(A.as(x),A.ar(x),A.aI(x),0,0,0,0),v=w.dz(-864e8),u=y.T
return A.L(["\u0627\u0644\u064a\u0648\u0645",new A.h_(w,w,u),"\u0623\u0645\u0633",new A.h_(v,v,u),"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",new A.h_(A.aW(A.as(x),A.ar(x),1,0,0,0,0),w,u),"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",new A.h_(A.aW(A.as(x),A.ar(x)-1,1,0,0,0,0),A.aW(A.as(x),A.ar(x),0,0,0,0,0),u)],y.N,u)},
aF(){var x,w=this
w.aW()
x=w.ga5p().h(0,"\u0627\u0644\u064a\u0648\u0645")
x.toString
w.w=x
A.cCl(w.gb65(),y.H)},
Kr(){var x=0,w=A.k(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$Kr=A.f(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.n(new B.bOd(s))
v=3
p=s.gI()
o=p.t(0,$.eu(),y.e)
p=p.t(0,$.ae(),y.Y).d
n=s.w
n===$&&A.b()
x=6
return A.c(o.aAW(p,n.a,n.b),$async$Kr)
case 6:r=e
if(s.c!=null)s.n(new B.bOe(s,r))
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
p=A.U(l)
if(p instanceof A.aB){q=p
if(s.c!=null)s.n(new B.bOf(s,q))}else throw l
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new B.bOg(s))
x=t.pop()
break
case 5:return A.i(null,w)
case 1:return A.h(u.at(-1),w)}})
return A.j($async$Kr,w)},
Ks(d){return this.bby(d)},
bby(d){var x=0,w=A.k(y.H),v,u=this,t,s,r,q,p,o
var $async$Ks=A.f(function(e,f){if(e===1)return A.h(f,w)
for(;;)switch(x){case 0:x=d==="custom"?3:5
break
case 3:t=u.gI().t(0,$.cM(),y.S).$0()
s=u.c
s.toString
r=A.aW(2024,1,1,0,0,0,0)
q=A.aW(A.as(t),A.ar(t),A.aI(t),0,0,0,0)
p=u.w
p===$&&A.b()
x=6
return A.c(G.Bw(s,r,null,p,q,null),$async$Ks)
case 6:o=f
if(o==null||u.c==null){x=1
break}if(C.h.a7(o.b.dQ(o.a).a,864e8)>366){u.c.Z(y.I).f.b1(E.nO)
x=1
break}u.n(new B.bOh(u,o))
x=4
break
case 5:u.n(new B.bOi(u,d))
case 4:x=7
return A.c(u.Kr(),$async$Ks)
case 7:case 1:return A.i(v,w)}})
return A.j($async$Ks,w)},
Kt(){var x=0,w=A.k(y.H),v,u=this,t,s,r,q,p,o,n
var $async$Kt=A.f(function(d,e){if(d===1)return A.h(e,w)
for(;;)switch(x){case 0:o=u.y
if(o==null){x=1
break}t=u.gI()
s=t.t(0,$.ae(),y.Y).e
r=u.w
r===$&&A.b()
q=B.dm_(o,r.a,s,r.b)
p=t.t(0,$.f9(),y.L)
n=p.gli(p)
if(n){x=3
break}else e=n
x=4
break
case 3:x=5
return A.c(p.kE(q),$async$Kt)
case 5:case 4:if(e){x=1
break}x=6
return A.c(A.vi(C.ec,"\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",new B.bOj(q)),$async$Kt)
case 6:case 1:return A.i(v,w)}})
return A.j($async$Kt,w)},
G(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d={},a0=f.y,a1=a0==null,a2=a1?e:C.e.cM(a0,0,new B.bOm())
if(a2==null)a2=0
x=a1?e:C.e.cM(a0,0,new B.bOn())
if(x==null)x=0
d.a=null
a1=!a1
w=y.p
v=A.a([A.cF(e,e,e,C.iT,e,D.cH2,!a1||a0.length===0?e:f.gb66(),e,e,e,"\u0637\u0628\u0627\u0639\u0629 / \u062d\u0641\u0638 PDF",e)],w)
u=A.aw(a3,C.aA,y.w).w
u=u.a.a>=1100?760:620
t=A.a([],w)
s=f.ga5p()
s=A.V(new A.bA(s,A.q(s).i("bA<1>")),y.N)
s.push("custom")
r=s.length
q=y.O
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
t.push(A.ff(e,e,new A.e("journal-"+o,q),A.l(o==="custom"?"\u0641\u062a\u0631\u0629 \u0623\u062e\u0631\u0649":o,e,e,e,e,e,e,e),e,new B.bOo(f,o),f.x===o,e,e,e,e,e))}t=A.dv(C.b3,t,6,6)
s=f.w
s===$&&A.b()
s=A.a([t,C.aN,A.l("\u0645\u0646 "+A.eY(s.a)+" \u0625\u0644\u0649 "+A.eY(f.w.b),e,e,e,e,C.ae,e,e),C.P],w)
if(f.Q)s.push(C.qd)
t=f.z
if(t!=null)s.push(A.l(t,e,e,e,e,C.d0,e,e))
if(a1&&!f.Q){a1=A.a([new A.cs(A.l(""+a0.length+" \u0642\u064a\u062f \xb7 \u0645\u062f\u064a\u0646 "+A.C(a2)+" \xb7 \u062f\u0627\u0626\u0646 "+A.C(x)+" "+$.w().w,e,e,e,e,C.lE,e,e),C.aB,e,D.cHV)],w)
if(a0.length===0)a1.push(D.bV4)
for(t=a0.length,p=0;p<a0.length;a0.length===t||(0,A.y)(a0),++p){n=a0[p]
r=A.a([],w)
q=d.a
if(q==null||!A.Yd(q,n.a))C.e.A(r,A.a([new A.fT(new B.bOp(d,n,a0),e)],w))
q=A.a([A.l(n.b,e,e,e,e,C.ak,e,e)],w)
m=n.c
if((m==null?"":m).length!==0){m.toString
q.push(A.l(m,e,e,e,e,C.ya,e,e))}for(m=n.d,l=m.length,k=0;k<m.length;m.length===l||(0,A.y)(m),++k){j=m[k]
i=j.w
i=i==null?"":" \xb7 "+i
i=A.l(j.e+i,e,e,e,e,C.ir,e,e)
h=j.f
h=A.l(h===0?"":A.C(h),e,e,e,e,C.ir,C.fe,e)
g=j.r
q.push(A.af(A.a([new A.bN(1,C.aj,i,e),new A.b0(90,e,h,e),new A.b0(90,e,A.l(g===0?"":A.C(g),e,e,e,e,C.az,C.fe,e),e)],w),C.u,e,C.p,C.r,0,e))}r.push(new A.P(C.fp,new A.cs(A.T(q,C.M,e,C.p,C.r,0,C.t),C.hn,e,e),e))
C.e.A(a1,r)}C.e.A(s,a1)}return A.c7(new A.dw("\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",C.fj,C.at,v,e),e,A.bg(!0,new A.cr(C.bQ,e,e,new A.bt(new A.at(0,u,0,1/0),A.bZ(s,e,e,F.f2,e,C.U,!1),e),e),!0,C.L,!0,!0),e,e)}}
var z=a.updateTypes(["o(o,PG)","z<~>()"])
B.b54.prototype={
$2(d,e){return d+e.f},
$S:462}
B.b53.prototype={
$2(d,e){return d+e.r},
$S:462}
B.cun.prototype={
$0(){var x,w='</td><td class="n">',v=this.a,u=v.a
if(u==null)return
x=this.b
v='<tr class="day"><td colspan="2">'+B.adH("\u0645\u062c\u0645\u0648\u0639 "+B.cGw(u))+w+A.C(v.c)+w+A.C(v.b)+"</td></tr></table>"
x.a+=v},
$S:0}
B.bOd.prototype={
$0(){var x=this.a
x.Q=!0
x.z=null},
$S:0}
B.bOe.prototype={
$0(){return this.a.y=B.dl8(this.b)},
$S:0}
B.bOf.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.bOg.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bOh.prototype={
$0(){var x=this.a
x.x="custom"
x.w=this.b},
$S:0}
B.bOi.prototype={
$0(){var x=this.a,w=this.b
x.x=w
w=x.ga5p().h(0,w)
w.toString
x.w=w},
$S:0}
B.bOj.prototype={
$1(d){return $.aex().yc(this.a,null,d)},
$S:57}
B.bOm.prototype={
$2(d,e){return d+e.gXT()},
$S:z+0}
B.bOn.prototype={
$2(d,e){return d+e.gXN()},
$S:z+0}
B.bOo.prototype={
$1(d){return this.a.Ks(this.b)},
$S:4}
B.bOp.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.a=this.b.a,r=A.a([],y.b)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.y)(x),++v){u=x[v]
if(A.Yd(u.a,s))r.push(u)}return new A.P(D.asE,A.l(A.eY(s)+" \xb7 \u0645\u062f\u064a\u0646 "+A.C(C.e.cM(r,0,new B.bOk()))+" \xb7 \u062f\u0627\u0626\u0646 "+A.C(C.e.cM(r,0,new B.bOl())),t,t,t,t,D.cg8,t,t),t)},
$S:205}
B.bOk.prototype={
$2(d,e){return d+e.gXT()},
$S:z+0}
B.bOl.prototype={
$2(d,e){return d+e.gXN()},
$S:z+0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.a8c.prototype,"gb65","Kr",1)
x(w,"gb66","Kt",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.PG,A.O)
w(A.iJ,[B.b54,B.b53,B.bOm,B.bOn,B.bOk,B.bOl])
w(A.hM,[B.cun,B.bOd,B.bOe,B.bOf,B.bOg,B.bOh,B.bOi])
x(B.D5,A.j1)
x(B.a8c,A.iK)
w(A.fU,[B.bOj,B.bOo,B.bOp])})()
A.hw(b.typeUniverse,JSON.parse('{"D5":{"R":[],"n":[]},"a8c":{"a2":["D5"]}}'))
var y=(function rtii(){var x=A.a6
return{T:x("h_<b9>"),S:x("b9()"),e:x("wP"),b:x("x<PG>"),U:x("x<uX>"),p:x("x<n>"),q:x("uX"),w:x("hn"),N:x("d"),O:x("e<d>"),L:x("pJ"),I:x("kA"),Y:x("dR?"),H:x("~")}})();(function constants(){D.asE=new A.ao(0,12,0,4)
D.crg=new A.G("\u0644\u0627 \u0642\u064a\u0648\u062f \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629.",null,C.ae,null,C.aJ,null,null,null,null,null,null,null,null,null,null,null,null)
D.bV4=new A.P(C.aP,D.crg,null)
D.cg8=new A.J(!0,C.G,null,null,null,null,null,C.c9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cH2=new A.e("journal-print",y.O)
D.cHV=new A.e("journal-total",y.O)})()};
(a=>{a["CbfEI+RH+Ohc123faZfE6kx67/g="]=a.current})($__dart_deferred_initializers__);