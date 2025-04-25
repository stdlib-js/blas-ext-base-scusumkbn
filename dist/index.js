"use strict";var b=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var l=b(function(I,j){
var a=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-abs/dist');function g(r,i,q,n,c,s,p,T){var o,f,e,u,m,t,v;if(r<=0)return s;if(o=c,f=T,e=i,e===0)for(v=0;v<r&&(u=q[o],u===0);v++)s[f]=a(e+u),o+=n,f+=p;else v=0;for(t=0;v<r;v++)u=q[o],m=a(e+u),x(e)>=x(u)?t=a(t+a(a(e-m)+u)):t=a(t+a(a(u-m)+e)),e=m,s[f]=a(e+t),o+=n,f+=p;return s}j.exports=g
});var R=b(function(J,y){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=l();function w(r,i,q,n,c,s){return h(r,i,q,n,d(r,n),c,s,d(r,s)),c}y.exports=w
});var F=b(function(K,E){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),A=l();z(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=F(),k,O=C(B(__dirname,"./native.js"));D(O)?k=G:k=O;module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
