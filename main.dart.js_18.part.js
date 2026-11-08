((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={asB:function asB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},asC:function asC(){},R0:function R0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},QZ:function QZ(){},R_:function R_(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.Gb$=d
_.fg$=e
_.b_$=f
_.a=null},ar_:function ar_(d,e,f,g,h,i,j){var _=this
_.hw=d
_.y1=e
_.y2=f
_.eo$=g
_.av$=h
_.es$=i
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
_.dx=$},uv:function uv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
_.a=a0},asz:function asz(d,e,f){this.f=d
this.d=e
this.a=f}}
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
A.asB.prototype={
aEw(d){var x=this.c
return d.Mg(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.e.aS(B.a(["scrollOffset: "+B.p(x.a),"crossAxisOffset: "+B.p(x.b),"mainAxisExtent: "+B.p(x.c),"crossAxisExtent: "+B.p(x.d)],y.x),", ")+")"}}
A.asC.prototype={}
A.R0.prototype={
adY(d){var x=this.b
return x>1e-10?this.a*C.j.f4(d,x):0},
adW(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.j.ey(d/x)-1)
return 0},
aY0(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
PV(d){var x=this,w=x.a,v=C.f.W(d,w)
return new A.asB(C.f.f4(d,w)*x.b,x.aY0(v*x.c),x.d,x.e)},
a8o(d){var x
if(d===0)return 0
x=this.b
return x*(C.f.f4(d-1,this.a)+1)-(x-this.d)}}
A.QZ.prototype={}
A.R_.prototype={
j(d){return"crossAxisOffset="+B.p(this.w)+"; "+this.aKC(0)}}
A.ar_.prototype={
jr(d){if(!(d.b instanceof A.R_))d.b=new A.R_(!1,null,null)},
saFc(d){var x=this
if(x.hw===d)return
if(B.Y(d)!==B.Y(x.hw)||d.ni(x.hw))x.au()
x.hw=d},
FC(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
dd(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.a7.prototype.gak.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.hw.CL(a8)
t=u.adY(w)
s=isFinite(v)?u.adW(v):a7
if(a6.av$!=null){r=a6.auV(t)
a6.AK(r,s!=null?a6.auW(s):0)}else a6.AK(0,0)
q=u.PV(t)
if(a6.av$==null)if(!a6.a7x(t,q.a)){p=u.a8o(a9.gFB())
a6.dy=B.th(a7,!1,a7,a7,p,0,0,p,a7)
a9.B2()
return}o=q.a
n=o+q.c
m=a6.av$
m.toString
m=m.b
m.toString
l=y.c
m=l.a(m).b
m.toString
k=m-1
m=y.t
j=a7
for(;k>=t;--k){i=u.PV(k)
h=i.c
g=a6.ayF(a8.Mg(i.d,h,h))
f=g.b
f.toString
m.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
n=Math.max(n,e+h)}if(j==null){h=a6.av$
h.toString
h.l6(q.aEw(a8))
j=a6.av$
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
break}i=u.PV(k)
e=i.c
a0=a8.Mg(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).b_$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.ayD(a0,j)
if(g==null){d=!0
break}}else g.l6(a0)
a1=g.b
a1.toString
m.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
n=Math.max(n,a2+e);++k
j=g}m=a6.es$
m.toString
m=m.b
m.toString
m=l.a(m).b
m.toString
a3=d?n:a9.a9E(a8,t,m,o,n)
a4=a6.Mq(a8,Math.min(x,o),n)
a5=a6.We(a8,o,n)
a6.dy=B.th(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,a4,0,a3,a7)
if(a3===n)a9.R8=!0
a9.B2()}}
A.uv.prototype={
auE(d){return new A.asz(this.to,this.x1,null)}}
A.asz.prototype={
bM(d){var x=new A.ar_(this.f,y.v.a(d),B.D(y.e,y.g),0,null,null,B.b6(y.d))
x.bI()
return x},
bS(d,e){e.saFc(this.f)},
a9D(d,e,f,g,h){var x
this.aKD(d,e,f,g,h)
x=this.f.CL(d).a8o(this.d.gG4())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.M,[A.asB,A.asC,A.QZ])
w(A.R0,A.asC)
w(A.R_,B.lG)
w(A.ar_,B.wX)
w(A.uv,B.W6)
w(A.asz,B.x4)})()
B.fK(b.typeUniverse,JSON.parse('{"R_":{"lG":[],"zM":[],"j0":["a5"],"uE":[],"h8":[]},"ar_":{"wX":[],"hv":[],"b3":["a5","lG"],"a7":[],"bo":[],"b3.1":"lG","b3.0":"a5"},"uv":{"as":[],"m":[]},"asz":{"x4":[],"bk":[],"m":[]}}'))
var y={d:B.a0("jl"),x:B.a0("y<c>"),g:B.a0("a5"),z:B.a0("x3"),t:B.a0("R_"),v:B.a0("JL"),c:B.a0("lG"),e:B.a0("o")}};
(a=>{a["A/Ha7NtL6Qn0b4+kjLajWRHFE3g="]=a.current})($__dart_deferred_initializers__);