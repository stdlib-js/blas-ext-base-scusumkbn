"use strict";var b=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=b(function(I,d){
var a=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-abs/dist');function g(r,e,q,v,n,u,O,T){var c,f,i,t,o,s,m;if(r<=0)return u;for(c=n,f=T,i=e,s=0,m=0;m<r;m++)t=q[c],o=a(i+t),x(i)>=x(t)?s=a(s+a(a(i-o)+t)):s=a(s+a(a(t-o)+i)),i=o,u[f]=a(i+s),c+=v,f+=O;return u}d.exports=g
});var y=b(function(J,j){
var k=require('@stdlib/strided-base-stride2offset/dist'),h=l();function w(r,e,q,v,n,u){return h(r,e,q,v,k(r,v),n,u,k(r,u)),n}j.exports=w
});var E=b(function(K,_){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),A=l();z(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=E(),p,F=C(B(__dirname,"./native.js"));D(F)?p=G:p=F;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
