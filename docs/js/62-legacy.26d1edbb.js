(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[62],{4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,n,e){"use strict";var r,i,a,o=e(4019),u=e(9781),s=e(7854),c=e(614),f=e(111),l=e(2597),d=e(648),h=e(6330),v=e(8880),y=e(1320),p=e(3070).f,g=e(7976),A=e(9518),w=e(7674),T=e(5112),b=e(9711),E=s.Int8Array,C=E&&E.prototype,O=s.Uint8ClampedArray,_=O&&O.prototype,R=E&&A(E),x=C&&A(C),M=Object.prototype,m=s.TypeError,U=T("toStringTag"),D=b("TYPED_ARRAY_TAG"),S=b("TYPED_ARRAY_CONSTRUCTOR"),I=o&&!!w&&"Opera"!==d(s.opera),L=!1,Z={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},k={BigInt64Array:8,BigUint64Array:8},B=function(t){if(!f(t))return!1;var n=d(t);return"DataView"===n||l(Z,n)||l(k,n)},P=function(t){if(!f(t))return!1;var n=d(t);return l(Z,n)||l(k,n)},W=function(t){if(P(t))return t;throw m("Target is not a typed array")},Y=function(t){if(c(t)&&(!w||g(R,t)))return t;throw m(h(t)+" is not a typed array constructor")},N=function(t,n,e,r){if(u){if(e)for(var i in Z){var a=s[i];if(a&&l(a.prototype,t))try{delete a.prototype[t]}catch(o){try{a.prototype[t]=n}catch(c){}}}x[t]&&!e||y(x,t,e?n:I&&C[t]||n,r)}},j=function(t,n,e){var r,i;if(u){if(w){if(e)for(r in Z)if(i=s[r],i&&l(i,t))try{delete i[t]}catch(a){}if(R[t]&&!e)return;try{return y(R,t,e?n:I&&R[t]||n)}catch(a){}}for(r in Z)i=s[r],!i||i[t]&&!e||y(i,t,n)}};for(r in Z)i=s[r],a=i&&i.prototype,a?v(a,S,i):I=!1;for(r in k)i=s[r],a=i&&i.prototype,a&&v(a,S,i);if((!I||!c(R)||R===Function.prototype)&&(R=function(){throw m("Incorrect invocation")},I))for(r in Z)s[r]&&w(s[r],R);if((!I||!x||x===M)&&(x=R.prototype,I))for(r in Z)s[r]&&w(s[r].prototype,x);if(I&&A(_)!==x&&w(_,x),u&&!l(x,U))for(r in L=!0,p(x,U,{get:function(){return f(this)?this[D]:void 0}}),Z)s[r]&&v(s[r],D,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:I,TYPED_ARRAY_CONSTRUCTOR:S,TYPED_ARRAY_TAG:L&&D,aTypedArray:W,aTypedArrayConstructor:Y,exportTypedArrayMethod:N,exportTypedArrayStaticMethod:j,isView:B,isTypedArray:P,TypedArray:R,TypedArrayPrototype:x}},3331:function(t,n,e){"use strict";var r=e(7854),i=e(1702),a=e(9781),o=e(4019),u=e(6530),s=e(8880),c=e(2248),f=e(7293),l=e(5787),d=e(9303),h=e(7466),v=e(7067),y=e(1179),p=e(9518),g=e(7674),A=e(8006).f,w=e(3070).f,T=e(1285),b=e(1589),E=e(8003),C=e(9909),O=u.PROPER,_=u.CONFIGURABLE,R=C.get,x=C.set,M="ArrayBuffer",m="DataView",U="prototype",D="Wrong length",S="Wrong index",I=r[M],L=I,Z=L&&L[U],k=r[m],B=k&&k[U],P=Object.prototype,W=r.Array,Y=r.RangeError,N=i(T),j=i([].reverse),V=y.pack,F=y.unpack,z=function(t){return[255&t]},X=function(t){return[255&t,t>>8&255]},G=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},$=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},H=function(t){return V(t,23,4)},q=function(t){return V(t,52,8)},J=function(t,n){w(t[U],n,{get:function(){return R(this)[n]}})},K=function(t,n,e,r){var i=v(e),a=R(t);if(i+n>a.byteLength)throw Y(S);var o=R(a.buffer).bytes,u=i+a.byteOffset,s=b(o,u,u+n);return r?s:j(s)},Q=function(t,n,e,r,i,a){var o=v(e),u=R(t);if(o+n>u.byteLength)throw Y(S);for(var s=R(u.buffer).bytes,c=o+u.byteOffset,f=r(+i),l=0;l<n;l++)s[c+l]=f[a?l:n-l-1]};if(o){var tt=O&&I.name!==M;if(f((function(){I(1)}))&&f((function(){new I(-1)}))&&!f((function(){return new I,new I(1.5),new I(NaN),tt&&!_})))tt&&_&&s(I,"name",M);else{L=function(t){return l(this,Z),new I(v(t))},L[U]=Z;for(var nt,et=A(I),rt=0;et.length>rt;)(nt=et[rt++])in L||s(L,nt,I[nt]);Z.constructor=L}g&&p(B)!==P&&g(B,P);var it=new k(new L(2)),at=i(B.setInt8);it.setInt8(0,2147483648),it.setInt8(1,2147483649),!it.getInt8(0)&&it.getInt8(1)||c(B,{setInt8:function(t,n){at(this,t,n<<24>>24)},setUint8:function(t,n){at(this,t,n<<24>>24)}},{unsafe:!0})}else L=function(t){l(this,Z);var n=v(t);x(this,{bytes:N(W(n),0),byteLength:n}),a||(this.byteLength=n)},Z=L[U],k=function(t,n,e){l(this,B),l(t,Z);var r=R(t).byteLength,i=d(n);if(i<0||i>r)throw Y("Wrong offset");if(e=void 0===e?r-i:h(e),i+e>r)throw Y(D);x(this,{buffer:t,byteLength:e,byteOffset:i}),a||(this.buffer=t,this.byteLength=e,this.byteOffset=i)},B=k[U],a&&(J(L,"byteLength"),J(k,"buffer"),J(k,"byteLength"),J(k,"byteOffset")),c(B,{getInt8:function(t){return K(this,1,t)[0]<<24>>24},getUint8:function(t){return K(this,1,t)[0]},getInt16:function(t){var n=K(this,2,t,arguments.length>1?arguments[1]:void 0);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=K(this,2,t,arguments.length>1?arguments[1]:void 0);return n[1]<<8|n[0]},getInt32:function(t){return $(K(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return $(K(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return F(K(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return F(K(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,n){Q(this,1,t,z,n)},setUint8:function(t,n){Q(this,1,t,z,n)},setInt16:function(t,n){Q(this,2,t,X,n,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,n){Q(this,2,t,X,n,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,n){Q(this,4,t,G,n,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,n){Q(this,4,t,G,n,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,n){Q(this,4,t,H,n,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,n){Q(this,8,t,q,n,arguments.length>2?arguments[2]:void 0)}});E(L,M),E(k,m),t.exports={ArrayBuffer:L,DataView:k}},1048:function(t,n,e){"use strict";var r=e(7908),i=e(1400),a=e(6244),o=Math.min;t.exports=[].copyWithin||function(t,n){var e=r(this),u=a(e),s=i(t,u),c=i(n,u),f=arguments.length>2?arguments[2]:void 0,l=o((void 0===f?u:i(f,u))-c,u-s),d=1;c<s&&s<c+l&&(d=-1,c+=l-1,s+=l-1);while(l-- >0)c in e?e[s]=e[c]:delete e[s],s+=d,c+=d;return e}},7745:function(t,n,e){var r=e(6244);t.exports=function(t,n){var e=0,i=r(n),a=new t(i);while(i>e)a[e]=n[e++];return a}},6583:function(t,n,e){"use strict";var r=e(2104),i=e(5656),a=e(9303),o=e(6244),u=e(9341),s=Math.min,c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0,l=u("lastIndexOf"),d=f||!l;t.exports=d?function(t){if(f)return r(c,this,arguments)||0;var n=i(this),e=o(n),u=e-1;for(arguments.length>1&&(u=s(u,a(arguments[1]))),u<0&&(u=e+u);u>=0;u--)if(u in n&&n[u]===t)return u||0;return-1}:c},3671:function(t,n,e){var r=e(7854),i=e(9662),a=e(7908),o=e(8361),u=e(6244),s=r.TypeError,c=function(t){return function(n,e,r,c){i(e);var f=a(n),l=o(f),d=u(f),h=t?d-1:0,v=t?-1:1;if(r<2)while(1){if(h in l){c=l[h],h+=v;break}if(h+=v,t?h<0:d<=h)throw s("Reduce of empty array with no initial value")}for(;t?h>=0:d>h;h+=v)h in l&&(c=e(c,l[h],h,f));return c}};t.exports={left:c(!1),right:c(!0)}},1179:function(t,n,e){var r=e(7854),i=r.Array,a=Math.abs,o=Math.pow,u=Math.floor,s=Math.log,c=Math.LN2,f=function(t,n,e){var r,f,l,d=i(e),h=8*e-n-1,v=(1<<h)-1,y=v>>1,p=23===n?o(2,-24)-o(2,-77):0,g=t<0||0===t&&1/t<0?1:0,A=0;t=a(t),t!=t||t===1/0?(f=t!=t?1:0,r=v):(r=u(s(t)/c),l=o(2,-r),t*l<1&&(r--,l*=2),t+=r+y>=1?p/l:p*o(2,1-y),t*l>=2&&(r++,l/=2),r+y>=v?(f=0,r=v):r+y>=1?(f=(t*l-1)*o(2,n),r+=y):(f=t*o(2,y-1)*o(2,n),r=0));while(n>=8)d[A++]=255&f,f/=256,n-=8;r=r<<n|f,h+=n;while(h>0)d[A++]=255&r,r/=256,h-=8;return d[--A]|=128*g,d},l=function(t,n){var e,r=t.length,i=8*r-n-1,a=(1<<i)-1,u=a>>1,s=i-7,c=r-1,f=t[c--],l=127&f;f>>=7;while(s>0)l=256*l+t[c--],s-=8;e=l&(1<<-s)-1,l>>=-s,s+=n;while(s>0)e=256*e+t[c--],s-=8;if(0===l)l=1-u;else{if(l===a)return e?NaN:f?-1/0:1/0;e+=o(2,n),l-=u}return(f?-1:1)*e*o(2,l-n)};t.exports={pack:f,unpack:l}},7067:function(t,n,e){var r=e(7854),i=e(9303),a=e(7466),o=r.RangeError;t.exports=function(t){if(void 0===t)return 0;var n=i(t),e=a(n);if(n!==e)throw o("Wrong length or index");return e}},4590:function(t,n,e){var r=e(7854),i=e(3002),a=r.RangeError;t.exports=function(t,n){var e=i(t);if(e%n)throw a("Wrong offset");return e}},3002:function(t,n,e){var r=e(7854),i=e(9303),a=r.RangeError;t.exports=function(t){var n=i(t);if(n<0)throw a("The argument can't be less than 0");return n}},9843:function(t,n,e){"use strict";var r=e(2109),i=e(7854),a=e(6916),o=e(9781),u=e(3832),s=e(260),c=e(3331),f=e(5787),l=e(9114),d=e(8880),h=e(5988),v=e(7466),y=e(7067),p=e(4590),g=e(4948),A=e(2597),w=e(648),T=e(111),b=e(2190),E=e(30),C=e(7976),O=e(7674),_=e(8006).f,R=e(7321),x=e(2092).forEach,M=e(6340),m=e(3070),U=e(1236),D=e(9909),S=e(9587),I=D.get,L=D.set,Z=m.f,k=U.f,B=Math.round,P=i.RangeError,W=c.ArrayBuffer,Y=W.prototype,N=c.DataView,j=s.NATIVE_ARRAY_BUFFER_VIEWS,V=s.TYPED_ARRAY_CONSTRUCTOR,F=s.TYPED_ARRAY_TAG,z=s.TypedArray,X=s.TypedArrayPrototype,G=s.aTypedArrayConstructor,$=s.isTypedArray,H="BYTES_PER_ELEMENT",q="Wrong length",J=function(t,n){G(t);var e=0,r=n.length,i=new t(r);while(r>e)i[e]=n[e++];return i},K=function(t,n){Z(t,n,{get:function(){return I(this)[n]}})},Q=function(t){var n;return C(Y,t)||"ArrayBuffer"==(n=w(t))||"SharedArrayBuffer"==n},tt=function(t,n){return $(t)&&!b(n)&&n in t&&h(+n)&&n>=0},nt=function(t,n){return n=g(n),tt(t,n)?l(2,t[n]):k(t,n)},et=function(t,n,e){return n=g(n),!(tt(t,n)&&T(e)&&A(e,"value"))||A(e,"get")||A(e,"set")||e.configurable||A(e,"writable")&&!e.writable||A(e,"enumerable")&&!e.enumerable?Z(t,n,e):(t[n]=e.value,t)};o?(j||(U.f=nt,m.f=et,K(X,"buffer"),K(X,"byteOffset"),K(X,"byteLength"),K(X,"length")),r({target:"Object",stat:!0,forced:!j},{getOwnPropertyDescriptor:nt,defineProperty:et}),t.exports=function(t,n,e){var o=t.match(/\d+$/)[0]/8,s=t+(e?"Clamped":"")+"Array",c="get"+t,l="set"+t,h=i[s],g=h,A=g&&g.prototype,w={},b=function(t,n){var e=I(t);return e.view[c](n*o+e.byteOffset,!0)},C=function(t,n,r){var i=I(t);e&&(r=(r=B(r))<0?0:r>255?255:255&r),i.view[l](n*o+i.byteOffset,r,!0)},m=function(t,n){Z(t,n,{get:function(){return b(this,n)},set:function(t){return C(this,n,t)},enumerable:!0})};j?u&&(g=n((function(t,n,e,r){return f(t,A),S(function(){return T(n)?Q(n)?void 0!==r?new h(n,p(e,o),r):void 0!==e?new h(n,p(e,o)):new h(n):$(n)?J(g,n):a(R,g,n):new h(y(n))}(),t,g)})),O&&O(g,z),x(_(h),(function(t){t in g||d(g,t,h[t])})),g.prototype=A):(g=n((function(t,n,e,r){f(t,A);var i,u,s,c=0,l=0;if(T(n)){if(!Q(n))return $(n)?J(g,n):a(R,g,n);i=n,l=p(e,o);var d=n.byteLength;if(void 0===r){if(d%o)throw P(q);if(u=d-l,u<0)throw P(q)}else if(u=v(r)*o,u+l>d)throw P(q);s=u/o}else s=y(n),u=s*o,i=new W(u);L(t,{buffer:i,byteOffset:l,byteLength:u,length:s,view:new N(i)});while(c<s)m(t,c++)})),O&&O(g,z),A=g.prototype=E(X)),A.constructor!==g&&d(A,"constructor",g),d(A,V,g),F&&d(A,F,s),w[s]=g,r({global:!0,forced:g!=h,sham:!j},w),H in g||d(g,H,o),H in A||d(A,H,o),M(s)}):t.exports=function(){}},3832:function(t,n,e){var r=e(7854),i=e(7293),a=e(7072),o=e(260).NATIVE_ARRAY_BUFFER_VIEWS,u=r.ArrayBuffer,s=r.Int8Array;t.exports=!o||!i((function(){s(1)}))||!i((function(){new s(-1)}))||!a((function(t){new s,new s(null),new s(1.5),new s(t)}),!0)||i((function(){return 1!==new s(new u(2),1,void 0).length}))},3074:function(t,n,e){var r=e(7745),i=e(6304);t.exports=function(t,n){return r(i(t),n)}},7321:function(t,n,e){var r=e(9974),i=e(6916),a=e(9483),o=e(7908),u=e(6244),s=e(8554),c=e(1246),f=e(7659),l=e(260).aTypedArrayConstructor;t.exports=function(t){var n,e,d,h,v,y,p=a(this),g=o(t),A=arguments.length,w=A>1?arguments[1]:void 0,T=void 0!==w,b=c(g);if(b&&!f(b)){v=s(g,b),y=v.next,g=[];while(!(h=i(y,v)).done)g.push(h.value)}for(T&&A>2&&(w=r(w,arguments[2])),e=u(g),d=new(l(p))(e),n=0;e>n;n++)d[n]=T?w(g[n],n):g[n];return d}},6304:function(t,n,e){var r=e(260),i=e(6707),a=r.TYPED_ARRAY_CONSTRUCTOR,o=r.aTypedArrayConstructor;t.exports=function(t){return o(i(t,t[a]))}},8675:function(t,n,e){"use strict";var r=e(260),i=e(6244),a=e(9303),o=r.aTypedArray,u=r.exportTypedArrayMethod;u("at",(function(t){var n=o(this),e=i(n),r=a(t),u=r>=0?r:e+r;return u<0||u>=e?void 0:n[u]}))},2990:function(t,n,e){"use strict";var r=e(1702),i=e(260),a=e(1048),o=r(a),u=i.aTypedArray,s=i.exportTypedArrayMethod;s("copyWithin",(function(t,n){return o(u(this),t,n,arguments.length>2?arguments[2]:void 0)}))},8927:function(t,n,e){"use strict";var r=e(260),i=e(2092).every,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("every",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},3105:function(t,n,e){"use strict";var r=e(260),i=e(6916),a=e(1285),o=r.aTypedArray,u=r.exportTypedArrayMethod;u("fill",(function(t){var n=arguments.length;return i(a,o(this),t,n>1?arguments[1]:void 0,n>2?arguments[2]:void 0)}))},5035:function(t,n,e){"use strict";var r=e(260),i=e(2092).filter,a=e(3074),o=r.aTypedArray,u=r.exportTypedArrayMethod;u("filter",(function(t){var n=i(o(this),t,arguments.length>1?arguments[1]:void 0);return a(this,n)}))},7174:function(t,n,e){"use strict";var r=e(260),i=e(2092).findIndex,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("findIndex",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},4345:function(t,n,e){"use strict";var r=e(260),i=e(2092).find,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("find",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},2846:function(t,n,e){"use strict";var r=e(260),i=e(2092).forEach,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("forEach",(function(t){i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},4731:function(t,n,e){"use strict";var r=e(260),i=e(1318).includes,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("includes",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},7209:function(t,n,e){"use strict";var r=e(260),i=e(1318).indexOf,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("indexOf",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},6319:function(t,n,e){"use strict";var r=e(7854),i=e(7293),a=e(1702),o=e(260),u=e(6992),s=e(5112),c=s("iterator"),f=r.Uint8Array,l=a(u.values),d=a(u.keys),h=a(u.entries),v=o.aTypedArray,y=o.exportTypedArrayMethod,p=f&&f.prototype,g=!i((function(){p[c].call([1])})),A=!!p&&p.values&&p[c]===p.values&&"values"===p.values.name,w=function(){return l(v(this))};y("entries",(function(){return h(v(this))}),g),y("keys",(function(){return d(v(this))}),g),y("values",w,g||!A,{name:"values"}),y(c,w,g||!A,{name:"values"})},8867:function(t,n,e){"use strict";var r=e(260),i=e(1702),a=r.aTypedArray,o=r.exportTypedArrayMethod,u=i([].join);o("join",(function(t){return u(a(this),t)}))},7789:function(t,n,e){"use strict";var r=e(260),i=e(2104),a=e(6583),o=r.aTypedArray,u=r.exportTypedArrayMethod;u("lastIndexOf",(function(t){var n=arguments.length;return i(a,o(this),n>1?[t,arguments[1]]:[t])}))},3739:function(t,n,e){"use strict";var r=e(260),i=e(2092).map,a=e(6304),o=r.aTypedArray,u=r.exportTypedArrayMethod;u("map",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0,(function(t,n){return new(a(t))(n)}))}))},4483:function(t,n,e){"use strict";var r=e(260),i=e(3671).right,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("reduceRight",(function(t){var n=arguments.length;return i(a(this),t,n,n>1?arguments[1]:void 0)}))},9368:function(t,n,e){"use strict";var r=e(260),i=e(3671).left,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("reduce",(function(t){var n=arguments.length;return i(a(this),t,n,n>1?arguments[1]:void 0)}))},2056:function(t,n,e){"use strict";var r=e(260),i=r.aTypedArray,a=r.exportTypedArrayMethod,o=Math.floor;a("reverse",(function(){var t,n=this,e=i(n).length,r=o(e/2),a=0;while(a<r)t=n[a],n[a++]=n[--e],n[e]=t;return n}))},3462:function(t,n,e){"use strict";var r=e(7854),i=e(6916),a=e(260),o=e(6244),u=e(4590),s=e(7908),c=e(7293),f=r.RangeError,l=r.Int8Array,d=l&&l.prototype,h=d&&d.set,v=a.aTypedArray,y=a.exportTypedArrayMethod,p=!c((function(){var t=new Uint8ClampedArray(2);return i(h,t,{length:1,0:3},1),3!==t[1]})),g=p&&a.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new l(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));y("set",(function(t){v(this);var n=u(arguments.length>1?arguments[1]:void 0,1),e=s(t);if(p)return i(h,this,e,n);var r=this.length,a=o(e),c=0;if(a+n>r)throw f("Wrong length");while(c<a)this[n+c]=e[c++]}),!p||g)},3242:function(t,n,e){"use strict";var r=e(260),i=e(6304),a=e(7293),o=e(206),u=r.aTypedArray,s=r.exportTypedArrayMethod,c=a((function(){new Int8Array(1).slice()}));s("slice",(function(t,n){var e=o(u(this),t,n),r=i(this),a=0,s=e.length,c=new r(s);while(s>a)c[a]=e[a++];return c}),c)},7462:function(t,n,e){"use strict";var r=e(260),i=e(2092).some,a=r.aTypedArray,o=r.exportTypedArrayMethod;o("some",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},3824:function(t,n,e){"use strict";var r=e(7854),i=e(1702),a=e(7293),o=e(9662),u=e(4362),s=e(260),c=e(8886),f=e(256),l=e(7392),d=e(8008),h=r.Array,v=s.aTypedArray,y=s.exportTypedArrayMethod,p=r.Uint16Array,g=p&&i(p.prototype.sort),A=!!g&&!(a((function(){g(new p(2),null)}))&&a((function(){g(new p(2),{})}))),w=!!g&&!a((function(){if(l)return l<74;if(c)return c<67;if(f)return!0;if(d)return d<602;var t,n,e=new p(516),r=h(516);for(t=0;t<516;t++)n=t%4,e[t]=515-t,r[t]=t-2*n+3;for(g(e,(function(t,n){return(t/4|0)-(n/4|0)})),t=0;t<516;t++)if(e[t]!==r[t])return!0})),T=function(t){return function(n,e){return void 0!==t?+t(n,e)||0:e!==e?-1:n!==n?1:0===n&&0===e?1/n>0&&1/e<0?1:-1:n>e}};y("sort",(function(t){return void 0!==t&&o(t),w?g(this,t):u(v(this),T(t))}),!w||A)},5021:function(t,n,e){"use strict";var r=e(260),i=e(7466),a=e(1400),o=e(6304),u=r.aTypedArray,s=r.exportTypedArrayMethod;s("subarray",(function(t,n){var e=u(this),r=e.length,s=a(t,r),c=o(e);return new c(e.buffer,e.byteOffset+s*e.BYTES_PER_ELEMENT,i((void 0===n?r:a(n,r))-s))}))},2974:function(t,n,e){"use strict";var r=e(7854),i=e(2104),a=e(260),o=e(7293),u=e(206),s=r.Int8Array,c=a.aTypedArray,f=a.exportTypedArrayMethod,l=[].toLocaleString,d=!!s&&o((function(){l.call(new s(1))})),h=o((function(){return[1,2].toLocaleString()!=new s([1,2]).toLocaleString()}))||!o((function(){s.prototype.toLocaleString.call([1,2])}));f("toLocaleString",(function(){return i(l,d?u(c(this)):c(this),u(arguments))}),h)},5016:function(t,n,e){"use strict";var r=e(260).exportTypedArrayMethod,i=e(7293),a=e(7854),o=e(1702),u=a.Uint8Array,s=u&&u.prototype||{},c=[].toString,f=o([].join);i((function(){c.call({})}))&&(c=function(){return f(this)});var l=s.toString!=c;r("toString",c,l)},9135:function(t,n,e){var r=e(9843);r("Uint32",(function(t){return function(n,e,r){return t(this,n,e,r)}}))},9434:function(t,n,e){"use strict";e.d(n,{Z:function(){return g}});var r=e(3396),i={class:"card"};function a(t,n,e,a,o,u){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.WI)(t.$slots,"default",{},void 0,!0)])}var o=e(2833),u=e(3087),s=e(3806),c=e(5744),f=e(3336),l=(e(5003),e(1539),e(1299),e(6520)),d=function(t,n,e,r){var i,a=arguments.length,o=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,f.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(o=(a<3?i(o):a>3?i(n,e,o):i(n,e))||o);return a>3&&o&&Object.defineProperty(n,e,o),o},h=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(){return(0,u.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e)}(l.w3);h=d([(0,l.Ei)({components:{}})],h);var v=h,y=e(89);const p=(0,y.Z)(v,[["render",a],["__scopeId","data-v-52913c85"]]);var g=p},4258:function(t,n,e){"use strict";e.d(n,{Z:function(){return g}});var r=e(3396);function i(t,n,e,i,a,o){var u=(0,r.up)("Card");return(0,r.wg)(),(0,r.j4)(u,{class:"error"},{default:(0,r.w5)((function(){return[(0,r.WI)(t.$slots,"default",{},void 0,!0)]})),_:3})}var a=e(2833),o=e(3087),u=e(3806),s=e(5744),c=e(3336),f=(e(5003),e(1539),e(1299),e(6520)),l=e(9434),d=function(t,n,e,r){var i,a=arguments.length,o=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(o=(a<3?i(o):a>3?i(n,e,o):i(n,e))||o);return a>3&&o&&Object.defineProperty(n,e,o),o},h=function(t){(0,u.Z)(e,t);var n=(0,s.Z)(e);function e(){return(0,o.Z)(this,e),n.apply(this,arguments)}return(0,a.Z)(e)}(f.w3);h=d([(0,f.Ei)({components:{Card:l.Z}})],h);var v=h,y=e(89);const p=(0,y.Z)(v,[["render",i],["__scopeId","data-v-bc6160ce"]]);var g=p},1062:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return H}});var r=e(3396),i=e(7139),a=function(t){return(0,r.dD)("data-v-8acceb7a"),t=t(),(0,r.Cn)(),t},o={class:"container"},u={class:"row"},s={class:"col-lg-3 col-md-12"},c=a((function(){return(0,r._)("h1",null," Выглядит красиво, но ",-1)})),f=a((function(){return(0,r._)("p",null," Стоит что-нибудь нарисовать ",-1)})),l={class:"col-lg-6 col-md-12"},d={class:"neuralCanvas",id:"neuralCanvas",ref:"neuralCanvas"},h={class:"col-lg-3 col-md-12"},v=a((function(){return(0,r._)("h1",null," Конфигуратор алгоритма ",-1)})),y=a((function(){return(0,r._)("button",{class:"button button-border button-rounded button-action",id:"submitButton"}," Запустить алгоритм ",-1)})),p=a((function(){return(0,r._)("div",{class:"spacer"},null,-1)})),g=a((function(){return(0,r._)("button",{class:"button button-flat button-border button-rounded activeButton",id:"clearButton"}," Очистить ",-1)})),A=a((function(){return(0,r._)("h1",null," Результат: ",-1)}));function w(t,n,e,a,w,T){var b=this,E=(0,r.up)("NeuralDescription"),C=(0,r.up)("Card"),O=(0,r.up)("Error");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",u,[(0,r._)("div",s,[(0,r.Wm)(C,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(E)]})),_:1}),(0,r.Wm)(O,{id:"error",class:(0,i.C_)({"error-displaying":t.isErrorDisplaying})},{default:(0,r.w5)((function(){return[c,f]})),_:1},8,["class"])]),(0,r._)("div",l,[(0,r.Wm)(C,{class:"cardCenter neuralCard",id:"neuralCard"},{default:(0,r.w5)((function(){return[(0,r._)("canvas",d,null,512)]})),_:1})]),(0,r._)("div",h,[(0,r.Wm)(C,null,{default:(0,r.w5)((function(){return[v,y,p,g]})),_:1}),(0,r.Wm)(C,{class:(0,i.C_)(["resultCard",{"result-displaying":!t.isErrorDisplaying&&null!=t.calculationResult}])},{default:(0,r.w5)((function(){return[A,(0,r._)("h2",null,(0,i.zw)(b.calculationResult),1)]})),_:1},8,["class"])])])])}var T=e(3087),b=e(2833),E=e(2417),C=e(3806),O=e(5744),_=e(2482),R=e(3336),x=(e(5003),e(1539),e(1299),e(2222),e(9135),e(8675),e(2990),e(8927),e(3105),e(5035),e(4345),e(7174),e(2846),e(4731),e(7209),e(6319),e(8867),e(7789),e(3739),e(9368),e(4483),e(2056),e(3462),e(3242),e(7462),e(3824),e(5021),e(2974),e(5016),e(6520)),M=e(9434),m=e(7439),U=(0,r._)("h1",null," Нейронная сеть ",-1),D=(0,r._)("p",null," Алгоритм для определения нарисованной цифры ",-1);function S(t,n,e,i,a,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[U,D],64)}var I=function(t,n,e,r){var i,a=arguments.length,o=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,R.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(o=(a<3?i(o):a>3?i(n,e,o):i(n,e))||o);return a>3&&o&&Object.defineProperty(n,e,o),o},L=function(t){(0,C.Z)(e,t);var n=(0,O.Z)(e);function e(){return(0,T.Z)(this,e),n.apply(this,arguments)}return(0,b.Z)(e)}(x.w3);L=I([(0,x.Ei)({components:{}})],L);var Z=L,k=e(89);const B=(0,k.Z)(Z,[["render",S]]);var P,W=B,Y=e(4258);(function(t){t[t["MOUSE_DOWN"]=0]="MOUSE_DOWN",t[t["MOUSE_UP"]=1]="MOUSE_UP",t[t["MOUSE_OUT"]=2]="MOUSE_OUT",t[t["MOUSE_MOVE"]=3]="MOUSE_MOVE"})(P||(P={}));var N=P,j=function(){function t(){(0,T.Z)(this,t)}return(0,b.Z)(t,[{key:"detectDisplayingNumber",value:function(t){return 0}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}}]),t}();(0,_.Z)(j,"instance",void 0);var V,F=j,z=function(t,n,e,r){var i,a=arguments.length,o=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,R.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(o=(a<3?i(o):a>3?i(n,e,o):i(n,e))||o);return a>3&&o&&Object.defineProperty(n,e,o),o},X=V=function(t){(0,C.Z)(e,t);var n=(0,O.Z)(e);function e(){var t;(0,T.Z)(this,e);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n.call.apply(n,[this].concat(i)),(0,_.Z)((0,E.Z)(t),"meta",(0,x.cY)((function(){return(0,m.jq)({title:"🧠",htmlAttrs:{lang:"ru",amp:!0}})}))),(0,_.Z)((0,E.Z)(t),"isErrorDisplaying",!1),(0,_.Z)((0,E.Z)(t),"canvas",null),(0,_.Z)((0,E.Z)(t),"canvasContext",null),(0,_.Z)((0,E.Z)(t),"isLineDrawing",!1),(0,_.Z)((0,E.Z)(t),"startX",0),(0,_.Z)((0,E.Z)(t),"startY",0),(0,_.Z)((0,E.Z)(t),"calculationResult",null),t}return(0,b.Z)(e,[{key:"updateCanvasSize",value:function(){var t=document.getElementById("neuralCard");if(t&&this.canvas){var n=t.offsetWidth-30,e=t.offsetHeight-40;this.canvas.width=n,this.canvas.height=e,this.canvas.style.width=n+"px",this.canvas.style.height=e+"px"}}},{key:"displayResult",value:function(t){this.calculationResult=t}},{key:"changeCanvasDrawingState",value:function(t,n){switch(t){case N.MOUSE_DOWN:var e=n.target.getBoundingClientRect();this.isLineDrawing=!0,n.preventDefault(),this.startX=n.clientX-e.left,this.startY=n.clientY-e.top;break;case N.MOUSE_UP:n.preventDefault(),this.isLineDrawing=!1;break;case N.MOUSE_OUT:n.preventDefault(),this.isLineDrawing=!1;break;case N.MOUSE_MOVE:if(this.isLineDrawing){var r,i,a,o,u=n.target.getBoundingClientRect();n.preventDefault();var s=n.clientX-u.left,c=n.clientY-u.top;null===(r=this.canvasContext)||void 0===r||r.beginPath(),this.canvasContext.lineWidth=15,this.canvasContext.lineCap="round",null===(i=this.canvasContext)||void 0===i||i.moveTo(this.startX,this.startY),null===(a=this.canvasContext)||void 0===a||a.lineTo(s,c),null===(o=this.canvasContext)||void 0===o||o.stroke(),this.startX=s,this.startY=c}break}}},{key:"clearCanvas",value:function(){var t,n,e;this.canvas&&(null===(t=this.canvasContext)||void 0===t||t.clearRect(0,0,this.canvas.width,this.canvas.height),null===(n=this.canvasContext)||void 0===n||n.beginPath(),null===(e=this.canvasContext)||void 0===e||e.closePath())}},{key:"isCanvasBlank",value:function(){if(this.canvas&&this.canvasContext){var t=new Uint32Array(this.canvasContext.getImageData(0,0,this.canvas.width,this.canvas.height).data.buffer);return!t.some((function(t){return 0!==t}))}return!1}},{key:"initCanvas",value:function(){this.canvas=document.getElementById("neuralCanvas"),this.canvasContext=this.canvas.getContext("2d"),this.updateCanvasSize()}},{key:"initCardWidthListener",value:function(){var t,n=this,e=document.getElementById("neuralCard");V.updateCardSize(e),this.updateCanvasSize(),null===(t=window)||void 0===t||t.addEventListener("resize",(function(){V.updateCardSize(e),n.updateCanvasSize()}))}},{key:"canvasMouseDownListener",value:function(t){this.changeCanvasDrawingState(N.MOUSE_DOWN,t)}},{key:"canvasMouseUpListener",value:function(t){this.changeCanvasDrawingState(N.MOUSE_UP,t)}},{key:"canvasMouseOutListener",value:function(t){this.changeCanvasDrawingState(N.MOUSE_OUT,t)}},{key:"canvasMouseMoveListener",value:function(t){this.changeCanvasDrawingState(N.MOUSE_MOVE,t)}},{key:"initCanvasMouseEvents",value:function(){var t,n,e,r;null===(t=this.canvas)||void 0===t||t.addEventListener("mousedown",this.canvasMouseDownListener),null===(n=this.canvas)||void 0===n||n.addEventListener("mouseup",this.canvasMouseUpListener),null===(e=this.canvas)||void 0===e||e.addEventListener("mouseout",this.canvasMouseOutListener),null===(r=this.canvas)||void 0===r||r.addEventListener("mousemove",this.canvasMouseMoveListener)}},{key:"initSubmitButtonOnClickListener",value:function(){var t=this,n=document.getElementById("submitButton");null===n||void 0===n||n.addEventListener("click",(function(){var n;t.isErrorDisplaying=t.isCanvasBlank();var e=null===(n=t.canvas)||void 0===n?void 0:n.toDataURL();e&&t.displayResult(F.getInstance().detectDisplayingNumber(e))}))}},{key:"initClearButtonOnClickListener",value:function(){var t=this,n=document.getElementById("clearButton");null===n||void 0===n||n.addEventListener("click",(function(){t.clearCanvas()}))}},{key:"mounted",value:function(){this.initCanvas(),this.initCardWidthListener(),this.initCanvasMouseEvents(),this.initSubmitButtonOnClickListener(),this.initClearButtonOnClickListener()}}],[{key:"updateCardSize",value:function(t){t&&(t.style.height=t.clientWidth+"px")}}]),e}(x.w3);X=V=z([(0,x.Ei)({components:{NeuralDescription:W,Card:M.Z,Error:Y.Z}})],X);var G=X;const $=(0,k.Z)(G,[["render",w],["__scopeId","data-v-8acceb7a"]]);var H=$}}]);
//# sourceMappingURL=62-legacy.26d1edbb.js.map