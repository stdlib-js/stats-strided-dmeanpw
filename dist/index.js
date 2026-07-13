"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=i(function(g,s){
var c=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function y(e,r,a,t){return e<=0?NaN:e===1||a===0?r[t]:c(e,r,a,t)/e}s.exports=y
});var q=i(function(h,v){
var f=require('@stdlib/strided-base-stride2offset/dist'),w=n();function j(e,r,a){return w(e,r,a,f(e,a))}v.exports=j
});var o=i(function(k,p){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),l=n();x(d,"ndarray",l);p.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=o(),u,m=_(R(__dirname,"./native.js"));E(m)?u=O:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
