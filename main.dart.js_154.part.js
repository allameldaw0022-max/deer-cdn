((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dnk(d){var x,w,v,u,t,s=A.a([],y.b)
for(x=J.ad(d),w=y.U,v=null;x.q();){u=x.gC(x)
t=u.c
if(t==null)t=u.a.fX()+"|"+u.b+"|"+A.p(u.x)
if(t!==v||s.length===0){s.push(new B.PS(u.a,u.b,u.x,A.a([],w)))
v=t}C.e.gao(s).d.push(u)}return s},
ae_(d){var x=A.O(d,"&","&amp;")
x=A.O(x,"<","&lt;")
return A.O(x,">","&gt;")},
dob(a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",f="&",e="&amp;",d="<",a0="&lt;",a1=">",a2="&gt;",a3='</td><td class="n">',a4={},a5=new A.dI(""),a6='<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>'+B.ae_(g)+"</title><style>body{font-family:sans-serif;font-size:12px;margin:16px}h1{font-size:18px;margin:0}table{width:100%;border-collapse:collapse;margin:6px 0 12px}td,th{border:1px solid #ccc;padding:4px 6px;text-align:right}th{background:#f3f3f3}.n{text-align:left;direction:ltr}.day{background:#e9f5ee;font-weight:bold}</style></head><body>"
a5.a=a6
a6+="<h1>"+B.ae_(g)+" \xb7 "+B.ae_(a9)+"</h1>"
a5.a=a6
a5.a=a6+("<div>"+B.ae_("\u0645\u0646 "+B.cIy(a8)+" \u0625\u0644\u0649 "+B.cIy(b0))+"</div>")
a4.a=null
a4.b=a4.c=0
x=new B.cwg(a4,a5)
for(a6=a7.length,w=y.q,v=0,u=0,t=0;t<a7.length;a7.length===a6||(0,A.y)(a7),++t){s=a7[t]
r=s.a
q=A.aX(A.as(r),A.ar(r),A.aI(r),0,0,0,0)
r=a4.a
if(r!=null)r=!(q.a===r.a&&q.b===r.b&&q.c===r.c)
else r=!0
if(r){x.$0()
a4.a=q
a4.b=a4.c=0
r=C.f6[A.j9(q)-1]
p=C.dC[A.ar(q)-1]
r=A.O(r+"\u060c "+A.aI(q)+" "+p,f,e)
r=A.O(r,d,a0)
r=A.O(r,a1,a2)
p=A.O("\u0627\u0644\u0628\u064a\u0627\u0646",f,e)
p=A.O(p,d,a0)
p=A.O(p,a1,a2)
o=A.O("\u0627\u0644\u062d\u0633\u0627\u0628",f,e)
o=A.O(o,d,a0)
o=A.O(o,a1,a2)
n=A.O("\u0645\u062f\u064a\u0646",f,e)
n=A.O(n,d,a0)
n=A.O(n,a1,a2)
m=A.O("\u062f\u0627\u0626\u0646",f,e)
m=A.O(m,d,a0)
r='<table><tr><th colspan="4">'+r+" "+A.as(q)+"</th></tr><tr><th>"+p+"</th><th>"+o+"</th><th>"+n+"</th><th>"+A.O(m,a1,a2)+"</th></tr>"
a5.a+=r}for(r=A.dQ(s.d,0,w),p=J.ad(r.a),o=r.b,r=new A.bv(p,o,A.q(r).i("bv<1>")),n=s.b;r.q();){m=r.c
m=m>=0?new A.D(o+m,p.gC(p)):A.W(A.bB())
l=m.b
if(m.a===0){m=A.O(n,f,e)
m=A.O(m,d,a0)
m=A.O(m,a1,a2)}else m=""
k=A.O(l.e,f,e)
k=A.O(k,d,a0)
k=A.O(k,a1,a2)
j=l.w
if(j==null)j=""
else{j=A.O(j,f,e)
j=A.O(j,d,a0)
j=" \xb7 "+A.O(j,a1,a2)}i=l.f
i=i===0?"":A.C(i)
h=l.r
h=h===0?"":A.C(h)
h="<tr><td>"+m+"</td><td>"+k+j+a3+i+a3+h+"</td></tr>"
a5.a+=h}a4.c=a4.c+s.gY9()
a4.b=a4.b+s.gY3()
v+=s.gY9()
u+=s.gY3()}x.$0()
a6="<p><b>"+B.ae_("\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u062a\u0631\u0629")+": "+A.C(v)+" / "+A.C(u)+" "+$.w().w+"</b></p></body></html>"
a6=a5.a+=a6
return A.cIT(a6.charCodeAt(0)==0?a6:a6)},
cIy(d){return""+A.as(d)+"/"+C.f.aN(C.h.j(A.ar(d)),2,"0")+"/"+C.f.aN(C.h.j(A.aI(d)),2,"0")},
d7j(){return new B.Da(null)},
PS:function PS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5T:function b5T(){},
b5S:function b5S(){},
cwg:function cwg(d,e){this.a=d
this.b=e},
Da:function Da(d){this.a=d},
a8r:function a8r(){var _=this
_.w=$
_.x="\u0627\u0644\u064a\u0648\u0645"
_.z=_.y=null
_.Q=!1
_.d=$
_.c=_.a=null},
bPa:function bPa(d){this.a=d},
bPb:function bPb(d,e){this.a=d
this.b=e},
bPc:function bPc(d,e){this.a=d
this.b=e},
bPd:function bPd(d){this.a=d},
bPe:function bPe(d,e){this.a=d
this.b=e},
bPf:function bPf(d,e){this.a=d
this.b=e},
bPg:function bPg(d){this.a=d},
bPj:function bPj(){},
bPk:function bPk(){},
bPl:function bPl(d,e){this.a=d
this.b=e},
bPm:function bPm(d,e,f){this.a=d
this.b=e
this.c=f},
bPh:function bPh(){},
bPi:function bPi(){}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[54]
B=a.updateHolder(c[24],B)
D=c[55]
F=c[56]
G=c[47]
B.PS.prototype={
gY9(){return C.e.cE(this.d,0,new B.b5T())},
gY3(){return C.e.cE(this.d,0,new B.b5S())}}
B.Da.prototype={
X(){return new B.a8r()}}
B.a8r.prototype={
ga5N(){var x=this.gI().t(0,$.cL(),y.S).$0(),w=A.aX(A.as(x),A.ar(x),A.aI(x),0,0,0,0),v=w.dz(-864e8),u=y.T
return A.L(["\u0627\u0644\u064a\u0648\u0645",new A.h1(w,w,u),"\u0623\u0645\u0633",new A.h1(v,v,u),"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",new A.h1(A.aX(A.as(x),A.ar(x),1,0,0,0,0),w,u),"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",new A.h1(A.aX(A.as(x),A.ar(x)-1,1,0,0,0,0),A.aX(A.as(x),A.ar(x),0,0,0,0,0),u)],y.N,u)},
aD(){var x,w=this
w.aV()
x=w.ga5N().h(0,"\u0627\u0644\u064a\u0648\u0645")
x.toString
w.w=x
A.cEm(w.gb6K(),y.H)},
Ky(){var x=0,w=A.k(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$Ky=A.f(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.n(new B.bPa(s))
v=3
p=s.gI()
o=p.t(0,$.ew(),y.e)
p=p.t(0,$.ae(),y.Y).d
n=s.w
n===$&&A.b()
x=6
return A.c(o.aBt(p,n.a,n.b),$async$Ky)
case 6:r=e
if(s.c!=null)s.n(new B.bPb(s,r))
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
p=A.U(l)
if(p instanceof A.az){q=p
if(s.c!=null)s.n(new B.bPc(s,q))}else throw l
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new B.bPd(s))
x=t.pop()
break
case 5:return A.i(null,w)
case 1:return A.h(u.at(-1),w)}})
return A.j($async$Ky,w)},
Kz(d){return this.bcg(d)},
bcg(d){var x=0,w=A.k(y.H),v,u=this,t,s,r,q,p,o
var $async$Kz=A.f(function(e,f){if(e===1)return A.h(f,w)
for(;;)switch(x){case 0:x=d==="custom"?3:5
break
case 3:t=u.gI().t(0,$.cL(),y.S).$0()
s=u.c
s.toString
r=A.aX(2024,1,1,0,0,0,0)
q=A.aX(A.as(t),A.ar(t),A.aI(t),0,0,0,0)
p=u.w
p===$&&A.b()
x=6
return A.c(G.BB(s,r,null,p,q,null),$async$Kz)
case 6:o=f
if(o==null||u.c==null){x=1
break}if(C.h.a6(o.b.dQ(o.a).a,864e8)>366){u.c.Y(y.I).f.aY(E.nS)
x=1
break}u.n(new B.bPe(u,o))
x=4
break
case 5:u.n(new B.bPf(u,d))
case 4:x=7
return A.c(u.Ky(),$async$Kz)
case 7:case 1:return A.i(v,w)}})
return A.j($async$Kz,w)},
KA(){var x=0,w=A.k(y.H),v,u=this,t,s,r,q,p,o,n
var $async$KA=A.f(function(d,e){if(d===1)return A.h(e,w)
for(;;)switch(x){case 0:o=u.y
if(o==null){x=1
break}t=u.gI()
s=t.t(0,$.ae(),y.Y).e
r=u.w
r===$&&A.b()
q=B.dob(o,r.a,s,r.b)
p=t.t(0,$.fb(),y.L)
n=p.glj(p)
if(n){x=3
break}else e=n
x=4
break
case 3:x=5
return A.c(p.kF(q),$async$KA)
case 5:case 4:if(e){x=1
break}x=6
return A.c(A.vp(C.ed,"\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",new B.bPg(q)),$async$KA)
case 6:case 1:return A.i(v,w)}})
return A.j($async$KA,w)},
H(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d={},a0=f.y,a1=a0==null,a2=a1?e:C.e.cE(a0,0,new B.bPj())
if(a2==null)a2=0
x=a1?e:C.e.cE(a0,0,new B.bPk())
if(x==null)x=0
d.a=null
a1=!a1
w=y.p
v=A.a([A.cC(e,e,e,C.iT,e,D.cIL,!a1||a0.length===0?e:f.gb6L(),e,e,e,"\u0637\u0628\u0627\u0639\u0629 / \u062d\u0641\u0638 PDF",e)],w)
u=A.av(a3,C.aA,y.w).w
u=u.a.a>=1100?760:620
t=A.a([],w)
s=f.ga5N()
s=A.V(new A.bE(s,A.q(s).i("bE<1>")),y.N)
s.push("custom")
r=s.length
q=y.O
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
t.push(A.f6(e,e,new A.e("journal-"+o,q),A.l(o==="custom"?"\u0641\u062a\u0631\u0629 \u0623\u062e\u0631\u0649":o,e,e,e,e,e,e,e),e,new B.bPl(f,o),f.x===o,e,e,e,e,e))}t=A.ds(C.b2,t,6,6)
s=f.w
s===$&&A.b()
s=A.a([t,C.aF,A.l("\u0645\u0646 "+A.eU(s.a)+" \u0625\u0644\u0649 "+A.eU(f.w.b),e,e,e,e,C.ae,e,e),C.N],w)
if(f.Q)s.push(C.qj)
t=f.z
if(t!=null)s.push(A.l(t,e,e,e,e,C.cV,e,e))
if(a1&&!f.Q){a1=A.a([new A.cr(A.l(""+a0.length+" \u0642\u064a\u062f \xb7 \u0645\u062f\u064a\u0646 "+A.C(a2)+" \xb7 \u062f\u0627\u0626\u0646 "+A.C(x)+" "+$.w().w,e,e,e,e,C.lK,e,e),C.aB,e,D.cJE)],w)
if(a0.length===0)a1.push(D.bVE)
for(t=a0.length,p=0;p<a0.length;a0.length===t||(0,A.y)(a0),++p){n=a0[p]
r=A.a([],w)
q=d.a
if(q==null||!A.Yq(q,n.a))C.e.A(r,A.a([new A.fT(new B.bPm(d,n,a0),e)],w))
q=A.a([A.l(n.b,e,e,e,e,C.ai,e,e)],w)
m=n.c
if((m==null?"":m).length!==0){m.toString
q.push(A.l(m,e,e,e,e,C.yj,e,e))}for(m=n.d,l=m.length,k=0;k<m.length;m.length===l||(0,A.y)(m),++k){j=m[k]
i=j.w
i=i==null?"":" \xb7 "+i
i=A.l(j.e+i,e,e,e,e,C.ir,e,e)
h=j.f
h=A.l(h===0?"":A.C(h),e,e,e,e,C.ir,C.fg,e)
g=j.r
q.push(A.af(A.a([new A.bO(1,C.ak,i,e),new A.b0(90,e,h,e),new A.b0(90,e,A.l(g===0?"":A.C(g),e,e,e,e,C.az,C.fg,e),e)],w),C.u,e,C.p,C.r,0,e))}r.push(new A.P(C.fq,new A.cr(A.S(q,C.M,e,C.p,C.r,0,C.t),C.hp,e,e),e))
C.e.A(a1,r)}C.e.A(s,a1)}return A.c7(new A.dv("\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",C.fk,C.as,v,e),e,A.bg(!0,new A.ct(C.bQ,e,e,new A.bu(new A.at(0,u,0,1/0),A.bY(s,e,e,F.f4,e,C.V,!1),e),e),!0,C.L,!0,!0),e,e)}}
var z=a.updateTypes(["o(o,PS)","z<~>()"])
B.b5T.prototype={
$2(d,e){return d+e.f},
$S:469}
B.b5S.prototype={
$2(d,e){return d+e.r},
$S:469}
B.cwg.prototype={
$0(){var x,w='</td><td class="n">',v=this.a,u=v.a
if(u==null)return
x=this.b
v='<tr class="day"><td colspan="2">'+B.ae_("\u0645\u062c\u0645\u0648\u0639 "+B.cIy(u))+w+A.C(v.c)+w+A.C(v.b)+"</td></tr></table>"
x.a+=v},
$S:0}
B.bPa.prototype={
$0(){var x=this.a
x.Q=!0
x.z=null},
$S:0}
B.bPb.prototype={
$0(){return this.a.y=B.dnk(this.b)},
$S:0}
B.bPc.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.bPd.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bPe.prototype={
$0(){var x=this.a
x.x="custom"
x.w=this.b},
$S:0}
B.bPf.prototype={
$0(){var x=this.a,w=this.b
x.x=w
w=x.ga5N().h(0,w)
w.toString
x.w=w},
$S:0}
B.bPg.prototype={
$1(d){return $.aeS().yg(this.a,null,d)},
$S:57}
B.bPj.prototype={
$2(d,e){return d+e.gY9()},
$S:z+0}
B.bPk.prototype={
$2(d,e){return d+e.gY3()},
$S:z+0}
B.bPl.prototype={
$1(d){return this.a.Kz(this.b)},
$S:4}
B.bPm.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.a=this.b.a,r=A.a([],y.b)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.y)(x),++v){u=x[v]
if(A.Yq(u.a,s))r.push(u)}return new A.P(D.at8,A.l(A.eU(s)+" \xb7 \u0645\u062f\u064a\u0646 "+A.C(C.e.cE(r,0,new B.bPh()))+" \xb7 \u062f\u0627\u0626\u0646 "+A.C(C.e.cE(r,0,new B.bPi())),t,t,t,t,D.cgV,t,t),t)},
$S:202}
B.bPh.prototype={
$2(d,e){return d+e.gY9()},
$S:z+0}
B.bPi.prototype={
$2(d,e){return d+e.gY3()},
$S:z+0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.a8r.prototype,"gb6K","Ky",1)
x(w,"gb6L","KA",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.PS,A.Q)
w(A.iK,[B.b5T,B.b5S,B.bPj,B.bPk,B.bPh,B.bPi])
w(A.hO,[B.cwg,B.bPa,B.bPb,B.bPc,B.bPd,B.bPe,B.bPf])
x(B.Da,A.j3)
x(B.a8r,A.iL)
w(A.fU,[B.bPg,B.bPl,B.bPm])})()
A.hw(b.typeUniverse,JSON.parse('{"Da":{"R":[],"n":[]},"a8r":{"a3":["Da"]}}'))
var y=(function rtii(){var x=A.a4
return{T:x("h1<ba>"),S:x("ba()"),e:x("wV"),b:x("x<PS>"),U:x("x<v3>"),p:x("x<n>"),q:x("v3"),w:x("hn"),N:x("d"),O:x("e<d>"),L:x("pO"),I:x("kC"),Y:x("dU?"),H:x("~")}})();(function constants(){D.at8=new A.ao(0,12,0,4)
D.csp=new A.G("\u0644\u0627 \u0642\u064a\u0648\u062f \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629.",null,C.ae,null,C.aG,null,null,null,null,null,null,null,null,null,null,null,null)
D.bVE=new A.P(C.aO,D.csp,null)
D.cgV=new A.J(!0,C.A,null,null,null,null,null,C.c9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cIL=new A.e("journal-print",y.O)
D.cJE=new A.e("journal-total",y.O)})()};
(a=>{a["g7k97YV80Q+qglrywYAnh4pED9s="]=a.current})($__dart_deferred_initializers__);