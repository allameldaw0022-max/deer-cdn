((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={at_:function at_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},at0:function at0(){},Rh:function Rh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Rf:function Rf(){},Rg:function Rg(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.Gn$=d
_.fh$=e
_.b_$=f
_.a=null},aro:function aro(d,e,f,g,h,i,j){var _=this
_.hD=d
_.y1=e
_.y2=f
_.eo$=g
_.az$=h
_.ev$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},uC:function uC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
_.to=d
_.x1=e
_.dx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.cy=x
_.a=a0},asY:function asY(d,e,f){this.f=d
this.d=e
this.a=f}}
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
A.at_.prototype={
aFa(d){var x=this.c
return d.Mz(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.e.aU(B.a(["scrollOffset: "+B.p(x.a),"crossAxisOffset: "+B.p(x.b),"mainAxisExtent: "+B.p(x.c),"crossAxisExtent: "+B.p(x.d)],y.x),", ")+")"}}
A.at0.prototype={}
A.Rh.prototype={
aeo(d){var x=this.b
return x>1e-10?this.a*C.j.f_(d,x):0},
aem(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.j.eu(d/x)-1)
return 0},
aYS(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Qc(d){var x=this,w=x.a,v=C.h.V(d,w)
return new A.at_(C.h.f_(d,w)*x.b,x.aYS(v*x.c),x.d,x.e)},
a8O(d){var x
if(d===0)return 0
x=this.b
return x*(C.h.f_(d-1,this.a)+1)-(x-this.d)}}
A.Rf.prototype={}
A.Rg.prototype={
j(d){return"crossAxisOffset="+B.p(this.w)+"; "+this.aLn(0)}}
A.aro.prototype={
jv(d){if(!(d.b instanceof A.Rg))d.b=new A.Rg(!1,null,null)},
saFR(d){var x=this
if(x.hD===d)return
if(B.a_(d)!==B.a_(x.hD)||d.nj(x.hD))x.aw()
x.hD=d},
FO(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
dg(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.a8.prototype.gam.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.hD.CV(a8)
t=u.aeo(w)
s=isFinite(v)?u.aem(v):a7
if(a6.az$!=null){r=a6.avu(t)
a6.AY(r,s!=null?a6.avv(s):0)}else a6.AY(0,0)
q=u.Qc(t)
if(a6.az$==null)if(!a6.a7X(t,q.a)){p=u.a8O(a9.gFN())
a6.dy=B.tp(a7,!1,a7,a7,p,0,0,p,a7)
a9.Bg()
return}o=q.a
n=o+q.c
m=a6.az$
m.toString
m=m.b
m.toString
l=y.c
m=l.a(m).b
m.toString
k=m-1
m=y.t
j=a7
for(;k>=t;--k){i=u.Qc(k)
h=i.c
g=a6.azd(a8.Mz(i.d,h,h))
f=g.b
f.toString
m.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
n=Math.max(n,e+h)}if(j==null){h=a6.az$
h.toString
h.l6(q.aFa(a8))
j=a6.az$
h=j.b
h.toString
m.a(h)
h.a=o
h.w=q.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.q(a6).i("b3.1")
f=s!=null
for(;;){if(!(!f||k<=s)){d=!1
break}i=u.Qc(k)
e=i.c
a0=a8.Mz(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).b_$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.azb(a0,j)
if(g==null){d=!0
break}}else g.l6(a0)
a1=g.b
a1.toString
m.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
n=Math.max(n,a2+e);++k
j=g}m=a6.ev$
m.toString
m=m.b
m.toString
m=l.a(m).b
m.toString
a3=d?n:a9.aa3(a8,t,m,o,n)
a4=a6.MJ(a8,Math.min(x,o),n)
a5=a6.Ww(a8,o,n)
a6.dy=B.tp(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,a4,0,a3,a7)
if(a3===n)a9.R8=!0
a9.Bg()}}
A.uC.prototype={
avc(d){return new A.asY(this.to,this.x1,null)}}
A.asY.prototype={
bN(d){var x=new A.aro(this.f,y.v.a(d),B.E(y.e,y.g),0,null,null,B.b8(y.d))
x.bJ()
return x},
bT(d,e){e.saFR(this.f)},
aa2(d,e,f,g,h){var x
this.aLo(d,e,f,g,h)
x=this.f.CV(d).a8O(this.d.gGg())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.O,[A.at_,A.at0,A.Rf])
w(A.Rh,A.at0)
w(A.Rg,B.lL)
w(A.aro,B.x8)
w(A.uC,B.Wq)
w(A.asY,B.xg)})()
B.fK(b.typeUniverse,JSON.parse('{"Rg":{"lL":[],"A0":[],"ja":["a5"],"uL":[],"hd":[]},"aro":{"x8":[],"hD":[],"b3":["a5","lL"],"a8":[],"bq":[],"b3.1":"lL","b3.0":"a5"},"uC":{"as":[],"n":[]},"asY":{"xg":[],"bl":[],"n":[]}}'))
var y={d:B.Z("jt"),x:B.Z("w<c>"),g:B.Z("a5"),z:B.Z("xf"),t:B.Z("Rg"),v:B.Z("K1"),c:B.Z("lL"),e:B.Z("o")}};
(a=>{a["VURkpSic6jp9B1s629zG7naSDg0="]=a.current})($__dart_deferred_initializers__);