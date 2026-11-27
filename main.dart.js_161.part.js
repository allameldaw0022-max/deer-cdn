((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dA8(d){var x,w,v,u,t,s=A.a([],y.b)
for(x=J.a8(d),w=y.U,v=null;x.q();){u=x.gD(x)
t=u.c
if(t==null)t=u.a.fj()+"|"+u.b+"|"+A.p(u.x)
if(t!==v||s.length===0){s.push(new B.Re(u.a,u.b,u.x,A.a([],w)))
v=t}C.e.gap(s).d.push(u)}return s},
afY(d){var x=A.L(d,"&","&amp;")
x=A.L(x,"<","&lt;")
return A.L(x,">","&gt;")},
dB_(a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",f="&",e="&amp;",d="<",a0="&lt;",a1=">",a2="&gt;",a3='</td><td class="n">',a4={},a5=new A.dV(""),a6='<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>'+B.afY(g)+"</title><style>body{font-family:sans-serif;font-size:12px;margin:16px}h1{font-size:18px;margin:0}table{width:100%;border-collapse:collapse;margin:6px 0 12px}td,th{border:1px solid #ccc;padding:4px 6px;text-align:right}th{background:#f3f3f3}.n{text-align:left;direction:ltr}.day{background:#e9f5ee;font-weight:bold}</style></head><body>"
a5.a=a6
a6+="<h1>"+B.afY(g)+" \xb7 "+B.afY(a9)+"</h1>"
a5.a=a6
a5.a=a6+("<div>"+B.afY("\u0645\u0646 "+B.cUn(a8)+" \u0625\u0644\u0649 "+B.cUn(b0))+"</div>")
a4.a=null
a4.b=a4.c=0
x=new B.cG9(a4,a5)
for(a6=a7.length,w=y.q,v=0,u=0,t=0;t<a7.length;a7.length===a6||(0,A.z)(a7),++t){s=a7[t]
r=s.a
q=A.aO(A.ak(r),A.al(r),A.aE(r),0,0,0,0)
r=a4.a
if(r!=null)r=!(q.a===r.a&&q.b===r.b&&q.c===r.c)
else r=!0
if(r){x.$0()
a4.a=q
a4.b=a4.c=0
r=C.f0[A.j5(q)-1]
p=C.dw[A.al(q)-1]
r=A.L(r+"\u060c "+A.aE(q)+" "+p,f,e)
r=A.L(r,d,a0)
r=A.L(r,a1,a2)
p=A.L("\u0627\u0644\u0628\u064a\u0627\u0646",f,e)
p=A.L(p,d,a0)
p=A.L(p,a1,a2)
o=A.L("\u0627\u0644\u062d\u0633\u0627\u0628",f,e)
o=A.L(o,d,a0)
o=A.L(o,a1,a2)
n=A.L("\u0645\u062f\u064a\u0646",f,e)
n=A.L(n,d,a0)
n=A.L(n,a1,a2)
m=A.L("\u062f\u0627\u0626\u0646",f,e)
m=A.L(m,d,a0)
r='<table><tr><th colspan="4">'+r+" "+A.ak(q)+"</th></tr><tr><th>"+p+"</th><th>"+o+"</th><th>"+n+"</th><th>"+A.L(m,a1,a2)+"</th></tr>"
a5.a+=r}for(r=A.d1(s.d,0,w),p=J.a8(r.a),o=r.b,r=new A.b5(p,o,A.q(r).i("b5<1>")),n=s.b;r.q();){m=r.c
m=m>=0?new A.B(o+m,p.gD(p)):A.Y(A.bp())
l=m.b
if(m.a===0){m=A.L(n,f,e)
m=A.L(m,d,a0)
m=A.L(m,a1,a2)}else m=""
k=A.L(l.e,f,e)
k=A.L(k,d,a0)
k=A.L(k,a1,a2)
j=l.w
if(j==null)j=""
else{j=A.L(j,f,e)
j=A.L(j,d,a0)
j=" \xb7 "+A.L(j,a1,a2)}i=l.f
i=i===0?"":A.y(i)
h=l.r
h=h===0?"":A.y(h)
h="<tr><td>"+m+"</td><td>"+k+j+a3+i+a3+h+"</td></tr>"
a5.a+=h}a4.c=a4.c+s.gZS()
a4.b=a4.b+s.gZL()
v+=s.gZS()
u+=s.gZL()}x.$0()
a6="<p><b>"+B.afY("\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u062a\u0631\u0629")+": "+A.y(v)+" / "+A.y(u)+" "+$.r().w+"</b></p></body></html>"
a6=a5.a+=a6
return A.cUO(a6.charCodeAt(0)==0?a6:a6)},
cUn(d){return""+A.ak(d)+"/"+C.f.ao(C.h.j(A.al(d)),2,"0")+"/"+C.f.ao(C.h.j(A.aE(d)),2,"0")},
djN(){return new B.Jo(null)},
Re:function Re(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9C:function b9C(){},
b9B:function b9B(){},
cG9:function cG9(d,e){this.a=d
this.b=e},
Jo:function Jo(d){this.a=d},
aad:function aad(){var _=this
_.w=$
_.x="\u0627\u0644\u064a\u0648\u0645"
_.z=_.y=null
_.Q=!1
_.d=$
_.c=_.a=null},
bVP:function bVP(d){this.a=d},
bVQ:function bVQ(d,e){this.a=d
this.b=e},
bVR:function bVR(d,e){this.a=d
this.b=e},
bVS:function bVS(d){this.a=d},
bVT:function bVT(d,e){this.a=d
this.b=e},
bVU:function bVU(d,e){this.a=d
this.b=e},
bVV:function bVV(d){this.a=d},
bVY:function bVY(){},
bVZ:function bVZ(){},
bW_:function bW_(d,e){this.a=d
this.b=e},
bW0:function bW0(d,e,f){this.a=d
this.b=e
this.c=f},
bVW:function bVW(){},
bVX:function bVX(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[25],B)
D=c[54]
B.Re.prototype={
gZS(){return C.e.c2(this.d,0,new B.b9C())},
gZL(){return C.e.c2(this.d,0,new B.b9B())}}
B.Jo.prototype={
X(){return new B.aad()}}
B.aad.prototype={
ga7G(){var x=this.gF().m(0,$.ck(),y.S).$0(),w=A.aO(A.ak(x),A.al(x),A.aE(x),0,0,0,0),v=w.d8(-864e8),u=y.T
return A.J(["\u0627\u0644\u064a\u0648\u0645",new A.ft(w,w,u),"\u0623\u0645\u0633",new A.ft(v,v,u),"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",new A.ft(A.aO(A.ak(x),A.al(x),1,0,0,0,0),w,u),"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",new A.ft(A.aO(A.ak(x),A.al(x)-1,1,0,0,0,0),A.aO(A.ak(x),A.al(x),0,0,0,0,0),u)],y.N,u)},
aA(){var x,w=this
w.aV()
x=w.ga7G().h(0,"\u0627\u0644\u064a\u0648\u0645")
x.toString
w.w=x
A.cPZ(w.gbaq(),y.H)},
Lz(){var x=0,w=A.l(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$Lz=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.p(new B.bVP(s))
v=3
p=s.gF()
o=p.m(0,$.d5(),y.e)
p=p.m(0,$.a3(),y.Y).d
n=s.w
n===$&&A.b()
x=6
return A.c(o.aE0(p,n.a,n.b),$async$Lz)
case 6:r=e
if(s.c!=null)s.p(new B.bVQ(s,r))
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
p=A.T(l)
if(p instanceof A.as){q=p
if(s.c!=null)s.p(new B.bVR(s,q))}else throw l
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.bVS(s))
x=t.pop()
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$Lz,w)},
LA(d){return this.bg8(d)},
bg8(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o
var $async$LA=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=d==="custom"?3:5
break
case 3:t=u.gF().m(0,$.ck(),y.S).$0()
s=u.c
s.toString
r=A.aO(2024,1,1,0,0,0,0)
q=A.aO(A.ak(t),A.al(t),A.aE(t),0,0,0,0)
p=u.w
p===$&&A.b()
x=6
return A.c(A.wT(s,r,null,p,q,null),$async$LA)
case 6:o=f
if(o==null||u.c==null){x=1
break}if(C.h.a8(o.b.dK(o.a).a,864e8)>366){u.c.V(y.I).f.aO(C.m0)
x=1
break}u.p(new B.bVT(u,o))
x=4
break
case 5:u.p(new B.bVU(u,d))
case 4:x=7
return A.c(u.Lz(),$async$LA)
case 7:case 1:return A.j(v,w)}})
return A.k($async$LA,w)},
LB(){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$LB=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:o=u.y
if(o==null){x=1
break}t=u.gF()
s=t.m(0,$.a3(),y.Y).e
r=u.w
r===$&&A.b()
q=B.dB_(o,r.a,s,r.b)
p=t.m(0,$.f_(),y.L)
n=p.gkV(p)
if(n){x=3
break}else e=n
x=4
break
case 3:x=5
return A.c(p.jW(q),$async$LB)
case 5:case 4:if(e){x=1
break}x=6
return A.c(A.rv(C.dI,"\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",new B.bVV(q)),$async$LB)
case 6:case 1:return A.j(v,w)}})
return A.k($async$LB,w)},
I(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d={},a0=f.y,a1=a0==null,a2=a1?e:C.e.c2(a0,0,new B.bVY())
if(a2==null)a2=0
x=a1?e:C.e.c2(a0,0,new B.bVZ())
if(x==null)x=0
d.a=null
a1=!a1
w=y.p
v=A.a([A.ct(e,e,e,C.hC,e,D.cPP,!a1||a0.length===0?e:f.gbar(),e,e,e,"\u0637\u0628\u0627\u0639\u0629 / \u062d\u0641\u0638 PDF",e)],w)
u=A.ay(a3,C.az,y.w).w
u=u.a.a>=1100?760:620
t=A.a([],w)
s=f.ga7G()
s=A.W(new A.bX(s,A.q(s).i("bX<1>")),y.N)
s.push("custom")
r=s.length
q=y.O
p=0
for(;p<s.length;s.length===r||(0,A.z)(s),++p){o=s[p]
t.push(A.em(e,e,new A.e("journal-"+o,q),A.f(o==="custom"?"\u0641\u062a\u0631\u0629 \u0623\u062e\u0631\u0649":o,e,e,e,e,e,e,e),e,new B.bW_(f,o),f.x===o,e,e,e,e,e))}t=A.d0(C.aS,t,6,6)
s=f.w
s===$&&A.b()
s=A.a([t,C.aw,A.f("\u0645\u0646 "+A.f6(s.a)+" \u0625\u0644\u0649 "+A.f6(f.w.b),e,e,e,e,C.ab,e,e),C.F],w)
if(f.Q)s.push(C.lM)
t=f.z
if(t!=null)s.push(A.f(t,e,e,e,e,C.cU,e,e))
if(a1&&!f.Q){a1=A.a([new A.c5(A.f(""+a0.length+" \u0642\u064a\u062f \xb7 \u0645\u062f\u064a\u0646 "+A.y(a2)+" \xb7 \u062f\u0627\u0626\u0646 "+A.y(x)+" "+$.r().w,e,e,e,e,C.iE,e,e),C.ap,e,D.cQQ)],w)
if(a0.length===0)a1.push(D.bYe)
for(t=a0.length,p=0;p<a0.length;a0.length===t||(0,A.z)(a0),++p){n=a0[p]
r=A.a([],w)
q=d.a
if(q==null||!A.qR(q,n.a))C.e.v(r,A.a([new A.fS(new B.bW0(d,n,a0),e)],w))
q=A.a([A.f(n.b,e,e,e,e,C.ag,e,e)],w)
m=n.c
if((m==null?"":m).length!==0){m.toString
q.push(A.f(m,e,e,e,e,C.rw,e,e))}for(m=n.d,l=m.length,k=0;k<m.length;m.length===l||(0,A.z)(m),++k){j=m[k]
i=j.w
i=i==null?"":" \xb7 "+i
i=A.f(j.e+i,e,e,e,e,C.fq,e,e)
h=j.f
h=A.f(h===0?"":A.y(h),e,e,e,e,C.fq,C.f4,e)
g=j.r
q.push(new A.cX(C.an,C.p,C.r,C.u,e,C.t,e,0,A.a([new A.bx(1,C.af,i,e),new A.b3(90,e,h,e),new A.b3(90,e,A.f(g===0?"":A.y(g),e,e,e,e,C.ay,C.f4,e),e)],w),e))}r.push(new A.N(C.eB,new A.c5(A.R(q,C.J,e,C.p,C.r,0,C.t),C.fh,e,e),e))
C.e.v(a1,r)}C.e.v(s,a1)}return A.c_(new A.dn("\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",C.fv,C.ao,v,e),e,A.b6(!0,new A.cp(C.bS,e,e,new A.bq(new A.ap(0,u,0,1/0),A.bP(s,e,e,C.eC,e,C.S,!1),e),e),!0,C.G,!0,!0),e,e)}}
var z=a.updateTypes(["o(o,Re)","w<~>()"])
B.b9C.prototype={
$2(d,e){return d+e.f},
$S:323}
B.b9B.prototype={
$2(d,e){return d+e.r},
$S:323}
B.cG9.prototype={
$0(){var x,w='</td><td class="n">',v=this.a,u=v.a
if(u==null)return
x=this.b
v='<tr class="day"><td colspan="2">'+B.afY("\u0645\u062c\u0645\u0648\u0639 "+B.cUn(u))+w+A.y(v.c)+w+A.y(v.b)+"</td></tr></table>"
x.a+=v},
$S:0}
B.bVP.prototype={
$0(){var x=this.a
x.Q=!0
x.z=null},
$S:0}
B.bVQ.prototype={
$0(){return this.a.y=B.dA8(this.b)},
$S:0}
B.bVR.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.bVS.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bVT.prototype={
$0(){var x=this.a
x.x="custom"
x.w=this.b},
$S:0}
B.bVU.prototype={
$0(){var x=this.a,w=this.b
x.x=w
w=x.ga7G().h(0,w)
w.toString
x.w=w},
$S:0}
B.bVV.prototype={
$1(d){return $.agR().yN(this.a,null,d)},
$S:51}
B.bVY.prototype={
$2(d,e){return d+e.gZS()},
$S:z+0}
B.bVZ.prototype={
$2(d,e){return d+e.gZL()},
$S:z+0}
B.bW_.prototype={
$1(d){return this.a.LA(this.b)},
$S:4}
B.bW0.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.a=this.b.a,r=A.a([],y.b)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.z)(x),++v){u=x[v]
if(A.qR(u.a,s))r.push(u)}return new A.N(D.avA,A.f(A.f6(s)+" \xb7 \u0645\u062f\u064a\u0646 "+A.y(C.e.c2(r,0,new B.bVW()))+" \xb7 \u062f\u0627\u0626\u0646 "+A.y(C.e.c2(r,0,new B.bVX())),t,t,t,t,D.cke,t,t),t)},
$S:201}
B.bVW.prototype={
$2(d,e){return d+e.gZS()},
$S:z+0}
B.bVX.prototype={
$2(d,e){return d+e.gZL()},
$S:z+0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.aad.prototype,"gbaq","Lz",1)
x(w,"gbar","LB",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Re,A.V)
w(A.j_,[B.b9C,B.b9B,B.bVY,B.bVZ,B.bVW,B.bVX])
w(A.i_,[B.cG9,B.bVP,B.bVQ,B.bVR,B.bVS,B.bVT,B.bVU])
x(B.Jo,A.iE)
x(B.aad,A.j0)
w(A.h4,[B.bVV,B.bW_,B.bW0])})()
A.hX(b.typeUniverse,JSON.parse('{"Jo":{"U":[],"m":[]},"aad":{"a6":["Jo"]}}'))
var y=(function rtii(){var x=A.a9
return{T:x("ft<b7>"),S:x("b7()"),e:x("xD"),b:x("x<Re>"),U:x("x<vG>"),p:x("x<m>"),q:x("vG"),w:x("hD"),N:x("d"),O:x("e<d>"),L:x("q9"),I:x("l1"),Y:x("e5?"),H:x("~")}})();(function constants(){D.avA=new A.aq(0,12,0,4)
D.cwU=new A.D("\u0644\u0627 \u0642\u064a\u0648\u062f \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629.",null,C.ab,null,C.aB,null,null,null,null,null,null,null,null,null,null,null,null)
D.bYe=new A.N(C.aE,D.cwU,null)
D.cke=new A.K(!0,C.z,null,null,null,null,null,C.bV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cPP=new A.e("journal-print",y.O)
D.cQQ=new A.e("journal-total",y.O)})()};
(a=>{a["Zdfa3pFYd+uQOapSX1W0e6TS6kQ="]=a.current})($__dart_deferred_initializers__);