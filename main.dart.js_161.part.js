((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dAL(d){var x,w,v,u,t,s=A.a([],y.b)
for(x=J.a8(d),w=y.U,v=null;x.q();){u=x.gD(x)
t=u.c
if(t==null)t=u.a.fl()+"|"+u.b+"|"+A.p(u.x)
if(t!==v||s.length===0){s.push(new B.Re(u.a,u.b,u.x,A.a([],w)))
v=t}C.e.gap(s).d.push(u)}return s},
afZ(d){var x=A.K(d,"&","&amp;")
x=A.K(x,"<","&lt;")
return A.K(x,">","&gt;")},
dBC(a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",f="&",e="&amp;",d="<",a0="&lt;",a1=">",a2="&gt;",a3='</td><td class="n">',a4={},a5=new A.dV(""),a6='<html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>'+B.afZ(g)+"</title><style>body{font-family:sans-serif;font-size:12px;margin:16px}h1{font-size:18px;margin:0}table{width:100%;border-collapse:collapse;margin:6px 0 12px}td,th{border:1px solid #ccc;padding:4px 6px;text-align:right}th{background:#f3f3f3}.n{text-align:left;direction:ltr}.day{background:#e9f5ee;font-weight:bold}</style></head><body>"
a5.a=a6
a6+="<h1>"+B.afZ(g)+" \xb7 "+B.afZ(a9)+"</h1>"
a5.a=a6
a5.a=a6+("<div>"+B.afZ("\u0645\u0646 "+B.cUW(a8)+" \u0625\u0644\u0649 "+B.cUW(b0))+"</div>")
a4.a=null
a4.b=a4.c=0
x=new B.cGy(a4,a5)
for(a6=a7.length,w=y.q,v=0,u=0,t=0;t<a7.length;a7.length===a6||(0,A.z)(a7),++t){s=a7[t]
r=s.a
q=A.aN(A.ai(r),A.aj(r),A.aE(r),0,0,0,0)
r=a4.a
if(r!=null)r=!(q.a===r.a&&q.b===r.b&&q.c===r.c)
else r=!0
if(r){x.$0()
a4.a=q
a4.b=a4.c=0
r=C.f0[A.j8(q)-1]
p=C.dw[A.aj(q)-1]
r=A.K(r+"\u060c "+A.aE(q)+" "+p,f,e)
r=A.K(r,d,a0)
r=A.K(r,a1,a2)
p=A.K("\u0627\u0644\u0628\u064a\u0627\u0646",f,e)
p=A.K(p,d,a0)
p=A.K(p,a1,a2)
o=A.K("\u0627\u0644\u062d\u0633\u0627\u0628",f,e)
o=A.K(o,d,a0)
o=A.K(o,a1,a2)
n=A.K("\u0645\u062f\u064a\u0646",f,e)
n=A.K(n,d,a0)
n=A.K(n,a1,a2)
m=A.K("\u062f\u0627\u0626\u0646",f,e)
m=A.K(m,d,a0)
r='<table><tr><th colspan="4">'+r+" "+A.ai(q)+"</th></tr><tr><th>"+p+"</th><th>"+o+"</th><th>"+n+"</th><th>"+A.K(m,a1,a2)+"</th></tr>"
a5.a+=r}for(r=A.d1(s.d,0,w),p=J.a8(r.a),o=r.b,r=new A.b5(p,o,A.q(r).i("b5<1>")),n=s.b;r.q();){m=r.c
m=m>=0?new A.B(o+m,p.gD(p)):A.Y(A.bp())
l=m.b
if(m.a===0){m=A.K(n,f,e)
m=A.K(m,d,a0)
m=A.K(m,a1,a2)}else m=""
k=A.K(l.e,f,e)
k=A.K(k,d,a0)
k=A.K(k,a1,a2)
j=l.w
if(j==null)j=""
else{j=A.K(j,f,e)
j=A.K(j,d,a0)
j=" \xb7 "+A.K(j,a1,a2)}i=l.f
i=i===0?"":A.w(i)
h=l.r
h=h===0?"":A.w(h)
h="<tr><td>"+m+"</td><td>"+k+j+a3+i+a3+h+"</td></tr>"
a5.a+=h}a4.c=a4.c+s.gZX()
a4.b=a4.b+s.gZQ()
v+=s.gZX()
u+=s.gZQ()}x.$0()
a6="<p><b>"+B.afZ("\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u062a\u0631\u0629")+": "+A.w(v)+" / "+A.w(u)+" "+$.r().w+"</b></p></body></html>"
a6=a5.a+=a6
return A.cVm(a6.charCodeAt(0)==0?a6:a6)},
cUW(d){return""+A.ai(d)+"/"+C.f.am(C.h.j(A.aj(d)),2,"0")+"/"+C.f.am(C.h.j(A.aE(d)),2,"0")},
dkq(){return new B.Jp(null)},
Re:function Re(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9E:function b9E(){},
b9D:function b9D(){},
cGy:function cGy(d,e){this.a=d
this.b=e},
Jp:function Jp(d){this.a=d},
aad:function aad(){var _=this
_.w=$
_.x="\u0627\u0644\u064a\u0648\u0645"
_.z=_.y=null
_.Q=!1
_.d=$
_.c=_.a=null},
bVT:function bVT(d){this.a=d},
bVU:function bVU(d,e){this.a=d
this.b=e},
bVV:function bVV(d,e){this.a=d
this.b=e},
bVW:function bVW(d){this.a=d},
bVX:function bVX(d,e){this.a=d
this.b=e},
bVY:function bVY(d,e){this.a=d
this.b=e},
bVZ:function bVZ(d){this.a=d},
bW1:function bW1(){},
bW2:function bW2(){},
bW3:function bW3(d,e){this.a=d
this.b=e},
bW4:function bW4(d,e,f){this.a=d
this.b=e
this.c=f},
bW_:function bW_(){},
bW0:function bW0(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[25],B)
D=c[54]
B.Re.prototype={
gZX(){return C.e.bE(this.d,0,new B.b9E())},
gZQ(){return C.e.bE(this.d,0,new B.b9D())}}
B.Jp.prototype={
X(){return new B.aad()}}
B.aad.prototype={
ga7M(){var x=this.gF().l(0,$.ck(),y.S).$0(),w=A.aN(A.ai(x),A.aj(x),A.aE(x),0,0,0,0),v=w.d7(-864e8),u=y.T
return A.J(["\u0627\u0644\u064a\u0648\u0645",new A.fj(w,w,u),"\u0623\u0645\u0633",new A.fj(v,v,u),"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",new A.fj(A.aN(A.ai(x),A.aj(x),1,0,0,0,0),w,u),"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",new A.fj(A.aN(A.ai(x),A.aj(x)-1,1,0,0,0,0),A.aN(A.ai(x),A.aj(x),0,0,0,0,0),u)],y.N,u)},
aA(){var x,w=this
w.aV()
x=w.ga7M().h(0,"\u0627\u0644\u064a\u0648\u0645")
x.toString
w.w=x
A.cQx(w.gbaD(),y.H)},
LC(){var x=0,w=A.l(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$LC=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.n(new B.bVT(s))
v=3
p=s.gF()
o=p.l(0,$.d3(),y.e)
p=p.l(0,$.a3(),y.Y).d
n=s.w
n===$&&A.b()
x=6
return A.c(o.aE9(p,n.a,n.b),$async$LC)
case 6:r=e
if(s.c!=null)s.n(new B.bVU(s,r))
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
p=A.S(l)
if(p instanceof A.as){q=p
if(s.c!=null)s.n(new B.bVV(s,q))}else throw l
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new B.bVW(s))
x=t.pop()
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$LC,w)},
LD(d){return this.bgm(d)},
bgm(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o
var $async$LD=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=d==="custom"?3:5
break
case 3:t=u.gF().l(0,$.ck(),y.S).$0()
s=u.c
s.toString
r=A.aN(2024,1,1,0,0,0,0)
q=A.aN(A.ai(t),A.aj(t),A.aE(t),0,0,0,0)
p=u.w
p===$&&A.b()
x=6
return A.c(A.uU(s,r,null,p,q,null),$async$LD)
case 6:o=f
if(o==null||u.c==null){x=1
break}if(C.h.a8(o.b.dI(o.a).a,864e8)>366){u.c.V(y.I).f.aO(C.m0)
x=1
break}u.n(new B.bVX(u,o))
x=4
break
case 5:u.n(new B.bVY(u,d))
case 4:x=7
return A.c(u.LC(),$async$LD)
case 7:case 1:return A.j(v,w)}})
return A.k($async$LD,w)},
LE(){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$LE=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:o=u.y
if(o==null){x=1
break}t=u.gF()
s=t.l(0,$.a3(),y.Y).e
r=u.w
r===$&&A.b()
q=B.dBC(o,r.a,s,r.b)
p=t.l(0,$.eW(),y.L)
n=p.gkC(p)
if(n){x=3
break}else e=n
x=4
break
case 3:x=5
return A.c(p.jX(q),$async$LE)
case 5:case 4:if(e){x=1
break}x=6
return A.c(A.ry(C.dy,"\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",new B.bVZ(q)),$async$LE)
case 6:case 1:return A.j(v,w)}})
return A.k($async$LE,w)},
I(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d={},a0=f.y,a1=a0==null,a2=a1?e:C.e.bE(a0,0,new B.bW1())
if(a2==null)a2=0
x=a1?e:C.e.bE(a0,0,new B.bW2())
if(x==null)x=0
d.a=null
a1=!a1
w=y.p
v=A.a([A.cs(e,e,e,C.hD,e,D.cQg,!a1||a0.length===0?e:f.gbaE(),e,e,e,"\u0637\u0628\u0627\u0639\u0629 / \u062d\u0641\u0638 PDF",e)],w)
u=A.ay(a3,C.aA,y.w).w
u=u.a.a>=1100?760:620
t=A.a([],w)
s=f.ga7M()
s=A.W(new A.bX(s,A.q(s).i("bX<1>")),y.N)
s.push("custom")
r=s.length
q=y.O
p=0
for(;p<s.length;s.length===r||(0,A.z)(s),++p){o=s[p]
t.push(A.em(e,e,new A.e("journal-"+o,q),A.f(o==="custom"?"\u0641\u062a\u0631\u0629 \u0623\u062e\u0631\u0649":o,e,e,e,e,e,e,e),e,new B.bW3(f,o),f.x===o,e,e,e,e,e))}t=A.d0(C.aS,t,6,6)
s=f.w
s===$&&A.b()
s=A.a([t,C.ax,A.f("\u0645\u0646 "+A.f7(s.a)+" \u0625\u0644\u0649 "+A.f7(f.w.b),e,e,e,e,C.ab,e,e),C.E],w)
if(f.Q)s.push(C.lM)
t=f.z
if(t!=null)s.push(A.f(t,e,e,e,e,C.cU,e,e))
if(a1&&!f.Q){a1=A.a([new A.c5(A.f(""+a0.length+" \u0642\u064a\u062f \xb7 \u0645\u062f\u064a\u0646 "+A.w(a2)+" \xb7 \u062f\u0627\u0626\u0646 "+A.w(x)+" "+$.r().w,e,e,e,e,C.iF,e,e),C.ap,e,D.cRh)],w)
if(a0.length===0)a1.push(D.bYn)
for(t=a0.length,p=0;p<a0.length;a0.length===t||(0,A.z)(a0),++p){n=a0[p]
r=A.a([],w)
q=d.a
if(q==null||!A.qU(q,n.a))C.e.v(r,A.a([new A.fT(new B.bW4(d,n,a0),e)],w))
q=A.a([A.f(n.b,e,e,e,e,C.ag,e,e)],w)
m=n.c
if((m==null?"":m).length!==0){m.toString
q.push(A.f(m,e,e,e,e,C.rx,e,e))}for(m=n.d,l=m.length,k=0;k<m.length;m.length===l||(0,A.z)(m),++k){j=m[k]
i=j.w
i=i==null?"":" \xb7 "+i
i=A.f(j.e+i,e,e,e,e,C.f6,e,e)
h=j.f
h=A.f(h===0?"":A.w(h),e,e,e,e,C.f6,C.f4,e)
g=j.r
q.push(new A.cX(C.an,C.p,C.r,C.u,e,C.t,e,0,A.a([new A.bx(1,C.af,i,e),new A.b3(90,e,h,e),new A.b3(90,e,A.f(g===0?"":A.w(g),e,e,e,e,C.ay,C.f4,e),e)],w),e))}r.push(new A.N(C.eB,new A.c5(A.R(q,C.J,e,C.p,C.r,0,C.t),C.fi,e,e),e))
C.e.v(a1,r)}C.e.v(s,a1)}return A.c_(new A.dp("\u062f\u0641\u062a\u0631 \u0627\u0644\u064a\u0648\u0645\u064a\u0629",C.fw,C.ao,v,e),e,A.b6(!0,new A.cp(C.bS,e,e,new A.bq(new A.aq(0,u,0,1/0),A.bP(s,e,e,C.eC,e,C.S,!1),e),e),!0,C.G,!0,!0),e,e)}}
var z=a.updateTypes(["o(o,Re)","x<~>()"])
B.b9E.prototype={
$2(d,e){return d+e.f},
$S:509}
B.b9D.prototype={
$2(d,e){return d+e.r},
$S:509}
B.cGy.prototype={
$0(){var x,w='</td><td class="n">',v=this.a,u=v.a
if(u==null)return
x=this.b
v='<tr class="day"><td colspan="2">'+B.afZ("\u0645\u062c\u0645\u0648\u0639 "+B.cUW(u))+w+A.w(v.c)+w+A.w(v.b)+"</td></tr></table>"
x.a+=v},
$S:0}
B.bVT.prototype={
$0(){var x=this.a
x.Q=!0
x.z=null},
$S:0}
B.bVU.prototype={
$0(){return this.a.y=B.dAL(this.b)},
$S:0}
B.bVV.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.bVW.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bVX.prototype={
$0(){var x=this.a
x.x="custom"
x.w=this.b},
$S:0}
B.bVY.prototype={
$0(){var x=this.a,w=this.b
x.x=w
w=x.ga7M().h(0,w)
w.toString
x.w=w},
$S:0}
B.bVZ.prototype={
$1(d){return $.agT().yR(this.a,null,d)},
$S:50}
B.bW1.prototype={
$2(d,e){return d+e.gZX()},
$S:z+0}
B.bW2.prototype={
$2(d,e){return d+e.gZQ()},
$S:z+0}
B.bW3.prototype={
$1(d){return this.a.LD(this.b)},
$S:4}
B.bW4.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.a=this.b.a,r=A.a([],y.b)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.z)(x),++v){u=x[v]
if(A.qU(u.a,s))r.push(u)}return new A.N(D.avD,A.f(A.f7(s)+" \xb7 \u0645\u062f\u064a\u0646 "+A.w(C.e.bE(r,0,new B.bW_()))+" \xb7 \u062f\u0627\u0626\u0646 "+A.w(C.e.bE(r,0,new B.bW0())),t,t,t,t,D.ckr,t,t),t)},
$S:173}
B.bW_.prototype={
$2(d,e){return d+e.gZX()},
$S:z+0}
B.bW0.prototype={
$2(d,e){return d+e.gZQ()},
$S:z+0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.aad.prototype,"gbaD","LC",1)
x(w,"gbaE","LE",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Re,A.V)
w(A.j2,[B.b9E,B.b9D,B.bW1,B.bW2,B.bW_,B.bW0])
w(A.i1,[B.cGy,B.bVT,B.bVU,B.bVV,B.bVW,B.bVX,B.bVY])
x(B.Jp,A.iE)
x(B.aad,A.j3)
w(A.h5,[B.bVZ,B.bW3,B.bW4])})()
A.hZ(b.typeUniverse,JSON.parse('{"Jp":{"U":[],"m":[]},"aad":{"a7":["Jp"]}}'))
var y=(function rtii(){var x=A.a9
return{T:x("fj<b7>"),S:x("b7()"),e:x("xE"),b:x("y<Re>"),U:x("y<vJ>"),p:x("y<m>"),q:x("vJ"),w:x("hE"),N:x("d"),O:x("e<d>"),L:x("qc"),I:x("l2"),Y:x("e7?"),H:x("~")}})();(function constants(){D.avD=new A.ar(0,12,0,4)
D.cx6=new A.D("\u0644\u0627 \u0642\u064a\u0648\u062f \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629.",null,C.ab,null,C.az,null,null,null,null,null,null,null,null,null,null,null,null)
D.bYn=new A.N(C.aE,D.cx6,null)
D.ckr=new A.L(!0,C.z,null,null,null,null,null,C.bV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cQg=new A.e("journal-print",y.O)
D.cRh=new A.e("journal-total",y.O)})()};
(a=>{a["mGo9VlEKrDJTK9XYaStOqlk6yH0="]=a.current})($__dart_deferred_initializers__);