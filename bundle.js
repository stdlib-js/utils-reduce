// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).reduce=e()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var e=Math.floor,r=e;var n=function(t){return r(t)===t},i=n;var o=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&i(t.length)&&t.length>=0&&t.length<=4294967295},a="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return a({},"x",{}),!0}catch(t){return!1}},f=Object.defineProperty,s=Object.prototype,c=s.toString,l=s.__defineGetter__,h=s.__defineSetter__,p=s.__lookupGetter__,g=s.__lookupSetter__;var v=function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===c.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===c.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((i="value"in r)&&(p.call(t,e)||g.call(t,e)?(n=t.__proto__,t.__proto__=s,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&l&&l.call(t,e,r.get),a&&h&&h.call(t,e,r.set),t},d=f,y=v,m=u()?d:y,_=m;var b=function(t,e,r){_(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},w=b;var O=function(t){return"boolean"==typeof t};var E=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return E&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,I=A;var P=function(t){return I.call(t)},T=Object.prototype.hasOwnProperty;var x=function(t,e){return null!=t&&T.call(t,e)},U="function"==typeof Symbol?Symbol.toStringTag:"",S=x,N=U,V=A;var R=P,B=function(t){var e,r,n;if(null==t)return V.call(t);r=t[N],e=S(t,N);try{t[N]=void 0}catch(e){return V.call(t)}return n=V.call(t),e?t[N]=r:delete t[N],n},F=j()?B:R,L=Boolean.prototype.toString;var M=F,C=function(t){try{return L.call(t),!0}catch(t){return!1}},k=j();var G=function(t){return"object"==typeof t&&(t instanceof Boolean||(k?C(t):"[object Boolean]"===M(t)))},D=O,Y=G;var $=w,J=function(t){return D(t)||Y(t)},W=G;$(J,"isPrimitive",O),$(J,"isObject",W);var X=J;var Z=function(){return new Function("return this;")()},z="object"==typeof self?self:null,H="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},K="object"==typeof q?q:null;module.exports=K;var Q=X.isPrimitive,tt=Z,et=z,rt=H,nt=t(Object.freeze({__proto__:null}));var it=function(t){if(arguments.length){if(!Q(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return tt()}if(et)return et;if(rt)return rt;if(nt)return nt;throw new Error("unexpected error. Unable to resolve global object.")},ot=it,at=ot();var ut=function(){return"function"==typeof at.BigInt&&"function"==typeof BigInt&&"bigint"==typeof at.BigInt("1")&&"bigint"==typeof BigInt("1")},ft=m;var st=function(t,e,r){ft(t,e,{configurable:!1,enumerable:!1,get:r})},ct=st,lt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var ht=function(t){return lt[t]||null};var pt=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0};var gt=function(t){return Math.abs(t)},vt=gt;var dt=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=vt(t[0]),a=1;a<r;a++){if(o=vt(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2};var yt=function(t,e){return e&&(2===t||3===t)};var mt=function(t,e){return e&&(1===t||3===t)};var _t=function(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]};w(_t,"assign",(function(t,e,r,n){var i,o,a,u,f;for(i=t.length,o=r,a=r,f=0;f<i;f++){if(0===t[f])return n[0]=r,n[1]=r,n;(u=e[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var bt=_t;var wt=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=bt(e,r,n))[1]-o[0]+1};var Ot=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var Et=function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]};var jt=function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this};var At=function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this};var It=function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]};var Pt=function(t){return t.re};var Tt=function(t){return t.im},xt=Pt,Ut=Tt;var St=function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(xt(r),Ut(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t};var Nt=function(t){return"string"==typeof t},Vt=String.prototype.valueOf;var Rt=F,Bt=function(t){try{return Vt.call(t),!0}catch(t){return!1}},Ft=j();var Lt=function(t){return"object"==typeof t&&(t instanceof String||(Ft?Bt(t):"[object String]"===Rt(t)))},Mt=Nt,Ct=Lt;var kt=w,Gt=function(t){return Mt(t)||Ct(t)},Dt=Lt;kt(Gt,"isPrimitive",Nt),kt(Gt,"isObject",Dt);var Yt=Gt,$t=Yt.isPrimitive,Jt=/[-\/\\^$*+?.()|[\]{}]/g;var Wt=function(t){var e,r;if(!$t(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Jt,"\\$&"):(e=(e=t.substring(1,r)).replace(Jt,"\\$&"),t=t[0]+e+t.substring(r))},Xt=/./,Zt=ot(),zt=Zt.document&&Zt.document.childNodes,Ht=Int8Array,qt=Xt,Kt=zt,Qt=Ht;var te=function(){return"function"==typeof qt||"object"==typeof Qt||"function"==typeof Kt};var ee=function(){return/^\s*function\s*([^(]*)/i},re=ee;w(re,"REGEXP",ee());var ne=re,ie=F;var oe=Array.isArray?Array.isArray:function(t){return"[object Array]"===ie(t)},ae=oe;var ue=function(t){return null!==t&&"object"==typeof t};w(ue,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!ae(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ue));var fe=ue,se=fe;var ce=F,le=ne.REGEXP,he=function(t){return se(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var pe=function(t){var e,r,n;if(("Object"===(r=ce(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=le.exec(n.toString()))return e[1]}return he(t)?"Buffer":r},ge=pe;var ve=pe;var de=function(t){var e;return null===t?"null":"object"===(e=typeof t)?ge(t).toLowerCase():e},ye=function(t){return ve(t).toLowerCase()},me=te()?ye:de,_e=me;var be=function(t){return"function"===_e(t)},we=RegExp.prototype.exec;var Oe=F,Ee=function(t){try{return we.call(t),!0}catch(t){return!1}},je=j();var Ae=Wt,Ie=be,Pe=Yt.isPrimitive,Te=function(t){return"object"==typeof t&&(t instanceof RegExp||(je?Ee(t):"[object RegExp]"===Oe(t)))};var xe=function(t,e,r){if(!Pe(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(Pe(e))e=Ae(e),e=new RegExp(e,"g");else if(!Te(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Pe(r)&&!Ie(r))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+r+"`.");return t.replace(e,r)},Ue=xe,Se=Pt,Ne=Tt,Ve={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Re=function(){var t,e,r,n,i,o,a;if(e=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(a=0;a<this._length;a++)o=this.iget(a),t+=Se(o)+", "+Ne(o),a<this._length-1&&(t+=", ");else for(a=0;a<this._length;a++)t+=this.iget(a),a<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(a=0;a<3;a++)o=this.iget(a),t+=Se(o)+", "+Ne(o),a<2&&(t+=", ");else for(a=0;a<3;a++)t+=this.iget(a),a<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(a=2;a>=0;a--)o=this.iget(this._length-1-a),t+=Se(o)+", "+Ne(o),a>0&&(t+=", ");else for(a=2;a>=0;a--)t+=this.iget(this._length-1-a),a>0&&(t+=", ")}if(r=Ve[this.dtype],n+=Ue(r,"{{data}}",t),n+=", ",n+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===e)n+="0";else for(a=0;a<e;a++)this._strides[a]<0?n+=-this._strides[a]:n+=this._strides[a],a<e-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},Be=F,Fe="function"==typeof Uint8Array;var Le="function"==typeof Uint8Array?Uint8Array:null,Me=function(t){return Fe&&t instanceof Uint8Array||"[object Uint8Array]"===Be(t)},Ce=Le;var ke=function(){var t,e;if("function"!=typeof Ce)return!1;try{e=new Ce(e=[1,3.14,-3.14,256,257]),t=Me(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t};var Ge="function"==typeof Uint8Array?Uint8Array:void 0,De=function(){throw new Error("not implemented")},Ye=ke()?Ge:De,$e=F,Je="function"==typeof Uint16Array;var We="function"==typeof Uint16Array?Uint16Array:null,Xe=function(t){return Je&&t instanceof Uint16Array||"[object Uint16Array]"===$e(t)},Ze=We;var ze=function(){var t,e;if("function"!=typeof Ze)return!1;try{e=new Ze(e=[1,3.14,-3.14,65536,65537]),t=Xe(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t};var He,qe="function"==typeof Uint16Array?Uint16Array:void 0,Ke=function(){throw new Error("not implemented")},Qe={uint16:ze()?qe:Ke,uint8:Ye};(He=new Qe.uint16(1))[0]=4660;var tr=52===new Qe.uint8(He.buffer)[0],er=F,rr="function"==typeof ArrayBuffer;var nr=function(t){return rr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===er(t)},ir=F,or="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null,ur=function(t){return or&&t instanceof Float64Array||"[object Float64Array]"===ir(t)},fr=ar;var sr=function(){var t,e;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),t=ur(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t};var cr,lr="function"==typeof Float64Array?Float64Array:void 0,hr=function(){throw new Error("not implemented")};cr=sr()?lr:hr;var pr="function"==typeof ArrayBuffer?ArrayBuffer:null,gr=nr,vr=cr,dr=pr;var yr=function(){var t,e,r;if("function"!=typeof dr)return!1;try{r=new dr(16),(t=gr(r)&&"function"==typeof dr.isView)&&((e=new vr(r))[0]=-3.14,e[1]=NaN,t=t&&dr.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t};var mr="function"==typeof ArrayBuffer?ArrayBuffer:void 0,_r=function(){throw new Error("not implemented")},br=yr()?mr:_r,wr=F,Or="function"==typeof DataView;var Er="function"==typeof DataView?DataView:null,jr=function(t){return Or&&t instanceof DataView||"[object DataView]"===wr(t)},Ar=br,Ir=Er;var Pr=function(){var t,e,r;if("function"!=typeof Ir)return!1;try{r=new Ar(24),e=new Ir(r,8),(t=jr(e)&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t};var Tr="function"==typeof DataView?DataView:void 0,xr=function(){throw new Error("not implemented")},Ur=Pr()?Tr:xr,Sr="function"==typeof BigInt?BigInt:void 0,Nr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Vr=function(){return Nr.slice()};var Rr=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Br=m;var Fr=function(t,e,r){Br(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})},Lr=Fr;var Mr=function(t){return Object.keys(Object(t))},Cr=Mr;var kr=function(){return function(){return 2!==(Cr(arguments)||"").length}(1,2)},Gr=void 0!==Object.keys,Dr=F;var Yr,$r=function(t){return"[object Arguments]"===Dr(t)},Jr=$r;Yr=function(){return Jr(arguments)}();var Wr=Yr;var Xr=function(t){return"number"==typeof t},Zr=Number,zr=Zr.prototype.toString;var Hr=F,qr=Zr,Kr=function(t){try{return zr.call(t),!0}catch(t){return!1}},Qr=j();var tn=function(t){return"object"==typeof t&&(t instanceof qr||(Qr?Kr(t):"[object Number]"===Hr(t)))},en=Xr,rn=tn;var nn=w,on=function(t){return en(t)||rn(t)},an=tn;nn(on,"isPrimitive",Xr),nn(on,"isObject",an);var un=on;var fn=function(t){return t!=t},sn=un.isPrimitive,cn=fn;var ln=function(t){return sn(t)&&cn(t)},hn=un.isObject,pn=fn;var gn=function(t){return hn(t)&&pn(t.valueOf())},vn=ln,dn=gn;var yn=w,mn=function(t){return vn(t)||dn(t)},_n=gn;yn(mn,"isPrimitive",ln),yn(mn,"isObject",_n);var bn=mn,wn=Number.POSITIVE_INFINITY,On=Zr.NEGATIVE_INFINITY,En=wn,jn=On,An=n;var In=function(t){return t<En&&t>jn&&An(t)},Pn=un.isPrimitive,Tn=In;var xn=function(t){return Pn(t)&&Tn(t)},Un=un.isObject,Sn=In;var Nn=function(t){return Un(t)&&Sn(t.valueOf())},Vn=xn,Rn=Nn;var Bn=w,Fn=function(t){return Vn(t)||Rn(t)},Ln=Nn;Bn(Fn,"isPrimitive",xn),Bn(Fn,"isObject",Ln);var Mn,Cn=Fn,kn=Object.prototype.propertyIsEnumerable;Mn=!kn.call("beep","0");var Gn=Yt,Dn=bn.isPrimitive,Yn=Cn.isPrimitive,$n=kn,Jn=Mn;var Wn=function(t,e){var r;return null!=t&&(!(r=$n.call(t,e))&&Jn&&Gn(t)?!Dn(e=+e)&&Yn(e)&&e>=0&&e<t.length:r)},Xn=Wn,Zn=x,zn=Xn,Hn=oe,qn=n;var Kn=Wr?$r:function(t){return null!==t&&"object"==typeof t&&!Hn(t)&&"number"==typeof t.length&&qn(t.length)&&t.length>=0&&t.length<=4294967295&&Zn(t,"callee")&&!zn(t,"callee")},Qn=Kn,ti=Mr,ei=Array.prototype.slice;var ri=function(t){return Qn(t)?ti(ei.call(t)):ti(t)};var ni=Xn((function(){}),"prototype"),ii=!Xn({toString:null},"toString"),oi=n;var ai=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&oi(t.length)&&t.length>=0&&t.length<=9007199254740991},ui=bn,fi=ai,si=Yt.isPrimitive,ci=Cn.isPrimitive;var li=function(t,e,r){var n,i;if(!fi(t)&&!si(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!ci(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(ui(e)){for(;i<n;i++)if(ui(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1};var hi,pi=function(t){return t.constructor&&t.constructor.prototype===t},gi="undefined"==typeof window?void 0:window,vi=x,di=li,yi=me,mi=pi,_i=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],bi=gi;hi=function(){var t;if("undefined"===yi(bi))return!1;for(t in bi)try{-1===di(_i,t)&&vi(bi,t)&&null!==bi[t]&&"object"===yi(bi[t])&&mi(bi[t])}catch(t){return!0}return!1}();var wi="undefined"!=typeof window,Oi=hi,Ei=pi,ji=wi;var Ai=fe,Ii=x,Pi=Kn,Ti=ni,xi=ii,Ui=function(t){if(!1===ji&&!Oi)return Ei(t);try{return Ei(t)}catch(t){return!1}},Si=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ni,Vi=Mr,Ri=ri,Bi=function(t){var e,r,n,i,o,a,u;if(i=[],Pi(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!Ii(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof t)&&!Ai(t))return i;r=Ti&&n}for(o in t)r&&"prototype"===o||!Ii(t,o)||i.push(String(o));if(xi)for(e=Ui(t),u=0;u<Si.length;u++)a=Si[u],e&&"constructor"===a||!Ii(t,a)||i.push(String(a));return i};Ni=Gr?kr()?Ri:Vi:Bi;var Fi=Lr,Li=Ni;var Mi=function(t,e){var r,n,i;for(r=Li(e),i=0;i<r.length;i++)n=r[i],Fi(t,n,e[n]);return t},Ci=Vr,ki=Rr,Gi=Mi;w(Ci,"enum",ki),Gi(Ci,ki());var Di=Ci,Yi=["row-major","column-major"];var $i=function(){return Yi.slice()};w($i,"enum",(function(){return{"row-major":1,"column-major":2}}));var Ji=$i,Wi=["throw","clamp","wrap"];var Xi=function(){return Wi.slice()};w(Xi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Zi=Xi,zi=tr,Hi=br,qi=Ur,Ki=Sr,Qi=Ji.enum,to=Zi.enum,eo=(0,Di.enum)(),ro=Qi(),no=to();var io=function(){var t,e,r,n,i,o,a,u,f,s,c,l,h,p;if(f=this._mode||"throw",a=this._submode||[f],r=33+16*(l=this._ndims)+(h=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new qi(new Hi(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,zi?1:0),s+=1,u.setInt16(s,eo[n],zi),s+=2,u.setBigInt64(s,Ki(l),zi),c=8*l,s+=8,p=0;p<l;p++)u.setBigInt64(s,Ki(i[p]),zi),u.setBigInt64(s+c,Ki(o[p]*t),zi),s+=8;for(s+=c,u.setBigInt64(s,Ki(this._offset*t),zi),s+=8,u.setInt8(s,ro[this._order]),s+=1,u.setInt8(s,no[f]),s+=1,u.setBigInt64(s,Ki(h),zi),s+=8,p=0;p<h;p++)u.setInt8(s,no[a[p]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(s,e,zi),this.__meta_dataview__=u,u},oo=tr,ao=Ye,uo=Ur,fo=e;var so=function(t){var e,r,n,i;return e=new ao(8),0===t||(i=(4294967295&t)>>>0,n=fo(t/4294967296),r=new uo(e.buffer),oo?(r.setUint32(0,i,oo),r.setUint32(4,n,oo)):(r.setUint32(0,n,oo),r.setUint32(4,i,oo))),e},co=tr,lo=Ur,ho=e,po=new Ye(8),go=new lo(po.buffer);var vo=so;w(vo,"assign",(function(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<po.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=ho(t/4294967296),co?(go.setUint32(0,o,co),go.setUint32(4,i,co)):(go.setUint32(0,i,co),go.setUint32(4,o,co)),a=0;a<po.length;a++)e[n]=po[a],n+=r;return e}));var yo=tr,mo=br,_o=Ur,bo=Ye,wo=Ji.enum,Oo=Zi.enum,Eo=vo.assign,jo=(0,Di.enum)(),Ao=wo(),Io=Oo();var Po=ut,To=w,xo=ct,Uo=ht,So=pt,No=dt,Vo=yt,Ro=mt,Bo=wt,Fo=Ot,Lo=Et,Mo=jt,Co=At,ko=It,Go=St,Do=Re,Yo=io,$o=function(){var t,e,r,n,i,o,a,u,f,s,c,l,h,p,g;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(h=this._ndims)+(p=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new _o(new mo(n)),e=new bo(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,yo?1:0),c+=1,f.setInt16(c,jo[i],yo),Eo(h,e,1,c+=2),l=8*h,c+=8,g=0;g<h;g++)Eo(o[g],e,1,c),Eo(a[g]*t,e,1,c+l),c+=8;for(c+=l,Eo(this._offset*t,e,1,c),c+=8,f.setInt8(c,Ao[this._order]),c+=1,f.setInt8(c,Io[s]),Eo(p,e,1,c+=1),c+=8,g=0;g<p;g++)f.setInt8(c,Io[u[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(c,r,yo),this.__meta_dataview__=f,f};function Jo(t,e,r,n,i,o){var a,u,f,s,c;if(!(this instanceof Jo))return new Jo(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=Uo(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=So(n),a=Bo(s,r,n,i,this._iterationOrder),f=No(n),this._flags={ROW_MAJOR_CONTIGUOUS:Ro(f,a),COLUMN_MAJOR_CONTIGUOUS:Vo(f,a),READONLY:!1},this.__meta_dataview__=null,this}To(Jo,"name","ndarray"),xo(Jo.prototype,"byteLength",(function(){return this._byteLength})),xo(Jo.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),xo(Jo.prototype,"data",(function(){return this._buffer})),xo(Jo.prototype,"dtype",(function(){return this._dtype})),xo(Jo.prototype,"flags",(function(){return Fo(this._flags)})),xo(Jo.prototype,"length",(function(){return this._length})),xo(Jo.prototype,"ndims",(function(){return this._ndims})),xo(Jo.prototype,"offset",(function(){return this._offset})),xo(Jo.prototype,"order",(function(){return this._order})),xo(Jo.prototype,"shape",(function(){return this._shape.slice()})),xo(Jo.prototype,"strides",(function(){return this._strides.slice()})),To(Jo.prototype,"get",ko),To(Jo.prototype,"iget",Lo),To(Jo.prototype,"set",Co),To(Jo.prototype,"iset",Mo),To(Jo.prototype,"toString",Do),To(Jo.prototype,"toJSON",Go),To(Jo.prototype,"__array_meta_dataview__",Po()?Yo:$o);var Wo=Jo;var Xo=function(t){return t instanceof Wo||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set};var Zo=function(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r},zo=function(t,e){return t[e]},Ho=function(t,e){return t.get(e)},qo=function(t,e,r){t[e]=r},Ko=function(t,e,r){t.set(r,e)};var Qo=function(t){var e,r,n;return e=t.data,n=t.shape,r=Boolean(e.get&&e.set),{ref:t,dtype:t.dtype,data:e,length:Zo(n),shape:n,strides:t.strides,offset:t.offset,order:t.order,accessors:r,getter:r?Ho:zo,setter:r?Ko:qo}},ta=Qo;var ea=function(t,e){return t[e]},ra=function(t,e){return t.get(e)},na=function(t,e,r){t[e]=r},ia=function(t,e,r){t.set(r,e)};var oa=function(t){var e=Boolean(t.get&&t.set);return{data:t,accessors:e,getter:e?ra:ea,setter:e?ia:na}},aa=oa,ua=ai,fa=Cn.isPrimitive,sa=Yt.isPrimitive,ca=bn.isPrimitive;var la=function(t,e,r){var n,i,o;if(!ua(t)&&!sa(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!fa(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(i=r)<0&&(i=0)}else i=0;if(sa(t)){if(!sa(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==t.indexOf(e,i)}if(n=t.length,ca(e)){for(o=i;o<n;o++)if(ca(t[o]))return!0;return!1}for(o=i;o<n;o++)if(t[o]===e)return!0;return!1},ha=la,pa=Yt.isPrimitive;var ga=function(t){if(!pa(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toLowerCase()},va=Yt.isPrimitive;var da=function(t){if(!va(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toUpperCase()},ya=ga,ma=da,_a=Yt.isPrimitive;var ba=function(t){return _a(t)&&t===ma(t)&&t!==ya(t)},wa=wn,Oa=On;var Ea=function(t){return t==t&&t>Oa&&t<wa},ja=Cn.isPrimitive;var Aa=function(t){return ja(t)&&t>=0},Ia=Cn.isObject;var Pa=function(t){return Ia(t)&&t.valueOf()>=0},Ta=Aa,xa=Pa;var Ua=w,Sa=function(t){return Ta(t)||xa(t)},Na=Pa;Ua(Sa,"isPrimitive",Aa),Ua(Sa,"isObject",Na);var Va=Sa.isPrimitive,Ra=Yt.isPrimitive;var Ba=function(t,e){var r,n;if(!Ra(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!Va(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===t.length||0===e)return"";if(t.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(r="",n=e;1==(1&n)&&(r+=t),0!==(n>>>=1);)t+=t;return r},Fa=Cn.isPrimitive,La=Yt.isPrimitive;var Ma=function(t,e,r){var n,i;if(!La(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!La(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Fa(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");n=r<0?t.length+r:r}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>t.length)return!1;for(i=0;i<e.length;i++)if(t.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Ca=Ba,ka=Ma;var Ga=function(t,e,r){var n=!1,i=e-t.length;return i<0||(ka(t,"-")&&(n=!0,t=t.substr(1)),t=r?t+Ca("0",i):Ca("0",i)+t,n&&(t="-"+t)),t},Da=ba,Ya=da,$a=ga,Ja=Ea,Wa=un.isPrimitive,Xa=Ga;var Za=ba,za=da,Ha=ga,qa=xe,Ka=Ea,Qa=un.isPrimitive,tu=gt,eu=/e\+(\d)$/,ru=/e-(\d)$/,nu=/^(\d+)$/,iu=/^(\d+)e/,ou=/\.0$/,au=/\.0*e/,uu=/(\..*[^0])0*e/;var fu=function(t){var e,r,n=parseFloat(t.arg);if(!Ka(n)){if(!Qa(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":tu(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=qa(r,uu,"$1e"),r=qa(r,au,"e"),r=qa(r,ou,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=qa(r,eu,"e+0$1"),r=qa(r,ru,"e-0$1"),t.alternate&&(r=qa(r,nu,"$1."),r=qa(r,iu,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=Za(t.specifier)?za(r):Ha(r)},su=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var cu=Ba;var lu=Yt.isPrimitive,hu=ha,pu=fn,gu=function(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!Ja(n)){if(!Wa(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=Xa(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=Xa(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=Da(t.specifier)?Ya(r):$a(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r},vu=fu,du=function(t){var e,r,n,i,o;for(e=0,n=[],o=su.exec(t);o;)(r=t.slice(e,su.lastIndex-o[0].length)).length&&n.push(r),(i=a(o,n.length))&&n.push(i),e=su.lastIndex,o=su.exec(t);return(r=t.slice(e)).length&&n.push(r),n;function a(t){return{mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],hasPeriod:"."===t[4],precision:t[5],specifier:t[6]}}},yu=function(t,e,r){var n=e-t.length;return n<0?t:t=r?t+cu(" ",n):cu(" ",n)+t},mu=Ga,_u=String.fromCharCode;var bu=function(t){var e,r,n,i,o,a,u,f,s;if(!lu(t))throw new TypeError("invalid argument. Must provide a string. Value: `"+t+"`.");for(e=du(t),a="",u=1,f=0;f<e.length;f++)if(n=e[f],lu(n))a+=n;else{for(n.mapping&&(u=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!hu(r,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,pu(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,pu(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=gu(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!pu(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=pu(o)?String(n.arg):_u(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=vu(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=mu(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=yu(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a};var wu=function(t,e,r,n,i,o){var a,u,f,s,c;for(a=t.length,u=1,c=0;c<a;c++)u*=t[c];if("clamp"===o)i<0?i=0:i>=u&&(i=u-1);else if("wrap"===o)i<0?(i+=u)<0&&0!==(i%=u)&&(i+=u):i>=u&&(i-=u)>=u&&(i%=u);else if(i<0||i>=u)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+u+". Value: `"+i+"`.");if(f=r,"column-major"===n){for(c=0;c<a;c++)i-=s=i%t[c],i/=t[c],f+=s*e[c];return f}for(c=a-1;c>=0;c--)i-=s=i%t[c],i/=t[c],f+=s*e[c];return f};var Ou=function(t,e,r,n){var i,o,a,u,f,s,c,l,h,p,g;if(u=t.length,c=t.shape,i=t.data,l=t.strides,h=t.offset,o=t.order,f=t.getter,s=t.ref,0===c.length)return r.call(n,e,f(i,h),0,s);for(a=e,g=0;g<u;g++)p=wu(c,l,h,o,g,"throw"),a=r.call(n,a,f(i,p),g,s);return a};var Eu=function(t,e,r,n){var i,o,a,u;for(i=t.data,o=t.getter,a=e,u=0;u<i.length;u++)a=r.call(n,a,o(i,u),u,i);return a},ju=o,Au=Xo,Iu=be,Pu=ta,Tu=aa,xu=bu,Uu=Ou,Su=Eu;return function(t,e,r,n){if(!Iu(r))throw new TypeError(xu("invalid argument. Third argument must be a function. Value: `%s`.",r));if(Au(t))return Uu(Pu(t),e,r,n);if(ju(t))return Su(Tu(t),e,r,n);throw new TypeError(xu("invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.",t))}}));
//# sourceMappingURL=bundle.js.map
