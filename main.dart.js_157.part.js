((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dkJ(d){var x,w,v,u,t,s=A.a([],y.b)
for(x=J.ad(d),w=y.U,v=null;x.q();){u=x.gC(x)
t=u.c
if(t==null)t=u.a.fX()+"|"+u.b+"|"+A.p(u.x)
if(t!==v||s.length===0){s.push(new B.PD(u.a,u.b,u.x,A.a([],w)))
v=t}C.e.gao(s).d.push(u)}return s},
adF(d){var x=A.R(d,"&","&amp;")
x=A.R(x,"<","&lt;")
return A.R(x,">","&gt;")},
dlA(a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",f="&",e="&amp;",d="<",a0="&lt;",a1=">",a2="&gt;",a3='</td><td class="n">',a4={},a5=new A.dL(""),a6='<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>'+B.adF(g)+"</title><style>body{font-family:sans-serif;font-size:12px;margin:16px}h1{font-size:18px;margin:0}table{width:100%;border-collapse:collapse;margin:6px 0 12px}td,th{border:1px solid #ccc;padding:4px 6px;text-align:right}th{background:#f3f3f3}.n{text-align:left;direction:ltr}.day{background:#e9f5ee;font-weight:bold}</style></head><body>"
a5.a=a6
a6+="<h1>"+B.adF(g)+" \xb7 "+B.adF(a9)+"</h1>"
a5.a=a6
a5.a=a6+("<div>"+B.adF("\u0645\u0646 "+B.cG7(a8)+" \u0625\u0644\u0649 "+B.cG7(b0))+"</div>")
a4.a=null
a4.b=a4.c=0
x=new B.ctX(a4,a5)
for(a6=a7.length,w=y.q,v=0,u=0,t=0;t<a7.length;a7.length===a6||(0,A.y)(a7),++t){s=a7[t]
r=s.a
q=A.aW(A.as(r),A.ar(r),A.aI(r),0,0,0,0)
r=a4.a
if(r!=null)r=!(q.a===r.a&&q.b===r.b&&q.c===r.c)
else r=!0
if(r){x.$0()
a4.a=q
a4.b=a4.c=0
r=C.fu[A.jk(q)-1]
p=C.dK[A.ar(q)-1]
r=A.R(r+"\u060c "+A.aI(q)+" "+p,f,e)
r=A.R(r,d,a0)
r=A.R(r,a1,a2)
p=A.R("\u0627\u0644\u0628\u064a\u0627\u0646",f,e)
p=A.R(p,d,a0)
p=A.R(p,a1,a2)
o=A.R("\u0627\u0644\u062d\u0633\u0627\u0628",f,e)
o=A.R(o,d,a0)
o=A.R(o,a1,a2)
n=A.R("\u0645\u062f\u064a\u0646",f,e)
n=A.R(n,d,a0)
n=A.R(n,a1,a2)
m=A.R("\u062f\u0627\u0626\u0646",f,e)
m=A.R(m,d,a0)
r='<table><tr><th colspan="4">'+r+" "+A.as(q)+"</th></tr><tr><th>"+p+"</th><th>"+o+"</th><th>"+n+"</th><th>"+A.R(m,a1,a2)+"</th></tr>"
a5.a+=r}for(r=A.e0(s.d,0,w),p=J.ad(r.a),o=r.b,r=new A.bz(p,o,A.q(r).i("bz<1>")),n=s.b;r.q();){m=r.c
m=m>=0?new A.D(o+m,p.gC(p)):A.W(A.bE())
l=m.b
if(m.a===0){m=A.R(n,f,e)
m=A.R(m,d,a0)
m=A.R(m,a1,a2)}else m=""
k=A.R(l.e,f,e)
k=A.R(k,d,a0)
k=A.R(k,a1,a2)
j=l.w
if(j==null)j=""
else{j=A.R(j,f,e)
j=A.R(j,d,a0)
j=" \xb7 "+A.R(j,a1,a2)}i=l.f
i=i===0?"":A.C(i)
h=l.r
h=h===0?"":A.C(h)
h="<tr><td>"+m+"</td><td>"+k+j+a3+i+a3+h+"</td></tr>"
a5.a+=h}a4.c=a4.c+s.gXT()
a4.b=a4.b+s.gXN()
v+=s.gXT()
u+=s.gXN()}x.$0()
a6="<p><b>"+B.adF("\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u062a\u0631\u0629")+": "+A.C(v)+" / "+A.C(u)+" "+$.w().w+"</b></p></body></html>"
a6=a5.a+=a6
return A.cGs(a6.charCodeAt(0)==0?a6:a6)},
cG7(d){return""+A.as(d)+"/"+C.f.aM(C.h.j(A.ar(d)),2,"0")+"/"+C.f.aM(C.h.j(A.aI(d)),2,"0")},
d4M(){return new B.D4(null)},
PD:function PD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4W:function b4W(){},
b4V:function b4V(){},
ctX:function ctX(d,e){this.a=d
this.b=e},
D4:function D4(d){this.a=d},
a87:function a87(){var _=this
_.w=$
_.x="\u0627\u0644\u064a\u0648\u0645"
_.z=_.y=null
_.Q=!1
_.d=$
_.c=_.a=null},
bO9:function bO9(d){this.a=d},
bOa:function bOa(d,e){this.a=d
this.b=e},
bOb:function bOb(d,e){this.a=d
this.b=e},
bOc:function bOc(d){this.a=d},
bOd:function bOd(d,e){this.a=d
this.b=e},
bOe:function bOe(d,e){this.a=d
this.b=e},
bOf:function bOf(d){this.a=d},
bOi:function bOi(){},
bOj:function bOj(){},
bOk:function bOk(d,e){this.a=d
this.b=e},
bOl:function bOl(d,e,f){this.a=d
this.b=e
this.c=f},
bOg:function bOg(){},
bOh:function bOh(){}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[55]
B=a.updateHolder(c[24],B)
D=c[56]
F=c[57]
G=c[47]
B.PD.prototype={
gXT(){return C.e.cM(this.d,0,new B.b4W())},
gXN(){return C.e.cM(this.d,0,new B.b4V())}}
B.D4.prototype={
X(){return new B.a87()}}
B.a87.prototype={
ga5p(){var x=this.gJ().t(0,$.cM(),y.S).$0(),w=A.aW(A.as(x),A.ar(x),A.aI(x),0,0,0,0),v=w.dz(-864e8),u=y.T
return A.L(["\u0627\u0644\u064a\u0648\u0645",new A.fZ(w,w,u),"\u0623\u0645\u0633",new A.fZ(v,v,u),"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",new A.fZ(A.aW(A.as(x),A.ar(x),1,0,0,0,0),w,u),"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",new A.fZ(A.aW(A.as(x),A.ar(x)-1,1,0,0,0,0),A.aW(A.as(x),A.ar(x),0,0,0,0,0),u)],y.N,u)},
aF(){var x,w=this
w.aW()
x=w.ga5p().h(0,"\u0627\u0644\u064a\u0648\u0645")
x.toString
w.w=x
A.cBX(w.gb65(),y.H)},
Kr(){var x=0,w=A.k(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$Kr=A.f(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.n(new B.bO9(s))
v=3
p=s.gJ()
o=p.t(0,$.ev(),y.e)
p=p.t(0,$.ae(),y.Y).d
n=s.w
n===$&&A.b()
x=6
return A.c(o.aAW(p,n.a,n.b),$async$Kr)
case 6:r=e
if(s.c!=null)s.n(new B.bOa(s,r))
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
p=A.U(l)
if(p instanceof A.aB){q=p
if(s.c!=null)s.n(new B.bOb(s,q))}else throw l
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new B.bOc(s))
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
case 3:t=u.gJ().t(0,$.cM(),y.S).$0()
s=u.c
s.toString
r=A.aW(2024,1,1,0,0,0,0)
q=A.aW(A.as(t),A.ar(t),A.aI(t),0,0,0,0)
p=u.w
p===$&&A.b()
x=6
return A.c(G.Bv(s,r,null,p,q,null),$async$Ks)
case 6:o=f
if(o==null||u.c==null){x=1
break}if(C.h.a7(o.b.dQ(o.a).a,864e8)>366){u.c.Z(y.I).f.b1(E.nO)
x=1
break}u.n(new B.bOd(u,o))
x=4
break
case 5:u.n(new B.bOe(u,d))
case 4:x=7
return A.c(u.Kr(),$async$Ks)
case 7:case 1:return A.i(v,w)}})
return A.j($async$Ks,w)},
Kt(){var x=0,w=A.k(y.H),v,u=this,t,s,r,q,p,o,n
var $async$Kt=A.f(function(d,e){if(d===1)return A.h(e,w)
for(;;)switch(x){case 0:o=u.y
if(o==null){x=1
break}t=u.gJ()
s=t.t(0,$.ae(),y.Y).e
r=u.w
r===$&&A.b()
q=B.dlA(o,r.a,s,r.b)
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
return A.c(A.vg(C.ec,"\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",new B.bOf(q)),$async$Kt)
case 6:case 1:return A.i(v,w)}})
return A.j($async$Kt,w)},
G(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d={},a0=f.y,a1=a0==null,a2=a1?e:C.e.cM(a0,0,new B.bOi())
if(a2==null)a2=0
x=a1?e:C.e.cM(a0,0,new B.bOj())
if(x==null)x=0
d.a=null
a1=!a1
w=y.p
v=A.a([A.cF(e,e,e,C.iT,e,D.cGZ,!a1||a0.length===0?e:f.gb66(),e,e,e,"\u0637\u0628\u0627\u0639\u0629 / \u062d\u0641\u0638 PDF",e)],w)
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
t.push(A.ff(e,e,new A.e("journal-"+o,q),A.l(o==="custom"?"\u0641\u062a\u0631\u0629 \u0623\u062e\u0631\u0649":o,e,e,e,e,e,e,e),e,new B.bOk(f,o),f.x===o,e,e,e,e,e))}t=A.dv(C.b3,t,6,6)
s=f.w
s===$&&A.b()
s=A.a([t,C.aN,A.l("\u0645\u0646 "+A.eY(s.a)+" \u0625\u0644\u0649 "+A.eY(f.w.b),e,e,e,e,C.ae,e,e),C.P],w)
if(f.Q)s.push(C.qd)
t=f.z
if(t!=null)s.push(A.l(t,e,e,e,e,C.d0,e,e))
if(a1&&!f.Q){a1=A.a([new A.cr(A.l(""+a0.length+" \u0642\u064a\u062f \xb7 \u0645\u062f\u064a\u0646 "+A.C(a2)+" \xb7 \u062f\u0627\u0626\u0646 "+A.C(x)+" "+$.w().w,e,e,e,e,C.lE,e,e),C.aB,e,D.cHR)],w)
if(a0.length===0)a1.push(D.bV2)
for(t=a0.length,p=0;p<a0.length;a0.length===t||(0,A.y)(a0),++p){n=a0[p]
r=A.a([],w)
q=d.a
if(q==null||!A.Y9(q,n.a))C.e.A(r,A.a([new A.fS(new B.bOl(d,n,a0),e)],w))
q=A.a([A.l(n.b,e,e,e,e,C.ak,e,e)],w)
m=n.c
if((m==null?"":m).length!==0){m.toString
q.push(A.l(m,e,e,e,e,C.y8,e,e))}for(m=n.d,l=m.length,k=0;k<m.length;m.length===l||(0,A.y)(m),++k){j=m[k]
i=j.w
i=i==null?"":" \xb7 "+i
i=A.l(j.e+i,e,e,e,e,C.ir,e,e)
h=j.f
h=A.l(h===0?"":A.C(h),e,e,e,e,C.ir,C.fe,e)
g=j.r
q.push(A.af(A.a([new A.bP(1,C.aj,i,e),new A.b0(90,e,h,e),new A.b0(90,e,A.l(g===0?"":A.C(g),e,e,e,e,C.az,C.fe,e),e)],w),C.u,e,C.p,C.r,0,e))}r.push(new A.P(C.fp,new A.cr(A.T(q,C.M,e,C.p,C.r,0,C.t),C.hn,e,e),e))
C.e.A(a1,r)}C.e.A(s,a1)}return A.c7(new A.dw("\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",C.fj,C.at,v,e),e,A.bg(!0,new A.cu(C.bQ,e,e,new A.bt(new A.at(0,u,0,1/0),A.bZ(s,e,e,F.f2,e,C.U,!1),e),e),!0,C.L,!0,!0),e,e)}}
var z=a.updateTypes(["o(o,PD)","z<~>()"])
B.b4W.prototype={
$2(d,e){return d+e.f},
$S:461}
B.b4V.prototype={
$2(d,e){return d+e.r},
$S:461}
B.ctX.prototype={
$0(){var x,w='</td><td class="n">',v=this.a,u=v.a
if(u==null)return
x=this.b
v='<tr class="day"><td colspan="2">'+B.adF("\u0645\u062c\u0645\u0648\u0639 "+B.cG7(u))+w+A.C(v.c)+w+A.C(v.b)+"</td></tr></table>"
x.a+=v},
$S:0}
B.bO9.prototype={
$0(){var x=this.a
x.Q=!0
x.z=null},
$S:0}
B.bOa.prototype={
$0(){return this.a.y=B.dkJ(this.b)},
$S:0}
B.bOb.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.bOc.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bOd.prototype={
$0(){var x=this.a
x.x="custom"
x.w=this.b},
$S:0}
B.bOe.prototype={
$0(){var x=this.a,w=this.b
x.x=w
w=x.ga5p().h(0,w)
w.toString
x.w=w},
$S:0}
B.bOf.prototype={
$1(d){return $.aev().yc(this.a,null,d)},
$S:57}
B.bOi.prototype={
$2(d,e){return d+e.gXT()},
$S:z+0}
B.bOj.prototype={
$2(d,e){return d+e.gXN()},
$S:z+0}
B.bOk.prototype={
$1(d){return this.a.Ks(this.b)},
$S:4}
B.bOl.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.a=this.b.a,r=A.a([],y.b)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.y)(x),++v){u=x[v]
if(A.Y9(u.a,s))r.push(u)}return new A.P(D.asE,A.l(A.eY(s)+" \xb7 \u0645\u062f\u064a\u0646 "+A.C(C.e.cM(r,0,new B.bOg()))+" \xb7 \u062f\u0627\u0626\u0646 "+A.C(C.e.cM(r,0,new B.bOh())),t,t,t,t,D.cg6,t,t),t)},
$S:206}
B.bOg.prototype={
$2(d,e){return d+e.gXT()},
$S:z+0}
B.bOh.prototype={
$2(d,e){return d+e.gXN()},
$S:z+0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.a87.prototype,"gb65","Kr",1)
x(w,"gb66","Kt",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.PD,A.O)
w(A.iI,[B.b4W,B.b4V,B.bOi,B.bOj,B.bOg,B.bOh])
w(A.hL,[B.ctX,B.bO9,B.bOa,B.bOb,B.bOc,B.bOd,B.bOe])
x(B.D4,A.j0)
x(B.a87,A.iJ)
w(A.fT,[B.bOf,B.bOk,B.bOl])})()
A.hv(b.typeUniverse,JSON.parse('{"D4":{"Q":[],"n":[]},"a87":{"a3":["D4"]}}'))
var y=(function rtii(){var x=A.a6
return{T:x("fZ<b9>"),S:x("b9()"),e:x("wL"),b:x("x<PD>"),U:x("x<uV>"),p:x("x<n>"),q:x("uV"),w:x("hm"),N:x("d"),O:x("e<d>"),L:x("pI"),I:x("ky"),Y:x("dR?"),H:x("~")}})();(function constants(){D.asE=new A.ao(0,12,0,4)
D.crf=new A.G("\u0644\u0627 \u0642\u064a\u0648\u062f \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629.",null,C.ae,null,C.aJ,null,null,null,null,null,null,null,null,null,null,null,null)
D.bV2=new A.P(C.aP,D.crf,null)
D.cg6=new A.J(!0,C.G,null,null,null,null,null,C.c9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cGZ=new A.e("journal-print",y.O)
D.cHR=new A.e("journal-total",y.O)})()};
(a=>{a["VA3QT4kth3hxfXpWU23wk7xJ2kc="]=a.current})($__dart_deferred_initializers__);