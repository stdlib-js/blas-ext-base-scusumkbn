"use strict";var b=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var k=b(function(J,j){
var i=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-abs/dist');function w(e,a,v,f,c,s,l,h){var o,q,r,u,m,n,t;if(e<=0)return s;if(o=c,q=h,r=a,r===0)for(t=0;t<e&&(u=v[o],u===0);t++)r=i(r+u),s[q]=r,o+=f,q+=l;else t=0;for(n=0;t<e;t++)u=v[o],m=i(r+u),x(r)>=x(u)?n=i(n+i(i(r-m)+u)):n=i(n+i(i(u-m)+r)),r=m,s[q]=i(r+n),o+=f,q+=l;return s}j.exports=w
});var R=b(function(K,y){
var d=require('@stdlib/strided-base-stride2offset/dist'),z=k();function A(e,a,v,f,c,s){return z(e,a,v,f,d(e,f),c,s,d(e,s)),c}y.exports=A
});var O=b(function(L,E){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),C=k();B(_,"ndarray",C);E.exports=_
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),p,g=F(D(__dirname,"./native.js"));G(g)?p=H:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
