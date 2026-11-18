((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
cYi(d,e,f){var y,x,w,v,u,t="rest.no."+e,s=d.eA(t)
if(s==null)s=""
y=""+A.ap(f)+"-"+B.f.aA(B.h.j(A.ao(f)),2,"0")+"-"+B.f.aA(B.h.j(A.aI(f)),2,"0")
x=y+":"
if(B.f.ag(s,x)){w=A.eR(B.f.ba(s,y.length+1),null)
v=w==null?0:w}else v=0
u=v+1
d.a.be("insert into meta(key, value) values (?, ?) on conflict(key) do update set value = excluded.value",[t,x+u])
return u}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[31],C)
D=c[69]
var z=a.updateTypes([]);(function constants(){D.ae0=new A.e("line-qty",A.a6("e<d>"))})()};
(a=>{a["aLBX5vA1aQwc1RzVgtAGxCuFJjw="]=a.current})($__dart_deferred_initializers__);