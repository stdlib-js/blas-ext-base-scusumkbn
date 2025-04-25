"use strict";var b=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var l=b(function(I,j){
var a=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-abs/dist');function g(e,i,q,n,c,s,p,T){var o,f,r,u,m,t,v;if(e<=0)return s;if(o=c,f=T,r=i,r===0)for(v=0;v<e&&(u=q[o],u===0);v++)r=a(r+u),s[f]=r,o+=n,f+=p;else v=0;for(t=0;v<e;v++)u=q[o],m=a(r+u),x(r)>=x(u)?t=a(t+a(a(r-m)+u)):t=a(t+a(a(u-m)+r)),r=m,s[f]=a(r+t),o+=n,f+=p;return s}j.exports=g
});var R=b(function(J,y){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=l();function w(e,i,q,n,c,s){return h(e,i,q,n,d(e,n),c,s,d(e,s)),c}y.exports=w
});var F=b(function(K,E){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),A=l();z(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=F(),k,O=C(B(__dirname,"./native.js"));D(O)?k=G:k=O;module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
