"use strict";var p=function(i,v){return function(){return v||i((v={exports:{}}).exports,v),v.exports}};var F=p(function(I,y){
var t=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/math-base-special-abs/dist');function h(i,v,b,l,m,o){var f,c,a,u,r,e,s;if(i<=0)return m;for(l<0?f=(1-i)*l:f=0,o<0?c=(1-i)*o:c=0,a=v,e=0,s=0;s<i;s++)u=b[f],r=t(a+u),j(a)>=j(u)?e=t(e+t(t(a-r)+u)):e=t(e+t(t(u-r)+a)),a=r,m[c]=t(a+e),f+=l,c+=o;return m}y.exports=h
});var _=p(function(J,T){
var n=require('@stdlib/number-float64-base-to-float32/dist'),R=require('@stdlib/math-base-special-abs/dist');function w(i,v,b,l,m,o,f,c){var a,u,r,e,s,q,x;if(i<=0)return o;for(a=m,u=c,r=v,q=0,x=0;x<i;x++)e=b[a],s=n(r+e),R(r)>=R(e)?q=n(q+n(n(r-s)+e)):q=n(q+n(n(e-s)+r)),r=s,o[u]=n(r+q),a+=l,u+=f;return o}T.exports=w
});var d=p(function(K,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=F(),A=_();z(E,"ndarray",A);O.exports=E
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=d(),k,g=C(B(__dirname,"./native.js"));D(g)?k=G:k=g;module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
