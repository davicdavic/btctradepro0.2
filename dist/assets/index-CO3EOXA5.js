var ig=Object.defineProperty;var ng=(t,e,i)=>e in t?ig(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Bs=(t,e,i)=>ng(t,typeof e!="symbol"?e+"":e,i);function sg(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in t)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function rg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rd={exports:{}},rl={},$d={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),lg=Symbol.for("react.portal"),ag=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),cg=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),hg=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),fg=Symbol.for("react.suspense"),pg=Symbol.for("react.memo"),mg=Symbol.for("react.lazy"),nu=Symbol.iterator;function gg(t){return t===null||typeof t!="object"?null:(t=nu&&t[nu]||t["@@iterator"],typeof t=="function"?t:null)}var Dd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bd=Object.assign,Ad={};function kn(t,e,i){this.props=t,this.context=e,this.refs=Ad,this.updater=i||Dd}kn.prototype.isReactComponent={};kn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};kn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Id(){}Id.prototype=kn.prototype;function Uo(t,e,i){this.props=t,this.context=e,this.refs=Ad,this.updater=i||Dd}var Wo=Uo.prototype=new Id;Wo.constructor=Uo;Bd(Wo,kn.prototype);Wo.isPureReactComponent=!0;var su=Array.isArray,Od=Object.prototype.hasOwnProperty,Ho={current:null},Fd={key:!0,ref:!0,__self:!0,__source:!0};function Vd(t,e,i){var n,s={},r=null,a=null;if(e!=null)for(n in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(r=""+e.key),e)Od.call(e,n)&&!Fd.hasOwnProperty(n)&&(s[n]=e[n]);var c=arguments.length-2;if(c===1)s.children=i;else if(1<c){for(var o=Array(c),u=0;u<c;u++)o[u]=arguments[u+2];s.children=o}if(t&&t.defaultProps)for(n in c=t.defaultProps,c)s[n]===void 0&&(s[n]=c[n]);return{$$typeof:Es,type:t,key:r,ref:a,props:s,_owner:Ho.current}}function vg(t,e){return{$$typeof:Es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qo(t){return typeof t=="object"&&t!==null&&t.$$typeof===Es}function xg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var ru=/\/+/g;function Pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xg(""+t.key):e.toString(36)}function mr(t,e,i,n,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Es:case lg:a=!0}}if(a)return a=t,s=s(a),t=n===""?"."+Pl(a,0):n,su(s)?(i="",t!=null&&(i=t.replace(ru,"$&/")+"/"),mr(s,e,i,"",function(u){return u})):s!=null&&(qo(s)&&(s=vg(s,i+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(ru,"$&/")+"/")+t)),e.push(s)),1;if(a=0,n=n===""?".":n+":",su(t))for(var c=0;c<t.length;c++){r=t[c];var o=n+Pl(r,c);a+=mr(r,e,i,o,s)}else if(o=gg(t),typeof o=="function")for(t=o.call(t),c=0;!(r=t.next()).done;)r=r.value,o=n+Pl(r,c++),a+=mr(r,e,i,o,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function As(t,e,i){if(t==null)return t;var n=[],s=0;return mr(t,n,"","",function(r){return e.call(i,r,s++)}),n}function yg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},gr={transition:null},bg={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:gr,ReactCurrentOwner:Ho};function Ud(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:As,forEach:function(t,e,i){As(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return As(t,function(){e++}),e},toArray:function(t){return As(t,function(e){return e})||[]},only:function(t){if(!qo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=kn;W.Fragment=ag;W.Profiler=cg;W.PureComponent=Uo;W.StrictMode=og;W.Suspense=fg;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bg;W.act=Ud;W.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Bd({},t.props),s=t.key,r=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,a=Ho.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(o in e)Od.call(e,o)&&!Fd.hasOwnProperty(o)&&(n[o]=e[o]===void 0&&c!==void 0?c[o]:e[o])}var o=arguments.length-2;if(o===1)n.children=i;else if(1<o){c=Array(o);for(var u=0;u<o;u++)c[u]=arguments[u+2];n.children=c}return{$$typeof:Es,type:t.type,key:s,ref:r,props:n,_owner:a}};W.createContext=function(t){return t={$$typeof:hg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ug,_context:t},t.Consumer=t};W.createElement=Vd;W.createFactory=function(t){var e=Vd.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:dg,render:t}};W.isValidElement=qo;W.lazy=function(t){return{$$typeof:mg,_payload:{_status:-1,_result:t},_init:yg}};W.memo=function(t,e){return{$$typeof:pg,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=gr.transition;gr.transition={};try{t()}finally{gr.transition=e}};W.unstable_act=Ud;W.useCallback=function(t,e){return Ie.current.useCallback(t,e)};W.useContext=function(t){return Ie.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};W.useEffect=function(t,e){return Ie.current.useEffect(t,e)};W.useId=function(){return Ie.current.useId()};W.useImperativeHandle=function(t,e,i){return Ie.current.useImperativeHandle(t,e,i)};W.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Ie.current.useMemo(t,e)};W.useReducer=function(t,e,i){return Ie.current.useReducer(t,e,i)};W.useRef=function(t){return Ie.current.useRef(t)};W.useState=function(t){return Ie.current.useState(t)};W.useSyncExternalStore=function(t,e,i){return Ie.current.useSyncExternalStore(t,e,i)};W.useTransition=function(){return Ie.current.useTransition()};W.version="18.3.1";$d.exports=W;var w=$d.exports;const xi=rg(w),wg=sg({__proto__:null,default:xi},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=w,jg=Symbol.for("react.element"),Sg=Symbol.for("react.fragment"),Ng=Object.prototype.hasOwnProperty,Cg=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Eg={key:!0,ref:!0,__self:!0,__source:!0};function Wd(t,e,i){var n,s={},r=null,a=null;i!==void 0&&(r=""+i),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)Ng.call(e,n)&&!Eg.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:jg,type:t,key:r,ref:a,props:s,_owner:Cg.current}}rl.Fragment=Sg;rl.jsx=Wd;rl.jsxs=Wd;Rd.exports=rl;var l=Rd.exports,za={},Hd={exports:{}},Ge={},qd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,O){var I=P.length;P.push(O);e:for(;0<I;){var q=I-1>>>1,$=P[q];if(0<s($,O))P[q]=O,P[I]=$,I=q;else break e}}function i(P){return P.length===0?null:P[0]}function n(P){if(P.length===0)return null;var O=P[0],I=P.pop();if(I!==O){P[0]=I;e:for(var q=0,$=P.length,L=$>>>1;q<L;){var M=2*(q+1)-1,S=P[M],A=M+1,U=P[A];if(0>s(S,I))A<$&&0>s(U,S)?(P[q]=U,P[A]=I,q=A):(P[q]=S,P[M]=I,q=M);else if(A<$&&0>s(U,I))P[q]=U,P[A]=I,q=A;else break e}}return O}function s(P,O){var I=P.sortIndex-O.sortIndex;return I!==0?I:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var a=Date,c=a.now();t.unstable_now=function(){return a.now()-c}}var o=[],u=[],h=1,d=null,f=3,p=!1,m=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var O=i(u);O!==null;){if(O.callback===null)n(u);else if(O.startTime<=P)n(u),O.sortIndex=O.expirationTime,e(o,O);else break;O=i(u)}}function k(P){if(x=!1,y(P),!m)if(i(o)!==null)m=!0,ce(N);else{var O=i(u);O!==null&&Re(k,O.startTime-P)}}function N(P,O){m=!1,x&&(x=!1,g(T),T=-1),p=!0;var I=f;try{for(y(O),d=i(o);d!==null&&(!(d.expirationTime>O)||P&&!G());){var q=d.callback;if(typeof q=="function"){d.callback=null,f=d.priorityLevel;var $=q(d.expirationTime<=O);O=t.unstable_now(),typeof $=="function"?d.callback=$:d===i(o)&&n(o),y(O)}else n(o);d=i(o)}if(d!==null)var L=!0;else{var M=i(u);M!==null&&Re(k,M.startTime-O),L=!1}return L}finally{d=null,f=I,p=!1}}var C=!1,_=null,T=-1,j=5,R=-1;function G(){return!(t.unstable_now()-R<j)}function Me(){if(_!==null){var P=t.unstable_now();R=P;var O=!0;try{O=_(!0,P)}finally{O?be():(C=!1,_=null)}}else C=!1}var be;if(typeof v=="function")be=function(){v(Me)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,we=fe.port2;fe.port1.onmessage=Me,be=function(){we.postMessage(null)}}else be=function(){b(Me,0)};function ce(P){_=P,C||(C=!0,be())}function Re(P,O){T=b(function(){P(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,ce(N))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return i(o)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var I=f;f=O;try{return P()}finally{f=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=f;f=P;try{return O()}finally{f=I}},t.unstable_scheduleCallback=function(P,O,I){var q=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?q+I:q):I=q,P){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=I+$,P={id:h++,callback:O,priorityLevel:P,startTime:I,expirationTime:$,sortIndex:-1},I>q?(P.sortIndex=I,e(u,P),i(o)===null&&P===i(u)&&(x?(g(T),T=-1):x=!0,Re(k,I-q))):(P.sortIndex=$,e(o,P),m||p||(m=!0,ce(N))),P},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(P){var O=f;return function(){var I=f;f=O;try{return P.apply(this,arguments)}finally{f=I}}}})(Kd);qd.exports=Kd;var zg=qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg=w,Ye=zg;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xd=new Set,ts={};function Bi(t,e){hn(t,e),hn(t+"Capture",e)}function hn(t,e){for(ts[t]=e,t=0;t<e.length;t++)Xd.add(e[t])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,_g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lu={},au={};function Tg(t){return Ma.call(au,t)?!0:Ma.call(lu,t)?!1:_g.test(t)?au[t]=!0:(lu[t]=!0,!1)}function Pg(t,e,i,n){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lg(t,e,i,n){if(e===null||typeof e>"u"||Pg(t,e,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,i,n,s,r,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function Xo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ko,Xo);ze[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ko,Xo);ze[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ko,Xo);ze[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qo(t,e,i,n){var s=ze.hasOwnProperty(e)?ze[e]:null;(s!==null?s.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lg(e,i,s,n)&&(i=null),n||s===null?Tg(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):s.mustUseProperty?t[s.propertyName]=i===null?s.type===3?!1:"":i:(e=s.attributeName,n=s.attributeNamespace,i===null?t.removeAttribute(e):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,n?t.setAttributeNS(n,e,i):t.setAttribute(e,i))))}var Bt=Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),_a=Symbol.for("react.profiler"),Qd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Jo=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Gd=Symbol.for("react.offscreen"),ou=Symbol.iterator;function zn(t){return t===null||typeof t!="object"?null:(t=ou&&t[ou]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Ll;function Bn(t){if(Ll===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Ll=e&&e[1]||""}return`
`+Ll+t}var Rl=!1;function $l(t,e){if(!t||Rl)return"";Rl=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),r=n.stack.split(`
`),a=s.length-1,c=r.length-1;1<=a&&0<=c&&s[a]!==r[c];)c--;for(;1<=a&&0<=c;a--,c--)if(s[a]!==r[c]){if(a!==1||c!==1)do if(a--,c--,0>c||s[a]!==r[c]){var o=`
`+s[a].replace(" at new "," at ");return t.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",t.displayName)),o}while(1<=a&&0<=c);break}}}finally{Rl=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Bn(t):""}function Rg(t){switch(t.tag){case 5:return Bn(t.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function La(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wi:return"Fragment";case Ui:return"Portal";case _a:return"Profiler";case Yo:return"StrictMode";case Ta:return"Suspense";case Pa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yd:return(t.displayName||"Context")+".Consumer";case Qd:return(t._context.displayName||"Context")+".Provider";case Go:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jo:return e=t.displayName||null,e!==null?e:La(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return La(t(e))}catch{}}return null}function $g(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return La(e);case 8:return e===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dg(t){var e=Jd(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Os(t){t._valueTracker||(t._valueTracker=Dg(t))}function Zd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=Jd(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function _r(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ra(t,e){var i=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function cu(t,e){var i=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;i=ri(e.value!=null?e.value:i),t._wrapperState={initialChecked:n,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ef(t,e){e=e.checked,e!=null&&Qo(t,"checked",e,!1)}function $a(t,e){ef(t,e);var i=ri(e.value),n=e.type;if(i!=null)n==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Da(t,e.type,i):e.hasOwnProperty("defaultValue")&&Da(t,e.type,ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uu(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Da(t,e,i){(e!=="number"||_r(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var An=Array.isArray;function sn(t,e,i,n){if(t=t.options,e){e={};for(var s=0;s<i.length;s++)e["$"+i[s]]=!0;for(i=0;i<t.length;i++)s=e.hasOwnProperty("$"+t[i].value),t[i].selected!==s&&(t[i].selected=s),s&&n&&(t[i].defaultSelected=!0)}else{for(i=""+ri(i),e=null,s=0;s<t.length;s++){if(t[s].value===i){t[s].selected=!0,n&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ba(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hu(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(z(92));if(An(i)){if(1<i.length)throw Error(z(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:ri(i)}}function tf(t,e){var i=ri(e.value),n=ri(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),n!=null&&(t.defaultValue=""+n)}function du(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Aa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fs,sf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,n,s){MSApp.execUnsafeLocalFunction(function(){return t(e,i,n,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fs=Fs||document.createElement("div"),Fs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function is(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bg=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(t){Bg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vn[e]=Vn[t]})});function rf(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||Vn.hasOwnProperty(t)&&Vn[t]?(""+e).trim():e+"px"}function lf(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var n=i.indexOf("--")===0,s=rf(i,e[i],n);i==="float"&&(i="cssFloat"),n?t.setProperty(i,s):t[i]=s}}var Ag=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(t,e){if(e){if(Ag[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Oa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Zo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Va=null,rn=null,ln=null;function fu(t){if(t=_s(t)){if(typeof Va!="function")throw Error(z(280));var e=t.stateNode;e&&(e=ul(e),Va(t.stateNode,t.type,e))}}function af(t){rn?ln?ln.push(t):ln=[t]:rn=t}function of(){if(rn){var t=rn,e=ln;if(ln=rn=null,fu(t),e)for(t=0;t<e.length;t++)fu(e[t])}}function cf(t,e){return t(e)}function uf(){}var Dl=!1;function hf(t,e,i){if(Dl)return t(e,i);Dl=!0;try{return cf(t,e,i)}finally{Dl=!1,(rn!==null||ln!==null)&&(uf(),of())}}function ns(t,e){var i=t.stateNode;if(i===null)return null;var n=ul(i);if(n===null)return null;i=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(z(231,e,typeof i));return i}var Ua=!1;if(Lt)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Ua=!1}function Ig(t,e,i,n,s,r,a,c,o){var u=Array.prototype.slice.call(arguments,3);try{e.apply(i,u)}catch(h){this.onError(h)}}var Un=!1,Tr=null,Pr=!1,Wa=null,Og={onError:function(t){Un=!0,Tr=t}};function Fg(t,e,i,n,s,r,a,c,o){Un=!1,Tr=null,Ig.apply(Og,arguments)}function Vg(t,e,i,n,s,r,a,c,o){if(Fg.apply(this,arguments),Un){if(Un){var u=Tr;Un=!1,Tr=null}else throw Error(z(198));Pr||(Pr=!0,Wa=u)}}function Ai(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function df(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pu(t){if(Ai(t)!==t)throw Error(z(188))}function Ug(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(z(188));return e!==t?null:t}for(var i=t,n=e;;){var s=i.return;if(s===null)break;var r=s.alternate;if(r===null){if(n=s.return,n!==null){i=n;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===i)return pu(s),t;if(r===n)return pu(s),e;r=r.sibling}throw Error(z(188))}if(i.return!==n.return)i=s,n=r;else{for(var a=!1,c=s.child;c;){if(c===i){a=!0,i=s,n=r;break}if(c===n){a=!0,n=s,i=r;break}c=c.sibling}if(!a){for(c=r.child;c;){if(c===i){a=!0,i=r,n=s;break}if(c===n){a=!0,n=r,i=s;break}c=c.sibling}if(!a)throw Error(z(189))}}if(i.alternate!==n)throw Error(z(190))}if(i.tag!==3)throw Error(z(188));return i.stateNode.current===i?t:e}function ff(t){return t=Ug(t),t!==null?pf(t):null}function pf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pf(t);if(e!==null)return e;t=t.sibling}return null}var mf=Ye.unstable_scheduleCallback,mu=Ye.unstable_cancelCallback,Wg=Ye.unstable_shouldYield,Hg=Ye.unstable_requestPaint,pe=Ye.unstable_now,qg=Ye.unstable_getCurrentPriorityLevel,ec=Ye.unstable_ImmediatePriority,gf=Ye.unstable_UserBlockingPriority,Lr=Ye.unstable_NormalPriority,Kg=Ye.unstable_LowPriority,vf=Ye.unstable_IdlePriority,ll=null,jt=null;function Xg(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(ll,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Gg,Qg=Math.log,Yg=Math.LN2;function Gg(t){return t>>>=0,t===0?32:31-(Qg(t)/Yg|0)|0}var Vs=64,Us=4194304;function In(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rr(t,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,s=t.suspendedLanes,r=t.pingedLanes,a=i&268435455;if(a!==0){var c=a&~s;c!==0?n=In(c):(r&=a,r!==0&&(n=In(r)))}else a=i&~s,a!==0?n=In(a):r!==0&&(n=In(r));if(n===0)return 0;if(e!==0&&e!==n&&!(e&s)&&(s=n&-n,r=e&-e,s>=r||s===16&&(r&4194240)!==0))return e;if(n&4&&(n|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)i=31-ft(e),s=1<<i,n|=t[i],e&=~s;return n}function Jg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zg(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes;0<r;){var a=31-ft(r),c=1<<a,o=s[a];o===-1?(!(c&i)||c&n)&&(s[a]=Jg(c,e)):o<=e&&(t.expiredLanes|=c),r&=~c}}function Ha(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xf(){var t=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),t}function Bl(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function zs(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ft(e),t[e]=i}function e0(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<i;){var s=31-ft(i),r=1<<s;e[s]=0,n[s]=-1,t[s]=-1,i&=~r}}function tc(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-ft(i),s=1<<n;s&e|t[n]&e&&(t[n]|=e),i&=~s}}var Y=0;function yf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bf,ic,wf,kf,jf,qa=!1,Ws=[],Qt=null,Yt=null,Gt=null,ss=new Map,rs=new Map,Wt=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gu(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(e.pointerId)}}function _n(t,e,i,n,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:r,targetContainers:[s]},e!==null&&(e=_s(e),e!==null&&ic(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function i0(t,e,i,n,s){switch(e){case"focusin":return Qt=_n(Qt,t,e,i,n,s),!0;case"dragenter":return Yt=_n(Yt,t,e,i,n,s),!0;case"mouseover":return Gt=_n(Gt,t,e,i,n,s),!0;case"pointerover":var r=s.pointerId;return ss.set(r,_n(ss.get(r)||null,t,e,i,n,s)),!0;case"gotpointercapture":return r=s.pointerId,rs.set(r,_n(rs.get(r)||null,t,e,i,n,s)),!0}return!1}function Sf(t){var e=yi(t.target);if(e!==null){var i=Ai(e);if(i!==null){if(e=i.tag,e===13){if(e=df(i),e!==null){t.blockedOn=e,jf(t.priority,function(){wf(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Ka(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);Fa=n,i.target.dispatchEvent(n),Fa=null}else return e=_s(i),e!==null&&ic(e),t.blockedOn=i,!1;e.shift()}return!0}function vu(t,e,i){vr(t)&&i.delete(e)}function n0(){qa=!1,Qt!==null&&vr(Qt)&&(Qt=null),Yt!==null&&vr(Yt)&&(Yt=null),Gt!==null&&vr(Gt)&&(Gt=null),ss.forEach(vu),rs.forEach(vu)}function Tn(t,e){t.blockedOn===e&&(t.blockedOn=null,qa||(qa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,n0)))}function ls(t){function e(s){return Tn(s,t)}if(0<Ws.length){Tn(Ws[0],t);for(var i=1;i<Ws.length;i++){var n=Ws[i];n.blockedOn===t&&(n.blockedOn=null)}}for(Qt!==null&&Tn(Qt,t),Yt!==null&&Tn(Yt,t),Gt!==null&&Tn(Gt,t),ss.forEach(e),rs.forEach(e),i=0;i<Wt.length;i++)n=Wt[i],n.blockedOn===t&&(n.blockedOn=null);for(;0<Wt.length&&(i=Wt[0],i.blockedOn===null);)Sf(i),i.blockedOn===null&&Wt.shift()}var an=Bt.ReactCurrentBatchConfig,$r=!0;function s0(t,e,i,n){var s=Y,r=an.transition;an.transition=null;try{Y=1,nc(t,e,i,n)}finally{Y=s,an.transition=r}}function r0(t,e,i,n){var s=Y,r=an.transition;an.transition=null;try{Y=4,nc(t,e,i,n)}finally{Y=s,an.transition=r}}function nc(t,e,i,n){if($r){var s=Ka(t,e,i,n);if(s===null)Kl(t,e,n,Dr,i),gu(t,n);else if(i0(s,t,e,i,n))n.stopPropagation();else if(gu(t,n),e&4&&-1<t0.indexOf(t)){for(;s!==null;){var r=_s(s);if(r!==null&&bf(r),r=Ka(t,e,i,n),r===null&&Kl(t,e,n,Dr,i),r===s)break;s=r}s!==null&&n.stopPropagation()}else Kl(t,e,n,null,i)}}var Dr=null;function Ka(t,e,i,n){if(Dr=null,t=Zo(n),t=yi(t),t!==null)if(e=Ai(t),e===null)t=null;else if(i=e.tag,i===13){if(t=df(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dr=t,null}function Nf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qg()){case ec:return 1;case gf:return 4;case Lr:case Kg:return 16;case vf:return 536870912;default:return 16}default:return 16}}var qt=null,sc=null,xr=null;function Cf(){if(xr)return xr;var t,e=sc,i=e.length,n,s="value"in qt?qt.value:qt.textContent,r=s.length;for(t=0;t<i&&e[t]===s[t];t++);var a=i-t;for(n=1;n<=a&&e[i-n]===s[r-n];n++);return xr=s.slice(t,1<n?1-n:void 0)}function yr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hs(){return!0}function xu(){return!1}function Je(t){function e(i,n,s,r,a){this._reactName=i,this._targetInst=s,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(i=t[c],this[c]=i?i(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Hs:xu,this.isPropagationStopped=xu,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),e}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Je(jn),Ms=oe({},jn,{view:0,detail:0}),l0=Je(Ms),Al,Il,Pn,al=oe({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pn&&(Pn&&t.type==="mousemove"?(Al=t.screenX-Pn.screenX,Il=t.screenY-Pn.screenY):Il=Al=0,Pn=t),Al)},movementY:function(t){return"movementY"in t?t.movementY:Il}}),yu=Je(al),a0=oe({},al,{dataTransfer:0}),o0=Je(a0),c0=oe({},Ms,{relatedTarget:0}),Ol=Je(c0),u0=oe({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=Je(u0),d0=oe({},jn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=Je(d0),p0=oe({},jn,{data:0}),bu=Je(p0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v0[t])?!!e[t]:!1}function lc(){return x0}var y0=oe({},Ms,{key:function(t){if(t.key){var e=m0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?yr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b0=Je(y0),w0=oe({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=Je(w0),k0=oe({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),j0=Je(k0),S0=oe({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Je(S0),C0=oe({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=Je(C0),z0=[9,13,27,32],ac=Lt&&"CompositionEvent"in window,Wn=null;Lt&&"documentMode"in document&&(Wn=document.documentMode);var M0=Lt&&"TextEvent"in window&&!Wn,Ef=Lt&&(!ac||Wn&&8<Wn&&11>=Wn),ku=" ",ju=!1;function zf(t,e){switch(t){case"keyup":return z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hi=!1;function _0(t,e){switch(t){case"compositionend":return Mf(e);case"keypress":return e.which!==32?null:(ju=!0,ku);case"textInput":return t=e.data,t===ku&&ju?null:t;default:return null}}function T0(t,e){if(Hi)return t==="compositionend"||!ac&&zf(t,e)?(t=Cf(),xr=sc=qt=null,Hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ef&&e.locale!=="ko"?null:e.data;default:return null}}var P0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P0[t.type]:e==="textarea"}function _f(t,e,i,n){af(n),e=Br(e,"onChange"),0<e.length&&(i=new rc("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var Hn=null,as=null;function L0(t){Ff(t,0)}function ol(t){var e=Xi(t);if(Zd(e))return t}function R0(t,e){if(t==="change")return e}var Tf=!1;if(Lt){var Fl;if(Lt){var Vl="oninput"in document;if(!Vl){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),Vl=typeof Nu.oninput=="function"}Fl=Vl}else Fl=!1;Tf=Fl&&(!document.documentMode||9<document.documentMode)}function Cu(){Hn&&(Hn.detachEvent("onpropertychange",Pf),as=Hn=null)}function Pf(t){if(t.propertyName==="value"&&ol(as)){var e=[];_f(e,as,t,Zo(t)),hf(L0,e)}}function $0(t,e,i){t==="focusin"?(Cu(),Hn=e,as=i,Hn.attachEvent("onpropertychange",Pf)):t==="focusout"&&Cu()}function D0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(as)}function B0(t,e){if(t==="click")return ol(e)}function A0(t,e){if(t==="input"||t==="change")return ol(e)}function I0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mt=typeof Object.is=="function"?Object.is:I0;function os(t,e){if(mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var s=i[n];if(!Ma.call(e,s)||!mt(t[s],e[s]))return!1}return!0}function Eu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zu(t,e){var i=Eu(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Eu(i)}}function Lf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rf(){for(var t=window,e=_r();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=_r(t.document)}return e}function oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function O0(t){var e=Rf(),i=t.focusedElem,n=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Lf(i.ownerDocument.documentElement,i)){if(n!==null&&oc(i)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=i.textContent.length,r=Math.min(n.start,s);n=n.end===void 0?r:Math.min(n.end,s),!t.extend&&r>n&&(s=n,n=r,r=s),s=zu(i,r);var a=zu(i,n);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),r>n?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var F0=Lt&&"documentMode"in document&&11>=document.documentMode,qi=null,Xa=null,qn=null,Qa=!1;function Mu(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Qa||qi==null||qi!==_r(n)||(n=qi,"selectionStart"in n&&oc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qn&&os(qn,n)||(qn=n,n=Br(Xa,"onSelect"),0<n.length&&(e=new rc("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=qi)))}function qs(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Ki={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},Ul={},$f={};Lt&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function cl(t){if(Ul[t])return Ul[t];if(!Ki[t])return t;var e=Ki[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in $f)return Ul[t]=e[i];return t}var Df=cl("animationend"),Bf=cl("animationiteration"),Af=cl("animationstart"),If=cl("transitionend"),Of=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(t,e){Of.set(t,e),Bi(e,[t])}for(var Wl=0;Wl<_u.length;Wl++){var Hl=_u[Wl],V0=Hl.toLowerCase(),U0=Hl[0].toUpperCase()+Hl.slice(1);oi(V0,"on"+U0)}oi(Df,"onAnimationEnd");oi(Bf,"onAnimationIteration");oi(Af,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(If,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function Tu(t,e,i){var n=t.type||"unknown-event";t.currentTarget=i,Vg(n,e,void 0,t),t.currentTarget=null}function Ff(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],s=n.event;n=n.listeners;e:{var r=void 0;if(e)for(var a=n.length-1;0<=a;a--){var c=n[a],o=c.instance,u=c.currentTarget;if(c=c.listener,o!==r&&s.isPropagationStopped())break e;Tu(s,c,u),r=o}else for(a=0;a<n.length;a++){if(c=n[a],o=c.instance,u=c.currentTarget,c=c.listener,o!==r&&s.isPropagationStopped())break e;Tu(s,c,u),r=o}}}if(Pr)throw t=Wa,Pr=!1,Wa=null,t}function te(t,e){var i=e[eo];i===void 0&&(i=e[eo]=new Set);var n=t+"__bubble";i.has(n)||(Vf(e,t,2,!1),i.add(n))}function ql(t,e,i){var n=0;e&&(n|=4),Vf(i,t,n,e)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[Ks]){t[Ks]=!0,Xd.forEach(function(i){i!=="selectionchange"&&(W0.has(i)||ql(i,!1,t),ql(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ks]||(e[Ks]=!0,ql("selectionchange",!1,e))}}function Vf(t,e,i,n){switch(Nf(e)){case 1:var s=s0;break;case 4:s=r0;break;default:s=nc}i=s.bind(null,e,i,t),s=void 0,!Ua||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),n?s!==void 0?t.addEventListener(e,i,{capture:!0,passive:s}):t.addEventListener(e,i,!0):s!==void 0?t.addEventListener(e,i,{passive:s}):t.addEventListener(e,i,!1)}function Kl(t,e,i,n,s){var r=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(a===4)for(a=n.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===s||o.nodeType===8&&o.parentNode===s))return;a=a.return}for(;c!==null;){if(a=yi(c),a===null)return;if(o=a.tag,o===5||o===6){n=r=a;continue e}c=c.parentNode}}n=n.return}hf(function(){var u=r,h=Zo(i),d=[];e:{var f=Of.get(t);if(f!==void 0){var p=rc,m=t;switch(t){case"keypress":if(yr(i)===0)break e;case"keydown":case"keyup":p=b0;break;case"focusin":m="focus",p=Ol;break;case"focusout":m="blur",p=Ol;break;case"beforeblur":case"afterblur":p=Ol;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=j0;break;case Df:case Bf:case Af:p=h0;break;case If:p=N0;break;case"scroll":p=l0;break;case"wheel":p=E0;break;case"copy":case"cut":case"paste":p=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wu}var x=(e&4)!==0,b=!x&&t==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var v=u,y;v!==null;){y=v;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,g!==null&&(k=ns(v,g),k!=null&&x.push(us(v,k,y)))),b)break;v=v.return}0<x.length&&(f=new p(f,m,null,i,h),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&i!==Fa&&(m=i.relatedTarget||i.fromElement)&&(yi(m)||m[Rt]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=i.relatedTarget||i.toElement,p=u,m=m?yi(m):null,m!==null&&(b=Ai(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(x=yu,k="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=wu,k="onPointerLeave",g="onPointerEnter",v="pointer"),b=p==null?f:Xi(p),y=m==null?f:Xi(m),f=new x(k,v+"leave",p,i,h),f.target=b,f.relatedTarget=y,k=null,yi(h)===u&&(x=new x(g,v+"enter",m,i,h),x.target=y,x.relatedTarget=b,k=x),b=k,p&&m)t:{for(x=p,g=m,v=0,y=x;y;y=Ii(y))v++;for(y=0,k=g;k;k=Ii(k))y++;for(;0<v-y;)x=Ii(x),v--;for(;0<y-v;)g=Ii(g),y--;for(;v--;){if(x===g||g!==null&&x===g.alternate)break t;x=Ii(x),g=Ii(g)}x=null}else x=null;p!==null&&Pu(d,f,p,x,!1),m!==null&&b!==null&&Pu(d,b,m,x,!0)}}e:{if(f=u?Xi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var N=R0;else if(Su(f))if(Tf)N=A0;else{N=D0;var C=$0}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=B0);if(N&&(N=N(t,u))){_f(d,N,i,h);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Da(f,"number",f.value)}switch(C=u?Xi(u):window,t){case"focusin":(Su(C)||C.contentEditable==="true")&&(qi=C,Xa=u,qn=null);break;case"focusout":qn=Xa=qi=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,Mu(d,i,h);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":Mu(d,i,h)}var _;if(ac)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Hi?zf(t,i)&&(T="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(T="onCompositionStart");T&&(Ef&&i.locale!=="ko"&&(Hi||T!=="onCompositionStart"?T==="onCompositionEnd"&&Hi&&(_=Cf()):(qt=h,sc="value"in qt?qt.value:qt.textContent,Hi=!0)),C=Br(u,T),0<C.length&&(T=new bu(T,t,null,i,h),d.push({event:T,listeners:C}),_?T.data=_:(_=Mf(i),_!==null&&(T.data=_)))),(_=M0?_0(t,i):T0(t,i))&&(u=Br(u,"onBeforeInput"),0<u.length&&(h=new bu("onBeforeInput","beforeinput",null,i,h),d.push({event:h,listeners:u}),h.data=_))}Ff(d,e)})}function us(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Br(t,e){for(var i=e+"Capture",n=[];t!==null;){var s=t,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=ns(t,i),r!=null&&n.unshift(us(t,r,s)),r=ns(t,e),r!=null&&n.push(us(t,r,s))),t=t.return}return n}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pu(t,e,i,n,s){for(var r=e._reactName,a=[];i!==null&&i!==n;){var c=i,o=c.alternate,u=c.stateNode;if(o!==null&&o===n)break;c.tag===5&&u!==null&&(c=u,s?(o=ns(i,r),o!=null&&a.unshift(us(i,o,c))):s||(o=ns(i,r),o!=null&&a.push(us(i,o,c)))),i=i.return}a.length!==0&&t.push({event:e,listeners:a})}var H0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function Lu(t){return(typeof t=="string"?t:""+t).replace(H0,`
`).replace(q0,"")}function Xs(t,e,i){if(e=Lu(e),Lu(t)!==e&&i)throw Error(z(425))}function Ar(){}var Ya=null,Ga=null;function Ja(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,Ru=typeof Promise=="function"?Promise:void 0,X0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ru<"u"?function(t){return Ru.resolve(null).then(t).catch(Q0)}:Za;function Q0(t){setTimeout(function(){throw t})}function Xl(t,e){var i=e,n=0;do{var s=i.nextSibling;if(t.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(n===0){t.removeChild(s),ls(e);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=s}while(i);ls(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $u(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),wt="__reactFiber$"+Sn,hs="__reactProps$"+Sn,Rt="__reactContainer$"+Sn,eo="__reactEvents$"+Sn,Y0="__reactListeners$"+Sn,G0="__reactHandles$"+Sn;function yi(t){var e=t[wt];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Rt]||i[wt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=$u(t);t!==null;){if(i=t[wt])return i;t=$u(t)}return e}t=i,i=t.parentNode}return null}function _s(t){return t=t[wt]||t[Rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function ul(t){return t[hs]||null}var to=[],Qi=-1;function ci(t){return{current:t}}function ne(t){0>Qi||(t.current=to[Qi],to[Qi]=null,Qi--)}function ee(t,e){Qi++,to[Qi]=t.current,t.current=e}var li={},Le=ci(li),Ue=ci(!1),Ci=li;function dn(t,e){var i=t.type.contextTypes;if(!i)return li;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in i)s[r]=e[r];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function We(t){return t=t.childContextTypes,t!=null}function Ir(){ne(Ue),ne(Le)}function Du(t,e,i){if(Le.current!==li)throw Error(z(168));ee(Le,e),ee(Ue,i)}function Uf(t,e,i){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var s in n)if(!(s in e))throw Error(z(108,$g(t)||"Unknown",s));return oe({},i,n)}function Or(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,Ci=Le.current,ee(Le,t),ee(Ue,Ue.current),!0}function Bu(t,e,i){var n=t.stateNode;if(!n)throw Error(z(169));i?(t=Uf(t,e,Ci),n.__reactInternalMemoizedMergedChildContext=t,ne(Ue),ne(Le),ee(Le,t)):ne(Ue),ee(Ue,i)}var Et=null,hl=!1,Ql=!1;function Wf(t){Et===null?Et=[t]:Et.push(t)}function J0(t){hl=!0,Wf(t)}function ui(){if(!Ql&&Et!==null){Ql=!0;var t=0,e=Y;try{var i=Et;for(Y=1;t<i.length;t++){var n=i[t];do n=n(!0);while(n!==null)}Et=null,hl=!1}catch(s){throw Et!==null&&(Et=Et.slice(t+1)),mf(ec,ui),s}finally{Y=e,Ql=!1}}return null}var Yi=[],Gi=0,Fr=null,Vr=0,nt=[],st=0,Ei=null,zt=1,Mt="";function gi(t,e){Yi[Gi++]=Vr,Yi[Gi++]=Fr,Fr=t,Vr=e}function Hf(t,e,i){nt[st++]=zt,nt[st++]=Mt,nt[st++]=Ei,Ei=t;var n=zt;t=Mt;var s=32-ft(n)-1;n&=~(1<<s),i+=1;var r=32-ft(e)+s;if(30<r){var a=s-s%5;r=(n&(1<<a)-1).toString(32),n>>=a,s-=a,zt=1<<32-ft(e)+s|i<<s|n,Mt=r+t}else zt=1<<r|i<<s|n,Mt=t}function cc(t){t.return!==null&&(gi(t,1),Hf(t,1,0))}function uc(t){for(;t===Fr;)Fr=Yi[--Gi],Yi[Gi]=null,Vr=Yi[--Gi],Yi[Gi]=null;for(;t===Ei;)Ei=nt[--st],nt[st]=null,Mt=nt[--st],nt[st]=null,zt=nt[--st],nt[st]=null}var Qe=null,Xe=null,se=!1,dt=null;function qf(t,e){var i=rt(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function Au(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Xe=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=Ei!==null?{id:zt,overflow:Mt}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=rt(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Qe=t,Xe=null,!0):!1;default:return!1}}function io(t){return(t.mode&1)!==0&&(t.flags&128)===0}function no(t){if(se){var e=Xe;if(e){var i=e;if(!Au(t,e)){if(io(t))throw Error(z(418));e=Jt(i.nextSibling);var n=Qe;e&&Au(t,e)?qf(n,i):(t.flags=t.flags&-4097|2,se=!1,Qe=t)}}else{if(io(t))throw Error(z(418));t.flags=t.flags&-4097|2,se=!1,Qe=t}}}function Iu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function Qs(t){if(t!==Qe)return!1;if(!se)return Iu(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ja(t.type,t.memoizedProps)),e&&(e=Xe)){if(io(t))throw Kf(),Error(z(418));for(;e;)qf(t,e),e=Jt(e.nextSibling)}if(Iu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){Xe=Jt(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Qe?Jt(t.stateNode.nextSibling):null;return!0}function Kf(){for(var t=Xe;t;)t=Jt(t.nextSibling)}function fn(){Xe=Qe=null,se=!1}function hc(t){dt===null?dt=[t]:dt.push(t)}var Z0=Bt.ReactCurrentBatchConfig;function Ln(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(z(309));var n=i.stateNode}if(!n)throw Error(z(147,t));var s=n,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){var c=s.refs;a===null?delete c[r]:c[r]=a},e._stringRef=r,e)}if(typeof t!="string")throw Error(z(284));if(!i._owner)throw Error(z(290,t))}return t}function Ys(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ou(t){var e=t._init;return e(t._payload)}function Xf(t){function e(g,v){if(t){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function i(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function n(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function s(g,v){return g=ii(g,v),g.index=0,g.sibling=null,g}function r(g,v,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return t&&g.alternate===null&&(g.flags|=2),g}function c(g,v,y,k){return v===null||v.tag!==6?(v=ia(y,g.mode,k),v.return=g,v):(v=s(v,y),v.return=g,v)}function o(g,v,y,k){var N=y.type;return N===Wi?h(g,v,y.props.children,k,y.key):v!==null&&(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Vt&&Ou(N)===v.type)?(k=s(v,y.props),k.ref=Ln(g,v,y),k.return=g,k):(k=Cr(y.type,y.key,y.props,null,g.mode,k),k.ref=Ln(g,v,y),k.return=g,k)}function u(g,v,y,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=na(y,g.mode,k),v.return=g,v):(v=s(v,y.children||[]),v.return=g,v)}function h(g,v,y,k,N){return v===null||v.tag!==7?(v=ji(y,g.mode,k,N),v.return=g,v):(v=s(v,y),v.return=g,v)}function d(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ia(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Is:return y=Cr(v.type,v.key,v.props,null,g.mode,y),y.ref=Ln(g,null,v),y.return=g,y;case Ui:return v=na(v,g.mode,y),v.return=g,v;case Vt:var k=v._init;return d(g,k(v._payload),y)}if(An(v)||zn(v))return v=ji(v,g.mode,y,null),v.return=g,v;Ys(g,v)}return null}function f(g,v,y,k){var N=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:c(g,v,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Is:return y.key===N?o(g,v,y,k):null;case Ui:return y.key===N?u(g,v,y,k):null;case Vt:return N=y._init,f(g,v,N(y._payload),k)}if(An(y)||zn(y))return N!==null?null:h(g,v,y,k,null);Ys(g,y)}return null}function p(g,v,y,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(y)||null,c(v,g,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Is:return g=g.get(k.key===null?y:k.key)||null,o(v,g,k,N);case Ui:return g=g.get(k.key===null?y:k.key)||null,u(v,g,k,N);case Vt:var C=k._init;return p(g,v,y,C(k._payload),N)}if(An(k)||zn(k))return g=g.get(y)||null,h(v,g,k,N,null);Ys(v,k)}return null}function m(g,v,y,k){for(var N=null,C=null,_=v,T=v=0,j=null;_!==null&&T<y.length;T++){_.index>T?(j=_,_=null):j=_.sibling;var R=f(g,_,y[T],k);if(R===null){_===null&&(_=j);break}t&&_&&R.alternate===null&&e(g,_),v=r(R,v,T),C===null?N=R:C.sibling=R,C=R,_=j}if(T===y.length)return i(g,_),se&&gi(g,T),N;if(_===null){for(;T<y.length;T++)_=d(g,y[T],k),_!==null&&(v=r(_,v,T),C===null?N=_:C.sibling=_,C=_);return se&&gi(g,T),N}for(_=n(g,_);T<y.length;T++)j=p(_,g,T,y[T],k),j!==null&&(t&&j.alternate!==null&&_.delete(j.key===null?T:j.key),v=r(j,v,T),C===null?N=j:C.sibling=j,C=j);return t&&_.forEach(function(G){return e(g,G)}),se&&gi(g,T),N}function x(g,v,y,k){var N=zn(y);if(typeof N!="function")throw Error(z(150));if(y=N.call(y),y==null)throw Error(z(151));for(var C=N=null,_=v,T=v=0,j=null,R=y.next();_!==null&&!R.done;T++,R=y.next()){_.index>T?(j=_,_=null):j=_.sibling;var G=f(g,_,R.value,k);if(G===null){_===null&&(_=j);break}t&&_&&G.alternate===null&&e(g,_),v=r(G,v,T),C===null?N=G:C.sibling=G,C=G,_=j}if(R.done)return i(g,_),se&&gi(g,T),N;if(_===null){for(;!R.done;T++,R=y.next())R=d(g,R.value,k),R!==null&&(v=r(R,v,T),C===null?N=R:C.sibling=R,C=R);return se&&gi(g,T),N}for(_=n(g,_);!R.done;T++,R=y.next())R=p(_,g,T,R.value,k),R!==null&&(t&&R.alternate!==null&&_.delete(R.key===null?T:R.key),v=r(R,v,T),C===null?N=R:C.sibling=R,C=R);return t&&_.forEach(function(Me){return e(g,Me)}),se&&gi(g,T),N}function b(g,v,y,k){if(typeof y=="object"&&y!==null&&y.type===Wi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Is:e:{for(var N=y.key,C=v;C!==null;){if(C.key===N){if(N=y.type,N===Wi){if(C.tag===7){i(g,C.sibling),v=s(C,y.props.children),v.return=g,g=v;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Vt&&Ou(N)===C.type){i(g,C.sibling),v=s(C,y.props),v.ref=Ln(g,C,y),v.return=g,g=v;break e}i(g,C);break}else e(g,C);C=C.sibling}y.type===Wi?(v=ji(y.props.children,g.mode,k,y.key),v.return=g,g=v):(k=Cr(y.type,y.key,y.props,null,g.mode,k),k.ref=Ln(g,v,y),k.return=g,g=k)}return a(g);case Ui:e:{for(C=y.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){i(g,v.sibling),v=s(v,y.children||[]),v.return=g,g=v;break e}else{i(g,v);break}else e(g,v);v=v.sibling}v=na(y,g.mode,k),v.return=g,g=v}return a(g);case Vt:return C=y._init,b(g,v,C(y._payload),k)}if(An(y))return m(g,v,y,k);if(zn(y))return x(g,v,y,k);Ys(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(i(g,v.sibling),v=s(v,y),v.return=g,g=v):(i(g,v),v=ia(y,g.mode,k),v.return=g,g=v),a(g)):i(g,v)}return b}var pn=Xf(!0),Qf=Xf(!1),Ur=ci(null),Wr=null,Ji=null,dc=null;function fc(){dc=Ji=Wr=null}function pc(t){var e=Ur.current;ne(Ur),t._currentValue=e}function so(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function on(t,e){Wr=t,dc=Ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(dc!==t)if(t={context:t,memoizedValue:e,next:null},Ji===null){if(Wr===null)throw Error(z(308));Ji=t,Wr.dependencies={lanes:0,firstContext:t}}else Ji=Ji.next=t;return e}var bi=null;function mc(t){bi===null?bi=[t]:bi.push(t)}function Yf(t,e,i,n){var s=e.interleaved;return s===null?(i.next=i,mc(e)):(i.next=s.next,s.next=i),e.interleaved=i,$t(t,n)}function $t(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Ut=!1;function gc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var s=n.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e,$t(t,i)}return s=n.interleaved,s===null?(e.next=e,mc(n)):(e.next=s.next,s.next=e),n.interleaved=e,$t(t,i)}function br(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,tc(t,i)}}function Fu(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var s=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var a={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?s=r=a:r=r.next=a,i=i.next}while(i!==null);r===null?s=r=e:r=r.next=e}else s=r=e;i={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:n.shared,effects:n.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function Hr(t,e,i,n){var s=t.updateQueue;Ut=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var o=c,u=o.next;o.next=null,a===null?r=u:a.next=u,a=o;var h=t.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==a&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=o))}if(r!==null){var d=s.baseState;a=0,h=u=o=null,c=r;do{var f=c.lane,p=c.eventTime;if((n&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var m=t,x=c;switch(f=e,p=i,x.tag){case 1:if(m=x.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=oe({},d,f);break e;case 2:Ut=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[c]:f.push(c))}else p={eventTime:p,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=p,o=d):h=h.next=p,a|=f;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;f=c,c=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(o=d),s.baseState=o,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else r===null&&(s.shared.lanes=0);Mi|=a,t.lanes=a,t.memoizedState=d}}function Vu(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],s=n.callback;if(s!==null){if(n.callback=null,n=i,typeof s!="function")throw Error(z(191,s));s.call(n)}}}var Ts={},St=ci(Ts),ds=ci(Ts),fs=ci(Ts);function wi(t){if(t===Ts)throw Error(z(174));return t}function vc(t,e){switch(ee(fs,e),ee(ds,t),ee(St,Ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Aa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Aa(e,t)}ne(St),ee(St,e)}function mn(){ne(St),ne(ds),ne(fs)}function Jf(t){wi(fs.current);var e=wi(St.current),i=Aa(e,t.type);e!==i&&(ee(ds,t),ee(St,i))}function xc(t){ds.current===t&&(ne(St),ne(ds))}var re=ci(0);function qr(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yl=[];function yc(){for(var t=0;t<Yl.length;t++)Yl[t]._workInProgressVersionPrimary=null;Yl.length=0}var wr=Bt.ReactCurrentDispatcher,Gl=Bt.ReactCurrentBatchConfig,zi=0,le=null,xe=null,ke=null,Kr=!1,Kn=!1,ps=0,ev=0;function _e(){throw Error(z(321))}function bc(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!mt(t[i],e[i]))return!1;return!0}function wc(t,e,i,n,s,r){if(zi=r,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wr.current=t===null||t.memoizedState===null?sv:rv,t=i(n,s),Kn){r=0;do{if(Kn=!1,ps=0,25<=r)throw Error(z(301));r+=1,ke=xe=null,e.updateQueue=null,wr.current=lv,t=i(n,s)}while(Kn)}if(wr.current=Xr,e=xe!==null&&xe.next!==null,zi=0,ke=xe=le=null,Kr=!1,e)throw Error(z(300));return t}function kc(){var t=ps!==0;return ps=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?le.memoizedState=ke=t:ke=ke.next=t,ke}function ot(){if(xe===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=ke===null?le.memoizedState:ke.next;if(e!==null)ke=e,xe=t;else{if(t===null)throw Error(z(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ke===null?le.memoizedState=ke=t:ke=ke.next=t}return ke}function ms(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=ot(),i=e.queue;if(i===null)throw Error(z(311));i.lastRenderedReducer=t;var n=xe,s=n.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}n.baseQueue=s=r,i.pending=null}if(s!==null){r=s.next,n=n.baseState;var c=a=null,o=null,u=r;do{var h=u.lane;if((zi&h)===h)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(c=o=d,a=n):o=o.next=d,le.lanes|=h,Mi|=h}u=u.next}while(u!==null&&u!==r);o===null?a=n:o.next=c,mt(n,e.memoizedState)||(Ve=!0),e.memoizedState=n,e.baseState=a,e.baseQueue=o,i.lastRenderedState=n}if(t=i.interleaved,t!==null){s=t;do r=s.lane,le.lanes|=r,Mi|=r,s=s.next;while(s!==t)}else s===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function Zl(t){var e=ot(),i=e.queue;if(i===null)throw Error(z(311));i.lastRenderedReducer=t;var n=i.dispatch,s=i.pending,r=e.memoizedState;if(s!==null){i.pending=null;var a=s=s.next;do r=t(r,a.action),a=a.next;while(a!==s);mt(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),i.lastRenderedState=r}return[r,n]}function Zf(){}function ep(t,e){var i=le,n=ot(),s=e(),r=!mt(n.memoizedState,s);if(r&&(n.memoizedState=s,Ve=!0),n=n.queue,jc(np.bind(null,i,n,t),[t]),n.getSnapshot!==e||r||ke!==null&&ke.memoizedState.tag&1){if(i.flags|=2048,gs(9,ip.bind(null,i,n,s,e),void 0,null),je===null)throw Error(z(349));zi&30||tp(i,e,s)}return s}function tp(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function ip(t,e,i,n){e.value=i,e.getSnapshot=n,sp(e)&&rp(t)}function np(t,e,i){return i(function(){sp(e)&&rp(t)})}function sp(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!mt(t,i)}catch{return!0}}function rp(t){var e=$t(t,1);e!==null&&pt(e,t,1,-1)}function Uu(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},e.queue=t,t=t.dispatch=nv.bind(null,le,t),[e.memoizedState,t]}function gs(t,e,i,n){return t={tag:t,create:e,destroy:i,deps:n,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t)),t}function lp(){return ot().memoizedState}function kr(t,e,i,n){var s=bt();le.flags|=t,s.memoizedState=gs(1|e,i,void 0,n===void 0?null:n)}function dl(t,e,i,n){var s=ot();n=n===void 0?null:n;var r=void 0;if(xe!==null){var a=xe.memoizedState;if(r=a.destroy,n!==null&&bc(n,a.deps)){s.memoizedState=gs(e,i,r,n);return}}le.flags|=t,s.memoizedState=gs(1|e,i,r,n)}function Wu(t,e){return kr(8390656,8,t,e)}function jc(t,e){return dl(2048,8,t,e)}function ap(t,e){return dl(4,2,t,e)}function op(t,e){return dl(4,4,t,e)}function cp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function up(t,e,i){return i=i!=null?i.concat([t]):null,dl(4,4,cp.bind(null,e,t),i)}function Sc(){}function hp(t,e){var i=ot();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&bc(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function dp(t,e){var i=ot();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&bc(e,n[1])?n[0]:(t=t(),i.memoizedState=[t,e],t)}function fp(t,e,i){return zi&21?(mt(i,e)||(i=xf(),le.lanes|=i,Mi|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=i)}function tv(t,e){var i=Y;Y=i!==0&&4>i?i:4,t(!0);var n=Gl.transition;Gl.transition={};try{t(!1),e()}finally{Y=i,Gl.transition=n}}function pp(){return ot().memoizedState}function iv(t,e,i){var n=ti(t);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},mp(t))gp(e,i);else if(i=Yf(t,e,i,n),i!==null){var s=Be();pt(i,t,n,s),vp(i,e,n)}}function nv(t,e,i){var n=ti(t),s={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(mp(t))gp(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,c=r(a,i);if(s.hasEagerState=!0,s.eagerState=c,mt(c,a)){var o=e.interleaved;o===null?(s.next=s,mc(e)):(s.next=o.next,o.next=s),e.interleaved=s;return}}catch{}finally{}i=Yf(t,e,s,n),i!==null&&(s=Be(),pt(i,t,n,s),vp(i,e,n))}}function mp(t){var e=t.alternate;return t===le||e!==null&&e===le}function gp(t,e){Kn=Kr=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function vp(t,e,i){if(i&4194240){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,tc(t,i)}}var Xr={readContext:at,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},sv={readContext:at,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:Wu,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,kr(4194308,4,cp.bind(null,e,t),i)},useLayoutEffect:function(t,e){return kr(4194308,4,t,e)},useInsertionEffect:function(t,e){return kr(4,2,t,e)},useMemo:function(t,e){var i=bt();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var n=bt();return e=i!==void 0?i(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=iv.bind(null,le,t),[n.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:Uu,useDebugValue:Sc,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=Uu(!1),e=t[0];return t=tv.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var n=le,s=bt();if(se){if(i===void 0)throw Error(z(407));i=i()}else{if(i=e(),je===null)throw Error(z(349));zi&30||tp(n,e,i)}s.memoizedState=i;var r={value:i,getSnapshot:e};return s.queue=r,Wu(np.bind(null,n,r,t),[t]),n.flags|=2048,gs(9,ip.bind(null,n,r,i,e),void 0,null),i},useId:function(){var t=bt(),e=je.identifierPrefix;if(se){var i=Mt,n=zt;i=(n&~(1<<32-ft(n)-1)).toString(32)+i,e=":"+e+"R"+i,i=ps++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=ev++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rv={readContext:at,useCallback:hp,useContext:at,useEffect:jc,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:op,useMemo:dp,useReducer:Jl,useRef:lp,useState:function(){return Jl(ms)},useDebugValue:Sc,useDeferredValue:function(t){var e=ot();return fp(e,xe.memoizedState,t)},useTransition:function(){var t=Jl(ms)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Zf,useSyncExternalStore:ep,useId:pp,unstable_isNewReconciler:!1},lv={readContext:at,useCallback:hp,useContext:at,useEffect:jc,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:op,useMemo:dp,useReducer:Zl,useRef:lp,useState:function(){return Zl(ms)},useDebugValue:Sc,useDeferredValue:function(t){var e=ot();return xe===null?e.memoizedState=t:fp(e,xe.memoizedState,t)},useTransition:function(){var t=Zl(ms)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Zf,useSyncExternalStore:ep,useId:pp,unstable_isNewReconciler:!1};function ut(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function ro(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:oe({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var fl={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var n=Be(),s=ti(t),r=Pt(n,s);r.payload=e,i!=null&&(r.callback=i),e=Zt(t,r,s),e!==null&&(pt(e,t,s,n),br(e,t,s))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=Be(),s=ti(t),r=Pt(n,s);r.tag=1,r.payload=e,i!=null&&(r.callback=i),e=Zt(t,r,s),e!==null&&(pt(e,t,s,n),br(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Be(),n=ti(t),s=Pt(i,n);s.tag=2,e!=null&&(s.callback=e),e=Zt(t,s,n),e!==null&&(pt(e,t,n,i),br(e,t,n))}};function Hu(t,e,i,n,s,r,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,r,a):e.prototype&&e.prototype.isPureReactComponent?!os(i,n)||!os(s,r):!0}function xp(t,e,i){var n=!1,s=li,r=e.contextType;return typeof r=="object"&&r!==null?r=at(r):(s=We(e)?Ci:Le.current,n=e.contextTypes,r=(n=n!=null)?dn(t,s):li),e=new e(i,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),e}function qu(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&fl.enqueueReplaceState(e,e.state,null)}function lo(t,e,i,n){var s=t.stateNode;s.props=i,s.state=t.memoizedState,s.refs={},gc(t);var r=e.contextType;typeof r=="object"&&r!==null?s.context=at(r):(r=We(e)?Ci:Le.current,s.context=dn(t,r)),s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(ro(t,e,r,i),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&fl.enqueueReplaceState(s,s.state,null),Hr(t,i,s,n),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function gn(t,e){try{var i="",n=e;do i+=Rg(n),n=n.return;while(n);var s=i}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:s,digest:null}}function ea(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function ao(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var av=typeof WeakMap=="function"?WeakMap:Map;function yp(t,e,i){i=Pt(-1,i),i.tag=3,i.payload={element:null};var n=e.value;return i.callback=function(){Yr||(Yr=!0,xo=n),ao(t,e)},i}function bp(t,e,i){i=Pt(-1,i),i.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var s=e.value;i.payload=function(){return n(s)},i.callback=function(){ao(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){ao(t,e),typeof n!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),i}function Ku(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new av;var s=new Set;n.set(e,s)}else s=n.get(e),s===void 0&&(s=new Set,n.set(e,s));s.has(i)||(s.add(i),t=wv.bind(null,t,e,i),e.then(t,t))}function Xu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qu(t,e,i,n,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=Pt(-1,1),e.tag=2,Zt(i,e,1))),i.lanes|=1),t)}var ov=Bt.ReactCurrentOwner,Ve=!1;function De(t,e,i,n){e.child=t===null?Qf(e,null,i,n):pn(e,t.child,i,n)}function Yu(t,e,i,n,s){i=i.render;var r=e.ref;return on(e,s),n=wc(t,e,i,n,r,s),i=kc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Dt(t,e,s)):(se&&i&&cc(e),e.flags|=1,De(t,e,n,s),e.child)}function Gu(t,e,i,n,s){if(t===null){var r=i.type;return typeof r=="function"&&!Pc(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=r,wp(t,e,r,n,s)):(t=Cr(i.type,null,n,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&s)){var a=r.memoizedProps;if(i=i.compare,i=i!==null?i:os,i(a,n)&&t.ref===e.ref)return Dt(t,e,s)}return e.flags|=1,t=ii(r,n),t.ref=e.ref,t.return=e,e.child=t}function wp(t,e,i,n,s){if(t!==null){var r=t.memoizedProps;if(os(r,n)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=n=r,(t.lanes&s)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Dt(t,e,s)}return oo(t,e,i,n,s)}function kp(t,e,i){var n=e.pendingProps,s=n.children,r=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(en,Ke),Ke|=i;else{if(!(i&1073741824))return t=r!==null?r.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(en,Ke),Ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:i,ee(en,Ke),Ke|=n}else r!==null?(n=r.baseLanes|i,e.memoizedState=null):n=i,ee(en,Ke),Ke|=n;return De(t,e,s,i),e.child}function jp(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function oo(t,e,i,n,s){var r=We(i)?Ci:Le.current;return r=dn(e,r),on(e,s),i=wc(t,e,i,n,r,s),n=kc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Dt(t,e,s)):(se&&n&&cc(e),e.flags|=1,De(t,e,i,s),e.child)}function Ju(t,e,i,n,s){if(We(i)){var r=!0;Or(e)}else r=!1;if(on(e,s),e.stateNode===null)jr(t,e),xp(e,i,n),lo(e,i,n,s),n=!0;else if(t===null){var a=e.stateNode,c=e.memoizedProps;a.props=c;var o=a.context,u=i.contextType;typeof u=="object"&&u!==null?u=at(u):(u=We(i)?Ci:Le.current,u=dn(e,u));var h=i.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||o!==u)&&qu(e,a,n,u),Ut=!1;var f=e.memoizedState;a.state=f,Hr(e,n,a,s),o=e.memoizedState,c!==n||f!==o||Ue.current||Ut?(typeof h=="function"&&(ro(e,i,h,n),o=e.memoizedState),(c=Ut||Hu(e,i,c,n,f,o,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),a.props=n,a.state=o,a.context=u,n=c):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{a=e.stateNode,Gf(t,e),c=e.memoizedProps,u=e.type===e.elementType?c:ut(e.type,c),a.props=u,d=e.pendingProps,f=a.context,o=i.contextType,typeof o=="object"&&o!==null?o=at(o):(o=We(i)?Ci:Le.current,o=dn(e,o));var p=i.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==d||f!==o)&&qu(e,a,n,o),Ut=!1,f=e.memoizedState,a.state=f,Hr(e,n,a,s);var m=e.memoizedState;c!==d||f!==m||Ue.current||Ut?(typeof p=="function"&&(ro(e,i,p,n),m=e.memoizedState),(u=Ut||Hu(e,i,u,n,f,m,o)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,m,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,m,o)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=m),a.props=n,a.state=m,a.context=o,n=u):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return co(t,e,i,n,r,s)}function co(t,e,i,n,s,r){jp(t,e);var a=(e.flags&128)!==0;if(!n&&!a)return s&&Bu(e,i,!1),Dt(t,e,r);n=e.stateNode,ov.current=e;var c=a&&typeof i.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&a?(e.child=pn(e,t.child,null,r),e.child=pn(e,null,c,r)):De(t,e,c,r),e.memoizedState=n.state,s&&Bu(e,i,!0),e.child}function Sp(t){var e=t.stateNode;e.pendingContext?Du(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Du(t,e.context,!1),vc(t,e.containerInfo)}function Zu(t,e,i,n,s){return fn(),hc(s),e.flags|=256,De(t,e,i,n),e.child}var uo={dehydrated:null,treeContext:null,retryLane:0};function ho(t){return{baseLanes:t,cachePool:null,transitions:null}}function Np(t,e,i){var n=e.pendingProps,s=re.current,r=!1,a=(e.flags&128)!==0,c;if((c=a)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ee(re,s&1),t===null)return no(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=n.children,t=n.fallback,r?(n=e.mode,r=e.child,a={mode:"hidden",children:a},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=gl(a,n,0,null),t=ji(t,n,i,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=ho(i),e.memoizedState=uo,t):Nc(e,a));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return cv(t,e,a,n,c,s,i);if(r){r=n.fallback,a=e.mode,s=t.child,c=s.sibling;var o={mode:"hidden",children:n.children};return!(a&1)&&e.child!==s?(n=e.child,n.childLanes=0,n.pendingProps=o,e.deletions=null):(n=ii(s,o),n.subtreeFlags=s.subtreeFlags&14680064),c!==null?r=ii(c,r):(r=ji(r,a,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,n=r,r=e.child,a=t.child.memoizedState,a=a===null?ho(i):{baseLanes:a.baseLanes|i,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=t.childLanes&~i,e.memoizedState=uo,n}return r=t.child,t=r.sibling,n=ii(r,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n}function Nc(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gs(t,e,i,n){return n!==null&&hc(n),pn(e,t.child,null,i),t=Nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cv(t,e,i,n,s,r,a){if(i)return e.flags&256?(e.flags&=-257,n=ea(Error(z(422))),Gs(t,e,a,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=n.fallback,s=e.mode,n=gl({mode:"visible",children:n.children},s,0,null),r=ji(r,s,a,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,e.mode&1&&pn(e,t.child,null,a),e.child.memoizedState=ho(a),e.memoizedState=uo,r);if(!(e.mode&1))return Gs(t,e,a,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var c=n.dgst;return n=c,r=Error(z(419)),n=ea(r,n,void 0),Gs(t,e,a,n)}if(c=(a&t.childLanes)!==0,Ve||c){if(n=je,n!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|a)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,$t(t,s),pt(n,t,s,-1))}return Tc(),n=ea(Error(z(421))),Gs(t,e,a,n)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=kv.bind(null,t),s._reactRetry=e,null):(t=r.treeContext,Xe=Jt(s.nextSibling),Qe=e,se=!0,dt=null,t!==null&&(nt[st++]=zt,nt[st++]=Mt,nt[st++]=Ei,zt=t.id,Mt=t.overflow,Ei=e),e=Nc(e,n.children),e.flags|=4096,e)}function eh(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),so(t.return,e,i)}function ta(t,e,i,n,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=i,r.tailMode=s)}function Cp(t,e,i){var n=e.pendingProps,s=n.revealOrder,r=n.tail;if(De(t,e,n.children,i),n=re.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eh(t,i,e);else if(t.tag===19)eh(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ee(re,n),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(i=e.child,s=null;i!==null;)t=i.alternate,t!==null&&qr(t)===null&&(s=i),i=i.sibling;i=s,i===null?(s=e.child,e.child=null):(s=i.sibling,i.sibling=null),ta(e,!1,s,i,r);break;case"backwards":for(i=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&qr(t)===null){e.child=s;break}t=s.sibling,s.sibling=i,i=s,s=t}ta(e,!0,i,null,r);break;case"together":ta(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jr(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,i=ii(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ii(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function uv(t,e,i){switch(e.tag){case 3:Sp(e),fn();break;case 5:Jf(e);break;case 1:We(e.type)&&Or(e);break;case 4:vc(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,s=e.memoizedProps.value;ee(Ur,n._currentValue),n._currentValue=s;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ee(re,re.current&1),e.flags|=128,null):i&e.child.childLanes?Np(t,e,i):(ee(re,re.current&1),t=Dt(t,e,i),t!==null?t.sibling:null);ee(re,re.current&1);break;case 19:if(n=(i&e.childLanes)!==0,t.flags&128){if(n)return Cp(t,e,i);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ee(re,re.current),n)break;return null;case 22:case 23:return e.lanes=0,kp(t,e,i)}return Dt(t,e,i)}var Ep,fo,zp,Mp;Ep=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};fo=function(){};zp=function(t,e,i,n){var s=t.memoizedProps;if(s!==n){t=e.stateNode,wi(St.current);var r=null;switch(i){case"input":s=Ra(t,s),n=Ra(t,n),r=[];break;case"select":s=oe({},s,{value:void 0}),n=oe({},n,{value:void 0}),r=[];break;case"textarea":s=Ba(t,s),n=Ba(t,n),r=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ar)}Ia(i,n);var a;i=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var c=s[u];for(a in c)c.hasOwnProperty(a)&&(i||(i={}),i[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ts.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in n){var o=n[u];if(c=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&o!==c&&(o!=null||c!=null))if(u==="style")if(c){for(a in c)!c.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(i||(i={}),i[a]="");for(a in o)o.hasOwnProperty(a)&&c[a]!==o[a]&&(i||(i={}),i[a]=o[a])}else i||(r||(r=[]),r.push(u,i)),i=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(r=r||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ts.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&te("scroll",t),r||c===o||(r=[])):(r=r||[]).push(u,o))}i&&(r=r||[]).push("style",i);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};Mp=function(t,e,i,n){i!==n&&(e.flags|=4)};function Rn(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var s=t.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function hv(t,e,i){var n=e.pendingProps;switch(uc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return We(e.type)&&Ir(),Te(e),null;case 3:return n=e.stateNode,mn(),ne(Ue),ne(Le),yc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dt!==null&&(wo(dt),dt=null))),fo(t,e),Te(e),null;case 5:xc(e);var s=wi(fs.current);if(i=e.type,t!==null&&e.stateNode!=null)zp(t,e,i,n,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(z(166));return Te(e),null}if(t=wi(St.current),Qs(e)){n=e.stateNode,i=e.type;var r=e.memoizedProps;switch(n[wt]=e,n[hs]=r,t=(e.mode&1)!==0,i){case"dialog":te("cancel",n),te("close",n);break;case"iframe":case"object":case"embed":te("load",n);break;case"video":case"audio":for(s=0;s<On.length;s++)te(On[s],n);break;case"source":te("error",n);break;case"img":case"image":case"link":te("error",n),te("load",n);break;case"details":te("toggle",n);break;case"input":cu(n,r),te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},te("invalid",n);break;case"textarea":hu(n,r),te("invalid",n)}Ia(i,r),s=null;for(var a in r)if(r.hasOwnProperty(a)){var c=r[a];a==="children"?typeof c=="string"?n.textContent!==c&&(r.suppressHydrationWarning!==!0&&Xs(n.textContent,c,t),s=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&Xs(n.textContent,c,t),s=["children",""+c]):ts.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&te("scroll",n)}switch(i){case"input":Os(n),uu(n,r,!0);break;case"textarea":Os(n),du(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=Ar)}n=s,e.updateQueue=n,n!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nf(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=a.createElement(i,{is:n.is}):(t=a.createElement(i),i==="select"&&(a=t,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):t=a.createElementNS(t,i),t[wt]=e,t[hs]=n,Ep(t,e,!1,!1),e.stateNode=t;e:{switch(a=Oa(i,n),i){case"dialog":te("cancel",t),te("close",t),s=n;break;case"iframe":case"object":case"embed":te("load",t),s=n;break;case"video":case"audio":for(s=0;s<On.length;s++)te(On[s],t);s=n;break;case"source":te("error",t),s=n;break;case"img":case"image":case"link":te("error",t),te("load",t),s=n;break;case"details":te("toggle",t),s=n;break;case"input":cu(t,n),s=Ra(t,n),te("invalid",t);break;case"option":s=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},s=oe({},n,{value:void 0}),te("invalid",t);break;case"textarea":hu(t,n),s=Ba(t,n),te("invalid",t);break;default:s=n}Ia(i,s),c=s;for(r in c)if(c.hasOwnProperty(r)){var o=c[r];r==="style"?lf(t,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&sf(t,o)):r==="children"?typeof o=="string"?(i!=="textarea"||o!=="")&&is(t,o):typeof o=="number"&&is(t,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ts.hasOwnProperty(r)?o!=null&&r==="onScroll"&&te("scroll",t):o!=null&&Qo(t,r,o,a))}switch(i){case"input":Os(t),uu(t,n,!1);break;case"textarea":Os(t),du(t);break;case"option":n.value!=null&&t.setAttribute("value",""+ri(n.value));break;case"select":t.multiple=!!n.multiple,r=n.value,r!=null?sn(t,!!n.multiple,r,!1):n.defaultValue!=null&&sn(t,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ar)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)Mp(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(z(166));if(i=wi(fs.current),wi(St.current),Qs(e)){if(n=e.stateNode,i=e.memoizedProps,n[wt]=e,(r=n.nodeValue!==i)&&(t=Qe,t!==null))switch(t.tag){case 3:Xs(n.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xs(n.nodeValue,i,(t.mode&1)!==0)}r&&(e.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[wt]=e,e.stateNode=n}return Te(e),null;case 13:if(ne(re),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&Xe!==null&&e.mode&1&&!(e.flags&128))Kf(),fn(),e.flags|=98560,r=!1;else if(r=Qs(e),n!==null&&n.dehydrated!==null){if(t===null){if(!r)throw Error(z(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(z(317));r[wt]=e}else fn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),r=!1}else dt!==null&&(wo(dt),dt=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?ye===0&&(ye=3):Tc())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return mn(),fo(t,e),t===null&&cs(e.stateNode.containerInfo),Te(e),null;case 10:return pc(e.type._context),Te(e),null;case 17:return We(e.type)&&Ir(),Te(e),null;case 19:if(ne(re),r=e.memoizedState,r===null)return Te(e),null;if(n=(e.flags&128)!==0,a=r.rendering,a===null)if(n)Rn(r,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=qr(t),a!==null){for(e.flags|=128,Rn(r,!1),n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=i,i=e.child;i!==null;)r=i,t=n,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,t=a.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return ee(re,re.current&1|2),e.child}t=t.sibling}r.tail!==null&&pe()>vn&&(e.flags|=128,n=!0,Rn(r,!1),e.lanes=4194304)}else{if(!n)if(t=qr(a),t!==null){if(e.flags|=128,n=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),Rn(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!se)return Te(e),null}else 2*pe()-r.renderingStartTime>vn&&i!==1073741824&&(e.flags|=128,n=!0,Rn(r,!1),e.lanes=4194304);r.isBackwards?(a.sibling=e.child,e.child=a):(i=r.last,i!==null?i.sibling=a:e.child=a,r.last=a)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=pe(),e.sibling=null,i=re.current,ee(re,n?i&1|2:i&1),e):(Te(e),null);case 22:case 23:return _c(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Ke&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function dv(t,e){switch(uc(e),e.tag){case 1:return We(e.type)&&Ir(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mn(),ne(Ue),ne(Le),yc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xc(e),null;case 13:if(ne(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));fn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(re),null;case 4:return mn(),null;case 10:return pc(e.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var Js=!1,Pe=!1,fv=typeof WeakSet=="function"?WeakSet:Set,B=null;function Zi(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){he(t,e,n)}else i.current=null}function po(t,e,i){try{i()}catch(n){he(t,e,n)}}var th=!1;function pv(t,e){if(Ya=$r,t=Rf(),oc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var s=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var a=0,c=-1,o=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==i||s!==0&&d.nodeType!==3||(c=a+s),d!==r||n!==0&&d.nodeType!==3||(o=a+n),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===i&&++u===s&&(c=a),f===r&&++h===n&&(o=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}i=c===-1||o===-1?null:{start:c,end:o}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ga={focusedElem:t,selectionRange:i},$r=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,b=m.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?x:ut(e.type,x),b);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){he(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return m=th,th=!1,m}function Xn(t,e,i){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var r=s.destroy;s.destroy=void 0,r!==void 0&&po(e,i,r)}s=s.next}while(s!==n)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var n=i.create;i.destroy=n()}i=i.next}while(i!==e)}}function mo(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function _p(t){var e=t.alternate;e!==null&&(t.alternate=null,_p(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[hs],delete e[eo],delete e[Y0],delete e[G0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function ih(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function go(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Ar));else if(n!==4&&(t=t.child,t!==null))for(go(t,e,i),t=t.sibling;t!==null;)go(t,e,i),t=t.sibling}function vo(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(vo(t,e,i),t=t.sibling;t!==null;)vo(t,e,i),t=t.sibling}var Ne=null,ht=!1;function It(t,e,i){for(i=i.child;i!==null;)Pp(t,e,i),i=i.sibling}function Pp(t,e,i){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(ll,i)}catch{}switch(i.tag){case 5:Pe||Zi(i,e);case 6:var n=Ne,s=ht;Ne=null,It(t,e,i),Ne=n,ht=s,Ne!==null&&(ht?(t=Ne,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Ne.removeChild(i.stateNode));break;case 18:Ne!==null&&(ht?(t=Ne,i=i.stateNode,t.nodeType===8?Xl(t.parentNode,i):t.nodeType===1&&Xl(t,i),ls(t)):Xl(Ne,i.stateNode));break;case 4:n=Ne,s=ht,Ne=i.stateNode.containerInfo,ht=!0,It(t,e,i),Ne=n,ht=s;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var r=s,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&po(i,e,a),s=s.next}while(s!==n)}It(t,e,i);break;case 1:if(!Pe&&(Zi(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(c){he(i,e,c)}It(t,e,i);break;case 21:It(t,e,i);break;case 22:i.mode&1?(Pe=(n=Pe)||i.memoizedState!==null,It(t,e,i),Pe=n):It(t,e,i);break;default:It(t,e,i)}}function nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new fv),e.forEach(function(n){var s=jv.bind(null,t,n);i.has(n)||(i.add(n),n.then(s,s))})}}function ct(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var s=i[n];try{var r=t,a=e,c=a;e:for(;c!==null;){switch(c.tag){case 5:Ne=c.stateNode,ht=!1;break e;case 3:Ne=c.stateNode.containerInfo,ht=!0;break e;case 4:Ne=c.stateNode.containerInfo,ht=!0;break e}c=c.return}if(Ne===null)throw Error(z(160));Pp(r,a,s),Ne=null,ht=!1;var o=s.alternate;o!==null&&(o.return=null),s.return=null}catch(u){he(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lp(e,t),e=e.sibling}function Lp(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ct(e,t),xt(t),n&4){try{Xn(3,t,t.return),pl(3,t)}catch(x){he(t,t.return,x)}try{Xn(5,t,t.return)}catch(x){he(t,t.return,x)}}break;case 1:ct(e,t),xt(t),n&512&&i!==null&&Zi(i,i.return);break;case 5:if(ct(e,t),xt(t),n&512&&i!==null&&Zi(i,i.return),t.flags&32){var s=t.stateNode;try{is(s,"")}catch(x){he(t,t.return,x)}}if(n&4&&(s=t.stateNode,s!=null)){var r=t.memoizedProps,a=i!==null?i.memoizedProps:r,c=t.type,o=t.updateQueue;if(t.updateQueue=null,o!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&ef(s,r),Oa(c,a);var u=Oa(c,r);for(a=0;a<o.length;a+=2){var h=o[a],d=o[a+1];h==="style"?lf(s,d):h==="dangerouslySetInnerHTML"?sf(s,d):h==="children"?is(s,d):Qo(s,h,d,u)}switch(c){case"input":$a(s,r);break;case"textarea":tf(s,r);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var p=r.value;p!=null?sn(s,!!r.multiple,p,!1):f!==!!r.multiple&&(r.defaultValue!=null?sn(s,!!r.multiple,r.defaultValue,!0):sn(s,!!r.multiple,r.multiple?[]:"",!1))}s[hs]=r}catch(x){he(t,t.return,x)}}break;case 6:if(ct(e,t),xt(t),n&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,r=t.memoizedProps;try{s.nodeValue=r}catch(x){he(t,t.return,x)}}break;case 3:if(ct(e,t),xt(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{ls(e.containerInfo)}catch(x){he(t,t.return,x)}break;case 4:ct(e,t),xt(t);break;case 13:ct(e,t),xt(t),s=t.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(zc=pe())),n&4&&nh(t);break;case 22:if(h=i!==null&&i.memoizedState!==null,t.mode&1?(Pe=(u=Pe)||h,ct(e,t),Pe=u):ct(e,t),xt(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(B=t,h=t.child;h!==null;){for(d=B=h;B!==null;){switch(f=B,p=f.child,f.tag){case 0:case 11:case 14:case 15:Xn(4,f,f.return);break;case 1:Zi(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){n=f,i=f.return;try{e=n,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){he(n,i,x)}}break;case 5:Zi(f,f.return);break;case 22:if(f.memoizedState!==null){rh(d);continue}}p!==null?(p.return=f,B=p):rh(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=d.stateNode,o=d.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=rf("display",a))}catch(x){he(t,t.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){he(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ct(e,t),xt(t),n&4&&nh(t);break;case 21:break;default:ct(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(Tp(i)){var n=i;break e}i=i.return}throw Error(z(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(is(s,""),n.flags&=-33);var r=ih(t);vo(t,r,s);break;case 3:case 4:var a=n.stateNode.containerInfo,c=ih(t);go(t,c,a);break;default:throw Error(z(161))}}catch(o){he(t,t.return,o)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mv(t,e,i){B=t,Rp(t)}function Rp(t,e,i){for(var n=(t.mode&1)!==0;B!==null;){var s=B,r=s.child;if(s.tag===22&&n){var a=s.memoizedState!==null||Js;if(!a){var c=s.alternate,o=c!==null&&c.memoizedState!==null||Pe;c=Js;var u=Pe;if(Js=a,(Pe=o)&&!u)for(B=s;B!==null;)a=B,o=a.child,a.tag===22&&a.memoizedState!==null?lh(s):o!==null?(o.return=a,B=o):lh(s);for(;r!==null;)B=r,Rp(r),r=r.sibling;B=s,Js=c,Pe=u}sh(t)}else s.subtreeFlags&8772&&r!==null?(r.return=s,B=r):sh(t)}}function sh(t){for(;B!==null;){var e=B;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pe||pl(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Pe)if(i===null)n.componentDidMount();else{var s=e.elementType===e.type?i.memoizedProps:ut(e.type,i.memoizedProps);n.componentDidUpdate(s,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&Vu(e,r,n);break;case 3:var a=e.updateQueue;if(a!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}Vu(e,a,i)}break;case 5:var c=e.stateNode;if(i===null&&e.flags&4){i=c;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&i.focus();break;case"img":o.src&&(i.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ls(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Pe||e.flags&512&&mo(e)}catch(f){he(e,e.return,f)}}if(e===t){B=null;break}if(i=e.sibling,i!==null){i.return=e.return,B=i;break}B=e.return}}function rh(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var i=e.sibling;if(i!==null){i.return=e.return,B=i;break}B=e.return}}function lh(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{pl(4,e)}catch(o){he(e,i,o)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var s=e.return;try{n.componentDidMount()}catch(o){he(e,s,o)}}var r=e.return;try{mo(e)}catch(o){he(e,r,o)}break;case 5:var a=e.return;try{mo(e)}catch(o){he(e,a,o)}}}catch(o){he(e,e.return,o)}if(e===t){B=null;break}var c=e.sibling;if(c!==null){c.return=e.return,B=c;break}B=e.return}}var gv=Math.ceil,Qr=Bt.ReactCurrentDispatcher,Cc=Bt.ReactCurrentOwner,lt=Bt.ReactCurrentBatchConfig,X=0,je=null,ge=null,Ee=0,Ke=0,en=ci(0),ye=0,vs=null,Mi=0,ml=0,Ec=0,Qn=null,Fe=null,zc=0,vn=1/0,Ct=null,Yr=!1,xo=null,ei=null,Zs=!1,Kt=null,Gr=0,Yn=0,yo=null,Sr=-1,Nr=0;function Be(){return X&6?pe():Sr!==-1?Sr:Sr=pe()}function ti(t){return t.mode&1?X&2&&Ee!==0?Ee&-Ee:Z0.transition!==null?(Nr===0&&(Nr=xf()),Nr):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Nf(t.type)),t):1}function pt(t,e,i,n){if(50<Yn)throw Yn=0,yo=null,Error(z(185));zs(t,i,n),(!(X&2)||t!==je)&&(t===je&&(!(X&2)&&(ml|=i),ye===4&&Ht(t,Ee)),He(t,n),i===1&&X===0&&!(e.mode&1)&&(vn=pe()+500,hl&&ui()))}function He(t,e){var i=t.callbackNode;Zg(t,e);var n=Rr(t,t===je?Ee:0);if(n===0)i!==null&&mu(i),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(i!=null&&mu(i),e===1)t.tag===0?J0(ah.bind(null,t)):Wf(ah.bind(null,t)),X0(function(){!(X&6)&&ui()}),i=null;else{switch(yf(n)){case 1:i=ec;break;case 4:i=gf;break;case 16:i=Lr;break;case 536870912:i=vf;break;default:i=Lr}i=Vp(i,$p.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function $p(t,e){if(Sr=-1,Nr=0,X&6)throw Error(z(327));var i=t.callbackNode;if(cn()&&t.callbackNode!==i)return null;var n=Rr(t,t===je?Ee:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Jr(t,n);else{e=n;var s=X;X|=2;var r=Bp();(je!==t||Ee!==e)&&(Ct=null,vn=pe()+500,ki(t,e));do try{yv();break}catch(c){Dp(t,c)}while(!0);fc(),Qr.current=r,X=s,ge!==null?e=0:(je=null,Ee=0,e=ye)}if(e!==0){if(e===2&&(s=Ha(t),s!==0&&(n=s,e=bo(t,s))),e===1)throw i=vs,ki(t,0),Ht(t,n),He(t,pe()),i;if(e===6)Ht(t,n);else{if(s=t.current.alternate,!(n&30)&&!vv(s)&&(e=Jr(t,n),e===2&&(r=Ha(t),r!==0&&(n=r,e=bo(t,r))),e===1))throw i=vs,ki(t,0),Ht(t,n),He(t,pe()),i;switch(t.finishedWork=s,t.finishedLanes=n,e){case 0:case 1:throw Error(z(345));case 2:vi(t,Fe,Ct);break;case 3:if(Ht(t,n),(n&130023424)===n&&(e=zc+500-pe(),10<e)){if(Rr(t,0)!==0)break;if(s=t.suspendedLanes,(s&n)!==n){Be(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Za(vi.bind(null,t,Fe,Ct),e);break}vi(t,Fe,Ct);break;case 4:if(Ht(t,n),(n&4194240)===n)break;for(e=t.eventTimes,s=-1;0<n;){var a=31-ft(n);r=1<<a,a=e[a],a>s&&(s=a),n&=~r}if(n=s,n=pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*gv(n/1960))-n,10<n){t.timeoutHandle=Za(vi.bind(null,t,Fe,Ct),n);break}vi(t,Fe,Ct);break;case 5:vi(t,Fe,Ct);break;default:throw Error(z(329))}}}return He(t,pe()),t.callbackNode===i?$p.bind(null,t):null}function bo(t,e){var i=Qn;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=Jr(t,e),t!==2&&(e=Fe,Fe=i,e!==null&&wo(e)),t}function wo(t){Fe===null?Fe=t:Fe.push.apply(Fe,t)}function vv(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var s=i[n],r=s.getSnapshot;s=s.value;try{if(!mt(r(),s))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ht(t,e){for(e&=~Ec,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-ft(e),n=1<<i;t[i]=-1,e&=~n}}function ah(t){if(X&6)throw Error(z(327));cn();var e=Rr(t,0);if(!(e&1))return He(t,pe()),null;var i=Jr(t,e);if(t.tag!==0&&i===2){var n=Ha(t);n!==0&&(e=n,i=bo(t,n))}if(i===1)throw i=vs,ki(t,0),Ht(t,e),He(t,pe()),i;if(i===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,Fe,Ct),He(t,pe()),null}function Mc(t,e){var i=X;X|=1;try{return t(e)}finally{X=i,X===0&&(vn=pe()+500,hl&&ui())}}function _i(t){Kt!==null&&Kt.tag===0&&!(X&6)&&cn();var e=X;X|=1;var i=lt.transition,n=Y;try{if(lt.transition=null,Y=1,t)return t()}finally{Y=n,lt.transition=i,X=e,!(X&6)&&ui()}}function _c(){Ke=en.current,ne(en)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,K0(i)),ge!==null)for(i=ge.return;i!==null;){var n=i;switch(uc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ir();break;case 3:mn(),ne(Ue),ne(Le),yc();break;case 5:xc(n);break;case 4:mn();break;case 13:ne(re);break;case 19:ne(re);break;case 10:pc(n.type._context);break;case 22:case 23:_c()}i=i.return}if(je=t,ge=t=ii(t.current,null),Ee=Ke=e,ye=0,vs=null,Ec=ml=Mi=0,Fe=Qn=null,bi!==null){for(e=0;e<bi.length;e++)if(i=bi[e],n=i.interleaved,n!==null){i.interleaved=null;var s=n.next,r=i.pending;if(r!==null){var a=r.next;r.next=s,n.next=a}i.pending=n}bi=null}return t}function Dp(t,e){do{var i=ge;try{if(fc(),wr.current=Xr,Kr){for(var n=le.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Kr=!1}if(zi=0,ke=xe=le=null,Kn=!1,ps=0,Cc.current=null,i===null||i.return===null){ye=1,vs=e,ge=null;break}e:{var r=t,a=i.return,c=i,o=e;if(e=Ee,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,h=c,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Xu(a);if(p!==null){p.flags&=-257,Qu(p,a,c,r,e),p.mode&1&&Ku(r,u,e),e=p,o=u;var m=e.updateQueue;if(m===null){var x=new Set;x.add(o),e.updateQueue=x}else m.add(o);break e}else{if(!(e&1)){Ku(r,u,e),Tc();break e}o=Error(z(426))}}else if(se&&c.mode&1){var b=Xu(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Qu(b,a,c,r,e),hc(gn(o,c));break e}}r=o=gn(o,c),ye!==4&&(ye=2),Qn===null?Qn=[r]:Qn.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var g=yp(r,o,e);Fu(r,g);break e;case 1:c=o;var v=r.type,y=r.stateNode;if(!(r.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ei===null||!ei.has(y)))){r.flags|=65536,e&=-e,r.lanes|=e;var k=bp(r,c,e);Fu(r,k);break e}}r=r.return}while(r!==null)}Ip(i)}catch(N){e=N,ge===i&&i!==null&&(ge=i=i.return);continue}break}while(!0)}function Bp(){var t=Qr.current;return Qr.current=Xr,t===null?Xr:t}function Tc(){(ye===0||ye===3||ye===2)&&(ye=4),je===null||!(Mi&268435455)&&!(ml&268435455)||Ht(je,Ee)}function Jr(t,e){var i=X;X|=2;var n=Bp();(je!==t||Ee!==e)&&(Ct=null,ki(t,e));do try{xv();break}catch(s){Dp(t,s)}while(!0);if(fc(),X=i,Qr.current=n,ge!==null)throw Error(z(261));return je=null,Ee=0,ye}function xv(){for(;ge!==null;)Ap(ge)}function yv(){for(;ge!==null&&!Wg();)Ap(ge)}function Ap(t){var e=Fp(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?Ip(t):ge=e,Cc.current=null}function Ip(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=dv(i,e),i!==null){i.flags&=32767,ge=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,ge=null;return}}else if(i=hv(i,e,Ke),i!==null){ge=i;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);ye===0&&(ye=5)}function vi(t,e,i){var n=Y,s=lt.transition;try{lt.transition=null,Y=1,bv(t,e,i,n)}finally{lt.transition=s,Y=n}return null}function bv(t,e,i,n){do cn();while(Kt!==null);if(X&6)throw Error(z(327));i=t.finishedWork;var s=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var r=i.lanes|i.childLanes;if(e0(t,r),t===je&&(ge=je=null,Ee=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Zs||(Zs=!0,Vp(Lr,function(){return cn(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=lt.transition,lt.transition=null;var a=Y;Y=1;var c=X;X|=4,Cc.current=null,pv(t,i),Lp(i,t),O0(Ga),$r=!!Ya,Ga=Ya=null,t.current=i,mv(i),Hg(),X=c,Y=a,lt.transition=r}else t.current=i;if(Zs&&(Zs=!1,Kt=t,Gr=s),r=t.pendingLanes,r===0&&(ei=null),Xg(i.stateNode),He(t,pe()),e!==null)for(n=t.onRecoverableError,i=0;i<e.length;i++)s=e[i],n(s.value,{componentStack:s.stack,digest:s.digest});if(Yr)throw Yr=!1,t=xo,xo=null,t;return Gr&1&&t.tag!==0&&cn(),r=t.pendingLanes,r&1?t===yo?Yn++:(Yn=0,yo=t):Yn=0,ui(),null}function cn(){if(Kt!==null){var t=yf(Gr),e=lt.transition,i=Y;try{if(lt.transition=null,Y=16>t?16:t,Kt===null)var n=!1;else{if(t=Kt,Kt=null,Gr=0,X&6)throw Error(z(331));var s=X;for(X|=4,B=t.current;B!==null;){var r=B,a=r.child;if(B.flags&16){var c=r.deletions;if(c!==null){for(var o=0;o<c.length;o++){var u=c[o];for(B=u;B!==null;){var h=B;switch(h.tag){case 0:case 11:case 15:Xn(8,h,r)}var d=h.child;if(d!==null)d.return=h,B=d;else for(;B!==null;){h=B;var f=h.sibling,p=h.return;if(_p(h),h===u){B=null;break}if(f!==null){f.return=p,B=f;break}B=p}}}var m=r.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}B=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,B=a;else e:for(;B!==null;){if(r=B,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Xn(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,B=g;break e}B=r.return}}var v=t.current;for(B=v;B!==null;){a=B;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,B=y;else e:for(a=v;B!==null;){if(c=B,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:pl(9,c)}}catch(N){he(c,c.return,N)}if(c===a){B=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,B=k;break e}B=c.return}}if(X=s,ui(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(ll,t)}catch{}n=!0}return n}finally{Y=i,lt.transition=e}}return!1}function oh(t,e,i){e=gn(i,e),e=yp(t,e,1),t=Zt(t,e,1),e=Be(),t!==null&&(zs(t,1,e),He(t,e))}function he(t,e,i){if(t.tag===3)oh(t,t,i);else for(;e!==null;){if(e.tag===3){oh(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ei===null||!ei.has(n))){t=gn(i,t),t=bp(e,t,1),e=Zt(e,t,1),t=Be(),e!==null&&(zs(e,1,t),He(e,t));break}}e=e.return}}function wv(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&i,je===t&&(Ee&i)===i&&(ye===4||ye===3&&(Ee&130023424)===Ee&&500>pe()-zc?ki(t,0):Ec|=i),He(t,e)}function Op(t,e){e===0&&(t.mode&1?(e=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):e=1);var i=Be();t=$t(t,e),t!==null&&(zs(t,e,i),He(t,i))}function kv(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Op(t,i)}function jv(t,e){var i=0;switch(t.tag){case 13:var n=t.stateNode,s=t.memoizedState;s!==null&&(i=s.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(z(314))}n!==null&&n.delete(e),Op(t,i)}var Fp;Fp=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Ve=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return Ve=!1,uv(t,e,i);Ve=!!(t.flags&131072)}else Ve=!1,se&&e.flags&1048576&&Hf(e,Vr,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;jr(t,e),t=e.pendingProps;var s=dn(e,Le.current);on(e,i),s=wc(null,e,n,t,s,i);var r=kc();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(n)?(r=!0,Or(e)):r=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gc(e),s.updater=fl,e.stateNode=s,s._reactInternals=e,lo(e,n,t,i),e=co(null,e,n,!0,r,i)):(e.tag=0,se&&r&&cc(e),De(null,e,s,i),e=e.child),e;case 16:n=e.elementType;e:{switch(jr(t,e),t=e.pendingProps,s=n._init,n=s(n._payload),e.type=n,s=e.tag=Nv(n),t=ut(n,t),s){case 0:e=oo(null,e,n,t,i);break e;case 1:e=Ju(null,e,n,t,i);break e;case 11:e=Yu(null,e,n,t,i);break e;case 14:e=Gu(null,e,n,ut(n.type,t),i);break e}throw Error(z(306,n,""))}return e;case 0:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ut(n,s),oo(t,e,n,s,i);case 1:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ut(n,s),Ju(t,e,n,s,i);case 3:e:{if(Sp(e),t===null)throw Error(z(387));n=e.pendingProps,r=e.memoizedState,s=r.element,Gf(t,e),Hr(e,n,null,i);var a=e.memoizedState;if(n=a.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){s=gn(Error(z(423)),e),e=Zu(t,e,n,i,s);break e}else if(n!==s){s=gn(Error(z(424)),e),e=Zu(t,e,n,i,s);break e}else for(Xe=Jt(e.stateNode.containerInfo.firstChild),Qe=e,se=!0,dt=null,i=Qf(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(fn(),n===s){e=Dt(t,e,i);break e}De(t,e,n,i)}e=e.child}return e;case 5:return Jf(e),t===null&&no(e),n=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,a=s.children,Ja(n,s)?a=null:r!==null&&Ja(n,r)&&(e.flags|=32),jp(t,e),De(t,e,a,i),e.child;case 6:return t===null&&no(e),null;case 13:return Np(t,e,i);case 4:return vc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=pn(e,null,n,i):De(t,e,n,i),e.child;case 11:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ut(n,s),Yu(t,e,n,s,i);case 7:return De(t,e,e.pendingProps,i),e.child;case 8:return De(t,e,e.pendingProps.children,i),e.child;case 12:return De(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(n=e.type._context,s=e.pendingProps,r=e.memoizedProps,a=s.value,ee(Ur,n._currentValue),n._currentValue=a,r!==null)if(mt(r.value,a)){if(r.children===s.children&&!Ue.current){e=Dt(t,e,i);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){a=r.child;for(var o=c.firstContext;o!==null;){if(o.context===n){if(r.tag===1){o=Pt(-1,i&-i),o.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?o.next=o:(o.next=h.next,h.next=o),u.pending=o}}r.lanes|=i,o=r.alternate,o!==null&&(o.lanes|=i),so(r.return,i,e),c.lanes|=i;break}o=o.next}}else if(r.tag===10)a=r.type===e.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(z(341));a.lanes|=i,c=a.alternate,c!==null&&(c.lanes|=i),so(a,i,e),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}De(t,e,s.children,i),e=e.child}return e;case 9:return s=e.type,n=e.pendingProps.children,on(e,i),s=at(s),n=n(s),e.flags|=1,De(t,e,n,i),e.child;case 14:return n=e.type,s=ut(n,e.pendingProps),s=ut(n.type,s),Gu(t,e,n,s,i);case 15:return wp(t,e,e.type,e.pendingProps,i);case 17:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ut(n,s),jr(t,e),e.tag=1,We(n)?(t=!0,Or(e)):t=!1,on(e,i),xp(e,n,s),lo(e,n,s,i),co(null,e,n,!0,t,i);case 19:return Cp(t,e,i);case 22:return kp(t,e,i)}throw Error(z(156,e.tag))};function Vp(t,e){return mf(t,e)}function Sv(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(t,e,i,n){return new Sv(t,e,i,n)}function Pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nv(t){if(typeof t=="function")return Pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Go)return 11;if(t===Jo)return 14}return 2}function ii(t,e){var i=t.alternate;return i===null?(i=rt(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Cr(t,e,i,n,s,r){var a=2;if(n=t,typeof t=="function")Pc(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Wi:return ji(i.children,s,r,e);case Yo:a=8,s|=8;break;case _a:return t=rt(12,i,e,s|2),t.elementType=_a,t.lanes=r,t;case Ta:return t=rt(13,i,e,s),t.elementType=Ta,t.lanes=r,t;case Pa:return t=rt(19,i,e,s),t.elementType=Pa,t.lanes=r,t;case Gd:return gl(i,s,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qd:a=10;break e;case Yd:a=9;break e;case Go:a=11;break e;case Jo:a=14;break e;case Vt:a=16,n=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=rt(a,i,e,s),e.elementType=t,e.type=n,e.lanes=r,e}function ji(t,e,i,n){return t=rt(7,t,n,e),t.lanes=i,t}function gl(t,e,i,n){return t=rt(22,t,n,e),t.elementType=Gd,t.lanes=i,t.stateNode={isHidden:!1},t}function ia(t,e,i){return t=rt(6,t,null,e),t.lanes=i,t}function na(t,e,i){return e=rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cv(t,e,i,n,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Lc(t,e,i,n,s,r,a,c,o){return t=new Cv(t,e,i,c,o),e===1?(e=1,r===!0&&(e|=8)):e=0,r=rt(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(r),t}function Ev(t,e,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:n==null?null:""+n,children:t,containerInfo:e,implementation:i}}function Up(t){if(!t)return li;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var i=t.type;if(We(i))return Uf(t,i,e)}return e}function Wp(t,e,i,n,s,r,a,c,o){return t=Lc(i,n,!0,t,s,r,a,c,o),t.context=Up(null),i=t.current,n=Be(),s=ti(i),r=Pt(n,s),r.callback=e??null,Zt(i,r,s),t.current.lanes=s,zs(t,s,n),He(t,n),t}function vl(t,e,i,n){var s=e.current,r=Be(),a=ti(s);return i=Up(i),e.context===null?e.context=i:e.pendingContext=i,e=Pt(r,a),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Zt(s,e,a),t!==null&&(pt(t,s,a,r),br(t,s,a)),a}function Zr(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ch(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Rc(t,e){ch(t,e),(t=t.alternate)&&ch(t,e)}function zv(){return null}var Hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function $c(t){this._internalRoot=t}xl.prototype.render=$c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));vl(t,e,null,null)};xl.prototype.unmount=$c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){vl(null,t,null,null)}),e[Rt]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=kf();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Wt.length&&e!==0&&e<Wt[i].priority;i++);Wt.splice(i,0,t),i===0&&Sf(t)}};function Dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uh(){}function Mv(t,e,i,n,s){if(s){if(typeof n=="function"){var r=n;n=function(){var u=Zr(a);r.call(u)}}var a=Wp(e,n,t,0,null,!1,!1,"",uh);return t._reactRootContainer=a,t[Rt]=a.current,cs(t.nodeType===8?t.parentNode:t),_i(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof n=="function"){var c=n;n=function(){var u=Zr(o);c.call(u)}}var o=Lc(t,0,!1,null,null,!1,!1,"",uh);return t._reactRootContainer=o,t[Rt]=o.current,cs(t.nodeType===8?t.parentNode:t),_i(function(){vl(e,o,i,n)}),o}function bl(t,e,i,n,s){var r=i._reactRootContainer;if(r){var a=r;if(typeof s=="function"){var c=s;s=function(){var o=Zr(a);c.call(o)}}vl(e,a,t,s)}else a=Mv(i,e,t,s,n);return Zr(a)}bf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=In(e.pendingLanes);i!==0&&(tc(e,i|1),He(e,pe()),!(X&6)&&(vn=pe()+500,ui()))}break;case 13:_i(function(){var n=$t(t,1);if(n!==null){var s=Be();pt(n,t,1,s)}}),Rc(t,1)}};ic=function(t){if(t.tag===13){var e=$t(t,134217728);if(e!==null){var i=Be();pt(e,t,134217728,i)}Rc(t,134217728)}};wf=function(t){if(t.tag===13){var e=ti(t),i=$t(t,e);if(i!==null){var n=Be();pt(i,t,e,n)}Rc(t,e)}};kf=function(){return Y};jf=function(t,e){var i=Y;try{return Y=t,e()}finally{Y=i}};Va=function(t,e,i){switch(e){case"input":if($a(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var s=ul(n);if(!s)throw Error(z(90));Zd(n),$a(n,s)}}}break;case"textarea":tf(t,i);break;case"select":e=i.value,e!=null&&sn(t,!!i.multiple,e,!1)}};cf=Mc;uf=_i;var _v={usingClientEntryPoint:!1,Events:[_s,Xi,ul,af,of,Mc]},$n={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tv={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ff(t),t===null?null:t.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!er.isDisabled&&er.supportsFiber)try{ll=er.inject(Tv),jt=er}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v;Ge.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(e))throw Error(z(200));return Ev(t,e,null,i)};Ge.createRoot=function(t,e){if(!Dc(t))throw Error(z(299));var i=!1,n="",s=Hp;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Lc(t,1,!1,null,null,i,!1,n,s),t[Rt]=e.current,cs(t.nodeType===8?t.parentNode:t),new $c(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=ff(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return _i(t)};Ge.hydrate=function(t,e,i){if(!yl(e))throw Error(z(200));return bl(null,t,e,!0,i)};Ge.hydrateRoot=function(t,e,i){if(!Dc(t))throw Error(z(405));var n=i!=null&&i.hydratedSources||null,s=!1,r="",a=Hp;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(a=i.onRecoverableError)),e=Wp(e,null,t,1,i??null,s,!1,r,a),t[Rt]=e.current,cs(t),n)for(t=0;t<n.length;t++)i=n[t],s=i._getVersion,s=s(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,s]:e.mutableSourceEagerHydrationData.push(i,s);return new xl(e)};Ge.render=function(t,e,i){if(!yl(e))throw Error(z(200));return bl(null,t,e,!1,i)};Ge.unmountComponentAtNode=function(t){if(!yl(t))throw Error(z(40));return t._reactRootContainer?(_i(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[Rt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Mc;Ge.unstable_renderSubtreeIntoContainer=function(t,e,i,n){if(!yl(i))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return bl(t,e,i,!1,n)};Ge.version="18.3.1-next-f1338f8080-20240426";function qp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qp)}catch(t){console.error(t)}}qp(),Hd.exports=Ge;var Pv=Hd.exports,hh=Pv;za.createRoot=hh.createRoot,za.hydrateRoot=hh.hydrateRoot;const Lv="modulepreload",Rv=function(t){return"/"+t},dh={},$v=function(e,i,n){let s=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(i.map(o=>{if(o=Rv(o),o in dh)return;dh[o]=!0;const u=o.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Lv,u||(d.as="script"),d.crossOrigin="",d.href=o,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},xs.apply(this,arguments)}var Xt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xt||(Xt={}));const fh="popstate";function Dv(t){t===void 0&&(t={});function e(n,s){let{pathname:r,search:a,hash:c}=n.location;return ko("",{pathname:r,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(n,s){return typeof s=="string"?s:el(s)}return Av(e,i,null,t)}function ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Bv(){return Math.random().toString(36).substr(2,8)}function ph(t,e){return{usr:t.state,key:t.key,idx:e}}function ko(t,e,i,n){return i===void 0&&(i=null),xs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Nn(e):e,{state:i,key:e&&e.key||n||Bv()})}function el(t){let{pathname:e="/",search:i="",hash:n=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Nn(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Av(t,e,i,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:r=!1}=n,a=s.history,c=Xt.Pop,o=null,u=h();u==null&&(u=0,a.replaceState(xs({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function d(){c=Xt.Pop;let b=h(),g=b==null?null:b-u;u=b,o&&o({action:c,location:x.location,delta:g})}function f(b,g){c=Xt.Push;let v=ko(x.location,b,g);u=h()+1;let y=ph(v,u),k=x.createHref(v);try{a.pushState(y,"",k)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;s.location.assign(k)}r&&o&&o({action:c,location:x.location,delta:1})}function p(b,g){c=Xt.Replace;let v=ko(x.location,b,g);u=h();let y=ph(v,u),k=x.createHref(v);a.replaceState(y,"",k),r&&o&&o({action:c,location:x.location,delta:0})}function m(b){let g=s.location.origin!=="null"?s.location.origin:s.location.href,v=typeof b=="string"?b:el(b);return v=v.replace(/ $/,"%20"),ae(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let x={get action(){return c},get location(){return t(s,a)},listen(b){if(o)throw new Error("A history only accepts one active listener");return s.addEventListener(fh,d),o=b,()=>{s.removeEventListener(fh,d),o=null}},createHref(b){return e(s,b)},createURL:m,encodeLocation(b){let g=m(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(b){return a.go(b)}};return x}var mh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mh||(mh={}));function Iv(t,e,i){return i===void 0&&(i="/"),Ov(t,e,i)}function Ov(t,e,i,n){let s=typeof e=="string"?Nn(e):e,r=xn(s.pathname||"/",i);if(r==null)return null;let a=Kp(t);Fv(a);let c=null;for(let o=0;c==null&&o<a.length;++o){let u=Jv(r);c=Yv(a[o],u)}return c}function Kp(t,e,i,n){e===void 0&&(e=[]),i===void 0&&(i=[]),n===void 0&&(n="");let s=(r,a,c)=>{let o={relativePath:c===void 0?r.path||"":c,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};o.relativePath.startsWith("/")&&(ae(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let u=ni([n,o.relativePath]),h=i.concat(o);r.children&&r.children.length>0&&(ae(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kp(r.children,e,h,u)),!(r.path==null&&!r.index)&&e.push({path:u,score:Xv(u,r.index),routesMeta:h})};return t.forEach((r,a)=>{var c;if(r.path===""||!((c=r.path)!=null&&c.includes("?")))s(r,a);else for(let o of Xp(r.path))s(r,a,o)}),e}function Xp(t){let e=t.split("/");if(e.length===0)return[];let[i,...n]=e,s=i.endsWith("?"),r=i.replace(/\?$/,"");if(n.length===0)return s?[r,""]:[r];let a=Xp(n.join("/")),c=[];return c.push(...a.map(o=>o===""?r:[r,o].join("/"))),s&&c.push(...a),c.map(o=>t.startsWith("/")&&o===""?"/":o)}function Fv(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:Qv(e.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const Vv=/^:[\w-]+$/,Uv=3,Wv=2,Hv=1,qv=10,Kv=-2,gh=t=>t==="*";function Xv(t,e){let i=t.split("/"),n=i.length;return i.some(gh)&&(n+=Kv),e&&(n+=Wv),i.filter(s=>!gh(s)).reduce((s,r)=>s+(Vv.test(r)?Uv:r===""?Hv:qv),n)}function Qv(t,e){return t.length===e.length&&t.slice(0,-1).every((n,s)=>n===e[s])?t[t.length-1]-e[e.length-1]:0}function Yv(t,e,i){let{routesMeta:n}=t,s={},r="/",a=[];for(let c=0;c<n.length;++c){let o=n[c],u=c===n.length-1,h=r==="/"?e:e.slice(r.length)||"/",d=jo({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},h),f=o.route;if(!d)return null;Object.assign(s,d.params),a.push({params:s,pathname:ni([r,d.pathname]),pathnameBase:nx(ni([r,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(r=ni([r,d.pathnameBase]))}return a}function jo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,n]=Gv(t.path,t.caseSensitive,t.end),s=e.match(i);if(!s)return null;let r=s[0],a=r.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:n.reduce((u,h,d)=>{let{paramName:f,isOptional:p}=h;if(f==="*"){let x=c[d]||"";a=r.slice(0,r.length-x.length).replace(/(.)\/+$/,"$1")}const m=c[d];return p&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:a,pattern:t}}function Gv(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),Bc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,o)=>(n.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function Jv(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,n=t.charAt(i);return n&&n!=="/"?null:t.slice(i)||"/"}const Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ex=t=>Zv.test(t);function tx(t,e){e===void 0&&(e="/");let{pathname:i,search:n="",hash:s=""}=typeof t=="string"?Nn(t):t,r;if(i)if(ex(i))r=i;else{if(i.includes("//")){let a=i;i=i.replace(/\/\/+/g,"/"),Bc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+i))}i.startsWith("/")?r=vh(i.substring(1),"/"):r=vh(i,e)}else r=e;return{pathname:r,search:sx(n),hash:rx(s)}}function vh(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function sa(t,e,i,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ix(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Ac(t,e){let i=ix(t);return e?i.map((n,s)=>s===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function Ic(t,e,i,n){n===void 0&&(n=!1);let s;typeof t=="string"?s=Nn(t):(s=xs({},t),ae(!s.pathname||!s.pathname.includes("?"),sa("?","pathname","search",s)),ae(!s.pathname||!s.pathname.includes("#"),sa("#","pathname","hash",s)),ae(!s.search||!s.search.includes("#"),sa("#","search","hash",s)));let r=t===""||s.pathname==="",a=r?"/":s.pathname,c;if(a==null)c=i;else{let d=e.length-1;if(!n&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;s.pathname=f.join("/")}c=d>=0?e[d]:"/"}let o=tx(s,c),u=a&&a!=="/"&&a.endsWith("/"),h=(r||a===".")&&i.endsWith("/");return!o.pathname.endsWith("/")&&(u||h)&&(o.pathname+="/"),o}const ni=t=>t.join("/").replace(/\/\/+/g,"/"),nx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qp=["post","put","patch","delete"];new Set(Qp);const ax=["get",...Qp];new Set(ax);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},ys.apply(this,arguments)}const wl=w.createContext(null),Yp=w.createContext(null),At=w.createContext(null),kl=w.createContext(null),hi=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Gp=w.createContext(null);function ox(t,e){let{relative:i}=e===void 0?{}:e;Cn()||ae(!1);let{basename:n,navigator:s}=w.useContext(At),{hash:r,pathname:a,search:c}=jl(t,{relative:i}),o=a;return n!=="/"&&(o=a==="/"?n:ni([n,a])),s.createHref({pathname:o,search:c,hash:r})}function Cn(){return w.useContext(kl)!=null}function En(){return Cn()||ae(!1),w.useContext(kl).location}function Jp(t){w.useContext(At).static||w.useLayoutEffect(t)}function Zp(){let{isDataRoute:t}=w.useContext(hi);return t?wx():cx()}function cx(){Cn()||ae(!1);let t=w.useContext(wl),{basename:e,future:i,navigator:n}=w.useContext(At),{matches:s}=w.useContext(hi),{pathname:r}=En(),a=JSON.stringify(Ac(s,i.v7_relativeSplatPath)),c=w.useRef(!1);return Jp(()=>{c.current=!0}),w.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){n.go(u);return}let d=Ic(u,JSON.parse(a),r,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ni([e,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[e,n,a,r,t])}function jl(t,e){let{relative:i}=e===void 0?{}:e,{future:n}=w.useContext(At),{matches:s}=w.useContext(hi),{pathname:r}=En(),a=JSON.stringify(Ac(s,n.v7_relativeSplatPath));return w.useMemo(()=>Ic(t,JSON.parse(a),r,i==="path"),[t,a,r,i])}function ux(t,e){return hx(t,e)}function hx(t,e,i,n){Cn()||ae(!1);let{navigator:s}=w.useContext(At),{matches:r}=w.useContext(hi),a=r[r.length-1],c=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let u=En(),h;if(e){var d;let b=typeof e=="string"?Nn(e):e;o==="/"||(d=b.pathname)!=null&&d.startsWith(o)||ae(!1),h=b}else h=u;let f=h.pathname||"/",p=f;if(o!=="/"){let b=o.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=Iv(t,{pathname:p}),x=gx(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},c,b.params),pathname:ni([o,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?o:ni([o,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),r,i,n);return e&&x?w.createElement(kl.Provider,{value:{location:ys({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Xt.Pop}},x):x}function dx(){let t=bx(),e=lx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),i?w.createElement("pre",{style:s},i):null,null)}const fx=w.createElement(dx,null);class px extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?w.createElement(hi.Provider,{value:this.props.routeContext},w.createElement(Gp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mx(t){let{routeContext:e,match:i,children:n}=t,s=w.useContext(wl);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),w.createElement(hi.Provider,{value:e},n)}function gx(t,e,i,n){var s;if(e===void 0&&(e=[]),i===void 0&&(i=null),n===void 0&&(n=null),t==null){var r;if(!i)return null;if(i.errors)t=i.matches;else if((r=n)!=null&&r.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let a=t,c=(s=i)==null?void 0:s.errors;if(c!=null){let h=a.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);h>=0||ae(!1),a=a.slice(0,Math.min(a.length,h+1))}let o=!1,u=-1;if(i&&n&&n.v7_partialHydration)for(let h=0;h<a.length;h++){let d=a[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:p}=i,m=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||m){o=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((h,d,f)=>{let p,m=!1,x=null,b=null;i&&(p=c&&d.route.id?c[d.route.id]:void 0,x=d.route.errorElement||fx,o&&(u<0&&f===0?(kx("route-fallback"),m=!0,b=null):u===f&&(m=!0,b=d.route.hydrateFallbackElement||null)));let g=e.concat(a.slice(0,f+1)),v=()=>{let y;return p?y=x:m?y=b:d.route.Component?y=w.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,w.createElement(mx,{match:d,routeContext:{outlet:h,matches:g,isDataRoute:i!=null},children:y})};return i&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(px,{location:i.location,revalidation:i.revalidation,component:x,error:p,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var em=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(em||{}),tm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tm||{});function vx(t){let e=w.useContext(wl);return e||ae(!1),e}function xx(t){let e=w.useContext(Yp);return e||ae(!1),e}function yx(t){let e=w.useContext(hi);return e||ae(!1),e}function im(t){let e=yx(),i=e.matches[e.matches.length-1];return i.route.id||ae(!1),i.route.id}function bx(){var t;let e=w.useContext(Gp),i=xx(),n=im();return e!==void 0?e:(t=i.errors)==null?void 0:t[n]}function wx(){let{router:t}=vx(em.UseNavigateStable),e=im(tm.UseNavigateStable),i=w.useRef(!1);return Jp(()=>{i.current=!0}),w.useCallback(function(s,r){r===void 0&&(r={}),i.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ys({fromRouteId:e},r)))},[t,e])}const xh={};function kx(t,e,i){xh[t]||(xh[t]=!0)}function jx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Nt(t){let{to:e,replace:i,state:n,relative:s}=t;Cn()||ae(!1);let{future:r,static:a}=w.useContext(At),{matches:c}=w.useContext(hi),{pathname:o}=En(),u=Zp(),h=Ic(e,Ac(c,r.v7_relativeSplatPath),o,s==="path"),d=JSON.stringify(h);return w.useEffect(()=>u(JSON.parse(d),{replace:i,state:n,relative:s}),[u,d,s,i,n]),null}function tt(t){ae(!1)}function Sx(t){let{basename:e="/",children:i=null,location:n,navigationType:s=Xt.Pop,navigator:r,static:a=!1,future:c}=t;Cn()&&ae(!1);let o=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:o,navigator:r,static:a,future:ys({v7_relativeSplatPath:!1},c)}),[o,c,r,a]);typeof n=="string"&&(n=Nn(n));let{pathname:h="/",search:d="",hash:f="",state:p=null,key:m="default"}=n,x=w.useMemo(()=>{let b=xn(h,o);return b==null?null:{location:{pathname:b,search:d,hash:f,state:p,key:m},navigationType:s}},[o,h,d,f,p,m,s]);return x==null?null:w.createElement(At.Provider,{value:u},w.createElement(kl.Provider,{children:i,value:x}))}function yh(t){let{children:e,location:i}=t;return ux(So(e),i)}new Promise(()=>{});function So(t,e){e===void 0&&(e=[]);let i=[];return w.Children.forEach(t,(n,s)=>{if(!w.isValidElement(n))return;let r=[...e,s];if(n.type===w.Fragment){i.push.apply(i,So(n.props.children,r));return}n.type!==tt&&ae(!1),!n.props.index||!n.props.children||ae(!1);let a={id:n.props.id||r.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=So(n.props.children,r)),i.push(a)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},tl.apply(this,arguments)}function nm(t,e){if(t==null)return{};var i={},n=Object.keys(t),s,r;for(r=0;r<n.length;r++)s=n[r],!(e.indexOf(s)>=0)&&(i[s]=t[s]);return i}function Nx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Cx(t,e){return t.button===0&&(!e||e==="_self")&&!Nx(t)}const Ex=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Mx="6";try{window.__reactRouterVersion=Mx}catch{}const _x=w.createContext({isTransitioning:!1}),Tx="startTransition",bh=wg[Tx];function Px(t){let{basename:e,children:i,future:n,window:s}=t,r=w.useRef();r.current==null&&(r.current=Dv({window:s,v5Compat:!0}));let a=r.current,[c,o]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=n||{},h=w.useCallback(d=>{u&&bh?bh(()=>o(d)):o(d)},[o,u]);return w.useLayoutEffect(()=>a.listen(h),[a,h]),w.useEffect(()=>jx(n),[n]),w.createElement(Sx,{basename:e,children:i,location:c.location,navigationType:c.action,navigator:a,future:n})}const Lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=w.forwardRef(function(e,i){let{onClick:n,relative:s,reloadDocument:r,replace:a,state:c,target:o,to:u,preventScrollReset:h,viewTransition:d}=e,f=nm(e,Ex),{basename:p}=w.useContext(At),m,x=!1;if(typeof u=="string"&&Rx.test(u)&&(m=u,Lx))try{let y=new URL(window.location.href),k=u.startsWith("//")?new URL(y.protocol+u):new URL(u),N=xn(k.pathname,p);k.origin===y.origin&&N!=null?u=N+k.search+k.hash:x=!0}catch{}let b=ox(u,{relative:s}),g=Dx(u,{replace:a,state:c,target:o,preventScrollReset:h,relative:s,viewTransition:d});function v(y){n&&n(y),y.defaultPrevented||g(y)}return w.createElement("a",tl({},f,{href:m||b,onClick:x||r?n:v,ref:i,target:o}))}),Er=w.forwardRef(function(e,i){let{"aria-current":n="page",caseSensitive:s=!1,className:r="",end:a=!1,style:c,to:o,viewTransition:u,children:h}=e,d=nm(e,zx),f=jl(o,{relative:d.relative}),p=En(),m=w.useContext(Yp),{navigator:x,basename:b}=w.useContext(At),g=m!=null&&Bx(f)&&u===!0,v=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,y=p.pathname,k=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;s||(y=y.toLowerCase(),k=k?k.toLowerCase():null,v=v.toLowerCase()),k&&b&&(k=xn(k,b)||k);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let C=y===v||!a&&y.startsWith(v)&&y.charAt(N)==="/",_=k!=null&&(k===v||!a&&k.startsWith(v)&&k.charAt(v.length)==="/"),T={isActive:C,isPending:_,isTransitioning:g},j=C?n:void 0,R;typeof r=="function"?R=r(T):R=[r,C?"active":null,_?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let G=typeof c=="function"?c(T):c;return w.createElement(de,tl({},d,{"aria-current":j,className:R,ref:i,style:G,to:o,viewTransition:u}),typeof h=="function"?h(T):h)});var No;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(No||(No={}));var wh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wh||(wh={}));function $x(t){let e=w.useContext(wl);return e||ae(!1),e}function Dx(t,e){let{target:i,replace:n,state:s,preventScrollReset:r,relative:a,viewTransition:c}=e===void 0?{}:e,o=Zp(),u=En(),h=jl(t,{relative:a});return w.useCallback(d=>{if(Cx(d,i)){d.preventDefault();let f=n!==void 0?n:el(u)===el(h);o(t,{replace:f,state:s,preventScrollReset:r,relative:a,viewTransition:c})}},[u,o,h,n,s,i,t,r,a,c])}function Bx(t,e){e===void 0&&(e={});let i=w.useContext(_x);i==null&&ae(!1);let{basename:n}=$x(No.useViewTransitionState),s=jl(t,{relative:e.relative});if(!i.isTransitioning)return!1;let r=xn(i.currentLocation.pathname,n)||i.currentLocation.pathname,a=xn(i.nextLocation.pathname,n)||i.nextLocation.pathname;return jo(s.pathname,a)!=null||jo(s.pathname,r)!=null}let Oc="bc1qxy2kgdygjrsqtzq2n0r3am9w5vh9q5z8h6v0g7";const Si="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f7931a'/%3E%3Cstop offset='1' stop-color='%23ffb347'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='58' fill='url(%23g)'/%3E%3Cpath fill='white' d='M79.4 51.7c1-6-3.7-9.2-9.9-11.3l2-7.9-4.8-1.2-1.9 7.7c-1.3-.3-2.5-.6-3.8-.9l1.9-7.8-4.8-1.1-2 7.9c-1-.2-1.9-.4-2.8-.7v-.1l-6.6-1.6-1.3 5.1s3.6.8 3.5.9c2 .5 2.4 1.9 2.3 3l-2.2 8.8c.1 0 .3.1.5.1l-.5-.1-3.1 12.6c-.2.7-.8 1.8-2.2 1.5.1.1-3.5-.9-3.5-.9l-2.4 5.5 6.2 1.6c1.2.3 2.4.7 3.6.9l-2 8 4.8 1.2 2-7.9c1.3.4 2.6.7 3.9 1l-2 7.8 4.8 1.2 2-8c8.3 1.6 14.5 1 17.1-6.5 2.1-6 0-9.5-4.4-11.8 3.2-.7 5.6-2.8 6.6-7.1zm-11.8 16.5c-1.5 6-11.5 2.8-14.8 2l2.7-10.8c3.3.8 13.7 2.5 12.1 8.8zm1.5-16.6c-1.4 5.5-9.8 2.7-12.5 2l2.5-9.8c2.7.7 11.5 2.1 10 7.8z'/%3E%3C/svg%3E",Co={id:"user-1",email:"trader@btcplatform.com",name:"Alex Thompson",avatar:Si,password:"password123",btcBalance:.245,usdBalance:15850.75,stakeAmount:2.5,isVerified:!0,verificationStatus:"approved",vipLevel:3,joinedDate:"2024-01-15",role:"user",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",timezone:"UTC-5",telegram:"@AlexTrader",kyc:{fullName:"Alex Thompson",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",documentType:"passport",frontImage:"passport-front.jpg",backImage:"passport-back.jpg",status:"approved"}},sm=[{rank:1,name:"CryptoKing",avatar:"https://randomuser.me/api/portraits/men/57.jpg",profit:156780,winRate:87,trades:1245},{rank:2,name:"DiamondHands",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Diamond",profit:98340,winRate:82,trades:892},{rank:3,name:"WhaleTrader",avatar:"https://randomuser.me/api/portraits/women/63.jpg",profit:87650,winRate:79,trades:1567},{rank:4,name:"MoonWalker",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Moon",profit:65430,winRate:85,trades:723},{rank:5,name:"BullRunner",avatar:"https://randomuser.me/api/portraits/men/41.jpg",profit:54320,winRate:78,trades:1089},{rank:6,name:"SilverFox",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Silver",profit:43210,winRate:81,trades:654},{rank:7,name:"GoldRush",avatar:"https://randomuser.me/api/portraits/women/71.jpg",profit:38760,winRate:76,trades:921},{rank:8,name:"DiamondPro",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=DiamondPro",profit:32100,winRate:83,trades:567},{rank:9,name:"AlphaTrade",avatar:"https://randomuser.me/api/portraits/men/65.jpg",profit:28940,winRate:80,trades:834},{rank:10,name:"BetaWinner",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Beta",profit:25430,winRate:77,trades:712}],ue=t=>t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),Ax=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_BTC_AVATAR:Si,DEPOSIT_WALLET:Oc,formatNumber:ue,mockLeaderboard:sm,mockUser:Co},Symbol.toStringTag,{value:"Module"})),Eo="https://api.exchange.coinbase.com/products/BTC-USD",Ix="wss://ws-feed.exchange.coinbase.com",Fc={"1m":60,"5m":300,"15m":900,"1h":3600,"4h":14400,"1D":86400};function Ox(t){return Fc[t]}async function zo(t){const e=await fetch(t,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Market request failed: ${e.status}`);return e.json()}async function Fx(){const[t,e]=await Promise.all([zo(`${Eo}/ticker`),zo(`${Eo}/stats`)]),i=Number(t.price||e.last),n=Number(e.open||i),s=Number(e.high||i),r=Number(e.low||i),a=Number(e.volume||0),c=n?(i-n)/n*100:0;return{price:i,open24h:n,change24h:c,high24h:s,low24h:r,volume24h:a,updatedAt:t.time||new Date().toISOString(),source:"live"}}function Vx(t,e){const i=new WebSocket(Ix);return i.addEventListener("open",()=>{e==null||e("open"),i.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker","heartbeat"]}))}),i.addEventListener("message",n=>{let s;try{s=JSON.parse(n.data)}catch{return}if(s.type!=="ticker"||s.product_id!=="BTC-USD")return;const r=Number(s.price),a=Number(s.open_24h||r),c=Number(s.high_24h||r),o=Number(s.low_24h||r),u=Number(s.volume_24h||0);Number.isFinite(r)&&t({price:r,open24h:a,change24h:a?(r-a)/a*100:0,high24h:Number.isFinite(c)?c:r,low24h:Number.isFinite(o)?o:r,volume24h:Number.isFinite(u)?u:0,updatedAt:s.time||new Date().toISOString(),source:"live"})}),i.addEventListener("error",()=>{e==null||e("error")}),i.addEventListener("close",()=>{e==null||e("closed")}),()=>{i.close()}}async function Ux(t,e=120){const i=Fc[t],n=new Date,s=new Date(n.getTime()-i*1e3*e),r=new URLSearchParams({granularity:String(i),start:s.toISOString(),end:n.toISOString()});return(await zo(`${Eo}/candles?${r.toString()}`)).sort((c,o)=>c[0]-o[0]).map(([c,o,u,h,d,f])=>({candle:{time:c,open:h,high:u,low:o,close:d},volume:{time:c,value:f,color:d>=h?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}))}function kh(t=67500){return{price:t,open24h:t-420,change24h:.62,high24h:t+520,low24h:t-780,volume24h:18250,updatedAt:new Date().toISOString(),source:"fallback"}}function Wx(t,e,i=120){const n=Fc[t],s=Math.floor(Date.now()/1e3),r=[];let a=e;for(let c=i;c>0;c-=1){const o=s-c*n,u=(Math.random()-.48)*(e*.0035),h=a,d=Math.max(1e3,h+u),f=Math.max(h,d)+Math.random()*(e*.0012),p=Math.min(h,d)-Math.random()*(e*.0012),m=Math.random()*240+80;r.push({candle:{time:o,open:h,high:f,low:p,close:d},volume:{time:o,value:m,color:d>=h?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),a=d}return r}const Hx=.005;function jh(t,e,i){const n=Math.max(1/e-Hx,.0025);return i==="up"?t*(1-n):t*(1+n)}function rm({entryPrice:t,exitPrice:e,amount:i,leverageValue:n,tradeDirection:s}){const r=(e-t)/t,a=s==="up"?r:-r,c=a>=0?i*a*n:-(i*Math.abs(a));return{pnl:Math.max(-i,c),directionalMovePct:a*100}}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(t,e)=>{const i=w.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:o,...u},h)=>w.createElement("svg",{ref:h,...qx,width:s,height:s,stroke:n,strokeWidth:a?Number(r)*24/Number(s):r,className:["lucide",`lucide-${Kx(t)}`,c].join(" "),...u},[...e.map(([d,f])=>w.createElement(d,f)),...Array.isArray(o)?o:[o]]));return i.displayName=`${t}`,i};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=V("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=V("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=V("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=V("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=V("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=V("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=V("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=V("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=V("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=V("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=V("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=V("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=V("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=V("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=V("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=V("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=V("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=V("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=V("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=V("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=V("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=V("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=V("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=V("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=V("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=V("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=V("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=V("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=V("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=V("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=V("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=V("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=V("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=V("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=V("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=V("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),d1=[{path:"/",icon:om,label:"Home"},{path:"/trade",icon:Ps,label:"Trade"},{path:"/finance",icon:Ti,label:"Finance"},{path:"/news",icon:bs,label:"News"},{path:"/profile",icon:Ls,label:"Profile"}],f1=[{path:"/admin",icon:Uc,label:"Admin Dashboard"}];function p1(){const{logout:t,user:e}=fi(),i=(e==null?void 0:e.role)==="admin";return l.jsxs("aside",{className:"app-sidebar",children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"sidebar-logo",children:l.jsxs("div",{className:"logo-container",children:[l.jsx("div",{className:"logo-icon",children:l.jsx("span",{children:"₿"})}),l.jsxs("div",{className:"logo-text",children:[l.jsx("h1",{children:"BTC Trade"}),l.jsx("p",{children:"Pro Platform"})]})]})}),l.jsx("nav",{className:"sidebar-nav",children:i?l.jsxs("div",{className:"admin-section",children:[l.jsxs("div",{className:"admin-header",children:[l.jsx("span",{className:"admin-badge",children:"Admin"}),l.jsx("span",{className:"admin-title",children:"Back Office"})]}),f1.map(n=>{const s=n.icon;return l.jsxs(Er,{to:n.path,className:({isActive:r})=>`nav-item ${r?"active":""}`,children:[l.jsx(s,{className:"nav-item-icon",size:20}),l.jsx("span",{className:"nav-item-text",children:n.label})]},n.path)})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"nav-section",children:[l.jsx("div",{className:"nav-section-title",children:"Main Menu"}),d1.map(n=>{const s=n.icon;return l.jsxs(Er,{to:n.path,className:({isActive:r})=>`nav-item ${r?"active":""}`,children:[l.jsx(s,{className:"nav-item-icon",size:20}),l.jsx("span",{className:"nav-item-text",children:n.label}),l.jsx(e1,{className:"nav-item-arrow",size:16})]},n.path)})]}),l.jsxs("div",{className:"nav-section",children:[l.jsx("div",{className:"nav-section-title",children:"Support"}),l.jsxs(Er,{to:"/support",className:({isActive:n})=>`nav-item ${n?"active":""}`,children:[l.jsx(um,{className:"nav-item-icon",size:20}),l.jsx("span",{className:"nav-item-text",children:"Support Chat"}),l.jsx("span",{className:"nav-item-badge",children:"Live"})]})]})]})}),l.jsxs("div",{className:"sidebar-footer",children:[!i&&l.jsxs("div",{className:"footer-nav",children:[l.jsxs("a",{href:"#",className:"footer-item",children:[l.jsx(dm,{size:16}),"Settings"]}),l.jsxs("a",{href:"#",className:"footer-item",children:[l.jsx(a1,{size:16}),"Help Center"]})]}),l.jsxs("button",{onClick:t,className:"logout-btn",children:[l.jsx(cm,{size:18}),"Sign Out"]})]})]})}function m1({btcPrice:t,btcChange24h:e,marketStatus:i}){var p,m;const{user:n,logout:s}=fi(),[r,a]=w.useState(!1),[c,o]=w.useState(!1),u=w.useRef(null),h=w.useRef(null),d=((n==null?void 0:n.btcBalance)||0)*t,f=[{id:1,title:"Deposit Confirmed",message:"Your BTC deposit of 0.025 BTC has been confirmed",time:"2 min ago",unread:!0},{id:2,title:"Trade Closed",message:"BTC/USD settled with a +$150 result",time:"15 min ago",unread:!0},{id:3,title:"Withdrawal Processed",message:"Your wallet request is now complete",time:"1 hour ago",unread:!1}];return w.useEffect(()=>{const x=b=>{const g=b.target;g&&(r&&u.current&&!u.current.contains(g)&&a(!1),c&&h.current&&!h.current.contains(g)&&o(!1))};return document.addEventListener("mousedown",x),document.addEventListener("touchstart",x),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("touchstart",x)}},[r,c]),l.jsxs("header",{className:"pro-header",children:[l.jsx("style",{children:`
        .pro-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 18px;
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
          gap: 16px;
        }
        .header-brand {
          gap: 14px;
          min-width: 0;
        }
        .brand-icon {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 22px;
          font-weight: 800;
          box-shadow: 0 12px 32px rgba(247, 147, 26, 0.25);
        }
        .brand-copy h1 {
          font-size: 15px;
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
          border-radius: 0;
          background: transparent;
          border: none;
          flex-direction: row;
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
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .ticker-top .status-chip {
          display: none;
        }
        .ticker-symbol {
          color: #f5f7fb;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }
        .ticker-price {
          color: #f5f7fb;
          font-size: 13px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          white-space: nowrap;
        }
        .ticker-change {
          font-size: 12px;
          font-weight: 700;
          padding: 4px 8px;
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
          gap: 12px;
        }
        .balance-badge {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
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
          width: 42px;
          height: 42px;
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
          padding: 8px 12px;
          cursor: pointer;
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
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto;
          gap: 12px;
        }
        .summary-card {
          justify-content: space-between;
          gap: 12px;
          min-width: 0;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
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
          .balance-badge {
            display: none;
          }
          .header-summary {
            grid-template-columns: 1fr 1fr;
          }
          .summary-card:last-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 720px) {
          .pro-header {
            padding: 8px 10px;
            gap: 6px;
          }
          .brand-copy p,
          .user-name {
            display: none;
          }
          .brand-copy h1 {
            font-size: 13px;
          }
          .header-ticker {
            padding: 6px 8px;
            gap: 4px;
            border-radius: 12px;
            background: linear-gradient(180deg, rgba(17, 25, 37, 0.96), rgba(13, 19, 29, 0.86));
            border-color: rgba(72, 113, 173, 0.35);
            box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
          }
          .ticker-symbol {
            font-size: 8px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .ticker-top {
            align-items: flex-start;
          }
          .ticker-market-copy {
            gap: 2px;
          }
          .ticker-price {
            font-size: 13px;
            line-height: 1;
          }
          .ticker-change {
            font-size: 9px;
            padding: 3px 7px;
            flex-shrink: 0;
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
            padding: 7px 9px;
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
          .header-main {
            flex-wrap: wrap;
            gap: 10px;
          }
          .header-summary {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          .profile-chip {
            gap: 8px;
          }
          .summary-user-card {
            display: none;
          }
          .summary-user-card .summary-label {
            display: none;
          }
          .summary-user-card .profile-chip {
            display: none;
          }
          .summary-user-card .status-chip {
            display: none;
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
      `}),l.jsxs("div",{className:"header-main",children:[l.jsxs("div",{className:"header-brand",children:[l.jsx("div",{className:"brand-icon",children:"₿"}),l.jsx("div",{className:"brand-copy",children:l.jsx("h1",{children:"BTC Trade Pro"})})]}),l.jsxs("div",{className:"header-ticker",children:[l.jsxs("div",{className:"ticker-top",children:[l.jsx("span",{className:"ticker-symbol",children:"BTC/USD"}),l.jsxs("div",{className:"status-chip",children:[i==="live"?l.jsx(_h,{size:14}):l.jsx(Mh,{size:14}),i]})]}),l.jsxs("div",{className:"ticker-middle",children:[l.jsxs("span",{className:"ticker-price",children:["$",t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),l.jsxs("span",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]})]}),l.jsxs("div",{className:"header-right",children:[l.jsxs("div",{className:"balance-badge",children:[l.jsxs("div",{children:[l.jsx("span",{className:"balance-label",children:"USD"}),l.jsxs("span",{className:"balance-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),l.jsx("div",{className:"balance-divider"}),l.jsxs("div",{children:[l.jsx("span",{className:"balance-label",children:"BTC"}),l.jsx("span",{className:"balance-value btc",children:((n==null?void 0:n.btcBalance)||0).toFixed(6)})]})]}),l.jsxs("div",{className:"user-menu",ref:h,children:[c&&l.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>o(!1),"aria-label":"Close notifications"}),l.jsxs("button",{className:"header-btn",onClick:()=>o(!c),children:[l.jsx(Yx,{size:20}),l.jsx("span",{className:"notification-dot"})]}),c&&l.jsxs("div",{className:"dropdown notification-dropdown",children:[l.jsxs("div",{className:"notification-header",children:[l.jsx("span",{className:"notification-title",children:"Notifications"}),l.jsx("span",{style:{color:"#3478f6",fontSize:"12px",cursor:"pointer"},children:"Mark all as read"})]}),f.map(x=>l.jsxs("div",{className:"notification-item",children:[l.jsx("div",{className:"notification-icon",children:l.jsx(Ti,{size:16})}),l.jsxs("div",{className:"notification-content",children:[l.jsx("div",{className:"notification-item-title",children:x.title}),l.jsx("div",{className:"notification-message",children:x.message}),l.jsx("div",{className:"notification-time",children:x.time})]}),x.unread&&l.jsx("div",{className:"unread-dot"})]},x.id))]})]}),l.jsxs("div",{className:"user-menu",ref:u,children:[r&&l.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>a(!1),"aria-label":"Close profile menu"}),l.jsxs("button",{className:"user-btn",onClick:()=>a(!r),children:[l.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?l.jsx("img",{src:n.avatar,alt:n.name||"User"}):((p=n==null?void 0:n.name)==null?void 0:p.charAt(0).toUpperCase())||"U"}),l.jsx("span",{className:"user-name",children:(n==null?void 0:n.name)||"User"}),l.jsx(Zx,{size:16,color:"#888"})]}),r&&l.jsxs("div",{className:"dropdown",children:[l.jsxs("div",{className:"dropdown-header",children:[l.jsx("div",{className:"dropdown-name",children:n==null?void 0:n.name}),l.jsx("div",{className:"dropdown-email",children:n==null?void 0:n.email})]}),l.jsxs(de,{to:"/profile",className:"dropdown-item",onClick:()=>a(!1),children:[l.jsx(Ls,{size:16}),"Profile"]}),l.jsxs(de,{to:"/finance",className:"dropdown-item",onClick:()=>a(!1),children:[l.jsx(Ti,{size:16}),"Wallet"]}),l.jsxs(de,{to:"/profile",className:"dropdown-item",onClick:()=>a(!1),children:[l.jsx(dm,{size:16}),"Settings"]}),l.jsxs("button",{className:"dropdown-item danger",onClick:()=>{s(),a(!1)},children:[l.jsx(cm,{size:16}),"Sign Out"]})]})]})]})]}),l.jsxs("div",{className:"header-summary",children:[l.jsxs("div",{className:"summary-card",children:[l.jsxs("div",{children:[l.jsx("div",{className:"summary-label",children:"Portfolio BTC"}),l.jsxs("div",{className:"summary-value",children:[((n==null?void 0:n.btcBalance)||0).toFixed(6)," BTC"]})]}),l.jsxs("div",{className:"summary-sub",children:["$",d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),l.jsxs("div",{className:"summary-card",children:[l.jsxs("div",{children:[l.jsx("div",{className:"summary-label",children:"Cash Balance"}),l.jsxs("div",{className:"summary-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),l.jsxs("div",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]}),l.jsxs("div",{className:"summary-card summary-user-card",children:[l.jsxs("div",{className:"profile-chip",children:[l.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?l.jsx("img",{src:n.avatar,alt:n.name||"User"}):((m=n==null?void 0:n.name)==null?void 0:m.charAt(0).toUpperCase())||"U"}),l.jsxs("div",{children:[l.jsx("div",{className:"summary-label",children:"Signed In"}),l.jsx("div",{className:"summary-value summary-user-name",children:(n==null?void 0:n.name)||"User"})]})]}),l.jsxs("div",{className:"status-chip",children:[i==="live"?l.jsx(_h,{size:14}):l.jsx(Mh,{size:14}),i]})]})]})]})}const g1=[{path:"/",label:"Home",icon:om},{path:"/trade",label:"Trade",icon:Ps},{path:"/news",label:"News",icon:bs},{path:"/finance",label:"Wallet",icon:Ti},{path:"/profile",label:"Profile",icon:Ls}],v1=[{path:"/admin",label:"Admin",icon:Uc}];function x1(){const{user:t}=fi(),e=(t==null?void 0:t.role)==="admin"?v1:g1;return l.jsxs("nav",{className:"mobile-nav-shell",children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"mobile-nav",children:e.map(i=>{const n=i.icon;return l.jsxs(Er,{to:i.path,className:({isActive:s})=>`mobile-nav-item ${s?"active":""}`,children:[l.jsx(n,{className:"mobile-nav-icon"}),l.jsx("span",{children:i.label})]},i.path)})})]})}class y1 extends xi.Component{constructor(){super(...arguments);Bs(this,"state",{hasError:!1});Bs(this,"handleReload",()=>{window.location.reload()});Bs(this,"handleReset",()=>{localStorage.removeItem("btcActiveTrade"),localStorage.removeItem("btcTradeResult"),window.location.reload()})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i){console.error("App runtime error:",i)}render(){return this.state.hasError?l.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg, #070b11, #0b1119)",padding:"24px"},children:l.jsxs("div",{style:{width:"min(520px, 100%)",borderRadius:"28px",padding:"28px",background:"rgba(15, 19, 28, 0.96)",border:"1px solid rgba(255, 255, 255, 0.08)",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.32)",color:"#eef3fb"},children:[l.jsx("div",{style:{fontSize:"28px",fontWeight:800,marginBottom:"10px"},children:"BTCTradePro"}),l.jsx("div",{style:{fontSize:"20px",fontWeight:700,marginBottom:"8px"},children:"We hit a runtime error"}),l.jsx("p",{style:{color:"#8fa2ba",lineHeight:1.6,marginBottom:"18px"},children:"The app was protected from a blank crash screen. Reload the page, or reset the current trade cache if the issue came from old saved trade data."}),l.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[l.jsx("button",{onClick:this.handleReload,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"none",background:"linear-gradient(135deg, #f7931a, #ffb347)",color:"#111",fontWeight:800},children:"Reload app"}),l.jsx("button",{onClick:this.handleReset,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(255, 255, 255, 0.04)",color:"#eef3fb",fontWeight:700},children:"Reset trade cache"})]})]})}):this.props.children}}const pm="/assets/hero-DYsT3BwZ.mp4",b1=[{symbol:"ETH",name:"Ethereum",price:3120.44,change:1.18,high:3186.2,low:3068.55},{symbol:"SOL",name:"Solana",price:167.23,change:2.74,high:170.84,low:160.92},{symbol:"XRP",name:"XRP",price:.6542,change:-.42,high:.6674,low:.6418},{symbol:"BNB",name:"BNB",price:604.72,change:.88,high:613.11,low:596.42}],Th=[{id:"n1",title:"ETF inflows keep Bitcoin demand elevated through the New York session",meta:"Macro Flow",image:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80"},{id:"n2",title:"Miners tighten supply while spot desks track fresh BTC accumulation",meta:"Mining",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80"},{id:"n3",title:"Traders watch the next reclaim zone as BTC volatility expands again",meta:"Technical",image:"https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=900&q=80"},{id:"n4",title:"Market desks watch BTC liquidity as U.S. trading opens with stronger spot demand",meta:"Liquidity",image:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=900&q=80"},{id:"n5",title:"Bitcoin options activity rises as traders position for a bigger breakout range",meta:"Derivatives",image:"https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80"},{id:"n6",title:"Macro desks rotate back into BTC as risk appetite improves across crypto markets",meta:"Macro",image:"https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80"}],w1=[{year:"2009",title:"Genesis block mined",text:"Bitcoin launched as the first decentralized digital asset network."},{year:"2017",title:"Global breakout cycle",text:"BTC reached mainstream awareness and became a major macro market conversation."},{year:"2024",title:"Spot ETF era",text:"Institutional access deepened and daily market participation broadened."}],Ph=[{name:"Sarah Miller",role:"Swing Trader",avatar:"https://randomuser.me/api/portraits/women/68.jpg",text:"The mobile layout finally feels like a real trading app. I can check BTC, wallet status, and support without hunting around.",profit:"+$12,450"},{name:"Daniel Brooks",role:"Day Trader",avatar:"https://randomuser.me/api/portraits/men/75.jpg",text:"The trade desk is clean, the chart is live, and the admin-confirmed wallet flow makes the demo feel much closer to a real exchange.",profit:"+$8,930"},{name:"Emily Park",role:"BTC Investor",avatar:"https://randomuser.me/api/portraits/women/44.jpg",text:"Profile, deposit, and review sections now look premium. This feels much more trustworthy than a generic crypto landing page.",profit:"+$21,600"},{name:"Noah Grant",role:"Scalp Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Noah",text:"Phone version feels way tighter now and the quick wallet flow is actually believable.",profit:"+$4,180"},{name:"Amelia Ross",role:"Portfolio Manager",avatar:"https://randomuser.me/api/portraits/women/52.jpg",text:"I like that the KYC and admin approval flow now feels connected instead of fake.",profit:"+$15,700"},{name:"Leo Quinn",role:"Momentum Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Leo",text:"Great trade interface. The chart and wallet behavior make the whole demo feel more serious.",profit:"+$6,520"},{name:"Mia Lopez",role:"BTC Analyst",avatar:"https://randomuser.me/api/portraits/women/22.jpg",text:"The profile system is much better with avatar choice and editable trader details.",profit:"+$9,410"},{name:"Kai Mercer",role:"Algo Trader",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Kai",text:"The moving review strip and mixed avatar style make the home page feel more alive.",profit:"+$11,230"},{name:"Sophia Reed",role:"Long-Term Holder",avatar:"https://randomuser.me/api/portraits/women/31.jpg",text:"Deposit first, admin review later, balance updates after approval. That flow now makes sense.",profit:"+$3,890"},{name:"Ethan Cruz",role:"Macro Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Ethan",text:"The landing page now feels like an actual product page, not a login wall.",profit:"+$13,040"},{name:"Grace Park",role:"Futures Trader",avatar:"https://randomuser.me/api/portraits/women/57.jpg",text:"Top trader cards and reviews now look premium on my phone, which matters a lot.",profit:"+$18,660"},{name:"Mason Cole",role:"High-Frequency Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Mason",text:"The whole platform is closer to a professional exchange demo now.",profit:"+$7,880"}],k1=["All","0 Fees","50% Fees","Margin Trading","RWA","SOL Ecosystem"],Oi={BTC:{icon:"₿",favorite:!0,tags:["10X"],bg:"#ffb11a",color:"#fff"},ETH:{icon:"Ξ",favorite:!0,tags:["10X"],bg:"#0c0d10",color:"#fff"},XRP:{icon:"✕",favorite:!0,tags:["10X"],bg:"#0b0b0d",color:"#fff"},SOL:{icon:"S",tags:["10X"],bg:"#0f1720",color:"#67ffd8"},BNB:{icon:"◇",tags:["10X"],bg:"#f3ba2f",color:"#111"}};function j1(){const{btcPrice:t,btcChange24h:e,btcHigh24h:i,btcLow24h:n,btcVolume24h:s,marketStatus:r,marketReady:a}=Ds(),c={symbol:"BTC",name:"Bitcoin",price:t,change:e,volume:s,high:i,low:n};return l.jsxs("div",{className:"home-shell",children:[l.jsx("style",{children:`
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
          color: ${r==="live"?"#0ecb81":"#f6b353"};
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
      `}),l.jsxs("section",{className:"hero-card glass-card",children:[l.jsx("video",{className:"hero-video",src:pm,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),l.jsx("div",{className:"hero-overlay"}),l.jsxs("div",{className:"hero-grid",children:[l.jsxs("div",{className:"hero-copy",children:[l.jsxs("div",{className:"eyebrow",children:[l.jsx(si,{size:14}),"Professional BTC demo workspace"]}),l.jsxs("h1",{className:"hero-title",children:["Trade ",l.jsx("span",{children:"Bitcoin"})," with a cleaner pro layout on every screen."]}),l.jsx("p",{className:"hero-text",children:"Live BTC pricing, mobile-first navigation, dedicated trade and wallet flows, and a home screen that feels like a real market desk instead of one stretched page."}),l.jsxs("div",{className:"hero-actions",children:[l.jsxs(de,{to:"/trade",className:"hero-btn primary",children:["Open Trade Desk",l.jsx(zr,{size:18})]}),l.jsx(de,{to:"/finance",className:"hero-btn secondary",children:"Go to Deposit"})]})]}),l.jsx("div",{className:"hero-aside",children:l.jsxs("div",{className:"market-hero-card",children:[l.jsxs("div",{className:"market-hero-header",children:[l.jsxs("div",{className:"market-hero-meta",children:[l.jsx("div",{className:"market-icon",children:"₿"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Bitcoin / USD"}),l.jsx("div",{className:"market-hero-label",children:"Real-time market sync"})]})]}),l.jsx("div",{className:"market-status",children:a?r:"loading"})]}),l.jsx("div",{className:`market-hero-price ${a?"":"loading"}`,children:a?`$${c.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),a&&l.jsxs("div",{className:`market-hero-change ${c.change>=0?"up":"down"}`,children:[c.change>=0?l.jsx(Ps,{size:16}):l.jsx(fm,{size:16}),c.change>=0?"+":"",c.change.toFixed(2),"%"]}),l.jsxs("div",{className:"market-stats",children:[l.jsxs("div",{className:"market-stat",children:[l.jsx("div",{className:"market-stat-label",children:"24h High"}),l.jsxs("div",{className:"market-stat-value",children:["$",c.high.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),l.jsxs("div",{className:"market-stat",children:[l.jsx("div",{className:"market-stat-label",children:"24h Low"}),l.jsxs("div",{className:"market-stat-value",children:["$",c.low.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),l.jsxs("div",{className:"market-stat",children:[l.jsx("div",{className:"market-stat-label",children:"24h Volume"}),l.jsxs("div",{className:"market-stat-value",children:[c.volume.toLocaleString(void 0,{maximumFractionDigits:0})," BTC"]})]})]})]})})]})]}),l.jsxs("section",{className:"quick-grid",children:[l.jsxs("div",{className:"quick-card glass-card",children:[l.jsx("div",{className:"quick-icon",children:l.jsx(Ti,{size:22})}),l.jsx("div",{className:"quick-value",children:"$2.4B"}),l.jsx("div",{className:"quick-label",children:"Spot and derivatives volume across the desk"})]}),l.jsxs("div",{className:"quick-card glass-card",children:[l.jsx("div",{className:"quick-icon",children:l.jsx(Vc,{size:22})}),l.jsx("div",{className:"quick-value",children:"1m / 5m / 1h / 1D"}),l.jsx("div",{className:"quick-label",children:"Timeframes available on the BTC trade chart"})]}),l.jsxs("div",{className:"quick-card glass-card",children:[l.jsx("div",{className:"quick-icon",children:l.jsx(l1,{size:22})}),l.jsx("div",{className:"quick-value",children:"156"}),l.jsx("div",{className:"quick-label",children:"Countries simulated for the global trading audience"})]}),l.jsxs("div",{className:"quick-card glass-card",children:[l.jsx("div",{className:"quick-icon",children:l.jsx(am,{size:22})}),l.jsx("div",{className:"quick-value",children:"24 / 7"}),l.jsx("div",{className:"quick-label",children:"Always-on BTC market monitoring and wallet access"})]})]}),l.jsxs("section",{className:"section-card glass-card",children:[l.jsxs("div",{className:"section-head",children:[l.jsx("div",{className:"section-title",children:"BTC news on the current home screen"}),l.jsxs(de,{to:"/news",className:"section-link",children:["More news",l.jsx(zr,{size:16})]})]}),l.jsx("div",{className:"story-marquee",children:l.jsx("div",{className:"story-track",children:[...Th,...Th].map((o,u)=>l.jsxs("article",{className:"story-card",children:[l.jsx("img",{src:o.image,alt:o.title,className:"story-image"}),l.jsxs("div",{className:"story-copy",children:[l.jsx("div",{className:"story-meta",children:o.meta}),l.jsx("div",{className:"story-title",children:o.title}),l.jsx(de,{to:"/news",className:"story-cta",children:"Read market brief"})]})]},`${o.id}-${u}`))})})]}),l.jsxs("section",{className:"section-card glass-card",children:[l.jsxs("div",{className:"section-head",children:[l.jsx("div",{className:"section-title",children:"Market board"}),l.jsxs(de,{to:"/trade",className:"section-link",children:["Trade BTC",l.jsx(zr,{size:16})]})]}),l.jsx("div",{className:"market-table",children:l.jsxs("div",{style:{width:"100%"},children:[l.jsx("div",{className:"market-filterbar",children:l.jsx("div",{className:"market-filters",children:k1.map((o,u)=>l.jsx("button",{type:"button",className:`market-filter-chip ${u===0?"active":""}`,children:o},o))})}),l.jsxs("div",{className:"market-list-head",children:[l.jsx("div",{children:"Trading Pairs"}),l.jsx("div",{className:"market-list-head-right",children:"Last Traded Price/24H Change %"})]}),[c,...b1].map(o=>{var u,h,d,f,p,m;return l.jsxs("div",{className:"market-list-row",children:[l.jsxs("div",{className:"market-pair",children:[l.jsx(u1,{size:18,fill:(u=Oi[o.symbol])!=null&&u.favorite?"currentColor":"none",className:`market-star ${(h=Oi[o.symbol])!=null&&h.favorite?"":"off"}`}),l.jsx("div",{className:"market-coin",style:{background:((d=Oi[o.symbol])==null?void 0:d.bg)||"#e7eefc",color:((f=Oi[o.symbol])==null?void 0:f.color)||"#2b5db6"},children:((p=Oi[o.symbol])==null?void 0:p.icon)||o.symbol.charAt(0)}),l.jsxs("div",{className:"market-pair-copy",children:[l.jsxs("strong",{children:[o.symbol,l.jsx("span",{children:"/USDT"})]}),(((m=Oi[o.symbol])==null?void 0:m.tags)||[]).map(x=>l.jsx("span",{className:"market-tag",children:x},`${o.symbol}-${x}`))]})]}),l.jsxs("div",{className:"market-price-block",children:[l.jsx("div",{className:"market-price-main",children:o.price.toLocaleString(void 0,{minimumFractionDigits:o.price>1?2:4,maximumFractionDigits:o.price>1?2:4})}),l.jsxs("div",{className:"market-price-change",style:{color:o.change>0?"#0ecb81":o.change<0?"#f6465d":"#9aa3b1"},children:[o.change>0?"+":"",o.change.toFixed(2),"%"]})]})]},o.symbol)})]})})]}),l.jsx("section",{className:"timeline-grid",children:w1.map(o=>l.jsxs("div",{className:"timeline-card glass-card",children:[l.jsx("div",{className:"timeline-year",children:o.year}),l.jsx("div",{className:"timeline-title",children:o.title}),l.jsx("div",{className:"timeline-text",children:o.text})]},o.year))}),l.jsxs("section",{className:"section-card glass-card",children:[l.jsxs("div",{className:"section-head",children:[l.jsx("div",{className:"section-title",children:"Top BTC traders"}),l.jsxs("div",{className:"section-link",children:[l.jsx(bs,{size:15}),"Monthly ranking"]})]}),l.jsx("div",{className:"leaderboard-list",children:sm.slice(0,5).map(o=>l.jsxs("div",{className:"leaderboard-row",children:[l.jsx("div",{className:"leaderboard-rank",children:o.rank}),l.jsxs("div",{className:"leaderboard-user",children:[l.jsx("img",{src:o.avatar,alt:o.name,className:"leaderboard-avatar"}),l.jsxs("div",{children:[l.jsx("strong",{children:o.name}),l.jsxs("span",{children:[o.trades," trades"]})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"market-cell-label",children:"Profit"}),l.jsxs("div",{className:"market-cell-value",style:{color:"#0ecb81"},children:["$",o.profit.toLocaleString()]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"market-cell-label",children:"Win rate"}),l.jsxs("div",{className:"market-cell-value",children:[o.winRate,"%"]})]})]},o.rank))})]}),l.jsxs("section",{className:"section-card glass-card",children:[l.jsx("div",{className:"section-head",children:l.jsx("div",{className:"section-title",children:"What traders are saying"})}),l.jsx("div",{className:"reviews-marquee",children:l.jsx("div",{className:"reviews-track",children:[...Ph,...Ph].map((o,u)=>l.jsxs("article",{className:"review-card glass-card",children:[l.jsxs("div",{className:"review-head",children:[l.jsx("img",{src:o.avatar,alt:o.name}),l.jsxs("div",{children:[l.jsx("strong",{children:o.name}),l.jsx("div",{className:"review-role",children:o.role})]})]}),l.jsx("div",{className:"review-text",children:o.text}),l.jsx("div",{className:"review-profit",children:o.profit})]},`${o.name}-${u}`))})})]}),l.jsxs("footer",{className:"site-footer",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx("div",{className:"footer-coin",children:"₿"}),l.jsxs("div",{children:[l.jsx("h3",{children:"BTCTradePro"}),l.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"footer-title",children:"Products"}),l.jsxs("div",{className:"footer-links",children:[l.jsx(de,{to:"/trade",className:"footer-link",children:"Spot Trading"}),l.jsx(de,{to:"/trade",className:"footer-link",children:"Futures"}),l.jsx(de,{to:"/finance",className:"footer-link",children:"Staking"})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"footer-title",children:"Company"}),l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),l.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),l.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"footer-title",children:"Support"}),l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),l.jsx(de,{to:"/support",className:"footer-link",children:"Help Center"}),l.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),l.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}function S1(){const{btcPrice:t,btcChange24h:e,marketStatus:i,marketReady:n}=Ds();return l.jsxs("div",{className:"landing-shell",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("nav",{className:"landing-nav",children:[l.jsxs("div",{className:"landing-brand",children:[l.jsx("div",{className:"brand-dot",children:"₿"}),l.jsxs("span",{children:["BTCTrade",l.jsx("span",{style:{color:"#f7931a"},children:"Pro"})]})]}),l.jsxs("div",{className:"landing-actions",children:[l.jsx(de,{to:"/login",className:"landing-btn ghost",children:"Sign In"}),l.jsx(de,{to:"/login",className:"landing-btn primary",children:"Start Now"})]})]}),l.jsxs("section",{className:"landing-hero",children:[l.jsx("video",{className:"landing-video",src:pm,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),l.jsx("div",{className:"landing-overlay"}),l.jsxs("div",{className:"landing-content",children:[l.jsxs("div",{className:"landing-copy",children:[l.jsxs("div",{className:"eyebrow",children:[l.jsx(si,{size:14})," Professional Bitcoin trading platform"]}),l.jsxs("h1",{className:"landing-title",children:["Trade ",l.jsx("span",{children:"Bitcoin"})," Build Wealth"]}),l.jsx("p",{children:"Join a pro-style BTC platform with live market data, wallet approvals, advanced charting, and a premium mobile-first experience."}),l.jsxs("div",{className:"landing-actions",children:[l.jsxs(de,{to:"/login",className:"landing-btn primary",children:["Sign In ",l.jsx(zr,{size:16})]}),l.jsx(de,{to:"/login",className:"landing-btn ghost",children:"Create Account"})]}),l.jsxs("div",{className:"landing-stats",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("strong",{children:"$2.4B+"}),l.jsx("span",{children:"Trading Volume"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("strong",{children:"5M+"}),l.jsx("span",{children:"Users"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("strong",{children:"99.9%"}),l.jsx("span",{children:"Uptime"})]})]})]}),l.jsxs("div",{className:"side-grid",children:[l.jsxs("div",{className:"side-card",children:[l.jsx("h3",{children:"BTC/USDT"}),l.jsx("div",{className:"side-card-label",children:n?i==="live"?"Live Market":"Fallback Market":"Loading Market"}),l.jsx("strong",{className:n?void 0:"loading-price",children:n?`$${t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),n&&l.jsxs("div",{className:`side-card-change ${e>=0?"up":"down"}`,children:[e>=0?"+":"",e.toFixed(2),"% 24h"]}),l.jsx("p",{children:"Real-time Bitcoin pricing powers the trade desk after sign-in, with wallet and approval flows connected across the app."})]}),l.jsxs("div",{className:"side-card",children:[l.jsx("h3",{children:"Why BTCTradePro"}),l.jsxs("div",{className:"feature-row",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx(Vc,{size:18}),l.jsxs("div",{children:[l.jsx("strong",{children:"Live Trade Desk"}),l.jsx("span",{children:"Real BTC charting and market sync."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx(Ti,{size:18}),l.jsxs("div",{children:[l.jsx("strong",{children:"Wallet Review Flow"}),l.jsx("span",{children:"Admin-reviewed deposits and withdrawals."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx(Ps,{size:18}),l.jsxs("div",{children:[l.jsx("strong",{children:"Mobile Pro UX"}),l.jsx("span",{children:"Dedicated screens for trade, wallet, profile, and support."})]})]})]})]})]})]})]}),l.jsxs("footer",{className:"landing-footer",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx("div",{className:"footer-coin",children:"₿"}),l.jsxs("div",{children:[l.jsx("h3",{children:"BTCTradePro"}),l.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("div",{className:"footer-title",children:"Products"}),l.jsxs("div",{className:"footer-links",children:[l.jsx(de,{to:"/login",className:"footer-link",children:"Spot Trading"}),l.jsx(de,{to:"/login",className:"footer-link",children:"Futures"}),l.jsx(de,{to:"/login",className:"footer-link",children:"Staking"})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("div",{className:"footer-title",children:"Company"}),l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),l.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),l.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("div",{className:"footer-title",children:"Support"}),l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),l.jsx(de,{to:"/login",className:"footer-link",children:"Help Center"}),l.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),l.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}var N1=Object.defineProperty,il=Object.getOwnPropertySymbols,mm=Object.prototype.hasOwnProperty,gm=Object.prototype.propertyIsEnumerable,Lh=(t,e,i)=>e in t?N1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,C1=(t,e)=>{for(var i in e||(e={}))mm.call(e,i)&&Lh(t,i,e[i]);if(il)for(var i of il(e))gm.call(e,i)&&Lh(t,i,e[i]);return t},E1=(t,e)=>{var i={};for(var n in t)mm.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&il)for(var n of il(t))e.indexOf(n)<0&&gm.call(t,n)&&(i[n]=t[n]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Pi;(t=>{const e=class{constructor(o,u,h,d){if(this.version=o,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version value out of range");if(d<-1||d>7)throw new RangeError("Mask value out of range");this.size=o*4+17;let f=[];for(let m=0;m<this.size;m++)f.push(!1);for(let m=0;m<this.size;m++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const p=this.addEccAndInterleave(h);if(this.drawCodewords(p),d==-1){let m=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const b=this.getPenaltyScore();b<m&&(d=x,m=b),this.applyMask(x)}}r(0<=d&&d<=7),this.mask=d,this.applyMask(d),this.drawFormatBits(d),this.isFunction=[]}static encodeText(o,u){const h=t.QrSegment.makeSegments(o);return e.encodeSegments(h,u)}static encodeBinary(o,u){const h=t.QrSegment.makeBytes(o);return e.encodeSegments([h],u)}static encodeSegments(o,u,h=1,d=40,f=-1,p=!0){if(!(e.MIN_VERSION<=h&&h<=d&&d<=e.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let m,x;for(m=h;;m++){const y=e.getNumDataCodewords(m,u)*8,k=c.getTotalBits(o,m);if(k<=y){x=k;break}if(m>=d)throw new RangeError("Data too long")}for(const y of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])p&&x<=e.getNumDataCodewords(m,y)*8&&(u=y);let b=[];for(const y of o){n(y.mode.modeBits,4,b),n(y.numChars,y.mode.numCharCountBits(m),b);for(const k of y.getData())b.push(k)}r(b.length==x);const g=e.getNumDataCodewords(m,u)*8;r(b.length<=g),n(0,Math.min(4,g-b.length),b),n(0,(8-b.length%8)%8,b),r(b.length%8==0);for(let y=236;b.length<g;y^=253)n(y,8,b);let v=[];for(;v.length*8<b.length;)v.push(0);return b.forEach((y,k)=>v[k>>>3]|=y<<7-(k&7)),new e(m,u,v,f)}getModule(o,u){return 0<=o&&o<this.size&&0<=u&&u<this.size&&this.modules[u][o]}getModules(){return this.modules}drawFunctionPatterns(){for(let h=0;h<this.size;h++)this.setFunctionModule(6,h,h%2==0),this.setFunctionModule(h,6,h%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const o=this.getAlignmentPatternPositions(),u=o.length;for(let h=0;h<u;h++)for(let d=0;d<u;d++)h==0&&d==0||h==0&&d==u-1||h==u-1&&d==0||this.drawAlignmentPattern(o[h],o[d]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(o){const u=this.errorCorrectionLevel.formatBits<<3|o;let h=u;for(let f=0;f<10;f++)h=h<<1^(h>>>9)*1335;const d=(u<<10|h)^21522;r(d>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,s(d,f));this.setFunctionModule(8,7,s(d,6)),this.setFunctionModule(8,8,s(d,7)),this.setFunctionModule(7,8,s(d,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,s(d,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,s(d,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,s(d,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let o=this.version;for(let h=0;h<12;h++)o=o<<1^(o>>>11)*7973;const u=this.version<<12|o;r(u>>>18==0);for(let h=0;h<18;h++){const d=s(u,h),f=this.size-11+h%3,p=Math.floor(h/3);this.setFunctionModule(f,p,d),this.setFunctionModule(p,f,d)}}drawFinderPattern(o,u){for(let h=-4;h<=4;h++)for(let d=-4;d<=4;d++){const f=Math.max(Math.abs(d),Math.abs(h)),p=o+d,m=u+h;0<=p&&p<this.size&&0<=m&&m<this.size&&this.setFunctionModule(p,m,f!=2&&f!=4)}}drawAlignmentPattern(o,u){for(let h=-2;h<=2;h++)for(let d=-2;d<=2;d++)this.setFunctionModule(o+d,u+h,Math.max(Math.abs(d),Math.abs(h))!=1)}setFunctionModule(o,u,h){this.modules[u][o]=h,this.isFunction[u][o]=!0}addEccAndInterleave(o){const u=this.version,h=this.errorCorrectionLevel;if(o.length!=e.getNumDataCodewords(u,h))throw new RangeError("Invalid argument");const d=e.NUM_ERROR_CORRECTION_BLOCKS[h.ordinal][u],f=e.ECC_CODEWORDS_PER_BLOCK[h.ordinal][u],p=Math.floor(e.getNumRawDataModules(u)/8),m=d-p%d,x=Math.floor(p/d);let b=[];const g=e.reedSolomonComputeDivisor(f);for(let y=0,k=0;y<d;y++){let N=o.slice(k,k+x-f+(y<m?0:1));k+=N.length;const C=e.reedSolomonComputeRemainder(N,g);y<m&&N.push(0),b.push(N.concat(C))}let v=[];for(let y=0;y<b[0].length;y++)b.forEach((k,N)=>{(y!=x-f||N>=m)&&v.push(k[y])});return r(v.length==p),v}drawCodewords(o){if(o.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let h=this.size-1;h>=1;h-=2){h==6&&(h=5);for(let d=0;d<this.size;d++)for(let f=0;f<2;f++){const p=h-f,x=(h+1&2)==0?this.size-1-d:d;!this.isFunction[x][p]&&u<o.length*8&&(this.modules[x][p]=s(o[u>>>3],7-(u&7)),u++)}}r(u==o.length*8)}applyMask(o){if(o<0||o>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let h=0;h<this.size;h++){let d;switch(o){case 0:d=(h+u)%2==0;break;case 1:d=u%2==0;break;case 2:d=h%3==0;break;case 3:d=(h+u)%3==0;break;case 4:d=(Math.floor(h/3)+Math.floor(u/2))%2==0;break;case 5:d=h*u%2+h*u%3==0;break;case 6:d=(h*u%2+h*u%3)%2==0;break;case 7:d=((h+u)%2+h*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][h]&&d&&(this.modules[u][h]=!this.modules[u][h])}}getPenaltyScore(){let o=0;for(let f=0;f<this.size;f++){let p=!1,m=0,x=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[f][b]==p?(m++,m==5?o+=e.PENALTY_N1:m>5&&o++):(this.finderPenaltyAddHistory(m,x),p||(o+=this.finderPenaltyCountPatterns(x)*e.PENALTY_N3),p=this.modules[f][b],m=1);o+=this.finderPenaltyTerminateAndCount(p,m,x)*e.PENALTY_N3}for(let f=0;f<this.size;f++){let p=!1,m=0,x=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[b][f]==p?(m++,m==5?o+=e.PENALTY_N1:m>5&&o++):(this.finderPenaltyAddHistory(m,x),p||(o+=this.finderPenaltyCountPatterns(x)*e.PENALTY_N3),p=this.modules[b][f],m=1);o+=this.finderPenaltyTerminateAndCount(p,m,x)*e.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let p=0;p<this.size-1;p++){const m=this.modules[f][p];m==this.modules[f][p+1]&&m==this.modules[f+1][p]&&m==this.modules[f+1][p+1]&&(o+=e.PENALTY_N2)}let u=0;for(const f of this.modules)u=f.reduce((p,m)=>p+(m?1:0),u);const h=this.size*this.size,d=Math.ceil(Math.abs(u*20-h*10)/h)-1;return r(0<=d&&d<=9),o+=d*e.PENALTY_N4,r(0<=o&&o<=2568888),o}getAlignmentPatternPositions(){if(this.version==1)return[];{const o=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(o*2-2))*2;let h=[6];for(let d=this.size-7;h.length<o;d-=u)h.splice(1,0,d);return h}}static getNumRawDataModules(o){if(o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*o+128)*o+64;if(o>=2){const h=Math.floor(o/7)+2;u-=(25*h-10)*h-55,o>=7&&(u-=36)}return r(208<=u&&u<=29648),u}static getNumDataCodewords(o,u){return Math.floor(e.getNumRawDataModules(o)/8)-e.ECC_CODEWORDS_PER_BLOCK[u.ordinal][o]*e.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][o]}static reedSolomonComputeDivisor(o){if(o<1||o>255)throw new RangeError("Degree out of range");let u=[];for(let d=0;d<o-1;d++)u.push(0);u.push(1);let h=1;for(let d=0;d<o;d++){for(let f=0;f<u.length;f++)u[f]=e.reedSolomonMultiply(u[f],h),f+1<u.length&&(u[f]^=u[f+1]);h=e.reedSolomonMultiply(h,2)}return u}static reedSolomonComputeRemainder(o,u){let h=u.map(d=>0);for(const d of o){const f=d^h.shift();h.push(0),u.forEach((p,m)=>h[m]^=e.reedSolomonMultiply(p,f))}return h}static reedSolomonMultiply(o,u){if(o>>>8||u>>>8)throw new RangeError("Byte out of range");let h=0;for(let d=7;d>=0;d--)h=h<<1^(h>>>7)*285,h^=(u>>>d&1)*o;return r(h>>>8==0),h}finderPenaltyCountPatterns(o){const u=o[1];r(u<=this.size*3);const h=u>0&&o[2]==u&&o[3]==u*3&&o[4]==u&&o[5]==u;return(h&&o[0]>=u*4&&o[6]>=u?1:0)+(h&&o[6]>=u*4&&o[0]>=u?1:0)}finderPenaltyTerminateAndCount(o,u,h){return o&&(this.finderPenaltyAddHistory(u,h),u=0),u+=this.size,this.finderPenaltyAddHistory(u,h),this.finderPenaltyCountPatterns(h)}finderPenaltyAddHistory(o,u){u[0]==0&&(o+=this.size),u.pop(),u.unshift(o)}};let i=e;i.MIN_VERSION=1,i.MAX_VERSION=40,i.PENALTY_N1=3,i.PENALTY_N2=3,i.PENALTY_N3=40,i.PENALTY_N4=10,i.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],i.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=i;function n(o,u,h){if(u<0||u>31||o>>>u)throw new RangeError("Value out of range");for(let d=u-1;d>=0;d--)h.push(o>>>d&1)}function s(o,u){return(o>>>u&1)!=0}function r(o){if(!o)throw new Error("Assertion error")}const a=class{constructor(o,u,h){if(this.mode=o,this.numChars=u,this.bitData=h,u<0)throw new RangeError("Invalid argument");this.bitData=h.slice()}static makeBytes(o){let u=[];for(const h of o)n(h,8,u);return new a(a.Mode.BYTE,o.length,u)}static makeNumeric(o){if(!a.isNumeric(o))throw new RangeError("String contains non-numeric characters");let u=[];for(let h=0;h<o.length;){const d=Math.min(o.length-h,3);n(parseInt(o.substr(h,d),10),d*3+1,u),h+=d}return new a(a.Mode.NUMERIC,o.length,u)}static makeAlphanumeric(o){if(!a.isAlphanumeric(o))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],h;for(h=0;h+2<=o.length;h+=2){let d=a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h))*45;d+=a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h+1)),n(d,11,u)}return h<o.length&&n(a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h)),6,u),new a(a.Mode.ALPHANUMERIC,o.length,u)}static makeSegments(o){return o==""?[]:a.isNumeric(o)?[a.makeNumeric(o)]:a.isAlphanumeric(o)?[a.makeAlphanumeric(o)]:[a.makeBytes(a.toUtf8ByteArray(o))]}static makeEci(o){let u=[];if(o<0)throw new RangeError("ECI assignment value out of range");if(o<128)n(o,8,u);else if(o<16384)n(2,2,u),n(o,14,u);else if(o<1e6)n(6,3,u),n(o,21,u);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,u)}static isNumeric(o){return a.NUMERIC_REGEX.test(o)}static isAlphanumeric(o){return a.ALPHANUMERIC_REGEX.test(o)}getData(){return this.bitData.slice()}static getTotalBits(o,u){let h=0;for(const d of o){const f=d.mode.numCharCountBits(u);if(d.numChars>=1<<f)return 1/0;h+=4+f+d.bitData.length}return h}static toUtf8ByteArray(o){o=encodeURI(o);let u=[];for(let h=0;h<o.length;h++)o.charAt(h)!="%"?u.push(o.charCodeAt(h)):(u.push(parseInt(o.substr(h+1,2),16)),h+=2);return u}};let c=a;c.NUMERIC_REGEX=/^[0-9]*$/,c.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,c.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=c})(Pi||(Pi={}));(t=>{(e=>{const i=class{constructor(s,r){this.ordinal=s,this.formatBits=r}};let n=i;n.LOW=new i(0,1),n.MEDIUM=new i(1,0),n.QUARTILE=new i(2,3),n.HIGH=new i(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Pi||(Pi={}));(t=>{(e=>{const i=class{constructor(s,r){this.modeBits=s,this.numBitsCharCount=r}numCharCountBits(s){return this.numBitsCharCount[Math.floor((s+7)/17)]}};let n=i;n.NUMERIC=new i(1,[10,12,14]),n.ALPHANUMERIC=new i(2,[9,11,13]),n.BYTE=new i(4,[8,16,16]),n.KANJI=new i(8,[8,10,12]),n.ECI=new i(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Pi||(Pi={}));var Fn=Pi;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var z1={L:Fn.QrCode.Ecc.LOW,M:Fn.QrCode.Ecc.MEDIUM,Q:Fn.QrCode.Ecc.QUARTILE,H:Fn.QrCode.Ecc.HIGH},M1=128,_1="L",T1="#FFFFFF",P1="#000000",L1=!1,vm=4,R1=.1;function $1(t,e=0){const i=[];return t.forEach(function(n,s){let r=null;n.forEach(function(a,c){if(!a&&r!==null){i.push(`M${r+e} ${s+e}h${c-r}v1H${r+e}z`),r=null;return}if(c===n.length-1){if(!a)return;r===null?i.push(`M${c+e},${s+e} h1v1H${c+e}z`):i.push(`M${r+e},${s+e} h${c+1-r}v1H${r+e}z`);return}a&&r===null&&(r=c)})}),i.join("")}function D1(t,e){return t.slice().map((i,n)=>n<e.y||n>=e.y+e.h?i:i.map((s,r)=>r<e.x||r>=e.x+e.w?s:!1))}function B1(t,e,i,n){if(n==null)return null;const s=i?vm:0,r=t.length+s*2,a=Math.floor(e*R1),c=r/e,o=(n.width||a)*c,u=(n.height||a)*c,h=n.x==null?t.length/2-o/2:n.x*c,d=n.y==null?t.length/2-u/2:n.y*c;let f=null;if(n.excavate){let p=Math.floor(h),m=Math.floor(d),x=Math.ceil(o+h-p),b=Math.ceil(u+d-m);f={x:p,y:m,w:x,h:b}}return{x:h,y:d,h:u,w:o,excavation:f}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function A1(t){const e=t,{value:i,size:n=M1,level:s=_1,bgColor:r=T1,fgColor:a=P1,includeMargin:c=L1,imageSettings:o}=e,u=E1(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let h=Fn.QrCode.encodeText(i,z1[s]).getModules();const d=c?vm:0,f=h.length+d*2,p=B1(h,n,c,o);let m=null;o!=null&&p!=null&&(p.excavation!=null&&(h=D1(h,p.excavation)),m=xi.createElement("image",{xlinkHref:o.src,height:p.h,width:p.w,x:p.x+d,y:p.y+d,preserveAspectRatio:"none"}));const x=$1(h,d);return xi.createElement("svg",C1({height:n,width:n,viewBox:`0 0 ${f} ${f}`},u),xi.createElement("path",{fill:r,d:`M0,0 h${f}v${f}H0z`,shapeRendering:"crispEdges"}),xi.createElement("path",{fill:a,d:x,shapeRendering:"crispEdges"}),m)}function I1(){const{user:t,updateUser:e}=fi(),{btcPrice:i,transactions:n,addTransaction:s,walletAddress:r}=Ds(),[a,c]=w.useState("deposit"),[o,u]=w.useState(""),[h,d]=w.useState(""),[f,p]=w.useState(""),[m,x]=w.useState(""),[b,g]=w.useState(!1),[v,y]=w.useState(!1),[k,N]=w.useState(!1),[C,_]=w.useState(!1),[T,j]=w.useState(!1),[R,G]=w.useState(null),[Me,be]=w.useState(!1),fe=r||Oc,we=w.useMemo(()=>n.filter($=>$.userEmail===(t==null?void 0:t.email)).slice(0,8),[n,t==null?void 0:t.email]),ce=async()=>{await navigator.clipboard.writeText(fe),_(!0),window.setTimeout(()=>_(!1),1500)},Re=()=>{if(!o||parseFloat(o)<=0)return;const $=parseFloat(o);G({btcAmount:$,usdAmount:$*i}),j(!0)},P=()=>{!t||!R||(be(!0),setTimeout(()=>{const $={id:`tx-${Date.now()}`,type:"deposit",amount:R.usdAmount,btcAmount:R.btcAmount,walletAddress:fe,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()};s($),be(!1),j(!1),G(null),u(""),g(!0),window.setTimeout(()=>g(!1),4e3)},2e3))},O=()=>{j(!1),G(null)},I=()=>{if(!t||!h)return;const $=parseFloat(h);if($>(t.usdBalance||0)){alert("Insufficient USD balance");return}s({id:`tx-${Date.now()}`,type:"withdraw",amount:$,btcAmount:$/i,withdrawAddress:f,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()}),y(!0),d(""),p("")},q=()=>{if(!t||!m)return;const $=parseFloat(m);if($>t.btcBalance){alert("Insufficient BTC balance");return}e({btcBalance:t.btcBalance-$,stakeAmount:(t.stakeAmount||0)+$}),s({id:`tx-${Date.now()}`,type:"stake",amount:$*i,btcAmount:$,userEmail:t.email,userName:t.name,status:"completed",timestamp:new Date().toISOString()}),N(!0),x("")};return l.jsxs(l.Fragment,{children:[T&&R&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",children:l.jsxs("div",{className:"deposit-modal",children:[l.jsx("style",{children:`
              .deposit-modal {
                background: linear-gradient(180deg, #141b26, #0c1018);
                border: 1px solid rgba(247,147,26,0.22);
                border-radius: 28px;
                box-shadow: 0 40px 120px rgba(0,0,0,0.5);
                padding: 36px;
                max-width: 420px;
                width: 90%;
                display: grid;
                gap: 22px;
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
              }
              .dm-head h2 {
                font-size: 22px;
                font-weight: 800;
                color: #f3f6fb;
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
                padding: 20px;
                border-radius: 20px;
                background: rgba(247,147,26,0.08);
                border: 1px solid rgba(247,147,26,0.2);
                text-align: center;
              }
              .dm-btc-val { font-size: 32px; font-weight: 800; color: #f6b353; font-family: 'JetBrains Mono', monospace; }
              .dm-usd-val { font-size: 14px; color: #8fa2ba; margin-top: 6px; }
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
              .dm-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
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
            `}),l.jsxs("div",{className:"dm-head",children:[l.jsx("h2",{children:"Deposit BTC"}),l.jsx("button",{className:"dm-close",onClick:O,children:l.jsx(h1,{size:16})})]}),Me?l.jsxs("div",{className:"dm-checking",children:[l.jsx("div",{className:"spinner"}),l.jsxs("p",{children:["System is checking your deposit.",l.jsx("br",{}),"This may take a few seconds..."]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"dm-amount-box",children:[l.jsxs("div",{className:"dm-btc-val",children:[R.btcAmount.toFixed(8)," BTC"]}),l.jsxs("div",{className:"dm-usd-val",children:["≈ $",ue(R.usdAmount)," USDT"]})]}),l.jsx("div",{style:{textAlign:"center"},children:l.jsxs("div",{className:"dm-network",children:[l.jsx(Ch,{size:13}),"BTC Network Only"]})}),l.jsx("div",{className:"dm-qr",children:l.jsx(A1,{value:fe,size:180,bgColor:"#ffffff",fgColor:"#000000"})}),l.jsxs("div",{className:"dm-address-box",children:[l.jsx("code",{children:fe}),l.jsx("button",{className:"dm-copy-btn",onClick:ce,children:C?l.jsx(lm,{size:16}):l.jsx(i1,{size:16})})]}),l.jsxs("p",{className:"dm-hint",children:["Send exactly ",l.jsxs("strong",{style:{color:"#f6b353"},children:[R.btcAmount.toFixed(8)," BTC"]})," to the address above. Your balance will update after admin verification."]}),l.jsxs("div",{className:"dm-actions",children:[l.jsx("button",{className:"dm-btn dm-finish",onClick:P,children:"Finish Deposit"}),l.jsx("button",{className:"dm-btn dm-cancel",onClick:O,children:"Cancel"})]})]})]})}),l.jsxs("div",{className:"finance-shell",children:[l.jsx("style",{children:`
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
          .balance-grid { display: grid; gap: 18px; grid-template-columns: repeat(3, 1fr); }
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
        `}),l.jsxs("section",{className:"card page-head",children:[l.jsx("h1",{children:"Finance Center"}),l.jsx("p",{children:"Deposit, withdraw, and manage your demo BTC wallet."})]}),l.jsxs("section",{className:"balance-grid",children:[l.jsxs("div",{className:"card balance-card",children:[l.jsx("div",{className:"balance-icon",children:l.jsx(Ti,{size:24})}),l.jsx("h3",{children:"USD Balance"}),l.jsxs("strong",{children:["$",ue((t==null?void 0:t.usdBalance)||0)]}),l.jsx("p",{children:"Available for trading and withdrawals."})]}),l.jsxs("div",{className:"card balance-card",children:[l.jsx("div",{className:"balance-icon",children:l.jsx(Ch,{size:24})}),l.jsx("h3",{children:"BTC Holdings"}),l.jsxs("strong",{children:[((t==null?void 0:t.btcBalance)||0).toFixed(6)," BTC"]}),l.jsxs("p",{children:["Live value: $",(((t==null?void 0:t.btcBalance)||0)*i).toLocaleString(void 0,{maximumFractionDigits:2})]})]}),l.jsxs("div",{className:"card balance-card",children:[l.jsx("div",{className:"balance-icon",children:l.jsx(zh,{size:24})}),l.jsx("h3",{children:"Staked BTC"}),l.jsxs("strong",{children:[((t==null?void 0:t.stakeAmount)||0).toFixed(6)," BTC"]}),l.jsx("p",{children:"Passive rewards in demo mode."})]})]}),l.jsxs("section",{className:"content-grid",children:[l.jsxs("div",{className:"card wallet-main",children:[l.jsxs("div",{className:"tab-row",children:[l.jsx("button",{className:`tab-btn ${a==="deposit"?"active":""}`,onClick:()=>c("deposit"),children:"Deposit"}),l.jsx("button",{className:`tab-btn ${a==="withdraw"?"active":""}`,onClick:()=>c("withdraw"),children:"Withdraw"}),l.jsx("button",{className:`tab-btn ${a==="stake"?"active":""}`,onClick:()=>c("stake"),children:"Stake"})]}),a==="deposit"&&l.jsxs("div",{className:"flow-card",children:[l.jsx("h2",{children:"Deposit BTC"}),l.jsx("p",{children:"Enter the BTC amount you want to deposit. A new page will show the QR code and wallet address. Click Finish Deposit to submit for verification."}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Deposit Amount (BTC)"}),l.jsx("input",{className:"amount-input",value:o,onChange:$=>u($.target.value),type:"number",placeholder:"0.01000000"}),l.jsxs("div",{className:"amount-note",children:["USDT credit after verification: ",o?`$${ue(parseFloat(o||"0")*i)}`:"$0.00"]})]}),l.jsx("button",{className:"cta",onClick:Re,children:"Prepare Deposit"}),b&&l.jsx("div",{className:"status-banner",children:"Deposit submitted and pending. Once System Admin verifies it, your balance will be credited."})]}),a==="withdraw"&&l.jsxs("div",{className:"flow-card",children:[l.jsx("h2",{children:"Withdraw USD"}),l.jsx("p",{children:"Submit a withdrawal request. The amount is deducted only after admin approval."}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Withdrawal Amount (USD)"}),l.jsx("input",{className:"amount-input",value:h,onChange:$=>d($.target.value),type:"number",placeholder:"500"}),l.jsxs("div",{className:"amount-note",children:["Available: $",ue((t==null?void 0:t.usdBalance)||0)]})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"BTC Wallet Address"}),l.jsx("input",{className:"amount-input",style:{fontSize:"16px",fontWeight:600},value:f,onChange:$=>p($.target.value),type:"text",placeholder:"Paste your BTC wallet address"})]}),l.jsx("button",{className:"cta",onClick:I,children:"Submit Withdrawal"}),v&&l.jsx("div",{className:"status-banner",children:"Withdrawal request submitted. Admin approval required."})]}),a==="stake"&&l.jsxs("div",{className:"flow-card",children:[l.jsx("h2",{children:"Stake BTC"}),l.jsx("p",{children:"Move BTC into the staking pool and earn passive rewards."}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Stake Amount (BTC)"}),l.jsx("input",{className:"amount-input",value:m,onChange:$=>x($.target.value),type:"number",placeholder:"0.050000"}),l.jsxs("div",{className:"amount-note",children:["Available BTC: ",((t==null?void 0:t.btcBalance)||0).toFixed(6)]})]}),l.jsx("button",{className:"cta",onClick:q,children:"Start Staking"}),k&&l.jsx("div",{className:"status-banner",children:"BTC moved to staking successfully."})]})]}),l.jsxs("aside",{className:"card history-card",children:[l.jsx("h3",{children:"Recent Activity"}),l.jsxs("div",{className:"tx-list",children:[we.map($=>l.jsxs("div",{className:"tx-item",children:[l.jsx("div",{className:`tx-icon ${$.type}`,children:$.type==="deposit"?l.jsx(Xx,{size:20}):$.type==="withdraw"?l.jsx(Qx,{size:20}):l.jsx(zh,{size:20})}),l.jsxs("div",{className:"tx-meta",children:[l.jsx("strong",{children:$.type}),l.jsx("span",{children:new Date($.timestamp).toLocaleString()})]}),l.jsxs("div",{className:"tx-amount",children:["$",ue($.amount)]}),l.jsxs("div",{className:`tx-status ${$.status}`,children:[l.jsx("span",{className:"tx-status-label",children:$.status==="completed"?"verified":$.status}),$.reviewedBy?` · ${$.reviewedBy}`:""]})]},$.id)),we.length===0&&l.jsx("div",{className:"amount-note",children:"No transactions yet."})]})]})]})]})]})}function ie(t){var e=t.width,i=t.height;if(e<0)throw new Error("Negative width is not allowed for Size");if(i<0)throw new Error("Negative height is not allowed for Size");return{width:e,height:i}}function Ni(t,e){return t.width===e.width&&t.height===e.height}var O1=function(){function t(e){var i=this;this._resolutionListener=function(){return i._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=e,this._installResolutionListener()}return t.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(t.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(e){var i=this,n={next:e};return this._observers.push(n),{unsubscribe:function(){i._observers=i._observers.filter(function(s){return s!==n})}}},t.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var e=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(e,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},t.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},t.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},t.prototype._onResolutionChanged=function(){var e=this;this._observers.forEach(function(i){return i.next(e._window.devicePixelRatio)}),this._reinstallResolutionListener()},t}();function F1(t){return new O1(t)}var V1=function(){function t(e,i,n){var s;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=e,this._canvasElementClientSize=ie({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=i??function(r){return r},this._allowResizeObserver=(s=n==null?void 0:n.allowResizeObserver)!==null&&s!==void 0?s:!0,this._chooseAndInitObserver()}return t.prototype.dispose=function(){var e,i;if(this._canvasElement===null)throw new Error("Object is disposed");(e=this._canvasElementResizeObserver)===null||e===void 0||e.disconnect(),this._canvasElementResizeObserver=null,(i=this._devicePixelRatioObservable)===null||i===void 0||i.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(t.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bitmapSize",{get:function(){return ie({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),t.prototype.resizeCanvasElement=function(e){this._canvasElementClientSize=ie(e),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},t.prototype.subscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(i){return i!==e})},Object.defineProperty(t.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),t.prototype.subscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(i){return i!==e})},t.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var e=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(e),this._emitSuggestedBitmapSizeChanged(e,this._suggestedBitmapSize)}},t.prototype._resizeBitmap=function(e){var i=this.bitmapSize;Ni(i,e)||(this.canvasElement.width=e.width,this.canvasElement.height=e.height,this._emitBitmapSizeChanged(i,e))},t.prototype._emitBitmapSizeChanged=function(e,i){var n=this;this._bitmapSizeChangedListeners.forEach(function(s){return s.call(n,e,i)})},t.prototype._suggestNewBitmapSize=function(e){var i=this._suggestedBitmapSize,n=ie(this._transformBitmapSize(e,this._canvasElementClientSize)),s=Ni(this.bitmapSize,n)?null:n;i===null&&s===null||i!==null&&s!==null&&Ni(i,s)||(this._suggestedBitmapSize=s,this._emitSuggestedBitmapSizeChanged(i,s))},t.prototype._emitSuggestedBitmapSizeChanged=function(e,i){var n=this;this._suggestedBitmapSizeChangedListeners.forEach(function(s){return s.call(n,e,i)})},t.prototype._chooseAndInitObserver=function(){var e=this;if(!this._allowResizeObserver){this._initDevicePixelRatioObservable();return}W1().then(function(i){return i?e._initResizeObserver():e._initDevicePixelRatioObservable()})},t.prototype._initDevicePixelRatioObservable=function(){var e=this;if(this._canvasElement!==null){var i=Rh(this._canvasElement);if(i===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=F1(i),this._devicePixelRatioObservable.subscribe(function(){return e._invalidateBitmapSize()}),this._invalidateBitmapSize()}},t.prototype._invalidateBitmapSize=function(){var e,i;if(this._canvasElement!==null){var n=Rh(this._canvasElement);if(n!==null){var s=(i=(e=this._devicePixelRatioObservable)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:n.devicePixelRatio,r=this._canvasElement.getClientRects(),a=r[0]!==void 0?H1(r[0],s):ie({width:this._canvasElementClientSize.width*s,height:this._canvasElementClientSize.height*s});this._suggestNewBitmapSize(a)}}},t.prototype._initResizeObserver=function(){var e=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(i){var n=i.find(function(a){return a.target===e._canvasElement});if(!(!n||!n.devicePixelContentBoxSize||!n.devicePixelContentBoxSize[0])){var s=n.devicePixelContentBoxSize[0],r=ie({width:s.inlineSize,height:s.blockSize});e._suggestNewBitmapSize(r)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},t}();function U1(t,e){return new V1(t,e.transform,e.options)}function Rh(t){return t.ownerDocument.defaultView}function W1(){return new Promise(function(t){var e=new ResizeObserver(function(i){t(i.every(function(n){return"devicePixelContentBoxSize"in n})),e.disconnect()});e.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1})}function H1(t,e){return ie({width:Math.round(t.left*e+t.width*e)-Math.round(t.left*e),height:Math.round(t.top*e+t.height*e)-Math.round(t.top*e)})}var q1=function(){function t(e,i,n){if(i.width===0||i.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=i,n.width===0||n.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=n,this._context=e}return t.prototype.useMediaCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),e({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},t.prototype.useBitmapCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),e({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(t.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),t}();function Li(t,e){var i=t.canvasElementClientSize;if(i.width===0||i.height===0)return null;var n=t.bitmapSize;if(n.width===0||n.height===0)return null;var s=t.canvasElement.getContext("2d",e);return s===null?null:new q1(s,i,n)}/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.3
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */const K1={upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},X1={upColor:"#26a69a",downColor:"#ef5350",openVisible:!0,thinBars:!0},Q1={color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},Y1={topColor:"rgba( 46, 220, 135, 0.4)",bottomColor:"rgba( 40, 221, 100, 0)",invertFilledArea:!1,lineColor:"#33D778",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},G1={baseValue:{type:"price",price:0},topFillColor1:"rgba(38, 166, 154, 0.28)",topFillColor2:"rgba(38, 166, 154, 0.05)",topLineColor:"rgba(38, 166, 154, 1)",bottomFillColor1:"rgba(239, 83, 80, 0.05)",bottomFillColor2:"rgba(239, 83, 80, 0.28)",bottomLineColor:"rgba(239, 83, 80, 1)",lineWidth:3,lineStyle:0,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},J1={color:"#26a69a",base:0},xm={color:"#2196f3"},ym={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var $h,Dh;function Ri(t,e){const i={0:[],1:[t.lineWidth,t.lineWidth],2:[2*t.lineWidth,2*t.lineWidth],3:[6*t.lineWidth,6*t.lineWidth],4:[t.lineWidth,4*t.lineWidth]}[e];t.setLineDash(i)}function bm(t,e,i,n){t.beginPath();const s=t.lineWidth%2?.5:0;t.moveTo(i,e+s),t.lineTo(n,e+s),t.stroke()}function ai(t,e){if(!t)throw new Error("Assertion failed"+(e?": "+e:""))}function Ae(t){if(t===void 0)throw new Error("Value is undefined");return t}function E(t){if(t===null)throw new Error("Value is null");return t}function tn(t){return E(Ae(t))}(function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps",t[t.Curved=2]="Curved"})($h||($h={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(Dh||(Dh={}));const Bh={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function it(t){return t<0?0:t>255?255:Math.round(t)||0}function wm(t){return t<=0||t>1?Math.min(Math.max(t,0),1):Math.round(1e4*t)/1e4}const Z1=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,ey=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,ty=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,iy=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;function ws(t){(t=t.toLowerCase())in Bh&&(t=Bh[t]);{const e=iy.exec(t)||ty.exec(t);if(e)return[it(parseInt(e[1],10)),it(parseInt(e[2],10)),it(parseInt(e[3],10)),wm(e.length<5?1:parseFloat(e[4]))]}{const e=ey.exec(t);if(e)return[it(parseInt(e[1],16)),it(parseInt(e[2],16)),it(parseInt(e[3],16)),1]}{const e=Z1.exec(t);if(e)return[it(17*parseInt(e[1],16)),it(17*parseInt(e[2],16)),it(17*parseInt(e[3],16)),1]}throw new Error(`Cannot parse color: ${t}`)}function km(t){return .199*t[0]+.687*t[1]+.114*t[2]}function Sl(t){const e=ws(t);return{t:`rgb(${e[0]}, ${e[1]}, ${e[2]})`,i:km(e)>160?"black":"white"}}class me{constructor(){this.h=[]}l(e,i,n){const s={o:e,_:i,u:n===!0};this.h.push(s)}v(e){const i=this.h.findIndex(n=>e===n.o);i>-1&&this.h.splice(i,1)}p(e){this.h=this.h.filter(i=>i._!==e)}m(e,i,n){const s=[...this.h];this.h=this.h.filter(r=>!r.u),s.forEach(r=>r.o(e,i,n))}M(){return this.h.length>0}S(){this.h=[]}}function gt(t,...e){for(const i of e)for(const n in i)i[n]!==void 0&&Object.prototype.hasOwnProperty.call(i,n)&&!["__proto__","constructor","prototype"].includes(n)&&(typeof i[n]!="object"||t[n]===void 0||Array.isArray(i[n])?t[n]=i[n]:gt(t[n],i[n]));return t}function kt(t){return typeof t=="number"&&isFinite(t)}function ks(t){return typeof t=="number"&&t%1==0}function Rs(t){return typeof t=="string"}function ir(t){return typeof t=="boolean"}function _t(t){const e=t;if(!e||typeof e!="object")return e;let i,n,s;for(n in i=Array.isArray(e)?[]:{},e)e.hasOwnProperty(n)&&(s=e[n],i[n]=s&&typeof s=="object"?_t(s):s);return i}function ny(t){return t!==null}function js(t){return t===null?void 0:t}const Wc="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function yn(t,e,i){return e===void 0&&(e=Wc),`${i=i!==void 0?`${i} `:""}${t}px ${e}`}class sy{constructor(e){this.k={C:1,T:5,P:NaN,R:"",D:"",V:"",O:"",B:0,A:0,I:0,L:0,N:0},this.F=e}W(){const e=this.k,i=this.j(),n=this.H();return e.P===i&&e.D===n||(e.P=i,e.D=n,e.R=yn(i,n),e.L=2.5/12*i,e.B=e.L,e.A=i/12*e.T,e.I=i/12*e.T,e.N=0),e.V=this.$(),e.O=this.U(),this.k}$(){return this.F.W().layout.textColor}U(){return this.F.q()}j(){return this.F.W().layout.fontSize}H(){return this.F.W().layout.fontFamily}}class Hc{constructor(){this.Y=[]}Z(e){this.Y=e}X(e,i,n){this.Y.forEach(s=>{s.X(e,i,n)})}}class vt{X(e,i,n){e.useBitmapCoordinateSpace(s=>this.K(s,i,n))}}class ry extends vt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.G===null||this.G.tt===null)return;const s=this.G.tt,r=this.G,a=Math.max(1,Math.floor(i))%2/2,c=o=>{e.beginPath();for(let u=s.to-1;u>=s.from;--u){const h=r.it[u],d=Math.round(h.nt*i)+a,f=h.st*n,p=o*n+a;e.moveTo(d,f),e.arc(d,f,p,0,2*Math.PI)}e.fill()};r.et>0&&(e.fillStyle=r.rt,c(r.ht+r.et)),e.fillStyle=r.lt,c(r.ht)}}function ly(){return{it:[{nt:0,st:0,ot:0,_t:0}],lt:"",rt:"",ht:0,et:0,tt:null}}const ay={from:0,to:1};class oy{constructor(e,i){this.ut=new Hc,this.ct=[],this.dt=[],this.ft=!0,this.F=e,this.vt=i,this.ut.Z(this.ct)}bt(e){const i=this.F.wt();i.length!==this.ct.length&&(this.dt=i.map(ly),this.ct=this.dt.map(n=>{const s=new ry;return s.J(n),s}),this.ut.Z(this.ct)),this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.ut}Mt(){const e=this.vt.W().mode===2,i=this.F.wt(),n=this.vt.xt(),s=this.F.St();i.forEach((r,a)=>{var c;const o=this.dt[a],u=r.kt(n);if(e||u===null||!r.yt())return void(o.tt=null);const h=E(r.Ct());o.lt=u.Tt,o.ht=u.ht,o.et=u.Pt,o.it[0]._t=u._t,o.it[0].st=r.Dt().Rt(u._t,h.Vt),o.rt=(c=u.Ot)!==null&&c!==void 0?c:this.F.Bt(o.it[0].st/r.Dt().At()),o.it[0].ot=n,o.it[0].nt=s.It(n),o.tt=ay})}}class cy extends vt{constructor(e){super(),this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.zt===null)return;const r=this.zt.Lt.yt,a=this.zt.Et.yt;if(!r&&!a)return;const c=Math.round(this.zt.nt*n),o=Math.round(this.zt.st*s);e.lineCap="butt",r&&c>=0&&(e.lineWidth=Math.floor(this.zt.Lt.et*n),e.strokeStyle=this.zt.Lt.V,e.fillStyle=this.zt.Lt.V,Ri(e,this.zt.Lt.Nt),function(u,h,d,f){u.beginPath();const p=u.lineWidth%2?.5:0;u.moveTo(h+p,d),u.lineTo(h+p,f),u.stroke()}(e,c,0,i.height)),a&&o>=0&&(e.lineWidth=Math.floor(this.zt.Et.et*s),e.strokeStyle=this.zt.Et.V,e.fillStyle=this.zt.Et.V,Ri(e,this.zt.Et.Nt),bm(e,o,0,i.width))}}class uy{constructor(e){this.ft=!0,this.Ft={Lt:{et:1,Nt:0,V:"",yt:!1},Et:{et:1,Nt:0,V:"",yt:!1},nt:0,st:0},this.Wt=new cy(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.yt(),i=E(this.jt.Ht()),n=i.$t().W().crosshair,s=this.Ft;if(n.mode===2)return s.Et.yt=!1,void(s.Lt.yt=!1);s.Et.yt=e&&this.jt.Ut(i),s.Lt.yt=e&&this.jt.qt(),s.Et.et=n.horzLine.width,s.Et.Nt=n.horzLine.style,s.Et.V=n.horzLine.color,s.Lt.et=n.vertLine.width,s.Lt.Nt=n.vertLine.style,s.Lt.V=n.vertLine.color,s.nt=this.jt.Yt(),s.st=this.jt.Zt()}}function hy(t,e,i,n,s,r){t.fillRect(e+r,i,n-2*r,r),t.fillRect(e+r,i+s-r,n-2*r,r),t.fillRect(e,i,r,s),t.fillRect(e+n-r,i,r,s)}function Nl(t,e,i,n,s,r){t.save(),t.globalCompositeOperation="copy",t.fillStyle=r,t.fillRect(e,i,n,s),t.restore()}function Ah(t,e,i,n,s,r){t.beginPath(),t.roundRect?t.roundRect(e,i,n,s,r):(t.lineTo(e+n-r[1],i),r[1]!==0&&t.arcTo(e+n,i,e+n,i+r[1],r[1]),t.lineTo(e+n,i+s-r[2]),r[2]!==0&&t.arcTo(e+n,i+s,e+n-r[2],i+s,r[2]),t.lineTo(e+r[3],i+s),r[3]!==0&&t.arcTo(e,i+s,e,i+s-r[3],r[3]),t.lineTo(e,i+r[0]),r[0]!==0&&t.arcTo(e,i,e+r[0],i,r[0]))}function Ih(t,e,i,n,s,r,a=0,c=[0,0,0,0],o=""){if(t.save(),!a||!o||o===r)return Ah(t,e,i,n,s,c),t.fillStyle=r,t.fill(),void t.restore();const u=a/2;var h;Ah(t,e+u,i+u,n-a,s-a,(h=-u,c.map(d=>d===0?d:d+h))),r!=="transparent"&&(t.fillStyle=r,t.fill()),o!=="transparent"&&(t.lineWidth=a,t.strokeStyle=o,t.closePath(),t.stroke()),t.restore()}function jm(t,e,i,n,s,r,a){t.save(),t.globalCompositeOperation="copy";const c=t.createLinearGradient(0,0,0,s);c.addColorStop(0,r),c.addColorStop(1,a),t.fillStyle=c,t.fillRect(e,i,n,s),t.restore()}class Oh{constructor(e,i){this.J(e,i)}J(e,i){this.zt=e,this.Xt=i}At(e,i){return this.zt.yt?e.P+e.L+e.B:0}X(e,i,n,s){if(!this.zt.yt||this.zt.Kt.length===0)return;const r=this.zt.V,a=this.Xt.t,c=e.useBitmapCoordinateSpace(o=>{const u=o.context;u.font=i.R;const h=this.Gt(o,i,n,s),d=h.Jt;return h.Qt?Ih(u,d.ti,d.ii,d.ni,d.si,a,d.ei,[d.ht,0,0,d.ht],a):Ih(u,d.ri,d.ii,d.ni,d.si,a,d.ei,[0,d.ht,d.ht,0],a),this.zt.hi&&(u.fillStyle=r,u.fillRect(d.ri,d.li,d.ai-d.ri,d.oi)),this.zt._i&&(u.fillStyle=i.O,u.fillRect(h.Qt?d.ui-d.ei:0,d.ii,d.ei,d.ci-d.ii)),h});e.useMediaCoordinateSpace(({context:o})=>{const u=c.di;o.font=i.R,o.textAlign=c.Qt?"right":"left",o.textBaseline="middle",o.fillStyle=r,o.fillText(this.zt.Kt,u.fi,(u.ii+u.ci)/2+u.pi)})}Gt(e,i,n,s){var r;const{context:a,bitmapSize:c,mediaSize:o,horizontalPixelRatio:u,verticalPixelRatio:h}=e,d=this.zt.hi||!this.zt.mi?i.T:0,f=this.zt.bi?i.C:0,p=i.L+this.Xt.wi,m=i.B+this.Xt.gi,x=i.A,b=i.I,g=this.zt.Kt,v=i.P,y=n.Mi(a,g),k=Math.ceil(n.xi(a,g)),N=v+p+m,C=i.C+x+b+k+d,_=Math.max(1,Math.floor(h));let T=Math.round(N*h);T%2!=_%2&&(T+=1);const j=f>0?Math.max(1,Math.floor(f*u)):0,R=Math.round(C*u),G=Math.round(d*u),Me=(r=this.Xt.Si)!==null&&r!==void 0?r:this.Xt.ki,be=Math.round(Me*h)-Math.floor(.5*h),fe=Math.floor(be+_/2-T/2),we=fe+T,ce=s==="right",Re=ce?o.width-f:f,P=ce?c.width-j:j;let O,I,q;return ce?(O=P-R,I=P-G,q=Re-d-x-f):(O=P+R,I=P+G,q=Re+d+x),{Qt:ce,Jt:{ii:fe,li:be,ci:we,ni:R,si:T,ht:2*u,ei:j,ti:O,ri:P,ai:I,oi:_,ui:c.width},di:{ii:fe/h,ci:we/h,fi:q,pi:y}}}}class Cl{constructor(e){this.yi={ki:0,t:"#000",gi:0,wi:0},this.Ci={Kt:"",yt:!1,hi:!0,mi:!1,Ot:"",V:"#FFF",_i:!1,bi:!1},this.Ti={Kt:"",yt:!1,hi:!1,mi:!0,Ot:"",V:"#FFF",_i:!0,bi:!0},this.ft=!0,this.Pi=new(e||Oh)(this.Ci,this.yi),this.Ri=new(e||Oh)(this.Ti,this.yi)}Kt(){return this.Di(),this.Ci.Kt}ki(){return this.Di(),this.yi.ki}bt(){this.ft=!0}At(e,i=!1){return Math.max(this.Pi.At(e,i),this.Ri.At(e,i))}Vi(){return this.yi.Si||0}Oi(e){this.yi.Si=e}Bi(){return this.Di(),this.Ci.yt||this.Ti.yt}Ai(){return this.Di(),this.Ci.yt}gt(e){return this.Di(),this.Ci.hi=this.Ci.hi&&e.W().ticksVisible,this.Ti.hi=this.Ti.hi&&e.W().ticksVisible,this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Pi}Ii(){return this.Di(),this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Ri}Di(){this.ft&&(this.Ci.hi=!0,this.Ti.hi=!1,this.zi(this.Ci,this.Ti,this.yi))}}class dy extends Cl{constructor(e,i,n){super(),this.jt=e,this.Li=i,this.Ei=n}zi(e,i,n){if(e.yt=!1,this.jt.W().mode===2)return;const s=this.jt.W().horzLine;if(!s.labelVisible)return;const r=this.Li.Ct();if(!this.jt.yt()||this.Li.Ni()||r===null)return;const a=Sl(s.labelBackgroundColor);n.t=a.t,e.V=a.i;const c=2/12*this.Li.P();n.wi=c,n.gi=c;const o=this.Ei(this.Li);n.ki=o.ki,e.Kt=this.Li.Fi(o._t,r),e.yt=!0}}const fy=/[1-9]/g;class Sm{constructor(){this.zt=null}J(e){this.zt=e}X(e,i){if(this.zt===null||this.zt.yt===!1||this.zt.Kt.length===0)return;const n=e.useMediaCoordinateSpace(({context:f})=>(f.font=i.R,Math.round(i.Wi.xi(f,E(this.zt).Kt,fy))));if(n<=0)return;const s=i.ji,r=n+2*s,a=r/2,c=this.zt.Hi;let o=this.zt.ki,u=Math.floor(o-a)+.5;u<0?(o+=Math.abs(0-u),u=Math.floor(o-a)+.5):u+r>c&&(o-=Math.abs(c-(u+r)),u=Math.floor(o-a)+.5);const h=u+r,d=Math.ceil(0+i.C+i.T+i.L+i.P+i.B);e.useBitmapCoordinateSpace(({context:f,horizontalPixelRatio:p,verticalPixelRatio:m})=>{const x=E(this.zt);f.fillStyle=x.t;const b=Math.round(u*p),g=Math.round(0*m),v=Math.round(h*p),y=Math.round(d*m),k=Math.round(2*p);if(f.beginPath(),f.moveTo(b,g),f.lineTo(b,y-k),f.arcTo(b,y,b+k,y,k),f.lineTo(v-k,y),f.arcTo(v,y,v,y-k,k),f.lineTo(v,g),f.fill(),x.hi){const N=Math.round(x.ki*p),C=g,_=Math.round((C+i.T)*m);f.fillStyle=x.V;const T=Math.max(1,Math.floor(p)),j=Math.floor(.5*p);f.fillRect(N-j,C,T,_-C)}}),e.useMediaCoordinateSpace(({context:f})=>{const p=E(this.zt),m=0+i.C+i.T+i.L+i.P/2;f.font=i.R,f.textAlign="left",f.textBaseline="middle",f.fillStyle=p.V;const x=i.Wi.Mi(f,"Apr0");f.translate(u+s,m+x),f.fillText(p.Kt,0,0)})}}class py{constructor(e,i,n){this.ft=!0,this.Wt=new Sm,this.Ft={yt:!1,t:"#4c525e",V:"white",Kt:"",Hi:0,ki:NaN,hi:!0},this.vt=e,this.$i=i,this.Ei=n}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt.J(this.Ft),this.Wt}Mt(){const e=this.Ft;if(e.yt=!1,this.vt.W().mode===2)return;const i=this.vt.W().vertLine;if(!i.labelVisible)return;const n=this.$i.St();if(n.Ni())return;e.Hi=n.Hi();const s=this.Ei();if(s===null)return;e.ki=s.ki;const r=n.Ui(this.vt.xt());e.Kt=n.qi(E(r)),e.yt=!0;const a=Sl(i.labelBackgroundColor);e.t=a.t,e.V=a.i,e.hi=n.W().ticksVisible}}class qc{constructor(){this.Yi=null,this.Zi=0}Xi(){return this.Zi}Ki(e){this.Zi=e}Dt(){return this.Yi}Gi(e){this.Yi=e}Ji(e){return[]}Qi(){return[]}yt(){return!0}}var Fh;(function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet",t[t.Hidden=2]="Hidden"})(Fh||(Fh={}));class my extends qc{constructor(e,i){super(),this.tn=null,this.nn=NaN,this.sn=0,this.en=!0,this.rn=new Map,this.hn=!1,this.ln=NaN,this.an=NaN,this._n=NaN,this.un=NaN,this.$i=e,this.cn=i,this.dn=new oy(e,this),this.fn=((s,r)=>a=>{const c=r(),o=s();if(a===E(this.tn).vn())return{_t:o,ki:c};{const u=E(a.Ct());return{_t:a.pn(c,u),ki:c}}})(()=>this.nn,()=>this.an);const n=((s,r)=>()=>{const a=this.$i.St().mn(s()),c=r();return a&&Number.isFinite(c)?{ot:a,ki:c}:null})(()=>this.sn,()=>this.Yt());this.bn=new py(this,e,n),this.wn=new uy(this)}W(){return this.cn}gn(e,i){this._n=e,this.un=i}Mn(){this._n=NaN,this.un=NaN}xn(){return this._n}Sn(){return this.un}kn(e,i,n){this.hn||(this.hn=!0),this.en=!0,this.yn(e,i,n)}xt(){return this.sn}Yt(){return this.ln}Zt(){return this.an}yt(){return this.en}Cn(){this.en=!1,this.Tn(),this.nn=NaN,this.ln=NaN,this.an=NaN,this.tn=null,this.Mn()}Pn(e){return this.tn!==null?[this.wn,this.dn]:[]}Ut(e){return e===this.tn&&this.cn.horzLine.visible}qt(){return this.cn.vertLine.visible}Rn(e,i){this.en&&this.tn===e||this.rn.clear();const n=[];return this.tn===e&&n.push(this.Dn(this.rn,i,this.fn)),n}Qi(){return this.en?[this.bn]:[]}Ht(){return this.tn}Vn(){this.wn.bt(),this.rn.forEach(e=>e.bt()),this.bn.bt(),this.dn.bt()}On(e){return e&&!e.vn().Ni()?e.vn():null}yn(e,i,n){this.Bn(e,i,n)&&this.Vn()}Bn(e,i,n){const s=this.ln,r=this.an,a=this.nn,c=this.sn,o=this.tn,u=this.On(n);this.sn=e,this.ln=isNaN(e)?NaN:this.$i.St().It(e),this.tn=n;const h=u!==null?u.Ct():null;return u!==null&&h!==null?(this.nn=i,this.an=u.Rt(i,h)):(this.nn=NaN,this.an=NaN),s!==this.ln||r!==this.an||c!==this.sn||a!==this.nn||o!==this.tn}Tn(){const e=this.$i.wt().map(n=>n.In().An()).filter(ny),i=e.length===0?null:Math.max(...e);this.sn=i!==null?i:NaN}Dn(e,i,n){let s=e.get(i);return s===void 0&&(s=new dy(this,i,n),e.set(i,s)),s}}function El(t){return t==="left"||t==="right"}class Ce{constructor(e){this.zn=new Map,this.Ln=[],this.En=e}Nn(e,i){const n=function(s,r){return s===void 0?r:{Fn:Math.max(s.Fn,r.Fn),Wn:s.Wn||r.Wn}}(this.zn.get(e),i);this.zn.set(e,n)}jn(){return this.En}Hn(e){const i=this.zn.get(e);return i===void 0?{Fn:this.En}:{Fn:Math.max(this.En,i.Fn),Wn:i.Wn}}$n(){this.Un(),this.Ln=[{qn:0}]}Yn(e){this.Un(),this.Ln=[{qn:1,Vt:e}]}Zn(e){this.Xn(),this.Ln.push({qn:5,Vt:e})}Un(){this.Xn(),this.Ln.push({qn:6})}Kn(){this.Un(),this.Ln=[{qn:4}]}Gn(e){this.Un(),this.Ln.push({qn:2,Vt:e})}Jn(e){this.Un(),this.Ln.push({qn:3,Vt:e})}Qn(){return this.Ln}ts(e){for(const i of e.Ln)this.ns(i);this.En=Math.max(this.En,e.En),e.zn.forEach((i,n)=>{this.Nn(n,i)})}static ss(){return new Ce(2)}static es(){return new Ce(3)}ns(e){switch(e.qn){case 0:this.$n();break;case 1:this.Yn(e.Vt);break;case 2:this.Gn(e.Vt);break;case 3:this.Jn(e.Vt);break;case 4:this.Kn();break;case 5:this.Zn(e.Vt);break;case 6:this.Xn()}}Xn(){const e=this.Ln.findIndex(i=>i.qn===5);e!==-1&&this.Ln.splice(e,1)}}const Vh=".";function Tt(t,e){if(!kt(t))return"n/a";if(!ks(e))throw new TypeError("invalid length");if(e<0||e>16)throw new TypeError("invalid length");return e===0?t.toString():("0000000000000000"+t.toString()).slice(-e)}class zl{constructor(e,i){if(i||(i=1),kt(e)&&ks(e)||(e=100),e<0)throw new TypeError("invalid base");this.Li=e,this.rs=i,this.hs()}format(e){const i=e<0?"−":"";return e=Math.abs(e),i+this.ls(e)}hs(){if(this._s=0,this.Li>0&&this.rs>0){let e=this.Li;for(;e>1;)e/=10,this._s++}}ls(e){const i=this.Li/this.rs;let n=Math.floor(e),s="";const r=this._s!==void 0?this._s:NaN;if(i>1){let a=+(Math.round(e*i)-n*i).toFixed(this._s);a>=i&&(a-=i,n+=1),s=Vh+Tt(+a.toFixed(this._s)*this.rs,r)}else n=Math.round(n*i)/i,r>0&&(s=Vh+Tt(0,r));return n.toFixed(0)+s}}class Nm extends zl{constructor(e=100){super(e)}format(e){return`${super.format(e)}%`}}class gy{constructor(e){this.us=e}format(e){let i="";return e<0&&(i="-",e=-e),e<995?i+this.cs(e):e<999995?i+this.cs(e/1e3)+"K":e<999999995?(e=1e3*Math.round(e/1e3),i+this.cs(e/1e6)+"M"):(e=1e6*Math.round(e/1e6),i+this.cs(e/1e9)+"B")}cs(e){let i;const n=Math.pow(10,this.us);return i=(e=Math.round(e*n)/n)>=1e-15&&e<1?e.toFixed(this.us).replace(/\.?0+$/,""):String(e),i.replace(/(\.[1-9]*)0+$/,(s,r)=>r)}}function Cm(t,e,i,n,s,r,a){if(e.length===0||n.from>=e.length||n.to<=0)return;const{context:c,horizontalPixelRatio:o,verticalPixelRatio:u}=t,h=e[n.from];let d=r(t,h),f=h;if(n.to-n.from<2){const p=s/2;c.beginPath();const m={nt:h.nt-p,st:h.st},x={nt:h.nt+p,st:h.st};c.moveTo(m.nt*o,m.st*u),c.lineTo(x.nt*o,x.st*u),a(t,d,m,x)}else{const p=(x,b)=>{a(t,d,f,b),c.beginPath(),d=x,f=b};let m=f;c.beginPath(),c.moveTo(h.nt*o,h.st*u);for(let x=n.from+1;x<n.to;++x){m=e[x];const b=r(t,m);switch(i){case 0:c.lineTo(m.nt*o,m.st*u);break;case 1:c.lineTo(m.nt*o,e[x-1].st*u),b!==d&&(p(b,m),c.lineTo(m.nt*o,e[x-1].st*u)),c.lineTo(m.nt*o,m.st*u);break;case 2:{const[g,v]=vy(e,x-1,x);c.bezierCurveTo(g.nt*o,g.st*u,v.nt*o,v.st*u,m.nt*o,m.st*u);break}}i!==1&&b!==d&&(p(b,m),c.moveTo(m.nt*o,m.st*u))}(f!==m||f===m&&i===1)&&a(t,d,f,m)}}const Uh=6;function oa(t,e){return{nt:t.nt-e.nt,st:t.st-e.st}}function Wh(t,e){return{nt:t.nt/e,st:t.st/e}}function vy(t,e,i){const n=Math.max(0,e-1),s=Math.min(t.length-1,i+1);var r,a;return[(r=t[e],a=Wh(oa(t[i],t[n]),Uh),{nt:r.nt+a.nt,st:r.st+a.st}),oa(t[i],Wh(oa(t[s],t[e]),Uh))]}function xy(t,e,i,n,s){const{context:r,horizontalPixelRatio:a,verticalPixelRatio:c}=e;r.lineTo(s.nt*a,t*c),r.lineTo(n.nt*a,t*c),r.closePath(),r.fillStyle=i,r.fill()}class Em extends vt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){var i;if(this.G===null)return;const{it:n,tt:s,ds:r,et:a,Nt:c,fs:o}=this.G,u=(i=this.G.vs)!==null&&i!==void 0?i:this.G.ps?0:e.mediaSize.height;if(s===null)return;const h=e.context;h.lineCap="butt",h.lineJoin="round",h.lineWidth=a,Ri(h,c),h.lineWidth=1,Cm(e,n,o,s,r,this.bs.bind(this),xy.bind(null,u))}}function Mo(t,e,i){return Math.min(Math.max(t,e),i)}function nr(t,e,i){return e-t<=i}function zm(t){const e=Math.ceil(t);return e%2==0?e-1:e}class Kc{ws(e,i){const n=this.gs,{Ms:s,xs:r,Ss:a,ks:c,ys:o,vs:u}=i;if(this.Cs===void 0||n===void 0||n.Ms!==s||n.xs!==r||n.Ss!==a||n.ks!==c||n.vs!==u||n.ys!==o){const h=e.context.createLinearGradient(0,0,0,o);if(h.addColorStop(0,s),u!=null){const d=Mo(u*e.verticalPixelRatio/o,0,1);h.addColorStop(d,r),h.addColorStop(d,a)}h.addColorStop(1,c),this.Cs=h,this.gs=i}return this.Cs}}class yy extends Em{constructor(){super(...arguments),this.Ts=new Kc}bs(e,i){return this.Ts.ws(e,{Ms:i.Ps,xs:"",Ss:"",ks:i.Rs,ys:e.bitmapSize.height})}}function by(t,e){const i=t.context;i.strokeStyle=e,i.stroke()}class Mm extends vt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){if(this.G===null)return;const{it:i,tt:n,ds:s,fs:r,et:a,Nt:c,Ds:o}=this.G;if(n===null)return;const u=e.context;u.lineCap="butt",u.lineWidth=a*e.verticalPixelRatio,Ri(u,c),u.lineJoin="round";const h=this.Vs.bind(this);r!==void 0&&Cm(e,i,r,n,s,h,by),o&&function(d,f,p,m,x){const{horizontalPixelRatio:b,verticalPixelRatio:g,context:v}=d;let y=null;const k=Math.max(1,Math.floor(b))%2/2,N=p*g+k;for(let C=m.to-1;C>=m.from;--C){const _=f[C];if(_){const T=x(d,_);T!==y&&(v.beginPath(),y!==null&&v.fill(),v.fillStyle=T,y=T);const j=Math.round(_.nt*b)+k,R=_.st*g;v.moveTo(j,R),v.arc(j,R,N,0,2*Math.PI)}}v.fill()}(e,i,o,n,h)}}class _m extends Mm{Vs(e,i){return i.lt}}function Tm(t,e,i,n,s=0,r=e.length){let a=r-s;for(;0<a;){const c=a>>1,o=s+c;n(e[o],i)===t?(s=o+1,a-=c+1):a=c}return s}const $s=Tm.bind(null,!0),Pm=Tm.bind(null,!1);function wy(t,e){return t.ot<e}function ky(t,e){return e<t.ot}function Lm(t,e,i){const n=e.Os(),s=e.ui(),r=$s(t,n,wy),a=Pm(t,s,ky);if(!i)return{from:r,to:a};let c=r,o=a;return r>0&&r<t.length&&t[r].ot>=n&&(c=r-1),a>0&&a<t.length&&t[a-1].ot<=s&&(o=a+1),{from:c,to:o}}class Xc{constructor(e,i,n){this.Bs=!0,this.As=!0,this.Is=!0,this.zs=[],this.Ls=null,this.Es=e,this.Ns=i,this.Fs=n}bt(e){this.Bs=!0,e==="data"&&(this.As=!0),e==="options"&&(this.Is=!0)}gt(){return this.Es.yt()?(this.Ws(),this.Ls===null?null:this.js):null}Hs(){this.zs=this.zs.map(e=>Object.assign(Object.assign({},e),this.Es.Us().$s(e.ot)))}qs(){this.Ls=null}Ws(){this.As&&(this.Ys(),this.As=!1),this.Is&&(this.Hs(),this.Is=!1),this.Bs&&(this.Zs(),this.Bs=!1)}Zs(){const e=this.Es.Dt(),i=this.Ns.St();if(this.qs(),i.Ni()||e.Ni())return;const n=i.Xs();if(n===null||this.Es.In().Ks()===0)return;const s=this.Es.Ct();s!==null&&(this.Ls=Lm(this.zs,n,this.Fs),this.Gs(e,i,s.Vt),this.Js())}}class Ml extends Xc{constructor(e,i){super(e,i,!0)}Gs(e,i,n){i.Qs(this.zs,js(this.Ls)),e.te(this.zs,n,js(this.Ls))}ie(e,i){return{ot:e,_t:i,nt:NaN,st:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>{const n=i.Vt[3];return this.se(i.ee,n,e)})}}class jy extends Ml{constructor(e,i){super(e,i),this.js=new Hc,this.re=new yy,this.he=new _m,this.js.Z([this.re,this.he])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W();this.re.J({fs:e.lineType,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,vs:null,ps:e.invertFilledArea,tt:this.Ls,ds:this.Ns.St().le()}),this.he.J({fs:e.lineVisible?e.lineType:void 0,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,tt:this.Ls,ds:this.Ns.St().le(),Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0})}}class Sy extends vt{constructor(){super(...arguments),this.zt=null,this.ae=0,this.oe=0}J(e){this.zt=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;this.ae=this._e(i),this.ae>=2&&Math.max(1,Math.floor(i))%2!=this.ae%2&&this.ae--,this.oe=this.zt.ue?Math.min(this.ae,Math.floor(i)):this.ae;let s=null;const r=this.oe<=this.ae&&this.zt.le>=Math.floor(1.5*i);for(let a=this.zt.tt.from;a<this.zt.tt.to;++a){const c=this.zt.In[a];s!==c.ce&&(e.fillStyle=c.ce,s=c.ce);const o=Math.floor(.5*this.oe),u=Math.round(c.nt*i),h=u-o,d=this.oe,f=h+d-1,p=Math.min(c.de,c.fe),m=Math.max(c.de,c.fe),x=Math.round(p*n)-o,b=Math.round(m*n)+o,g=Math.max(b-x,this.oe);e.fillRect(h,x,d,g);const v=Math.ceil(1.5*this.ae);if(r){if(this.zt.ve){const C=u-v;let _=Math.max(x,Math.round(c.pe*n)-o),T=_+d-1;T>x+g-1&&(T=x+g-1,_=T-d+1),e.fillRect(C,_,h-C,T-_+1)}const y=u+v;let k=Math.max(x,Math.round(c.me*n)-o),N=k+d-1;N>x+g-1&&(N=x+g-1,k=N-d+1),e.fillRect(f+1,k,y-f,N-k+1)}}}_e(e){const i=Math.floor(e);return Math.max(i,Math.floor(function(n,s){return Math.floor(.3*n*s)}(E(this.zt).le,e)))}}class Rm extends Xc{constructor(e,i){super(e,i,!1)}Gs(e,i,n){i.Qs(this.zs,js(this.Ls)),e.be(this.zs,n,js(this.Ls))}we(e,i,n){return{ot:e,ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3],nt:NaN,pe:NaN,de:NaN,fe:NaN,me:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>this.se(i.ee,i,e))}}class Ny extends Rm{constructor(){super(...arguments),this.js=new Sy}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),ve:e.openVisible,ue:e.thinBars,tt:this.Ls})}}class Cy extends Em{constructor(){super(...arguments),this.Ts=new Kc}bs(e,i){const n=this.G;return this.Ts.ws(e,{Ms:i.ke,xs:i.ye,Ss:i.Ce,ks:i.Te,ys:e.bitmapSize.height,vs:n.vs})}}class Ey extends Mm{constructor(){super(...arguments),this.Pe=new Kc}Vs(e,i){const n=this.G;return this.Pe.ws(e,{Ms:i.Re,xs:i.Re,Ss:i.De,ks:i.De,ys:e.bitmapSize.height,vs:n.vs})}}class zy extends Ml{constructor(e,i){super(e,i),this.js=new Hc,this.Ve=new Cy,this.Oe=new Ey,this.js.Z([this.Ve,this.Oe])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.Ct();if(e===null)return;const i=this.Es.W(),n=this.Es.Dt().Rt(i.baseValue.price,e.Vt),s=this.Ns.St().le();this.Ve.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineType,vs:n,ps:!1,tt:this.Ls,ds:s}),this.Oe.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineVisible?i.lineType:void 0,Ds:i.pointMarkersVisible?i.pointMarkersRadius||i.lineWidth/2+2:void 0,vs:n,tt:this.Ls,ds:s})}}class My extends vt{constructor(){super(...arguments),this.zt=null,this.ae=0}J(e){this.zt=e}K(e){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;const{horizontalPixelRatio:i}=e;this.ae=function(r,a){if(r>=2.5&&r<=4)return Math.floor(3*a);const c=1-.2*Math.atan(Math.max(4,r)-4)/(.5*Math.PI),o=Math.floor(r*c*a),u=Math.floor(r*a),h=Math.min(o,u);return Math.max(Math.floor(a),h)}(this.zt.le,i),this.ae>=2&&Math.floor(i)%2!=this.ae%2&&this.ae--;const n=this.zt.In;this.zt.Be&&this.Ae(e,n,this.zt.tt),this.zt._i&&this.Ie(e,n,this.zt.tt);const s=this.ze(i);(!this.zt._i||this.ae>2*s)&&this.Le(e,n,this.zt.tt)}Ae(e,i,n){if(this.zt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:a}=e;let c="",o=Math.min(Math.floor(r),Math.floor(this.zt.le*r));o=Math.max(Math.floor(r),Math.min(o,this.ae));const u=Math.floor(.5*o);let h=null;for(let d=n.from;d<n.to;d++){const f=i[d];f.Ee!==c&&(s.fillStyle=f.Ee,c=f.Ee);const p=Math.round(Math.min(f.pe,f.me)*a),m=Math.round(Math.max(f.pe,f.me)*a),x=Math.round(f.de*a),b=Math.round(f.fe*a);let g=Math.round(r*f.nt)-u;const v=g+o-1;h!==null&&(g=Math.max(h+1,g),g=Math.min(g,v));const y=v-g+1;s.fillRect(g,x,y,p-x),s.fillRect(g,m+1,y,b-m),h=v}}ze(e){let i=Math.floor(1*e);this.ae<=2*i&&(i=Math.floor(.5*(this.ae-1)));const n=Math.max(Math.floor(e),i);return this.ae<=2*n?Math.max(Math.floor(e),Math.floor(1*e)):n}Ie(e,i,n){if(this.zt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:a}=e;let c="";const o=this.ze(r);let u=null;for(let h=n.from;h<n.to;h++){const d=i[h];d.Ne!==c&&(s.fillStyle=d.Ne,c=d.Ne);let f=Math.round(d.nt*r)-Math.floor(.5*this.ae);const p=f+this.ae-1,m=Math.round(Math.min(d.pe,d.me)*a),x=Math.round(Math.max(d.pe,d.me)*a);if(u!==null&&(f=Math.max(u+1,f),f=Math.min(f,p)),this.zt.le*r>2*o)hy(s,f,m,p-f+1,x-m+1,o);else{const b=p-f+1;s.fillRect(f,m,b,x-m+1)}u=p}}Le(e,i,n){if(this.zt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:a}=e;let c="";const o=this.ze(r);for(let u=n.from;u<n.to;u++){const h=i[u];let d=Math.round(Math.min(h.pe,h.me)*a),f=Math.round(Math.max(h.pe,h.me)*a),p=Math.round(h.nt*r)-Math.floor(.5*this.ae),m=p+this.ae-1;if(h.ce!==c){const x=h.ce;s.fillStyle=x,c=x}this.zt._i&&(p+=o,d+=o,m-=o,f-=o),d>f||s.fillRect(p,d,m-p+1,f-d+1)}}}class _y extends Rm{constructor(){super(...arguments),this.js=new My}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),Be:e.wickVisible,_i:e.borderVisible,tt:this.Ls})}}class Ty{constructor(e,i){this.Fe=e,this.Li=i}X(e,i,n){this.Fe.draw(e,this.Li,i,n)}}class ca extends Xc{constructor(e,i,n){super(e,i,!1),this.wn=n,this.js=new Ty(this.wn.renderer(),s=>{const r=e.Ct();return r===null?null:e.Dt().Rt(s,r.Vt)})}We(e){return this.wn.priceValueBuilder(e)}je(e){return this.wn.isWhitespace(e)}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>Object.assign(Object.assign({ot:i.ee,nt:NaN},e.$s(i.ee)),{He:i.$e}))}Gs(e,i){i.Qs(this.zs,js(this.Ls))}Js(){this.wn.update({bars:this.zs.map(Py),barSpacing:this.Ns.St().le(),visibleRange:this.Ls},this.Es.W())}}function Py(t){return{x:t.nt,time:t.ot,originalData:t.He,barColor:t.ce}}class Ly extends vt{constructor(){super(...arguments),this.zt=null,this.Ue=[]}J(e){this.zt=e,this.Ue=[]}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return;this.Ue.length||this.qe(i);const s=Math.max(1,Math.floor(n)),r=Math.round(this.zt.Ye*n)-Math.floor(s/2),a=r+s;for(let c=this.zt.tt.from;c<this.zt.tt.to;c++){const o=this.zt.it[c],u=this.Ue[c-this.zt.tt.from],h=Math.round(o.st*n);let d,f;e.fillStyle=o.ce,h<=r?(d=h,f=a):(d=r,f=h-Math.floor(s/2)+s),e.fillRect(u.Os,d,u.ui-u.Os+1,f-d)}}qe(e){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return void(this.Ue=[]);const i=Math.ceil(this.zt.le*e)<=1?0:Math.max(1,Math.floor(e)),n=Math.round(this.zt.le*e)-i;this.Ue=new Array(this.zt.tt.to-this.zt.tt.from);for(let r=this.zt.tt.from;r<this.zt.tt.to;r++){const a=this.zt.it[r],c=Math.round(a.nt*e);let o,u;if(n%2){const h=(n-1)/2;o=c-h,u=c+h}else{const h=n/2;o=c-h,u=c+h-1}this.Ue[r-this.zt.tt.from]={Os:o,ui:u,Ze:c,Xe:a.nt*e,ot:a.ot}}for(let r=this.zt.tt.from+1;r<this.zt.tt.to;r++){const a=this.Ue[r-this.zt.tt.from],c=this.Ue[r-this.zt.tt.from-1];a.ot===c.ot+1&&a.Os-c.ui!==i+1&&(c.Ze>c.Xe?c.ui=a.Os-i-1:a.Os=c.ui+i+1)}let s=Math.ceil(this.zt.le*e);for(let r=this.zt.tt.from;r<this.zt.tt.to;r++){const a=this.Ue[r-this.zt.tt.from];a.ui<a.Os&&(a.ui=a.Os);const c=a.ui-a.Os+1;s=Math.min(c,s)}if(i>0&&s<4)for(let r=this.zt.tt.from;r<this.zt.tt.to;r++){const a=this.Ue[r-this.zt.tt.from];a.ui-a.Os+1>s&&(a.Ze>a.Xe?a.ui-=1:a.Os+=1)}}}class Ry extends Ml{constructor(){super(...arguments),this.js=new Ly}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e={it:this.zs,le:this.Ns.St().le(),tt:this.Ls,Ye:this.Es.Dt().Rt(this.Es.W().base,E(this.Es.Ct()).Vt)};this.js.J(e)}}class $y extends Ml{constructor(){super(...arguments),this.js=new _m}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W(),i={it:this.zs,Nt:e.lineStyle,fs:e.lineVisible?e.lineType:void 0,et:e.lineWidth,Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0,tt:this.Ls,ds:this.Ns.St().le()};this.js.J(i)}}const Dy=/[2-9]/g;class Ss{constructor(e=50){this.Ke=0,this.Ge=1,this.Je=1,this.Qe={},this.tr=new Map,this.ir=e}nr(){this.Ke=0,this.tr.clear(),this.Ge=1,this.Je=1,this.Qe={}}xi(e,i,n){return this.sr(e,i,n).width}Mi(e,i,n){const s=this.sr(e,i,n);return((s.actualBoundingBoxAscent||0)-(s.actualBoundingBoxDescent||0))/2}sr(e,i,n){const s=n||Dy,r=String(i).replace(s,"0");if(this.tr.has(r))return Ae(this.tr.get(r)).er;if(this.Ke===this.ir){const c=this.Qe[this.Je];delete this.Qe[this.Je],this.tr.delete(c),this.Je++,this.Ke--}e.save(),e.textBaseline="middle";const a=e.measureText(r);return e.restore(),a.width===0&&i.length||(this.tr.set(r,{er:a,rr:this.Ge}),this.Qe[this.Ge]=r,this.Ke++,this.Ge++),a}}class By{constructor(e){this.hr=null,this.k=null,this.lr="right",this.ar=e}_r(e,i,n){this.hr=e,this.k=i,this.lr=n}X(e){this.k!==null&&this.hr!==null&&this.hr.X(e,this.k,this.ar,this.lr)}}class $m{constructor(e,i,n){this.ur=e,this.ar=new Ss(50),this.cr=i,this.F=n,this.j=-1,this.Wt=new By(this.ar)}gt(){const e=this.F.dr(this.cr);if(e===null)return null;const i=e.vr(this.cr)?e.pr():this.cr.Dt();if(i===null)return null;const n=e.mr(i);if(n==="overlay")return null;const s=this.F.br();return s.P!==this.j&&(this.j=s.P,this.ar.nr()),this.Wt._r(this.ur.Ii(),s,n),this.Wt}}class Ay extends vt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}wr(e,i){var n;if(!(!((n=this.zt)===null||n===void 0)&&n.yt))return null;const{st:s,et:r,gr:a}=this.zt;return i>=s-r-7&&i<=s+r+7?{Mr:this.zt,gr:a}:null}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.zt===null||this.zt.yt===!1)return;const r=Math.round(this.zt.st*s);r<0||r>i.height||(e.lineCap="butt",e.strokeStyle=this.zt.V,e.lineWidth=Math.floor(this.zt.et*n),Ri(e,this.zt.Nt),bm(e,r,0,i.width))}}class Qc{constructor(e){this.Sr={st:0,V:"rgba(0, 0, 0, 0)",et:1,Nt:0,yt:!1},this.kr=new Ay,this.ft=!0,this.Es=e,this.Ns=e.$t(),this.kr.J(this.Sr)}bt(){this.ft=!0}gt(){return this.Es.yt()?(this.ft&&(this.yr(),this.ft=!1),this.kr):null}}class Iy extends Qc{constructor(e){super(e)}yr(){this.Sr.yt=!1;const e=this.Es.Dt(),i=e.Cr().Cr;if(i!==2&&i!==3)return;const n=this.Es.W();if(!n.baseLineVisible||!this.Es.yt())return;const s=this.Es.Ct();s!==null&&(this.Sr.yt=!0,this.Sr.st=e.Rt(s.Vt,s.Vt),this.Sr.V=n.baseLineColor,this.Sr.et=n.baseLineWidth,this.Sr.Nt=n.baseLineStyle)}}class Oy extends vt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}$e(){return this.zt}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){const s=this.zt;if(s===null)return;const r=Math.max(1,Math.floor(i)),a=r%2/2,c=Math.round(s.Xe.x*i)+a,o=s.Xe.y*n;e.fillStyle=s.Tr,e.beginPath();const u=Math.max(2,1.5*s.Pr)*i;e.arc(c,o,u,0,2*Math.PI,!1),e.fill(),e.fillStyle=s.Rr,e.beginPath(),e.arc(c,o,s.ht*i,0,2*Math.PI,!1),e.fill(),e.lineWidth=r,e.strokeStyle=s.Dr,e.beginPath(),e.arc(c,o,s.ht*i+r/2,0,2*Math.PI,!1),e.stroke()}}const Fy=[{Vr:0,Or:.25,Br:4,Ar:10,Ir:.25,zr:0,Lr:.4,Er:.8},{Vr:.25,Or:.525,Br:10,Ar:14,Ir:0,zr:0,Lr:.8,Er:0},{Vr:.525,Or:1,Br:14,Ar:14,Ir:0,zr:0,Lr:0,Er:0}];function Hh(t,e,i,n){return function(s,r){if(s==="transparent")return s;const a=ws(s),c=a[3];return`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${r*c})`}(t,i+(n-i)*e)}function qh(t,e){const i=t%2600/2600;let n;for(const o of Fy)if(i>=o.Vr&&i<=o.Or){n=o;break}ai(n!==void 0,"Last price animation internal logic error");const s=(i-n.Vr)/(n.Or-n.Vr);return{Rr:Hh(e,s,n.Ir,n.zr),Dr:Hh(e,s,n.Lr,n.Er),ht:(r=s,a=n.Br,c=n.Ar,a+(c-a)*r)};var r,a,c}class Vy{constructor(e){this.Wt=new Oy,this.ft=!0,this.Nr=!0,this.Fr=performance.now(),this.Wr=this.Fr-1,this.jr=e}Hr(){this.Wr=this.Fr-1,this.bt()}$r(){if(this.bt(),this.jr.W().lastPriceAnimation===2){const e=performance.now(),i=this.Wr-e;if(i>0)return void(i<650&&(this.Wr+=2600));this.Fr=e,this.Wr=e+2600}}bt(){this.ft=!0}Ur(){this.Nr=!0}yt(){return this.jr.W().lastPriceAnimation!==0}qr(){switch(this.jr.W().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.Wr}}gt(){return this.ft?(this.Mt(),this.ft=!1,this.Nr=!1):this.Nr&&(this.Yr(),this.Nr=!1),this.Wt}Mt(){this.Wt.J(null);const e=this.jr.$t().St(),i=e.Xs(),n=this.jr.Ct();if(i===null||n===null)return;const s=this.jr.Zr(!0);if(s.Xr||!i.Kr(s.ee))return;const r={x:e.It(s.ee),y:this.jr.Dt().Rt(s._t,n.Vt)},a=s.V,c=this.jr.W().lineWidth,o=qh(this.Gr(),a);this.Wt.J({Tr:a,Pr:c,Rr:o.Rr,Dr:o.Dr,ht:o.ht,Xe:r})}Yr(){const e=this.Wt.$e();if(e!==null){const i=qh(this.Gr(),e.Tr);e.Rr=i.Rr,e.Dr=i.Dr,e.ht=i.ht}}Gr(){return this.qr()?performance.now()-this.Fr:2599}}function Gn(t,e){return zm(Math.min(Math.max(t,12),30)*e)}function Ns(t,e){switch(t){case"arrowDown":case"arrowUp":return Gn(e,1);case"circle":return Gn(e,.8);case"square":return Gn(e,.7)}}function Dm(t){return function(e){const i=Math.ceil(e);return i%2!=0?i-1:i}(Gn(t,1))}function Kh(t){return Math.max(Gn(t,.1),3)}function Xh(t,e,i){return e?t:i?Math.ceil(t/2):0}function Bm(t,e,i,n,s){const r=Ns("square",i),a=(r-1)/2,c=t-a,o=e-a;return n>=c&&n<=c+r&&s>=o&&s<=o+r}function Qh(t,e,i,n){const s=(Ns("arrowUp",n)-1)/2*i.Jr,r=(zm(n/2)-1)/2*i.Jr;e.beginPath(),t?(e.moveTo(i.nt-s,i.st),e.lineTo(i.nt,i.st-s),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+r,i.st+s),e.lineTo(i.nt-r,i.st+s),e.lineTo(i.nt-r,i.st)):(e.moveTo(i.nt-s,i.st),e.lineTo(i.nt,i.st+s),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+r,i.st-s),e.lineTo(i.nt-r,i.st-s),e.lineTo(i.nt-r,i.st)),e.fill()}function Uy(t,e,i,n,s,r){return Bm(e,i,n,s,r)}class Wy extends vt{constructor(){super(...arguments),this.zt=null,this.ar=new Ss,this.j=-1,this.H="",this.Qr=""}J(e){this.zt=e}_r(e,i){this.j===e&&this.H===i||(this.j=e,this.H=i,this.Qr=yn(e,i),this.ar.nr())}wr(e,i){if(this.zt===null||this.zt.tt===null)return null;for(let n=this.zt.tt.from;n<this.zt.tt.to;n++){const s=this.zt.it[n];if(qy(s,e,i))return{Mr:s.th,gr:s.gr}}return null}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n},s,r){if(this.zt!==null&&this.zt.tt!==null){e.textBaseline="middle",e.font=this.Qr;for(let a=this.zt.tt.from;a<this.zt.tt.to;a++){const c=this.zt.it[a];c.Kt!==void 0&&(c.Kt.Hi=this.ar.xi(e,c.Kt.ih),c.Kt.At=this.j,c.Kt.nt=c.nt-c.Kt.Hi/2),Hy(c,e,i,n)}}}}function Hy(t,e,i,n){e.fillStyle=t.V,t.Kt!==void 0&&function(s,r,a,c,o,u){s.save(),s.scale(o,u),s.fillText(r,a,c),s.restore()}(e,t.Kt.ih,t.Kt.nt,t.Kt.st,i,n),function(s,r,a){if(s.Ks!==0){switch(s.nh){case"arrowDown":return void Qh(!1,r,a,s.Ks);case"arrowUp":return void Qh(!0,r,a,s.Ks);case"circle":return void function(c,o,u){const h=(Ns("circle",u)-1)/2;c.beginPath(),c.arc(o.nt,o.st,h*o.Jr,0,2*Math.PI,!1),c.fill()}(r,a,s.Ks);case"square":return void function(c,o,u){const h=Ns("square",u),d=(h-1)*o.Jr/2,f=o.nt-d,p=o.st-d;c.fillRect(f,p,h*o.Jr,h*o.Jr)}(r,a,s.Ks)}s.nh}}(t,e,function(s,r,a){const c=Math.max(1,Math.floor(r))%2/2;return{nt:Math.round(s.nt*r)+c,st:s.st*a,Jr:r}}(t,i,n))}function qy(t,e,i){return!(t.Kt===void 0||!function(n,s,r,a,c,o){const u=a/2;return c>=n&&c<=n+r&&o>=s-u&&o<=s+u}(t.Kt.nt,t.Kt.st,t.Kt.Hi,t.Kt.At,e,i))||function(n,s,r){if(n.Ks===0)return!1;switch(n.nh){case"arrowDown":case"arrowUp":return Uy(0,n.nt,n.st,n.Ks,s,r);case"circle":return function(a,c,o,u,h){const d=2+Ns("circle",o)/2,f=a-u,p=c-h;return Math.sqrt(f*f+p*p)<=d}(n.nt,n.st,n.Ks,s,r);case"square":return Bm(n.nt,n.st,n.Ks,s,r)}}(t,e,i)}function Ky(t,e,i,n,s,r,a,c,o){const u=kt(i)?i:i.Se,h=kt(i)?i:i.Me,d=kt(i)?i:i.xe,f=kt(e.size)?Math.max(e.size,0):1,p=Dm(c.le())*f,m=p/2;switch(t.Ks=p,e.position){case"inBar":return t.st=a.Rt(u,o),void(t.Kt!==void 0&&(t.Kt.st=t.st+m+r+.6*s));case"aboveBar":return t.st=a.Rt(h,o)-m-n.sh,t.Kt!==void 0&&(t.Kt.st=t.st-m-.6*s,n.sh+=1.2*s),void(n.sh+=p+r);case"belowBar":return t.st=a.Rt(d,o)+m+n.eh,t.Kt!==void 0&&(t.Kt.st=t.st+m+r+.6*s,n.eh+=1.2*s),void(n.eh+=p+r)}e.position}class Xy{constructor(e,i){this.ft=!0,this.rh=!0,this.hh=!0,this.ah=null,this.oh=null,this.Wt=new Wy,this.jr=e,this.$i=i,this.zt={it:[],tt:null}}bt(e){this.ft=!0,this.hh=!0,e==="data"&&(this.rh=!0,this.oh=null)}gt(e){if(!this.jr.yt())return null;this.ft&&this._h();const i=this.$i.W().layout;return this.Wt._r(i.fontSize,i.fontFamily),this.Wt.J(this.zt),this.Wt}uh(){if(this.hh){if(this.jr.dh().length>0){const e=this.$i.St().le(),i=Kh(e),n=1.5*Dm(e)+2*i,s=this.fh();this.ah={above:Xh(n,s.aboveBar,s.inBar),below:Xh(n,s.belowBar,s.inBar)}}else this.ah=null;this.hh=!1}return this.ah}fh(){return this.oh===null&&(this.oh=this.jr.dh().reduce((e,i)=>(e[i.position]||(e[i.position]=!0),e),{inBar:!1,aboveBar:!1,belowBar:!1})),this.oh}_h(){const e=this.jr.Dt(),i=this.$i.St(),n=this.jr.dh();this.rh&&(this.zt.it=n.map(h=>({ot:h.time,nt:0,st:0,Ks:0,nh:h.shape,V:h.color,th:h.th,gr:h.id,Kt:void 0})),this.rh=!1);const s=this.$i.W().layout;this.zt.tt=null;const r=i.Xs();if(r===null)return;const a=this.jr.Ct();if(a===null||this.zt.it.length===0)return;let c=NaN;const o=Kh(i.le()),u={sh:o,eh:o};this.zt.tt=Lm(this.zt.it,r,!0);for(let h=this.zt.tt.from;h<this.zt.tt.to;h++){const d=n[h];d.time!==c&&(u.sh=o,u.eh=o,c=d.time);const f=this.zt.it[h];f.nt=i.It(d.time),d.text!==void 0&&d.text.length>0&&(f.Kt={ih:d.text,nt:0,st:0,Hi:0,At:0});const p=this.jr.ph(d.time);p!==null&&Ky(f,d,p,u,s.fontSize,o,e,i,a.Vt)}this.ft=!1}}class Qy extends Qc{constructor(e){super(e)}yr(){const e=this.Sr;e.yt=!1;const i=this.Es.W();if(!i.priceLineVisible||!this.Es.yt())return;const n=this.Es.Zr(i.priceLineSource===0);n.Xr||(e.yt=!0,e.st=n.ki,e.V=this.Es.mh(n.V),e.et=i.priceLineWidth,e.Nt=i.priceLineStyle)}}class Yy extends Cl{constructor(e){super(),this.jt=e}zi(e,i,n){e.yt=!1,i.yt=!1;const s=this.jt;if(!s.yt())return;const r=s.W(),a=r.lastValueVisible,c=s.bh()!=="",o=r.seriesLastValueMode===0,u=s.Zr(!1);if(u.Xr)return;a&&(e.Kt=this.wh(u,a,o),e.yt=e.Kt.length!==0),(c||o)&&(i.Kt=this.gh(u,a,c,o),i.yt=i.Kt.length>0);const h=s.mh(u.V),d=Sl(h);n.t=d.t,n.ki=u.ki,i.Ot=s.$t().Bt(u.ki/s.Dt().At()),e.Ot=h,e.V=d.i,i.V=d.i}gh(e,i,n,s){let r="";const a=this.jt.bh();return n&&a.length!==0&&(r+=`${a} `),i&&s&&(r+=this.jt.Dt().Mh()?e.xh:e.Sh),r.trim()}wh(e,i,n){return i?n?this.jt.Dt().Mh()?e.Sh:e.xh:e.Kt:""}}function Yh(t,e,i,n){const s=Number.isFinite(e),r=Number.isFinite(i);return s&&r?t(e,i):s||r?s?e:i:n}class qe{constructor(e,i){this.kh=e,this.yh=i}Ch(e){return e!==null&&this.kh===e.kh&&this.yh===e.yh}Th(){return new qe(this.kh,this.yh)}Ph(){return this.kh}Rh(){return this.yh}Dh(){return this.yh-this.kh}Ni(){return this.yh===this.kh||Number.isNaN(this.yh)||Number.isNaN(this.kh)}ts(e){return e===null?this:new qe(Yh(Math.min,this.Ph(),e.Ph(),-1/0),Yh(Math.max,this.Rh(),e.Rh(),1/0))}Vh(e){if(!kt(e)||this.yh-this.kh===0)return;const i=.5*(this.yh+this.kh);let n=this.yh-i,s=this.kh-i;n*=e,s*=e,this.yh=i+n,this.kh=i+s}Oh(e){kt(e)&&(this.yh+=e,this.kh+=e)}Bh(){return{minValue:this.kh,maxValue:this.yh}}static Ah(e){return e===null?null:new qe(e.minValue,e.maxValue)}}class nl{constructor(e,i){this.Ih=e,this.zh=i||null}Lh(){return this.Ih}Eh(){return this.zh}Bh(){return this.Ih===null?null:{priceRange:this.Ih.Bh(),margins:this.zh||void 0}}static Ah(e){return e===null?null:new nl(qe.Ah(e.priceRange),e.margins)}}class Gy extends Qc{constructor(e,i){super(e),this.Nh=i}yr(){const e=this.Sr;e.yt=!1;const i=this.Nh.W();if(!this.Es.yt()||!i.lineVisible)return;const n=this.Nh.Fh();n!==null&&(e.yt=!0,e.st=n,e.V=i.color,e.et=i.lineWidth,e.Nt=i.lineStyle,e.gr=this.Nh.W().id)}}class Jy extends Cl{constructor(e,i){super(),this.jr=e,this.Nh=i}zi(e,i,n){e.yt=!1,i.yt=!1;const s=this.Nh.W(),r=s.axisLabelVisible,a=s.title!=="",c=this.jr;if(!r||!c.yt())return;const o=this.Nh.Fh();if(o===null)return;a&&(i.Kt=s.title,i.yt=!0),i.Ot=c.$t().Bt(o/c.Dt().At()),e.Kt=this.Wh(s.price),e.yt=!0;const u=Sl(s.axisLabelColor||s.color);n.t=u.t;const h=s.axisLabelTextColor||u.i;e.V=h,i.V=h,n.ki=o}Wh(e){const i=this.jr.Ct();return i===null?"":this.jr.Dt().Fi(e,i.Vt)}}class Zy{constructor(e,i){this.jr=e,this.cn=i,this.jh=new Gy(e,this),this.ur=new Jy(e,this),this.Hh=new $m(this.ur,e,e.$t())}$h(e){gt(this.cn,e),this.bt(),this.jr.$t().Uh()}W(){return this.cn}qh(){return this.jh}Yh(){return this.Hh}Zh(){return this.ur}bt(){this.jh.bt(),this.ur.bt()}Fh(){const e=this.jr,i=e.Dt();if(e.$t().St().Ni()||i.Ni())return null;const n=e.Ct();return n===null?null:i.Rt(this.cn.price,n.Vt)}}class e2 extends qc{constructor(e){super(),this.$i=e}$t(){return this.$i}}const t2={Bar:(t,e,i,n)=>{var s;const r=e.upColor,a=e.downColor,c=E(t(i,n)),o=tn(c.Vt[0])<=tn(c.Vt[3]);return{ce:(s=c.V)!==null&&s!==void 0?s:o?r:a}},Candlestick:(t,e,i,n)=>{var s,r,a;const c=e.upColor,o=e.downColor,u=e.borderUpColor,h=e.borderDownColor,d=e.wickUpColor,f=e.wickDownColor,p=E(t(i,n)),m=tn(p.Vt[0])<=tn(p.Vt[3]);return{ce:(s=p.V)!==null&&s!==void 0?s:m?c:o,Ne:(r=p.Ot)!==null&&r!==void 0?r:m?u:h,Ee:(a=p.Xh)!==null&&a!==void 0?a:m?d:f}},Custom:(t,e,i,n)=>{var s;return{ce:(s=E(t(i,n)).V)!==null&&s!==void 0?s:e.color}},Area:(t,e,i,n)=>{var s,r,a,c;const o=E(t(i,n));return{ce:(s=o.lt)!==null&&s!==void 0?s:e.lineColor,lt:(r=o.lt)!==null&&r!==void 0?r:e.lineColor,Ps:(a=o.Ps)!==null&&a!==void 0?a:e.topColor,Rs:(c=o.Rs)!==null&&c!==void 0?c:e.bottomColor}},Baseline:(t,e,i,n)=>{var s,r,a,c,o,u;const h=E(t(i,n));return{ce:h.Vt[3]>=e.baseValue.price?e.topLineColor:e.bottomLineColor,Re:(s=h.Re)!==null&&s!==void 0?s:e.topLineColor,De:(r=h.De)!==null&&r!==void 0?r:e.bottomLineColor,ke:(a=h.ke)!==null&&a!==void 0?a:e.topFillColor1,ye:(c=h.ye)!==null&&c!==void 0?c:e.topFillColor2,Ce:(o=h.Ce)!==null&&o!==void 0?o:e.bottomFillColor1,Te:(u=h.Te)!==null&&u!==void 0?u:e.bottomFillColor2}},Line:(t,e,i,n)=>{var s,r;const a=E(t(i,n));return{ce:(s=a.V)!==null&&s!==void 0?s:e.color,lt:(r=a.V)!==null&&r!==void 0?r:e.color}},Histogram:(t,e,i,n)=>{var s;return{ce:(s=E(t(i,n)).V)!==null&&s!==void 0?s:e.color}}};class i2{constructor(e){this.Kh=(i,n)=>n!==void 0?n.Vt:this.jr.In().Gh(i),this.jr=e,this.Jh=t2[e.Qh()]}$s(e,i){return this.Jh(this.Kh,this.jr.W(),e,i)}}var Gh;(function(t){t[t.NearestLeft=-1]="NearestLeft",t[t.None=0]="None",t[t.NearestRight=1]="NearestRight"})(Gh||(Gh={}));const Ot=30;class n2{constructor(){this.tl=[],this.il=new Map,this.nl=new Map}sl(){return this.Ks()>0?this.tl[this.tl.length-1]:null}el(){return this.Ks()>0?this.rl(0):null}An(){return this.Ks()>0?this.rl(this.tl.length-1):null}Ks(){return this.tl.length}Ni(){return this.Ks()===0}Kr(e){return this.hl(e,0)!==null}Gh(e){return this.ll(e)}ll(e,i=0){const n=this.hl(e,i);return n===null?null:Object.assign(Object.assign({},this.al(n)),{ee:this.rl(n)})}ne(){return this.tl}ol(e,i,n){if(this.Ni())return null;let s=null;for(const r of n)s=sr(s,this._l(e,i,r));return s}J(e){this.nl.clear(),this.il.clear(),this.tl=e}rl(e){return this.tl[e].ee}al(e){return this.tl[e]}hl(e,i){const n=this.ul(e);if(n===null&&i!==0)switch(i){case-1:return this.cl(e);case 1:return this.dl(e);default:throw new TypeError("Unknown search mode")}return n}cl(e){let i=this.fl(e);return i>0&&(i-=1),i!==this.tl.length&&this.rl(i)<e?i:null}dl(e){const i=this.vl(e);return i!==this.tl.length&&e<this.rl(i)?i:null}ul(e){const i=this.fl(e);return i===this.tl.length||e<this.tl[i].ee?null:i}fl(e){return $s(this.tl,e,(i,n)=>i.ee<n)}vl(e){return Pm(this.tl,e,(i,n)=>i.ee>n)}pl(e,i,n){let s=null;for(let r=e;r<i;r++){const a=this.tl[r].Vt[n];Number.isNaN(a)||(s===null?s={ml:a,bl:a}:(a<s.ml&&(s.ml=a),a>s.bl&&(s.bl=a)))}return s}_l(e,i,n){if(this.Ni())return null;let s=null;const r=E(this.el()),a=E(this.An()),c=Math.max(e,r),o=Math.min(i,a),u=Math.ceil(c/Ot)*Ot,h=Math.max(u,Math.floor(o/Ot)*Ot);{const f=this.fl(c),p=this.vl(Math.min(o,u,i));s=sr(s,this.pl(f,p,n))}let d=this.il.get(n);d===void 0&&(d=new Map,this.il.set(n,d));for(let f=Math.max(u+1,c);f<h;f+=Ot){const p=Math.floor(f/Ot);let m=d.get(p);if(m===void 0){const x=this.fl(p*Ot),b=this.vl((p+1)*Ot-1);m=this.pl(x,b,n),d.set(p,m)}s=sr(s,m)}{const f=this.fl(h),p=this.vl(o);s=sr(s,this.pl(f,p,n))}return s}}function sr(t,e){return t===null?e:e===null?t:{ml:Math.min(t.ml,e.ml),bl:Math.max(t.bl,e.bl)}}class s2{constructor(e){this.wl=e}X(e,i,n){this.wl.draw(e)}gl(e,i,n){var s,r;(r=(s=this.wl).drawBackground)===null||r===void 0||r.call(s,e)}}class ua{constructor(e){this.tr=null,this.wn=e}gt(){var e;const i=this.wn.renderer();if(i===null)return null;if(((e=this.tr)===null||e===void 0?void 0:e.Ml)===i)return this.tr.xl;const n=new s2(i);return this.tr={Ml:i,xl:n},n}Sl(){var e,i,n;return(n=(i=(e=this.wn).zOrder)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:"normal"}}function Am(t){var e,i,n,s,r;return{Kt:t.text(),ki:t.coordinate(),Si:(e=t.fixedCoordinate)===null||e===void 0?void 0:e.call(t),V:t.textColor(),t:t.backColor(),yt:(n=(i=t.visible)===null||i===void 0?void 0:i.call(t))===null||n===void 0||n,hi:(r=(s=t.tickVisible)===null||s===void 0?void 0:s.call(t))===null||r===void 0||r}}class r2{constructor(e,i){this.Wt=new Sm,this.kl=e,this.yl=i}gt(){return this.Wt.J(Object.assign({Hi:this.yl.Hi()},Am(this.kl))),this.Wt}}class l2 extends Cl{constructor(e,i){super(),this.kl=e,this.Li=i}zi(e,i,n){const s=Am(this.kl);n.t=s.t,e.V=s.V;const r=2/12*this.Li.P();n.wi=r,n.gi=r,n.ki=s.ki,n.Si=s.Si,e.Kt=s.Kt,e.yt=s.yt,e.hi=s.hi}}class a2{constructor(e,i){this.Cl=null,this.Tl=null,this.Pl=null,this.Rl=null,this.Dl=null,this.Vl=e,this.jr=i}Ol(){return this.Vl}Vn(){var e,i;(i=(e=this.Vl).updateAllViews)===null||i===void 0||i.call(e)}Pn(){var e,i,n,s;const r=(n=(i=(e=this.Vl).paneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Cl)===null||s===void 0?void 0:s.Ml)===r)return this.Cl.xl;const a=r.map(c=>new ua(c));return this.Cl={Ml:r,xl:a},a}Qi(){var e,i,n,s;const r=(n=(i=(e=this.Vl).timeAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Tl)===null||s===void 0?void 0:s.Ml)===r)return this.Tl.xl;const a=this.jr.$t().St(),c=r.map(o=>new r2(o,a));return this.Tl={Ml:r,xl:c},c}Rn(){var e,i,n,s;const r=(n=(i=(e=this.Vl).priceAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Pl)===null||s===void 0?void 0:s.Ml)===r)return this.Pl.xl;const a=this.jr.Dt(),c=r.map(o=>new l2(o,a));return this.Pl={Ml:r,xl:c},c}Bl(){var e,i,n,s;const r=(n=(i=(e=this.Vl).priceAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Rl)===null||s===void 0?void 0:s.Ml)===r)return this.Rl.xl;const a=r.map(c=>new ua(c));return this.Rl={Ml:r,xl:a},a}Al(){var e,i,n,s;const r=(n=(i=(e=this.Vl).timeAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Dl)===null||s===void 0?void 0:s.Ml)===r)return this.Dl.xl;const a=r.map(c=>new ua(c));return this.Dl={Ml:r,xl:a},a}Il(e,i){var n,s,r;return(r=(s=(n=this.Vl).autoscaleInfo)===null||s===void 0?void 0:s.call(n,e,i))!==null&&r!==void 0?r:null}wr(e,i){var n,s,r;return(r=(s=(n=this.Vl).hitTest)===null||s===void 0?void 0:s.call(n,e,i))!==null&&r!==void 0?r:null}}function ha(t,e,i,n){t.forEach(s=>{e(s).forEach(r=>{r.Sl()===i&&n.push(r)})})}function da(t){return t.Pn()}function o2(t){return t.Bl()}function c2(t){return t.Al()}class Yc extends e2{constructor(e,i,n,s,r){super(e),this.zt=new n2,this.jh=new Qy(this),this.zl=[],this.Ll=new Iy(this),this.El=null,this.Nl=null,this.Fl=[],this.Wl=[],this.jl=null,this.Hl=[],this.cn=i,this.$l=n;const a=new Yy(this);this.rn=[a],this.Hh=new $m(a,this,e),n!=="Area"&&n!=="Line"&&n!=="Baseline"||(this.El=new Vy(this)),this.Ul(),this.ql(r)}S(){this.jl!==null&&clearTimeout(this.jl)}mh(e){return this.cn.priceLineColor||e}Zr(e){const i={Xr:!0},n=this.Dt();if(this.$t().St().Ni()||n.Ni()||this.zt.Ni())return i;const s=this.$t().St().Xs(),r=this.Ct();if(s===null||r===null)return i;let a,c;if(e){const d=this.zt.sl();if(d===null)return i;a=d,c=d.ee}else{const d=this.zt.ll(s.ui(),-1);if(d===null||(a=this.zt.Gh(d.ee),a===null))return i;c=d.ee}const o=a.Vt[3],u=this.Us().$s(c,{Vt:a}),h=n.Rt(o,r.Vt);return{Xr:!1,_t:o,Kt:n.Fi(o,r.Vt),xh:n.Yl(o),Sh:n.Zl(o,r.Vt),V:u.ce,ki:h,ee:c}}Us(){return this.Nl!==null||(this.Nl=new i2(this)),this.Nl}W(){return this.cn}$h(e){const i=e.priceScaleId;i!==void 0&&i!==this.cn.priceScaleId&&this.$t().Xl(this,i),gt(this.cn,e),e.priceFormat!==void 0&&(this.Ul(),this.$t().Kl()),this.$t().Gl(this),this.$t().Jl(),this.wn.bt("options")}J(e,i){this.zt.J(e),this.Ql(),this.wn.bt("data"),this.dn.bt("data"),this.El!==null&&(i&&i.ta?this.El.$r():e.length===0&&this.El.Hr());const n=this.$t().dr(this);this.$t().ia(n),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}na(e){this.Fl=e,this.Ql();const i=this.$t().dr(this);this.dn.bt("data"),this.$t().ia(i),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}sa(){return this.Fl}dh(){return this.Wl}ea(e){const i=new Zy(this,e);return this.zl.push(i),this.$t().Gl(this),i}ra(e){const i=this.zl.indexOf(e);i!==-1&&this.zl.splice(i,1),this.$t().Gl(this)}Qh(){return this.$l}Ct(){const e=this.ha();return e===null?null:{Vt:e.Vt[3],la:e.ot}}ha(){const e=this.$t().St().Xs();if(e===null)return null;const i=e.Os();return this.zt.ll(i,1)}In(){return this.zt}ph(e){const i=this.zt.Gh(e);return i===null?null:this.$l==="Bar"||this.$l==="Candlestick"||this.$l==="Custom"?{ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3]}:i.Vt[3]}aa(e){const i=[];ha(this.Hl,da,"top",i);const n=this.El;return n!==null&&n.yt()&&(this.jl===null&&n.qr()&&(this.jl=setTimeout(()=>{this.jl=null,this.$t().oa()},0)),n.Ur(),i.unshift(n)),i}Pn(){const e=[];this._a()||e.push(this.Ll),e.push(this.wn,this.jh,this.dn);const i=this.zl.map(n=>n.qh());return e.push(...i),ha(this.Hl,da,"normal",e),e}ua(){return this.ca(da,"bottom")}da(e){return this.ca(o2,e)}fa(e){return this.ca(c2,e)}va(e,i){return this.Hl.map(n=>n.wr(e,i)).filter(n=>n!==null)}Ji(e){return[this.Hh,...this.zl.map(i=>i.Yh())]}Rn(e,i){if(i!==this.Yi&&!this._a())return[];const n=[...this.rn];for(const s of this.zl)n.push(s.Zh());return this.Hl.forEach(s=>{n.push(...s.Rn())}),n}Qi(){const e=[];return this.Hl.forEach(i=>{e.push(...i.Qi())}),e}Il(e,i){if(this.cn.autoscaleInfoProvider!==void 0){const n=this.cn.autoscaleInfoProvider(()=>{const s=this.pa(e,i);return s===null?null:s.Bh()});return nl.Ah(n)}return this.pa(e,i)}ma(){return this.cn.priceFormat.minMove}ba(){return this.wa}Vn(){var e;this.wn.bt(),this.dn.bt();for(const i of this.rn)i.bt();for(const i of this.zl)i.bt();this.jh.bt(),this.Ll.bt(),(e=this.El)===null||e===void 0||e.bt(),this.Hl.forEach(i=>i.Vn())}Dt(){return E(super.Dt())}kt(e){if(!((this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline")&&this.cn.crosshairMarkerVisible))return null;const i=this.zt.Gh(e);return i===null?null:{_t:i.Vt[3],ht:this.ga(),Ot:this.Ma(),Pt:this.xa(),Tt:this.Sa(e)}}bh(){return this.cn.title}yt(){return this.cn.visible}ka(e){this.Hl.push(new a2(e,this))}ya(e){this.Hl=this.Hl.filter(i=>i.Ol()!==e)}Ca(){if(this.wn instanceof ca)return e=>this.wn.We(e)}Ta(){if(this.wn instanceof ca)return e=>this.wn.je(e)}_a(){return!El(this.Dt().Pa())}pa(e,i){if(!ks(e)||!ks(i)||this.zt.Ni())return null;const n=this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline"||this.$l==="Histogram"?[3]:[2,1],s=this.zt.ol(e,i,n);let r=s!==null?new qe(s.ml,s.bl):null;if(this.Qh()==="Histogram"){const c=this.cn.base,o=new qe(c,c);r=r!==null?r.ts(o):o}let a=this.dn.uh();return this.Hl.forEach(c=>{const o=c.Il(e,i);if(o!=null&&o.priceRange){const p=new qe(o.priceRange.minValue,o.priceRange.maxValue);r=r!==null?r.ts(p):p}var u,h,d,f;o!=null&&o.margins&&(u=a,h=o.margins,a={above:Math.max((d=u==null?void 0:u.above)!==null&&d!==void 0?d:0,h.above),below:Math.max((f=u==null?void 0:u.below)!==null&&f!==void 0?f:0,h.below)})}),new nl(r,a)}ga(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerRadius}return 0}Ma(){switch(this.$l){case"Line":case"Area":case"Baseline":{const e=this.cn.crosshairMarkerBorderColor;if(e.length!==0)return e}}return null}xa(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerBorderWidth}return 0}Sa(e){switch(this.$l){case"Line":case"Area":case"Baseline":{const i=this.cn.crosshairMarkerBackgroundColor;if(i.length!==0)return i}}return this.Us().$s(e).ce}Ul(){switch(this.cn.priceFormat.type){case"custom":this.wa={format:this.cn.priceFormat.formatter};break;case"volume":this.wa=new gy(this.cn.priceFormat.precision);break;case"percent":this.wa=new Nm(this.cn.priceFormat.precision);break;default:{const e=Math.pow(10,this.cn.priceFormat.precision);this.wa=new zl(e,this.cn.priceFormat.minMove*e)}}this.Yi!==null&&this.Yi.Ra()}Ql(){const e=this.$t().St();if(!e.Da()||this.zt.Ni())return void(this.Wl=[]);const i=E(this.zt.el());this.Wl=this.Fl.map((n,s)=>{const r=E(e.Va(n.time,!0)),a=r<i?1:-1;return{time:E(this.zt.ll(r,a)).ee,position:n.position,shape:n.shape,color:n.color,id:n.id,th:s,text:n.text,size:n.size,originalTime:n.originalTime}})}ql(e){switch(this.dn=new Xy(this,this.$t()),this.$l){case"Bar":this.wn=new Ny(this,this.$t());break;case"Candlestick":this.wn=new _y(this,this.$t());break;case"Line":this.wn=new $y(this,this.$t());break;case"Custom":this.wn=new ca(this,this.$t(),Ae(e));break;case"Area":this.wn=new jy(this,this.$t());break;case"Baseline":this.wn=new zy(this,this.$t());break;case"Histogram":this.wn=new Ry(this,this.$t());break;default:throw Error("Unknown chart style assigned: "+this.$l)}}ca(e,i){const n=[];return ha(this.Hl,e,i,n),n}}class u2{constructor(e){this.cn=e}Oa(e,i,n){let s=e;if(this.cn.mode===0)return s;const r=n.vn(),a=r.Ct();if(a===null)return s;const c=r.Rt(e,a),o=n.Ba().filter(h=>h instanceof Yc).reduce((h,d)=>{if(n.vr(d)||!d.yt())return h;const f=d.Dt(),p=d.In();if(f.Ni()||!p.Kr(i))return h;const m=p.Gh(i);if(m===null)return h;const x=tn(d.Ct());return h.concat([f.Rt(m.Vt[3],x.Vt)])},[]);if(o.length===0)return s;o.sort((h,d)=>Math.abs(h-c)-Math.abs(d-c));const u=o[0];return s=r.pn(u,a),s}}class h2 extends vt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.zt===null)return;const r=Math.max(1,Math.floor(n));e.lineWidth=r,function(a,c){a.save(),a.lineWidth%2&&a.translate(.5,.5),c(),a.restore()}(e,()=>{const a=E(this.zt);if(a.Aa){e.strokeStyle=a.Ia,Ri(e,a.za),e.beginPath();for(const c of a.La){const o=Math.round(c.Ea*n);e.moveTo(o,-r),e.lineTo(o,i.height+r)}e.stroke()}if(a.Na){e.strokeStyle=a.Fa,Ri(e,a.Wa),e.beginPath();for(const c of a.ja){const o=Math.round(c.Ea*s);e.moveTo(-r,o),e.lineTo(i.width+r,o)}e.stroke()}})}}class d2{constructor(e){this.Wt=new h2,this.ft=!0,this.tn=e}bt(){this.ft=!0}gt(){if(this.ft){const e=this.tn.$t().W().grid,i={Na:e.horzLines.visible,Aa:e.vertLines.visible,Fa:e.horzLines.color,Ia:e.vertLines.color,Wa:e.horzLines.style,za:e.vertLines.style,ja:this.tn.vn().Ha(),La:(this.tn.$t().St().Ha()||[]).map(n=>({Ea:n.coord}))};this.Wt.J(i),this.ft=!1}return this.Wt}}class f2{constructor(e){this.wn=new d2(e)}qh(){return this.wn}}const fa={$a:4,Ua:1e-4};function nn(t,e){const i=100*(t-e)/e;return e<0?-i:i}function p2(t,e){const i=nn(t.Ph(),e),n=nn(t.Rh(),e);return new qe(i,n)}function Jn(t,e){const i=100*(t-e)/e+100;return e<0?-i:i}function m2(t,e){const i=Jn(t.Ph(),e),n=Jn(t.Rh(),e);return new qe(i,n)}function sl(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.log10(i+e.Ua)+e.$a;return t<0?-n:n}function Zn(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.pow(10,i-e.$a)-e.Ua;return t<0?-n:n}function Dn(t,e){if(t===null)return null;const i=sl(t.Ph(),e),n=sl(t.Rh(),e);return new qe(i,n)}function rr(t,e){if(t===null)return null;const i=Zn(t.Ph(),e),n=Zn(t.Rh(),e);return new qe(i,n)}function pa(t){if(t===null)return fa;const e=Math.abs(t.Rh()-t.Ph());if(e>=1||e<1e-15)return fa;const i=Math.ceil(Math.abs(Math.log10(e))),n=fa.$a+i;return{$a:n,Ua:1/Math.pow(10,n)}}class ma{constructor(e,i){if(this.qa=e,this.Ya=i,function(n){if(n<0)return!1;for(let s=n;s>1;s/=10)if(s%10!=0)return!1;return!0}(this.qa))this.Za=[2,2.5,2];else{this.Za=[];for(let n=this.qa;n!==1;){if(n%2==0)this.Za.push(2),n/=2;else{if(n%5!=0)throw new Error("unexpected base");this.Za.push(2,2.5),n/=5}if(this.Za.length>100)throw new Error("something wrong with base")}}}Xa(e,i,n){const s=this.qa===0?0:1/this.qa;let r=Math.pow(10,Math.max(0,Math.ceil(Math.log10(e-i)))),a=0,c=this.Ya[0];for(;;){const d=nr(r,s,1e-14)&&r>s+1e-14,f=nr(r,n*c,1e-14),p=nr(r,1,1e-14);if(!(d&&f&&p))break;r/=c,c=this.Ya[++a%this.Ya.length]}if(r<=s+1e-14&&(r=s),r=Math.max(1,r),this.Za.length>0&&(o=r,u=1,h=1e-14,Math.abs(o-u)<h))for(a=0,c=this.Za[0];nr(r,n*c,1e-14)&&r>s+1e-14;)r/=c,c=this.Za[++a%this.Za.length];var o,u,h;return r}}class Jh{constructor(e,i,n,s){this.Ka=[],this.Li=e,this.qa=i,this.Ga=n,this.Ja=s}Xa(e,i){if(e<i)throw new Error("high < low");const n=this.Li.At(),s=(e-i)*this.Qa()/n,r=new ma(this.qa,[2,2.5,2]),a=new ma(this.qa,[2,2,2.5]),c=new ma(this.qa,[2.5,2,2]),o=[];return o.push(r.Xa(e,i,s),a.Xa(e,i,s),c.Xa(e,i,s)),function(u){if(u.length<1)throw Error("array is empty");let h=u[0];for(let d=1;d<u.length;++d)u[d]<h&&(h=u[d]);return h}(o)}io(){const e=this.Li,i=e.Ct();if(i===null)return void(this.Ka=[]);const n=e.At(),s=this.Ga(n-1,i),r=this.Ga(0,i),a=this.Li.W().entireTextOnly?this.no()/2:0,c=a,o=n-1-a,u=Math.max(s,r),h=Math.min(s,r);if(u===h)return void(this.Ka=[]);let d=this.Xa(u,h),f=u%d;f+=f<0?d:0;const p=u>=h?1:-1;let m=null,x=0;for(let b=u-f;b>h;b-=d){const g=this.Ja(b,i,!0);m!==null&&Math.abs(g-m)<this.Qa()||g<c||g>o||(x<this.Ka.length?(this.Ka[x].Ea=g,this.Ka[x].so=e.eo(b)):this.Ka.push({Ea:g,so:e.eo(b)}),x++,m=g,e.ro()&&(d=this.Xa(b*p,h)))}this.Ka.length=x}Ha(){return this.Ka}no(){return this.Li.P()}Qa(){return Math.ceil(2.5*this.no())}}function Im(t){return t.slice().sort((e,i)=>E(e.Xi())-E(i.Xi()))}var Zh;(function(t){t[t.Normal=0]="Normal",t[t.Logarithmic=1]="Logarithmic",t[t.Percentage=2]="Percentage",t[t.IndexedTo100=3]="IndexedTo100"})(Zh||(Zh={}));const ed=new Nm,td=new zl(100,1);class g2{constructor(e,i,n,s){this.ho=0,this.lo=null,this.Ih=null,this.ao=null,this.oo={_o:!1,uo:null},this.co=0,this.do=0,this.fo=new me,this.vo=new me,this.po=[],this.mo=null,this.bo=null,this.wo=null,this.Mo=null,this.wa=td,this.xo=pa(null),this.So=e,this.cn=i,this.ko=n,this.yo=s,this.Co=new Jh(this,100,this.To.bind(this),this.Po.bind(this))}Pa(){return this.So}W(){return this.cn}$h(e){if(gt(this.cn,e),this.Ra(),e.mode!==void 0&&this.Ro({Cr:e.mode}),e.scaleMargins!==void 0){const i=Ae(e.scaleMargins.top),n=Ae(e.scaleMargins.bottom);if(i<0||i>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);if(n<0||n>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);if(i+n>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i+n}`);this.Do(),this.bo=null}}Vo(){return this.cn.autoScale}ro(){return this.cn.mode===1}Mh(){return this.cn.mode===2}Oo(){return this.cn.mode===3}Cr(){return{Wn:this.cn.autoScale,Bo:this.cn.invertScale,Cr:this.cn.mode}}Ro(e){const i=this.Cr();let n=null;e.Wn!==void 0&&(this.cn.autoScale=e.Wn),e.Cr!==void 0&&(this.cn.mode=e.Cr,e.Cr!==2&&e.Cr!==3||(this.cn.autoScale=!0),this.oo._o=!1),i.Cr===1&&e.Cr!==i.Cr&&(function(r,a){if(r===null)return!1;const c=Zn(r.Ph(),a),o=Zn(r.Rh(),a);return isFinite(c)&&isFinite(o)}(this.Ih,this.xo)?(n=rr(this.Ih,this.xo),n!==null&&this.Ao(n)):this.cn.autoScale=!0),e.Cr===1&&e.Cr!==i.Cr&&(n=Dn(this.Ih,this.xo),n!==null&&this.Ao(n));const s=i.Cr!==this.cn.mode;s&&(i.Cr===2||this.Mh())&&this.Ra(),s&&(i.Cr===3||this.Oo())&&this.Ra(),e.Bo!==void 0&&i.Bo!==e.Bo&&(this.cn.invertScale=e.Bo,this.Io()),this.vo.m(i,this.Cr())}zo(){return this.vo}P(){return this.ko.fontSize}At(){return this.ho}Lo(e){this.ho!==e&&(this.ho=e,this.Do(),this.bo=null)}Eo(){if(this.lo)return this.lo;const e=this.At()-this.No()-this.Fo();return this.lo=e,e}Lh(){return this.Wo(),this.Ih}Ao(e,i){const n=this.Ih;(i||n===null&&e!==null||n!==null&&!n.Ch(e))&&(this.bo=null,this.Ih=e)}Ni(){return this.Wo(),this.ho===0||!this.Ih||this.Ih.Ni()}jo(e){return this.Bo()?e:this.At()-1-e}Rt(e,i){return this.Mh()?e=nn(e,i):this.Oo()&&(e=Jn(e,i)),this.Po(e,i)}te(e,i,n){this.Wo();const s=this.Fo(),r=E(this.Lh()),a=r.Ph(),c=r.Rh(),o=this.Eo()-1,u=this.Bo(),h=o/(c-a),d=n===void 0?0:n.from,f=n===void 0?e.length:n.to,p=this.Ho();for(let m=d;m<f;m++){const x=e[m],b=x._t;if(isNaN(b))continue;let g=b;p!==null&&(g=p(x._t,i));const v=s+h*(g-a),y=u?v:this.ho-1-v;x.st=y}}be(e,i,n){this.Wo();const s=this.Fo(),r=E(this.Lh()),a=r.Ph(),c=r.Rh(),o=this.Eo()-1,u=this.Bo(),h=o/(c-a),d=n===void 0?0:n.from,f=n===void 0?e.length:n.to,p=this.Ho();for(let m=d;m<f;m++){const x=e[m];let b=x.ge,g=x.Me,v=x.xe,y=x.Se;p!==null&&(b=p(x.ge,i),g=p(x.Me,i),v=p(x.xe,i),y=p(x.Se,i));let k=s+h*(b-a),N=u?k:this.ho-1-k;x.pe=N,k=s+h*(g-a),N=u?k:this.ho-1-k,x.de=N,k=s+h*(v-a),N=u?k:this.ho-1-k,x.fe=N,k=s+h*(y-a),N=u?k:this.ho-1-k,x.me=N}}pn(e,i){const n=this.To(e,i);return this.$o(n,i)}$o(e,i){let n=e;return this.Mh()?n=function(s,r){return r<0&&(s=-s),s/100*r+r}(n,i):this.Oo()&&(n=function(s,r){return s-=100,r<0&&(s=-s),s/100*r+r}(n,i)),n}Ba(){return this.po}Uo(){if(this.mo)return this.mo;let e=[];for(let i=0;i<this.po.length;i++){const n=this.po[i];n.Xi()===null&&n.Ki(i+1),e.push(n)}return e=Im(e),this.mo=e,this.mo}qo(e){this.po.indexOf(e)===-1&&(this.po.push(e),this.Ra(),this.Yo())}Zo(e){const i=this.po.indexOf(e);if(i===-1)throw new Error("source is not attached to scale");this.po.splice(i,1),this.po.length===0&&(this.Ro({Wn:!0}),this.Ao(null)),this.Ra(),this.Yo()}Ct(){let e=null;for(const i of this.po){const n=i.Ct();n!==null&&(e===null||n.la<e.la)&&(e=n)}return e===null?null:e.Vt}Bo(){return this.cn.invertScale}Ha(){const e=this.Ct()===null;if(this.bo!==null&&(e||this.bo.Xo===e))return this.bo.Ha;this.Co.io();const i=this.Co.Ha();return this.bo={Ha:i,Xo:e},this.fo.m(),i}Ko(){return this.fo}Go(e){this.Mh()||this.Oo()||this.wo===null&&this.ao===null&&(this.Ni()||(this.wo=this.ho-e,this.ao=E(this.Lh()).Th()))}Jo(e){if(this.Mh()||this.Oo()||this.wo===null)return;this.Ro({Wn:!1}),(e=this.ho-e)<0&&(e=0);let i=(this.wo+.2*(this.ho-1))/(e+.2*(this.ho-1));const n=E(this.ao).Th();i=Math.max(i,.1),n.Vh(i),this.Ao(n)}Qo(){this.Mh()||this.Oo()||(this.wo=null,this.ao=null)}t_(e){this.Vo()||this.Mo===null&&this.ao===null&&(this.Ni()||(this.Mo=e,this.ao=E(this.Lh()).Th()))}i_(e){if(this.Vo()||this.Mo===null)return;const i=E(this.Lh()).Dh()/(this.Eo()-1);let n=e-this.Mo;this.Bo()&&(n*=-1);const s=n*i,r=E(this.ao).Th();r.Oh(s),this.Ao(r,!0),this.bo=null}n_(){this.Vo()||this.Mo!==null&&(this.Mo=null,this.ao=null)}ba(){return this.wa||this.Ra(),this.wa}Fi(e,i){switch(this.cn.mode){case 2:return this.s_(nn(e,i));case 3:return this.ba().format(Jn(e,i));default:return this.Wh(e)}}eo(e){switch(this.cn.mode){case 2:return this.s_(e);case 3:return this.ba().format(e);default:return this.Wh(e)}}Yl(e){return this.Wh(e,E(this.e_()).ba())}Zl(e,i){return e=nn(e,i),this.s_(e,ed)}r_(){return this.po}h_(e){this.oo={uo:e,_o:!1}}Vn(){this.po.forEach(e=>e.Vn())}Ra(){this.bo=null;const e=this.e_();let i=100;e!==null&&(i=Math.round(1/e.ma())),this.wa=td,this.Mh()?(this.wa=ed,i=100):this.Oo()?(this.wa=new zl(100,1),i=100):e!==null&&(this.wa=e.ba()),this.Co=new Jh(this,i,this.To.bind(this),this.Po.bind(this)),this.Co.io()}Yo(){this.mo=null}e_(){return this.po[0]||null}No(){return this.Bo()?this.cn.scaleMargins.bottom*this.At()+this.do:this.cn.scaleMargins.top*this.At()+this.co}Fo(){return this.Bo()?this.cn.scaleMargins.top*this.At()+this.co:this.cn.scaleMargins.bottom*this.At()+this.do}Wo(){this.oo._o||(this.oo._o=!0,this.l_())}Do(){this.lo=null}Po(e,i){if(this.Wo(),this.Ni())return 0;e=this.ro()&&e?sl(e,this.xo):e;const n=E(this.Lh()),s=this.Fo()+(this.Eo()-1)*(e-n.Ph())/n.Dh();return this.jo(s)}To(e,i){if(this.Wo(),this.Ni())return 0;const n=this.jo(e),s=E(this.Lh()),r=s.Ph()+s.Dh()*((n-this.Fo())/(this.Eo()-1));return this.ro()?Zn(r,this.xo):r}Io(){this.bo=null,this.Co.io()}l_(){const e=this.oo.uo;if(e===null)return;let i=null;const n=this.r_();let s=0,r=0;for(const o of n){if(!o.yt())continue;const u=o.Ct();if(u===null)continue;const h=o.Il(e.Os(),e.ui());let d=h&&h.Lh();if(d!==null){switch(this.cn.mode){case 1:d=Dn(d,this.xo);break;case 2:d=p2(d,u.Vt);break;case 3:d=m2(d,u.Vt)}if(i=i===null?d:i.ts(E(d)),h!==null){const f=h.Eh();f!==null&&(s=Math.max(s,f.above),r=Math.max(r,f.below))}}}if(s===this.co&&r===this.do||(this.co=s,this.do=r,this.bo=null,this.Do()),i!==null){if(i.Ph()===i.Rh()){const o=this.e_(),u=5*(o===null||this.Mh()||this.Oo()?1:o.ma());this.ro()&&(i=rr(i,this.xo)),i=new qe(i.Ph()-u,i.Rh()+u),this.ro()&&(i=Dn(i,this.xo))}if(this.ro()){const o=rr(i,this.xo),u=pa(o);if(a=u,c=this.xo,a.$a!==c.$a||a.Ua!==c.Ua){const h=this.ao!==null?rr(this.ao,this.xo):null;this.xo=u,i=Dn(o,u),h!==null&&(this.ao=Dn(h,u))}}this.Ao(i)}else this.Ih===null&&(this.Ao(new qe(-.5,.5)),this.xo=pa(null));var a,c;this.oo._o=!0}Ho(){return this.Mh()?nn:this.Oo()?Jn:this.ro()?e=>sl(e,this.xo):null}a_(e,i,n){return i===void 0?(n===void 0&&(n=this.ba()),n.format(e)):i(e)}Wh(e,i){return this.a_(e,this.yo.priceFormatter,i)}s_(e,i){return this.a_(e,this.yo.percentageFormatter,i)}}class v2{constructor(e,i){this.po=[],this.o_=new Map,this.ho=0,this.__=0,this.u_=1e3,this.mo=null,this.c_=new me,this.yl=e,this.$i=i,this.d_=new f2(this);const n=i.W();this.f_=this.v_("left",n.leftPriceScale),this.p_=this.v_("right",n.rightPriceScale),this.f_.zo().l(this.m_.bind(this,this.f_),this),this.p_.zo().l(this.m_.bind(this,this.p_),this),this.b_(n)}b_(e){if(e.leftPriceScale&&this.f_.$h(e.leftPriceScale),e.rightPriceScale&&this.p_.$h(e.rightPriceScale),e.localization&&(this.f_.Ra(),this.p_.Ra()),e.overlayPriceScales){const i=Array.from(this.o_.values());for(const n of i){const s=E(n[0].Dt());s.$h(e.overlayPriceScales),e.localization&&s.Ra()}}}w_(e){switch(e){case"left":return this.f_;case"right":return this.p_}return this.o_.has(e)?Ae(this.o_.get(e))[0].Dt():null}S(){this.$t().g_().p(this),this.f_.zo().p(this),this.p_.zo().p(this),this.po.forEach(e=>{e.S&&e.S()}),this.c_.m()}M_(){return this.u_}x_(e){this.u_=e}$t(){return this.$i}Hi(){return this.__}At(){return this.ho}S_(e){this.__=e,this.k_()}Lo(e){this.ho=e,this.f_.Lo(e),this.p_.Lo(e),this.po.forEach(i=>{if(this.vr(i)){const n=i.Dt();n!==null&&n.Lo(e)}}),this.k_()}Ba(){return this.po}vr(e){const i=e.Dt();return i===null||this.f_!==i&&this.p_!==i}qo(e,i,n){const s=n!==void 0?n:this.C_().y_+1;this.T_(e,i,s)}Zo(e){const i=this.po.indexOf(e);ai(i!==-1,"removeDataSource: invalid data source"),this.po.splice(i,1);const n=E(e.Dt()).Pa();if(this.o_.has(n)){const r=Ae(this.o_.get(n)),a=r.indexOf(e);a!==-1&&(r.splice(a,1),r.length===0&&this.o_.delete(n))}const s=e.Dt();s&&s.Ba().indexOf(e)>=0&&s.Zo(e),s!==null&&(s.Yo(),this.P_(s)),this.mo=null}mr(e){return e===this.f_?"left":e===this.p_?"right":"overlay"}R_(){return this.f_}D_(){return this.p_}V_(e,i){e.Go(i)}O_(e,i){e.Jo(i),this.k_()}B_(e){e.Qo()}A_(e,i){e.t_(i)}I_(e,i){e.i_(i),this.k_()}z_(e){e.n_()}k_(){this.po.forEach(e=>{e.Vn()})}vn(){let e=null;return this.$i.W().rightPriceScale.visible&&this.p_.Ba().length!==0?e=this.p_:this.$i.W().leftPriceScale.visible&&this.f_.Ba().length!==0?e=this.f_:this.po.length!==0&&(e=this.po[0].Dt()),e===null&&(e=this.p_),e}pr(){let e=null;return this.$i.W().rightPriceScale.visible?e=this.p_:this.$i.W().leftPriceScale.visible&&(e=this.f_),e}P_(e){e!==null&&e.Vo()&&this.L_(e)}E_(e){const i=this.yl.Xs();e.Ro({Wn:!0}),i!==null&&e.h_(i),this.k_()}N_(){this.L_(this.f_),this.L_(this.p_)}F_(){this.P_(this.f_),this.P_(this.p_),this.po.forEach(e=>{this.vr(e)&&this.P_(e.Dt())}),this.k_(),this.$i.Uh()}Uo(){return this.mo===null&&(this.mo=Im(this.po)),this.mo}W_(){return this.c_}j_(){return this.d_}L_(e){const i=e.r_();if(i&&i.length>0&&!this.yl.Ni()){const n=this.yl.Xs();n!==null&&e.h_(n)}e.Vn()}C_(){const e=this.Uo();if(e.length===0)return{H_:0,y_:0};let i=0,n=0;for(let s=0;s<e.length;s++){const r=e[s].Xi();r!==null&&(r<i&&(i=r),r>n&&(n=r))}return{H_:i,y_:n}}T_(e,i,n){let s=this.w_(i);if(s===null&&(s=this.v_(i,this.$i.W().overlayPriceScales)),this.po.push(e),!El(i)){const r=this.o_.get(i)||[];r.push(e),this.o_.set(i,r)}s.qo(e),e.Gi(s),e.Ki(n),this.P_(s),this.mo=null}m_(e,i,n){i.Cr!==n.Cr&&this.L_(e)}v_(e,i){const n=Object.assign({visible:!0,autoScale:!0},_t(i)),s=new g2(e,n,this.$i.W().layout,this.$i.W().localization);return s.Lo(this.At()),s}}class x2{constructor(e,i,n=50){this.Ke=0,this.Ge=1,this.Je=1,this.tr=new Map,this.Qe=new Map,this.U_=e,this.q_=i,this.ir=n}Y_(e){const i=e.time,n=this.q_.cacheKey(i),s=this.tr.get(n);if(s!==void 0)return s.Z_;if(this.Ke===this.ir){const a=this.Qe.get(this.Je);this.Qe.delete(this.Je),this.tr.delete(Ae(a)),this.Je++,this.Ke--}const r=this.U_(e);return this.tr.set(n,{Z_:r,rr:this.Ge}),this.Qe.set(this.Ge,n),this.Ke++,this.Ge++,r}}class es{constructor(e,i){ai(e<=i,"right should be >= left"),this.X_=e,this.K_=i}Os(){return this.X_}ui(){return this.K_}G_(){return this.K_-this.X_+1}Kr(e){return this.X_<=e&&e<=this.K_}Ch(e){return this.X_===e.Os()&&this.K_===e.ui()}}function id(t,e){return t===null||e===null?t===e:t.Ch(e)}class y2{constructor(){this.J_=new Map,this.tr=null,this.Q_=!1}tu(e){this.Q_=e,this.tr=null}iu(e,i){this.nu(i),this.tr=null;for(let n=i;n<e.length;++n){const s=e[n];let r=this.J_.get(s.timeWeight);r===void 0&&(r=[],this.J_.set(s.timeWeight,r)),r.push({index:n,time:s.time,weight:s.timeWeight,originalTime:s.originalTime})}}su(e,i){const n=Math.ceil(i/e);return this.tr!==null&&this.tr.eu===n||(this.tr={Ha:this.ru(n),eu:n}),this.tr.Ha}nu(e){if(e===0)return void this.J_.clear();const i=[];this.J_.forEach((n,s)=>{e<=n[0].index?i.push(s):n.splice($s(n,e,r=>r.index<e),1/0)});for(const n of i)this.J_.delete(n)}ru(e){let i=[];for(const n of Array.from(this.J_.keys()).sort((s,r)=>r-s)){if(!this.J_.get(n))continue;const s=i;i=[];const r=s.length;let a=0;const c=Ae(this.J_.get(n)),o=c.length;let u=1/0,h=-1/0;for(let d=0;d<o;d++){const f=c[d],p=f.index;for(;a<r;){const m=s[a],x=m.index;if(!(x<p)){u=x;break}a++,i.push(m),h=x,u=1/0}if(u-p>=e&&p-h>=e)i.push(f),h=p;else if(this.Q_)return s}for(;a<r;a++)i.push(s[a])}return i}}class un{constructor(e){this.hu=e}lu(){return this.hu===null?null:new es(Math.floor(this.hu.Os()),Math.ceil(this.hu.ui()))}au(){return this.hu}static ou(){return new un(null)}}function b2(t,e){return t.weight>e.weight?t:e}class w2{constructor(e,i,n,s){this.__=0,this._u=null,this.uu=[],this.Mo=null,this.wo=null,this.cu=new y2,this.du=new Map,this.fu=un.ou(),this.vu=!0,this.pu=new me,this.mu=new me,this.bu=new me,this.wu=null,this.gu=null,this.Mu=[],this.cn=i,this.yo=n,this.xu=i.rightOffset,this.Su=i.barSpacing,this.$i=e,this.q_=s,this.ku(),this.cu.tu(i.uniformDistribution)}W(){return this.cn}yu(e){gt(this.yo,e),this.Cu(),this.ku()}$h(e,i){var n;gt(this.cn,e),this.cn.fixLeftEdge&&this.Tu(),this.cn.fixRightEdge&&this.Pu(),e.barSpacing!==void 0&&this.$i.Gn(e.barSpacing),e.rightOffset!==void 0&&this.$i.Jn(e.rightOffset),e.minBarSpacing!==void 0&&this.$i.Gn((n=e.barSpacing)!==null&&n!==void 0?n:this.Su),this.Cu(),this.ku(),this.bu.m()}mn(e){var i,n;return(n=(i=this.uu[e])===null||i===void 0?void 0:i.time)!==null&&n!==void 0?n:null}Ui(e){var i;return(i=this.uu[e])!==null&&i!==void 0?i:null}Va(e,i){if(this.uu.length<1)return null;if(this.q_.key(e)>this.q_.key(this.uu[this.uu.length-1].time))return i?this.uu.length-1:null;const n=$s(this.uu,this.q_.key(e),(s,r)=>this.q_.key(s.time)<r);return this.q_.key(e)<this.q_.key(this.uu[n].time)?i?n:null:n}Ni(){return this.__===0||this.uu.length===0||this._u===null}Da(){return this.uu.length>0}Xs(){return this.Ru(),this.fu.lu()}Du(){return this.Ru(),this.fu.au()}Vu(){const e=this.Xs();if(e===null)return null;const i={from:e.Os(),to:e.ui()};return this.Ou(i)}Ou(e){const i=Math.round(e.from),n=Math.round(e.to),s=E(this.Bu()),r=E(this.Au());return{from:E(this.Ui(Math.max(s,i))),to:E(this.Ui(Math.min(r,n)))}}Iu(e){return{from:E(this.Va(e.from,!0)),to:E(this.Va(e.to,!0))}}Hi(){return this.__}S_(e){if(!isFinite(e)||e<=0||this.__===e)return;const i=this.Du(),n=this.__;if(this.__=e,this.vu=!0,this.cn.lockVisibleTimeRangeOnResize&&n!==0){const s=this.Su*e/n;this.Su=s}if(this.cn.fixLeftEdge&&i!==null&&i.Os()<=0){const s=n-e;this.xu-=Math.round(s/this.Su)+1,this.vu=!0}this.zu(),this.Lu()}It(e){if(this.Ni()||!ks(e))return 0;const i=this.Eu()+this.xu-e;return this.__-(i+.5)*this.Su-1}Qs(e,i){const n=this.Eu(),s=i===void 0?0:i.from,r=i===void 0?e.length:i.to;for(let a=s;a<r;a++){const c=e[a].ot,o=n+this.xu-c,u=this.__-(o+.5)*this.Su-1;e[a].nt=u}}Nu(e){return Math.ceil(this.Fu(e))}Jn(e){this.vu=!0,this.xu=e,this.Lu(),this.$i.Wu(),this.$i.Uh()}le(){return this.Su}Gn(e){this.ju(e),this.Lu(),this.$i.Wu(),this.$i.Uh()}Hu(){return this.xu}Ha(){if(this.Ni())return null;if(this.gu!==null)return this.gu;const e=this.Su,i=5*(this.$i.W().layout.fontSize+4)/8*(this.cn.tickMarkMaxCharacterLength||8),n=Math.round(i/e),s=E(this.Xs()),r=Math.max(s.Os(),s.Os()-n),a=Math.max(s.ui(),s.ui()-n),c=this.cu.su(e,i),o=this.Bu()+n,u=this.Au()-n,h=this.$u(),d=this.cn.fixLeftEdge||h,f=this.cn.fixRightEdge||h;let p=0;for(const m of c){if(!(r<=m.index&&m.index<=a))continue;let x;p<this.Mu.length?(x=this.Mu[p],x.coord=this.It(m.index),x.label=this.Uu(m),x.weight=m.weight):(x={needAlignCoordinate:!1,coord:this.It(m.index),label:this.Uu(m),weight:m.weight},this.Mu.push(x)),this.Su>i/2&&!h?x.needAlignCoordinate=!1:x.needAlignCoordinate=d&&m.index<=o||f&&m.index>=u,p++}return this.Mu.length=p,this.gu=this.Mu,this.Mu}qu(){this.vu=!0,this.Gn(this.cn.barSpacing),this.Jn(this.cn.rightOffset)}Yu(e){this.vu=!0,this._u=e,this.Lu(),this.Tu()}Zu(e,i){const n=this.Fu(e),s=this.le(),r=s+i*(s/10);this.Gn(r),this.cn.rightBarStaysOnScroll||this.Jn(this.Hu()+(n-this.Fu(e)))}Go(e){this.Mo&&this.n_(),this.wo===null&&this.wu===null&&(this.Ni()||(this.wo=e,this.Xu()))}Jo(e){if(this.wu===null)return;const i=Mo(this.__-e,0,this.__),n=Mo(this.__-E(this.wo),0,this.__);i!==0&&n!==0&&this.Gn(this.wu.le*i/n)}Qo(){this.wo!==null&&(this.wo=null,this.Ku())}t_(e){this.Mo===null&&this.wu===null&&(this.Ni()||(this.Mo=e,this.Xu()))}i_(e){if(this.Mo===null)return;const i=(this.Mo-e)/this.le();this.xu=E(this.wu).Hu+i,this.vu=!0,this.Lu()}n_(){this.Mo!==null&&(this.Mo=null,this.Ku())}Gu(){this.Ju(this.cn.rightOffset)}Ju(e,i=400){if(!isFinite(e))throw new RangeError("offset is required and must be finite number");if(!isFinite(i)||i<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const n=this.xu,s=performance.now();this.$i.Zn({Qu:r=>(r-s)/i>=1,tc:r=>{const a=(r-s)/i;return a>=1?e:n+(e-n)*a}})}bt(e,i){this.vu=!0,this.uu=e,this.cu.iu(e,i),this.Lu()}nc(){return this.pu}sc(){return this.mu}ec(){return this.bu}Eu(){return this._u||0}rc(e){const i=e.G_();this.ju(this.__/i),this.xu=e.ui()-this.Eu(),this.Lu(),this.vu=!0,this.$i.Wu(),this.$i.Uh()}hc(){const e=this.Bu(),i=this.Au();e!==null&&i!==null&&this.rc(new es(e,i+this.cn.rightOffset))}lc(e){const i=new es(e.from,e.to);this.rc(i)}qi(e){return this.yo.timeFormatter!==void 0?this.yo.timeFormatter(e.originalTime):this.q_.formatHorzItem(e.time)}$u(){const{handleScroll:e,handleScale:i}=this.$i.W();return!(e.horzTouchDrag||e.mouseWheel||e.pressedMouseMove||e.vertTouchDrag||i.axisDoubleClickReset.time||i.axisPressedMouseMove.time||i.mouseWheel||i.pinch)}Bu(){return this.uu.length===0?null:0}Au(){return this.uu.length===0?null:this.uu.length-1}ac(e){return(this.__-1-e)/this.Su}Fu(e){const i=this.ac(e),n=this.Eu()+this.xu-i;return Math.round(1e6*n)/1e6}ju(e){const i=this.Su;this.Su=e,this.zu(),i!==this.Su&&(this.vu=!0,this.oc())}Ru(){if(!this.vu)return;if(this.vu=!1,this.Ni())return void this._c(un.ou());const e=this.Eu(),i=this.__/this.Su,n=this.xu+e,s=new es(n-i+1,n);this._c(new un(s))}zu(){const e=this.uc();if(this.Su<e&&(this.Su=e,this.vu=!0),this.__!==0){const i=.5*this.__;this.Su>i&&(this.Su=i,this.vu=!0)}}uc(){return this.cn.fixLeftEdge&&this.cn.fixRightEdge&&this.uu.length!==0?this.__/this.uu.length:this.cn.minBarSpacing}Lu(){const e=this.cc();e!==null&&this.xu<e&&(this.xu=e,this.vu=!0);const i=this.dc();this.xu>i&&(this.xu=i,this.vu=!0)}cc(){const e=this.Bu(),i=this._u;return e===null||i===null?null:e-i-1+(this.cn.fixLeftEdge?this.__/this.Su:Math.min(2,this.uu.length))}dc(){return this.cn.fixRightEdge?0:this.__/this.Su-Math.min(2,this.uu.length)}Xu(){this.wu={le:this.le(),Hu:this.Hu()}}Ku(){this.wu=null}Uu(e){let i=this.du.get(e.weight);return i===void 0&&(i=new x2(n=>this.fc(n),this.q_),this.du.set(e.weight,i)),i.Y_(e)}fc(e){return this.q_.formatTickmark(e,this.yo)}_c(e){const i=this.fu;this.fu=e,id(i.lu(),this.fu.lu())||this.pu.m(),id(i.au(),this.fu.au())||this.mu.m(),this.oc()}oc(){this.gu=null}Cu(){this.oc(),this.du.clear()}ku(){this.q_.updateFormatter(this.yo)}Tu(){if(!this.cn.fixLeftEdge)return;const e=this.Bu();if(e===null)return;const i=this.Xs();if(i===null)return;const n=i.Os()-e;if(n<0){const s=this.xu-n-1;this.Jn(s)}this.zu()}Pu(){this.Lu(),this.zu()}}class k2{X(e,i,n){e.useMediaCoordinateSpace(s=>this.K(s,i,n))}gl(e,i,n){e.useMediaCoordinateSpace(s=>this.vc(s,i,n))}vc(e,i,n){}}class j2 extends k2{constructor(e){super(),this.mc=new Map,this.zt=e}K(e){}vc(e){if(!this.zt.yt)return;const{context:i,mediaSize:n}=e;let s=0;for(const a of this.zt.bc){if(a.Kt.length===0)continue;i.font=a.R;const c=this.wc(i,a.Kt);c>n.width?a.Zu=n.width/c:a.Zu=1,s+=a.gc*a.Zu}let r=0;switch(this.zt.Mc){case"top":r=0;break;case"center":r=Math.max((n.height-s)/2,0);break;case"bottom":r=Math.max(n.height-s,0)}i.fillStyle=this.zt.V;for(const a of this.zt.bc){i.save();let c=0;switch(this.zt.xc){case"left":i.textAlign="left",c=a.gc/2;break;case"center":i.textAlign="center",c=n.width/2;break;case"right":i.textAlign="right",c=n.width-1-a.gc/2}i.translate(c,r),i.textBaseline="top",i.font=a.R,i.scale(a.Zu,a.Zu),i.fillText(a.Kt,0,a.Sc),i.restore(),r+=a.gc*a.Zu}}wc(e,i){const n=this.kc(e.font);let s=n.get(i);return s===void 0&&(s=e.measureText(i).width,n.set(i,s)),s}kc(e){let i=this.mc.get(e);return i===void 0&&(i=new Map,this.mc.set(e,i)),i}}class S2{constructor(e){this.ft=!0,this.Ft={yt:!1,V:"",bc:[],Mc:"center",xc:"center"},this.Wt=new j2(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.W(),i=this.Ft;i.yt=e.visible,i.yt&&(i.V=e.color,i.xc=e.horzAlign,i.Mc=e.vertAlign,i.bc=[{Kt:e.text,R:yn(e.fontSize,e.fontFamily,e.fontStyle),gc:1.2*e.fontSize,Sc:0,Zu:0}])}}class N2 extends qc{constructor(e,i){super(),this.cn=i,this.wn=new S2(this)}Rn(){return[]}Pn(){return[this.wn]}W(){return this.cn}Vn(){this.wn.bt()}}var nd,sd,rd,ld,ad;(function(t){t[t.OnTouchEnd=0]="OnTouchEnd",t[t.OnNextTap=1]="OnNextTap"})(nd||(nd={}));class C2{constructor(e,i,n){this.yc=[],this.Cc=[],this.__=0,this.Tc=null,this.Pc=new me,this.Rc=new me,this.Dc=null,this.Vc=e,this.cn=i,this.q_=n,this.Oc=new sy(this),this.yl=new w2(this,i.timeScale,this.cn.localization,n),this.vt=new my(this,i.crosshair),this.Bc=new u2(i.crosshair),this.Ac=new N2(this,i.watermark),this.Ic(),this.yc[0].x_(2e3),this.zc=this.Lc(0),this.Ec=this.Lc(1)}Kl(){this.Nc(Ce.es())}Uh(){this.Nc(Ce.ss())}oa(){this.Nc(new Ce(1))}Gl(e){const i=this.Fc(e);this.Nc(i)}Wc(){return this.Tc}jc(e){const i=this.Tc;this.Tc=e,i!==null&&this.Gl(i.Hc),e!==null&&this.Gl(e.Hc)}W(){return this.cn}$h(e){gt(this.cn,e),this.yc.forEach(i=>i.b_(e)),e.timeScale!==void 0&&this.yl.$h(e.timeScale),e.localization!==void 0&&this.yl.yu(e.localization),(e.leftPriceScale||e.rightPriceScale)&&this.Pc.m(),this.zc=this.Lc(0),this.Ec=this.Lc(1),this.Kl()}$c(e,i){if(e==="left")return void this.$h({leftPriceScale:i});if(e==="right")return void this.$h({rightPriceScale:i});const n=this.Uc(e);n!==null&&(n.Dt.$h(i),this.Pc.m())}Uc(e){for(const i of this.yc){const n=i.w_(e);if(n!==null)return{Ht:i,Dt:n}}return null}St(){return this.yl}qc(){return this.yc}Yc(){return this.Ac}Zc(){return this.vt}Xc(){return this.Rc}Kc(e,i){e.Lo(i),this.Wu()}S_(e){this.__=e,this.yl.S_(this.__),this.yc.forEach(i=>i.S_(e)),this.Wu()}Ic(e){const i=new v2(this.yl,this);e!==void 0?this.yc.splice(e,0,i):this.yc.push(i);const n=e===void 0?this.yc.length-1:e,s=Ce.es();return s.Nn(n,{Fn:0,Wn:!0}),this.Nc(s),i}V_(e,i,n){e.V_(i,n)}O_(e,i,n){e.O_(i,n),this.Jl(),this.Nc(this.Gc(e,2))}B_(e,i){e.B_(i),this.Nc(this.Gc(e,2))}A_(e,i,n){i.Vo()||e.A_(i,n)}I_(e,i,n){i.Vo()||(e.I_(i,n),this.Jl(),this.Nc(this.Gc(e,2)))}z_(e,i){i.Vo()||(e.z_(i),this.Nc(this.Gc(e,2)))}E_(e,i){e.E_(i),this.Nc(this.Gc(e,2))}Jc(e){this.yl.Go(e)}Qc(e,i){const n=this.St();if(n.Ni()||i===0)return;const s=n.Hi();e=Math.max(1,Math.min(e,s)),n.Zu(e,i),this.Wu()}td(e){this.nd(0),this.sd(e),this.ed()}rd(e){this.yl.Jo(e),this.Wu()}hd(){this.yl.Qo(),this.Uh()}nd(e){this.yl.t_(e)}sd(e){this.yl.i_(e),this.Wu()}ed(){this.yl.n_(),this.Uh()}wt(){return this.Cc}ld(e,i,n,s,r){this.vt.gn(e,i);let a=NaN,c=this.yl.Nu(e);const o=this.yl.Xs();o!==null&&(c=Math.min(Math.max(o.Os(),c),o.ui()));const u=s.vn(),h=u.Ct();h!==null&&(a=u.pn(i,h)),a=this.Bc.Oa(a,c,s),this.vt.kn(c,a,s),this.oa(),r||this.Rc.m(this.vt.xt(),{x:e,y:i},n)}ad(e,i,n){const s=n.vn(),r=s.Ct(),a=s.Rt(e,E(r)),c=this.yl.Va(i,!0),o=this.yl.It(E(c));this.ld(o,a,null,n,!0)}od(e){this.Zc().Cn(),this.oa(),e||this.Rc.m(null,null,null)}Jl(){const e=this.vt.Ht();if(e!==null){const i=this.vt.xn(),n=this.vt.Sn();this.ld(i,n,null,e)}this.vt.Vn()}_d(e,i,n){const s=this.yl.mn(0);i!==void 0&&n!==void 0&&this.yl.bt(i,n);const r=this.yl.mn(0),a=this.yl.Eu(),c=this.yl.Xs();if(c!==null&&s!==null&&r!==null){const o=c.Kr(a),u=this.q_.key(s)>this.q_.key(r),h=e!==null&&e>a&&!u,d=this.yl.W().allowShiftVisibleRangeOnWhitespaceReplacement,f=o&&(n!==void 0||d)&&this.yl.W().shiftVisibleRangeOnNewBar;if(h&&!f){const p=e-a;this.yl.Jn(this.yl.Hu()-p)}}this.yl.Yu(e)}ia(e){e!==null&&e.F_()}dr(e){const i=this.yc.find(n=>n.Uo().includes(e));return i===void 0?null:i}Wu(){this.Ac.Vn(),this.yc.forEach(e=>e.F_()),this.Jl()}S(){this.yc.forEach(e=>e.S()),this.yc.length=0,this.cn.localization.priceFormatter=void 0,this.cn.localization.percentageFormatter=void 0,this.cn.localization.timeFormatter=void 0}ud(){return this.Oc}br(){return this.Oc.W()}g_(){return this.Pc}dd(e,i,n){const s=this.yc[0],r=this.fd(i,e,s,n);return this.Cc.push(r),this.Cc.length===1?this.Kl():this.Uh(),r}vd(e){const i=this.dr(e),n=this.Cc.indexOf(e);ai(n!==-1,"Series not found"),this.Cc.splice(n,1),E(i).Zo(e),e.S&&e.S()}Xl(e,i){const n=E(this.dr(e));n.Zo(e);const s=this.Uc(i);if(s===null){const r=e.Xi();n.qo(e,i,r)}else{const r=s.Ht===n?e.Xi():void 0;s.Ht.qo(e,i,r)}}hc(){const e=Ce.ss();e.$n(),this.Nc(e)}pd(e){const i=Ce.ss();i.Yn(e),this.Nc(i)}Kn(){const e=Ce.ss();e.Kn(),this.Nc(e)}Gn(e){const i=Ce.ss();i.Gn(e),this.Nc(i)}Jn(e){const i=Ce.ss();i.Jn(e),this.Nc(i)}Zn(e){const i=Ce.ss();i.Zn(e),this.Nc(i)}Un(){const e=Ce.ss();e.Un(),this.Nc(e)}md(){return this.cn.rightPriceScale.visible?"right":"left"}bd(){return this.Ec}q(){return this.zc}Bt(e){const i=this.Ec,n=this.zc;if(i===n)return i;if(e=Math.max(0,Math.min(100,Math.round(100*e))),this.Dc===null||this.Dc.Ps!==n||this.Dc.Rs!==i)this.Dc={Ps:n,Rs:i,wd:new Map};else{const r=this.Dc.wd.get(e);if(r!==void 0)return r}const s=function(r,a,c){const[o,u,h,d]=ws(r),[f,p,m,x]=ws(a),b=[it(o+c*(f-o)),it(u+c*(p-u)),it(h+c*(m-h)),wm(d+c*(x-d))];return`rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`}(n,i,e/100);return this.Dc.wd.set(e,s),s}Gc(e,i){const n=new Ce(i);if(e!==null){const s=this.yc.indexOf(e);n.Nn(s,{Fn:i})}return n}Fc(e,i){return i===void 0&&(i=2),this.Gc(this.dr(e),i)}Nc(e){this.Vc&&this.Vc(e),this.yc.forEach(i=>i.j_().qh().bt())}fd(e,i,n,s){const r=new Yc(this,e,i,n,s),a=e.priceScaleId!==void 0?e.priceScaleId:this.md();return n.qo(r,a),El(a)||r.$h(e),r}Lc(e){const i=this.cn.layout;return i.background.type==="gradient"?e===0?i.background.topColor:i.background.bottomColor:i.background.color}}function _o(t){return!kt(t)&&!Rs(t)}function Om(t){return kt(t)}(function(t){t[t.Disabled=0]="Disabled",t[t.Continuous=1]="Continuous",t[t.OnDataUpdate=2]="OnDataUpdate"})(sd||(sd={})),function(t){t[t.LastBar=0]="LastBar",t[t.LastVisible=1]="LastVisible"}(rd||(rd={})),function(t){t.Solid="solid",t.VerticalGradient="gradient"}(ld||(ld={})),function(t){t[t.Year=0]="Year",t[t.Month=1]="Month",t[t.DayOfMonth=2]="DayOfMonth",t[t.Time=3]="Time",t[t.TimeWithSeconds=4]="TimeWithSeconds"}(ad||(ad={}));const od=t=>t.getUTCFullYear();function E2(t,e,i){return e.replace(/yyyy/g,(n=>Tt(od(n),4))(t)).replace(/yy/g,(n=>Tt(od(n)%100,2))(t)).replace(/MMMM/g,((n,s)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(s,{month:"long"}))(t,i)).replace(/MMM/g,((n,s)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(s,{month:"short"}))(t,i)).replace(/MM/g,(n=>Tt((s=>s.getUTCMonth()+1)(n),2))(t)).replace(/dd/g,(n=>Tt((s=>s.getUTCDate())(n),2))(t))}class Fm{constructor(e="yyyy-MM-dd",i="default"){this.gd=e,this.Md=i}Y_(e){return E2(e,this.gd,this.Md)}}class z2{constructor(e){this.xd=e||"%h:%m:%s"}Y_(e){return this.xd.replace("%h",Tt(e.getUTCHours(),2)).replace("%m",Tt(e.getUTCMinutes(),2)).replace("%s",Tt(e.getUTCSeconds(),2))}}const M2={Sd:"yyyy-MM-dd",kd:"%h:%m:%s",yd:" ",Cd:"default"};class _2{constructor(e={}){const i=Object.assign(Object.assign({},M2),e);this.Td=new Fm(i.Sd,i.Cd),this.Pd=new z2(i.kd),this.Rd=i.yd}Y_(e){return`${this.Td.Y_(e)}${this.Rd}${this.Pd.Y_(e)}`}}function lr(t){return 60*t*60*1e3}function ga(t){return 60*t*1e3}const ar=[{Dd:(cd=1,1e3*cd),Vd:10},{Dd:ga(1),Vd:20},{Dd:ga(5),Vd:21},{Dd:ga(30),Vd:22},{Dd:lr(1),Vd:30},{Dd:lr(3),Vd:31},{Dd:lr(6),Vd:32},{Dd:lr(12),Vd:33}];var cd;function ud(t,e){if(t.getUTCFullYear()!==e.getUTCFullYear())return 70;if(t.getUTCMonth()!==e.getUTCMonth())return 60;if(t.getUTCDate()!==e.getUTCDate())return 50;for(let i=ar.length-1;i>=0;--i)if(Math.floor(e.getTime()/ar[i].Dd)!==Math.floor(t.getTime()/ar[i].Dd))return ar[i].Vd;return 0}function va(t){let e=t;if(Rs(t)&&(e=Gc(t)),!_o(e))throw new Error("time must be of type BusinessDay");const i=new Date(Date.UTC(e.year,e.month-1,e.day,0,0,0,0));return{Od:Math.round(i.getTime()/1e3),Bd:e}}function hd(t){if(!Om(t))throw new Error("time must be of type isUTCTimestamp");return{Od:t}}function Gc(t){const e=new Date(t);if(isNaN(e.getTime()))throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);return{day:e.getUTCDate(),month:e.getUTCMonth()+1,year:e.getUTCFullYear()}}function dd(t){Rs(t.time)&&(t.time=Gc(t.time))}class fd{options(){return this.cn}setOptions(e){this.cn=e,this.updateFormatter(e.localization)}preprocessData(e){Array.isArray(e)?function(i){i.forEach(dd)}(e):dd(e)}createConverterToInternalObj(e){return E(function(i){return i.length===0?null:_o(i[0].time)||Rs(i[0].time)?va:hd}(e))}key(e){return typeof e=="object"&&"Od"in e?e.Od:this.key(this.convertHorzItemToInternal(e))}cacheKey(e){const i=e;return i.Bd===void 0?new Date(1e3*i.Od).getTime():new Date(Date.UTC(i.Bd.year,i.Bd.month-1,i.Bd.day)).getTime()}convertHorzItemToInternal(e){return Om(i=e)?hd(i):_o(i)?va(i):va(Gc(i));var i}updateFormatter(e){if(!this.cn)return;const i=e.dateFormat;this.cn.timeScale.timeVisible?this.Ad=new _2({Sd:i,kd:this.cn.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",yd:"   ",Cd:e.locale}):this.Ad=new Fm(i,e.locale)}formatHorzItem(e){const i=e;return this.Ad.Y_(new Date(1e3*i.Od))}formatTickmark(e,i){const n=function(r,a,c){switch(r){case 0:case 10:return a?c?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return a?3:2;case 50:return 2;case 60:return 1;case 70:return 0}}(e.weight,this.cn.timeScale.timeVisible,this.cn.timeScale.secondsVisible),s=this.cn.timeScale;if(s.tickMarkFormatter!==void 0){const r=s.tickMarkFormatter(e.originalTime,n,i.locale);if(r!==null)return r}return function(r,a,c){const o={};switch(a){case 0:o.year="numeric";break;case 1:o.month="short";break;case 2:o.day="numeric";break;case 3:o.hour12=!1,o.hour="2-digit",o.minute="2-digit";break;case 4:o.hour12=!1,o.hour="2-digit",o.minute="2-digit",o.second="2-digit"}const u=r.Bd===void 0?new Date(1e3*r.Od):new Date(Date.UTC(r.Bd.year,r.Bd.month-1,r.Bd.day));return new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()).toLocaleString(c,o)}(e.time,n,i.locale)}maxTickMarkWeight(e){let i=e.reduce(b2,e[0]).weight;return i>30&&i<50&&(i=30),i}fillWeightsForPoints(e,i){(function(n,s=0){if(n.length===0)return;let r=s===0?null:n[s-1].time.Od,a=r!==null?new Date(1e3*r):null,c=0;for(let o=s;o<n.length;++o){const u=n[o],h=new Date(1e3*u.time.Od);a!==null&&(u.timeWeight=ud(h,a)),c+=u.time.Od-(r||u.time.Od),r=u.time.Od,a=h}if(s===0&&n.length>1){const o=Math.ceil(c/(n.length-1)),u=new Date(1e3*(n[0].time.Od-o));n[0].timeWeight=ud(new Date(1e3*n[0].time.Od),u)}})(e,i)}static Id(e){return gt({localization:{dateFormat:"dd MMM 'yy"}},e??{})}}const bn=typeof window<"u";function pd(){return!!bn&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function xa(){return!!bn&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function To(t){return t+t%2}function ya(t,e){return t.zd-e.zd}function ba(t,e,i){const n=(t.zd-e.zd)/(t.ot-e.ot);return Math.sign(n)*Math.min(Math.abs(n),i)}class T2{constructor(e,i,n,s){this.Ld=null,this.Ed=null,this.Nd=null,this.Fd=null,this.Wd=null,this.jd=0,this.Hd=0,this.$d=e,this.Ud=i,this.qd=n,this.rs=s}Yd(e,i){if(this.Ld!==null){if(this.Ld.ot===i)return void(this.Ld.zd=e);if(Math.abs(this.Ld.zd-e)<this.rs)return}this.Fd=this.Nd,this.Nd=this.Ed,this.Ed=this.Ld,this.Ld={ot:i,zd:e}}Vr(e,i){if(this.Ld===null||this.Ed===null||i-this.Ld.ot>50)return;let n=0;const s=ba(this.Ld,this.Ed,this.Ud),r=ya(this.Ld,this.Ed),a=[s],c=[r];if(n+=r,this.Nd!==null){const u=ba(this.Ed,this.Nd,this.Ud);if(Math.sign(u)===Math.sign(s)){const h=ya(this.Ed,this.Nd);if(a.push(u),c.push(h),n+=h,this.Fd!==null){const d=ba(this.Nd,this.Fd,this.Ud);if(Math.sign(d)===Math.sign(s)){const f=ya(this.Nd,this.Fd);a.push(d),c.push(f),n+=f}}}}let o=0;for(let u=0;u<a.length;++u)o+=c[u]/n*a[u];Math.abs(o)<this.$d||(this.Wd={zd:e,ot:i},this.Hd=o,this.jd=function(u,h){const d=Math.log(h);return Math.log(1*d/-u)/d}(Math.abs(o),this.qd))}tc(e){const i=E(this.Wd),n=e-i.ot;return i.zd+this.Hd*(Math.pow(this.qd,n)-1)/Math.log(this.qd)}Qu(e){return this.Wd===null||this.Zd(e)===this.jd}Zd(e){const i=e-E(this.Wd).ot;return Math.min(i,this.jd)}}class P2{constructor(e,i){this.Xd=void 0,this.Kd=void 0,this.Gd=void 0,this.en=!1,this.Jd=e,this.Qd=i,this.tf()}bt(){this.tf()}if(){this.Xd&&this.Jd.removeChild(this.Xd),this.Kd&&this.Jd.removeChild(this.Kd),this.Xd=void 0,this.Kd=void 0}nf(){return this.en!==this.sf()||this.Gd!==this.ef()}ef(){return km(ws(this.Qd.W().layout.textColor))>160?"dark":"light"}sf(){return this.Qd.W().layout.attributionLogo}rf(){const e=new URL(location.href);return e.hostname?"&utm_source="+e.hostname+e.pathname:""}tf(){this.nf()&&(this.if(),this.en=this.sf(),this.en&&(this.Gd=this.ef(),this.Kd=document.createElement("style"),this.Kd.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.Xd=document.createElement("a"),this.Xd.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.rf()}`,this.Xd.title="Charting by TradingView",this.Xd.id="tv-attr-logo",this.Xd.target="_blank",this.Xd.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.Xd.toggleAttribute("data-dark",this.Gd==="dark"),this.Jd.appendChild(this.Kd),this.Jd.appendChild(this.Xd)))}}function $i(t,e){const i=E(t.ownerDocument).createElement("canvas");t.appendChild(i);const n=U1(i,{options:{allowResizeObserver:!1},transform:(s,r)=>({width:Math.max(s.width,r.width),height:Math.max(s.height,r.height)})});return n.resizeCanvasElement(e),n}function Di(t){var e;t.width=1,t.height=1,(e=t.getContext("2d"))===null||e===void 0||e.clearRect(0,0,1,1)}function Po(t,e,i,n){t.gl&&t.gl(e,i,n)}function Mr(t,e,i,n){t.X(e,i,n)}function Lo(t,e,i,n){const s=t(i,n);for(const r of s){const a=r.gt();a!==null&&e(a)}}function L2(t){bn&&window.chrome!==void 0&&t.addEventListener("mousedown",e=>{if(e.button===1)return e.preventDefault(),!1})}class Jc{constructor(e,i,n){this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this.df=null,this.ff=!1,this.vf=null,this.pf=null,this.mf=!1,this.bf=!1,this.wf=!1,this.gf=null,this.Mf=null,this.xf=null,this.Sf=null,this.kf=null,this.yf=null,this.Cf=null,this.Tf=0,this.Pf=!1,this.Rf=!1,this.Df=!1,this.Vf=0,this.Of=null,this.Bf=!xa(),this.Af=s=>{this.If(s)},this.zf=s=>{if(this.Lf(s)){const r=this.Ef(s);if(++this._f,this.uf&&this._f>1){const{Nf:a}=this.Ff(yt(s),this.cf);a<30&&!this.wf&&this.Wf(r,this.Hf.jf),this.$f()}}else{const r=this.Ef(s);if(++this.hf,this.lf&&this.hf>1){const{Nf:a}=this.Ff(yt(s),this.af);a<5&&!this.bf&&this.Uf(r,this.Hf.qf),this.Yf()}}},this.Zf=e,this.Hf=i,this.cn=n,this.Xf()}S(){this.gf!==null&&(this.gf(),this.gf=null),this.Mf!==null&&(this.Mf(),this.Mf=null),this.Sf!==null&&(this.Sf(),this.Sf=null),this.kf!==null&&(this.kf(),this.kf=null),this.yf!==null&&(this.yf(),this.yf=null),this.xf!==null&&(this.xf(),this.xf=null),this.Kf(),this.Yf()}Gf(e){this.Sf&&this.Sf();const i=this.Jf.bind(this);if(this.Sf=()=>{this.Zf.removeEventListener("mousemove",i)},this.Zf.addEventListener("mousemove",i),this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.Qf),this.Bf=!0}Yf(){this.lf!==null&&clearTimeout(this.lf),this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}$f(){this.uf!==null&&clearTimeout(this.uf),this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}Jf(e){if(this.Df||this.pf!==null||this.Lf(e))return;const i=this.Ef(e);this.Uf(i,this.Hf.tv),this.Bf=!0}iv(e){const i=wa(e.changedTouches,E(this.Of));if(i===null||(this.Vf=or(e),this.Cf!==null)||this.Rf)return;this.Pf=!0;const n=this.Ff(yt(i),E(this.pf)),{nv:s,sv:r,Nf:a}=n;if(this.mf||!(a<5)){if(!this.mf){const c=.5*s,o=r>=c&&!this.cn.ev(),u=c>r&&!this.cn.rv();o||u||(this.Rf=!0),this.mf=!0,this.wf=!0,this.Kf(),this.$f()}if(!this.Rf){const c=this.Ef(e,i);this.Wf(c,this.Hf.hv),Fi(e)}}}lv(e){if(e.button!==0)return;const i=this.Ff(yt(e),E(this.vf)),{Nf:n}=i;if(n>=5&&(this.bf=!0,this.Yf()),this.bf){const s=this.Ef(e);this.Uf(s,this.Hf.av)}}Ff(e,i){const n=Math.abs(i.nt-e.nt),s=Math.abs(i.st-e.st);return{nv:n,sv:s,Nf:n+s}}ov(e){let i=wa(e.changedTouches,E(this.Of));if(i===null&&e.touches.length===0&&(i=e.changedTouches[0]),i===null)return;this.Of=null,this.Vf=or(e),this.Kf(),this.pf=null,this.yf&&(this.yf(),this.yf=null);const n=this.Ef(e,i);if(this.Wf(n,this.Hf._v),++this._f,this.uf&&this._f>1){const{Nf:s}=this.Ff(yt(i),this.cf);s<30&&!this.wf&&this.Wf(n,this.Hf.jf),this.$f()}else this.wf||(this.Wf(n,this.Hf.uv),this.Hf.uv&&Fi(e));this._f===0&&Fi(e),e.touches.length===0&&this.ff&&(this.ff=!1,Fi(e))}If(e){if(e.button!==0)return;const i=this.Ef(e);if(this.vf=null,this.Df=!1,this.kf&&(this.kf(),this.kf=null),pd()&&this.Zf.ownerDocument.documentElement.removeEventListener("mouseleave",this.Af),!this.Lf(e))if(this.Uf(i,this.Hf.cv),++this.hf,this.lf&&this.hf>1){const{Nf:n}=this.Ff(yt(e),this.af);n<5&&!this.bf&&this.Uf(i,this.Hf.qf),this.Yf()}else this.bf||this.Uf(i,this.Hf.dv)}Kf(){this.df!==null&&(clearTimeout(this.df),this.df=null)}fv(e){if(this.Of!==null)return;const i=e.changedTouches[0];this.Of=i.identifier,this.Vf=or(e);const n=this.Zf.ownerDocument.documentElement;this.wf=!1,this.mf=!1,this.Rf=!1,this.pf=yt(i),this.yf&&(this.yf(),this.yf=null);{const r=this.iv.bind(this),a=this.ov.bind(this);this.yf=()=>{n.removeEventListener("touchmove",r),n.removeEventListener("touchend",a)},n.addEventListener("touchmove",r,{passive:!1}),n.addEventListener("touchend",a,{passive:!1}),this.Kf(),this.df=setTimeout(this.vv.bind(this,e),240)}const s=this.Ef(e,i);this.Wf(s,this.Hf.pv),this.uf||(this._f=0,this.uf=setTimeout(this.$f.bind(this),500),this.cf=yt(i))}mv(e){if(e.button!==0)return;const i=this.Zf.ownerDocument.documentElement;pd()&&i.addEventListener("mouseleave",this.Af),this.bf=!1,this.vf=yt(e),this.kf&&(this.kf(),this.kf=null);{const s=this.lv.bind(this),r=this.If.bind(this);this.kf=()=>{i.removeEventListener("mousemove",s),i.removeEventListener("mouseup",r)},i.addEventListener("mousemove",s),i.addEventListener("mouseup",r)}if(this.Df=!0,this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.bv),this.lf||(this.hf=0,this.lf=setTimeout(this.Yf.bind(this),500),this.af=yt(e))}Xf(){this.Zf.addEventListener("mouseenter",this.Gf.bind(this)),this.Zf.addEventListener("touchcancel",this.Kf.bind(this));{const e=this.Zf.ownerDocument,i=n=>{this.Hf.wv&&(n.composed&&this.Zf.contains(n.composedPath()[0])||n.target&&this.Zf.contains(n.target)||this.Hf.wv())};this.Mf=()=>{e.removeEventListener("touchstart",i)},this.gf=()=>{e.removeEventListener("mousedown",i)},e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0})}xa()&&(this.xf=()=>{this.Zf.removeEventListener("dblclick",this.zf)},this.Zf.addEventListener("dblclick",this.zf)),this.Zf.addEventListener("mouseleave",this.gv.bind(this)),this.Zf.addEventListener("touchstart",this.fv.bind(this),{passive:!0}),L2(this.Zf),this.Zf.addEventListener("mousedown",this.mv.bind(this)),this.Mv(),this.Zf.addEventListener("touchmove",()=>{},{passive:!1})}Mv(){this.Hf.xv===void 0&&this.Hf.Sv===void 0&&this.Hf.kv===void 0||(this.Zf.addEventListener("touchstart",e=>this.yv(e.touches),{passive:!0}),this.Zf.addEventListener("touchmove",e=>{if(e.touches.length===2&&this.Cf!==null&&this.Hf.Sv!==void 0){const i=md(e.touches[0],e.touches[1])/this.Tf;this.Hf.Sv(this.Cf,i),Fi(e)}},{passive:!1}),this.Zf.addEventListener("touchend",e=>{this.yv(e.touches)}))}yv(e){e.length===1&&(this.Pf=!1),e.length!==2||this.Pf||this.ff?this.Cv():this.Tv(e)}Tv(e){const i=this.Zf.getBoundingClientRect()||{left:0,top:0};this.Cf={nt:(e[0].clientX-i.left+(e[1].clientX-i.left))/2,st:(e[0].clientY-i.top+(e[1].clientY-i.top))/2},this.Tf=md(e[0],e[1]),this.Hf.xv!==void 0&&this.Hf.xv(),this.Kf()}Cv(){this.Cf!==null&&(this.Cf=null,this.Hf.kv!==void 0&&this.Hf.kv())}gv(e){if(this.Sf&&this.Sf(),this.Lf(e)||!this.Bf)return;const i=this.Ef(e);this.Uf(i,this.Hf.Pv),this.Bf=!xa()}vv(e){const i=wa(e.touches,E(this.Of));if(i===null)return;const n=this.Ef(e,i);this.Wf(n,this.Hf.Rv),this.wf=!0,this.ff=!0}Lf(e){return e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents!==void 0?e.sourceCapabilities.firesTouchEvents:or(e)<this.Vf+500}Wf(e,i){i&&i.call(this.Hf,e)}Uf(e,i){i&&i.call(this.Hf,e)}Ef(e,i){const n=i||e,s=this.Zf.getBoundingClientRect()||{left:0,top:0};return{clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,screenX:n.screenX,screenY:n.screenY,localX:n.clientX-s.left,localY:n.clientY-s.top,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey,Dv:!e.type.startsWith("mouse")&&e.type!=="contextmenu"&&e.type!=="click",Vv:e.type,Ov:n.target,Bv:e.view,Av:()=>{e.type!=="touchstart"&&Fi(e)}}}}function md(t,e){const i=t.clientX-e.clientX,n=t.clientY-e.clientY;return Math.sqrt(i*i+n*n)}function Fi(t){t.cancelable&&t.preventDefault()}function yt(t){return{nt:t.pageX,st:t.pageY}}function or(t){return t.timeStamp||performance.now()}function wa(t,e){for(let i=0;i<t.length;++i)if(t[i].identifier===e)return t[i];return null}function cr(t){return{Hc:t.Hc,Iv:{gr:t.zv.externalId},Lv:t.zv.cursorStyle}}function R2(t,e,i){for(const n of t){const s=n.gt();if(s!==null&&s.wr){const r=s.wr(e,i);if(r!==null)return{Bv:n,Iv:r}}}return null}function ka(t,e){return i=>{var n,s,r,a;return((s=(n=i.Dt())===null||n===void 0?void 0:n.Pa())!==null&&s!==void 0?s:"")!==e?[]:(a=(r=i.da)===null||r===void 0?void 0:r.call(i,t))!==null&&a!==void 0?a:[]}}function gd(t,e,i,n){if(!t.length)return;let s=0;const r=i/2,a=t[0].At(n,!0);let c=e===1?r-(t[0].Vi()-a/2):t[0].Vi()-a/2-r;c=Math.max(0,c);for(let o=1;o<t.length;o++){const u=t[o],h=t[o-1],d=h.At(n,!1),f=u.Vi(),p=h.Vi();if(e===1?f>p-d:f<p+d){const m=p-d*e;u.Oi(m);const x=m-e*d/2;if((e===1?x<0:x>i)&&c>0){const b=e===1?-1-x:x-i,g=Math.min(b,c);for(let v=s;v<t.length;v++)t[v].Oi(t[v].Vi()+e*g);c-=g}}else s=o,c=e===1?p-d-f:f-(p+d)}}class vd{constructor(e,i,n,s){this.Li=null,this.Ev=null,this.Nv=!1,this.Fv=new Ss(200),this.Qr=null,this.Wv=0,this.jv=!1,this.Hv=()=>{this.jv||this.tn.$v().$t().Uh()},this.Uv=()=>{this.jv||this.tn.$v().$t().Uh()},this.tn=e,this.cn=i,this.ko=i.layout,this.Oc=n,this.qv=s==="left",this.Yv=ka("normal",s),this.Zv=ka("top",s),this.Xv=ka("bottom",s),this.Kv=document.createElement("div"),this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Kv.style.width="25px",this.Kv.style.left="0",this.Kv.style.position="relative",this.Gv=$i(this.Kv,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const r=this.Gv.canvasElement;r.style.position="absolute",r.style.zIndex="1",r.style.left="0",r.style.top="0",this.Jv=$i(this.Kv,ie({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const a=this.Jv.canvasElement;a.style.position="absolute",a.style.zIndex="2",a.style.left="0",a.style.top="0";const c={bv:this.Qv.bind(this),pv:this.Qv.bind(this),av:this.tp.bind(this),hv:this.tp.bind(this),wv:this.ip.bind(this),cv:this.np.bind(this),_v:this.np.bind(this),qf:this.sp.bind(this),jf:this.sp.bind(this),Qf:this.ep.bind(this),Pv:this.rp.bind(this)};this.hp=new Jc(this.Jv.canvasElement,c,{ev:()=>!this.cn.handleScroll.vertTouchDrag,rv:()=>!0})}S(){this.hp.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Di(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose(),this.Li!==null&&this.Li.Ko().p(this),this.Li=null}lp(){return this.Kv}P(){return this.ko.fontSize}ap(){const e=this.Oc.W();return this.Qr!==e.R&&(this.Fv.nr(),this.Qr=e.R),e}op(){if(this.Li===null)return 0;let e=0;const i=this.ap(),n=E(this.Gv.canvasElement.getContext("2d"));n.save();const s=this.Li.Ha();n.font=this._p(),s.length>0&&(e=Math.max(this.Fv.xi(n,s[0].so),this.Fv.xi(n,s[s.length-1].so)));const r=this.up();for(let u=r.length;u--;){const h=this.Fv.xi(n,r[u].Kt());h>e&&(e=h)}const a=this.Li.Ct();if(a!==null&&this.Ev!==null&&(c=this.cn.crosshair).mode!==2&&c.horzLine.visible&&c.horzLine.labelVisible){const u=this.Li.pn(1,a),h=this.Li.pn(this.Ev.height-2,a);e=Math.max(e,this.Fv.xi(n,this.Li.Fi(Math.floor(Math.min(u,h))+.11111111111111,a)),this.Fv.xi(n,this.Li.Fi(Math.ceil(Math.max(u,h))-.11111111111111,a)))}var c;n.restore();const o=e||34;return To(Math.ceil(i.C+i.T+i.A+i.I+5+o))}cp(e){this.Ev!==null&&Ni(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`)}dp(){return E(this.Ev).width}Gi(e){this.Li!==e&&(this.Li!==null&&this.Li.Ko().p(this),this.Li=e,e.Ko().l(this.fo.bind(this),this))}Dt(){return this.Li}nr(){const e=this.tn.fp();this.tn.$v().$t().E_(e,E(this.Dt()))}vp(e){if(this.Ev===null)return;if(e!==1){this.pp(),this.Gv.applySuggestedBitmapSize();const n=Li(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(s=>{this.mp(s),this.Ie(s)}),this.tn.bp(n,this.Xv),this.wp(n),this.tn.bp(n,this.Yv),this.gp(n))}this.Jv.applySuggestedBitmapSize();const i=Li(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:s})=>{n.clearRect(0,0,s.width,s.height)}),this.Mp(i),this.tn.bp(i,this.Zv))}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}bt(){var e;(e=this.Li)===null||e===void 0||e.Ha()}Qv(e){if(this.Li===null||this.Li.Ni()||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!0,i.V_(n,this.Li,e.localY)}tp(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp(),s=this.Li;i.O_(n,s,e.localY)}ip(){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const e=this.tn.$v().$t(),i=this.tn.fp(),n=this.Li;this.Nv&&(this.Nv=!1,e.B_(i,n))}np(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!1,i.B_(n,this.Li)}sp(e){this.cn.handleScale.axisDoubleClickReset.price&&this.nr()}ep(e){this.Li!==null&&(!this.tn.$v().$t().W().handleScale.axisPressedMouseMove.price||this.Li.Mh()||this.Li.Oo()||this.kp(1))}rp(e){this.kp(0)}up(){const e=[],i=this.Li===null?void 0:this.Li;return(n=>{for(let s=0;s<n.length;++s){const r=n[s].Rn(this.tn.fp(),i);for(let a=0;a<r.length;a++)e.push(r[a])}})(this.tn.fp().Uo()),e}mp({context:e,bitmapSize:i}){const{width:n,height:s}=i,r=this.tn.fp().$t(),a=r.q(),c=r.bd();a===c?Nl(e,0,0,n,s,a):jm(e,0,0,n,s,a,c)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n}){if(this.Ev===null||this.Li===null||!this.Li.W().borderVisible)return;e.fillStyle=this.Li.W().borderColor;const s=Math.max(1,Math.floor(this.ap().C*n));let r;r=this.qv?i.width-s:0,e.fillRect(r,0,s,i.height)}wp(e){if(this.Ev===null||this.Li===null)return;const i=this.Li.Ha(),n=this.Li.W(),s=this.ap(),r=this.qv?this.Ev.width-s.T:0;n.borderVisible&&n.ticksVisible&&e.useBitmapCoordinateSpace(({context:a,horizontalPixelRatio:c,verticalPixelRatio:o})=>{a.fillStyle=n.borderColor;const u=Math.max(1,Math.floor(o)),h=Math.floor(.5*o),d=Math.round(s.T*c);a.beginPath();for(const f of i)a.rect(Math.floor(r*c),Math.round(f.Ea*o)-h,d,u);a.fill()}),e.useMediaCoordinateSpace(({context:a})=>{var c;a.font=this._p(),a.fillStyle=(c=n.textColor)!==null&&c!==void 0?c:this.ko.textColor,a.textAlign=this.qv?"right":"left",a.textBaseline="middle";const o=this.qv?Math.round(r-s.A):Math.round(r+s.T+s.A),u=i.map(h=>this.Fv.Mi(a,h.so));for(let h=i.length;h--;){const d=i[h];a.fillText(d.so,o,d.Ea+u[h])}})}pp(){if(this.Ev===null||this.Li===null)return;const e=[],i=this.Li.Uo().slice(),n=this.tn.fp(),s=this.ap();this.Li===n.pr()&&this.tn.fp().Uo().forEach(a=>{n.vr(a)&&i.push(a)});const r=this.Li;i.forEach(a=>{a.Rn(n,r).forEach(c=>{c.Oi(null),c.Bi()&&e.push(c)})}),e.forEach(a=>a.Oi(a.ki())),this.Li.W().alignLabels&&this.yp(e,s)}yp(e,i){if(this.Ev===null)return;const n=this.Ev.height/2,s=e.filter(a=>a.ki()<=n),r=e.filter(a=>a.ki()>n);s.sort((a,c)=>c.ki()-a.ki()),r.sort((a,c)=>a.ki()-c.ki());for(const a of e){const c=Math.floor(a.At(i)/2),o=a.ki();o>-c&&o<c&&a.Oi(c),o>this.Ev.height-c&&o<this.Ev.height+c&&a.Oi(this.Ev.height-c)}gd(s,1,this.Ev.height,i),gd(r,-1,this.Ev.height,i)}gp(e){if(this.Ev===null)return;const i=this.up(),n=this.ap(),s=this.qv?"right":"left";i.forEach(r=>{r.Ai()&&r.gt(E(this.Li)).X(e,n,this.Fv,s)})}Mp(e){if(this.Ev===null||this.Li===null)return;const i=this.tn.$v().$t(),n=[],s=this.tn.fp(),r=i.Zc().Rn(s,this.Li);r.length&&n.push(r);const a=this.ap(),c=this.qv?"right":"left";n.forEach(o=>{o.forEach(u=>{u.gt(E(this.Li)).X(e,a,this.Fv,c)})})}kp(e){this.Kv.style.cursor=e===1?"ns-resize":"default"}fo(){const e=this.op();this.Wv<e&&this.tn.$v().$t().Kl(),this.Wv=e}_p(){return yn(this.ko.fontSize,this.ko.fontFamily)}}function $2(t,e){var i,n;return(n=(i=t.ua)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function ur(t,e){var i,n;return(n=(i=t.Pn)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function D2(t,e){var i,n;return(n=(i=t.Ji)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function B2(t,e){var i,n;return(n=(i=t.aa)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}class Zc{constructor(e,i){this.Ev=ie({width:0,height:0}),this.Cp=null,this.Tp=null,this.Pp=null,this.Rp=null,this.Dp=!1,this.Vp=new me,this.Op=new me,this.Bp=0,this.Ap=!1,this.Ip=null,this.zp=!1,this.Lp=null,this.Ep=null,this.jv=!1,this.Hv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Uv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Qd=e,this.Np=i,this.Np.W_().l(this.Fp.bind(this),this,!0),this.Wp=document.createElement("td"),this.Wp.style.padding="0",this.Wp.style.position="relative";const n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.position="relative",n.style.overflow="hidden",this.jp=document.createElement("td"),this.jp.style.padding="0",this.Hp=document.createElement("td"),this.Hp.style.padding="0",this.Wp.appendChild(n),this.Gv=$i(n,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const s=this.Gv.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.Jv=$i(n,ie({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const r=this.Jv.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0",this.$p=document.createElement("tr"),this.$p.appendChild(this.jp),this.$p.appendChild(this.Wp),this.$p.appendChild(this.Hp),this.Up(),this.hp=new Jc(this.Jv.canvasElement,this,{ev:()=>this.Ip===null&&!this.Qd.W().handleScroll.vertTouchDrag,rv:()=>this.Ip===null&&!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.Cp!==null&&this.Cp.S(),this.Tp!==null&&this.Tp.S(),this.Pp=null,this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Di(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose(),this.Np!==null&&this.Np.W_().p(this),this.hp.S()}fp(){return E(this.Np)}qp(e){var i,n;this.Np!==null&&this.Np.W_().p(this),this.Np=e,this.Np!==null&&this.Np.W_().l(Zc.prototype.Fp.bind(this),this,!0),this.Up(),this.Qd.Yp().indexOf(this)===this.Qd.Yp().length-1?(this.Pp=(i=this.Pp)!==null&&i!==void 0?i:new P2(this.Wp,this.Qd),this.Pp.bt()):((n=this.Pp)===null||n===void 0||n.if(),this.Pp=null)}$v(){return this.Qd}lp(){return this.$p}Up(){if(this.Np!==null&&(this.Zp(),this.$i().wt().length!==0)){if(this.Cp!==null){const e=this.Np.R_();this.Cp.Gi(E(e))}if(this.Tp!==null){const e=this.Np.D_();this.Tp.Gi(E(e))}}}Xp(){this.Cp!==null&&this.Cp.bt(),this.Tp!==null&&this.Tp.bt()}M_(){return this.Np!==null?this.Np.M_():0}x_(e){this.Np&&this.Np.x_(e)}Qf(e){if(!this.Np)return;this.Kp();const i=e.localX,n=e.localY;this.Gp(i,n,e)}bv(e){this.Kp(),this.Jp(),this.Gp(e.localX,e.localY,e)}tv(e){var i;if(!this.Np)return;this.Kp();const n=e.localX,s=e.localY;this.Gp(n,s,e);const r=this.wr(n,s);this.Qd.Qp((i=r==null?void 0:r.Lv)!==null&&i!==void 0?i:null),this.$i().jc(r&&{Hc:r.Hc,Iv:r.Iv})}dv(e){this.Np!==null&&(this.Kp(),this.tm(e))}qf(e){this.Np!==null&&this.im(this.Op,e)}jf(e){this.qf(e)}av(e){this.Kp(),this.nm(e),this.Gp(e.localX,e.localY,e)}cv(e){this.Np!==null&&(this.Kp(),this.Ap=!1,this.sm(e))}uv(e){this.Np!==null&&this.tm(e)}Rv(e){if(this.Ap=!0,this.Ip===null){const i={x:e.localX,y:e.localY};this.rm(i,i,e)}}Pv(e){this.Np!==null&&(this.Kp(),this.Np.$t().jc(null),this.hm())}lm(){return this.Vp}am(){return this.Op}xv(){this.Bp=1,this.$i().Un()}Sv(e,i){if(!this.Qd.W().handleScale.pinch)return;const n=5*(i-this.Bp);this.Bp=i,this.$i().Qc(e.nt,n)}pv(e){this.Ap=!1,this.zp=this.Ip!==null,this.Jp();const i=this.$i().Zc();this.Ip!==null&&i.yt()&&(this.Lp={x:i.Yt(),y:i.Zt()},this.Ip={x:e.localX,y:e.localY})}hv(e){if(this.Np===null)return;const i=e.localX,n=e.localY;if(this.Ip===null)this.nm(e);else{this.zp=!1;const s=E(this.Lp),r=s.x+(i-this.Ip.x),a=s.y+(n-this.Ip.y);this.Gp(r,a,e)}}_v(e){this.$v().W().trackingMode.exitMode===0&&(this.zp=!0),this.om(),this.sm(e)}wr(e,i){const n=this.Np;return n===null?null:function(s,r,a){const c=s.Uo(),o=function(u,h,d){var f,p;let m,x;for(const v of u){const y=(p=(f=v.va)===null||f===void 0?void 0:f.call(v,h,d))!==null&&p!==void 0?p:[];for(const k of y)b=k.zOrder,(!(g=m==null?void 0:m.zOrder)||b==="top"&&g!=="top"||b==="normal"&&g==="bottom")&&(m=k,x=v)}var b,g;return m&&x?{zv:m,Hc:x}:null}(c,r,a);if((o==null?void 0:o.zv.zOrder)==="top")return cr(o);for(const u of c){if(o&&o.Hc===u&&o.zv.zOrder!=="bottom"&&!o.zv.isBackground)return cr(o);const h=R2(u.Pn(s),r,a);if(h!==null)return{Hc:u,Bv:h.Bv,Iv:h.Iv};if(o&&o.Hc===u&&o.zv.zOrder!=="bottom"&&o.zv.isBackground)return cr(o)}return o!=null&&o.zv?cr(o):null}(n,e,i)}_m(e,i){E(i==="left"?this.Cp:this.Tp).cp(ie({width:e,height:this.Ev.height}))}um(){return this.Ev}cp(e){Ni(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Wp.style.width=e.width+"px",this.Wp.style.height=e.height+"px")}dm(){const e=E(this.Np);e.P_(e.R_()),e.P_(e.D_());for(const i of e.Ba())if(e.vr(i)){const n=i.Dt();n!==null&&e.P_(n),i.Vn()}}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0||this.Np===null)return;if(e>1&&this.dm(),this.Cp!==null&&this.Cp.vp(e),this.Tp!==null&&this.Tp.vp(e),e!==1){this.Gv.applySuggestedBitmapSize();const n=Li(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(s=>{this.mp(s)}),this.Np&&(this.fm(n,$2),this.vm(n),this.pm(n),this.fm(n,ur),this.fm(n,D2)))}this.Jv.applySuggestedBitmapSize();const i=Li(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:s})=>{n.clearRect(0,0,s.width,s.height)}),this.bm(i),this.fm(i,B2))}wm(){return this.Cp}gm(){return this.Tp}bp(e,i){this.fm(e,i)}Fp(){this.Np!==null&&this.Np.W_().p(this),this.Np=null}tm(e){this.im(this.Vp,e)}im(e,i){const n=i.localX,s=i.localY;e.M()&&e.m(this.$i().St().Nu(n),{x:n,y:s},i)}mp({context:e,bitmapSize:i}){const{width:n,height:s}=i,r=this.$i(),a=r.q(),c=r.bd();a===c?Nl(e,0,0,n,s,c):jm(e,0,0,n,s,a,c)}vm(e){const i=E(this.Np).j_().qh().gt();i!==null&&i.X(e,!1)}pm(e){const i=this.$i().Yc();this.Mm(e,ur,Po,i),this.Mm(e,ur,Mr,i)}bm(e){this.Mm(e,ur,Mr,this.$i().Zc())}fm(e,i){const n=E(this.Np).Uo();for(const s of n)this.Mm(e,i,Po,s);for(const s of n)this.Mm(e,i,Mr,s)}Mm(e,i,n,s){const r=E(this.Np),a=r.$t().Wc(),c=a!==null&&a.Hc===s,o=a!==null&&c&&a.Iv!==void 0?a.Iv.Mr:void 0;Lo(i,u=>n(u,e,c,o),s,r)}Zp(){if(this.Np===null)return;const e=this.Qd,i=this.Np.R_().W().visible,n=this.Np.D_().W().visible;i||this.Cp===null||(this.jp.removeChild(this.Cp.lp()),this.Cp.S(),this.Cp=null),n||this.Tp===null||(this.Hp.removeChild(this.Tp.lp()),this.Tp.S(),this.Tp=null);const s=e.$t().ud();i&&this.Cp===null&&(this.Cp=new vd(this,e.W(),s,"left"),this.jp.appendChild(this.Cp.lp())),n&&this.Tp===null&&(this.Tp=new vd(this,e.W(),s,"right"),this.Hp.appendChild(this.Tp.lp()))}xm(e){return e.Dv&&this.Ap||this.Ip!==null}Sm(e){return Math.max(0,Math.min(e,this.Ev.width-1))}km(e){return Math.max(0,Math.min(e,this.Ev.height-1))}Gp(e,i,n){this.$i().ld(this.Sm(e),this.km(i),n,E(this.Np))}hm(){this.$i().od()}om(){this.zp&&(this.Ip=null,this.hm())}rm(e,i,n){this.Ip=e,this.zp=!1,this.Gp(i.x,i.y,n);const s=this.$i().Zc();this.Lp={x:s.Yt(),y:s.Zt()}}$i(){return this.Qd.$t()}sm(e){if(!this.Dp)return;const i=this.$i(),n=this.fp();if(i.z_(n,n.vn()),this.Rp=null,this.Dp=!1,i.ed(),this.Ep!==null){const s=performance.now(),r=i.St();this.Ep.Vr(r.Hu(),s),this.Ep.Qu(s)||i.Zn(this.Ep)}}Kp(){this.Ip=null}Jp(){if(this.Np){if(this.$i().Un(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)E(document.activeElement).blur();else{const e=document.getSelection();e!==null&&e.removeAllRanges()}!this.Np.vn().Ni()&&this.$i().St().Ni()}}nm(e){if(this.Np===null)return;const i=this.$i(),n=i.St();if(n.Ni())return;const s=this.Qd.W(),r=s.handleScroll,a=s.kineticScroll;if((!r.pressedMouseMove||e.Dv)&&(!r.horzTouchDrag&&!r.vertTouchDrag||!e.Dv))return;const c=this.Np.vn(),o=performance.now();if(this.Rp!==null||this.xm(e)||(this.Rp={x:e.clientX,y:e.clientY,Od:o,ym:e.localX,Cm:e.localY}),this.Rp!==null&&!this.Dp&&(this.Rp.x!==e.clientX||this.Rp.y!==e.clientY)){if(e.Dv&&a.touch||!e.Dv&&a.mouse){const u=n.le();this.Ep=new T2(.2/u,7/u,.997,15/u),this.Ep.Yd(n.Hu(),this.Rp.Od)}else this.Ep=null;c.Ni()||i.A_(this.Np,c,e.localY),i.nd(e.localX),this.Dp=!0}this.Dp&&(c.Ni()||i.I_(this.Np,c,e.localY),i.sd(e.localX),this.Ep!==null&&this.Ep.Yd(n.Hu(),o))}}class xd{constructor(e,i,n,s,r){this.ft=!0,this.Ev=ie({width:0,height:0}),this.Hv=()=>this.vp(3),this.qv=e==="left",this.Oc=n.ud,this.cn=i,this.Tm=s,this.Pm=r,this.Kv=document.createElement("div"),this.Kv.style.width="25px",this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Gv=$i(this.Kv,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv)}S(){this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Kv}um(){return this.Ev}cp(e){Ni(this.Ev,e)||(this.Ev=e,this.Gv.resizeCanvasElement(e),this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.ft=!0)}vp(e){if(e<3&&!this.ft||this.Ev.width===0||this.Ev.height===0)return;this.ft=!1,this.Gv.applySuggestedBitmapSize();const i=Li(this.Gv);i!==null&&i.useBitmapCoordinateSpace(n=>{this.mp(n),this.Ie(n)})}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(!this.Tm())return;e.fillStyle=this.cn.timeScale.borderColor;const r=Math.floor(this.Oc.W().C*n),a=Math.floor(this.Oc.W().C*s),c=this.qv?i.width-r:0;e.fillRect(c,0,r,a)}mp({context:e,bitmapSize:i}){Nl(e,0,0,i.width,i.height,this.Pm())}}function eu(t){return e=>{var i,n;return(n=(i=e.fa)===null||i===void 0?void 0:i.call(e,t))!==null&&n!==void 0?n:[]}}const A2=eu("normal"),I2=eu("top"),O2=eu("bottom");class F2{constructor(e,i){this.Rm=null,this.Dm=null,this.k=null,this.Vm=!1,this.Ev=ie({width:0,height:0}),this.Om=new me,this.Fv=new Ss(5),this.jv=!1,this.Hv=()=>{this.jv||this.Qd.$t().Uh()},this.Uv=()=>{this.jv||this.Qd.$t().Uh()},this.Qd=e,this.q_=i,this.cn=e.W().layout,this.Xd=document.createElement("tr"),this.Bm=document.createElement("td"),this.Bm.style.padding="0",this.Am=document.createElement("td"),this.Am.style.padding="0",this.Kv=document.createElement("td"),this.Kv.style.height="25px",this.Kv.style.padding="0",this.Im=document.createElement("div"),this.Im.style.width="100%",this.Im.style.height="100%",this.Im.style.position="relative",this.Im.style.overflow="hidden",this.Kv.appendChild(this.Im),this.Gv=$i(this.Im,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const n=this.Gv.canvasElement;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.Jv=$i(this.Im,ie({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const s=this.Jv.canvasElement;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.Xd.appendChild(this.Bm),this.Xd.appendChild(this.Kv),this.Xd.appendChild(this.Am),this.zm(),this.Qd.$t().g_().l(this.zm.bind(this),this),this.hp=new Jc(this.Jv.canvasElement,this,{ev:()=>!0,rv:()=>!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.hp.S(),this.Rm!==null&&this.Rm.S(),this.Dm!==null&&this.Dm.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Di(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Xd}Lm(){return this.Rm}Em(){return this.Dm}bv(e){if(this.Vm)return;this.Vm=!0;const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.Jc(e.localX)}pv(e){this.bv(e)}wv(){const e=this.Qd.$t();!e.St().Ni()&&this.Vm&&(this.Vm=!1,this.Qd.W().handleScale.axisPressedMouseMove.time&&e.hd())}av(e){const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.rd(e.localX)}hv(e){this.av(e)}cv(){this.Vm=!1;const e=this.Qd.$t();e.St().Ni()&&!this.Qd.W().handleScale.axisPressedMouseMove.time||e.hd()}_v(){this.cv()}qf(){this.Qd.W().handleScale.axisDoubleClickReset.time&&this.Qd.$t().Kn()}jf(){this.qf()}Qf(){this.Qd.$t().W().handleScale.axisPressedMouseMove.time&&this.kp(1)}Pv(){this.kp(0)}um(){return this.Ev}Nm(){return this.Om}Fm(e,i,n){Ni(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.Om.m(e)),this.Rm!==null&&this.Rm.cp(ie({width:i,height:e.height})),this.Dm!==null&&this.Dm.cp(ie({width:n,height:e.height}))}Wm(){const e=this.jm();return Math.ceil(e.C+e.T+e.P+e.L+e.B+e.Hm)}bt(){this.Qd.$t().St().Ha()}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0)return;if(e!==1){this.Gv.applySuggestedBitmapSize();const n=Li(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(s=>{this.mp(s),this.Ie(s),this.$m(n,O2)}),this.wp(n),this.$m(n,A2)),this.Rm!==null&&this.Rm.vp(e),this.Dm!==null&&this.Dm.vp(e)}this.Jv.applySuggestedBitmapSize();const i=Li(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:s})=>{n.clearRect(0,0,s.width,s.height)}),this.Um([...this.Qd.$t().wt(),this.Qd.$t().Zc()],i),this.$m(i,I2))}$m(e,i){const n=this.Qd.$t().wt();for(const s of n)Lo(i,r=>Po(r,e,!1,void 0),s,void 0);for(const s of n)Lo(i,r=>Mr(r,e,!1,void 0),s,void 0)}mp({context:e,bitmapSize:i}){Nl(e,0,0,i.width,i.height,this.Qd.$t().bd())}Ie({context:e,bitmapSize:i,verticalPixelRatio:n}){if(this.Qd.W().timeScale.borderVisible){e.fillStyle=this.qm();const s=Math.max(1,Math.floor(this.jm().C*n));e.fillRect(0,0,i.width,s)}}wp(e){const i=this.Qd.$t().St(),n=i.Ha();if(!n||n.length===0)return;const s=this.q_.maxTickMarkWeight(n),r=this.jm(),a=i.W();a.borderVisible&&a.ticksVisible&&e.useBitmapCoordinateSpace(({context:c,horizontalPixelRatio:o,verticalPixelRatio:u})=>{c.strokeStyle=this.qm(),c.fillStyle=this.qm();const h=Math.max(1,Math.floor(o)),d=Math.floor(.5*o);c.beginPath();const f=Math.round(r.T*u);for(let p=n.length;p--;){const m=Math.round(n[p].coord*o);c.rect(m-d,0,h,f)}c.fill()}),e.useMediaCoordinateSpace(({context:c})=>{const o=r.C+r.T+r.L+r.P/2;c.textAlign="center",c.textBaseline="middle",c.fillStyle=this.$(),c.font=this._p();for(const u of n)if(u.weight<s){const h=u.needAlignCoordinate?this.Ym(c,u.coord,u.label):u.coord;c.fillText(u.label,h,o)}this.Qd.W().timeScale.allowBoldLabels&&(c.font=this.Zm());for(const u of n)if(u.weight>=s){const h=u.needAlignCoordinate?this.Ym(c,u.coord,u.label):u.coord;c.fillText(u.label,h,o)}})}Ym(e,i,n){const s=this.Fv.xi(e,n),r=s/2,a=Math.floor(i-r)+.5;return a<0?i+=Math.abs(0-a):a+s>this.Ev.width&&(i-=Math.abs(this.Ev.width-(a+s))),i}Um(e,i){const n=this.jm();for(const s of e)for(const r of s.Qi())r.gt().X(i,n)}qm(){return this.Qd.W().timeScale.borderColor}$(){return this.cn.textColor}j(){return this.cn.fontSize}_p(){return yn(this.j(),this.cn.fontFamily)}Zm(){return yn(this.j(),this.cn.fontFamily,"bold")}jm(){this.k===null&&(this.k={C:1,N:NaN,L:NaN,B:NaN,ji:NaN,T:5,P:NaN,R:"",Wi:new Ss,Hm:0});const e=this.k,i=this._p();if(e.R!==i){const n=this.j();e.P=n,e.R=i,e.L=3*n/12,e.B=3*n/12,e.ji=9*n/12,e.N=0,e.Hm=4*n/12,e.Wi.nr()}return this.k}kp(e){this.Kv.style.cursor=e===1?"ew-resize":"default"}zm(){const e=this.Qd.$t(),i=e.W();i.leftPriceScale.visible||this.Rm===null||(this.Bm.removeChild(this.Rm.lp()),this.Rm.S(),this.Rm=null),i.rightPriceScale.visible||this.Dm===null||(this.Am.removeChild(this.Dm.lp()),this.Dm.S(),this.Dm=null);const n={ud:this.Qd.$t().ud()},s=()=>i.leftPriceScale.borderVisible&&e.St().W().borderVisible,r=()=>e.bd();i.leftPriceScale.visible&&this.Rm===null&&(this.Rm=new xd("left",i,n,s,r),this.Bm.appendChild(this.Rm.lp())),i.rightPriceScale.visible&&this.Dm===null&&(this.Dm=new xd("right",i,n,s,r),this.Am.appendChild(this.Dm.lp()))}}const V2=!!bn&&!!navigator.userAgentData&&navigator.userAgentData.brands.some(t=>t.brand.includes("Chromium"))&&!!bn&&(!((ja=navigator==null?void 0:navigator.userAgentData)===null||ja===void 0)&&ja.platform?navigator.userAgentData.platform==="Windows":navigator.userAgent.toLowerCase().indexOf("win")>=0);var ja;class U2{constructor(e,i,n){var s;this.Xm=[],this.Km=0,this.ho=0,this.__=0,this.Gm=0,this.Jm=0,this.Qm=null,this.tb=!1,this.Vp=new me,this.Op=new me,this.Rc=new me,this.ib=null,this.nb=null,this.Jd=e,this.cn=i,this.q_=n,this.Xd=document.createElement("div"),this.Xd.classList.add("tv-lightweight-charts"),this.Xd.style.overflow="hidden",this.Xd.style.direction="ltr",this.Xd.style.width="100%",this.Xd.style.height="100%",(s=this.Xd).style.userSelect="none",s.style.webkitUserSelect="none",s.style.msUserSelect="none",s.style.MozUserSelect="none",s.style.webkitTapHighlightColor="transparent",this.sb=document.createElement("table"),this.sb.setAttribute("cellspacing","0"),this.Xd.appendChild(this.sb),this.eb=this.rb.bind(this),Sa(this.cn)&&this.hb(!0),this.$i=new C2(this.Vc.bind(this),this.cn,n),this.$t().Xc().l(this.lb.bind(this),this),this.ab=new F2(this,this.q_),this.sb.appendChild(this.ab.lp());const r=i.autoSize&&this.ob();let a=this.cn.width,c=this.cn.height;if(r||a===0||c===0){const o=e.getBoundingClientRect();a=a||o.width,c=c||o.height}this._b(a,c),this.ub(),e.appendChild(this.Xd),this.cb(),this.$i.St().ec().l(this.$i.Kl.bind(this.$i),this),this.$i.g_().l(this.$i.Kl.bind(this.$i),this)}$t(){return this.$i}W(){return this.cn}Yp(){return this.Xm}fb(){return this.ab}S(){this.hb(!1),this.Km!==0&&window.cancelAnimationFrame(this.Km),this.$i.Xc().p(this),this.$i.St().ec().p(this),this.$i.g_().p(this),this.$i.S();for(const e of this.Xm)this.sb.removeChild(e.lp()),e.lm().p(this),e.am().p(this),e.S();this.Xm=[],E(this.ab).S(),this.Xd.parentElement!==null&&this.Xd.parentElement.removeChild(this.Xd),this.Rc.S(),this.Vp.S(),this.Op.S(),this.pb()}_b(e,i,n=!1){if(this.ho===i&&this.__===e)return;const s=function(c){const o=Math.floor(c.width),u=Math.floor(c.height);return ie({width:o-o%2,height:u-u%2})}(ie({width:e,height:i}));this.ho=s.height,this.__=s.width;const r=this.ho+"px",a=this.__+"px";E(this.Xd).style.height=r,E(this.Xd).style.width=a,this.sb.style.height=r,this.sb.style.width=a,n?this.mb(Ce.es(),performance.now()):this.$i.Kl()}vp(e){e===void 0&&(e=Ce.es());for(let i=0;i<this.Xm.length;i++)this.Xm[i].vp(e.Hn(i).Fn);this.cn.timeScale.visible&&this.ab.vp(e.jn())}$h(e){const i=Sa(this.cn);this.$i.$h(e);const n=Sa(this.cn);n!==i&&this.hb(n),this.cb(),this.bb(e)}lm(){return this.Vp}am(){return this.Op}Xc(){return this.Rc}wb(){this.Qm!==null&&(this.mb(this.Qm,performance.now()),this.Qm=null);const e=this.gb(null),i=document.createElement("canvas");i.width=e.width,i.height=e.height;const n=E(i.getContext("2d"));return this.gb(n),i}Mb(e){return e==="left"&&!this.xb()||e==="right"&&!this.Sb()||this.Xm.length===0?0:E(e==="left"?this.Xm[0].wm():this.Xm[0].gm()).dp()}kb(){return this.cn.autoSize&&this.ib!==null}yb(){return this.Xd}Qp(e){this.nb=e,this.nb?this.yb().style.setProperty("cursor",e):this.yb().style.removeProperty("cursor")}Cb(){return this.nb}Tb(){return Ae(this.Xm[0]).um()}bb(e){(e.autoSize!==void 0||!this.ib||e.width===void 0&&e.height===void 0)&&(e.autoSize&&!this.ib&&this.ob(),e.autoSize===!1&&this.ib!==null&&this.pb(),e.autoSize||e.width===void 0&&e.height===void 0||this._b(e.width||this.__,e.height||this.ho))}gb(e){let i=0,n=0;const s=this.Xm[0],r=(c,o)=>{let u=0;for(let h=0;h<this.Xm.length;h++){const d=this.Xm[h],f=E(c==="left"?d.wm():d.gm()),p=f.xp();e!==null&&f.Sp(e,o,u),u+=p.height}};this.xb()&&(r("left",0),i+=E(s.wm()).xp().width);for(let c=0;c<this.Xm.length;c++){const o=this.Xm[c],u=o.xp();e!==null&&o.Sp(e,i,n),n+=u.height}i+=s.xp().width,this.Sb()&&(r("right",i),i+=E(s.gm()).xp().width);const a=(c,o,u)=>{E(c==="left"?this.ab.Lm():this.ab.Em()).Sp(E(e),o,u)};if(this.cn.timeScale.visible){const c=this.ab.xp();if(e!==null){let o=0;this.xb()&&(a("left",o,n),o=E(s.wm()).xp().width),this.ab.Sp(e,o,n),o+=c.width,this.Sb()&&a("right",o,n)}n+=c.height}return ie({width:i,height:n})}Pb(){let e=0,i=0,n=0;for(const m of this.Xm)this.xb()&&(i=Math.max(i,E(m.wm()).op(),this.cn.leftPriceScale.minimumWidth)),this.Sb()&&(n=Math.max(n,E(m.gm()).op(),this.cn.rightPriceScale.minimumWidth)),e+=m.M_();i=To(i),n=To(n);const s=this.__,r=this.ho,a=Math.max(s-i-n,0),c=this.cn.timeScale.visible;let o=c?Math.max(this.ab.Wm(),this.cn.timeScale.minimumHeight):0;var u;o=(u=o)+u%2;const h=0+o,d=r<h?0:r-h,f=d/e;let p=0;for(let m=0;m<this.Xm.length;++m){const x=this.Xm[m];x.qp(this.$i.qc()[m]);let b=0,g=0;g=m===this.Xm.length-1?d-p:Math.round(x.M_()*f),b=Math.max(g,2),p+=b,x.cp(ie({width:a,height:b})),this.xb()&&x._m(i,"left"),this.Sb()&&x._m(n,"right"),x.fp()&&this.$i.Kc(x.fp(),b)}this.ab.Fm(ie({width:c?a:0,height:o}),c?i:0,c?n:0),this.$i.S_(a),this.Gm!==i&&(this.Gm=i),this.Jm!==n&&(this.Jm=n)}hb(e){e?this.Xd.addEventListener("wheel",this.eb,{passive:!1}):this.Xd.removeEventListener("wheel",this.eb)}Rb(e){switch(e.deltaMode){case e.DOM_DELTA_PAGE:return 120;case e.DOM_DELTA_LINE:return 32}return V2?1/window.devicePixelRatio:1}rb(e){if(!(e.deltaX!==0&&this.cn.handleScroll.mouseWheel||e.deltaY!==0&&this.cn.handleScale.mouseWheel))return;const i=this.Rb(e),n=i*e.deltaX/100,s=-i*e.deltaY/100;if(e.cancelable&&e.preventDefault(),s!==0&&this.cn.handleScale.mouseWheel){const r=Math.sign(s)*Math.min(1,Math.abs(s)),a=e.clientX-this.Xd.getBoundingClientRect().left;this.$t().Qc(a,r)}n!==0&&this.cn.handleScroll.mouseWheel&&this.$t().td(-80*n)}mb(e,i){var n;const s=e.jn();s===3&&this.Db(),s!==3&&s!==2||(this.Vb(e),this.Ob(e,i),this.ab.bt(),this.Xm.forEach(r=>{r.Xp()}),((n=this.Qm)===null||n===void 0?void 0:n.jn())===3&&(this.Qm.ts(e),this.Db(),this.Vb(this.Qm),this.Ob(this.Qm,i),e=this.Qm,this.Qm=null)),this.vp(e)}Ob(e,i){for(const n of e.Qn())this.ns(n,i)}Vb(e){const i=this.$i.qc();for(let n=0;n<i.length;n++)e.Hn(n).Wn&&i[n].N_()}ns(e,i){const n=this.$i.St();switch(e.qn){case 0:n.hc();break;case 1:n.lc(e.Vt);break;case 2:n.Gn(e.Vt);break;case 3:n.Jn(e.Vt);break;case 4:n.qu();break;case 5:e.Vt.Qu(i)||n.Jn(e.Vt.tc(i))}}Vc(e){this.Qm!==null?this.Qm.ts(e):this.Qm=e,this.tb||(this.tb=!0,this.Km=window.requestAnimationFrame(i=>{if(this.tb=!1,this.Km=0,this.Qm!==null){const n=this.Qm;this.Qm=null,this.mb(n,i);for(const s of n.Qn())if(s.qn===5&&!s.Vt.Qu(i)){this.$t().Zn(s.Vt);break}}}))}Db(){this.ub()}ub(){const e=this.$i.qc(),i=e.length,n=this.Xm.length;for(let s=i;s<n;s++){const r=Ae(this.Xm.pop());this.sb.removeChild(r.lp()),r.lm().p(this),r.am().p(this),r.S()}for(let s=n;s<i;s++){const r=new Zc(this,e[s]);r.lm().l(this.Bb.bind(this),this),r.am().l(this.Ab.bind(this),this),this.Xm.push(r),this.sb.insertBefore(r.lp(),this.ab.lp())}for(let s=0;s<i;s++){const r=e[s],a=this.Xm[s];a.fp()!==r?a.qp(r):a.Up()}this.cb(),this.Pb()}Ib(e,i,n){var s;const r=new Map;e!==null&&this.$i.wt().forEach(h=>{const d=h.In().ll(e);d!==null&&r.set(h,d)});let a;if(e!==null){const h=(s=this.$i.St().Ui(e))===null||s===void 0?void 0:s.originalTime;h!==void 0&&(a=h)}const c=this.$t().Wc(),o=c!==null&&c.Hc instanceof Yc?c.Hc:void 0,u=c!==null&&c.Iv!==void 0?c.Iv.gr:void 0;return{zb:a,ee:e??void 0,Lb:i??void 0,Eb:o,Nb:r,Fb:u,Wb:n??void 0}}Bb(e,i,n){this.Vp.m(()=>this.Ib(e,i,n))}Ab(e,i,n){this.Op.m(()=>this.Ib(e,i,n))}lb(e,i,n){this.Rc.m(()=>this.Ib(e,i,n))}cb(){const e=this.cn.timeScale.visible?"":"none";this.ab.lp().style.display=e}xb(){return this.Xm[0].fp().R_().W().visible}Sb(){return this.Xm[0].fp().D_().W().visible}ob(){return"ResizeObserver"in window&&(this.ib=new ResizeObserver(e=>{const i=e.find(n=>n.target===this.Jd);i&&this._b(i.contentRect.width,i.contentRect.height)}),this.ib.observe(this.Jd,{box:"border-box"}),!0)}pb(){this.ib!==null&&this.ib.disconnect(),this.ib=null}}function Sa(t){return!!(t.handleScroll.mouseWheel||t.handleScale.mouseWheel)}function W2(t){return function(e){return e.open!==void 0}(t)||function(e){return e.value!==void 0}(t)}function Vm(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}function yd(t,e,i,n){const s=i.value,r={ee:e,ot:t,Vt:[s,s,s,s],zb:n};return i.color!==void 0&&(r.V=i.color),r}function H2(t,e,i,n){const s=i.value,r={ee:e,ot:t,Vt:[s,s,s,s],zb:n};return i.lineColor!==void 0&&(r.lt=i.lineColor),i.topColor!==void 0&&(r.Ps=i.topColor),i.bottomColor!==void 0&&(r.Rs=i.bottomColor),r}function q2(t,e,i,n){const s=i.value,r={ee:e,ot:t,Vt:[s,s,s,s],zb:n};return i.topLineColor!==void 0&&(r.Re=i.topLineColor),i.bottomLineColor!==void 0&&(r.De=i.bottomLineColor),i.topFillColor1!==void 0&&(r.ke=i.topFillColor1),i.topFillColor2!==void 0&&(r.ye=i.topFillColor2),i.bottomFillColor1!==void 0&&(r.Ce=i.bottomFillColor1),i.bottomFillColor2!==void 0&&(r.Te=i.bottomFillColor2),r}function K2(t,e,i,n){const s={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(s.V=i.color),s}function X2(t,e,i,n){const s={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(s.V=i.color),i.borderColor!==void 0&&(s.Ot=i.borderColor),i.wickColor!==void 0&&(s.Xh=i.wickColor),s}function Q2(t,e,i,n,s){const r=Ae(s)(i),a=Math.max(...r),c=Math.min(...r),o=r[r.length-1],u=[o,a,c,o],h=i,{time:d,color:f}=h;return{ee:e,ot:t,Vt:u,zb:n,$e:Vm(h,["time","color"]),V:f}}function hr(t){return t.Vt!==void 0}function bd(t,e){return e.customValues!==void 0&&(t.jb=e.customValues),t}function mi(t){return(e,i,n,s,r,a)=>function(c,o){return o?o(c):(u=c).open===void 0&&u.value===void 0;var u}(n,a)?bd({ot:e,ee:i,zb:s},n):bd(t(e,i,n,s,r),n)}function wd(t){return{Candlestick:mi(X2),Bar:mi(K2),Area:mi(H2),Baseline:mi(q2),Histogram:mi(yd),Line:mi(yd),Custom:mi(Q2)}[t]}function kd(t){return{ee:0,Hb:new Map,la:t}}function jd(t,e){if(t!==void 0&&t.length!==0)return{$b:e.key(t[0].ot),Ub:e.key(t[t.length-1].ot)}}function Sd(t){let e;return t.forEach(i=>{e===void 0&&(e=i.zb)}),Ae(e)}class Y2{constructor(e){this.qb=new Map,this.Yb=new Map,this.Zb=new Map,this.Xb=[],this.q_=e}S(){this.qb.clear(),this.Yb.clear(),this.Zb.clear(),this.Xb=[]}Kb(e,i){let n=this.qb.size!==0,s=!1;const r=this.Yb.get(e);if(r!==void 0)if(this.Yb.size===1)n=!1,s=!0,this.qb.clear();else for(const o of this.Xb)o.pointData.Hb.delete(e)&&(s=!0);let a=[];if(i.length!==0){const o=i.map(p=>p.time),u=this.q_.createConverterToInternalObj(i),h=wd(e.Qh()),d=e.Ca(),f=e.Ta();a=i.map((p,m)=>{const x=u(p.time),b=this.q_.key(x);let g=this.qb.get(b);g===void 0&&(g=kd(x),this.qb.set(b,g),s=!0);const v=h(x,g.ee,p,o[m],d,f);return g.Hb.set(e,v),v})}n&&this.Gb(),this.Jb(e,a);let c=-1;if(s){const o=[];this.qb.forEach(u=>{o.push({timeWeight:0,time:u.la,pointData:u,originalTime:Sd(u.Hb)})}),o.sort((u,h)=>this.q_.key(u.time)-this.q_.key(h.time)),c=this.Qb(o)}return this.tw(e,c,function(o,u,h){const d=jd(o,h),f=jd(u,h);if(d!==void 0&&f!==void 0)return{ta:d.Ub>=f.Ub&&d.$b>=f.$b}}(this.Yb.get(e),r,this.q_))}vd(e){return this.Kb(e,[])}iw(e,i){const n=i;(function(x){x.zb===void 0&&(x.zb=x.time)})(n),this.q_.preprocessData(i);const s=this.q_.createConverterToInternalObj([i])(i.time),r=this.Zb.get(e);if(r!==void 0&&this.q_.key(s)<this.q_.key(r))throw new Error(`Cannot update oldest data, last time=${r}, new time=${s}`);let a=this.qb.get(this.q_.key(s));const c=a===void 0;a===void 0&&(a=kd(s),this.qb.set(this.q_.key(s),a));const o=wd(e.Qh()),u=e.Ca(),h=e.Ta(),d=o(s,a.ee,i,n.zb,u,h);a.Hb.set(e,d),this.nw(e,d);const f={ta:hr(d)};if(!c)return this.tw(e,-1,f);const p={timeWeight:0,time:a.la,pointData:a,originalTime:Sd(a.Hb)},m=$s(this.Xb,this.q_.key(p.time),(x,b)=>this.q_.key(x.time)<b);this.Xb.splice(m,0,p);for(let x=m;x<this.Xb.length;++x)Na(this.Xb[x].pointData,x);return this.q_.fillWeightsForPoints(this.Xb,m),this.tw(e,m,f)}nw(e,i){let n=this.Yb.get(e);n===void 0&&(n=[],this.Yb.set(e,n));const s=n.length!==0?n[n.length-1]:null;s===null||this.q_.key(i.ot)>this.q_.key(s.ot)?hr(i)&&n.push(i):hr(i)?n[n.length-1]=i:n.splice(-1,1),this.Zb.set(e,i.ot)}Jb(e,i){i.length!==0?(this.Yb.set(e,i.filter(hr)),this.Zb.set(e,i[i.length-1].ot)):(this.Yb.delete(e),this.Zb.delete(e))}Gb(){for(const e of this.Xb)e.pointData.Hb.size===0&&this.qb.delete(this.q_.key(e.time))}Qb(e){let i=-1;for(let n=0;n<this.Xb.length&&n<e.length;++n){const s=this.Xb[n],r=e[n];if(this.q_.key(s.time)!==this.q_.key(r.time)){i=n;break}r.timeWeight=s.timeWeight,Na(r.pointData,n)}if(i===-1&&this.Xb.length!==e.length&&(i=Math.min(this.Xb.length,e.length)),i===-1)return-1;for(let n=i;n<e.length;++n)Na(e[n].pointData,n);return this.q_.fillWeightsForPoints(e,i),this.Xb=e,i}sw(){if(this.Yb.size===0)return null;let e=0;return this.Yb.forEach(i=>{i.length!==0&&(e=Math.max(e,i[i.length-1].ee))}),e}tw(e,i,n){const s={ew:new Map,St:{Eu:this.sw()}};if(i!==-1)this.Yb.forEach((r,a)=>{s.ew.set(a,{$e:r,rw:a===e?n:void 0})}),this.Yb.has(e)||s.ew.set(e,{$e:[],rw:n}),s.St.hw=this.Xb,s.St.lw=i;else{const r=this.Yb.get(e);s.ew.set(e,{$e:r||[],rw:n})}return s}}function Na(t,e){t.ee=e,t.Hb.forEach(i=>{i.ee=e})}function tu(t){const e={value:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function Nd(t){const e=tu(t);return t.V!==void 0&&(e.color=t.V),e}function G2(t){const e=tu(t);return t.lt!==void 0&&(e.lineColor=t.lt),t.Ps!==void 0&&(e.topColor=t.Ps),t.Rs!==void 0&&(e.bottomColor=t.Rs),e}function J2(t){const e=tu(t);return t.Re!==void 0&&(e.topLineColor=t.Re),t.De!==void 0&&(e.bottomLineColor=t.De),t.ke!==void 0&&(e.topFillColor1=t.ke),t.ye!==void 0&&(e.topFillColor2=t.ye),t.Ce!==void 0&&(e.bottomFillColor1=t.Ce),t.Te!==void 0&&(e.bottomFillColor2=t.Te),e}function Um(t){const e={open:t.Vt[0],high:t.Vt[1],low:t.Vt[2],close:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function Z2(t){const e=Um(t);return t.V!==void 0&&(e.color=t.V),e}function eb(t){const e=Um(t),{V:i,Ot:n,Xh:s}=t;return i!==void 0&&(e.color=i),n!==void 0&&(e.borderColor=n),s!==void 0&&(e.wickColor=s),e}function Ro(t){return{Area:G2,Line:Nd,Baseline:J2,Histogram:Nd,Bar:Z2,Candlestick:eb,Custom:tb}[t]}function tb(t){const e=t.zb;return Object.assign(Object.assign({},t.$e),{time:e})}const ib={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1},nb={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},sb={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:Wc,attributionLogo:!0},Ca={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0},rb={rightOffset:0,barSpacing:6,minBarSpacing:.5,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0},lb={color:"rgba(0, 0, 0, 0)",visible:!1,fontSize:48,fontFamily:Wc,fontStyle:"",text:"",horzAlign:"center",vertAlign:"center"};function Cd(){return{width:0,height:0,autoSize:!1,layout:sb,crosshair:ib,grid:nb,overlayPriceScales:Object.assign({},Ca),leftPriceScale:Object.assign(Object.assign({},Ca),{visible:!1}),rightPriceScale:Object.assign(Object.assign({},Ca),{visible:!0}),timeScale:rb,watermark:lb,localization:{locale:bn?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class ab{constructor(e,i){this.aw=e,this.ow=i}applyOptions(e){this.aw.$t().$c(this.ow,e)}options(){return this.Li().W()}width(){return El(this.ow)?this.aw.Mb(this.ow):0}Li(){return E(this.aw.$t().Uc(this.ow)).Dt}}function Ed(t,e,i){const n=Vm(t,["time","originalTime"]),s=Object.assign({time:e},n);return i!==void 0&&(s.originalTime=i),s}const ob={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class cb{constructor(e){this.Nh=e}applyOptions(e){this.Nh.$h(e)}options(){return this.Nh.W()}_w(){return this.Nh}}class ub{constructor(e,i,n,s,r){this.uw=new me,this.Es=e,this.cw=i,this.dw=n,this.q_=r,this.fw=s}S(){this.uw.S()}priceFormatter(){return this.Es.ba()}priceToCoordinate(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().Rt(e,i.Vt)}coordinateToPrice(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().pn(e,i.Vt)}barsInLogicalRange(e){if(e===null)return null;const i=new un(new es(e.from,e.to)).lu(),n=this.Es.In();if(n.Ni())return null;const s=n.ll(i.Os(),1),r=n.ll(i.ui(),-1),a=E(n.el()),c=E(n.An());if(s!==null&&r!==null&&s.ee>r.ee)return{barsBefore:e.from-a,barsAfter:c-e.to};const o={barsBefore:s===null||s.ee===a?e.from-a:s.ee-a,barsAfter:r===null||r.ee===c?c-e.to:c-r.ee};return s!==null&&r!==null&&(o.from=s.zb,o.to=r.zb),o}setData(e){this.q_,this.Es.Qh(),this.cw.pw(this.Es,e),this.mw("full")}update(e){this.Es.Qh(),this.cw.bw(this.Es,e),this.mw("update")}dataByIndex(e,i){const n=this.Es.In().ll(e,i);return n===null?null:Ro(this.seriesType())(n)}data(){const e=Ro(this.seriesType());return this.Es.In().ne().map(i=>e(i))}subscribeDataChanged(e){this.uw.l(e)}unsubscribeDataChanged(e){this.uw.v(e)}setMarkers(e){this.q_;const i=e.map(n=>Ed(n,this.q_.convertHorzItemToInternal(n.time),n.time));this.Es.na(i)}markers(){return this.Es.sa().map(e=>Ed(e,e.originalTime,void 0))}applyOptions(e){this.Es.$h(e)}options(){return _t(this.Es.W())}priceScale(){return this.dw.priceScale(this.Es.Dt().Pa())}createPriceLine(e){const i=gt(_t(ob),e),n=this.Es.ea(i);return new cb(n)}removePriceLine(e){this.Es.ra(e._w())}seriesType(){return this.Es.Qh()}attachPrimitive(e){this.Es.ka(e),e.attached&&e.attached({chart:this.fw,series:this,requestUpdate:()=>this.Es.$t().Kl()})}detachPrimitive(e){this.Es.ya(e),e.detached&&e.detached()}mw(e){this.uw.M()&&this.uw.m(e)}}class hb{constructor(e,i,n){this.ww=new me,this.mu=new me,this.Om=new me,this.$i=e,this.yl=e.St(),this.ab=i,this.yl.nc().l(this.gw.bind(this)),this.yl.sc().l(this.Mw.bind(this)),this.ab.Nm().l(this.xw.bind(this)),this.q_=n}S(){this.yl.nc().p(this),this.yl.sc().p(this),this.ab.Nm().p(this),this.ww.S(),this.mu.S(),this.Om.S()}scrollPosition(){return this.yl.Hu()}scrollToPosition(e,i){i?this.yl.Ju(e,1e3):this.$i.Jn(e)}scrollToRealTime(){this.yl.Gu()}getVisibleRange(){const e=this.yl.Vu();return e===null?null:{from:e.from.originalTime,to:e.to.originalTime}}setVisibleRange(e){const i={from:this.q_.convertHorzItemToInternal(e.from),to:this.q_.convertHorzItemToInternal(e.to)},n=this.yl.Iu(i);this.$i.pd(n)}getVisibleLogicalRange(){const e=this.yl.Du();return e===null?null:{from:e.Os(),to:e.ui()}}setVisibleLogicalRange(e){ai(e.from<=e.to,"The from index cannot be after the to index."),this.$i.pd(e)}resetTimeScale(){this.$i.Kn()}fitContent(){this.$i.hc()}logicalToCoordinate(e){const i=this.$i.St();return i.Ni()?null:i.It(e)}coordinateToLogical(e){return this.yl.Ni()?null:this.yl.Nu(e)}timeToCoordinate(e){const i=this.q_.convertHorzItemToInternal(e),n=this.yl.Va(i,!1);return n===null?null:this.yl.It(n)}coordinateToTime(e){const i=this.$i.St(),n=i.Nu(e),s=i.Ui(n);return s===null?null:s.originalTime}width(){return this.ab.um().width}height(){return this.ab.um().height}subscribeVisibleTimeRangeChange(e){this.ww.l(e)}unsubscribeVisibleTimeRangeChange(e){this.ww.v(e)}subscribeVisibleLogicalRangeChange(e){this.mu.l(e)}unsubscribeVisibleLogicalRangeChange(e){this.mu.v(e)}subscribeSizeChange(e){this.Om.l(e)}unsubscribeSizeChange(e){this.Om.v(e)}applyOptions(e){this.yl.$h(e)}options(){return Object.assign(Object.assign({},_t(this.yl.W())),{barSpacing:this.yl.le()})}gw(){this.ww.M()&&this.ww.m(this.getVisibleRange())}Mw(){this.mu.M()&&this.mu.m(this.getVisibleLogicalRange())}xw(e){this.Om.m(e.width,e.height)}}function db(t){if(t===void 0||t.type==="custom")return;const e=t;e.minMove!==void 0&&e.precision===void 0&&(e.precision=function(i){if(i>=1)return 0;let n=0;for(;n<8;n++){const s=Math.round(i);if(Math.abs(s-i)<1e-8)return n;i*=10}return n}(e.minMove))}function zd(t){return function(e){if(ir(e.handleScale)){const n=e.handleScale;e.handleScale={axisDoubleClickReset:{time:n,price:n},axisPressedMouseMove:{time:n,price:n},mouseWheel:n,pinch:n}}else if(e.handleScale!==void 0){const{axisPressedMouseMove:n,axisDoubleClickReset:s}=e.handleScale;ir(n)&&(e.handleScale.axisPressedMouseMove={time:n,price:n}),ir(s)&&(e.handleScale.axisDoubleClickReset={time:s,price:s})}const i=e.handleScroll;ir(i)&&(e.handleScroll={horzTouchDrag:i,vertTouchDrag:i,mouseWheel:i,pressedMouseMove:i})}(t),t}class fb{constructor(e,i,n){this.Sw=new Map,this.kw=new Map,this.yw=new me,this.Cw=new me,this.Tw=new me,this.Pw=new Y2(i);const s=n===void 0?_t(Cd()):gt(_t(Cd()),zd(n));this.q_=i,this.aw=new U2(e,s,i),this.aw.lm().l(a=>{this.yw.M()&&this.yw.m(this.Rw(a()))},this),this.aw.am().l(a=>{this.Cw.M()&&this.Cw.m(this.Rw(a()))},this),this.aw.Xc().l(a=>{this.Tw.M()&&this.Tw.m(this.Rw(a()))},this);const r=this.aw.$t();this.Dw=new hb(r,this.aw.fb(),this.q_)}remove(){this.aw.lm().p(this),this.aw.am().p(this),this.aw.Xc().p(this),this.Dw.S(),this.aw.S(),this.Sw.clear(),this.kw.clear(),this.yw.S(),this.Cw.S(),this.Tw.S(),this.Pw.S()}resize(e,i,n){this.autoSizeActive()||this.aw._b(e,i,n)}addCustomSeries(e,i){const n=tn(e),s=Object.assign(Object.assign({},xm),n.defaultOptions());return this.Vw("Custom",s,i,n)}addAreaSeries(e){return this.Vw("Area",Y1,e)}addBaselineSeries(e){return this.Vw("Baseline",G1,e)}addBarSeries(e){return this.Vw("Bar",X1,e)}addCandlestickSeries(e={}){return function(i){i.borderColor!==void 0&&(i.borderUpColor=i.borderColor,i.borderDownColor=i.borderColor),i.wickColor!==void 0&&(i.wickUpColor=i.wickColor,i.wickDownColor=i.wickColor)}(e),this.Vw("Candlestick",K1,e)}addHistogramSeries(e){return this.Vw("Histogram",J1,e)}addLineSeries(e){return this.Vw("Line",Q1,e)}removeSeries(e){const i=Ae(this.Sw.get(e)),n=this.Pw.vd(i);this.aw.$t().vd(i),this.Ow(n),this.Sw.delete(e),this.kw.delete(i)}pw(e,i){this.Ow(this.Pw.Kb(e,i))}bw(e,i){this.Ow(this.Pw.iw(e,i))}subscribeClick(e){this.yw.l(e)}unsubscribeClick(e){this.yw.v(e)}subscribeCrosshairMove(e){this.Tw.l(e)}unsubscribeCrosshairMove(e){this.Tw.v(e)}subscribeDblClick(e){this.Cw.l(e)}unsubscribeDblClick(e){this.Cw.v(e)}priceScale(e){return new ab(this.aw,e)}timeScale(){return this.Dw}applyOptions(e){this.aw.$h(zd(e))}options(){return this.aw.W()}takeScreenshot(){return this.aw.wb()}autoSizeActive(){return this.aw.kb()}chartElement(){return this.aw.yb()}paneSize(){const e=this.aw.Tb();return{height:e.height,width:e.width}}setCrosshairPosition(e,i,n){const s=this.Sw.get(n);if(s===void 0)return;const r=this.aw.$t().dr(s);r!==null&&this.aw.$t().ad(e,i,r)}clearCrosshairPosition(){this.aw.$t().od(!0)}Vw(e,i,n={},s){db(n.priceFormat);const r=gt(_t(ym),_t(i),n),a=this.aw.$t().dd(e,r,s),c=new ub(a,this,this,this,this.q_);return this.Sw.set(c,a),this.kw.set(a,c),c}Ow(e){const i=this.aw.$t();i._d(e.St.Eu,e.St.hw,e.St.lw),e.ew.forEach((n,s)=>s.J(n.$e,n.rw)),i.Wu()}Bw(e){return Ae(this.kw.get(e))}Rw(e){const i=new Map;e.Nb.forEach((s,r)=>{const a=r.Qh(),c=Ro(a)(s);if(a!=="Custom")ai(W2(c));else{const o=r.Ta();ai(!o||o(c)===!1)}i.set(this.Bw(r),c)});const n=e.Eb!==void 0&&this.kw.has(e.Eb)?this.Bw(e.Eb):void 0;return{time:e.zb,logical:e.ee,point:e.Lb,hoveredSeries:n,hoveredObjectId:e.Fb,seriesData:i,sourceEvent:e.Wb}}}function pb(t,e,i){let n;if(Rs(t)){const r=document.getElementById(t);ai(r!==null,`Cannot find element in DOM with id=${t}`),n=r}else n=t;const s=new fb(n,e,i);return e.setOptions(s.options()),s}function mb(t,e){return pb(t,new fd,fd.Id(e))}Object.assign(Object.assign({},ym),xm);const dr=[{label:"1m",value:"1m",tradeSeconds:60},{label:"5m",value:"5m",tradeSeconds:300},{label:"15m",value:"15m",tradeSeconds:900},{label:"1h",value:"1h",tradeSeconds:3600},{label:"4h",value:"4h",tradeSeconds:14400},{label:"1D",value:"1D",tradeSeconds:86400}],gb=[1,2,3,5,10],vb=[50,100,250,500];function Md(t){return Number(t||Math.floor(Date.now()/1e3))}function _d(t){return typeof t=="number"&&Number.isFinite(t)&&t>0}function Td(t){const e=new Set;return t.filter(i=>{const n=`${String(i.id||"")}:${String(i.time)}:${i.text||""}`;return e.has(n)?!1:(e.add(n),!0)})}function Ea(t){const e=Math.floor(t/86400),i=Math.floor(t%86400/3600),n=Math.floor(t%3600/60),s=t%60;return e>0?`${e}d ${i}h ${n}m`:i>0?`${i}h ${n}m ${s}s`:n>0?`${n}m ${s}s`:`${s}s`}function xb(){var $e,Ze;const{user:t}=fi(),{btcPrice:e,btcChange24h:i,btcHigh24h:n,btcLow24h:s,trades:r,activeTrade:a,lastTradeResult:c,startTrade:o,clearTradeResult:u}=Ds(),h=w.useRef(null),d=w.useRef(null),f=w.useRef(null),p=w.useRef(null),m=w.useRef(null),[x,b]=w.useState("1m"),[g,v]=w.useState(null),[y,k]=w.useState(2),[N,C]=w.useState("100"),[_,T]=w.useState(()=>Date.now()),[j,R]=w.useState([]),[G,Me]=w.useState(!0),[be,fe]=w.useState(null),we=($e=j[j.length-1])==null?void 0:$e.candle,ce=(we==null?void 0:we.close)??e,Re=((Ze=j[j.length-1])==null?void 0:Ze.volume.value)??0,P=g?parseFloat(N||"0")*y:0,O=parseFloat(N||"0"),I=dr.find(D=>D.value===x)??dr[0],q=dr.find(D=>D.value===(a==null?void 0:a.timeframeValue))??I,$=!!(a&&t&&a.userEmail===t.email),L=(t==null?void 0:t.verificationStatus)==="approved",M=a?Math.max(0,Math.ceil((new Date(a.endTime).getTime()-_)/1e3)):0,S=a?rm({entryPrice:a.entryPrice,exitPrice:ce,amount:a.amount,leverageValue:a.leverage,tradeDirection:a.direction}):null,A=w.useMemo(()=>r.filter(D=>D.userEmail===(t==null?void 0:t.email)),[r,t==null?void 0:t.email]),U=w.useMemo(()=>{const D=A.flatMap(K=>{const Z=[];return _d(K.entryTime)&&Z.push({id:`entry-${K.id}`,time:K.entryTime,position:K.direction==="up"?"belowBar":"aboveBar",shape:K.direction==="up"?"arrowUp":"arrowDown",color:K.direction==="up"?"#0ecb81":"#f6465d",text:`${K.direction==="up"?"BUY":"SELL"} $${ue(K.amount)} ${K.leverage}x`}),_d(K.exitTime)&&Z.push({id:`exit-${K.id}`,time:K.exitTime,position:K.status==="won"?"aboveBar":"belowBar",shape:K.status==="won"?"circle":"square",color:K.status==="won"?"#0ecb81":"#f6465d",text:`${K.status==="won"?"WIN":K.outcomeReason==="liquidation"?"LIQ":"LOSS"} ${K.pnl&&K.pnl>=0?"+":"-"}$${ue(Math.abs(K.pnl||0))}`}),Z});return!a||a.userEmail!==(t==null?void 0:t.email)?Td(D):Td([...D,{id:`live-${a.id}`,time:a.entryTime,position:a.direction==="up"?"belowBar":"aboveBar",shape:a.direction==="up"?"arrowUp":"arrowDown",color:a.direction==="up"?"#0ecb81":"#f6465d",text:`${a.direction==="up"?"BUY":"SELL"} $${ue(a.amount)} ${a.leverage}x`}])},[a,A,t==null?void 0:t.email]);w.useEffect(()=>{if(!h.current)return;let D;try{D=mb(h.current,{layout:{background:{color:"#0b0f15"},textColor:"#8ea0b7"},grid:{vertLines:{color:"#19202c"},horzLines:{color:"#19202c"}},crosshair:{mode:1},rightPriceScale:{borderColor:"#1e2735"},timeScale:{borderColor:"#1e2735",timeVisible:!0,secondsVisible:x==="1m"}});const Z=D.addCandlestickSeries({upColor:"#0ecb81",downColor:"#f6465d",borderUpColor:"#0ecb81",borderDownColor:"#f6465d",wickUpColor:"#0ecb81",wickDownColor:"#f6465d"}),Se=D.addHistogramSeries({priceFormat:{type:"volume"},priceScaleId:""});Se.priceScale().applyOptions({scaleMargins:{top:.82,bottom:0}}),d.current=D,f.current=Z,p.current=Se,fe(null)}catch(Z){console.error("Trade chart failed to initialize:",Z),fe("Live chart unavailable");return}const K=()=>{if(h.current&&d.current)try{d.current.applyOptions({width:h.current.clientWidth,height:h.current.clientHeight})}catch(Z){console.error("Trade chart resize failed:",Z)}};return window.addEventListener("resize",K),K(),()=>{window.removeEventListener("resize",K);try{m.current=null,D.remove()}catch{}}},[]),w.useEffect(()=>{var D;try{(D=d.current)==null||D.applyOptions({timeScale:{secondsVisible:x==="1m"}})}catch(K){console.error("Trade chart option update failed:",K),fe("Live chart unavailable")}},[x]),w.useEffect(()=>{if(!f.current||!p.current)return;const D=j.map(Z=>Z.candle),K=j.map(Z=>Z.volume);try{f.current.setData(D),p.current.setData(K),fe(null)}catch(Z){console.error("Trade chart data update failed:",Z),fe("Live chart unavailable")}},[j]),w.useEffect(()=>{if(f.current)try{f.current.setMarkers(U)}catch(D){console.error("Trade chart marker update failed:",D)}},[U]),w.useEffect(()=>{if(f.current){if(m.current){try{f.current.removePriceLine(m.current)}catch{}m.current=null}if(!(!$||!a)){try{m.current=f.current.createPriceLine({price:a.entryPrice,color:a.direction==="up"?"#0ecb81":"#f6465d",lineWidth:2,lineStyle:2,axisLabelVisible:!0,title:`${a.direction==="up"?"UP":"DOWN"} $${ue(a.amount)}`})}catch(D){console.error("Trade entry line failed:",D)}return()=>{if(!(!f.current||!m.current)){try{f.current.removePriceLine(m.current)}catch{}m.current=null}}}}},[a,$]),w.useEffect(()=>{let D=!0;return(async(Z=!1)=>{Z&&Me(!0);try{const Se=await Ux(x,120);D&&Se.length>0&&R(Se)}catch{D&&R(Se=>Se.length>0?Se:Wx(x,e,120))}finally{D&&Z&&Me(!1)}})(!0),()=>{D=!1}},[x,e]),w.useEffect(()=>{const D=new WebSocket("wss://ws-feed.exchange.coinbase.com");return D.addEventListener("open",()=>{D.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker"]}))}),D.addEventListener("message",K=>{try{const Z=JSON.parse(K.data);if(Z.type!=="ticker"||!Z.price)return;const Se=Number(Z.price),eg=Z.time?Math.floor(new Date(Z.time).getTime()/1e3):Math.floor(Date.now()/1e3),iu=Ox(x),_l=Math.floor(eg/iu)*iu;R(Tl=>{if(Tl.length===0)return Tl;const pi=[...Tl],et=pi[pi.length-1],tg=Md(et.candle.time);return _l>tg?(pi.push({candle:{time:_l,open:et.candle.close,high:Math.max(et.candle.close,Se),low:Math.min(et.candle.close,Se),close:Se},volume:{time:_l,value:Math.max(et.volume.value*.35,32),color:Se>=et.candle.close?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),pi.slice(-120)):(pi[pi.length-1]={candle:{...et.candle,high:Math.max(et.candle.high,Se),low:Math.min(et.candle.low,Se),close:Se},volume:{...et.volume,value:et.volume.value+.75,color:Se>=et.candle.open?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}},pi)})}catch{}}),()=>{D.close()}},[x]),w.useEffect(()=>{if(!$)return;const D=window.setInterval(()=>T(Date.now()),1e3);return()=>window.clearInterval(D)},[$]);const H=()=>{if(!g||!N||$)return;if(!L){alert("Verify your account in Profile before trading.");return}const D=parseFloat(N);if(D>((t==null?void 0:t.usdBalance)||0)){alert("Insufficient balance");return}const K=jh(ce,y,g),Z=Md(we==null?void 0:we.time);o({id:`trade-${Date.now()}`,pair:"BTC/USD",direction:g,amount:D,leverage:y,entryPrice:ce,liquidationPrice:K,timeframe:I.label,timeframeValue:I.value,tradeSeconds:I.tradeSeconds,entryTime:Z,openedAt:new Date().toISOString(),endTime:new Date(Date.now()+I.tradeSeconds*1e3).toISOString(),userEmail:(t==null?void 0:t.email)||""})},Q=()=>{v(null),u()},ve=w.useMemo(()=>g==="up"?"buy":g==="down"?"sell":"neutral",[g]);return l.jsxs("div",{className:"trade-shell",children:[l.jsx("style",{children:`
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
          grid-template-columns: 1.25fr 0.8fr 0.8fr;
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
        }
        .ticket-pill.emphasis {
          color: #f6b353;
          border-color: rgba(247, 147, 26, 0.28);
          background: rgba(247, 147, 26, 0.08);
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
          .ticket-pill-row {
            grid-template-columns: repeat(3, 1fr);
          }
          .direction-grid,
          .preset-grid,
          .leverage-grid {
            grid-template-columns: repeat(2, 1fr);
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
      `}),l.jsxs("section",{className:"trade-card chart-card",children:[l.jsxs("div",{className:"chart-top",children:[l.jsxs("div",{className:"pair-block",children:[l.jsx("div",{className:"pair-icon",children:"₿"}),l.jsxs("div",{className:"pair-inline",children:[l.jsxs("div",{className:"pair-copy",children:[l.jsx("h1",{children:"BTC/USD"}),l.jsx("p",{children:"Live Coinbase candles for the active market view"})]}),l.jsxs("div",{className:"pair-stats",children:[l.jsxs("div",{className:"pair-price",children:["$",ce.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),l.jsxs("div",{className:`pair-change ${i>=0?"up":"down"}`,children:[i>=0?l.jsx(Ps,{size:15}):l.jsx(fm,{size:15}),i>=0?"+":"",i.toFixed(2),"%"]})]})]})]}),l.jsxs("div",{className:"pair-status",children:[l.jsx(Sh,{size:13}),"Live"]}),l.jsx("div",{className:"timeframe-row",children:dr.map(D=>l.jsx("button",{className:`tf-btn ${x===D.value?"active":""}`,onClick:()=>b(D.value),children:D.label},D.value))})]}),l.jsxs("div",{className:"market-strip",children:[l.jsxs("div",{className:"strip-item",children:[l.jsx("div",{className:"strip-label",children:"24h High"}),l.jsxs("div",{className:"strip-value",children:["$",n.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),l.jsxs("div",{className:"strip-item",children:[l.jsx("div",{className:"strip-label",children:"24h Low"}),l.jsxs("div",{className:"strip-value",children:["$",s.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),l.jsxs("div",{className:"strip-item",children:[l.jsx("div",{className:"strip-label",children:"Volume"}),l.jsx("div",{className:"strip-value",children:Re.toLocaleString(void 0,{maximumFractionDigits:2})})]}),l.jsxs("div",{className:"strip-item",children:[l.jsx("div",{className:"strip-label",children:"Tools"}),l.jsxs("div",{className:"strip-value",style:{display:"flex",gap:"10px"},children:[l.jsx(Vc,{size:18}),l.jsx(Sh,{size:18})]})]})]}),l.jsxs("div",{className:"chart-box",children:[l.jsx("div",{ref:h,className:"chart-canvas"}),G&&l.jsx("div",{className:"chart-loading",children:"Updating live BTC candles..."}),$&&a&&l.jsxs("div",{className:`live-trade-overlay ${a.direction==="up"?"buy":"sell"}`,children:[l.jsxs("div",{className:"live-trade-main",children:[l.jsx("div",{className:`live-trade-badge ${a.direction==="up"?"buy":"sell"}`,children:a.direction==="up"?"UP":"DOWN"}),l.jsxs("div",{className:"live-trade-copy",children:[l.jsxs("strong",{children:[a.direction==="up"?"Buy / Up":"Sell / Down"," $",ue(a.amount)]}),l.jsxs("span",{children:["BTC/USD $",a.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," • ",a.leverage,"x • ",a.timeframe]})]})]}),l.jsxs("div",{className:"live-trade-stats",children:[l.jsxs("div",{className:"live-trade-stat",children:[l.jsx("div",{className:"live-trade-stat-label",children:"Timer"}),l.jsx("div",{className:"live-trade-stat-value",children:Ea(M)})]}),l.jsxs("div",{className:"live-trade-stat",children:[l.jsx("div",{className:"live-trade-stat-label",children:"Live PnL"}),l.jsxs("div",{className:"live-trade-stat-value",style:{color:((S==null?void 0:S.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((S==null?void 0:S.pnl)||0)>=0?"+":"","$",ue(Math.abs((S==null?void 0:S.pnl)||0))]})]})]})]}),be&&!G&&l.jsxs("div",{className:"chart-fallback",children:[l.jsx("strong",{children:"Live BTC chart unavailable"}),l.jsx("div",{children:"The trade ticket is still available. Reload the page to retry the chart connection."})]})]})]}),l.jsxs("aside",{className:"trade-card trade-panel",children:[l.jsx("div",{className:"panel-title",children:"Trade ticket"}),l.jsxs("div",{className:"ticket-topbar",children:[l.jsxs("div",{className:"ticket-topbar-copy",children:[l.jsx("strong",{children:"Margin Level"}),l.jsx("span",{children:"Available balance"})]}),l.jsx("div",{className:"ticket-topbar-value",children:ue((t==null?void 0:t.usdBalance)||0)})]}),l.jsxs("div",{className:"ticket-pill-row",children:[l.jsx("div",{className:"ticket-pill emphasis",children:"Cross"}),l.jsxs("div",{className:"ticket-pill",children:[y,"x"]}),l.jsx("div",{className:"ticket-pill",children:"Auto"})]}),l.jsxs("div",{className:"trade-box",children:[l.jsx("div",{className:"trade-label",children:"Direction"}),l.jsxs("div",{className:"direction-grid",children:[l.jsx("button",{className:`dir-btn buy ${g==="up"?"active":""}`,onClick:()=>v("up"),disabled:$,children:"Buy"}),l.jsx("button",{className:`dir-btn sell ${g==="down"?"active":""}`,onClick:()=>v("down"),disabled:$,children:"Sell"})]})]}),l.jsx("div",{className:"trade-box",children:l.jsxs("div",{className:"trade-form-grid",children:[l.jsxs("div",{className:"trade-field",children:[l.jsxs("div",{className:"trade-field-head",children:[l.jsx("div",{className:"trade-label",style:{marginBottom:0},children:"Order Amount"}),l.jsx("div",{className:"trade-field-unit",children:"USDT"})]}),l.jsx("input",{value:N,onChange:D=>C(D.target.value),className:"amount-input",type:"number",min:"1",placeholder:"100"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"trade-label",children:"Quick Amount"}),l.jsx("div",{className:"preset-grid",children:vb.map(D=>l.jsxs("button",{className:`preset-btn ${N===String(D)?"active":""}`,onClick:()=>C(String(D)),children:["$",D]},D))})]}),l.jsxs("div",{children:[l.jsx("div",{className:"trade-label",children:"Leverage"}),l.jsx("div",{className:"leverage-grid",children:gb.map(D=>l.jsxs("button",{className:`lev-btn ${y===D?"active":""}`,onClick:()=>k(D),children:[D,"x"]},D))})]})]})}),l.jsxs("div",{className:"trade-box",children:[l.jsx("div",{className:"trade-label",children:"Order summary"}),l.jsxs("div",{className:"info-list",children:[l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Entry price"}),l.jsxs("strong",{children:["$",ce.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Potential payout"}),l.jsxs("strong",{style:{color:"#0ecb81"},children:["$",ue(P)]})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Max loss"}),l.jsxs("strong",{style:{color:"#f6465d"},children:["$",ue(O||0)]})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Trade duration"}),l.jsx("strong",{children:I.label})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Settlement timer"}),l.jsx("strong",{children:Ea(I.tradeSeconds)})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Estimated liquidation"}),l.jsxs("strong",{children:["$",jh(ce,y,g||"up").toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]}),$&&l.jsxs("div",{className:"result-card win",children:[l.jsx("div",{style:{fontWeight:700},children:"Trade running"}),l.jsx("div",{className:"result-value",children:Ea(M)}),l.jsxs("div",{children:["Contract: ",q.label]}),l.jsxs("div",{children:["Entry: $",a==null?void 0:a.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),l.jsxs("div",{children:["Live PnL: ",l.jsxs("span",{style:{color:((S==null?void 0:S.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((S==null?void 0:S.pnl)||0)>=0?"+":"","$",ue(Math.abs((S==null?void 0:S.pnl)||0))]})]}),l.jsxs("div",{children:["Move: ",l.jsxs("span",{style:{color:((S==null?void 0:S.directionalMovePct)||0)>=0?"#0ecb81":"#f6465d"},children:[((S==null?void 0:S.directionalMovePct)||0)>=0?"+":"",((S==null?void 0:S.directionalMovePct)||0).toFixed(3),"%"]})]}),l.jsxs("div",{children:["Liq: $",a==null?void 0:a.liquidationPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),c&&l.jsxs("div",{className:`result-card ${c.won?"win":"loss"}`,children:[l.jsx("div",{style:{fontWeight:700},children:c.outcomeReason==="liquidation"?"Trade liquidated":c.won?"Trade won":"Trade lost"}),l.jsxs("div",{className:"result-value",style:{color:c.won?"#0ecb81":"#f6465d"},children:[c.pnl>=0?"+":"","$",ue(Math.abs(c.pnl))]}),l.jsx("button",{className:"tf-btn active",onClick:Q,children:"New trade"})]}),l.jsx("button",{className:`trade-submit ${ve}`,disabled:!g||!N||$||!L,onClick:H,children:$?`Trade running (${q.label})...`:L?g==="up"?`Margin Buy ${I.label}`:g==="down"?`Margin Sell ${I.label}`:"Choose direction":"Verify Account To Trade"}),!L&&l.jsx("div",{className:"verify-warning",children:"This account is still unverified. Go to Profile, submit your verification form and document photos, then wait for System Admin approval before trading."}),l.jsxs("div",{className:"trade-box",children:[l.jsx("div",{className:"trade-label",children:"Recent trades"}),l.jsx("div",{className:"recent-list",children:A.slice(0,4).map(D=>l.jsxs("div",{className:"recent-row",children:[l.jsxs("div",{className:"recent-cell",children:[l.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:D.pair}),l.jsxs("div",{className:"recent-pair",children:[l.jsx("span",{className:"recent-pair-name",children:D.pair}),l.jsx("span",{className:"recent-dir",style:{color:D.direction==="up"?"#0ecb81":"#f6465d"},children:D.direction.toUpperCase()})]})]}),l.jsxs("div",{className:"recent-cell",children:[l.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Amount"}),l.jsxs("div",{className:"recent-value",children:["$",D.amount]})]}),l.jsxs("div",{className:"recent-cell",children:[l.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"PnL"}),l.jsxs("div",{className:"recent-value",style:{color:(D.pnl||0)>=0?"#0ecb81":"#f6465d"},children:[(D.pnl||0)>=0?"+":"","$",ue(Math.abs(D.pnl||0))]})]}),l.jsxs("div",{className:"recent-cell",children:[l.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Close"}),l.jsx("div",{className:"recent-value",style:{color:D.status==="won"?"#0ecb81":"#f6465d"},children:D.outcomeReason==="liquidation"?"Liquidated":D.timeframe})]})]},D.id))})]})]})]})}const yb=["United States","United Kingdom","Canada","Australia","Germany","France","Italy","Spain","Netherlands","Switzerland","Sweden","Norway","Denmark","United Arab Emirates","Saudi Arabia","Singapore","Malaysia","Thailand","Myanmar","India","Japan","South Korea","Philippines","Indonesia","Vietnam","Brazil","Mexico","South Africa","Nigeria"];function bb(t){return t==="approved"?"Verified Account":t==="pending"?"Verification Pending":t==="rejected"?"Verification Rejected":"Unverified Account"}function wb(){var ce,Re,P,O,I,q,$,L,M;const{user:t,updateUser:e,submitKycRequest:i}=fi(),n=(t==null?void 0:t.verificationStatus)==="approved",s=t!=null&&t.joinedDate?new Date(t.joinedDate).toLocaleDateString():"Not available",[r,a]=w.useState("profile"),[c,o]=w.useState(!1),[u,h]=w.useState(!1),[d,f]=w.useState(!1),[p,m]=w.useState({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:n&&(t==null?void 0:t.phone)||"",country:n&&(t==null?void 0:t.country)||"",city:n&&(t==null?void 0:t.city)||"",postCode:n&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),[x,b]=w.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[g,v]=w.useState({fullName:((ce=t==null?void 0:t.kyc)==null?void 0:ce.fullName)||(t==null?void 0:t.name)||"",phone:((Re=t==null?void 0:t.kyc)==null?void 0:Re.phone)||n&&(t==null?void 0:t.phone)||"",country:((P=t==null?void 0:t.kyc)==null?void 0:P.country)||n&&(t==null?void 0:t.country)||"",city:((O=t==null?void 0:t.kyc)==null?void 0:O.city)||n&&(t==null?void 0:t.city)||"",postCode:((I=t==null?void 0:t.kyc)==null?void 0:I.postCode)||n&&(t==null?void 0:t.postCode)||"",job:((q=t==null?void 0:t.kyc)==null?void 0:q.job)||n&&(t==null?void 0:t.job)||"",documentType:(($=t==null?void 0:t.kyc)==null?void 0:$.documentType)||"passport",frontImage:((L=t==null?void 0:t.kyc)==null?void 0:L.frontImage)||"",backImage:((M=t==null?void 0:t.kyc)==null?void 0:M.backImage)||""});w.useEffect(()=>{var S,A,U,H,Q,ve,$e,Ze,D;m({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),v({fullName:((S=t==null?void 0:t.kyc)==null?void 0:S.fullName)||(t==null?void 0:t.name)||"",phone:((A=t==null?void 0:t.kyc)==null?void 0:A.phone)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:((U=t==null?void 0:t.kyc)==null?void 0:U.country)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:((H=t==null?void 0:t.kyc)==null?void 0:H.city)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:((Q=t==null?void 0:t.kyc)==null?void 0:Q.postCode)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",job:((ve=t==null?void 0:t.kyc)==null?void 0:ve.job)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.job)||"",documentType:(($e=t==null?void 0:t.kyc)==null?void 0:$e.documentType)||"passport",frontImage:((Ze=t==null?void 0:t.kyc)==null?void 0:Ze.frontImage)||"",backImage:((D=t==null?void 0:t.kyc)==null?void 0:D.backImage)||""})},[t]);const y=(t==null?void 0:t.verificationStatus)||"unverified",k=w.useMemo(()=>bb(y),[y]),N=n?"Verified Trader":k,C=p.name||(t==null?void 0:t.name)||"Trader",_=p.email||(t==null?void 0:t.email)||"No email added yet",T=C.trim().charAt(0).toUpperCase()||"T",j=t==null?void 0:t.kyc,R=((j==null?void 0:j.documentType)||"passport").replace("_"," "),G=()=>{e(p),o(!1)},Me=S=>{var H;const A=(H=S.target.files)==null?void 0:H[0];if(!A)return;const U=new FileReader;U.onload=()=>{const Q=typeof U.result=="string"?U.result:"";Q&&m(ve=>({...ve,avatar:Q}))},U.readAsDataURL(A)},be=S=>A=>{var H;const U=(H=A.target.files)==null?void 0:H[0];U&&v(Q=>({...Q,[S]:U.name||"Document uploaded"}))},fe=()=>{if(!x.newPassword||x.newPassword!==x.confirmPassword){alert("New passwords do not match");return}e({password:x.newPassword}),b({currentPassword:"",newPassword:"",confirmPassword:""}),h(!1)},we=()=>{if(!g.fullName||!g.phone||!g.country||!g.city||!g.postCode||!g.job||!g.frontImage||!g.backImage){alert("Complete all verification fields and upload both document images.");return}e({isVerified:!1,verificationStatus:"pending",kyc:{...g,documentType:g.documentType,status:"pending",submittedAt:new Date().toISOString(),reviewedAt:void 0,reviewedBy:void 0}}),t&&i({id:`kyc-${Date.now()}`,userEmail:t.email,userName:t.name,fullName:g.fullName,phone:g.phone,country:g.country,city:g.city,postCode:g.postCode,job:g.job,documentType:g.documentType,frontImage:g.frontImage,backImage:g.backImage,status:"pending",submittedAt:new Date().toISOString()}),f(!0)};return l.jsxs("div",{className:"profile-shell",children:[l.jsx("style",{children:`
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
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }
        .desk-card {
          padding: 18px;
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(18, 23, 34, 0.94), rgba(13, 17, 26, 0.92));
          border: 1px solid rgba(255,255,255,.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.02);
        }
        .desk-card span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 8px;
        }
        .desk-card strong {
          display: block;
          font-size: 20px;
          font-weight: 800;
          line-height: 1.4;
        }
        .desk-card small {
          display: block;
          margin-top: 8px;
          color: #7f90a7;
          line-height: 1.5;
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
          .desk-strip,
          .form-grid { grid-template-columns: 1fr; }
          .account-grid { grid-template-columns: 1fr; }
          .certificate-sheet { padding: 20px; }
          .certificate-brand { align-items: flex-start; }
        }
      `}),l.jsxs("section",{className:"card hero",children:[l.jsxs("div",{className:"hero-main",children:[l.jsxs("div",{className:"avatar-wrap",children:[p.avatar?l.jsx("img",{src:p.avatar,alt:C}):l.jsx("div",{className:"avatar-fallback",children:T}),l.jsx("div",{className:"avatar-edit",children:l.jsx(tr,{size:16})})]}),l.jsxs("div",{children:[l.jsx("h1",{children:C}),l.jsx("p",{children:_}),l.jsxs("div",{className:`hero-badge ${y==="approved"?"approved":y==="pending"?"pending":y==="rejected"?"rejected":"unverified"}`,children:[l.jsx(Nh,{size:14}),k]})]})]}),l.jsxs("div",{className:"hero-side",children:[l.jsxs("div",{className:"hero-stat",children:[l.jsx("span",{children:"Access"}),l.jsx("strong",{children:n?"Trading Enabled":"Trading Locked"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("span",{children:"Profile"}),l.jsx("strong",{children:n?"Verified Identity":"Needs Verification"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("span",{children:"Country"}),l.jsx("strong",{children:n?p.country||"Not set":"Hidden until verified"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("span",{children:"Phone"}),l.jsx("strong",{children:n?p.phone||"Not set":"Hidden until verified"})]})]})]}),l.jsxs("section",{className:"desk-strip",children:[l.jsxs("div",{className:"desk-card",children:[l.jsx("span",{children:"Account Tier"}),l.jsx("strong",{children:N}),l.jsx("small",{children:"Your profile status updates here after admin review."})]}),l.jsxs("div",{className:"desk-card",children:[l.jsx("span",{children:"Member Since"}),l.jsx("strong",{children:s}),l.jsx("small",{children:"Account creation date for this trading profile."})]}),l.jsxs("div",{className:"desk-card",children:[l.jsx("span",{children:"Timezone"}),l.jsx("strong",{children:p.timezone||"UTC"}),l.jsx("small",{children:"Your dashboard and profile follow this account region."})]}),l.jsxs("div",{className:"desk-card",children:[l.jsx("span",{children:"Security State"}),l.jsx("strong",{children:t!=null&&t.password?"Password Active":"Password Not Set"}),l.jsx("small",{children:"Use the security tab to refresh your sign-in credentials."})]})]}),l.jsxs("div",{className:"tabs",children:[l.jsxs("button",{className:`tab-btn ${r==="profile"?"active":""}`,onClick:()=>a("profile"),children:[l.jsx(Ls,{size:16})," Profile"]}),l.jsxs("button",{className:`tab-btn ${r==="security"?"active":""}`,onClick:()=>a("security"),children:[l.jsx(Uc,{size:16})," Security"]}),l.jsxs("button",{className:`tab-btn ${r==="verification"?"active":""}`,onClick:()=>a("verification"),children:[l.jsx(Eh,{size:16})," Verification"]})]}),r==="profile"&&l.jsxs("section",{className:"card content-card profile-card",children:[l.jsxs("div",{className:"card-head",children:[l.jsx("h2",{children:"Personal Information"}),l.jsx("button",{className:`edit-btn ${c?"save":""}`,onClick:()=>c?G():o(!0),children:c?l.jsxs(l.Fragment,{children:[l.jsx(lm,{size:16})," Save"]}):"Edit Profile"})]}),l.jsxs("div",{className:"account-grid",children:[l.jsxs("div",{className:"account-chip",children:[l.jsx("span",{children:"User Name"}),l.jsx("strong",{children:C})]}),l.jsxs("div",{className:"account-chip",children:[l.jsx("span",{children:"User Email"}),l.jsx("strong",{children:_})]}),l.jsxs("div",{className:"account-chip",children:[l.jsx("span",{children:"Account Status"}),l.jsx("strong",{children:y==="approved"?"Verified account":y==="pending"?"Verification pending":"Unverified account"})]}),l.jsxs("div",{className:"account-chip",children:[l.jsx("span",{children:"Account ID"}),l.jsx("strong",{children:(t==null?void 0:t.id)||"Not assigned"})]})]}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Full Name"}),l.jsx("input",{value:p.name,disabled:!c,onChange:S=>m({...p,name:S.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Email"}),l.jsx("input",{value:p.email,disabled:!0})]}),n&&l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Phone"}),l.jsx("input",{value:p.phone,disabled:!c,onChange:S=>m({...p,phone:S.target.value})})]}),n&&l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Country"}),l.jsx("input",{value:p.country,disabled:!c,onChange:S=>m({...p,country:S.target.value})})]}),n&&l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"City"}),l.jsx("input",{value:p.city,disabled:!c,onChange:S=>m({...p,city:S.target.value})})]}),n&&l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Post Code"}),l.jsx("input",{value:p.postCode,disabled:!c,onChange:S=>m({...p,postCode:S.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Timezone"}),l.jsx("input",{value:p.timezone,disabled:!c,onChange:S=>m({...p,timezone:S.target.value})})]}),n&&l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Job"}),l.jsx("input",{value:(t==null?void 0:t.job)||"",disabled:!0})]}),l.jsxs("div",{className:"avatar-section",children:[l.jsx("div",{className:"avatar-section-head",children:l.jsxs("div",{className:"avatar-section-copy",children:[l.jsx("strong",{children:"Profile Photo"}),l.jsx("span",{children:"Upload your own photo from your phone or computer."})]})}),l.jsxs("div",{className:"avatar-preview-row",children:[l.jsx("div",{className:"avatar-preview-chip",children:p.avatar?l.jsx("img",{src:p.avatar,alt:C}):l.jsx("div",{className:"avatar-fallback",children:T})}),l.jsxs("div",{className:"avatar-preview-copy",children:[l.jsx("strong",{children:C}),l.jsx("span",{children:c?"Choose an image file, then save your profile changes.":"Your current public trading profile image."})]})]}),l.jsx("div",{className:"avatar-help",children:"Your profile photo is stored in this demo account after you save the profile."}),l.jsxs("div",{className:"avatar-actions",children:[l.jsxs("label",{className:"upload-btn",children:[l.jsx(tr,{size:16}),"Choose Photo",l.jsx("input",{className:"sr-only",type:"file",accept:"image/*",disabled:!c,onChange:Me})]}),l.jsx("span",{className:"upload-note",children:"JPG, PNG, or WEBP from mobile or desktop"})]})]})]})]}),r==="security"&&l.jsxs("section",{className:"card content-card",children:[l.jsxs("div",{className:"card-head",children:[l.jsx("h2",{children:"Security Settings"}),l.jsx("button",{className:`edit-btn ${u?"save":""}`,onClick:()=>u?fe():h(!0),children:u?"Update Password":"Change Password"})]}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Current Password"}),l.jsx("input",{type:"password",value:x.currentPassword,disabled:!u,onChange:S=>b({...x,currentPassword:S.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"New Password"}),l.jsx("input",{type:"password",value:x.newPassword,disabled:!u,onChange:S=>b({...x,newPassword:S.target.value})})]}),l.jsxs("div",{className:"field full",children:[l.jsx("label",{children:"Confirm New Password"}),l.jsx("input",{type:"password",value:x.confirmPassword,disabled:!u,onChange:S=>b({...x,confirmPassword:S.target.value})})]})]}),l.jsx("div",{className:"submit-note",children:"This is still a demo app, but the password now updates in your stored user profile so the settings area feels more real."})]}),r==="verification"&&l.jsxs("section",{className:"card content-card",children:[l.jsx("div",{className:"card-head",children:l.jsx("h2",{children:"KYC Verification"})}),l.jsx("div",{className:"kyc-stage",children:y==="approved"?l.jsxs("div",{className:"verified-card",children:[l.jsxs("div",{className:"kyc-headline",children:[l.jsx(Nh,{size:22}),"Verified Successfully"]}),l.jsx("div",{className:"kyc-copy",children:"Your account is verified and trading access is active. BTCTradePro approved your verification successfully."}),l.jsxs("div",{className:"info-list",style:{marginTop:"18px"},children:[l.jsxs("div",{className:"info-item",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Status"}),l.jsx("small",{children:"Approved by admin review"})]}),l.jsx("div",{className:"status-pill on",children:"Verified"})]}),l.jsxs("div",{className:"info-item",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Account Holder"}),l.jsx("small",{children:(j==null?void 0:j.fullName)||(t==null?void 0:t.name)||"Trader"})]}),l.jsx("div",{children:R})]}),l.jsxs("div",{className:"info-item",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Account Email"}),l.jsx("small",{children:(t==null?void 0:t.email)||"No email added"})]}),l.jsx("div",{children:s})]})]}),l.jsx("div",{className:"submit-note",children:"Your verification documents stay in the admin review system and are not shown on your profile page."})]}):y==="pending"?l.jsxs("div",{className:"waiting-card",children:[l.jsxs("div",{className:"kyc-headline",children:[l.jsx(Eh,{size:22}),"Verification Waiting Letter"]}),l.jsx("div",{className:"kyc-copy",children:"Your verification request has been sent to System Admin. Please wait while your identity information and document images are reviewed."}),l.jsxs("div",{className:"info-list",style:{marginTop:"18px"},children:[l.jsxs("div",{className:"info-item",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Full Name"}),l.jsx("small",{children:(j==null?void 0:j.fullName)||C})]}),l.jsx("div",{className:"status-pill pending",children:"Pending"})]}),l.jsxs("div",{className:"info-item",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Phone"}),l.jsx("small",{children:(j==null?void 0:j.phone)||"Not set"})]}),l.jsx("div",{children:R})]}),l.jsxs("div",{className:"info-item",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Country"}),l.jsx("small",{children:(j==null?void 0:j.country)||"Not set"})]}),l.jsx("div",{children:R})]})]}),(d||y==="pending")&&l.jsx("div",{className:"submit-note",children:"Verification request sent successfully. Your files were sent to admin review and are hidden from your profile page."})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Full Name"}),l.jsx("input",{value:g.fullName,onChange:S=>v({...g,fullName:S.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Phone Number"}),l.jsx("input",{value:g.phone,onChange:S=>v({...g,phone:S.target.value}),placeholder:"+1 234 567 8900"})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Country"}),l.jsxs("select",{value:g.country,onChange:S=>v({...g,country:S.target.value}),children:[l.jsx("option",{value:"",children:"Choose a country"}),yb.map(S=>l.jsx("option",{value:S,children:S},S))]})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"City"}),l.jsx("input",{value:g.city,onChange:S=>v({...g,city:S.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Post Code"}),l.jsx("input",{value:g.postCode,onChange:S=>v({...g,postCode:S.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Job"}),l.jsx("input",{value:g.job,onChange:S=>v({...g,job:S.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Document Type"}),l.jsxs("select",{value:g.documentType,onChange:S=>v({...g,documentType:S.target.value}),children:[l.jsx("option",{value:"passport",children:"Passport"}),l.jsx("option",{value:"id_card",children:"ID Card"}),l.jsx("option",{value:"drivers_license",children:"Driver License"})]})]}),l.jsxs("div",{className:"avatar-section full",children:[l.jsx("strong",{children:"Document Front"}),l.jsx("div",{className:"avatar-help",style:{marginBottom:"12px"},children:g.frontImage?`Selected file: ${g.frontImage}`:"Upload the front side image. After you submit, the file goes to admin review and will not stay visible on your profile page."}),l.jsxs("label",{className:"upload-btn",children:[l.jsx(tr,{size:16}),"Upload Front Image",l.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:be("frontImage")})]})]}),l.jsxs("div",{className:"avatar-section full",children:[l.jsx("strong",{children:"Document Back"}),l.jsx("div",{className:"avatar-help",style:{marginBottom:"12px"},children:g.backImage?`Selected file: ${g.backImage}`:"Upload the back side image. The profile will only show your verification status after submission."}),l.jsxs("label",{className:"upload-btn",children:[l.jsx(tr,{size:16}),"Upload Back Image",l.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:be("backImage")})]})]})]}),l.jsx("button",{className:"edit-btn save",style:{marginTop:"18px"},onClick:we,children:"Verify Account"}),l.jsx("div",{className:"submit-note",children:"Complete this form and upload front and back document photos. After submission, the request goes to System Admin and your account stays unverified until approval."})]})})]})]})}const kb=[{id:"1",title:"Bitcoin Surges Past $68,000 as Institutional Adoption Accelerates",description:"Major financial institutions continue to embrace Bitcoin, driving prices to new yearly highs amid growing demand for cryptocurrency exposure.",url:"#",imageUrl:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400",source:"CryptoNews",publishedAt:"2026-04-29T14:30:00"},{id:"2",title:"Ethereum ETF Sees Record Inflows Following Bitcoin Success",description:"Following the approval of spot Bitcoin ETFs, institutional investors are now showing increased interest in Ethereum-based investment products.",url:"#",imageUrl:"https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400",source:"BlockchainDaily",publishedAt:"2026-04-29T12:15:00"},{id:"3",title:"DeFi Protocol Reaches $50 Billion in Total Value Locked",description:"Decentralized finance continues its explosive growth as new protocols offer innovative solutions for yield farming and liquidity provision.",url:"#",imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",source:"DeFi Weekly",publishedAt:"2026-04-29T10:45:00"},{id:"4",title:"El Salvador Celebrates Three Years of Bitcoin as Legal Tender",description:"The Central American nation marks a milestone as President highlights the economic benefits of cryptocurrency adoption.",url:"#",imageUrl:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400",source:"Global Finance",publishedAt:"2026-04-28T18:00:00"},{id:"5",title:"SEC Announces New Cryptocurrency Regulatory Framework",description:"Regulators unveil comprehensive guidelines for digital asset classification and trading, providing clarity for market participants.",url:"#",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",source:"Regulatory Watch",publishedAt:"2026-04-28T15:30:00"},{id:"6",title:"Major Bank Launches Bitcoin Trading for Retail Customers",description:"One of the world's largest banks begins offering cryptocurrency services, marking a significant shift in traditional finance.",url:"#",imageUrl:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=400",source:"Banking Weekly",publishedAt:"2026-04-28T09:00:00"},{id:"7",title:"Bitcoin Mining Difficulty Reaches All-Time High",description:"Network security continues to strengthen as miners deploy more computational power to secure the Bitcoin blockchain.",url:"#",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",source:"Mining Today",publishedAt:"2026-04-27T20:15:00"},{id:"8",title:"NFT Market Shows Signs of Recovery with New Collections",description:"Digital collectibles regain attention as major brands launch new NFT projects on Ethereum and Solana.",url:"#",imageUrl:"https://images.unsplash.com/photo-1646463876221-9a37f4a4e5db?w=400",source:"NFT Observer",publishedAt:"2026-04-27T16:45:00"}],jb=["All","Bitcoin","Ethereum","DeFi","Regulatory","Mining"];function Sb(){const[t]=w.useState(kb),[e,i]=w.useState(""),[n,s]=w.useState("All"),[r,a]=w.useState([]),[c,o]=w.useState(!1),u=f=>{a(p=>p.includes(f)?p.filter(m=>m!==f):[...p,f])},h=t.filter(f=>{const p=f.title.toLowerCase().includes(e.toLowerCase())||f.description.toLowerCase().includes(e.toLowerCase()),m=n==="All"||n==="Bitcoin"&&f.title.toLowerCase().includes("bitcoin")||n==="Ethereum"&&f.title.toLowerCase().includes("ethereum")||n==="DeFi"&&f.title.toLowerCase().includes("defi")||n==="Regulatory"&&f.title.toLowerCase().includes("sec")||f.title.toLowerCase().includes("regulatory")||n==="Mining"&&f.title.toLowerCase().includes("mining");return p&&m}),d=f=>{const p=new Date(f),x=Math.floor((new Date().getTime()-p.getTime())/(1e3*60*60));return x<1?"Just now":x<24?`${x}h ago`:x<48?"Yesterday":p.toLocaleDateString("en-US",{month:"short",day:"numeric"})};return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"text-3xl font-bold text-white flex items-center gap-3",children:[l.jsx(bs,{className:"text-btc-gold"}),"Crypto News"]}),l.jsx("p",{className:"text-btc-text-secondary mt-1",children:"Stay updated with the latest cryptocurrency news"})]}),l.jsxs("div",{className:"relative flex-1 max-w-md",children:[l.jsx(o1,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-btc-text-secondary"}),l.jsx("input",{type:"text",value:e,onChange:f=>i(f.target.value),placeholder:"Search news...",className:"w-full pl-11 pr-4 py-3 bg-btc-dark border border-btc-border rounded-xl text-white placeholder-btc-text-secondary focus:border-btc-gold"})]})]}),l.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:[jb.map(f=>l.jsx("button",{onClick:()=>s(f),className:`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${n===f?"bg-btc-gold text-btc-dark":"bg-btc-secondary border border-btc-border text-btc-text-secondary hover:text-white hover:border-btc-gold/50"}`,children:f},f)),l.jsx("button",{onClick:()=>o(!0),className:"ml-auto p-2 bg-btc-secondary border border-btc-border rounded-lg text-btc-text-secondary hover:text-white hover:border-btc-gold/50 transition-colors",children:l.jsx(hm,{size:18,className:c?"animate-spin":""})})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(f=>l.jsxs("article",{className:"bg-btc-secondary border border-btc-border rounded-xl overflow-hidden hover:border-btc-gold/50 transition-all group",children:[l.jsxs("div",{className:"relative h-48 overflow-hidden",children:[l.jsx("img",{src:f.imageUrl,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:p=>{p.target.src="https://via.placeholder.com/400x200/1E2329/848E9C?text=Crypto+News"}}),l.jsx("button",{onClick:()=>u(f.id),className:"absolute top-3 right-3 p-2 bg-btc-dark/80 rounded-full hover:bg-btc-dark transition-colors",children:r.includes(f.id)?l.jsx(Gx,{size:18,className:"text-btc-gold"}):l.jsx(Jx,{size:18,className:"text-white"})}),l.jsx("span",{className:"absolute bottom-3 left-3 px-3 py-1 bg-btc-gold/90 text-btc-dark text-xs font-bold rounded-full",children:f.source})]}),l.jsxs("div",{className:"p-5",children:[l.jsx("h3",{className:"text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-btc-gold transition-colors",children:f.title}),l.jsx("p",{className:"text-btc-text-secondary text-sm mb-4 line-clamp-3",children:f.description}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1 text-xs text-btc-text-secondary",children:[l.jsx(t1,{size:12}),d(f.publishedAt)]}),l.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-sm text-btc-gold hover:underline",children:["Read More ",l.jsx(n1,{size:14})]})]})]})]},f.id))}),h.length===0&&l.jsxs("div",{className:"text-center py-12",children:[l.jsx(bs,{size:48,className:"text-btc-text-secondary mx-auto mb-4"}),l.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"No news found"}),l.jsx("p",{className:"text-btc-text-secondary",children:"Try adjusting your search or category filters"})]}),l.jsx("div",{className:"bg-btc-dark/50 rounded-xl p-4 text-sm",children:l.jsx("p",{className:"text-btc-text-secondary text-center",children:"News powered by NewsAPI. Set VITE_NEWSAPI_KEY in your environment for live crypto news."})})]})}const Nb=[{id:"1",senderId:"admin",senderName:"Support Desk",message:"Welcome to BTCTradePro support. Tell us if you need help with deposit approval, wallet status, or your trade desk.",timestamp:"2026-04-28T10:00:00",isAdmin:!0}];function Cb(){const{user:t}=fi(),[e,i]=w.useState(Nb),[n,s]=w.useState(""),[r,a]=w.useState(!1),c=w.useRef(null);w.useEffect(()=>{var u;(u=c.current)==null||u.scrollIntoView({behavior:"smooth"})},[e,r]);const o=()=>{if(!n.trim())return;const u={id:`msg-${Date.now()}`,senderId:(t==null?void 0:t.id)||"user",senderName:(t==null?void 0:t.name)||"User",message:n,timestamp:new Date().toISOString(),isAdmin:!1};i(h=>[...h,u]),s(""),setTimeout(()=>{a(!0),setTimeout(()=>{a(!1),i(h=>[...h,{id:`msg-${Date.now()+1}`,senderId:"admin",senderName:"Support Desk",message:"Your request has been logged. For wallet actions, our admin reviews pending deposits and withdrawals from the back office queue.",timestamp:new Date().toISOString(),isAdmin:!0}])},1400)},500)};return l.jsxs("div",{className:"support-shell",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("section",{className:"card hero",children:[l.jsxs("div",{className:"hero-main",children:[l.jsx("div",{className:"hero-icon",children:l.jsx(um,{size:24})}),l.jsxs("div",{children:[l.jsx("h1",{children:"Support Center"}),l.jsx("p",{children:"Professional help desk for wallet issues, KYC, and trade questions."})]})]}),l.jsxs("div",{className:"status-pill",children:[l.jsx(si,{size:16}),"Live Team Online"]})]}),l.jsxs("section",{className:"grid",children:[l.jsxs("aside",{className:"card sidebar",children:[l.jsx("h3",{children:"Quick actions"}),l.jsx("div",{className:"quick-list",children:["Deposit approval","Withdrawal queue","Trade issue","KYC question"].map(u=>l.jsx("button",{className:"quick-btn",onClick:()=>s(u),children:u},u))})]}),l.jsxs("div",{className:"card chat-card",children:[l.jsxs("div",{className:"chat-head",children:[l.jsx("strong",{children:"Conversation"}),l.jsx("span",{className:"status-pill",children:"Avg. response: 5 min"})]}),l.jsxs("div",{className:"chat-stream",children:[e.map(u=>l.jsx("div",{className:`message-row ${u.isAdmin?"admin":"user"}`,children:l.jsxs("div",{className:"message-wrap",children:[l.jsx("div",{className:"avatar",children:u.isAdmin?l.jsx(si,{size:18}):t!=null&&t.avatar?l.jsx("img",{src:t.avatar,alt:t.name}):l.jsx(Ls,{size:18})}),l.jsxs("div",{className:"bubble",children:[l.jsxs("strong",{children:[u.senderName,u.isAdmin&&l.jsx(Vi,{size:14,color:"#0ecb81"})]}),l.jsx("p",{children:u.message}),l.jsx("small",{children:new Date(u.timestamp).toLocaleTimeString()})]})]})},u.id)),r&&l.jsx("div",{className:"message-row admin",children:l.jsxs("div",{className:"message-wrap",children:[l.jsx("div",{className:"avatar",children:l.jsx(si,{size:18})}),l.jsx("div",{className:"bubble",children:l.jsx("p",{children:"Support is typing..."})})]})}),l.jsx("div",{ref:c})]}),l.jsxs("div",{className:"composer",children:[l.jsx("input",{value:n,onChange:u=>s(u.target.value),onKeyDown:u=>u.key==="Enter"&&o(),placeholder:"Type your support request..."}),l.jsx("button",{className:"send-btn",onClick:o,children:l.jsx(c1,{size:20})})]})]})]})]})}function fr(t){return t?new Date(t).toLocaleString():"Not available"}function Eb(){const{users:t,walletRequests:e,kycRequests:i,walletAddress:n,setWalletAddress:s,approveTransaction:r,rejectTransaction:a,approveVerification:c,rejectVerification:o}=Ds(),[u,h]=w.useState(!1),[d,f]=w.useState(n),[p,m]=w.useState(!1),x=()=>{d.trim()&&(s(d.trim()),h(!1),m(!0),window.setTimeout(()=>m(!1),2e3))},b=()=>{f(n),h(!1)},g=t.filter(j=>j.role!=="admin").sort((j,R)=>new Date(R.joinedDate).getTime()-new Date(j.joinedDate).getTime()),v=e.filter(j=>j.status==="pending").sort((j,R)=>new Date(R.timestamp).getTime()-new Date(j.timestamp).getTime()),y=i.filter(j=>j.status==="pending").sort((j,R)=>new Date(R.submittedAt).getTime()-new Date(j.submittedAt).getTime()),k=e.filter(j=>j.status!=="pending").sort((j,R)=>new Date(R.reviewedAt||R.timestamp).getTime()-new Date(j.reviewedAt||j.timestamp).getTime()).slice(0,10),N=i.filter(j=>j.status!=="pending").sort((j,R)=>new Date(R.reviewedAt||R.submittedAt).getTime()-new Date(j.reviewedAt||j.submittedAt).getTime()).slice(0,10),C=g.filter(j=>j.verificationStatus==="approved").length,_=g.filter(j=>j.verificationStatus==="pending").length,T=v.reduce((j,R)=>j+R.amount,0);return l.jsxs("div",{className:"admin-page",children:[l.jsx("style",{children:`
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
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;
          gap: 16px;
          align-items: center;
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
          .two-col,
          .queue-item,
          .user-item {
            grid-template-columns: 1fr;
          }
          .queue-actions {
            justify-content: flex-start;
          }
        }
      `}),l.jsxs("section",{className:"admin-card hero",children:[l.jsxs("div",{className:"hero-top",children:[l.jsxs("div",{className:"hero-title",children:[l.jsx("div",{className:"hero-icon",children:l.jsx(si,{size:26})}),l.jsxs("div",{children:[l.jsx("h1",{children:"Admin Operations"}),l.jsx("p",{children:"Separate back-office review center for users, deposits, withdrawals, and identity checks. Every queue is rebuilt from live app data so pending requests do not get lost."})]})]}),l.jsxs("div",{className:"hero-badges",children:[l.jsxs("div",{className:"hero-badge",children:[l.jsx(ra,{size:14}),l.jsxs("span",{children:[g.length," website users"]})]}),l.jsxs("div",{className:"hero-badge",children:[l.jsx(am,{size:14}),l.jsxs("span",{children:[v.length+y.length," open reviews"]})]})]})]}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat",children:[l.jsxs("div",{className:"stat-head",children:[l.jsx("span",{children:"Total Website Users"}),l.jsx(ra,{size:18})]}),l.jsx("strong",{children:g.length}),l.jsx("span",{children:"Every created account is counted here for the admin team"})]}),l.jsxs("div",{className:"stat",children:[l.jsxs("div",{className:"stat-head",children:[l.jsx("span",{children:"Pending Wallet"}),l.jsx(la,{size:18})]}),l.jsx("strong",{children:v.length}),l.jsxs("span",{children:["$",ue(T)," waiting for review"]})]}),l.jsxs("div",{className:"stat",children:[l.jsxs("div",{className:"stat-head",children:[l.jsx("span",{children:"Pending KYC"}),l.jsx(si,{size:18})]}),l.jsx("strong",{children:y.length}),l.jsxs("span",{children:[_," users currently waiting on approval"]})]}),l.jsxs("div",{className:"stat",children:[l.jsxs("div",{className:"stat-head",children:[l.jsx("span",{children:"Verified Users"}),l.jsx(Vi,{size:18})]}),l.jsx("strong",{children:C}),l.jsx("span",{children:"Accounts already approved by admin review"})]})]})]}),l.jsxs("section",{className:"admin-card wallet-editor-card",children:[l.jsxs("div",{className:"wallet-editor-head",children:[l.jsx("div",{style:{width:44,height:44,borderRadius:14,background:"rgba(247,147,26,0.14)",display:"flex",alignItems:"center",justifyContent:"center",color:"#f6b353",flexShrink:0},children:l.jsx(la,{size:20})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Deposit Wallet Address"}),l.jsx("p",{children:"Configure the BTC wallet address shown to users when they request a deposit. Changing this updates the QR code and address in real time."})]})]}),l.jsxs("div",{className:"wallet-address-row",children:[u?l.jsxs(l.Fragment,{children:[l.jsx("input",{className:"wallet-input",value:d,onChange:j=>f(j.target.value),placeholder:"Enter BTC wallet address"}),l.jsxs("div",{className:"wallet-actions",children:[l.jsxs("button",{className:"wallet-btn save",onClick:x,children:[l.jsx(Vi,{size:15})," Save"]}),l.jsxs("button",{className:"wallet-btn cancel",onClick:b,children:[l.jsx(aa,{size:15})," Cancel"]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"wallet-display",children:n}),l.jsx("div",{className:"wallet-actions",children:l.jsxs("button",{className:"wallet-btn edit",onClick:()=>{f(n),h(!0)},children:[l.jsx(hm,{size:14})," Edit Address"]})})]}),p&&l.jsxs("div",{className:"wallet-saved-badge",children:[l.jsx(Vi,{size:14})," Saved"]})]})]}),l.jsxs("section",{className:"two-col",children:[l.jsxs("section",{className:"admin-card section-card",children:[l.jsxs("div",{className:"section-head",children:[l.jsxs("div",{children:[l.jsx("h2",{children:"Pending Wallet Requests"}),l.jsx("p",{children:"Deposits and withdrawals awaiting manual admin action."})]}),l.jsxs("div",{className:"section-tag",children:[l.jsx(la,{size:14}),l.jsxs("span",{children:[v.length," active"]})]})]}),l.jsxs("div",{className:"queue-list",children:[v.map(j=>l.jsxs("article",{className:"queue-item",children:[l.jsxs("div",{className:"queue-meta",children:[l.jsx("strong",{children:j.userName}),l.jsx("small",{children:j.userEmail}),l.jsx("small",{children:j.type==="withdraw"?`Withdraw to ${j.withdrawAddress||"No wallet address"}`:`Deposit wallet ${j.walletAddress||"Not supplied"}`}),l.jsxs("small",{children:["Submitted ",fr(j.timestamp)]})]}),l.jsxs("div",{className:"queue-side",children:[l.jsx("span",{children:j.type}),l.jsxs("strong",{children:["$",ue(j.amount)]}),l.jsx("small",{children:j.btcAmount?`${j.btcAmount.toFixed(8)} BTC`:"USD request only"})]}),l.jsxs("div",{className:"queue-actions",children:[l.jsxs("button",{className:"action-btn approve-btn",onClick:()=>r(j.id),children:[l.jsx(Vi,{size:16}),l.jsx("span",{children:"Approve"})]}),l.jsxs("button",{className:"action-btn reject-btn",onClick:()=>a(j.id),children:[l.jsx(aa,{size:16}),l.jsx("span",{children:"Reject"})]})]})]},j.id)),v.length===0&&l.jsx("div",{className:"empty-state",children:"No wallet requests are waiting right now."})]})]}),l.jsxs("section",{className:"admin-card section-card",children:[l.jsxs("div",{className:"section-head",children:[l.jsxs("div",{children:[l.jsx("h2",{children:"Pending KYC Reviews"}),l.jsx("p",{children:"Identity requests sent from user profiles for verification."})]}),l.jsxs("div",{className:"section-tag",children:[l.jsx(si,{size:14}),l.jsxs("span",{children:[y.length," active"]})]})]}),l.jsxs("div",{className:"queue-list",children:[y.map(j=>l.jsxs("article",{className:"queue-item",children:[l.jsxs("div",{className:"queue-meta",children:[l.jsx("strong",{children:j.fullName}),l.jsx("small",{children:j.userEmail}),l.jsxs("small",{children:[j.phone," • ",j.country,", ",j.city," ",j.postCode]}),l.jsxs("small",{children:[j.job," • ",j.documentType.replace("_"," ")]}),l.jsxs("div",{className:"docs",children:[l.jsxs("div",{className:"doc-line",children:["Front document: ",j.frontImage||"Not uploaded"]}),l.jsxs("div",{className:"doc-line",children:["Back document: ",j.backImage||"Not uploaded"]})]})]}),l.jsxs("div",{className:"queue-side",children:[l.jsx("span",{children:"KYC Request"}),l.jsx("strong",{children:"Pending"}),l.jsxs("small",{children:["Submitted ",fr(j.submittedAt)]})]}),l.jsxs("div",{className:"queue-actions",children:[l.jsxs("button",{className:"action-btn approve-btn",onClick:()=>c(j.userEmail),children:[l.jsx(Vi,{size:16}),l.jsx("span",{children:"Approve"})]}),l.jsxs("button",{className:"action-btn reject-btn",onClick:()=>o(j.userEmail),children:[l.jsx(aa,{size:16}),l.jsx("span",{children:"Reject"})]})]})]},j.id)),y.length===0&&l.jsx("div",{className:"empty-state",children:"No KYC reviews are waiting right now."})]})]})]}),l.jsxs("section",{className:"admin-card section-card",children:[l.jsxs("div",{className:"section-head",children:[l.jsxs("div",{children:[l.jsx("h2",{children:"Registered Website Users"}),l.jsx("p",{children:"Every account created on the website appears here with verification status, timezone, and balances."})]}),l.jsxs("div",{className:"section-tag",children:[l.jsx(ra,{size:14}),l.jsxs("span",{children:[g.length," accounts"]})]})]}),l.jsxs("div",{className:"user-list",children:[g.map(j=>l.jsxs("article",{className:"user-item",children:[l.jsxs("div",{children:[l.jsx("strong",{children:j.name}),l.jsx("div",{className:"user-meta",children:j.email}),l.jsxs("div",{className:"user-meta",children:["Joined ",j.joinedDate]})]}),l.jsxs("div",{children:[l.jsx("div",{className:`status-pill ${j.verificationStatus||"unverified"}`,children:j.verificationStatus||"unverified"}),l.jsxs("div",{className:"user-meta",children:[j.country||"Country not set"," • ",j.timezone||"Timezone not set"]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"user-meta",children:["USD $",ue(j.usdBalance)]}),l.jsxs("div",{className:"user-meta",children:["BTC ",(j.btcBalance||0).toFixed(6)]})]})]},j.email)),g.length===0&&l.jsx("div",{className:"empty-state",children:"No registered users found."})]})]}),l.jsxs("section",{className:"history-grid",children:[l.jsxs("section",{className:"admin-card section-card",children:[l.jsx("div",{className:"section-head",children:l.jsxs("div",{children:[l.jsx("h2",{children:"Wallet Review History"}),l.jsx("p",{children:"Latest deposit and withdrawal decisions made by admin."})]})}),l.jsxs("div",{className:"history-list",children:[k.map(j=>l.jsxs("article",{className:"history-item",children:[l.jsx("strong",{children:j.userName}),l.jsx("div",{className:`status-pill ${j.status}`,children:j.status}),l.jsx("div",{className:"history-meta",children:j.userEmail}),l.jsxs("div",{className:"history-meta",children:[j.type," • $",ue(j.amount)]}),l.jsx("div",{className:"history-meta",children:j.btcAmount?`${j.btcAmount.toFixed(8)} BTC`:"No BTC amount stored"}),l.jsxs("div",{className:"history-meta",children:["Reviewed ",fr(j.reviewedAt||j.timestamp),j.reviewedBy?` • ${j.reviewedBy}`:""]})]},j.id)),k.length===0&&l.jsx("div",{className:"empty-state",children:"No wallet reviews have been completed yet."})]})]}),l.jsxs("section",{className:"admin-card section-card",children:[l.jsx("div",{className:"section-head",children:l.jsxs("div",{children:[l.jsx("h2",{children:"KYC Review History"}),l.jsx("p",{children:"Latest identity approval and rejection activity."})]})}),l.jsxs("div",{className:"history-list",children:[N.map(j=>l.jsxs("article",{className:"history-item",children:[l.jsx("strong",{children:j.fullName}),l.jsx("div",{className:`status-pill ${j.status}`,children:j.status}),l.jsx("div",{className:"history-meta",children:j.userEmail}),l.jsxs("div",{className:"history-meta",children:[j.country,", ",j.city," • ",j.documentType.replace("_"," ")]}),l.jsxs("div",{className:"history-meta",children:["Reviewed ",fr(j.reviewedAt||j.submittedAt),j.reviewedBy?` • ${j.reviewedBy}`:""]})]},j.id)),N.length===0&&l.jsx("div",{className:"empty-state",children:"No KYC reviews have been completed yet."})]})]})]})]})}function zb(){const{login:t,register:e}=fi(),[i,n]=w.useState(""),[s,r]=w.useState(""),[a,c]=w.useState(""),[o,u]=w.useState(!1),[h,d]=w.useState(!1),f=p=>{if(p.preventDefault(),h){e(i,s,a);return}t(i,a)};return l.jsxs("div",{className:"min-h-screen bg-btc-dark flex items-center justify-center p-4 relative overflow-hidden",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[l.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-btc-gold/5 rounded-full blur-3xl animate-pulse"}),l.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-btc-green/5 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),[...Array(6)].map((p,m)=>l.jsx("div",{className:"absolute text-btc-gold/10 text-8xl font-bold animate-float",style:{top:`${20+m*15}%`,left:`${10+m*15}%`,animationDelay:`${m*.5}s`,transform:`rotate(${m*30}deg)`},children:"₿"},m))]}),l.jsxs("div",{className:"auth-shell",children:[l.jsx("div",{className:"auth-card-wrap",children:l.jsxs("div",{className:"auth-card",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx(de,{to:"/",className:"inline-flex text-btc-text-secondary hover:text-btc-gold text-sm mb-6",children:"Back to home"}),l.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-btc-gold to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow",children:l.jsx("span",{className:"text-4xl font-bold text-btc-dark",children:"₿"})}),l.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"BTC Trade"}),l.jsx("p",{className:"text-btc-text-secondary",children:"Professional Cryptocurrency Trading"})]}),l.jsxs("form",{onSubmit:f,className:"space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"User Name"}),l.jsx("input",{type:"text",value:i,onChange:p=>n(p.target.value),placeholder:"Enter your user name",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),h&&l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Email (Optional)"}),l.jsx("input",{type:"email",value:s,onChange:p=>r(p.target.value),placeholder:"Enter your email",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Password"}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:o?"text":"password",value:a,onChange:p=>c(p.target.value),placeholder:"Enter your password",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all pr-12"}),l.jsx("button",{type:"button",onClick:()=>u(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-btc-text-secondary hover:text-white transition-colors",children:o?l.jsx(s1,{size:20}):l.jsx(r1,{size:20})})]})]}),l.jsx("button",{type:"submit",className:"w-full py-3 bg-gradient-to-r from-btc-gold to-yellow-500 text-btc-dark font-bold rounded-lg hover:shadow-lg hover:shadow-btc-gold/30 transition-all duration-300 transform hover:scale-[1.02]",children:h?"Create Account":"Sign In"})]}),l.jsx("div",{className:"auth-toggle-panel",children:l.jsxs("p",{className:"text-center text-btc-text-secondary",children:[h?"Already have an account?":"Don't have an account?"," ",l.jsx("button",{onClick:()=>d(!h),className:"text-btc-gold hover:underline font-medium",children:h?"Sign In":"Sign Up"})]})}),l.jsx("div",{className:"mt-4 p-3 bg-btc-dark/50 rounded-lg border border-btc-border",children:l.jsx("p",{className:"text-xs text-btc-text-secondary text-center",children:h?"New accounts start as unverified and must complete profile verification before trading.":"Demo: Click Sign In with pre-filled credentials"})})]})}),l.jsxs("div",{className:"auth-stats",children:[l.jsxs("div",{className:"auth-stat",children:[l.jsx("p",{className:"text-btc-text-secondary text-sm",children:"24h Volume"}),l.jsx("p",{className:"text-white font-bold",children:"$2.4B"})]}),l.jsxs("div",{className:"auth-stat",children:[l.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Active Traders"}),l.jsx("p",{className:"text-white font-bold",children:"45,892"})]}),l.jsxs("div",{className:"auth-stat",children:[l.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Win Rate"}),l.jsx("p",{className:"text-btc-green font-bold",children:"78%"})]})]})]})]})}const Wm="btcUsers",$o="btcAuthSession",Hm="btcTransactions",qm="btcWalletRequests",Km="btcTrades",Do="btcActiveTrade",Bo="btcTradeResult",Xm="btcKycRequests",Qm=w.createContext(null),Ym=w.createContext(null),Ao="system@btcplatform.com",Gm="System Admin",Mb="admin123",Pd={id:"admin-session",email:Ao,name:Gm,avatar:Si,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!0,verificationStatus:"approved",vipLevel:5,joinedDate:"2024-01-01",role:"admin",phone:"+1 555 300 9000",country:"United States",timezone:"UTC",telegram:"@BTCTradeSystem"},Cs=[],_b=new Map(Cs.map(t=>[t.email.toLowerCase(),t]));function di(t,e){try{const i=localStorage.getItem(t);return i?JSON.parse(i):e}catch{return localStorage.removeItem(t),e}}function Ft(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(i){console.error(`Failed to persist ${t}:`,i)}}function pr(t){try{localStorage.removeItem(t)}catch(e){console.error(`Failed to remove ${t}:`,e)}}function J(t,e=0){const i=typeof t=="number"?t:Number(t);return Number.isFinite(i)?i:e}function F(t,e=""){return typeof t=="string"?t:e}function wn(t){const e=F(t);return e?e.startsWith("data:")?"Document uploaded":e:""}function Ld(){var t,e;return typeof window>"u"?"UTC":((e=(t=window.Intl)==null?void 0:t.DateTimeFormat)==null?void 0:e.call(t).resolvedOptions().timeZone)||"UTC"}function Io(t){return{..._b.get(F(t.email).toLowerCase()),...t,id:F(t.id,`user-${Date.now()}`),email:F(t.email),name:F(t.name,"Trader"),avatar:F(t.avatar,Si),btcBalance:J(t.btcBalance),usdBalance:J(t.usdBalance),stakeAmount:J(t.stakeAmount),vipLevel:J(t.vipLevel),joinedDate:F(t.joinedDate,new Date().toISOString().slice(0,10)),kyc:t.kyc?{...t.kyc,fullName:F(t.kyc.fullName,F(t.name,"Trader")),phone:F(t.kyc.phone),country:F(t.kyc.country),city:F(t.kyc.city),postCode:F(t.kyc.postCode),job:F(t.kyc.job),frontImage:wn(t.kyc.frontImage),backImage:wn(t.kyc.backImage)}:t.kyc}}function Tb(t){const e=new Map;return Cs.forEach(i=>{e.set(i.email.toLowerCase(),Io(i))}),t.filter(i=>i.role!=="admin").forEach(i=>{e.set(i.email.toLowerCase(),Io(i))}),Array.from(e.values())}function Pb(t){return{...t,id:F(t.id,`tx-${Date.now()}`),type:t.type,amount:J(t.amount),btcAmount:t.btcAmount===void 0?void 0:J(t.btcAmount),walletAddress:t.walletAddress?F(t.walletAddress):t.walletAddress,withdrawAddress:t.withdrawAddress?F(t.withdrawAddress):t.withdrawAddress,userEmail:t.userEmail?F(t.userEmail):t.userEmail,userName:t.userName?F(t.userName):t.userName,status:t.status,timestamp:F(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?F(t.reviewedBy):t.reviewedBy}}function Jm(t){return t.type!=="deposit"&&t.type!=="withdraw"||!t.userEmail?null:{id:F(t.id,`tx-${Date.now()}`),type:t.type,amount:J(t.amount),btcAmount:t.btcAmount===void 0?void 0:J(t.btcAmount),walletAddress:t.walletAddress?F(t.walletAddress):void 0,withdrawAddress:t.withdrawAddress?F(t.withdrawAddress):void 0,userEmail:F(t.userEmail),userName:F(t.userName,"Trader"),status:t.status,timestamp:F(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?F(t.reviewedBy):void 0,reviewedAt:void 0}}function Lb(t){return!t.kyc||t.kyc.status!=="pending"?null:{id:`kyc-profile-${t.id}`,userEmail:F(t.email),userName:F(t.name,"Trader"),fullName:F(t.kyc.fullName,t.name),phone:F(t.kyc.phone),country:F(t.kyc.country),city:F(t.kyc.city),postCode:F(t.kyc.postCode),job:F(t.kyc.job),documentType:t.kyc.documentType,frontImage:wn(t.kyc.frontImage),backImage:wn(t.kyc.backImage),status:"pending",submittedAt:F(t.kyc.submittedAt,new Date().toISOString()),reviewedAt:t.kyc.reviewedAt?F(t.kyc.reviewedAt):void 0,reviewedBy:t.kyc.reviewedBy?F(t.kyc.reviewedBy):void 0}}function Oo(t,e){const i=new Map;return e.forEach(n=>{const s=Jm(n);s&&i.set(s.id,s)}),t.forEach(n=>{const s=i.get(n.id);i.set(n.id,{...s||{},...n,reviewedAt:n.reviewedAt||(s==null?void 0:s.reviewedAt),reviewedBy:n.reviewedBy||(s==null?void 0:s.reviewedBy)})}),Array.from(i.values()).sort((n,s)=>new Date(s.reviewedAt||s.timestamp).getTime()-new Date(n.reviewedAt||n.timestamp).getTime())}function Fo(t,e){const i=new Map;return e.forEach(n=>{const s=Lb(n);s&&i.set(n.email.toLowerCase(),s)}),t.forEach(n=>{const s=n.userEmail.toLowerCase(),r=i.get(s);i.set(s,{...r||{},...n,frontImage:wn(n.frontImage||(r==null?void 0:r.frontImage)),backImage:wn(n.backImage||(r==null?void 0:r.backImage)),reviewedAt:n.reviewedAt||(r==null?void 0:r.reviewedAt),reviewedBy:n.reviewedBy||(r==null?void 0:r.reviewedBy)})}),Array.from(i.values()).sort((n,s)=>new Date(s.reviewedAt||s.submittedAt).getTime()-new Date(n.reviewedAt||n.submittedAt).getTime())}function Rb(t){return{...t,id:F(t.id,`trade-${Date.now()}`),pair:F(t.pair,"BTC/USD"),amount:J(t.amount),leverage:J(t.leverage,1),entryPrice:J(t.entryPrice),exitPrice:t.exitPrice===void 0?void 0:J(t.exitPrice),liquidationPrice:t.liquidationPrice===void 0?void 0:J(t.liquidationPrice),entryTime:t.entryTime===void 0?void 0:J(t.entryTime),exitTime:t.exitTime===void 0?void 0:J(t.exitTime),timeframe:F(t.timeframe,"1m"),timestamp:F(t.timestamp,new Date().toISOString()),userEmail:t.userEmail?F(t.userEmail):t.userEmail,pnl:t.pnl===void 0?void 0:J(t.pnl),priceMovePct:t.priceMovePct===void 0?void 0:J(t.priceMovePct)}}function $b(t){return{...t,id:F(t.id,`trade-${Date.now()}`),pair:F(t.pair,"BTC/USD"),amount:J(t.amount),leverage:J(t.leverage,1),entryPrice:J(t.entryPrice),liquidationPrice:J(t.liquidationPrice),timeframe:F(t.timeframe,"1m"),timeframeValue:F(t.timeframeValue,"1m"),tradeSeconds:J(t.tradeSeconds,60),entryTime:J(t.entryTime,Math.floor(Date.now()/1e3)),openedAt:F(t.openedAt,new Date().toISOString()),endTime:F(t.endTime,new Date(Date.now()+6e4).toISOString()),userEmail:F(t.userEmail)}}function Db(t){return{...t,tradeId:F(t.tradeId),won:!!t.won,pnl:J(t.pnl),exitPrice:J(t.exitPrice),exitTime:J(t.exitTime,Math.floor(Date.now()/1e3)),priceMovePct:J(t.priceMovePct),outcomeReason:t.outcomeReason}}function Bb(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.email=="string")}function Ab(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.type=="string")}function Ib(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function Ob(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function Fb(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.pair=="string")}function Vb(t){return!!(t&&typeof t=="object"&&typeof t.id=="string"&&typeof t.userEmail=="string"&&typeof t.entryPrice=="number"&&typeof t.amount=="number"&&typeof t.leverage=="number"&&typeof t.endTime=="string")}function Ub(t){return!!(t&&typeof t=="object"&&typeof t.tradeId=="string"&&typeof t.pnl=="number"&&typeof t.won=="boolean")}const Vo=()=>{const t=di(Wm,Cs);return Bb(t)?Tb(t):Cs.map(Io)};function Wb(){return di($o,null)}const Zm=()=>{const t=di(Hm,[]);return Ab(t)?t.map(Pb):[]},Hb=()=>{const t=di(qm,[]),e=Ib(t)?t:[];return Oo(e,Zm())},qb=()=>{const t=di(Xm,[]),e=Ob(t)?t:[];return Fo(e,Vo())},Kb=()=>{const t=di(Km,[]);return Fb(t)?t.map(Rb):[]},Xb=()=>{const t=di(Do,null);return Vb(t)?$b(t):null},Qb=()=>{const t=di(Bo,null);return Ub(t)?Db(t):null},fi=()=>{const t=w.useContext(Qm);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},Ds=()=>{const t=w.useContext(Ym);if(!t)throw new Error("useApp must be used within AppProvider");return t};function Yb(){const[t,e]=w.useState(()=>typeof window>"u"?Cs:Vo()),[i,n]=w.useState(()=>{if(typeof window>"u")return null;const L=Wb();if((L==null?void 0:L.role)==="admin"&&L.email.toLowerCase()===Ao)return Pd;const M=L==null?void 0:L.email;return M&&Vo().find(A=>A.email===M)||null}),[s,r]=w.useState(()=>kh()),[a,c]=w.useState(!1),[o,u]=w.useState(()=>typeof window>"u"?[]:Zm()),[h,d]=w.useState(()=>typeof window>"u"?[]:Hb()),[f,p]=w.useState(()=>typeof window>"u"?[]:qb()),[m,x]=w.useState(()=>typeof window>"u"?[]:Kb()),[b,g]=w.useState(()=>typeof window>"u"?null:Xb()),[v,y]=w.useState(()=>typeof window>"u"?null:Qb()),[k,N]=w.useState(()=>Oc);w.useEffect(()=>{Ft(Wm,t)},[t]),w.useEffect(()=>{Ft(Hm,o)},[o]),w.useEffect(()=>{d(L=>{const M=Oo(L,o);return JSON.stringify(M)===JSON.stringify(L)?L:M})},[o]),w.useEffect(()=>{Ft(qm,h)},[h]),w.useEffect(()=>{p(L=>{const M=Fo(L,t);return JSON.stringify(M)===JSON.stringify(L)?L:M})},[t]),w.useEffect(()=>{Ft(Xm,f)},[f]),w.useEffect(()=>{Ft(Km,m)},[m]),w.useEffect(()=>{b?Ft(Do,b):pr(Do)},[b]),w.useEffect(()=>{v?Ft(Bo,v):pr(Bo)},[v]),w.useEffect(()=>{pr("btcCurrentUserEmail"),i?Ft($o,{email:i.email,role:i.role||"user"}):pr($o)},[i]),w.useEffect(()=>{$v(async()=>{const{DEPOSIT_WALLET:L}=await Promise.resolve().then(()=>Ax);return{DEPOSIT_WALLET:L}},void 0).then(({DEPOSIT_WALLET:L})=>{})},[]),w.useEffect(()=>{let L=!0,M=null,S=null;const A=async()=>{try{const Q=await Fx();L&&(r(Q),c(!0))}catch{L&&(r(Q=>kh(Q.price)),c(!0))}},U=()=>{L&&(S=Vx(Q=>{L&&(r(Q),c(!0))},Q=>{L&&(Q==="closed"||Q==="error")&&(M&&window.clearTimeout(M),M=window.setTimeout(()=>{U()},3e3))}))};A(),U();const H=setInterval(A,3e4);return()=>{L=!1,S==null||S(),M&&window.clearTimeout(M),clearInterval(H)}},[]);const C=(L,M)=>{let S=i;e(A=>A.map(U=>{if(U.email!==L)return U;const H=M(U);return(i==null?void 0:i.email)===L&&(S=H),H})),S&&S.email===L&&n(S)},_=(L,M)=>{const A=L.trim().toLowerCase();if((A===Gm.toLowerCase()||A===Ao.toLowerCase())&&M===Mb){n(Pd);return}const U=t.find(H=>H.name.trim().toLowerCase()===A||H.email.trim().toLowerCase()===A);if(U){if(U.password&&U.password!==M){alert("Incorrect password");return}n(U);return}alert("Incorrect username or password")},T=(L,M,S)=>{const A=L.trim(),U=M.trim().toLowerCase();if(!A||!S.trim()){alert("Username and password are required");return}const H=A.toLowerCase().replace(/[^a-z0-9]+/g,"")||`user${Date.now()}`,Q=U||`${H}@btcplatform.com`;if(t.find(Ze=>Ze.email.toLowerCase()===Q)){alert("That email is already registered");return}const $e={...Co,id:`user-${Date.now()}`,email:Q,name:A,avatar:Si,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:S,phone:"",country:"",city:"",postCode:"",job:"",timezone:Ld(),telegram:"",kyc:{fullName:A,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(Ze=>[$e,...Ze]),n($e)},j=({email:L,name:M,avatar:S})=>{const A=L.trim().toLowerCase(),U=M.trim()||"Google User";if(!A){alert("Google account email is missing");return}const H=t.find(ve=>ve.email.toLowerCase()===A);if(H){const ve={...H,name:U,avatar:S||H.avatar||Si};e($e=>$e.map(Ze=>Ze.email===H.email?ve:Ze)),n(ve);return}const Q={...Co,id:`user-${Date.now()}`,email:A,name:U,avatar:S||Si,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:void 0,phone:"",country:"",city:"",postCode:"",job:"",timezone:Ld(),telegram:"",kyc:{fullName:U,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(ve=>[Q,...ve]),n(Q)},R=()=>{n(null)},G=L=>{if(!i)return;const M={...i,...L};n(M),e(S=>S.map(A=>A.email===i.email?M:A))},Me=L=>{p(M=>{const S=M.filter(A=>A.userEmail.toLowerCase()!==L.userEmail.toLowerCase());return Fo([L,...S],t)})},be=L=>{if(!i)return;const M={...L,userEmail:L.userEmail||i.email,userName:L.userName||i.name};if(u(S=>[M,...S]),M.type==="deposit"||M.type==="withdraw"){const S=Jm(M);if(!S)return;d(A=>Oo([S,...A],o))}},fe=L=>{if(!i)return;const M={...L,userEmail:L.userEmail||i.email};x(S=>[M,...S])},we=L=>{y(null),g(L)},ce=()=>{y(null)};w.useEffect(()=>{if(!b)return;const L=(A,U)=>{const H=A==="liquidation"?{pnl:-b.amount,directionalMovePct:-(100/b.leverage)}:rm({entryPrice:b.entryPrice,exitPrice:U,amount:b.amount,leverageValue:b.leverage,tradeDirection:b.direction}),Q=Math.floor(Date.now()/1e3),ve={id:b.id,pair:b.pair,direction:b.direction,amount:b.amount,leverage:b.leverage,entryPrice:b.entryPrice,exitPrice:U,liquidationPrice:b.liquidationPrice,entryTime:b.entryTime,exitTime:Q,timeframe:b.timeframe,status:H.pnl>=0?"won":"lost",timestamp:new Date().toISOString(),userEmail:b.userEmail,pnl:H.pnl,priceMovePct:H.directionalMovePct,outcomeReason:A};x($e=>[ve,...$e]),C(b.userEmail,$e=>({...$e,usdBalance:Math.max(0,$e.usdBalance+H.pnl)})),y({tradeId:b.id,won:H.pnl>=0,pnl:H.pnl,exitPrice:U,exitTime:Q,priceMovePct:H.directionalMovePct,outcomeReason:A}),g(null)},M=()=>{const A=Date.now();if(b.direction==="up"?s.price<=b.liquidationPrice:s.price>=b.liquidationPrice){L("liquidation",s.price);return}A>=new Date(b.endTime).getTime()&&L("expiry",s.price)};M();const S=window.setInterval(M,1e3);return()=>{window.clearInterval(S)}},[b,s.price,i]);const Re=L=>{const M=h.find(S=>S.id===L)||o.find(S=>S.id===L);!M||M.status!=="pending"||!M.userEmail||(d(S=>S.map(A=>A.id===L?{...A,status:"completed",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:A)),u(S=>S.map(A=>A.id===L?{...A,status:"completed",reviewedBy:"System Admin"}:A)),C(M.userEmail,S=>M.type==="deposit"?{...S,btcBalance:S.btcBalance+(M.btcAmount||0),usdBalance:S.usdBalance+M.amount}:M.type==="withdraw"?{...S,usdBalance:Math.max(0,S.usdBalance-M.amount)}:S))},P=L=>{d(M=>M.map(S=>S.id===L?{...S,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:S)),u(M=>M.map(S=>S.id===L?{...S,status:"rejected",reviewedBy:"System Admin"}:S))},O=L=>{p(M=>M.map(S=>S.userEmail===L&&S.status==="pending"?{...S,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:S)),C(L,M=>{var S,A,U,H,Q,ve;return{...M,name:((S=M.kyc)==null?void 0:S.fullName)||M.name,phone:((A=M.kyc)==null?void 0:A.phone)||M.phone,country:((U=M.kyc)==null?void 0:U.country)||M.country,city:((H=M.kyc)==null?void 0:H.city)||M.city,postCode:((Q=M.kyc)==null?void 0:Q.postCode)||M.postCode,job:((ve=M.kyc)==null?void 0:ve.job)||M.job,isVerified:!0,verificationStatus:"approved",kyc:M.kyc?{...M.kyc,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:M.kyc}})},I=L=>{p(M=>M.map(S=>S.userEmail===L&&S.status==="pending"?{...S,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:S)),C(L,M=>({...M,isVerified:!1,verificationStatus:"rejected",kyc:M.kyc?{...M.kyc,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:M.kyc}))},q={user:i,isAuthenticated:!!i,login:_,register:T,signInWithGoogle:j,logout:R,updateUser:G,submitKycRequest:Me},$={btcPrice:s.price,btcChange24h:s.change24h,btcHigh24h:s.high24h,btcLow24h:s.low24h,btcVolume24h:s.volume24h,marketStatus:s.source,marketReady:a,transactions:o,walletRequests:h,kycRequests:f,trades:m,users:t,activeTrade:b,lastTradeResult:v,walletAddress:k,setWalletAddress:N,addTransaction:be,addTrade:fe,startTrade:we,clearTradeResult:ce,approveTransaction:Re,rejectTransaction:P,approveVerification:O,rejectVerification:I};return l.jsx(y1,{children:l.jsx(Qm.Provider,{value:q,children:l.jsx(Ym.Provider,{value:$,children:l.jsx(Px,{children:i?l.jsxs("div",{className:"min-h-screen bg-btc-dark lg:flex lg:h-screen",children:[l.jsx(p1,{}),l.jsxs("div",{className:"flex min-h-screen flex-1 flex-col lg:overflow-hidden",children:[l.jsx(m1,{btcPrice:s.price,btcChange24h:s.change24h,marketStatus:s.source}),l.jsx("main",{className:"app-main-scroll flex-1 bg-[#0f131c] px-4 pb-28 pt-4 sm:px-5 lg:overflow-y-auto lg:px-6 lg:pb-6 lg:pt-6",children:l.jsxs(yh,{children:[l.jsx(tt,{path:"/",element:i.role==="admin"?l.jsx(Nt,{to:"/admin",replace:!0}):l.jsx(j1,{})}),l.jsx(tt,{path:"/finance",element:i.role==="admin"?l.jsx(Nt,{to:"/admin",replace:!0}):l.jsx(I1,{})}),l.jsx(tt,{path:"/trade",element:i.role==="admin"?l.jsx(Nt,{to:"/admin",replace:!0}):l.jsx(xb,{})}),l.jsx(tt,{path:"/profile",element:i.role==="admin"?l.jsx(Nt,{to:"/admin",replace:!0}):l.jsx(wb,{})}),l.jsx(tt,{path:"/news",element:i.role==="admin"?l.jsx(Nt,{to:"/admin",replace:!0}):l.jsx(Sb,{})}),l.jsx(tt,{path:"/support",element:i.role==="admin"?l.jsx(Nt,{to:"/admin",replace:!0}):l.jsx(Cb,{})}),l.jsx(tt,{path:"/admin",element:i.role==="admin"?l.jsx(Eb,{}):l.jsx(Nt,{to:"/",replace:!0})}),l.jsx(tt,{path:"*",element:l.jsx(Nt,{to:i.role==="admin"?"/admin":"/",replace:!0})})]})})]}),l.jsx(x1,{})]}):l.jsxs(yh,{children:[l.jsx(tt,{path:"/",element:l.jsx(S1,{})}),l.jsx(tt,{path:"/login",element:l.jsx(zb,{})}),l.jsx(tt,{path:"*",element:l.jsx(Nt,{to:"/"})})]})})})})})}za.createRoot(document.getElementById("root")).render(l.jsx(xi.StrictMode,{children:l.jsx(Yb,{})}));
