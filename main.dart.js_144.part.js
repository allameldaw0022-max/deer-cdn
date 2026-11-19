((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dp3(d){var x,w,v,u,t,s=A.a([],y.b)
for(x=J.ae(d),w=y.U,v=null;x.q();){u=x.gD(x)
t=u.c
if(t==null)t=u.a.fZ()+"|"+u.b+"|"+A.p(u.x)
if(t!==v||s.length===0){s.push(new B.Q2(u.a,u.b,u.x,A.a([],w)))
v=t}C.e.gap(s).d.push(u)}return s},
aef(d){var x=A.N(d,"&","&amp;")
x=A.N(x,"<","&lt;")
return A.N(x,">","&gt;")},
dpV(a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",f="&",e="&amp;",d="<",a0="&lt;",a1=">",a2="&gt;",a3='</td><td class="n">',a4={},a5=new A.dK(""),a6='<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>'+B.aef(g)+"</title><style>body{font-family:sans-serif;font-size:12px;margin:16px}h1{font-size:18px;margin:0}table{width:100%;border-collapse:collapse;margin:6px 0 12px}td,th{border:1px solid #ccc;padding:4px 6px;text-align:right}th{background:#f3f3f3}.n{text-align:left;direction:ltr}.day{background:#e9f5ee;font-weight:bold}</style></head><body>"
a5.a=a6
a6+="<h1>"+B.aef(g)+" \xb7 "+B.aef(a9)+"</h1>"
a5.a=a6
a5.a=a6+("<div>"+B.aef("\u0645\u0646 "+B.cKa(a8)+" \u0625\u0644\u0649 "+B.cKa(b0))+"</div>")
a4.a=null
a4.b=a4.c=0
x=new B.cxC(a4,a5)
for(a6=a7.length,w=y.q,v=0,u=0,t=0;t<a7.length;a7.length===a6||(0,A.y)(a7),++t){s=a7[t]
r=s.a
q=A.aU(A.aq(r),A.ao(r),A.aI(r),0,0,0,0)
r=a4.a
if(r!=null)r=!(q.a===r.a&&q.b===r.b&&q.c===r.c)
else r=!0
if(r){x.$0()
a4.a=q
a4.b=a4.c=0
r=C.f7[A.jb(q)-1]
p=C.dD[A.ao(q)-1]
r=A.N(r+"\u060c "+A.aI(q)+" "+p,f,e)
r=A.N(r,d,a0)
r=A.N(r,a1,a2)
p=A.N("\u0627\u0644\u0628\u064a\u0627\u0646",f,e)
p=A.N(p,d,a0)
p=A.N(p,a1,a2)
o=A.N("\u0627\u0644\u062d\u0633\u0627\u0628",f,e)
o=A.N(o,d,a0)
o=A.N(o,a1,a2)
n=A.N("\u0645\u062f\u064a\u0646",f,e)
n=A.N(n,d,a0)
n=A.N(n,a1,a2)
m=A.N("\u062f\u0627\u0626\u0646",f,e)
m=A.N(m,d,a0)
r='<table><tr><th colspan="4">'+r+" "+A.aq(q)+"</th></tr><tr><th>"+p+"</th><th>"+o+"</th><th>"+n+"</th><th>"+A.N(m,a1,a2)+"</th></tr>"
a5.a+=r}for(r=A.dA(s.d,0,w),p=J.ae(r.a),o=r.b,r=new A.bq(p,o,A.q(r).i("bq<1>")),n=s.b;r.q();){m=r.c
m=m>=0?new A.D(o+m,p.gD(p)):A.X(A.by())
l=m.b
if(m.a===0){m=A.N(n,f,e)
m=A.N(m,d,a0)
m=A.N(m,a1,a2)}else m=""
k=A.N(l.e,f,e)
k=A.N(k,d,a0)
k=A.N(k,a1,a2)
j=l.w
if(j==null)j=""
else{j=A.N(j,f,e)
j=A.N(j,d,a0)
j=" \xb7 "+A.N(j,a1,a2)}i=l.f
i=i===0?"":A.A(i)
h=l.r
h=h===0?"":A.A(h)
h="<tr><td>"+m+"</td><td>"+k+j+a3+i+a3+h+"</td></tr>"
a5.a+=h}a4.c=a4.c+s.gYs()
a4.b=a4.b+s.gYm()
v+=s.gYs()
u+=s.gYm()}x.$0()
a6="<p><b>"+B.aef("\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u062a\u0631\u0629")+": "+A.A(v)+" / "+A.A(u)+" "+$.v().w+"</b></p></body></html>"
a6=a5.a+=a6
return A.cKy(a6.charCodeAt(0)==0?a6:a6)},
cKa(d){return""+A.aq(d)+"/"+C.f.aw(C.h.j(A.ao(d)),2,"0")+"/"+C.f.aw(C.h.j(A.aI(d)),2,"0")},
d9_(){return new B.In(null)},
Q2:function Q2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6k:function b6k(){},
b6j:function b6j(){},
cxC:function cxC(d,e){this.a=d
this.b=e},
In:function In(d){this.a=d},
a8F:function a8F(){var _=this
_.w=$
_.x="\u0627\u0644\u064a\u0648\u0645"
_.z=_.y=null
_.Q=!1
_.d=$
_.c=_.a=null},
bPU:function bPU(d){this.a=d},
bPV:function bPV(d,e){this.a=d
this.b=e},
bPW:function bPW(d,e){this.a=d
this.b=e},
bPX:function bPX(d){this.a=d},
bPY:function bPY(d,e){this.a=d
this.b=e},
bPZ:function bPZ(d,e){this.a=d
this.b=e},
bQ_:function bQ_(d){this.a=d},
bQ2:function bQ2(){},
bQ3:function bQ3(){},
bQ4:function bQ4(d,e){this.a=d
this.b=e},
bQ5:function bQ5(d,e,f){this.a=d
this.b=e
this.c=f},
bQ0:function bQ0(){},
bQ1:function bQ1(){}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[24],B)
D=c[53]
E=c[54]
B.Q2.prototype={
gYs(){return C.e.cE(this.d,0,new B.b6k())},
gYm(){return C.e.cE(this.d,0,new B.b6j())}}
B.In.prototype={
X(){return new B.a8F()}}
B.a8F.prototype={
ga66(){var x=this.gH().p(0,$.cC(),y.S).$0(),w=A.aU(A.aq(x),A.ao(x),A.aI(x),0,0,0,0),v=w.dj(-864e8),u=y.T
return A.J(["\u0627\u0644\u064a\u0648\u0645",new A.fy(w,w,u),"\u0623\u0645\u0633",new A.fy(v,v,u),"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",new A.fy(A.aU(A.aq(x),A.ao(x),1,0,0,0,0),w,u),"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",new A.fy(A.aU(A.aq(x),A.ao(x)-1,1,0,0,0,0),A.aU(A.aq(x),A.ao(x),0,0,0,0,0),u)],y.N,u)},
aA(){var x,w=this
w.aV()
x=w.ga66().h(0,"\u0627\u0644\u064a\u0648\u0645")
x.toString
w.w=x
A.cFX(w.gb7d(),y.H)},
KI(){var x=0,w=A.k(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$KI=A.f(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.n(new B.bPU(s))
v=3
p=s.gH()
o=p.p(0,$.ex(),y.e)
p=p.p(0,$.ad(),y.Y).d
n=s.w
n===$&&A.b()
x=6
return A.c(o.aBN(p,n.a,n.b),$async$KI)
case 6:r=e
if(s.c!=null)s.n(new B.bPV(s,r))
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
p=A.V(l)
if(p instanceof A.az){q=p
if(s.c!=null)s.n(new B.bPW(s,q))}else throw l
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new B.bPX(s))
x=t.pop()
break
case 5:return A.i(null,w)
case 1:return A.h(u.at(-1),w)}})
return A.j($async$KI,w)},
KJ(d){return this.bcN(d)},
bcN(d){var x=0,w=A.k(y.H),v,u=this,t,s,r,q,p,o
var $async$KJ=A.f(function(e,f){if(e===1)return A.h(f,w)
for(;;)switch(x){case 0:x=d==="custom"?3:5
break
case 3:t=u.gH().p(0,$.cC(),y.S).$0()
s=u.c
s.toString
r=A.aU(2024,1,1,0,0,0,0)
q=A.aU(A.aq(t),A.ao(t),A.aI(t),0,0,0,0)
p=u.w
p===$&&A.b()
x=6
return A.c(A.yo(s,r,null,p,q,null),$async$KJ)
case 6:o=f
if(o==null||u.c==null){x=1
break}if(C.h.a5(o.b.dB(o.a).a,864e8)>366){u.c.Y(y.I).f.aY(C.lH)
x=1
break}u.n(new B.bPY(u,o))
x=4
break
case 5:u.n(new B.bPZ(u,d))
case 4:x=7
return A.c(u.KI(),$async$KJ)
case 7:case 1:return A.i(v,w)}})
return A.j($async$KJ,w)},
KK(){var x=0,w=A.k(y.H),v,u=this,t,s,r,q,p,o,n
var $async$KK=A.f(function(d,e){if(d===1)return A.h(e,w)
for(;;)switch(x){case 0:o=u.y
if(o==null){x=1
break}t=u.gH()
s=t.p(0,$.ad(),y.Y).e
r=u.w
r===$&&A.b()
q=B.dpV(o,r.a,s,r.b)
p=t.p(0,$.f3(),y.L)
n=p.gl7(p)
if(n){x=3
break}else e=n
x=4
break
case 3:x=5
return A.c(p.kh(q),$async$KK)
case 5:case 4:if(e){x=1
break}x=6
return A.c(A.tr(C.dR,"\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",new B.bQ_(q)),$async$KK)
case 6:case 1:return A.i(v,w)}})
return A.j($async$KK,w)},
I(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d={},a0=f.y,a1=a0==null,a2=a1?e:C.e.cE(a0,0,new B.bQ2())
if(a2==null)a2=0
x=a1?e:C.e.cE(a0,0,new B.bQ3())
if(x==null)x=0
d.a=null
a1=!a1
w=y.p
v=A.a([A.cy(e,e,e,C.iX,e,D.cJg,!a1||a0.length===0?e:f.gb7e(),e,e,e,"\u0637\u0628\u0627\u0639\u0629 / \u062d\u0641\u0638 PDF",e)],w)
u=A.av(a3,C.az,y.w).w
u=u.a.a>=1100?760:620
t=A.a([],w)
s=f.ga66()
s=A.W(new A.bE(s,A.q(s).i("bE<1>")),y.N)
s.push("custom")
r=s.length
q=y.O
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
t.push(A.eX(e,e,new A.e("journal-"+o,q),A.l(o==="custom"?"\u0641\u062a\u0631\u0629 \u0623\u062e\u0631\u0649":o,e,e,e,e,e,e,e),e,new B.bQ4(f,o),f.x===o,e,e,e,e,e))}t=A.dp(C.b3,t,6,6)
s=f.w
s===$&&A.b()
s=A.a([t,C.aE,A.l("\u0645\u0646 "+A.eU(s.a)+" \u0625\u0644\u0649 "+A.eU(f.w.b),e,e,e,e,C.ad,e,e),C.M],w)
if(f.Q)s.push(C.qn)
t=f.z
if(t!=null)s.push(A.l(t,e,e,e,e,C.cV,e,e))
if(a1&&!f.Q){a1=A.a([new A.ck(A.l(""+a0.length+" \u0642\u064a\u062f \xb7 \u0645\u062f\u064a\u0646 "+A.A(a2)+" \xb7 \u062f\u0627\u0626\u0646 "+A.A(x)+" "+$.v().w,e,e,e,e,C.ke,e,e),C.av,e,D.cKb)],w)
if(a0.length===0)a1.push(D.bVy)
for(t=a0.length,p=0;p<a0.length;a0.length===t||(0,A.y)(a0),++p){n=a0[p]
r=A.a([],w)
q=d.a
if(q==null||!A.YB(q,n.a))C.e.v(r,A.a([new A.fX(new B.bQ5(d,n,a0),e)],w))
q=A.a([A.l(n.b,e,e,e,e,C.aj,e,e)],w)
m=n.c
if((m==null?"":m).length!==0){m.toString
q.push(A.l(m,e,e,e,e,C.yo,e,e))}for(m=n.d,l=m.length,k=0;k<m.length;m.length===l||(0,A.y)(m),++k){j=m[k]
i=j.w
i=i==null?"":" \xb7 "+i
i=A.l(j.e+i,e,e,e,e,C.is,e,e)
h=j.f
h=A.l(h===0?"":A.A(h),e,e,e,e,C.is,C.fh,e)
g=j.r
q.push(A.af(A.a([new A.bL(1,C.ai,i,e),new A.b0(90,e,h,e),new A.b0(90,e,A.l(g===0?"":A.A(g),e,e,e,e,C.aC,C.fh,e),e)],w),C.u,e,C.p,C.r,0,e))}r.push(new A.Q(C.fq,new A.ck(A.U(q,C.N,e,C.p,C.r,0,C.t),C.fS,e,e),e))
C.e.v(a1,r)}C.e.v(s,a1)}return A.c5(new A.dq("\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",C.fl,C.aq,v,e),e,A.bd(!0,new A.cu(C.bQ,e,e,new A.bu(new A.at(0,u,0,1/0),A.bU(s,e,e,E.f5,e,C.U,!1),e),e),!0,C.L,!0,!0),e,e)}}
var z=a.updateTypes(["o(o,Q2)","z<~>()"])
B.b6k.prototype={
$2(d,e){return d+e.f},
$S:484}
B.b6j.prototype={
$2(d,e){return d+e.r},
$S:484}
B.cxC.prototype={
$0(){var x,w='</td><td class="n">',v=this.a,u=v.a
if(u==null)return
x=this.b
v='<tr class="day"><td colspan="2">'+B.aef("\u0645\u062c\u0645\u0648\u0639 "+B.cKa(u))+w+A.A(v.c)+w+A.A(v.b)+"</td></tr></table>"
x.a+=v},
$S:0}
B.bPU.prototype={
$0(){var x=this.a
x.Q=!0
x.z=null},
$S:0}
B.bPV.prototype={
$0(){return this.a.y=B.dp3(this.b)},
$S:0}
B.bPW.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.bPX.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bPY.prototype={
$0(){var x=this.a
x.x="custom"
x.w=this.b},
$S:0}
B.bPZ.prototype={
$0(){var x=this.a,w=this.b
x.x=w
w=x.ga66().h(0,w)
w.toString
x.w=w},
$S:0}
B.bQ_.prototype={
$1(d){return $.af6().yj(this.a,null,d)},
$S:54}
B.bQ2.prototype={
$2(d,e){return d+e.gYs()},
$S:z+0}
B.bQ3.prototype={
$2(d,e){return d+e.gYm()},
$S:z+0}
B.bQ4.prototype={
$1(d){return this.a.KJ(this.b)},
$S:4}
B.bQ5.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.a=this.b.a,r=A.a([],y.b)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.y)(x),++v){u=x[v]
if(A.YB(u.a,s))r.push(u)}return new A.Q(D.ats,A.l(A.eU(s)+" \xb7 \u0645\u062f\u064a\u0646 "+A.A(C.e.cE(r,0,new B.bQ0()))+" \xb7 \u062f\u0627\u0626\u0646 "+A.A(C.e.cE(r,0,new B.bQ1())),t,t,t,t,D.cgP,t,t),t)},
$S:288}
B.bQ0.prototype={
$2(d,e){return d+e.gYs()},
$S:z+0}
B.bQ1.prototype={
$2(d,e){return d+e.gYm()},
$S:z+0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.a8F.prototype,"gb7d","KI",1)
x(w,"gb7e","KK",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Q2,A.R)
w(A.j3,[B.b6k,B.b6j,B.bQ2,B.bQ3,B.bQ0,B.bQ1])
w(A.i2,[B.cxC,B.bPU,B.bPV,B.bPW,B.bPX,B.bPY,B.bPZ])
x(B.In,A.j5)
x(B.a8F,A.iO)
w(A.h1,[B.bQ_,B.bQ4,B.bQ5])})()
A.i_(b.typeUniverse,JSON.parse('{"In":{"T":[],"n":[]},"a8F":{"a3":["In"]}}'))
var y=(function rtii(){var x=A.a6
return{T:x("fy<bc>"),S:x("bc()"),e:x("x3"),b:x("x<Q2>"),U:x("x<va>"),p:x("x<n>"),q:x("va"),w:x("hv"),N:x("d"),O:x("e<d>"),L:x("pO"),I:x("kE"),Y:x("dX?"),H:x("~")}})();(function constants(){D.ats=new A.ar(0,12,0,4)
D.csx=new A.F("\u0644\u0627 \u0642\u064a\u0648\u062f \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629.",null,C.ad,null,C.ax,null,null,null,null,null,null,null,null,null,null,null,null)
D.bVy=new A.Q(C.aN,D.csx,null)
D.cgP=new A.K(!0,C.A,null,null,null,null,null,C.ca,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cJg=new A.e("journal-print",y.O)
D.cKb=new A.e("journal-total",y.O)})()};
(a=>{a["Ds9WvrhYAsJFxI0ateGUYaYANuo="]=a.current})($__dart_deferred_initializers__);