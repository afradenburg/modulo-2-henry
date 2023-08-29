(()=>{var r={791:(r,t,e)=>{"use strict";function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(r)}function o(r){var t=function(r,t){if("object"!==n(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===n(t)?t:String(t)}function i(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function u(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){var n,i,u;n=r,i=t,u=e[t],(i=o(i))in n?Object.defineProperty(n,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[i]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function c(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}e.r(t),e.d(t,{__DO_NOT_USE__ActionTypes:()=>p,applyMiddleware:()=>O,bindActionCreators:()=>v,combineReducers:()=>s,compose:()=>d,createStore:()=>y,legacy_createStore:()=>l});var f="function"==typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function y(r,t,e){var n;if("function"==typeof t&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof t&&void 0===e&&(e=t,t=void 0),void 0!==e){if("function"!=typeof e)throw new Error(c(1));return e(y)(r,t)}if("function"!=typeof r)throw new Error(c(2));var o=r,i=t,u=[],a=u,l=!1;function s(){a===u&&(a=u.slice())}function b(){if(l)throw new Error(c(3));return i}function v(r){if("function"!=typeof r)throw new Error(c(4));if(l)throw new Error(c(5));var t=!0;return s(),a.push(r),function(){if(t){if(l)throw new Error(c(6));t=!1,s();var e=a.indexOf(r);a.splice(e,1),u=null}}}function d(r){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}(r))throw new Error(c(7));if(void 0===r.type)throw new Error(c(8));if(l)throw new Error(c(9));try{l=!0,i=o(i,r)}finally{l=!1}for(var t=u=a,e=0;e<t.length;e++)(0,t[e])();return r}return d({type:p.INIT}),(n={dispatch:d,subscribe:v,getState:b,replaceReducer:function(r){if("function"!=typeof r)throw new Error(c(10));o=r,d({type:p.REPLACE})}})[f]=function(){var r,t=v;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(c(11));function e(){r.next&&r.next(b())}return e(),{unsubscribe:t(e)}}})[f]=function(){return this},r},n}var l=y;function s(r){for(var t=Object.keys(r),e={},n=0;n<t.length;n++){var o=t[n];"function"==typeof r[o]&&(e[o]=r[o])}var i,u=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(t){var e=r[t];if(void 0===e(void 0,{type:p.INIT}))throw new Error(c(12));if(void 0===e(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(e)}catch(r){i=r}return function(r,t){if(void 0===r&&(r={}),i)throw i;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=e[a],y=r[a],l=p(y,t);if(void 0===l)throw t&&t.type,new Error(c(14));o[a]=l,n=n||l!==y}return(n=n||u.length!==Object.keys(r).length)?o:r}}function b(r,t){return function(){return t(r.apply(this,arguments))}}function v(r,t){if("function"==typeof r)return b(r,t);if("object"!=typeof r||null===r)throw new Error(c(16));var e={};for(var n in r){var o=r[n];"function"==typeof o&&(e[n]=b(o,t))}return e}function d(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function O(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return function(r){return function(){var e=r.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(r){return r(o)}));return n=d.apply(void 0,i)(e.dispatch),u(u({},e),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883);r.exports={incremento:()=>({type:n}),decremento:()=>({type:o})}},616:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),{incremento:i}=e(518),u={contador:0};r.exports=function(r=u,{type:t,payLoad:e}){switch(t){case n:return{...r,contador:r.contador+1};case o:return{...r,contador:r.contador-1};default:return{...r}}}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=e(791),{incremento:t,decremento:n}=(e(616),e(518))})()})();