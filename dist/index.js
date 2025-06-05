"use strict";var b=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var k=b(function(J,j){
var a=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-abs/dist');function w(e,i,q,t,c,s,l,h){var f,o,r,u,m,v,n;if(e<=0)return s;if(f=c,o=h,r=i,r===0)for(n=0;n<e&&(u=q[f],u===0);n++)r=a(r+u),s[o]=r,f+=t,o+=l;else n=0;for(v=0;n<e;n++)u=q[f],m=a(r+u),x(r)>=x(u)?v=a(v+a(a(r-m)+u)):v=a(v+a(a(u-m)+r)),r=m,s[o]=a(r+v),f+=t,o+=l;return s}j.exports=w
});var R=b(function(K,y){
var d=require('@stdlib/strided-base-stride2offset/dist'),z=k();function A(e,i,q,t,c,s){return z(e,i,q,t,d(e,t),c,s,d(e,s)),c}y.exports=A
});var O=b(function(L,E){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),C=k();B(_,"ndarray",C);E.exports=_
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),p,g=F(D(__dirname,"./native.js"));G(g)?p=H:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
