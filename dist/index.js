"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=d(function(H,b){
var j=require('@stdlib/ndarray-base-vind2bind/dist'),F="throw";function x(r,e,a,u){var i,s,t,n,o,c,f,q,l,y,v;if(n=r.length,f=r.shape,i=r.data,q=r.strides,l=r.offset,s=r.order,o=r.accessors[0],c=r.ref,f.length===0)return a.call(u,e,o(i,l),0,c);for(t=e,v=0;v<n;v++)y=j(f,q,l,s,v,F),t=a.call(u,t,o(i,y),v,c);return t}b.exports=x
});var h=d(function(I,g){
function E(r,e,a,u){var i,s,t,n;for(i=r.data,s=r.accessors[0],t=e,n=0;n<i.length;n++)t=a.call(u,t,s(i,n),n,i);return t}g.exports=E
});var w=d(function(J,k){
var T=require('@stdlib/assert-is-array-like-object/dist'),L=require('@stdlib/assert-is-ndarray-like/dist'),O=require('@stdlib/assert-is-function/dist'),V=require('@stdlib/ndarray-base-ndarraylike2object/dist'),D=require('@stdlib/array-base-arraylike2object/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),M=m(),z=h();function B(r,e,a,u){if(!O(a))throw new TypeError(p('1XH3N',a));if(L(r))return M(V(r),e,a,u);if(T(r))return z(D(r),e,a,u);throw new TypeError(p('1XHBH',r))}k.exports=B
});var C=w();module.exports=C;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
