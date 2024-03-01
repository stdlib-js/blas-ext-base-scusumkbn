// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";function n(r,n,s,i,a,d){var o,m,f,l,p,u,j;if(r<=0)return a;for(o=i<0?(1-r)*i:0,m=d<0?(1-r)*d:0,f=n,u=0,j=0;j<r;j++)l=s[o],p=e(f+l),u=t(f)>=t(l)?e(u+e(e(f-p)+l)):e(u+e(e(l-p)+f)),f=p,a[m]=e(f+u),o+=i,m+=d;return a}function s(r,n,s,i,a,d,o,m){var f,l,p,u,j,b,v;if(r<=0)return d;for(f=a,l=m,p=n,b=0,v=0;v<r;v++)u=s[f],j=e(p+u),b=t(p)>=t(u)?e(b+e(e(p-j)+u)):e(b+e(e(u-j)+p)),p=j,d[l]=e(p+b),f+=i,l+=o;return d}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
