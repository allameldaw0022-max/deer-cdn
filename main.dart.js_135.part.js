((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
cXB(d,e,f){var y,x,w,v,u,t="rest.no."+e,s=d.ez(t)
if(s==null)s=""
y=""+A.as(f)+"-"+B.f.aN(B.h.j(A.ar(f)),2,"0")+"-"+B.f.aN(B.h.j(A.aI(f)),2,"0")
x=y+":"
if(B.f.ag(s,x)){w=A.eS(B.f.ba(s,y.length+1),null)
v=w==null?0:w}else v=0
u=v+1
d.a.be("insert into meta(key, value) values (?, ?) on conflict(key) do update set value = excluded.value",[t,x+u])
return u}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[31],C)
D=c[71]
var z=a.updateTypes([]);(function constants(){D.adX=new A.e("line-qty",A.a4("e<d>"))})()};
(a=>{a["aBASwwEoe5U+bvaqanBtdeRzZsw="]=a.current})($__dart_deferred_initializers__);