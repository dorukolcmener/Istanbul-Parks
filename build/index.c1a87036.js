!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequirea1b6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){let t=o[e];delete o[e];let r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){o[e]=t},r.parcelRequirea1b6=i),i.register("1oNCw",(function(t,r){var n,o;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var i={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("1oNCw").register(JSON.parse('{"3a4Nh":"index.c1a87036.js","69eFW":"tree-1151238_640.0c1e2fed.png","1fXF9":"park_location.3a6c8d99.csv"}'));var s;i.register("60THF",(function(e,t){"use strict";var r=i("78j8V"),n=i("158G9"),o=i("2PMUz"),s=i("4Ipsn");function a(e){var t=new o(e),i=n(o.prototype.request,t);return r.extend(i,o.prototype,t),r.extend(i,t),i}var u=a(i("706XX"));u.Axios=o,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=i("4suIx"),u.CancelToken=i("2rhH3"),u.isCancel=i("4BPKi"),u.all=function(e){return Promise.all(e)},u.spread=i("7rFjq"),u.isAxiosError=i("3uGj3"),e.exports=u,e.exports.default=u})),i.register("78j8V",(function(e,t){"use strict";var r=i("158G9"),n=Object.prototype.toString;function o(e){return"[object Array]"===n.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==n.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===n.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)f(arguments[n],r);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}})),i.register("158G9",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),i.register("2PMUz",(function(e,t){"use strict";var r=i("78j8V"),n=i("7EcXZ"),o=i("2HljA"),s=i("2JwWd"),a=i("4Ipsn");function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=a(this.defaults,e),n(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=u})),i.register("7EcXZ",(function(e,t){"use strict";var r=i("78j8V");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,o){if(!t)return e;var i;if(o)i=o(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}})),i.register("2HljA",(function(e,t){"use strict";var r=i("78j8V");function n(){this.handlers=[]}n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),i.register("2JwWd",(function(e,t){"use strict";var r=i("78j8V"),n=i("6W6u9"),o=i("4BPKi"),s=i("706XX");function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=n(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return a(e),t.data=n(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(a(e),t&&t.response&&(t.response.data=n(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),i.register("6W6u9",(function(e,t){"use strict";var r=i("78j8V");e.exports=function(e,t,n){return r.forEach(n,(function(r){e=r(e,t)})),e}})),i.register("4BPKi",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),i.register("706XX",(function(e,t){var r=i("3JAaW"),n=i("78j8V"),o=i("2VVZC"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(u=i("MvFG7")),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c})),i.register("3JAaW",(function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=a(p);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||f||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}})),i.register("2VVZC",(function(e,t){"use strict";var r=i("78j8V");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),i.register("MvFG7",(function(e,t){"use strict";var r=i("78j8V"),n=i("3TB7T"),o=i("2lGYW"),s=i("7EcXZ"),a=i("3kgte"),u=i("3Nips"),c=i("2OXVC"),f=i("1kTFN");e.exports=function(e){return new Promise((function(t,i){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};n(t,i,o),d=null}},d.onabort=function(){d&&(i(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){i(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),i(f(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||c(g))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),i(e),d=null)})),l||(l=null),d.send(l)}))}})),i.register("3TB7T",(function(e,t){"use strict";var r=i("1kTFN");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}})),i.register("1kTFN",(function(e,t){"use strict";var r=i("T3ph1");e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}})),i.register("T3ph1",(function(e,t){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}})),i.register("2lGYW",(function(e,t){"use strict";var r=i("78j8V");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),i.register("3kgte",(function(e,t){"use strict";var r=i("4tOlc"),n=i("1tzfM");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),i.register("4tOlc",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}})),i.register("1tzfM",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),i.register("3Nips",(function(e,t){"use strict";var r=i("78j8V"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,o,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),o=r.trim(e.substr(i+1)),t){if(s[t]&&n.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([o]):s[t]?s[t]+", "+o:o}})),s):s}})),i.register("2OXVC",(function(e,t){"use strict";var r=i("78j8V");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),i.register("4Ipsn",(function(e,t){"use strict";var r=i("78j8V");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=u(void 0,t[e]))})),r.forEach(i,c),r.forEach(s,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(void 0,t[o])})),r.forEach(a,(function(r){r in t?n[r]=u(e[r],t[r]):r in e&&(n[r]=u(void 0,e[r]))}));var f=o.concat(i).concat(s).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,c),n}})),i.register("4suIx",(function(e,t){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r})),i.register("2rhH3",(function(e,t){"use strict";var r=i("4suIx");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),i.register("7rFjq",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),i.register("3uGj3",(function(e,t){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}})),s=i("60THF");class a{constructor(e){this.data=e}extract(){let e=this.data.split("\n"),t=e.shift().split(",");return e.filter((e=>e.split(",").length>2)).map((e=>{let r={},n=e.split(",");return t.forEach(((e,t)=>{r[e]="LATITUDE"===e||"LONGITUDE"===e?+n[t]:n[t]})),r}))}}var u;i.register("2c4dZ",(function(t,r){var n;e(t.exports,"getBundleURL",(()=>n),(e=>n=e));var o=null;function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(){return o||(o=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[0])}return"/"}()),o}})),i.register("6SpJm",(function(e,t){"use strict";var r=i("1oNCw").resolve;function n(e){if(""===e)return".";var t="/"===e[e.length-1]?e.slice(0,e.length-1):e,r=t.lastIndexOf("/");return-1===r?".":t.slice(0,r)}function o(e,t){if(e===t)return"";var r=e.split("/");"."===r[0]&&r.shift();var n,o,i=t.split("/");for("."===i[0]&&i.shift(),n=0;(n<i.length||n<r.length)&&null==o;n++)r[n]!==i[n]&&(o=n);var s=[];for(n=0;n<r.length-o;n++)s.push("..");return i.length>o&&s.push.apply(s,i.slice(o)),s.join("/")}e.exports=function(e,t){return o(n(r(e)),r(t))},e.exports._dirname=n,e.exports._relative=o})),u=i("2c4dZ").getBundleURL()+i("6SpJm")("3a4Nh","69eFW");var c;c=i("2c4dZ").getBundleURL()+i("6SpJm")("3a4Nh","1fXF9");new class{constructor(e,t){this.markers=[],this.initialPosition=t,this.map=L.map(e).setView(this.initialPosition,11),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map)}async loadParks(e){try{const{data:r}=await t(s).get(e);this.parkLocations=new a(r).extract();let n=new Set;this.parkLocations.forEach((e=>n.add(e.COUNTY_NAME))),this.counties=[...n].sort(((e,t)=>e.localeCompare(t)));let o=document.querySelector("#countyselector");o.innerHTML=this.counties.map((e=>`<option value="${e}">${e}</option>`)),this.panToCounty(o.value,!1),o.addEventListener("change",(({target:{value:e}})=>{this.panToCounty(e)}))}catch(e){setTimeout((()=>{console.log(e.toString()),this.loadParks()}),5e3)}}panToCounty(e,t=!0){this.removeMarkers();let r=this.parkLocations.filter((({COUNTY_NAME:t})=>t===e)),n=r.reduce((({lat:e,lng:t},r)=>{this.createMarker(r);let{LATITUDE:n,LONGITUDE:o}=r;return{lat:e+n,lng:t+o}}),{lat:0,lng:0});n.lng=n.lng/r.length,n.lat=n.lat/r.length,t&&this.map.setView(n,13,{animation:!0})}createMarker(e){let{LATITUDE:r,LONGITUDE:n,NAME:o,NEIGHBORHOOD_NAME:i,COUNTY_NAME:s}=e,a=L.marker({lat:r,lng:n},{title:o,riseOnHover:!0,icon:L.icon({iconUrl:t(u),iconSize:[20,20]})});a.bindPopup(`<b>${o}</b>, ${i}, ${s}`),this.markers.push(a),a.addTo(this.map)}removeMarkers(){this.markers.forEach((e=>{e.unbindPopup(),e.remove()})),this.markers=[]}}("map",{lat:41.0082,lng:28.9784}).loadParks(t(c))}();