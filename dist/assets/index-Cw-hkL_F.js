var Cg=Object.defineProperty;var Eg=(t,e,i)=>e in t?Cg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Xr=(t,e,i)=>Eg(t,typeof e!="symbol"?e+"":e,i);function zg(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function Mg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jh={exports:{}},pa={},Zh={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Tg=Symbol.for("react.portal"),_g=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),Lg=Symbol.for("react.profiler"),Rg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),Dg=Symbol.for("react.suspense"),Bg=Symbol.for("react.memo"),Ig=Symbol.for("react.lazy"),bd=Symbol.iterator;function Og(t){return t===null||typeof t!="object"?null:(t=bd&&t[bd]||t["@@iterator"],typeof t=="function"?t:null)}var ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tf=Object.assign,nf={};function Pn(t,e,i){this.props=t,this.context=e,this.refs=nf,this.updater=i||ef}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rf(){}rf.prototype=Pn.prototype;function tc(t,e,i){this.props=t,this.context=e,this.refs=nf,this.updater=i||ef}var ic=tc.prototype=new rf;ic.constructor=tc;tf(ic,Pn.prototype);ic.isPureReactComponent=!0;var yd=Array.isArray,sf=Object.prototype.hasOwnProperty,nc={current:null},af={key:!0,ref:!0,__self:!0,__source:!0};function lf(t,e,i){var n,r={},s=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)sf.call(e,n)&&!af.hasOwnProperty(n)&&(r[n]=e[n]);var c=arguments.length-2;if(c===1)r.children=i;else if(1<c){for(var o=Array(c),d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}if(t&&t.defaultProps)for(n in c=t.defaultProps,c)r[n]===void 0&&(r[n]=c[n]);return{$$typeof:Br,type:t,key:s,ref:l,props:r,_owner:nc.current}}function Fg(t,e){return{$$typeof:Br,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Br}function Vg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var wd=/\/+/g;function Va(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vg(""+t.key):e.toString(36)}function Ns(t,e,i,n,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Br:case Tg:l=!0}}if(l)return l=t,r=r(l),t=n===""?"."+Va(l,0):n,yd(r)?(i="",t!=null&&(i=t.replace(wd,"$&/")+"/"),Ns(r,e,i,"",function(d){return d})):r!=null&&(rc(r)&&(r=Fg(r,i+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(wd,"$&/")+"/")+t)),e.push(r)),1;if(l=0,n=n===""?".":n+":",yd(t))for(var c=0;c<t.length;c++){s=t[c];var o=n+Va(s,c);l+=Ns(s,e,i,o,r)}else if(o=Og(t),typeof o=="function")for(t=o.call(t),c=0;!(s=t.next()).done;)s=s.value,o=n+Va(s,c++),l+=Ns(s,e,i,o,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Qr(t,e,i){if(t==null)return t;var n=[],r=0;return Ns(t,n,"","",function(s){return e.call(i,s,r++)}),n}function Wg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ve={current:null},Ss={transition:null},Ug={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ss,ReactCurrentOwner:nc};function of(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Qr,forEach:function(t,e,i){Qr(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return Qr(t,function(){e++}),e},toArray:function(t){return Qr(t,function(e){return e})||[]},only:function(t){if(!rc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Pn;Y.Fragment=_g;Y.Profiler=Lg;Y.PureComponent=tc;Y.StrictMode=Pg;Y.Suspense=Dg;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ug;Y.act=of;Y.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=tf({},t.props),r=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=nc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(o in e)sf.call(e,o)&&!af.hasOwnProperty(o)&&(n[o]=e[o]===void 0&&c!==void 0?c[o]:e[o])}var o=arguments.length-2;if(o===1)n.children=i;else if(1<o){c=Array(o);for(var d=0;d<o;d++)c[d]=arguments[d+2];n.children=c}return{$$typeof:Br,type:t.type,key:r,ref:s,props:n,_owner:l}};Y.createContext=function(t){return t={$$typeof:Ag,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rg,_context:t},t.Consumer=t};Y.createElement=lf;Y.createFactory=function(t){var e=lf.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:$g,render:t}};Y.isValidElement=rc;Y.lazy=function(t){return{$$typeof:Ig,_payload:{_status:-1,_result:t},_init:Wg}};Y.memo=function(t,e){return{$$typeof:Bg,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Ss.transition;Ss.transition={};try{t()}finally{Ss.transition=e}};Y.unstable_act=of;Y.useCallback=function(t,e){return Ve.current.useCallback(t,e)};Y.useContext=function(t){return Ve.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return Ve.current.useDeferredValue(t)};Y.useEffect=function(t,e){return Ve.current.useEffect(t,e)};Y.useId=function(){return Ve.current.useId()};Y.useImperativeHandle=function(t,e,i){return Ve.current.useImperativeHandle(t,e,i)};Y.useInsertionEffect=function(t,e){return Ve.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return Ve.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return Ve.current.useMemo(t,e)};Y.useReducer=function(t,e,i){return Ve.current.useReducer(t,e,i)};Y.useRef=function(t){return Ve.current.useRef(t)};Y.useState=function(t){return Ve.current.useState(t)};Y.useSyncExternalStore=function(t,e,i){return Ve.current.useSyncExternalStore(t,e,i)};Y.useTransition=function(){return Ve.current.useTransition()};Y.version="18.3.1";Zh.exports=Y;var k=Zh.exports;const Si=Mg(k),qg=zg({__proto__:null,default:Si},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg=k,Kg=Symbol.for("react.element"),Xg=Symbol.for("react.fragment"),Qg=Object.prototype.hasOwnProperty,Yg=Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gg={key:!0,ref:!0,__self:!0,__source:!0};function cf(t,e,i){var n,r={},s=null,l=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)Qg.call(e,n)&&!Gg.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:Kg,type:t,key:s,ref:l,props:r,_owner:Yg.current}}pa.Fragment=Xg;pa.jsx=cf;pa.jsxs=cf;Jh.exports=pa;var a=Jh.exports,Il={},df={exports:{}},tt={},uf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,O){var W=A.length;A.push(O);e:for(;0<W;){var G=W-1>>>1,I=A[G];if(0<r(I,O))A[G]=O,A[W]=I,W=G;else break e}}function i(A){return A.length===0?null:A[0]}function n(A){if(A.length===0)return null;var O=A[0],W=A.pop();if(W!==O){A[0]=W;e:for(var G=0,I=A.length,$=I>>>1;G<$;){var E=2*(G+1)-1,L=A[E],N=E+1,q=A[N];if(0>r(L,W))N<I&&0>r(q,L)?(A[G]=q,A[N]=W,G=N):(A[G]=L,A[E]=W,G=E);else if(N<I&&0>r(q,W))A[G]=q,A[N]=W,G=N;else break e}}return O}function r(A,O){var W=A.sortIndex-O.sortIndex;return W!==0?W:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var o=[],d=[],u=1,h=null,f=3,g=!1,p=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(A){for(var O=i(d);O!==null;){if(O.callback===null)n(d);else if(O.startTime<=A)n(d),O.sortIndex=O.expirationTime,e(o,O);else break;O=i(d)}}function w(A){if(x=!1,b(A),!p)if(i(o)!==null)p=!0,Pe(j);else{var O=i(d);O!==null&&Be(w,O.startTime-A)}}function j(A,O){p=!1,x&&(x=!1,v(P),P=-1),g=!0;var W=f;try{for(b(O),h=i(o);h!==null&&(!(h.expirationTime>O)||A&&!V());){var G=h.callback;if(typeof G=="function"){h.callback=null,f=h.priorityLevel;var I=G(h.expirationTime<=O);O=t.unstable_now(),typeof I=="function"?h.callback=I:h===i(o)&&n(o),b(O)}else n(o);h=i(o)}if(h!==null)var $=!0;else{var E=i(d);E!==null&&Be(w,E.startTime-O),$=!1}return $}finally{h=null,f=W,g=!1}}var _=!1,C=null,P=-1,U=5,R=-1;function V(){return!(t.unstable_now()-R<U)}function S(){if(C!==null){var A=t.unstable_now();R=A;var O=!0;try{O=C(!0,A)}finally{O?Q():(_=!1,C=null)}}else _=!1}var Q;if(typeof m=="function")Q=function(){m(S)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,De=ke.port2;ke.port1.onmessage=S,Q=function(){De.postMessage(null)}}else Q=function(){y(S,0)};function Pe(A){C=A,_||(_=!0,Q())}function Be(A,O){P=y(function(){A(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){p||g||(p=!0,Pe(j))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return i(o)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var W=f;f=O;try{return A()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=f;f=A;try{return O()}finally{f=W}},t.unstable_scheduleCallback=function(A,O,W){var G=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?G+W:G):W=G,A){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=W+I,A={id:u++,callback:O,priorityLevel:A,startTime:W,expirationTime:I,sortIndex:-1},W>G?(A.sortIndex=W,e(d,A),i(o)===null&&A===i(d)&&(x?(v(P),P=-1):x=!0,Be(w,W-G))):(A.sortIndex=I,e(o,A),p||g||(p=!0,Pe(j))),A},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(A){var O=f;return function(){var W=f;f=O;try{return A.apply(this,arguments)}finally{f=W}}}})(hf);uf.exports=hf;var Jg=uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg=k,et=Jg;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ff=new Set,hr={};function Ui(t,e){wn(t,e),wn(t+"Capture",e)}function wn(t,e){for(hr[t]=e,t=0;t<e.length;t++)ff.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,e0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kd={},jd={};function t0(t){return Ol.call(jd,t)?!0:Ol.call(kd,t)?!1:e0.test(t)?jd[t]=!0:(kd[t]=!0,!1)}function i0(t,e,i,n){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n0(t,e,i,n){if(e===null||typeof e>"u"||i0(t,e,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,i,n,r,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function ac(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sc,ac);_e[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sc,ac);_e[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sc,ac);_e[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function lc(t,e,i,n){var r=_e.hasOwnProperty(e)?_e[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n0(e,i,r,n)&&(i=null),n||r===null?t0(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):r.mustUseProperty?t[r.propertyName]=i===null?r.type===3?!1:"":i:(e=r.attributeName,n=r.attributeNamespace,i===null?t.removeAttribute(e):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,n?t.setAttributeNS(n,e,i):t.setAttribute(e,i))))}var Vt=Zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),mf=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),dc=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),gf=Symbol.for("react.offscreen"),Nd=Symbol.iterator;function In(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Wa;function Xn(t){if(Wa===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Wa=e&&e[1]||""}return`
`+Wa+t}var Ua=!1;function qa(t,e){if(!t||Ua)return"";Ua=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var n=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){n=d}t.call(e.prototype)}else{try{throw Error()}catch(d){n=d}t()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=n.stack.split(`
`),l=r.length-1,c=s.length-1;1<=l&&0<=c&&r[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(r[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||r[l]!==s[c]){var o=`
`+r[l].replace(" at new "," at ");return t.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",t.displayName)),o}while(1<=l&&0<=c);break}}}finally{Ua=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Xn(t):""}function r0(t){switch(t.tag){case 5:return Xn(t.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 2:case 15:return t=qa(t.type,!1),t;case 11:return t=qa(t.type.render,!1),t;case 1:return t=qa(t.type,!0),t;default:return""}}function Ul(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case en:return"Fragment";case Zi:return"Portal";case Fl:return"Profiler";case oc:return"StrictMode";case Vl:return"Suspense";case Wl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mf:return(t.displayName||"Context")+".Consumer";case pf:return(t._context.displayName||"Context")+".Provider";case cc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dc:return e=t.displayName||null,e!==null?e:Ul(t.type)||"Memo";case Kt:e=t._payload,t=t._init;try{return Ul(t(e))}catch{}}return null}function s0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(e);case 8:return e===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a0(t){var e=xf(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gr(t){t._valueTracker||(t._valueTracker=a0(t))}function vf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=xf(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function Is(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ql(t,e){var i=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function Sd(t,e){var i=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;i=di(e.value!=null?e.value:i),t._wrapperState={initialChecked:n,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bf(t,e){e=e.checked,e!=null&&lc(t,"checked",e,!1)}function Hl(t,e){bf(t,e);var i=di(e.value),n=e.type;if(i!=null)n==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kl(t,e.type,i):e.hasOwnProperty("defaultValue")&&Kl(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cd(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Kl(t,e,i){(e!=="number"||Is(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Qn=Array.isArray;function pn(t,e,i,n){if(t=t.options,e){e={};for(var r=0;r<i.length;r++)e["$"+i[r]]=!0;for(i=0;i<t.length;i++)r=e.hasOwnProperty("$"+t[i].value),t[i].selected!==r&&(t[i].selected=r),r&&n&&(t[i].defaultSelected=!0)}else{for(i=""+di(i),e=null,r=0;r<t.length;r++){if(t[r].value===i){t[r].selected=!0,n&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ed(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(T(92));if(Qn(i)){if(1<i.length)throw Error(T(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:di(i)}}function yf(t,e){var i=di(e.value),n=di(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),n!=null&&(t.defaultValue=""+n)}function zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jr,kf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,n,r){MSApp.execUnsafeLocalFunction(function(){return t(e,i,n,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l0=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(t){l0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zn[e]=Zn[t]})});function jf(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||Zn.hasOwnProperty(t)&&Zn[t]?(""+e).trim():e+"px"}function Nf(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var n=i.indexOf("--")===0,r=jf(i,e[i],n);i==="float"&&(i="cssFloat"),n?t.setProperty(i,r):t[i]=r}}var o0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(t,e){if(e){if(o0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Gl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zl=null,mn=null,gn=null;function Md(t){if(t=Fr(t)){if(typeof Zl!="function")throw Error(T(280));var e=t.stateNode;e&&(e=ba(e),Zl(t.stateNode,t.type,e))}}function Sf(t){mn?gn?gn.push(t):gn=[t]:mn=t}function Cf(){if(mn){var t=mn,e=gn;if(gn=mn=null,Md(t),e)for(t=0;t<e.length;t++)Md(e[t])}}function Ef(t,e){return t(e)}function zf(){}var Ha=!1;function Mf(t,e,i){if(Ha)return t(e,i);Ha=!0;try{return Ef(t,e,i)}finally{Ha=!1,(mn!==null||gn!==null)&&(zf(),Cf())}}function pr(t,e){var i=t.stateNode;if(i===null)return null;var n=ba(i);if(n===null)return null;i=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(T(231,e,typeof i));return i}var eo=!1;if(Bt)try{var On={};Object.defineProperty(On,"passive",{get:function(){eo=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{eo=!1}function c0(t,e,i,n,r,s,l,c,o){var d=Array.prototype.slice.call(arguments,3);try{e.apply(i,d)}catch(u){this.onError(u)}}var er=!1,Os=null,Fs=!1,to=null,d0={onError:function(t){er=!0,Os=t}};function u0(t,e,i,n,r,s,l,c,o){er=!1,Os=null,c0.apply(d0,arguments)}function h0(t,e,i,n,r,s,l,c,o){if(u0.apply(this,arguments),er){if(er){var d=Os;er=!1,Os=null}else throw Error(T(198));Fs||(Fs=!0,to=d)}}function qi(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function Tf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Td(t){if(qi(t)!==t)throw Error(T(188))}function f0(t){var e=t.alternate;if(!e){if(e=qi(t),e===null)throw Error(T(188));return e!==t?null:t}for(var i=t,n=e;;){var r=i.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===i)return Td(r),t;if(s===n)return Td(r),e;s=s.sibling}throw Error(T(188))}if(i.return!==n.return)i=r,n=s;else{for(var l=!1,c=r.child;c;){if(c===i){l=!0,i=r,n=s;break}if(c===n){l=!0,n=r,i=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===i){l=!0,i=s,n=r;break}if(c===n){l=!0,n=s,i=r;break}c=c.sibling}if(!l)throw Error(T(189))}}if(i.alternate!==n)throw Error(T(190))}if(i.tag!==3)throw Error(T(188));return i.stateNode.current===i?t:e}function _f(t){return t=f0(t),t!==null?Pf(t):null}function Pf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pf(t);if(e!==null)return e;t=t.sibling}return null}var Lf=et.unstable_scheduleCallback,_d=et.unstable_cancelCallback,p0=et.unstable_shouldYield,m0=et.unstable_requestPaint,ve=et.unstable_now,g0=et.unstable_getCurrentPriorityLevel,hc=et.unstable_ImmediatePriority,Rf=et.unstable_UserBlockingPriority,Vs=et.unstable_NormalPriority,x0=et.unstable_LowPriority,Af=et.unstable_IdlePriority,ma=null,zt=null;function v0(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ma,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:w0,b0=Math.log,y0=Math.LN2;function w0(t){return t>>>=0,t===0?32:31-(b0(t)/y0|0)|0}var Zr=64,es=4194304;function Yn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ws(t,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes,l=i&268435455;if(l!==0){var c=l&~r;c!==0?n=Yn(c):(s&=l,s!==0&&(n=Yn(s)))}else l=i&~r,l!==0?n=Yn(l):s!==0&&(n=Yn(s));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(n&4&&(n|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)i=31-xt(e),r=1<<i,n|=t[i],e&=~r;return n}function k0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j0(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-xt(s),c=1<<l,o=r[l];o===-1?(!(c&i)||c&n)&&(r[l]=k0(c,e)):o<=e&&(t.expiredLanes|=c),s&=~c}}function io(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $f(){var t=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),t}function Ka(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Ir(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=i}function N0(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<i;){var r=31-xt(i),s=1<<r;e[r]=0,n[r]=-1,t[r]=-1,i&=~s}}function fc(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-xt(i),r=1<<n;r&e|t[n]&e&&(t[n]|=e),i&=~r}}var se=0;function Df(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bf,pc,If,Of,Ff,no=!1,ts=[],ei=null,ti=null,ii=null,mr=new Map,gr=new Map,Qt=[],S0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(t,e){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":mr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(e.pointerId)}}function Fn(t,e,i,n,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fr(e),e!==null&&pc(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function C0(t,e,i,n,r){switch(e){case"focusin":return ei=Fn(ei,t,e,i,n,r),!0;case"dragenter":return ti=Fn(ti,t,e,i,n,r),!0;case"mouseover":return ii=Fn(ii,t,e,i,n,r),!0;case"pointerover":var s=r.pointerId;return mr.set(s,Fn(mr.get(s)||null,t,e,i,n,r)),!0;case"gotpointercapture":return s=r.pointerId,gr.set(s,Fn(gr.get(s)||null,t,e,i,n,r)),!0}return!1}function Vf(t){var e=Ci(t.target);if(e!==null){var i=qi(e);if(i!==null){if(e=i.tag,e===13){if(e=Tf(i),e!==null){t.blockedOn=e,Ff(t.priority,function(){If(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=ro(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);Jl=n,i.target.dispatchEvent(n),Jl=null}else return e=Fr(i),e!==null&&pc(e),t.blockedOn=i,!1;e.shift()}return!0}function Ld(t,e,i){Cs(t)&&i.delete(e)}function E0(){no=!1,ei!==null&&Cs(ei)&&(ei=null),ti!==null&&Cs(ti)&&(ti=null),ii!==null&&Cs(ii)&&(ii=null),mr.forEach(Ld),gr.forEach(Ld)}function Vn(t,e){t.blockedOn===e&&(t.blockedOn=null,no||(no=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,E0)))}function xr(t){function e(r){return Vn(r,t)}if(0<ts.length){Vn(ts[0],t);for(var i=1;i<ts.length;i++){var n=ts[i];n.blockedOn===t&&(n.blockedOn=null)}}for(ei!==null&&Vn(ei,t),ti!==null&&Vn(ti,t),ii!==null&&Vn(ii,t),mr.forEach(e),gr.forEach(e),i=0;i<Qt.length;i++)n=Qt[i],n.blockedOn===t&&(n.blockedOn=null);for(;0<Qt.length&&(i=Qt[0],i.blockedOn===null);)Vf(i),i.blockedOn===null&&Qt.shift()}var xn=Vt.ReactCurrentBatchConfig,Us=!0;function z0(t,e,i,n){var r=se,s=xn.transition;xn.transition=null;try{se=1,mc(t,e,i,n)}finally{se=r,xn.transition=s}}function M0(t,e,i,n){var r=se,s=xn.transition;xn.transition=null;try{se=4,mc(t,e,i,n)}finally{se=r,xn.transition=s}}function mc(t,e,i,n){if(Us){var r=ro(t,e,i,n);if(r===null)nl(t,e,n,qs,i),Pd(t,n);else if(C0(r,t,e,i,n))n.stopPropagation();else if(Pd(t,n),e&4&&-1<S0.indexOf(t)){for(;r!==null;){var s=Fr(r);if(s!==null&&Bf(s),s=ro(t,e,i,n),s===null&&nl(t,e,n,qs,i),s===r)break;r=s}r!==null&&n.stopPropagation()}else nl(t,e,n,null,i)}}var qs=null;function ro(t,e,i,n){if(qs=null,t=uc(n),t=Ci(t),t!==null)if(e=qi(t),e===null)t=null;else if(i=e.tag,i===13){if(t=Tf(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qs=t,null}function Wf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g0()){case hc:return 1;case Rf:return 4;case Vs:case x0:return 16;case Af:return 536870912;default:return 16}default:return 16}}var Gt=null,gc=null,Es=null;function Uf(){if(Es)return Es;var t,e=gc,i=e.length,n,r="value"in Gt?Gt.value:Gt.textContent,s=r.length;for(t=0;t<i&&e[t]===r[t];t++);var l=i-t;for(n=1;n<=l&&e[i-n]===r[s-n];n++);return Es=r.slice(t,1<n?1-n:void 0)}function zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function is(){return!0}function Rd(){return!1}function it(t){function e(i,n,r,s,l){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(i=t[c],this[c]=i?i(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?is:Rd,this.isPropagationStopped=Rd,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=is)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=is)},persist:function(){},isPersistent:is}),e}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=it(Ln),Or=me({},Ln,{view:0,detail:0}),T0=it(Or),Xa,Qa,Wn,ga=me({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wn&&(Wn&&t.type==="mousemove"?(Xa=t.screenX-Wn.screenX,Qa=t.screenY-Wn.screenY):Qa=Xa=0,Wn=t),Xa)},movementY:function(t){return"movementY"in t?t.movementY:Qa}}),Ad=it(ga),_0=me({},ga,{dataTransfer:0}),P0=it(_0),L0=me({},Or,{relatedTarget:0}),Ya=it(L0),R0=me({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=it(R0),$0=me({},Ln,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D0=it($0),B0=me({},Ln,{data:0}),$d=it(B0),I0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F0[t])?!!e[t]:!1}function vc(){return V0}var W0=me({},Or,{key:function(t){if(t.key){var e=I0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(t){return t.type==="keypress"?zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U0=it(W0),q0=me({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=it(q0),H0=me({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),K0=it(H0),X0=me({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=it(X0),Y0=me({},ga,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=it(Y0),J0=[9,13,27,32],bc=Bt&&"CompositionEvent"in window,tr=null;Bt&&"documentMode"in document&&(tr=document.documentMode);var Z0=Bt&&"TextEvent"in window&&!tr,qf=Bt&&(!bc||tr&&8<tr&&11>=tr),Bd=" ",Id=!1;function Hf(t,e){switch(t){case"keyup":return J0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tn=!1;function ex(t,e){switch(t){case"compositionend":return Kf(e);case"keypress":return e.which!==32?null:(Id=!0,Bd);case"textInput":return t=e.data,t===Bd&&Id?null:t;default:return null}}function tx(t,e){if(tn)return t==="compositionend"||!bc&&Hf(t,e)?(t=Uf(),Es=gc=Gt=null,tn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qf&&e.locale!=="ko"?null:e.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ix[t.type]:e==="textarea"}function Xf(t,e,i,n){Sf(n),e=Hs(e,"onChange"),0<e.length&&(i=new xc("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var ir=null,vr=null;function nx(t){sp(t,0)}function xa(t){var e=sn(t);if(vf(e))return t}function rx(t,e){if(t==="change")return e}var Qf=!1;if(Bt){var Ga;if(Bt){var Ja="oninput"in document;if(!Ja){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),Ja=typeof Fd.oninput=="function"}Ga=Ja}else Ga=!1;Qf=Ga&&(!document.documentMode||9<document.documentMode)}function Vd(){ir&&(ir.detachEvent("onpropertychange",Yf),vr=ir=null)}function Yf(t){if(t.propertyName==="value"&&xa(vr)){var e=[];Xf(e,vr,t,uc(t)),Mf(nx,e)}}function sx(t,e,i){t==="focusin"?(Vd(),ir=e,vr=i,ir.attachEvent("onpropertychange",Yf)):t==="focusout"&&Vd()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xa(vr)}function lx(t,e){if(t==="click")return xa(e)}function ox(t,e){if(t==="input"||t==="change")return xa(e)}function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:cx;function br(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!Ol.call(e,r)||!bt(t[r],e[r]))return!1}return!0}function Wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,e){var i=Wd(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Wd(i)}}function Gf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jf(){for(var t=window,e=Is();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Is(t.document)}return e}function yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dx(t){var e=Jf(),i=t.focusedElem,n=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Gf(i.ownerDocument.documentElement,i)){if(n!==null&&yc(i)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=i.textContent.length,s=Math.min(n.start,r);n=n.end===void 0?s:Math.min(n.end,r),!t.extend&&s>n&&(r=n,n=s,s=r),r=Ud(i,s);var l=Ud(i,n);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ux=Bt&&"documentMode"in document&&11>=document.documentMode,nn=null,so=null,nr=null,ao=!1;function qd(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ao||nn==null||nn!==Is(n)||(n=nn,"selectionStart"in n&&yc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),nr&&br(nr,n)||(nr=n,n=Hs(so,"onSelect"),0<n.length&&(e=new xc("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=nn)))}function ns(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var rn={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},Za={},Zf={};Bt&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function va(t){if(Za[t])return Za[t];if(!rn[t])return t;var e=rn[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Zf)return Za[t]=e[i];return t}var ep=va("animationend"),tp=va("animationiteration"),ip=va("animationstart"),np=va("transitionend"),rp=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){rp.set(t,e),Ui(e,[t])}for(var el=0;el<Hd.length;el++){var tl=Hd[el],hx=tl.toLowerCase(),fx=tl[0].toUpperCase()+tl.slice(1);fi(hx,"on"+fx)}fi(ep,"onAnimationEnd");fi(tp,"onAnimationIteration");fi(ip,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(np,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));function Kd(t,e,i){var n=t.type||"unknown-event";t.currentTarget=i,h0(n,e,void 0,t),t.currentTarget=null}function sp(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],r=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var l=n.length-1;0<=l;l--){var c=n[l],o=c.instance,d=c.currentTarget;if(c=c.listener,o!==s&&r.isPropagationStopped())break e;Kd(r,c,d),s=o}else for(l=0;l<n.length;l++){if(c=n[l],o=c.instance,d=c.currentTarget,c=c.listener,o!==s&&r.isPropagationStopped())break e;Kd(r,c,d),s=o}}}if(Fs)throw t=to,Fs=!1,to=null,t}function le(t,e){var i=e[ho];i===void 0&&(i=e[ho]=new Set);var n=t+"__bubble";i.has(n)||(ap(e,t,2,!1),i.add(n))}function il(t,e,i){var n=0;e&&(n|=4),ap(i,t,n,e)}var rs="_reactListening"+Math.random().toString(36).slice(2);function yr(t){if(!t[rs]){t[rs]=!0,ff.forEach(function(i){i!=="selectionchange"&&(px.has(i)||il(i,!1,t),il(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rs]||(e[rs]=!0,il("selectionchange",!1,e))}}function ap(t,e,i,n){switch(Wf(e)){case 1:var r=z0;break;case 4:r=M0;break;default:r=mc}i=r.bind(null,e,i,t),r=void 0,!eo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?t.addEventListener(e,i,{capture:!0,passive:r}):t.addEventListener(e,i,!0):r!==void 0?t.addEventListener(e,i,{passive:r}):t.addEventListener(e,i,!1)}function nl(t,e,i,n,r){var s=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var c=n.stateNode.containerInfo;if(c===r||c.nodeType===8&&c.parentNode===r)break;if(l===4)for(l=n.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;l=l.return}for(;c!==null;){if(l=Ci(c),l===null)return;if(o=l.tag,o===5||o===6){n=s=l;continue e}c=c.parentNode}}n=n.return}Mf(function(){var d=s,u=uc(i),h=[];e:{var f=rp.get(t);if(f!==void 0){var g=xc,p=t;switch(t){case"keypress":if(zs(i)===0)break e;case"keydown":case"keyup":g=U0;break;case"focusin":p="focus",g=Ya;break;case"focusout":p="blur",g=Ya;break;case"beforeblur":case"afterblur":g=Ya;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=K0;break;case ep:case tp:case ip:g=A0;break;case np:g=Q0;break;case"scroll":g=T0;break;case"wheel":g=G0;break;case"copy":case"cut":case"paste":g=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Dd}var x=(e&4)!==0,y=!x&&t==="scroll",v=x?f!==null?f+"Capture":null:f;x=[];for(var m=d,b;m!==null;){b=m;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,v!==null&&(w=pr(m,v),w!=null&&x.push(wr(m,w,b)))),y)break;m=m.return}0<x.length&&(f=new g(f,p,null,i,u),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&i!==Jl&&(p=i.relatedTarget||i.fromElement)&&(Ci(p)||p[It]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(p=i.relatedTarget||i.toElement,g=d,p=p?Ci(p):null,p!==null&&(y=qi(p),p!==y||p.tag!==5&&p.tag!==6)&&(p=null)):(g=null,p=d),g!==p)){if(x=Ad,w="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Dd,w="onPointerLeave",v="onPointerEnter",m="pointer"),y=g==null?f:sn(g),b=p==null?f:sn(p),f=new x(w,m+"leave",g,i,u),f.target=y,f.relatedTarget=b,w=null,Ci(u)===d&&(x=new x(v,m+"enter",p,i,u),x.target=b,x.relatedTarget=y,w=x),y=w,g&&p)t:{for(x=g,v=p,m=0,b=x;b;b=Xi(b))m++;for(b=0,w=v;w;w=Xi(w))b++;for(;0<m-b;)x=Xi(x),m--;for(;0<b-m;)v=Xi(v),b--;for(;m--;){if(x===v||v!==null&&x===v.alternate)break t;x=Xi(x),v=Xi(v)}x=null}else x=null;g!==null&&Xd(h,f,g,x,!1),p!==null&&y!==null&&Xd(h,y,p,x,!0)}}e:{if(f=d?sn(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var j=rx;else if(Od(f))if(Qf)j=ox;else{j=ax;var _=sx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=lx);if(j&&(j=j(t,d))){Xf(h,j,i,u);break e}_&&_(t,f,d),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Kl(f,"number",f.value)}switch(_=d?sn(d):window,t){case"focusin":(Od(_)||_.contentEditable==="true")&&(nn=_,so=d,nr=null);break;case"focusout":nr=so=nn=null;break;case"mousedown":ao=!0;break;case"contextmenu":case"mouseup":case"dragend":ao=!1,qd(h,i,u);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":qd(h,i,u)}var C;if(bc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else tn?Hf(t,i)&&(P="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(P="onCompositionStart");P&&(qf&&i.locale!=="ko"&&(tn||P!=="onCompositionStart"?P==="onCompositionEnd"&&tn&&(C=Uf()):(Gt=u,gc="value"in Gt?Gt.value:Gt.textContent,tn=!0)),_=Hs(d,P),0<_.length&&(P=new $d(P,t,null,i,u),h.push({event:P,listeners:_}),C?P.data=C:(C=Kf(i),C!==null&&(P.data=C)))),(C=Z0?ex(t,i):tx(t,i))&&(d=Hs(d,"onBeforeInput"),0<d.length&&(u=new $d("onBeforeInput","beforeinput",null,i,u),h.push({event:u,listeners:d}),u.data=C))}sp(h,e)})}function wr(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Hs(t,e){for(var i=e+"Capture",n=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pr(t,i),s!=null&&n.unshift(wr(t,s,r)),s=pr(t,e),s!=null&&n.push(wr(t,s,r))),t=t.return}return n}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xd(t,e,i,n,r){for(var s=e._reactName,l=[];i!==null&&i!==n;){var c=i,o=c.alternate,d=c.stateNode;if(o!==null&&o===n)break;c.tag===5&&d!==null&&(c=d,r?(o=pr(i,s),o!=null&&l.unshift(wr(i,o,c))):r||(o=pr(i,s),o!=null&&l.push(wr(i,o,c)))),i=i.return}l.length!==0&&t.push({event:e,listeners:l})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Qd(t){return(typeof t=="string"?t:""+t).replace(mx,`
`).replace(gx,"")}function ss(t,e,i){if(e=Qd(e),Qd(t)!==e&&i)throw Error(T(425))}function Ks(){}var lo=null,oo=null;function co(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uo=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(t){return Yd.resolve(null).then(t).catch(bx)}:uo;function bx(t){setTimeout(function(){throw t})}function rl(t,e){var i=e,n=0;do{var r=i.nextSibling;if(t.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(n===0){t.removeChild(r),xr(e);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=r}while(i);xr(e)}function ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Rn,kr="__reactProps$"+Rn,It="__reactContainer$"+Rn,ho="__reactEvents$"+Rn,yx="__reactListeners$"+Rn,wx="__reactHandles$"+Rn;function Ci(t){var e=t[Ct];if(e)return e;for(var i=t.parentNode;i;){if(e=i[It]||i[Ct]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Gd(t);t!==null;){if(i=t[Ct])return i;t=Gd(t)}return e}t=i,i=t.parentNode}return null}function Fr(t){return t=t[Ct]||t[It],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function sn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function ba(t){return t[kr]||null}var fo=[],an=-1;function pi(t){return{current:t}}function ce(t){0>an||(t.current=fo[an],fo[an]=null,an--)}function ae(t,e){an++,fo[an]=t.current,t.current=e}var ui={},$e=pi(ui),He=pi(!1),Li=ui;function kn(t,e){var i=t.type.contextTypes;if(!i)return ui;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in i)r[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ke(t){return t=t.childContextTypes,t!=null}function Xs(){ce(He),ce($e)}function Jd(t,e,i){if($e.current!==ui)throw Error(T(168));ae($e,e),ae(He,i)}function lp(t,e,i){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(T(108,s0(t)||"Unknown",r));return me({},i,n)}function Qs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ui,Li=$e.current,ae($e,t),ae(He,He.current),!0}function Zd(t,e,i){var n=t.stateNode;if(!n)throw Error(T(169));i?(t=lp(t,e,Li),n.__reactInternalMemoizedMergedChildContext=t,ce(He),ce($e),ae($e,t)):ce(He),ae(He,i)}var Pt=null,ya=!1,sl=!1;function op(t){Pt===null?Pt=[t]:Pt.push(t)}function kx(t){ya=!0,op(t)}function mi(){if(!sl&&Pt!==null){sl=!0;var t=0,e=se;try{var i=Pt;for(se=1;t<i.length;t++){var n=i[t];do n=n(!0);while(n!==null)}Pt=null,ya=!1}catch(r){throw Pt!==null&&(Pt=Pt.slice(t+1)),Lf(hc,mi),r}finally{se=e,sl=!1}}return null}var ln=[],on=0,Ys=null,Gs=0,at=[],lt=0,Ri=null,Lt=1,Rt="";function ji(t,e){ln[on++]=Gs,ln[on++]=Ys,Ys=t,Gs=e}function cp(t,e,i){at[lt++]=Lt,at[lt++]=Rt,at[lt++]=Ri,Ri=t;var n=Lt;t=Rt;var r=32-xt(n)-1;n&=~(1<<r),i+=1;var s=32-xt(e)+r;if(30<s){var l=r-r%5;s=(n&(1<<l)-1).toString(32),n>>=l,r-=l,Lt=1<<32-xt(e)+r|i<<r|n,Rt=s+t}else Lt=1<<s|i<<r|n,Rt=t}function wc(t){t.return!==null&&(ji(t,1),cp(t,1,0))}function kc(t){for(;t===Ys;)Ys=ln[--on],ln[on]=null,Gs=ln[--on],ln[on]=null;for(;t===Ri;)Ri=at[--lt],at[lt]=null,Rt=at[--lt],at[lt]=null,Lt=at[--lt],at[lt]=null}var Ze=null,Je=null,ue=!1,gt=null;function dp(t,e){var i=ot(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function eu(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=Ri!==null?{id:Lt,overflow:Rt}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=ot(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Ze=t,Je=null,!0):!1;default:return!1}}function po(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mo(t){if(ue){var e=Je;if(e){var i=e;if(!eu(t,e)){if(po(t))throw Error(T(418));e=ni(i.nextSibling);var n=Ze;e&&eu(t,e)?dp(n,i):(t.flags=t.flags&-4097|2,ue=!1,Ze=t)}}else{if(po(t))throw Error(T(418));t.flags=t.flags&-4097|2,ue=!1,Ze=t}}}function tu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function as(t){if(t!==Ze)return!1;if(!ue)return tu(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!co(t.type,t.memoizedProps)),e&&(e=Je)){if(po(t))throw up(),Error(T(418));for(;e;)dp(t,e),e=ni(e.nextSibling)}if(tu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){Je=ni(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?ni(t.stateNode.nextSibling):null;return!0}function up(){for(var t=Je;t;)t=ni(t.nextSibling)}function jn(){Je=Ze=null,ue=!1}function jc(t){gt===null?gt=[t]:gt.push(t)}var jx=Vt.ReactCurrentBatchConfig;function Un(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(T(309));var n=i.stateNode}if(!n)throw Error(T(147,t));var r=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var c=r.refs;l===null?delete c[s]:c[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!i._owner)throw Error(T(290,t))}return t}function ls(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iu(t){var e=t._init;return e(t._payload)}function hp(t){function e(v,m){if(t){var b=v.deletions;b===null?(v.deletions=[m],v.flags|=16):b.push(m)}}function i(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function n(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function r(v,m){return v=li(v,m),v.index=0,v.sibling=null,v}function s(v,m,b){return v.index=b,t?(b=v.alternate,b!==null?(b=b.index,b<m?(v.flags|=2,m):b):(v.flags|=2,m)):(v.flags|=1048576,m)}function l(v){return t&&v.alternate===null&&(v.flags|=2),v}function c(v,m,b,w){return m===null||m.tag!==6?(m=hl(b,v.mode,w),m.return=v,m):(m=r(m,b),m.return=v,m)}function o(v,m,b,w){var j=b.type;return j===en?u(v,m,b.props.children,w,b.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Kt&&iu(j)===m.type)?(w=r(m,b.props),w.ref=Un(v,m,b),w.return=v,w):(w=As(b.type,b.key,b.props,null,v.mode,w),w.ref=Un(v,m,b),w.return=v,w)}function d(v,m,b,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=fl(b,v.mode,w),m.return=v,m):(m=r(m,b.children||[]),m.return=v,m)}function u(v,m,b,w,j){return m===null||m.tag!==7?(m=Ti(b,v.mode,w,j),m.return=v,m):(m=r(m,b),m.return=v,m)}function h(v,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=hl(""+m,v.mode,b),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yr:return b=As(m.type,m.key,m.props,null,v.mode,b),b.ref=Un(v,null,m),b.return=v,b;case Zi:return m=fl(m,v.mode,b),m.return=v,m;case Kt:var w=m._init;return h(v,w(m._payload),b)}if(Qn(m)||In(m))return m=Ti(m,v.mode,b,null),m.return=v,m;ls(v,m)}return null}function f(v,m,b,w){var j=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return j!==null?null:c(v,m,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Yr:return b.key===j?o(v,m,b,w):null;case Zi:return b.key===j?d(v,m,b,w):null;case Kt:return j=b._init,f(v,m,j(b._payload),w)}if(Qn(b)||In(b))return j!==null?null:u(v,m,b,w,null);ls(v,b)}return null}function g(v,m,b,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(b)||null,c(m,v,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yr:return v=v.get(w.key===null?b:w.key)||null,o(m,v,w,j);case Zi:return v=v.get(w.key===null?b:w.key)||null,d(m,v,w,j);case Kt:var _=w._init;return g(v,m,b,_(w._payload),j)}if(Qn(w)||In(w))return v=v.get(b)||null,u(m,v,w,j,null);ls(m,w)}return null}function p(v,m,b,w){for(var j=null,_=null,C=m,P=m=0,U=null;C!==null&&P<b.length;P++){C.index>P?(U=C,C=null):U=C.sibling;var R=f(v,C,b[P],w);if(R===null){C===null&&(C=U);break}t&&C&&R.alternate===null&&e(v,C),m=s(R,m,P),_===null?j=R:_.sibling=R,_=R,C=U}if(P===b.length)return i(v,C),ue&&ji(v,P),j;if(C===null){for(;P<b.length;P++)C=h(v,b[P],w),C!==null&&(m=s(C,m,P),_===null?j=C:_.sibling=C,_=C);return ue&&ji(v,P),j}for(C=n(v,C);P<b.length;P++)U=g(C,v,P,b[P],w),U!==null&&(t&&U.alternate!==null&&C.delete(U.key===null?P:U.key),m=s(U,m,P),_===null?j=U:_.sibling=U,_=U);return t&&C.forEach(function(V){return e(v,V)}),ue&&ji(v,P),j}function x(v,m,b,w){var j=In(b);if(typeof j!="function")throw Error(T(150));if(b=j.call(b),b==null)throw Error(T(151));for(var _=j=null,C=m,P=m=0,U=null,R=b.next();C!==null&&!R.done;P++,R=b.next()){C.index>P?(U=C,C=null):U=C.sibling;var V=f(v,C,R.value,w);if(V===null){C===null&&(C=U);break}t&&C&&V.alternate===null&&e(v,C),m=s(V,m,P),_===null?j=V:_.sibling=V,_=V,C=U}if(R.done)return i(v,C),ue&&ji(v,P),j;if(C===null){for(;!R.done;P++,R=b.next())R=h(v,R.value,w),R!==null&&(m=s(R,m,P),_===null?j=R:_.sibling=R,_=R);return ue&&ji(v,P),j}for(C=n(v,C);!R.done;P++,R=b.next())R=g(C,v,P,R.value,w),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?P:R.key),m=s(R,m,P),_===null?j=R:_.sibling=R,_=R);return t&&C.forEach(function(S){return e(v,S)}),ue&&ji(v,P),j}function y(v,m,b,w){if(typeof b=="object"&&b!==null&&b.type===en&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Yr:e:{for(var j=b.key,_=m;_!==null;){if(_.key===j){if(j=b.type,j===en){if(_.tag===7){i(v,_.sibling),m=r(_,b.props.children),m.return=v,v=m;break e}}else if(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Kt&&iu(j)===_.type){i(v,_.sibling),m=r(_,b.props),m.ref=Un(v,_,b),m.return=v,v=m;break e}i(v,_);break}else e(v,_);_=_.sibling}b.type===en?(m=Ti(b.props.children,v.mode,w,b.key),m.return=v,v=m):(w=As(b.type,b.key,b.props,null,v.mode,w),w.ref=Un(v,m,b),w.return=v,v=w)}return l(v);case Zi:e:{for(_=b.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){i(v,m.sibling),m=r(m,b.children||[]),m.return=v,v=m;break e}else{i(v,m);break}else e(v,m);m=m.sibling}m=fl(b,v.mode,w),m.return=v,v=m}return l(v);case Kt:return _=b._init,y(v,m,_(b._payload),w)}if(Qn(b))return p(v,m,b,w);if(In(b))return x(v,m,b,w);ls(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(i(v,m.sibling),m=r(m,b),m.return=v,v=m):(i(v,m),m=hl(b,v.mode,w),m.return=v,v=m),l(v)):i(v,m)}return y}var Nn=hp(!0),fp=hp(!1),Js=pi(null),Zs=null,cn=null,Nc=null;function Sc(){Nc=cn=Zs=null}function Cc(t){var e=Js.current;ce(Js),t._currentValue=e}function go(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function vn(t,e){Zs=t,Nc=cn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qe=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(Nc!==t)if(t={context:t,memoizedValue:e,next:null},cn===null){if(Zs===null)throw Error(T(308));cn=t,Zs.dependencies={lanes:0,firstContext:t}}else cn=cn.next=t;return e}var Ei=null;function Ec(t){Ei===null?Ei=[t]:Ei.push(t)}function pp(t,e,i,n){var r=e.interleaved;return r===null?(i.next=i,Ec(e)):(i.next=r.next,r.next=i),e.interleaved=i,Ot(t,n)}function Ot(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Xt=!1;function zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ri(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ee&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,Ot(t,i)}return r=n.interleaved,r===null?(e.next=e,Ec(n)):(e.next=r.next,r.next=e),n.interleaved=e,Ot(t,i)}function Ms(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,fc(t,i)}}function nu(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?r=s=l:s=s.next=l,i=i.next}while(i!==null);s===null?r=s=e:s=s.next=e}else r=s=e;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function ea(t,e,i,n){var r=t.updateQueue;Xt=!1;var s=r.firstBaseUpdate,l=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var o=c,d=o.next;o.next=null,l===null?s=d:l.next=d,l=o;var u=t.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==l&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=o))}if(s!==null){var h=r.baseState;l=0,u=d=o=null,c=s;do{var f=c.lane,g=c.eventTime;if((n&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var p=t,x=c;switch(f=e,g=i,x.tag){case 1:if(p=x.payload,typeof p=="function"){h=p.call(g,h,f);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=x.payload,f=typeof p=="function"?p.call(g,h,f):p,f==null)break e;h=me({},h,f);break e;case 2:Xt=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[c]:f.push(c))}else g={eventTime:g,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=g,o=h):u=u.next=g,l|=f;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;f=c,c=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(o=h),r.baseState=o,r.firstBaseUpdate=d,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$i|=l,t.lanes=l,t.memoizedState=h}}function ru(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],r=n.callback;if(r!==null){if(n.callback=null,n=i,typeof r!="function")throw Error(T(191,r));r.call(n)}}}var Vr={},Mt=pi(Vr),jr=pi(Vr),Nr=pi(Vr);function zi(t){if(t===Vr)throw Error(T(174));return t}function Mc(t,e){switch(ae(Nr,e),ae(jr,t),ae(Mt,Vr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ql(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ql(e,t)}ce(Mt),ae(Mt,e)}function Sn(){ce(Mt),ce(jr),ce(Nr)}function gp(t){zi(Nr.current);var e=zi(Mt.current),i=Ql(e,t.type);e!==i&&(ae(jr,t),ae(Mt,i))}function Tc(t){jr.current===t&&(ce(Mt),ce(jr))}var he=pi(0);function ta(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var al=[];function _c(){for(var t=0;t<al.length;t++)al[t]._workInProgressVersionPrimary=null;al.length=0}var Ts=Vt.ReactCurrentDispatcher,ll=Vt.ReactCurrentBatchConfig,Ai=0,fe=null,je=null,Ce=null,ia=!1,rr=!1,Sr=0,Nx=0;function Le(){throw Error(T(321))}function Pc(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!bt(t[i],e[i]))return!1;return!0}function Lc(t,e,i,n,r,s){if(Ai=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ts.current=t===null||t.memoizedState===null?zx:Mx,t=i(n,r),rr){s=0;do{if(rr=!1,Sr=0,25<=s)throw Error(T(301));s+=1,Ce=je=null,e.updateQueue=null,Ts.current=Tx,t=i(n,r)}while(rr)}if(Ts.current=na,e=je!==null&&je.next!==null,Ai=0,Ce=je=fe=null,ia=!1,e)throw Error(T(300));return t}function Rc(){var t=Sr!==0;return Sr=0,t}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?fe.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function ut(){if(je===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ce===null?fe.memoizedState:Ce.next;if(e!==null)Ce=e,je=t;else{if(t===null)throw Error(T(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ce===null?fe.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function Cr(t,e){return typeof e=="function"?e(t):e}function ol(t){var e=ut(),i=e.queue;if(i===null)throw Error(T(311));i.lastRenderedReducer=t;var n=je,r=n.baseQueue,s=i.pending;if(s!==null){if(r!==null){var l=r.next;r.next=s.next,s.next=l}n.baseQueue=r=s,i.pending=null}if(r!==null){s=r.next,n=n.baseState;var c=l=null,o=null,d=s;do{var u=d.lane;if((Ai&u)===u)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:t(n,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(c=o=h,l=n):o=o.next=h,fe.lanes|=u,$i|=u}d=d.next}while(d!==null&&d!==s);o===null?l=n:o.next=c,bt(n,e.memoizedState)||(qe=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=o,i.lastRenderedState=n}if(t=i.interleaved,t!==null){r=t;do s=r.lane,fe.lanes|=s,$i|=s,r=r.next;while(r!==t)}else r===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function cl(t){var e=ut(),i=e.queue;if(i===null)throw Error(T(311));i.lastRenderedReducer=t;var n=i.dispatch,r=i.pending,s=e.memoizedState;if(r!==null){i.pending=null;var l=r=r.next;do s=t(s,l.action),l=l.next;while(l!==r);bt(s,e.memoizedState)||(qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),i.lastRenderedState=s}return[s,n]}function xp(){}function vp(t,e){var i=fe,n=ut(),r=e(),s=!bt(n.memoizedState,r);if(s&&(n.memoizedState=r,qe=!0),n=n.queue,Ac(wp.bind(null,i,n,t),[t]),n.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(i.flags|=2048,Er(9,yp.bind(null,i,n,r,e),void 0,null),Ee===null)throw Error(T(349));Ai&30||bp(i,e,r)}return r}function bp(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function yp(t,e,i,n){e.value=i,e.getSnapshot=n,kp(e)&&jp(t)}function wp(t,e,i){return i(function(){kp(e)&&jp(t)})}function kp(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!bt(t,i)}catch{return!0}}function jp(t){var e=Ot(t,1);e!==null&&vt(e,t,1,-1)}function su(t){var e=St();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:t},e.queue=t,t=t.dispatch=Ex.bind(null,fe,t),[e.memoizedState,t]}function Er(t,e,i,n){return t={tag:t,create:e,destroy:i,deps:n,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t)),t}function Np(){return ut().memoizedState}function _s(t,e,i,n){var r=St();fe.flags|=t,r.memoizedState=Er(1|e,i,void 0,n===void 0?null:n)}function wa(t,e,i,n){var r=ut();n=n===void 0?null:n;var s=void 0;if(je!==null){var l=je.memoizedState;if(s=l.destroy,n!==null&&Pc(n,l.deps)){r.memoizedState=Er(e,i,s,n);return}}fe.flags|=t,r.memoizedState=Er(1|e,i,s,n)}function au(t,e){return _s(8390656,8,t,e)}function Ac(t,e){return wa(2048,8,t,e)}function Sp(t,e){return wa(4,2,t,e)}function Cp(t,e){return wa(4,4,t,e)}function Ep(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zp(t,e,i){return i=i!=null?i.concat([t]):null,wa(4,4,Ep.bind(null,e,t),i)}function $c(){}function Mp(t,e){var i=ut();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&Pc(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function Tp(t,e){var i=ut();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&Pc(e,n[1])?n[0]:(t=t(),i.memoizedState=[t,e],t)}function _p(t,e,i){return Ai&21?(bt(i,e)||(i=$f(),fe.lanes|=i,$i|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=i)}function Sx(t,e){var i=se;se=i!==0&&4>i?i:4,t(!0);var n=ll.transition;ll.transition={};try{t(!1),e()}finally{se=i,ll.transition=n}}function Pp(){return ut().memoizedState}function Cx(t,e,i){var n=ai(t);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Lp(t))Rp(e,i);else if(i=pp(t,e,i,n),i!==null){var r=Oe();vt(i,t,n,r),Ap(i,e,n)}}function Ex(t,e,i){var n=ai(t),r={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Lp(t))Rp(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,c=s(l,i);if(r.hasEagerState=!0,r.eagerState=c,bt(c,l)){var o=e.interleaved;o===null?(r.next=r,Ec(e)):(r.next=o.next,o.next=r),e.interleaved=r;return}}catch{}finally{}i=pp(t,e,r,n),i!==null&&(r=Oe(),vt(i,t,n,r),Ap(i,e,n))}}function Lp(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function Rp(t,e){rr=ia=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Ap(t,e,i){if(i&4194240){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,fc(t,i)}}var na={readContext:dt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},zx={readContext:dt,useCallback:function(t,e){return St().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:au,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,_s(4194308,4,Ep.bind(null,e,t),i)},useLayoutEffect:function(t,e){return _s(4194308,4,t,e)},useInsertionEffect:function(t,e){return _s(4,2,t,e)},useMemo:function(t,e){var i=St();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var n=St();return e=i!==void 0?i(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Cx.bind(null,fe,t),[n.memoizedState,t]},useRef:function(t){var e=St();return t={current:t},e.memoizedState=t},useState:su,useDebugValue:$c,useDeferredValue:function(t){return St().memoizedState=t},useTransition:function(){var t=su(!1),e=t[0];return t=Sx.bind(null,t[1]),St().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var n=fe,r=St();if(ue){if(i===void 0)throw Error(T(407));i=i()}else{if(i=e(),Ee===null)throw Error(T(349));Ai&30||bp(n,e,i)}r.memoizedState=i;var s={value:i,getSnapshot:e};return r.queue=s,au(wp.bind(null,n,s,t),[t]),n.flags|=2048,Er(9,yp.bind(null,n,s,i,e),void 0,null),i},useId:function(){var t=St(),e=Ee.identifierPrefix;if(ue){var i=Rt,n=Lt;i=(n&~(1<<32-xt(n)-1)).toString(32)+i,e=":"+e+"R"+i,i=Sr++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=Nx++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:dt,useCallback:Mp,useContext:dt,useEffect:Ac,useImperativeHandle:zp,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Tp,useReducer:ol,useRef:Np,useState:function(){return ol(Cr)},useDebugValue:$c,useDeferredValue:function(t){var e=ut();return _p(e,je.memoizedState,t)},useTransition:function(){var t=ol(Cr)[0],e=ut().memoizedState;return[t,e]},useMutableSource:xp,useSyncExternalStore:vp,useId:Pp,unstable_isNewReconciler:!1},Tx={readContext:dt,useCallback:Mp,useContext:dt,useEffect:Ac,useImperativeHandle:zp,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Tp,useReducer:cl,useRef:Np,useState:function(){return cl(Cr)},useDebugValue:$c,useDeferredValue:function(t){var e=ut();return je===null?e.memoizedState=t:_p(e,je.memoizedState,t)},useTransition:function(){var t=cl(Cr)[0],e=ut().memoizedState;return[t,e]},useMutableSource:xp,useSyncExternalStore:vp,useId:Pp,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function xo(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:me({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var ka={isMounted:function(t){return(t=t._reactInternals)?qi(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var n=Oe(),r=ai(t),s=Dt(n,r);s.payload=e,i!=null&&(s.callback=i),e=ri(t,s,r),e!==null&&(vt(e,t,r,n),Ms(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=Oe(),r=ai(t),s=Dt(n,r);s.tag=1,s.payload=e,i!=null&&(s.callback=i),e=ri(t,s,r),e!==null&&(vt(e,t,r,n),Ms(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Oe(),n=ai(t),r=Dt(i,n);r.tag=2,e!=null&&(r.callback=e),e=ri(t,r,n),e!==null&&(vt(e,t,n,i),Ms(e,t,n))}};function lu(t,e,i,n,r,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,l):e.prototype&&e.prototype.isPureReactComponent?!br(i,n)||!br(r,s):!0}function $p(t,e,i){var n=!1,r=ui,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(r=Ke(e)?Li:$e.current,n=e.contextTypes,s=(n=n!=null)?kn(t,r):ui),e=new e(i,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ka,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ou(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&ka.enqueueReplaceState(e,e.state,null)}function vo(t,e,i,n){var r=t.stateNode;r.props=i,r.state=t.memoizedState,r.refs={},zc(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=dt(s):(s=Ke(e)?Li:$e.current,r.context=kn(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xo(t,e,s,i),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ka.enqueueReplaceState(r,r.state,null),ea(t,i,r,n),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cn(t,e){try{var i="",n=e;do i+=r0(n),n=n.return;while(n);var r=i}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dl(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function bo(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function Dp(t,e,i){i=Dt(-1,i),i.tag=3,i.payload={element:null};var n=e.value;return i.callback=function(){sa||(sa=!0,Mo=n),bo(t,e)},i}function Bp(t,e,i){i=Dt(-1,i),i.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;i.payload=function(){return n(r)},i.callback=function(){bo(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){bo(t,e),typeof n!="function"&&(si===null?si=new Set([this]):si.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),i}function cu(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new _x;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(i)||(r.add(i),t=qx.bind(null,t,e,i),e.then(t,t))}function du(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uu(t,e,i,n,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=Dt(-1,1),e.tag=2,ri(i,e,1))),i.lanes|=1),t)}var Px=Vt.ReactCurrentOwner,qe=!1;function Ie(t,e,i,n){e.child=t===null?fp(e,null,i,n):Nn(e,t.child,i,n)}function hu(t,e,i,n,r){i=i.render;var s=e.ref;return vn(e,r),n=Lc(t,e,i,n,s,r),i=Rc(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ft(t,e,r)):(ue&&i&&wc(e),e.flags|=1,Ie(t,e,n,r),e.child)}function fu(t,e,i,n,r){if(t===null){var s=i.type;return typeof s=="function"&&!Uc(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=s,Ip(t,e,s,n,r)):(t=As(i.type,null,n,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var l=s.memoizedProps;if(i=i.compare,i=i!==null?i:br,i(l,n)&&t.ref===e.ref)return Ft(t,e,r)}return e.flags|=1,t=li(s,n),t.ref=e.ref,t.return=e,e.child=t}function Ip(t,e,i,n,r){if(t!==null){var s=t.memoizedProps;if(br(s,n)&&t.ref===e.ref)if(qe=!1,e.pendingProps=n=s,(t.lanes&r)!==0)t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,Ft(t,e,r)}return yo(t,e,i,n,r)}function Op(t,e,i){var n=e.pendingProps,r=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(un,Ge),Ge|=i;else{if(!(i&1073741824))return t=s!==null?s.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(un,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:i,ae(un,Ge),Ge|=n}else s!==null?(n=s.baseLanes|i,e.memoizedState=null):n=i,ae(un,Ge),Ge|=n;return Ie(t,e,r,i),e.child}function Fp(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function yo(t,e,i,n,r){var s=Ke(i)?Li:$e.current;return s=kn(e,s),vn(e,r),i=Lc(t,e,i,n,s,r),n=Rc(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ft(t,e,r)):(ue&&n&&wc(e),e.flags|=1,Ie(t,e,i,r),e.child)}function pu(t,e,i,n,r){if(Ke(i)){var s=!0;Qs(e)}else s=!1;if(vn(e,r),e.stateNode===null)Ps(t,e),$p(e,i,n),vo(e,i,n,r),n=!0;else if(t===null){var l=e.stateNode,c=e.memoizedProps;l.props=c;var o=l.context,d=i.contextType;typeof d=="object"&&d!==null?d=dt(d):(d=Ke(i)?Li:$e.current,d=kn(e,d));var u=i.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==n||o!==d)&&ou(e,l,n,d),Xt=!1;var f=e.memoizedState;l.state=f,ea(e,n,l,r),o=e.memoizedState,c!==n||f!==o||He.current||Xt?(typeof u=="function"&&(xo(e,i,u,n),o=e.memoizedState),(c=Xt||lu(e,i,c,n,f,o,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),l.props=n,l.state=o,l.context=d,n=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,mp(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:pt(e.type,c),l.props=d,h=e.pendingProps,f=l.context,o=i.contextType,typeof o=="object"&&o!==null?o=dt(o):(o=Ke(i)?Li:$e.current,o=kn(e,o));var g=i.getDerivedStateFromProps;(u=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==h||f!==o)&&ou(e,l,n,o),Xt=!1,f=e.memoizedState,l.state=f,ea(e,n,l,r);var p=e.memoizedState;c!==h||f!==p||He.current||Xt?(typeof g=="function"&&(xo(e,i,g,n),p=e.memoizedState),(d=Xt||lu(e,i,d,n,f,p,o)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,p,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,p,o)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=p),l.props=n,l.state=p,l.context=o,n=d):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return wo(t,e,i,n,s,r)}function wo(t,e,i,n,r,s){Fp(t,e);var l=(e.flags&128)!==0;if(!n&&!l)return r&&Zd(e,i,!1),Ft(t,e,s);n=e.stateNode,Px.current=e;var c=l&&typeof i.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&l?(e.child=Nn(e,t.child,null,s),e.child=Nn(e,null,c,s)):Ie(t,e,c,s),e.memoizedState=n.state,r&&Zd(e,i,!0),e.child}function Vp(t){var e=t.stateNode;e.pendingContext?Jd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jd(t,e.context,!1),Mc(t,e.containerInfo)}function mu(t,e,i,n,r){return jn(),jc(r),e.flags|=256,Ie(t,e,i,n),e.child}var ko={dehydrated:null,treeContext:null,retryLane:0};function jo(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wp(t,e,i){var n=e.pendingProps,r=he.current,s=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(r&2)!==0),c?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ae(he,r&1),t===null)return mo(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,t=n.fallback,s?(n=e.mode,s=e.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Sa(l,n,0,null),t=Ti(t,n,i,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jo(i),e.memoizedState=ko,t):Dc(e,l));if(r=t.memoizedState,r!==null&&(c=r.dehydrated,c!==null))return Lx(t,e,l,n,c,r,i);if(s){s=n.fallback,l=e.mode,r=t.child,c=r.sibling;var o={mode:"hidden",children:n.children};return!(l&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=o,e.deletions=null):(n=li(r,o),n.subtreeFlags=r.subtreeFlags&14680064),c!==null?s=li(c,s):(s=Ti(s,l,i,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,l=t.child.memoizedState,l=l===null?jo(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~i,e.memoizedState=ko,n}return s=t.child,t=s.sibling,n=li(s,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n}function Dc(t,e){return e=Sa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function os(t,e,i,n){return n!==null&&jc(n),Nn(e,t.child,null,i),t=Dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lx(t,e,i,n,r,s,l){if(i)return e.flags&256?(e.flags&=-257,n=dl(Error(T(422))),os(t,e,l,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,r=e.mode,n=Sa({mode:"visible",children:n.children},r,0,null),s=Ti(s,r,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,e.mode&1&&Nn(e,t.child,null,l),e.child.memoizedState=jo(l),e.memoizedState=ko,s);if(!(e.mode&1))return os(t,e,l,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var c=n.dgst;return n=c,s=Error(T(419)),n=dl(s,n,void 0),os(t,e,l,n)}if(c=(l&t.childLanes)!==0,qe||c){if(n=Ee,n!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|l)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ot(t,r),vt(n,t,r,-1))}return Wc(),n=dl(Error(T(421))),os(t,e,l,n)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Hx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Je=ni(r.nextSibling),Ze=e,ue=!0,gt=null,t!==null&&(at[lt++]=Lt,at[lt++]=Rt,at[lt++]=Ri,Lt=t.id,Rt=t.overflow,Ri=e),e=Dc(e,n.children),e.flags|=4096,e)}function gu(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),go(t.return,e,i)}function ul(t,e,i,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=r)}function Up(t,e,i){var n=e.pendingProps,r=n.revealOrder,s=n.tail;if(Ie(t,e,n.children,i),n=he.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gu(t,i,e);else if(t.tag===19)gu(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ae(he,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(i=e.child,r=null;i!==null;)t=i.alternate,t!==null&&ta(t)===null&&(r=i),i=i.sibling;i=r,i===null?(r=e.child,e.child=null):(r=i.sibling,i.sibling=null),ul(e,!1,r,i,s);break;case"backwards":for(i=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ta(t)===null){e.child=r;break}t=r.sibling,r.sibling=i,i=r,r=t}ul(e,!0,i,null,s);break;case"together":ul(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ps(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),$i|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,i=li(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=li(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Rx(t,e,i){switch(e.tag){case 3:Vp(e),jn();break;case 5:gp(e);break;case 1:Ke(e.type)&&Qs(e);break;case 4:Mc(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;ae(Js,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ae(he,he.current&1),e.flags|=128,null):i&e.child.childLanes?Wp(t,e,i):(ae(he,he.current&1),t=Ft(t,e,i),t!==null?t.sibling:null);ae(he,he.current&1);break;case 19:if(n=(i&e.childLanes)!==0,t.flags&128){if(n)return Up(t,e,i);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ae(he,he.current),n)break;return null;case 22:case 23:return e.lanes=0,Op(t,e,i)}return Ft(t,e,i)}var qp,No,Hp,Kp;qp=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};No=function(){};Hp=function(t,e,i,n){var r=t.memoizedProps;if(r!==n){t=e.stateNode,zi(Mt.current);var s=null;switch(i){case"input":r=ql(t,r),n=ql(t,n),s=[];break;case"select":r=me({},r,{value:void 0}),n=me({},n,{value:void 0}),s=[];break;case"textarea":r=Xl(t,r),n=Xl(t,n),s=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ks)}Yl(i,n);var l;i=null;for(d in r)if(!n.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var c=r[d];for(l in c)c.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(hr.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in n){var o=n[d];if(c=r!=null?r[d]:void 0,n.hasOwnProperty(d)&&o!==c&&(o!=null||c!=null))if(d==="style")if(c){for(l in c)!c.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in o)o.hasOwnProperty(l)&&c[l]!==o[l]&&(i||(i={}),i[l]=o[l])}else i||(s||(s=[]),s.push(d,i)),i=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(s=s||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(hr.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&le("scroll",t),s||c===o||(s=[])):(s=s||[]).push(d,o))}i&&(s=s||[]).push("style",i);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Kp=function(t,e,i,n){i!==n&&(e.flags|=4)};function qn(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function Ax(t,e,i){var n=e.pendingProps;switch(kc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return Ke(e.type)&&Xs(),Re(e),null;case 3:return n=e.stateNode,Sn(),ce(He),ce($e),_c(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(as(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(Po(gt),gt=null))),No(t,e),Re(e),null;case 5:Tc(e);var r=zi(Nr.current);if(i=e.type,t!==null&&e.stateNode!=null)Hp(t,e,i,n,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(T(166));return Re(e),null}if(t=zi(Mt.current),as(e)){n=e.stateNode,i=e.type;var s=e.memoizedProps;switch(n[Ct]=e,n[kr]=s,t=(e.mode&1)!==0,i){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(r=0;r<Gn.length;r++)le(Gn[r],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":Sd(n,s),le("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},le("invalid",n);break;case"textarea":Ed(n,s),le("invalid",n)}Yl(i,s),r=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?n.textContent!==c&&(s.suppressHydrationWarning!==!0&&ss(n.textContent,c,t),r=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&ss(n.textContent,c,t),r=["children",""+c]):hr.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&le("scroll",n)}switch(i){case"input":Gr(n),Cd(n,s,!0);break;case"textarea":Gr(n),zd(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ks)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wf(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(i,{is:n.is}):(t=l.createElement(i),i==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,i),t[Ct]=e,t[kr]=n,qp(t,e,!1,!1),e.stateNode=t;e:{switch(l=Gl(i,n),i){case"dialog":le("cancel",t),le("close",t),r=n;break;case"iframe":case"object":case"embed":le("load",t),r=n;break;case"video":case"audio":for(r=0;r<Gn.length;r++)le(Gn[r],t);r=n;break;case"source":le("error",t),r=n;break;case"img":case"image":case"link":le("error",t),le("load",t),r=n;break;case"details":le("toggle",t),r=n;break;case"input":Sd(t,n),r=ql(t,n),le("invalid",t);break;case"option":r=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},r=me({},n,{value:void 0}),le("invalid",t);break;case"textarea":Ed(t,n),r=Xl(t,n),le("invalid",t);break;default:r=n}Yl(i,r),c=r;for(s in c)if(c.hasOwnProperty(s)){var o=c[s];s==="style"?Nf(t,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&kf(t,o)):s==="children"?typeof o=="string"?(i!=="textarea"||o!=="")&&fr(t,o):typeof o=="number"&&fr(t,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hr.hasOwnProperty(s)?o!=null&&s==="onScroll"&&le("scroll",t):o!=null&&lc(t,s,o,l))}switch(i){case"input":Gr(t),Cd(t,n,!1);break;case"textarea":Gr(t),zd(t);break;case"option":n.value!=null&&t.setAttribute("value",""+di(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?pn(t,!!n.multiple,s,!1):n.defaultValue!=null&&pn(t,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ks)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)Kp(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(T(166));if(i=zi(Nr.current),zi(Mt.current),as(e)){if(n=e.stateNode,i=e.memoizedProps,n[Ct]=e,(s=n.nodeValue!==i)&&(t=Ze,t!==null))switch(t.tag){case 3:ss(n.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ss(n.nodeValue,i,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[Ct]=e,e.stateNode=n}return Re(e),null;case 13:if(ce(he),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&Je!==null&&e.mode&1&&!(e.flags&128))up(),jn(),e.flags|=98560,s=!1;else if(s=as(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Ct]=e}else jn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else gt!==null&&(Po(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||he.current&1?Ne===0&&(Ne=3):Wc())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return Sn(),No(t,e),t===null&&yr(e.stateNode.containerInfo),Re(e),null;case 10:return Cc(e.type._context),Re(e),null;case 17:return Ke(e.type)&&Xs(),Re(e),null;case 19:if(ce(he),s=e.memoizedState,s===null)return Re(e),null;if(n=(e.flags&128)!==0,l=s.rendering,l===null)if(n)qn(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=ta(t),l!==null){for(e.flags|=128,qn(s,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=i,i=e.child;i!==null;)s=i,t=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return ae(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&ve()>En&&(e.flags|=128,n=!0,qn(s,!1),e.lanes=4194304)}else{if(!n)if(t=ta(l),t!==null){if(e.flags|=128,n=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),qn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!ue)return Re(e),null}else 2*ve()-s.renderingStartTime>En&&i!==1073741824&&(e.flags|=128,n=!0,qn(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(i=s.last,i!==null?i.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ve(),e.sibling=null,i=he.current,ae(he,n?i&1|2:i&1),e):(Re(e),null);case 22:case 23:return Vc(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Ge&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function $x(t,e){switch(kc(e),e.tag){case 1:return Ke(e.type)&&Xs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sn(),ce(He),ce($e),_c(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tc(e),null;case 13:if(ce(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(he),null;case 4:return Sn(),null;case 10:return Cc(e.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var cs=!1,Ae=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,B=null;function dn(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ge(t,e,n)}else i.current=null}function So(t,e,i){try{i()}catch(n){ge(t,e,n)}}var xu=!1;function Bx(t,e){if(lo=Us,t=Jf(),yc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var l=0,c=-1,o=-1,d=0,u=0,h=t,f=null;t:for(;;){for(var g;h!==i||r!==0&&h.nodeType!==3||(c=l+r),h!==s||n!==0&&h.nodeType!==3||(o=l+n),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===i&&++d===r&&(c=l),f===s&&++u===n&&(o=l),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}i=c===-1||o===-1?null:{start:c,end:o}}else i=null}i=i||{start:0,end:0}}else i=null;for(oo={focusedElem:t,selectionRange:i},Us=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var x=p.memoizedProps,y=p.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?x:pt(e.type,x),y);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){ge(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return p=xu,xu=!1,p}function sr(t,e,i){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&So(e,i,s)}r=r.next}while(r!==n)}}function ja(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var n=i.create;i.destroy=n()}i=i.next}while(i!==e)}}function Co(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function Xp(t){var e=t.alternate;e!==null&&(t.alternate=null,Xp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[kr],delete e[ho],delete e[yx],delete e[wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qp(t){return t.tag===5||t.tag===3||t.tag===4}function vu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eo(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Ks));else if(n!==4&&(t=t.child,t!==null))for(Eo(t,e,i),t=t.sibling;t!==null;)Eo(t,e,i),t=t.sibling}function zo(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(zo(t,e,i),t=t.sibling;t!==null;)zo(t,e,i),t=t.sibling}var ze=null,mt=!1;function Ut(t,e,i){for(i=i.child;i!==null;)Yp(t,e,i),i=i.sibling}function Yp(t,e,i){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ma,i)}catch{}switch(i.tag){case 5:Ae||dn(i,e);case 6:var n=ze,r=mt;ze=null,Ut(t,e,i),ze=n,mt=r,ze!==null&&(mt?(t=ze,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):ze.removeChild(i.stateNode));break;case 18:ze!==null&&(mt?(t=ze,i=i.stateNode,t.nodeType===8?rl(t.parentNode,i):t.nodeType===1&&rl(t,i),xr(t)):rl(ze,i.stateNode));break;case 4:n=ze,r=mt,ze=i.stateNode.containerInfo,mt=!0,Ut(t,e,i),ze=n,mt=r;break;case 0:case 11:case 14:case 15:if(!Ae&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var s=r,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&So(i,e,l),r=r.next}while(r!==n)}Ut(t,e,i);break;case 1:if(!Ae&&(dn(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(c){ge(i,e,c)}Ut(t,e,i);break;case 21:Ut(t,e,i);break;case 22:i.mode&1?(Ae=(n=Ae)||i.memoizedState!==null,Ut(t,e,i),Ae=n):Ut(t,e,i);break;default:Ut(t,e,i)}}function bu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new Dx),e.forEach(function(n){var r=Kx.bind(null,t,n);i.has(n)||(i.add(n),n.then(r,r))})}}function ft(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];try{var s=t,l=e,c=l;e:for(;c!==null;){switch(c.tag){case 5:ze=c.stateNode,mt=!1;break e;case 3:ze=c.stateNode.containerInfo,mt=!0;break e;case 4:ze=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(ze===null)throw Error(T(160));Yp(s,l,r),ze=null,mt=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(d){ge(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gp(e,t),e=e.sibling}function Gp(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),jt(t),n&4){try{sr(3,t,t.return),ja(3,t)}catch(x){ge(t,t.return,x)}try{sr(5,t,t.return)}catch(x){ge(t,t.return,x)}}break;case 1:ft(e,t),jt(t),n&512&&i!==null&&dn(i,i.return);break;case 5:if(ft(e,t),jt(t),n&512&&i!==null&&dn(i,i.return),t.flags&32){var r=t.stateNode;try{fr(r,"")}catch(x){ge(t,t.return,x)}}if(n&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,l=i!==null?i.memoizedProps:s,c=t.type,o=t.updateQueue;if(t.updateQueue=null,o!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&bf(r,s),Gl(c,l);var d=Gl(c,s);for(l=0;l<o.length;l+=2){var u=o[l],h=o[l+1];u==="style"?Nf(r,h):u==="dangerouslySetInnerHTML"?kf(r,h):u==="children"?fr(r,h):lc(r,u,h,d)}switch(c){case"input":Hl(r,s);break;case"textarea":yf(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?pn(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?pn(r,!!s.multiple,s.defaultValue,!0):pn(r,!!s.multiple,s.multiple?[]:"",!1))}r[kr]=s}catch(x){ge(t,t.return,x)}}break;case 6:if(ft(e,t),jt(t),n&4){if(t.stateNode===null)throw Error(T(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ge(t,t.return,x)}}break;case 3:if(ft(e,t),jt(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{xr(e.containerInfo)}catch(x){ge(t,t.return,x)}break;case 4:ft(e,t),jt(t);break;case 13:ft(e,t),jt(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oc=ve())),n&4&&bu(t);break;case 22:if(u=i!==null&&i.memoizedState!==null,t.mode&1?(Ae=(d=Ae)||u,ft(e,t),Ae=d):ft(e,t),jt(t),n&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(B=t,u=t.child;u!==null;){for(h=B=u;B!==null;){switch(f=B,g=f.child,f.tag){case 0:case 11:case 14:case 15:sr(4,f,f.return);break;case 1:dn(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){n=f,i=f.return;try{e=n,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(x){ge(n,i,x)}}break;case 5:dn(f,f.return);break;case 22:if(f.memoizedState!==null){wu(h);continue}}g!==null?(g.return=f,B=g):wu(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=h.stateNode,o=h.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=jf("display",l))}catch(x){ge(t,t.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(x){ge(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(e,t),jt(t),n&4&&bu(t);break;case 21:break;default:ft(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(Qp(i)){var n=i;break e}i=i.return}throw Error(T(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(fr(r,""),n.flags&=-33);var s=vu(t);zo(t,s,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=vu(t);Eo(t,c,l);break;default:throw Error(T(161))}}catch(o){ge(t,t.return,o)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ix(t,e,i){B=t,Jp(t)}function Jp(t,e,i){for(var n=(t.mode&1)!==0;B!==null;){var r=B,s=r.child;if(r.tag===22&&n){var l=r.memoizedState!==null||cs;if(!l){var c=r.alternate,o=c!==null&&c.memoizedState!==null||Ae;c=cs;var d=Ae;if(cs=l,(Ae=o)&&!d)for(B=r;B!==null;)l=B,o=l.child,l.tag===22&&l.memoizedState!==null?ku(r):o!==null?(o.return=l,B=o):ku(r);for(;s!==null;)B=s,Jp(s),s=s.sibling;B=r,cs=c,Ae=d}yu(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,B=s):yu(t)}}function yu(t){for(;B!==null;){var e=B;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||ja(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Ae)if(i===null)n.componentDidMount();else{var r=e.elementType===e.type?i.memoizedProps:pt(e.type,i.memoizedProps);n.componentDidUpdate(r,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ru(e,s,n);break;case 3:var l=e.updateQueue;if(l!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}ru(e,l,i)}break;case 5:var c=e.stateNode;if(i===null&&e.flags&4){i=c;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&i.focus();break;case"img":o.src&&(i.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&xr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ae||e.flags&512&&Co(e)}catch(f){ge(e,e.return,f)}}if(e===t){B=null;break}if(i=e.sibling,i!==null){i.return=e.return,B=i;break}B=e.return}}function wu(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var i=e.sibling;if(i!==null){i.return=e.return,B=i;break}B=e.return}}function ku(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{ja(4,e)}catch(o){ge(e,i,o)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(o){ge(e,r,o)}}var s=e.return;try{Co(e)}catch(o){ge(e,s,o)}break;case 5:var l=e.return;try{Co(e)}catch(o){ge(e,l,o)}}}catch(o){ge(e,e.return,o)}if(e===t){B=null;break}var c=e.sibling;if(c!==null){c.return=e.return,B=c;break}B=e.return}}var Ox=Math.ceil,ra=Vt.ReactCurrentDispatcher,Bc=Vt.ReactCurrentOwner,ct=Vt.ReactCurrentBatchConfig,ee=0,Ee=null,we=null,Te=0,Ge=0,un=pi(0),Ne=0,zr=null,$i=0,Na=0,Ic=0,ar=null,Ue=null,Oc=0,En=1/0,_t=null,sa=!1,Mo=null,si=null,ds=!1,Jt=null,aa=0,lr=0,To=null,Ls=-1,Rs=0;function Oe(){return ee&6?ve():Ls!==-1?Ls:Ls=ve()}function ai(t){return t.mode&1?ee&2&&Te!==0?Te&-Te:jx.transition!==null?(Rs===0&&(Rs=$f()),Rs):(t=se,t!==0||(t=window.event,t=t===void 0?16:Wf(t.type)),t):1}function vt(t,e,i,n){if(50<lr)throw lr=0,To=null,Error(T(185));Ir(t,i,n),(!(ee&2)||t!==Ee)&&(t===Ee&&(!(ee&2)&&(Na|=i),Ne===4&&Yt(t,Te)),Xe(t,n),i===1&&ee===0&&!(e.mode&1)&&(En=ve()+500,ya&&mi()))}function Xe(t,e){var i=t.callbackNode;j0(t,e);var n=Ws(t,t===Ee?Te:0);if(n===0)i!==null&&_d(i),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(i!=null&&_d(i),e===1)t.tag===0?kx(ju.bind(null,t)):op(ju.bind(null,t)),vx(function(){!(ee&6)&&mi()}),i=null;else{switch(Df(n)){case 1:i=hc;break;case 4:i=Rf;break;case 16:i=Vs;break;case 536870912:i=Af;break;default:i=Vs}i=am(i,Zp.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function Zp(t,e){if(Ls=-1,Rs=0,ee&6)throw Error(T(327));var i=t.callbackNode;if(bn()&&t.callbackNode!==i)return null;var n=Ws(t,t===Ee?Te:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=la(t,n);else{e=n;var r=ee;ee|=2;var s=tm();(Ee!==t||Te!==e)&&(_t=null,En=ve()+500,Mi(t,e));do try{Wx();break}catch(c){em(t,c)}while(!0);Sc(),ra.current=s,ee=r,we!==null?e=0:(Ee=null,Te=0,e=Ne)}if(e!==0){if(e===2&&(r=io(t),r!==0&&(n=r,e=_o(t,r))),e===1)throw i=zr,Mi(t,0),Yt(t,n),Xe(t,ve()),i;if(e===6)Yt(t,n);else{if(r=t.current.alternate,!(n&30)&&!Fx(r)&&(e=la(t,n),e===2&&(s=io(t),s!==0&&(n=s,e=_o(t,s))),e===1))throw i=zr,Mi(t,0),Yt(t,n),Xe(t,ve()),i;switch(t.finishedWork=r,t.finishedLanes=n,e){case 0:case 1:throw Error(T(345));case 2:Ni(t,Ue,_t);break;case 3:if(Yt(t,n),(n&130023424)===n&&(e=Oc+500-ve(),10<e)){if(Ws(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){Oe(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uo(Ni.bind(null,t,Ue,_t),e);break}Ni(t,Ue,_t);break;case 4:if(Yt(t,n),(n&4194240)===n)break;for(e=t.eventTimes,r=-1;0<n;){var l=31-xt(n);s=1<<l,l=e[l],l>r&&(r=l),n&=~s}if(n=r,n=ve()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Ox(n/1960))-n,10<n){t.timeoutHandle=uo(Ni.bind(null,t,Ue,_t),n);break}Ni(t,Ue,_t);break;case 5:Ni(t,Ue,_t);break;default:throw Error(T(329))}}}return Xe(t,ve()),t.callbackNode===i?Zp.bind(null,t):null}function _o(t,e){var i=ar;return t.current.memoizedState.isDehydrated&&(Mi(t,e).flags|=256),t=la(t,e),t!==2&&(e=Ue,Ue=i,e!==null&&Po(e)),t}function Po(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function Fx(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var r=i[n],s=r.getSnapshot;r=r.value;try{if(!bt(s(),r))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yt(t,e){for(e&=~Ic,e&=~Na,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-xt(e),n=1<<i;t[i]=-1,e&=~n}}function ju(t){if(ee&6)throw Error(T(327));bn();var e=Ws(t,0);if(!(e&1))return Xe(t,ve()),null;var i=la(t,e);if(t.tag!==0&&i===2){var n=io(t);n!==0&&(e=n,i=_o(t,n))}if(i===1)throw i=zr,Mi(t,0),Yt(t,e),Xe(t,ve()),i;if(i===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,Ue,_t),Xe(t,ve()),null}function Fc(t,e){var i=ee;ee|=1;try{return t(e)}finally{ee=i,ee===0&&(En=ve()+500,ya&&mi())}}function Di(t){Jt!==null&&Jt.tag===0&&!(ee&6)&&bn();var e=ee;ee|=1;var i=ct.transition,n=se;try{if(ct.transition=null,se=1,t)return t()}finally{se=n,ct.transition=i,ee=e,!(ee&6)&&mi()}}function Vc(){Ge=un.current,ce(un)}function Mi(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,xx(i)),we!==null)for(i=we.return;i!==null;){var n=i;switch(kc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Xs();break;case 3:Sn(),ce(He),ce($e),_c();break;case 5:Tc(n);break;case 4:Sn();break;case 13:ce(he);break;case 19:ce(he);break;case 10:Cc(n.type._context);break;case 22:case 23:Vc()}i=i.return}if(Ee=t,we=t=li(t.current,null),Te=Ge=e,Ne=0,zr=null,Ic=Na=$i=0,Ue=ar=null,Ei!==null){for(e=0;e<Ei.length;e++)if(i=Ei[e],n=i.interleaved,n!==null){i.interleaved=null;var r=n.next,s=i.pending;if(s!==null){var l=s.next;s.next=r,n.next=l}i.pending=n}Ei=null}return t}function em(t,e){do{var i=we;try{if(Sc(),Ts.current=na,ia){for(var n=fe.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}ia=!1}if(Ai=0,Ce=je=fe=null,rr=!1,Sr=0,Bc.current=null,i===null||i.return===null){Ne=1,zr=e,we=null;break}e:{var s=t,l=i.return,c=i,o=e;if(e=Te,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,u=c,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=du(l);if(g!==null){g.flags&=-257,uu(g,l,c,s,e),g.mode&1&&cu(s,d,e),e=g,o=d;var p=e.updateQueue;if(p===null){var x=new Set;x.add(o),e.updateQueue=x}else p.add(o);break e}else{if(!(e&1)){cu(s,d,e),Wc();break e}o=Error(T(426))}}else if(ue&&c.mode&1){var y=du(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),uu(y,l,c,s,e),jc(Cn(o,c));break e}}s=o=Cn(o,c),Ne!==4&&(Ne=2),ar===null?ar=[s]:ar.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Dp(s,o,e);nu(s,v);break e;case 1:c=o;var m=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(si===null||!si.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Bp(s,c,e);nu(s,w);break e}}s=s.return}while(s!==null)}nm(i)}catch(j){e=j,we===i&&i!==null&&(we=i=i.return);continue}break}while(!0)}function tm(){var t=ra.current;return ra.current=na,t===null?na:t}function Wc(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ee===null||!($i&268435455)&&!(Na&268435455)||Yt(Ee,Te)}function la(t,e){var i=ee;ee|=2;var n=tm();(Ee!==t||Te!==e)&&(_t=null,Mi(t,e));do try{Vx();break}catch(r){em(t,r)}while(!0);if(Sc(),ee=i,ra.current=n,we!==null)throw Error(T(261));return Ee=null,Te=0,Ne}function Vx(){for(;we!==null;)im(we)}function Wx(){for(;we!==null&&!p0();)im(we)}function im(t){var e=sm(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?nm(t):we=e,Bc.current=null}function nm(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=$x(i,e),i!==null){i.flags&=32767,we=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,we=null;return}}else if(i=Ax(i,e,Ge),i!==null){we=i;return}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);Ne===0&&(Ne=5)}function Ni(t,e,i){var n=se,r=ct.transition;try{ct.transition=null,se=1,Ux(t,e,i,n)}finally{ct.transition=r,se=n}return null}function Ux(t,e,i,n){do bn();while(Jt!==null);if(ee&6)throw Error(T(327));i=t.finishedWork;var r=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=i.lanes|i.childLanes;if(N0(t,s),t===Ee&&(we=Ee=null,Te=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ds||(ds=!0,am(Vs,function(){return bn(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var l=se;se=1;var c=ee;ee|=4,Bc.current=null,Bx(t,i),Gp(i,t),dx(oo),Us=!!lo,oo=lo=null,t.current=i,Ix(i),m0(),ee=c,se=l,ct.transition=s}else t.current=i;if(ds&&(ds=!1,Jt=t,aa=r),s=t.pendingLanes,s===0&&(si=null),v0(i.stateNode),Xe(t,ve()),e!==null)for(n=t.onRecoverableError,i=0;i<e.length;i++)r=e[i],n(r.value,{componentStack:r.stack,digest:r.digest});if(sa)throw sa=!1,t=Mo,Mo=null,t;return aa&1&&t.tag!==0&&bn(),s=t.pendingLanes,s&1?t===To?lr++:(lr=0,To=t):lr=0,mi(),null}function bn(){if(Jt!==null){var t=Df(aa),e=ct.transition,i=se;try{if(ct.transition=null,se=16>t?16:t,Jt===null)var n=!1;else{if(t=Jt,Jt=null,aa=0,ee&6)throw Error(T(331));var r=ee;for(ee|=4,B=t.current;B!==null;){var s=B,l=s.child;if(B.flags&16){var c=s.deletions;if(c!==null){for(var o=0;o<c.length;o++){var d=c[o];for(B=d;B!==null;){var u=B;switch(u.tag){case 0:case 11:case 15:sr(8,u,s)}var h=u.child;if(h!==null)h.return=u,B=h;else for(;B!==null;){u=B;var f=u.sibling,g=u.return;if(Xp(u),u===d){B=null;break}if(f!==null){f.return=g,B=f;break}B=g}}}var p=s.alternate;if(p!==null){var x=p.child;if(x!==null){p.child=null;do{var y=x.sibling;x.sibling=null,x=y}while(x!==null)}}B=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,B=l;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sr(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,B=v;break e}B=s.return}}var m=t.current;for(B=m;B!==null;){l=B;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,B=b;else e:for(l=m;B!==null;){if(c=B,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ja(9,c)}}catch(j){ge(c,c.return,j)}if(c===l){B=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,B=w;break e}B=c.return}}if(ee=r,mi(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ma,t)}catch{}n=!0}return n}finally{se=i,ct.transition=e}}return!1}function Nu(t,e,i){e=Cn(i,e),e=Dp(t,e,1),t=ri(t,e,1),e=Oe(),t!==null&&(Ir(t,1,e),Xe(t,e))}function ge(t,e,i){if(t.tag===3)Nu(t,t,i);else for(;e!==null;){if(e.tag===3){Nu(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(si===null||!si.has(n))){t=Cn(i,t),t=Bp(e,t,1),e=ri(e,t,1),t=Oe(),e!==null&&(Ir(e,1,t),Xe(e,t));break}}e=e.return}}function qx(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&i,Ee===t&&(Te&i)===i&&(Ne===4||Ne===3&&(Te&130023424)===Te&&500>ve()-Oc?Mi(t,0):Ic|=i),Xe(t,e)}function rm(t,e){e===0&&(t.mode&1?(e=es,es<<=1,!(es&130023424)&&(es=4194304)):e=1);var i=Oe();t=Ot(t,e),t!==null&&(Ir(t,e,i),Xe(t,i))}function Hx(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),rm(t,i)}function Kx(t,e){var i=0;switch(t.tag){case 13:var n=t.stateNode,r=t.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(e),rm(t,i)}var sm;sm=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)qe=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return qe=!1,Rx(t,e,i);qe=!!(t.flags&131072)}else qe=!1,ue&&e.flags&1048576&&cp(e,Gs,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Ps(t,e),t=e.pendingProps;var r=kn(e,$e.current);vn(e,i),r=Lc(null,e,n,t,r,i);var s=Rc();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(n)?(s=!0,Qs(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zc(e),r.updater=ka,e.stateNode=r,r._reactInternals=e,vo(e,n,t,i),e=wo(null,e,n,!0,s,i)):(e.tag=0,ue&&s&&wc(e),Ie(null,e,r,i),e=e.child),e;case 16:n=e.elementType;e:{switch(Ps(t,e),t=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=Qx(n),t=pt(n,t),r){case 0:e=yo(null,e,n,t,i);break e;case 1:e=pu(null,e,n,t,i);break e;case 11:e=hu(null,e,n,t,i);break e;case 14:e=fu(null,e,n,pt(n.type,t),i);break e}throw Error(T(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:pt(n,r),yo(t,e,n,r,i);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:pt(n,r),pu(t,e,n,r,i);case 3:e:{if(Vp(e),t===null)throw Error(T(387));n=e.pendingProps,s=e.memoizedState,r=s.element,mp(t,e),ea(e,n,null,i);var l=e.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cn(Error(T(423)),e),e=mu(t,e,n,i,r);break e}else if(n!==r){r=Cn(Error(T(424)),e),e=mu(t,e,n,i,r);break e}else for(Je=ni(e.stateNode.containerInfo.firstChild),Ze=e,ue=!0,gt=null,i=fp(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(jn(),n===r){e=Ft(t,e,i);break e}Ie(t,e,n,i)}e=e.child}return e;case 5:return gp(e),t===null&&mo(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,l=r.children,co(n,r)?l=null:s!==null&&co(n,s)&&(e.flags|=32),Fp(t,e),Ie(t,e,l,i),e.child;case 6:return t===null&&mo(e),null;case 13:return Wp(t,e,i);case 4:return Mc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Nn(e,null,n,i):Ie(t,e,n,i),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:pt(n,r),hu(t,e,n,r,i);case 7:return Ie(t,e,e.pendingProps,i),e.child;case 8:return Ie(t,e,e.pendingProps.children,i),e.child;case 12:return Ie(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(n=e.type._context,r=e.pendingProps,s=e.memoizedProps,l=r.value,ae(Js,n._currentValue),n._currentValue=l,s!==null)if(bt(s.value,l)){if(s.children===r.children&&!He.current){e=Ft(t,e,i);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var o=c.firstContext;o!==null;){if(o.context===n){if(s.tag===1){o=Dt(-1,i&-i),o.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?o.next=o:(o.next=u.next,u.next=o),d.pending=o}}s.lanes|=i,o=s.alternate,o!==null&&(o.lanes|=i),go(s.return,i,e),c.lanes|=i;break}o=o.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(T(341));l.lanes|=i,c=l.alternate,c!==null&&(c.lanes|=i),go(l,i,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Ie(t,e,r.children,i),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,vn(e,i),r=dt(r),n=n(r),e.flags|=1,Ie(t,e,n,i),e.child;case 14:return n=e.type,r=pt(n,e.pendingProps),r=pt(n.type,r),fu(t,e,n,r,i);case 15:return Ip(t,e,e.type,e.pendingProps,i);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:pt(n,r),Ps(t,e),e.tag=1,Ke(n)?(t=!0,Qs(e)):t=!1,vn(e,i),$p(e,n,r),vo(e,n,r,i),wo(null,e,n,!0,t,i);case 19:return Up(t,e,i);case 22:return Op(t,e,i)}throw Error(T(156,e.tag))};function am(t,e){return Lf(t,e)}function Xx(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,i,n){return new Xx(t,e,i,n)}function Uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qx(t){if(typeof t=="function")return Uc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cc)return 11;if(t===dc)return 14}return 2}function li(t,e){var i=t.alternate;return i===null?(i=ot(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function As(t,e,i,n,r,s){var l=2;if(n=t,typeof t=="function")Uc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case en:return Ti(i.children,r,s,e);case oc:l=8,r|=8;break;case Fl:return t=ot(12,i,e,r|2),t.elementType=Fl,t.lanes=s,t;case Vl:return t=ot(13,i,e,r),t.elementType=Vl,t.lanes=s,t;case Wl:return t=ot(19,i,e,r),t.elementType=Wl,t.lanes=s,t;case gf:return Sa(i,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pf:l=10;break e;case mf:l=9;break e;case cc:l=11;break e;case dc:l=14;break e;case Kt:l=16,n=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=ot(l,i,e,r),e.elementType=t,e.type=n,e.lanes=s,e}function Ti(t,e,i,n){return t=ot(7,t,n,e),t.lanes=i,t}function Sa(t,e,i,n){return t=ot(22,t,n,e),t.elementType=gf,t.lanes=i,t.stateNode={isHidden:!1},t}function hl(t,e,i){return t=ot(6,t,null,e),t.lanes=i,t}function fl(t,e,i){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yx(t,e,i,n,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qc(t,e,i,n,r,s,l,c,o){return t=new Yx(t,e,i,c,o),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(s),t}function Gx(t,e,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:n==null?null:""+n,children:t,containerInfo:e,implementation:i}}function lm(t){if(!t)return ui;t=t._reactInternals;e:{if(qi(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var i=t.type;if(Ke(i))return lp(t,i,e)}return e}function om(t,e,i,n,r,s,l,c,o){return t=qc(i,n,!0,t,r,s,l,c,o),t.context=lm(null),i=t.current,n=Oe(),r=ai(i),s=Dt(n,r),s.callback=e??null,ri(i,s,r),t.current.lanes=r,Ir(t,r,n),Xe(t,n),t}function Ca(t,e,i,n){var r=e.current,s=Oe(),l=ai(r);return i=lm(i),e.context===null?e.context=i:e.pendingContext=i,e=Dt(s,l),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=ri(r,e,l),t!==null&&(vt(t,r,l,s),Ms(t,r,l)),l}function oa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Su(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Hc(t,e){Su(t,e),(t=t.alternate)&&Su(t,e)}function Jx(){return null}var cm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kc(t){this._internalRoot=t}Ea.prototype.render=Kc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Ca(t,e,null,null)};Ea.prototype.unmount=Kc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){Ca(null,t,null,null)}),e[It]=null}};function Ea(t){this._internalRoot=t}Ea.prototype.unstable_scheduleHydration=function(t){if(t){var e=Of();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Qt.length&&e!==0&&e<Qt[i].priority;i++);Qt.splice(i,0,t),i===0&&Vf(t)}};function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function Zx(t,e,i,n,r){if(r){if(typeof n=="function"){var s=n;n=function(){var d=oa(l);s.call(d)}}var l=om(e,n,t,0,null,!1,!1,"",Cu);return t._reactRootContainer=l,t[It]=l.current,yr(t.nodeType===8?t.parentNode:t),Di(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof n=="function"){var c=n;n=function(){var d=oa(o);c.call(d)}}var o=qc(t,0,!1,null,null,!1,!1,"",Cu);return t._reactRootContainer=o,t[It]=o.current,yr(t.nodeType===8?t.parentNode:t),Di(function(){Ca(e,o,i,n)}),o}function Ma(t,e,i,n,r){var s=i._reactRootContainer;if(s){var l=s;if(typeof r=="function"){var c=r;r=function(){var o=oa(l);c.call(o)}}Ca(e,l,t,r)}else l=Zx(i,e,t,r,n);return oa(l)}Bf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=Yn(e.pendingLanes);i!==0&&(fc(e,i|1),Xe(e,ve()),!(ee&6)&&(En=ve()+500,mi()))}break;case 13:Di(function(){var n=Ot(t,1);if(n!==null){var r=Oe();vt(n,t,1,r)}}),Hc(t,1)}};pc=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var i=Oe();vt(e,t,134217728,i)}Hc(t,134217728)}};If=function(t){if(t.tag===13){var e=ai(t),i=Ot(t,e);if(i!==null){var n=Oe();vt(i,t,e,n)}Hc(t,e)}};Of=function(){return se};Ff=function(t,e){var i=se;try{return se=t,e()}finally{se=i}};Zl=function(t,e,i){switch(e){case"input":if(Hl(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var r=ba(n);if(!r)throw Error(T(90));vf(n),Hl(n,r)}}}break;case"textarea":yf(t,i);break;case"select":e=i.value,e!=null&&pn(t,!!i.multiple,e,!1)}};Ef=Fc;zf=Di;var ev={usingClientEntryPoint:!1,Events:[Fr,sn,ba,Sf,Cf,Fc]},Hn={findFiberByHostInstance:Ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_f(t),t===null?null:t.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{ma=us.inject(tv),zt=us}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;tt.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(e))throw Error(T(200));return Gx(t,e,null,i)};tt.createRoot=function(t,e){if(!Xc(t))throw Error(T(299));var i=!1,n="",r=cm;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qc(t,1,!1,null,null,i,!1,n,r),t[It]=e.current,yr(t.nodeType===8?t.parentNode:t),new Kc(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=_f(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return Di(t)};tt.hydrate=function(t,e,i){if(!za(e))throw Error(T(200));return Ma(null,t,e,!0,i)};tt.hydrateRoot=function(t,e,i){if(!Xc(t))throw Error(T(405));var n=i!=null&&i.hydratedSources||null,r=!1,s="",l=cm;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),e=om(e,null,t,1,i??null,r,!1,s,l),t[It]=e.current,yr(t),n)for(t=0;t<n.length;t++)i=n[t],r=i._getVersion,r=r(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,r]:e.mutableSourceEagerHydrationData.push(i,r);return new Ea(e)};tt.render=function(t,e,i){if(!za(e))throw Error(T(200));return Ma(null,t,e,!1,i)};tt.unmountComponentAtNode=function(t){if(!za(t))throw Error(T(40));return t._reactRootContainer?(Di(function(){Ma(null,null,t,!1,function(){t._reactRootContainer=null,t[It]=null})}),!0):!1};tt.unstable_batchedUpdates=Fc;tt.unstable_renderSubtreeIntoContainer=function(t,e,i,n){if(!za(i))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Ma(t,e,i,!1,n)};tt.version="18.3.1-next-f1338f8080-20240426";function dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dm)}catch(t){console.error(t)}}dm(),df.exports=tt;var iv=df.exports,Eu=iv;Il.createRoot=Eu.createRoot,Il.hydrateRoot=Eu.hydrateRoot;const nv="modulepreload",rv=function(t){return"/"+t},zu={},sv=function(e,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=Promise.allSettled(i.map(o=>{if(o=rv(o),o in zu)return;zu[o]=!0;const d=o.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":nv,d||(h.as="script"),h.crossOrigin="",h.href=o,c&&h.setAttribute("nonce",c),document.head.appendChild(h),d)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Mr.apply(this,arguments)}var Zt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zt||(Zt={}));const Mu="popstate";function av(t){t===void 0&&(t={});function e(n,r){let{pathname:s,search:l,hash:c}=n.location;return Lo("",{pathname:s,search:l,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function i(n,r){return typeof r=="string"?r:ca(r)}return ov(e,i,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lv(){return Math.random().toString(36).substr(2,8)}function Tu(t,e){return{usr:t.state,key:t.key,idx:e}}function Lo(t,e,i,n){return i===void 0&&(i=null),Mr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?An(e):e,{state:i,key:e&&e.key||n||lv()})}function ca(t){let{pathname:e="/",search:i="",hash:n=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function An(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function ov(t,e,i,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:s=!1}=n,l=r.history,c=Zt.Pop,o=null,d=u();d==null&&(d=0,l.replaceState(Mr({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function h(){c=Zt.Pop;let y=u(),v=y==null?null:y-d;d=y,o&&o({action:c,location:x.location,delta:v})}function f(y,v){c=Zt.Push;let m=Lo(x.location,y,v);d=u()+1;let b=Tu(m,d),w=x.createHref(m);try{l.pushState(b,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;r.location.assign(w)}s&&o&&o({action:c,location:x.location,delta:1})}function g(y,v){c=Zt.Replace;let m=Lo(x.location,y,v);d=u();let b=Tu(m,d),w=x.createHref(m);l.replaceState(b,"",w),s&&o&&o({action:c,location:x.location,delta:0})}function p(y){let v=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof y=="string"?y:ca(y);return m=m.replace(/ $/,"%20"),pe(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let x={get action(){return c},get location(){return t(r,l)},listen(y){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Mu,h),o=y,()=>{r.removeEventListener(Mu,h),o=null}},createHref(y){return e(r,y)},createURL:p,encodeLocation(y){let v=p(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(y){return l.go(y)}};return x}var _u;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_u||(_u={}));function cv(t,e,i){return i===void 0&&(i="/"),dv(t,e,i)}function dv(t,e,i,n){let r=typeof e=="string"?An(e):e,s=zn(r.pathname||"/",i);if(s==null)return null;let l=um(t);uv(l);let c=null;for(let o=0;c==null&&o<l.length;++o){let d=kv(s);c=yv(l[o],d)}return c}function um(t,e,i,n){e===void 0&&(e=[]),i===void 0&&(i=[]),n===void 0&&(n="");let r=(s,l,c)=>{let o={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};o.relativePath.startsWith("/")&&(pe(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let d=oi([n,o.relativePath]),u=i.concat(o);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),um(s.children,e,u,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:vv(d,s.index),routesMeta:u})};return t.forEach((s,l)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))r(s,l);else for(let o of hm(s.path))r(s,l,o)}),e}function hm(t){let e=t.split("/");if(e.length===0)return[];let[i,...n]=e,r=i.endsWith("?"),s=i.replace(/\?$/,"");if(n.length===0)return r?[s,""]:[s];let l=hm(n.join("/")),c=[];return c.push(...l.map(o=>o===""?s:[s,o].join("/"))),r&&c.push(...l),c.map(o=>t.startsWith("/")&&o===""?"/":o)}function uv(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:bv(e.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const hv=/^:[\w-]+$/,fv=3,pv=2,mv=1,gv=10,xv=-2,Pu=t=>t==="*";function vv(t,e){let i=t.split("/"),n=i.length;return i.some(Pu)&&(n+=xv),e&&(n+=pv),i.filter(r=>!Pu(r)).reduce((r,s)=>r+(hv.test(s)?fv:s===""?mv:gv),n)}function bv(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function yv(t,e,i){let{routesMeta:n}=t,r={},s="/",l=[];for(let c=0;c<n.length;++c){let o=n[c],d=c===n.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=Ro({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},u),f=o.route;if(!h)return null;Object.assign(r,h.params),l.push({params:r,pathname:oi([s,h.pathname]),pathnameBase:Ev(oi([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=oi([s,h.pathnameBase]))}return l}function Ro(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,n]=wv(t.path,t.caseSensitive,t.end),r=e.match(i);if(!r)return null;let s=r[0],l=s.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:n.reduce((d,u,h)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let x=c[h]||"";l=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const p=c[h];return g&&!p?d[f]=void 0:d[f]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:l,pattern:t}}function wv(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),Qc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,o)=>(n.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function kv(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,n=t.charAt(i);return n&&n!=="/"?null:t.slice(i)||"/"}const jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nv=t=>jv.test(t);function Sv(t,e){e===void 0&&(e="/");let{pathname:i,search:n="",hash:r=""}=typeof t=="string"?An(t):t,s;if(i)if(Nv(i))s=i;else{if(i.includes("//")){let l=i;i=i.replace(/\/\/+/g,"/"),Qc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+i))}i.startsWith("/")?s=Lu(i.substring(1),"/"):s=Lu(i,e)}else s=e;return{pathname:s,search:zv(n),hash:Mv(r)}}function Lu(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?i.length>1&&i.pop():r!=="."&&i.push(r)}),i.length>1?i.join("/"):"/"}function pl(t,e,i,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cv(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Yc(t,e){let i=Cv(t);return e?i.map((n,r)=>r===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function Gc(t,e,i,n){n===void 0&&(n=!1);let r;typeof t=="string"?r=An(t):(r=Mr({},t),pe(!r.pathname||!r.pathname.includes("?"),pl("?","pathname","search",r)),pe(!r.pathname||!r.pathname.includes("#"),pl("#","pathname","hash",r)),pe(!r.search||!r.search.includes("#"),pl("#","search","hash",r)));let s=t===""||r.pathname==="",l=s?"/":r.pathname,c;if(l==null)c=i;else{let h=e.length-1;if(!n&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}c=h>=0?e[h]:"/"}let o=Sv(r,c),d=l&&l!=="/"&&l.endsWith("/"),u=(s||l===".")&&i.endsWith("/");return!o.pathname.endsWith("/")&&(d||u)&&(o.pathname+="/"),o}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),Ev=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Mv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Tv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const fm=["post","put","patch","delete"];new Set(fm);const _v=["get",...fm];new Set(_v);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tr(){return Tr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Tr.apply(this,arguments)}const Ta=k.createContext(null),pm=k.createContext(null),Wt=k.createContext(null),_a=k.createContext(null),gi=k.createContext({outlet:null,matches:[],isDataRoute:!1}),mm=k.createContext(null);function Pv(t,e){let{relative:i}=e===void 0?{}:e;$n()||pe(!1);let{basename:n,navigator:r}=k.useContext(Wt),{hash:s,pathname:l,search:c}=Pa(t,{relative:i}),o=l;return n!=="/"&&(o=l==="/"?n:oi([n,l])),r.createHref({pathname:o,search:c,hash:s})}function $n(){return k.useContext(_a)!=null}function Dn(){return $n()||pe(!1),k.useContext(_a).location}function gm(t){k.useContext(Wt).static||k.useLayoutEffect(t)}function xm(){let{isDataRoute:t}=k.useContext(gi);return t?qv():Lv()}function Lv(){$n()||pe(!1);let t=k.useContext(Ta),{basename:e,future:i,navigator:n}=k.useContext(Wt),{matches:r}=k.useContext(gi),{pathname:s}=Dn(),l=JSON.stringify(Yc(r,i.v7_relativeSplatPath)),c=k.useRef(!1);return gm(()=>{c.current=!0}),k.useCallback(function(d,u){if(u===void 0&&(u={}),!c.current)return;if(typeof d=="number"){n.go(d);return}let h=Gc(d,JSON.parse(l),s,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:oi([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,l,s,t])}function Pa(t,e){let{relative:i}=e===void 0?{}:e,{future:n}=k.useContext(Wt),{matches:r}=k.useContext(gi),{pathname:s}=Dn(),l=JSON.stringify(Yc(r,n.v7_relativeSplatPath));return k.useMemo(()=>Gc(t,JSON.parse(l),s,i==="path"),[t,l,s,i])}function Rv(t,e){return Av(t,e)}function Av(t,e,i,n){$n()||pe(!1);let{navigator:r}=k.useContext(Wt),{matches:s}=k.useContext(gi),l=s[s.length-1],c=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let d=Dn(),u;if(e){var h;let y=typeof e=="string"?An(e):e;o==="/"||(h=y.pathname)!=null&&h.startsWith(o)||pe(!1),u=y}else u=d;let f=u.pathname||"/",g=f;if(o!=="/"){let y=o.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(y.length).join("/")}let p=cv(t,{pathname:g}),x=Ov(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:oi([o,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?o:oi([o,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,i,n);return e&&x?k.createElement(_a.Provider,{value:{location:Tr({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Zt.Pop}},x):x}function $v(){let t=Uv(),e=Tv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),i?k.createElement("pre",{style:r},i):null,null)}const Dv=k.createElement($v,null);class Bv extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?k.createElement(gi.Provider,{value:this.props.routeContext},k.createElement(mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Iv(t){let{routeContext:e,match:i,children:n}=t,r=k.useContext(Ta);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(gi.Provider,{value:e},n)}function Ov(t,e,i,n){var r;if(e===void 0&&(e=[]),i===void 0&&(i=null),n===void 0&&(n=null),t==null){var s;if(!i)return null;if(i.errors)t=i.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let l=t,c=(r=i)==null?void 0:r.errors;if(c!=null){let u=l.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);u>=0||pe(!1),l=l.slice(0,Math.min(l.length,u+1))}let o=!1,d=-1;if(i&&n&&n.v7_partialHydration)for(let u=0;u<l.length;u++){let h=l[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:f,errors:g}=i,p=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||p){o=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,h,f)=>{let g,p=!1,x=null,y=null;i&&(g=c&&h.route.id?c[h.route.id]:void 0,x=h.route.errorElement||Dv,o&&(d<0&&f===0?(Hv("route-fallback"),p=!0,y=null):d===f&&(p=!0,y=h.route.hydrateFallbackElement||null)));let v=e.concat(l.slice(0,f+1)),m=()=>{let b;return g?b=x:p?b=y:h.route.Component?b=k.createElement(h.route.Component,null):h.route.element?b=h.route.element:b=u,k.createElement(Iv,{match:h,routeContext:{outlet:u,matches:v,isDataRoute:i!=null},children:b})};return i&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?k.createElement(Bv,{location:i.location,revalidation:i.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var vm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(vm||{}),bm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bm||{});function Fv(t){let e=k.useContext(Ta);return e||pe(!1),e}function Vv(t){let e=k.useContext(pm);return e||pe(!1),e}function Wv(t){let e=k.useContext(gi);return e||pe(!1),e}function ym(t){let e=Wv(),i=e.matches[e.matches.length-1];return i.route.id||pe(!1),i.route.id}function Uv(){var t;let e=k.useContext(mm),i=Vv(),n=ym();return e!==void 0?e:(t=i.errors)==null?void 0:t[n]}function qv(){let{router:t}=Fv(vm.UseNavigateStable),e=ym(bm.UseNavigateStable),i=k.useRef(!1);return gm(()=>{i.current=!0}),k.useCallback(function(r,s){s===void 0&&(s={}),i.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Tr({fromRouteId:e},s)))},[t,e])}const Ru={};function Hv(t,e,i){Ru[t]||(Ru[t]=!0)}function Kv(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Tt(t){let{to:e,replace:i,state:n,relative:r}=t;$n()||pe(!1);let{future:s,static:l}=k.useContext(Wt),{matches:c}=k.useContext(gi),{pathname:o}=Dn(),d=xm(),u=Gc(e,Yc(c,s.v7_relativeSplatPath),o,r==="path"),h=JSON.stringify(u);return k.useEffect(()=>d(JSON.parse(h),{replace:i,state:n,relative:r}),[d,h,r,i,n]),null}function rt(t){pe(!1)}function Xv(t){let{basename:e="/",children:i=null,location:n,navigationType:r=Zt.Pop,navigator:s,static:l=!1,future:c}=t;$n()&&pe(!1);let o=e.replace(/^\/*/,"/"),d=k.useMemo(()=>({basename:o,navigator:s,static:l,future:Tr({v7_relativeSplatPath:!1},c)}),[o,c,s,l]);typeof n=="string"&&(n=An(n));let{pathname:u="/",search:h="",hash:f="",state:g=null,key:p="default"}=n,x=k.useMemo(()=>{let y=zn(u,o);return y==null?null:{location:{pathname:y,search:h,hash:f,state:g,key:p},navigationType:r}},[o,u,h,f,g,p,r]);return x==null?null:k.createElement(Wt.Provider,{value:d},k.createElement(_a.Provider,{children:i,value:x}))}function Au(t){let{children:e,location:i}=t;return Rv(Ao(e),i)}new Promise(()=>{});function Ao(t,e){e===void 0&&(e=[]);let i=[];return k.Children.forEach(t,(n,r)=>{if(!k.isValidElement(n))return;let s=[...e,r];if(n.type===k.Fragment){i.push.apply(i,Ao(n.props.children,s));return}n.type!==rt&&pe(!1),!n.props.index||!n.props.children||pe(!1);let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Ao(n.props.children,s)),i.push(l)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},da.apply(this,arguments)}function wm(t,e){if(t==null)return{};var i={},n=Object.keys(t),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function Qv(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Yv(t,e){return t.button===0&&(!e||e==="_self")&&!Qv(t)}const Gv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Zv="6";try{window.__reactRouterVersion=Zv}catch{}const e1=k.createContext({isTransitioning:!1}),t1="startTransition",$u=qg[t1];function i1(t){let{basename:e,children:i,future:n,window:r}=t,s=k.useRef();s.current==null&&(s.current=av({window:r,v5Compat:!0}));let l=s.current,[c,o]=k.useState({action:l.action,location:l.location}),{v7_startTransition:d}=n||{},u=k.useCallback(h=>{d&&$u?$u(()=>o(h)):o(h)},[o,d]);return k.useLayoutEffect(()=>l.listen(u),[l,u]),k.useEffect(()=>Kv(n),[n]),k.createElement(Xv,{basename:e,children:i,location:c.location,navigationType:c.action,navigator:l,future:n})}const n1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",r1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=k.forwardRef(function(e,i){let{onClick:n,relative:r,reloadDocument:s,replace:l,state:c,target:o,to:d,preventScrollReset:u,viewTransition:h}=e,f=wm(e,Gv),{basename:g}=k.useContext(Wt),p,x=!1;if(typeof d=="string"&&r1.test(d)&&(p=d,n1))try{let b=new URL(window.location.href),w=d.startsWith("//")?new URL(b.protocol+d):new URL(d),j=zn(w.pathname,g);w.origin===b.origin&&j!=null?d=j+w.search+w.hash:x=!0}catch{}let y=Pv(d,{relative:r}),v=a1(d,{replace:l,state:c,target:o,preventScrollReset:u,relative:r,viewTransition:h});function m(b){n&&n(b),b.defaultPrevented||v(b)}return k.createElement("a",da({},f,{href:p||y,onClick:x||s?n:m,ref:i,target:o}))}),$s=k.forwardRef(function(e,i){let{"aria-current":n="page",caseSensitive:r=!1,className:s="",end:l=!1,style:c,to:o,viewTransition:d,children:u}=e,h=wm(e,Jv),f=Pa(o,{relative:h.relative}),g=Dn(),p=k.useContext(pm),{navigator:x,basename:y}=k.useContext(Wt),v=p!=null&&l1(f)&&d===!0,m=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,b=g.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;r||(b=b.toLowerCase(),w=w?w.toLowerCase():null,m=m.toLowerCase()),w&&y&&(w=zn(w,y)||w);const j=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let _=b===m||!l&&b.startsWith(m)&&b.charAt(j)==="/",C=w!=null&&(w===m||!l&&w.startsWith(m)&&w.charAt(m.length)==="/"),P={isActive:_,isPending:C,isTransitioning:v},U=_?n:void 0,R;typeof s=="function"?R=s(P):R=[s,_?"active":null,C?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let V=typeof c=="function"?c(P):c;return k.createElement(xe,da({},h,{"aria-current":U,className:R,ref:i,style:V,to:o,viewTransition:d}),typeof u=="function"?u(P):u)});var $o;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($o||($o={}));var Du;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Du||(Du={}));function s1(t){let e=k.useContext(Ta);return e||pe(!1),e}function a1(t,e){let{target:i,replace:n,state:r,preventScrollReset:s,relative:l,viewTransition:c}=e===void 0?{}:e,o=xm(),d=Dn(),u=Pa(t,{relative:l});return k.useCallback(h=>{if(Yv(h,i)){h.preventDefault();let f=n!==void 0?n:ca(d)===ca(u);o(t,{replace:f,state:r,preventScrollReset:s,relative:l,viewTransition:c})}},[d,o,u,n,r,i,t,s,l,c])}function l1(t,e){e===void 0&&(e={});let i=k.useContext(e1);i==null&&pe(!1);let{basename:n}=s1($o.useViewTransitionState),r=Pa(t,{relative:e.relative});if(!i.isTransitioning)return!1;let s=zn(i.currentLocation.pathname,n)||i.currentLocation.pathname,l=zn(i.nextLocation.pathname,n)||i.nextLocation.pathname;return Ro(r.pathname,l)!=null||Ro(r.pathname,s)!=null}let Jc="bc1qxy2kgdygjrsqtzq2n0r3am9w5vh9q5z8h6v0g7";const _i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f7931a'/%3E%3Cstop offset='1' stop-color='%23ffb347'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='58' fill='url(%23g)'/%3E%3Cpath fill='white' d='M79.4 51.7c1-6-3.7-9.2-9.9-11.3l2-7.9-4.8-1.2-1.9 7.7c-1.3-.3-2.5-.6-3.8-.9l1.9-7.8-4.8-1.1-2 7.9c-1-.2-1.9-.4-2.8-.7v-.1l-6.6-1.6-1.3 5.1s3.6.8 3.5.9c2 .5 2.4 1.9 2.3 3l-2.2 8.8c.1 0 .3.1.5.1l-.5-.1-3.1 12.6c-.2.7-.8 1.8-2.2 1.5.1.1-3.5-.9-3.5-.9l-2.4 5.5 6.2 1.6c1.2.3 2.4.7 3.6.9l-2 8 4.8 1.2 2-7.9c1.3.4 2.6.7 3.9 1l-2 7.8 4.8 1.2 2-8c8.3 1.6 14.5 1 17.1-6.5 2.1-6 0-9.5-4.4-11.8 3.2-.7 5.6-2.8 6.6-7.1zm-11.8 16.5c-1.5 6-11.5 2.8-14.8 2l2.7-10.8c3.3.8 13.7 2.5 12.1 8.8zm1.5-16.6c-1.4 5.5-9.8 2.7-12.5 2l2.5-9.8c2.7.7 11.5 2.1 10 7.8z'/%3E%3C/svg%3E",Do={id:"user-1",email:"trader@btcplatform.com",name:"Alex Thompson",avatar:_i,password:"password123",btcBalance:.245,usdBalance:15850.75,stakeAmount:2.5,isVerified:!0,verificationStatus:"approved",vipLevel:3,joinedDate:"2024-01-15",role:"user",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",timezone:"UTC-5",telegram:"@AlexTrader",kyc:{fullName:"Alex Thompson",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",documentType:"passport",frontImage:"passport-front.jpg",backImage:"passport-back.jpg",status:"approved"}},km=[{rank:1,name:"CryptoKing",avatar:"https://randomuser.me/api/portraits/men/57.jpg",profit:156780,winRate:87,trades:1245},{rank:2,name:"DiamondHands",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Diamond",profit:98340,winRate:82,trades:892},{rank:3,name:"WhaleTrader",avatar:"https://randomuser.me/api/portraits/women/63.jpg",profit:87650,winRate:79,trades:1567},{rank:4,name:"MoonWalker",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Moon",profit:65430,winRate:85,trades:723},{rank:5,name:"BullRunner",avatar:"https://randomuser.me/api/portraits/men/41.jpg",profit:54320,winRate:78,trades:1089},{rank:6,name:"SilverFox",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Silver",profit:43210,winRate:81,trades:654},{rank:7,name:"GoldRush",avatar:"https://randomuser.me/api/portraits/women/71.jpg",profit:38760,winRate:76,trades:921},{rank:8,name:"DiamondPro",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=DiamondPro",profit:32100,winRate:83,trades:567},{rank:9,name:"AlphaTrade",avatar:"https://randomuser.me/api/portraits/men/65.jpg",profit:28940,winRate:80,trades:834},{rank:10,name:"BetaWinner",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Beta",profit:25430,winRate:77,trades:712}],re=t=>t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),o1=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_BTC_AVATAR:_i,DEPOSIT_WALLET:Jc,formatNumber:re,mockLeaderboard:km,mockUser:Do},Symbol.toStringTag,{value:"Module"})),Bo=[{tier:"normal",name:"Normal",price:30,tradeWindowHours:4,leverage:1,description:"Entry AI plan for shorter sessions and lighter BTC momentum trading."},{tier:"pro",name:"Pro",price:40,tradeWindowHours:12,leverage:2,description:"Longer monitoring window with stronger position sizing and more signals."},{tier:"promex",name:"Pro Mex",price:65.55,tradeWindowHours:24,leverage:3,description:"Full-day auto trading plan with the deepest BTC trend tracking."}];function Zc(t){return Bo.find(e=>e.tier===t)??Bo[0]}function c1(t,e){const i=Zc(t),n=new Date().toISOString(),r=new Date(Date.now()+i.tradeWindowHours*60*60*1e3).toISOString();return{tier:i.tier,displayName:i.name,price:i.price,tradeWindowHours:i.tradeWindowHours,autoAmount:e,purchasedAt:n,expiresAt:r,lastAccruedAt:n,lockedAmount:e,currentProfit:0,totalTrades:0,totalProfit:0,active:!0}}function d1(t){return t/1e3*1e-4}const Io="https://api.exchange.coinbase.com/products/BTC-USD",u1="wss://ws-feed.exchange.coinbase.com",ed={"1m":60,"5m":300,"15m":900,"1h":3600,"4h":14400,"1D":86400};function h1(t){return ed[t]}async function Oo(t){const e=await fetch(t,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Market request failed: ${e.status}`);return e.json()}async function f1(){const[t,e]=await Promise.all([Oo(`${Io}/ticker`),Oo(`${Io}/stats`)]),i=Number(t.price||e.last),n=Number(e.open||i),r=Number(e.high||i),s=Number(e.low||i),l=Number(e.volume||0),c=n?(i-n)/n*100:0;return{price:i,open24h:n,change24h:c,high24h:r,low24h:s,volume24h:l,updatedAt:t.time||new Date().toISOString(),source:"live"}}function p1(t,e){const i=new WebSocket(u1);return i.addEventListener("open",()=>{e==null||e("open"),i.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker","heartbeat"]}))}),i.addEventListener("message",n=>{let r;try{r=JSON.parse(n.data)}catch{return}if(r.type!=="ticker"||r.product_id!=="BTC-USD")return;const s=Number(r.price),l=Number(r.open_24h||s),c=Number(r.high_24h||s),o=Number(r.low_24h||s),d=Number(r.volume_24h||0);Number.isFinite(s)&&t({price:s,open24h:l,change24h:l?(s-l)/l*100:0,high24h:Number.isFinite(c)?c:s,low24h:Number.isFinite(o)?o:s,volume24h:Number.isFinite(d)?d:0,updatedAt:r.time||new Date().toISOString(),source:"live"})}),i.addEventListener("error",()=>{e==null||e("error")}),i.addEventListener("close",()=>{e==null||e("closed")}),()=>{i.close()}}async function m1(t,e=120){const i=ed[t],n=new Date,r=new Date(n.getTime()-i*1e3*e),s=new URLSearchParams({granularity:String(i),start:r.toISOString(),end:n.toISOString()});return(await Oo(`${Io}/candles?${s.toString()}`)).sort((c,o)=>c[0]-o[0]).map(([c,o,d,u,h,f])=>({candle:{time:c,open:u,high:d,low:o,close:h},volume:{time:c,value:f,color:h>=u?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}))}function Bu(t=67500){return{price:t,open24h:t-420,change24h:.62,high24h:t+520,low24h:t-780,volume24h:18250,updatedAt:new Date().toISOString(),source:"fallback"}}function g1(t,e,i=120){const n=ed[t],r=Math.floor(Date.now()/1e3),s=[];let l=e;for(let c=i;c>0;c-=1){const o=r-c*n,d=(Math.random()-.48)*(e*.0035),u=l,h=Math.max(1e3,u+d),f=Math.max(u,h)+Math.random()*(e*.0012),g=Math.min(u,h)-Math.random()*(e*.0012),p=Math.random()*240+80;s.push({candle:{time:o,open:u,high:f,low:g,close:h},volume:{time:o,value:p,color:h>=u?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),l=h}return s}const x1=.005;function Iu(t,e,i){const n=Math.max(1/e-x1,.0025);return i==="up"?t*(1-n):t*(1+n)}function jm({entryPrice:t,exitPrice:e,amount:i,leverageValue:n,tradeDirection:r}){const s=(e-t)/t,l=r==="up"?s:-s,c=i*l*n;return{pnl:Math.max(-i,c),directionalMovePct:l*100}}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(t,e)=>{const i=k.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:o,...d},u)=>k.createElement("svg",{ref:u,...v1,width:r,height:r,stroke:n,strokeWidth:l?Number(s)*24/Number(r):s,className:["lucide",`lucide-${b1(t)}`,c].join(" "),...d},[...e.map(([h,f])=>k.createElement(h,f)),...Array.isArray(o)?o:[o]]));return i.displayName=`${t}`,i};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=H("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=H("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=H("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=H("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=H("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=H("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=H("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=H("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=H("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=H("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=H("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=H("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=H("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=H("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=H("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=H("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=H("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=H("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=H("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=H("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=H("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=H("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=H("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=H("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=H("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=H("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=H("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=H("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=H("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=H("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=H("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=H("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=H("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=H("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=H("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=H("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=H("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=H("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=H("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=H("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=H("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=H("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),I1=[{path:"/",icon:Cm,label:"Home"},{path:"/trade",icon:Wr,label:"Trade"},{path:"/finance",icon:Bi,label:"Finance"},{path:"/news",icon:_r,label:"News"},{path:"/profile",icon:Ur,label:"Profile"}],O1=[{path:"/admin",icon:id,label:"Admin Dashboard"}];function F1(){const{logout:t,user:e}=vi(),i=(e==null?void 0:e.role)==="admin";return a.jsxs("aside",{className:"app-sidebar",children:[a.jsx("style",{children:`
        .app-sidebar {
          width: 260px;
          background: linear-gradient(180deg, #0b0f15, #0a0d12);
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
        }
        .app-sidebar * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .sidebar-logo {
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f7931a, #ff9500);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-icon span {
          font-size: 22px;
          font-weight: 800;
          color: #000;
        }
        .logo-text h1 {
          font-size: 18px;
          font-weight: 700;
          color: #e8e8e8;
          letter-spacing: -0.5px;
        }
        .logo-text p {
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .sidebar-nav {
          flex: 1;
          padding: 16px 12px;
          overflow-y: auto;
        }
        .nav-section {
          margin-bottom: 24px;
        }
        .nav-section-title {
          font-size: 10px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0 12px;
          margin-bottom: 8px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #8894a5;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          margin-bottom: 4px;
          position: relative;
        }
        .nav-item:hover {
          background: #141a24;
          color: #e8eef8;
        }
        .nav-item.active {
          background: linear-gradient(180deg, rgba(20, 33, 52, 0.96), rgba(20, 33, 52, 0.72));
          color: #7cb0ff;
        }
        .nav-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 24px;
          background: #3478f6;
          border-radius: 0 3px 3px 0;
        }
        .nav-item-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        .nav-item-text {
          flex: 1;
        }
        .nav-item-badge {
          background: #f6465d;
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .nav-item-arrow {
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-item:hover .nav-item-arrow {
          opacity: 1;
        }
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border-radius: 8px;
          color: #666;
          text-decoration: none;
          font-size: 13px;
          transition: all 0.2s;
        }
        .footer-item:hover {
          background: #141a24;
          color: #8894a5;
        }
        .logout-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          width: 100%;
          border-radius: 8px;
          color: #f6465d;
          background: transparent;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 8px;
        }
        .logout-btn:hover {
          background: rgba(246, 70, 93, 0.1);
        }
        .admin-section {
          background: linear-gradient(135deg, rgba(52, 120, 246, 0.1), rgba(52, 120, 246, 0.05));
          border: 1px solid rgba(52, 120, 246, 0.2);
          border-radius: 10px;
          margin: 16px 12px;
          padding: 12px;
        }
        .admin-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .admin-badge {
          background: #3478f6;
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .admin-title {
          font-size: 11px;
          color: #888;
        }
        @media (max-width: 1023px) {
          .app-sidebar {
            display: none;
          }
        }
      `}),a.jsx("div",{className:"sidebar-logo",children:a.jsxs("div",{className:"logo-container",children:[a.jsx("div",{className:"logo-icon",children:a.jsx("span",{children:"₿"})}),a.jsxs("div",{className:"logo-text",children:[a.jsx("h1",{children:"BTC Trade"}),a.jsx("p",{children:"Pro Platform"})]})]})}),a.jsx("nav",{className:"sidebar-nav",children:i?a.jsxs("div",{className:"admin-section",children:[a.jsxs("div",{className:"admin-header",children:[a.jsx("span",{className:"admin-badge",children:"Admin"}),a.jsx("span",{className:"admin-title",children:"Back Office"})]}),O1.map(n=>{const r=n.icon;return a.jsxs($s,{to:n.path,className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[a.jsx(r,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:n.label})]},n.path)})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"nav-section",children:[a.jsx("div",{className:"nav-section-title",children:"Main Menu"}),I1.map(n=>{const r=n.icon;return a.jsxs($s,{to:n.path,className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[a.jsx(r,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:n.label}),a.jsx(E1,{className:"nav-item-arrow",size:16})]},n.path)})]}),a.jsxs("div",{className:"nav-section",children:[a.jsx("div",{className:"nav-section-title",children:"Support"}),a.jsxs($s,{to:"/support",className:({isActive:n})=>`nav-item ${n?"active":""}`,children:[a.jsx(zm,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:"Support Chat"}),a.jsx("span",{className:"nav-item-badge",children:"Live"})]})]})]})}),a.jsxs("div",{className:"sidebar-footer",children:[!i&&a.jsxs("div",{className:"footer-nav",children:[a.jsxs("a",{href:"#",className:"footer-item",children:[a.jsx(Tm,{size:16}),"Settings"]}),a.jsxs("a",{href:"#",className:"footer-item",children:[a.jsx(R1,{size:16}),"Help Center"]})]}),a.jsxs("button",{onClick:t,className:"logout-btn",children:[a.jsx(Em,{size:18}),"Sign Out"]})]})]})}function V1({btcPrice:t,btcChange24h:e,marketStatus:i}){var f,g;const{user:n,logout:r}=vi(),[s,l]=k.useState(!1),[c,o]=k.useState(!1),d=k.useRef(null),u=k.useRef(null),h=[{id:1,title:"Deposit Confirmed",message:"Your BTC deposit of 0.025 BTC has been confirmed",time:"2 min ago",unread:!0},{id:2,title:"Trade Closed",message:"BTC/USD settled with a +$150 result",time:"15 min ago",unread:!0},{id:3,title:"Withdrawal Processed",message:"Your wallet request is now complete",time:"1 hour ago",unread:!1}];return k.useEffect(()=>{const p=x=>{const y=x.target;y&&(s&&d.current&&!d.current.contains(y)&&l(!1),c&&u.current&&!u.current.contains(y)&&o(!1))};return document.addEventListener("mousedown",p),document.addEventListener("touchstart",p),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("touchstart",p)}},[s,c]),a.jsxs("header",{className:"pro-header",children:[a.jsx("style",{children:`
        .pro-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 14px 8px;
          background: rgba(15, 18, 26, 0.96);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px);
        }
        .pro-header * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .header-main,
        .header-right,
        .header-brand,
        .header-ticker,
        .summary-card,
        .profile-chip,
        .user-btn {
          display: flex;
          align-items: center;
        }
        .header-main {
          justify-content: space-between;
          gap: 10px;
          align-items: center;
        }
        .header-brand {
          gap: 10px;
          min-width: 0;
        }
        .brand-icon {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 18px;
          font-weight: 800;
          box-shadow: 0 8px 22px rgba(247, 147, 26, 0.2);
        }
        .brand-copy h1 {
          font-size: 14px;
          line-height: 1.1;
          font-weight: 700;
          color: #f5f7fb;
        }
        .brand-copy p {
          display: none;
        }
        .header-ticker {
          gap: 8px;
          min-width: 0;
          padding: 0;
          flex: 1;
          align-items: center;
          white-space: nowrap;
        }
        .ticker-top {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: auto;
          min-width: 0;
        }
        .ticker-middle {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: auto;
          min-width: 0;
        }
        .ticker-market-copy {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          min-width: 0;
          width: 100%;
          flex-wrap: wrap;
        }
        .ticker-cash-card {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          border-radius: 0;
          background: transparent;
          border: none;
        }
        .ticker-cash-copy {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ticker-cash-copy .summary-label {
          margin-bottom: 0;
        }
        .ticker-cash-copy .summary-value {
          white-space: nowrap;
        }
        .ticker-top .status-chip {
          display: none;
        }
        .ticker-symbol {
          color: #f5f7fb;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }
        .ticker-price {
          color: #f5f7fb;
          font-size: 15px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
          white-space: nowrap;
        }
        .ticker-change {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 7px;
          border-radius: 999px;
        }
        .ticker-change.positive {
          color: #0ecb81;
          background: rgba(14, 203, 129, 0.15);
        }
        .ticker-change.negative {
          color: #f6465d;
          background: rgba(246, 70, 93, 0.15);
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .balance-badge { display: none; }
        .balance-label {
          display: block;
          font-size: 10px;
          color: #7f8ea3;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .balance-value {
          color: #eef3fb;
          font-size: 13px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
        }
        .balance-value.btc {
          color: #f7931a;
        }
        .balance-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.08);
        }
        .header-btn,
        .user-btn {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          color: #d3dcea;
        }
        .header-btn {
          position: relative;
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .notification-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: #f6465d;
          border-radius: 50%;
        }
        .user-menu {
          position: relative;
        }
        .menu-backdrop {
          display: none;
        }
        .user-btn {
          gap: 8px;
          padding: 7px 10px;
          cursor: pointer;
          min-height: 38px;
        }
        .user-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f7931a, #ff9500);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 12px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .user-name {
          font-size: 13px;
          font-weight: 600;
          color: #eef3fb;
        }
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 220px;
          background: #131821;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          z-index: 1000;
        }
        .dropdown-header {
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .dropdown-name {
          font-weight: 600;
          color: #e8e8e8;
          margin-bottom: 2px;
        }
        .dropdown-email {
          font-size: 12px;
          color: #888;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #ccc;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-size: 13px;
        }
        .dropdown-item:hover {
          background: #252525;
          color: #e8e8e8;
        }
        .dropdown-item.danger {
          color: #f6465d;
        }
        .notification-dropdown {
          width: 360px;
          max-height: 400px;
          overflow-y: auto;
        }
        .notification-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .notification-title {
          font-weight: 600;
          color: #e8e8e8;
        }
        .notification-item {
          display: flex;
          gap: 12px;
          padding: 14px 16px;
          border-bottom: 1px solid #222;
        }
        .notification-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #252525;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f7931a;
          flex-shrink: 0;
        }
        .notification-content {
          flex: 1;
        }
        .notification-item-title {
          font-weight: 600;
          font-size: 13px;
          color: #e8e8e8;
          margin-bottom: 4px;
        }
        .notification-message,
        .notification-time {
          font-size: 12px;
          color: #888;
        }
        .unread-dot {
          width: 8px;
          height: 8px;
          background: #3478f6;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .header-summary {
          display: none;
        }
        .summary-card {
          justify-content: space-between;
          gap: 12px;
          min-width: 0;
          padding: 10px 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .summary-label {
          font-size: 11px;
          color: #7f8ea3;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 4px;
        }
        .summary-value {
          color: #f5f7fb;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 700;
        }
        .summary-sub {
          color: #7f8ea3;
          font-size: 12px;
          white-space: nowrap;
        }
        .profile-chip {
          gap: 10px;
        }
        .summary-user-name {
          font-size: 13px;
        }
        .status-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${i==="live"?"#0ecb81":"#f7931a"};
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        @media (max-width: 1023px) {
        }
        @media (max-width: 720px) {
          .pro-header {
            padding: 8px 10px 6px;
            gap: 6px;
          }
          .brand-copy p,
          .user-name {
            display: none;
          }
          .brand-copy h1 {
            font-size: 12px;
          }
          .header-ticker {
            gap: 6px;
          }
          .ticker-symbol {
            font-size: 8px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .ticker-market-copy {
            gap: 6px;
          }
          .ticker-price {
            font-size: 13px;
            line-height: 1;
          }
          .ticker-change {
            font-size: 9px;
            padding: 2px 6px;
            flex-shrink: 0;
          }
          .ticker-cash-copy .summary-label {
            font-size: 8px;
          }
          .ticker-cash-copy .summary-value {
            font-size: 11px;
          }
          .header-right .status-chip {
            display: none;
          }
          .ticker-top .status-chip {
            display: inline-flex;
            font-size: 8px;
            padding: 0;
            letter-spacing: 0.08em;
            flex-shrink: 0;
          }
          .summary-card {
            padding: 8px 10px;
            border-radius: 12px;
            gap: 8px;
          }
          .summary-label {
            font-size: 9px;
            margin-bottom: 2px;
          }
          .summary-value {
            font-size: 11px;
          }
          .summary-sub {
            font-size: 9px;
          }
          .user-avatar {
            width: 22px;
            height: 22px;
          }
          .notification-dropdown {
            width: min(88vw, 320px);
            max-height: min(64vh, 420px);
          }
          .status-chip {
            font-size: 10px;
            gap: 4px;
          }
          .menu-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(5, 9, 16, 0.22);
            backdrop-filter: blur(2px);
            z-index: 960;
          }
          .dropdown {
            position: fixed;
            top: 60px;
            right: 12px;
            left: auto;
            min-width: 0;
            width: min(88vw, 320px);
            border-radius: 16px;
            max-height: calc(100vh - 92px);
            z-index: 980;
          }
          .notification-dropdown {
            width: min(88vw, 320px);
          }
          .dropdown-header,
          .notification-header {
            padding: 12px;
          }
          .dropdown-name {
            font-size: 13px;
          }
          .dropdown-email {
            font-size: 10px;
            word-break: break-word;
          }
          .dropdown-item {
            padding: 12px;
            font-size: 13px;
          }
          .notification-item {
            padding: 12px;
            gap: 9px;
          }
          .notification-item-title {
            font-size: 11px;
          }
          .notification-message,
          .notification-time {
            font-size: 10px;
            line-height: 1.45;
          }
          .notification-icon {
            width: 30px;
            height: 30px;
          }
          .header-btn,
          .user-btn {
            border-radius: 12px;
          }
        }
      `}),a.jsxs("div",{className:"header-main",children:[a.jsxs("div",{className:"header-brand",children:[a.jsx("div",{className:"brand-icon",children:"₿"}),a.jsx("div",{className:"brand-copy",children:a.jsx("h1",{children:"BTC Trade Pro"})})]}),a.jsx("div",{className:"header-ticker",children:a.jsxs("div",{className:"ticker-market-copy",children:[a.jsxs("div",{className:"ticker-top",children:[a.jsx("span",{className:"ticker-symbol",children:"BTC/USD"}),a.jsxs("div",{className:"status-chip",children:[i==="live"?a.jsx(qu,{size:14}):a.jsx(Uu,{size:14}),i]})]}),a.jsxs("div",{className:"ticker-middle",children:[a.jsxs("span",{className:"ticker-price",children:["$",t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("span",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]}),a.jsxs("div",{className:"ticker-cash-card",children:[a.jsxs("div",{className:"ticker-cash-copy",children:[a.jsx("div",{className:"summary-label",children:"Cash Balance"}),a.jsxs("div",{className:"summary-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]})]})}),a.jsxs("div",{className:"header-right",children:[a.jsx("div",{className:"balance-badge",children:a.jsxs("div",{children:[a.jsx("span",{className:"balance-label",children:"USD"}),a.jsxs("span",{className:"balance-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]})}),a.jsxs("div",{className:"user-menu",ref:u,children:[c&&a.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>o(!1),"aria-label":"Close notifications"}),a.jsxs("button",{className:"header-btn",onClick:()=>o(!c),children:[a.jsx(k1,{size:20}),a.jsx("span",{className:"notification-dot"})]}),c&&a.jsxs("div",{className:"dropdown notification-dropdown",children:[a.jsxs("div",{className:"notification-header",children:[a.jsx("span",{className:"notification-title",children:"Notifications"}),a.jsx("span",{style:{color:"#3478f6",fontSize:"12px",cursor:"pointer"},children:"Mark all as read"})]}),h.map(p=>a.jsxs("div",{className:"notification-item",children:[a.jsx("div",{className:"notification-icon",children:a.jsx(Bi,{size:16})}),a.jsxs("div",{className:"notification-content",children:[a.jsx("div",{className:"notification-item-title",children:p.title}),a.jsx("div",{className:"notification-message",children:p.message}),a.jsx("div",{className:"notification-time",children:p.time})]}),p.unread&&a.jsx("div",{className:"unread-dot"})]},p.id))]})]}),a.jsxs("div",{className:"user-menu",ref:d,children:[s&&a.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>l(!1),"aria-label":"Close profile menu"}),a.jsxs("button",{className:"user-btn",onClick:()=>l(!s),children:[a.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?a.jsx("img",{src:n.avatar,alt:n.name||"User"}):((f=n==null?void 0:n.name)==null?void 0:f.charAt(0).toUpperCase())||"U"}),a.jsx("span",{className:"user-name",children:(n==null?void 0:n.name)||"User"}),a.jsx(C1,{size:16,color:"#888"})]}),s&&a.jsxs("div",{className:"dropdown",children:[a.jsxs("div",{className:"dropdown-header",children:[a.jsx("div",{className:"dropdown-name",children:n==null?void 0:n.name}),a.jsx("div",{className:"dropdown-email",children:n==null?void 0:n.email})]}),a.jsxs(xe,{to:"/profile",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(Ur,{size:16}),"Profile"]}),a.jsxs(xe,{to:"/finance",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(Bi,{size:16}),"Wallet"]}),a.jsxs(xe,{to:"/profile",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(Tm,{size:16}),"Settings"]}),a.jsxs("button",{className:"dropdown-item danger",onClick:()=>{r(),l(!1)},children:[a.jsx(Em,{size:16}),"Sign Out"]})]})]})]})]}),a.jsx("div",{className:"header-summary",children:a.jsxs("div",{className:"summary-card summary-user-card",children:[a.jsxs("div",{className:"profile-chip",children:[a.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?a.jsx("img",{src:n.avatar,alt:n.name||"User"}):((g=n==null?void 0:n.name)==null?void 0:g.charAt(0).toUpperCase())||"U"}),a.jsxs("div",{children:[a.jsx("div",{className:"summary-label",children:"Signed In"}),a.jsx("div",{className:"summary-value summary-user-name",children:(n==null?void 0:n.name)||"User"})]})]}),a.jsxs("div",{className:"status-chip",children:[i==="live"?a.jsx(qu,{size:14}):a.jsx(Uu,{size:14}),i]})]})})]})}const W1=[{path:"/",label:"Home",icon:Cm},{path:"/trade",label:"Trade",icon:Wr},{path:"/news",label:"News",icon:_r},{path:"/finance",label:"Wallet",icon:Bi},{path:"/profile",label:"Profile",icon:Ur}],U1=[{path:"/admin",label:"Admin",icon:id}];function q1(){const{user:t}=vi(),e=(t==null?void 0:t.role)==="admin"?U1:W1;return a.jsxs("nav",{className:"mobile-nav-shell",children:[a.jsx("style",{children:`
        .mobile-nav-shell {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 120;
          display: none;
          padding: 0 14px 14px;
          pointer-events: none;
        }
        .mobile-nav {
          display: grid;
          grid-template-columns: repeat(${e.length}, 1fr);
          gap: 8px;
          background: rgba(10, 14, 21, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: 10px 12px;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(18px);
          pointer-events: auto;
        }
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          color: #7f8ea3;
          font-size: 11px;
          font-weight: 600;
          padding: 8px 4px;
          border-radius: 16px;
          transition: all 0.2s ease;
        }
        .mobile-nav-item.active {
          color: #f5f7fb;
          background: linear-gradient(180deg, rgba(247, 147, 26, 0.2), rgba(52, 120, 246, 0.12));
        }
        .mobile-nav-item.active .mobile-nav-icon {
          color: #f7931a;
        }
        .mobile-nav-icon {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 1023px) {
          .mobile-nav-shell {
            display: block;
          }
        }
      `}),a.jsx("div",{className:"mobile-nav",children:e.map(i=>{const n=i.icon;return a.jsxs($s,{to:i.path,className:({isActive:r})=>`mobile-nav-item ${r?"active":""}`,children:[a.jsx(n,{className:"mobile-nav-icon"}),a.jsx("span",{children:i.label})]},i.path)})})]})}class H1 extends Si.Component{constructor(){super(...arguments);Xr(this,"state",{hasError:!1});Xr(this,"handleReload",()=>{window.location.reload()});Xr(this,"handleReset",()=>{localStorage.removeItem("btcActiveTrade"),localStorage.removeItem("btcTradeResult"),window.location.reload()})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i){console.error("App runtime error:",i)}render(){return this.state.hasError?a.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg, #070b11, #0b1119)",padding:"24px"},children:a.jsxs("div",{style:{width:"min(520px, 100%)",borderRadius:"28px",padding:"28px",background:"rgba(15, 19, 28, 0.96)",border:"1px solid rgba(255, 255, 255, 0.08)",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.32)",color:"#eef3fb"},children:[a.jsx("div",{style:{fontSize:"28px",fontWeight:800,marginBottom:"10px"},children:"BTCTradePro"}),a.jsx("div",{style:{fontSize:"20px",fontWeight:700,marginBottom:"8px"},children:"We hit a runtime error"}),a.jsx("p",{style:{color:"#8fa2ba",lineHeight:1.6,marginBottom:"18px"},children:"The app was protected from a blank crash screen. Reload the page, or reset the current trade cache if the issue came from old saved trade data."}),a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[a.jsx("button",{onClick:this.handleReload,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"none",background:"linear-gradient(135deg, #f7931a, #ffb347)",color:"#111",fontWeight:800},children:"Reload app"}),a.jsx("button",{onClick:this.handleReset,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(255, 255, 255, 0.04)",color:"#eef3fb",fontWeight:700},children:"Reset trade cache"})]})]})}):this.props.children}}const Pm="/assets/hero-DYsT3BwZ.mp4",K1=[{symbol:"ETH",name:"Ethereum",price:3120.44,change:1.18,high:3186.2,low:3068.55},{symbol:"SOL",name:"Solana",price:167.23,change:2.74,high:170.84,low:160.92},{symbol:"XRP",name:"XRP",price:.6542,change:-.42,high:.6674,low:.6418},{symbol:"BNB",name:"BNB",price:604.72,change:.88,high:613.11,low:596.42}],Hu=[{id:"n1",title:"ETF inflows keep Bitcoin demand elevated through the New York session",meta:"Macro Flow",image:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80"},{id:"n2",title:"Miners tighten supply while spot desks track fresh BTC accumulation",meta:"Mining",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80"},{id:"n3",title:"Traders watch the next reclaim zone as BTC volatility expands again",meta:"Technical",image:"https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=900&q=80"},{id:"n4",title:"Market desks watch BTC liquidity as U.S. trading opens with stronger spot demand",meta:"Liquidity",image:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=900&q=80"},{id:"n5",title:"Bitcoin options activity rises as traders position for a bigger breakout range",meta:"Derivatives",image:"https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80"},{id:"n6",title:"Macro desks rotate back into BTC as risk appetite improves across crypto markets",meta:"Macro",image:"https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80"}],X1=[{year:"2009",title:"Genesis block mined",text:"Bitcoin launched as the first decentralized digital asset network."},{year:"2017",title:"Global breakout cycle",text:"BTC reached mainstream awareness and became a major macro market conversation."},{year:"2024",title:"Spot ETF era",text:"Institutional access deepened and daily market participation broadened."}],Ku=[{name:"Sarah Miller",role:"Swing Trader",avatar:"https://randomuser.me/api/portraits/women/68.jpg",text:"The mobile layout finally feels like a real trading app. I can check BTC, wallet status, and support without hunting around.",profit:"+$12,450"},{name:"Daniel Brooks",role:"Day Trader",avatar:"https://randomuser.me/api/portraits/men/75.jpg",text:"The trade desk is clean, the chart is live, and the admin-confirmed wallet flow makes the demo feel much closer to a real exchange.",profit:"+$8,930"},{name:"Emily Park",role:"BTC Investor",avatar:"https://randomuser.me/api/portraits/women/44.jpg",text:"Profile, deposit, and review sections now look premium. This feels much more trustworthy than a generic crypto landing page.",profit:"+$21,600"},{name:"Noah Grant",role:"Scalp Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Noah",text:"Phone version feels way tighter now and the quick wallet flow is actually believable.",profit:"+$4,180"},{name:"Amelia Ross",role:"Portfolio Manager",avatar:"https://randomuser.me/api/portraits/women/52.jpg",text:"I like that the KYC and admin approval flow now feels connected instead of fake.",profit:"+$15,700"},{name:"Leo Quinn",role:"Momentum Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Leo",text:"Great trade interface. The chart and wallet behavior make the whole demo feel more serious.",profit:"+$6,520"},{name:"Mia Lopez",role:"BTC Analyst",avatar:"https://randomuser.me/api/portraits/women/22.jpg",text:"The profile system is much better with avatar choice and editable trader details.",profit:"+$9,410"},{name:"Kai Mercer",role:"Algo Trader",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Kai",text:"The moving review strip and mixed avatar style make the home page feel more alive.",profit:"+$11,230"},{name:"Sophia Reed",role:"Long-Term Holder",avatar:"https://randomuser.me/api/portraits/women/31.jpg",text:"Deposit first, admin review later, balance updates after approval. That flow now makes sense.",profit:"+$3,890"},{name:"Ethan Cruz",role:"Macro Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Ethan",text:"The landing page now feels like an actual product page, not a login wall.",profit:"+$13,040"},{name:"Grace Park",role:"Futures Trader",avatar:"https://randomuser.me/api/portraits/women/57.jpg",text:"Top trader cards and reviews now look premium on my phone, which matters a lot.",profit:"+$18,660"},{name:"Mason Cole",role:"High-Frequency Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Mason",text:"The whole platform is closer to a professional exchange demo now.",profit:"+$7,880"}],Q1=["All","0 Fees","50% Fees","Margin Trading","RWA","SOL Ecosystem"],Qi={BTC:{icon:"₿",favorite:!0,tags:["10X"],bg:"#ffb11a",color:"#fff"},ETH:{icon:"Ξ",favorite:!0,tags:["10X"],bg:"#0c0d10",color:"#fff"},XRP:{icon:"✕",favorite:!0,tags:["10X"],bg:"#0b0b0d",color:"#fff"},SOL:{icon:"S",tags:["10X"],bg:"#0f1720",color:"#67ffd8"},BNB:{icon:"◇",tags:["10X"],bg:"#f3ba2f",color:"#111"}};function Y1(){const{btcPrice:t,btcChange24h:e,btcHigh24h:i,btcLow24h:n,btcVolume24h:r,marketStatus:s,marketReady:l}=Kr(),c={symbol:"BTC",name:"Bitcoin",price:t,change:e,volume:r,high:i,low:n};return a.jsxs("div",{className:"home-shell",children:[a.jsx("style",{children:`
        .home-shell {
          color: #eef3fb;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .glass-card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
        }
        .hero-card {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          padding: 36px;
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(3, 7, 18, 0.9) 18%, rgba(3, 7, 18, 0.52) 58%, rgba(3, 7, 18, 0.85) 100%),
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.22), transparent 34%);
        }
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(340px, 0.8fr);
          gap: 28px;
          align-items: end;
          min-height: 448px;
        }
        .hero-copy {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: #f6b353;
          width: fit-content;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: clamp(34px, 5vw, 62px);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 800;
          max-width: 10ch;
        }
        .hero-title span {
          color: #f6b353;
        }
        .hero-text {
          color: #b5c0d0;
          font-size: 16px;
          line-height: 1.7;
          max-width: 56ch;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 20px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease;
        }
        .hero-btn:hover {
          transform: translateY(-2px);
        }
        .hero-btn.primary {
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          box-shadow: 0 16px 36px rgba(247, 147, 26, 0.28);
        }
        .hero-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #eef3fb;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hero-aside {
          display: grid;
          gap: 16px;
        }
        .market-hero-card {
          padding: 22px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(12, 17, 25, 0.88), rgba(7, 11, 17, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-hero-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }
        .market-hero-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .market-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 24px;
          font-weight: 800;
        }
        .market-hero-label {
          color: #8fa2ba;
          font-size: 12px;
          margin-top: 4px;
        }
        .market-status {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${s==="live"?"#0ecb81":"#f6b353"};
        }
        .market-hero-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 10px;
        }
        .market-hero-price.loading {
          color: #8fa2ba;
        }
        .market-hero-change {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 18px;
        }
        .market-hero-change.up {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .market-hero-change.down {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .market-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .market-stat {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }
        .market-stat-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .market-stat-value {
          color: #eef3fb;
          font-weight: 700;
          font-size: 15px;
          font-family: 'JetBrains Mono', monospace;
        }
        .quick-grid,
        .story-grid,
        .timeline-grid {
          display: grid;
          gap: 16px;
        }
        .quick-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .quick-card {
          padding: 20px;
        }
        .quick-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          background: rgba(247, 147, 26, 0.12);
          color: #f6b353;
        }
        .quick-value {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.03em;
        }
        .quick-label {
          font-size: 13px;
          color: #90a0b6;
        }
        .section-card {
          padding: 24px;
        }
        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }
        .section-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .section-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7cb0ff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .story-marquee {
          overflow: hidden;
          position: relative;
        }
        .story-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: story-scroll 34s linear infinite;
        }
        .story-track:hover {
          animation-play-state: paused;
        }
        .story-card {
          overflow: hidden;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          min-width: 320px;
          max-width: 320px;
        }
        .story-image {
          width: 100%;
          height: 172px;
          object-fit: cover;
        }
        @keyframes story-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .story-copy {
          padding: 18px;
        }
        .story-meta {
          color: #f6b353;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .story-title {
          font-size: 18px;
          line-height: 1.35;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .story-cta {
          color: #7cb0ff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .market-table {
          background: linear-gradient(180deg, rgba(18, 22, 31, 0.98), rgba(14, 18, 26, 0.96));
          color: #eef3fb;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.26);
        }
        .market-filters {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .market-filters::-webkit-scrollbar {
          display: none;
        }
        .market-filterbar {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.01);
        }
        .market-filter-chip {
          flex: 0 0 auto;
          min-height: 46px;
          padding: 0 18px;
          border: 0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #99a6b8;
          font-size: 14px;
          font-weight: 500;
        }
        .market-filter-chip.active {
          background: rgba(243, 162, 39, 0.14);
          color: #f3a227;
          font-weight: 700;
        }
        .market-list-head,
        .market-list-row {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
          gap: 16px;
          align-items: center;
          padding: 18px;
        }
        .market-list-head {
          color: #8f9cb0;
          font-size: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-list-head-right {
          text-align: right;
        }
        .market-list-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-list-row:last-child {
          border-bottom: 0;
        }
        .market-pair {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .market-star {
          color: #f3a227;
          flex: 0 0 auto;
        }
        .market-star.off {
          color: #667386;
        }
        .market-coin {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 800;
          flex: 0 0 auto;
        }
        .market-pair-copy {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          min-width: 0;
        }
        .market-pair-copy strong {
          font-size: 18px;
          letter-spacing: -0.02em;
          color: #f2f6fc;
        }
        .market-pair-copy strong span {
          color: #8f9cb0;
          font-weight: 600;
        }
        .market-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 30px;
          padding: 0 10px;
          border-radius: 8px;
          background: rgba(243, 162, 39, 0.14);
          color: #f3a227;
          font-size: 12px;
          font-weight: 700;
        }
        .market-price-block {
          text-align: right;
        }
        .market-price-main {
          color: #f2f6fc;
          font-size: 18px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: -0.02em;
        }
        .market-price-change {
          margin-top: 4px;
          font-size: 13px;
          font-weight: 700;
        }
        .timeline-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .timeline-card {
          padding: 22px;
        }
        .timeline-year {
          color: #f6b353;
          font-weight: 800;
          font-size: 28px;
          margin-bottom: 10px;
        }
        .timeline-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .timeline-text {
          color: #9ca9bc;
          line-height: 1.65;
          font-size: 14px;
        }
        .leaderboard-list {
          display: grid;
          gap: 12px;
        }
        .reviews-marquee {
          overflow: hidden;
          position: relative;
        }
        .reviews-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: reviews-scroll 46s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
        .review-card {
          padding: 22px;
          min-width: 320px;
          max-width: 320px;
        }
        .review-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .review-head img {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          object-fit: cover;
        }
        .review-role {
          color: #8fa2ba;
          font-size: 12px;
        }
        .review-text {
          color: #c7d1de;
          line-height: 1.75;
          font-size: 14px;
          margin-bottom: 14px;
        }
        .review-profit {
          color: #0ecb81;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .site-footer {
          display: grid;
          grid-template-columns: 1.35fr repeat(3, 1fr);
          gap: 28px;
          padding: 10px 4px 0;
          margin-top: 2px;
        }
        .footer-brand {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .footer-coin {
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-size: 24px;
          font-weight: 800;
          box-shadow: 0 18px 40px rgba(247, 147, 26, 0.24);
        }
        .footer-brand h3 {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 10px;
        }
        .footer-brand p,
        .footer-link,
        .footer-bottom {
          color: #9aa7b9;
          line-height: 1.7;
          font-size: 14px;
        }
        .footer-title {
          font-size: 12px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-link {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #eef3fb;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .leaderboard-row {
          display: grid;
          grid-template-columns: 64px minmax(0, 1.2fr) 1fr 1fr;
          gap: 12px;
          align-items: center;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }
        .leaderboard-rank {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(247, 147, 26, 0.16);
          color: #f6b353;
          font-weight: 800;
        }
        .leaderboard-user {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .leaderboard-avatar {
          width: 42px;
          height: 42px;
          border-radius: 14px;
        }
        .leaderboard-user strong {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .leaderboard-user span {
          color: #8fa2ba;
          font-size: 12px;
        }
        @media (max-width: 1180px) {
          .hero-grid {
            grid-template-columns: 1fr;
            align-items: start;
          }
          .quick-grid,
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .site-footer {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 820px) {
          .hero-card {
            min-height: unset;
            padding: 22px;
          }
          .hero-text {
            font-size: 15px;
          }
          .market-stats,
          .quick-grid,
          .timeline-grid,
          .site-footer {
            grid-template-columns: 1fr;
          }
          .review-card {
            min-width: 280px;
            max-width: 280px;
          }
          .story-card {
            min-width: 280px;
            max-width: 280px;
          }
          .market-hero-card,
          .section-card {
            padding: 18px;
          }
          .market-table,
          .leaderboard-list,
          .timeline-grid {
            gap: 16px;
          }
          .market-table {
            border-radius: 22px;
          }
          .market-filterbar,
          .market-list-head,
          .market-list-row {
            padding-left: 14px;
            padding-right: 14px;
          }
          .market-filter-chip {
            min-height: 40px;
            padding: 0 14px;
            font-size: 13px;
          }
          .market-list-head,
          .market-list-row {
            grid-template-columns: minmax(0, 1fr) minmax(128px, auto);
            gap: 10px;
          }
          .market-pair {
            gap: 10px;
          }
          .market-coin {
            width: 40px;
            height: 40px;
            font-size: 19px;
          }
          .market-pair-copy strong {
            font-size: 15px;
          }
          .market-tag {
            min-height: 26px;
            padding: 0 8px;
            font-size: 11px;
          }
          .market-price-main {
            font-size: 16px;
          }
          .market-price-change {
            font-size: 12px;
          }
          .leaderboard-list {
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 4px;
          }
          .leaderboard-list::-webkit-scrollbar {
            display: none;
          }
          .leaderboard-row {
            min-width: 100%;
            width: 100%;
            grid-template-columns: 40px minmax(0, 1fr) minmax(78px, auto) minmax(56px, auto);
            gap: 8px;
            padding: 12px;
            border-radius: 16px;
            box-sizing: border-box;
          }
          .leaderboard-rank {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            font-size: 12px;
          }
          .leaderboard-avatar {
            width: 34px;
            height: 34px;
            border-radius: 12px;
          }
          .leaderboard-user {
            gap: 8px;
          }
          .leaderboard-user strong {
            font-size: 12px;
          }
          .leaderboard-user span,
          .market-cell-label {
            font-size: 10px;
          }
          .market-cell-value {
            font-size: 11px;
          }
          .timeline-card {
            padding: 18px;
            margin-right: 0;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.07);
            box-shadow: none;
          }
          .timeline-year {
            font-size: 22px;
            margin-bottom: 6px;
          }
          .timeline-title {
            font-size: 16px;
          }
          .timeline-text {
            font-size: 13px;
            max-width: 30ch;
          }
        }
      `}),a.jsxs("section",{className:"hero-card glass-card",children:[a.jsx("video",{className:"hero-video",src:Pm,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),a.jsx("div",{className:"hero-overlay"}),a.jsxs("div",{className:"hero-grid",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx(ci,{size:14}),"Professional BTC demo workspace"]}),a.jsxs("h1",{className:"hero-title",children:["Trade ",a.jsx("span",{children:"Bitcoin"})," with a cleaner pro layout on every screen."]}),a.jsx("p",{className:"hero-text",children:"Live BTC pricing, mobile-first navigation, dedicated trade and wallet flows, and a home screen that feels like a real market desk instead of one stretched page."}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs(xe,{to:"/trade",className:"hero-btn primary",children:["Open Trade Desk",a.jsx(Ds,{size:18})]}),a.jsx(xe,{to:"/finance",className:"hero-btn secondary",children:"Go to Deposit"})]})]}),a.jsx("div",{className:"hero-aside",children:a.jsxs("div",{className:"market-hero-card",children:[a.jsxs("div",{className:"market-hero-header",children:[a.jsxs("div",{className:"market-hero-meta",children:[a.jsx("div",{className:"market-icon",children:"₿"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Bitcoin / USD"}),a.jsx("div",{className:"market-hero-label",children:"Real-time market sync"})]})]}),a.jsx("div",{className:"market-status",children:l?s:"loading"})]}),a.jsx("div",{className:`market-hero-price ${l?"":"loading"}`,children:l?`$${c.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),l&&a.jsxs("div",{className:`market-hero-change ${c.change>=0?"up":"down"}`,children:[c.change>=0?a.jsx(Wr,{size:16}):a.jsx(_m,{size:16}),c.change>=0?"+":"",c.change.toFixed(2),"%"]}),a.jsxs("div",{className:"market-stats",children:[a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h High"}),a.jsxs("div",{className:"market-stat-value",children:["$",c.high.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h Low"}),a.jsxs("div",{className:"market-stat-value",children:["$",c.low.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h Volume"}),a.jsxs("div",{className:"market-stat-value",children:[c.volume.toLocaleString(void 0,{maximumFractionDigits:0})," BTC"]})]})]})]})})]})]}),a.jsxs("section",{className:"quick-grid",children:[a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(Bi,{size:22})}),a.jsx("div",{className:"quick-value",children:"$2.4B"}),a.jsx("div",{className:"quick-label",children:"Spot and derivatives volume across the desk"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(td,{size:22})}),a.jsx("div",{className:"quick-value",children:"1m / 5m / 1h / 1D"}),a.jsx("div",{className:"quick-label",children:"Timeframes available on the BTC trade chart"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(L1,{size:22})}),a.jsx("div",{className:"quick-value",children:"156"}),a.jsx("div",{className:"quick-label",children:"Countries simulated for the global trading audience"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(Sm,{size:22})}),a.jsx("div",{className:"quick-value",children:"24 / 7"}),a.jsx("div",{className:"quick-label",children:"Always-on BTC market monitoring and wallet access"})]})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"BTC news on the current home screen"}),a.jsxs(xe,{to:"/news",className:"section-link",children:["More news",a.jsx(Ds,{size:16})]})]}),a.jsx("div",{className:"story-marquee",children:a.jsx("div",{className:"story-track",children:[...Hu,...Hu].map((o,d)=>a.jsxs("article",{className:"story-card",children:[a.jsx("img",{src:o.image,alt:o.title,className:"story-image"}),a.jsxs("div",{className:"story-copy",children:[a.jsx("div",{className:"story-meta",children:o.meta}),a.jsx("div",{className:"story-title",children:o.title}),a.jsx(xe,{to:"/news",className:"story-cta",children:"Read market brief"})]})]},`${o.id}-${d}`))})})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"Market board"}),a.jsxs(xe,{to:"/trade",className:"section-link",children:["Trade BTC",a.jsx(Ds,{size:16})]})]}),a.jsx("div",{className:"market-table",children:a.jsxs("div",{style:{width:"100%"},children:[a.jsx("div",{className:"market-filterbar",children:a.jsx("div",{className:"market-filters",children:Q1.map((o,d)=>a.jsx("button",{type:"button",className:`market-filter-chip ${d===0?"active":""}`,children:o},o))})}),a.jsxs("div",{className:"market-list-head",children:[a.jsx("div",{children:"Trading Pairs"}),a.jsx("div",{className:"market-list-head-right",children:"Last Traded Price/24H Change %"})]}),[c,...K1].map(o=>{var d,u,h,f,g,p;return a.jsxs("div",{className:"market-list-row",children:[a.jsxs("div",{className:"market-pair",children:[a.jsx(D1,{size:18,fill:(d=Qi[o.symbol])!=null&&d.favorite?"currentColor":"none",className:`market-star ${(u=Qi[o.symbol])!=null&&u.favorite?"":"off"}`}),a.jsx("div",{className:"market-coin",style:{background:((h=Qi[o.symbol])==null?void 0:h.bg)||"#e7eefc",color:((f=Qi[o.symbol])==null?void 0:f.color)||"#2b5db6"},children:((g=Qi[o.symbol])==null?void 0:g.icon)||o.symbol.charAt(0)}),a.jsxs("div",{className:"market-pair-copy",children:[a.jsxs("strong",{children:[o.symbol,a.jsx("span",{children:"/USDT"})]}),(((p=Qi[o.symbol])==null?void 0:p.tags)||[]).map(x=>a.jsx("span",{className:"market-tag",children:x},`${o.symbol}-${x}`))]})]}),a.jsxs("div",{className:"market-price-block",children:[a.jsx("div",{className:"market-price-main",children:o.price.toLocaleString(void 0,{minimumFractionDigits:o.price>1?2:4,maximumFractionDigits:o.price>1?2:4})}),a.jsxs("div",{className:"market-price-change",style:{color:o.change>0?"#0ecb81":o.change<0?"#f6465d":"#9aa3b1"},children:[o.change>0?"+":"",o.change.toFixed(2),"%"]})]})]},o.symbol)})]})})]}),a.jsx("section",{className:"timeline-grid",children:X1.map(o=>a.jsxs("div",{className:"timeline-card glass-card",children:[a.jsx("div",{className:"timeline-year",children:o.year}),a.jsx("div",{className:"timeline-title",children:o.title}),a.jsx("div",{className:"timeline-text",children:o.text})]},o.year))}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"Top BTC traders"}),a.jsxs("div",{className:"section-link",children:[a.jsx(_r,{size:15}),"Monthly ranking"]})]}),a.jsx("div",{className:"leaderboard-list",children:km.slice(0,5).map(o=>a.jsxs("div",{className:"leaderboard-row",children:[a.jsx("div",{className:"leaderboard-rank",children:o.rank}),a.jsxs("div",{className:"leaderboard-user",children:[a.jsx("img",{src:o.avatar,alt:o.name,className:"leaderboard-avatar"}),a.jsxs("div",{children:[a.jsx("strong",{children:o.name}),a.jsxs("span",{children:[o.trades," trades"]})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"market-cell-label",children:"Profit"}),a.jsxs("div",{className:"market-cell-value",style:{color:"#0ecb81"},children:["$",o.profit.toLocaleString()]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"market-cell-label",children:"Win rate"}),a.jsxs("div",{className:"market-cell-value",children:[o.winRate,"%"]})]})]},o.rank))})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsx("div",{className:"section-head",children:a.jsx("div",{className:"section-title",children:"What traders are saying"})}),a.jsx("div",{className:"reviews-marquee",children:a.jsx("div",{className:"reviews-track",children:[...Ku,...Ku].map((o,d)=>a.jsxs("article",{className:"review-card glass-card",children:[a.jsxs("div",{className:"review-head",children:[a.jsx("img",{src:o.avatar,alt:o.name}),a.jsxs("div",{children:[a.jsx("strong",{children:o.name}),a.jsx("div",{className:"review-role",children:o.role})]})]}),a.jsx("div",{className:"review-text",children:o.text}),a.jsx("div",{className:"review-profit",children:o.profit})]},`${o.name}-${d}`))})})]}),a.jsxs("footer",{className:"site-footer",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-coin",children:"₿"}),a.jsxs("div",{children:[a.jsx("h3",{children:"BTCTradePro"}),a.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Products"}),a.jsxs("div",{className:"footer-links",children:[a.jsx(xe,{to:"/trade",className:"footer-link",children:"Spot Trading"}),a.jsx(xe,{to:"/trade",className:"footer-link",children:"Futures"}),a.jsx(xe,{to:"/finance",className:"footer-link",children:"Staking"})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Company"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),a.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),a.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Support"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),a.jsx(xe,{to:"/support",className:"footer-link",children:"Help Center"}),a.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),a.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}function G1(){const{btcPrice:t,btcChange24h:e,marketStatus:i,marketReady:n}=Kr();return a.jsxs("div",{className:"landing-shell",children:[a.jsx("style",{children:`
        .landing-shell {
          min-height: 100vh;
          background: #0b0e11;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .landing-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 24px;
          background: rgba(11, 14, 17, 0.92);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
        }
        .landing-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 800;
        }
        .brand-dot {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
        }
        .landing-actions {
          display: flex;
          gap: 12px;
        }
        .landing-btn {
          min-height: 44px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .landing-btn.ghost {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .landing-btn.primary {
          background: #f7931a;
          color: #111;
        }
        .landing-hero {
          position: relative;
          min-height: calc(100vh - 78px);
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .landing-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .landing-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(11,14,17,.92) 20%, rgba(11,14,17,.52) 58%, rgba(11,14,17,.88) 100%),
            radial-gradient(circle at top right, rgba(247,147,26,.24), transparent 34%);
        }
        .landing-content {
          position: relative;
          z-index: 1;
          max-width: 1320px;
          margin: 0 auto;
          padding: 48px 24px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 28px;
          align-items: end;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          color: #f6b353;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 18px;
        }
        .landing-title {
          font-size: clamp(42px, 7vw, 80px);
          line-height: .96;
          font-weight: 800;
          letter-spacing: -.05em;
          max-width: 10ch;
          margin-bottom: 18px;
        }
        .landing-title span { color: #f7931a; }
        .landing-copy p {
          max-width: 56ch;
          color: #bdc7d5;
          font-size: 18px;
          line-height: 1.75;
          margin-bottom: 22px;
        }
        .landing-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 24px;
        }
        .stat-card, .side-card {
          background: rgba(17, 23, 34, .78);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 22px;
          padding: 18px;
        }
        .stat-card strong {
          display: block;
          font-size: 28px;
          margin-bottom: 6px;
        }
        .stat-card span {
          color: #8f9eb2;
          font-size: 13px;
        }
        .side-grid {
          display: grid;
          gap: 16px;
        }
        .side-card h3 {
          font-size: 14px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 10px;
        }
        .side-card strong {
          display: block;
          font-size: 34px;
          font-family: 'Roboto Mono', monospace;
          margin-bottom: 8px;
        }
        .side-card strong.loading-price {
          color: #8f9eb2;
        }
        .side-card-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #8f9eb2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .side-card-label::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: ${i==="live"?"#0ecb81":"#f6b353"};
          box-shadow: 0 0 0 6px ${i==="live"?"rgba(14, 203, 129, 0.14)":"rgba(246, 179, 83, 0.14)"};
        }
        .side-card-change {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
        }
        .side-card-change.up {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .side-card-change.down {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .side-card p {
          color: #a8b3c5;
          line-height: 1.7;
        }
        .feature-row {
          display: grid;
          gap: 12px;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .feature-item svg { color: #f7931a; margin-top: 3px; }
        .feature-item div strong { display: block; margin-bottom: 4px; }
        .feature-item div span { color: #8f9eb2; font-size: 14px; }
        .landing-footer {
          position: relative;
          max-width: 1320px;
          margin: 24px auto 0;
          padding: 34px 28px 32px;
          display: grid;
          grid-template-columns: 1.35fr repeat(3, 1fr);
          gap: 28px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at top left, rgba(247, 147, 26, 0.16), transparent 28%),
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.1), transparent 22%),
            linear-gradient(180deg, rgba(10, 14, 22, 0.96), rgba(7, 10, 16, 0.98));
          box-shadow: 0 26px 80px rgba(0, 0, 0, 0.24);
        }
        .landing-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 18%);
        }
        .footer-brand {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          max-width: 360px;
        }
        .footer-coin {
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-size: 24px;
          font-weight: 800;
          box-shadow: 0 18px 40px rgba(247, 147, 26, 0.24);
        }
        .footer-brand h3 {
          margin: 0 0 10px;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .footer-brand p {
          margin: 0;
          max-width: 30ch;
        }
        .footer-brand p,
        .footer-link,
        .footer-bottom {
          color: #8f9eb2;
          font-size: 14px;
          line-height: 1.75;
        }
        .footer-column {
          position: relative;
          z-index: 1;
        }
        .footer-title {
          margin-bottom: 10px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
          font-weight: 700;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-link {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #fff;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          position: relative;
          z-index: 1;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 960px) {
          .landing-content { grid-template-columns: 1fr; }
          .landing-stats { grid-template-columns: 1fr; }
          .landing-footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 680px) {
          .landing-nav {
            padding: 14px 16px;
            flex-wrap: wrap;
          }
          .landing-brand { font-size: 20px; }
          .landing-actions { width: 100%; }
          .landing-btn { flex: 1; justify-content: center; }
          .landing-content { padding: 32px 16px; }
          .landing-copy p { font-size: 16px; }
          .landing-footer {
            margin-top: 20px;
            padding: 24px 16px 26px;
            grid-template-columns: 1fr;
            gap: 18px;
            border-radius: 22px;
          }
        }
      `}),a.jsxs("nav",{className:"landing-nav",children:[a.jsxs("div",{className:"landing-brand",children:[a.jsx("div",{className:"brand-dot",children:"₿"}),a.jsxs("span",{children:["BTCTrade",a.jsx("span",{style:{color:"#f7931a"},children:"Pro"})]})]}),a.jsxs("div",{className:"landing-actions",children:[a.jsx(xe,{to:"/login",className:"landing-btn ghost",children:"Sign In"}),a.jsx(xe,{to:"/login",className:"landing-btn primary",children:"Start Now"})]})]}),a.jsxs("section",{className:"landing-hero",children:[a.jsx("video",{className:"landing-video",src:Pm,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),a.jsx("div",{className:"landing-overlay"}),a.jsxs("div",{className:"landing-content",children:[a.jsxs("div",{className:"landing-copy",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx(ci,{size:14})," Professional Bitcoin trading platform"]}),a.jsxs("h1",{className:"landing-title",children:["Trade ",a.jsx("span",{children:"Bitcoin"})," Build Wealth"]}),a.jsx("p",{children:"Join a pro-style BTC platform with live market data, wallet approvals, advanced charting, and a premium mobile-first experience."}),a.jsxs("div",{className:"landing-actions",children:[a.jsxs(xe,{to:"/login",className:"landing-btn primary",children:["Sign In ",a.jsx(Ds,{size:16})]}),a.jsx(xe,{to:"/login",className:"landing-btn ghost",children:"Create Account"})]}),a.jsxs("div",{className:"landing-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"$2.4B+"}),a.jsx("span",{children:"Trading Volume"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"5M+"}),a.jsx("span",{children:"Users"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"99.9%"}),a.jsx("span",{children:"Uptime"})]})]})]}),a.jsxs("div",{className:"side-grid",children:[a.jsxs("div",{className:"side-card",children:[a.jsx("h3",{children:"BTC/USDT"}),a.jsx("div",{className:"side-card-label",children:n?i==="live"?"Live Market":"Fallback Market":"Loading Market"}),a.jsx("strong",{className:n?void 0:"loading-price",children:n?`$${t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),n&&a.jsxs("div",{className:`side-card-change ${e>=0?"up":"down"}`,children:[e>=0?"+":"",e.toFixed(2),"% 24h"]}),a.jsx("p",{children:"Real-time Bitcoin pricing powers the trade desk after sign-in, with wallet and approval flows connected across the app."})]}),a.jsxs("div",{className:"side-card",children:[a.jsx("h3",{children:"Why BTCTradePro"}),a.jsxs("div",{className:"feature-row",children:[a.jsxs("div",{className:"feature-item",children:[a.jsx(td,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Live Trade Desk"}),a.jsx("span",{children:"Real BTC charting and market sync."})]})]}),a.jsxs("div",{className:"feature-item",children:[a.jsx(Bi,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Wallet Review Flow"}),a.jsx("span",{children:"Admin-reviewed deposits and withdrawals."})]})]}),a.jsxs("div",{className:"feature-item",children:[a.jsx(Wr,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Mobile Pro UX"}),a.jsx("span",{children:"Dedicated screens for trade, wallet, profile, and support."})]})]})]})]})]})]})]}),a.jsxs("footer",{className:"landing-footer",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-coin",children:"₿"}),a.jsxs("div",{children:[a.jsx("h3",{children:"BTCTradePro"}),a.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Products"}),a.jsxs("div",{className:"footer-links",children:[a.jsx(xe,{to:"/login",className:"footer-link",children:"Spot Trading"}),a.jsx(xe,{to:"/login",className:"footer-link",children:"Futures"}),a.jsx(xe,{to:"/login",className:"footer-link",children:"Staking"})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Company"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),a.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),a.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Support"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),a.jsx(xe,{to:"/login",className:"footer-link",children:"Help Center"}),a.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),a.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}var J1=Object.defineProperty,ua=Object.getOwnPropertySymbols,Lm=Object.prototype.hasOwnProperty,Rm=Object.prototype.propertyIsEnumerable,Xu=(t,e,i)=>e in t?J1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Z1=(t,e)=>{for(var i in e||(e={}))Lm.call(e,i)&&Xu(t,i,e[i]);if(ua)for(var i of ua(e))Rm.call(e,i)&&Xu(t,i,e[i]);return t},e2=(t,e)=>{var i={};for(var n in t)Lm.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&ua)for(var n of ua(t))e.indexOf(n)<0&&Rm.call(t,n)&&(i[n]=t[n]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ii;(t=>{const e=class{constructor(o,d,u,h){if(this.version=o,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=o*4+17;let f=[];for(let p=0;p<this.size;p++)f.push(!1);for(let p=0;p<this.size;p++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const g=this.addEccAndInterleave(u);if(this.drawCodewords(g),h==-1){let p=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const y=this.getPenaltyScore();y<p&&(h=x,p=y),this.applyMask(x)}}s(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(o,d){const u=t.QrSegment.makeSegments(o);return e.encodeSegments(u,d)}static encodeBinary(o,d){const u=t.QrSegment.makeBytes(o);return e.encodeSegments([u],d)}static encodeSegments(o,d,u=1,h=40,f=-1,g=!0){if(!(e.MIN_VERSION<=u&&u<=h&&h<=e.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let p,x;for(p=u;;p++){const b=e.getNumDataCodewords(p,d)*8,w=c.getTotalBits(o,p);if(w<=b){x=w;break}if(p>=h)throw new RangeError("Data too long")}for(const b of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])g&&x<=e.getNumDataCodewords(p,b)*8&&(d=b);let y=[];for(const b of o){n(b.mode.modeBits,4,y),n(b.numChars,b.mode.numCharCountBits(p),y);for(const w of b.getData())y.push(w)}s(y.length==x);const v=e.getNumDataCodewords(p,d)*8;s(y.length<=v),n(0,Math.min(4,v-y.length),y),n(0,(8-y.length%8)%8,y),s(y.length%8==0);for(let b=236;y.length<v;b^=253)n(b,8,y);let m=[];for(;m.length*8<y.length;)m.push(0);return y.forEach((b,w)=>m[w>>>3]|=b<<7-(w&7)),new e(p,d,m,f)}getModule(o,d){return 0<=o&&o<this.size&&0<=d&&d<this.size&&this.modules[d][o]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const o=this.getAlignmentPatternPositions(),d=o.length;for(let u=0;u<d;u++)for(let h=0;h<d;h++)u==0&&h==0||u==0&&h==d-1||u==d-1&&h==0||this.drawAlignmentPattern(o[u],o[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(o){const d=this.errorCorrectionLevel.formatBits<<3|o;let u=d;for(let f=0;f<10;f++)u=u<<1^(u>>>9)*1335;const h=(d<<10|u)^21522;s(h>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,r(h,f));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,r(h,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,r(h,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,r(h,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let o=this.version;for(let u=0;u<12;u++)o=o<<1^(o>>>11)*7973;const d=this.version<<12|o;s(d>>>18==0);for(let u=0;u<18;u++){const h=r(d,u),f=this.size-11+u%3,g=Math.floor(u/3);this.setFunctionModule(f,g,h),this.setFunctionModule(g,f,h)}}drawFinderPattern(o,d){for(let u=-4;u<=4;u++)for(let h=-4;h<=4;h++){const f=Math.max(Math.abs(h),Math.abs(u)),g=o+h,p=d+u;0<=g&&g<this.size&&0<=p&&p<this.size&&this.setFunctionModule(g,p,f!=2&&f!=4)}}drawAlignmentPattern(o,d){for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++)this.setFunctionModule(o+h,d+u,Math.max(Math.abs(h),Math.abs(u))!=1)}setFunctionModule(o,d,u){this.modules[d][o]=u,this.isFunction[d][o]=!0}addEccAndInterleave(o){const d=this.version,u=this.errorCorrectionLevel;if(o.length!=e.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const h=e.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],f=e.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],g=Math.floor(e.getNumRawDataModules(d)/8),p=h-g%h,x=Math.floor(g/h);let y=[];const v=e.reedSolomonComputeDivisor(f);for(let b=0,w=0;b<h;b++){let j=o.slice(w,w+x-f+(b<p?0:1));w+=j.length;const _=e.reedSolomonComputeRemainder(j,v);b<p&&j.push(0),y.push(j.concat(_))}let m=[];for(let b=0;b<y[0].length;b++)y.forEach((w,j)=>{(b!=x-f||j>=p)&&m.push(w[b])});return s(m.length==g),m}drawCodewords(o){if(o.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let h=0;h<this.size;h++)for(let f=0;f<2;f++){const g=u-f,x=(u+1&2)==0?this.size-1-h:h;!this.isFunction[x][g]&&d<o.length*8&&(this.modules[x][g]=r(o[d>>>3],7-(d&7)),d++)}}s(d==o.length*8)}applyMask(o){if(o<0||o>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let h;switch(o){case 0:h=(u+d)%2==0;break;case 1:h=d%2==0;break;case 2:h=u%3==0;break;case 3:h=(u+d)%3==0;break;case 4:h=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:h=u*d%2+u*d%3==0;break;case 6:h=(u*d%2+u*d%3)%2==0;break;case 7:h=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&h&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let o=0;for(let f=0;f<this.size;f++){let g=!1,p=0,x=[0,0,0,0,0,0,0];for(let y=0;y<this.size;y++)this.modules[f][y]==g?(p++,p==5?o+=e.PENALTY_N1:p>5&&o++):(this.finderPenaltyAddHistory(p,x),g||(o+=this.finderPenaltyCountPatterns(x)*e.PENALTY_N3),g=this.modules[f][y],p=1);o+=this.finderPenaltyTerminateAndCount(g,p,x)*e.PENALTY_N3}for(let f=0;f<this.size;f++){let g=!1,p=0,x=[0,0,0,0,0,0,0];for(let y=0;y<this.size;y++)this.modules[y][f]==g?(p++,p==5?o+=e.PENALTY_N1:p>5&&o++):(this.finderPenaltyAddHistory(p,x),g||(o+=this.finderPenaltyCountPatterns(x)*e.PENALTY_N3),g=this.modules[y][f],p=1);o+=this.finderPenaltyTerminateAndCount(g,p,x)*e.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let g=0;g<this.size-1;g++){const p=this.modules[f][g];p==this.modules[f][g+1]&&p==this.modules[f+1][g]&&p==this.modules[f+1][g+1]&&(o+=e.PENALTY_N2)}let d=0;for(const f of this.modules)d=f.reduce((g,p)=>g+(p?1:0),d);const u=this.size*this.size,h=Math.ceil(Math.abs(d*20-u*10)/u)-1;return s(0<=h&&h<=9),o+=h*e.PENALTY_N4,s(0<=o&&o<=2568888),o}getAlignmentPatternPositions(){if(this.version==1)return[];{const o=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(o*2-2))*2;let u=[6];for(let h=this.size-7;u.length<o;h-=d)u.splice(1,0,h);return u}}static getNumRawDataModules(o){if(o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*o+128)*o+64;if(o>=2){const u=Math.floor(o/7)+2;d-=(25*u-10)*u-55,o>=7&&(d-=36)}return s(208<=d&&d<=29648),d}static getNumDataCodewords(o,d){return Math.floor(e.getNumRawDataModules(o)/8)-e.ECC_CODEWORDS_PER_BLOCK[d.ordinal][o]*e.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][o]}static reedSolomonComputeDivisor(o){if(o<1||o>255)throw new RangeError("Degree out of range");let d=[];for(let h=0;h<o-1;h++)d.push(0);d.push(1);let u=1;for(let h=0;h<o;h++){for(let f=0;f<d.length;f++)d[f]=e.reedSolomonMultiply(d[f],u),f+1<d.length&&(d[f]^=d[f+1]);u=e.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(o,d){let u=d.map(h=>0);for(const h of o){const f=h^u.shift();u.push(0),d.forEach((g,p)=>u[p]^=e.reedSolomonMultiply(g,f))}return u}static reedSolomonMultiply(o,d){if(o>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let h=7;h>=0;h--)u=u<<1^(u>>>7)*285,u^=(d>>>h&1)*o;return s(u>>>8==0),u}finderPenaltyCountPatterns(o){const d=o[1];s(d<=this.size*3);const u=d>0&&o[2]==d&&o[3]==d*3&&o[4]==d&&o[5]==d;return(u&&o[0]>=d*4&&o[6]>=d?1:0)+(u&&o[6]>=d*4&&o[0]>=d?1:0)}finderPenaltyTerminateAndCount(o,d,u){return o&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(o,d){d[0]==0&&(o+=this.size),d.pop(),d.unshift(o)}};let i=e;i.MIN_VERSION=1,i.MAX_VERSION=40,i.PENALTY_N1=3,i.PENALTY_N2=3,i.PENALTY_N3=40,i.PENALTY_N4=10,i.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],i.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=i;function n(o,d,u){if(d<0||d>31||o>>>d)throw new RangeError("Value out of range");for(let h=d-1;h>=0;h--)u.push(o>>>h&1)}function r(o,d){return(o>>>d&1)!=0}function s(o){if(!o)throw new Error("Assertion error")}const l=class{constructor(o,d,u){if(this.mode=o,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(o){let d=[];for(const u of o)n(u,8,d);return new l(l.Mode.BYTE,o.length,d)}static makeNumeric(o){if(!l.isNumeric(o))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<o.length;){const h=Math.min(o.length-u,3);n(parseInt(o.substr(u,h),10),h*3+1,d),u+=h}return new l(l.Mode.NUMERIC,o.length,d)}static makeAlphanumeric(o){if(!l.isAlphanumeric(o))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=o.length;u+=2){let h=l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(u))*45;h+=l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(u+1)),n(h,11,d)}return u<o.length&&n(l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(u)),6,d),new l(l.Mode.ALPHANUMERIC,o.length,d)}static makeSegments(o){return o==""?[]:l.isNumeric(o)?[l.makeNumeric(o)]:l.isAlphanumeric(o)?[l.makeAlphanumeric(o)]:[l.makeBytes(l.toUtf8ByteArray(o))]}static makeEci(o){let d=[];if(o<0)throw new RangeError("ECI assignment value out of range");if(o<128)n(o,8,d);else if(o<16384)n(2,2,d),n(o,14,d);else if(o<1e6)n(6,3,d),n(o,21,d);else throw new RangeError("ECI assignment value out of range");return new l(l.Mode.ECI,0,d)}static isNumeric(o){return l.NUMERIC_REGEX.test(o)}static isAlphanumeric(o){return l.ALPHANUMERIC_REGEX.test(o)}getData(){return this.bitData.slice()}static getTotalBits(o,d){let u=0;for(const h of o){const f=h.mode.numCharCountBits(d);if(h.numChars>=1<<f)return 1/0;u+=4+f+h.bitData.length}return u}static toUtf8ByteArray(o){o=encodeURI(o);let d=[];for(let u=0;u<o.length;u++)o.charAt(u)!="%"?d.push(o.charCodeAt(u)):(d.push(parseInt(o.substr(u+1,2),16)),u+=2);return d}};let c=l;c.NUMERIC_REGEX=/^[0-9]*$/,c.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,c.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=c})(Ii||(Ii={}));(t=>{(e=>{const i=class{constructor(r,s){this.ordinal=r,this.formatBits=s}};let n=i;n.LOW=new i(0,1),n.MEDIUM=new i(1,0),n.QUARTILE=new i(2,3),n.HIGH=new i(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Ii||(Ii={}));(t=>{(e=>{const i=class{constructor(r,s){this.modeBits=r,this.numBitsCharCount=s}numCharCountBits(r){return this.numBitsCharCount[Math.floor((r+7)/17)]}};let n=i;n.NUMERIC=new i(1,[10,12,14]),n.ALPHANUMERIC=new i(2,[9,11,13]),n.BYTE=new i(4,[8,16,16]),n.KANJI=new i(8,[8,10,12]),n.ECI=new i(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Ii||(Ii={}));var Jn=Ii;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var t2={L:Jn.QrCode.Ecc.LOW,M:Jn.QrCode.Ecc.MEDIUM,Q:Jn.QrCode.Ecc.QUARTILE,H:Jn.QrCode.Ecc.HIGH},i2=128,n2="L",r2="#FFFFFF",s2="#000000",a2=!1,Am=4,l2=.1;function o2(t,e=0){const i=[];return t.forEach(function(n,r){let s=null;n.forEach(function(l,c){if(!l&&s!==null){i.push(`M${s+e} ${r+e}h${c-s}v1H${s+e}z`),s=null;return}if(c===n.length-1){if(!l)return;s===null?i.push(`M${c+e},${r+e} h1v1H${c+e}z`):i.push(`M${s+e},${r+e} h${c+1-s}v1H${s+e}z`);return}l&&s===null&&(s=c)})}),i.join("")}function c2(t,e){return t.slice().map((i,n)=>n<e.y||n>=e.y+e.h?i:i.map((r,s)=>s<e.x||s>=e.x+e.w?r:!1))}function d2(t,e,i,n){if(n==null)return null;const r=i?Am:0,s=t.length+r*2,l=Math.floor(e*l2),c=s/e,o=(n.width||l)*c,d=(n.height||l)*c,u=n.x==null?t.length/2-o/2:n.x*c,h=n.y==null?t.length/2-d/2:n.y*c;let f=null;if(n.excavate){let g=Math.floor(u),p=Math.floor(h),x=Math.ceil(o+u-g),y=Math.ceil(d+h-p);f={x:g,y:p,w:x,h:y}}return{x:u,y:h,h:d,w:o,excavation:f}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function u2(t){const e=t,{value:i,size:n=i2,level:r=n2,bgColor:s=r2,fgColor:l=s2,includeMargin:c=a2,imageSettings:o}=e,d=e2(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let u=Jn.QrCode.encodeText(i,t2[r]).getModules();const h=c?Am:0,f=u.length+h*2,g=d2(u,n,c,o);let p=null;o!=null&&g!=null&&(g.excavation!=null&&(u=c2(u,g.excavation)),p=Si.createElement("image",{xlinkHref:o.src,height:g.h,width:g.w,x:g.x+h,y:g.y+h,preserveAspectRatio:"none"}));const x=o2(u,h);return Si.createElement("svg",Z1({height:n,width:n,viewBox:`0 0 ${f} ${f}`},d),Si.createElement("path",{fill:s,d:`M0,0 h${f}v${f}H0z`,shapeRendering:"crispEdges"}),Si.createElement("path",{fill:l,d:x,shapeRendering:"crispEdges"}),p)}function h2(){const{user:t,updateUser:e}=vi(),{btcPrice:i,transactions:n,addTransaction:r,walletAddress:s}=Kr(),[l,c]=k.useState("deposit"),[o,d]=k.useState(""),[u,h]=k.useState(""),[f,g]=k.useState(""),[p,x]=k.useState(""),[y,v]=k.useState(!1),[m,b]=k.useState(!1),[w,j]=k.useState(!1),[_,C]=k.useState(!1),[P,U]=k.useState(!1),[R,V]=k.useState(null),[S,Q]=k.useState(!1),ke=s||Jc,De=k.useMemo(()=>n.filter(I=>I.userEmail===(t==null?void 0:t.email)).slice(0,8),[n,t==null?void 0:t.email]),Pe=async()=>{await navigator.clipboard.writeText(ke),C(!0),window.setTimeout(()=>C(!1),1500)},Be=()=>{if(!o||parseFloat(o)<=0)return;const I=parseFloat(o);V({btcAmount:I,usdAmount:I*i}),U(!0)},A=()=>{!t||!R||(Q(!0),setTimeout(()=>{const I={id:`tx-${Date.now()}`,type:"deposit",amount:R.usdAmount,btcAmount:R.btcAmount,walletAddress:ke,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()};r(I),Q(!1),U(!1),V(null),d(""),v(!0),window.setTimeout(()=>v(!1),4e3)},2e3))},O=()=>{U(!1),V(null)},W=()=>{if(!t||!u)return;const I=parseFloat(u);if(I>(t.usdBalance||0)){alert("Insufficient USD balance");return}r({id:`tx-${Date.now()}`,type:"withdraw",amount:I,btcAmount:I/i,withdrawAddress:f,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()}),b(!0),h(""),g("")},G=()=>{if(!t||!p)return;const I=parseFloat(p);if(I>t.btcBalance){alert("Insufficient BTC balance");return}e({btcBalance:t.btcBalance-I,stakeAmount:(t.stakeAmount||0)+I}),r({id:`tx-${Date.now()}`,type:"stake",amount:I*i,btcAmount:I,userEmail:t.email,userName:t.name,status:"completed",timestamp:new Date().toISOString()}),j(!0),x("")};return a.jsxs(a.Fragment,{children:[P&&R&&a.jsx("div",{className:"fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto bg-[#05070c]/95 p-0 backdrop-blur-md sm:items-center sm:bg-black/70 sm:p-6",children:a.jsxs("div",{className:"deposit-modal",children:[a.jsx("style",{children:`
              .deposit-modal {
                background:
                  radial-gradient(circle at top right, rgba(247,147,26,0.16), transparent 30%),
                  linear-gradient(180deg, #151b26, #0b0f16);
                border: 1px solid rgba(247,147,26,0.18);
                border-radius: 30px;
                box-shadow: 0 40px 120px rgba(0,0,0,0.5);
                padding: 0;
                max-width: 520px;
                width: min(100%, 520px);
                max-height: min(100vh - 32px, 820px);
                overflow-y: auto;
                display: grid;
                animation: modalIn 0.25s ease;
              }
              @keyframes modalIn {
                from { opacity: 0; transform: scale(0.92) translateY(12px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
              .dm-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                padding: 24px 24px 0;
              }
              .dm-head h2 {
                font-size: 24px;
                font-weight: 800;
                color: #f3f6fb;
              }
              .dm-receipt {
                display: grid;
                gap: 18px;
                padding: 0 24px 24px;
              }
              .dm-receipt-top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
              }
              .dm-receipt-kicker {
                color: #8fa2ba;
                font-size: 11px;
                font-weight: 800;
                letter-spacing: 0.08em;
                text-transform: uppercase;
              }
              .dm-status-pill {
                display: inline-flex;
                align-items: center;
                min-height: 28px;
                padding: 0 10px;
                border-radius: 999px;
                background: rgba(14,203,129,0.14);
                color: #0ecb81;
                font-size: 11px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.08em;
              }
              .dm-close {
                width: 36px; height: 36px;
                border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.08);
                background: rgba(255,255,255,0.04);
                color: #8fa2ba;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer;
                transition: all 0.15s;
              }
              .dm-close:hover { background: rgba(255,255,255,0.08); color: #eef3fb; }
              .dm-amount-box {
                padding: 22px 0 18px;
                border-bottom: 1px dashed rgba(255,255,255,0.12);
                text-align: left;
              }
              .dm-btc-val { font-size: 34px; font-weight: 800; color: #f6b353; font-family: 'JetBrains Mono', monospace; }
              .dm-usd-val { font-size: 14px; color: #8fa2ba; margin-top: 6px; }
              .dm-receipt-grid {
                display: grid;
                gap: 12px;
              }
              .dm-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                padding-bottom: 12px;
                border-bottom: 1px dashed rgba(255,255,255,0.08);
              }
              .dm-row:last-child {
                border-bottom: none;
                padding-bottom: 0;
              }
              .dm-row-label {
                color: #8fa2ba;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
              }
              .dm-row-value {
                color: #eef3fb;
                font-size: 13px;
                font-weight: 700;
                text-align: right;
                word-break: break-word;
              }
              .dm-network {
                display: inline-flex; align-items: center; gap: 8px;
                padding: 8px 14px; border-radius: 999px;
                background: rgba(247,147,26,0.14); color: #f6b353;
                font-size: 12px; font-weight: 700; text-transform: uppercase;
              }
              .dm-qr {
                display: flex; justify-content: center; padding: 16px;
                background: #fff; border-radius: 20px;
              }
              .dm-qr svg {
                width: min(100%, 180px);
                height: auto;
              }
              .dm-address-box {
                display: flex; align-items: center; gap: 10px;
                padding: 14px; border-radius: 16px;
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.06);
              }
              .dm-address-box code {
                flex: 1; color: #eef3fb; font-size: 12px;
                word-break: break-all; font-family: monospace;
              }
              .dm-copy-btn {
                width: 38px; height: 38px; border-radius: 10px;
                border: none; background: rgba(255,255,255,0.06);
                color: #eef3fb; display: flex; align-items: center;
                justify-content: center; cursor: pointer; flex-shrink: 0;
              }
              .dm-hint {
                font-size: 12px; color: #8fa2ba; text-align: center;
                line-height: 1.6;
              }
              .dm-actions {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
                position: sticky;
                bottom: 0;
                padding-top: 12px;
                background: linear-gradient(180deg, rgba(11,15,22,0), rgba(11,15,22,0.96) 32%);
              }
              .dm-btn {
                min-height: 50px; border: none; border-radius: 16px;
                font-size: 14px; font-weight: 800;
                cursor: pointer; transition: opacity 0.15s;
              }
              .dm-btn:disabled { opacity: 0.5; cursor: not-allowed; }
              .dm-finish {
                background: linear-gradient(135deg, #0ecb81, #62f3bd);
                color: #061208;
              }
              .dm-cancel {
                background: rgba(246,70,93,0.16);
                border: 1px solid rgba(246,70,93,0.2);
                color: #f6465d;
              }
              .dm-checking {
                display: flex; flex-direction: column; align-items: center;
                gap: 14px; padding: 20px; text-align: center;
              }
              .dm-checking .spinner {
                width: 48px; height: 48px; border: 4px solid rgba(255,255,255,0.1);
                border-top-color: #f6b353; border-radius: 50%;
                animation: spin 0.8s linear infinite;
              }
              @keyframes spin { to { transform: rotate(360deg); } }
              .dm-checking p { color: #8fa2ba; font-size: 14px; line-height: 1.6; }
              @media (max-width: 640px) {
                .deposit-modal {
                  width: 100%;
                  min-height: 100vh;
                  max-height: none;
                  border-radius: 0;
                  border-left: none;
                  border-right: none;
                  border-top: none;
                }
                .dm-head h2 {
                  font-size: 20px;
                }
                .dm-head {
                  padding: max(18px, env(safe-area-inset-top)) 18px 0;
                }
                .dm-receipt {
                  padding: 0 18px calc(18px + env(safe-area-inset-bottom));
                }
                .dm-btc-val {
                  font-size: 26px;
                }
                .dm-qr {
                  padding: 12px;
                  border-radius: 18px;
                }
                .dm-address-box {
                  align-items: stretch;
                  flex-direction: column;
                }
                .dm-copy-btn {
                  width: 100%;
                  height: 44px;
                }
                .dm-actions {
                  grid-template-columns: 1fr;
                  padding-bottom: max(4px, env(safe-area-inset-bottom));
                }
                .dm-row {
                  align-items: flex-start;
                  flex-direction: column;
                }
                .dm-row-value {
                  text-align: left;
                }
              }
            `}),a.jsxs("div",{className:"dm-head",children:[a.jsx("h2",{children:"Deposit BTC"}),a.jsx("button",{className:"dm-close",onClick:O,children:a.jsx(B1,{size:16})})]}),S?a.jsxs("div",{className:"dm-checking",children:[a.jsx("div",{className:"spinner"}),a.jsxs("p",{children:["System is checking your deposit.",a.jsx("br",{}),"This may take a few seconds..."]})]}):a.jsxs("div",{className:"dm-receipt",children:[a.jsxs("div",{className:"dm-receipt-top",children:[a.jsx("div",{className:"dm-receipt-kicker",children:"Deposit Receipt"}),a.jsx("div",{className:"dm-status-pill",children:"Awaiting Transfer"})]}),a.jsxs("div",{className:"dm-amount-box",children:[a.jsxs("div",{className:"dm-btc-val",children:[R.btcAmount.toFixed(8)," BTC"]}),a.jsxs("div",{className:"dm-usd-val",children:["Estimated credit: $",re(R.usdAmount)," USDT"]})]}),a.jsxs("div",{className:"dm-receipt-grid",children:[a.jsxs("div",{className:"dm-row",children:[a.jsx("span",{className:"dm-row-label",children:"Network"}),a.jsx("span",{className:"dm-row-value",children:a.jsxs("span",{className:"dm-network",children:[a.jsx(j1,{size:13}),"BTC Only"]})})]}),a.jsxs("div",{className:"dm-row",children:[a.jsx("span",{className:"dm-row-label",children:"Wallet address"}),a.jsx("span",{className:"dm-row-value",children:ke})]}),a.jsxs("div",{className:"dm-row",children:[a.jsx("span",{className:"dm-row-label",children:"Trader"}),a.jsx("span",{className:"dm-row-value",children:(t==null?void 0:t.name)||"Trader"})]}),a.jsxs("div",{className:"dm-row",children:[a.jsx("span",{className:"dm-row-label",children:"Status"}),a.jsx("span",{className:"dm-row-value",children:"Pending admin verification after transfer"})]})]}),a.jsx("div",{className:"dm-qr",children:a.jsx(u2,{value:ke,size:180,bgColor:"#ffffff",fgColor:"#000000"})}),a.jsxs("div",{className:"dm-address-box",children:[a.jsx("code",{children:ke}),a.jsx("button",{className:"dm-copy-btn",onClick:Pe,children:_?a.jsx(Nm,{size:16}):a.jsx(M1,{size:16})})]}),a.jsxs("p",{className:"dm-hint",children:["Send exactly ",a.jsxs("strong",{style:{color:"#f6b353"},children:[R.btcAmount.toFixed(8)," BTC"]})," to complete this receipt. Your credited balance appears after admin verification."]}),a.jsxs("div",{className:"dm-actions",children:[a.jsx("button",{className:"dm-btn dm-finish",onClick:A,children:"I Sent The Deposit"}),a.jsx("button",{className:"dm-btn dm-cancel",onClick:O,children:"Cancel"})]})]})]})}),a.jsxs("div",{className:"finance-shell",children:[a.jsx("style",{children:`
          .finance-shell {
            max-width: 1220px;
            margin: 0 auto;
            color: #eef3fb;
            display: grid;
            gap: 22px;
          }
          .card {
            background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 28px;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
          }
          .page-head { padding: 26px; }
          .page-head h1 {
            font-size: 30px; font-weight: 800;
            letter-spacing: -0.03em; margin-bottom: 8px;
          }
          .page-head p { color: #90a0b6; }
          .balance-grid { display: grid; gap: 18px; grid-template-columns: repeat(2, 1fr); }
          .balance-card { padding: 22px; }
          .balance-icon {
            width: 48px; height: 48px; border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 14px;
            background: rgba(247, 147, 26, 0.12); color: #f7931a;
          }
          .balance-card h3 {
            font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
            color: #8fa2ba; margin-bottom: 8px;
          }
          .balance-card strong {
            font-size: 30px; font-family: 'JetBrains Mono', monospace; font-weight: 800;
          }
          .balance-card p { color: #90a0b6; margin-top: 8px; font-size: 13px; }
          .content-grid { display: grid; gap: 18px; grid-template-columns: minmax(0, 1fr) 380px; }
          .wallet-main { padding: 24px; }
          .tab-row { display: flex; gap: 10px; margin-bottom: 22px; flex-wrap: wrap; }
          .tab-btn {
            min-height: 42px; padding: 0 16px; border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.07);
            background: rgba(255, 255, 255, 0.03); color: #8fa2ba; font-weight: 700;
          }
          .tab-btn.active {
            background: rgba(247, 147, 26, 0.16);
            border-color: rgba(247, 147, 26, 0.36); color: #f6b353;
          }
          .flow-card {
            padding: 22px; border-radius: 24px; background: rgba(255, 255, 255, 0.03);
          }
          .flow-card h2 { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
          .flow-card p { color: #90a0b6; line-height: 1.7; }
          .field { margin-top: 18px; }
          .field label {
            display: block; font-size: 12px; text-transform: uppercase;
            letter-spacing: 0.08em; color: #8fa2ba; margin-bottom: 8px;
          }
          .amount-input {
            width: 100%; min-height: 56px; padding: 0 18px; border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.03); color: #eef3fb;
            font-size: 24px; font-weight: 800; font-family: 'JetBrains Mono', monospace;
          }
          .amount-input:focus { outline: none; border-color: rgba(247,147,26,0.45); }
          .amount-note { color: #90a0b6; font-size: 13px; margin-top: 8px; }
          .cta {
            margin-top: 18px; width: 100%; min-height: 52px; border: none;
            border-radius: 16px; background: linear-gradient(135deg, #f7931a, #ffb347);
            color: #111; font-weight: 800; font-size: 15px; cursor: pointer;
          }
          .status-banner {
            margin-top: 16px; padding: 14px 16px; border-radius: 16px;
            background: rgba(52, 120, 246, 0.16); color: #cde0ff; line-height: 1.6;
          }
          .history-card { padding: 24px; }
          .history-card h3 { font-size: 18px; font-weight: 800; margin-bottom: 18px; }
          .tx-list { display: grid; gap: 12px; }
          .tx-item {
            display: grid; grid-template-columns: auto minmax(0, 1fr) auto auto;
            gap: 12px; align-items: center; padding: 14px; border-radius: 16px;
            background: rgba(255, 255, 255, 0.03);
          }
          .tx-icon {
            width: 42px; height: 42px; border-radius: 14px;
            display: flex; align-items: center; justify-content: center;
          }
          .tx-icon.deposit { background: rgba(14, 203, 129, 0.14); color: #0ecb81; }
          .tx-icon.withdraw { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
          .tx-icon.stake { background: rgba(247, 147, 26, 0.14); color: #f7931a; }
          .tx-meta strong { display: block; text-transform: capitalize; }
          .tx-meta span, .tx-status { color: #8fa2ba; font-size: 12px; }
          .tx-amount { font-family: 'JetBrains Mono', monospace; font-weight: 700; }
          .tx-status.completed { color: #0ecb81; }
          .tx-status.pending { color: #f6b353; }
          .tx-status.rejected { color: #f6465d; }
          .tx-status-label { text-transform: capitalize; }
          @media (max-width: 1080px) {
            .balance-grid, .content-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 760px) {
            .page-head, .wallet-main, .history-card, .balance-card { padding: 18px; }
            .tx-item { grid-template-columns: auto 1fr; }
          }
        `}),a.jsxs("section",{className:"card page-head",children:[a.jsx("h1",{children:"Finance Center"}),a.jsx("p",{children:"Deposit, withdraw, and manage your demo BTC wallet."})]}),a.jsxs("section",{className:"balance-grid",children:[a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(Bi,{size:24})}),a.jsx("h3",{children:"USD Balance"}),a.jsxs("strong",{children:["$",re((t==null?void 0:t.usdBalance)||0)]}),a.jsx("p",{children:"Available for trading and withdrawals."})]}),a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(Wu,{size:24})}),a.jsx("h3",{children:"Staked BTC"}),a.jsxs("strong",{children:[((t==null?void 0:t.stakeAmount)||0).toFixed(6)," BTC"]}),a.jsx("p",{children:"Passive rewards in demo mode."})]})]}),a.jsxs("section",{className:"content-grid",children:[a.jsxs("div",{className:"card wallet-main",children:[a.jsxs("div",{className:"tab-row",children:[a.jsx("button",{className:`tab-btn ${l==="deposit"?"active":""}`,onClick:()=>c("deposit"),children:"Deposit"}),a.jsx("button",{className:`tab-btn ${l==="withdraw"?"active":""}`,onClick:()=>c("withdraw"),children:"Withdraw"}),a.jsx("button",{className:`tab-btn ${l==="stake"?"active":""}`,onClick:()=>c("stake"),children:"Stake"})]}),l==="deposit"&&a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Deposit BTC"}),a.jsx("p",{children:"Enter the BTC amount you want to deposit. A new page will show the QR code and wallet address. Click Finish Deposit to submit for verification."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Deposit Amount (BTC)"}),a.jsx("input",{className:"amount-input",value:o,onChange:I=>d(I.target.value),type:"number",placeholder:"0.01000000"}),a.jsxs("div",{className:"amount-note",children:["USDT credit after verification: ",o?`$${re(parseFloat(o||"0")*i)}`:"$0.00"]})]}),a.jsx("button",{className:"cta",onClick:Be,children:"Prepare Deposit"}),y&&a.jsx("div",{className:"status-banner",children:"Deposit submitted and pending. Once System Admin verifies it, your balance will be credited."})]}),l==="withdraw"&&a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Withdraw USD"}),a.jsx("p",{children:"Submit a withdrawal request. The amount is deducted only after admin approval."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Withdrawal Amount (USD)"}),a.jsx("input",{className:"amount-input",value:u,onChange:I=>h(I.target.value),type:"number",placeholder:"500"}),a.jsxs("div",{className:"amount-note",children:["Available: $",re((t==null?void 0:t.usdBalance)||0)]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"BTC Wallet Address"}),a.jsx("input",{className:"amount-input",style:{fontSize:"16px",fontWeight:600},value:f,onChange:I=>g(I.target.value),type:"text",placeholder:"Paste your BTC wallet address"})]}),a.jsx("button",{className:"cta",onClick:W,children:"Submit Withdrawal"}),m&&a.jsx("div",{className:"status-banner",children:"Withdrawal request submitted. Admin approval required."})]}),l==="stake"&&a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Stake BTC"}),a.jsx("p",{children:"Move BTC into the staking pool and earn passive rewards."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Stake Amount (BTC)"}),a.jsx("input",{className:"amount-input",value:p,onChange:I=>x(I.target.value),type:"number",placeholder:"0.050000"}),a.jsxs("div",{className:"amount-note",children:["Available BTC: ",((t==null?void 0:t.btcBalance)||0).toFixed(6)]})]}),a.jsx("button",{className:"cta",onClick:G,children:"Start Staking"}),w&&a.jsx("div",{className:"status-banner",children:"BTC moved to staking successfully."})]})]}),a.jsxs("aside",{className:"card history-card",children:[a.jsx("h3",{children:"Recent Activity"}),a.jsxs("div",{className:"tx-list",children:[De.map(I=>a.jsxs("div",{className:"tx-item",children:[a.jsx("div",{className:`tx-icon ${I.type}`,children:I.type==="deposit"?a.jsx(y1,{size:20}):I.type==="withdraw"?a.jsx(w1,{size:20}):a.jsx(Wu,{size:20})}),a.jsxs("div",{className:"tx-meta",children:[a.jsx("strong",{children:I.type}),a.jsx("span",{children:new Date(I.timestamp).toLocaleString()})]}),a.jsxs("div",{className:"tx-amount",children:["$",re(I.amount)]}),a.jsxs("div",{className:`tx-status ${I.status}`,children:[a.jsx("span",{className:"tx-status-label",children:I.status==="completed"?"verified":I.status}),I.reviewedBy?` · ${I.reviewedBy}`:""]})]},I.id)),De.length===0&&a.jsx("div",{className:"amount-note",children:"No transactions yet."})]})]})]})]})]})}function oe(t){var e=t.width,i=t.height;if(e<0)throw new Error("Negative width is not allowed for Size");if(i<0)throw new Error("Negative height is not allowed for Size");return{width:e,height:i}}function Pi(t,e){return t.width===e.width&&t.height===e.height}var f2=function(){function t(e){var i=this;this._resolutionListener=function(){return i._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=e,this._installResolutionListener()}return t.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(t.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(e){var i=this,n={next:e};return this._observers.push(n),{unsubscribe:function(){i._observers=i._observers.filter(function(r){return r!==n})}}},t.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var e=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(e,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},t.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},t.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},t.prototype._onResolutionChanged=function(){var e=this;this._observers.forEach(function(i){return i.next(e._window.devicePixelRatio)}),this._reinstallResolutionListener()},t}();function p2(t){return new f2(t)}var m2=function(){function t(e,i,n){var r;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=e,this._canvasElementClientSize=oe({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=i??function(s){return s},this._allowResizeObserver=(r=n==null?void 0:n.allowResizeObserver)!==null&&r!==void 0?r:!0,this._chooseAndInitObserver()}return t.prototype.dispose=function(){var e,i;if(this._canvasElement===null)throw new Error("Object is disposed");(e=this._canvasElementResizeObserver)===null||e===void 0||e.disconnect(),this._canvasElementResizeObserver=null,(i=this._devicePixelRatioObservable)===null||i===void 0||i.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(t.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bitmapSize",{get:function(){return oe({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),t.prototype.resizeCanvasElement=function(e){this._canvasElementClientSize=oe(e),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},t.prototype.subscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(i){return i!==e})},Object.defineProperty(t.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),t.prototype.subscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(i){return i!==e})},t.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var e=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(e),this._emitSuggestedBitmapSizeChanged(e,this._suggestedBitmapSize)}},t.prototype._resizeBitmap=function(e){var i=this.bitmapSize;Pi(i,e)||(this.canvasElement.width=e.width,this.canvasElement.height=e.height,this._emitBitmapSizeChanged(i,e))},t.prototype._emitBitmapSizeChanged=function(e,i){var n=this;this._bitmapSizeChangedListeners.forEach(function(r){return r.call(n,e,i)})},t.prototype._suggestNewBitmapSize=function(e){var i=this._suggestedBitmapSize,n=oe(this._transformBitmapSize(e,this._canvasElementClientSize)),r=Pi(this.bitmapSize,n)?null:n;i===null&&r===null||i!==null&&r!==null&&Pi(i,r)||(this._suggestedBitmapSize=r,this._emitSuggestedBitmapSizeChanged(i,r))},t.prototype._emitSuggestedBitmapSizeChanged=function(e,i){var n=this;this._suggestedBitmapSizeChangedListeners.forEach(function(r){return r.call(n,e,i)})},t.prototype._chooseAndInitObserver=function(){var e=this;if(!this._allowResizeObserver){this._initDevicePixelRatioObservable();return}x2().then(function(i){return i?e._initResizeObserver():e._initDevicePixelRatioObservable()})},t.prototype._initDevicePixelRatioObservable=function(){var e=this;if(this._canvasElement!==null){var i=Qu(this._canvasElement);if(i===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=p2(i),this._devicePixelRatioObservable.subscribe(function(){return e._invalidateBitmapSize()}),this._invalidateBitmapSize()}},t.prototype._invalidateBitmapSize=function(){var e,i;if(this._canvasElement!==null){var n=Qu(this._canvasElement);if(n!==null){var r=(i=(e=this._devicePixelRatioObservable)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:n.devicePixelRatio,s=this._canvasElement.getClientRects(),l=s[0]!==void 0?v2(s[0],r):oe({width:this._canvasElementClientSize.width*r,height:this._canvasElementClientSize.height*r});this._suggestNewBitmapSize(l)}}},t.prototype._initResizeObserver=function(){var e=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(i){var n=i.find(function(l){return l.target===e._canvasElement});if(!(!n||!n.devicePixelContentBoxSize||!n.devicePixelContentBoxSize[0])){var r=n.devicePixelContentBoxSize[0],s=oe({width:r.inlineSize,height:r.blockSize});e._suggestNewBitmapSize(s)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},t}();function g2(t,e){return new m2(t,e.transform,e.options)}function Qu(t){return t.ownerDocument.defaultView}function x2(){return new Promise(function(t){var e=new ResizeObserver(function(i){t(i.every(function(n){return"devicePixelContentBoxSize"in n})),e.disconnect()});e.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1})}function v2(t,e){return oe({width:Math.round(t.left*e+t.width*e)-Math.round(t.left*e),height:Math.round(t.top*e+t.height*e)-Math.round(t.top*e)})}var b2=function(){function t(e,i,n){if(i.width===0||i.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=i,n.width===0||n.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=n,this._context=e}return t.prototype.useMediaCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),e({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},t.prototype.useBitmapCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),e({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(t.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),t}();function Oi(t,e){var i=t.canvasElementClientSize;if(i.width===0||i.height===0)return null;var n=t.bitmapSize;if(n.width===0||n.height===0)return null;var r=t.canvasElement.getContext("2d",e);return r===null?null:new b2(r,i,n)}/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.3
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */const y2={upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},w2={upColor:"#26a69a",downColor:"#ef5350",openVisible:!0,thinBars:!0},k2={color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},j2={topColor:"rgba( 46, 220, 135, 0.4)",bottomColor:"rgba( 40, 221, 100, 0)",invertFilledArea:!1,lineColor:"#33D778",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},N2={baseValue:{type:"price",price:0},topFillColor1:"rgba(38, 166, 154, 0.28)",topFillColor2:"rgba(38, 166, 154, 0.05)",topLineColor:"rgba(38, 166, 154, 1)",bottomFillColor1:"rgba(239, 83, 80, 0.05)",bottomFillColor2:"rgba(239, 83, 80, 0.28)",bottomLineColor:"rgba(239, 83, 80, 1)",lineWidth:3,lineStyle:0,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},S2={color:"#26a69a",base:0},$m={color:"#2196f3"},Dm={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var Yu,Gu;function Fi(t,e){const i={0:[],1:[t.lineWidth,t.lineWidth],2:[2*t.lineWidth,2*t.lineWidth],3:[6*t.lineWidth,6*t.lineWidth],4:[t.lineWidth,4*t.lineWidth]}[e];t.setLineDash(i)}function Bm(t,e,i,n){t.beginPath();const r=t.lineWidth%2?.5:0;t.moveTo(i,e+r),t.lineTo(n,e+r),t.stroke()}function hi(t,e){if(!t)throw new Error("Assertion failed"+(e?": "+e:""))}function Fe(t){if(t===void 0)throw new Error("Value is undefined");return t}function M(t){if(t===null)throw new Error("Value is null");return t}function hn(t){return M(Fe(t))}(function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps",t[t.Curved=2]="Curved"})(Yu||(Yu={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(Gu||(Gu={}));const Ju={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function st(t){return t<0?0:t>255?255:Math.round(t)||0}function Im(t){return t<=0||t>1?Math.min(Math.max(t,0),1):Math.round(1e4*t)/1e4}const C2=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,E2=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,z2=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,M2=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;function Pr(t){(t=t.toLowerCase())in Ju&&(t=Ju[t]);{const e=M2.exec(t)||z2.exec(t);if(e)return[st(parseInt(e[1],10)),st(parseInt(e[2],10)),st(parseInt(e[3],10)),Im(e.length<5?1:parseFloat(e[4]))]}{const e=E2.exec(t);if(e)return[st(parseInt(e[1],16)),st(parseInt(e[2],16)),st(parseInt(e[3],16)),1]}{const e=C2.exec(t);if(e)return[st(17*parseInt(e[1],16)),st(17*parseInt(e[2],16)),st(17*parseInt(e[3],16)),1]}throw new Error(`Cannot parse color: ${t}`)}function Om(t){return .199*t[0]+.687*t[1]+.114*t[2]}function La(t){const e=Pr(t);return{t:`rgb(${e[0]}, ${e[1]}, ${e[2]})`,i:Om(e)>160?"black":"white"}}class be{constructor(){this.h=[]}l(e,i,n){const r={o:e,_:i,u:n===!0};this.h.push(r)}v(e){const i=this.h.findIndex(n=>e===n.o);i>-1&&this.h.splice(i,1)}p(e){this.h=this.h.filter(i=>i._!==e)}m(e,i,n){const r=[...this.h];this.h=this.h.filter(s=>!s.u),r.forEach(s=>s.o(e,i,n))}M(){return this.h.length>0}S(){this.h=[]}}function yt(t,...e){for(const i of e)for(const n in i)i[n]!==void 0&&Object.prototype.hasOwnProperty.call(i,n)&&!["__proto__","constructor","prototype"].includes(n)&&(typeof i[n]!="object"||t[n]===void 0||Array.isArray(i[n])?t[n]=i[n]:yt(t[n],i[n]));return t}function Et(t){return typeof t=="number"&&isFinite(t)}function Lr(t){return typeof t=="number"&&t%1==0}function qr(t){return typeof t=="string"}function hs(t){return typeof t=="boolean"}function At(t){const e=t;if(!e||typeof e!="object")return e;let i,n,r;for(n in i=Array.isArray(e)?[]:{},e)e.hasOwnProperty(n)&&(r=e[n],i[n]=r&&typeof r=="object"?At(r):r);return i}function T2(t){return t!==null}function Rr(t){return t===null?void 0:t}const nd="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function Mn(t,e,i){return e===void 0&&(e=nd),`${i=i!==void 0?`${i} `:""}${t}px ${e}`}class _2{constructor(e){this.k={C:1,T:5,P:NaN,R:"",D:"",V:"",O:"",B:0,A:0,I:0,L:0,N:0},this.F=e}W(){const e=this.k,i=this.j(),n=this.H();return e.P===i&&e.D===n||(e.P=i,e.D=n,e.R=Mn(i,n),e.L=2.5/12*i,e.B=e.L,e.A=i/12*e.T,e.I=i/12*e.T,e.N=0),e.V=this.$(),e.O=this.U(),this.k}$(){return this.F.W().layout.textColor}U(){return this.F.q()}j(){return this.F.W().layout.fontSize}H(){return this.F.W().layout.fontFamily}}class rd{constructor(){this.Y=[]}Z(e){this.Y=e}X(e,i,n){this.Y.forEach(r=>{r.X(e,i,n)})}}class wt{X(e,i,n){e.useBitmapCoordinateSpace(r=>this.K(r,i,n))}}class P2 extends wt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.G===null||this.G.tt===null)return;const r=this.G.tt,s=this.G,l=Math.max(1,Math.floor(i))%2/2,c=o=>{e.beginPath();for(let d=r.to-1;d>=r.from;--d){const u=s.it[d],h=Math.round(u.nt*i)+l,f=u.st*n,g=o*n+l;e.moveTo(h,f),e.arc(h,f,g,0,2*Math.PI)}e.fill()};s.et>0&&(e.fillStyle=s.rt,c(s.ht+s.et)),e.fillStyle=s.lt,c(s.ht)}}function L2(){return{it:[{nt:0,st:0,ot:0,_t:0}],lt:"",rt:"",ht:0,et:0,tt:null}}const R2={from:0,to:1};class A2{constructor(e,i){this.ut=new rd,this.ct=[],this.dt=[],this.ft=!0,this.F=e,this.vt=i,this.ut.Z(this.ct)}bt(e){const i=this.F.wt();i.length!==this.ct.length&&(this.dt=i.map(L2),this.ct=this.dt.map(n=>{const r=new P2;return r.J(n),r}),this.ut.Z(this.ct)),this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.ut}Mt(){const e=this.vt.W().mode===2,i=this.F.wt(),n=this.vt.xt(),r=this.F.St();i.forEach((s,l)=>{var c;const o=this.dt[l],d=s.kt(n);if(e||d===null||!s.yt())return void(o.tt=null);const u=M(s.Ct());o.lt=d.Tt,o.ht=d.ht,o.et=d.Pt,o.it[0]._t=d._t,o.it[0].st=s.Dt().Rt(d._t,u.Vt),o.rt=(c=d.Ot)!==null&&c!==void 0?c:this.F.Bt(o.it[0].st/s.Dt().At()),o.it[0].ot=n,o.it[0].nt=r.It(n),o.tt=R2})}}class $2 extends wt{constructor(e){super(),this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(this.zt===null)return;const s=this.zt.Lt.yt,l=this.zt.Et.yt;if(!s&&!l)return;const c=Math.round(this.zt.nt*n),o=Math.round(this.zt.st*r);e.lineCap="butt",s&&c>=0&&(e.lineWidth=Math.floor(this.zt.Lt.et*n),e.strokeStyle=this.zt.Lt.V,e.fillStyle=this.zt.Lt.V,Fi(e,this.zt.Lt.Nt),function(d,u,h,f){d.beginPath();const g=d.lineWidth%2?.5:0;d.moveTo(u+g,h),d.lineTo(u+g,f),d.stroke()}(e,c,0,i.height)),l&&o>=0&&(e.lineWidth=Math.floor(this.zt.Et.et*r),e.strokeStyle=this.zt.Et.V,e.fillStyle=this.zt.Et.V,Fi(e,this.zt.Et.Nt),Bm(e,o,0,i.width))}}class D2{constructor(e){this.ft=!0,this.Ft={Lt:{et:1,Nt:0,V:"",yt:!1},Et:{et:1,Nt:0,V:"",yt:!1},nt:0,st:0},this.Wt=new $2(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.yt(),i=M(this.jt.Ht()),n=i.$t().W().crosshair,r=this.Ft;if(n.mode===2)return r.Et.yt=!1,void(r.Lt.yt=!1);r.Et.yt=e&&this.jt.Ut(i),r.Lt.yt=e&&this.jt.qt(),r.Et.et=n.horzLine.width,r.Et.Nt=n.horzLine.style,r.Et.V=n.horzLine.color,r.Lt.et=n.vertLine.width,r.Lt.Nt=n.vertLine.style,r.Lt.V=n.vertLine.color,r.nt=this.jt.Yt(),r.st=this.jt.Zt()}}function B2(t,e,i,n,r,s){t.fillRect(e+s,i,n-2*s,s),t.fillRect(e+s,i+r-s,n-2*s,s),t.fillRect(e,i,s,r),t.fillRect(e+n-s,i,s,r)}function Ra(t,e,i,n,r,s){t.save(),t.globalCompositeOperation="copy",t.fillStyle=s,t.fillRect(e,i,n,r),t.restore()}function Zu(t,e,i,n,r,s){t.beginPath(),t.roundRect?t.roundRect(e,i,n,r,s):(t.lineTo(e+n-s[1],i),s[1]!==0&&t.arcTo(e+n,i,e+n,i+s[1],s[1]),t.lineTo(e+n,i+r-s[2]),s[2]!==0&&t.arcTo(e+n,i+r,e+n-s[2],i+r,s[2]),t.lineTo(e+s[3],i+r),s[3]!==0&&t.arcTo(e,i+r,e,i+r-s[3],s[3]),t.lineTo(e,i+s[0]),s[0]!==0&&t.arcTo(e,i,e+s[0],i,s[0]))}function eh(t,e,i,n,r,s,l=0,c=[0,0,0,0],o=""){if(t.save(),!l||!o||o===s)return Zu(t,e,i,n,r,c),t.fillStyle=s,t.fill(),void t.restore();const d=l/2;var u;Zu(t,e+d,i+d,n-l,r-l,(u=-d,c.map(h=>h===0?h:h+u))),s!=="transparent"&&(t.fillStyle=s,t.fill()),o!=="transparent"&&(t.lineWidth=l,t.strokeStyle=o,t.closePath(),t.stroke()),t.restore()}function Fm(t,e,i,n,r,s,l){t.save(),t.globalCompositeOperation="copy";const c=t.createLinearGradient(0,0,0,r);c.addColorStop(0,s),c.addColorStop(1,l),t.fillStyle=c,t.fillRect(e,i,n,r),t.restore()}class th{constructor(e,i){this.J(e,i)}J(e,i){this.zt=e,this.Xt=i}At(e,i){return this.zt.yt?e.P+e.L+e.B:0}X(e,i,n,r){if(!this.zt.yt||this.zt.Kt.length===0)return;const s=this.zt.V,l=this.Xt.t,c=e.useBitmapCoordinateSpace(o=>{const d=o.context;d.font=i.R;const u=this.Gt(o,i,n,r),h=u.Jt;return u.Qt?eh(d,h.ti,h.ii,h.ni,h.si,l,h.ei,[h.ht,0,0,h.ht],l):eh(d,h.ri,h.ii,h.ni,h.si,l,h.ei,[0,h.ht,h.ht,0],l),this.zt.hi&&(d.fillStyle=s,d.fillRect(h.ri,h.li,h.ai-h.ri,h.oi)),this.zt._i&&(d.fillStyle=i.O,d.fillRect(u.Qt?h.ui-h.ei:0,h.ii,h.ei,h.ci-h.ii)),u});e.useMediaCoordinateSpace(({context:o})=>{const d=c.di;o.font=i.R,o.textAlign=c.Qt?"right":"left",o.textBaseline="middle",o.fillStyle=s,o.fillText(this.zt.Kt,d.fi,(d.ii+d.ci)/2+d.pi)})}Gt(e,i,n,r){var s;const{context:l,bitmapSize:c,mediaSize:o,horizontalPixelRatio:d,verticalPixelRatio:u}=e,h=this.zt.hi||!this.zt.mi?i.T:0,f=this.zt.bi?i.C:0,g=i.L+this.Xt.wi,p=i.B+this.Xt.gi,x=i.A,y=i.I,v=this.zt.Kt,m=i.P,b=n.Mi(l,v),w=Math.ceil(n.xi(l,v)),j=m+g+p,_=i.C+x+y+w+h,C=Math.max(1,Math.floor(u));let P=Math.round(j*u);P%2!=C%2&&(P+=1);const U=f>0?Math.max(1,Math.floor(f*d)):0,R=Math.round(_*d),V=Math.round(h*d),S=(s=this.Xt.Si)!==null&&s!==void 0?s:this.Xt.ki,Q=Math.round(S*u)-Math.floor(.5*u),ke=Math.floor(Q+C/2-P/2),De=ke+P,Pe=r==="right",Be=Pe?o.width-f:f,A=Pe?c.width-U:U;let O,W,G;return Pe?(O=A-R,W=A-V,G=Be-h-x-f):(O=A+R,W=A+V,G=Be+h+x),{Qt:Pe,Jt:{ii:ke,li:Q,ci:De,ni:R,si:P,ht:2*d,ei:U,ti:O,ri:A,ai:W,oi:C,ui:c.width},di:{ii:ke/u,ci:De/u,fi:G,pi:b}}}}class Aa{constructor(e){this.yi={ki:0,t:"#000",gi:0,wi:0},this.Ci={Kt:"",yt:!1,hi:!0,mi:!1,Ot:"",V:"#FFF",_i:!1,bi:!1},this.Ti={Kt:"",yt:!1,hi:!1,mi:!0,Ot:"",V:"#FFF",_i:!0,bi:!0},this.ft=!0,this.Pi=new(e||th)(this.Ci,this.yi),this.Ri=new(e||th)(this.Ti,this.yi)}Kt(){return this.Di(),this.Ci.Kt}ki(){return this.Di(),this.yi.ki}bt(){this.ft=!0}At(e,i=!1){return Math.max(this.Pi.At(e,i),this.Ri.At(e,i))}Vi(){return this.yi.Si||0}Oi(e){this.yi.Si=e}Bi(){return this.Di(),this.Ci.yt||this.Ti.yt}Ai(){return this.Di(),this.Ci.yt}gt(e){return this.Di(),this.Ci.hi=this.Ci.hi&&e.W().ticksVisible,this.Ti.hi=this.Ti.hi&&e.W().ticksVisible,this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Pi}Ii(){return this.Di(),this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Ri}Di(){this.ft&&(this.Ci.hi=!0,this.Ti.hi=!1,this.zi(this.Ci,this.Ti,this.yi))}}class I2 extends Aa{constructor(e,i,n){super(),this.jt=e,this.Li=i,this.Ei=n}zi(e,i,n){if(e.yt=!1,this.jt.W().mode===2)return;const r=this.jt.W().horzLine;if(!r.labelVisible)return;const s=this.Li.Ct();if(!this.jt.yt()||this.Li.Ni()||s===null)return;const l=La(r.labelBackgroundColor);n.t=l.t,e.V=l.i;const c=2/12*this.Li.P();n.wi=c,n.gi=c;const o=this.Ei(this.Li);n.ki=o.ki,e.Kt=this.Li.Fi(o._t,s),e.yt=!0}}const O2=/[1-9]/g;class Vm{constructor(){this.zt=null}J(e){this.zt=e}X(e,i){if(this.zt===null||this.zt.yt===!1||this.zt.Kt.length===0)return;const n=e.useMediaCoordinateSpace(({context:f})=>(f.font=i.R,Math.round(i.Wi.xi(f,M(this.zt).Kt,O2))));if(n<=0)return;const r=i.ji,s=n+2*r,l=s/2,c=this.zt.Hi;let o=this.zt.ki,d=Math.floor(o-l)+.5;d<0?(o+=Math.abs(0-d),d=Math.floor(o-l)+.5):d+s>c&&(o-=Math.abs(c-(d+s)),d=Math.floor(o-l)+.5);const u=d+s,h=Math.ceil(0+i.C+i.T+i.L+i.P+i.B);e.useBitmapCoordinateSpace(({context:f,horizontalPixelRatio:g,verticalPixelRatio:p})=>{const x=M(this.zt);f.fillStyle=x.t;const y=Math.round(d*g),v=Math.round(0*p),m=Math.round(u*g),b=Math.round(h*p),w=Math.round(2*g);if(f.beginPath(),f.moveTo(y,v),f.lineTo(y,b-w),f.arcTo(y,b,y+w,b,w),f.lineTo(m-w,b),f.arcTo(m,b,m,b-w,w),f.lineTo(m,v),f.fill(),x.hi){const j=Math.round(x.ki*g),_=v,C=Math.round((_+i.T)*p);f.fillStyle=x.V;const P=Math.max(1,Math.floor(g)),U=Math.floor(.5*g);f.fillRect(j-U,_,P,C-_)}}),e.useMediaCoordinateSpace(({context:f})=>{const g=M(this.zt),p=0+i.C+i.T+i.L+i.P/2;f.font=i.R,f.textAlign="left",f.textBaseline="middle",f.fillStyle=g.V;const x=i.Wi.Mi(f,"Apr0");f.translate(d+r,p+x),f.fillText(g.Kt,0,0)})}}class F2{constructor(e,i,n){this.ft=!0,this.Wt=new Vm,this.Ft={yt:!1,t:"#4c525e",V:"white",Kt:"",Hi:0,ki:NaN,hi:!0},this.vt=e,this.$i=i,this.Ei=n}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt.J(this.Ft),this.Wt}Mt(){const e=this.Ft;if(e.yt=!1,this.vt.W().mode===2)return;const i=this.vt.W().vertLine;if(!i.labelVisible)return;const n=this.$i.St();if(n.Ni())return;e.Hi=n.Hi();const r=this.Ei();if(r===null)return;e.ki=r.ki;const s=n.Ui(this.vt.xt());e.Kt=n.qi(M(s)),e.yt=!0;const l=La(i.labelBackgroundColor);e.t=l.t,e.V=l.i,e.hi=n.W().ticksVisible}}class sd{constructor(){this.Yi=null,this.Zi=0}Xi(){return this.Zi}Ki(e){this.Zi=e}Dt(){return this.Yi}Gi(e){this.Yi=e}Ji(e){return[]}Qi(){return[]}yt(){return!0}}var ih;(function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet",t[t.Hidden=2]="Hidden"})(ih||(ih={}));class V2 extends sd{constructor(e,i){super(),this.tn=null,this.nn=NaN,this.sn=0,this.en=!0,this.rn=new Map,this.hn=!1,this.ln=NaN,this.an=NaN,this._n=NaN,this.un=NaN,this.$i=e,this.cn=i,this.dn=new A2(e,this),this.fn=((r,s)=>l=>{const c=s(),o=r();if(l===M(this.tn).vn())return{_t:o,ki:c};{const d=M(l.Ct());return{_t:l.pn(c,d),ki:c}}})(()=>this.nn,()=>this.an);const n=((r,s)=>()=>{const l=this.$i.St().mn(r()),c=s();return l&&Number.isFinite(c)?{ot:l,ki:c}:null})(()=>this.sn,()=>this.Yt());this.bn=new F2(this,e,n),this.wn=new D2(this)}W(){return this.cn}gn(e,i){this._n=e,this.un=i}Mn(){this._n=NaN,this.un=NaN}xn(){return this._n}Sn(){return this.un}kn(e,i,n){this.hn||(this.hn=!0),this.en=!0,this.yn(e,i,n)}xt(){return this.sn}Yt(){return this.ln}Zt(){return this.an}yt(){return this.en}Cn(){this.en=!1,this.Tn(),this.nn=NaN,this.ln=NaN,this.an=NaN,this.tn=null,this.Mn()}Pn(e){return this.tn!==null?[this.wn,this.dn]:[]}Ut(e){return e===this.tn&&this.cn.horzLine.visible}qt(){return this.cn.vertLine.visible}Rn(e,i){this.en&&this.tn===e||this.rn.clear();const n=[];return this.tn===e&&n.push(this.Dn(this.rn,i,this.fn)),n}Qi(){return this.en?[this.bn]:[]}Ht(){return this.tn}Vn(){this.wn.bt(),this.rn.forEach(e=>e.bt()),this.bn.bt(),this.dn.bt()}On(e){return e&&!e.vn().Ni()?e.vn():null}yn(e,i,n){this.Bn(e,i,n)&&this.Vn()}Bn(e,i,n){const r=this.ln,s=this.an,l=this.nn,c=this.sn,o=this.tn,d=this.On(n);this.sn=e,this.ln=isNaN(e)?NaN:this.$i.St().It(e),this.tn=n;const u=d!==null?d.Ct():null;return d!==null&&u!==null?(this.nn=i,this.an=d.Rt(i,u)):(this.nn=NaN,this.an=NaN),r!==this.ln||s!==this.an||c!==this.sn||l!==this.nn||o!==this.tn}Tn(){const e=this.$i.wt().map(n=>n.In().An()).filter(T2),i=e.length===0?null:Math.max(...e);this.sn=i!==null?i:NaN}Dn(e,i,n){let r=e.get(i);return r===void 0&&(r=new I2(this,i,n),e.set(i,r)),r}}function $a(t){return t==="left"||t==="right"}class Me{constructor(e){this.zn=new Map,this.Ln=[],this.En=e}Nn(e,i){const n=function(r,s){return r===void 0?s:{Fn:Math.max(r.Fn,s.Fn),Wn:r.Wn||s.Wn}}(this.zn.get(e),i);this.zn.set(e,n)}jn(){return this.En}Hn(e){const i=this.zn.get(e);return i===void 0?{Fn:this.En}:{Fn:Math.max(this.En,i.Fn),Wn:i.Wn}}$n(){this.Un(),this.Ln=[{qn:0}]}Yn(e){this.Un(),this.Ln=[{qn:1,Vt:e}]}Zn(e){this.Xn(),this.Ln.push({qn:5,Vt:e})}Un(){this.Xn(),this.Ln.push({qn:6})}Kn(){this.Un(),this.Ln=[{qn:4}]}Gn(e){this.Un(),this.Ln.push({qn:2,Vt:e})}Jn(e){this.Un(),this.Ln.push({qn:3,Vt:e})}Qn(){return this.Ln}ts(e){for(const i of e.Ln)this.ns(i);this.En=Math.max(this.En,e.En),e.zn.forEach((i,n)=>{this.Nn(n,i)})}static ss(){return new Me(2)}static es(){return new Me(3)}ns(e){switch(e.qn){case 0:this.$n();break;case 1:this.Yn(e.Vt);break;case 2:this.Gn(e.Vt);break;case 3:this.Jn(e.Vt);break;case 4:this.Kn();break;case 5:this.Zn(e.Vt);break;case 6:this.Xn()}}Xn(){const e=this.Ln.findIndex(i=>i.qn===5);e!==-1&&this.Ln.splice(e,1)}}const nh=".";function $t(t,e){if(!Et(t))return"n/a";if(!Lr(e))throw new TypeError("invalid length");if(e<0||e>16)throw new TypeError("invalid length");return e===0?t.toString():("0000000000000000"+t.toString()).slice(-e)}class Da{constructor(e,i){if(i||(i=1),Et(e)&&Lr(e)||(e=100),e<0)throw new TypeError("invalid base");this.Li=e,this.rs=i,this.hs()}format(e){const i=e<0?"−":"";return e=Math.abs(e),i+this.ls(e)}hs(){if(this._s=0,this.Li>0&&this.rs>0){let e=this.Li;for(;e>1;)e/=10,this._s++}}ls(e){const i=this.Li/this.rs;let n=Math.floor(e),r="";const s=this._s!==void 0?this._s:NaN;if(i>1){let l=+(Math.round(e*i)-n*i).toFixed(this._s);l>=i&&(l-=i,n+=1),r=nh+$t(+l.toFixed(this._s)*this.rs,s)}else n=Math.round(n*i)/i,s>0&&(r=nh+$t(0,s));return n.toFixed(0)+r}}class Wm extends Da{constructor(e=100){super(e)}format(e){return`${super.format(e)}%`}}class W2{constructor(e){this.us=e}format(e){let i="";return e<0&&(i="-",e=-e),e<995?i+this.cs(e):e<999995?i+this.cs(e/1e3)+"K":e<999999995?(e=1e3*Math.round(e/1e3),i+this.cs(e/1e6)+"M"):(e=1e6*Math.round(e/1e6),i+this.cs(e/1e9)+"B")}cs(e){let i;const n=Math.pow(10,this.us);return i=(e=Math.round(e*n)/n)>=1e-15&&e<1?e.toFixed(this.us).replace(/\.?0+$/,""):String(e),i.replace(/(\.[1-9]*)0+$/,(r,s)=>s)}}function Um(t,e,i,n,r,s,l){if(e.length===0||n.from>=e.length||n.to<=0)return;const{context:c,horizontalPixelRatio:o,verticalPixelRatio:d}=t,u=e[n.from];let h=s(t,u),f=u;if(n.to-n.from<2){const g=r/2;c.beginPath();const p={nt:u.nt-g,st:u.st},x={nt:u.nt+g,st:u.st};c.moveTo(p.nt*o,p.st*d),c.lineTo(x.nt*o,x.st*d),l(t,h,p,x)}else{const g=(x,y)=>{l(t,h,f,y),c.beginPath(),h=x,f=y};let p=f;c.beginPath(),c.moveTo(u.nt*o,u.st*d);for(let x=n.from+1;x<n.to;++x){p=e[x];const y=s(t,p);switch(i){case 0:c.lineTo(p.nt*o,p.st*d);break;case 1:c.lineTo(p.nt*o,e[x-1].st*d),y!==h&&(g(y,p),c.lineTo(p.nt*o,e[x-1].st*d)),c.lineTo(p.nt*o,p.st*d);break;case 2:{const[v,m]=U2(e,x-1,x);c.bezierCurveTo(v.nt*o,v.st*d,m.nt*o,m.st*d,p.nt*o,p.st*d);break}}i!==1&&y!==h&&(g(y,p),c.moveTo(p.nt*o,p.st*d))}(f!==p||f===p&&i===1)&&l(t,h,f,p)}}const rh=6;function bl(t,e){return{nt:t.nt-e.nt,st:t.st-e.st}}function sh(t,e){return{nt:t.nt/e,st:t.st/e}}function U2(t,e,i){const n=Math.max(0,e-1),r=Math.min(t.length-1,i+1);var s,l;return[(s=t[e],l=sh(bl(t[i],t[n]),rh),{nt:s.nt+l.nt,st:s.st+l.st}),bl(t[i],sh(bl(t[r],t[e]),rh))]}function q2(t,e,i,n,r){const{context:s,horizontalPixelRatio:l,verticalPixelRatio:c}=e;s.lineTo(r.nt*l,t*c),s.lineTo(n.nt*l,t*c),s.closePath(),s.fillStyle=i,s.fill()}class qm extends wt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){var i;if(this.G===null)return;const{it:n,tt:r,ds:s,et:l,Nt:c,fs:o}=this.G,d=(i=this.G.vs)!==null&&i!==void 0?i:this.G.ps?0:e.mediaSize.height;if(r===null)return;const u=e.context;u.lineCap="butt",u.lineJoin="round",u.lineWidth=l,Fi(u,c),u.lineWidth=1,Um(e,n,o,r,s,this.bs.bind(this),q2.bind(null,d))}}function Fo(t,e,i){return Math.min(Math.max(t,e),i)}function fs(t,e,i){return e-t<=i}function Hm(t){const e=Math.ceil(t);return e%2==0?e-1:e}class ad{ws(e,i){const n=this.gs,{Ms:r,xs:s,Ss:l,ks:c,ys:o,vs:d}=i;if(this.Cs===void 0||n===void 0||n.Ms!==r||n.xs!==s||n.Ss!==l||n.ks!==c||n.vs!==d||n.ys!==o){const u=e.context.createLinearGradient(0,0,0,o);if(u.addColorStop(0,r),d!=null){const h=Fo(d*e.verticalPixelRatio/o,0,1);u.addColorStop(h,s),u.addColorStop(h,l)}u.addColorStop(1,c),this.Cs=u,this.gs=i}return this.Cs}}class H2 extends qm{constructor(){super(...arguments),this.Ts=new ad}bs(e,i){return this.Ts.ws(e,{Ms:i.Ps,xs:"",Ss:"",ks:i.Rs,ys:e.bitmapSize.height})}}function K2(t,e){const i=t.context;i.strokeStyle=e,i.stroke()}class Km extends wt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){if(this.G===null)return;const{it:i,tt:n,ds:r,fs:s,et:l,Nt:c,Ds:o}=this.G;if(n===null)return;const d=e.context;d.lineCap="butt",d.lineWidth=l*e.verticalPixelRatio,Fi(d,c),d.lineJoin="round";const u=this.Vs.bind(this);s!==void 0&&Um(e,i,s,n,r,u,K2),o&&function(h,f,g,p,x){const{horizontalPixelRatio:y,verticalPixelRatio:v,context:m}=h;let b=null;const w=Math.max(1,Math.floor(y))%2/2,j=g*v+w;for(let _=p.to-1;_>=p.from;--_){const C=f[_];if(C){const P=x(h,C);P!==b&&(m.beginPath(),b!==null&&m.fill(),m.fillStyle=P,b=P);const U=Math.round(C.nt*y)+w,R=C.st*v;m.moveTo(U,R),m.arc(U,R,j,0,2*Math.PI)}}m.fill()}(e,i,o,n,u)}}class Xm extends Km{Vs(e,i){return i.lt}}function Qm(t,e,i,n,r=0,s=e.length){let l=s-r;for(;0<l;){const c=l>>1,o=r+c;n(e[o],i)===t?(r=o+1,l-=c+1):l=c}return r}const Hr=Qm.bind(null,!0),Ym=Qm.bind(null,!1);function X2(t,e){return t.ot<e}function Q2(t,e){return e<t.ot}function Gm(t,e,i){const n=e.Os(),r=e.ui(),s=Hr(t,n,X2),l=Ym(t,r,Q2);if(!i)return{from:s,to:l};let c=s,o=l;return s>0&&s<t.length&&t[s].ot>=n&&(c=s-1),l>0&&l<t.length&&t[l-1].ot<=r&&(o=l+1),{from:c,to:o}}class ld{constructor(e,i,n){this.Bs=!0,this.As=!0,this.Is=!0,this.zs=[],this.Ls=null,this.Es=e,this.Ns=i,this.Fs=n}bt(e){this.Bs=!0,e==="data"&&(this.As=!0),e==="options"&&(this.Is=!0)}gt(){return this.Es.yt()?(this.Ws(),this.Ls===null?null:this.js):null}Hs(){this.zs=this.zs.map(e=>Object.assign(Object.assign({},e),this.Es.Us().$s(e.ot)))}qs(){this.Ls=null}Ws(){this.As&&(this.Ys(),this.As=!1),this.Is&&(this.Hs(),this.Is=!1),this.Bs&&(this.Zs(),this.Bs=!1)}Zs(){const e=this.Es.Dt(),i=this.Ns.St();if(this.qs(),i.Ni()||e.Ni())return;const n=i.Xs();if(n===null||this.Es.In().Ks()===0)return;const r=this.Es.Ct();r!==null&&(this.Ls=Gm(this.zs,n,this.Fs),this.Gs(e,i,r.Vt),this.Js())}}class Ba extends ld{constructor(e,i){super(e,i,!0)}Gs(e,i,n){i.Qs(this.zs,Rr(this.Ls)),e.te(this.zs,n,Rr(this.Ls))}ie(e,i){return{ot:e,_t:i,nt:NaN,st:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>{const n=i.Vt[3];return this.se(i.ee,n,e)})}}class Y2 extends Ba{constructor(e,i){super(e,i),this.js=new rd,this.re=new H2,this.he=new Xm,this.js.Z([this.re,this.he])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W();this.re.J({fs:e.lineType,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,vs:null,ps:e.invertFilledArea,tt:this.Ls,ds:this.Ns.St().le()}),this.he.J({fs:e.lineVisible?e.lineType:void 0,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,tt:this.Ls,ds:this.Ns.St().le(),Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0})}}class G2 extends wt{constructor(){super(...arguments),this.zt=null,this.ae=0,this.oe=0}J(e){this.zt=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;this.ae=this._e(i),this.ae>=2&&Math.max(1,Math.floor(i))%2!=this.ae%2&&this.ae--,this.oe=this.zt.ue?Math.min(this.ae,Math.floor(i)):this.ae;let r=null;const s=this.oe<=this.ae&&this.zt.le>=Math.floor(1.5*i);for(let l=this.zt.tt.from;l<this.zt.tt.to;++l){const c=this.zt.In[l];r!==c.ce&&(e.fillStyle=c.ce,r=c.ce);const o=Math.floor(.5*this.oe),d=Math.round(c.nt*i),u=d-o,h=this.oe,f=u+h-1,g=Math.min(c.de,c.fe),p=Math.max(c.de,c.fe),x=Math.round(g*n)-o,y=Math.round(p*n)+o,v=Math.max(y-x,this.oe);e.fillRect(u,x,h,v);const m=Math.ceil(1.5*this.ae);if(s){if(this.zt.ve){const _=d-m;let C=Math.max(x,Math.round(c.pe*n)-o),P=C+h-1;P>x+v-1&&(P=x+v-1,C=P-h+1),e.fillRect(_,C,u-_,P-C+1)}const b=d+m;let w=Math.max(x,Math.round(c.me*n)-o),j=w+h-1;j>x+v-1&&(j=x+v-1,w=j-h+1),e.fillRect(f+1,w,b-f,j-w+1)}}}_e(e){const i=Math.floor(e);return Math.max(i,Math.floor(function(n,r){return Math.floor(.3*n*r)}(M(this.zt).le,e)))}}class Jm extends ld{constructor(e,i){super(e,i,!1)}Gs(e,i,n){i.Qs(this.zs,Rr(this.Ls)),e.be(this.zs,n,Rr(this.Ls))}we(e,i,n){return{ot:e,ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3],nt:NaN,pe:NaN,de:NaN,fe:NaN,me:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>this.se(i.ee,i,e))}}class J2 extends Jm{constructor(){super(...arguments),this.js=new G2}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),ve:e.openVisible,ue:e.thinBars,tt:this.Ls})}}class Z2 extends qm{constructor(){super(...arguments),this.Ts=new ad}bs(e,i){const n=this.G;return this.Ts.ws(e,{Ms:i.ke,xs:i.ye,Ss:i.Ce,ks:i.Te,ys:e.bitmapSize.height,vs:n.vs})}}class eb extends Km{constructor(){super(...arguments),this.Pe=new ad}Vs(e,i){const n=this.G;return this.Pe.ws(e,{Ms:i.Re,xs:i.Re,Ss:i.De,ks:i.De,ys:e.bitmapSize.height,vs:n.vs})}}class tb extends Ba{constructor(e,i){super(e,i),this.js=new rd,this.Ve=new Z2,this.Oe=new eb,this.js.Z([this.Ve,this.Oe])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.Ct();if(e===null)return;const i=this.Es.W(),n=this.Es.Dt().Rt(i.baseValue.price,e.Vt),r=this.Ns.St().le();this.Ve.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineType,vs:n,ps:!1,tt:this.Ls,ds:r}),this.Oe.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineVisible?i.lineType:void 0,Ds:i.pointMarkersVisible?i.pointMarkersRadius||i.lineWidth/2+2:void 0,vs:n,tt:this.Ls,ds:r})}}class ib extends wt{constructor(){super(...arguments),this.zt=null,this.ae=0}J(e){this.zt=e}K(e){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;const{horizontalPixelRatio:i}=e;this.ae=function(s,l){if(s>=2.5&&s<=4)return Math.floor(3*l);const c=1-.2*Math.atan(Math.max(4,s)-4)/(.5*Math.PI),o=Math.floor(s*c*l),d=Math.floor(s*l),u=Math.min(o,d);return Math.max(Math.floor(l),u)}(this.zt.le,i),this.ae>=2&&Math.floor(i)%2!=this.ae%2&&this.ae--;const n=this.zt.In;this.zt.Be&&this.Ae(e,n,this.zt.tt),this.zt._i&&this.Ie(e,n,this.zt.tt);const r=this.ze(i);(!this.zt._i||this.ae>2*r)&&this.Le(e,n,this.zt.tt)}Ae(e,i,n){if(this.zt===null)return;const{context:r,horizontalPixelRatio:s,verticalPixelRatio:l}=e;let c="",o=Math.min(Math.floor(s),Math.floor(this.zt.le*s));o=Math.max(Math.floor(s),Math.min(o,this.ae));const d=Math.floor(.5*o);let u=null;for(let h=n.from;h<n.to;h++){const f=i[h];f.Ee!==c&&(r.fillStyle=f.Ee,c=f.Ee);const g=Math.round(Math.min(f.pe,f.me)*l),p=Math.round(Math.max(f.pe,f.me)*l),x=Math.round(f.de*l),y=Math.round(f.fe*l);let v=Math.round(s*f.nt)-d;const m=v+o-1;u!==null&&(v=Math.max(u+1,v),v=Math.min(v,m));const b=m-v+1;r.fillRect(v,x,b,g-x),r.fillRect(v,p+1,b,y-p),u=m}}ze(e){let i=Math.floor(1*e);this.ae<=2*i&&(i=Math.floor(.5*(this.ae-1)));const n=Math.max(Math.floor(e),i);return this.ae<=2*n?Math.max(Math.floor(e),Math.floor(1*e)):n}Ie(e,i,n){if(this.zt===null)return;const{context:r,horizontalPixelRatio:s,verticalPixelRatio:l}=e;let c="";const o=this.ze(s);let d=null;for(let u=n.from;u<n.to;u++){const h=i[u];h.Ne!==c&&(r.fillStyle=h.Ne,c=h.Ne);let f=Math.round(h.nt*s)-Math.floor(.5*this.ae);const g=f+this.ae-1,p=Math.round(Math.min(h.pe,h.me)*l),x=Math.round(Math.max(h.pe,h.me)*l);if(d!==null&&(f=Math.max(d+1,f),f=Math.min(f,g)),this.zt.le*s>2*o)B2(r,f,p,g-f+1,x-p+1,o);else{const y=g-f+1;r.fillRect(f,p,y,x-p+1)}d=g}}Le(e,i,n){if(this.zt===null)return;const{context:r,horizontalPixelRatio:s,verticalPixelRatio:l}=e;let c="";const o=this.ze(s);for(let d=n.from;d<n.to;d++){const u=i[d];let h=Math.round(Math.min(u.pe,u.me)*l),f=Math.round(Math.max(u.pe,u.me)*l),g=Math.round(u.nt*s)-Math.floor(.5*this.ae),p=g+this.ae-1;if(u.ce!==c){const x=u.ce;r.fillStyle=x,c=x}this.zt._i&&(g+=o,h+=o,p-=o,f-=o),h>f||r.fillRect(g,h,p-g+1,f-h+1)}}}class nb extends Jm{constructor(){super(...arguments),this.js=new ib}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),Be:e.wickVisible,_i:e.borderVisible,tt:this.Ls})}}class rb{constructor(e,i){this.Fe=e,this.Li=i}X(e,i,n){this.Fe.draw(e,this.Li,i,n)}}class yl extends ld{constructor(e,i,n){super(e,i,!1),this.wn=n,this.js=new rb(this.wn.renderer(),r=>{const s=e.Ct();return s===null?null:e.Dt().Rt(r,s.Vt)})}We(e){return this.wn.priceValueBuilder(e)}je(e){return this.wn.isWhitespace(e)}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>Object.assign(Object.assign({ot:i.ee,nt:NaN},e.$s(i.ee)),{He:i.$e}))}Gs(e,i){i.Qs(this.zs,Rr(this.Ls))}Js(){this.wn.update({bars:this.zs.map(sb),barSpacing:this.Ns.St().le(),visibleRange:this.Ls},this.Es.W())}}function sb(t){return{x:t.nt,time:t.ot,originalData:t.He,barColor:t.ce}}class ab extends wt{constructor(){super(...arguments),this.zt=null,this.Ue=[]}J(e){this.zt=e,this.Ue=[]}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return;this.Ue.length||this.qe(i);const r=Math.max(1,Math.floor(n)),s=Math.round(this.zt.Ye*n)-Math.floor(r/2),l=s+r;for(let c=this.zt.tt.from;c<this.zt.tt.to;c++){const o=this.zt.it[c],d=this.Ue[c-this.zt.tt.from],u=Math.round(o.st*n);let h,f;e.fillStyle=o.ce,u<=s?(h=u,f=l):(h=s,f=u-Math.floor(r/2)+r),e.fillRect(d.Os,h,d.ui-d.Os+1,f-h)}}qe(e){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return void(this.Ue=[]);const i=Math.ceil(this.zt.le*e)<=1?0:Math.max(1,Math.floor(e)),n=Math.round(this.zt.le*e)-i;this.Ue=new Array(this.zt.tt.to-this.zt.tt.from);for(let s=this.zt.tt.from;s<this.zt.tt.to;s++){const l=this.zt.it[s],c=Math.round(l.nt*e);let o,d;if(n%2){const u=(n-1)/2;o=c-u,d=c+u}else{const u=n/2;o=c-u,d=c+u-1}this.Ue[s-this.zt.tt.from]={Os:o,ui:d,Ze:c,Xe:l.nt*e,ot:l.ot}}for(let s=this.zt.tt.from+1;s<this.zt.tt.to;s++){const l=this.Ue[s-this.zt.tt.from],c=this.Ue[s-this.zt.tt.from-1];l.ot===c.ot+1&&l.Os-c.ui!==i+1&&(c.Ze>c.Xe?c.ui=l.Os-i-1:l.Os=c.ui+i+1)}let r=Math.ceil(this.zt.le*e);for(let s=this.zt.tt.from;s<this.zt.tt.to;s++){const l=this.Ue[s-this.zt.tt.from];l.ui<l.Os&&(l.ui=l.Os);const c=l.ui-l.Os+1;r=Math.min(c,r)}if(i>0&&r<4)for(let s=this.zt.tt.from;s<this.zt.tt.to;s++){const l=this.Ue[s-this.zt.tt.from];l.ui-l.Os+1>r&&(l.Ze>l.Xe?l.ui-=1:l.Os+=1)}}}class lb extends Ba{constructor(){super(...arguments),this.js=new ab}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e={it:this.zs,le:this.Ns.St().le(),tt:this.Ls,Ye:this.Es.Dt().Rt(this.Es.W().base,M(this.Es.Ct()).Vt)};this.js.J(e)}}class ob extends Ba{constructor(){super(...arguments),this.js=new Xm}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W(),i={it:this.zs,Nt:e.lineStyle,fs:e.lineVisible?e.lineType:void 0,et:e.lineWidth,Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0,tt:this.Ls,ds:this.Ns.St().le()};this.js.J(i)}}const cb=/[2-9]/g;class Ar{constructor(e=50){this.Ke=0,this.Ge=1,this.Je=1,this.Qe={},this.tr=new Map,this.ir=e}nr(){this.Ke=0,this.tr.clear(),this.Ge=1,this.Je=1,this.Qe={}}xi(e,i,n){return this.sr(e,i,n).width}Mi(e,i,n){const r=this.sr(e,i,n);return((r.actualBoundingBoxAscent||0)-(r.actualBoundingBoxDescent||0))/2}sr(e,i,n){const r=n||cb,s=String(i).replace(r,"0");if(this.tr.has(s))return Fe(this.tr.get(s)).er;if(this.Ke===this.ir){const c=this.Qe[this.Je];delete this.Qe[this.Je],this.tr.delete(c),this.Je++,this.Ke--}e.save(),e.textBaseline="middle";const l=e.measureText(s);return e.restore(),l.width===0&&i.length||(this.tr.set(s,{er:l,rr:this.Ge}),this.Qe[this.Ge]=s,this.Ke++,this.Ge++),l}}class db{constructor(e){this.hr=null,this.k=null,this.lr="right",this.ar=e}_r(e,i,n){this.hr=e,this.k=i,this.lr=n}X(e){this.k!==null&&this.hr!==null&&this.hr.X(e,this.k,this.ar,this.lr)}}class Zm{constructor(e,i,n){this.ur=e,this.ar=new Ar(50),this.cr=i,this.F=n,this.j=-1,this.Wt=new db(this.ar)}gt(){const e=this.F.dr(this.cr);if(e===null)return null;const i=e.vr(this.cr)?e.pr():this.cr.Dt();if(i===null)return null;const n=e.mr(i);if(n==="overlay")return null;const r=this.F.br();return r.P!==this.j&&(this.j=r.P,this.ar.nr()),this.Wt._r(this.ur.Ii(),r,n),this.Wt}}class ub extends wt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}wr(e,i){var n;if(!(!((n=this.zt)===null||n===void 0)&&n.yt))return null;const{st:r,et:s,gr:l}=this.zt;return i>=r-s-7&&i<=r+s+7?{Mr:this.zt,gr:l}:null}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(this.zt===null||this.zt.yt===!1)return;const s=Math.round(this.zt.st*r);s<0||s>i.height||(e.lineCap="butt",e.strokeStyle=this.zt.V,e.lineWidth=Math.floor(this.zt.et*n),Fi(e,this.zt.Nt),Bm(e,s,0,i.width))}}class od{constructor(e){this.Sr={st:0,V:"rgba(0, 0, 0, 0)",et:1,Nt:0,yt:!1},this.kr=new ub,this.ft=!0,this.Es=e,this.Ns=e.$t(),this.kr.J(this.Sr)}bt(){this.ft=!0}gt(){return this.Es.yt()?(this.ft&&(this.yr(),this.ft=!1),this.kr):null}}class hb extends od{constructor(e){super(e)}yr(){this.Sr.yt=!1;const e=this.Es.Dt(),i=e.Cr().Cr;if(i!==2&&i!==3)return;const n=this.Es.W();if(!n.baseLineVisible||!this.Es.yt())return;const r=this.Es.Ct();r!==null&&(this.Sr.yt=!0,this.Sr.st=e.Rt(r.Vt,r.Vt),this.Sr.V=n.baseLineColor,this.Sr.et=n.baseLineWidth,this.Sr.Nt=n.baseLineStyle)}}class fb extends wt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}$e(){return this.zt}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){const r=this.zt;if(r===null)return;const s=Math.max(1,Math.floor(i)),l=s%2/2,c=Math.round(r.Xe.x*i)+l,o=r.Xe.y*n;e.fillStyle=r.Tr,e.beginPath();const d=Math.max(2,1.5*r.Pr)*i;e.arc(c,o,d,0,2*Math.PI,!1),e.fill(),e.fillStyle=r.Rr,e.beginPath(),e.arc(c,o,r.ht*i,0,2*Math.PI,!1),e.fill(),e.lineWidth=s,e.strokeStyle=r.Dr,e.beginPath(),e.arc(c,o,r.ht*i+s/2,0,2*Math.PI,!1),e.stroke()}}const pb=[{Vr:0,Or:.25,Br:4,Ar:10,Ir:.25,zr:0,Lr:.4,Er:.8},{Vr:.25,Or:.525,Br:10,Ar:14,Ir:0,zr:0,Lr:.8,Er:0},{Vr:.525,Or:1,Br:14,Ar:14,Ir:0,zr:0,Lr:0,Er:0}];function ah(t,e,i,n){return function(r,s){if(r==="transparent")return r;const l=Pr(r),c=l[3];return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${s*c})`}(t,i+(n-i)*e)}function lh(t,e){const i=t%2600/2600;let n;for(const o of pb)if(i>=o.Vr&&i<=o.Or){n=o;break}hi(n!==void 0,"Last price animation internal logic error");const r=(i-n.Vr)/(n.Or-n.Vr);return{Rr:ah(e,r,n.Ir,n.zr),Dr:ah(e,r,n.Lr,n.Er),ht:(s=r,l=n.Br,c=n.Ar,l+(c-l)*s)};var s,l,c}class mb{constructor(e){this.Wt=new fb,this.ft=!0,this.Nr=!0,this.Fr=performance.now(),this.Wr=this.Fr-1,this.jr=e}Hr(){this.Wr=this.Fr-1,this.bt()}$r(){if(this.bt(),this.jr.W().lastPriceAnimation===2){const e=performance.now(),i=this.Wr-e;if(i>0)return void(i<650&&(this.Wr+=2600));this.Fr=e,this.Wr=e+2600}}bt(){this.ft=!0}Ur(){this.Nr=!0}yt(){return this.jr.W().lastPriceAnimation!==0}qr(){switch(this.jr.W().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.Wr}}gt(){return this.ft?(this.Mt(),this.ft=!1,this.Nr=!1):this.Nr&&(this.Yr(),this.Nr=!1),this.Wt}Mt(){this.Wt.J(null);const e=this.jr.$t().St(),i=e.Xs(),n=this.jr.Ct();if(i===null||n===null)return;const r=this.jr.Zr(!0);if(r.Xr||!i.Kr(r.ee))return;const s={x:e.It(r.ee),y:this.jr.Dt().Rt(r._t,n.Vt)},l=r.V,c=this.jr.W().lineWidth,o=lh(this.Gr(),l);this.Wt.J({Tr:l,Pr:c,Rr:o.Rr,Dr:o.Dr,ht:o.ht,Xe:s})}Yr(){const e=this.Wt.$e();if(e!==null){const i=lh(this.Gr(),e.Tr);e.Rr=i.Rr,e.Dr=i.Dr,e.ht=i.ht}}Gr(){return this.qr()?performance.now()-this.Fr:2599}}function or(t,e){return Hm(Math.min(Math.max(t,12),30)*e)}function $r(t,e){switch(t){case"arrowDown":case"arrowUp":return or(e,1);case"circle":return or(e,.8);case"square":return or(e,.7)}}function eg(t){return function(e){const i=Math.ceil(e);return i%2!=0?i-1:i}(or(t,1))}function oh(t){return Math.max(or(t,.1),3)}function ch(t,e,i){return e?t:i?Math.ceil(t/2):0}function tg(t,e,i,n,r){const s=$r("square",i),l=(s-1)/2,c=t-l,o=e-l;return n>=c&&n<=c+s&&r>=o&&r<=o+s}function dh(t,e,i,n){const r=($r("arrowUp",n)-1)/2*i.Jr,s=(Hm(n/2)-1)/2*i.Jr;e.beginPath(),t?(e.moveTo(i.nt-r,i.st),e.lineTo(i.nt,i.st-r),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+s,i.st+r),e.lineTo(i.nt-s,i.st+r),e.lineTo(i.nt-s,i.st)):(e.moveTo(i.nt-r,i.st),e.lineTo(i.nt,i.st+r),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+s,i.st-r),e.lineTo(i.nt-s,i.st-r),e.lineTo(i.nt-s,i.st)),e.fill()}function gb(t,e,i,n,r,s){return tg(e,i,n,r,s)}class xb extends wt{constructor(){super(...arguments),this.zt=null,this.ar=new Ar,this.j=-1,this.H="",this.Qr=""}J(e){this.zt=e}_r(e,i){this.j===e&&this.H===i||(this.j=e,this.H=i,this.Qr=Mn(e,i),this.ar.nr())}wr(e,i){if(this.zt===null||this.zt.tt===null)return null;for(let n=this.zt.tt.from;n<this.zt.tt.to;n++){const r=this.zt.it[n];if(bb(r,e,i))return{Mr:r.th,gr:r.gr}}return null}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n},r,s){if(this.zt!==null&&this.zt.tt!==null){e.textBaseline="middle",e.font=this.Qr;for(let l=this.zt.tt.from;l<this.zt.tt.to;l++){const c=this.zt.it[l];c.Kt!==void 0&&(c.Kt.Hi=this.ar.xi(e,c.Kt.ih),c.Kt.At=this.j,c.Kt.nt=c.nt-c.Kt.Hi/2),vb(c,e,i,n)}}}}function vb(t,e,i,n){e.fillStyle=t.V,t.Kt!==void 0&&function(r,s,l,c,o,d){r.save(),r.scale(o,d),r.fillText(s,l,c),r.restore()}(e,t.Kt.ih,t.Kt.nt,t.Kt.st,i,n),function(r,s,l){if(r.Ks!==0){switch(r.nh){case"arrowDown":return void dh(!1,s,l,r.Ks);case"arrowUp":return void dh(!0,s,l,r.Ks);case"circle":return void function(c,o,d){const u=($r("circle",d)-1)/2;c.beginPath(),c.arc(o.nt,o.st,u*o.Jr,0,2*Math.PI,!1),c.fill()}(s,l,r.Ks);case"square":return void function(c,o,d){const u=$r("square",d),h=(u-1)*o.Jr/2,f=o.nt-h,g=o.st-h;c.fillRect(f,g,u*o.Jr,u*o.Jr)}(s,l,r.Ks)}r.nh}}(t,e,function(r,s,l){const c=Math.max(1,Math.floor(s))%2/2;return{nt:Math.round(r.nt*s)+c,st:r.st*l,Jr:s}}(t,i,n))}function bb(t,e,i){return!(t.Kt===void 0||!function(n,r,s,l,c,o){const d=l/2;return c>=n&&c<=n+s&&o>=r-d&&o<=r+d}(t.Kt.nt,t.Kt.st,t.Kt.Hi,t.Kt.At,e,i))||function(n,r,s){if(n.Ks===0)return!1;switch(n.nh){case"arrowDown":case"arrowUp":return gb(0,n.nt,n.st,n.Ks,r,s);case"circle":return function(l,c,o,d,u){const h=2+$r("circle",o)/2,f=l-d,g=c-u;return Math.sqrt(f*f+g*g)<=h}(n.nt,n.st,n.Ks,r,s);case"square":return tg(n.nt,n.st,n.Ks,r,s)}}(t,e,i)}function yb(t,e,i,n,r,s,l,c,o){const d=Et(i)?i:i.Se,u=Et(i)?i:i.Me,h=Et(i)?i:i.xe,f=Et(e.size)?Math.max(e.size,0):1,g=eg(c.le())*f,p=g/2;switch(t.Ks=g,e.position){case"inBar":return t.st=l.Rt(d,o),void(t.Kt!==void 0&&(t.Kt.st=t.st+p+s+.6*r));case"aboveBar":return t.st=l.Rt(u,o)-p-n.sh,t.Kt!==void 0&&(t.Kt.st=t.st-p-.6*r,n.sh+=1.2*r),void(n.sh+=g+s);case"belowBar":return t.st=l.Rt(h,o)+p+n.eh,t.Kt!==void 0&&(t.Kt.st=t.st+p+s+.6*r,n.eh+=1.2*r),void(n.eh+=g+s)}e.position}class wb{constructor(e,i){this.ft=!0,this.rh=!0,this.hh=!0,this.ah=null,this.oh=null,this.Wt=new xb,this.jr=e,this.$i=i,this.zt={it:[],tt:null}}bt(e){this.ft=!0,this.hh=!0,e==="data"&&(this.rh=!0,this.oh=null)}gt(e){if(!this.jr.yt())return null;this.ft&&this._h();const i=this.$i.W().layout;return this.Wt._r(i.fontSize,i.fontFamily),this.Wt.J(this.zt),this.Wt}uh(){if(this.hh){if(this.jr.dh().length>0){const e=this.$i.St().le(),i=oh(e),n=1.5*eg(e)+2*i,r=this.fh();this.ah={above:ch(n,r.aboveBar,r.inBar),below:ch(n,r.belowBar,r.inBar)}}else this.ah=null;this.hh=!1}return this.ah}fh(){return this.oh===null&&(this.oh=this.jr.dh().reduce((e,i)=>(e[i.position]||(e[i.position]=!0),e),{inBar:!1,aboveBar:!1,belowBar:!1})),this.oh}_h(){const e=this.jr.Dt(),i=this.$i.St(),n=this.jr.dh();this.rh&&(this.zt.it=n.map(u=>({ot:u.time,nt:0,st:0,Ks:0,nh:u.shape,V:u.color,th:u.th,gr:u.id,Kt:void 0})),this.rh=!1);const r=this.$i.W().layout;this.zt.tt=null;const s=i.Xs();if(s===null)return;const l=this.jr.Ct();if(l===null||this.zt.it.length===0)return;let c=NaN;const o=oh(i.le()),d={sh:o,eh:o};this.zt.tt=Gm(this.zt.it,s,!0);for(let u=this.zt.tt.from;u<this.zt.tt.to;u++){const h=n[u];h.time!==c&&(d.sh=o,d.eh=o,c=h.time);const f=this.zt.it[u];f.nt=i.It(h.time),h.text!==void 0&&h.text.length>0&&(f.Kt={ih:h.text,nt:0,st:0,Hi:0,At:0});const g=this.jr.ph(h.time);g!==null&&yb(f,h,g,d,r.fontSize,o,e,i,l.Vt)}this.ft=!1}}class kb extends od{constructor(e){super(e)}yr(){const e=this.Sr;e.yt=!1;const i=this.Es.W();if(!i.priceLineVisible||!this.Es.yt())return;const n=this.Es.Zr(i.priceLineSource===0);n.Xr||(e.yt=!0,e.st=n.ki,e.V=this.Es.mh(n.V),e.et=i.priceLineWidth,e.Nt=i.priceLineStyle)}}class jb extends Aa{constructor(e){super(),this.jt=e}zi(e,i,n){e.yt=!1,i.yt=!1;const r=this.jt;if(!r.yt())return;const s=r.W(),l=s.lastValueVisible,c=r.bh()!=="",o=s.seriesLastValueMode===0,d=r.Zr(!1);if(d.Xr)return;l&&(e.Kt=this.wh(d,l,o),e.yt=e.Kt.length!==0),(c||o)&&(i.Kt=this.gh(d,l,c,o),i.yt=i.Kt.length>0);const u=r.mh(d.V),h=La(u);n.t=h.t,n.ki=d.ki,i.Ot=r.$t().Bt(d.ki/r.Dt().At()),e.Ot=u,e.V=h.i,i.V=h.i}gh(e,i,n,r){let s="";const l=this.jt.bh();return n&&l.length!==0&&(s+=`${l} `),i&&r&&(s+=this.jt.Dt().Mh()?e.xh:e.Sh),s.trim()}wh(e,i,n){return i?n?this.jt.Dt().Mh()?e.Sh:e.xh:e.Kt:""}}function uh(t,e,i,n){const r=Number.isFinite(e),s=Number.isFinite(i);return r&&s?t(e,i):r||s?r?e:i:n}class Qe{constructor(e,i){this.kh=e,this.yh=i}Ch(e){return e!==null&&this.kh===e.kh&&this.yh===e.yh}Th(){return new Qe(this.kh,this.yh)}Ph(){return this.kh}Rh(){return this.yh}Dh(){return this.yh-this.kh}Ni(){return this.yh===this.kh||Number.isNaN(this.yh)||Number.isNaN(this.kh)}ts(e){return e===null?this:new Qe(uh(Math.min,this.Ph(),e.Ph(),-1/0),uh(Math.max,this.Rh(),e.Rh(),1/0))}Vh(e){if(!Et(e)||this.yh-this.kh===0)return;const i=.5*(this.yh+this.kh);let n=this.yh-i,r=this.kh-i;n*=e,r*=e,this.yh=i+n,this.kh=i+r}Oh(e){Et(e)&&(this.yh+=e,this.kh+=e)}Bh(){return{minValue:this.kh,maxValue:this.yh}}static Ah(e){return e===null?null:new Qe(e.minValue,e.maxValue)}}class ha{constructor(e,i){this.Ih=e,this.zh=i||null}Lh(){return this.Ih}Eh(){return this.zh}Bh(){return this.Ih===null?null:{priceRange:this.Ih.Bh(),margins:this.zh||void 0}}static Ah(e){return e===null?null:new ha(Qe.Ah(e.priceRange),e.margins)}}class Nb extends od{constructor(e,i){super(e),this.Nh=i}yr(){const e=this.Sr;e.yt=!1;const i=this.Nh.W();if(!this.Es.yt()||!i.lineVisible)return;const n=this.Nh.Fh();n!==null&&(e.yt=!0,e.st=n,e.V=i.color,e.et=i.lineWidth,e.Nt=i.lineStyle,e.gr=this.Nh.W().id)}}class Sb extends Aa{constructor(e,i){super(),this.jr=e,this.Nh=i}zi(e,i,n){e.yt=!1,i.yt=!1;const r=this.Nh.W(),s=r.axisLabelVisible,l=r.title!=="",c=this.jr;if(!s||!c.yt())return;const o=this.Nh.Fh();if(o===null)return;l&&(i.Kt=r.title,i.yt=!0),i.Ot=c.$t().Bt(o/c.Dt().At()),e.Kt=this.Wh(r.price),e.yt=!0;const d=La(r.axisLabelColor||r.color);n.t=d.t;const u=r.axisLabelTextColor||d.i;e.V=u,i.V=u,n.ki=o}Wh(e){const i=this.jr.Ct();return i===null?"":this.jr.Dt().Fi(e,i.Vt)}}class Cb{constructor(e,i){this.jr=e,this.cn=i,this.jh=new Nb(e,this),this.ur=new Sb(e,this),this.Hh=new Zm(this.ur,e,e.$t())}$h(e){yt(this.cn,e),this.bt(),this.jr.$t().Uh()}W(){return this.cn}qh(){return this.jh}Yh(){return this.Hh}Zh(){return this.ur}bt(){this.jh.bt(),this.ur.bt()}Fh(){const e=this.jr,i=e.Dt();if(e.$t().St().Ni()||i.Ni())return null;const n=e.Ct();return n===null?null:i.Rt(this.cn.price,n.Vt)}}class Eb extends sd{constructor(e){super(),this.$i=e}$t(){return this.$i}}const zb={Bar:(t,e,i,n)=>{var r;const s=e.upColor,l=e.downColor,c=M(t(i,n)),o=hn(c.Vt[0])<=hn(c.Vt[3]);return{ce:(r=c.V)!==null&&r!==void 0?r:o?s:l}},Candlestick:(t,e,i,n)=>{var r,s,l;const c=e.upColor,o=e.downColor,d=e.borderUpColor,u=e.borderDownColor,h=e.wickUpColor,f=e.wickDownColor,g=M(t(i,n)),p=hn(g.Vt[0])<=hn(g.Vt[3]);return{ce:(r=g.V)!==null&&r!==void 0?r:p?c:o,Ne:(s=g.Ot)!==null&&s!==void 0?s:p?d:u,Ee:(l=g.Xh)!==null&&l!==void 0?l:p?h:f}},Custom:(t,e,i,n)=>{var r;return{ce:(r=M(t(i,n)).V)!==null&&r!==void 0?r:e.color}},Area:(t,e,i,n)=>{var r,s,l,c;const o=M(t(i,n));return{ce:(r=o.lt)!==null&&r!==void 0?r:e.lineColor,lt:(s=o.lt)!==null&&s!==void 0?s:e.lineColor,Ps:(l=o.Ps)!==null&&l!==void 0?l:e.topColor,Rs:(c=o.Rs)!==null&&c!==void 0?c:e.bottomColor}},Baseline:(t,e,i,n)=>{var r,s,l,c,o,d;const u=M(t(i,n));return{ce:u.Vt[3]>=e.baseValue.price?e.topLineColor:e.bottomLineColor,Re:(r=u.Re)!==null&&r!==void 0?r:e.topLineColor,De:(s=u.De)!==null&&s!==void 0?s:e.bottomLineColor,ke:(l=u.ke)!==null&&l!==void 0?l:e.topFillColor1,ye:(c=u.ye)!==null&&c!==void 0?c:e.topFillColor2,Ce:(o=u.Ce)!==null&&o!==void 0?o:e.bottomFillColor1,Te:(d=u.Te)!==null&&d!==void 0?d:e.bottomFillColor2}},Line:(t,e,i,n)=>{var r,s;const l=M(t(i,n));return{ce:(r=l.V)!==null&&r!==void 0?r:e.color,lt:(s=l.V)!==null&&s!==void 0?s:e.color}},Histogram:(t,e,i,n)=>{var r;return{ce:(r=M(t(i,n)).V)!==null&&r!==void 0?r:e.color}}};class Mb{constructor(e){this.Kh=(i,n)=>n!==void 0?n.Vt:this.jr.In().Gh(i),this.jr=e,this.Jh=zb[e.Qh()]}$s(e,i){return this.Jh(this.Kh,this.jr.W(),e,i)}}var hh;(function(t){t[t.NearestLeft=-1]="NearestLeft",t[t.None=0]="None",t[t.NearestRight=1]="NearestRight"})(hh||(hh={}));const qt=30;class Tb{constructor(){this.tl=[],this.il=new Map,this.nl=new Map}sl(){return this.Ks()>0?this.tl[this.tl.length-1]:null}el(){return this.Ks()>0?this.rl(0):null}An(){return this.Ks()>0?this.rl(this.tl.length-1):null}Ks(){return this.tl.length}Ni(){return this.Ks()===0}Kr(e){return this.hl(e,0)!==null}Gh(e){return this.ll(e)}ll(e,i=0){const n=this.hl(e,i);return n===null?null:Object.assign(Object.assign({},this.al(n)),{ee:this.rl(n)})}ne(){return this.tl}ol(e,i,n){if(this.Ni())return null;let r=null;for(const s of n)r=ps(r,this._l(e,i,s));return r}J(e){this.nl.clear(),this.il.clear(),this.tl=e}rl(e){return this.tl[e].ee}al(e){return this.tl[e]}hl(e,i){const n=this.ul(e);if(n===null&&i!==0)switch(i){case-1:return this.cl(e);case 1:return this.dl(e);default:throw new TypeError("Unknown search mode")}return n}cl(e){let i=this.fl(e);return i>0&&(i-=1),i!==this.tl.length&&this.rl(i)<e?i:null}dl(e){const i=this.vl(e);return i!==this.tl.length&&e<this.rl(i)?i:null}ul(e){const i=this.fl(e);return i===this.tl.length||e<this.tl[i].ee?null:i}fl(e){return Hr(this.tl,e,(i,n)=>i.ee<n)}vl(e){return Ym(this.tl,e,(i,n)=>i.ee>n)}pl(e,i,n){let r=null;for(let s=e;s<i;s++){const l=this.tl[s].Vt[n];Number.isNaN(l)||(r===null?r={ml:l,bl:l}:(l<r.ml&&(r.ml=l),l>r.bl&&(r.bl=l)))}return r}_l(e,i,n){if(this.Ni())return null;let r=null;const s=M(this.el()),l=M(this.An()),c=Math.max(e,s),o=Math.min(i,l),d=Math.ceil(c/qt)*qt,u=Math.max(d,Math.floor(o/qt)*qt);{const f=this.fl(c),g=this.vl(Math.min(o,d,i));r=ps(r,this.pl(f,g,n))}let h=this.il.get(n);h===void 0&&(h=new Map,this.il.set(n,h));for(let f=Math.max(d+1,c);f<u;f+=qt){const g=Math.floor(f/qt);let p=h.get(g);if(p===void 0){const x=this.fl(g*qt),y=this.vl((g+1)*qt-1);p=this.pl(x,y,n),h.set(g,p)}r=ps(r,p)}{const f=this.fl(u),g=this.vl(o);r=ps(r,this.pl(f,g,n))}return r}}function ps(t,e){return t===null?e:e===null?t:{ml:Math.min(t.ml,e.ml),bl:Math.max(t.bl,e.bl)}}class _b{constructor(e){this.wl=e}X(e,i,n){this.wl.draw(e)}gl(e,i,n){var r,s;(s=(r=this.wl).drawBackground)===null||s===void 0||s.call(r,e)}}class wl{constructor(e){this.tr=null,this.wn=e}gt(){var e;const i=this.wn.renderer();if(i===null)return null;if(((e=this.tr)===null||e===void 0?void 0:e.Ml)===i)return this.tr.xl;const n=new _b(i);return this.tr={Ml:i,xl:n},n}Sl(){var e,i,n;return(n=(i=(e=this.wn).zOrder)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:"normal"}}function ig(t){var e,i,n,r,s;return{Kt:t.text(),ki:t.coordinate(),Si:(e=t.fixedCoordinate)===null||e===void 0?void 0:e.call(t),V:t.textColor(),t:t.backColor(),yt:(n=(i=t.visible)===null||i===void 0?void 0:i.call(t))===null||n===void 0||n,hi:(s=(r=t.tickVisible)===null||r===void 0?void 0:r.call(t))===null||s===void 0||s}}class Pb{constructor(e,i){this.Wt=new Vm,this.kl=e,this.yl=i}gt(){return this.Wt.J(Object.assign({Hi:this.yl.Hi()},ig(this.kl))),this.Wt}}class Lb extends Aa{constructor(e,i){super(),this.kl=e,this.Li=i}zi(e,i,n){const r=ig(this.kl);n.t=r.t,e.V=r.V;const s=2/12*this.Li.P();n.wi=s,n.gi=s,n.ki=r.ki,n.Si=r.Si,e.Kt=r.Kt,e.yt=r.yt,e.hi=r.hi}}class Rb{constructor(e,i){this.Cl=null,this.Tl=null,this.Pl=null,this.Rl=null,this.Dl=null,this.Vl=e,this.jr=i}Ol(){return this.Vl}Vn(){var e,i;(i=(e=this.Vl).updateAllViews)===null||i===void 0||i.call(e)}Pn(){var e,i,n,r;const s=(n=(i=(e=this.Vl).paneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Cl)===null||r===void 0?void 0:r.Ml)===s)return this.Cl.xl;const l=s.map(c=>new wl(c));return this.Cl={Ml:s,xl:l},l}Qi(){var e,i,n,r;const s=(n=(i=(e=this.Vl).timeAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Tl)===null||r===void 0?void 0:r.Ml)===s)return this.Tl.xl;const l=this.jr.$t().St(),c=s.map(o=>new Pb(o,l));return this.Tl={Ml:s,xl:c},c}Rn(){var e,i,n,r;const s=(n=(i=(e=this.Vl).priceAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Pl)===null||r===void 0?void 0:r.Ml)===s)return this.Pl.xl;const l=this.jr.Dt(),c=s.map(o=>new Lb(o,l));return this.Pl={Ml:s,xl:c},c}Bl(){var e,i,n,r;const s=(n=(i=(e=this.Vl).priceAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Rl)===null||r===void 0?void 0:r.Ml)===s)return this.Rl.xl;const l=s.map(c=>new wl(c));return this.Rl={Ml:s,xl:l},l}Al(){var e,i,n,r;const s=(n=(i=(e=this.Vl).timeAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Dl)===null||r===void 0?void 0:r.Ml)===s)return this.Dl.xl;const l=s.map(c=>new wl(c));return this.Dl={Ml:s,xl:l},l}Il(e,i){var n,r,s;return(s=(r=(n=this.Vl).autoscaleInfo)===null||r===void 0?void 0:r.call(n,e,i))!==null&&s!==void 0?s:null}wr(e,i){var n,r,s;return(s=(r=(n=this.Vl).hitTest)===null||r===void 0?void 0:r.call(n,e,i))!==null&&s!==void 0?s:null}}function kl(t,e,i,n){t.forEach(r=>{e(r).forEach(s=>{s.Sl()===i&&n.push(s)})})}function jl(t){return t.Pn()}function Ab(t){return t.Bl()}function $b(t){return t.Al()}class cd extends Eb{constructor(e,i,n,r,s){super(e),this.zt=new Tb,this.jh=new kb(this),this.zl=[],this.Ll=new hb(this),this.El=null,this.Nl=null,this.Fl=[],this.Wl=[],this.jl=null,this.Hl=[],this.cn=i,this.$l=n;const l=new jb(this);this.rn=[l],this.Hh=new Zm(l,this,e),n!=="Area"&&n!=="Line"&&n!=="Baseline"||(this.El=new mb(this)),this.Ul(),this.ql(s)}S(){this.jl!==null&&clearTimeout(this.jl)}mh(e){return this.cn.priceLineColor||e}Zr(e){const i={Xr:!0},n=this.Dt();if(this.$t().St().Ni()||n.Ni()||this.zt.Ni())return i;const r=this.$t().St().Xs(),s=this.Ct();if(r===null||s===null)return i;let l,c;if(e){const h=this.zt.sl();if(h===null)return i;l=h,c=h.ee}else{const h=this.zt.ll(r.ui(),-1);if(h===null||(l=this.zt.Gh(h.ee),l===null))return i;c=h.ee}const o=l.Vt[3],d=this.Us().$s(c,{Vt:l}),u=n.Rt(o,s.Vt);return{Xr:!1,_t:o,Kt:n.Fi(o,s.Vt),xh:n.Yl(o),Sh:n.Zl(o,s.Vt),V:d.ce,ki:u,ee:c}}Us(){return this.Nl!==null||(this.Nl=new Mb(this)),this.Nl}W(){return this.cn}$h(e){const i=e.priceScaleId;i!==void 0&&i!==this.cn.priceScaleId&&this.$t().Xl(this,i),yt(this.cn,e),e.priceFormat!==void 0&&(this.Ul(),this.$t().Kl()),this.$t().Gl(this),this.$t().Jl(),this.wn.bt("options")}J(e,i){this.zt.J(e),this.Ql(),this.wn.bt("data"),this.dn.bt("data"),this.El!==null&&(i&&i.ta?this.El.$r():e.length===0&&this.El.Hr());const n=this.$t().dr(this);this.$t().ia(n),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}na(e){this.Fl=e,this.Ql();const i=this.$t().dr(this);this.dn.bt("data"),this.$t().ia(i),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}sa(){return this.Fl}dh(){return this.Wl}ea(e){const i=new Cb(this,e);return this.zl.push(i),this.$t().Gl(this),i}ra(e){const i=this.zl.indexOf(e);i!==-1&&this.zl.splice(i,1),this.$t().Gl(this)}Qh(){return this.$l}Ct(){const e=this.ha();return e===null?null:{Vt:e.Vt[3],la:e.ot}}ha(){const e=this.$t().St().Xs();if(e===null)return null;const i=e.Os();return this.zt.ll(i,1)}In(){return this.zt}ph(e){const i=this.zt.Gh(e);return i===null?null:this.$l==="Bar"||this.$l==="Candlestick"||this.$l==="Custom"?{ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3]}:i.Vt[3]}aa(e){const i=[];kl(this.Hl,jl,"top",i);const n=this.El;return n!==null&&n.yt()&&(this.jl===null&&n.qr()&&(this.jl=setTimeout(()=>{this.jl=null,this.$t().oa()},0)),n.Ur(),i.unshift(n)),i}Pn(){const e=[];this._a()||e.push(this.Ll),e.push(this.wn,this.jh,this.dn);const i=this.zl.map(n=>n.qh());return e.push(...i),kl(this.Hl,jl,"normal",e),e}ua(){return this.ca(jl,"bottom")}da(e){return this.ca(Ab,e)}fa(e){return this.ca($b,e)}va(e,i){return this.Hl.map(n=>n.wr(e,i)).filter(n=>n!==null)}Ji(e){return[this.Hh,...this.zl.map(i=>i.Yh())]}Rn(e,i){if(i!==this.Yi&&!this._a())return[];const n=[...this.rn];for(const r of this.zl)n.push(r.Zh());return this.Hl.forEach(r=>{n.push(...r.Rn())}),n}Qi(){const e=[];return this.Hl.forEach(i=>{e.push(...i.Qi())}),e}Il(e,i){if(this.cn.autoscaleInfoProvider!==void 0){const n=this.cn.autoscaleInfoProvider(()=>{const r=this.pa(e,i);return r===null?null:r.Bh()});return ha.Ah(n)}return this.pa(e,i)}ma(){return this.cn.priceFormat.minMove}ba(){return this.wa}Vn(){var e;this.wn.bt(),this.dn.bt();for(const i of this.rn)i.bt();for(const i of this.zl)i.bt();this.jh.bt(),this.Ll.bt(),(e=this.El)===null||e===void 0||e.bt(),this.Hl.forEach(i=>i.Vn())}Dt(){return M(super.Dt())}kt(e){if(!((this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline")&&this.cn.crosshairMarkerVisible))return null;const i=this.zt.Gh(e);return i===null?null:{_t:i.Vt[3],ht:this.ga(),Ot:this.Ma(),Pt:this.xa(),Tt:this.Sa(e)}}bh(){return this.cn.title}yt(){return this.cn.visible}ka(e){this.Hl.push(new Rb(e,this))}ya(e){this.Hl=this.Hl.filter(i=>i.Ol()!==e)}Ca(){if(this.wn instanceof yl)return e=>this.wn.We(e)}Ta(){if(this.wn instanceof yl)return e=>this.wn.je(e)}_a(){return!$a(this.Dt().Pa())}pa(e,i){if(!Lr(e)||!Lr(i)||this.zt.Ni())return null;const n=this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline"||this.$l==="Histogram"?[3]:[2,1],r=this.zt.ol(e,i,n);let s=r!==null?new Qe(r.ml,r.bl):null;if(this.Qh()==="Histogram"){const c=this.cn.base,o=new Qe(c,c);s=s!==null?s.ts(o):o}let l=this.dn.uh();return this.Hl.forEach(c=>{const o=c.Il(e,i);if(o!=null&&o.priceRange){const g=new Qe(o.priceRange.minValue,o.priceRange.maxValue);s=s!==null?s.ts(g):g}var d,u,h,f;o!=null&&o.margins&&(d=l,u=o.margins,l={above:Math.max((h=d==null?void 0:d.above)!==null&&h!==void 0?h:0,u.above),below:Math.max((f=d==null?void 0:d.below)!==null&&f!==void 0?f:0,u.below)})}),new ha(s,l)}ga(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerRadius}return 0}Ma(){switch(this.$l){case"Line":case"Area":case"Baseline":{const e=this.cn.crosshairMarkerBorderColor;if(e.length!==0)return e}}return null}xa(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerBorderWidth}return 0}Sa(e){switch(this.$l){case"Line":case"Area":case"Baseline":{const i=this.cn.crosshairMarkerBackgroundColor;if(i.length!==0)return i}}return this.Us().$s(e).ce}Ul(){switch(this.cn.priceFormat.type){case"custom":this.wa={format:this.cn.priceFormat.formatter};break;case"volume":this.wa=new W2(this.cn.priceFormat.precision);break;case"percent":this.wa=new Wm(this.cn.priceFormat.precision);break;default:{const e=Math.pow(10,this.cn.priceFormat.precision);this.wa=new Da(e,this.cn.priceFormat.minMove*e)}}this.Yi!==null&&this.Yi.Ra()}Ql(){const e=this.$t().St();if(!e.Da()||this.zt.Ni())return void(this.Wl=[]);const i=M(this.zt.el());this.Wl=this.Fl.map((n,r)=>{const s=M(e.Va(n.time,!0)),l=s<i?1:-1;return{time:M(this.zt.ll(s,l)).ee,position:n.position,shape:n.shape,color:n.color,id:n.id,th:r,text:n.text,size:n.size,originalTime:n.originalTime}})}ql(e){switch(this.dn=new wb(this,this.$t()),this.$l){case"Bar":this.wn=new J2(this,this.$t());break;case"Candlestick":this.wn=new nb(this,this.$t());break;case"Line":this.wn=new ob(this,this.$t());break;case"Custom":this.wn=new yl(this,this.$t(),Fe(e));break;case"Area":this.wn=new Y2(this,this.$t());break;case"Baseline":this.wn=new tb(this,this.$t());break;case"Histogram":this.wn=new lb(this,this.$t());break;default:throw Error("Unknown chart style assigned: "+this.$l)}}ca(e,i){const n=[];return kl(this.Hl,e,i,n),n}}class Db{constructor(e){this.cn=e}Oa(e,i,n){let r=e;if(this.cn.mode===0)return r;const s=n.vn(),l=s.Ct();if(l===null)return r;const c=s.Rt(e,l),o=n.Ba().filter(u=>u instanceof cd).reduce((u,h)=>{if(n.vr(h)||!h.yt())return u;const f=h.Dt(),g=h.In();if(f.Ni()||!g.Kr(i))return u;const p=g.Gh(i);if(p===null)return u;const x=hn(h.Ct());return u.concat([f.Rt(p.Vt[3],x.Vt)])},[]);if(o.length===0)return r;o.sort((u,h)=>Math.abs(u-c)-Math.abs(h-c));const d=o[0];return r=s.pn(d,l),r}}class Bb extends wt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(this.zt===null)return;const s=Math.max(1,Math.floor(n));e.lineWidth=s,function(l,c){l.save(),l.lineWidth%2&&l.translate(.5,.5),c(),l.restore()}(e,()=>{const l=M(this.zt);if(l.Aa){e.strokeStyle=l.Ia,Fi(e,l.za),e.beginPath();for(const c of l.La){const o=Math.round(c.Ea*n);e.moveTo(o,-s),e.lineTo(o,i.height+s)}e.stroke()}if(l.Na){e.strokeStyle=l.Fa,Fi(e,l.Wa),e.beginPath();for(const c of l.ja){const o=Math.round(c.Ea*r);e.moveTo(-s,o),e.lineTo(i.width+s,o)}e.stroke()}})}}class Ib{constructor(e){this.Wt=new Bb,this.ft=!0,this.tn=e}bt(){this.ft=!0}gt(){if(this.ft){const e=this.tn.$t().W().grid,i={Na:e.horzLines.visible,Aa:e.vertLines.visible,Fa:e.horzLines.color,Ia:e.vertLines.color,Wa:e.horzLines.style,za:e.vertLines.style,ja:this.tn.vn().Ha(),La:(this.tn.$t().St().Ha()||[]).map(n=>({Ea:n.coord}))};this.Wt.J(i),this.ft=!1}return this.Wt}}class Ob{constructor(e){this.wn=new Ib(e)}qh(){return this.wn}}const Nl={$a:4,Ua:1e-4};function fn(t,e){const i=100*(t-e)/e;return e<0?-i:i}function Fb(t,e){const i=fn(t.Ph(),e),n=fn(t.Rh(),e);return new Qe(i,n)}function cr(t,e){const i=100*(t-e)/e+100;return e<0?-i:i}function Vb(t,e){const i=cr(t.Ph(),e),n=cr(t.Rh(),e);return new Qe(i,n)}function fa(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.log10(i+e.Ua)+e.$a;return t<0?-n:n}function dr(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.pow(10,i-e.$a)-e.Ua;return t<0?-n:n}function Kn(t,e){if(t===null)return null;const i=fa(t.Ph(),e),n=fa(t.Rh(),e);return new Qe(i,n)}function ms(t,e){if(t===null)return null;const i=dr(t.Ph(),e),n=dr(t.Rh(),e);return new Qe(i,n)}function Sl(t){if(t===null)return Nl;const e=Math.abs(t.Rh()-t.Ph());if(e>=1||e<1e-15)return Nl;const i=Math.ceil(Math.abs(Math.log10(e))),n=Nl.$a+i;return{$a:n,Ua:1/Math.pow(10,n)}}class Cl{constructor(e,i){if(this.qa=e,this.Ya=i,function(n){if(n<0)return!1;for(let r=n;r>1;r/=10)if(r%10!=0)return!1;return!0}(this.qa))this.Za=[2,2.5,2];else{this.Za=[];for(let n=this.qa;n!==1;){if(n%2==0)this.Za.push(2),n/=2;else{if(n%5!=0)throw new Error("unexpected base");this.Za.push(2,2.5),n/=5}if(this.Za.length>100)throw new Error("something wrong with base")}}}Xa(e,i,n){const r=this.qa===0?0:1/this.qa;let s=Math.pow(10,Math.max(0,Math.ceil(Math.log10(e-i)))),l=0,c=this.Ya[0];for(;;){const h=fs(s,r,1e-14)&&s>r+1e-14,f=fs(s,n*c,1e-14),g=fs(s,1,1e-14);if(!(h&&f&&g))break;s/=c,c=this.Ya[++l%this.Ya.length]}if(s<=r+1e-14&&(s=r),s=Math.max(1,s),this.Za.length>0&&(o=s,d=1,u=1e-14,Math.abs(o-d)<u))for(l=0,c=this.Za[0];fs(s,n*c,1e-14)&&s>r+1e-14;)s/=c,c=this.Za[++l%this.Za.length];var o,d,u;return s}}class fh{constructor(e,i,n,r){this.Ka=[],this.Li=e,this.qa=i,this.Ga=n,this.Ja=r}Xa(e,i){if(e<i)throw new Error("high < low");const n=this.Li.At(),r=(e-i)*this.Qa()/n,s=new Cl(this.qa,[2,2.5,2]),l=new Cl(this.qa,[2,2,2.5]),c=new Cl(this.qa,[2.5,2,2]),o=[];return o.push(s.Xa(e,i,r),l.Xa(e,i,r),c.Xa(e,i,r)),function(d){if(d.length<1)throw Error("array is empty");let u=d[0];for(let h=1;h<d.length;++h)d[h]<u&&(u=d[h]);return u}(o)}io(){const e=this.Li,i=e.Ct();if(i===null)return void(this.Ka=[]);const n=e.At(),r=this.Ga(n-1,i),s=this.Ga(0,i),l=this.Li.W().entireTextOnly?this.no()/2:0,c=l,o=n-1-l,d=Math.max(r,s),u=Math.min(r,s);if(d===u)return void(this.Ka=[]);let h=this.Xa(d,u),f=d%h;f+=f<0?h:0;const g=d>=u?1:-1;let p=null,x=0;for(let y=d-f;y>u;y-=h){const v=this.Ja(y,i,!0);p!==null&&Math.abs(v-p)<this.Qa()||v<c||v>o||(x<this.Ka.length?(this.Ka[x].Ea=v,this.Ka[x].so=e.eo(y)):this.Ka.push({Ea:v,so:e.eo(y)}),x++,p=v,e.ro()&&(h=this.Xa(y*g,u)))}this.Ka.length=x}Ha(){return this.Ka}no(){return this.Li.P()}Qa(){return Math.ceil(2.5*this.no())}}function ng(t){return t.slice().sort((e,i)=>M(e.Xi())-M(i.Xi()))}var ph;(function(t){t[t.Normal=0]="Normal",t[t.Logarithmic=1]="Logarithmic",t[t.Percentage=2]="Percentage",t[t.IndexedTo100=3]="IndexedTo100"})(ph||(ph={}));const mh=new Wm,gh=new Da(100,1);class Wb{constructor(e,i,n,r){this.ho=0,this.lo=null,this.Ih=null,this.ao=null,this.oo={_o:!1,uo:null},this.co=0,this.do=0,this.fo=new be,this.vo=new be,this.po=[],this.mo=null,this.bo=null,this.wo=null,this.Mo=null,this.wa=gh,this.xo=Sl(null),this.So=e,this.cn=i,this.ko=n,this.yo=r,this.Co=new fh(this,100,this.To.bind(this),this.Po.bind(this))}Pa(){return this.So}W(){return this.cn}$h(e){if(yt(this.cn,e),this.Ra(),e.mode!==void 0&&this.Ro({Cr:e.mode}),e.scaleMargins!==void 0){const i=Fe(e.scaleMargins.top),n=Fe(e.scaleMargins.bottom);if(i<0||i>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);if(n<0||n>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);if(i+n>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i+n}`);this.Do(),this.bo=null}}Vo(){return this.cn.autoScale}ro(){return this.cn.mode===1}Mh(){return this.cn.mode===2}Oo(){return this.cn.mode===3}Cr(){return{Wn:this.cn.autoScale,Bo:this.cn.invertScale,Cr:this.cn.mode}}Ro(e){const i=this.Cr();let n=null;e.Wn!==void 0&&(this.cn.autoScale=e.Wn),e.Cr!==void 0&&(this.cn.mode=e.Cr,e.Cr!==2&&e.Cr!==3||(this.cn.autoScale=!0),this.oo._o=!1),i.Cr===1&&e.Cr!==i.Cr&&(function(s,l){if(s===null)return!1;const c=dr(s.Ph(),l),o=dr(s.Rh(),l);return isFinite(c)&&isFinite(o)}(this.Ih,this.xo)?(n=ms(this.Ih,this.xo),n!==null&&this.Ao(n)):this.cn.autoScale=!0),e.Cr===1&&e.Cr!==i.Cr&&(n=Kn(this.Ih,this.xo),n!==null&&this.Ao(n));const r=i.Cr!==this.cn.mode;r&&(i.Cr===2||this.Mh())&&this.Ra(),r&&(i.Cr===3||this.Oo())&&this.Ra(),e.Bo!==void 0&&i.Bo!==e.Bo&&(this.cn.invertScale=e.Bo,this.Io()),this.vo.m(i,this.Cr())}zo(){return this.vo}P(){return this.ko.fontSize}At(){return this.ho}Lo(e){this.ho!==e&&(this.ho=e,this.Do(),this.bo=null)}Eo(){if(this.lo)return this.lo;const e=this.At()-this.No()-this.Fo();return this.lo=e,e}Lh(){return this.Wo(),this.Ih}Ao(e,i){const n=this.Ih;(i||n===null&&e!==null||n!==null&&!n.Ch(e))&&(this.bo=null,this.Ih=e)}Ni(){return this.Wo(),this.ho===0||!this.Ih||this.Ih.Ni()}jo(e){return this.Bo()?e:this.At()-1-e}Rt(e,i){return this.Mh()?e=fn(e,i):this.Oo()&&(e=cr(e,i)),this.Po(e,i)}te(e,i,n){this.Wo();const r=this.Fo(),s=M(this.Lh()),l=s.Ph(),c=s.Rh(),o=this.Eo()-1,d=this.Bo(),u=o/(c-l),h=n===void 0?0:n.from,f=n===void 0?e.length:n.to,g=this.Ho();for(let p=h;p<f;p++){const x=e[p],y=x._t;if(isNaN(y))continue;let v=y;g!==null&&(v=g(x._t,i));const m=r+u*(v-l),b=d?m:this.ho-1-m;x.st=b}}be(e,i,n){this.Wo();const r=this.Fo(),s=M(this.Lh()),l=s.Ph(),c=s.Rh(),o=this.Eo()-1,d=this.Bo(),u=o/(c-l),h=n===void 0?0:n.from,f=n===void 0?e.length:n.to,g=this.Ho();for(let p=h;p<f;p++){const x=e[p];let y=x.ge,v=x.Me,m=x.xe,b=x.Se;g!==null&&(y=g(x.ge,i),v=g(x.Me,i),m=g(x.xe,i),b=g(x.Se,i));let w=r+u*(y-l),j=d?w:this.ho-1-w;x.pe=j,w=r+u*(v-l),j=d?w:this.ho-1-w,x.de=j,w=r+u*(m-l),j=d?w:this.ho-1-w,x.fe=j,w=r+u*(b-l),j=d?w:this.ho-1-w,x.me=j}}pn(e,i){const n=this.To(e,i);return this.$o(n,i)}$o(e,i){let n=e;return this.Mh()?n=function(r,s){return s<0&&(r=-r),r/100*s+s}(n,i):this.Oo()&&(n=function(r,s){return r-=100,s<0&&(r=-r),r/100*s+s}(n,i)),n}Ba(){return this.po}Uo(){if(this.mo)return this.mo;let e=[];for(let i=0;i<this.po.length;i++){const n=this.po[i];n.Xi()===null&&n.Ki(i+1),e.push(n)}return e=ng(e),this.mo=e,this.mo}qo(e){this.po.indexOf(e)===-1&&(this.po.push(e),this.Ra(),this.Yo())}Zo(e){const i=this.po.indexOf(e);if(i===-1)throw new Error("source is not attached to scale");this.po.splice(i,1),this.po.length===0&&(this.Ro({Wn:!0}),this.Ao(null)),this.Ra(),this.Yo()}Ct(){let e=null;for(const i of this.po){const n=i.Ct();n!==null&&(e===null||n.la<e.la)&&(e=n)}return e===null?null:e.Vt}Bo(){return this.cn.invertScale}Ha(){const e=this.Ct()===null;if(this.bo!==null&&(e||this.bo.Xo===e))return this.bo.Ha;this.Co.io();const i=this.Co.Ha();return this.bo={Ha:i,Xo:e},this.fo.m(),i}Ko(){return this.fo}Go(e){this.Mh()||this.Oo()||this.wo===null&&this.ao===null&&(this.Ni()||(this.wo=this.ho-e,this.ao=M(this.Lh()).Th()))}Jo(e){if(this.Mh()||this.Oo()||this.wo===null)return;this.Ro({Wn:!1}),(e=this.ho-e)<0&&(e=0);let i=(this.wo+.2*(this.ho-1))/(e+.2*(this.ho-1));const n=M(this.ao).Th();i=Math.max(i,.1),n.Vh(i),this.Ao(n)}Qo(){this.Mh()||this.Oo()||(this.wo=null,this.ao=null)}t_(e){this.Vo()||this.Mo===null&&this.ao===null&&(this.Ni()||(this.Mo=e,this.ao=M(this.Lh()).Th()))}i_(e){if(this.Vo()||this.Mo===null)return;const i=M(this.Lh()).Dh()/(this.Eo()-1);let n=e-this.Mo;this.Bo()&&(n*=-1);const r=n*i,s=M(this.ao).Th();s.Oh(r),this.Ao(s,!0),this.bo=null}n_(){this.Vo()||this.Mo!==null&&(this.Mo=null,this.ao=null)}ba(){return this.wa||this.Ra(),this.wa}Fi(e,i){switch(this.cn.mode){case 2:return this.s_(fn(e,i));case 3:return this.ba().format(cr(e,i));default:return this.Wh(e)}}eo(e){switch(this.cn.mode){case 2:return this.s_(e);case 3:return this.ba().format(e);default:return this.Wh(e)}}Yl(e){return this.Wh(e,M(this.e_()).ba())}Zl(e,i){return e=fn(e,i),this.s_(e,mh)}r_(){return this.po}h_(e){this.oo={uo:e,_o:!1}}Vn(){this.po.forEach(e=>e.Vn())}Ra(){this.bo=null;const e=this.e_();let i=100;e!==null&&(i=Math.round(1/e.ma())),this.wa=gh,this.Mh()?(this.wa=mh,i=100):this.Oo()?(this.wa=new Da(100,1),i=100):e!==null&&(this.wa=e.ba()),this.Co=new fh(this,i,this.To.bind(this),this.Po.bind(this)),this.Co.io()}Yo(){this.mo=null}e_(){return this.po[0]||null}No(){return this.Bo()?this.cn.scaleMargins.bottom*this.At()+this.do:this.cn.scaleMargins.top*this.At()+this.co}Fo(){return this.Bo()?this.cn.scaleMargins.top*this.At()+this.co:this.cn.scaleMargins.bottom*this.At()+this.do}Wo(){this.oo._o||(this.oo._o=!0,this.l_())}Do(){this.lo=null}Po(e,i){if(this.Wo(),this.Ni())return 0;e=this.ro()&&e?fa(e,this.xo):e;const n=M(this.Lh()),r=this.Fo()+(this.Eo()-1)*(e-n.Ph())/n.Dh();return this.jo(r)}To(e,i){if(this.Wo(),this.Ni())return 0;const n=this.jo(e),r=M(this.Lh()),s=r.Ph()+r.Dh()*((n-this.Fo())/(this.Eo()-1));return this.ro()?dr(s,this.xo):s}Io(){this.bo=null,this.Co.io()}l_(){const e=this.oo.uo;if(e===null)return;let i=null;const n=this.r_();let r=0,s=0;for(const o of n){if(!o.yt())continue;const d=o.Ct();if(d===null)continue;const u=o.Il(e.Os(),e.ui());let h=u&&u.Lh();if(h!==null){switch(this.cn.mode){case 1:h=Kn(h,this.xo);break;case 2:h=Fb(h,d.Vt);break;case 3:h=Vb(h,d.Vt)}if(i=i===null?h:i.ts(M(h)),u!==null){const f=u.Eh();f!==null&&(r=Math.max(r,f.above),s=Math.max(s,f.below))}}}if(r===this.co&&s===this.do||(this.co=r,this.do=s,this.bo=null,this.Do()),i!==null){if(i.Ph()===i.Rh()){const o=this.e_(),d=5*(o===null||this.Mh()||this.Oo()?1:o.ma());this.ro()&&(i=ms(i,this.xo)),i=new Qe(i.Ph()-d,i.Rh()+d),this.ro()&&(i=Kn(i,this.xo))}if(this.ro()){const o=ms(i,this.xo),d=Sl(o);if(l=d,c=this.xo,l.$a!==c.$a||l.Ua!==c.Ua){const u=this.ao!==null?ms(this.ao,this.xo):null;this.xo=d,i=Kn(o,d),u!==null&&(this.ao=Kn(u,d))}}this.Ao(i)}else this.Ih===null&&(this.Ao(new Qe(-.5,.5)),this.xo=Sl(null));var l,c;this.oo._o=!0}Ho(){return this.Mh()?fn:this.Oo()?cr:this.ro()?e=>fa(e,this.xo):null}a_(e,i,n){return i===void 0?(n===void 0&&(n=this.ba()),n.format(e)):i(e)}Wh(e,i){return this.a_(e,this.yo.priceFormatter,i)}s_(e,i){return this.a_(e,this.yo.percentageFormatter,i)}}class Ub{constructor(e,i){this.po=[],this.o_=new Map,this.ho=0,this.__=0,this.u_=1e3,this.mo=null,this.c_=new be,this.yl=e,this.$i=i,this.d_=new Ob(this);const n=i.W();this.f_=this.v_("left",n.leftPriceScale),this.p_=this.v_("right",n.rightPriceScale),this.f_.zo().l(this.m_.bind(this,this.f_),this),this.p_.zo().l(this.m_.bind(this,this.p_),this),this.b_(n)}b_(e){if(e.leftPriceScale&&this.f_.$h(e.leftPriceScale),e.rightPriceScale&&this.p_.$h(e.rightPriceScale),e.localization&&(this.f_.Ra(),this.p_.Ra()),e.overlayPriceScales){const i=Array.from(this.o_.values());for(const n of i){const r=M(n[0].Dt());r.$h(e.overlayPriceScales),e.localization&&r.Ra()}}}w_(e){switch(e){case"left":return this.f_;case"right":return this.p_}return this.o_.has(e)?Fe(this.o_.get(e))[0].Dt():null}S(){this.$t().g_().p(this),this.f_.zo().p(this),this.p_.zo().p(this),this.po.forEach(e=>{e.S&&e.S()}),this.c_.m()}M_(){return this.u_}x_(e){this.u_=e}$t(){return this.$i}Hi(){return this.__}At(){return this.ho}S_(e){this.__=e,this.k_()}Lo(e){this.ho=e,this.f_.Lo(e),this.p_.Lo(e),this.po.forEach(i=>{if(this.vr(i)){const n=i.Dt();n!==null&&n.Lo(e)}}),this.k_()}Ba(){return this.po}vr(e){const i=e.Dt();return i===null||this.f_!==i&&this.p_!==i}qo(e,i,n){const r=n!==void 0?n:this.C_().y_+1;this.T_(e,i,r)}Zo(e){const i=this.po.indexOf(e);hi(i!==-1,"removeDataSource: invalid data source"),this.po.splice(i,1);const n=M(e.Dt()).Pa();if(this.o_.has(n)){const s=Fe(this.o_.get(n)),l=s.indexOf(e);l!==-1&&(s.splice(l,1),s.length===0&&this.o_.delete(n))}const r=e.Dt();r&&r.Ba().indexOf(e)>=0&&r.Zo(e),r!==null&&(r.Yo(),this.P_(r)),this.mo=null}mr(e){return e===this.f_?"left":e===this.p_?"right":"overlay"}R_(){return this.f_}D_(){return this.p_}V_(e,i){e.Go(i)}O_(e,i){e.Jo(i),this.k_()}B_(e){e.Qo()}A_(e,i){e.t_(i)}I_(e,i){e.i_(i),this.k_()}z_(e){e.n_()}k_(){this.po.forEach(e=>{e.Vn()})}vn(){let e=null;return this.$i.W().rightPriceScale.visible&&this.p_.Ba().length!==0?e=this.p_:this.$i.W().leftPriceScale.visible&&this.f_.Ba().length!==0?e=this.f_:this.po.length!==0&&(e=this.po[0].Dt()),e===null&&(e=this.p_),e}pr(){let e=null;return this.$i.W().rightPriceScale.visible?e=this.p_:this.$i.W().leftPriceScale.visible&&(e=this.f_),e}P_(e){e!==null&&e.Vo()&&this.L_(e)}E_(e){const i=this.yl.Xs();e.Ro({Wn:!0}),i!==null&&e.h_(i),this.k_()}N_(){this.L_(this.f_),this.L_(this.p_)}F_(){this.P_(this.f_),this.P_(this.p_),this.po.forEach(e=>{this.vr(e)&&this.P_(e.Dt())}),this.k_(),this.$i.Uh()}Uo(){return this.mo===null&&(this.mo=ng(this.po)),this.mo}W_(){return this.c_}j_(){return this.d_}L_(e){const i=e.r_();if(i&&i.length>0&&!this.yl.Ni()){const n=this.yl.Xs();n!==null&&e.h_(n)}e.Vn()}C_(){const e=this.Uo();if(e.length===0)return{H_:0,y_:0};let i=0,n=0;for(let r=0;r<e.length;r++){const s=e[r].Xi();s!==null&&(s<i&&(i=s),s>n&&(n=s))}return{H_:i,y_:n}}T_(e,i,n){let r=this.w_(i);if(r===null&&(r=this.v_(i,this.$i.W().overlayPriceScales)),this.po.push(e),!$a(i)){const s=this.o_.get(i)||[];s.push(e),this.o_.set(i,s)}r.qo(e),e.Gi(r),e.Ki(n),this.P_(r),this.mo=null}m_(e,i,n){i.Cr!==n.Cr&&this.L_(e)}v_(e,i){const n=Object.assign({visible:!0,autoScale:!0},At(i)),r=new Wb(e,n,this.$i.W().layout,this.$i.W().localization);return r.Lo(this.At()),r}}class qb{constructor(e,i,n=50){this.Ke=0,this.Ge=1,this.Je=1,this.tr=new Map,this.Qe=new Map,this.U_=e,this.q_=i,this.ir=n}Y_(e){const i=e.time,n=this.q_.cacheKey(i),r=this.tr.get(n);if(r!==void 0)return r.Z_;if(this.Ke===this.ir){const l=this.Qe.get(this.Je);this.Qe.delete(this.Je),this.tr.delete(Fe(l)),this.Je++,this.Ke--}const s=this.U_(e);return this.tr.set(n,{Z_:s,rr:this.Ge}),this.Qe.set(this.Ge,n),this.Ke++,this.Ge++,s}}class ur{constructor(e,i){hi(e<=i,"right should be >= left"),this.X_=e,this.K_=i}Os(){return this.X_}ui(){return this.K_}G_(){return this.K_-this.X_+1}Kr(e){return this.X_<=e&&e<=this.K_}Ch(e){return this.X_===e.Os()&&this.K_===e.ui()}}function xh(t,e){return t===null||e===null?t===e:t.Ch(e)}class Hb{constructor(){this.J_=new Map,this.tr=null,this.Q_=!1}tu(e){this.Q_=e,this.tr=null}iu(e,i){this.nu(i),this.tr=null;for(let n=i;n<e.length;++n){const r=e[n];let s=this.J_.get(r.timeWeight);s===void 0&&(s=[],this.J_.set(r.timeWeight,s)),s.push({index:n,time:r.time,weight:r.timeWeight,originalTime:r.originalTime})}}su(e,i){const n=Math.ceil(i/e);return this.tr!==null&&this.tr.eu===n||(this.tr={Ha:this.ru(n),eu:n}),this.tr.Ha}nu(e){if(e===0)return void this.J_.clear();const i=[];this.J_.forEach((n,r)=>{e<=n[0].index?i.push(r):n.splice(Hr(n,e,s=>s.index<e),1/0)});for(const n of i)this.J_.delete(n)}ru(e){let i=[];for(const n of Array.from(this.J_.keys()).sort((r,s)=>s-r)){if(!this.J_.get(n))continue;const r=i;i=[];const s=r.length;let l=0;const c=Fe(this.J_.get(n)),o=c.length;let d=1/0,u=-1/0;for(let h=0;h<o;h++){const f=c[h],g=f.index;for(;l<s;){const p=r[l],x=p.index;if(!(x<g)){d=x;break}l++,i.push(p),u=x,d=1/0}if(d-g>=e&&g-u>=e)i.push(f),u=g;else if(this.Q_)return r}for(;l<s;l++)i.push(r[l])}return i}}class yn{constructor(e){this.hu=e}lu(){return this.hu===null?null:new ur(Math.floor(this.hu.Os()),Math.ceil(this.hu.ui()))}au(){return this.hu}static ou(){return new yn(null)}}function Kb(t,e){return t.weight>e.weight?t:e}class Xb{constructor(e,i,n,r){this.__=0,this._u=null,this.uu=[],this.Mo=null,this.wo=null,this.cu=new Hb,this.du=new Map,this.fu=yn.ou(),this.vu=!0,this.pu=new be,this.mu=new be,this.bu=new be,this.wu=null,this.gu=null,this.Mu=[],this.cn=i,this.yo=n,this.xu=i.rightOffset,this.Su=i.barSpacing,this.$i=e,this.q_=r,this.ku(),this.cu.tu(i.uniformDistribution)}W(){return this.cn}yu(e){yt(this.yo,e),this.Cu(),this.ku()}$h(e,i){var n;yt(this.cn,e),this.cn.fixLeftEdge&&this.Tu(),this.cn.fixRightEdge&&this.Pu(),e.barSpacing!==void 0&&this.$i.Gn(e.barSpacing),e.rightOffset!==void 0&&this.$i.Jn(e.rightOffset),e.minBarSpacing!==void 0&&this.$i.Gn((n=e.barSpacing)!==null&&n!==void 0?n:this.Su),this.Cu(),this.ku(),this.bu.m()}mn(e){var i,n;return(n=(i=this.uu[e])===null||i===void 0?void 0:i.time)!==null&&n!==void 0?n:null}Ui(e){var i;return(i=this.uu[e])!==null&&i!==void 0?i:null}Va(e,i){if(this.uu.length<1)return null;if(this.q_.key(e)>this.q_.key(this.uu[this.uu.length-1].time))return i?this.uu.length-1:null;const n=Hr(this.uu,this.q_.key(e),(r,s)=>this.q_.key(r.time)<s);return this.q_.key(e)<this.q_.key(this.uu[n].time)?i?n:null:n}Ni(){return this.__===0||this.uu.length===0||this._u===null}Da(){return this.uu.length>0}Xs(){return this.Ru(),this.fu.lu()}Du(){return this.Ru(),this.fu.au()}Vu(){const e=this.Xs();if(e===null)return null;const i={from:e.Os(),to:e.ui()};return this.Ou(i)}Ou(e){const i=Math.round(e.from),n=Math.round(e.to),r=M(this.Bu()),s=M(this.Au());return{from:M(this.Ui(Math.max(r,i))),to:M(this.Ui(Math.min(s,n)))}}Iu(e){return{from:M(this.Va(e.from,!0)),to:M(this.Va(e.to,!0))}}Hi(){return this.__}S_(e){if(!isFinite(e)||e<=0||this.__===e)return;const i=this.Du(),n=this.__;if(this.__=e,this.vu=!0,this.cn.lockVisibleTimeRangeOnResize&&n!==0){const r=this.Su*e/n;this.Su=r}if(this.cn.fixLeftEdge&&i!==null&&i.Os()<=0){const r=n-e;this.xu-=Math.round(r/this.Su)+1,this.vu=!0}this.zu(),this.Lu()}It(e){if(this.Ni()||!Lr(e))return 0;const i=this.Eu()+this.xu-e;return this.__-(i+.5)*this.Su-1}Qs(e,i){const n=this.Eu(),r=i===void 0?0:i.from,s=i===void 0?e.length:i.to;for(let l=r;l<s;l++){const c=e[l].ot,o=n+this.xu-c,d=this.__-(o+.5)*this.Su-1;e[l].nt=d}}Nu(e){return Math.ceil(this.Fu(e))}Jn(e){this.vu=!0,this.xu=e,this.Lu(),this.$i.Wu(),this.$i.Uh()}le(){return this.Su}Gn(e){this.ju(e),this.Lu(),this.$i.Wu(),this.$i.Uh()}Hu(){return this.xu}Ha(){if(this.Ni())return null;if(this.gu!==null)return this.gu;const e=this.Su,i=5*(this.$i.W().layout.fontSize+4)/8*(this.cn.tickMarkMaxCharacterLength||8),n=Math.round(i/e),r=M(this.Xs()),s=Math.max(r.Os(),r.Os()-n),l=Math.max(r.ui(),r.ui()-n),c=this.cu.su(e,i),o=this.Bu()+n,d=this.Au()-n,u=this.$u(),h=this.cn.fixLeftEdge||u,f=this.cn.fixRightEdge||u;let g=0;for(const p of c){if(!(s<=p.index&&p.index<=l))continue;let x;g<this.Mu.length?(x=this.Mu[g],x.coord=this.It(p.index),x.label=this.Uu(p),x.weight=p.weight):(x={needAlignCoordinate:!1,coord:this.It(p.index),label:this.Uu(p),weight:p.weight},this.Mu.push(x)),this.Su>i/2&&!u?x.needAlignCoordinate=!1:x.needAlignCoordinate=h&&p.index<=o||f&&p.index>=d,g++}return this.Mu.length=g,this.gu=this.Mu,this.Mu}qu(){this.vu=!0,this.Gn(this.cn.barSpacing),this.Jn(this.cn.rightOffset)}Yu(e){this.vu=!0,this._u=e,this.Lu(),this.Tu()}Zu(e,i){const n=this.Fu(e),r=this.le(),s=r+i*(r/10);this.Gn(s),this.cn.rightBarStaysOnScroll||this.Jn(this.Hu()+(n-this.Fu(e)))}Go(e){this.Mo&&this.n_(),this.wo===null&&this.wu===null&&(this.Ni()||(this.wo=e,this.Xu()))}Jo(e){if(this.wu===null)return;const i=Fo(this.__-e,0,this.__),n=Fo(this.__-M(this.wo),0,this.__);i!==0&&n!==0&&this.Gn(this.wu.le*i/n)}Qo(){this.wo!==null&&(this.wo=null,this.Ku())}t_(e){this.Mo===null&&this.wu===null&&(this.Ni()||(this.Mo=e,this.Xu()))}i_(e){if(this.Mo===null)return;const i=(this.Mo-e)/this.le();this.xu=M(this.wu).Hu+i,this.vu=!0,this.Lu()}n_(){this.Mo!==null&&(this.Mo=null,this.Ku())}Gu(){this.Ju(this.cn.rightOffset)}Ju(e,i=400){if(!isFinite(e))throw new RangeError("offset is required and must be finite number");if(!isFinite(i)||i<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const n=this.xu,r=performance.now();this.$i.Zn({Qu:s=>(s-r)/i>=1,tc:s=>{const l=(s-r)/i;return l>=1?e:n+(e-n)*l}})}bt(e,i){this.vu=!0,this.uu=e,this.cu.iu(e,i),this.Lu()}nc(){return this.pu}sc(){return this.mu}ec(){return this.bu}Eu(){return this._u||0}rc(e){const i=e.G_();this.ju(this.__/i),this.xu=e.ui()-this.Eu(),this.Lu(),this.vu=!0,this.$i.Wu(),this.$i.Uh()}hc(){const e=this.Bu(),i=this.Au();e!==null&&i!==null&&this.rc(new ur(e,i+this.cn.rightOffset))}lc(e){const i=new ur(e.from,e.to);this.rc(i)}qi(e){return this.yo.timeFormatter!==void 0?this.yo.timeFormatter(e.originalTime):this.q_.formatHorzItem(e.time)}$u(){const{handleScroll:e,handleScale:i}=this.$i.W();return!(e.horzTouchDrag||e.mouseWheel||e.pressedMouseMove||e.vertTouchDrag||i.axisDoubleClickReset.time||i.axisPressedMouseMove.time||i.mouseWheel||i.pinch)}Bu(){return this.uu.length===0?null:0}Au(){return this.uu.length===0?null:this.uu.length-1}ac(e){return(this.__-1-e)/this.Su}Fu(e){const i=this.ac(e),n=this.Eu()+this.xu-i;return Math.round(1e6*n)/1e6}ju(e){const i=this.Su;this.Su=e,this.zu(),i!==this.Su&&(this.vu=!0,this.oc())}Ru(){if(!this.vu)return;if(this.vu=!1,this.Ni())return void this._c(yn.ou());const e=this.Eu(),i=this.__/this.Su,n=this.xu+e,r=new ur(n-i+1,n);this._c(new yn(r))}zu(){const e=this.uc();if(this.Su<e&&(this.Su=e,this.vu=!0),this.__!==0){const i=.5*this.__;this.Su>i&&(this.Su=i,this.vu=!0)}}uc(){return this.cn.fixLeftEdge&&this.cn.fixRightEdge&&this.uu.length!==0?this.__/this.uu.length:this.cn.minBarSpacing}Lu(){const e=this.cc();e!==null&&this.xu<e&&(this.xu=e,this.vu=!0);const i=this.dc();this.xu>i&&(this.xu=i,this.vu=!0)}cc(){const e=this.Bu(),i=this._u;return e===null||i===null?null:e-i-1+(this.cn.fixLeftEdge?this.__/this.Su:Math.min(2,this.uu.length))}dc(){return this.cn.fixRightEdge?0:this.__/this.Su-Math.min(2,this.uu.length)}Xu(){this.wu={le:this.le(),Hu:this.Hu()}}Ku(){this.wu=null}Uu(e){let i=this.du.get(e.weight);return i===void 0&&(i=new qb(n=>this.fc(n),this.q_),this.du.set(e.weight,i)),i.Y_(e)}fc(e){return this.q_.formatTickmark(e,this.yo)}_c(e){const i=this.fu;this.fu=e,xh(i.lu(),this.fu.lu())||this.pu.m(),xh(i.au(),this.fu.au())||this.mu.m(),this.oc()}oc(){this.gu=null}Cu(){this.oc(),this.du.clear()}ku(){this.q_.updateFormatter(this.yo)}Tu(){if(!this.cn.fixLeftEdge)return;const e=this.Bu();if(e===null)return;const i=this.Xs();if(i===null)return;const n=i.Os()-e;if(n<0){const r=this.xu-n-1;this.Jn(r)}this.zu()}Pu(){this.Lu(),this.zu()}}class Qb{X(e,i,n){e.useMediaCoordinateSpace(r=>this.K(r,i,n))}gl(e,i,n){e.useMediaCoordinateSpace(r=>this.vc(r,i,n))}vc(e,i,n){}}class Yb extends Qb{constructor(e){super(),this.mc=new Map,this.zt=e}K(e){}vc(e){if(!this.zt.yt)return;const{context:i,mediaSize:n}=e;let r=0;for(const l of this.zt.bc){if(l.Kt.length===0)continue;i.font=l.R;const c=this.wc(i,l.Kt);c>n.width?l.Zu=n.width/c:l.Zu=1,r+=l.gc*l.Zu}let s=0;switch(this.zt.Mc){case"top":s=0;break;case"center":s=Math.max((n.height-r)/2,0);break;case"bottom":s=Math.max(n.height-r,0)}i.fillStyle=this.zt.V;for(const l of this.zt.bc){i.save();let c=0;switch(this.zt.xc){case"left":i.textAlign="left",c=l.gc/2;break;case"center":i.textAlign="center",c=n.width/2;break;case"right":i.textAlign="right",c=n.width-1-l.gc/2}i.translate(c,s),i.textBaseline="top",i.font=l.R,i.scale(l.Zu,l.Zu),i.fillText(l.Kt,0,l.Sc),i.restore(),s+=l.gc*l.Zu}}wc(e,i){const n=this.kc(e.font);let r=n.get(i);return r===void 0&&(r=e.measureText(i).width,n.set(i,r)),r}kc(e){let i=this.mc.get(e);return i===void 0&&(i=new Map,this.mc.set(e,i)),i}}class Gb{constructor(e){this.ft=!0,this.Ft={yt:!1,V:"",bc:[],Mc:"center",xc:"center"},this.Wt=new Yb(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.W(),i=this.Ft;i.yt=e.visible,i.yt&&(i.V=e.color,i.xc=e.horzAlign,i.Mc=e.vertAlign,i.bc=[{Kt:e.text,R:Mn(e.fontSize,e.fontFamily,e.fontStyle),gc:1.2*e.fontSize,Sc:0,Zu:0}])}}class Jb extends sd{constructor(e,i){super(),this.cn=i,this.wn=new Gb(this)}Rn(){return[]}Pn(){return[this.wn]}W(){return this.cn}Vn(){this.wn.bt()}}var vh,bh,yh,wh,kh;(function(t){t[t.OnTouchEnd=0]="OnTouchEnd",t[t.OnNextTap=1]="OnNextTap"})(vh||(vh={}));class Zb{constructor(e,i,n){this.yc=[],this.Cc=[],this.__=0,this.Tc=null,this.Pc=new be,this.Rc=new be,this.Dc=null,this.Vc=e,this.cn=i,this.q_=n,this.Oc=new _2(this),this.yl=new Xb(this,i.timeScale,this.cn.localization,n),this.vt=new V2(this,i.crosshair),this.Bc=new Db(i.crosshair),this.Ac=new Jb(this,i.watermark),this.Ic(),this.yc[0].x_(2e3),this.zc=this.Lc(0),this.Ec=this.Lc(1)}Kl(){this.Nc(Me.es())}Uh(){this.Nc(Me.ss())}oa(){this.Nc(new Me(1))}Gl(e){const i=this.Fc(e);this.Nc(i)}Wc(){return this.Tc}jc(e){const i=this.Tc;this.Tc=e,i!==null&&this.Gl(i.Hc),e!==null&&this.Gl(e.Hc)}W(){return this.cn}$h(e){yt(this.cn,e),this.yc.forEach(i=>i.b_(e)),e.timeScale!==void 0&&this.yl.$h(e.timeScale),e.localization!==void 0&&this.yl.yu(e.localization),(e.leftPriceScale||e.rightPriceScale)&&this.Pc.m(),this.zc=this.Lc(0),this.Ec=this.Lc(1),this.Kl()}$c(e,i){if(e==="left")return void this.$h({leftPriceScale:i});if(e==="right")return void this.$h({rightPriceScale:i});const n=this.Uc(e);n!==null&&(n.Dt.$h(i),this.Pc.m())}Uc(e){for(const i of this.yc){const n=i.w_(e);if(n!==null)return{Ht:i,Dt:n}}return null}St(){return this.yl}qc(){return this.yc}Yc(){return this.Ac}Zc(){return this.vt}Xc(){return this.Rc}Kc(e,i){e.Lo(i),this.Wu()}S_(e){this.__=e,this.yl.S_(this.__),this.yc.forEach(i=>i.S_(e)),this.Wu()}Ic(e){const i=new Ub(this.yl,this);e!==void 0?this.yc.splice(e,0,i):this.yc.push(i);const n=e===void 0?this.yc.length-1:e,r=Me.es();return r.Nn(n,{Fn:0,Wn:!0}),this.Nc(r),i}V_(e,i,n){e.V_(i,n)}O_(e,i,n){e.O_(i,n),this.Jl(),this.Nc(this.Gc(e,2))}B_(e,i){e.B_(i),this.Nc(this.Gc(e,2))}A_(e,i,n){i.Vo()||e.A_(i,n)}I_(e,i,n){i.Vo()||(e.I_(i,n),this.Jl(),this.Nc(this.Gc(e,2)))}z_(e,i){i.Vo()||(e.z_(i),this.Nc(this.Gc(e,2)))}E_(e,i){e.E_(i),this.Nc(this.Gc(e,2))}Jc(e){this.yl.Go(e)}Qc(e,i){const n=this.St();if(n.Ni()||i===0)return;const r=n.Hi();e=Math.max(1,Math.min(e,r)),n.Zu(e,i),this.Wu()}td(e){this.nd(0),this.sd(e),this.ed()}rd(e){this.yl.Jo(e),this.Wu()}hd(){this.yl.Qo(),this.Uh()}nd(e){this.yl.t_(e)}sd(e){this.yl.i_(e),this.Wu()}ed(){this.yl.n_(),this.Uh()}wt(){return this.Cc}ld(e,i,n,r,s){this.vt.gn(e,i);let l=NaN,c=this.yl.Nu(e);const o=this.yl.Xs();o!==null&&(c=Math.min(Math.max(o.Os(),c),o.ui()));const d=r.vn(),u=d.Ct();u!==null&&(l=d.pn(i,u)),l=this.Bc.Oa(l,c,r),this.vt.kn(c,l,r),this.oa(),s||this.Rc.m(this.vt.xt(),{x:e,y:i},n)}ad(e,i,n){const r=n.vn(),s=r.Ct(),l=r.Rt(e,M(s)),c=this.yl.Va(i,!0),o=this.yl.It(M(c));this.ld(o,l,null,n,!0)}od(e){this.Zc().Cn(),this.oa(),e||this.Rc.m(null,null,null)}Jl(){const e=this.vt.Ht();if(e!==null){const i=this.vt.xn(),n=this.vt.Sn();this.ld(i,n,null,e)}this.vt.Vn()}_d(e,i,n){const r=this.yl.mn(0);i!==void 0&&n!==void 0&&this.yl.bt(i,n);const s=this.yl.mn(0),l=this.yl.Eu(),c=this.yl.Xs();if(c!==null&&r!==null&&s!==null){const o=c.Kr(l),d=this.q_.key(r)>this.q_.key(s),u=e!==null&&e>l&&!d,h=this.yl.W().allowShiftVisibleRangeOnWhitespaceReplacement,f=o&&(n!==void 0||h)&&this.yl.W().shiftVisibleRangeOnNewBar;if(u&&!f){const g=e-l;this.yl.Jn(this.yl.Hu()-g)}}this.yl.Yu(e)}ia(e){e!==null&&e.F_()}dr(e){const i=this.yc.find(n=>n.Uo().includes(e));return i===void 0?null:i}Wu(){this.Ac.Vn(),this.yc.forEach(e=>e.F_()),this.Jl()}S(){this.yc.forEach(e=>e.S()),this.yc.length=0,this.cn.localization.priceFormatter=void 0,this.cn.localization.percentageFormatter=void 0,this.cn.localization.timeFormatter=void 0}ud(){return this.Oc}br(){return this.Oc.W()}g_(){return this.Pc}dd(e,i,n){const r=this.yc[0],s=this.fd(i,e,r,n);return this.Cc.push(s),this.Cc.length===1?this.Kl():this.Uh(),s}vd(e){const i=this.dr(e),n=this.Cc.indexOf(e);hi(n!==-1,"Series not found"),this.Cc.splice(n,1),M(i).Zo(e),e.S&&e.S()}Xl(e,i){const n=M(this.dr(e));n.Zo(e);const r=this.Uc(i);if(r===null){const s=e.Xi();n.qo(e,i,s)}else{const s=r.Ht===n?e.Xi():void 0;r.Ht.qo(e,i,s)}}hc(){const e=Me.ss();e.$n(),this.Nc(e)}pd(e){const i=Me.ss();i.Yn(e),this.Nc(i)}Kn(){const e=Me.ss();e.Kn(),this.Nc(e)}Gn(e){const i=Me.ss();i.Gn(e),this.Nc(i)}Jn(e){const i=Me.ss();i.Jn(e),this.Nc(i)}Zn(e){const i=Me.ss();i.Zn(e),this.Nc(i)}Un(){const e=Me.ss();e.Un(),this.Nc(e)}md(){return this.cn.rightPriceScale.visible?"right":"left"}bd(){return this.Ec}q(){return this.zc}Bt(e){const i=this.Ec,n=this.zc;if(i===n)return i;if(e=Math.max(0,Math.min(100,Math.round(100*e))),this.Dc===null||this.Dc.Ps!==n||this.Dc.Rs!==i)this.Dc={Ps:n,Rs:i,wd:new Map};else{const s=this.Dc.wd.get(e);if(s!==void 0)return s}const r=function(s,l,c){const[o,d,u,h]=Pr(s),[f,g,p,x]=Pr(l),y=[st(o+c*(f-o)),st(d+c*(g-d)),st(u+c*(p-u)),Im(h+c*(x-h))];return`rgba(${y[0]}, ${y[1]}, ${y[2]}, ${y[3]})`}(n,i,e/100);return this.Dc.wd.set(e,r),r}Gc(e,i){const n=new Me(i);if(e!==null){const r=this.yc.indexOf(e);n.Nn(r,{Fn:i})}return n}Fc(e,i){return i===void 0&&(i=2),this.Gc(this.dr(e),i)}Nc(e){this.Vc&&this.Vc(e),this.yc.forEach(i=>i.j_().qh().bt())}fd(e,i,n,r){const s=new cd(this,e,i,n,r),l=e.priceScaleId!==void 0?e.priceScaleId:this.md();return n.qo(s,l),$a(l)||s.$h(e),s}Lc(e){const i=this.cn.layout;return i.background.type==="gradient"?e===0?i.background.topColor:i.background.bottomColor:i.background.color}}function Vo(t){return!Et(t)&&!qr(t)}function rg(t){return Et(t)}(function(t){t[t.Disabled=0]="Disabled",t[t.Continuous=1]="Continuous",t[t.OnDataUpdate=2]="OnDataUpdate"})(bh||(bh={})),function(t){t[t.LastBar=0]="LastBar",t[t.LastVisible=1]="LastVisible"}(yh||(yh={})),function(t){t.Solid="solid",t.VerticalGradient="gradient"}(wh||(wh={})),function(t){t[t.Year=0]="Year",t[t.Month=1]="Month",t[t.DayOfMonth=2]="DayOfMonth",t[t.Time=3]="Time",t[t.TimeWithSeconds=4]="TimeWithSeconds"}(kh||(kh={}));const jh=t=>t.getUTCFullYear();function ey(t,e,i){return e.replace(/yyyy/g,(n=>$t(jh(n),4))(t)).replace(/yy/g,(n=>$t(jh(n)%100,2))(t)).replace(/MMMM/g,((n,r)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(r,{month:"long"}))(t,i)).replace(/MMM/g,((n,r)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(r,{month:"short"}))(t,i)).replace(/MM/g,(n=>$t((r=>r.getUTCMonth()+1)(n),2))(t)).replace(/dd/g,(n=>$t((r=>r.getUTCDate())(n),2))(t))}class sg{constructor(e="yyyy-MM-dd",i="default"){this.gd=e,this.Md=i}Y_(e){return ey(e,this.gd,this.Md)}}class ty{constructor(e){this.xd=e||"%h:%m:%s"}Y_(e){return this.xd.replace("%h",$t(e.getUTCHours(),2)).replace("%m",$t(e.getUTCMinutes(),2)).replace("%s",$t(e.getUTCSeconds(),2))}}const iy={Sd:"yyyy-MM-dd",kd:"%h:%m:%s",yd:" ",Cd:"default"};class ny{constructor(e={}){const i=Object.assign(Object.assign({},iy),e);this.Td=new sg(i.Sd,i.Cd),this.Pd=new ty(i.kd),this.Rd=i.yd}Y_(e){return`${this.Td.Y_(e)}${this.Rd}${this.Pd.Y_(e)}`}}function gs(t){return 60*t*60*1e3}function El(t){return 60*t*1e3}const xs=[{Dd:(Nh=1,1e3*Nh),Vd:10},{Dd:El(1),Vd:20},{Dd:El(5),Vd:21},{Dd:El(30),Vd:22},{Dd:gs(1),Vd:30},{Dd:gs(3),Vd:31},{Dd:gs(6),Vd:32},{Dd:gs(12),Vd:33}];var Nh;function Sh(t,e){if(t.getUTCFullYear()!==e.getUTCFullYear())return 70;if(t.getUTCMonth()!==e.getUTCMonth())return 60;if(t.getUTCDate()!==e.getUTCDate())return 50;for(let i=xs.length-1;i>=0;--i)if(Math.floor(e.getTime()/xs[i].Dd)!==Math.floor(t.getTime()/xs[i].Dd))return xs[i].Vd;return 0}function zl(t){let e=t;if(qr(t)&&(e=dd(t)),!Vo(e))throw new Error("time must be of type BusinessDay");const i=new Date(Date.UTC(e.year,e.month-1,e.day,0,0,0,0));return{Od:Math.round(i.getTime()/1e3),Bd:e}}function Ch(t){if(!rg(t))throw new Error("time must be of type isUTCTimestamp");return{Od:t}}function dd(t){const e=new Date(t);if(isNaN(e.getTime()))throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);return{day:e.getUTCDate(),month:e.getUTCMonth()+1,year:e.getUTCFullYear()}}function Eh(t){qr(t.time)&&(t.time=dd(t.time))}class zh{options(){return this.cn}setOptions(e){this.cn=e,this.updateFormatter(e.localization)}preprocessData(e){Array.isArray(e)?function(i){i.forEach(Eh)}(e):Eh(e)}createConverterToInternalObj(e){return M(function(i){return i.length===0?null:Vo(i[0].time)||qr(i[0].time)?zl:Ch}(e))}key(e){return typeof e=="object"&&"Od"in e?e.Od:this.key(this.convertHorzItemToInternal(e))}cacheKey(e){const i=e;return i.Bd===void 0?new Date(1e3*i.Od).getTime():new Date(Date.UTC(i.Bd.year,i.Bd.month-1,i.Bd.day)).getTime()}convertHorzItemToInternal(e){return rg(i=e)?Ch(i):Vo(i)?zl(i):zl(dd(i));var i}updateFormatter(e){if(!this.cn)return;const i=e.dateFormat;this.cn.timeScale.timeVisible?this.Ad=new ny({Sd:i,kd:this.cn.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",yd:"   ",Cd:e.locale}):this.Ad=new sg(i,e.locale)}formatHorzItem(e){const i=e;return this.Ad.Y_(new Date(1e3*i.Od))}formatTickmark(e,i){const n=function(s,l,c){switch(s){case 0:case 10:return l?c?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return l?3:2;case 50:return 2;case 60:return 1;case 70:return 0}}(e.weight,this.cn.timeScale.timeVisible,this.cn.timeScale.secondsVisible),r=this.cn.timeScale;if(r.tickMarkFormatter!==void 0){const s=r.tickMarkFormatter(e.originalTime,n,i.locale);if(s!==null)return s}return function(s,l,c){const o={};switch(l){case 0:o.year="numeric";break;case 1:o.month="short";break;case 2:o.day="numeric";break;case 3:o.hour12=!1,o.hour="2-digit",o.minute="2-digit";break;case 4:o.hour12=!1,o.hour="2-digit",o.minute="2-digit",o.second="2-digit"}const d=s.Bd===void 0?new Date(1e3*s.Od):new Date(Date.UTC(s.Bd.year,s.Bd.month-1,s.Bd.day));return new Date(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()).toLocaleString(c,o)}(e.time,n,i.locale)}maxTickMarkWeight(e){let i=e.reduce(Kb,e[0]).weight;return i>30&&i<50&&(i=30),i}fillWeightsForPoints(e,i){(function(n,r=0){if(n.length===0)return;let s=r===0?null:n[r-1].time.Od,l=s!==null?new Date(1e3*s):null,c=0;for(let o=r;o<n.length;++o){const d=n[o],u=new Date(1e3*d.time.Od);l!==null&&(d.timeWeight=Sh(u,l)),c+=d.time.Od-(s||d.time.Od),s=d.time.Od,l=u}if(r===0&&n.length>1){const o=Math.ceil(c/(n.length-1)),d=new Date(1e3*(n[0].time.Od-o));n[0].timeWeight=Sh(new Date(1e3*n[0].time.Od),d)}})(e,i)}static Id(e){return yt({localization:{dateFormat:"dd MMM 'yy"}},e??{})}}const Tn=typeof window<"u";function Mh(){return!!Tn&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function Ml(){return!!Tn&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function Wo(t){return t+t%2}function Tl(t,e){return t.zd-e.zd}function _l(t,e,i){const n=(t.zd-e.zd)/(t.ot-e.ot);return Math.sign(n)*Math.min(Math.abs(n),i)}class ry{constructor(e,i,n,r){this.Ld=null,this.Ed=null,this.Nd=null,this.Fd=null,this.Wd=null,this.jd=0,this.Hd=0,this.$d=e,this.Ud=i,this.qd=n,this.rs=r}Yd(e,i){if(this.Ld!==null){if(this.Ld.ot===i)return void(this.Ld.zd=e);if(Math.abs(this.Ld.zd-e)<this.rs)return}this.Fd=this.Nd,this.Nd=this.Ed,this.Ed=this.Ld,this.Ld={ot:i,zd:e}}Vr(e,i){if(this.Ld===null||this.Ed===null||i-this.Ld.ot>50)return;let n=0;const r=_l(this.Ld,this.Ed,this.Ud),s=Tl(this.Ld,this.Ed),l=[r],c=[s];if(n+=s,this.Nd!==null){const d=_l(this.Ed,this.Nd,this.Ud);if(Math.sign(d)===Math.sign(r)){const u=Tl(this.Ed,this.Nd);if(l.push(d),c.push(u),n+=u,this.Fd!==null){const h=_l(this.Nd,this.Fd,this.Ud);if(Math.sign(h)===Math.sign(r)){const f=Tl(this.Nd,this.Fd);l.push(h),c.push(f),n+=f}}}}let o=0;for(let d=0;d<l.length;++d)o+=c[d]/n*l[d];Math.abs(o)<this.$d||(this.Wd={zd:e,ot:i},this.Hd=o,this.jd=function(d,u){const h=Math.log(u);return Math.log(1*h/-d)/h}(Math.abs(o),this.qd))}tc(e){const i=M(this.Wd),n=e-i.ot;return i.zd+this.Hd*(Math.pow(this.qd,n)-1)/Math.log(this.qd)}Qu(e){return this.Wd===null||this.Zd(e)===this.jd}Zd(e){const i=e-M(this.Wd).ot;return Math.min(i,this.jd)}}class sy{constructor(e,i){this.Xd=void 0,this.Kd=void 0,this.Gd=void 0,this.en=!1,this.Jd=e,this.Qd=i,this.tf()}bt(){this.tf()}if(){this.Xd&&this.Jd.removeChild(this.Xd),this.Kd&&this.Jd.removeChild(this.Kd),this.Xd=void 0,this.Kd=void 0}nf(){return this.en!==this.sf()||this.Gd!==this.ef()}ef(){return Om(Pr(this.Qd.W().layout.textColor))>160?"dark":"light"}sf(){return this.Qd.W().layout.attributionLogo}rf(){const e=new URL(location.href);return e.hostname?"&utm_source="+e.hostname+e.pathname:""}tf(){this.nf()&&(this.if(),this.en=this.sf(),this.en&&(this.Gd=this.ef(),this.Kd=document.createElement("style"),this.Kd.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.Xd=document.createElement("a"),this.Xd.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.rf()}`,this.Xd.title="Charting by TradingView",this.Xd.id="tv-attr-logo",this.Xd.target="_blank",this.Xd.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.Xd.toggleAttribute("data-dark",this.Gd==="dark"),this.Jd.appendChild(this.Kd),this.Jd.appendChild(this.Xd)))}}function Vi(t,e){const i=M(t.ownerDocument).createElement("canvas");t.appendChild(i);const n=g2(i,{options:{allowResizeObserver:!1},transform:(r,s)=>({width:Math.max(r.width,s.width),height:Math.max(r.height,s.height)})});return n.resizeCanvasElement(e),n}function Wi(t){var e;t.width=1,t.height=1,(e=t.getContext("2d"))===null||e===void 0||e.clearRect(0,0,1,1)}function Uo(t,e,i,n){t.gl&&t.gl(e,i,n)}function Bs(t,e,i,n){t.X(e,i,n)}function qo(t,e,i,n){const r=t(i,n);for(const s of r){const l=s.gt();l!==null&&e(l)}}function ay(t){Tn&&window.chrome!==void 0&&t.addEventListener("mousedown",e=>{if(e.button===1)return e.preventDefault(),!1})}class ud{constructor(e,i,n){this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this.df=null,this.ff=!1,this.vf=null,this.pf=null,this.mf=!1,this.bf=!1,this.wf=!1,this.gf=null,this.Mf=null,this.xf=null,this.Sf=null,this.kf=null,this.yf=null,this.Cf=null,this.Tf=0,this.Pf=!1,this.Rf=!1,this.Df=!1,this.Vf=0,this.Of=null,this.Bf=!Ml(),this.Af=r=>{this.If(r)},this.zf=r=>{if(this.Lf(r)){const s=this.Ef(r);if(++this._f,this.uf&&this._f>1){const{Nf:l}=this.Ff(Nt(r),this.cf);l<30&&!this.wf&&this.Wf(s,this.Hf.jf),this.$f()}}else{const s=this.Ef(r);if(++this.hf,this.lf&&this.hf>1){const{Nf:l}=this.Ff(Nt(r),this.af);l<5&&!this.bf&&this.Uf(s,this.Hf.qf),this.Yf()}}},this.Zf=e,this.Hf=i,this.cn=n,this.Xf()}S(){this.gf!==null&&(this.gf(),this.gf=null),this.Mf!==null&&(this.Mf(),this.Mf=null),this.Sf!==null&&(this.Sf(),this.Sf=null),this.kf!==null&&(this.kf(),this.kf=null),this.yf!==null&&(this.yf(),this.yf=null),this.xf!==null&&(this.xf(),this.xf=null),this.Kf(),this.Yf()}Gf(e){this.Sf&&this.Sf();const i=this.Jf.bind(this);if(this.Sf=()=>{this.Zf.removeEventListener("mousemove",i)},this.Zf.addEventListener("mousemove",i),this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.Qf),this.Bf=!0}Yf(){this.lf!==null&&clearTimeout(this.lf),this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}$f(){this.uf!==null&&clearTimeout(this.uf),this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}Jf(e){if(this.Df||this.pf!==null||this.Lf(e))return;const i=this.Ef(e);this.Uf(i,this.Hf.tv),this.Bf=!0}iv(e){const i=Pl(e.changedTouches,M(this.Of));if(i===null||(this.Vf=vs(e),this.Cf!==null)||this.Rf)return;this.Pf=!0;const n=this.Ff(Nt(i),M(this.pf)),{nv:r,sv:s,Nf:l}=n;if(this.mf||!(l<5)){if(!this.mf){const c=.5*r,o=s>=c&&!this.cn.ev(),d=c>s&&!this.cn.rv();o||d||(this.Rf=!0),this.mf=!0,this.wf=!0,this.Kf(),this.$f()}if(!this.Rf){const c=this.Ef(e,i);this.Wf(c,this.Hf.hv),Yi(e)}}}lv(e){if(e.button!==0)return;const i=this.Ff(Nt(e),M(this.vf)),{Nf:n}=i;if(n>=5&&(this.bf=!0,this.Yf()),this.bf){const r=this.Ef(e);this.Uf(r,this.Hf.av)}}Ff(e,i){const n=Math.abs(i.nt-e.nt),r=Math.abs(i.st-e.st);return{nv:n,sv:r,Nf:n+r}}ov(e){let i=Pl(e.changedTouches,M(this.Of));if(i===null&&e.touches.length===0&&(i=e.changedTouches[0]),i===null)return;this.Of=null,this.Vf=vs(e),this.Kf(),this.pf=null,this.yf&&(this.yf(),this.yf=null);const n=this.Ef(e,i);if(this.Wf(n,this.Hf._v),++this._f,this.uf&&this._f>1){const{Nf:r}=this.Ff(Nt(i),this.cf);r<30&&!this.wf&&this.Wf(n,this.Hf.jf),this.$f()}else this.wf||(this.Wf(n,this.Hf.uv),this.Hf.uv&&Yi(e));this._f===0&&Yi(e),e.touches.length===0&&this.ff&&(this.ff=!1,Yi(e))}If(e){if(e.button!==0)return;const i=this.Ef(e);if(this.vf=null,this.Df=!1,this.kf&&(this.kf(),this.kf=null),Mh()&&this.Zf.ownerDocument.documentElement.removeEventListener("mouseleave",this.Af),!this.Lf(e))if(this.Uf(i,this.Hf.cv),++this.hf,this.lf&&this.hf>1){const{Nf:n}=this.Ff(Nt(e),this.af);n<5&&!this.bf&&this.Uf(i,this.Hf.qf),this.Yf()}else this.bf||this.Uf(i,this.Hf.dv)}Kf(){this.df!==null&&(clearTimeout(this.df),this.df=null)}fv(e){if(this.Of!==null)return;const i=e.changedTouches[0];this.Of=i.identifier,this.Vf=vs(e);const n=this.Zf.ownerDocument.documentElement;this.wf=!1,this.mf=!1,this.Rf=!1,this.pf=Nt(i),this.yf&&(this.yf(),this.yf=null);{const s=this.iv.bind(this),l=this.ov.bind(this);this.yf=()=>{n.removeEventListener("touchmove",s),n.removeEventListener("touchend",l)},n.addEventListener("touchmove",s,{passive:!1}),n.addEventListener("touchend",l,{passive:!1}),this.Kf(),this.df=setTimeout(this.vv.bind(this,e),240)}const r=this.Ef(e,i);this.Wf(r,this.Hf.pv),this.uf||(this._f=0,this.uf=setTimeout(this.$f.bind(this),500),this.cf=Nt(i))}mv(e){if(e.button!==0)return;const i=this.Zf.ownerDocument.documentElement;Mh()&&i.addEventListener("mouseleave",this.Af),this.bf=!1,this.vf=Nt(e),this.kf&&(this.kf(),this.kf=null);{const r=this.lv.bind(this),s=this.If.bind(this);this.kf=()=>{i.removeEventListener("mousemove",r),i.removeEventListener("mouseup",s)},i.addEventListener("mousemove",r),i.addEventListener("mouseup",s)}if(this.Df=!0,this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.bv),this.lf||(this.hf=0,this.lf=setTimeout(this.Yf.bind(this),500),this.af=Nt(e))}Xf(){this.Zf.addEventListener("mouseenter",this.Gf.bind(this)),this.Zf.addEventListener("touchcancel",this.Kf.bind(this));{const e=this.Zf.ownerDocument,i=n=>{this.Hf.wv&&(n.composed&&this.Zf.contains(n.composedPath()[0])||n.target&&this.Zf.contains(n.target)||this.Hf.wv())};this.Mf=()=>{e.removeEventListener("touchstart",i)},this.gf=()=>{e.removeEventListener("mousedown",i)},e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0})}Ml()&&(this.xf=()=>{this.Zf.removeEventListener("dblclick",this.zf)},this.Zf.addEventListener("dblclick",this.zf)),this.Zf.addEventListener("mouseleave",this.gv.bind(this)),this.Zf.addEventListener("touchstart",this.fv.bind(this),{passive:!0}),ay(this.Zf),this.Zf.addEventListener("mousedown",this.mv.bind(this)),this.Mv(),this.Zf.addEventListener("touchmove",()=>{},{passive:!1})}Mv(){this.Hf.xv===void 0&&this.Hf.Sv===void 0&&this.Hf.kv===void 0||(this.Zf.addEventListener("touchstart",e=>this.yv(e.touches),{passive:!0}),this.Zf.addEventListener("touchmove",e=>{if(e.touches.length===2&&this.Cf!==null&&this.Hf.Sv!==void 0){const i=Th(e.touches[0],e.touches[1])/this.Tf;this.Hf.Sv(this.Cf,i),Yi(e)}},{passive:!1}),this.Zf.addEventListener("touchend",e=>{this.yv(e.touches)}))}yv(e){e.length===1&&(this.Pf=!1),e.length!==2||this.Pf||this.ff?this.Cv():this.Tv(e)}Tv(e){const i=this.Zf.getBoundingClientRect()||{left:0,top:0};this.Cf={nt:(e[0].clientX-i.left+(e[1].clientX-i.left))/2,st:(e[0].clientY-i.top+(e[1].clientY-i.top))/2},this.Tf=Th(e[0],e[1]),this.Hf.xv!==void 0&&this.Hf.xv(),this.Kf()}Cv(){this.Cf!==null&&(this.Cf=null,this.Hf.kv!==void 0&&this.Hf.kv())}gv(e){if(this.Sf&&this.Sf(),this.Lf(e)||!this.Bf)return;const i=this.Ef(e);this.Uf(i,this.Hf.Pv),this.Bf=!Ml()}vv(e){const i=Pl(e.touches,M(this.Of));if(i===null)return;const n=this.Ef(e,i);this.Wf(n,this.Hf.Rv),this.wf=!0,this.ff=!0}Lf(e){return e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents!==void 0?e.sourceCapabilities.firesTouchEvents:vs(e)<this.Vf+500}Wf(e,i){i&&i.call(this.Hf,e)}Uf(e,i){i&&i.call(this.Hf,e)}Ef(e,i){const n=i||e,r=this.Zf.getBoundingClientRect()||{left:0,top:0};return{clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,screenX:n.screenX,screenY:n.screenY,localX:n.clientX-r.left,localY:n.clientY-r.top,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey,Dv:!e.type.startsWith("mouse")&&e.type!=="contextmenu"&&e.type!=="click",Vv:e.type,Ov:n.target,Bv:e.view,Av:()=>{e.type!=="touchstart"&&Yi(e)}}}}function Th(t,e){const i=t.clientX-e.clientX,n=t.clientY-e.clientY;return Math.sqrt(i*i+n*n)}function Yi(t){t.cancelable&&t.preventDefault()}function Nt(t){return{nt:t.pageX,st:t.pageY}}function vs(t){return t.timeStamp||performance.now()}function Pl(t,e){for(let i=0;i<t.length;++i)if(t[i].identifier===e)return t[i];return null}function bs(t){return{Hc:t.Hc,Iv:{gr:t.zv.externalId},Lv:t.zv.cursorStyle}}function ly(t,e,i){for(const n of t){const r=n.gt();if(r!==null&&r.wr){const s=r.wr(e,i);if(s!==null)return{Bv:n,Iv:s}}}return null}function Ll(t,e){return i=>{var n,r,s,l;return((r=(n=i.Dt())===null||n===void 0?void 0:n.Pa())!==null&&r!==void 0?r:"")!==e?[]:(l=(s=i.da)===null||s===void 0?void 0:s.call(i,t))!==null&&l!==void 0?l:[]}}function _h(t,e,i,n){if(!t.length)return;let r=0;const s=i/2,l=t[0].At(n,!0);let c=e===1?s-(t[0].Vi()-l/2):t[0].Vi()-l/2-s;c=Math.max(0,c);for(let o=1;o<t.length;o++){const d=t[o],u=t[o-1],h=u.At(n,!1),f=d.Vi(),g=u.Vi();if(e===1?f>g-h:f<g+h){const p=g-h*e;d.Oi(p);const x=p-e*h/2;if((e===1?x<0:x>i)&&c>0){const y=e===1?-1-x:x-i,v=Math.min(y,c);for(let m=r;m<t.length;m++)t[m].Oi(t[m].Vi()+e*v);c-=v}}else r=o,c=e===1?g-h-f:f-(g+h)}}class Ph{constructor(e,i,n,r){this.Li=null,this.Ev=null,this.Nv=!1,this.Fv=new Ar(200),this.Qr=null,this.Wv=0,this.jv=!1,this.Hv=()=>{this.jv||this.tn.$v().$t().Uh()},this.Uv=()=>{this.jv||this.tn.$v().$t().Uh()},this.tn=e,this.cn=i,this.ko=i.layout,this.Oc=n,this.qv=r==="left",this.Yv=Ll("normal",r),this.Zv=Ll("top",r),this.Xv=Ll("bottom",r),this.Kv=document.createElement("div"),this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Kv.style.width="25px",this.Kv.style.left="0",this.Kv.style.position="relative",this.Gv=Vi(this.Kv,oe({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const s=this.Gv.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.Jv=Vi(this.Kv,oe({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const l=this.Jv.canvasElement;l.style.position="absolute",l.style.zIndex="2",l.style.left="0",l.style.top="0";const c={bv:this.Qv.bind(this),pv:this.Qv.bind(this),av:this.tp.bind(this),hv:this.tp.bind(this),wv:this.ip.bind(this),cv:this.np.bind(this),_v:this.np.bind(this),qf:this.sp.bind(this),jf:this.sp.bind(this),Qf:this.ep.bind(this),Pv:this.rp.bind(this)};this.hp=new ud(this.Jv.canvasElement,c,{ev:()=>!this.cn.handleScroll.vertTouchDrag,rv:()=>!0})}S(){this.hp.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Wi(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Wi(this.Gv.canvasElement),this.Gv.dispose(),this.Li!==null&&this.Li.Ko().p(this),this.Li=null}lp(){return this.Kv}P(){return this.ko.fontSize}ap(){const e=this.Oc.W();return this.Qr!==e.R&&(this.Fv.nr(),this.Qr=e.R),e}op(){if(this.Li===null)return 0;let e=0;const i=this.ap(),n=M(this.Gv.canvasElement.getContext("2d"));n.save();const r=this.Li.Ha();n.font=this._p(),r.length>0&&(e=Math.max(this.Fv.xi(n,r[0].so),this.Fv.xi(n,r[r.length-1].so)));const s=this.up();for(let d=s.length;d--;){const u=this.Fv.xi(n,s[d].Kt());u>e&&(e=u)}const l=this.Li.Ct();if(l!==null&&this.Ev!==null&&(c=this.cn.crosshair).mode!==2&&c.horzLine.visible&&c.horzLine.labelVisible){const d=this.Li.pn(1,l),u=this.Li.pn(this.Ev.height-2,l);e=Math.max(e,this.Fv.xi(n,this.Li.Fi(Math.floor(Math.min(d,u))+.11111111111111,l)),this.Fv.xi(n,this.Li.Fi(Math.ceil(Math.max(d,u))-.11111111111111,l)))}var c;n.restore();const o=e||34;return Wo(Math.ceil(i.C+i.T+i.A+i.I+5+o))}cp(e){this.Ev!==null&&Pi(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`)}dp(){return M(this.Ev).width}Gi(e){this.Li!==e&&(this.Li!==null&&this.Li.Ko().p(this),this.Li=e,e.Ko().l(this.fo.bind(this),this))}Dt(){return this.Li}nr(){const e=this.tn.fp();this.tn.$v().$t().E_(e,M(this.Dt()))}vp(e){if(this.Ev===null)return;if(e!==1){this.pp(),this.Gv.applySuggestedBitmapSize();const n=Oi(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(r=>{this.mp(r),this.Ie(r)}),this.tn.bp(n,this.Xv),this.wp(n),this.tn.bp(n,this.Yv),this.gp(n))}this.Jv.applySuggestedBitmapSize();const i=Oi(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:r})=>{n.clearRect(0,0,r.width,r.height)}),this.Mp(i),this.tn.bp(i,this.Zv))}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}bt(){var e;(e=this.Li)===null||e===void 0||e.Ha()}Qv(e){if(this.Li===null||this.Li.Ni()||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!0,i.V_(n,this.Li,e.localY)}tp(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp(),r=this.Li;i.O_(n,r,e.localY)}ip(){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const e=this.tn.$v().$t(),i=this.tn.fp(),n=this.Li;this.Nv&&(this.Nv=!1,e.B_(i,n))}np(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!1,i.B_(n,this.Li)}sp(e){this.cn.handleScale.axisDoubleClickReset.price&&this.nr()}ep(e){this.Li!==null&&(!this.tn.$v().$t().W().handleScale.axisPressedMouseMove.price||this.Li.Mh()||this.Li.Oo()||this.kp(1))}rp(e){this.kp(0)}up(){const e=[],i=this.Li===null?void 0:this.Li;return(n=>{for(let r=0;r<n.length;++r){const s=n[r].Rn(this.tn.fp(),i);for(let l=0;l<s.length;l++)e.push(s[l])}})(this.tn.fp().Uo()),e}mp({context:e,bitmapSize:i}){const{width:n,height:r}=i,s=this.tn.fp().$t(),l=s.q(),c=s.bd();l===c?Ra(e,0,0,n,r,l):Fm(e,0,0,n,r,l,c)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n}){if(this.Ev===null||this.Li===null||!this.Li.W().borderVisible)return;e.fillStyle=this.Li.W().borderColor;const r=Math.max(1,Math.floor(this.ap().C*n));let s;s=this.qv?i.width-r:0,e.fillRect(s,0,r,i.height)}wp(e){if(this.Ev===null||this.Li===null)return;const i=this.Li.Ha(),n=this.Li.W(),r=this.ap(),s=this.qv?this.Ev.width-r.T:0;n.borderVisible&&n.ticksVisible&&e.useBitmapCoordinateSpace(({context:l,horizontalPixelRatio:c,verticalPixelRatio:o})=>{l.fillStyle=n.borderColor;const d=Math.max(1,Math.floor(o)),u=Math.floor(.5*o),h=Math.round(r.T*c);l.beginPath();for(const f of i)l.rect(Math.floor(s*c),Math.round(f.Ea*o)-u,h,d);l.fill()}),e.useMediaCoordinateSpace(({context:l})=>{var c;l.font=this._p(),l.fillStyle=(c=n.textColor)!==null&&c!==void 0?c:this.ko.textColor,l.textAlign=this.qv?"right":"left",l.textBaseline="middle";const o=this.qv?Math.round(s-r.A):Math.round(s+r.T+r.A),d=i.map(u=>this.Fv.Mi(l,u.so));for(let u=i.length;u--;){const h=i[u];l.fillText(h.so,o,h.Ea+d[u])}})}pp(){if(this.Ev===null||this.Li===null)return;const e=[],i=this.Li.Uo().slice(),n=this.tn.fp(),r=this.ap();this.Li===n.pr()&&this.tn.fp().Uo().forEach(l=>{n.vr(l)&&i.push(l)});const s=this.Li;i.forEach(l=>{l.Rn(n,s).forEach(c=>{c.Oi(null),c.Bi()&&e.push(c)})}),e.forEach(l=>l.Oi(l.ki())),this.Li.W().alignLabels&&this.yp(e,r)}yp(e,i){if(this.Ev===null)return;const n=this.Ev.height/2,r=e.filter(l=>l.ki()<=n),s=e.filter(l=>l.ki()>n);r.sort((l,c)=>c.ki()-l.ki()),s.sort((l,c)=>l.ki()-c.ki());for(const l of e){const c=Math.floor(l.At(i)/2),o=l.ki();o>-c&&o<c&&l.Oi(c),o>this.Ev.height-c&&o<this.Ev.height+c&&l.Oi(this.Ev.height-c)}_h(r,1,this.Ev.height,i),_h(s,-1,this.Ev.height,i)}gp(e){if(this.Ev===null)return;const i=this.up(),n=this.ap(),r=this.qv?"right":"left";i.forEach(s=>{s.Ai()&&s.gt(M(this.Li)).X(e,n,this.Fv,r)})}Mp(e){if(this.Ev===null||this.Li===null)return;const i=this.tn.$v().$t(),n=[],r=this.tn.fp(),s=i.Zc().Rn(r,this.Li);s.length&&n.push(s);const l=this.ap(),c=this.qv?"right":"left";n.forEach(o=>{o.forEach(d=>{d.gt(M(this.Li)).X(e,l,this.Fv,c)})})}kp(e){this.Kv.style.cursor=e===1?"ns-resize":"default"}fo(){const e=this.op();this.Wv<e&&this.tn.$v().$t().Kl(),this.Wv=e}_p(){return Mn(this.ko.fontSize,this.ko.fontFamily)}}function oy(t,e){var i,n;return(n=(i=t.ua)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function ys(t,e){var i,n;return(n=(i=t.Pn)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function cy(t,e){var i,n;return(n=(i=t.Ji)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function dy(t,e){var i,n;return(n=(i=t.aa)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}class hd{constructor(e,i){this.Ev=oe({width:0,height:0}),this.Cp=null,this.Tp=null,this.Pp=null,this.Rp=null,this.Dp=!1,this.Vp=new be,this.Op=new be,this.Bp=0,this.Ap=!1,this.Ip=null,this.zp=!1,this.Lp=null,this.Ep=null,this.jv=!1,this.Hv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Uv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Qd=e,this.Np=i,this.Np.W_().l(this.Fp.bind(this),this,!0),this.Wp=document.createElement("td"),this.Wp.style.padding="0",this.Wp.style.position="relative";const n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.position="relative",n.style.overflow="hidden",this.jp=document.createElement("td"),this.jp.style.padding="0",this.Hp=document.createElement("td"),this.Hp.style.padding="0",this.Wp.appendChild(n),this.Gv=Vi(n,oe({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const r=this.Gv.canvasElement;r.style.position="absolute",r.style.zIndex="1",r.style.left="0",r.style.top="0",this.Jv=Vi(n,oe({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const s=this.Jv.canvasElement;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.$p=document.createElement("tr"),this.$p.appendChild(this.jp),this.$p.appendChild(this.Wp),this.$p.appendChild(this.Hp),this.Up(),this.hp=new ud(this.Jv.canvasElement,this,{ev:()=>this.Ip===null&&!this.Qd.W().handleScroll.vertTouchDrag,rv:()=>this.Ip===null&&!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.Cp!==null&&this.Cp.S(),this.Tp!==null&&this.Tp.S(),this.Pp=null,this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Wi(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Wi(this.Gv.canvasElement),this.Gv.dispose(),this.Np!==null&&this.Np.W_().p(this),this.hp.S()}fp(){return M(this.Np)}qp(e){var i,n;this.Np!==null&&this.Np.W_().p(this),this.Np=e,this.Np!==null&&this.Np.W_().l(hd.prototype.Fp.bind(this),this,!0),this.Up(),this.Qd.Yp().indexOf(this)===this.Qd.Yp().length-1?(this.Pp=(i=this.Pp)!==null&&i!==void 0?i:new sy(this.Wp,this.Qd),this.Pp.bt()):((n=this.Pp)===null||n===void 0||n.if(),this.Pp=null)}$v(){return this.Qd}lp(){return this.$p}Up(){if(this.Np!==null&&(this.Zp(),this.$i().wt().length!==0)){if(this.Cp!==null){const e=this.Np.R_();this.Cp.Gi(M(e))}if(this.Tp!==null){const e=this.Np.D_();this.Tp.Gi(M(e))}}}Xp(){this.Cp!==null&&this.Cp.bt(),this.Tp!==null&&this.Tp.bt()}M_(){return this.Np!==null?this.Np.M_():0}x_(e){this.Np&&this.Np.x_(e)}Qf(e){if(!this.Np)return;this.Kp();const i=e.localX,n=e.localY;this.Gp(i,n,e)}bv(e){this.Kp(),this.Jp(),this.Gp(e.localX,e.localY,e)}tv(e){var i;if(!this.Np)return;this.Kp();const n=e.localX,r=e.localY;this.Gp(n,r,e);const s=this.wr(n,r);this.Qd.Qp((i=s==null?void 0:s.Lv)!==null&&i!==void 0?i:null),this.$i().jc(s&&{Hc:s.Hc,Iv:s.Iv})}dv(e){this.Np!==null&&(this.Kp(),this.tm(e))}qf(e){this.Np!==null&&this.im(this.Op,e)}jf(e){this.qf(e)}av(e){this.Kp(),this.nm(e),this.Gp(e.localX,e.localY,e)}cv(e){this.Np!==null&&(this.Kp(),this.Ap=!1,this.sm(e))}uv(e){this.Np!==null&&this.tm(e)}Rv(e){if(this.Ap=!0,this.Ip===null){const i={x:e.localX,y:e.localY};this.rm(i,i,e)}}Pv(e){this.Np!==null&&(this.Kp(),this.Np.$t().jc(null),this.hm())}lm(){return this.Vp}am(){return this.Op}xv(){this.Bp=1,this.$i().Un()}Sv(e,i){if(!this.Qd.W().handleScale.pinch)return;const n=5*(i-this.Bp);this.Bp=i,this.$i().Qc(e.nt,n)}pv(e){this.Ap=!1,this.zp=this.Ip!==null,this.Jp();const i=this.$i().Zc();this.Ip!==null&&i.yt()&&(this.Lp={x:i.Yt(),y:i.Zt()},this.Ip={x:e.localX,y:e.localY})}hv(e){if(this.Np===null)return;const i=e.localX,n=e.localY;if(this.Ip===null)this.nm(e);else{this.zp=!1;const r=M(this.Lp),s=r.x+(i-this.Ip.x),l=r.y+(n-this.Ip.y);this.Gp(s,l,e)}}_v(e){this.$v().W().trackingMode.exitMode===0&&(this.zp=!0),this.om(),this.sm(e)}wr(e,i){const n=this.Np;return n===null?null:function(r,s,l){const c=r.Uo(),o=function(d,u,h){var f,g;let p,x;for(const m of d){const b=(g=(f=m.va)===null||f===void 0?void 0:f.call(m,u,h))!==null&&g!==void 0?g:[];for(const w of b)y=w.zOrder,(!(v=p==null?void 0:p.zOrder)||y==="top"&&v!=="top"||y==="normal"&&v==="bottom")&&(p=w,x=m)}var y,v;return p&&x?{zv:p,Hc:x}:null}(c,s,l);if((o==null?void 0:o.zv.zOrder)==="top")return bs(o);for(const d of c){if(o&&o.Hc===d&&o.zv.zOrder!=="bottom"&&!o.zv.isBackground)return bs(o);const u=ly(d.Pn(r),s,l);if(u!==null)return{Hc:d,Bv:u.Bv,Iv:u.Iv};if(o&&o.Hc===d&&o.zv.zOrder!=="bottom"&&o.zv.isBackground)return bs(o)}return o!=null&&o.zv?bs(o):null}(n,e,i)}_m(e,i){M(i==="left"?this.Cp:this.Tp).cp(oe({width:e,height:this.Ev.height}))}um(){return this.Ev}cp(e){Pi(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Wp.style.width=e.width+"px",this.Wp.style.height=e.height+"px")}dm(){const e=M(this.Np);e.P_(e.R_()),e.P_(e.D_());for(const i of e.Ba())if(e.vr(i)){const n=i.Dt();n!==null&&e.P_(n),i.Vn()}}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0||this.Np===null)return;if(e>1&&this.dm(),this.Cp!==null&&this.Cp.vp(e),this.Tp!==null&&this.Tp.vp(e),e!==1){this.Gv.applySuggestedBitmapSize();const n=Oi(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(r=>{this.mp(r)}),this.Np&&(this.fm(n,oy),this.vm(n),this.pm(n),this.fm(n,ys),this.fm(n,cy)))}this.Jv.applySuggestedBitmapSize();const i=Oi(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:r})=>{n.clearRect(0,0,r.width,r.height)}),this.bm(i),this.fm(i,dy))}wm(){return this.Cp}gm(){return this.Tp}bp(e,i){this.fm(e,i)}Fp(){this.Np!==null&&this.Np.W_().p(this),this.Np=null}tm(e){this.im(this.Vp,e)}im(e,i){const n=i.localX,r=i.localY;e.M()&&e.m(this.$i().St().Nu(n),{x:n,y:r},i)}mp({context:e,bitmapSize:i}){const{width:n,height:r}=i,s=this.$i(),l=s.q(),c=s.bd();l===c?Ra(e,0,0,n,r,c):Fm(e,0,0,n,r,l,c)}vm(e){const i=M(this.Np).j_().qh().gt();i!==null&&i.X(e,!1)}pm(e){const i=this.$i().Yc();this.Mm(e,ys,Uo,i),this.Mm(e,ys,Bs,i)}bm(e){this.Mm(e,ys,Bs,this.$i().Zc())}fm(e,i){const n=M(this.Np).Uo();for(const r of n)this.Mm(e,i,Uo,r);for(const r of n)this.Mm(e,i,Bs,r)}Mm(e,i,n,r){const s=M(this.Np),l=s.$t().Wc(),c=l!==null&&l.Hc===r,o=l!==null&&c&&l.Iv!==void 0?l.Iv.Mr:void 0;qo(i,d=>n(d,e,c,o),r,s)}Zp(){if(this.Np===null)return;const e=this.Qd,i=this.Np.R_().W().visible,n=this.Np.D_().W().visible;i||this.Cp===null||(this.jp.removeChild(this.Cp.lp()),this.Cp.S(),this.Cp=null),n||this.Tp===null||(this.Hp.removeChild(this.Tp.lp()),this.Tp.S(),this.Tp=null);const r=e.$t().ud();i&&this.Cp===null&&(this.Cp=new Ph(this,e.W(),r,"left"),this.jp.appendChild(this.Cp.lp())),n&&this.Tp===null&&(this.Tp=new Ph(this,e.W(),r,"right"),this.Hp.appendChild(this.Tp.lp()))}xm(e){return e.Dv&&this.Ap||this.Ip!==null}Sm(e){return Math.max(0,Math.min(e,this.Ev.width-1))}km(e){return Math.max(0,Math.min(e,this.Ev.height-1))}Gp(e,i,n){this.$i().ld(this.Sm(e),this.km(i),n,M(this.Np))}hm(){this.$i().od()}om(){this.zp&&(this.Ip=null,this.hm())}rm(e,i,n){this.Ip=e,this.zp=!1,this.Gp(i.x,i.y,n);const r=this.$i().Zc();this.Lp={x:r.Yt(),y:r.Zt()}}$i(){return this.Qd.$t()}sm(e){if(!this.Dp)return;const i=this.$i(),n=this.fp();if(i.z_(n,n.vn()),this.Rp=null,this.Dp=!1,i.ed(),this.Ep!==null){const r=performance.now(),s=i.St();this.Ep.Vr(s.Hu(),r),this.Ep.Qu(r)||i.Zn(this.Ep)}}Kp(){this.Ip=null}Jp(){if(this.Np){if(this.$i().Un(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)M(document.activeElement).blur();else{const e=document.getSelection();e!==null&&e.removeAllRanges()}!this.Np.vn().Ni()&&this.$i().St().Ni()}}nm(e){if(this.Np===null)return;const i=this.$i(),n=i.St();if(n.Ni())return;const r=this.Qd.W(),s=r.handleScroll,l=r.kineticScroll;if((!s.pressedMouseMove||e.Dv)&&(!s.horzTouchDrag&&!s.vertTouchDrag||!e.Dv))return;const c=this.Np.vn(),o=performance.now();if(this.Rp!==null||this.xm(e)||(this.Rp={x:e.clientX,y:e.clientY,Od:o,ym:e.localX,Cm:e.localY}),this.Rp!==null&&!this.Dp&&(this.Rp.x!==e.clientX||this.Rp.y!==e.clientY)){if(e.Dv&&l.touch||!e.Dv&&l.mouse){const d=n.le();this.Ep=new ry(.2/d,7/d,.997,15/d),this.Ep.Yd(n.Hu(),this.Rp.Od)}else this.Ep=null;c.Ni()||i.A_(this.Np,c,e.localY),i.nd(e.localX),this.Dp=!0}this.Dp&&(c.Ni()||i.I_(this.Np,c,e.localY),i.sd(e.localX),this.Ep!==null&&this.Ep.Yd(n.Hu(),o))}}class Lh{constructor(e,i,n,r,s){this.ft=!0,this.Ev=oe({width:0,height:0}),this.Hv=()=>this.vp(3),this.qv=e==="left",this.Oc=n.ud,this.cn=i,this.Tm=r,this.Pm=s,this.Kv=document.createElement("div"),this.Kv.style.width="25px",this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Gv=Vi(this.Kv,oe({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv)}S(){this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Wi(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Kv}um(){return this.Ev}cp(e){Pi(this.Ev,e)||(this.Ev=e,this.Gv.resizeCanvasElement(e),this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.ft=!0)}vp(e){if(e<3&&!this.ft||this.Ev.width===0||this.Ev.height===0)return;this.ft=!1,this.Gv.applySuggestedBitmapSize();const i=Oi(this.Gv);i!==null&&i.useBitmapCoordinateSpace(n=>{this.mp(n),this.Ie(n)})}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(!this.Tm())return;e.fillStyle=this.cn.timeScale.borderColor;const s=Math.floor(this.Oc.W().C*n),l=Math.floor(this.Oc.W().C*r),c=this.qv?i.width-s:0;e.fillRect(c,0,s,l)}mp({context:e,bitmapSize:i}){Ra(e,0,0,i.width,i.height,this.Pm())}}function fd(t){return e=>{var i,n;return(n=(i=e.fa)===null||i===void 0?void 0:i.call(e,t))!==null&&n!==void 0?n:[]}}const uy=fd("normal"),hy=fd("top"),fy=fd("bottom");class py{constructor(e,i){this.Rm=null,this.Dm=null,this.k=null,this.Vm=!1,this.Ev=oe({width:0,height:0}),this.Om=new be,this.Fv=new Ar(5),this.jv=!1,this.Hv=()=>{this.jv||this.Qd.$t().Uh()},this.Uv=()=>{this.jv||this.Qd.$t().Uh()},this.Qd=e,this.q_=i,this.cn=e.W().layout,this.Xd=document.createElement("tr"),this.Bm=document.createElement("td"),this.Bm.style.padding="0",this.Am=document.createElement("td"),this.Am.style.padding="0",this.Kv=document.createElement("td"),this.Kv.style.height="25px",this.Kv.style.padding="0",this.Im=document.createElement("div"),this.Im.style.width="100%",this.Im.style.height="100%",this.Im.style.position="relative",this.Im.style.overflow="hidden",this.Kv.appendChild(this.Im),this.Gv=Vi(this.Im,oe({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const n=this.Gv.canvasElement;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.Jv=Vi(this.Im,oe({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const r=this.Jv.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0",this.Xd.appendChild(this.Bm),this.Xd.appendChild(this.Kv),this.Xd.appendChild(this.Am),this.zm(),this.Qd.$t().g_().l(this.zm.bind(this),this),this.hp=new ud(this.Jv.canvasElement,this,{ev:()=>!0,rv:()=>!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.hp.S(),this.Rm!==null&&this.Rm.S(),this.Dm!==null&&this.Dm.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Wi(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Wi(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Xd}Lm(){return this.Rm}Em(){return this.Dm}bv(e){if(this.Vm)return;this.Vm=!0;const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.Jc(e.localX)}pv(e){this.bv(e)}wv(){const e=this.Qd.$t();!e.St().Ni()&&this.Vm&&(this.Vm=!1,this.Qd.W().handleScale.axisPressedMouseMove.time&&e.hd())}av(e){const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.rd(e.localX)}hv(e){this.av(e)}cv(){this.Vm=!1;const e=this.Qd.$t();e.St().Ni()&&!this.Qd.W().handleScale.axisPressedMouseMove.time||e.hd()}_v(){this.cv()}qf(){this.Qd.W().handleScale.axisDoubleClickReset.time&&this.Qd.$t().Kn()}jf(){this.qf()}Qf(){this.Qd.$t().W().handleScale.axisPressedMouseMove.time&&this.kp(1)}Pv(){this.kp(0)}um(){return this.Ev}Nm(){return this.Om}Fm(e,i,n){Pi(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.Om.m(e)),this.Rm!==null&&this.Rm.cp(oe({width:i,height:e.height})),this.Dm!==null&&this.Dm.cp(oe({width:n,height:e.height}))}Wm(){const e=this.jm();return Math.ceil(e.C+e.T+e.P+e.L+e.B+e.Hm)}bt(){this.Qd.$t().St().Ha()}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0)return;if(e!==1){this.Gv.applySuggestedBitmapSize();const n=Oi(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(r=>{this.mp(r),this.Ie(r),this.$m(n,fy)}),this.wp(n),this.$m(n,uy)),this.Rm!==null&&this.Rm.vp(e),this.Dm!==null&&this.Dm.vp(e)}this.Jv.applySuggestedBitmapSize();const i=Oi(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:r})=>{n.clearRect(0,0,r.width,r.height)}),this.Um([...this.Qd.$t().wt(),this.Qd.$t().Zc()],i),this.$m(i,hy))}$m(e,i){const n=this.Qd.$t().wt();for(const r of n)qo(i,s=>Uo(s,e,!1,void 0),r,void 0);for(const r of n)qo(i,s=>Bs(s,e,!1,void 0),r,void 0)}mp({context:e,bitmapSize:i}){Ra(e,0,0,i.width,i.height,this.Qd.$t().bd())}Ie({context:e,bitmapSize:i,verticalPixelRatio:n}){if(this.Qd.W().timeScale.borderVisible){e.fillStyle=this.qm();const r=Math.max(1,Math.floor(this.jm().C*n));e.fillRect(0,0,i.width,r)}}wp(e){const i=this.Qd.$t().St(),n=i.Ha();if(!n||n.length===0)return;const r=this.q_.maxTickMarkWeight(n),s=this.jm(),l=i.W();l.borderVisible&&l.ticksVisible&&e.useBitmapCoordinateSpace(({context:c,horizontalPixelRatio:o,verticalPixelRatio:d})=>{c.strokeStyle=this.qm(),c.fillStyle=this.qm();const u=Math.max(1,Math.floor(o)),h=Math.floor(.5*o);c.beginPath();const f=Math.round(s.T*d);for(let g=n.length;g--;){const p=Math.round(n[g].coord*o);c.rect(p-h,0,u,f)}c.fill()}),e.useMediaCoordinateSpace(({context:c})=>{const o=s.C+s.T+s.L+s.P/2;c.textAlign="center",c.textBaseline="middle",c.fillStyle=this.$(),c.font=this._p();for(const d of n)if(d.weight<r){const u=d.needAlignCoordinate?this.Ym(c,d.coord,d.label):d.coord;c.fillText(d.label,u,o)}this.Qd.W().timeScale.allowBoldLabels&&(c.font=this.Zm());for(const d of n)if(d.weight>=r){const u=d.needAlignCoordinate?this.Ym(c,d.coord,d.label):d.coord;c.fillText(d.label,u,o)}})}Ym(e,i,n){const r=this.Fv.xi(e,n),s=r/2,l=Math.floor(i-s)+.5;return l<0?i+=Math.abs(0-l):l+r>this.Ev.width&&(i-=Math.abs(this.Ev.width-(l+r))),i}Um(e,i){const n=this.jm();for(const r of e)for(const s of r.Qi())s.gt().X(i,n)}qm(){return this.Qd.W().timeScale.borderColor}$(){return this.cn.textColor}j(){return this.cn.fontSize}_p(){return Mn(this.j(),this.cn.fontFamily)}Zm(){return Mn(this.j(),this.cn.fontFamily,"bold")}jm(){this.k===null&&(this.k={C:1,N:NaN,L:NaN,B:NaN,ji:NaN,T:5,P:NaN,R:"",Wi:new Ar,Hm:0});const e=this.k,i=this._p();if(e.R!==i){const n=this.j();e.P=n,e.R=i,e.L=3*n/12,e.B=3*n/12,e.ji=9*n/12,e.N=0,e.Hm=4*n/12,e.Wi.nr()}return this.k}kp(e){this.Kv.style.cursor=e===1?"ew-resize":"default"}zm(){const e=this.Qd.$t(),i=e.W();i.leftPriceScale.visible||this.Rm===null||(this.Bm.removeChild(this.Rm.lp()),this.Rm.S(),this.Rm=null),i.rightPriceScale.visible||this.Dm===null||(this.Am.removeChild(this.Dm.lp()),this.Dm.S(),this.Dm=null);const n={ud:this.Qd.$t().ud()},r=()=>i.leftPriceScale.borderVisible&&e.St().W().borderVisible,s=()=>e.bd();i.leftPriceScale.visible&&this.Rm===null&&(this.Rm=new Lh("left",i,n,r,s),this.Bm.appendChild(this.Rm.lp())),i.rightPriceScale.visible&&this.Dm===null&&(this.Dm=new Lh("right",i,n,r,s),this.Am.appendChild(this.Dm.lp()))}}const my=!!Tn&&!!navigator.userAgentData&&navigator.userAgentData.brands.some(t=>t.brand.includes("Chromium"))&&!!Tn&&(!((Rl=navigator==null?void 0:navigator.userAgentData)===null||Rl===void 0)&&Rl.platform?navigator.userAgentData.platform==="Windows":navigator.userAgent.toLowerCase().indexOf("win")>=0);var Rl;class gy{constructor(e,i,n){var r;this.Xm=[],this.Km=0,this.ho=0,this.__=0,this.Gm=0,this.Jm=0,this.Qm=null,this.tb=!1,this.Vp=new be,this.Op=new be,this.Rc=new be,this.ib=null,this.nb=null,this.Jd=e,this.cn=i,this.q_=n,this.Xd=document.createElement("div"),this.Xd.classList.add("tv-lightweight-charts"),this.Xd.style.overflow="hidden",this.Xd.style.direction="ltr",this.Xd.style.width="100%",this.Xd.style.height="100%",(r=this.Xd).style.userSelect="none",r.style.webkitUserSelect="none",r.style.msUserSelect="none",r.style.MozUserSelect="none",r.style.webkitTapHighlightColor="transparent",this.sb=document.createElement("table"),this.sb.setAttribute("cellspacing","0"),this.Xd.appendChild(this.sb),this.eb=this.rb.bind(this),Al(this.cn)&&this.hb(!0),this.$i=new Zb(this.Vc.bind(this),this.cn,n),this.$t().Xc().l(this.lb.bind(this),this),this.ab=new py(this,this.q_),this.sb.appendChild(this.ab.lp());const s=i.autoSize&&this.ob();let l=this.cn.width,c=this.cn.height;if(s||l===0||c===0){const o=e.getBoundingClientRect();l=l||o.width,c=c||o.height}this._b(l,c),this.ub(),e.appendChild(this.Xd),this.cb(),this.$i.St().ec().l(this.$i.Kl.bind(this.$i),this),this.$i.g_().l(this.$i.Kl.bind(this.$i),this)}$t(){return this.$i}W(){return this.cn}Yp(){return this.Xm}fb(){return this.ab}S(){this.hb(!1),this.Km!==0&&window.cancelAnimationFrame(this.Km),this.$i.Xc().p(this),this.$i.St().ec().p(this),this.$i.g_().p(this),this.$i.S();for(const e of this.Xm)this.sb.removeChild(e.lp()),e.lm().p(this),e.am().p(this),e.S();this.Xm=[],M(this.ab).S(),this.Xd.parentElement!==null&&this.Xd.parentElement.removeChild(this.Xd),this.Rc.S(),this.Vp.S(),this.Op.S(),this.pb()}_b(e,i,n=!1){if(this.ho===i&&this.__===e)return;const r=function(c){const o=Math.floor(c.width),d=Math.floor(c.height);return oe({width:o-o%2,height:d-d%2})}(oe({width:e,height:i}));this.ho=r.height,this.__=r.width;const s=this.ho+"px",l=this.__+"px";M(this.Xd).style.height=s,M(this.Xd).style.width=l,this.sb.style.height=s,this.sb.style.width=l,n?this.mb(Me.es(),performance.now()):this.$i.Kl()}vp(e){e===void 0&&(e=Me.es());for(let i=0;i<this.Xm.length;i++)this.Xm[i].vp(e.Hn(i).Fn);this.cn.timeScale.visible&&this.ab.vp(e.jn())}$h(e){const i=Al(this.cn);this.$i.$h(e);const n=Al(this.cn);n!==i&&this.hb(n),this.cb(),this.bb(e)}lm(){return this.Vp}am(){return this.Op}Xc(){return this.Rc}wb(){this.Qm!==null&&(this.mb(this.Qm,performance.now()),this.Qm=null);const e=this.gb(null),i=document.createElement("canvas");i.width=e.width,i.height=e.height;const n=M(i.getContext("2d"));return this.gb(n),i}Mb(e){return e==="left"&&!this.xb()||e==="right"&&!this.Sb()||this.Xm.length===0?0:M(e==="left"?this.Xm[0].wm():this.Xm[0].gm()).dp()}kb(){return this.cn.autoSize&&this.ib!==null}yb(){return this.Xd}Qp(e){this.nb=e,this.nb?this.yb().style.setProperty("cursor",e):this.yb().style.removeProperty("cursor")}Cb(){return this.nb}Tb(){return Fe(this.Xm[0]).um()}bb(e){(e.autoSize!==void 0||!this.ib||e.width===void 0&&e.height===void 0)&&(e.autoSize&&!this.ib&&this.ob(),e.autoSize===!1&&this.ib!==null&&this.pb(),e.autoSize||e.width===void 0&&e.height===void 0||this._b(e.width||this.__,e.height||this.ho))}gb(e){let i=0,n=0;const r=this.Xm[0],s=(c,o)=>{let d=0;for(let u=0;u<this.Xm.length;u++){const h=this.Xm[u],f=M(c==="left"?h.wm():h.gm()),g=f.xp();e!==null&&f.Sp(e,o,d),d+=g.height}};this.xb()&&(s("left",0),i+=M(r.wm()).xp().width);for(let c=0;c<this.Xm.length;c++){const o=this.Xm[c],d=o.xp();e!==null&&o.Sp(e,i,n),n+=d.height}i+=r.xp().width,this.Sb()&&(s("right",i),i+=M(r.gm()).xp().width);const l=(c,o,d)=>{M(c==="left"?this.ab.Lm():this.ab.Em()).Sp(M(e),o,d)};if(this.cn.timeScale.visible){const c=this.ab.xp();if(e!==null){let o=0;this.xb()&&(l("left",o,n),o=M(r.wm()).xp().width),this.ab.Sp(e,o,n),o+=c.width,this.Sb()&&l("right",o,n)}n+=c.height}return oe({width:i,height:n})}Pb(){let e=0,i=0,n=0;for(const p of this.Xm)this.xb()&&(i=Math.max(i,M(p.wm()).op(),this.cn.leftPriceScale.minimumWidth)),this.Sb()&&(n=Math.max(n,M(p.gm()).op(),this.cn.rightPriceScale.minimumWidth)),e+=p.M_();i=Wo(i),n=Wo(n);const r=this.__,s=this.ho,l=Math.max(r-i-n,0),c=this.cn.timeScale.visible;let o=c?Math.max(this.ab.Wm(),this.cn.timeScale.minimumHeight):0;var d;o=(d=o)+d%2;const u=0+o,h=s<u?0:s-u,f=h/e;let g=0;for(let p=0;p<this.Xm.length;++p){const x=this.Xm[p];x.qp(this.$i.qc()[p]);let y=0,v=0;v=p===this.Xm.length-1?h-g:Math.round(x.M_()*f),y=Math.max(v,2),g+=y,x.cp(oe({width:l,height:y})),this.xb()&&x._m(i,"left"),this.Sb()&&x._m(n,"right"),x.fp()&&this.$i.Kc(x.fp(),y)}this.ab.Fm(oe({width:c?l:0,height:o}),c?i:0,c?n:0),this.$i.S_(l),this.Gm!==i&&(this.Gm=i),this.Jm!==n&&(this.Jm=n)}hb(e){e?this.Xd.addEventListener("wheel",this.eb,{passive:!1}):this.Xd.removeEventListener("wheel",this.eb)}Rb(e){switch(e.deltaMode){case e.DOM_DELTA_PAGE:return 120;case e.DOM_DELTA_LINE:return 32}return my?1/window.devicePixelRatio:1}rb(e){if(!(e.deltaX!==0&&this.cn.handleScroll.mouseWheel||e.deltaY!==0&&this.cn.handleScale.mouseWheel))return;const i=this.Rb(e),n=i*e.deltaX/100,r=-i*e.deltaY/100;if(e.cancelable&&e.preventDefault(),r!==0&&this.cn.handleScale.mouseWheel){const s=Math.sign(r)*Math.min(1,Math.abs(r)),l=e.clientX-this.Xd.getBoundingClientRect().left;this.$t().Qc(l,s)}n!==0&&this.cn.handleScroll.mouseWheel&&this.$t().td(-80*n)}mb(e,i){var n;const r=e.jn();r===3&&this.Db(),r!==3&&r!==2||(this.Vb(e),this.Ob(e,i),this.ab.bt(),this.Xm.forEach(s=>{s.Xp()}),((n=this.Qm)===null||n===void 0?void 0:n.jn())===3&&(this.Qm.ts(e),this.Db(),this.Vb(this.Qm),this.Ob(this.Qm,i),e=this.Qm,this.Qm=null)),this.vp(e)}Ob(e,i){for(const n of e.Qn())this.ns(n,i)}Vb(e){const i=this.$i.qc();for(let n=0;n<i.length;n++)e.Hn(n).Wn&&i[n].N_()}ns(e,i){const n=this.$i.St();switch(e.qn){case 0:n.hc();break;case 1:n.lc(e.Vt);break;case 2:n.Gn(e.Vt);break;case 3:n.Jn(e.Vt);break;case 4:n.qu();break;case 5:e.Vt.Qu(i)||n.Jn(e.Vt.tc(i))}}Vc(e){this.Qm!==null?this.Qm.ts(e):this.Qm=e,this.tb||(this.tb=!0,this.Km=window.requestAnimationFrame(i=>{if(this.tb=!1,this.Km=0,this.Qm!==null){const n=this.Qm;this.Qm=null,this.mb(n,i);for(const r of n.Qn())if(r.qn===5&&!r.Vt.Qu(i)){this.$t().Zn(r.Vt);break}}}))}Db(){this.ub()}ub(){const e=this.$i.qc(),i=e.length,n=this.Xm.length;for(let r=i;r<n;r++){const s=Fe(this.Xm.pop());this.sb.removeChild(s.lp()),s.lm().p(this),s.am().p(this),s.S()}for(let r=n;r<i;r++){const s=new hd(this,e[r]);s.lm().l(this.Bb.bind(this),this),s.am().l(this.Ab.bind(this),this),this.Xm.push(s),this.sb.insertBefore(s.lp(),this.ab.lp())}for(let r=0;r<i;r++){const s=e[r],l=this.Xm[r];l.fp()!==s?l.qp(s):l.Up()}this.cb(),this.Pb()}Ib(e,i,n){var r;const s=new Map;e!==null&&this.$i.wt().forEach(u=>{const h=u.In().ll(e);h!==null&&s.set(u,h)});let l;if(e!==null){const u=(r=this.$i.St().Ui(e))===null||r===void 0?void 0:r.originalTime;u!==void 0&&(l=u)}const c=this.$t().Wc(),o=c!==null&&c.Hc instanceof cd?c.Hc:void 0,d=c!==null&&c.Iv!==void 0?c.Iv.gr:void 0;return{zb:l,ee:e??void 0,Lb:i??void 0,Eb:o,Nb:s,Fb:d,Wb:n??void 0}}Bb(e,i,n){this.Vp.m(()=>this.Ib(e,i,n))}Ab(e,i,n){this.Op.m(()=>this.Ib(e,i,n))}lb(e,i,n){this.Rc.m(()=>this.Ib(e,i,n))}cb(){const e=this.cn.timeScale.visible?"":"none";this.ab.lp().style.display=e}xb(){return this.Xm[0].fp().R_().W().visible}Sb(){return this.Xm[0].fp().D_().W().visible}ob(){return"ResizeObserver"in window&&(this.ib=new ResizeObserver(e=>{const i=e.find(n=>n.target===this.Jd);i&&this._b(i.contentRect.width,i.contentRect.height)}),this.ib.observe(this.Jd,{box:"border-box"}),!0)}pb(){this.ib!==null&&this.ib.disconnect(),this.ib=null}}function Al(t){return!!(t.handleScroll.mouseWheel||t.handleScale.mouseWheel)}function xy(t){return function(e){return e.open!==void 0}(t)||function(e){return e.value!==void 0}(t)}function ag(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]])}return i}function Rh(t,e,i,n){const r=i.value,s={ee:e,ot:t,Vt:[r,r,r,r],zb:n};return i.color!==void 0&&(s.V=i.color),s}function vy(t,e,i,n){const r=i.value,s={ee:e,ot:t,Vt:[r,r,r,r],zb:n};return i.lineColor!==void 0&&(s.lt=i.lineColor),i.topColor!==void 0&&(s.Ps=i.topColor),i.bottomColor!==void 0&&(s.Rs=i.bottomColor),s}function by(t,e,i,n){const r=i.value,s={ee:e,ot:t,Vt:[r,r,r,r],zb:n};return i.topLineColor!==void 0&&(s.Re=i.topLineColor),i.bottomLineColor!==void 0&&(s.De=i.bottomLineColor),i.topFillColor1!==void 0&&(s.ke=i.topFillColor1),i.topFillColor2!==void 0&&(s.ye=i.topFillColor2),i.bottomFillColor1!==void 0&&(s.Ce=i.bottomFillColor1),i.bottomFillColor2!==void 0&&(s.Te=i.bottomFillColor2),s}function yy(t,e,i,n){const r={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(r.V=i.color),r}function wy(t,e,i,n){const r={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(r.V=i.color),i.borderColor!==void 0&&(r.Ot=i.borderColor),i.wickColor!==void 0&&(r.Xh=i.wickColor),r}function ky(t,e,i,n,r){const s=Fe(r)(i),l=Math.max(...s),c=Math.min(...s),o=s[s.length-1],d=[o,l,c,o],u=i,{time:h,color:f}=u;return{ee:e,ot:t,Vt:d,zb:n,$e:ag(u,["time","color"]),V:f}}function ws(t){return t.Vt!==void 0}function Ah(t,e){return e.customValues!==void 0&&(t.jb=e.customValues),t}function ki(t){return(e,i,n,r,s,l)=>function(c,o){return o?o(c):(d=c).open===void 0&&d.value===void 0;var d}(n,l)?Ah({ot:e,ee:i,zb:r},n):Ah(t(e,i,n,r,s),n)}function $h(t){return{Candlestick:ki(wy),Bar:ki(yy),Area:ki(vy),Baseline:ki(by),Histogram:ki(Rh),Line:ki(Rh),Custom:ki(ky)}[t]}function Dh(t){return{ee:0,Hb:new Map,la:t}}function Bh(t,e){if(t!==void 0&&t.length!==0)return{$b:e.key(t[0].ot),Ub:e.key(t[t.length-1].ot)}}function Ih(t){let e;return t.forEach(i=>{e===void 0&&(e=i.zb)}),Fe(e)}class jy{constructor(e){this.qb=new Map,this.Yb=new Map,this.Zb=new Map,this.Xb=[],this.q_=e}S(){this.qb.clear(),this.Yb.clear(),this.Zb.clear(),this.Xb=[]}Kb(e,i){let n=this.qb.size!==0,r=!1;const s=this.Yb.get(e);if(s!==void 0)if(this.Yb.size===1)n=!1,r=!0,this.qb.clear();else for(const o of this.Xb)o.pointData.Hb.delete(e)&&(r=!0);let l=[];if(i.length!==0){const o=i.map(g=>g.time),d=this.q_.createConverterToInternalObj(i),u=$h(e.Qh()),h=e.Ca(),f=e.Ta();l=i.map((g,p)=>{const x=d(g.time),y=this.q_.key(x);let v=this.qb.get(y);v===void 0&&(v=Dh(x),this.qb.set(y,v),r=!0);const m=u(x,v.ee,g,o[p],h,f);return v.Hb.set(e,m),m})}n&&this.Gb(),this.Jb(e,l);let c=-1;if(r){const o=[];this.qb.forEach(d=>{o.push({timeWeight:0,time:d.la,pointData:d,originalTime:Ih(d.Hb)})}),o.sort((d,u)=>this.q_.key(d.time)-this.q_.key(u.time)),c=this.Qb(o)}return this.tw(e,c,function(o,d,u){const h=Bh(o,u),f=Bh(d,u);if(h!==void 0&&f!==void 0)return{ta:h.Ub>=f.Ub&&h.$b>=f.$b}}(this.Yb.get(e),s,this.q_))}vd(e){return this.Kb(e,[])}iw(e,i){const n=i;(function(x){x.zb===void 0&&(x.zb=x.time)})(n),this.q_.preprocessData(i);const r=this.q_.createConverterToInternalObj([i])(i.time),s=this.Zb.get(e);if(s!==void 0&&this.q_.key(r)<this.q_.key(s))throw new Error(`Cannot update oldest data, last time=${s}, new time=${r}`);let l=this.qb.get(this.q_.key(r));const c=l===void 0;l===void 0&&(l=Dh(r),this.qb.set(this.q_.key(r),l));const o=$h(e.Qh()),d=e.Ca(),u=e.Ta(),h=o(r,l.ee,i,n.zb,d,u);l.Hb.set(e,h),this.nw(e,h);const f={ta:ws(h)};if(!c)return this.tw(e,-1,f);const g={timeWeight:0,time:l.la,pointData:l,originalTime:Ih(l.Hb)},p=Hr(this.Xb,this.q_.key(g.time),(x,y)=>this.q_.key(x.time)<y);this.Xb.splice(p,0,g);for(let x=p;x<this.Xb.length;++x)$l(this.Xb[x].pointData,x);return this.q_.fillWeightsForPoints(this.Xb,p),this.tw(e,p,f)}nw(e,i){let n=this.Yb.get(e);n===void 0&&(n=[],this.Yb.set(e,n));const r=n.length!==0?n[n.length-1]:null;r===null||this.q_.key(i.ot)>this.q_.key(r.ot)?ws(i)&&n.push(i):ws(i)?n[n.length-1]=i:n.splice(-1,1),this.Zb.set(e,i.ot)}Jb(e,i){i.length!==0?(this.Yb.set(e,i.filter(ws)),this.Zb.set(e,i[i.length-1].ot)):(this.Yb.delete(e),this.Zb.delete(e))}Gb(){for(const e of this.Xb)e.pointData.Hb.size===0&&this.qb.delete(this.q_.key(e.time))}Qb(e){let i=-1;for(let n=0;n<this.Xb.length&&n<e.length;++n){const r=this.Xb[n],s=e[n];if(this.q_.key(r.time)!==this.q_.key(s.time)){i=n;break}s.timeWeight=r.timeWeight,$l(s.pointData,n)}if(i===-1&&this.Xb.length!==e.length&&(i=Math.min(this.Xb.length,e.length)),i===-1)return-1;for(let n=i;n<e.length;++n)$l(e[n].pointData,n);return this.q_.fillWeightsForPoints(e,i),this.Xb=e,i}sw(){if(this.Yb.size===0)return null;let e=0;return this.Yb.forEach(i=>{i.length!==0&&(e=Math.max(e,i[i.length-1].ee))}),e}tw(e,i,n){const r={ew:new Map,St:{Eu:this.sw()}};if(i!==-1)this.Yb.forEach((s,l)=>{r.ew.set(l,{$e:s,rw:l===e?n:void 0})}),this.Yb.has(e)||r.ew.set(e,{$e:[],rw:n}),r.St.hw=this.Xb,r.St.lw=i;else{const s=this.Yb.get(e);r.ew.set(e,{$e:s||[],rw:n})}return r}}function $l(t,e){t.ee=e,t.Hb.forEach(i=>{i.ee=e})}function pd(t){const e={value:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function Oh(t){const e=pd(t);return t.V!==void 0&&(e.color=t.V),e}function Ny(t){const e=pd(t);return t.lt!==void 0&&(e.lineColor=t.lt),t.Ps!==void 0&&(e.topColor=t.Ps),t.Rs!==void 0&&(e.bottomColor=t.Rs),e}function Sy(t){const e=pd(t);return t.Re!==void 0&&(e.topLineColor=t.Re),t.De!==void 0&&(e.bottomLineColor=t.De),t.ke!==void 0&&(e.topFillColor1=t.ke),t.ye!==void 0&&(e.topFillColor2=t.ye),t.Ce!==void 0&&(e.bottomFillColor1=t.Ce),t.Te!==void 0&&(e.bottomFillColor2=t.Te),e}function lg(t){const e={open:t.Vt[0],high:t.Vt[1],low:t.Vt[2],close:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function Cy(t){const e=lg(t);return t.V!==void 0&&(e.color=t.V),e}function Ey(t){const e=lg(t),{V:i,Ot:n,Xh:r}=t;return i!==void 0&&(e.color=i),n!==void 0&&(e.borderColor=n),r!==void 0&&(e.wickColor=r),e}function Ho(t){return{Area:Ny,Line:Oh,Baseline:Sy,Histogram:Oh,Bar:Cy,Candlestick:Ey,Custom:zy}[t]}function zy(t){const e=t.zb;return Object.assign(Object.assign({},t.$e),{time:e})}const My={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1},Ty={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},_y={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:nd,attributionLogo:!0},Dl={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0},Py={rightOffset:0,barSpacing:6,minBarSpacing:.5,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0},Ly={color:"rgba(0, 0, 0, 0)",visible:!1,fontSize:48,fontFamily:nd,fontStyle:"",text:"",horzAlign:"center",vertAlign:"center"};function Fh(){return{width:0,height:0,autoSize:!1,layout:_y,crosshair:My,grid:Ty,overlayPriceScales:Object.assign({},Dl),leftPriceScale:Object.assign(Object.assign({},Dl),{visible:!1}),rightPriceScale:Object.assign(Object.assign({},Dl),{visible:!0}),timeScale:Py,watermark:Ly,localization:{locale:Tn?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class Ry{constructor(e,i){this.aw=e,this.ow=i}applyOptions(e){this.aw.$t().$c(this.ow,e)}options(){return this.Li().W()}width(){return $a(this.ow)?this.aw.Mb(this.ow):0}Li(){return M(this.aw.$t().Uc(this.ow)).Dt}}function Vh(t,e,i){const n=ag(t,["time","originalTime"]),r=Object.assign({time:e},n);return i!==void 0&&(r.originalTime=i),r}const Ay={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class $y{constructor(e){this.Nh=e}applyOptions(e){this.Nh.$h(e)}options(){return this.Nh.W()}_w(){return this.Nh}}class Dy{constructor(e,i,n,r,s){this.uw=new be,this.Es=e,this.cw=i,this.dw=n,this.q_=s,this.fw=r}S(){this.uw.S()}priceFormatter(){return this.Es.ba()}priceToCoordinate(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().Rt(e,i.Vt)}coordinateToPrice(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().pn(e,i.Vt)}barsInLogicalRange(e){if(e===null)return null;const i=new yn(new ur(e.from,e.to)).lu(),n=this.Es.In();if(n.Ni())return null;const r=n.ll(i.Os(),1),s=n.ll(i.ui(),-1),l=M(n.el()),c=M(n.An());if(r!==null&&s!==null&&r.ee>s.ee)return{barsBefore:e.from-l,barsAfter:c-e.to};const o={barsBefore:r===null||r.ee===l?e.from-l:r.ee-l,barsAfter:s===null||s.ee===c?c-e.to:c-s.ee};return r!==null&&s!==null&&(o.from=r.zb,o.to=s.zb),o}setData(e){this.q_,this.Es.Qh(),this.cw.pw(this.Es,e),this.mw("full")}update(e){this.Es.Qh(),this.cw.bw(this.Es,e),this.mw("update")}dataByIndex(e,i){const n=this.Es.In().ll(e,i);return n===null?null:Ho(this.seriesType())(n)}data(){const e=Ho(this.seriesType());return this.Es.In().ne().map(i=>e(i))}subscribeDataChanged(e){this.uw.l(e)}unsubscribeDataChanged(e){this.uw.v(e)}setMarkers(e){this.q_;const i=e.map(n=>Vh(n,this.q_.convertHorzItemToInternal(n.time),n.time));this.Es.na(i)}markers(){return this.Es.sa().map(e=>Vh(e,e.originalTime,void 0))}applyOptions(e){this.Es.$h(e)}options(){return At(this.Es.W())}priceScale(){return this.dw.priceScale(this.Es.Dt().Pa())}createPriceLine(e){const i=yt(At(Ay),e),n=this.Es.ea(i);return new $y(n)}removePriceLine(e){this.Es.ra(e._w())}seriesType(){return this.Es.Qh()}attachPrimitive(e){this.Es.ka(e),e.attached&&e.attached({chart:this.fw,series:this,requestUpdate:()=>this.Es.$t().Kl()})}detachPrimitive(e){this.Es.ya(e),e.detached&&e.detached()}mw(e){this.uw.M()&&this.uw.m(e)}}class By{constructor(e,i,n){this.ww=new be,this.mu=new be,this.Om=new be,this.$i=e,this.yl=e.St(),this.ab=i,this.yl.nc().l(this.gw.bind(this)),this.yl.sc().l(this.Mw.bind(this)),this.ab.Nm().l(this.xw.bind(this)),this.q_=n}S(){this.yl.nc().p(this),this.yl.sc().p(this),this.ab.Nm().p(this),this.ww.S(),this.mu.S(),this.Om.S()}scrollPosition(){return this.yl.Hu()}scrollToPosition(e,i){i?this.yl.Ju(e,1e3):this.$i.Jn(e)}scrollToRealTime(){this.yl.Gu()}getVisibleRange(){const e=this.yl.Vu();return e===null?null:{from:e.from.originalTime,to:e.to.originalTime}}setVisibleRange(e){const i={from:this.q_.convertHorzItemToInternal(e.from),to:this.q_.convertHorzItemToInternal(e.to)},n=this.yl.Iu(i);this.$i.pd(n)}getVisibleLogicalRange(){const e=this.yl.Du();return e===null?null:{from:e.Os(),to:e.ui()}}setVisibleLogicalRange(e){hi(e.from<=e.to,"The from index cannot be after the to index."),this.$i.pd(e)}resetTimeScale(){this.$i.Kn()}fitContent(){this.$i.hc()}logicalToCoordinate(e){const i=this.$i.St();return i.Ni()?null:i.It(e)}coordinateToLogical(e){return this.yl.Ni()?null:this.yl.Nu(e)}timeToCoordinate(e){const i=this.q_.convertHorzItemToInternal(e),n=this.yl.Va(i,!1);return n===null?null:this.yl.It(n)}coordinateToTime(e){const i=this.$i.St(),n=i.Nu(e),r=i.Ui(n);return r===null?null:r.originalTime}width(){return this.ab.um().width}height(){return this.ab.um().height}subscribeVisibleTimeRangeChange(e){this.ww.l(e)}unsubscribeVisibleTimeRangeChange(e){this.ww.v(e)}subscribeVisibleLogicalRangeChange(e){this.mu.l(e)}unsubscribeVisibleLogicalRangeChange(e){this.mu.v(e)}subscribeSizeChange(e){this.Om.l(e)}unsubscribeSizeChange(e){this.Om.v(e)}applyOptions(e){this.yl.$h(e)}options(){return Object.assign(Object.assign({},At(this.yl.W())),{barSpacing:this.yl.le()})}gw(){this.ww.M()&&this.ww.m(this.getVisibleRange())}Mw(){this.mu.M()&&this.mu.m(this.getVisibleLogicalRange())}xw(e){this.Om.m(e.width,e.height)}}function Iy(t){if(t===void 0||t.type==="custom")return;const e=t;e.minMove!==void 0&&e.precision===void 0&&(e.precision=function(i){if(i>=1)return 0;let n=0;for(;n<8;n++){const r=Math.round(i);if(Math.abs(r-i)<1e-8)return n;i*=10}return n}(e.minMove))}function Wh(t){return function(e){if(hs(e.handleScale)){const n=e.handleScale;e.handleScale={axisDoubleClickReset:{time:n,price:n},axisPressedMouseMove:{time:n,price:n},mouseWheel:n,pinch:n}}else if(e.handleScale!==void 0){const{axisPressedMouseMove:n,axisDoubleClickReset:r}=e.handleScale;hs(n)&&(e.handleScale.axisPressedMouseMove={time:n,price:n}),hs(r)&&(e.handleScale.axisDoubleClickReset={time:r,price:r})}const i=e.handleScroll;hs(i)&&(e.handleScroll={horzTouchDrag:i,vertTouchDrag:i,mouseWheel:i,pressedMouseMove:i})}(t),t}class Oy{constructor(e,i,n){this.Sw=new Map,this.kw=new Map,this.yw=new be,this.Cw=new be,this.Tw=new be,this.Pw=new jy(i);const r=n===void 0?At(Fh()):yt(At(Fh()),Wh(n));this.q_=i,this.aw=new gy(e,r,i),this.aw.lm().l(l=>{this.yw.M()&&this.yw.m(this.Rw(l()))},this),this.aw.am().l(l=>{this.Cw.M()&&this.Cw.m(this.Rw(l()))},this),this.aw.Xc().l(l=>{this.Tw.M()&&this.Tw.m(this.Rw(l()))},this);const s=this.aw.$t();this.Dw=new By(s,this.aw.fb(),this.q_)}remove(){this.aw.lm().p(this),this.aw.am().p(this),this.aw.Xc().p(this),this.Dw.S(),this.aw.S(),this.Sw.clear(),this.kw.clear(),this.yw.S(),this.Cw.S(),this.Tw.S(),this.Pw.S()}resize(e,i,n){this.autoSizeActive()||this.aw._b(e,i,n)}addCustomSeries(e,i){const n=hn(e),r=Object.assign(Object.assign({},$m),n.defaultOptions());return this.Vw("Custom",r,i,n)}addAreaSeries(e){return this.Vw("Area",j2,e)}addBaselineSeries(e){return this.Vw("Baseline",N2,e)}addBarSeries(e){return this.Vw("Bar",w2,e)}addCandlestickSeries(e={}){return function(i){i.borderColor!==void 0&&(i.borderUpColor=i.borderColor,i.borderDownColor=i.borderColor),i.wickColor!==void 0&&(i.wickUpColor=i.wickColor,i.wickDownColor=i.wickColor)}(e),this.Vw("Candlestick",y2,e)}addHistogramSeries(e){return this.Vw("Histogram",S2,e)}addLineSeries(e){return this.Vw("Line",k2,e)}removeSeries(e){const i=Fe(this.Sw.get(e)),n=this.Pw.vd(i);this.aw.$t().vd(i),this.Ow(n),this.Sw.delete(e),this.kw.delete(i)}pw(e,i){this.Ow(this.Pw.Kb(e,i))}bw(e,i){this.Ow(this.Pw.iw(e,i))}subscribeClick(e){this.yw.l(e)}unsubscribeClick(e){this.yw.v(e)}subscribeCrosshairMove(e){this.Tw.l(e)}unsubscribeCrosshairMove(e){this.Tw.v(e)}subscribeDblClick(e){this.Cw.l(e)}unsubscribeDblClick(e){this.Cw.v(e)}priceScale(e){return new Ry(this.aw,e)}timeScale(){return this.Dw}applyOptions(e){this.aw.$h(Wh(e))}options(){return this.aw.W()}takeScreenshot(){return this.aw.wb()}autoSizeActive(){return this.aw.kb()}chartElement(){return this.aw.yb()}paneSize(){const e=this.aw.Tb();return{height:e.height,width:e.width}}setCrosshairPosition(e,i,n){const r=this.Sw.get(n);if(r===void 0)return;const s=this.aw.$t().dr(r);s!==null&&this.aw.$t().ad(e,i,s)}clearCrosshairPosition(){this.aw.$t().od(!0)}Vw(e,i,n={},r){Iy(n.priceFormat);const s=yt(At(Dm),At(i),n),l=this.aw.$t().dd(e,s,r),c=new Dy(l,this,this,this,this.q_);return this.Sw.set(c,l),this.kw.set(l,c),c}Ow(e){const i=this.aw.$t();i._d(e.St.Eu,e.St.hw,e.St.lw),e.ew.forEach((n,r)=>r.J(n.$e,n.rw)),i.Wu()}Bw(e){return Fe(this.kw.get(e))}Rw(e){const i=new Map;e.Nb.forEach((r,s)=>{const l=s.Qh(),c=Ho(l)(r);if(l!=="Custom")hi(xy(c));else{const o=s.Ta();hi(!o||o(c)===!1)}i.set(this.Bw(s),c)});const n=e.Eb!==void 0&&this.kw.has(e.Eb)?this.Bw(e.Eb):void 0;return{time:e.zb,logical:e.ee,point:e.Lb,hoveredSeries:n,hoveredObjectId:e.Fb,seriesData:i,sourceEvent:e.Wb}}}function Fy(t,e,i){let n;if(qr(t)){const s=document.getElementById(t);hi(s!==null,`Cannot find element in DOM with id=${t}`),n=s}else n=t;const r=new Oy(n,e,i);return e.setOptions(r.options()),r}function Vy(t,e){return Fy(t,new zh,zh.Id(e))}Object.assign(Object.assign({},Dm),$m);const ks=[{label:"1m",value:"1m",tradeSeconds:60},{label:"5m",value:"5m",tradeSeconds:300},{label:"15m",value:"15m",tradeSeconds:900},{label:"1h",value:"1h",tradeSeconds:3600},{label:"4h",value:"4h",tradeSeconds:14400},{label:"1D",value:"1D",tradeSeconds:86400}],Wy=[1,2,3,5,10],Uy=[50,100,250,500];function Uh(t){return Number(t||Math.floor(Date.now()/1e3))}function qh(t){return typeof t=="number"&&Number.isFinite(t)&&t>0}function Hh(t){const e=new Set;return t.filter(i=>{const n=`${String(i.id||"")}:${String(i.time)}:${i.text||""}`;return e.has(n)?!1:(e.add(n),!0)})}function Bl(t){const e=Math.floor(t/86400),i=Math.floor(t%86400/3600),n=Math.floor(t%3600/60),r=t%60;return e>0?`${e}d ${i}h ${n}m`:i>0?`${i}h ${n}m ${r}s`:n>0?`${n}m ${r}s`:`${r}s`}function Kh(t){if(!t)return"Inactive";const e=new Date(t).getTime()-Date.now();if(e<=0)return"Expired";const i=Math.floor(e/(1e3*60*60)),n=Math.floor(i/24);return n>0?`${n}d ${i%24}h left`:`${i}h left`}const Xh=.3;function qy(){var gd,xd;const{user:t,updateUser:e}=vi(),{btcPrice:i,btcChange24h:n,btcHigh24h:r,btcLow24h:s,trades:l,activeTrade:c,lastTradeResult:o,startTrade:d,clearTradeResult:u,addTrade:h}=Kr(),f=k.useRef(null),g=k.useRef(null),p=k.useRef(null),x=k.useRef(null),y=k.useRef(null),[v,m]=k.useState("1m"),[b,w]=k.useState(null),[j,_]=k.useState(2),[C,P]=k.useState("100"),[U,R]=k.useState("normal"),[V,S]=k.useState(!1),[Q,ke]=k.useState("normal"),[De,Pe]=k.useState("100"),[Be,A]=k.useState(()=>Date.now()),[O,W]=k.useState([]),[G,I]=k.useState(!0),[$,E]=k.useState(null),L=(gd=O[O.length-1])==null?void 0:gd.candle,N=(L==null?void 0:L.close)??i,q=((xd=O[O.length-1])==null?void 0:xd.volume.value)??0,K=b?parseFloat(C||"0")*(Xh/100)*j:0,Z=parseFloat(C||"0")*(Xh/100)*j,te=ks.find(z=>z.value===v)??ks[0],Se=ks.find(z=>z.value===(c==null?void 0:c.timeframeValue))??te,de=!!(c&&t&&c.userEmail===t.email),ht=(t==null?void 0:t.verificationStatus)==="approved",D=t==null?void 0:t.aiTrading,Ye=Zc(Q),kt=parseFloat(De||"0"),bi=D!=null&&D.active&&D.lockedAmount||0,Bn=Math.max(0,((t==null?void 0:t.usdBalance)||0)-bi),Hi=c?Math.max(0,Math.ceil((new Date(c.endTime).getTime()-Be)/1e3)):0,ie=c?jm({entryPrice:c.entryPrice,exitPrice:N,amount:c.amount,leverageValue:c.leverage,tradeDirection:c.direction}):null,yi=k.useMemo(()=>l.filter(z=>z.userEmail===(t==null?void 0:t.email)),[l,t==null?void 0:t.email]),Ki=k.useMemo(()=>yi.filter(z=>z.source!=="ai"),[yi]),Ia=k.useMemo(()=>yi.filter(z=>z.source==="ai"),[yi]),vg=k.useMemo(()=>{const z=D!=null&&D.active?"RUNNING":"IDLE",X=(D==null?void 0:D.displayName)||"NO PLAN";return[`AI CORE STATUS :: ${z}`,`PLAN PROFILE  :: ${X}`,`BTC PRICE FEED:: ${N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,`LOCKED CAPITAL:: $${re(bi)}`,`SESSION PROFIT:: $${re((D==null?void 0:D.currentProfit)||0)}`,`AVAILABLE USD :: $${re(Bn)}`,`NEXT ACTION   :: ${D!=null&&D.active?"TRACKING BTC MICRO MOVES":"WAITING FOR AI SESSION"}`,`TRADE WINDOW  :: ${D!=null&&D.active?Kh(D.expiresAt):"NOT STARTED"}`]},[D,Bn,N,bi]),md=k.useMemo(()=>{const z=Ki.flatMap(X=>{const ne=[];return qh(X.entryTime)&&ne.push({id:`entry-${X.id}`,time:X.entryTime,position:X.direction==="up"?"belowBar":"aboveBar",shape:X.direction==="up"?"arrowUp":"arrowDown",color:X.direction==="up"?"#0ecb81":"#f6465d",text:`${X.direction==="up"?"BUY":"SELL"} $${re(X.amount)} ${X.leverage}x`}),qh(X.exitTime)&&ne.push({id:`exit-${X.id}`,time:X.exitTime,position:X.status==="won"?"aboveBar":"belowBar",shape:X.status==="won"?"circle":"square",color:X.status==="won"?"#0ecb81":"#f6465d",text:`${X.status==="won"?"WIN":X.outcomeReason==="liquidation"?"LIQ":"LOSS"} ${X.pnl&&X.pnl>=0?"+":"-"}$${re(Math.abs(X.pnl||0))}`}),ne});return!c||c.userEmail!==(t==null?void 0:t.email)?Hh(z):Hh([...z,{id:`live-${c.id}`,time:c.entryTime,position:c.direction==="up"?"belowBar":"aboveBar",shape:c.direction==="up"?"arrowUp":"arrowDown",color:c.direction==="up"?"#0ecb81":"#f6465d",text:`${c.direction==="up"?"BUY":"SELL"} $${re(c.amount)} ${c.leverage}x`}])},[c,Ki,t==null?void 0:t.email]);k.useEffect(()=>{if(!f.current)return;let z;try{z=Vy(f.current,{layout:{background:{color:"#0b0f15"},textColor:"#8ea0b7"},grid:{vertLines:{color:"#19202c"},horzLines:{color:"#19202c"}},crosshair:{mode:1},rightPriceScale:{borderColor:"#1e2735"},timeScale:{borderColor:"#1e2735",timeVisible:!0,secondsVisible:v==="1m"}});const ne=z.addCandlestickSeries({upColor:"#0ecb81",downColor:"#f6465d",borderUpColor:"#0ecb81",borderDownColor:"#f6465d",wickUpColor:"#0ecb81",wickDownColor:"#f6465d"}),ye=z.addHistogramSeries({priceFormat:{type:"volume"},priceScaleId:""});ye.priceScale().applyOptions({scaleMargins:{top:.82,bottom:0}}),g.current=z,p.current=ne,x.current=ye,E(null)}catch(ne){console.error("Trade chart failed to initialize:",ne),E("Live chart unavailable");return}const X=()=>{if(f.current&&g.current)try{g.current.applyOptions({width:f.current.clientWidth,height:f.current.clientHeight})}catch(ne){console.error("Trade chart resize failed:",ne)}};return window.addEventListener("resize",X),X(),()=>{window.removeEventListener("resize",X);try{y.current=null,z.remove()}catch{}}},[]),k.useEffect(()=>{var z;try{(z=g.current)==null||z.applyOptions({timeScale:{secondsVisible:v==="1m"}})}catch(X){console.error("Trade chart option update failed:",X),E("Live chart unavailable")}},[v]),k.useEffect(()=>{if(!p.current||!x.current)return;const z=O.map(ne=>ne.candle),X=O.map(ne=>ne.volume);try{p.current.setData(z),x.current.setData(X),E(null)}catch(ne){console.error("Trade chart data update failed:",ne),E("Live chart unavailable")}},[O]),k.useEffect(()=>{if(p.current)try{p.current.setMarkers(md)}catch(z){console.error("Trade chart marker update failed:",z)}},[md]),k.useEffect(()=>{if(p.current){if(y.current){try{p.current.removePriceLine(y.current)}catch{}y.current=null}if(!(!de||!c)){try{y.current=p.current.createPriceLine({price:c.entryPrice,color:c.direction==="up"?"#0ecb81":"#f6465d",lineWidth:2,lineStyle:2,axisLabelVisible:!0,title:`${c.direction==="up"?"UP":"DOWN"} $${re(c.amount)}`})}catch(z){console.error("Trade entry line failed:",z)}return()=>{if(!(!p.current||!y.current)){try{p.current.removePriceLine(y.current)}catch{}y.current=null}}}}},[c,de]),k.useEffect(()=>{let z=!0;return(async(ne=!1)=>{ne&&I(!0);try{const ye=await m1(v,120);z&&ye.length>0&&W(ye)}catch{z&&W(ye=>ye.length>0?ye:g1(v,i,120))}finally{z&&ne&&I(!1)}})(!0),()=>{z=!1}},[v,i]),k.useEffect(()=>{const z=new WebSocket("wss://ws-feed.exchange.coinbase.com");return z.addEventListener("open",()=>{z.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker"]}))}),z.addEventListener("message",X=>{try{const ne=JSON.parse(X.data);if(ne.type!=="ticker"||!ne.price)return;const ye=Number(ne.price),Ng=ne.time?Math.floor(new Date(ne.time).getTime()/1e3):Math.floor(Date.now()/1e3),vd=h1(v),Oa=Math.floor(Ng/vd)*vd;W(Fa=>{if(Fa.length===0)return Fa;const wi=[...Fa],nt=wi[wi.length-1],Sg=Uh(nt.candle.time);return Oa>Sg?(wi.push({candle:{time:Oa,open:nt.candle.close,high:Math.max(nt.candle.close,ye),low:Math.min(nt.candle.close,ye),close:ye},volume:{time:Oa,value:Math.max(nt.volume.value*.35,32),color:ye>=nt.candle.close?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),wi.slice(-120)):(wi[wi.length-1]={candle:{...nt.candle,high:Math.max(nt.candle.high,ye),low:Math.min(nt.candle.low,ye),close:ye},volume:{...nt.volume,value:nt.volume.value+.75,color:ye>=nt.candle.open?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}},wi)})}catch{}}),()=>{z.close()}},[v]),k.useEffect(()=>{if(!de)return;const z=window.setInterval(()=>A(Date.now()),1e3);return()=>window.clearInterval(z)},[de]);const bg=()=>{if(!b||!C||de)return;if(!ht){alert("Verify your account in Profile before trading.");return}const z=parseFloat(C);if(z>Bn){alert("Insufficient balance");return}const X=Iu(N,j,b),ne=Uh(L==null?void 0:L.time);d({id:`trade-${Date.now()}`,pair:"BTC/USD",direction:b,amount:z,leverage:j,entryPrice:N,liquidationPrice:X,timeframe:te.label,timeframeValue:te.value,tradeSeconds:te.tradeSeconds,entryTime:ne,openedAt:new Date().toISOString(),endTime:new Date(Date.now()+te.tradeSeconds*1e3).toISOString(),userEmail:(t==null?void 0:t.email)||""})},yg=()=>{w(null),u()},wg=()=>{var X,ne,ye;if(!t)return;if(!ht){alert("Verify your account in Profile before using AI trading.");return}if(!De||kt<=0){alert("Enter a valid AI trade amount.");return}if((t.usdBalance||0)<Ye.price+kt){alert("Your USD balance is too low for this AI plan.");return}if((X=t.aiTrading)!=null&&X.active){alert("Stop the current AI trade before starting a new one.");return}const z=c1(Q,kt);e({usdBalance:Math.max(0,t.usdBalance-Ye.price),aiTrading:{...z,totalTrades:((ne=t.aiTrading)==null?void 0:ne.totalTrades)||0,totalProfit:((ye=t.aiTrading)==null?void 0:ye.totalProfit)||0}}),S(!1),R("ai")},kg=()=>{var z;(z=t==null?void 0:t.aiTrading)!=null&&z.active&&(h({id:`ai-stop-${Date.now()}`,pair:"BTC/USD",direction:"up",amount:t.aiTrading.lockedAmount,leverage:1,entryPrice:N,exitPrice:N,entryTime:Math.floor(new Date(t.aiTrading.purchasedAt).getTime()/1e3),exitTime:Math.floor(Date.now()/1e3),timeframe:`AI ${t.aiTrading.tradeWindowHours}h`,status:"won",timestamp:new Date().toISOString(),userEmail:t.email,pnl:t.aiTrading.currentProfit,priceMovePct:0,outcomeReason:"expiry",source:"ai",aiPlanTier:t.aiTrading.tier}),e({aiTrading:{...t.aiTrading,active:!1,lockedAmount:0,lastTradeAt:new Date().toISOString(),totalTrades:(t.aiTrading.totalTrades||0)+1,totalProfit:(t.aiTrading.totalProfit||0)+(t.aiTrading.currentProfit||0)}}))},jg=k.useMemo(()=>b==="up"?"buy":b==="down"?"sell":"neutral",[b]);return a.jsxs(a.Fragment,{children:[V&&a.jsx("div",{className:"fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto bg-[#05070c] p-0 sm:items-center sm:p-6",children:a.jsxs("div",{className:"ai-modal",children:[a.jsxs("div",{className:"ai-modal-head",children:[a.jsxs("div",{children:[a.jsx("div",{className:"ai-modal-kicker",children:"AI Trading Desk"}),a.jsx("h2",{children:"Auto BTC trading subscription"}),a.jsx("p",{children:"The AI trader reads recent BTC price action, opens demo auto-trades on your account, and sends every result into your trade history."})]}),a.jsxs("div",{className:"ai-head-actions",children:[a.jsx("button",{className:"ai-close-btn",onClick:()=>S(!1),children:"Back"}),a.jsx("button",{className:"ai-close-btn",onClick:()=>S(!1),children:"Close"})]})]}),a.jsx("div",{className:"ai-plan-grid",children:Bo.map(z=>a.jsxs("button",{className:`ai-plan-card ${Q===z.tier?"active":""}`,onClick:()=>ke(z.tier),children:[a.jsxs("div",{className:"ai-plan-top",children:[a.jsx("strong",{children:z.name}),a.jsxs("span",{children:["$",re(z.price),"/month"]})]}),a.jsxs("div",{className:"ai-plan-meta",children:[z.tradeWindowHours," hour trading window"]}),a.jsxs("div",{className:"ai-plan-meta",children:[z.leverage,"x AI session profile"]}),a.jsx("p",{children:z.description})]},z.tier))}),a.jsxs("div",{className:"ai-modal-body",children:[a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Auto trade amount"}),a.jsx("input",{value:De,onChange:z=>Pe(z.target.value),className:"amount-input",type:"number",min:"10",placeholder:"100"}),a.jsx("div",{className:"ai-helper-copy",children:"This amount is locked during the AI session. Profit grows slowly at `0.0001` per second for every `1000` in AI trade size."})]}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"What AI trading does"}),a.jsxs("div",{className:"ai-feature-list",children:[a.jsx("div",{className:"ai-feature-row",children:"Locks your selected AI amount so it cannot be used by manual trades while the session is running."}),a.jsx("div",{className:"ai-feature-row",children:"Increases your balance slowly by the AI formula instead of jumping too high too fast."}),a.jsx("div",{className:"ai-feature-row",children:"Writes the finished AI session into trade history when the timer ends or when you stop it."}),a.jsx("div",{className:"ai-feature-row",children:"Lets you check a dedicated AI terminal view on phone and desktop instead of showing AI on the candlestick graph."})]})]})]}),a.jsxs("div",{className:"ai-summary-bar",children:[a.jsxs("div",{children:[a.jsx("strong",{children:Ye.name}),a.jsxs("span",{children:["$",re(Ye.price)," monthly fee • ",Ye.tradeWindowHours,"h window"]})]}),a.jsx("button",{className:"ai-buy-btn",onClick:wg,children:"Buy AI Version"})]})]})}),a.jsxs("div",{className:"trade-shell",children:[a.jsx("style",{children:`
        .trade-shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 20px;
          min-height: calc(100vh - 180px);
        }
        .trade-card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .chart-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 680px;
        }
        .chart-card.ai-mode {
          overflow: visible;
          min-height: auto;
        }
        .chart-top {
          position: sticky;
          top: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 18px 12px;
          background: rgba(12, 16, 24, 0.94);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: nowrap;
        }
        .pair-block {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .pair-inline {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
          flex-wrap: nowrap;
        }
        .pair-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
          color: #111;
        }
        .pair-copy h1 {
          font-size: 18px;
          font-weight: 800;
          color: #f3f6fb;
          letter-spacing: -0.03em;
        }
        .pair-copy p {
          color: #8fa2ba;
          font-size: 11px;
          margin-top: 2px;
        }
        .pair-stats {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
        }
        .pair-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 800;
          color: #f3f6fb;
        }
        .pair-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0ecb81;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .pair-change {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 12px;
        }
        .pair-change.up {
          color: #0ecb81;
        }
        .pair-change.down {
          color: #f6465d;
        }
        .timeframe-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
          overflow-x: auto;
        }
        .tf-btn {
          min-height: 34px;
          padding: 0 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #8fa2ba;
          font-weight: 700;
          font-size: 12px;
        }
        .tf-btn.active {
          background: rgba(247, 147, 26, 0.15);
          border-color: rgba(247, 147, 26, 0.34);
          color: #f6b353;
        }
        .market-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: 0 22px 18px;
        }
        .live-trade-overlay {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 3;
          padding: 16px 18px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          background: rgba(14, 18, 26, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }
        .live-trade-overlay.buy {
          background: rgba(14, 203, 129, 0.12);
          border-color: rgba(14, 203, 129, 0.22);
        }
        .live-trade-overlay.sell {
          background: rgba(246, 70, 93, 0.12);
          border-color: rgba(246, 70, 93, 0.22);
        }
        .live-trade-main {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .live-trade-badge {
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
        }
        .live-trade-badge.buy {
          background: #0ecb81;
          color: #06120d;
        }
        .live-trade-badge.sell {
          background: #f6465d;
        }
        .live-trade-copy {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .live-trade-copy strong {
          color: #eef3fb;
          font-size: 15px;
        }
        .live-trade-copy span {
          color: #8fa2ba;
          font-size: 12px;
        }
        .live-trade-stats {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .live-trade-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .live-trade-stat-label {
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .live-trade-stat-value {
          color: #eef3fb;
          font-size: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        .strip-item {
          padding: 0;
          border-radius: 0;
          background: transparent;
        }
        .strip-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .strip-value {
          color: #eef3fb;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 14px;
        }
        .chart-box {
          position: relative;
          flex: 1;
          min-height: 420px;
          padding: 0 14px 14px;
        }
        .chart-canvas {
          width: 100%;
          height: 100%;
          min-height: 420px;
        }
        .chart-loading {
          position: absolute;
          top: 18px;
          right: 18px;
          left: auto;
          bottom: auto;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #8fa2ba;
          font-size: 12px;
        }
        .chart-fallback {
          position: absolute;
          inset: 18px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(8, 12, 18, 0.78);
          color: #c8d2df;
          text-align: center;
          padding: 24px;
        }
        .chart-fallback strong {
          font-size: 18px;
          color: #eef3fb;
        }
        .trade-panel {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .panel-title {
          font-size: 22px;
          font-weight: 800;
          color: #f3f6fb;
        }
        .ticket-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ticket-topbar-copy strong {
          display: block;
          color: #eef3fb;
          font-size: 14px;
          font-weight: 800;
        }
        .ticket-topbar-copy span {
          display: block;
          margin-top: 4px;
          color: #7f8ea3;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ticket-topbar-value {
          color: #0ecb81;
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          font-weight: 800;
        }
        .ticket-pill-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .ticket-pill {
          min-height: 42px;
          padding: 0 14px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #d7dfeb;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }
        .ticket-pill.emphasis {
          color: #f6b353;
          border-color: rgba(247, 147, 26, 0.28);
          background: rgba(247, 147, 26, 0.08);
        }
        .ticket-pill.ai {
          color: #7fb0ff;
          border-color: rgba(52, 120, 246, 0.28);
          background: rgba(52, 120, 246, 0.08);
        }
        .balance-box,
        .trade-box {
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.03);
          padding: 18px;
        }
        .balance-box .label,
        .trade-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }
        .balance-box .value {
          color: #eef3fb;
          font-size: 30px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
        }
        .balance-box .sub {
          color: #90a0b6;
          font-size: 13px;
          margin-top: 6px;
        }
        .direction-grid,
        .preset-grid,
        .leverage-grid {
          display: grid;
          gap: 10px;
        }
        .direction-grid {
          grid-template-columns: repeat(2, 1fr);
          padding: 4px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .preset-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .leverage-grid {
          grid-template-columns: repeat(5, 1fr);
        }
        .trade-form-grid {
          display: grid;
          gap: 12px;
        }
        .trade-field {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.026);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .trade-field-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }
        .trade-field-unit {
          color: #8ea0b7;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .dir-btn,
        .preset-btn,
        .lev-btn {
          min-height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: #d7dfeb;
          font-weight: 700;
        }
        .dir-btn.buy.active,
        .dir-btn.buy:hover {
          background: linear-gradient(135deg, rgba(14, 203, 129, 0.9), rgba(98, 243, 189, 0.92));
          border-color: transparent;
          color: #072117;
        }
        .dir-btn.sell.active,
        .dir-btn.sell:hover {
          background: linear-gradient(135deg, rgba(246, 70, 93, 0.92), rgba(255, 122, 141, 0.92));
          border-color: transparent;
          color: #fff3f5;
        }
        .preset-btn.active,
        .lev-btn.active {
          background: rgba(247, 147, 26, 0.16);
          border-color: rgba(247, 147, 26, 0.4);
          color: #f6b353;
        }
        .amount-input {
          width: 100%;
          min-height: 50px;
          border-radius: 14px;
          background: rgba(6, 10, 15, 0.24);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 0 16px;
          color: #eef3fb;
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
        }
        .amount-input:focus {
          outline: none;
          border-color: rgba(247, 147, 26, 0.45);
        }
        .info-list {
          display: grid;
          gap: 12px;
        }
        .info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #d7dfeb;
          font-size: 14px;
        }
        .info-row span:first-child {
          color: #7f8ea3;
        }
        .info-row strong {
          font-family: 'JetBrains Mono', monospace;
        }
        .trade-submit {
          min-height: 56px;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          font-weight: 800;
          color: #111;
        }
        .trade-submit.neutral {
          background: linear-gradient(135deg, #3478f6, #5a93f8);
          color: #fff;
        }
        .trade-submit.buy {
          background: linear-gradient(135deg, #0ecb81, #62f3bd);
        }
        .trade-submit.sell {
          background: linear-gradient(135deg, #f6465d, #ff7a8d);
          color: #fff;
        }
        .trade-submit:disabled {
          opacity: 0.55;
        }
        .ai-helper-copy {
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
          margin-top: 10px;
        }
        .ai-status-card {
          padding: 22px;
          border-radius: 22px;
          border: 1px solid rgba(52, 120, 246, 0.18);
          background:
            radial-gradient(circle at top right, rgba(52, 120, 246, 0.18), transparent 40%),
            linear-gradient(180deg, rgba(12, 18, 30, 0.96), rgba(10, 14, 24, 0.94));
        }
        .ai-panel-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .ai-back-btn {
          min-height: 40px;
          padding: 0 14px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          color: #dce7f7;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
        }
        .ai-status-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }
        .ai-status-head strong {
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
        }
        .ai-status-head span {
          display: block;
          margin-top: 4px;
          color: #8fa2ba;
          font-size: 12px;
        }
        .ai-badge {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(52, 120, 246, 0.16);
          color: #7fb0ff;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .ai-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 16px;
        }
        .ai-metric {
          padding: 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .ai-metric-label {
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .ai-metric-value {
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
        }
        .ai-open-btn,
        .ai-buy-btn,
        .ai-close-btn {
          min-height: 48px;
          border: none;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
        }
        .ai-open-btn,
        .ai-buy-btn {
          background: linear-gradient(135deg, #3478f6, #7fb0ff);
          color: #f8fbff;
        }
        .ai-open-btn.secondary {
          background: rgba(255,255,255,0.06);
          color: #dce7f7;
        }
        .ai-open-btn.stop {
          background: rgba(246,70,93,0.18);
          color: #ff9fad;
        }
        .ai-close-btn {
          min-height: 42px;
          padding: 0 16px;
          background: rgba(255,255,255,0.06);
          color: #d7dfeb;
        }
        .ai-head-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ai-mode-actions {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }
        .ai-terminal-shell {
          display: grid;
          gap: 18px;
          padding: 24px 22px 26px;
          min-height: 0;
          align-content: start;
        }
        .ai-terminal-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ai-terminal-head strong {
          display: block;
          color: #c6ffd7;
          font-size: 20px;
          font-weight: 800;
        }
        .ai-terminal-head span {
          display: block;
          margin-top: 6px;
          color: #81b890;
          font-size: 13px;
        }
        .ai-terminal-screen {
          flex: 1;
          min-height: 360px;
          border-radius: 24px;
          border: 1px solid rgba(54, 255, 133, 0.18);
          background:
            radial-gradient(circle at top left, rgba(40, 255, 128, 0.09), transparent 25%),
            linear-gradient(180deg, #04110a, #020905);
          box-shadow: inset 0 0 0 1px rgba(41, 91, 55, 0.18);
          padding: 22px;
          overflow: hidden;
          position: relative;
          animation: terminalPulse 3.2s ease-in-out infinite;
        }
        .ai-terminal-screen::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.03) 0,
            rgba(255,255,255,0.03) 1px,
            transparent 1px,
            transparent 4px
          );
          pointer-events: none;
          opacity: 0.18;
        }
        .ai-terminal-screen::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: -25%;
          height: 35%;
          background: linear-gradient(180deg, rgba(125,255,173,0), rgba(125,255,173,0.12), rgba(125,255,173,0));
          animation: scanSweep 5.4s linear infinite;
          pointer-events: none;
          opacity: 0.85;
        }
        .ai-terminal-line {
          position: relative;
          z-index: 1;
          color: #7dffad;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.9;
          letter-spacing: 0.02em;
          text-shadow: 0 0 8px rgba(80, 255, 146, 0.22);
          word-break: break-word;
          animation: terminalFlicker 2.8s steps(2) infinite;
        }
        .ai-terminal-line:nth-child(2n) {
          animation-duration: 3.6s;
        }
        .ai-terminal-line:nth-child(3n) {
          animation-duration: 2.2s;
        }
        @keyframes scanSweep {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(420%); }
        }
        @keyframes terminalFlicker {
          0%, 100% { opacity: 0.95; transform: translateX(0); }
          20% { opacity: 0.82; transform: translateX(0.3px); }
          40% { opacity: 1; transform: translateX(-0.4px); }
          60% { opacity: 0.88; transform: translateX(0.2px); }
          80% { opacity: 0.98; transform: translateX(-0.2px); }
        }
        @keyframes terminalPulse {
          0%, 100% { box-shadow: inset 0 0 0 1px rgba(41, 91, 55, 0.18), 0 0 0 rgba(0,0,0,0); }
          50% { box-shadow: inset 0 0 0 1px rgba(41, 91, 55, 0.18), 0 0 24px rgba(125,255,173,0.08); }
        }
        .ai-modal {
          width: min(100%, 980px);
          min-height: min(100vh - 48px, 860px);
          border-radius: 30px;
          border: 1px solid rgba(92, 141, 255, 0.18);
          background:
            radial-gradient(circle at top left, rgba(52,120,246,0.22), transparent 26%),
            radial-gradient(circle at bottom right, rgba(247,147,26,0.14), transparent 24%),
            linear-gradient(180deg, rgba(11, 16, 24, 0.98), rgba(8, 12, 18, 0.98));
          box-shadow: 0 38px 120px rgba(0, 0, 0, 0.38);
          padding: 28px;
          display: grid;
          gap: 22px;
        }
        .ai-modal-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }
        .ai-modal-kicker {
          color: #7fb0ff;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .ai-modal-head h2 {
          font-size: 30px;
          font-weight: 800;
          color: #f3f6fb;
          letter-spacing: -0.04em;
        }
        .ai-modal-head p {
          margin-top: 10px;
          max-width: 640px;
          color: #8fa2ba;
          line-height: 1.7;
        }
        .ai-plan-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .ai-plan-card {
          text-align: left;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          padding: 18px;
          cursor: pointer;
        }
        .ai-plan-card.active {
          border-color: rgba(52,120,246,0.4);
          background: rgba(52,120,246,0.1);
          box-shadow: inset 0 0 0 1px rgba(127,176,255,0.2);
        }
        .ai-plan-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }
        .ai-plan-top strong {
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
        }
        .ai-plan-top span {
          color: #7fb0ff;
          font-weight: 800;
        }
        .ai-plan-meta {
          color: #d7dfeb;
          font-size: 13px;
          margin-top: 4px;
        }
        .ai-plan-card p {
          margin-top: 10px;
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
        }
        .ai-modal-body {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 16px;
        }
        .ai-feature-list {
          display: grid;
          gap: 10px;
        }
        .ai-feature-row {
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          color: #d7dfeb;
          line-height: 1.6;
        }
        .ai-summary-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ai-summary-bar strong {
          display: block;
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
        }
        .ai-summary-bar span {
          display: block;
          margin-top: 4px;
          color: #8fa2ba;
          font-size: 13px;
        }
        .result-card {
          padding: 18px;
          border-radius: 22px;
          text-align: center;
        }
        .verify-warning {
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(247, 147, 26, 0.14);
          border: 1px solid rgba(247, 147, 26, 0.24);
          color: #f6d79a;
          line-height: 1.6;
          font-size: 13px;
        }
        .result-card.win {
          background: rgba(14, 203, 129, 0.14);
          border: 1px solid rgba(14, 203, 129, 0.24);
        }
        .result-card.loss {
          background: rgba(246, 70, 93, 0.14);
          border: 1px solid rgba(246, 70, 93, 0.24);
        }
        .result-value {
          font-size: 30px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 800;
          margin: 10px 0 14px;
        }
        .recent-list {
          display: grid;
          gap: 10px;
        }
        .recent-row {
          display: grid;
          grid-template-columns: 1.15fr 0.8fr 0.8fr 0.9fr;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          color: #d7dfeb;
          font-size: 13px;
          align-items: center;
        }
        .recent-cell {
          min-width: 0;
        }
        .recent-value {
          white-space: nowrap;
        }
        .recent-pair {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .recent-pair-name {
          white-space: nowrap;
        }
        .recent-dir {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        @media (max-width: 1180px) {
          .trade-shell {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 780px) {
          .chart-top,
          .market-strip,
          .trade-panel {
            padding-left: 16px;
            padding-right: 16px;
          }
          .chart-top {
            gap: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .pair-block {
            gap: 8px;
          }
          .pair-inline {
            gap: 4px;
            flex-wrap: nowrap;
          }
          .pair-icon {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            font-size: 17px;
          }
          .live-trade-overlay {
            left: 18px;
            right: 18px;
            bottom: 18px;
            flex-direction: column;
            align-items: flex-start;
          }
          .live-trade-stats {
            width: 100%;
            justify-content: space-between;
            gap: 12px;
          }
          .market-strip {
            display: flex;
            flex-wrap: nowrap;
            gap: 14px;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          .strip-item {
            flex: 0 0 auto;
          }
          .pair-copy h1 {
            font-size: 15px;
          }
          .pair-copy p {
            display: none;
          }
          .pair-stats {
            width: auto;
            gap: 8px;
            flex-wrap: nowrap;
          }
          .pair-price {
            font-size: 16px;
          }
          .pair-status {
            font-size: 10px;
          }
          .pair-change {
            font-size: 10px;
          }
          .timeframe-row {
            width: 100%;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 2px;
            gap: 10px;
          }
          .tf-btn {
            min-height: auto;
            padding: 0;
            font-size: 11px;
            flex: 0 0 auto;
            background: transparent;
            border: none;
            border-radius: 0;
          }
          .tf-btn.active {
            background: transparent;
            border-color: transparent;
            color: #f6b353;
          }
          .ticket-pill-row,
          .ai-plan-grid,
          .ai-modal-body,
          .ai-metrics {
            grid-template-columns: 1fr;
          }
          .direction-grid,
          .preset-grid,
          .leverage-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ai-modal {
            width: 100%;
            min-height: 100vh;
            border-radius: 0;
            border: none;
            padding: 18px;
          }
          .ai-terminal-shell {
            padding: 14px 16px 18px;
            min-height: 0;
          }
          .ai-panel-topbar,
          .ai-terminal-topbar {
            align-items: stretch;
          }
          .ai-back-btn {
            width: 100%;
          }
          .ai-terminal-screen {
            min-height: 340px;
            padding: 16px;
          }
          .ai-modal-head,
          .ai-head-actions,
          .ai-summary-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .recent-row {
            grid-template-columns: minmax(90px, 1.2fr) minmax(66px, auto) minmax(72px, auto) minmax(56px, auto);
            gap: 8px;
            padding: 10px 12px;
            font-size: 12px;
          }
          .recent-row .trade-label {
            display: none;
            margin: 0;
          }
          .recent-pair {
            gap: 6px;
          }
          .recent-pair-name,
          .recent-value,
          .recent-dir {
            font-size: 12px;
          }
        }
      `}),a.jsxs("section",{className:`trade-card chart-card ${U==="ai"?"ai-mode":""}`,children:[a.jsxs("div",{className:"chart-top",children:[a.jsxs("div",{className:"pair-block",children:[a.jsx("div",{className:"pair-icon",children:"₿"}),a.jsxs("div",{className:"pair-inline",children:[a.jsxs("div",{className:"pair-copy",children:[a.jsx("h1",{children:"BTC/USD"}),a.jsx("p",{children:"Live Coinbase candles for the active market view"})]}),a.jsxs("div",{className:"pair-stats",children:[a.jsxs("div",{className:"pair-price",children:["$",N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("div",{className:`pair-change ${n>=0?"up":"down"}`,children:[n>=0?a.jsx(Wr,{size:15}):a.jsx(_m,{size:15}),n>=0?"+":"",n.toFixed(2),"%"]})]})]})]}),a.jsxs("div",{className:"pair-status",children:[a.jsx(Ou,{size:13}),"Live"]}),a.jsx("div",{className:"timeframe-row",children:ks.map(z=>a.jsx("button",{className:`tf-btn ${v===z.value?"active":""}`,onClick:()=>m(z.value),children:z.label},z.value))})]}),U==="normal"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"market-strip",children:[a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"24h High"}),a.jsxs("div",{className:"strip-value",children:["$",r.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"24h Low"}),a.jsxs("div",{className:"strip-value",children:["$",s.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"Volume"}),a.jsx("div",{className:"strip-value",children:q.toLocaleString(void 0,{maximumFractionDigits:2})})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"Tools"}),a.jsxs("div",{className:"strip-value",style:{display:"flex",gap:"10px"},children:[a.jsx(td,{size:18}),a.jsx(Ou,{size:18})]})]})]}),a.jsxs("div",{className:"chart-box",children:[a.jsx("div",{ref:f,className:"chart-canvas"}),G&&a.jsx("div",{className:"chart-loading",children:"Updating live BTC candles..."}),de&&c&&a.jsxs("div",{className:`live-trade-overlay ${c.direction==="up"?"buy":"sell"}`,children:[a.jsxs("div",{className:"live-trade-main",children:[a.jsx("div",{className:`live-trade-badge ${c.direction==="up"?"buy":"sell"}`,children:c.direction==="up"?"UP":"DOWN"}),a.jsxs("div",{className:"live-trade-copy",children:[a.jsxs("strong",{children:[c.direction==="up"?"Buy / Up":"Sell / Down"," $",re(c.amount)]}),a.jsxs("span",{children:["BTC/USD $",c.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," • ",c.leverage,"x • ",c.timeframe]})]})]}),a.jsxs("div",{className:"live-trade-stats",children:[a.jsxs("div",{className:"live-trade-stat",children:[a.jsx("div",{className:"live-trade-stat-label",children:"Timer"}),a.jsx("div",{className:"live-trade-stat-value",children:Bl(Hi)})]}),a.jsxs("div",{className:"live-trade-stat",children:[a.jsx("div",{className:"live-trade-stat-label",children:"Live PnL"}),a.jsxs("div",{className:"live-trade-stat-value",style:{color:((ie==null?void 0:ie.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((ie==null?void 0:ie.pnl)||0)>=0?"+":"","$",re(Math.abs((ie==null?void 0:ie.pnl)||0))]})]})]})]}),$&&!G&&a.jsxs("div",{className:"chart-fallback",children:[a.jsx("strong",{children:"Live BTC chart unavailable"}),a.jsx("div",{children:"The trade ticket is still available. Reload the page to retry the chart connection."})]})]})]}):a.jsxs("div",{className:"ai-terminal-shell",children:[a.jsxs("div",{className:"ai-terminal-topbar",children:[a.jsx("button",{className:"ai-back-btn",onClick:()=>R("normal"),children:"Back To Normal Trade"}),a.jsxs("div",{className:"ai-terminal-head",children:[a.jsx("strong",{children:"AI Trade View"}),a.jsx("span",{children:"Green terminal stream for live AI session status"})]})]}),a.jsxs("div",{className:"ai-terminal-screen",children:[vg.map(z=>a.jsxs("div",{className:"ai-terminal-line",children:[">"," ",z]},z)),a.jsxs("div",{className:"ai-terminal-line",children:[">"," SESSION RATE  :: $",(((D==null?void 0:D.autoAmount)||0)/1e3*1e-4).toFixed(4),"/sec"]}),a.jsxs("div",{className:"ai-terminal-line",children:[">"," BTC AI CORE   :: SIGNAL LOCKED AND RUNNING"]}),a.jsxs("div",{className:"ai-terminal-line",children:[">"," USER STREAM   :: BALANCE GROWTH IS SLOW AND CONTROLLED"]})]})]})]}),a.jsxs("aside",{className:"trade-card trade-panel",children:[a.jsx("div",{className:"panel-title",children:"Trade ticket"}),a.jsxs("div",{className:"ticket-pill-row",children:[a.jsx("button",{className:`ticket-pill ${U==="normal"?"emphasis":""}`,onClick:()=>R("normal"),children:"Normal"}),a.jsx("button",{className:`ticket-pill ${U==="ai"?"ai":""}`,onClick:()=>{R("ai"),D!=null&&D.active||S(!0)},children:"AI Trade"})]}),U==="normal"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Direction"}),a.jsxs("div",{className:"direction-grid",children:[a.jsx("button",{className:`dir-btn buy ${b==="up"?"active":""}`,onClick:()=>w("up"),disabled:de,children:"Buy"}),a.jsx("button",{className:`dir-btn sell ${b==="down"?"active":""}`,onClick:()=>w("down"),disabled:de,children:"Sell"})]})]}),a.jsx("div",{className:"trade-box",children:a.jsxs("div",{className:"trade-form-grid",children:[a.jsxs("div",{className:"trade-field",children:[a.jsxs("div",{className:"trade-field-head",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:0},children:"Order Amount"}),a.jsx("div",{className:"trade-field-unit",children:"USDT"})]}),a.jsx("input",{value:C,onChange:z=>P(z.target.value),className:"amount-input",type:"number",min:"1",placeholder:"100"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"trade-label",children:"Quick Amount"}),a.jsx("div",{className:"preset-grid",children:Uy.map(z=>a.jsxs("button",{className:`preset-btn ${C===String(z)?"active":""}`,onClick:()=>P(String(z)),children:["$",z]},z))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"trade-label",children:"Leverage"}),a.jsx("div",{className:"leverage-grid",children:Wy.map(z=>a.jsxs("button",{className:`lev-btn ${j===z?"active":""}`,onClick:()=>_(z),children:[z,"x"]},z))})]})]})}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Order summary"}),a.jsxs("div",{className:"info-list",children:[a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Entry price"}),a.jsxs("strong",{children:["$",N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"info-row",children:[a.jsxs("span",{children:["Projected win at ",j,"x"]}),a.jsxs("strong",{style:{color:"#0ecb81"},children:["$",re(K)]})]}),a.jsxs("div",{className:"info-row",children:[a.jsxs("span",{children:["Projected loss at ",j,"x"]}),a.jsxs("strong",{style:{color:"#f6465d"},children:["$",re(Z||0)]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Leverage rule"}),a.jsxs("strong",{children:["Trade win/loss x",j]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Trade duration"}),a.jsx("strong",{children:te.label})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Settlement timer"}),a.jsx("strong",{children:Bl(te.tradeSeconds)})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Estimated liquidation"}),a.jsxs("strong",{children:["$",Iu(N,j,b||"up").toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]})]}):a.jsxs("div",{className:"ai-status-card",children:[a.jsx("div",{className:"ai-panel-topbar",children:a.jsx("button",{className:"ai-back-btn",onClick:()=>R("normal"),children:"Back To Normal Trade"})}),a.jsxs("div",{className:"ai-status-head",children:[a.jsxs("div",{children:[a.jsx("strong",{children:D!=null&&D.active?`${D.displayName} AI is active`:"Upgrade to AI Trade"}),a.jsx("span",{children:D!=null&&D.active?`Auto-trading BTC with ${Kh(D.expiresAt)}`:"Choose a plan and let the system place BTC trades automatically for this account."})]}),a.jsx("div",{className:"ai-badge",children:D!=null&&D.active?D.displayName:"Inactive"})]}),a.jsx("div",{className:"ai-helper-copy",children:"AI trading reads recent BTC price movement, decides direction automatically, writes each result into trade history, and updates your USD balance without manual entry."}),a.jsxs("div",{className:"ai-metrics",children:[a.jsxs("div",{className:"ai-metric",children:[a.jsx("div",{className:"ai-metric-label",children:"Current plan"}),a.jsx("div",{className:"ai-metric-value",children:(D==null?void 0:D.displayName)||"None"})]}),a.jsxs("div",{className:"ai-metric",children:[a.jsx("div",{className:"ai-metric-label",children:"AI trading amount"}),a.jsxs("div",{className:"ai-metric-value",children:["$",re((D==null?void 0:D.lockedAmount)||0)]})]}),a.jsxs("div",{className:"ai-metric",children:[a.jsx("div",{className:"ai-metric-label",children:"AI history"}),a.jsx("div",{className:"ai-metric-value",children:Ia.length})]}),a.jsxs("div",{className:"ai-metric",children:[a.jsx("div",{className:"ai-metric-label",children:"Current session"}),a.jsxs("div",{className:"ai-metric-value",style:{color:((D==null?void 0:D.currentProfit)||0)>=0?"#0ecb81":"#f6465d"},children:[((D==null?void 0:D.currentProfit)||0)>=0?"+":"-","$",re(Math.abs((D==null?void 0:D.currentProfit)||0))]})]})]}),a.jsxs("div",{className:"trade-box",style:{marginTop:"16px",padding:"16px"},children:[a.jsx("div",{className:"trade-label",children:"AI plans"}),a.jsxs("div",{className:"info-list",children:[a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Normal"}),a.jsx("strong",{children:"$30 • 4 hours"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Pro"}),a.jsx("strong",{children:"$40 • 12 hours"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Pro Mex"}),a.jsx("strong",{children:"$65.55 • 24 hours"})]})]})]}),a.jsxs("div",{className:"ai-mode-actions",children:[a.jsx("button",{className:"ai-open-btn",onClick:()=>S(!0),children:D!=null&&D.active?"Manage AI Plan":"Open AI Trading"}),a.jsx("button",{className:"ai-open-btn secondary",onClick:()=>R("ai"),children:"Check AI Trade"}),(D==null?void 0:D.active)&&a.jsx("button",{className:"ai-open-btn stop",onClick:kg,children:"Stop AI Trading"})]})]}),de&&a.jsxs("div",{className:"result-card win",children:[a.jsx("div",{style:{fontWeight:700},children:"Trade running"}),a.jsx("div",{className:"result-value",children:Bl(Hi)}),a.jsxs("div",{children:["Contract: ",Se.label]}),a.jsxs("div",{children:["Entry: $",c==null?void 0:c.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("div",{children:["Live PnL: ",a.jsxs("span",{style:{color:((ie==null?void 0:ie.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((ie==null?void 0:ie.pnl)||0)>=0?"+":"","$",re(Math.abs((ie==null?void 0:ie.pnl)||0))]})]}),a.jsxs("div",{children:["Move: ",a.jsxs("span",{style:{color:((ie==null?void 0:ie.directionalMovePct)||0)>=0?"#0ecb81":"#f6465d"},children:[((ie==null?void 0:ie.directionalMovePct)||0)>=0?"+":"",((ie==null?void 0:ie.directionalMovePct)||0).toFixed(3),"%"]})]}),a.jsxs("div",{children:["Liq: $",c==null?void 0:c.liquidationPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o&&a.jsxs("div",{className:`result-card ${o.won?"win":"loss"}`,children:[a.jsx("div",{style:{fontWeight:700},children:o.outcomeReason==="liquidation"?"Trade liquidated":o.won?"Trade won":"Trade lost"}),a.jsxs("div",{className:"result-value",style:{color:o.won?"#0ecb81":"#f6465d"},children:[o.pnl>=0?"+":"","$",re(Math.abs(o.pnl))]}),a.jsx("button",{className:"tf-btn active",onClick:yg,children:"New trade"})]}),U==="normal"&&a.jsx("button",{className:`trade-submit ${jg}`,disabled:!b||!C||de||!ht,onClick:bg,children:de?`Trade running (${Se.label})...`:ht?b==="up"?`Margin Buy ${te.label}`:b==="down"?`Margin Sell ${te.label}`:"Choose direction":"Verify Account To Trade"}),!ht&&a.jsx("div",{className:"verify-warning",children:"This account is still unverified. Go to Profile, submit your verification form and document photos, then wait for System Admin approval before trading."}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Recent trades"}),a.jsx("div",{className:"recent-list",children:yi.slice(0,4).map(z=>a.jsxs("div",{className:"recent-row",children:[a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:z.pair}),a.jsxs("div",{className:"recent-pair",children:[a.jsx("span",{className:"recent-pair-name",children:z.pair}),a.jsx("span",{className:"recent-dir",style:{color:z.direction==="up"?"#0ecb81":"#f6465d"},children:z.direction.toUpperCase()}),z.source==="ai"&&a.jsx("span",{className:"recent-dir",style:{color:"#7fb0ff"},children:"AI"})]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Amount"}),a.jsxs("div",{className:"recent-value",children:["$",z.amount]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"PnL"}),a.jsxs("div",{className:"recent-value",style:{color:(z.pnl||0)>=0?"#0ecb81":"#f6465d"},children:[(z.pnl||0)>=0?"+":"","$",re(Math.abs(z.pnl||0))]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Close"}),a.jsx("div",{className:"recent-value",style:{color:z.status==="won"?"#0ecb81":"#f6465d"},children:z.outcomeReason==="liquidation"?"Liquidated":z.timeframe})]})]},z.id))})]})]})]})]})}const Hy=["United States","United Kingdom","Canada","Australia","Germany","France","Italy","Spain","Netherlands","Switzerland","Sweden","Norway","Denmark","United Arab Emirates","Saudi Arabia","Singapore","Malaysia","Thailand","Myanmar","India","Japan","South Korea","Philippines","Indonesia","Vietnam","Brazil","Mexico","South Africa","Nigeria"];function Ky(t){return t==="approved"?"Verified Account":t==="pending"?"Verification Pending":t==="rejected"?"Verification Rejected":"Unverified Account"}function Xy(){var Be,A,O,W,G,I,$,E,L;const{user:t,updateUser:e,submitKycRequest:i}=vi(),n=k.useRef(null),r=(t==null?void 0:t.verificationStatus)==="approved",s=t!=null&&t.joinedDate?new Date(t.joinedDate).toLocaleDateString():"Not available",[l,c]=k.useState("profile"),[o,d]=k.useState(!1),[u,h]=k.useState(!1),[f,g]=k.useState(!1),[p,x]=k.useState({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:r&&(t==null?void 0:t.phone)||"",country:r&&(t==null?void 0:t.country)||"",city:r&&(t==null?void 0:t.city)||"",postCode:r&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),[y,v]=k.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[m,b]=k.useState({fullName:((Be=t==null?void 0:t.kyc)==null?void 0:Be.fullName)||(t==null?void 0:t.name)||"",phone:((A=t==null?void 0:t.kyc)==null?void 0:A.phone)||r&&(t==null?void 0:t.phone)||"",country:((O=t==null?void 0:t.kyc)==null?void 0:O.country)||r&&(t==null?void 0:t.country)||"",city:((W=t==null?void 0:t.kyc)==null?void 0:W.city)||r&&(t==null?void 0:t.city)||"",postCode:((G=t==null?void 0:t.kyc)==null?void 0:G.postCode)||r&&(t==null?void 0:t.postCode)||"",job:((I=t==null?void 0:t.kyc)==null?void 0:I.job)||r&&(t==null?void 0:t.job)||"",documentType:(($=t==null?void 0:t.kyc)==null?void 0:$.documentType)||"passport",frontImage:((E=t==null?void 0:t.kyc)==null?void 0:E.frontImage)||"",backImage:((L=t==null?void 0:t.kyc)==null?void 0:L.backImage)||""});k.useEffect(()=>{var N,q,K,Z,te,Se,de,ht,D;x({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),b({fullName:((N=t==null?void 0:t.kyc)==null?void 0:N.fullName)||(t==null?void 0:t.name)||"",phone:((q=t==null?void 0:t.kyc)==null?void 0:q.phone)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:((K=t==null?void 0:t.kyc)==null?void 0:K.country)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:((Z=t==null?void 0:t.kyc)==null?void 0:Z.city)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:((te=t==null?void 0:t.kyc)==null?void 0:te.postCode)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",job:((Se=t==null?void 0:t.kyc)==null?void 0:Se.job)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.job)||"",documentType:((de=t==null?void 0:t.kyc)==null?void 0:de.documentType)||"passport",frontImage:((ht=t==null?void 0:t.kyc)==null?void 0:ht.frontImage)||"",backImage:((D=t==null?void 0:t.kyc)==null?void 0:D.backImage)||""})},[t]);const w=(t==null?void 0:t.verificationStatus)||"unverified",j=k.useMemo(()=>Ky(w),[w]),_=r?"Verified Trader":j,C=p.name||(t==null?void 0:t.name)||"Trader",P=p.email||(t==null?void 0:t.email)||"No email added yet",U=C.trim().charAt(0).toUpperCase()||"T",R=t==null?void 0:t.kyc,V=((R==null?void 0:R.documentType)||"passport").replace("_"," "),S=()=>{e(p),d(!1)},Q=N=>{var Z;const q=(Z=N.target.files)==null?void 0:Z[0];if(!q)return;const K=new FileReader;K.onload=()=>{const te=typeof K.result=="string"?K.result:"";te&&x(Se=>({...Se,avatar:te}))},K.readAsDataURL(q)},ke=N=>q=>{var Z;const K=(Z=q.target.files)==null?void 0:Z[0];K&&b(te=>({...te,[N]:K.name||"Document uploaded"}))},De=()=>{if(!y.newPassword||y.newPassword!==y.confirmPassword){alert("New passwords do not match");return}e({password:y.newPassword}),v({currentPassword:"",newPassword:"",confirmPassword:""}),h(!1)},Pe=()=>{if(!m.fullName||!m.phone||!m.country||!m.city||!m.postCode||!m.job||!m.frontImage||!m.backImage){alert("Complete all verification fields and upload both document images.");return}e({isVerified:!1,verificationStatus:"pending",kyc:{...m,documentType:m.documentType,status:"pending",submittedAt:new Date().toISOString(),reviewedAt:void 0,reviewedBy:void 0}}),t&&i({id:`kyc-${Date.now()}`,userEmail:t.email,userName:t.name,fullName:m.fullName,phone:m.phone,country:m.country,city:m.city,postCode:m.postCode,job:m.job,documentType:m.documentType,frontImage:m.frontImage,backImage:m.backImage,status:"pending",submittedAt:new Date().toISOString()}),g(!0)};return a.jsxs("div",{className:"profile-shell",children:[a.jsx("style",{children:`
        .profile-shell {
          max-width: 1100px;
          margin: 0 auto;
          color: #eef3fb;
          display: grid;
          gap: 22px;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .hero, .content-card { padding: 24px; }
        .content-card.profile-card {
          min-height: calc(100vh - 320px);
          display: flex;
          flex-direction: column;
        }
        .hero {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 18px;
          justify-content: space-between;
          background:
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.18), transparent 24%),
            linear-gradient(180deg, rgba(15, 19, 28, 0.96), rgba(12, 16, 24, 0.92));
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), transparent 35%);
          pointer-events: none;
        }
        .hero-main {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .hero-side {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(120px, 1fr));
          gap: 12px;
          min-width: 280px;
        }
        .desk-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 14px 22px;
          padding: 0 8px;
          align-items: center;
        }
        .desk-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
          color: #dbe4f1;
          min-width: 0;
        }
        .desk-item span {
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          white-space: nowrap;
        }
        .desk-item strong {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
          white-space: nowrap;
        }
        .hero-stat {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.06);
        }
        .hero-stat span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 6px;
        }
        .hero-stat strong {
          display: block;
          font-size: 15px;
          line-height: 1.45;
        }
        .avatar-wrap {
          width: 96px;
          height: 96px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f7931a, #ffb347);
        }
        .avatar-wrap.editable {
          cursor: pointer;
          box-shadow: 0 0 0 3px rgba(52,120,246,.16);
        }
        .avatar-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .avatar-fallback {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          font-size: 34px; font-weight: 800; color: #111;
        }
        .avatar-edit {
          position: absolute; right: 8px; bottom: 8px; width: 32px; height: 32px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.65); color: #fff;
        }
        .hero h1 { font-size: 30px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 6px; }
        .hero p { color: #8fa2ba; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 8px 12px;
          border-radius: 999px; font-size: 12px; font-weight: 700;
        }
        .hero-badge.approved {
          background: rgba(14, 203, 129, 0.14); color: #0ecb81;
        }
        .hero-badge.pending { background: rgba(247, 147, 26, 0.14); color: #f6b353; }
        .hero-badge.rejected { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .hero-badge.unverified { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .tabs { display: flex; gap: 10px; flex-wrap: wrap; padding: 0 6px; }
        .tab-btn {
          min-height: 42px; padding: 0 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03); color: #8fa2ba; font-weight: 700;
        }
        .tab-btn.active { background: rgba(52,120,246,.18); border-color: rgba(52,120,246,.34); color: #b8d2ff; }
        .card-head {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 22px;
        }
        .card-head h2 { font-size: 22px; font-weight: 800; }
        .edit-btn {
          min-height: 42px; padding: 0 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03); color: #eef3fb; font-weight: 700;
        }
        .edit-btn.save { background: linear-gradient(135deg, #f7931a, #ffb347); color: #111; border: none; }
        .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .content-card.profile-card .form-grid {
          align-content: start;
          flex: 1;
        }
        .field label {
          display: block; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: #8fa2ba; margin-bottom: 8px;
        }
        .field input, .field select {
          width: 100%; min-height: 50px; padding: 0 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03); color: #eef3fb;
        }
        .field input:disabled { opacity: .7; }
        .full { grid-column: 1 / -1; }
        .avatar-section {
          grid-column: 1 / -1;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .avatar-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .avatar-section-head strong {
          font-size: 16px;
        }
        .avatar-section-copy {
          display: grid;
          gap: 4px;
        }
        .avatar-section-head span,
        .avatar-help {
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
        }
        .avatar-preview-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 14px;
        }
        .avatar-preview-chip {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          flex-shrink: 0;
        }
        .avatar-preview-chip img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-preview-copy strong {
          display: block;
          margin-bottom: 4px;
        }
        .avatar-preview-copy span {
          color: #8fa2ba;
          font-size: 13px;
        }
        .avatar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }
        .upload-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.04);
          color: #eef3fb;
          font-weight: 700;
          cursor: pointer;
        }
        .upload-btn:has(input:disabled) {
          opacity: .55;
          cursor: not-allowed;
        }
        .upload-note {
          color: #8fa2ba;
          font-size: 12px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .info-list { display: grid; gap: 14px; }
        .info-item {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px;
          border-radius: 18px; background: rgba(255,255,255,.03);
        }
        .info-item small { color: #8fa2ba; display: block; margin-top: 4px; }
        .account-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }
        .account-chip {
          padding: 16px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.07);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
        }
        .account-chip span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 8px;
        }
        .account-chip strong {
          display: block;
          font-size: 15px;
          line-height: 1.5;
          word-break: break-word;
        }
        .status-pill { padding: 8px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; }
        .status-pill.on { color: #0ecb81; background: rgba(14,203,129,.14); }
        .status-pill.pending { color: #f6b353; background: rgba(247,147,26,.14); }
        .status-pill.rejected { color: #f6465d; background: rgba(246,70,93,.14); }
        .submit-note { margin-top: 16px; color: #8fa2ba; line-height: 1.6; }
        .kyc-stage {
          display: grid;
          gap: 18px;
        }
        .waiting-card,
        .verified-card {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
        }
        .waiting-card {
          background: linear-gradient(180deg, rgba(247,147,26,.08), rgba(255,255,255,.03));
          border-color: rgba(247,147,26,.2);
        }
        .verified-card {
          background: linear-gradient(180deg, rgba(14,203,129,.08), rgba(255,255,255,.03));
          border-color: rgba(14,203,129,.2);
        }
        .kyc-headline {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 800;
        }
        .kyc-copy {
          color: #8fa2ba;
          line-height: 1.7;
        }
        .certificate-sheet {
          margin-top: 18px;
          background: #fff;
          color: #111;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,.28);
        }
        .certificate-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .certificate-badge {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 38px;
          font-weight: 800;
        }
        .certificate-title {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.2;
        }
        .certificate-subtitle {
          margin-top: 4px;
          font-size: 14px;
          color: #59677a;
        }
        .certificate-center {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .certificate-meta {
          display: grid;
          gap: 8px;
          font-size: 15px;
          line-height: 1.6;
        }
        .certificate-meta strong {
          font-weight: 800;
        }
        .certificate-notice {
          margin-top: 18px;
          font-size: 14px;
          line-height: 1.7;
          color: #273240;
        }
        .certificate-sign {
          margin-top: 24px;
          font-size: 14px;
          line-height: 1.7;
        }
        @media (max-width: 760px) {
          .hero, .content-card { padding: 18px; }
          .content-card.profile-card { min-height: unset; }
          .hero { flex-direction: column; align-items: flex-start; }
          .hero-main { width: 100%; }
          .hero-side {
            width: 100%;
            min-width: 0;
            grid-template-columns: 1fr 1fr;
          }
          .form-grid { grid-template-columns: 1fr; }
          .desk-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .desk-item {
            flex-wrap: wrap;
          }
          .account-grid { grid-template-columns: 1fr; }
          .certificate-sheet { padding: 20px; }
          .certificate-brand { align-items: flex-start; }
        }
      `}),a.jsxs("section",{className:"card hero",children:[a.jsxs("div",{className:"hero-main",children:[a.jsxs("button",{type:"button",className:`avatar-wrap ${o?"editable":""}`,onClick:()=>{var N;o&&((N=n.current)==null||N.click())},children:[p.avatar?a.jsx("img",{src:p.avatar,alt:C}):a.jsx("div",{className:"avatar-fallback",children:U}),a.jsx("div",{className:"avatar-edit",children:a.jsx(ml,{size:16})})]}),a.jsx("input",{ref:n,className:"sr-only",type:"file",accept:"image/*",onChange:Q}),a.jsxs("div",{children:[a.jsx("h1",{children:C}),a.jsx("p",{children:P}),a.jsxs("div",{className:`hero-badge ${w==="approved"?"approved":w==="pending"?"pending":w==="rejected"?"rejected":"unverified"}`,children:[a.jsx(Fu,{size:14}),j]})]})]}),a.jsxs("div",{className:"hero-side",children:[a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Access"}),a.jsx("strong",{children:r?"Trading Enabled":"Trading Locked"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Profile"}),a.jsx("strong",{children:r?"Verified Identity":"Needs Verification"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Country"}),a.jsx("strong",{children:r?p.country||"Not set":"Hidden until verified"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Phone"}),a.jsx("strong",{children:r?p.phone||"Not set":"Hidden until verified"})]})]})]}),a.jsxs("section",{className:"desk-strip",children:[a.jsxs("div",{className:"desk-item",children:[a.jsx("span",{children:"Account Tier"}),a.jsx("strong",{children:_})]}),a.jsxs("div",{className:"desk-item",children:[a.jsx("span",{children:"Member Since"}),a.jsx("strong",{children:s})]}),a.jsxs("div",{className:"desk-item",children:[a.jsx("span",{children:"Timezone"}),a.jsx("strong",{children:p.timezone||"UTC"})]}),a.jsxs("div",{className:"desk-item",children:[a.jsx("span",{children:"Security"}),a.jsx("strong",{children:t!=null&&t.password?"Password Active":"Password Not Set"})]})]}),a.jsxs("div",{className:"tabs",children:[a.jsxs("button",{className:`tab-btn ${l==="profile"?"active":""}`,onClick:()=>c("profile"),children:[a.jsx(Ur,{size:16})," Profile"]}),a.jsxs("button",{className:`tab-btn ${l==="security"?"active":""}`,onClick:()=>c("security"),children:[a.jsx(id,{size:16})," Security"]}),a.jsxs("button",{className:`tab-btn ${l==="verification"?"active":""}`,onClick:()=>c("verification"),children:[a.jsx(Vu,{size:16})," Verification"]})]}),l==="profile"&&a.jsxs("section",{className:"card content-card profile-card",children:[a.jsxs("div",{className:"card-head",children:[a.jsx("h2",{children:"Personal Information"}),a.jsx("button",{className:`edit-btn ${o?"save":""}`,onClick:()=>o?S():d(!0),children:o?a.jsxs(a.Fragment,{children:[a.jsx(Nm,{size:16})," Save"]}):"Edit Profile"})]}),a.jsxs("div",{className:"account-grid",children:[a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"User Name"}),a.jsx("strong",{children:C})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"User Email"}),a.jsx("strong",{children:P})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"Account Status"}),a.jsx("strong",{children:w==="approved"?"Verified account":w==="pending"?"Verification pending":"Unverified account"})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"Account ID"}),a.jsx("strong",{children:(t==null?void 0:t.id)||"Not assigned"})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{value:p.name,disabled:!o,onChange:N=>x({...p,name:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Email"}),a.jsx("input",{value:p.email,disabled:!0})]}),r&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Phone"}),a.jsx("input",{value:p.phone,disabled:!o,onChange:N=>x({...p,phone:N.target.value})})]}),r&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Country"}),a.jsx("input",{value:p.country,disabled:!o,onChange:N=>x({...p,country:N.target.value})})]}),r&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"City"}),a.jsx("input",{value:p.city,disabled:!o,onChange:N=>x({...p,city:N.target.value})})]}),r&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Post Code"}),a.jsx("input",{value:p.postCode,disabled:!o,onChange:N=>x({...p,postCode:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Timezone"}),a.jsx("input",{value:p.timezone,disabled:!o,onChange:N=>x({...p,timezone:N.target.value})})]}),r&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Job"}),a.jsx("input",{value:(t==null?void 0:t.job)||"",disabled:!0})]})]})]}),l==="security"&&a.jsxs("section",{className:"card content-card",children:[a.jsxs("div",{className:"card-head",children:[a.jsx("h2",{children:"Security Settings"}),a.jsx("button",{className:`edit-btn ${u?"save":""}`,onClick:()=>u?De():h(!0),children:u?"Update Password":"Change Password"})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Current Password"}),a.jsx("input",{type:"password",value:y.currentPassword,disabled:!u,onChange:N=>v({...y,currentPassword:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"New Password"}),a.jsx("input",{type:"password",value:y.newPassword,disabled:!u,onChange:N=>v({...y,newPassword:N.target.value})})]}),a.jsxs("div",{className:"field full",children:[a.jsx("label",{children:"Confirm New Password"}),a.jsx("input",{type:"password",value:y.confirmPassword,disabled:!u,onChange:N=>v({...y,confirmPassword:N.target.value})})]})]}),a.jsx("div",{className:"submit-note",children:"This is still a demo app, but the password now updates in your stored user profile so the settings area feels more real."})]}),l==="verification"&&a.jsxs("section",{className:"card content-card",children:[a.jsx("div",{className:"card-head",children:a.jsx("h2",{children:"KYC Verification"})}),a.jsx("div",{className:"kyc-stage",children:w==="approved"?a.jsxs("div",{className:"verified-card",children:[a.jsxs("div",{className:"kyc-headline",children:[a.jsx(Fu,{size:22}),"Verified Successfully"]}),a.jsx("div",{className:"kyc-copy",children:"Your account is verified and trading access is active. BTCTradePro approved your verification successfully."}),a.jsxs("div",{className:"info-list",style:{marginTop:"18px"},children:[a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Status"}),a.jsx("small",{children:"Approved by admin review"})]}),a.jsx("div",{className:"status-pill on",children:"Verified"})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Account Holder"}),a.jsx("small",{children:(R==null?void 0:R.fullName)||(t==null?void 0:t.name)||"Trader"})]}),a.jsx("div",{children:V})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Account Email"}),a.jsx("small",{children:(t==null?void 0:t.email)||"No email added"})]}),a.jsx("div",{children:s})]})]}),a.jsx("div",{className:"submit-note",children:"Your verification documents stay in the admin review system and are not shown on your profile page."})]}):w==="pending"?a.jsxs("div",{className:"waiting-card",children:[a.jsxs("div",{className:"kyc-headline",children:[a.jsx(Vu,{size:22}),"Verification Waiting Letter"]}),a.jsx("div",{className:"kyc-copy",children:"Your verification request has been sent to System Admin. Please wait while your identity information and document images are reviewed."}),a.jsxs("div",{className:"info-list",style:{marginTop:"18px"},children:[a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Full Name"}),a.jsx("small",{children:(R==null?void 0:R.fullName)||C})]}),a.jsx("div",{className:"status-pill pending",children:"Pending"})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Phone"}),a.jsx("small",{children:(R==null?void 0:R.phone)||"Not set"})]}),a.jsx("div",{children:V})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Country"}),a.jsx("small",{children:(R==null?void 0:R.country)||"Not set"})]}),a.jsx("div",{children:V})]})]}),(f||w==="pending")&&a.jsx("div",{className:"submit-note",children:"Verification request sent successfully. Your files were sent to admin review and are hidden from your profile page."})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{value:m.fullName,onChange:N=>b({...m,fullName:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Phone Number"}),a.jsx("input",{value:m.phone,onChange:N=>b({...m,phone:N.target.value}),placeholder:"+1 234 567 8900"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Country"}),a.jsxs("select",{value:m.country,onChange:N=>b({...m,country:N.target.value}),children:[a.jsx("option",{value:"",children:"Choose a country"}),Hy.map(N=>a.jsx("option",{value:N,children:N},N))]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"City"}),a.jsx("input",{value:m.city,onChange:N=>b({...m,city:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Post Code"}),a.jsx("input",{value:m.postCode,onChange:N=>b({...m,postCode:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Job"}),a.jsx("input",{value:m.job,onChange:N=>b({...m,job:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Document Type"}),a.jsxs("select",{value:m.documentType,onChange:N=>b({...m,documentType:N.target.value}),children:[a.jsx("option",{value:"passport",children:"Passport"}),a.jsx("option",{value:"id_card",children:"ID Card"}),a.jsx("option",{value:"drivers_license",children:"Driver License"})]})]}),a.jsxs("div",{className:"avatar-section full",children:[a.jsx("strong",{children:"Document Front"}),a.jsx("div",{className:"avatar-help",style:{marginBottom:"12px"},children:m.frontImage?`Selected file: ${m.frontImage}`:"Upload the front side image. After you submit, the file goes to admin review and will not stay visible on your profile page."}),a.jsxs("label",{className:"upload-btn",children:[a.jsx(ml,{size:16}),"Upload Front Image",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:ke("frontImage")})]})]}),a.jsxs("div",{className:"avatar-section full",children:[a.jsx("strong",{children:"Document Back"}),a.jsx("div",{className:"avatar-help",style:{marginBottom:"12px"},children:m.backImage?`Selected file: ${m.backImage}`:"Upload the back side image. The profile will only show your verification status after submission."}),a.jsxs("label",{className:"upload-btn",children:[a.jsx(ml,{size:16}),"Upload Back Image",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:ke("backImage")})]})]})]}),a.jsx("button",{className:"edit-btn save",style:{marginTop:"18px"},onClick:Pe,children:"Verify Account"}),a.jsx("div",{className:"submit-note",children:"Complete this form and upload front and back document photos. After submission, the request goes to System Admin and your account stays unverified until approval."})]})})]})]})}const Qy=[{id:"1",title:"Bitcoin Surges Past $68,000 as Institutional Adoption Accelerates",description:"Major financial institutions continue to embrace Bitcoin, driving prices to new yearly highs amid growing demand for cryptocurrency exposure.",url:"#",imageUrl:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400",source:"CryptoNews",publishedAt:"2026-04-29T14:30:00"},{id:"2",title:"Ethereum ETF Sees Record Inflows Following Bitcoin Success",description:"Following the approval of spot Bitcoin ETFs, institutional investors are now showing increased interest in Ethereum-based investment products.",url:"#",imageUrl:"https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400",source:"BlockchainDaily",publishedAt:"2026-04-29T12:15:00"},{id:"3",title:"DeFi Protocol Reaches $50 Billion in Total Value Locked",description:"Decentralized finance continues its explosive growth as new protocols offer innovative solutions for yield farming and liquidity provision.",url:"#",imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",source:"DeFi Weekly",publishedAt:"2026-04-29T10:45:00"},{id:"4",title:"El Salvador Celebrates Three Years of Bitcoin as Legal Tender",description:"The Central American nation marks a milestone as President highlights the economic benefits of cryptocurrency adoption.",url:"#",imageUrl:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400",source:"Global Finance",publishedAt:"2026-04-28T18:00:00"},{id:"5",title:"SEC Announces New Cryptocurrency Regulatory Framework",description:"Regulators unveil comprehensive guidelines for digital asset classification and trading, providing clarity for market participants.",url:"#",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",source:"Regulatory Watch",publishedAt:"2026-04-28T15:30:00"},{id:"6",title:"Major Bank Launches Bitcoin Trading for Retail Customers",description:"One of the world's largest banks begins offering cryptocurrency services, marking a significant shift in traditional finance.",url:"#",imageUrl:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=400",source:"Banking Weekly",publishedAt:"2026-04-28T09:00:00"},{id:"7",title:"Bitcoin Mining Difficulty Reaches All-Time High",description:"Network security continues to strengthen as miners deploy more computational power to secure the Bitcoin blockchain.",url:"#",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",source:"Mining Today",publishedAt:"2026-04-27T20:15:00"},{id:"8",title:"NFT Market Shows Signs of Recovery with New Collections",description:"Digital collectibles regain attention as major brands launch new NFT projects on Ethereum and Solana.",url:"#",imageUrl:"https://images.unsplash.com/photo-1646463876221-9a37f4a4e5db?w=400",source:"NFT Observer",publishedAt:"2026-04-27T16:45:00"}],Yy=["All","Bitcoin","Ethereum","DeFi","Regulatory","Mining"];function Gy(){const[t]=k.useState(Qy),[e,i]=k.useState(""),[n,r]=k.useState("All"),[s,l]=k.useState([]),[c,o]=k.useState(!1),d=f=>{l(g=>g.includes(f)?g.filter(p=>p!==f):[...g,f])},u=t.filter(f=>{const g=f.title.toLowerCase().includes(e.toLowerCase())||f.description.toLowerCase().includes(e.toLowerCase()),p=n==="All"||n==="Bitcoin"&&f.title.toLowerCase().includes("bitcoin")||n==="Ethereum"&&f.title.toLowerCase().includes("ethereum")||n==="DeFi"&&f.title.toLowerCase().includes("defi")||n==="Regulatory"&&f.title.toLowerCase().includes("sec")||f.title.toLowerCase().includes("regulatory")||n==="Mining"&&f.title.toLowerCase().includes("mining");return g&&p}),h=f=>{const g=new Date(f),x=Math.floor((new Date().getTime()-g.getTime())/(1e3*60*60));return x<1?"Just now":x<24?`${x}h ago`:x<48?"Yesterday":g.toLocaleDateString("en-US",{month:"short",day:"numeric"})};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"text-3xl font-bold text-white flex items-center gap-3",children:[a.jsx(_r,{className:"text-btc-gold"}),"Crypto News"]}),a.jsx("p",{className:"text-btc-text-secondary mt-1",children:"Stay updated with the latest cryptocurrency news"})]}),a.jsxs("div",{className:"relative flex-1 max-w-md",children:[a.jsx(A1,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-btc-text-secondary"}),a.jsx("input",{type:"text",value:e,onChange:f=>i(f.target.value),placeholder:"Search news...",className:"w-full pl-11 pr-4 py-3 bg-btc-dark border border-btc-border rounded-xl text-white placeholder-btc-text-secondary focus:border-btc-gold"})]})]}),a.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:[Yy.map(f=>a.jsx("button",{onClick:()=>r(f),className:`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${n===f?"bg-btc-gold text-btc-dark":"bg-btc-secondary border border-btc-border text-btc-text-secondary hover:text-white hover:border-btc-gold/50"}`,children:f},f)),a.jsx("button",{onClick:()=>o(!0),className:"ml-auto p-2 bg-btc-secondary border border-btc-border rounded-lg text-btc-text-secondary hover:text-white hover:border-btc-gold/50 transition-colors",children:a.jsx(Mm,{size:18,className:c?"animate-spin":""})})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map(f=>a.jsxs("article",{className:"bg-btc-secondary border border-btc-border rounded-xl overflow-hidden hover:border-btc-gold/50 transition-all group",children:[a.jsxs("div",{className:"relative h-48 overflow-hidden",children:[a.jsx("img",{src:f.imageUrl,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:g=>{g.target.src="https://via.placeholder.com/400x200/1E2329/848E9C?text=Crypto+News"}}),a.jsx("button",{onClick:()=>d(f.id),className:"absolute top-3 right-3 p-2 bg-btc-dark/80 rounded-full hover:bg-btc-dark transition-colors",children:s.includes(f.id)?a.jsx(N1,{size:18,className:"text-btc-gold"}):a.jsx(S1,{size:18,className:"text-white"})}),a.jsx("span",{className:"absolute bottom-3 left-3 px-3 py-1 bg-btc-gold/90 text-btc-dark text-xs font-bold rounded-full",children:f.source})]}),a.jsxs("div",{className:"p-5",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-btc-gold transition-colors",children:f.title}),a.jsx("p",{className:"text-btc-text-secondary text-sm mb-4 line-clamp-3",children:f.description}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"flex items-center gap-1 text-xs text-btc-text-secondary",children:[a.jsx(z1,{size:12}),h(f.publishedAt)]}),a.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-sm text-btc-gold hover:underline",children:["Read More ",a.jsx(T1,{size:14})]})]})]})]},f.id))}),u.length===0&&a.jsxs("div",{className:"text-center py-12",children:[a.jsx(_r,{size:48,className:"text-btc-text-secondary mx-auto mb-4"}),a.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"No news found"}),a.jsx("p",{className:"text-btc-text-secondary",children:"Try adjusting your search or category filters"})]}),a.jsx("div",{className:"bg-btc-dark/50 rounded-xl p-4 text-sm",children:a.jsx("p",{className:"text-btc-text-secondary text-center",children:"News powered by NewsAPI. Set VITE_NEWSAPI_KEY in your environment for live crypto news."})})]})}const Jy=[{id:"1",senderId:"admin",senderName:"Support Desk",message:"Welcome to BTCTradePro support. Tell us if you need help with deposit approval, wallet status, or your trade desk.",timestamp:"2026-04-28T10:00:00",isAdmin:!0}];function Zy(){const{user:t}=vi(),[e,i]=k.useState(Jy),[n,r]=k.useState(""),[s,l]=k.useState(!1),c=k.useRef(null);k.useEffect(()=>{var d;(d=c.current)==null||d.scrollIntoView({behavior:"smooth"})},[e,s]);const o=()=>{if(!n.trim())return;const d={id:`msg-${Date.now()}`,senderId:(t==null?void 0:t.id)||"user",senderName:(t==null?void 0:t.name)||"User",message:n,timestamp:new Date().toISOString(),isAdmin:!1};i(u=>[...u,d]),r(""),setTimeout(()=>{l(!0),setTimeout(()=>{l(!1),i(u=>[...u,{id:`msg-${Date.now()+1}`,senderId:"admin",senderName:"Support Desk",message:"Your request has been logged. For wallet actions, our admin reviews pending deposits and withdrawals from the back office queue.",timestamp:new Date().toISOString(),isAdmin:!0}])},1400)},500)};return a.jsxs("div",{className:"support-shell",children:[a.jsx("style",{children:`
        .support-shell {
          display: grid;
          gap: 22px;
          color: #eef3fb;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .hero {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        .hero-main {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hero-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
        }
        .hero h1 {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .hero p {
          color: #8fa2ba;
          margin-top: 6px;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
          font-size: 12px;
          font-weight: 700;
        }
        .grid {
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          gap: 18px;
        }
        .sidebar,
        .chat-card {
          min-height: 620px;
        }
        .sidebar {
          padding: 22px;
        }
        .sidebar h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .quick-list {
          display: grid;
          gap: 10px;
        }
        .quick-btn {
          text-align: left;
          min-height: 46px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
        }
        .chat-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-head {
          padding: 18px 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .chat-stream {
          flex: 1;
          overflow-y: auto;
          padding: 22px;
          display: grid;
          gap: 14px;
        }
        .message-row {
          display: flex;
        }
        .message-row.user {
          justify-content: flex-end;
        }
        .message-wrap {
          max-width: min(78%, 620px);
          display: flex;
          gap: 10px;
        }
        .message-row.user .message-wrap {
          flex-direction: row-reverse;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.07);
          overflow: hidden;
          flex-shrink: 0;
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bubble {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
        }
        .message-row.user .bubble {
          background: rgba(247, 147, 26, 0.16);
        }
        .bubble strong {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
          font-size: 13px;
        }
        .bubble p {
          line-height: 1.7;
          color: #d2dbea;
        }
        .bubble small {
          display: block;
          margin-top: 8px;
          color: #8fa2ba;
        }
        .composer {
          padding: 18px 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          gap: 12px;
        }
        .composer input {
          flex: 1;
          min-height: 50px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
          padding: 0 16px;
        }
        .send-btn {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
        }
        @media (max-width: 980px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .sidebar,
          .chat-card {
            min-height: unset;
          }
        }
      `}),a.jsxs("section",{className:"card hero",children:[a.jsxs("div",{className:"hero-main",children:[a.jsx("div",{className:"hero-icon",children:a.jsx(zm,{size:24})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Support Center"}),a.jsx("p",{children:"Professional help desk for wallet issues, KYC, and trade questions."})]})]}),a.jsxs("div",{className:"status-pill",children:[a.jsx(ci,{size:16}),"Live Team Online"]})]}),a.jsxs("section",{className:"grid",children:[a.jsxs("aside",{className:"card sidebar",children:[a.jsx("h3",{children:"Quick actions"}),a.jsx("div",{className:"quick-list",children:["Deposit approval","Withdrawal queue","Trade issue","KYC question"].map(d=>a.jsx("button",{className:"quick-btn",onClick:()=>r(d),children:d},d))})]}),a.jsxs("div",{className:"card chat-card",children:[a.jsxs("div",{className:"chat-head",children:[a.jsx("strong",{children:"Conversation"}),a.jsx("span",{className:"status-pill",children:"Avg. response: 5 min"})]}),a.jsxs("div",{className:"chat-stream",children:[e.map(d=>a.jsx("div",{className:`message-row ${d.isAdmin?"admin":"user"}`,children:a.jsxs("div",{className:"message-wrap",children:[a.jsx("div",{className:"avatar",children:d.isAdmin?a.jsx(ci,{size:18}):t!=null&&t.avatar?a.jsx("img",{src:t.avatar,alt:t.name}):a.jsx(Ur,{size:18})}),a.jsxs("div",{className:"bubble",children:[a.jsxs("strong",{children:[d.senderName,d.isAdmin&&a.jsx(Ji,{size:14,color:"#0ecb81"})]}),a.jsx("p",{children:d.message}),a.jsx("small",{children:new Date(d.timestamp).toLocaleTimeString()})]})]})},d.id)),s&&a.jsx("div",{className:"message-row admin",children:a.jsxs("div",{className:"message-wrap",children:[a.jsx("div",{className:"avatar",children:a.jsx(ci,{size:18})}),a.jsx("div",{className:"bubble",children:a.jsx("p",{children:"Support is typing..."})})]})}),a.jsx("div",{ref:c})]}),a.jsxs("div",{className:"composer",children:[a.jsx("input",{value:n,onChange:d=>r(d.target.value),onKeyDown:d=>d.key==="Enter"&&o(),placeholder:"Type your support request..."}),a.jsx("button",{className:"send-btn",onClick:o,children:a.jsx($1,{size:20})})]})]})]})]})}function Gi(t){return t?new Date(t).toLocaleString():"Not available"}function Qh(t){return t.replace("_"," ")}function ew(){const{users:t,walletRequests:e,kycRequests:i,walletAddress:n,setWalletAddress:r,approveTransaction:s,rejectTransaction:l,approveVerification:c,rejectVerification:o}=Kr(),[d,u]=k.useState(!1),[h,f]=k.useState(n),[g,p]=k.useState(!1),[x,y]=k.useState(null),v=()=>{h.trim()&&(r(h.trim()),u(!1),p(!0),window.setTimeout(()=>p(!1),2e3))},m=()=>{f(n),u(!1)},b=t.filter(S=>S.role!=="admin").sort((S,Q)=>new Date(Q.joinedDate).getTime()-new Date(S.joinedDate).getTime()),w=e.filter(S=>S.status==="pending").sort((S,Q)=>new Date(Q.timestamp).getTime()-new Date(S.timestamp).getTime()),j=i.filter(S=>S.status==="pending").sort((S,Q)=>new Date(Q.submittedAt).getTime()-new Date(S.submittedAt).getTime()),_=e.filter(S=>S.status!=="pending").sort((S,Q)=>new Date(Q.reviewedAt||Q.timestamp).getTime()-new Date(S.reviewedAt||S.timestamp).getTime()).slice(0,10),C=i.filter(S=>S.status!=="pending").sort((S,Q)=>new Date(Q.reviewedAt||Q.submittedAt).getTime()-new Date(S.reviewedAt||S.submittedAt).getTime()).slice(0,10),P=b.filter(S=>S.verificationStatus==="approved").length,U=b.filter(S=>S.verificationStatus==="pending").length,R=w.reduce((S,Q)=>S+Q.amount,0),V=x==null?void 0:x.user;return a.jsxs("div",{className:"admin-page",children:[a.jsx("style",{children:`
        .admin-page {
          display: grid;
          gap: 22px;
          color: #edf2fb;
        }
        .admin-card {
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at top right, rgba(52, 120, 246, 0.12), transparent 24%),
            linear-gradient(180deg, rgba(15, 19, 28, 0.96), rgba(11, 16, 24, 0.94));
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.26);
        }
        .hero {
          padding: 26px;
          display: grid;
          gap: 20px;
        }
        .hero-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        .hero-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hero-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(52, 120, 246, 0.14);
          color: #7fb0ff;
        }
        .hero h1 {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 6px;
        }
        .hero p {
          max-width: 700px;
          color: #90a0b7;
          line-height: 1.7;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #d8e1ef;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .hero-badges {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .stat {
          padding: 20px;
          border-radius: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .stat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #95a5bc;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .stat strong {
          display: block;
          margin-top: 14px;
          font-size: 30px;
          font-weight: 800;
        }
        .stat span {
          display: block;
          margin-top: 8px;
          color: #8a9ab2;
          font-size: 13px;
        }
        .section-card {
          padding: 24px;
        }
        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .section-head h2 {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .section-head p {
          color: #8fa2ba;
          font-size: 14px;
        }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #b6c6db;
          font-size: 12px;
          font-weight: 700;
        }
        .queue-list,
        .history-list,
        .user-list {
          display: grid;
          gap: 12px;
        }
        .queue-item,
        .history-item,
        .user-item {
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.03);
          padding: 18px;
        }
        .queue-item {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 16px;
          align-items: center;
        }
        .queue-summary {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          flex-wrap: wrap;
        }
        .queue-line {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          flex-wrap: wrap;
        }
        .queue-meta strong,
        .history-item strong,
        .user-item strong {
          display: block;
          font-size: 16px;
          font-weight: 800;
        }
        .queue-meta small,
        .history-meta,
        .user-meta {
          display: block;
          margin-top: 5px;
          color: #8fa2ba;
          line-height: 1.6;
        }
        .queue-side {
          display: grid;
          gap: 6px;
        }
        .queue-name {
          font-size: 16px;
          font-weight: 800;
          color: #edf2fb;
        }
        .queue-chip {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 0 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          color: #c9d4e4;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .queue-chip.deposit {
          background: rgba(14,203,129,0.14);
          color: #0ecb81;
        }
        .queue-chip.withdraw,
        .queue-chip.kyc {
          background: rgba(247,147,26,0.14);
          color: #f6b353;
        }
        .queue-muted {
          color: #8fa2ba;
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }
        .queue-side span {
          color: #8fa2ba;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .queue-side strong {
          font-size: 20px;
          font-weight: 800;
        }
        .queue-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .action-btn {
          min-height: 42px;
          padding: 0 16px;
          border: none;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          cursor: pointer;
        }
        .detail-btn {
          background: rgba(52,120,246,0.14);
          color: #7fb0ff;
        }
        .approve-btn {
          background: rgba(14, 203, 129, 0.16);
          color: #0ecb81;
        }
        .reject-btn {
          background: rgba(246, 70, 93, 0.16);
          color: #f6465d;
        }
        .two-col {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
          gap: 22px;
        }
        .user-item {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, .8fr);
          gap: 16px;
          align-items: center;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .status-pill.pending {
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
        }
        .status-pill.approved,
        .status-pill.completed {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .status-pill.rejected,
        .status-pill.unverified {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .docs {
          display: grid;
          gap: 8px;
          margin-top: 10px;
        }
        .doc-line {
          color: #8fa2ba;
          font-size: 12px;
          line-height: 1.6;
        }
        .history-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .detail-card {
          padding: 24px;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .detail-block {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.03);
          padding: 18px;
        }
        .detail-block h3 {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          color: #8fa2ba;
          font-size: 13px;
        }
        .detail-value {
          color: #eef3fb;
          font-size: 13px;
          text-align: right;
          word-break: break-word;
        }
        .empty-state {
          border-radius: 20px;
          border: 1px dashed rgba(255,255,255,0.1);
          padding: 20px;
          color: #8fa2ba;
          background: rgba(255,255,255,0.02);
        }
        /* Wallet address editor */
        .wallet-editor-card {
          padding: 24px;
        }
        .wallet-editor-head {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 18px;
        }
        .wallet-editor-head h2 {
          font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
        }
        .wallet-editor-head p {
          color: #8fa2ba; font-size: 13px; line-height: 1.6;
        }
        .wallet-address-row {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .wallet-display {
          flex: 1; min-width: 0;
          padding: 12px 16px; border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          color: #eef3fb; font-size: 13px;
          word-break: break-all; font-family: monospace;
        }
        .wallet-input {
          flex: 1; min-height: 46px; padding: 0 14px; border-radius: 14px;
          background: rgba(6,10,15,0.4); border: 1px solid rgba(247,147,26,0.3);
          color: #eef3fb; font-size: 13px; font-family: monospace;
        }
        .wallet-input:focus { outline: none; border-color: rgba(247,147,26,0.6); }
        .wallet-actions { display: flex; gap: 8px; }
        .wallet-btn {
          min-height: 42px; padding: 0 14px; border: none; border-radius: 12px;
          font-weight: 700; font-size: 13px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .wallet-btn.save { background: rgba(14,203,129,0.16); color: #0ecb81; }
        .wallet-btn.cancel { background: rgba(246,70,93,0.14); color: #f6465d; }
        .wallet-btn.edit {
          background: rgba(247,147,26,0.14); border: 1px solid rgba(247,147,26,0.22);
          color: #f6b353;
        }
        .wallet-saved-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 999px;
          background: rgba(14,203,129,0.14); color: #0ecb81;
          font-size: 12px; font-weight: 700;
        }
        @media (max-width: 1180px) {
          .stats-grid,
          .history-grid,
          .detail-grid,
          .two-col,
          .queue-item,
          .user-item {
            grid-template-columns: 1fr;
          }
          .queue-actions {
            justify-content: flex-start;
          }
        }
        @media (max-width: 760px) {
          .queue-line,
          .queue-summary {
            align-items: flex-start;
          }
          .detail-row {
            flex-direction: column;
          }
          .detail-value {
            text-align: left;
          }
        }
      `}),a.jsxs("section",{className:"admin-card hero",children:[a.jsxs("div",{className:"hero-top",children:[a.jsxs("div",{className:"hero-title",children:[a.jsx("div",{className:"hero-icon",children:a.jsx(ci,{size:26})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Admin Operations"}),a.jsx("p",{children:"Separate back-office review center for users, deposits, withdrawals, and identity checks. Every queue is rebuilt from live app data so pending requests do not get lost."})]})]}),a.jsxs("div",{className:"hero-badges",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx(gl,{size:14}),a.jsxs("span",{children:[b.length," website users"]})]}),a.jsxs("div",{className:"hero-badge",children:[a.jsx(Sm,{size:14}),a.jsxs("span",{children:[w.length+j.length," open reviews"]})]})]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Total Website Users"}),a.jsx(gl,{size:18})]}),a.jsx("strong",{children:b.length}),a.jsx("span",{children:"Every created account is counted here for the admin team"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Pending Wallet"}),a.jsx(xl,{size:18})]}),a.jsx("strong",{children:w.length}),a.jsxs("span",{children:["$",re(R)," waiting for review"]})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Pending KYC"}),a.jsx(ci,{size:18})]}),a.jsx("strong",{children:j.length}),a.jsxs("span",{children:[U," users currently waiting on approval"]})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Verified Users"}),a.jsx(Ji,{size:18})]}),a.jsx("strong",{children:P}),a.jsx("span",{children:"Accounts already approved by admin review"})]})]})]}),a.jsxs("section",{className:"admin-card wallet-editor-card",children:[a.jsxs("div",{className:"wallet-editor-head",children:[a.jsx("div",{style:{width:44,height:44,borderRadius:14,background:"rgba(247,147,26,0.14)",display:"flex",alignItems:"center",justifyContent:"center",color:"#f6b353",flexShrink:0},children:a.jsx(xl,{size:20})}),a.jsxs("div",{children:[a.jsx("h2",{children:"Deposit Wallet Address"}),a.jsx("p",{children:"Configure the BTC wallet address shown to users when they request a deposit. Changing this updates the QR code and address in real time."})]})]}),a.jsxs("div",{className:"wallet-address-row",children:[d?a.jsxs(a.Fragment,{children:[a.jsx("input",{className:"wallet-input",value:h,onChange:S=>f(S.target.value),placeholder:"Enter BTC wallet address"}),a.jsxs("div",{className:"wallet-actions",children:[a.jsxs("button",{className:"wallet-btn save",onClick:v,children:[a.jsx(Ji,{size:15})," Save"]}),a.jsxs("button",{className:"wallet-btn cancel",onClick:m,children:[a.jsx(vl,{size:15})," Cancel"]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"wallet-display",children:n}),a.jsx("div",{className:"wallet-actions",children:a.jsxs("button",{className:"wallet-btn edit",onClick:()=>{f(n),u(!0)},children:[a.jsx(Mm,{size:14})," Edit Address"]})})]}),g&&a.jsxs("div",{className:"wallet-saved-badge",children:[a.jsx(Ji,{size:14})," Saved"]})]})]}),a.jsxs("section",{className:"two-col",children:[a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Pending Wallet Requests"}),a.jsx("p",{children:"Deposits and withdrawals awaiting manual admin action."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(xl,{size:14}),a.jsxs("span",{children:[w.length," active"]})]})]}),a.jsxs("div",{className:"queue-list",children:[w.map(S=>a.jsxs("article",{className:"queue-item",children:[a.jsx("div",{className:"queue-summary",children:a.jsxs("div",{className:"queue-line",children:[a.jsx("span",{className:"queue-name",children:S.userName}),a.jsx("span",{className:`queue-chip ${S.type}`,children:S.type}),a.jsx("span",{className:"queue-muted",children:S.userEmail}),a.jsxs("span",{className:"queue-muted",children:["$",re(S.amount)]}),a.jsx("span",{className:"queue-muted",children:S.btcAmount?`${S.btcAmount.toFixed(8)} BTC`:"USD request only"}),a.jsxs("span",{className:"queue-muted",children:["Submitted ",Gi(S.timestamp)]})]})}),a.jsxs("div",{className:"queue-actions",children:[a.jsx("button",{className:"action-btn detail-btn",onClick:()=>y({kind:"wallet",request:S,user:t.find(Q=>Q.email.toLowerCase()===S.userEmail.toLowerCase())}),children:a.jsx("span",{children:"View details"})}),a.jsxs("button",{className:"action-btn approve-btn",onClick:()=>s(S.id),children:[a.jsx(Ji,{size:16}),a.jsx("span",{children:"Verify"})]}),a.jsxs("button",{className:"action-btn reject-btn",onClick:()=>l(S.id),children:[a.jsx(vl,{size:16}),a.jsx("span",{children:"Reject"})]})]})]},S.id)),w.length===0&&a.jsx("div",{className:"empty-state",children:"No wallet requests are waiting right now."})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Pending KYC Reviews"}),a.jsx("p",{children:"Identity requests sent from user profiles for verification."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(ci,{size:14}),a.jsxs("span",{children:[j.length," active"]})]})]}),a.jsxs("div",{className:"queue-list",children:[j.map(S=>a.jsxs("article",{className:"queue-item",children:[a.jsx("div",{className:"queue-summary",children:a.jsxs("div",{className:"queue-line",children:[a.jsx("span",{className:"queue-name",children:S.userName||S.fullName}),a.jsx("span",{className:"queue-chip kyc",children:"KYC"}),a.jsx("span",{className:"queue-muted",children:S.userEmail}),a.jsx("span",{className:"queue-muted",children:S.country||"No country"}),a.jsx("span",{className:"queue-muted",children:Qh(S.documentType)}),a.jsxs("span",{className:"queue-muted",children:["Submitted ",Gi(S.submittedAt)]})]})}),a.jsxs("div",{className:"queue-actions",children:[a.jsx("button",{className:"action-btn detail-btn",onClick:()=>y({kind:"kyc",request:S,user:t.find(Q=>Q.email.toLowerCase()===S.userEmail.toLowerCase())}),children:a.jsx("span",{children:"View details"})}),a.jsxs("button",{className:"action-btn approve-btn",onClick:()=>c(S.userEmail),children:[a.jsx(Ji,{size:16}),a.jsx("span",{children:"Verify"})]}),a.jsxs("button",{className:"action-btn reject-btn",onClick:()=>o(S.userEmail),children:[a.jsx(vl,{size:16}),a.jsx("span",{children:"Reject"})]})]})]},S.id)),j.length===0&&a.jsx("div",{className:"empty-state",children:"No KYC reviews are waiting right now."})]})]})]}),a.jsxs("section",{className:"admin-card detail-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Request Details"}),a.jsx("p",{children:x?"Selected user and request information.":"Choose View details from any request to inspect the full user submission."})]}),x&&a.jsx("div",{className:"section-tag",children:a.jsx("span",{children:x.kind==="wallet"?"Wallet request":"KYC request"})})]}),x?a.jsxs("div",{className:"detail-grid",children:[a.jsxs("div",{className:"detail-block",children:[a.jsx("h3",{children:"User information"}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Name"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.name)||(x.kind==="kyc"?x.request.fullName:x.request.userName)||"Not available"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Email"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.email)||x.request.userEmail})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Phone"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.phone)||(x.kind==="kyc"?x.request.phone:"Not provided")})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Country"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.country)||(x.kind==="kyc"?x.request.country:"Not provided")})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"City"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.city)||(x.kind==="kyc"?x.request.city:"Not provided")})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Post code"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.postCode)||(x.kind==="kyc"?x.request.postCode:"Not provided")})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Job"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.job)||(x.kind==="kyc"?x.request.job:"Not provided")})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Timezone"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.timezone)||"Not provided"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Telegram"}),a.jsx("span",{className:"detail-value",children:(V==null?void 0:V.telegram)||"Not provided"})]})]}),a.jsxs("div",{className:"detail-block",children:[a.jsx("h3",{children:x.kind==="wallet"?"Request information":"Verification submission"}),x.kind==="wallet"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Request type"}),a.jsx("span",{className:"detail-value",children:x.request.type})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"USD amount"}),a.jsxs("span",{className:"detail-value",children:["$",re(x.request.amount)]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"BTC amount"}),a.jsx("span",{className:"detail-value",children:x.request.btcAmount?x.request.btcAmount.toFixed(8):"Not stored"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Deposit wallet"}),a.jsx("span",{className:"detail-value",children:x.request.walletAddress||"Not supplied"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Withdraw address"}),a.jsx("span",{className:"detail-value",children:x.request.withdrawAddress||"Not supplied"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Submitted"}),a.jsx("span",{className:"detail-value",children:Gi(x.request.timestamp)})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Full name"}),a.jsx("span",{className:"detail-value",children:x.request.fullName})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Document type"}),a.jsx("span",{className:"detail-value",children:Qh(x.request.documentType)})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Front document"}),a.jsx("span",{className:"detail-value",children:x.request.frontImage||"Not uploaded"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Back document"}),a.jsx("span",{className:"detail-value",children:x.request.backImage||"Not uploaded"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Submitted"}),a.jsx("span",{className:"detail-value",children:Gi(x.request.submittedAt)})]})]})]})]}):a.jsx("div",{className:"empty-state",children:"No request selected yet."})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Registered Website Users"}),a.jsx("p",{children:"Every account created on the website appears here with verification status, timezone, and balances."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(gl,{size:14}),a.jsxs("span",{children:[b.length," accounts"]})]})]}),a.jsxs("div",{className:"user-list",children:[b.map(S=>a.jsxs("article",{className:"user-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:S.name}),a.jsx("div",{className:"user-meta",children:S.email}),a.jsxs("div",{className:"user-meta",children:["Joined ",S.joinedDate]})]}),a.jsxs("div",{children:[a.jsx("div",{className:`status-pill ${S.verificationStatus||"unverified"}`,children:S.verificationStatus||"unverified"}),a.jsxs("div",{className:"user-meta",children:[S.country||"Country not set"," • ",S.timezone||"Timezone not set"]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"user-meta",children:["USD $",re(S.usdBalance)]}),a.jsxs("div",{className:"user-meta",children:["BTC ",(S.btcBalance||0).toFixed(6)]})]})]},S.email)),b.length===0&&a.jsx("div",{className:"empty-state",children:"No registered users found."})]})]}),a.jsxs("section",{className:"history-grid",children:[a.jsxs("section",{className:"admin-card section-card",children:[a.jsx("div",{className:"section-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Wallet Review History"}),a.jsx("p",{children:"Latest deposit and withdrawal decisions made by admin."})]})}),a.jsxs("div",{className:"history-list",children:[_.map(S=>a.jsxs("article",{className:"history-item",children:[a.jsx("strong",{children:S.userName}),a.jsx("div",{className:`status-pill ${S.status}`,children:S.status}),a.jsx("div",{className:"history-meta",children:S.userEmail}),a.jsxs("div",{className:"history-meta",children:[S.type," • $",re(S.amount)]}),a.jsx("div",{className:"history-meta",children:S.btcAmount?`${S.btcAmount.toFixed(8)} BTC`:"No BTC amount stored"}),a.jsxs("div",{className:"history-meta",children:["Reviewed ",Gi(S.reviewedAt||S.timestamp),S.reviewedBy?` • ${S.reviewedBy}`:""]})]},S.id)),_.length===0&&a.jsx("div",{className:"empty-state",children:"No wallet reviews have been completed yet."})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsx("div",{className:"section-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"KYC Review History"}),a.jsx("p",{children:"Latest identity approval and rejection activity."})]})}),a.jsxs("div",{className:"history-list",children:[C.map(S=>a.jsxs("article",{className:"history-item",children:[a.jsx("strong",{children:S.fullName}),a.jsx("div",{className:`status-pill ${S.status}`,children:S.status}),a.jsx("div",{className:"history-meta",children:S.userEmail}),a.jsxs("div",{className:"history-meta",children:[S.country,", ",S.city," • ",S.documentType.replace("_"," ")]}),a.jsxs("div",{className:"history-meta",children:["Reviewed ",Gi(S.reviewedAt||S.submittedAt),S.reviewedBy?` • ${S.reviewedBy}`:""]})]},S.id)),C.length===0&&a.jsx("div",{className:"empty-state",children:"No KYC reviews have been completed yet."})]})]})]})]})}function tw(){const{login:t,register:e}=vi(),[i,n]=k.useState(""),[r,s]=k.useState(""),[l,c]=k.useState(""),[o,d]=k.useState(!1),[u,h]=k.useState(!1),f=g=>{if(g.preventDefault(),u){e(i,r,l);return}t(i,l)};return a.jsxs("div",{className:"min-h-screen bg-btc-dark flex items-center justify-center p-4 relative overflow-hidden",children:[a.jsx("style",{children:`
        .auth-shell {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
          z-index: 1;
        }
        .auth-card-wrap {
          position: relative;
          width: 100%;
          max-width: 448px;
          margin: 0 auto;
        }
        .auth-card {
          background: rgba(30, 35, 41, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(14px);
        }
        .auth-toggle-panel {
          margin-top: 24px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }
        .auth-stats {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 32px;
        }
        .auth-stat {
          text-align: center;
        }
        @media (max-width: 640px) {
          .auth-shell {
            gap: 18px;
            max-width: 760px;
          }
          .auth-card-wrap {
            max-width: 520px;
          }
          .auth-card {
            padding: 28px 24px;
            border-radius: 22px;
          }
          .auth-stats {
            gap: 18px;
            padding: 0 6px;
          }
          .auth-stat p:first-child {
            font-size: 12px;
          }
          .auth-stat p:last-child {
            font-size: 16px;
          }
        }
        @media (max-width: 420px) {
          .auth-card {
            padding: 24px 18px;
          }
          .auth-stats {
            gap: 14px;
          }
        }
      `}),a.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[a.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-btc-gold/5 rounded-full blur-3xl animate-pulse"}),a.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-btc-green/5 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),[...Array(6)].map((g,p)=>a.jsx("div",{className:"absolute text-btc-gold/10 text-8xl font-bold animate-float",style:{top:`${20+p*15}%`,left:`${10+p*15}%`,animationDelay:`${p*.5}s`,transform:`rotate(${p*30}deg)`},children:"₿"},p))]}),a.jsxs("div",{className:"auth-shell",children:[a.jsx("div",{className:"auth-card-wrap",children:a.jsxs("div",{className:"auth-card",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx(xe,{to:"/",className:"inline-flex text-btc-text-secondary hover:text-btc-gold text-sm mb-6",children:"Back to home"}),a.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-btc-gold to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow",children:a.jsx("span",{className:"text-4xl font-bold text-btc-dark",children:"₿"})}),a.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"BTC Trade"}),a.jsx("p",{className:"text-btc-text-secondary",children:"Professional Cryptocurrency Trading"})]}),a.jsxs("form",{onSubmit:f,className:"space-y-5",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"User Name"}),a.jsx("input",{type:"text",value:i,onChange:g=>n(g.target.value),placeholder:"Enter your user name",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),u&&a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Email (Optional)"}),a.jsx("input",{type:"email",value:r,onChange:g=>s(g.target.value),placeholder:"Enter your email",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:o?"text":"password",value:l,onChange:g=>c(g.target.value),placeholder:"Enter your password",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all pr-12"}),a.jsx("button",{type:"button",onClick:()=>d(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-btc-text-secondary hover:text-white transition-colors",children:o?a.jsx(_1,{size:20}):a.jsx(P1,{size:20})})]})]}),a.jsx("button",{type:"submit",className:"w-full py-3 bg-gradient-to-r from-btc-gold to-yellow-500 text-btc-dark font-bold rounded-lg hover:shadow-lg hover:shadow-btc-gold/30 transition-all duration-300 transform hover:scale-[1.02]",children:u?"Create Account":"Sign In"})]}),a.jsx("div",{className:"auth-toggle-panel",children:a.jsxs("p",{className:"text-center text-btc-text-secondary",children:[u?"Already have an account?":"Don't have an account?"," ",a.jsx("button",{onClick:()=>h(!u),className:"text-btc-gold hover:underline font-medium",children:u?"Sign In":"Sign Up"})]})}),a.jsx("div",{className:"mt-4 p-3 bg-btc-dark/50 rounded-lg border border-btc-border",children:a.jsx("p",{className:"text-xs text-btc-text-secondary text-center",children:u?"New accounts start as unverified and must complete profile verification before trading.":"Demo: Click Sign In with pre-filled credentials"})})]})}),a.jsxs("div",{className:"auth-stats",children:[a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"24h Volume"}),a.jsx("p",{className:"text-white font-bold",children:"$2.4B"})]}),a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Active Traders"}),a.jsx("p",{className:"text-white font-bold",children:"45,892"})]}),a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Win Rate"}),a.jsx("p",{className:"text-btc-green font-bold",children:"78%"})]})]})]})]})}const og="btcUsers",Ko="btcAuthSession",cg="btcTransactions",dg="btcWalletRequests",ug="btcTrades",Xo="btcActiveTrade",Qo="btcTradeResult",hg="btcKycRequests",fg=k.createContext(null),pg=k.createContext(null),Yo="system@btcplatform.com",mg="System Admin",iw="admin123",Yh={id:"admin-session",email:Yo,name:mg,avatar:_i,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!0,verificationStatus:"approved",vipLevel:5,joinedDate:"2024-01-01",role:"admin",phone:"+1 555 300 9000",country:"United States",timezone:"UTC",telegram:"@BTCTradeSystem"},Dr=[],nw=new Map(Dr.map(t=>[t.email.toLowerCase(),t]));function xi(t,e){try{const i=localStorage.getItem(t);return i?JSON.parse(i):e}catch{return localStorage.removeItem(t),e}}function Ht(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(i){console.error(`Failed to persist ${t}:`,i)}}function js(t){try{localStorage.removeItem(t)}catch(e){console.error(`Failed to remove ${t}:`,e)}}function J(t,e=0){const i=typeof t=="number"?t:Number(t);return Number.isFinite(i)?i:e}function F(t,e=""){return typeof t=="string"?t:e}function _n(t){const e=F(t);return e?e.startsWith("data:")?"Document uploaded":e:""}function Gh(){var t,e;return typeof window>"u"?"UTC":((e=(t=window.Intl)==null?void 0:t.DateTimeFormat)==null?void 0:e.call(t).resolvedOptions().timeZone)||"UTC"}function rw(t){if(!t)return;const e=Zc(t.tier);return{...t,tier:e.tier,displayName:F(t.displayName,e.name),price:J(t.price,e.price),tradeWindowHours:J(t.tradeWindowHours,e.tradeWindowHours),autoAmount:J(t.autoAmount),purchasedAt:F(t.purchasedAt,new Date().toISOString()),expiresAt:F(t.expiresAt,new Date(Date.now()+e.tradeWindowHours*60*60*1e3).toISOString()),lastAccruedAt:t.lastAccruedAt?F(t.lastAccruedAt):void 0,lastTradeAt:t.lastTradeAt?F(t.lastTradeAt):void 0,lockedAmount:J(t.lockedAmount,J(t.autoAmount)),currentProfit:J(t.currentProfit),totalTrades:J(t.totalTrades),totalProfit:J(t.totalProfit),active:!!t.active}}function Go(t){return{...nw.get(F(t.email).toLowerCase()),...t,id:F(t.id,`user-${Date.now()}`),email:F(t.email),name:F(t.name,"Trader"),avatar:F(t.avatar,_i),btcBalance:J(t.btcBalance),usdBalance:J(t.usdBalance),stakeAmount:J(t.stakeAmount),vipLevel:J(t.vipLevel),joinedDate:F(t.joinedDate,new Date().toISOString().slice(0,10)),aiTrading:rw(t.aiTrading),kyc:t.kyc?{...t.kyc,fullName:F(t.kyc.fullName,F(t.name,"Trader")),phone:F(t.kyc.phone),country:F(t.kyc.country),city:F(t.kyc.city),postCode:F(t.kyc.postCode),job:F(t.kyc.job),frontImage:_n(t.kyc.frontImage),backImage:_n(t.kyc.backImage)}:t.kyc}}function sw(t){const e=new Map;return Dr.forEach(i=>{e.set(i.email.toLowerCase(),Go(i))}),t.filter(i=>i.role!=="admin").forEach(i=>{e.set(i.email.toLowerCase(),Go(i))}),Array.from(e.values())}function aw(t){return{...t,id:F(t.id,`tx-${Date.now()}`),type:t.type,amount:J(t.amount),btcAmount:t.btcAmount===void 0?void 0:J(t.btcAmount),walletAddress:t.walletAddress?F(t.walletAddress):t.walletAddress,withdrawAddress:t.withdrawAddress?F(t.withdrawAddress):t.withdrawAddress,userEmail:t.userEmail?F(t.userEmail):t.userEmail,userName:t.userName?F(t.userName):t.userName,status:t.status,timestamp:F(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?F(t.reviewedBy):t.reviewedBy}}function gg(t){return t.type!=="deposit"&&t.type!=="withdraw"||!t.userEmail?null:{id:F(t.id,`tx-${Date.now()}`),type:t.type,amount:J(t.amount),btcAmount:t.btcAmount===void 0?void 0:J(t.btcAmount),walletAddress:t.walletAddress?F(t.walletAddress):void 0,withdrawAddress:t.withdrawAddress?F(t.withdrawAddress):void 0,userEmail:F(t.userEmail),userName:F(t.userName,"Trader"),status:t.status,timestamp:F(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?F(t.reviewedBy):void 0,reviewedAt:void 0}}function lw(t){return!t.kyc||t.kyc.status!=="pending"?null:{id:`kyc-profile-${t.id}`,userEmail:F(t.email),userName:F(t.name,"Trader"),fullName:F(t.kyc.fullName,t.name),phone:F(t.kyc.phone),country:F(t.kyc.country),city:F(t.kyc.city),postCode:F(t.kyc.postCode),job:F(t.kyc.job),documentType:t.kyc.documentType,frontImage:_n(t.kyc.frontImage),backImage:_n(t.kyc.backImage),status:"pending",submittedAt:F(t.kyc.submittedAt,new Date().toISOString()),reviewedAt:t.kyc.reviewedAt?F(t.kyc.reviewedAt):void 0,reviewedBy:t.kyc.reviewedBy?F(t.kyc.reviewedBy):void 0}}function Jo(t,e){const i=new Map;return e.forEach(n=>{const r=gg(n);r&&i.set(r.id,r)}),t.forEach(n=>{const r=i.get(n.id);i.set(n.id,{...r||{},...n,reviewedAt:n.reviewedAt||(r==null?void 0:r.reviewedAt),reviewedBy:n.reviewedBy||(r==null?void 0:r.reviewedBy)})}),Array.from(i.values()).sort((n,r)=>new Date(r.reviewedAt||r.timestamp).getTime()-new Date(n.reviewedAt||n.timestamp).getTime())}function Zo(t,e){const i=new Map;return e.forEach(n=>{const r=lw(n);r&&i.set(n.email.toLowerCase(),r)}),t.forEach(n=>{const r=n.userEmail.toLowerCase(),s=i.get(r);i.set(r,{...s||{},...n,frontImage:_n(n.frontImage||(s==null?void 0:s.frontImage)),backImage:_n(n.backImage||(s==null?void 0:s.backImage)),reviewedAt:n.reviewedAt||(s==null?void 0:s.reviewedAt),reviewedBy:n.reviewedBy||(s==null?void 0:s.reviewedBy)})}),Array.from(i.values()).sort((n,r)=>new Date(r.reviewedAt||r.submittedAt).getTime()-new Date(n.reviewedAt||n.submittedAt).getTime())}function ow(t){return{...t,id:F(t.id,`trade-${Date.now()}`),pair:F(t.pair,"BTC/USD"),amount:J(t.amount),leverage:J(t.leverage,1),entryPrice:J(t.entryPrice),exitPrice:t.exitPrice===void 0?void 0:J(t.exitPrice),liquidationPrice:t.liquidationPrice===void 0?void 0:J(t.liquidationPrice),entryTime:t.entryTime===void 0?void 0:J(t.entryTime),exitTime:t.exitTime===void 0?void 0:J(t.exitTime),timeframe:F(t.timeframe,"1m"),timestamp:F(t.timestamp,new Date().toISOString()),userEmail:t.userEmail?F(t.userEmail):t.userEmail,pnl:t.pnl===void 0?void 0:J(t.pnl),priceMovePct:t.priceMovePct===void 0?void 0:J(t.priceMovePct),source:t.source==="ai"?"ai":"manual",aiPlanTier:t.aiPlanTier}}function cw(t){return{...t,id:F(t.id,`trade-${Date.now()}`),pair:F(t.pair,"BTC/USD"),amount:J(t.amount),leverage:J(t.leverage,1),entryPrice:J(t.entryPrice),liquidationPrice:J(t.liquidationPrice),timeframe:F(t.timeframe,"1m"),timeframeValue:F(t.timeframeValue,"1m"),tradeSeconds:J(t.tradeSeconds,60),entryTime:J(t.entryTime,Math.floor(Date.now()/1e3)),openedAt:F(t.openedAt,new Date().toISOString()),endTime:F(t.endTime,new Date(Date.now()+6e4).toISOString()),userEmail:F(t.userEmail)}}function dw(t){return{...t,tradeId:F(t.tradeId),won:!!t.won,pnl:J(t.pnl),exitPrice:J(t.exitPrice),exitTime:J(t.exitTime,Math.floor(Date.now()/1e3)),priceMovePct:J(t.priceMovePct),outcomeReason:t.outcomeReason}}function uw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.email=="string")}function hw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.type=="string")}function fw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function pw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function mw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.pair=="string")}function gw(t){return!!(t&&typeof t=="object"&&typeof t.id=="string"&&typeof t.userEmail=="string"&&typeof t.entryPrice=="number"&&typeof t.amount=="number"&&typeof t.leverage=="number"&&typeof t.endTime=="string")}function xw(t){return!!(t&&typeof t=="object"&&typeof t.tradeId=="string"&&typeof t.pnl=="number"&&typeof t.won=="boolean")}const ec=()=>{const t=xi(og,Dr);return uw(t)?sw(t):Dr.map(Go)};function vw(){return xi(Ko,null)}const xg=()=>{const t=xi(cg,[]);return hw(t)?t.map(aw):[]},bw=()=>{const t=xi(dg,[]),e=fw(t)?t:[];return Jo(e,xg())},yw=()=>{const t=xi(hg,[]),e=pw(t)?t:[];return Zo(e,ec())},ww=()=>{const t=xi(ug,[]);return mw(t)?t.map(ow):[]},kw=()=>{const t=xi(Xo,null);return gw(t)?cw(t):null},jw=()=>{const t=xi(Qo,null);return xw(t)?dw(t):null},vi=()=>{const t=k.useContext(fg);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},Kr=()=>{const t=k.useContext(pg);if(!t)throw new Error("useApp must be used within AppProvider");return t};function Nw(){const[t,e]=k.useState(()=>typeof window>"u"?Dr:ec()),[i,n]=k.useState(()=>{if(typeof window>"u")return null;const $=vw();if(($==null?void 0:$.role)==="admin"&&$.email.toLowerCase()===Yo)return Yh;const E=$==null?void 0:$.email;return E&&ec().find(N=>N.email===E)||null}),[r,s]=k.useState(()=>Bu()),[l,c]=k.useState(!1),[o,d]=k.useState(()=>typeof window>"u"?[]:xg()),[u,h]=k.useState(()=>typeof window>"u"?[]:bw()),[f,g]=k.useState(()=>typeof window>"u"?[]:yw()),[p,x]=k.useState(()=>typeof window>"u"?[]:ww()),[y,v]=k.useState(()=>typeof window>"u"?null:kw()),[m,b]=k.useState(()=>typeof window>"u"?null:jw()),[w,j]=k.useState(()=>Jc);k.useEffect(()=>{Ht(og,t)},[t]),k.useEffect(()=>{Ht(cg,o)},[o]),k.useEffect(()=>{h($=>{const E=Jo($,o);return JSON.stringify(E)===JSON.stringify($)?$:E})},[o]),k.useEffect(()=>{Ht(dg,u)},[u]),k.useEffect(()=>{g($=>{const E=Zo($,t);return JSON.stringify(E)===JSON.stringify($)?$:E})},[t]),k.useEffect(()=>{Ht(hg,f)},[f]),k.useEffect(()=>{Ht(ug,p)},[p]),k.useEffect(()=>{y?Ht(Xo,y):js(Xo)},[y]),k.useEffect(()=>{m?Ht(Qo,m):js(Qo)},[m]),k.useEffect(()=>{js("btcCurrentUserEmail"),i?Ht(Ko,{email:i.email,role:i.role||"user"}):js(Ko)},[i]),k.useEffect(()=>{sv(async()=>{const{DEPOSIT_WALLET:$}=await Promise.resolve().then(()=>o1);return{DEPOSIT_WALLET:$}},void 0).then(({DEPOSIT_WALLET:$})=>{})},[]),k.useEffect(()=>{let $=!0,E=null,L=null;const N=async()=>{try{const Z=await f1();$&&(s(Z),c(!0))}catch{$&&(s(Z=>Bu(Z.price)),c(!0))}},q=()=>{$&&(L=p1(Z=>{$&&(s(Z),c(!0))},Z=>{$&&(Z==="closed"||Z==="error")&&(E&&window.clearTimeout(E),E=window.setTimeout(()=>{q()},3e3))}))};N(),q();const K=setInterval(N,3e4);return()=>{$=!1,L==null||L(),E&&window.clearTimeout(E),clearInterval(K)}},[]);const _=($,E)=>{let L=i;e(N=>N.map(q=>{if(q.email!==$)return q;const K=E(q);return(i==null?void 0:i.email)===$&&(L=K),K})),L&&L.email===$&&n(L)},C=($,E)=>{const N=$.trim().toLowerCase();if((N===mg.toLowerCase()||N===Yo.toLowerCase())&&E===iw){n(Yh);return}const q=t.find(K=>K.name.trim().toLowerCase()===N||K.email.trim().toLowerCase()===N);if(q){if(q.password&&q.password!==E){alert("Incorrect password");return}n(q);return}alert("Incorrect username or password")},P=($,E,L)=>{const N=$.trim(),q=E.trim().toLowerCase();if(!N||!L.trim()){alert("Username and password are required");return}const K=N.toLowerCase().replace(/[^a-z0-9]+/g,"")||`user${Date.now()}`,Z=q||`${K}@btcplatform.com`;if(t.find(de=>de.email.toLowerCase()===Z)){alert("That email is already registered");return}const Se={...Do,id:`user-${Date.now()}`,email:Z,name:N,avatar:_i,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:L,phone:"",country:"",city:"",postCode:"",job:"",timezone:Gh(),telegram:"",kyc:{fullName:N,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(de=>[Se,...de]),n(Se)},U=({email:$,name:E,avatar:L})=>{const N=$.trim().toLowerCase(),q=E.trim()||"Google User";if(!N){alert("Google account email is missing");return}const K=t.find(te=>te.email.toLowerCase()===N);if(K){const te={...K,name:q,avatar:L||K.avatar||_i};e(Se=>Se.map(de=>de.email===K.email?te:de)),n(te);return}const Z={...Do,id:`user-${Date.now()}`,email:N,name:q,avatar:L||_i,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:void 0,phone:"",country:"",city:"",postCode:"",job:"",timezone:Gh(),telegram:"",kyc:{fullName:q,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(te=>[Z,...te]),n(Z)},R=()=>{n(null)},V=$=>{if(!i)return;const E={...i,...$};n(E),e(L=>L.map(N=>N.email===i.email?E:N))},S=$=>{g(E=>{const L=E.filter(N=>N.userEmail.toLowerCase()!==$.userEmail.toLowerCase());return Zo([$,...L],t)})},Q=$=>{if(!i)return;const E={...$,userEmail:$.userEmail||i.email,userName:$.userName||i.name};if(d(L=>[E,...L]),E.type==="deposit"||E.type==="withdraw"){const L=gg(E);if(!L)return;h(N=>Jo([L,...N],o))}},ke=$=>{if(!i)return;const E={...$,userEmail:$.userEmail||i.email};x(L=>[E,...L])},De=$=>{b(null),v($)},Pe=()=>{b(null)};k.useEffect(()=>{if(!y)return;const $=(N,q)=>{const K=N==="liquidation"?{pnl:-y.amount,directionalMovePct:-(100/y.leverage)}:jm({entryPrice:y.entryPrice,exitPrice:q,amount:y.amount,leverageValue:y.leverage,tradeDirection:y.direction}),Z=Math.floor(Date.now()/1e3),te={id:y.id,pair:y.pair,direction:y.direction,amount:y.amount,leverage:y.leverage,entryPrice:y.entryPrice,exitPrice:q,liquidationPrice:y.liquidationPrice,entryTime:y.entryTime,exitTime:Z,timeframe:y.timeframe,status:K.pnl>=0?"won":"lost",timestamp:new Date().toISOString(),userEmail:y.userEmail,pnl:K.pnl,priceMovePct:K.directionalMovePct,outcomeReason:N};x(Se=>[te,...Se]),_(y.userEmail,Se=>({...Se,usdBalance:Math.max(0,Se.usdBalance+K.pnl)})),b({tradeId:y.id,won:K.pnl>=0,pnl:K.pnl,exitPrice:q,exitTime:Z,priceMovePct:K.directionalMovePct,outcomeReason:N}),v(null)},E=()=>{const N=Date.now();if(y.direction==="up"?r.price<=y.liquidationPrice:r.price>=y.liquidationPrice){$("liquidation",r.price);return}N>=new Date(y.endTime).getTime()&&$("expiry",r.price)};E();const L=window.setInterval(E,1e3);return()=>{window.clearInterval(L)}},[y,r.price,i]),k.useEffect(()=>{var E;if(!i||i.role==="admin"||!((E=i.aiTrading)!=null&&E.active))return;const $=window.setInterval(()=>{const L=i,N=L.aiTrading;if(!(N!=null&&N.active))return;const q=Date.now(),K=new Date(N.expiresAt).getTime(),Z=N.lastAccruedAt?new Date(N.lastAccruedAt).getTime():q,te=Math.max(1,Math.floor((q-Z)/1e3)),de=d1(N.autoAmount)*te,ht=Number.isFinite(K)&&q>=K,D=new Date(q).toISOString();_(L.email,Ye=>{var ie;if(!((ie=Ye.aiTrading)!=null&&ie.active))return Ye;const kt=Ye.aiTrading,bi=kt.currentProfit+de,Bn=ht?!1:kt.active,Hi={...Ye,usdBalance:Ye.usdBalance+de,aiTrading:{...kt,currentProfit:bi,lastAccruedAt:D,active:Bn}};if(ht){const yi={id:`ai-${Date.now()}`,pair:"BTC/USD",direction:"up",amount:Ye.aiTrading.lockedAmount,leverage:1,entryPrice:r.price,exitPrice:r.price,entryTime:Math.floor(new Date(kt.purchasedAt).getTime()/1e3),exitTime:Math.floor(q/1e3),timeframe:`AI ${kt.tradeWindowHours}h`,status:"won",timestamp:D,userEmail:Ye.email,pnl:bi,priceMovePct:0,outcomeReason:"expiry",source:"ai",aiPlanTier:kt.tier};x(Ia=>[yi,...Ia]);const Ki=Hi.aiTrading;Hi.aiTrading={...Ki,lockedAmount:0,lastTradeAt:D,totalTrades:Ki.totalTrades+1,totalProfit:Ki.totalProfit+bi}}return Hi})},1e3);return()=>window.clearInterval($)},[r.price,_,i]);const Be=$=>{const E=u.find(L=>L.id===$)||o.find(L=>L.id===$);!E||E.status!=="pending"||!E.userEmail||(h(L=>L.map(N=>N.id===$?{...N,status:"completed",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:N)),d(L=>L.map(N=>N.id===$?{...N,status:"completed",reviewedBy:"System Admin"}:N)),_(E.userEmail,L=>E.type==="deposit"?{...L,usdBalance:L.usdBalance+E.amount}:E.type==="withdraw"?{...L,usdBalance:Math.max(0,L.usdBalance-E.amount)}:L))},A=$=>{h(E=>E.map(L=>L.id===$?{...L,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:L)),d(E=>E.map(L=>L.id===$?{...L,status:"rejected",reviewedBy:"System Admin"}:L))},O=$=>{g(E=>E.map(L=>L.userEmail===$&&L.status==="pending"?{...L,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:L)),_($,E=>{var L,N,q,K,Z,te;return{...E,name:((L=E.kyc)==null?void 0:L.fullName)||E.name,phone:((N=E.kyc)==null?void 0:N.phone)||E.phone,country:((q=E.kyc)==null?void 0:q.country)||E.country,city:((K=E.kyc)==null?void 0:K.city)||E.city,postCode:((Z=E.kyc)==null?void 0:Z.postCode)||E.postCode,job:((te=E.kyc)==null?void 0:te.job)||E.job,isVerified:!0,verificationStatus:"approved",kyc:E.kyc?{...E.kyc,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:E.kyc}})},W=$=>{g(E=>E.map(L=>L.userEmail===$&&L.status==="pending"?{...L,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:L)),_($,E=>({...E,isVerified:!1,verificationStatus:"rejected",kyc:E.kyc?{...E.kyc,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:E.kyc}))},G={user:i,isAuthenticated:!!i,login:C,register:P,signInWithGoogle:U,logout:R,updateUser:V,submitKycRequest:S},I={btcPrice:r.price,btcChange24h:r.change24h,btcHigh24h:r.high24h,btcLow24h:r.low24h,btcVolume24h:r.volume24h,marketStatus:r.source,marketReady:l,transactions:o,walletRequests:u,kycRequests:f,trades:p,users:t,activeTrade:y,lastTradeResult:m,walletAddress:w,setWalletAddress:j,addTransaction:Q,addTrade:ke,startTrade:De,clearTradeResult:Pe,approveTransaction:Be,rejectTransaction:A,approveVerification:O,rejectVerification:W};return a.jsx(H1,{children:a.jsx(fg.Provider,{value:G,children:a.jsx(pg.Provider,{value:I,children:a.jsx(i1,{children:i?a.jsxs("div",{className:"min-h-screen bg-btc-dark lg:flex lg:h-screen",children:[a.jsx(F1,{}),a.jsxs("div",{className:"flex min-h-screen flex-1 flex-col lg:overflow-hidden",children:[a.jsx(V1,{btcPrice:r.price,btcChange24h:r.change24h,marketStatus:r.source}),a.jsx("main",{className:"app-main-scroll flex-1 bg-[#0f131c] px-4 pb-28 pt-4 sm:px-5 lg:overflow-y-auto lg:px-6 lg:pb-6 lg:pt-6",children:a.jsxs(Au,{children:[a.jsx(rt,{path:"/",element:i.role==="admin"?a.jsx(Tt,{to:"/admin",replace:!0}):a.jsx(Y1,{})}),a.jsx(rt,{path:"/finance",element:i.role==="admin"?a.jsx(Tt,{to:"/admin",replace:!0}):a.jsx(h2,{})}),a.jsx(rt,{path:"/trade",element:i.role==="admin"?a.jsx(Tt,{to:"/admin",replace:!0}):a.jsx(qy,{})}),a.jsx(rt,{path:"/profile",element:i.role==="admin"?a.jsx(Tt,{to:"/admin",replace:!0}):a.jsx(Xy,{})}),a.jsx(rt,{path:"/news",element:i.role==="admin"?a.jsx(Tt,{to:"/admin",replace:!0}):a.jsx(Gy,{})}),a.jsx(rt,{path:"/support",element:i.role==="admin"?a.jsx(Tt,{to:"/admin",replace:!0}):a.jsx(Zy,{})}),a.jsx(rt,{path:"/admin",element:i.role==="admin"?a.jsx(ew,{}):a.jsx(Tt,{to:"/",replace:!0})}),a.jsx(rt,{path:"*",element:a.jsx(Tt,{to:i.role==="admin"?"/admin":"/",replace:!0})})]})})]}),a.jsx(q1,{})]}):a.jsxs(Au,{children:[a.jsx(rt,{path:"/",element:a.jsx(G1,{})}),a.jsx(rt,{path:"/login",element:a.jsx(tw,{})}),a.jsx(rt,{path:"*",element:a.jsx(Tt,{to:"/"})})]})})})})})}Il.createRoot(document.getElementById("root")).render(a.jsx(Si.StrictMode,{children:a.jsx(Nw,{})}));
