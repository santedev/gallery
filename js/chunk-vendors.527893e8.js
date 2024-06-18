(self["webpackChunkart_gallery_app"]=self["webpackChunkart_gallery_app"]||[]).push([[504],{4046:function(e,t,n){"use strict";n.d(t,{$L:function(){return B},$g:function(){return L},A4:function(){return p},Am:function(){return Q},As:function(){return q},Cv:function(){return H},FA:function(){return F},Fy:function(){return T},Hk:function(){return o},I9:function(){return X},Im:function(){return K},K3:function(){return c},KA:function(){return u},Ku:function(){return ce},OE:function(){return ae},T9:function(){return I},Tj:function(){return b},Uj:function(){return h},XA:function(){return S},ZQ:function(){return k},bD:function(){return Y},cY:function(){return E},dI:function(){return oe},eX:function(){return N},g:function(){return M},gR:function(){return V},gz:function(){return ee},hp:function(){return Z},jZ:function(){return x},kH:function(){return G},kj:function(){return se},lT:function(){return P},lV:function(){return O},qc:function(){return W},sr:function(){return A},tD:function(){return te},u:function(){return d},vA:function(){return i},yU:function(){return C},yw:function(){return z},zW:function(){return R}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==h)throw new l;const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&m(n)&&(e[n]=f(e[n],t[n]));return e}function m(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/gallery/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},_=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},w=()=>{try{return v()||y()||_()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},C=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},I=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},S=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function x(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function A(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function O(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function P(){const e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function L(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function R(){try{return"object"===typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D="FirebaseError";class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?j(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new M(r,s,n);return a}}function j(e,t){return e.replace(U,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const U=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){return JSON.parse(e)}function q(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=B(d(o[0])||""),n=B(d(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},H=function(e){const t=$(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},W=function(e){const t=$(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function K(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function G(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Y(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(J(n)&&J(o)){if(!Y(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function J(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function X(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Z(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function te(e,t){const n=new ne(e,t);return n.subscribe.bind(n)}class ne{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=re(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ie),void 0===r.error&&(r.error=ie),void 0===r.complete&&(r.complete=ie);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function re(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function ie(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},ae=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){"use strict";n.d(t,{C4:function(){return v},EW:function(){return ke},Gc:function(){return me},IG:function(){return Ie},IJ:function(){return Le},KR:function(){return Pe},Kh:function(){return fe},Pr:function(){return Fe},R1:function(){return De},X2:function(){return l},bl:function(){return y},fE:function(){return we},g8:function(){return ye},hZ:function(){return A},i9:function(){return Oe},ju:function(){return be},o5:function(){return c},u4:function(){return x},ux:function(){return Ce},yC:function(){return s}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let i,o;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}class l{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,v();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(u(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),y()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=f,t=o;try{return f=!0,o=this,this._runnings++,h(this),this.fn()}finally{d(this),this._runnings--,o=t,f=e}}stop(){this.active&&(h(this),d(this),this.onStop&&this.onStop(),this.active=!1)}}function u(e){return e.value}function h(e){e._trackId++,e._depsLength=0}function d(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)p(e.deps[t],e);e.deps.length=e._depsLength}}function p(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let f=!0,m=0;const g=[];function v(){g.push(f),f=!1}function y(){const e=g.pop();f=void 0===e||e}function _(){m++}function w(){m--;while(!m&&C.length)C.shift()()}function b(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&p(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const C=[];function I(e,t,n){_();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&C.push(r.scheduler)))}w()}const S=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},E=new WeakMap,T=Symbol(""),k=Symbol("");function x(e,t,n){if(f&&o){let t=E.get(e);t||E.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=S((()=>t.delete(n)))),b(o,r,void 0)}}function A(e,t,n,i,o,s){const a=E.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(T)),(0,r.CE)(e)&&c.push(a.get(k)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(T)),(0,r.CE)(e)&&c.push(a.get(k)));break;case"set":(0,r.CE)(e)&&c.push(a.get(T));break}_();for(const r of c)r&&I(r,4,void 0);w()}const O=(0,r.pD)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),L=R();function R(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)x(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){v(),_();const n=Ce(this)[t].apply(this,e);return w(),y(),n}})),e}function N(e){(0,r.Bm)(e)||(e=String(e));const t=Ce(this);return x(t,"has",e),t.hasOwnProperty(e)}class D{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return o;if("__v_raw"===t)return n===(i?o?he:ue:o?le:ce).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!i){if(s&&(0,r.$3)(L,t))return Reflect.get(L,t,n);if("hasOwnProperty"===t)return N}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?P.has(t):O(t))?a:(i||x(e,"get",t),o?a:Oe(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ge(a):fe(a):a)}}class M extends D{constructor(e=!1){super(!1,e)}set(e,t,n,i){let o=e[t];if(!this._isShallow){const t=_e(o);if(we(n)||_e(n)||(o=Ce(o),n=Ce(n)),!(0,r.cy)(e)&&Oe(o)&&!Oe(n))return!t&&(o.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===Ce(i)&&(s?(0,r.$H)(n,o)&&A(e,"set",t,n,o):A(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&A(e,"delete",t,void 0,i),o}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&P.has(t)||x(e,"has",t),n}ownKeys(e){return x(e,"iterate",(0,r.cy)(e)?"length":T),Reflect.ownKeys(e)}}class F extends D{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const j=new M,U=new F,B=new M(!0),q=e=>e,$=e=>Reflect.getPrototypeOf(e);function H(e,t,n=!1,i=!1){e=e["__v_raw"];const o=Ce(e),s=Ce(t);n||((0,r.$H)(t,s)&&x(o,"get",t),x(o,"get",s));const{has:a}=$(o),c=i?q:n?Ee:Se;return a.call(o,t)?c(e.get(t)):a.call(o,s)?c(e.get(s)):void(e!==o&&e.get(t))}function W(e,t=!1){const n=this["__v_raw"],i=Ce(n),o=Ce(e);return t||((0,r.$H)(e,o)&&x(i,"has",e),x(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function V(e,t=!1){return e=e["__v_raw"],!t&&x(Ce(e),"iterate",T),Reflect.get(e,"size",e)}function z(e){e=Ce(e);const t=Ce(this),n=$(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function K(e,t){t=Ce(t);const n=Ce(this),{has:i,get:o}=$(n);let s=i.call(n,e);s||(e=Ce(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.$H)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function G(e){const t=Ce(this),{has:n,get:r}=$(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&A(t,"delete",e,void 0,o),s}function Y(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function J(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ce(o),a=t?q:e?Ee:Se;return!e&&x(s,"iterate",T),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Q(e,t,n){return function(...i){const o=this["__v_raw"],s=Ce(o),a=(0,r.CE)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),h=n?q:t?Ee:Se;return!t&&x(s,"iterate",l?k:T),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function X(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Z(){const e={get(e){return H(this,e)},get size(){return V(this)},has:W,add:z,set:K,delete:G,clear:Y,forEach:J(!1,!1)},t={get(e){return H(this,e,!1,!0)},get size(){return V(this)},has:W,add:z,set:K,delete:G,clear:Y,forEach:J(!1,!0)},n={get(e){return H(this,e,!0)},get size(){return V(this,!0)},has(e){return W.call(this,e,!0)},add:X("add"),set:X("set"),delete:X("delete"),clear:X("clear"),forEach:J(!0,!1)},r={get(e){return H(this,e,!0,!0)},get size(){return V(this,!0)},has(e){return W.call(this,e,!0)},add:X("add"),set:X("set"),delete:X("delete"),clear:X("clear"),forEach:J(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=Q(i,!1,!1),n[i]=Q(i,!0,!1),t[i]=Q(i,!1,!0),r[i]=Q(i,!0,!0)})),[e,n,t,r]}const[ee,te,ne,re]=Z();function ie(e,t){const n=t?e?re:ne:e?te:ee;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,o)}const oe={get:ie(!1,!1)},se={get:ie(!1,!0)},ae={get:ie(!0,!1)};const ce=new WeakMap,le=new WeakMap,ue=new WeakMap,he=new WeakMap;function de(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:de((0,r.Zf)(e))}function fe(e){return _e(e)?e:ve(e,!1,j,oe,ce)}function me(e){return ve(e,!1,B,se,le)}function ge(e){return ve(e,!0,U,ae,ue)}function ve(e,t,n,i,o){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=pe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function ye(e){return _e(e)?ye(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function be(e){return!!e&&!!e["__v_raw"]}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ie(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Se=e=>(0,r.Gv)(e)?fe(e):e,Ee=e=>(0,r.Gv)(e)?ge(e):e;class Te{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new l((()=>e(this._value)),(()=>Ae(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||Ae(e,4),xe(e),e.effect._dirtyLevel>=2&&Ae(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ke(e,t,n=!1){let i,o;const s=(0,r.Tn)(e);s?(i=e,o=r.tE):(i=e.get,o=e.set);const a=new Te(i,o,s||!o,n);return a}function xe(e){var t;f&&o&&(e=Ce(e),b(o,null!=(t=e.dep)?t:e.dep=S((()=>e.dep=void 0),e instanceof Te?e:void 0),void 0))}function Ae(e,t=4,n){e=Ce(e);const r=e.dep;r&&I(r,t,void 0)}function Oe(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Re(e,!1)}function Le(e){return Re(e,!0)}function Re(e,t){return Oe(e)?e:new Ne(e,t)}class Ne{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Se(e)}get value(){return xe(this),this._value}set value(e){const t=this.__v_isShallow||we(e)||_e(e);e=t?e:Ce(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Se(e),Ae(this,4,e))}}function De(e){return Oe(e)?e.value:e}const Me={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Fe(e){return ye(e)?e:new Proxy(e,Me)}},6768:function(e,t,n){"use strict";n.d(t,{$u:function(){return De},CE:function(){return rn},Df:function(){return _e},EW:function(){return Vn},FK:function(){return zt},Fv:function(){return gn},Gt:function(){return pt},Gy:function(){return le},K9:function(){return Ft},Lk:function(){return un},MZ:function(){return ye},OW:function(){return me},Q3:function(){return vn},QP:function(){return he},Qi:function(){return D},WQ:function(){return ft},bF:function(){return hn},bo:function(){return oe},dY:function(){return y},eW:function(){return mn},g2:function(){return V},h:function(){return zn},jt:function(){return M},nI:function(){return kn},pI:function(){return $e},pM:function(){return we},pR:function(){return pe},qL:function(){return s},sV:function(){return Re},uX:function(){return Xt},wB:function(){return ee},xo:function(){return Me}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),i=n(4232);function o(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function s(e,t,n,r){if((0,i.Tn)(e)){const s=o(e,t,n,r);return s&&(0,i.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,i.cy)(e)){const i=[];for(let o=0;o<e.length;o++)i.push(s(e[o],t,n,r));return i}}function a(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;i=i.parent}const c=t.appContext.config.errorHandler;if(c)return(0,r.C4)(),o(c,null,10,[e,s,a]),void(0,r.bl)()}c(e,n,s,i)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const p=[];let f=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function _(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],o=T(i);o<e||o===e&&i.pre?t=r+1:n=r}return t}function w(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(_(e.id),0,e),b())}function b(){l||u||(u=!0,v=g.then(x))}function C(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function I(e){(0,i.cy)(e)?p.push(...e):f&&f.includes(e,e.allowRecurse?m+1:m)||p.push(e),b()}function S(e,t,n=(l?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function E(e){if(p.length){const e=[...new Set(p)].sort(((e,t)=>T(e)-T(t)));if(p.length=0,f)return void f.push(...e);for(f=e,m=0;m<f.length;m++)f[m]();f=null,m=0}}const T=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=T(e)-T(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){u=!1,l=!0,h.sort(k);i.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,h.length=0,E(e),l=!1,v=null,(h.length||p.length)&&x(e)}}function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.MZ;s&&(o=n.map((e=>(0,i.Kg)(e)?e.trim():e))),t&&(o=n.map(i.bB))}let l;let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&s(u,e,6,o);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(h,e,6,o)}}function O(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=O(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((e=>a[e]=null)):(0,i.X$)(a,s),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function P(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}let L=null,R=null;function N(e){const t=L;return L=e,R=e&&e.type.__scopeId||null,t}function D(e){R=e}function M(){R=null}function F(e,t=L,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&tn(-1);const i=N(t);let o;try{o=e(...n)}finally{N(i),r._d&&tn(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function j(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:p,data:f,setupState:m,ctx:g,inheritAttrs:v}=e,y=N(e);let _,w;try{if(4&n.shapeFlag){const e=o||r,t=e;_=yn(h.call(t,e,d,p,m,f,g)),w=l}else{const e=t;0,_=yn(e.length>1?e(p,{attrs:l,slots:c,emit:u}):e(p,null)),w=t.props?l:U(l)}}catch(C){Jt.length=0,a(C,e,1),_=hn(Gt)}let b=_;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(s&&e.some(i.CP)&&(w=B(w,s)),b=fn(b,w,!1,!0))}return n.dirs&&(b=fn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),_=b,N(y),_}const U=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},B=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function q(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||$(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?$(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!P(l,n))return!0}}return!1}function $(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!P(n,o))return!0}return!1}function H({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const W="components";function V(e,t){return K(W,e,!0,t)||e}const z=Symbol.for("v-ndc");function K(e,t,n=!0,r=!1){const o=L||Tn;if(o){const n=o.type;if(e===W){const e=Hn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const s=G(o[e]||n[e],t)||G(o.appContext[e],t);return!s&&r?n:s}}function G(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}const Y=e=>e.__isSuspense;function J(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):I(e)}const Q=Symbol.for("v-scx"),X=()=>{{const e=ft(Q);return e}};const Z={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:c,once:l,onTrack:u,onTrigger:h}=i.MZ){if(t&&l){const e=t;t=(...t)=>{e(...t),T()}}const d=Tn,p=e=>!0===a?e:ie(e,!1===a?1:void 0);let f,m,g=!1,v=!1;if((0,r.i9)(e)?(f=()=>e.value,g=(0,r.fE)(e)):(0,r.g8)(e)?(f=()=>p(e),g=!0):(0,i.cy)(e)?(v=!0,g=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),f=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?p(e):(0,i.Tn)(e)?o(e,d,2):void 0))):f=(0,i.Tn)(e)?t?()=>o(e,d,2):()=>(m&&m(),s(e,d,3,[_])):i.tE,t&&a){const e=f;f=()=>ie(e())}let y,_=e=>{m=S.onStop=()=>{o(e,d,4),m=S.onStop=void 0}};if(Dn){if(_=i.tE,t?n&&s(t,d,3,[f(),v?[]:void 0,_]):f(),"sync"!==c)return i.tE;{const e=X();y=e.__watcherHandles||(e.__watcherHandles=[])}}let b=v?new Array(e.length).fill(Z):Z;const C=()=>{if(S.active&&S.dirty)if(t){const e=S.run();(a||g||(v?e.some(((e,t)=>(0,i.$H)(e,b[t]))):(0,i.$H)(e,b)))&&(m&&m(),s(t,d,3,[e,b===Z?void 0:v&&b[0]===Z?[]:b,_]),b=e)}else S.run()};let I;C.allowRecurse=!!t,"sync"===c?I=C:"post"===c?I=()=>Mt(C,d&&d.suspense):(C.pre=!0,d&&(C.id=d.uid),I=()=>w(C));const S=new r.X2(f,i.tE,I),E=(0,r.o5)(),T=()=>{S.stop(),E&&(0,i.TF)(E.effects,S)};return t?n?C():b=S.run():"post"===c?Mt(S.run.bind(S),d&&d.suspense):S.run(),y&&y.push(T),T}function ne(e,t,n){const r=this.proxy,o=(0,i.Kg)(e)?e.includes(".")?re(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.Tn)(t)?s=t:(s=t.handler,n=t);const a=On(this),c=te(o,s.bind(r),n);return a(),c}function re(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ie(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,(0,r.i9)(e))ie(e.value,t,n);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)ie(e[r],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{ie(e,t,n)}));else if((0,i.Qd)(e))for(const r in e)ie(e[r],t,n);return e}function oe(e,t){if(null===L)return e;const n=$n(L)||L.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,s,a,c=i.MZ]=t[o];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&ie(s),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:a,modifiers:c}))}return e}function se(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),s(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}const ae=Symbol("_leaveCb"),ce=Symbol("_enterCb");function le(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Re((()=>{e.isMounted=!0})),Me((()=>{e.isUnmounting=!0})),e}const ue=[Function,Array],he={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ue,onEnter:ue,onAfterEnter:ue,onEnterCancelled:ue,onBeforeLeave:ue,onLeave:ue,onAfterLeave:ue,onLeaveCancelled:ue,onBeforeAppear:ue,onAppear:ue,onAfterAppear:ue,onAppearCancelled:ue},de={name:"BaseTransition",props:he,setup(e,{slots:t}){const n=kn(),i=le();return()=>{const o=t.default&&_e(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Gt){0,s=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return ge(s);const l=ve(s);if(!l)return ge(s);const u=me(l,a,i,n);ye(l,u);const h=n.subTree,d=h&&ve(h);if(d&&d.type!==Gt&&!an(l,d)){const e=me(d,a,i,n);if(ye(d,e),"out-in"===c&&l.type!==Gt)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},ge(s);"in-out"===c&&l.type!==Gt&&(e.delayLeave=(e,t,n)=>{const r=fe(i,d);r[String(d.key)]=d,e[ae]=()=>{t(),e[ae]=void 0,delete u.delayedLeave},u.delayedLeave=n})}return s}}},pe=de;function fe(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function me(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:w}=t,b=String(e.key),C=fe(n,e),I=(e,t)=>{e&&s(e,r,9,t)},S=(e,t)=>{const n=t[1];I(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},E={mode:a,persisted:c,beforeEnter(t){let r=l;if(!n.isMounted){if(!o)return;r=v||l}t[ae]&&t[ae](!0);const i=C[b];i&&an(e,i)&&i.el[ae]&&i.el[ae](),I(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!o)return;t=y||u,r=_||h,i=w||d}let s=!1;const a=e[ce]=t=>{s||(s=!0,I(t?i:r,[e]),E.delayedLeave&&E.delayedLeave(),e[ce]=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[ce]&&t[ce](!0),n.isUnmounting)return r();I(p,[t]);let o=!1;const s=t[ae]=n=>{o||(o=!0,r(),I(n?g:m,[t]),t[ae]=void 0,C[i]===e&&delete C[i])};C[i]=e,f?S(f,[t,s]):s()},clone(e){return me(e,t,n,r)}};return E}function ge(e){if(Ce(e))return e=fn(e),e.children=null,e}function ve(e){if(!Ce(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,i.Tn)(n.default))return n.default()}}function ye(e,t){6&e.shapeFlag&&e.component?ye(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _e(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===zt?(128&s.patchFlag&&i++,r=r.concat(_e(s.children,t,a))):(t||s.type!==Gt)&&r.push(null!=a?fn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function we(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const be=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Ce=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ie(e,t){return(0,i.cy)(e)?e.some((e=>Ie(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function Se(e,t){Te(e,"a",t)}function Ee(e,t){Te(e,"da",t)}function Te(e,t,n=Tn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Oe(t,r,n),n){let e=n.parent;while(e&&e.parent)Ce(e.parent.vnode)&&ke(r,t,n,e),e=e.parent}}function ke(e,t,n,r){const o=Oe(t,e,r,!0);Fe((()=>{(0,i.TF)(r[t],o)}),n)}function xe(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ae(e){return 128&e.shapeFlag?e.ssContent:e}function Oe(e,t,n=Tn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)();const o=On(n),a=s(t,n,e,i);return o(),(0,r.bl)(),a});return i?o.unshift(a):o.push(a),a}}const Pe=e=>(t,n=Tn)=>(!Dn||"sp"===e)&&Oe(e,((...e)=>t(...e)),n),Le=Pe("bm"),Re=Pe("m"),Ne=Pe("bu"),De=Pe("u"),Me=Pe("bum"),Fe=Pe("um"),je=Pe("sp"),Ue=Pe("rtg"),Be=Pe("rtc");function qe(e,t=Tn){Oe("ec",e,t)}function $e(e,t,n,r){let o;const s=n&&n[r];if((0,i.cy)(e)||(0,i.Kg)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const He=e=>e?Ln(e)?$n(e)||e.proxy:He(e.parent):null,We=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>He(e.parent),$root:e=>He(e.root),$emit:e=>e.emit,$options:e=>Ze(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,w(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>ne.bind(e)}),Ve=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),ze={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Ve(o,t))return c[t]=1,o[t];if(s!==i.MZ&&(0,i.$3)(s,t))return c[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ge&&(c[t]=0)}}const d=We[t];let p,f;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(f=u.config.globalProperties,(0,i.$3)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Ve(o,t)?(o[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Ve(t,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(We,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ke(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ge=!0;function Ye(e){const t=Ze(e),n=e.proxy,o=e.ctx;Ge=!1,t.beforeCreate&&Qe(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:C,render:I,renderTracked:S,renderTriggered:E,errorCaptured:T,serverPrefetch:k,expose:x,inheritAttrs:A,components:O,directives:P,filters:L}=t,R=null;if(h&&Je(h,o,R),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ge=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Vn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Xe(l[r],o,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{pt(t,e[t])}))}function N(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Qe(d,e,"c"),N(Le,p),N(Re,f),N(Ne,m),N(De,g),N(Se,v),N(Ee,y),N(qe,T),N(Be,S),N(Ue,E),N(Me,w),N(Fe,C),N(je,k),(0,i.cy)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===i.tE&&(e.render=I),null!=A&&(e.inheritAttrs=A),O&&(e.components=O),P&&(e.directives=P)}function Je(e,t,n=i.tE){(0,i.cy)(e)&&(e=it(e));for(const o in e){const n=e[o];let s;s=(0,i.Gv)(n)?"default"in n?ft(n.from||o,n.default,!0):ft(n.from||o):ft(n),(0,r.i9)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Qe(e,t,n){s((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Xe(e,t,n,r){const o=r.includes(".")?re(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&ee(o,n)}else if((0,i.Tn)(e))ee(o,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>Xe(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&ee(o,r,e)}else 0}function Ze(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:o.length||n||r?(l={},o.length&&o.forEach((e=>et(l,e,a,!0))),et(l,t,a)):l=t,(0,i.Gv)(t)&&s.set(t,l),l}function et(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&et(e,o,n,!0),i&&i.forEach((t=>et(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=tt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const tt={data:nt,props:at,emits:at,methods:st,computed:st,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:st,directives:st,watch:ct,provide:nt,inject:rt};function nt(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function rt(e,t){return st(it(e),it(t))}function it(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function st(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function at(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Ke(e),Ke(null!=t?t:{})):t}function ct(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=ot(e[r],t[r]);return n}function lt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ut=0;function ht(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=lt(),s=new WeakSet;let a=!1;const c=o.app={_uid:ut++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Kn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.Tn)(e.install)?(s.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,l){if(!a){0;const u=hn(n,r);return u.appContext=o,!0===l?l="svg":!1===l&&(l=void 0),s&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,$n(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c},runWithContext(e){const t=dt;dt=c;try{return e()}finally{dt=t}}};return c}}let dt=null;function pt(e,t){if(Tn){let n=Tn.provides;const r=Tn.parent&&Tn.parent.provides;r===n&&(n=Tn.provides=Object.create(r)),n[e]=t}else 0}function ft(e,t,n=!1){const r=Tn||L;if(r||dt){const o=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:dt._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const mt={},gt=()=>Object.create(mt),vt=e=>Object.getPrototypeOf(e)===mt;function yt(e,t,n,i=!1){const o={},s=gt();e.propsDefaults=Object.create(null),wt(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function _t(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(s),[u]=e.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;wt(e,t,s,a)&&(h=!0);for(const o in l)t&&((0,i.$3)(t,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=bt(u,l,o,void 0,e,!0)):delete s[o]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(P(e.emitsOptions,o))continue;const c=t[o];if(u)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const t=(0,i.PT)(o);s[t]=bt(u,l,t,c,e,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function wt(e,t,n,o){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let h;s&&(0,i.$3)(s,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:P(e.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=bt(s,t,c,o[c],e,!(0,i.$3)(o,c))}}return l}function bt(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=On(o);r=i[n]=e.call(null,t),s()}}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function Ct(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=Ct(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(s))for(let h=0;h<s.length;h++){0;const e=(0,i.PT)(s[h]);It(e)&&(a[e]=i.MZ)}else if(s){0;for(const e in s){const t=(0,i.PT)(e);if(It(t)){const n=s[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const e=Tt(Boolean,r.type),n=Tt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.$3)(r,"default"))&&c.push(t)}}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function It(e){return"$"!==e[0]&&!(0,i.SU)(e)}function St(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function Et(e,t){return St(e)===St(t)}function Tt(e,t){return(0,i.cy)(t)?t.findIndex((t=>Et(t,e))):(0,i.Tn)(t)&&Et(t,e)?0:-1}const kt=e=>"_"===e[0]||"$stable"===e,xt=e=>(0,i.cy)(e)?e.map(yn):[yn(e)],At=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>xt(t(...e))),n);return r._c=!1,r},Ot=(e,t,n)=>{const r=e._ctx;for(const o in e){if(kt(o))continue;const n=e[o];if((0,i.Tn)(n))t[o]=At(o,n,r);else if(null!=n){0;const e=xt(n);t[o]=()=>e}}},Pt=(e,t)=>{const n=xt(t);e.slots.default=()=>n},Lt=(e,t)=>{const n=e.slots=gt();if(32&e.vnode.shapeFlag){const e=t._;e?((0,i.X$)(n,t),(0,i.yQ)(n,"_",e,!0)):Ot(t,n)}else t&&Pt(e,t)},Rt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.X$)(o,t),n||1!==e||delete o._):(s=!t.$stable,Ot(t,o)),a=t}else t&&(Pt(e,t),a={default:1});if(s)for(const i in o)kt(i)||null!=a[i]||delete o[i]};function Nt(e,t,n,s,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>Nt(e,t&&((0,i.cy)(t)?t[r]:t),n,s,a)));if(be(s)&&!a)return;const c=4&s.shapeFlag?$n(s.component)||s.component.proxy:s.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===i.MZ?u.refs={}:u.refs,f=u.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(p[d]=null,(0,i.$3)(f,d)&&(f[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))o(h,u,12,[l,p]);else{const t=(0,i.Kg)(h),o=(0,r.i9)(h);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.$3)(f,h)?f[h]:p[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(p[h]=[c],(0,i.$3)(f,h)&&(f[h]=p[h])):(h.value=[c],e.k&&(p[e.k]=h.value))}else t?(p[h]=l,(0,i.$3)(f,h)&&(f[h]=l)):o&&(h.value=l,e.k&&(p[e.k]=l))};l?(r.id=-1,Mt(r,n)):r()}else 0}}function Dt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Mt=J;function Ft(e){return jt(e)}function jt(e,t){Dt();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:m=i.tE,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!an(e,t)&&(r=X(e),K(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Kt:y(e,t,n,r);break;case Gt:_(e,t,n,r);break;case Yt:null==e&&b(t,n,r,s);break;case zt:N(e,t,n,r,i,o,s,a,c);break;default:1&h?k(e,t,n,r,i,o,s,a,c):6&h?D(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,o,s,a,c,te)}null!=u&&i&&Nt(u,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=f(e),o(e,n,r),e=i;o(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},k=(e,t,n,r,i,o,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?x(t,n,r,i,o,s,a,c):P(e,t,i,o,s,a,c)},x=(e,t,n,r,s,l,u,h)=>{let p,f;const{props:m,shapeFlag:g,transition:v,dirs:y}=e;if(p=e.el=c(e.type,l,m&&m.is,m),8&g?d(p,e.children):16&g&&O(e.children,p,null,r,s,Ut(e,l),u,h),y&&se(e,null,r,"created"),A(p,e,e.scopeId,u,r),m){for(const t in m)"value"===t||(0,i.SU)(t)||a(p,t,null,m[t],l,e.children,r,s,Q);"value"in m&&a(p,"value",null,m.value,l),(f=m.onVnodeBeforeMount)&&Cn(f,r,e)}y&&se(e,null,r,"beforeMount");const _=qt(s,v);_&&v.beforeEnter(p),o(p,t,n),((f=m&&m.onVnodeMounted)||_||y)&&Mt((()=>{f&&Cn(f,r,e),_&&v.enter(p),y&&se(e,null,r,"mounted")}),s)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?_n(e[l]):yn(e[l]);v(null,c,t,n,r,i,o,s,a)}},P=(e,t,n,r,o,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||i.MZ,m=t.props||i.MZ;let g;if(n&&Bt(n,!1),(g=m.onVnodeBeforeUpdate)&&Cn(g,n,t,e),p&&se(t,e,n,"beforeUpdate"),n&&Bt(n,!0),h?L(e.dynamicChildren,h,l,n,r,Ut(t,o),s):c||$(e,t,l,null,n,r,Ut(t,o),s,!1),u>0){if(16&u)R(l,t,f,m,n,r,o);else if(2&u&&f.class!==m.class&&a(l,"class",null,m.class,o),4&u&&a(l,"style",f.style,m.style,o),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=f[s],u=m[s];u===c&&"value"!==s||a(l,s,c,u,o,e.children,n,r,Q)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||R(l,t,f,m,n,r,o);((g=m.onVnodeUpdated)||p)&&Mt((()=>{g&&Cn(g,n,t,e),p&&se(t,e,n,"updated")}),r)},L=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===zt||!an(c,l)||70&c.shapeFlag)?p(c.el):n;v(c,l,u,null,r,i,o,s,!0)}},R=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.MZ)for(const l in n)(0,i.SU)(l)||l in r||a(e,l,n[l],null,c,t.children,o,s,Q);for(const l in r){if((0,i.SU)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,o,s,Q)}"value"in r&&a(e,"value",n.value,r.value,c)}},N=(e,t,n,r,i,s,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(o(h,n,r),o(d,n,r),O(t.children||[],n,d,i,s,a,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(L(e.dynamicChildren,f,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&$t(e,t,!0)):$(e,t,n,d,i,s,a,c,u)},D=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):M(t,n,r,i,o,s,c):F(e,t,c)},M=(e,t,n,r,i,o,s)=>{const a=e.component=En(e,r,i);if(Ce(e)&&(a.ctx.renderer=te),Mn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=hn(Gt);_(null,e,t,n)}}else U(a,e,t,n,i,o,s)},F=(e,t,n)=>{const r=t.component=e.component;if(q(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,C(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,o,s,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:o,vnode:u}=e;{const n=Wt(e);if(n)return t&&(t.el=u.el,B(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,d=t;0,Bt(e,!1),t?(t.el=u.el,B(e,t,c)):t=u,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&Cn(h,o,t,u),Bt(e,!0);const f=j(e);0;const m=e.subTree;e.subTree=f,v(m,f,p(m.el),X(m),e,s,a),t.el=f.el,null===d&&H(e,f.el),r&&Mt(r,s),(h=t.props&&t.props.onVnodeUpdated)&&Mt((()=>Cn(h,o,t,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,p=be(t);if(Bt(e,!1),u&&(0,i.DY)(u),!p&&(r=l&&l.onVnodeBeforeMount)&&Cn(r,d,t),Bt(e,!0),c&&re){const n=()=>{e.subTree=j(e),re(c,e.subTree,e,s,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=j(e);0,v(null,r,n,o,e,s,a),t.el=r.el}if(h&&Mt(h,s),!p&&(r=l&&l.onVnodeMounted)){const e=t;Mt((()=>Cn(r,d,e)),s)}(256&t.shapeFlag||d&&be(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Mt(e.a,s),e.isMounted=!0,t=n=o=null}},u=e.effect=new r.X2(l,i.tE,(()=>w(h)),e.scope),h=e.update=()=>{u.dirty&&u.run()};h.id=e.uid,Bt(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,_t(e,t.props,i,n),Rt(e,t.children,n),(0,r.C4)(),S(e),(0,r.bl)()},$=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void V(l,h,n,r,i,o,s,a,c);if(256&p)return void W(l,h,n,r,i,o,s,a,c)}8&f?(16&u&&Q(l,i,o),h!==l&&d(n,h)):16&u?16&f?V(l,h,n,r,i,o,s,a,c):Q(l,i,o,!0):(8&u&&d(n,""),16&f&&O(h,n,r,i,o,s,a,c))},W=(e,t,n,r,o,s,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const r=t[p]=l?_n(t[p]):yn(t[p]);v(e[p],r,n,null,o,s,a,c,l)}u>h?Q(e,o,s,!0,!1,d):O(t,n,r,o,s,a,c,l,d)},V=(e,t,n,r,o,s,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const r=e[u],i=t[u]=l?_n(t[u]):yn(t[u]);if(!an(r,i))break;v(r,i,n,null,o,s,a,c,l),u++}while(u<=d&&u<=p){const r=e[d],i=t[p]=l?_n(t[p]):yn(t[p]);if(!an(r,i))break;v(r,i,n,null,o,s,a,c,l),d--,p--}if(u>d){if(u<=p){const e=p+1,i=e<h?t[e].el:r;while(u<=p)v(null,t[u]=l?_n(t[u]):yn(t[u]),n,i,o,s,a,c,l),u++}}else if(u>p)while(u<=d)K(e[u],o,s,!0),u++;else{const f=u,m=u,g=new Map;for(u=m;u<=p;u++){const e=t[u]=l?_n(t[u]):yn(t[u]);null!=e.key&&g.set(e.key,u)}let y,_=0;const w=p-m+1;let b=!1,C=0;const I=new Array(w);for(u=0;u<w;u++)I[u]=0;for(u=f;u<=d;u++){const r=e[u];if(_>=w){K(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=p;y++)if(0===I[y-m]&&an(r,t[y])){i=y;break}void 0===i?K(r,o,s,!0):(I[i-m]=u+1,i>=C?C=i:b=!0,v(r,t[i],n,null,o,s,a,c,l),_++)}const S=b?Ht(I):i.Oj;for(y=S.length-1,u=w-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===I[u]?v(null,i,n,d,o,s,a,c,l):b&&(y<0||u!==S[y]?z(i,n,d,2):y--)}}},z=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===zt){o(s,t,n);for(let e=0;e<l.length;e++)z(l[e],t,n,r);return void o(e.anchor,t,n)}if(a===Yt)return void I(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(s),o(s,t,n),Mt((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),l=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Nt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!be(e);let m;if(f&&(m=s&&s.onVnodeBeforeUnmount)&&Cn(m,t,e),6&u)J(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&se(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(o!==zt||h>0&&64&h)?Q(l,t,n,!1,!0):(o===zt&&384&h||!i&&16&u)&&Q(c,t,n),r&&G(e)}(f&&(m=s&&s.onVnodeUnmounted)||p)&&Mt((()=>{m&&Cn(m,t,e),p&&se(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===zt)return void Y(n,r);if(t===Yt)return void T(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Y=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},J=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.DY)(r),o.stop(),s&&(s.active=!1,K(a,e,t,n)),c&&Mt(c,t),Mt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)K(e[s],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el);let Z=!1;const ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),Z||(Z=!0,S(),E(),Z=!1),t._vnode=e},te={p:v,um:K,m:z,r:G,mt:M,mc:O,pc:$,pbc:L,n:X,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:ht(ee,ne)}}function Ut({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function qt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $t(e,t,n=!1){const r=e.children,o=t.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=_n(o[i]),t.el=e.el),n||$t(e,t)),t.type===Kt&&(t.el=e.el)}}function Ht(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}function Wt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Wt(t)}const Vt=e=>e.__isTeleport;const zt=Symbol.for("v-fgt"),Kt=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),Yt=Symbol.for("v-stc"),Jt=[];let Qt=null;function Xt(e=!1){Jt.push(Qt=e?null:[])}function Zt(){Jt.pop(),Qt=Jt[Jt.length-1]||null}let en=1;function tn(e){en+=e}function nn(e){return e.dynamicChildren=en>0?Qt||i.Oj:null,Zt(),en>0&&Qt&&Qt.push(e),e}function rn(e,t,n,r,i,o){return nn(un(e,t,n,r,i,o,!0))}function on(e,t,n,r,i){return nn(hn(e,t,n,r,i,!0))}function sn(e){return!!e&&!0===e.__v_isVNode}function an(e,t){return e.type===t.type&&e.key===t.key}const cn=({key:e})=>null!=e?e:null,ln=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:L,r:e,k:t,f:!!n}:e:null);function un(e,t=null,n=null,r=0,o=null,s=(e===zt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cn(t),ref:t&&ln(t),scopeId:R,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:L};return c?(wn(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),en>0&&!a&&Qt&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Qt.push(l),l}const hn=dn;function dn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==z||(e=Gt),sn(e)){const r=fn(e,t,!0);return n&&wn(r,n),en>0&&!a&&Qt&&(6&r.shapeFlag?Qt[Qt.indexOf(e)]=r:Qt.push(r)),r.patchFlag|=-2,r}if(Wn(e)&&(e=e.__vccOpts),t){t=pn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Y(e)?128:Vt(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return un(e,t,n,o,s,c,a,!0)}function pn(e){return e?(0,r.ju)(e)||vt(e)?(0,i.X$)({},e):e:null}function fn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:l}=e,u=t?bn(o||{},t):o,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&cn(u),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(ln(t)):[s,ln(t)]:ln(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==zt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(h.transition=l.clone(h)),h}function mn(e=" ",t=0){return hn(Kt,null,e,t)}function gn(e,t){const n=hn(Yt,null,e);return n.staticCount=t,n}function vn(e="",t=!1){return t?(Xt(),on(Gt,null,e)):hn(Gt,null,e)}function yn(e){return null==e||"boolean"===typeof e?hn(Gt):(0,i.cy)(e)?hn(zt,null,e.slice()):"object"===typeof e?_n(e):hn(Kt,null,String(e))}function _n(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:fn(e)}function wn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),wn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||vt(t)?3===r&&L&&(1===L.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=L}}else(0,i.Tn)(t)?(t={default:t,_ctx:L},n=32):(t=String(t),64&r?(n=16,t=[mn(t)]):n=8);e.children=t,e.shapeFlag|=n}function bn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function Cn(e,t,n,r=null){s(e,t,7,[n,r])}const In=lt();let Sn=0;function En(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||In,a={uid:Sn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ct(o,s),emitsOptions:O(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let Tn=null;const kn=()=>Tn||L;let xn,An;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};xn=t("__VUE_INSTANCE_SETTERS__",(e=>Tn=e)),An=t("__VUE_SSR_SETTERS__",(e=>Dn=e))}const On=e=>{const t=Tn;return xn(e),e.scope.on(),()=>{e.scope.off(),xn(t)}},Pn=()=>{Tn&&Tn.scope.off(),xn(null)};function Ln(e){return 4&e.vnode.shapeFlag}let Rn,Nn,Dn=!1;function Mn(e,t=!1){t&&An(t);const{props:n,children:r}=e.vnode,i=Ln(e);yt(e,n,i,t),Lt(e,r);const o=i?Fn(e,t):void 0;return t&&An(!1),o}function Fn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ze);const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?qn(e):null,c=On(e);(0,r.C4)();const l=o(s,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(l)){if(l.then(Pn,Pn),t)return l.then((n=>{jn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else jn(e,l,t)}else Un(e,t)}function jn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Un(e,n)}function Un(e,t,n){const o=e.type;if(!e.render){if(!t&&Rn&&!o.render){const t=o.template||Ze(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=Rn(t,c)}}e.render=o.render||i.tE,Nn&&Nn(e)}{const t=On(e);(0,r.C4)();try{Ye(e)}finally{(0,r.bl)(),t()}}}const Bn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function qn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Bn),slots:e.slots,emit:e.emit,expose:t}}function $n(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in We?We[n](e):void 0},has(e,t){return t in e||t in We}}))}function Hn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Wn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Vn=(e,t)=>{const n=(0,r.EW)(e,t,Dn);return n};function zn(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?sn(t)?hn(e,null,[t]):hn(e,t):hn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&sn(n)&&(n=[n]),hn(e,t,n))}const Kn="3.4.27"},5130:function(e,t,n){"use strict";n.d(t,{D$:function(){return Ie},Ef:function(){return ke},Jo:function(){return we},aG:function(){return N}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(4232),o=n(144);
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,l=c&&c.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(s,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{l.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=l.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",p=Symbol("_vtc"),f=(e,{slots:t})=>(0,r.h)(r.pR,_(e),t);f.displayName="Transition";const m={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g=f.props=(0,i.X$)({},r.QP,m),v=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function _(e){const t={};for(const i in e)i in m||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,g=w(o),_=g&&g[0],b=g&&g[1],{onBeforeEnter:E,onEnter:k,onEnterCancelled:x,onLeave:A,onLeaveCancelled:P,onBeforeAppear:L=E,onAppear:R=k,onAppearCancelled:N=x}=t,D=(e,t,n)=>{I(e,t?h:c),I(e,t?u:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,I(e,d),I(e,f),I(e,p),t&&t()},F=e=>(t,n)=>{const i=e?R:k,o=()=>D(t,e,n);v(i,[t,o]),S((()=>{I(t,e?l:s),C(t,e?h:c),y(i)||T(t,r,_,o)}))};return(0,i.X$)(t,{onBeforeEnter(e){v(E,[e]),C(e,s),C(e,a)},onBeforeAppear(e){v(L,[e]),C(e,l),C(e,u)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);C(e,d),C(e,p),O(),S((()=>{e._isLeaving&&(I(e,d),C(e,f),y(A)||T(e,r,b,n))})),v(A,[e,n])},onEnterCancelled(e){D(e,!1),v(x,[e])},onAppearCancelled(e){D(e,!0),v(N,[e])},onLeaveCancelled(e){M(e),v(P,[e])}})}function w(e){if(null==e)return null;if((0,i.Gv)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,i.Ro)(e);return t}function C(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[p]||(e[p]=new Set)).add(t)}function I(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[p];n&&(n.delete(t),n.size||(e[p]=void 0))}function S(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let E=0;function T(e,t,n,r){const i=e._endId=++E,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=k(e,t);if(!s)return r();const l=s+"end";let u=0;const h=()=>{e.removeEventListener(l,d),o()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function k(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),o=r(`${h}Duration`),s=x(i,o),a=r(`${d}Delay`),c=r(`${d}Duration`),l=x(a,c);let u=null,p=0,f=0;t===h?s>0&&(u=h,p=s,f=o.length):t===d?l>0&&(u=d,p=l,f=c.length):(p=Math.max(s,l),u=p>0?s>l?h:d:null,f=u?u===h?o.length:c.length:0);const m=u===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:u,timeout:p,propCount:f,hasTransform:m}}function x(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>A(t)+A(e[n]))))}function A(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function P(e,t,n){const r=e[p];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const L=Symbol("_vod"),R=Symbol("_vsh"),N={beforeMount(e,{value:t},{transition:n}){e[L]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):D(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),D(e,!0),r.enter(e)):r.leave(e,(()=>{D(e,!1)})):D(e,t))},beforeUnmount(e,{value:t}){D(e,t)}};function D(e,t){e.style.display=t?e[L]:"none",e[R]=!t}const M=Symbol("");const F=/(^|;)\s*display\s*:/;function j(e,t,n){const r=e.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&B(r,t,"")}else for(const e in t)null==n[e]&&B(r,e,"");for(const e in n)"display"===e&&(s=!0),B(r,e,n[e])}else if(o){if(t!==n){const e=r[M];e&&(n+=";"+e),r.cssText=n,s=F.test(n)}}else t&&e.removeAttribute("style");L in e&&(e[L]=s?r.display:"",e[R]&&(r.display="none"))}const U=/\s*!important$/;function B(e,t,n){if((0,i.cy)(n))n.forEach((n=>B(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=H(e,t);U.test(n)?e.setProperty((0,i.Tg)(r),n.replace(U,""),"important"):e[r]=n}}const q=["Webkit","Moz","ms"],$={};function H(e,t){const n=$[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return $[t]=r;r=(0,i.ZH)(r);for(let i=0;i<q.length;i++){const n=q[i]+r;if(n in e)return $[t]=n}return t}const W="http://www.w3.org/1999/xlink";function V(e,t,n,r,o){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(W,t.slice(6,t.length)):e.setAttributeNS(W,t,n);else{const r=(0,i.J$)(t);null==n||r&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function z(e,t,n,r,o,s,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,o,s),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?e.getAttribute("value")||"":e.value,i=null==n?"":n;return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function K(e,t,n,r){e.addEventListener(t,n,r)}function G(e,t,n,r){e.removeEventListener(t,n,r)}const Y=Symbol("_vei");function J(e,t,n,r,i=null){const o=e[Y]||(e[Y]={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=X(t);if(r){const s=o[t]=ne(r,i);K(e,n,s,a)}else s&&(G(e,n,s,a),o[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function X(e){let t;if(Q.test(e)){let n;t={};while(n=e.match(Q))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let Z=0;const ee=Promise.resolve(),te=()=>Z||(ee.then((()=>Z=0)),Z=Date.now());function ne(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(re(e,n.value),t,5,[e])};return n.value=e,n.attached=te(),n}function re(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ie=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,oe=(e,t,n,r,o,s,a,c,l)=>{const u="svg"===o;"class"===t?P(e,r,u):"style"===t?j(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||J(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):se(e,t,r,u))?z(e,t,r,s,a,c,l):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),V(e,t,r,u))};function se(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ie(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ie(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ae=new WeakMap,ce=new WeakMap,le=Symbol("_moveCb"),ue=Symbol("_enterCb"),he={name:"TransitionGroup",props:(0,i.X$)({},g,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let s,a;return(0,r.$u)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!me(s[0].el,n.vnode.el,t))return;s.forEach(de),s.forEach(pe);const r=s.filter(fe);O(),r.forEach((e=>{const n=e.el,r=n.style;C(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[le]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[le]=null,I(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.ux)(e),l=_(c);let u=c.tag||r.FK;if(s=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(s.push(t),(0,r.MZ)(t,(0,r.OW)(t,l,i,n)),ae.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,l,i,n))}return(0,r.bF)(u,null,a)}}};he.props;function de(e){const t=e.el;t[le]&&t[le](),t[ue]&&t[ue]()}function pe(e){ce.set(e,e.el.getBoundingClientRect())}function fe(e){const t=ae.get(e),n=ce.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function me(e,t,n){const r=e.cloneNode(),i=e[p];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=k(r);return o.removeChild(r),s}const ge=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function ve(e){e.target.composing=!0}function ye(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _e=Symbol("_assign"),we={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[_e]=ge(o);const s=r||o.props&&"number"===o.props.type;K(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,i.bB)(r)),e[_e](r)})),n&&K(e,"change",(()=>{e.value=e.value.trim()})),t||(K(e,"compositionstart",ve),K(e,"compositionend",ye),K(e,"change",ye))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e[_e]=ge(s),e.composing)return;const a=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===c)return}e.value=c}}};const be=["ctrl","shift","alt","meta"],Ce={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>be.some((n=>e[`${n}Key`]&&!t.includes(n)))},Ie=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Ce[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Se=(0,i.X$)({patchProp:oe},u);let Ee;function Te(){return Ee||(Ee=(0,r.K9)(Se))}const ke=(...e)=>{const t=Te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ae(e);if(!r)return;const o=t._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,xe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function xe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Ae(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){"use strict";n.d(t,{$3:function(){return p},$H:function(){return F},BH:function(){return V},BX:function(){return ne},Bm:function(){return b},C4:function(){return Q},CE:function(){return m},CP:function(){return l},DY:function(){return j},Gv:function(){return C},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return o},PT:function(){return L},Qd:function(){return k},Ro:function(){return q},SU:function(){return A},TF:function(){return h},Tg:function(){return N},Tn:function(){return _},Tr:function(){return z},We:function(){return H},X$:function(){return u},Y2:function(){return ee},ZH:function(){return D},Zf:function(){return T},bB:function(){return B},cy:function(){return f},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return s},u3:function(){return re},vM:function(){return g},v_:function(){return ie},yI:function(){return x},yL:function(){return I},yQ:function(){return U}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},o=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(e,t)=>d.call(e,t),f=Array.isArray,m=e=>"[object Map]"===E(e),g=e=>"[object Set]"===E(e),v=e=>"[object Date]"===E(e),y=e=>"[object RegExp]"===E(e),_=e=>"function"===typeof e,w=e=>"string"===typeof e,b=e=>"symbol"===typeof e,C=e=>null!==e&&"object"===typeof e,I=e=>(C(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,E=e=>S.call(e),T=e=>E(e).slice(8,-1),k=e=>"[object Object]"===E(e),x=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},P=/-(\w)/g,L=O((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),R=/\B([A-Z])/g,N=O((e=>e.replace(R,"-$1").toLowerCase())),D=O((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=O((e=>{const t=e?`on${D(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),j=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},U=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const H=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const W="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",V=r(W);function z(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=w(r)?J(r):z(r);if(i)for(const e in i)t[e]=i[e]}return t}if(w(e)||C(e))return e}const K=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function J(e){const t={};return e.replace(Y,"").split(K).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Q(e){let t="";if(w(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const r=Q(e[n]);r&&(t+=r+" ")}else if(C(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const X="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(X);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=f(e),r=f(t),n||r)return!(!n||!r)&&te(e,t);if(n=C(e),r=C(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>w(e)?e:null==e?"":f(e)||C(e)&&(e.toString===S||!_(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[se(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>se(e)))}:b(t)?se(t):!C(t)||f(t)||k(t)?t:String(t),se=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},3870:function(e,t,n){n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),function(t,n){e.exports=n()}(self,(()=>(()=>{"use strict";var e={492:(e,t,n)=>{n.r(t),n.d(t,{afterMain:()=>C,afterRead:()=>_,afterWrite:()=>E,applyStyles:()=>L,arrow:()=>X,auto:()=>a,basePlacements:()=>c,beforeMain:()=>w,beforeRead:()=>v,beforeWrite:()=>I,bottom:()=>i,clippingParents:()=>h,computeStyles:()=>ne,createPopper:()=>Le,createPopperBase:()=>Pe,createPopperLite:()=>Re,detectOverflow:()=>ye,end:()=>u,eventListeners:()=>ie,flip:()=>_e,hide:()=>Ce,left:()=>s,main:()=>b,modifierPhases:()=>T,offset:()=>Ie,placements:()=>g,popper:()=>p,popperGenerator:()=>Oe,popperOffsets:()=>Se,preventOverflow:()=>Ee,read:()=>y,reference:()=>f,right:()=>o,start:()=>l,top:()=>r,variationPlacements:()=>m,viewport:()=>d,write:()=>S});var r="top",i="bottom",o="right",s="left",a="auto",c=[r,i,o,s],l="start",u="end",h="clippingParents",d="viewport",p="popper",f="reference",m=c.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+u])}),[]),g=[].concat(c,[a]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+u])}),[]),v="beforeRead",y="read",_="afterRead",w="beforeMain",b="main",C="afterMain",I="beforeWrite",S="write",E="afterWrite",T=[v,y,_,w,b,C,I,S,E];function k(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function A(e){return e instanceof x(e).Element||e instanceof Element}function O(e){return e instanceof x(e).HTMLElement||e instanceof HTMLElement}function P(e){return"undefined"!=typeof ShadowRoot&&(e instanceof x(e).ShadowRoot||e instanceof ShadowRoot)}const L={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];O(i)&&k(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});O(r)&&k(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function R(e){return e.split("-")[0]}var N=Math.max,D=Math.min,M=Math.round;function F(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function j(){return!/^((?!chrome|android).)*safari/i.test(F())}function U(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,o=1;t&&O(e)&&(i=e.offsetWidth>0&&M(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&M(r.height)/e.offsetHeight||1);var s=(A(e)?x(e):window).visualViewport,a=!j()&&n,c=(r.left+(a&&s?s.offsetLeft:0))/i,l=(r.top+(a&&s?s.offsetTop:0))/o,u=r.width/i,h=r.height/o;return{width:u,height:h,top:l,right:c+u,bottom:l+h,left:c,x:c,y:l}}function B(e){var t=U(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&P(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $(e){return x(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(k(e))>=0}function W(e){return((A(e)?e.ownerDocument:e.document)||window.document).documentElement}function V(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(P(e)?e.host:null)||W(e)}function z(e){return O(e)&&"fixed"!==$(e).position?e.offsetParent:null}function K(e){for(var t=x(e),n=z(e);n&&H(n)&&"static"===$(n).position;)n=z(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===$(n).position)?t:n||function(e){var t=/firefox/i.test(F());if(/Trident/i.test(F())&&O(e)&&"fixed"===$(e).position)return null;var n=V(e);for(P(n)&&(n=n.host);O(n)&&["html","body"].indexOf(k(n))<0;){var r=$(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e,t,n){return N(e,D(t,n))}function J(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Q(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const X={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,a=e.name,l=e.options,u=n.elements.arrow,h=n.modifiersData.popperOffsets,d=R(n.placement),p=G(d),f=[s,o].indexOf(d)>=0?"height":"width";if(u&&h){var m=function(e,t){return J("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Q(e,c))}(l.padding,n),g=B(u),v="y"===p?r:s,y="y"===p?i:o,_=n.rects.reference[f]+n.rects.reference[p]-h[p]-n.rects.popper[f],w=h[p]-n.rects.reference[p],b=K(u),C=b?"y"===p?b.clientHeight||0:b.clientWidth||0:0,I=_/2-w/2,S=m[v],E=C-g[f]-m[y],T=C/2-g[f]/2+I,k=Y(S,T,E),x=p;n.modifiersData[a]=((t={})[x]=k,t.centerOffset=k-T,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Z(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var t,n=e.popper,a=e.popperRect,c=e.placement,l=e.variation,h=e.offsets,d=e.position,p=e.gpuAcceleration,f=e.adaptive,m=e.roundOffsets,g=e.isFixed,v=h.x,y=void 0===v?0:v,_=h.y,w=void 0===_?0:_,b="function"==typeof m?m({x:y,y:w}):{x:y,y:w};y=b.x,w=b.y;var C=h.hasOwnProperty("x"),I=h.hasOwnProperty("y"),S=s,E=r,T=window;if(f){var k=K(n),A="clientHeight",O="clientWidth";k===x(n)&&"static"!==$(k=W(n)).position&&"absolute"===d&&(A="scrollHeight",O="scrollWidth"),(c===r||(c===s||c===o)&&l===u)&&(E=i,w-=(g&&k===T&&T.visualViewport?T.visualViewport.height:k[A])-a.height,w*=p?1:-1),c!==s&&(c!==r&&c!==i||l!==u)||(S=o,y-=(g&&k===T&&T.visualViewport?T.visualViewport.width:k[O])-a.width,y*=p?1:-1)}var P,L=Object.assign({position:d},f&&ee),R=!0===m?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:M(n*i)/i||0,y:M(r*i)/i||0}}({x:y,y:w},x(n)):{x:y,y:w};return y=R.x,w=R.y,p?Object.assign({},L,((P={})[E]=I?"0":"",P[S]=C?"0":"",P.transform=(T.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",P)):Object.assign({},L,((t={})[E]=I?w+"px":"",t[S]=C?y+"px":"",t.transform="",t))}const ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,s=void 0===o||o,a=n.roundOffsets,c=void 0===a||a,l={placement:R(t.placement),variation:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var re={passive:!0};const ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,s=r.resize,a=void 0===s||s,c=x(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&l.forEach((function(e){e.addEventListener("scroll",n.update,re)})),a&&c.addEventListener("resize",n.update,re),function(){o&&l.forEach((function(e){e.removeEventListener("scroll",n.update,re)})),a&&c.removeEventListener("resize",n.update,re)}},data:{}};var oe={left:"right",right:"left",bottom:"top",top:"bottom"};function se(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function le(e){var t=x(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ue(e){return U(W(e)).left+le(e).scrollLeft}function he(e){var t=$(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function de(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:O(e)&&he(e)?e:de(V(e))}function pe(e,t){var n;void 0===t&&(t=[]);var r=de(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=x(r),s=i?[o].concat(o.visualViewport||[],he(r)?r:[]):r,a=t.concat(s);return i?a:a.concat(pe(V(s)))}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,n){return t===d?fe(function(e,t){var n=x(e),r=W(e),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,c=0;if(i){o=i.width,s=i.height;var l=j();(l||!l&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:o,height:s,x:a+ue(e),y:c}}(e,n)):A(t)?function(e,t){var n=U(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):fe(function(e){var t,n=W(e),r=le(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=N(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=N(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+ue(e),c=-r.scrollTop;return"rtl"===$(i||n).direction&&(a+=N(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:c}}(W(e)))}function ge(e,t,n,r){var i="clippingParents"===t?function(e){var t=pe(V(e)),n=["absolute","fixed"].indexOf($(e).position)>=0&&O(e)?K(e):e;return A(n)?t.filter((function(e){return A(e)&&q(e,n)&&"body"!==k(e)})):[]}(e):[].concat(t),o=[].concat(i,[n]),s=o[0],a=o.reduce((function(t,n){var i=me(e,n,r);return t.top=N(i.top,t.top),t.right=D(i.right,t.right),t.bottom=D(i.bottom,t.bottom),t.left=N(i.left,t.left),t}),me(e,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ve(e){var t,n=e.reference,a=e.element,c=e.placement,h=c?R(c):null,d=c?Z(c):null,p=n.x+n.width/2-a.width/2,f=n.y+n.height/2-a.height/2;switch(h){case r:t={x:p,y:n.y-a.height};break;case i:t={x:p,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:f};break;case s:t={x:n.x-a.width,y:f};break;default:t={x:n.x,y:n.y}}var m=h?G(h):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case l:t[m]=t[m]-(n[g]/2-a[g]/2);break;case u:t[m]=t[m]+(n[g]/2-a[g]/2)}}return t}function ye(e,t){void 0===t&&(t={});var n=t,s=n.placement,a=void 0===s?e.placement:s,l=n.strategy,u=void 0===l?e.strategy:l,m=n.boundary,g=void 0===m?h:m,v=n.rootBoundary,y=void 0===v?d:v,_=n.elementContext,w=void 0===_?p:_,b=n.altBoundary,C=void 0!==b&&b,I=n.padding,S=void 0===I?0:I,E=J("number"!=typeof S?S:Q(S,c)),T=w===p?f:p,k=e.rects.popper,x=e.elements[C?T:w],O=ge(A(x)?x:x.contextElement||W(e.elements.popper),g,y,u),P=U(e.elements.reference),L=ve({reference:P,element:k,strategy:"absolute",placement:a}),R=fe(Object.assign({},k,L)),N=w===p?R:P,D={top:O.top-N.top+E.top,bottom:N.bottom-O.bottom+E.bottom,left:O.left-N.left+E.left,right:N.right-O.right+E.right},M=e.modifiersData.offset;if(w===p&&M){var F=M[a];Object.keys(D).forEach((function(e){var t=[o,i].indexOf(e)>=0?1:-1,n=[r,i].indexOf(e)>=0?"y":"x";D[e]+=F[n]*t}))}return D}const _e={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,u=e.name;if(!t.modifiersData[u]._skip){for(var h=n.mainAxis,d=void 0===h||h,p=n.altAxis,f=void 0===p||p,v=n.fallbackPlacements,y=n.padding,_=n.boundary,w=n.rootBoundary,b=n.altBoundary,C=n.flipVariations,I=void 0===C||C,S=n.allowedAutoPlacements,E=t.options.placement,T=R(E),k=v||(T!==E&&I?function(e){if(R(e)===a)return[];var t=se(e);return[ce(e),t,ce(t)]}(E):[se(E)]),x=[E].concat(k).reduce((function(e,n){return e.concat(R(n)===a?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=void 0===l?g:l,h=Z(r),d=h?a?m:m.filter((function(e){return Z(e)===h})):c,p=d.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=d);var f=p.reduce((function(t,n){return t[n]=ye(e,{placement:n,boundary:i,rootBoundary:o,padding:s})[R(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:_,rootBoundary:w,padding:y,flipVariations:I,allowedAutoPlacements:S}):n)}),[]),A=t.rects.reference,O=t.rects.popper,P=new Map,L=!0,N=x[0],D=0;D<x.length;D++){var M=x[D],F=R(M),j=Z(M)===l,U=[r,i].indexOf(F)>=0,B=U?"width":"height",q=ye(t,{placement:M,boundary:_,rootBoundary:w,altBoundary:b,padding:y}),$=U?j?o:s:j?i:r;A[B]>O[B]&&($=se($));var H=se($),W=[];if(d&&W.push(q[F]<=0),f&&W.push(q[$]<=0,q[H]<=0),W.every((function(e){return e}))){N=M,L=!1;break}P.set(M,W)}if(L)for(var V=function(e){var t=x.find((function(t){var n=P.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},z=I?3:1;z>0;z--)if("break"===V(z))break;t.placement!==N&&(t.modifiersData[u]._skip=!0,t.placement=N,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function we(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[r,o,i,s].some((function(t){return e[t]>=0}))}const Ce={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=ye(t,{elementContext:"reference"}),a=ye(t,{altBoundary:!0}),c=we(s,r),l=we(a,i,o),u=be(c),h=be(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}},Ie={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,c=void 0===a?[0,0]:a,l=g.reduce((function(e,n){return e[n]=function(e,t,n){var i=R(e),a=[s,r].indexOf(i)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*a,[s,o].indexOf(i)>=0?{x:u,y:l}:{x:l,y:u}}(n,t.rects,c),e}),{}),u=l[t.placement],h=u.x,d=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=l}},Se={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,a=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,p=n.boundary,f=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,_=n.tetherOffset,w=void 0===_?0:_,b=ye(t,{boundary:p,rootBoundary:f,padding:g,altBoundary:m}),C=R(t.placement),I=Z(t.placement),S=!I,E=G(C),T="x"===E?"y":"x",k=t.modifiersData.popperOffsets,x=t.rects.reference,A=t.rects.popper,O="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,P="number"==typeof O?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(k){if(u){var F,j="y"===E?r:s,U="y"===E?i:o,q="y"===E?"height":"width",$=k[E],H=$+b[j],W=$-b[U],V=y?-A[q]/2:0,z=I===l?x[q]:A[q],J=I===l?-A[q]:-x[q],Q=t.elements.arrow,X=y&&Q?B(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[j],ne=ee[U],re=Y(0,x[q],X[q]),ie=S?x[q]/2-V-re-te-P.mainAxis:z-re-te-P.mainAxis,oe=S?-x[q]/2+V+re+ne+P.mainAxis:J+re+ne+P.mainAxis,se=t.elements.arrow&&K(t.elements.arrow),ae=se?"y"===E?se.clientTop||0:se.clientLeft||0:0,ce=null!=(F=null==L?void 0:L[E])?F:0,le=$+oe-ce,ue=Y(y?D(H,$+ie-ce-ae):H,$,y?N(W,le):W);k[E]=ue,M[E]=ue-$}if(d){var he,de="x"===E?r:s,pe="x"===E?i:o,fe=k[T],me="y"===T?"height":"width",ge=fe+b[de],ve=fe-b[pe],_e=-1!==[r,s].indexOf(C),we=null!=(he=null==L?void 0:L[T])?he:0,be=_e?ge:fe-x[me]-A[me]-we+P.altAxis,Ce=_e?fe+x[me]+A[me]-we-P.altAxis:ve,Ie=y&&_e?function(e,t,n){var r=Y(e,t,n);return r>n?n:r}(be,fe,Ce):Y(y?be:ge,fe,y?Ce:ve);k[T]=Ie,M[T]=Ie-fe}t.modifiersData[a]=M}},requiresIfExists:["offset"]};function Te(e,t,n){void 0===n&&(n=!1);var r,i,o=O(t),s=O(t)&&function(e){var t=e.getBoundingClientRect(),n=M(t.width)/e.offsetWidth||1,r=M(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),a=W(t),c=U(e,s,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(o||!o&&!n)&&(("body"!==k(t)||he(a))&&(l=(r=t)!==x(r)&&O(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:le(r)),O(t)?((u=U(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ue(a))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function ke(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}var xe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Oe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?xe:i;return function(e,t,n){void 0===n&&(n=o);var i,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},xe,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:a,setOptions:function(n){var i="function"==typeof n?n(a.options):n;h(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:A(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)};var s,l,d=function(e){var t=ke(e);return T.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,a.options.modifiers),l=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return a.orderedModifiers=d.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var o=i({state:a,name:t,instance:u,options:r}),s=function(){};c.push(o||s)}})),u.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,n=e.popper;if(Ae(t,n)){a.rects={reference:Te(t,K(n),"fixed"===a.options.strategy),popper:B(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var i=a.orderedModifiers[r],o=i.fn,s=i.options,c=void 0===s?{}:s,h=i.name;"function"==typeof o&&(a=o({state:a,options:c,name:h,instance:u})||a)}else a.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){h(),l=!0}};if(!Ae(e,t))return u;function h(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Pe=Oe(),Le=Oe({defaultModifiers:[ie,Se,ne,L,Ie,_e,Ee,X,Ce]}),Re=Oe({defaultModifiers:[ie,Se,ne,L]})},190:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BREAKPOINTS=t.COMBO_BOX_ACCESSIBILITY_KEY_SET=t.SELECT_ACCESSIBILITY_KEY_SET=t.TABS_ACCESSIBILITY_KEY_SET=t.OVERLAY_ACCESSIBILITY_KEY_SET=t.DROPDOWN_ACCESSIBILITY_KEY_SET=t.POSITIONS=void 0,t.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},t.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],t.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],t.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],t.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],t.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],t.BREAKPOINTS={sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},700:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HSStaticMethods=t.HSTooltip=t.HSTogglePassword=t.HSToggleCount=t.HSThemeSwitch=t.HSTabs=t.HSStrongPassword=t.HSStepper=t.HSSelect=t.HSScrollspy=t.HSSearchByJson=t.HSRemoveElement=t.HSPinInput=t.HSOverlay=t.HSInputNumber=t.HSDropdown=t.HSComboBox=t.HSCollapse=t.HSCarousel=t.HSAccordion=t.HSCopyMarkup=void 0;var i=n(413);Object.defineProperty(t,"HSCopyMarkup",{enumerable:!0,get:function(){return r(i).default}});var o=n(460);Object.defineProperty(t,"HSAccordion",{enumerable:!0,get:function(){return r(o).default}});var s=n(629);Object.defineProperty(t,"HSCarousel",{enumerable:!0,get:function(){return r(s).default}});var a=n(652);Object.defineProperty(t,"HSCollapse",{enumerable:!0,get:function(){return r(a).default}});var c=n(23);Object.defineProperty(t,"HSComboBox",{enumerable:!0,get:function(){return r(c).default}});var l=n(610);Object.defineProperty(t,"HSDropdown",{enumerable:!0,get:function(){return r(l).default}});var u=n(371);Object.defineProperty(t,"HSInputNumber",{enumerable:!0,get:function(){return r(u).default}});var h=n(770);Object.defineProperty(t,"HSOverlay",{enumerable:!0,get:function(){return r(h).default}});var d=n(659);Object.defineProperty(t,"HSPinInput",{enumerable:!0,get:function(){return r(d).default}});var p=n(139);Object.defineProperty(t,"HSRemoveElement",{enumerable:!0,get:function(){return r(p).default}});var f=n(961);Object.defineProperty(t,"HSSearchByJson",{enumerable:!0,get:function(){return r(f).default}});var m=n(591);Object.defineProperty(t,"HSScrollspy",{enumerable:!0,get:function(){return r(m).default}});var g=n(233);Object.defineProperty(t,"HSSelect",{enumerable:!0,get:function(){return r(g).default}});var v=n(957);Object.defineProperty(t,"HSStepper",{enumerable:!0,get:function(){return r(v).default}});var y=n(983);Object.defineProperty(t,"HSStrongPassword",{enumerable:!0,get:function(){return r(y).default}});var _=n(949);Object.defineProperty(t,"HSTabs",{enumerable:!0,get:function(){return r(_).default}});var w=n(557);Object.defineProperty(t,"HSThemeSwitch",{enumerable:!0,get:function(){return r(w).default}});var b=n(87);Object.defineProperty(t,"HSToggleCount",{enumerable:!0,get:function(){return r(b).default}});var C=n(366);Object.defineProperty(t,"HSTogglePassword",{enumerable:!0,get:function(){return r(C).default}});var I=n(679);Object.defineProperty(t,"HSTooltip",{enumerable:!0,get:function(){return r(I).default}});var S=n(313);Object.defineProperty(t,"HSStaticMethods",{enumerable:!0,get:function(){return r(S).default}})},460:function(e,t,n){
/*
         * HSAccordion
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n,r){var i=e.call(this,t,n,r)||this;return i.toggle=i.el.querySelector(".hs-accordion-toggle")||null,i.content=i.el.querySelector(".hs-accordion-content")||null,i.group=i.el.closest(".hs-accordion-group")||null,i.isAlwaysOpened=i.group.hasAttribute("data-hs-accordion-always-open")||!1,i.toggle&&i.content&&i.init(),i}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsAccordionCollection,this),this.toggle.addEventListener("click",(function(t){t.stopPropagation(),e.el.classList.contains("active")?e.hide():e.show()}))},t.prototype.show=function(){var e=this;if(this.group&&!this.isAlwaysOpened&&this.group.querySelector(":scope > .hs-accordion.active")&&this.group.querySelector(":scope > .hs-accordion.active")!==this.el&&window.$hsAccordionCollection.find((function(t){return t.element.el===e.group.querySelector(":scope > .hs-accordion.active")})).element.hide(),this.el.classList.contains("active"))return!1;this.el.classList.add("active"),this.content.style.display="block",this.content.style.height="0",setTimeout((function(){e.content.style.height="".concat(e.content.scrollHeight,"px")})),(0,a.afterTransition)(this.content,(function(){e.content.style.display="block",e.content.style.height="",e.fireEvent("open",e.el),(0,a.dispatch)("open.hs.accordion",e.el,e.el)}))},t.prototype.hide=function(){var e=this;if(!this.el.classList.contains("active"))return!1;this.el.classList.remove("active"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout((function(){e.content.style.height="0"})),(0,a.afterTransition)(this.content,(function(){e.content.style.display="",e.content.style.height="0",e.fireEvent("close",e.el),(0,a.dispatch)("close.hs.accordion",e.el,e.el)}))},t.getInstance=function(e,t){var n=window.$hsAccordionCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.show=function(e){var t=window.$hsAccordionCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&"block"!==t.element.content.style.display&&t.element.show()},t.hide=function(e){var t=window.$hsAccordionCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&"block"===t.element.content.style.display&&t.element.hide()},t.autoInit=function(){window.$hsAccordionCollection||(window.$hsAccordionCollection=[]),document.querySelectorAll(".hs-accordion:not(.--prevent-on-load-init)").forEach((function(e){window.$hsAccordionCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t.treeView=function(){var e=this;if(!document.querySelectorAll(".hs-accordion-treeview-root").length)return!1;this.selectable=[],document.querySelectorAll(".hs-accordion-treeview-root").forEach((function(t){var n=null==t?void 0:t.getAttribute("data-hs-accordion-options"),r=n?JSON.parse(n):{};e.selectable.push({el:t,options:o({},r)})})),this.selectable.length&&this.selectable.forEach((function(t){t.el.querySelectorAll(".hs-accordion-selectable").forEach((function(n){n.addEventListener("click",(function(r){r.stopPropagation(),e.toggleSelected(t,n)}))}))}))},t.toggleSelected=function(e,t){t.classList.contains("selected")?t.classList.remove("selected"):(e.el.querySelectorAll(".hs-accordion-selectable").forEach((function(e){return e.classList.remove("selected")})),t.classList.add("selected"))},t.on=function(e,t,n){var r=window.$hsAccordionCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));r&&(r.element.events[e]=n)},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit(),document.querySelectorAll(".hs-accordion-treeview-root").length&&c.treeView()})),"undefined"!=typeof window&&(window.HSAccordion=c),t.default=c},737:(e,t)=>{
/*
         * HSBasePlugin
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,n){this.el=e,this.options=t,this.events=n,this.el=e,this.options=t,this.events={}}return e.prototype.createCollection=function(e,t){var n;e.push({id:(null===(n=null==t?void 0:t.el)||void 0===n?void 0:n.id)||e.length+1,element:t})},e.prototype.fireEvent=function(e,t){if(void 0===t&&(t=null),this.events.hasOwnProperty(e))return this.events[e](t)},e.prototype.on=function(e,t){this.events[e]=t},e}();t.default=n},629:function(e,t,n){
/*
         * HSCarousel
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,n){var r,i,s,a=e.call(this,t,n)||this,c=t.getAttribute("data-hs-carousel"),l=c?JSON.parse(c):{},u=o(o({},l),n);return a.currentIndex=u.currentIndex||0,a.loadingClasses=u.loadingClasses?"".concat(u.loadingClasses).split(","):null,a.loadingClassesRemove=(null===(r=a.loadingClasses)||void 0===r?void 0:r[0])?a.loadingClasses[0].split(" "):"opacity-0",a.loadingClassesAdd=(null===(i=a.loadingClasses)||void 0===i?void 0:i[1])?a.loadingClasses[1].split(" "):"",a.afterLoadingClassesAdd=(null===(s=a.loadingClasses)||void 0===s?void 0:s[2])?a.loadingClasses[2].split(" "):"",a.isAutoPlay=void 0!==u.isAutoPlay&&u.isAutoPlay,a.speed=u.speed||4e3,a.isInfiniteLoop=void 0===u.isInfiniteLoop||u.isInfiniteLoop,a.inner=a.el.querySelector(".hs-carousel-body")||null,a.slides=a.el.querySelectorAll(".hs-carousel-slide")||[],a.prev=a.el.querySelector(".hs-carousel-prev")||null,a.next=a.el.querySelector(".hs-carousel-next")||null,a.dots=a.el.querySelectorAll(".hs-carousel-pagination > *")||null,a.sliderWidth=a.inner.parentElement.clientWidth,a.touchX={start:0,end:0},a.init(),a}return i(t,e),t.prototype.init=function(){var e,t,n=this;this.createCollection(window.$hsCarouselCollection,this),this.inner&&(this.calculateWidth(),this.loadingClassesRemove&&("string"==typeof this.loadingClassesRemove?this.inner.classList.remove(this.loadingClassesRemove):(e=this.inner.classList).remove.apply(e,this.loadingClassesRemove)),this.loadingClassesAdd&&("string"==typeof this.loadingClassesAdd?this.inner.classList.add(this.loadingClassesAdd):(t=this.inner.classList).add.apply(t,this.loadingClassesAdd))),this.prev&&this.prev.addEventListener("click",(function(){n.goToPrev(),n.isAutoPlay&&(n.resetTimer(),n.setTimer())})),this.next&&this.next.addEventListener("click",(function(){n.goToNext(),n.isAutoPlay&&(n.resetTimer(),n.setTimer())})),this.dots&&this.dots.forEach((function(e,t){return e.addEventListener("click",(function(){n.goTo(t),n.isAutoPlay&&(n.resetTimer(),n.setTimer())}))})),this.slides.length&&(this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass(),this.isAutoPlay&&this.autoPlay()),this.inner&&this.afterLoadingClassesAdd&&setTimeout((function(){var e;"string"==typeof n.afterLoadingClassesAdd?n.inner.classList.add(n.afterLoadingClassesAdd):(e=n.inner.classList).add.apply(e,n.afterLoadingClassesAdd)})),this.el.classList.add("init"),this.el.addEventListener("touchstart",(function(e){n.touchX.start=e.changedTouches[0].screenX})),this.el.addEventListener("touchend",(function(e){n.touchX.end=e.changedTouches[0].screenX,n.detectDirection()})),this.observeResize()},t.prototype.observeResize=function(){var e=this;new ResizeObserver((function(){return e.recalculateWidth()})).observe(document.querySelector("body"))},t.prototype.calculateWidth=function(){var e=this;this.inner.style.width="".concat(this.sliderWidth*this.slides.length,"px"),this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.slides.forEach((function(t){t.style.width="".concat(e.sliderWidth,"px")}))},t.prototype.addCurrentClass=function(){var e=this;this.slides.forEach((function(t,n){n===e.currentIndex?t.classList.add("active"):t.classList.remove("active")})),this.dots&&this.dots.forEach((function(t,n){n===e.currentIndex?t.classList.add("active"):t.classList.remove("active")}))},t.prototype.addDisabledClass=function(){if(!this.prev||!this.next)return!1;0===this.currentIndex?(this.next.classList.remove("disabled"),this.prev.classList.add("disabled")):this.currentIndex===this.slides.length-1?(this.prev.classList.remove("disabled"),this.next.classList.add("disabled")):(this.prev.classList.remove("disabled"),this.next.classList.remove("disabled"))},t.prototype.autoPlay=function(){this.setTimer()},t.prototype.setTimer=function(){var e=this;this.timer=setInterval((function(){e.currentIndex===e.slides.length-1?e.goTo(0):e.goToNext()}),this.speed)},t.prototype.resetTimer=function(){clearInterval(this.timer)},t.prototype.detectDirection=function(){var e=this.touchX,t=e.start,n=e.end;n<t&&this.goToNext(),n>t&&this.goToPrev()},t.prototype.recalculateWidth=function(){this.sliderWidth=this.inner.parentElement.clientWidth,this.calculateWidth()},t.prototype.goToPrev=function(){0===this.currentIndex&&this.isInfiniteLoop?(this.currentIndex=this.slides.length-1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):0!==this.currentIndex&&(this.currentIndex-=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},t.prototype.goToNext=function(){this.currentIndex===this.slides.length-1&&this.isInfiniteLoop?(this.currentIndex=0,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex<this.slides.length-1&&(this.currentIndex+=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},t.prototype.goTo=function(e){this.currentIndex=e,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()},t.getInstance=function(e,t){var n=window.$hsCarouselCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsCarouselCollection||(window.$hsCarouselCollection=[]),document.querySelectorAll("[data-hs-carousel]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsCarouselCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s(n(737)).default);window.addEventListener("load",(function(){a.autoInit()})),window.addEventListener("resize",(function(){if(!window.$hsCarouselCollection)return!1;window.$hsCarouselCollection.forEach((function(e){e.element.recalculateWidth()}))})),"undefined"!=typeof window&&(window.HSCarousel=a),t.default=a},652:function(e,t,n){
/*
         * HSCollapse
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(969),a=function(e){function t(t,n,r){var i=e.call(this,t,n,r)||this;return i.contentId=i.el.dataset.hsCollapse,i.content=document.querySelector(i.contentId),i.animationInProcess=!1,i.content&&i.init(),i}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsCollapseCollection,this),this.el.addEventListener("click",(function(){e.content.classList.contains("open")?e.hide():e.show()}))},t.prototype.hideAllMegaMenuItems=function(){this.content.querySelectorAll(".hs-mega-menu-content.block").forEach((function(e){e.classList.remove("block"),e.classList.add("hidden")}))},t.prototype.show=function(){var e=this;if(this.animationInProcess||this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.add("open"),this.content.classList.add("open"),this.content.classList.remove("hidden"),this.content.style.height="0",setTimeout((function(){e.content.style.height="".concat(e.content.scrollHeight,"px"),e.fireEvent("beforeOpen",e.el),(0,s.dispatch)("beforeOpen.hs.collapse",e.el,e.el)})),(0,s.afterTransition)(this.content,(function(){e.content.style.height="",e.fireEvent("open",e.el),(0,s.dispatch)("open.hs.collapse",e.el,e.el),e.animationInProcess=!1}))},t.prototype.hide=function(){var e=this;if(this.animationInProcess||!this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.remove("open"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout((function(){e.content.style.height="0"})),this.content.classList.remove("open"),(0,s.afterTransition)(this.content,(function(){e.content.classList.add("hidden"),e.content.style.height="",e.fireEvent("hide",e.el),(0,s.dispatch)("hide.hs.collapse",e.el,e.el),e.animationInProcess=!1})),this.content.querySelectorAll(".hs-mega-menu-content.block").length&&this.hideAllMegaMenuItems()},t.getInstance=function(e,t){void 0===t&&(t=!1);var n=window.$hsCollapseCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.autoInit=function(){window.$hsCollapseCollection||(window.$hsCollapseCollection=[]),document.querySelectorAll(".hs-collapse-toggle:not(.--prevent-on-load-init)").forEach((function(e){window.$hsCollapseCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t.show=function(e){var t=window.$hsCollapseCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&t.element.content.classList.contains("hidden")&&t.element.show()},t.hide=function(e){var t=window.$hsCollapseCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&!t.element.content.classList.contains("hidden")&&t.element.hide()},t.on=function(e,t,n){var r=window.$hsCollapseCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));r&&(r.element.events[e]=n)},t}(o(n(737)).default);window.addEventListener("load",(function(){a.autoInit()})),"undefined"!=typeof window&&(window.HSCollapse=a),t.default=a},23:function(e,t,n){
/*
         * HSComboBox
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!((i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(969),h=l(n(737)),d=n(190),p=function(e){function t(t,n,r){var i,s,a,c,l,u,h,d,p,f,m,g,v,y,_,w,b,C,I,S,E,T,k,x,A,O=e.call(this,t,n,r)||this,P=t.getAttribute("data-hs-combo-box"),L=P?JSON.parse(P):{},R=o(o({},L),n);return O.gap=5,O.viewport=null!==(i="string"==typeof(null==R?void 0:R.viewport)?document.querySelector(null==R?void 0:R.viewport):null==R?void 0:R.viewport)&&void 0!==i?i:null,O.preventVisibility=null!==(s=null==R?void 0:R.preventVisibility)&&void 0!==s&&s,O.apiUrl=null!==(a=null==R?void 0:R.apiUrl)&&void 0!==a?a:null,O.apiDataPart=null!==(c=null==R?void 0:R.apiDataPart)&&void 0!==c?c:null,O.apiQuery=null!==(l=null==R?void 0:R.apiQuery)&&void 0!==l?l:null,O.apiSearchQuery=null!==(u=null==R?void 0:R.apiSearchQuery)&&void 0!==u?u:null,O.apiHeaders=null!==(h=null==R?void 0:R.apiHeaders)&&void 0!==h?h:{},O.apiGroupField=null!==(d=null==R?void 0:R.apiGroupField)&&void 0!==d?d:null,O.outputItemTemplate=null!==(p=null==R?void 0:R.outputItemTemplate)&&void 0!==p?p:'<div class="cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-hs-combo-box-output-item>\n\t\t\t\t<div class="flex justify-between items-center w-full">\n\t\t\t\t\t<span data-hs-combo-box-search-text></span>\n\t\t\t\t\t<span class="hidden hs-combo-box-selected:block">\n\t\t\t\t\t\t<svg class="flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\t\t\t\t\t\t\t<polyline points="20 6 9 17 4 12"></polyline>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>',O.outputEmptyTemplate=null!==(f=null==R?void 0:R.outputEmptyTemplate)&&void 0!==f?f:'<div class="py-2 px-4 w-full text-sm text-gray-800 rounded-lg dark:bg-neutral-900 dark:text-neutral-200">Nothing found...</div>',O.outputLoaderTemplate=null!==(m=null==R?void 0:R.outputLoaderTemplate)&&void 0!==m?m:'<div class="flex justify-center items-center py-2 px-4 text-sm text-gray-800 rounded-lg bg-white dark:bg-neutral-900 dark:text-neutral-200">\n\t\t\t\t<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">\n\t\t\t\t\t<span class="sr-only">Loading...</span>\n\t\t\t\t</div>\n\t\t\t</div>',O.groupingType=null!==(g=null==R?void 0:R.groupingType)&&void 0!==g?g:null,O.groupingTitleTemplate=null!==(v=null==R?void 0:R.groupingTitleTemplate)&&void 0!==v?v:"default"===O.groupingType?'<div class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></div>':'<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"></button>',O.tabsWrapperTemplate=null!==(y=null==R?void 0:R.tabsWrapperTemplate)&&void 0!==y?y:'<div class="overflow-x-auto p-4"></div>',O.preventSelection=null!==(_=null==R?void 0:R.preventSelection)&&void 0!==_&&_,O.preventAutoPosition=null!==(w=null==R?void 0:R.preventAutoPosition)&&void 0!==w&&w,O.isOpenOnFocus=null!==(b=null==R?void 0:R.isOpenOnFocus)&&void 0!==b&&b,O.input=null!==(C=O.el.querySelector("[data-hs-combo-box-input]"))&&void 0!==C?C:null,O.output=null!==(I=O.el.querySelector("[data-hs-combo-box-output]"))&&void 0!==I?I:null,O.itemsWrapper=null!==(S=O.el.querySelector("[data-hs-combo-box-output-items-wrapper]"))&&void 0!==S?S:null,O.items=null!==(E=Array.from(O.el.querySelectorAll("[data-hs-combo-box-output-item]")))&&void 0!==E?E:[],O.tabs=[],O.toggle=null!==(T=O.el.querySelector("[data-hs-combo-box-toggle]"))&&void 0!==T?T:null,O.toggleClose=null!==(k=O.el.querySelector("[data-hs-combo-box-close]"))&&void 0!==k?k:null,O.toggleOpen=null!==(x=O.el.querySelector("[data-hs-combo-box-open]"))&&void 0!==x?x:null,O.outputPlaceholder=null,O.selected=O.value=null!==(A=O.el.querySelector("[data-hs-combo-box-input]").value)&&void 0!==A?A:"",O.isOpened=!1,O.isCurrent=!1,O.animationInProcess=!1,O.selectedGroup="all",O.init(),O}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsComboBoxCollection,this),this.build()},t.prototype.build=function(){this.buildInput(),this.groupingType&&this.setGroups(),this.buildItems(),this.preventVisibility&&(this.isOpened=!0,this.preventAutoPosition||this.recalculateDirection()),this.toggle&&this.buildToggle(),this.toggleClose&&this.buildToggleClose(),this.toggleOpen&&this.buildToggleOpen()},t.prototype.setResultAndRender=function(e){void 0===e&&(e=""),this.setResults(e),this.apiSearchQuery&&this.itemsFromJson()},t.prototype.buildInput=function(){var e=this;this.isOpenOnFocus&&this.input.addEventListener("focus",(function(){e.isOpened||(e.setResultAndRender(),e.open())})),this.input.addEventListener("input",(0,u.debounce)((function(t){e.setResultAndRender(t.target.value),e.isOpened||e.open()})))},t.prototype.buildItems=function(){this.apiUrl?this.itemsFromJson():(this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="",this.itemsFromHtml())},t.prototype.setResults=function(e){this.value=e,this.resultItems(),this.hasVisibleItems()?this.destroyOutputPlaceholder():this.buildOutputPlaceholder()},t.prototype.isItemExists=function(e){return this.items.some((function(t){return Array.from(t.querySelectorAll("[data-hs-combo-box-search-text]")).some((function(t){return t.getAttribute("data-hs-combo-box-search-text")===e[t.getAttribute("data-hs-combo-box-output-item-field")]}))}))},t.prototype.isTextExists=function(e,t){var n=t.map((function(e){return e.toLowerCase()}));return Array.from(e.querySelectorAll("[data-hs-combo-box-search-text]")).some((function(e){return n.includes(e.getAttribute("data-hs-combo-box-search-text").toLowerCase())}))},t.prototype.isTextExistsAny=function(e,t){return Array.from(e.querySelectorAll("[data-hs-combo-box-search-text]")).some((function(e){return e.getAttribute("data-hs-combo-box-search-text").toLowerCase().includes(t.toLowerCase())}))},t.prototype.valuesBySelector=function(e){return Array.from(e.querySelectorAll("[data-hs-combo-box-search-text]")).reduce((function(e,t){return c(c([],e,!0),[t.getAttribute("data-hs-combo-box-search-text")],!1)}),[])},t.prototype.buildOutputLoader=function(){if(this.outputLoader)return!1;this.outputLoader=(0,u.htmlToElement)(this.outputLoaderTemplate),this.items.length||this.outputPlaceholder?(this.outputLoader.style.position="absolute",this.outputLoader.style.top="0",this.outputLoader.style.bottom="0",this.outputLoader.style.left="0",this.outputLoader.style.right="0",this.outputLoader.style.zIndex="2"):(this.outputLoader.style.position="",this.outputLoader.style.top="",this.outputLoader.style.bottom="",this.outputLoader.style.left="",this.outputLoader.style.right="",this.outputLoader.style.zIndex="",this.outputLoader.style.height="30px"),this.output.append(this.outputLoader)},t.prototype.destroyOutputLoader=function(){this.outputLoader&&this.outputLoader.remove(),this.outputLoader=null},t.prototype.itemsFromJson=function(){return s(this,void 0,void 0,(function(){var e,t,n,r,i,o=this;return a(this,(function(s){switch(s.label){case 0:this.buildOutputLoader(),s.label=1;case 1:return s.trys.push([1,4,,5]),e="".concat(this.apiQuery),t="".concat(this.apiSearchQuery,"=").concat(this.value.toLowerCase()),n=this.apiUrl,this.apiQuery&&this.apiSearchQuery?n+="?".concat(t,"&").concat(e):this.apiQuery?n+="?".concat(e):this.apiSearchQuery&&(n+="?".concat(t)),[4,fetch(n,this.apiHeaders)];case 2:return[4,s.sent().json()];case 3:return r=s.sent(),this.apiDataPart&&(r=r[this.apiDataPart]),this.apiSearchQuery&&(this.items=[]),this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="","tabs"===this.groupingType?(this.setApiGroups(r),this.groupTabsRender(),this.jsonItemsRender(r)):"default"===this.groupingType?(this.setApiGroups(r),this.groups.forEach((function(e){var t=(0,u.htmlToElement)(o.groupingTitleTemplate);t.setAttribute("data-hs-combo-box-group-title",e.name),t.classList.add("--exclude-accessibility"),t.innerText=e.title;var n=r.filter((function(t){return t[o.apiGroupField]===e.name}));o.itemsWrapper?o.itemsWrapper.append(t):o.output.append(t),o.jsonItemsRender(n)}))):this.jsonItemsRender(r),this.setResults(this.input.value),[3,5];case 4:return i=s.sent(),console.error(i),[3,5];case 5:return this.destroyOutputLoader(),[2]}}))}))},t.prototype.jsonItemsRender=function(e){var t=this;e.forEach((function(e,n){if(t.isItemExists(e))return!1;var r=(0,u.htmlToElement)(t.outputItemTemplate);r.querySelectorAll("[data-hs-combo-box-search-text]").forEach((function(t){var n,r;t.textContent=null!==(n=e[t.getAttribute("data-hs-combo-box-output-item-field")])&&void 0!==n?n:"",t.setAttribute("data-hs-combo-box-search-text",null!==(r=e[t.getAttribute("data-hs-combo-box-output-item-field")])&&void 0!==r?r:"")})),r.querySelectorAll("[data-hs-combo-box-output-item-attr]").forEach((function(t){JSON.parse(t.getAttribute("data-hs-combo-box-output-item-attr")).forEach((function(n){t.setAttribute(n.attr,e[n.valueFrom])}))})),r.setAttribute("tabIndex","".concat(n)),"tabs"!==t.groupingType&&"default"!==t.groupingType||r.setAttribute("data-hs-combo-box-output-item",'{"group": {"name": "'.concat(e[t.apiGroupField],'", "title": "').concat(e[t.apiGroupField],'"}}')),t.items=c(c([],t.items,!0),[r],!1),t.preventSelection||r.addEventListener("click",(function(){t.close(r.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text")),t.setSelectedByValue(t.valuesBySelector(r))})),t.appendItemsToWrapper(r)}))},t.prototype.setGroups=function(){var e=[];this.items.forEach((function(t){var n=JSON.parse(t.getAttribute("data-hs-combo-box-output-item")).group;e.some((function(e){return(null==e?void 0:e.name)===n.name}))||e.push(n)})),this.groups=e},t.prototype.setCurrent=function(){window.$hsComboBoxCollection.length&&(window.$hsComboBoxCollection.map((function(e){return e.element.isCurrent=!1})),this.isCurrent=!0)},t.prototype.setApiGroups=function(e){var t=this,n=[];e.forEach((function(e){var r=e[t.apiGroupField];n.some((function(e){return e.name===r}))||n.push({name:r,title:r})})),this.groups=n},t.prototype.sortItems=function(){return this.items.sort((function(e,t){var n=e.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),r=t.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text");return n<r?-1:n>r?1:0}))},t.prototype.itemRender=function(e){var t=this,n=e.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text");this.itemsWrapper?this.itemsWrapper.append(e):this.output.append(e),this.preventSelection||e.addEventListener("click",(function(){t.close(n),t.setSelectedByValue(t.valuesBySelector(e))}))},t.prototype.plainRender=function(e){var t=this;e.forEach((function(e){t.itemRender(e)}))},t.prototype.groupTabsRender=function(){var e=this,t=(0,u.htmlToElement)(this.tabsWrapperTemplate),n=(0,u.htmlToElement)('<div class="flex flex-nowrap gap-x-2"></div>');t.append(n),this.output.insertBefore(t,this.output.firstChild);var r=(0,u.htmlToElement)(this.groupingTitleTemplate);r.setAttribute("data-hs-combo-box-group-title","all"),r.classList.add("--exclude-accessibility","active"),r.innerText="All",this.tabs=c(c([],this.tabs,!0),[r],!1),n.append(r),r.addEventListener("click",(function(){e.selectedGroup="all";var t=e.tabs.find((function(t){return t.getAttribute("data-hs-combo-box-group-title")===e.selectedGroup}));e.tabs.forEach((function(e){return e.classList.remove("active")})),t.classList.add("active"),e.setItemsVisibility()})),this.groups.forEach((function(t){var r=(0,u.htmlToElement)(e.groupingTitleTemplate);r.setAttribute("data-hs-combo-box-group-title",t.name),r.classList.add("--exclude-accessibility"),r.innerText=t.title,e.tabs=c(c([],e.tabs,!0),[r],!1),n.append(r),r.addEventListener("click",(function(){e.selectedGroup=t.name;var n=e.tabs.find((function(t){return t.getAttribute("data-hs-combo-box-group-title")===e.selectedGroup}));e.tabs.forEach((function(e){return e.classList.remove("active")})),n.classList.add("active"),e.setItemsVisibility()}))}))},t.prototype.groupDefaultRender=function(){var e=this;this.groups.forEach((function(t){var n=(0,u.htmlToElement)(e.groupingTitleTemplate);n.setAttribute("data-hs-combo-box-group-title",t.name),n.classList.add("--exclude-accessibility"),n.innerText=t.title,e.itemsWrapper?e.itemsWrapper.append(n):e.output.append(n);var r=e.sortItems().filter((function(e){return JSON.parse(e.getAttribute("data-hs-combo-box-output-item")).group.name===t.name}));e.plainRender(r)}))},t.prototype.itemsFromHtml=function(){if("default"===this.groupingType)this.groupDefaultRender();else if("tabs"===this.groupingType){var e=this.sortItems();this.groupTabsRender(),this.plainRender(e)}else e=this.sortItems(),this.plainRender(e);this.setResults(this.input.value)},t.prototype.buildToggle=function(){var e=this;this.toggle.addEventListener("click",(function(){e.isOpened?e.close():e.open(e.toggle.getAttribute("data-hs-combo-box-toggle"))}))},t.prototype.buildToggleClose=function(){var e=this;this.toggleClose.addEventListener("click",(function(){return e.close()}))},t.prototype.buildToggleOpen=function(){var e=this;this.toggleOpen.addEventListener("click",(function(){return e.open()}))},t.prototype.setSelectedByValue=function(e){var t=this;this.items.forEach((function(n){t.isTextExists(n,e)?n.classList.add("selected"):n.classList.remove("selected")}))},t.prototype.setValue=function(e){this.selected=e,this.value=e,this.input.value=e,this.fireEvent("select",this.el),(0,u.dispatch)("select.hs.combobox",this.el,this.value)},t.prototype.setItemsVisibility=function(){var e=this;"tabs"===this.groupingType&&"all"!==this.selectedGroup&&this.items.forEach((function(e){e.style.display="none"}));var t="tabs"===this.groupingType?"all"===this.selectedGroup?this.items:this.items.filter((function(t){return JSON.parse(t.getAttribute("data-hs-combo-box-output-item")).group.name===e.selectedGroup})):this.items;"tabs"===this.groupingType&&"all"!==this.selectedGroup&&t.forEach((function(e){e.style.display="block"})),t.forEach((function(t){e.isTextExistsAny(t,e.value)?t.style.display="block":t.style.display="none"})),"default"===this.groupingType&&this.output.querySelectorAll("[data-hs-combo-box-group-title]").forEach((function(t){var n=t.getAttribute("data-hs-combo-box-group-title");e.items.filter((function(e){return JSON.parse(e.getAttribute("data-hs-combo-box-output-item")).group.name===n&&"block"===e.style.display})).length?t.style.display="block":t.style.display="none"}))},t.prototype.hasVisibleItems=function(){return!!this.items.length&&this.items.some((function(e){return"block"===e.style.display}))},t.prototype.appendItemsToWrapper=function(e){this.itemsWrapper?this.itemsWrapper.append(e):this.output.append(e)},t.prototype.buildOutputPlaceholder=function(){this.outputPlaceholder||(this.outputPlaceholder=(0,u.htmlToElement)(this.outputEmptyTemplate)),this.appendItemsToWrapper(this.outputPlaceholder)},t.prototype.destroyOutputPlaceholder=function(){this.outputPlaceholder&&this.outputPlaceholder.remove(),this.outputPlaceholder=null},t.prototype.resultItems=function(){if(!this.items.length)return!1;this.setItemsVisibility(),this.setSelectedByValue([this.selected])},t.prototype.setValueAndOpen=function(e){this.value=e,this.items.length&&this.setItemsVisibility()},t.prototype.open=function(e){var t=this;return!this.animationInProcess&&(void 0!==e&&this.setValueAndOpen(e),!this.preventVisibility&&(this.animationInProcess=!0,this.output.style.display="block",this.preventAutoPosition||this.recalculateDirection(),setTimeout((function(){t.el.classList.add("active"),t.animationInProcess=!1})),void(this.isOpened=!0)))},t.prototype.setValueAndClear=function(e){e?this.setValue(e):this.setValue(this.selected),this.outputPlaceholder&&this.destroyOutputPlaceholder()},t.prototype.close=function(e){var t=this;return!this.animationInProcess&&(this.preventVisibility?(this.setValueAndClear(e),!1):(this.animationInProcess=!0,this.el.classList.remove("active"),this.preventAutoPosition||(this.output.classList.remove("bottom-full","top-full"),this.output.style.marginTop="",this.output.style.marginBottom=""),(0,u.afterTransition)(this.output,(function(){t.output.style.display="none",t.setValueAndClear(e),t.animationInProcess=!1})),void(this.isOpened=!1)))},t.prototype.recalculateDirection=function(){(0,u.isEnoughSpace)(this.output,this.input,"bottom",this.gap,this.viewport)?(this.output.classList.remove("bottom-full"),this.output.style.marginBottom="",this.output.classList.add("top-full"),this.output.style.marginTop="".concat(this.gap,"px")):(this.output.classList.remove("top-full"),this.output.style.marginTop="",this.output.classList.add("bottom-full"),this.output.style.marginBottom="".concat(this.gap,"px"))},t.getInstance=function(e,t){var n=window.$hsComboBoxCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsComboBoxCollection||(window.$hsComboBoxCollection=[]),document.querySelectorAll("[data-hs-combo-box]:not(.--prevent-on-load-init)").forEach((function(e){if(!window.$hsComboBoxCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))){var n=e.getAttribute("data-hs-combo-box"),r=n?JSON.parse(n):{};new t(e,r)}})),window.$hsComboBoxCollection&&(window.addEventListener("click",(function(e){var n=e.target;t.closeCurrentlyOpened(n)})),document.addEventListener("keydown",(function(e){return t.accessibility(e)})))},t.close=function(e){var t=window.$hsComboBoxCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&t.element.isOpened&&t.element.close()},t.closeCurrentlyOpened=function(e){if(void 0===e&&(e=null),!e.closest("[data-hs-combo-box].active")){var t=window.$hsComboBoxCollection.filter((function(e){return e.element.isOpened}))||null;t&&t.forEach((function(e){e.element.close()}))}},t.getPreparedItems=function(e,t){return void 0===e&&(e=!1),t?(e?Array.from(t.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter((function(e){return"none"!==e.style.display})).reverse():Array.from(t.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter((function(e){return"none"!==e.style.display}))).filter((function(e){return!e.classList.contains("disabled")})):null},t.setHighlighted=function(e,t,n){t.focus(),n.value=t.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),e&&e.classList.remove("hs-combo-box-output-item-highlighted"),t.classList.add("hs-combo-box-output-item-highlighted")},t.accessibility=function(e){if(window.$hsComboBoxCollection.find((function(e){return e.element.isOpened}))&&d.COMBO_BOX_ACCESSIBILITY_KEY_SET.includes(e.code)&&!e.metaKey)switch(e.code){case"Escape":e.preventDefault(),this.onEscape();break;case"ArrowUp":e.preventDefault(),this.onArrow();break;case"ArrowDown":e.preventDefault(),this.onArrow(!1);break;case"Home":e.preventDefault(),this.onStartEnd();break;case"End":e.preventDefault(),this.onStartEnd(!1);break;case"Enter":e.preventDefault(),this.onEnter(e)}},t.onEscape=function(){var e=window.$hsComboBoxCollection.find((function(e){return!e.element.preventVisibility&&e.element.isOpened}));e&&(e.element.close(),e.element.input.blur())},t.onArrow=function(e){var n;void 0===e&&(e=!0);var r=window.$hsComboBoxCollection.find((function(e){return e.element.preventVisibility?e.element.isCurrent:e.element.isOpened}));if(r){var i=null!==(n=r.element.itemsWrapper)&&void 0!==n?n:r.element.output;if(!i)return!1;var o,s=t.getPreparedItems(e,i),a=i.querySelector(".hs-combo-box-output-item-highlighted");a||s[0].classList.add("hs-combo-box-output-item-highlighted");var c=s.findIndex((function(e){return e===a}));c+1<s.length&&c++,o=s[c],t.setHighlighted(a,o,r.element.input)}},t.onStartEnd=function(e){var n;void 0===e&&(e=!0);var r=window.$hsComboBoxCollection.find((function(e){return e.element.preventVisibility?e.element.isCurrent:e.element.isOpened}));if(r){var i=null!==(n=r.element.itemsWrapper)&&void 0!==n?n:r.element.output;if(!i)return!1;var o=t.getPreparedItems(e,i),s=i.querySelector(".hs-combo-box-output-item-highlighted");o.length&&t.setHighlighted(s,o[0],r.element.input)}},t.onEnter=function(e){var t=e.target,n=window.$hsComboBoxCollection.find((function(t){return!(0,u.isParentOrElementHidden)(t.element.el)&&e.target.closest("[data-hs-combo-box]")===t.element.el})),r=n.element.el.querySelector(".hs-combo-box-output-item-highlighted a");t.hasAttribute("data-hs-combo-box-input")?(n.element.close(),t.blur()):(n.element.preventSelection||n.element.setSelectedByValue(n.element.valuesBySelector(e.target)),n.element.preventSelection&&r&&window.location.assign(r.getAttribute("href")),n.element.close(n.element.preventSelection?null:e.target.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text")))},t}(h.default);window.addEventListener("load",(function(){p.autoInit()})),document.addEventListener("scroll",(function(){if(!window.$hsComboBoxCollection)return!1;var e=window.$hsComboBoxCollection.find((function(e){return e.element.isOpened}));e&&!e.element.preventAutoPosition&&e.element.recalculateDirection()})),"undefined"!=typeof window&&(window.HSComboBox=p),t.default=p},413:function(e,t,n){
/*
         * HSCopyMarkup
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-copy-markup"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.targetSelector=(null==a?void 0:a.targetSelector)||null,r.wrapperSelector=(null==a?void 0:a.wrapperSelector)||null,r.limit=(null==a?void 0:a.limit)||null,r.items=[],r.targetSelector&&r.init(),r}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsCopyMarkupCollection,this),this.setTarget(),this.setWrapper(),this.addPredefinedItems(),this.el.addEventListener("click",(function(){return e.copy()}))},t.prototype.copy=function(){if(this.limit&&this.items.length>=this.limit)return!1;this.el.hasAttribute("disabled")&&this.el.setAttribute("disabled","");var e=this.target.cloneNode(!0);this.addToItems(e),this.limit&&this.items.length>=this.limit&&this.el.setAttribute("disabled","disabled"),this.fireEvent("copy",e),(0,a.dispatch)("copy.hs.copyMarkup",e,e)},t.prototype.addPredefinedItems=function(){var e=this;Array.from(this.wrapper.children).filter((function(e){return!e.classList.contains("[--ignore-for-count]")})).forEach((function(t){e.addToItems(t)}))},t.prototype.setTarget=function(){var e="string"==typeof this.targetSelector?document.querySelector(this.targetSelector).cloneNode(!0):this.targetSelector.cloneNode(!0);e.removeAttribute("id"),this.target=e},t.prototype.setWrapper=function(){this.wrapper="string"==typeof this.wrapperSelector?document.querySelector(this.wrapperSelector):this.wrapperSelector},t.prototype.addToItems=function(e){var t=this,n=e.querySelector("[data-hs-copy-markup-delete-item]");this.wrapper?this.wrapper.append(e):this.el.before(e),n&&n.addEventListener("click",(function(){return t.delete(e)})),this.items.push(e)},t.prototype.delete=function(e){var t=this.items.indexOf(e);-1!==t&&this.items.splice(t,1),e.remove(),this.fireEvent("delete",e),(0,a.dispatch)("delete.hs.copyMarkup",e,e)},t.getInstance=function(e,t){var n=window.$hsCopyMarkupCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsCopyMarkupCollection||(window.$hsCopyMarkupCollection=[]),document.querySelectorAll("[data-hs-copy-markup]:not(.--prevent-on-load-init)").forEach((function(e){if(!window.$hsCopyMarkupCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))){var n=e.getAttribute("data-hs-copy-markup"),r=n?JSON.parse(n):{};new t(e,r)}}))},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit()})),"undefined"!=typeof window&&(window.HSCopyMarkup=c),t.default=c},610:function(e,t,n){
/*
         * HSDropdown
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=n(492),l=s(n(737)),u=n(190),h=function(e){function t(t,n,r){var i=e.call(this,t,n,r)||this;return i.toggle=i.el.querySelector(":scope > .hs-dropdown-toggle")||i.el.querySelector(":scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle")||i.el.children[0],i.closers=Array.from(i.el.querySelectorAll(":scope .hs-dropdown-close"))||null,i.menu=i.el.querySelector(":scope > .hs-dropdown-menu"),i.eventMode=(0,a.getClassProperty)(i.el,"--trigger","click"),i.closeMode=(0,a.getClassProperty)(i.el,"--auto-close","true"),i.animationInProcess=!1,i.toggle&&i.menu&&i.init(),i}return i(t,e),t.prototype.init=function(){var e=this;if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle.addEventListener("click",(function(t){return e.onClickHandler(t)})),this.closers&&this.buildClosers(),(0,a.isIOS)()||(0,a.isIpadOS)()||(this.el.addEventListener("mouseenter",(function(){return e.onMouseEnterHandler()})),this.el.addEventListener("mouseleave",(function(){return e.onMouseLeaveHandler()})))},t.prototype.resizeHandler=function(){this.eventMode=(0,a.getClassProperty)(this.el,"--trigger","click")},t.prototype.buildClosers=function(){var e=this;this.closers.forEach((function(t){t.addEventListener("click",(function(){return e.close()}))}))},t.prototype.onClickHandler=function(e){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()},t.prototype.onMouseEnterHandler=function(){if("hover"!==this.eventMode)return!1;this.el._popper&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()},t.prototype.onMouseLeaveHandler=function(){if("hover"!==this.eventMode)return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()},t.prototype.destroyPopper=function(){this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._popper&&this.el._popper.destroy(),this.animationInProcess=!1},t.prototype.absoluteStrategyModifiers=function(){var e=this;return[{name:"applyStyles",fn:function(t){var n=(window.getComputedStyle(e.el).getPropertyValue("--strategy")||"absolute").replace(" ",""),r=(window.getComputedStyle(e.el).getPropertyValue("--adaptive")||"adaptive").replace(" ","");t.state.elements.popper.style.position=n,t.state.elements.popper.style.transform="adaptive"===r?t.state.styles.popper.transform:null,t.state.elements.popper.style.top=null,t.state.elements.popper.style.bottom=null,t.state.elements.popper.style.left=null,t.state.elements.popper.style.right=null,t.state.elements.popper.style.margin=0}},{name:"computeStyles",options:{adaptive:!1}}]},t.prototype.open=function(){var e=this;if(this.el.classList.contains("open"))return!1;if(this.animationInProcess)return!1;this.animationInProcess=!0;var t=(window.getComputedStyle(this.el).getPropertyValue("--placement")||"").replace(" ",""),n=(window.getComputedStyle(this.el).getPropertyValue("--flip")||"true").replace(" ",""),r=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"fixed").replace(" ",""),i=parseInt((window.getComputedStyle(this.el).getPropertyValue("--offset")||"10").replace(" ",""));"static"!==r&&(this.el._popper=(0,c.createPopper)(this.el,this.menu,{placement:u.POSITIONS[t]||"bottom-start",strategy:r,modifiers:o(o([],"fixed"!==r?this.absoluteStrategyModifiers():[],!0),[{name:"flip",enabled:"true"===n},{name:"offset",options:{offset:[0,i]}}],!1)})),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout((function(){e.el.classList.add("open"),e.animationInProcess=!1})),this.fireEvent("open",this.el),(0,a.dispatch)("open.hs.dropdown",this.el,this.el)},t.prototype.close=function(e){var t=this;if(void 0===e&&(e=!0),this.animationInProcess||!this.el.classList.contains("open"))return!1;if(this.animationInProcess=!0,e){var n=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,a.afterTransition)(n,(function(){return t.destroyPopper()}))}else this.destroyPopper();this.menu.style.margin=null,this.el.classList.remove("open"),this.fireEvent("close",this.el),(0,a.dispatch)("close.hs.dropdown",this.el,this.el)},t.prototype.forceClearState=function(){this.destroyPopper(),this.menu.style.margin=null,this.el.classList.remove("open")},t.getInstance=function(e,t){var n=window.$hsDropdownCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.autoInit=function(){if(window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),document.querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach((function(e){window.$hsDropdownCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)})),window.$hsDropdownCollection){document.addEventListener("keydown",(function(e){return t.accessibility(e)})),window.addEventListener("click",(function(e){var n=e.target;t.closeCurrentlyOpened(n)}));var e=window.innerWidth;window.addEventListener("resize",(function(){window.innerWidth!==e&&(e=innerWidth,t.closeCurrentlyOpened(null,!1))}))}},t.open=function(e){var t=window.$hsDropdownCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&t.element.menu.classList.contains("hidden")&&t.element.open()},t.close=function(e){var t=window.$hsDropdownCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&!t.element.menu.classList.contains("hidden")&&t.element.close()},t.accessibility=function(e){this.history=a.menuSearchHistory;var t=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(t&&(u.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(e.code)||4===e.code.length&&e.code[e.code.length-1].match(/^[A-Z]*$/))&&!e.metaKey&&!t.element.menu.querySelector("input:focus")&&!t.element.menu.querySelector("textarea:focus"))switch(e.code){case"Escape":t.element.menu.querySelector(".hs-select.active")||(e.preventDefault(),this.onEscape(e));break;case"Enter":t.element.menu.querySelector(".hs-select button:focus")||t.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(e);break;case"ArrowUp":e.preventDefault(),this.onArrow();break;case"ArrowDown":e.preventDefault(),this.onArrow(!1);break;case"Home":e.preventDefault(),this.onStartEnd();break;case"End":e.preventDefault(),this.onStartEnd(!1);break;default:e.preventDefault(),this.onFirstLetter(e.key)}},t.onEscape=function(e){var t=e.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find((function(e){return e.element.el===t}))){var n=window.$hsDropdownCollection.find((function(e){return e.element.el===t}));n&&(n.element.close(),n.element.toggle.focus())}else this.closeCurrentlyOpened()},t.onEnter=function(e){var t=e.target.parentElement;if(window.$hsDropdownCollection.find((function(e){return e.element.el===t}))){e.preventDefault();var n=window.$hsDropdownCollection.find((function(e){return e.element.el===t}));n&&n.element.open()}},t.onArrow=function(e){void 0===e&&(e=!0);var t=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(t){var n=t.element.menu;if(!n)return!1;var r=(e?Array.from(n.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])")).reverse():Array.from(n.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])"))).filter((function(e){return!e.classList.contains("disabled")})),i=n.querySelector("a:focus, button:focus"),o=r.findIndex((function(e){return e===i}));o+1<r.length&&o++,r[o].focus()}},t.onStartEnd=function(e){void 0===e&&(e=!0);var t=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(t){var n=t.element.menu;if(!n)return!1;var r=(e?Array.from(n.querySelectorAll("a")):Array.from(n.querySelectorAll("a")).reverse()).filter((function(e){return!e.classList.contains("disabled")}));r.length&&r[0].focus()}},t.onFirstLetter=function(e){var t=this,n=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(n){var r=n.element.menu;if(!r)return!1;var i=Array.from(r.querySelectorAll("a")),o=function(){return i.findIndex((function(n,r){return n.innerText.toLowerCase().charAt(0)===e.toLowerCase()&&t.history.existsInHistory(r)}))},s=o();-1===s&&(this.history.clearHistory(),s=o()),-1!==s&&(i[s].focus(),this.history.addHistory(s))}},t.closeCurrentlyOpened=function(e,t){void 0===e&&(e=null),void 0===t&&(t=!0);var n=e&&e.closest(".hs-dropdown")&&e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null,r=n?window.$hsDropdownCollection.filter((function(e){return e.element.el.classList.contains("open")&&e.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===n})):window.$hsDropdownCollection.filter((function(e){return e.element.el.classList.contains("open")}));e&&e.closest(".hs-dropdown")&&"inside"===(0,a.getClassPropertyAlt)(e.closest(".hs-dropdown"),"--auto-close")&&(r=r.filter((function(t){return t.element.el!==e.closest(".hs-dropdown")}))),r&&r.forEach((function(e){if("false"===e.element.closeMode||"outside"===e.element.closeMode)return!1;e.element.close(t)}))},t.on=function(e,t,n){var r=window.$hsDropdownCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));r&&(r.element.events[e]=n)},t}(l.default);window.addEventListener("load",(function(){h.autoInit()})),window.addEventListener("resize",(function(){window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach((function(e){return e.element.resizeHandler()}))})),"undefined"!=typeof window&&(window.HSDropdown=h),t.default=h},371:function(e,t,n){
/*
         * HSInputNumber
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.input=r.el.querySelector("[data-hs-input-number-input]")||null,r.increment=r.el.querySelector("[data-hs-input-number-increment]")||null,r.decrement=r.el.querySelector("[data-hs-input-number-decrement]")||null,r.input&&(r.inputValue=isNaN(parseInt(r.input.value))?0:parseInt(r.input.value));var i=r.el.dataset.hsInputNumber,s=i?JSON.parse(i):{step:1},a=o(o({},s),n);return r.minInputValue="min"in a?a.min:0,r.maxInputValue="max"in a?a.max:null,r.step="step"in a&&a.step>0?a.step:1,r.init(),r}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsInputNumberCollection,this),this.input&&this.increment&&this.build()},t.prototype.build=function(){this.input&&this.buildInput(),this.increment&&this.buildIncrement(),this.decrement&&this.buildDecrement(),this.inputValue<=0&&0===this.minInputValue&&(this.inputValue=0,this.input.value="0"),(this.inputValue<=0||this.minInputValue<0)&&this.changeValue(),this.input.hasAttribute("disabled")&&this.disableButtons()},t.prototype.buildInput=function(){var e=this;this.input.addEventListener("input",(function(){return e.changeValue()}))},t.prototype.buildIncrement=function(){var e=this;this.increment.addEventListener("click",(function(){e.changeValue("increment")}))},t.prototype.buildDecrement=function(){var e=this;this.decrement.addEventListener("click",(function(){e.changeValue("decrement")}))},t.prototype.changeValue=function(e){var t,n;void 0===e&&(e="none");var r={inputValue:this.inputValue},i=null!==(t=this.minInputValue)&&void 0!==t?t:Number.MIN_SAFE_INTEGER,o=null!==(n=this.maxInputValue)&&void 0!==n?n:Number.MAX_SAFE_INTEGER;switch(this.inputValue=isNaN(this.inputValue)?0:this.inputValue,e){case"increment":var s=this.inputValue+this.step;this.inputValue=s>=i&&s<=o?s:o,this.input.value=this.inputValue.toString();break;case"decrement":var c=this.inputValue-this.step;this.inputValue=c>=i&&c<=o?c:i,this.input.value=this.inputValue.toString();break;default:var l=isNaN(parseInt(this.input.value))?0:parseInt(this.input.value);this.inputValue=l>=o?o:l<=i?i:l,this.inputValue<=i&&(this.input.value=this.inputValue.toString())}r.inputValue=this.inputValue,this.inputValue===i?(this.el.classList.add("disabled"),this.decrement&&this.disableButtons("decrement")):(this.el.classList.remove("disabled"),this.decrement&&this.enableButtons("decrement")),this.inputValue===o?(this.el.classList.add("disabled"),this.increment&&this.disableButtons("increment")):(this.el.classList.remove("disabled"),this.increment&&this.enableButtons("increment")),this.fireEvent("change",r),(0,a.dispatch)("change.hs.inputNumber",this.el,r)},t.prototype.disableButtons=function(e){void 0===e&&(e="all"),"all"===e?("BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.setAttribute("disabled","disabled"),"BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.setAttribute("disabled","disabled")):"increment"===e?"BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.setAttribute("disabled","disabled"):"decrement"===e&&("BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.setAttribute("disabled","disabled"))},t.prototype.enableButtons=function(e){void 0===e&&(e="all"),"all"===e?("BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.removeAttribute("disabled"),"BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.removeAttribute("disabled")):"increment"===e?"BUTTON"!==this.increment.tagName&&"INPUT"!==this.increment.tagName||this.increment.removeAttribute("disabled"):"decrement"===e&&("BUTTON"!==this.decrement.tagName&&"INPUT"!==this.decrement.tagName||this.decrement.removeAttribute("disabled"))},t.getInstance=function(e,t){var n=window.$hsInputNumberCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsInputNumberCollection||(window.$hsInputNumberCollection=[]),document.querySelectorAll("[data-hs-input-number]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsInputNumberCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit()})),"undefined"!=typeof window&&(window.HSInputNumber=c),t.default=c},770:function(e,t,n){
/*
         * HSOverlay
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=n(190),l=function(e){function t(t,n,r){var i,s,l,u=e.call(this,t,n,r)||this,h=t.getAttribute("data-hs-overlay-options"),d=h?JSON.parse(h):{},p=o(o({},d),n);if(u.hiddenClass=(null==p?void 0:p.hiddenClass)||"hidden",u.isClosePrev=null===(i=null==p?void 0:p.isClosePrev)||void 0===i||i,u.backdropClasses=null!==(s=null==p?void 0:p.backdropClasses)&&void 0!==s?s:"hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900",u.backdropExtraClasses=null!==(l=null==p?void 0:p.backdropExtraClasses)&&void 0!==l?l:"",u.openNextOverlay=!1,u.autoHide=null,u.overlayId=u.el.getAttribute("data-hs-overlay"),u.overlay=document.querySelector(u.overlayId),u.overlay){u.isCloseWhenClickInside=(0,a.stringToBoolean)((0,a.getClassProperty)(u.overlay,"--close-when-click-inside","false")||"false"),u.isTabAccessibilityLimited=(0,a.stringToBoolean)((0,a.getClassProperty)(u.overlay,"--tab-accessibility-limited","true")||"true"),u.isLayoutAffect=(0,a.stringToBoolean)((0,a.getClassProperty)(u.overlay,"--is-layout-affect","false")||"false"),u.hasAutofocus=(0,a.stringToBoolean)((0,a.getClassProperty)(u.overlay,"--has-autofocus","true")||"true"),u.hasAbilityToCloseOnBackdropClick=(0,a.stringToBoolean)(u.overlay.getAttribute("data-hs-overlay-keyboard")||"true");var f=(0,a.getClassProperty)(u.overlay,"--auto-close");u.autoClose=!isNaN(+f)&&isFinite(+f)?+f:c.BREAKPOINTS[f]||null;var m=(0,a.getClassProperty)(u.overlay,"--opened");u.openedBreakpoint=(!isNaN(+m)&&isFinite(+m)?+m:c.BREAKPOINTS[m])||null}return u.overlay&&u.init(),u}return i(t,e),t.prototype.init=function(){var e=this;if(this.createCollection(window.$hsOverlayCollection,this),this.isLayoutAffect&&this.openedBreakpoint){var n=t.getInstance(this.el,!0);t.setOpened(this.openedBreakpoint,n)}this.el.addEventListener("click",(function(){e.overlay.classList.contains("opened")?e.close():e.open()})),this.overlay.addEventListener("click",(function(t){t.target.id&&"#".concat(t.target.id)===e.overlayId&&e.isCloseWhenClickInside&&e.hasAbilityToCloseOnBackdropClick&&e.close()}))},t.prototype.hideAuto=function(){var e=this,t=parseInt((0,a.getClassProperty)(this.overlay,"--auto-hide","0"));t&&(this.autoHide=setTimeout((function(){e.close()}),t))},t.prototype.checkTimer=function(){this.autoHide&&(clearTimeout(this.autoHide),this.autoHide=null)},t.prototype.buildBackdrop=function(){var e=this,t=this.overlay.classList.value.split(" "),n=parseInt(window.getComputedStyle(this.overlay).getPropertyValue("z-index")),r=this.overlay.getAttribute("data-hs-overlay-backdrop-container")||!1,i=document.createElement("div"),o="".concat(this.backdropClasses," ").concat(this.backdropExtraClasses),s="static"!==(0,a.getClassProperty)(this.overlay,"--overlay-backdrop","true"),c="false"===(0,a.getClassProperty)(this.overlay,"--overlay-backdrop","true");i.id="".concat(this.overlay.id,"-backdrop"),"style"in i&&(i.style.zIndex="".concat(n-1));for(var l=0,u=t;l<u.length;l++){var h=u[l];(h.startsWith("hs-overlay-backdrop-open:")||h.includes(":hs-overlay-backdrop-open:"))&&(o+=" ".concat(h))}c||(r&&((i=document.querySelector(r).cloneNode(!0)).classList.remove("hidden"),o="".concat(i.classList.toString()),i.classList.value=""),s&&i.addEventListener("click",(function(){return e.close()}),!0),i.setAttribute("data-hs-overlay-backdrop-template",""),document.body.appendChild(i),setTimeout((function(){i.classList.value=o})))},t.prototype.destroyBackdrop=function(){var e=document.querySelector("#".concat(this.overlay.id,"-backdrop"));e&&(this.openNextOverlay&&(e.style.transitionDuration="".concat(1.8*parseFloat(window.getComputedStyle(e).transitionDuration.replace(/[^\d.-]/g,"")),"s")),e.classList.add("opacity-0"),(0,a.afterTransition)(e,(function(){e.remove()})))},t.prototype.focusElement=function(){var e=this.overlay.querySelector("[autofocus]");if(!e)return!1;e.focus()},t.prototype.open=function(){var e=this;if(!this.overlay)return!1;var t=document.querySelectorAll(".hs-overlay.open"),n=window.$hsOverlayCollection.find((function(e){return Array.from(t).includes(e.element.overlay)&&!e.element.isLayoutAffect})),r="true"!==(0,a.getClassProperty)(this.overlay,"--body-scroll","false");if(this.isClosePrev&&n)return this.openNextOverlay=!0,n.element.close().then((function(){e.open(),e.openNextOverlay=!1}));r&&(document.body.style.overflow="hidden"),this.buildBackdrop(),this.checkTimer(),this.hideAuto(),this.overlay.classList.remove(this.hiddenClass),this.overlay.setAttribute("aria-overlay","true"),this.overlay.setAttribute("tabindex","-1"),setTimeout((function(){if(e.overlay.classList.contains("opened"))return!1;e.overlay.classList.add("open","opened"),e.isLayoutAffect&&document.body.classList.add("hs-overlay-body-open"),e.fireEvent("open",e.el),(0,a.dispatch)("open.hs.overlay",e.el,e.el),e.hasAutofocus&&e.focusElement()}),50)},t.prototype.close=function(e){var t=this;void 0===e&&(e=!1),this.isLayoutAffect&&document.body.classList.remove("hs-overlay-body-open");var n=function(e){if(t.overlay.classList.contains("open"))return!1;t.overlay.classList.add(t.hiddenClass),t.destroyBackdrop(),t.fireEvent("close",t.el),(0,a.dispatch)("close.hs.overlay",t.el,t.el),document.querySelector(".hs-overlay.opened")||(document.body.style.overflow=""),e(t.overlay)};return new Promise((function(r){if(!t.overlay)return!1;t.overlay.classList.remove("open","opened"),t.overlay.removeAttribute("aria-overlay"),t.overlay.removeAttribute("tabindex"),e?n(r):(0,a.afterTransition)(t.overlay,(function(){n(r)}))}))},t.getInstance=function(e,t){var n=window.$hsOverlayCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)||t.element.overlay===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.autoInit=function(){window.$hsOverlayCollection||(window.$hsOverlayCollection=[]),document.querySelectorAll("[data-hs-overlay]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsOverlayCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)})),window.$hsOverlayCollection&&document.addEventListener("keydown",(function(e){return t.accessibility(e)}))},t.open=function(e){var t=window.$hsOverlayCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)||t.element.overlay===("string"==typeof e?document.querySelector(e):e)}));t&&t.element.overlay.classList.contains(t.element.hiddenClass)&&t.element.open()},t.close=function(e){var t=window.$hsOverlayCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)||t.element.overlay===("string"==typeof e?document.querySelector(e):e)}));t&&!t.element.overlay.classList.contains(t.element.hiddenClass)&&t.element.close()},t.setOpened=function(e,t){document.body.clientWidth>=e?(document.body.classList.add("hs-overlay-body-open"),t.element.overlay.classList.add("opened")):t.element.close(!0)},t.accessibility=function(e){var t,n,r=window.$hsOverlayCollection.filter((function(e){return e.element.overlay.classList.contains("open")})),i=r[r.length-1],o=null===(n=null===(t=null==i?void 0:i.element)||void 0===t?void 0:t.overlay)||void 0===n?void 0:n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),s=[];(null==o?void 0:o.length)&&o.forEach((function(e){(0,a.isParentOrElementHidden)(e)||s.push(e)}));var c=i&&!e.metaKey;if(c&&!i.element.isTabAccessibilityLimited&&"Tab"===e.code)return!1;c&&s.length&&"Tab"===e.code&&(e.preventDefault(),this.onTab(i,s)),c&&"Escape"===e.code&&(e.preventDefault(),this.onEscape(i))},t.onEscape=function(e){e&&e.element.hasAbilityToCloseOnBackdropClick&&e.element.close()},t.onTab=function(e,t){if(!t.length)return!1;var n=e.element.overlay.querySelector(":focus"),r=Array.from(t).indexOf(n);r>-1?t[(r+1)%t.length].focus():t[0].focus()},t.on=function(e,t,n){var r=window.$hsOverlayCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)||e.element.overlay===("string"==typeof t?document.querySelector(t):t)}));r&&(r.element.events[e]=n)},t}(s(n(737)).default);window.addEventListener("load",(function(){l.autoInit()})),window.addEventListener("resize",(function(){!function(){if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find((function(e){return e.element.autoClose})))return!1;window.$hsOverlayCollection.filter((function(e){return e.element.autoClose})).forEach((function(e){document.body.clientWidth>=e.element.autoClose&&e.element.close(!0)}))}(),function(){if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find((function(e){return e.element.openedBreakpoint})))return!1;window.$hsOverlayCollection.filter((function(e){return e.element.openedBreakpoint})).forEach((function(e){l.setOpened(e.element.openedBreakpoint,e)}))}()})),"undefined"!=typeof window&&(window.HSOverlay=l),t.default=l},659:function(e,t,n){
/*
         * HSPinInput
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-pin-input"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.items=r.el.querySelectorAll("[data-hs-pin-input-item]"),r.currentItem=null,r.currentValue=new Array(r.items.length).fill(""),r.placeholders=[],r.availableCharsRE=new RegExp((null==a?void 0:a.availableCharsRE)||"^[a-zA-Z0-9]+$"),r.init(),r}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsPinInputCollection,this),this.items.length&&this.build()},t.prototype.build=function(){this.buildInputItems()},t.prototype.buildInputItems=function(){var e=this;this.items.forEach((function(t,n){e.placeholders.push(t.getAttribute("placeholder")||""),t.hasAttribute("autofocus")&&e.onFocusIn(n),t.addEventListener("input",(function(t){return e.onInput(t,n)})),t.addEventListener("paste",(function(t){return e.onPaste(t)})),t.addEventListener("keydown",(function(t){return e.onKeydown(t,n)})),t.addEventListener("focusin",(function(){return e.onFocusIn(n)})),t.addEventListener("focusout",(function(){return e.onFocusOut(n)}))}))},t.prototype.checkIfNumber=function(e){return e.match(this.availableCharsRE)},t.prototype.autoFillAll=function(e){var t=this;Array.from(e).forEach((function(e,n){if(!(null==t?void 0:t.items[n]))return!1;t.items[n].value=e,t.items[n].dispatchEvent(new Event("input",{bubbles:!0}))}))},t.prototype.setCurrentValue=function(){this.currentValue=Array.from(this.items).map((function(e){return e.value}))},t.prototype.toggleCompleted=function(){this.currentValue.includes("")?this.el.classList.remove("active"):this.el.classList.add("active")},t.prototype.onInput=function(e,t){var n=e.target.value;if(this.currentItem=e.target,this.currentItem.value="",this.currentItem.value=n[n.length-1],!this.checkIfNumber(this.currentItem.value))return this.currentItem.value=this.currentValue[t]||"",!1;if(this.setCurrentValue(),this.currentItem.value){if(t<this.items.length-1&&this.items[t+1].focus(),!this.currentValue.includes("")){var r={currentValue:this.currentValue};this.fireEvent("completed",r),(0,a.dispatch)("completed.hs.pinInput",this.el,r)}this.toggleCompleted()}else t>0&&this.items[t-1].focus()},t.prototype.onKeydown=function(e,t){"Backspace"===e.key&&t>0&&(""===this.items[t].value?(this.items[t-1].value="",this.items[t-1].focus()):this.items[t].value=""),this.setCurrentValue(),this.toggleCompleted()},t.prototype.onFocusIn=function(e){this.items[e].setAttribute("placeholder","")},t.prototype.onFocusOut=function(e){this.items[e].setAttribute("placeholder",this.placeholders[e])},t.prototype.onPaste=function(e){var t=this;e.preventDefault(),this.items.forEach((function(n){document.activeElement===n&&t.autoFillAll(e.clipboardData.getData("text"))}))},t.getInstance=function(e,t){var n=window.$hsPinInputCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsPinInputCollection||(window.$hsPinInputCollection=[]),document.querySelectorAll("[data-hs-pin-input]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsPinInputCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit()})),"undefined"!=typeof window&&(window.HSPinInput=c),t.default=c},139:function(e,t,n){
/*
         * HSRemoveElement
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-remove-element-options"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.removeTargetId=r.el.getAttribute("data-hs-remove-element"),r.removeTarget=document.querySelector(r.removeTargetId),r.removeTargetAnimationClass=(null==a?void 0:a.removeTargetAnimationClass)||"hs-removing",r.removeTarget&&r.init(),r}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsRemoveElementCollection,this),this.el.addEventListener("click",(function(){return e.remove()}))},t.prototype.remove=function(){var e=this;if(!this.removeTarget)return!1;this.removeTarget.classList.add(this.removeTargetAnimationClass),(0,a.afterTransition)(this.removeTarget,(function(){e.removeTarget.remove()}))},t.autoInit=function(){window.$hsRemoveElementCollection||(window.$hsRemoveElementCollection=[]),document.querySelectorAll("[data-hs-remove-element]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsRemoveElementCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit()})),"undefined"!=typeof window&&(window.HSRemoveElement=c),t.default=c},591:function(e,t,n){
/*
         * HSScrollspy
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(969),a=function(e){function t(t,n){void 0===n&&(n={});var r=e.call(this,t,n)||this;return r.activeSection=null,r.contentId=r.el.getAttribute("data-hs-scrollspy"),r.content=document.querySelector(r.contentId),r.links=r.el.querySelectorAll("[href]"),r.sections=[],r.scrollableId=r.el.getAttribute("data-hs-scrollspy-scrollable-parent"),r.scrollable=r.scrollableId?document.querySelector(r.scrollableId):document,r.init(),r}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsScrollspyCollection,this),this.links.forEach((function(t){e.sections.push(e.scrollable.querySelector(t.getAttribute("href")))})),Array.from(this.sections).forEach((function(t){if(!t.getAttribute("id"))return!1;e.scrollable.addEventListener("scroll",(function(n){return e.update(n,t)}))})),this.links.forEach((function(t){t.addEventListener("click",(function(n){if(n.preventDefault(),"javascript:;"===t.getAttribute("href"))return!1;e.scrollTo(t)}))}))},t.prototype.update=function(e,t){var n=parseInt((0,s.getClassProperty)(this.el,"--scrollspy-offset","0")),r=parseInt((0,s.getClassProperty)(t,"--scrollspy-offset"))||n,i=e.target===document?0:parseInt(String(e.target.getBoundingClientRect().top)),o=parseInt(String(t.getBoundingClientRect().top))-r-i,a=t.offsetHeight;if(o<=0&&o+a>0){if(this.activeSection===t)return!1;this.links.forEach((function(e){e.classList.remove("active")}));var c=this.el.querySelector('[href="#'.concat(t.getAttribute("id"),'"]'));if(c){c.classList.add("active");var l=c.closest("[data-hs-scrollspy-group]");if(l){var u=l.querySelector("[href]");u&&u.classList.add("active")}}this.activeSection=t}},t.prototype.scrollTo=function(e){var t=e.getAttribute("href"),n=document.querySelector(t),r=parseInt((0,s.getClassProperty)(this.el,"--scrollspy-offset","0")),i=parseInt((0,s.getClassProperty)(n,"--scrollspy-offset"))||r,o=this.scrollable===document?0:this.scrollable.offsetTop,a=n.offsetTop-i-o,c=this.scrollable===document?window:this.scrollable,l=function(){window.history.replaceState(null,null,e.getAttribute("href")),"scrollTo"in c&&c.scrollTo({top:a,left:0,behavior:"smooth"})},u=this.fireEvent("beforeScroll",this.el);(0,s.dispatch)("beforeScroll.hs.scrollspy",this.el,this.el),u instanceof Promise?u.then((function(){return l()})):l()},t.getInstance=function(e,t){void 0===t&&(t=!1);var n=window.$hsScrollspyCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.autoInit=function(){window.$hsScrollspyCollection||(window.$hsScrollspyCollection=[]),document.querySelectorAll("[data-hs-scrollspy]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsScrollspyCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(o(n(737)).default);window.addEventListener("load",(function(){a.autoInit()})),"undefined"!=typeof window&&(window.HSScrollspy=a),t.default=a},961:function(e,t,n){
/*
         * HSTogglePassword
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!((i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(969),u=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-search-by-json"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.jsonUrl=a.jsonUrl,r.minChars=a.minChars||3,r.dropdownTemplate=a.dropdownTemplate||"<div></div>",r.dropdownClasses=a.dropdownClasses||"absolute top-full z-[1] w-full bg-white border border-gray-200 rounded-md hidden mt-2",r.dropdownItemTemplate=a.dropdownItemTemplate||"<div></div>",r.dropdownItemTemplatesByType=a.dropdownItemTemplatesByType||null,r.dropdownItemClasses=a.dropdownItemClasses||"py-2 px-4 w-full cursor-pointer text-sm hover:bg-gray-300 hover:text-black",r.highlightedTextTagName=a.highlightedTextTagName||"u",r.highlightedTextClasses=a.highlightedTextClasses||"bg-green-200",r.jsonUrl&&r.fetchData().then((function(){return r.init()})),r}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsSearchByJsonCollection,this),this.buildDropdown(),this.el.addEventListener("input",(0,l.debounce)((function(t){e.val=t.target.value,e.val.length>e.minChars?e.searchData(e.val):e.result=[],e.result.length?e.dropdown.classList.remove("hidden"):e.dropdown.classList.add("hidden"),e.buildItems()})))},t.prototype.fetchData=function(){return s(this,void 0,void 0,(function(){var e=this;return a(this,(function(t){switch(t.label){case 0:return[4,fetch(this.jsonUrl).then((function(e){return e.json()})).then((function(t){return e.json=t}))];case 1:return t.sent(),[2]}}))}))},t.prototype.searchData=function(e){this.result=this.json.filter((function(t){var n=e.toLowerCase(),r=t.title.toLowerCase(),i=t.description.toLowerCase();return r.includes(n)||i.includes(n)}))},t.prototype.buildDropdown=function(){this.dropdown=(0,l.htmlToElement)(this.dropdownTemplate),this.dropdownClasses&&(0,l.classToClassList)(this.dropdownClasses,this.dropdown),this.el.after(this.dropdown)},t.prototype.buildItems=function(){var e=this;this.dropdown.innerHTML="",this.result.forEach((function(t){var n=(0,l.htmlToElement)('<a class="block" href="'.concat(t.url,'" target="_blank"></a>'));n.append(e.itemTemplate(t)),e.dropdown.append(n)}))},t.prototype.itemTemplate=function(e){var t=new RegExp(this.val,"gi"),n=e.title.replace(t,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),r=e.description.replace(t,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),i=this.dropdownItemTemplatesByType?this.dropdownItemTemplatesByType.find((function(t){return t.type===e.type})):null,o=i?(0,l.htmlToElement)(i.markup):(0,l.htmlToElement)(this.dropdownItemTemplate);this.dropdownItemClasses&&(0,l.classToClassList)(this.dropdownItemClasses,o);var s=o.querySelector("[data-title]");s?s.append((0,l.htmlToElement)("<span>".concat(n,"</span>"))):o.append((0,l.htmlToElement)("<span>".concat(n,"</span>")));var a=o.querySelector("[data-description]");if(a)a.append((0,l.htmlToElement)("<span>".concat(r,"</span>")));else if(!i){var c=(0,l.htmlToElement)("<br>");o.append(c),o.append((0,l.htmlToElement)("<span>".concat(r,"</span>")))}return o},t.getInstance=function(e){var t=window.$hsSearchByJsonCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return t?t.element:null},t.autoInit=function(){window.$hsSearchByJsonCollection||(window.$hsSearchByJsonCollection=[]),document.querySelectorAll("[data-hs-search-by-json]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsSearchByJsonCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(c(n(737)).default);window.addEventListener("load",(function(){u.autoInit()})),"undefined"!=typeof window&&(window.HSSearchByJson=u),t.default=u},233:function(e,t,n){
/*
         * HSSelect
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(969),l=a(n(737)),u=n(190),h=function(e){function t(t,n){var r,i=e.call(this,t,n)||this,s=t.getAttribute("data-hs-select"),a=s?JSON.parse(s):{},c=o(o({},a),n);return i.value=(null==c?void 0:c.value)||i.el.value||null,i.placeholder=(null==c?void 0:c.placeholder)||"Select...",i.hasSearch=(null==c?void 0:c.hasSearch)||!1,i.preventSearchFocus=(null==c?void 0:c.preventSearchFocus)||!1,i.mode=(null==c?void 0:c.mode)||"default",i.viewport=void 0!==(null==c?void 0:c.viewport)?document.querySelector(null==c?void 0:c.viewport):null,i.isOpened=Boolean(null==c?void 0:c.isOpened)||!1,i.isMultiple=i.el.hasAttribute("multiple")||!1,i.isDisabled=i.el.hasAttribute("disabled")||!1,i.selectedItems=[],i.wrapperClasses=(null==c?void 0:c.wrapperClasses)||null,i.toggleTag=(null==c?void 0:c.toggleTag)||null,i.toggleClasses=(null==c?void 0:c.toggleClasses)||null,i.toggleCountText=(null==c?void 0:c.toggleCountText)||null,i.toggleCountTextMinItems=(null==c?void 0:c.toggleCountTextMinItems)||1,i.tagsItemTemplate=(null==c?void 0:c.tagsItemTemplate)||null,i.tagsItemClasses=(null==c?void 0:c.tagsItemClasses)||null,i.tagsInputClasses=(null==c?void 0:c.tagsInputClasses)||null,i.dropdownTag=(null==c?void 0:c.dropdownTag)||null,i.dropdownClasses=(null==c?void 0:c.dropdownClasses)||null,i.dropdownDirectionClasses=(null==c?void 0:c.dropdownDirectionClasses)||null,i.dropdownSpace=(null==c?void 0:c.dropdownSpace)||10,i.searchWrapperTemplate=(null==c?void 0:c.searchWrapperTemplate)||null,i.searchWrapperClasses=(null==c?void 0:c.searchWrapperClasses)||"bg-white p-2 sticky top-0",i.searchClasses=(null==c?void 0:c.searchClasses)||"block w-[calc(100%-2rem)] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 py-2 px-3 my-2 mx-4",i.searchPlaceholder=(null==c?void 0:c.searchPlaceholder)||"Search...",i.searchNoResultText=(null==c?void 0:c.searchNoResultText)||"No results found",i.searchNoResultClasses=(null==c?void 0:c.searchNoResultClasses)||"px-4 text-sm text-gray-800 dark:text-neutral-200",i.optionTemplate=(null==c?void 0:c.optionTemplate)||null,i.optionTag=(null==c?void 0:c.optionTag)||null,i.optionClasses=(null==c?void 0:c.optionClasses)||null,i.extraMarkup=(null==c?void 0:c.extraMarkup)||null,i.descriptionClasses=(null==c?void 0:c.descriptionClasses)||null,i.iconClasses=(null==c?void 0:c.iconClasses)||null,i.isAddTagOnEnter=null===(r=null==c?void 0:c.isAddTagOnEnter)||void 0===r||r,i.animationInProcess=!1,i.selectOptions=[],i.tagsInputHelper=null,i.init(),i}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsSelectCollection,this),this.build()},t.prototype.build=function(){var e=this;if(this.el.style.display="none",this.el.children&&Array.from(this.el.children).filter((function(e){return e.value&&""!==e.value})).forEach((function(t){var n=t.getAttribute("data-hs-select-option");e.selectOptions=s(s([],e.selectOptions,!0),[{title:t.textContent,val:t.value,options:"undefined"!==n?JSON.parse(n):null}],!1)})),this.isMultiple){var t=Array.from(this.el.options).filter((function(e){return e.selected}));if(t){var n=[];t.forEach((function(e){n.push(e.value)})),this.value=n}}this.buildWrapper(),"tags"===this.mode?this.buildTags():this.buildToggle(),this.buildDropdown(),this.extraMarkup&&this.buildExtraMarkup()},t.prototype.buildWrapper=function(){var e=this;this.wrapper=document.createElement("div"),this.wrapper.classList.add("hs-select","relative"),"tags"===this.mode&&this.wrapper.addEventListener("click",(function(t){t.target.closest("[data-hs-select-dropdown]")||t.target.closest("[data-tag-value]")||e.tagsInput.focus()})),this.wrapperClasses&&(0,c.classToClassList)(this.wrapperClasses,this.wrapper),this.el.before(this.wrapper),this.wrapper.append(this.el)},t.prototype.buildExtraMarkup=function(){var e=this,t=function(t){e.wrapper.append((0,c.htmlToElement)(t))};Array.isArray(this.extraMarkup)?this.extraMarkup.forEach((function(e){return t(e)})):t(this.extraMarkup)},t.prototype.buildToggle=function(){var e,t,n,r=this;this.toggleTextWrapper=document.createElement("span"),this.toggleTextWrapper.classList.add("truncate"),this.toggle=(0,c.htmlToElement)(this.toggleTag||"<div></div>"),t=this.toggle.querySelector("[data-icon]"),n=this.toggle.querySelector("[data-title]"),!this.isMultiple&&t&&this.setToggleIcon(),!this.isMultiple&&n&&this.setToggleTitle(),this.isMultiple?this.toggleTextWrapper.innerHTML=this.value.length?this.stringFromValue():this.placeholder:this.toggleTextWrapper.innerHTML=(null===(e=this.getItemByValue(this.value))||void 0===e?void 0:e.title)||this.placeholder,n||this.toggle.append(this.toggleTextWrapper),this.toggleClasses&&(0,c.classToClassList)(this.toggleClasses,this.toggle),this.isDisabled&&this.toggle.classList.add("disabled"),this.wrapper&&this.wrapper.append(this.toggle),this.toggle.addEventListener("click",(function(){if(r.isDisabled)return!1;r.isOpened?r.close():r.open()}))},t.prototype.setToggleIcon=function(){var e,t,n=this.toggle.querySelector("[data-icon]");if(n.innerHTML="",n){var r=(0,c.htmlToElement)((null===(t=null===(e=this.getItemByValue(this.value))||void 0===e?void 0:e.options)||void 0===t?void 0:t.icon)||"");n.append(r),r?n.classList.remove("hidden"):n.classList.add("hidden")}},t.prototype.setToggleTitle=function(){var e,t=this.toggle.querySelector("[data-title]");if(t.classList.add("truncate"),t.innerHTML="",t){var n=(null===(e=this.getItemByValue(this.value))||void 0===e?void 0:e.title)||this.placeholder;t.innerHTML=n,this.toggle.append(t)}},t.prototype.buildTags=function(){this.buildTagsInput(),this.setTagsItems()},t.prototype.reassignTagsInputPlaceholder=function(e){this.tagsInput.placeholder=e,this.tagsInputHelper.innerHTML=e,this.calculateInputWidth()},t.prototype.buildTagsItem=function(e){var t,n,r,i,o,s,a,l=this,u=this.getItemByValue(e),h=document.createElement("div");if(h.setAttribute("data-tag-value",e),this.tagsItemClasses&&(0,c.classToClassList)(this.tagsItemClasses,h),this.tagsItemTemplate&&(i=(0,c.htmlToElement)(this.tagsItemTemplate),h.append(i)),null===(t=null==u?void 0:u.options)||void 0===t?void 0:t.icon){var d=(0,c.htmlToElement)(null===(n=null==u?void 0:u.options)||void 0===n?void 0:n.icon);(a=i?i.querySelector("[data-icon]"):document.createElement("span")).append(d),i||h.append(a)}i&&i.querySelector("[data-icon]")&&!(null===(r=null==u?void 0:u.options)||void 0===r?void 0:r.icon)&&i.querySelector("[data-icon]").classList.add("hidden"),(o=i?i.querySelector("[data-title]"):document.createElement("span")).textContent=u.title||"",i||h.append(o),i?s=i.querySelector("[data-remove]"):((s=document.createElement("span")).textContent="X",h.append(s)),s.addEventListener("click",(function(){l.value=l.value.filter((function(t){return t!==e})),l.selectedItems=l.selectedItems.filter((function(t){return t!==e})),l.value.length||l.reassignTagsInputPlaceholder(l.placeholder),l.unselectMultipleItems(),l.selectMultipleItems(),h.remove()})),this.wrapper.append(h)},t.prototype.getItemByValue=function(e){return this.selectOptions.find((function(t){return t.val===e}))},t.prototype.setTagsItems=function(){var e=this;this.value&&this.value.forEach((function(t){e.selectedItems.includes(t)||e.buildTagsItem(t),e.selectedItems=e.selectedItems.includes(t)?e.selectedItems:s(s([],e.selectedItems,!0),[t],!1)}))},t.prototype.buildTagsInput=function(){var e=this;this.tagsInput=document.createElement("input"),this.tagsInputClasses&&(0,c.classToClassList)(this.tagsInputClasses,this.tagsInput),this.tagsInput.addEventListener("focus",(function(){return e.open()})),this.tagsInput.addEventListener("input",(function(){return e.calculateInputWidth()})),this.tagsInput.addEventListener("input",(0,c.debounce)((function(t){return e.searchOptions(t.target.value)}))),this.tagsInput.addEventListener("keydown",(function(t){if("Enter"===t.key&&e.isAddTagOnEnter){var n=t.target.value;if(e.selectOptions.find((function(e){return e.val===n})))return!1;e.addSelectOption(n,n),e.buildOption(n,n),e.dropdown.querySelector('[data-value="'.concat(n,'"]')).click(),e.resetTagsInputField()}})),this.wrapper.append(this.tagsInput),setTimeout((function(){e.adjustInputWidth(),e.reassignTagsInputPlaceholder(e.value.length?"":e.placeholder)}))},t.prototype.buildDropdown=function(){var e=this;this.dropdown=(0,c.htmlToElement)(this.dropdownTag||"<div></div>"),this.dropdown.setAttribute("data-hs-select-dropdown",""),this.dropdown.classList.add("absolute","top-full"),this.isOpened||this.dropdown.classList.add("hidden"),this.dropdownClasses&&(0,c.classToClassList)(this.dropdownClasses,this.dropdown),this.wrapper&&this.wrapper.append(this.dropdown),this.dropdown&&this.hasSearch&&this.buildSearch(),this.selectOptions&&this.selectOptions.forEach((function(t,n){return e.buildOption(t.title,t.val,t.options,"".concat(n))}))},t.prototype.buildSearch=function(){var e,t=this;this.searchWrapper=(0,c.htmlToElement)(this.searchWrapperTemplate||"<div></div>"),this.searchWrapperClasses&&(0,c.classToClassList)(this.searchWrapperClasses,this.searchWrapper),e=this.searchWrapper.querySelector("[data-input]"),this.search=(0,c.htmlToElement)('<input type="text" />'),this.search.placeholder=this.searchPlaceholder,this.searchClasses&&(0,c.classToClassList)(this.searchClasses,this.search),this.search.addEventListener("input",(0,c.debounce)((function(e){return t.searchOptions(e.target.value)}))),e?e.append(this.search):this.searchWrapper.append(this.search),this.dropdown.append(this.searchWrapper)},t.prototype.buildOption=function(e,t,n,r){var i=this;void 0===r&&(r="1");var o=null,s=(0,c.htmlToElement)(this.optionTag||"<div></div>");if(s.setAttribute("data-value",t),s.setAttribute("data-title-value",e),s.setAttribute("tabIndex",r),s.classList.add("cursor-pointer"),this.optionTemplate&&(o=(0,c.htmlToElement)(this.optionTemplate),s.append(o)),o?o.querySelector("[data-title]").textContent=e||"":s.textContent=e||"",n){if(n.icon){var a=(0,c.htmlToElement)(n.icon);if(a.classList.add("mw-full"),o)o.querySelector("[data-icon]").append(a);else{var l=(0,c.htmlToElement)("<div></div>");this.iconClasses&&(0,c.classToClassList)(this.iconClasses,l),l.append(a),s.append(l)}}if(n.description)if(o)o.querySelector("[data-description]").append(n.description);else{var u=(0,c.htmlToElement)("<div></div>");u.textContent=n.description,this.descriptionClasses&&(0,c.classToClassList)(this.descriptionClasses,u),s.append(u)}}o&&o.querySelector("[data-icon]")&&!n&&!(null==n?void 0:n.icon)&&o.querySelector("[data-icon]").classList.add("hidden"),this.value&&(this.isMultiple?this.value.includes(t):this.value===t)&&s.classList.add("selected"),s.addEventListener("click",(function(){return i.onSelectOption(t)})),this.optionClasses&&(0,c.classToClassList)(this.optionClasses,s),this.dropdown&&this.dropdown.append(s)},t.prototype.destroyOption=function(e){var t=this.dropdown.querySelector('[data-value="'.concat(e,'"]'));if(!t)return!1;t.remove()},t.prototype.buildOriginalOption=function(e,t,n){var r=(0,c.htmlToElement)("<option></option>");r.setAttribute("value",t),r.setAttribute("data-hs-select-option",JSON.stringify(n)),r.innerText=e,this.el.append(r)},t.prototype.destroyOriginalOption=function(e){var t=this.el.querySelector('[value="'.concat(e,'"]'));if(!t)return!1;t.remove()},t.prototype.buildTagsInputHelper=function(){this.tagsInputHelper=document.createElement("span"),this.tagsInputHelper.style.fontSize=window.getComputedStyle(this.tagsInput).fontSize,this.tagsInputHelper.style.fontFamily=window.getComputedStyle(this.tagsInput).fontFamily,this.tagsInputHelper.style.fontWeight=window.getComputedStyle(this.tagsInput).fontWeight,this.tagsInputHelper.style.letterSpacing=window.getComputedStyle(this.tagsInput).letterSpacing,this.tagsInputHelper.style.visibility="hidden",this.tagsInputHelper.style.whiteSpace="pre",this.tagsInputHelper.style.position="absolute",this.wrapper.appendChild(this.tagsInputHelper)},t.prototype.calculateInputWidth=function(){this.tagsInputHelper.textContent=this.tagsInput.value||this.tagsInput.placeholder;var e=parseInt(window.getComputedStyle(this.tagsInput).paddingLeft)+parseInt(window.getComputedStyle(this.tagsInput).paddingRight),t=parseInt(window.getComputedStyle(this.tagsInput).borderLeftWidth)+parseInt(window.getComputedStyle(this.tagsInput).borderRightWidth),n=this.tagsInputHelper.offsetWidth+e+t,r=this.wrapper.offsetWidth-(parseInt(window.getComputedStyle(this.wrapper).paddingLeft)+parseInt(window.getComputedStyle(this.wrapper).paddingRight));this.tagsInput.style.width="".concat(Math.min(n,r)+2,"px")},t.prototype.adjustInputWidth=function(){this.buildTagsInputHelper(),this.calculateInputWidth()},t.prototype.onSelectOption=function(e){var t=this;if(this.clearSelections(),this.isMultiple?(this.value=this.value.includes(e)?Array.from(this.value).filter((function(t){return t!==e})):s(s([],Array.from(this.value),!0),[e],!1),this.selectMultipleItems(),this.setNewValue()):(this.value=e,this.selectSingleItem(),this.setNewValue()),this.fireEvent("change",this.value),(0,c.dispatch)("change.hs.select",this.el,this.value),"tags"===this.mode){var n=this.selectedItems.filter((function(e){return!t.value.includes(e)}));n.length&&n.forEach((function(e){t.selectedItems=t.selectedItems.filter((function(t){return t!==e})),t.wrapper.querySelector('[data-tag-value="'.concat(e,'"]')).remove()})),this.resetTagsInputField()}this.isMultiple||(this.toggle.querySelector("[data-icon]")&&this.setToggleIcon(),this.toggle.querySelector("[data-title]")&&this.setToggleTitle(),this.close()),this.value.length||"tags"!==this.mode||this.reassignTagsInputPlaceholder(this.placeholder),this.isOpened&&"tags"===this.mode&&this.tagsInput&&this.tagsInput.focus(),this.triggerChangeEventForNativeSelect()},t.prototype.triggerChangeEventForNativeSelect=function(){this.el.value="".concat(this.value);var e=new Event("change",{bubbles:!0});this.el.dispatchEvent(e)},t.prototype.addSelectOption=function(e,t,n){this.selectOptions=s(s([],this.selectOptions,!0),[{title:e,val:t,options:n}],!1)},t.prototype.removeSelectOption=function(e){if(!this.selectOptions.some((function(t){return t.val===e})))return!1;this.selectOptions=this.selectOptions.filter((function(t){return t.val!==e}))},t.prototype.resetTagsInputField=function(){this.tagsInput.value="",this.reassignTagsInputPlaceholder(""),this.searchOptions("")},t.prototype.clearSelections=function(){Array.from(this.dropdown.children).forEach((function(e){e.classList.contains("selected")&&e.classList.remove("selected")})),Array.from(this.el.children).forEach((function(e){e.selected&&(e.selected=!1)}))},t.prototype.setNewValue=function(){"tags"===this.mode?this.setTagsItems():this.value.length?this.toggleTextWrapper.innerHTML=this.stringFromValue():this.toggleTextWrapper.innerHTML=this.placeholder},t.prototype.stringFromValue=function(){var e=this,t=[];return this.selectOptions.forEach((function(n){e.isMultiple?e.value.includes(n.val)&&t.push(n.title):e.value===n.val&&t.push(n.title)})),this.toggleCountText&&""!==this.toggleCountText&&t.length>=this.toggleCountTextMinItems?"".concat(t.length," ").concat(this.toggleCountText):t.join(", ")},t.prototype.selectSingleItem=function(){var e=this;Array.from(this.el.children).find((function(t){return e.value===t.value})).selected=!0,Array.from(this.dropdown.children).find((function(t){return e.value===t.getAttribute("data-value")})).classList.add("selected")},t.prototype.selectMultipleItems=function(){var e=this;Array.from(this.dropdown.children).filter((function(t){return e.value.includes(t.getAttribute("data-value"))})).forEach((function(e){return e.classList.add("selected")})),Array.from(this.el.children).filter((function(t){return e.value.includes(t.value)})).forEach((function(e){return e.selected=!0}))},t.prototype.unselectMultipleItems=function(){Array.from(this.dropdown.children).forEach((function(e){return e.classList.remove("selected")})),Array.from(this.el.children).forEach((function(e){return e.selected=!1}))},t.prototype.searchOptions=function(e){this.searchNoResult&&(this.searchNoResult.remove(),this.searchNoResult=null),this.searchNoResult=(0,c.htmlToElement)("<span></span>"),this.searchNoResult.innerText=this.searchNoResultText,(0,c.classToClassList)(this.searchNoResultClasses,this.searchNoResult);var t=this.dropdown.querySelectorAll("[data-value]"),n=!1;t.forEach((function(t){t.getAttribute("data-title-value").toLocaleLowerCase().includes(e.toLocaleLowerCase())?(t.classList.remove("hidden"),n=!0):t.classList.add("hidden")})),n||this.dropdown.append(this.searchNoResult)},t.prototype.eraseToggleIcon=function(){var e=this.toggle.querySelector("[data-icon]");e&&(e.innerHTML=null,e.classList.add("hidden"))},t.prototype.eraseToggleTitle=function(){var e=this.toggle.querySelector("[data-title]");e?e.innerHTML=this.placeholder:this.toggleTextWrapper.innerHTML=this.placeholder},t.prototype.destroy=function(){var e=this.el.parentElement.parentElement;this.el.classList.remove("hidden"),this.el.style.display="",e.prepend(this.el),e.querySelector(".hs-select").remove(),this.wrapper=null},t.prototype.open=function(){var e=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.dropdown.classList.remove("hidden"),this.recalculateDirection(),setTimeout((function(){e.wrapper.classList.add("active"),e.dropdown.classList.add("opened"),e.hasSearch&&!e.preventSearchFocus&&e.search.focus(),e.animationInProcess=!1})),this.isOpened=!0},t.prototype.close=function(){var e,t,n,r=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.wrapper.classList.remove("active"),this.dropdown.classList.remove("opened","bottom-full","top-full"),(null===(e=this.dropdownDirectionClasses)||void 0===e?void 0:e.bottom)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),(null===(t=this.dropdownDirectionClasses)||void 0===t?void 0:t.top)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.style.marginBottom="",(0,c.afterTransition)(this.dropdown,(function(){r.dropdown.classList.add("hidden"),r.hasSearch&&(r.search.value="",r.search.dispatchEvent(new Event("input",{bubbles:!0})),r.search.blur()),r.animationInProcess=!1})),null===(n=this.dropdown.querySelector(".hs-select-option-highlighted"))||void 0===n||n.classList.remove("hs-select-option-highlighted"),this.isOpened=!1},t.prototype.addOption=function(e){var t=this,n="".concat(this.selectOptions.length),r=function(e){var r=e.title,i=e.val,o=e.options;t.selectOptions.some((function(e){return e.val===i}))||(t.addSelectOption(r,i,o),t.buildOption(r,i,o,n),t.buildOriginalOption(r,i,o))};Array.isArray(e)?e.forEach((function(e){r(e)})):r(e)},t.prototype.removeOption=function(e){var t=this,n=function(e){t.selectOptions.some((function(t){return t.val===e}))&&(t.removeSelectOption(e),t.destroyOption(e),t.destroyOriginalOption(e),t.value===e&&(t.value=null,t.eraseToggleTitle(),t.eraseToggleIcon()))};Array.isArray(e)?e.forEach((function(e){n(e)})):n(e)},t.prototype.recalculateDirection=function(){var e,t,n,r;(0,c.isEnoughSpace)(this.dropdown,this.toggle||this.tagsInput,"bottom",this.dropdownSpace,this.viewport)?(this.dropdown.classList.remove("bottom-full"),(null===(e=this.dropdownDirectionClasses)||void 0===e?void 0:e.bottom)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="",this.dropdown.classList.add("top-full"),(null===(t=this.dropdownDirectionClasses)||void 0===t?void 0:t.top)&&this.dropdown.classList.add(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="".concat(this.dropdownSpace,"px")):(this.dropdown.classList.remove("top-full"),(null===(n=this.dropdownDirectionClasses)||void 0===n?void 0:n.top)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.classList.add("bottom-full"),(null===(r=this.dropdownDirectionClasses)||void 0===r?void 0:r.bottom)&&this.dropdown.classList.add(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="".concat(this.dropdownSpace,"px"))},t.getInstance=function(e,t){var n=window.$hsSelectCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsSelectCollection||(window.$hsSelectCollection=[]),document.querySelectorAll("[data-hs-select]:not(.--prevent-on-load-init)").forEach((function(e){if(!window.$hsSelectCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))){var n=e.getAttribute("data-hs-select"),r=n?JSON.parse(n):{};new t(e,r)}})),window.$hsSelectCollection&&(window.addEventListener("click",(function(e){var n=e.target;t.closeCurrentlyOpened(n)})),document.addEventListener("keydown",(function(e){return t.accessibility(e)})))},t.close=function(e){var t=window.$hsSelectCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&t.element.isOpened&&t.element.close()},t.closeCurrentlyOpened=function(e){if(void 0===e&&(e=null),!e.closest(".hs-select.active")){var t=window.$hsSelectCollection.filter((function(e){return e.element.isOpened}))||null;t&&t.forEach((function(e){e.element.close()}))}},t.accessibility=function(e){if(window.$hsSelectCollection.find((function(e){return e.element.isOpened}))&&u.SELECT_ACCESSIBILITY_KEY_SET.includes(e.code)&&!e.metaKey)switch(e.code){case"Escape":e.preventDefault(),this.onEscape();break;case"ArrowUp":e.preventDefault(),this.onArrow();break;case"ArrowDown":e.preventDefault(),this.onArrow(!1);break;case"Tab":e.preventDefault(),this.onTab(e.shiftKey);break;case"Home":e.preventDefault(),this.onStartEnd();break;case"End":e.preventDefault(),this.onStartEnd(!1);break;case"Enter":e.preventDefault(),this.onEnter(e)}},t.onEscape=function(){var e=window.$hsSelectCollection.find((function(e){return e.element.isOpened}));e&&e.element.close()},t.onArrow=function(e){void 0===e&&(e=!0);var t=window.$hsSelectCollection.find((function(e){return e.element.isOpened}));if(t){var n=t.element.dropdown;if(!n)return!1;var r=(e?Array.from(n.querySelectorAll(":scope > *:not(.hidden)")).reverse():Array.from(n.querySelectorAll(":scope > *:not(.hidden)"))).filter((function(e){return!e.classList.contains("disabled")})),i=n.querySelector(".hs-select-option-highlighted");i||r[0].classList.add("hs-select-option-highlighted");var o=r.findIndex((function(e){return e===i}));o+1<r.length&&o++,r[o].focus(),i&&i.classList.remove("hs-select-option-highlighted"),r[o].classList.add("hs-select-option-highlighted")}},t.onTab=function(e){void 0===e&&(e=!0);var t=window.$hsSelectCollection.find((function(e){return e.element.isOpened}));if(t){var n=t.element.dropdown;if(!n)return!1;var r=(e?Array.from(n.querySelectorAll(":scope >  *:not(.hidden)")).reverse():Array.from(n.querySelectorAll(":scope >  *:not(.hidden)"))).filter((function(e){return!e.classList.contains("disabled")})),i=n.querySelector(".hs-select-option-highlighted");i||r[0].classList.add("hs-select-option-highlighted");var o=r.findIndex((function(e){return e===i}));if(!(o+1<r.length))return i&&i.classList.remove("hs-select-option-highlighted"),t.element.close(),t.element.toggle.focus(),!1;r[++o].focus(),i&&i.classList.remove("hs-select-option-highlighted"),r[o].classList.add("hs-select-option-highlighted")}},t.onStartEnd=function(e){void 0===e&&(e=!0);var t=window.$hsSelectCollection.find((function(e){return e.element.isOpened}));if(t){var n=t.element.dropdown;if(!n)return!1;var r=(e?Array.from(n.querySelectorAll(":scope >  *:not(.hidden)")):Array.from(n.querySelectorAll(":scope >  *:not(.hidden)")).reverse()).filter((function(e){return!e.classList.contains("disabled")})),i=n.querySelector(".hs-select-option-highlighted");r.length&&(r[0].focus(),i&&i.classList.remove("hs-select-option-highlighted"),r[0].classList.add("hs-select-option-highlighted"))}},t.onEnter=function(e){var t=e.target.previousSibling;if(window.$hsSelectCollection.find((function(e){return e.element.el===t}))){var n=window.$hsSelectCollection.find((function(e){return e.element.isOpened})),r=window.$hsSelectCollection.find((function(e){return e.element.el===t}));n.element.close(),r.element.open()}else(r=window.$hsSelectCollection.find((function(e){return e.element.isOpened})))&&r.element.onSelectOption(e.target.dataset.value||"")},t}(l.default);window.addEventListener("load",(function(){h.autoInit()})),document.addEventListener("scroll",(function(){if(!window.$hsSelectCollection)return!1;var e=window.$hsSelectCollection.find((function(e){return e.element.isOpened}));e&&e.element.recalculateDirection()})),"undefined"!=typeof window&&(window.HSSelect=h),t.default=h},957:function(e,t,n){
/*
         * HSStepper
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-stepper"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.currentIndex=(null==a?void 0:a.currentIndex)||1,r.mode=(null==a?void 0:a.mode)||"linear",r.isCompleted=void 0!==(null==a?void 0:a.isCompleted)&&(null==a?void 0:a.isCompleted),r.totalSteps=1,r.navItems=[],r.contentItems=[],r.init(),r}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsStepperCollection,this),this.buildNav(),this.buildContent(),this.buildButtons(),this.setTotalSteps()},t.prototype.getUncompletedSteps=function(e){return void 0===e&&(e=!1),this.navItems.filter((function(t){var n=t.isCompleted,r=t.isSkip;return e?!n||r:!n&&!r}))},t.prototype.setTotalSteps=function(){var e=this;this.navItems.forEach((function(t){var n=t.index;n>e.totalSteps&&(e.totalSteps=n)}))},t.prototype.buildNav=function(){var e=this;this.el.querySelectorAll("[data-hs-stepper-nav-item]").forEach((function(t){return e.addNavItem(t)})),this.navItems.forEach((function(t){return e.buildNavItem(t)}))},t.prototype.buildNavItem=function(e){var t=this,n=e.index,r=e.isDisabled,i=e.el;n===this.currentIndex&&this.setCurrentNavItem(),("linear"!==this.mode||r)&&i.addEventListener("click",(function(){return t.handleNavItemClick(e)}))},t.prototype.addNavItem=function(e){var t=JSON.parse(e.getAttribute("data-hs-stepper-nav-item")),n=t.index,r=t.isFinal,i=void 0!==r&&r,o=t.isCompleted,s=void 0!==o&&o,a=t.isSkip,c=void 0!==a&&a,l=t.isOptional,u=void 0!==l&&l,h=t.isDisabled,d=void 0!==h&&h,p=t.isProcessed,f=void 0!==p&&p,m=t.hasError,g=void 0!==m&&m;s&&e.classList.add("success"),c&&e.classList.add("skipped"),d&&("BUTTON"!==e.tagName&&"INPUT"!==e.tagName||e.setAttribute("disabled","disabled"),e.classList.add("disabled")),g&&e.classList.add("error"),this.navItems.push({index:n,isFinal:i,isCompleted:s,isSkip:c,isOptional:u,isDisabled:d,isProcessed:f,hasError:g,el:e})},t.prototype.setCurrentNavItem=function(){var e=this;this.navItems.forEach((function(t){var n=t.index,r=t.el;n===e.currentIndex?e.setCurrentNavItemActions(r):e.unsetCurrentNavItemActions(r)}))},t.prototype.setCurrentNavItemActions=function(e){e.classList.add("active"),this.fireEvent("active",this.currentIndex),(0,a.dispatch)("active.hs.stepper",this.el,this.currentIndex)},t.prototype.getNavItem=function(e){return void 0===e&&(e=this.currentIndex),this.navItems.find((function(t){return t.index===e}))},t.prototype.setProcessedNavItemActions=function(e){e.isProcessed=!0,e.el.classList.add("processed")},t.prototype.setErrorNavItemActions=function(e){e.hasError=!0,e.el.classList.add("error")},t.prototype.unsetCurrentNavItemActions=function(e){e.classList.remove("active")},t.prototype.handleNavItemClick=function(e){var t=e.index;this.currentIndex=t,this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep()},t.prototype.buildContent=function(){var e=this;this.el.querySelectorAll("[data-hs-stepper-content-item]").forEach((function(t){return e.addContentItem(t)})),this.navItems.forEach((function(t){return e.buildContentItem(t)}))},t.prototype.buildContentItem=function(e){e.index===this.currentIndex&&this.setCurrentContentItem()},t.prototype.addContentItem=function(e){var t=JSON.parse(e.getAttribute("data-hs-stepper-content-item")),n=t.index,r=t.isFinal,i=void 0!==r&&r,o=t.isCompleted,s=void 0!==o&&o,a=t.isSkip,c=void 0!==a&&a;s&&e.classList.add("success"),c&&e.classList.add("skipped"),this.contentItems.push({index:n,isFinal:i,isCompleted:s,isSkip:c,el:e})},t.prototype.setCurrentContentItem=function(){var e=this;if(this.isCompleted){var t=this.contentItems.find((function(e){return e.isFinal})),n=this.contentItems.filter((function(e){return!e.isFinal}));return t.el.style.display="",n.forEach((function(e){return e.el.style.display="none"})),!1}this.contentItems.forEach((function(t){var n=t.index,r=t.el;n===e.currentIndex?e.setCurrentContentItemActions(r):e.unsetCurrentContentItemActions(r)}))},t.prototype.hideAllContentItems=function(){this.contentItems.forEach((function(e){return e.el.style.display="none"}))},t.prototype.setCurrentContentItemActions=function(e){e.style.display=""},t.prototype.unsetCurrentContentItemActions=function(e){e.style.display="none"},t.prototype.disableAll=function(){var e=this.getNavItem(this.currentIndex);e.hasError=!1,e.isCompleted=!1,e.isDisabled=!1,e.el.classList.remove("error","success"),this.disableButtons()},t.prototype.disableNavItemActions=function(e){e.isDisabled=!0,e.el.classList.add("disabled")},t.prototype.enableNavItemActions=function(e){e.isDisabled=!1,e.el.classList.remove("disabled")},t.prototype.buildButtons=function(){this.backBtn=this.el.querySelector("[data-hs-stepper-back-btn]"),this.nextBtn=this.el.querySelector("[data-hs-stepper-next-btn]"),this.skipBtn=this.el.querySelector("[data-hs-stepper-skip-btn]"),this.completeStepBtn=this.el.querySelector("[data-hs-stepper-complete-step-btn]"),this.finishBtn=this.el.querySelector("[data-hs-stepper-finish-btn]"),this.resetBtn=this.el.querySelector("[data-hs-stepper-reset-btn]"),this.buildBackButton(),this.buildNextButton(),this.buildSkipButton(),this.buildCompleteStepButton(),this.buildFinishButton(),this.buildResetButton()},t.prototype.buildBackButton=function(){var e=this;this.backBtn&&(this.checkForTheFirstStep(),this.backBtn.addEventListener("click",(function(){if(e.handleBackButtonClick(),"linear"===e.mode){var t=e.navItems.find((function(t){return t.index===e.currentIndex})),n=e.contentItems.find((function(t){return t.index===e.currentIndex}));if(!t||!n)return;t.isCompleted&&(t.isCompleted=!1,t.isSkip=!1,t.el.classList.remove("success","skipped")),n.isCompleted&&(n.isCompleted=!1,n.isSkip=!1,n.el.classList.remove("success","skipped")),"linear"===e.mode&&e.currentIndex!==e.totalSteps&&(e.nextBtn&&(e.nextBtn.style.display=""),e.completeStepBtn&&(e.completeStepBtn.style.display="")),e.showSkipButton(),e.showFinishButton(),e.showCompleteStepButton()}})))},t.prototype.handleBackButtonClick=function(){1!==this.currentIndex&&("linear"===this.mode&&this.removeOptionalClasses(),this.currentIndex--,"linear"===this.mode&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.fireEvent("back",this.currentIndex),(0,a.dispatch)("back.hs.stepper",this.el,this.currentIndex))},t.prototype.checkForTheFirstStep=function(){1===this.currentIndex?this.setToDisabled(this.backBtn):this.setToNonDisabled(this.backBtn)},t.prototype.setToDisabled=function(e){"BUTTON"!==e.tagName&&"INPUT"!==e.tagName||e.setAttribute("disabled","disabled"),e.classList.add("disabled")},t.prototype.setToNonDisabled=function(e){"BUTTON"!==e.tagName&&"INPUT"!==e.tagName||e.removeAttribute("disabled"),e.classList.remove("disabled")},t.prototype.buildNextButton=function(){var e=this;this.nextBtn&&this.nextBtn.addEventListener("click",(function(){var t;if(e.fireEvent("beforeNext",e.currentIndex),(0,a.dispatch)("beforeNext.hs.stepper",e.el,e.currentIndex),null===(t=e.getNavItem(e.currentIndex))||void 0===t?void 0:t.isProcessed)return e.disableAll(),!1;e.goToNext()}))},t.prototype.unsetProcessedNavItemActions=function(e){e.isProcessed=!1,e.el.classList.remove("processed")},t.prototype.handleNextButtonClick=function(e){if(void 0===e&&(e=!0),e)this.currentIndex===this.totalSteps?this.currentIndex=1:this.currentIndex++;else{var t=this.getUncompletedSteps();if(1===t.length){var n=t[0].index;this.currentIndex=n}else{if(this.currentIndex===this.totalSteps)return;this.currentIndex++}}"linear"===this.mode&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton(),this.showFinishButton(),this.showCompleteStepButton(),this.fireEvent("next",this.currentIndex),(0,a.dispatch)("next.hs.stepper",this.el,this.currentIndex)},t.prototype.removeOptionalClasses=function(){var e=this,t=this.navItems.find((function(t){return t.index===e.currentIndex})),n=this.contentItems.find((function(t){return t.index===e.currentIndex}));t.isSkip=!1,t.hasError=!1,t.isDisabled=!1,n.isSkip=!1,t.el.classList.remove("skipped","success","error"),n.el.classList.remove("skipped","success","error")},t.prototype.buildSkipButton=function(){var e=this;this.skipBtn&&(this.showSkipButton(),this.skipBtn.addEventListener("click",(function(){e.handleSkipButtonClick(),"linear"===e.mode&&e.currentIndex===e.totalSteps&&(e.nextBtn&&(e.nextBtn.style.display="none"),e.completeStepBtn&&(e.completeStepBtn.style.display="none"),e.finishBtn&&(e.finishBtn.style.display=""))})))},t.prototype.setSkipItem=function(e){var t=this,n=this.navItems.find((function(n){return n.index===(e||t.currentIndex)})),r=this.contentItems.find((function(n){return n.index===(e||t.currentIndex)}));n&&r&&(this.setSkipItemActions(n),this.setSkipItemActions(r))},t.prototype.setSkipItemActions=function(e){e.isSkip=!0,e.el.classList.add("skipped")},t.prototype.showSkipButton=function(){var e=this;if(this.skipBtn){var t=this.navItems.find((function(t){return t.index===e.currentIndex})).isOptional;this.skipBtn.style.display=t?"":"none"}},t.prototype.handleSkipButtonClick=function(){this.setSkipItem(),this.handleNextButtonClick(),this.fireEvent("skip",this.currentIndex),(0,a.dispatch)("skip.hs.stepper",this.el,this.currentIndex)},t.prototype.buildCompleteStepButton=function(){var e=this;this.completeStepBtn&&(this.completeStepBtnDefaultText=this.completeStepBtn.innerText,this.completeStepBtn.addEventListener("click",(function(){return e.handleCompleteStepButtonClick()})))},t.prototype.changeTextAndDisableCompleteButtonIfStepCompleted=function(){var e=this,t=this.navItems.find((function(t){return t.index===e.currentIndex})),n=JSON.parse(this.completeStepBtn.getAttribute("data-hs-stepper-complete-step-btn")).completedText;t&&(t.isCompleted?(this.completeStepBtn.innerText=n||this.completeStepBtnDefaultText,this.completeStepBtn.setAttribute("disabled","disabled"),this.completeStepBtn.classList.add("disabled")):(this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")))},t.prototype.setCompleteItem=function(e){var t=this,n=this.navItems.find((function(n){return n.index===(e||t.currentIndex)})),r=this.contentItems.find((function(n){return n.index===(e||t.currentIndex)}));n&&r&&(this.setCompleteItemActions(n),this.setCompleteItemActions(r))},t.prototype.setCompleteItemActions=function(e){e.isCompleted=!0,e.el.classList.add("success")},t.prototype.showCompleteStepButton=function(){this.completeStepBtn&&(1===this.getUncompletedSteps().length?this.completeStepBtn.style.display="none":this.completeStepBtn.style.display="")},t.prototype.handleCompleteStepButtonClick=function(){this.setCompleteItem(),this.fireEvent("complete",this.currentIndex),(0,a.dispatch)("complete.hs.stepper",this.el,this.currentIndex),this.handleNextButtonClick(!1),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton()},t.prototype.buildFinishButton=function(){var e=this;this.finishBtn&&(this.isCompleted&&this.setCompleted(),this.finishBtn.addEventListener("click",(function(){return e.handleFinishButtonClick()})))},t.prototype.setCompleted=function(){this.el.classList.add("completed")},t.prototype.unsetCompleted=function(){this.el.classList.remove("completed")},t.prototype.showFinishButton=function(){this.finishBtn&&(1===this.getUncompletedSteps().length?this.finishBtn.style.display="":this.finishBtn.style.display="none")},t.prototype.handleFinishButtonClick=function(){var e=this,t=this.getUncompletedSteps(),n=this.getUncompletedSteps(!0),r=this.contentItems.find((function(e){return e.isFinal})).el;t.length&&t.forEach((function(t){var n=t.index;return e.setCompleteItem(n)})),this.currentIndex=this.totalSteps,this.setCurrentNavItem(),this.hideAllContentItems();var i=this.navItems.find((function(t){return t.index===e.currentIndex}));(i?i.el:null).classList.remove("active"),r.style.display="block",this.backBtn&&(this.backBtn.style.display="none"),this.nextBtn&&(this.nextBtn.style.display="none"),this.skipBtn&&(this.skipBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"),this.finishBtn&&(this.finishBtn.style.display="none"),this.resetBtn&&(this.resetBtn.style.display=""),n.length<=1&&(this.isCompleted=!0,this.setCompleted()),this.fireEvent("finish",this.currentIndex),(0,a.dispatch)("finish.hs.stepper",this.el,this.currentIndex)},t.prototype.buildResetButton=function(){var e=this;this.resetBtn&&this.resetBtn.addEventListener("click",(function(){return e.handleResetButtonClick()}))},t.prototype.handleResetButtonClick=function(){var e=this;this.backBtn&&(this.backBtn.style.display=""),this.nextBtn&&(this.nextBtn.style.display=""),this.completeStepBtn&&(this.completeStepBtn.style.display="",this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")),this.resetBtn&&(this.resetBtn.style.display="none"),this.navItems.forEach((function(t){var n=t.el;t.isSkip=!1,t.isCompleted=!1,e.unsetCurrentNavItemActions(n),n.classList.remove("success","skipped")})),this.contentItems.forEach((function(t){var n=t.el;t.isSkip=!1,t.isCompleted=!1,e.unsetCurrentContentItemActions(n),n.classList.remove("success","skipped")})),this.currentIndex=1,this.setCurrentNavItem(),this.setCurrentContentItem(),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.unsetCompleted(),this.isCompleted=!1,this.fireEvent("reset",this.currentIndex),(0,a.dispatch)("reset.hs.stepper",this.el,this.currentIndex)},t.prototype.setProcessedNavItem=function(e){var t=this.getNavItem(e);t&&this.setProcessedNavItemActions(t)},t.prototype.unsetProcessedNavItem=function(e){var t=this.getNavItem(e);t&&this.unsetProcessedNavItemActions(t)},t.prototype.goToNext=function(){"linear"===this.mode&&this.setCompleteItem(),this.handleNextButtonClick("linear"!==this.mode),"linear"===this.mode&&this.currentIndex===this.totalSteps&&(this.nextBtn&&(this.nextBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"))},t.prototype.disableButtons=function(){this.backBtn&&this.setToDisabled(this.backBtn),this.nextBtn&&this.setToDisabled(this.nextBtn)},t.prototype.enableButtons=function(){this.backBtn&&this.setToNonDisabled(this.backBtn),this.nextBtn&&this.setToNonDisabled(this.nextBtn)},t.prototype.setErrorNavItem=function(e){var t=this.getNavItem(e);t&&this.setErrorNavItemActions(t)},t.getInstance=function(e,t){var n=window.$hsStepperCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsStepperCollection||(window.$hsStepperCollection=[]),document.querySelectorAll("[data-hs-stepper]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsStepperCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit()})),"undefined"!=typeof window&&(window.HSStepper=c),t.default=c},983:function(e,t,n){
/*
         * HSStrongPassword
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.isOpened=!1,r.strength=0,r.passedRules=new Set;var i=t.getAttribute("data-hs-strong-password"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.target=(null==a?void 0:a.target)?"string"==typeof(null==a?void 0:a.target)?document.querySelector(a.target):a.target:null,r.hints=(null==a?void 0:a.hints)?"string"==typeof(null==a?void 0:a.hints)?document.querySelector(a.hints):a.hints:null,r.stripClasses=(null==a?void 0:a.stripClasses)||null,r.minLength=(null==a?void 0:a.minLength)||6,r.mode=(null==a?void 0:a.mode)||"default",r.popoverSpace=(null==a?void 0:a.popoverSpace)||10,r.checksExclude=(null==a?void 0:a.checksExclude)||[],r.availableChecks=["lowercase","uppercase","numbers","special-characters","min-length"].filter((function(e){return!r.checksExclude.includes(e)})),r.specialCharactersSet=(null==a?void 0:a.specialCharactersSet)||"!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~",r.target&&r.init(),r}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsStrongPasswordCollection,this),this.availableChecks.length&&this.build()},t.prototype.build=function(){var e=this;this.buildStrips(),this.hints&&this.buildHints(),this.setStrength(this.target.value),this.target.addEventListener("input",(function(t){e.setStrength(t.target.value)}))},t.prototype.buildStrips=function(){if(this.el.innerHTML="",this.stripClasses)for(var e=0;e<this.availableChecks.length;e++){var t=(0,a.htmlToElement)("<div></div>");(0,a.classToClassList)(this.stripClasses,t),this.el.append(t)}},t.prototype.buildHints=function(){var e=this;this.weakness=this.hints.querySelector("[data-hs-strong-password-hints-weakness-text]")||null,this.rules=Array.from(this.hints.querySelectorAll("[data-hs-strong-password-hints-rule-text]"))||null,this.rules.forEach((function(t){var n,r=t.getAttribute("data-hs-strong-password-hints-rule-text");(null===(n=e.checksExclude)||void 0===n?void 0:n.includes(r))&&t.remove()})),this.weakness&&this.buildWeakness(),this.rules&&this.buildRules(),"popover"===this.mode&&(this.target.addEventListener("focus",(function(){e.isOpened=!0,e.hints.classList.remove("hidden"),e.hints.classList.add("block"),e.recalculateDirection()})),this.target.addEventListener("blur",(function(){e.isOpened=!1,e.hints.classList.remove("block","bottom-full","top-full"),e.hints.classList.add("hidden"),e.hints.style.marginTop="",e.hints.style.marginBottom=""})))},t.prototype.buildWeakness=function(){var e=this;this.checkStrength(this.target.value),this.setWeaknessText(),this.target.addEventListener("input",(function(){return setTimeout((function(){return e.setWeaknessText()}))}))},t.prototype.buildRules=function(){var e=this;this.setRulesText(),this.target.addEventListener("input",(function(){return setTimeout((function(){return e.setRulesText()}))}))},t.prototype.setWeaknessText=function(){var e=this.weakness.getAttribute("data-hs-strong-password-hints-weakness-text"),t=JSON.parse(e);this.weakness.textContent=t[this.strength]},t.prototype.setRulesText=function(){var e=this;this.rules.forEach((function(t){var n=t.getAttribute("data-hs-strong-password-hints-rule-text");e.checkIfPassed(t,e.passedRules.has(n))}))},t.prototype.togglePopover=function(){var e=this.el.querySelector(".popover");e&&e.classList.toggle("show")},t.prototype.checkStrength=function(e){var t=new Set,n={lowercase:/[a-z]+/,uppercase:/[A-Z]+/,numbers:/[0-9]+/,"special-characters":new RegExp("[".concat(this.specialCharactersSet,"]"))},r=0;return this.availableChecks.includes("lowercase")&&e.match(n.lowercase)&&(r+=1,t.add("lowercase")),this.availableChecks.includes("uppercase")&&e.match(n.uppercase)&&(r+=1,t.add("uppercase")),this.availableChecks.includes("numbers")&&e.match(n.numbers)&&(r+=1,t.add("numbers")),this.availableChecks.includes("special-characters")&&e.match(n["special-characters"])&&(r+=1,t.add("special-characters")),this.availableChecks.includes("min-length")&&e.length>=this.minLength&&(r+=1,t.add("min-length")),e.length||(r=0),r===this.availableChecks.length?this.el.classList.add("accepted"):this.el.classList.remove("accepted"),this.strength=r,this.passedRules=t,{strength:this.strength,rules:this.passedRules}},t.prototype.checkIfPassed=function(e,t){void 0===t&&(t=!1);var n=e.querySelector("[data-check]"),r=e.querySelector("[data-uncheck]");t?(e.classList.add("active"),n.classList.remove("hidden"),r.classList.add("hidden")):(e.classList.remove("active"),n.classList.add("hidden"),r.classList.remove("hidden"))},t.prototype.setStrength=function(e){var t=this.checkStrength(e),n=t.strength,r={strength:n,rules:t.rules};this.hideStrips(n),this.fireEvent("change",r),(0,a.dispatch)("change.hs.strongPassword",this.el,r)},t.prototype.hideStrips=function(e){Array.from(this.el.children).forEach((function(t,n){n<e?t.classList.add("passed"):t.classList.remove("passed")}))},t.prototype.recalculateDirection=function(){(0,a.isEnoughSpace)(this.hints,this.target,"bottom",this.popoverSpace)?(this.hints.classList.remove("bottom-full"),this.hints.classList.add("top-full"),this.hints.style.marginBottom="",this.hints.style.marginTop="".concat(this.popoverSpace,"px")):(this.hints.classList.remove("top-full"),this.hints.classList.add("bottom-full"),this.hints.style.marginTop="",this.hints.style.marginBottom="".concat(this.popoverSpace,"px"))},t.getInstance=function(e){var t=window.$hsStrongPasswordCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return t?t.element:null},t.autoInit=function(){window.$hsStrongPasswordCollection||(window.$hsStrongPasswordCollection=[]),document.querySelectorAll("[data-hs-strong-password]:not(.--prevent-on-load-init)").forEach((function(e){if(!window.$hsStrongPasswordCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))){var n=e.getAttribute("data-hs-strong-password"),r=n?JSON.parse(n):{};new t(e,r)}}))},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit()})),document.addEventListener("scroll",(function(){if(!window.$hsStrongPasswordCollection)return!1;var e=window.$hsStrongPasswordCollection.find((function(e){return e.element.isOpened}));e&&e.element.recalculateDirection()})),"undefined"!=typeof window&&(window.HSStrongPassword=c),t.default=c},949:function(e,t,n){
/*
         * HSTabs
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(969),a=o(n(737)),c=n(190),l=function(e){function t(t,n,r){var i=e.call(this,t,n,r)||this;return i.toggles=i.el.querySelectorAll("[data-hs-tab]"),i.extraToggleId=i.el.getAttribute("hs-data-tab-select"),i.extraToggle=document.querySelector(i.extraToggleId),i.current=Array.from(i.toggles).find((function(e){return e.classList.contains("active")})),i.currentContentId=i.current.getAttribute("data-hs-tab"),i.currentContent=document.querySelector(i.currentContentId),i.prev=null,i.prevContentId=null,i.prevContent=null,i.init(),i}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsTabsCollection,this),this.toggles.forEach((function(t){t.addEventListener("click",(function(){return e.open(t)}))})),this.extraToggle&&this.extraToggle.addEventListener("change",(function(t){return e.change(t)}))},t.prototype.open=function(e){this.prev=this.current,this.prevContentId=this.currentContentId,this.prevContent=this.currentContent,this.current=e,this.currentContentId=this.current.getAttribute("data-hs-tab"),this.currentContent=document.querySelector(this.currentContentId),this.prev.classList.remove("active"),this.prevContent.classList.add("hidden"),this.current.classList.add("active"),this.currentContent.classList.remove("hidden"),this.fireEvent("change",{el:e,prev:this.prevContentId,current:this.currentContentId}),(0,s.dispatch)("change.hs.tab",e,{el:e,prev:this.prevContentId,current:this.currentContentId})},t.prototype.change=function(e){var t=document.querySelector('[data-hs-tab="'.concat(e.target.value,'"]'));t&&t.click()},t.getInstance=function(e,t){var n=window.$hsTabsCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsTabsCollection||(window.$hsTabsCollection=[]),document.querySelectorAll('[role="tablist"]:not(select):not(.--prevent-on-load-init)').forEach((function(e){window.$hsTabsCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)})),window.$hsTabsCollection&&document.addEventListener("keydown",(function(e){return t.accessibility(e)}))},t.open=function(e){var t=window.$hsTabsCollection.find((function(t){return Array.from(t.element.toggles).includes("string"==typeof e?document.querySelector(e):e)})),n=Array.from(t.element.toggles).find((function(t){return t===("string"==typeof e?document.querySelector(e):e)}));n&&!n.classList.contains("active")&&t.element.open(n)},t.accessibility=function(e){var t=document.querySelector("[data-hs-tab]:focus");if(t&&c.TABS_ACCESSIBILITY_KEY_SET.includes(e.code)&&!e.metaKey){var n=t.closest('[role="tablist"]').getAttribute("data-hs-tabs-vertical");switch(e.preventDefault(),e.code){case"true"===n?"ArrowUp":"ArrowLeft":this.onArrow();break;case"true"===n?"ArrowDown":"ArrowRight":this.onArrow(!1);break;case"Home":this.onStartEnd();break;case"End":this.onStartEnd(!1)}}},t.onArrow=function(e){void 0===e&&(e=!0);var t=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),n=window.$hsTabsCollection.find((function(e){return e.element.el===t}));if(n){var r=e?Array.from(n.element.toggles).reverse():Array.from(n.element.toggles),i=r.find((function(e){return document.activeElement===e})),o=r.findIndex((function(e){return e===i}));r[o=o+1<r.length?o+1:0].focus(),r[o].click()}},t.onStartEnd=function(e){void 0===e&&(e=!0);var t=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),n=window.$hsTabsCollection.find((function(e){return e.element.el===t}));if(n){var r=e?Array.from(n.element.toggles):Array.from(n.element.toggles).reverse();r.length&&(r[0].focus(),r[0].click())}},t.on=function(e,t,n){var r=window.$hsTabsCollection.find((function(e){return Array.from(e.element.toggles).includes("string"==typeof t?document.querySelector(t):t)}));r&&(r.element.events[e]=n)},t}(a.default);window.addEventListener("load",(function(){l.autoInit()})),"undefined"!=typeof window&&(window.HSTabs=l),t.default=l},557:function(e,t,n){var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-theme-switch"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.theme=(null==a?void 0:a.theme)||localStorage.getItem("hs_theme")||"default",r.themeSet=["light","dark","default"],r.init(),r}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsThemeSwitchCollection,this),"default"!==this.theme&&this.setAppearance()},t.prototype.setResetStyles=function(){var e=document.createElement("style");return e.innerText="*{transition: unset !important;}",e.setAttribute("data-hs-appearance-onload-styles",""),document.head.appendChild(e),e},t.prototype.addSystemThemeObserver=function(){var e=this;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){t.matches?e.setAppearance("dark",!1):e.setAppearance("default",!1)}))},t.prototype.removeSystemThemeObserver=function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener},t.prototype.setAppearance=function(e,t,n){void 0===e&&(e=this.theme),void 0===t&&(t=!0),void 0===n&&(n=!0);var r=document.querySelector("html"),i=this.setResetStyles();t&&localStorage.setItem("hs_theme",e),"auto"===e&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"),r.classList.remove("light","dark","default","auto"),r.classList.add(e),setTimeout((function(){return i.remove()})),n&&window.dispatchEvent(new CustomEvent("on-hs-appearance-change",{detail:e}))},t.getInstance=function(e){var t=window.$hsThemeSwitchCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return t?t.element:null},t.autoInit=function(){window.$hsThemeSwitchCollection||(window.$hsThemeSwitchCollection=[]);var e=function(e){"auto"===localStorage.getItem("hs_theme")?e.addSystemThemeObserver():e.removeSystemThemeObserver()};document.querySelectorAll("[data-hs-theme-switch]:not(.--prevent-on-load-init)").forEach((function(n){if(!window.$hsThemeSwitchCollection.find((function(e){var t;return(null===(t=null==e?void 0:e.element)||void 0===t?void 0:t.el)===n}))){var r=new t(n);r.el.checked="dark"===r.theme,e(r),r.el.addEventListener("change",(function(t){var n=t.target.checked?"dark":"default";r.setAppearance(n),e(r)}))}})),document.querySelectorAll("[data-hs-theme-click-value]:not(.--prevent-on-load-init)").forEach((function(n){var r=n.getAttribute("data-hs-theme-click-value"),i=new t(n);e(i),i.el.addEventListener("click",(function(){i.setAppearance(r),e(i)}))}))},t}(s(n(737)).default);window.addEventListener("load",(function(){a.autoInit()})),window.$hsThemeSwitchCollection&&window.addEventListener("on-hs-appearance-change",(function(e){window.$hsThemeSwitchCollection.forEach((function(t){t.element.el.checked="dark"===e.detail}))})),"undefined"!=typeof window&&(window.HSThemeSwitch=a),t.default=a},87:function(e,t,n){
/*
         * HSToggleCount
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-toggle-count"),s=i?JSON.parse(i):{},a=o(o({},s),n);return r.target=(null==a?void 0:a.target)?"string"==typeof(null==a?void 0:a.target)?document.querySelector(a.target):a.target:null,r.min=(null==a?void 0:a.min)||0,r.max=(null==a?void 0:a.max)||0,r.duration=(null==a?void 0:a.duration)||700,r.isChecked=r.target.checked||!1,r.target&&r.init(),r}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsToggleCountCollection,this),this.isChecked&&(this.el.innerText=String(this.max)),this.target.addEventListener("change",(function(){e.isChecked=!e.isChecked,e.toggle()}))},t.prototype.toggle=function(){this.isChecked?this.countUp():this.countDown()},t.prototype.animate=function(e,t){var n=this,r=0,i=function(o){r||(r=o);var s=Math.min((o-r)/n.duration,1);n.el.innerText=String(Math.floor(s*(t-e)+e)),s<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)},t.prototype.countUp=function(){this.animate(this.min,this.max)},t.prototype.countDown=function(){this.animate(this.max,this.min)},t.getInstance=function(e,t){var n=window.$hsToggleCountCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsToggleCountCollection||(window.$hsToggleCountCollection=[]),document.querySelectorAll("[data-hs-toggle-count]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsToggleCountCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s(n(737)).default);window.addEventListener("load",(function(){a.autoInit()})),"undefined"!=typeof window&&(window.HSToggleCount=a),t.default=a},366:function(e,t,n){
/*
         * HSTogglePassword
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(969),c=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=t.getAttribute("data-hs-toggle-password"),s=i?JSON.parse(i):{},c=o(o({},s),n),l=[];return(null==c?void 0:c.target)&&"string"==typeof(null==c?void 0:c.target)?(null==c?void 0:c.target.split(",")).forEach((function(e){l.push(document.querySelector(e))})):(null==c?void 0:c.target)&&"object"==typeof(null==c?void 0:c.target)?c.target.forEach((function(e){return l.push(document.querySelector(e))})):c.target.forEach((function(e){return l.push(e)})),r.target=l,r.isShown=!!r.el.hasAttribute("type")&&r.el.checked,r.eventType=(0,a.isFormElement)(r.el)?"change":"click",r.isMultiple=r.target.length>1&&!!r.el.closest("[data-hs-toggle-password-group]"),r.target&&r.init(),r}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsTogglePasswordCollection,this),this.isShown?this.show():this.hide(),this.el.addEventListener(this.eventType,(function(){e.isShown?e.hide():e.show(),e.fireEvent("toggle",e.target),(0,a.dispatch)("toggle.hs.toggle-select",e.el,e.target)}))},t.prototype.getMultipleToggles=function(){var e=this.el.closest("[data-hs-toggle-password-group]").querySelectorAll("[data-hs-toggle-password]"),n=[];return e.forEach((function(e){n.push(t.getInstance(e))})),n},t.prototype.show=function(){this.isMultiple?(this.getMultipleToggles().forEach((function(e){return!!e&&(e.isShown=!0)})),this.el.closest("[data-hs-toggle-password-group]").classList.add("active")):(this.isShown=!0,this.el.classList.add("active")),this.target.forEach((function(e){e.type="text"}))},t.prototype.hide=function(){this.isMultiple?(this.getMultipleToggles().forEach((function(e){return!!e&&(e.isShown=!1)})),this.el.closest("[data-hs-toggle-password-group]").classList.remove("active")):(this.isShown=!1,this.el.classList.remove("active")),this.target.forEach((function(e){e.type="password"}))},t.getInstance=function(e,t){var n=window.$hsTogglePasswordCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element:null},t.autoInit=function(){window.$hsTogglePasswordCollection||(window.$hsTogglePasswordCollection=[]),document.querySelectorAll("[data-hs-toggle-password]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsTogglePasswordCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s(n(737)).default);window.addEventListener("load",(function(){c.autoInit()})),"undefined"!=typeof window&&(window.HSTogglePassword=c),t.default=c},679:function(e,t,n){
/*
         * HSTooltip
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(492),l=n(969),u=a(n(737)),h=n(190),d=function(e){function t(t,n,r){var i=e.call(this,t,n,r)||this;return i.el&&(i.toggle=i.el.querySelector(".hs-tooltip-toggle")||i.el,i.content=i.el.querySelector(".hs-tooltip-content"),i.eventMode=(0,l.getClassProperty)(i.el,"--trigger")||"hover",i.preventPopper=(0,l.getClassProperty)(i.el,"--prevent-popper","false"),i.placement=(0,l.getClassProperty)(i.el,"--placement"),i.strategy=(0,l.getClassProperty)(i.el,"--strategy")),i.el&&i.toggle&&i.content&&i.init(),i}return i(t,e),t.prototype.init=function(){var e=this;this.createCollection(window.$hsTooltipCollection,this),"click"===this.eventMode?this.toggle.addEventListener("click",(function(){return e.click()})):"focus"===this.eventMode?this.toggle.addEventListener("click",(function(){return e.focus()})):"hover"===this.eventMode&&(this.toggle.addEventListener("mouseenter",(function(){return e.enter()})),this.toggle.addEventListener("mouseleave",(function(){return e.leave()}))),"false"===this.preventPopper&&this.buildPopper()},t.prototype.enter=function(){this.show()},t.prototype.leave=function(){this.hide()},t.prototype.click=function(){var e=this;if(this.el.classList.contains("show"))return!1;this.show();var t=function(){setTimeout((function(){e.hide(),e.toggle.removeEventListener("click",t,!0),e.toggle.removeEventListener("blur",t,!0)}))};this.toggle.addEventListener("click",t,!0),this.toggle.addEventListener("blur",t,!0)},t.prototype.focus=function(){var e=this;this.show();var t=function(){e.hide(),e.toggle.removeEventListener("blur",t,!0)};this.toggle.addEventListener("blur",t,!0)},t.prototype.buildPopper=function(){this.popperInstance=(0,c.createPopper)(this.toggle,this.content,{placement:h.POSITIONS[this.placement]||"top",strategy:this.strategy||"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})},t.prototype.show=function(){var e=this;this.content.classList.remove("hidden"),"false"===this.preventPopper&&(this.popperInstance.setOptions((function(e){return o(o({},e),{modifiers:s(s([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})})),this.popperInstance.update()),setTimeout((function(){e.el.classList.add("show"),e.fireEvent("show",e.el),(0,l.dispatch)("show.hs.tooltip",e.el,e.el)}))},t.prototype.hide=function(){var e=this;this.el.classList.remove("show"),"false"===this.preventPopper&&this.popperInstance.setOptions((function(e){return o(o({},e),{modifiers:s(s([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})})),this.fireEvent("hide",this.el),(0,l.dispatch)("hide.hs.tooltip",this.el,this.el),(0,l.afterTransition)(this.content,(function(){if(e.el.classList.contains("show"))return!1;e.content.classList.add("hidden")}))},t.getInstance=function(e,t){void 0===t&&(t=!1);var n=window.$hsTooltipCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.autoInit=function(){window.$hsTooltipCollection||(window.$hsTooltipCollection=[]),document.querySelectorAll(".hs-tooltip").forEach((function(e){window.$hsTooltipCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t.show=function(e){var t=window.$hsTooltipCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));if(t)switch(t.element.eventMode){case"click":t.element.click();break;case"focus":t.element.focus();break;default:t.element.enter()}},t.hide=function(e){var t=window.$hsTooltipCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&t.element.hide()},t.on=function(e,t,n){var r=window.$hsTooltipCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));r&&(r.element.events[e]=n)},t}(u.default);window.addEventListener("load",(function(){d.autoInit()})),"undefined"!=typeof window&&(window.HSTooltip=d),t.default=d},362:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.COLLECTIONS=void 0;var i=r(n(413)),o=r(n(460)),s=r(n(629)),a=r(n(652)),c=r(n(23)),l=r(n(610)),u=r(n(371)),h=r(n(770)),d=r(n(659)),p=r(n(139)),f=r(n(591)),m=r(n(233)),g=r(n(957)),v=r(n(983)),y=r(n(949)),_=r(n(87)),w=r(n(366)),b=r(n(679));t.COLLECTIONS=[{key:"copy-markup",fn:i.default},{key:"accordion",fn:o.default},{key:"carousel",fn:s.default},{key:"collapse",fn:a.default},{key:"combobox",fn:c.default},{key:"dropdown",fn:l.default},{key:"input-number",fn:u.default},{key:"overlay",fn:h.default},{key:"pin-input",fn:d.default},{key:"remove-element",fn:p.default},{key:"scrollspy",fn:f.default},{key:"select",fn:m.default},{key:"stepper",fn:g.default},{key:"strong-password",fn:v.default},{key:"tabs",fn:y.default},{key:"toggle-count",fn:_.default},{key:"toggle-password",fn:w.default},{key:"tooltip",fn:b.default}]},313:(e,t,n)=>{
/*
         * HSStaticMethods
         * @version: 2.1.0
         * @author: HTMLStream
         * @license: Licensed under MIT (https://preline.co/docs/license.html)
         * Copyright 2023 HTMLStream
         */
Object.defineProperty(t,"__esModule",{value:!0});var r=n(969),i=n(362),o={getClassProperty:r.getClassProperty,afterTransition:r.afterTransition,autoInit:function(e){void 0===e&&(e="all"),"all"===e?i.COLLECTIONS.forEach((function(e){var t=e.fn;null==t||t.autoInit()})):i.COLLECTIONS.forEach((function(t){var n=t.key,r=t.fn;e.includes(n)&&(null==r||r.autoInit())}))}};"undefined"!=typeof window&&(window.HSStaticMethods=o),t.default=o},969:function(e,t){var n=this;Object.defineProperty(t,"__esModule",{value:!0}),t.menuSearchHistory=t.classToClassList=t.htmlToElement=t.afterTransition=t.dispatch=t.debounce=t.isFormElement=t.isParentOrElementHidden=t.isEnoughSpace=t.isIpadOS=t.isIOS=t.getClassPropertyAlt=t.getClassProperty=t.stringToBoolean=void 0,t.stringToBoolean=function(e){return"true"===e},t.getClassProperty=function(e,t,n){return void 0===n&&(n=""),(window.getComputedStyle(e).getPropertyValue(t)||n).replace(" ","")},t.getClassPropertyAlt=function(e,t,n){void 0===n&&(n="");var r="";return e.classList.forEach((function(e){e.includes(t)&&(r=e)})),r.match(/:(.*)]/)?r.match(/:(.*)]/)[1]:n},t.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},t.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},t.isEnoughSpace=function(e,t,n,r,i){void 0===n&&(n="auto"),void 0===r&&(r=10),void 0===i&&(i=null);var o=t.getBoundingClientRect(),s=i?i.getBoundingClientRect():null,a=window.innerHeight,c=s?o.top-s.top:o.top,l=(i?s.bottom:a)-o.bottom,u=e.clientHeight+r;return"bottom"===n?l>=u:"top"===n?c>=u:c>=u||l>=u},t.isFormElement=function(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement};var r=function(e){return!!e&&("none"===window.getComputedStyle(e).display||r(e.parentElement))};t.isParentOrElementHidden=r,t.debounce=function(e,t){var r;return void 0===t&&(t=200),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(r),r=setTimeout((function(){e.apply(n,i)}),t)}},t.dispatch=function(e,t,n){void 0===n&&(n=null);var r=new CustomEvent(e,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(r)},t.afterTransition=function(e,t){var n=function(){t(),e.removeEventListener("transitionend",n,!0)};window.getComputedStyle(e,null).getPropertyValue("transition")!==(navigator.userAgent.includes("Firefox")?"all":"all 0s ease 0s")?e.addEventListener("transitionend",n,!0):t()},t.htmlToElement=function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild},t.classToClassList=function(e,t,n,r){void 0===n&&(n=" "),void 0===r&&(r="add"),e.split(n).forEach((function(e){return"add"===r?t.classList.add(e):t.classList.remove(e)}))},t.menuSearchHistory={historyIndex:-1,addHistory:function(e){this.historyIndex=e},existsInHistory:function(e){return e>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(700)})()))},1241:function(e,t){"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){"use strict";var r=n(4901),i=n(6823),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a function")}},3506:function(e,t,n){"use strict";var r=n(3925),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){"use strict";var r=n(4402).has;e.exports=function(e){return r(e),e}},679:function(e,t,n){"use strict";var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){"use strict";var r=n(34),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not an object")}},7811:function(e){"use strict";e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){"use strict";var r=n(6706),i=n(4576),o=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new o("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){"use strict";var r=n(9504),i=n(7394),o=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==i(e))return!1;try{return o(e,0,0),!1}catch(t){return!0}}},5636:function(e,t,n){"use strict";var r=n(4475),i=n(9504),o=n(6706),s=n(7696),a=n(3238),c=n(7394),l=n(4483),u=n(1548),h=r.structuredClone,d=r.ArrayBuffer,p=r.DataView,f=r.TypeError,m=Math.min,g=d.prototype,v=p.prototype,y=i(g.slice),_=o(g,"resizable","get"),w=o(g,"maxByteLength","get"),b=i(v.getInt8),C=i(v.setInt8);e.exports=(u||l)&&function(e,t,n){var r,i=c(e),o=void 0===t?i:s(t),g=!_||!_(e);if(a(e))throw new f("ArrayBuffer is detached");if(u&&(e=h(e,{transfer:[e]}),i===o&&(n||g)))return e;if(i>=o&&(!n||g))r=y(e,0,o);else{var v=n&&!g&&w?{maxByteLength:w(e)}:void 0;r=new d(o,v);for(var I=new p(e),S=new p(r),E=m(o,i),T=0;T<E;T++)C(S,T,b(I,T))}return u||l(e),r}},4644:function(e,t,n){"use strict";var r,i,o,s=n(7811),a=n(3724),c=n(4475),l=n(4901),u=n(34),h=n(9297),d=n(6955),p=n(6823),f=n(6699),m=n(6840),g=n(2106),v=n(1625),y=n(2787),_=n(2967),w=n(8227),b=n(3392),C=n(1181),I=C.enforce,S=C.get,E=c.Int8Array,T=E&&E.prototype,k=c.Uint8ClampedArray,x=k&&k.prototype,A=E&&y(E),O=T&&y(T),P=Object.prototype,L=c.TypeError,R=w("toStringTag"),N=b("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",M=s&&!!_&&"Opera"!==d(c.opera),F=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(j,t)||h(U,t)},q=function(e){var t=y(e);if(u(t)){var n=S(t);return n&&h(n,D)?n[D]:q(t)}},$=function(e){if(!u(e))return!1;var t=d(e);return h(j,t)||h(U,t)},H=function(e){if($(e))return e;throw new L("Target is not a typed array")},W=function(e){if(l(e)&&(!_||v(A,e)))return e;throw new L(p(e)+" is not a typed array constructor")},V=function(e,t,n,r){if(a){if(n)for(var i in j){var o=c[i];if(o&&h(o.prototype,e))try{delete o.prototype[e]}catch(s){try{o.prototype[e]=t}catch(l){}}}O[e]&&!n||m(O,e,n?t:M&&T[e]||t,r)}},z=function(e,t,n){var r,i;if(a){if(_){if(n)for(r in j)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(o){}if(A[e]&&!n)return;try{return m(A,e,n?t:M&&A[e]||t)}catch(o){}}for(r in j)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in j)i=c[r],o=i&&i.prototype,o?I(o)[D]=i:M=!1;for(r in U)i=c[r],o=i&&i.prototype,o&&(I(o)[D]=i);if((!M||!l(A)||A===Function.prototype)&&(A=function(){throw new L("Incorrect invocation")},M))for(r in j)c[r]&&_(c[r],A);if((!M||!O||O===P)&&(O=A.prototype,M))for(r in j)c[r]&&_(c[r].prototype,O);if(M&&y(x)!==O&&_(x,O),a&&!h(O,R))for(r in F=!0,g(O,R,{configurable:!0,get:function(){return u(this)?this[N]:void 0}}),j)c[r]&&f(c[r],N,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&N,aTypedArray:H,aTypedArrayConstructor:W,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:q,isView:B,isTypedArray:$,TypedArray:A,TypedArrayPrototype:O}},5370:function(e,t,n){"use strict";var r=n(6198);e.exports=function(e,t,n){var i=0,o=arguments.length>2?n:r(t),s=new e(o);while(o>i)s[i]=t[i++];return s}},9617:function(e,t,n){"use strict";var r=n(5397),i=n(5610),o=n(6198),s=function(e){return function(t,n,s){var a=r(t),c=o(a);if(0===c)return!e&&-1;var l,u=i(s,c);if(e&&n!==n){while(c>u)if(l=a[u++],l!==l)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){"use strict";var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){"use strict";var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),o=0;o<n;o++)i[o]=e[n-o-1];return i}},9928:function(e,t,n){"use strict";var r=n(6198),i=n(1291),o=RangeError;e.exports=function(e,t,n,s){var a=r(e),c=i(n),l=c<0?a+c:c;if(l>=a||l<0)throw new o("Incorrect index");for(var u=new t(a),h=0;h<a;h++)u[h]=h===l?s:e[h];return u}},4576:function(e,t,n){"use strict";var r=n(9504),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},6955:function(e,t,n){"use strict";var r=n(2140),i=n(4901),o=n(4576),s=n(8227),a=s("toStringTag"),c=Object,l="Arguments"===o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?o(t):"Object"===(r=o(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){"use strict";var r=n(9297),i=n(5031),o=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},2211:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){"use strict";var r=n(3724),i=n(4913),o=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){"use strict";var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){"use strict";var r=n(4901),i=n(4913),o=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&o(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){"use strict";var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){"use strict";var r,i,o,s,a=n(4475),c=n(9714),l=n(1548),u=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,p=!1;if(l)p=function(e){u(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,o=new h(2),s=function(e){i.port1.postMessage(null,[e])},2===o.byteLength&&(s(o),0===o.byteLength&&(p=s)))}catch(f){}e.exports=p},4055:function(e,t,n){"use strict";var r=n(4475),i=n(34),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},6837:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(e,t,n){"use strict";var r=n(516),i=n(9088);e.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(e){"use strict";e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(e,t,n){"use strict";var r=n(4475),i=n(4576);e.exports="process"===i(r.process)},9392:function(e){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){"use strict";var r,i,o=n(4475),s=n(9392),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){"use strict";var r=n(9504),i=Error,o=r("".replace),s=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},6518:function(e,t,n){"use strict";var r=n(4475),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),l=n(2796);e.exports=function(e,t){var n,u,h,d,p,f,m=e.target,g=e.global,v=e.stat;if(u=g?r:v?r[m]||a(m,{}):r[m]&&r[m].prototype,u)for(h in t){if(p=t[h],e.dontCallGetSet?(f=i(u,h),d=f&&f.value):d=u[h],n=l(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(e.sham||d&&d.sham)&&o(p,"sham",!0),s(u,h,p,e)}}},9039:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){"use strict";var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){"use strict";var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},6706:function(e,t,n){"use strict";var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},9504:function(e,t,n){"use strict";var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},7751:function(e,t,n){"use strict";var r=n(4475),i=n(4901),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},1767:function(e){"use strict";e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){"use strict";var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){"use strict";var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",l=RangeError,u=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(e){return o(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new u(c);var n=s(t);if(n<0)throw new l(c);return new d(e,n)}},4475:function(e,t,n){"use strict";var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){"use strict";var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},421:function(e){"use strict";e.exports={}},5917:function(e,t,n){"use strict";var r=n(3724),i=n(9039),o=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){"use strict";var r=n(9504),i=n(9039),o=n(4576),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},3167:function(e,t,n){"use strict";var r=n(4901),i=n(34),o=n(2967);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},3706:function(e,t,n){"use strict";var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},1181:function(e,t,n){"use strict";var r,i,o,s=n(8622),a=n(4475),c=n(34),l=n(6699),u=n(9297),h=n(7629),d=n(6119),p=n(421),f="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var _=h.state||(h.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new m(f);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},o=function(e){return _.has(e)}}else{var w=d("state");p[w]=!0,r=function(e,t){if(u(e,w))throw new m(f);return t.facade=e,l(e,w,t),t},i=function(e){return u(e,w)?e[w]:{}},o=function(e){return u(e,w)}}e.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},4376:function(e,t,n){"use strict";var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){"use strict";var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){"use strict";var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){"use strict";var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===u||n!==l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},4117:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){"use strict";var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){"use strict";var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){"use strict";e.exports=!1},757:function(e,t,n){"use strict";var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},507:function(e,t,n){"use strict";var r=n(9565);e.exports=function(e,t,n){var i,o,s=n?e:e.iterator,a=e.next;while(!(i=r(a,s)).done)if(o=t(i.value),void 0!==o)return o}},9539:function(e,t,n){"use strict";var r=n(9565),i=n(8551),o=n(5966);e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},6198:function(e,t,n){"use strict";var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){"use strict";var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,l=n(3706),u=n(1181),h=u.enforce,d=u.get,p=String,f=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==f((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===m(p(t),0,7)&&(t="["+g(p(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?f(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&f(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=v(_,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&d(this).source||l(this)}),"toString")},741:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){"use strict";var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){"use strict";var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",p="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=u(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){"use strict";var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),l=n(9297),u=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},8480:function(e,t,n){"use strict";var r=n(1828),i=n(8727),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},3717:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){"use strict";var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),l=Object,u=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?u:null}},1625:function(e,t,n){"use strict";var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){"use strict";var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},8773:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){"use strict";var r=n(6706),i=n(34),o=n(7750),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){"use strict";var r=n(9565),i=n(4901),o=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){"use strict";var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7750:function(e,t,n){"use strict";var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){"use strict";var r=n(4402),i=n(8469),o=r.Set,s=r.add;e.exports=function(e){var t=new o;return i(e,(function(e){s(t,e)})),t}},3440:function(e,t,n){"use strict";var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),l=n(507),u=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=o(t);return s(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):l(n.getIterator(),(function(e){u(t,e)&&h(i,e)})),i}},4402:function(e,t,n){"use strict";var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){"use strict";var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),l=i.Set,u=i.add,h=i.has;e.exports=function(e){var t=r(this),n=s(e),i=new l;return o(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&u(i,e)})):a(t,(function(e){n.includes(e)&&u(i,e)})),i}},4449:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),l=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var u=n.getIterator();return!1!==c(u,(function(e){if(i(t,e))return l(u,"normal",!1)}))}},3838:function(e,t,n){"use strict";var r=n(7080),i=n(5170),o=n(8469),s=n(3789);e.exports=function(e){var t=r(this),n=s(e);return!(i(t)>n.size)&&!1!==o(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<n.size)return!1;var l=n.getIterator();return!1!==a(l,(function(e){if(!i(t,e))return c(l,"normal",!1)}))}},8469:function(e,t,n){"use strict";var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),l=r(a.keys),u=l(new s).next;e.exports=function(e,t,n){return n?i({iterator:l(e),next:u},t):c(e,t)}},4916:function(e,t,n){"use strict";var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(o){return!1}}},5170:function(e,t,n){"use strict";var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){"use strict";var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,l=i.has,u=i.remove;e.exports=function(e){var t=r(this),n=s(e).getIterator(),i=o(t);return a(n,(function(e){l(t,e)?u(i,e):c(i,e)})),i}},4204:function(e,t,n){"use strict";var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=s(e).getIterator(),c=o(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){"use strict";var r=n(5745),i=n(3392),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},7629:function(e,t,n){"use strict";var r=n(6395),i=n(4475),o=n(9433),s="__core-js_shared__",a=e.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.37.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){"use strict";var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){"use strict";var r=n(4475),i=n(9039),o=n(7388),s=n(7290),a=n(516),c=n(9088),l=r.structuredClone;e.exports=!!l&&!i((function(){if(a&&o>92||c&&o>94||s&&o>97)return!1;var e=new ArrayBuffer(8),t=l(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){"use strict";var r=n(7388),i=n(9039),o=n(4475),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){"use strict";var r=n(1291),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5854:function(e,t,n){"use strict";var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){"use strict";var r=n(1291),i=n(8014),o=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new o("Wrong length or index");return n}},5397:function(e,t,n){"use strict";var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){"use strict";var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){"use strict";var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){"use strict";var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){"use strict";var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw new l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){"use strict";var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){"use strict";var r=n(8227),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},655:function(e,t,n){"use strict";var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},9714:function(e,t,n){"use strict";var r=n(9088);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},6823:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){"use strict";var r=n(9504),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},7040:function(e,t,n){"use strict";var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){"use strict";var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){"use strict";var r=n(4475),i=n(4901),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},8227:function(e,t,n){"use strict";var r=n(4475),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||s;e.exports=function(e){return o(u,e)||(u[e]=a&&o(l,e)?l[e]:h("Symbol."+e)),u[e]}},6573:function(e,t,n){"use strict";var r=n(3724),i=n(2106),o=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&i(s,"detached",{configurable:!0,get:function(){return o(this)}})},7936:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){"use strict";var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},7642:function(e,t,n){"use strict";var r=n(6518),i=n(3440),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:i})},8004:function(e,t,n){"use strict";var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},3853:function(e,t,n){"use strict";var r=n(6518),i=n(4449),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){"use strict";var r=n(6518),i=n(3838),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){"use strict";var r=n(6518),i=n(8527),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){"use strict";var r=n(6518),i=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){"use strict";var r=n(6518),i=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:i})},7467:function(e,t,n){"use strict";var r=n(7628),i=n(4644),o=i.aTypedArray,s=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;s("toReversed",(function(){return r(o(this),a(this))}))},4732:function(e,t,n){"use strict";var r=n(4644),i=n(9504),o=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,u=i(r.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&o(e);var t=a(this),n=s(c(t),t);return u(n,e)}))},9577:function(e,t,n){"use strict";var r=n(9928),i=n(4644),o=n(1108),s=n(1291),a=n(5854),c=i.aTypedArray,l=i.getTypedArrayConstructor,u=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var n=c(this),i=s(e),u=o(n)?a(t):+t;return r(n,l(n),i,u)}}["with"],!h)},3375:function(e,t,n){"use strict";n(7642)},9225:function(e,t,n){"use strict";n(8004)},3972:function(e,t,n){"use strict";n(3853)},9209:function(e,t,n){"use strict";n(5876)},5714:function(e,t,n){"use strict";n(2475)},7561:function(e,t,n){"use strict";n(5024)},6197:function(e,t,n){"use strict";n(1698)},4979:function(e,t,n){"use strict";var r=n(6518),i=n(4475),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),l=n(679),u=n(3167),h=n(2603),d=n(5002),p=n(6193),f=n(3724),m=n(6395),g="DOMException",v=o("Error"),y=o(g),_=function(){l(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=new v(t);return i.name=g,a(r,"stack",s(1,p(i.stack,1))),u(r,this,_),r},w=_.prototype=y.prototype,b="stack"in new v(g),C="stack"in new y(1,2),I=y&&f&&Object.getOwnPropertyDescriptor(i,g),S=!!I&&!(I.writable&&I.configurable),E=b&&!S&&!C;r({global:!0,constructor:!0,forced:m||E},{DOMException:E?_:y});var T=o(g),k=T.prototype;if(k.constructor!==T)for(var x in m||a(k,"constructor",s(1,T)),d)if(c(d,x)){var A=d[x],O=A.s;c(T,O)||a(T,O,s(6,A.c))}},4603:function(e,t,n){"use strict";var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.append),u=i(c["delete"]),h=i(c.forEach),d=i([].push),p=new a("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),s(t,1);var i,a=o(e),c=o(n),p=0,f=0,m=!1,g=r.length;while(p<g)i=r[p++],m||i.key===a?(m=!0,u(this,i.key)):f++;while(f<g)i=r[f++],i.key===a&&i.value===c||l(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){"use strict";var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.getAll),u=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=l(this,e);s(t,1);var i=o(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){"use strict";var r=n(3724),i=n(9504),o=n(2106),s=URLSearchParams.prototype,a=i(s.forEach);r&&!("size"in s)&&o(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){"use strict";n.d(t,{MF:function(){return ye},j6:function(){return pe},xZ:function(){return fe},om:function(){return de},Sx:function(){return we},Wp:function(){return _e},KO:function(){return be}});n(4114);var r=n(852),i=n(1363),o=n(4046);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(C(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(I(this),t),C(h.get(this))}:function(...t){return C(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return p.set(r,t.sort?t.sort():[t]),C(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,l())?new Proxy(e,y):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(f.has(e))return f.get(e);const t=b(e);return t!==e&&(f.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=C(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(C(s.result),e.oldVersion,e.newVersion,C(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],k=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return k.set(t,o),o}_((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",L="0.10.5",R=new i.Vy("@firebase/app"),N="@firebase/app-compat",D="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",q="@firebase/database",$="@firebase/database-compat",H="@firebase/functions",W="@firebase/functions-compat",V="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/vertexai-preview",re="@firebase/firestore-compat",ie="firebase",oe="10.12.2",se="[DEFAULT]",ae={[P]:"fire-core",[N]:"fire-core-compat",[M]:"fire-analytics",[D]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[q]:"fire-rtdb",[$]:"fire-rtdb-compat",[H]:"fire-fn",[W]:"fire-fn-compat",[V]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[re]:"fire-fst-compat",[ne]:"fire-vertex","fire-js":"fire-js",[ie]:"fire-js-all"},ce=new Map,le=new Map,ue=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function de(e){const t=e.name;if(ue.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const n of ce.values())he(n,e);for(const n of le.values())he(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ge=new o.FA("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye=oe;function _e(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw ge.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw ge.create("no-options");const a=ce.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw ge.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of ue.values())c.addComponent(r);const l=new ve(n,i,c);return ce.set(s,l),l}function we(e=se){const t=ce.get(e);if(!t&&e===se&&(0,o.T9)())return _e();if(!t)throw ge.create("no-app",{appName:e});return t}function be(e,t,n){var i;let o=null!==(i=ae[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}de(new r.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ce="firebase-heartbeat-database",Ie=1,Se="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=S(Ce,Ie,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Se)}catch(n){console.warn(n)}}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function ke(e){try{const t=await Te(),n=t.transaction(Se),r=await n.objectStore(Se).get(Ae(e));return await n.done,r}catch(t){if(t instanceof o.g)R.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function xe(e,t){try{const n=await Te(),r=n.transaction(Se,"readwrite"),i=r.objectStore(Se);await i.put(t,Ae(e)),await r.done}catch(n){if(n instanceof o.g)R.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1024,Pe=2592e6;class Le{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Re();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Pe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Re(),{heartbeatsToSend:n,unsentEntries:r}=Ne(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Ne(e,t=Oe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Me(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Me(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Me(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){de(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),de(new r.uA("heartbeat",(e=>new Le(e)),"PRIVATE")),be(P,L,e),be(P,L,"esm2017"),be("fire-js","")}Fe("")},852:function(e,t,n){"use strict";n.d(t,{h1:function(){return l},uA:function(){return i}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){"use strict";n.d(t,{$b:function(){return i},Vy:function(){return l}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},6400:function(e,t,n){"use strict";n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",o="10.12.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,o,"app")},114:function(e,t,n){"use strict";n.d(t,{HF:function(){return Et},eJ:function(){return Bt},xI:function(){return ei},hg:function(){return Wt},J1:function(){return Ut},x9:function(){return qt},df:function(){return Wn},CI:function(){return Vt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),o=n(1363);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function p(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw _(e,...t)}function m(e,...t){return _(e,...t)}function g(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function v(e){return g(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function w(e,t,...n){if(!e)throw _(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function C(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===E()||"https:"===E()}function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},L=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,r,o={}){return D(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw B(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw B(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);f(e,a)}}catch(o){if(o instanceof i.g)throw o;f(e,"network-request-failed",{message:String(o)})}}async function M(e,t,n,r,i={}){const o=await N(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}function j(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return void 0!==e&&void 0!==e.enterprise}class ${constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return j(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return N(e,"GET","/v2/recaptchaConfig",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return N(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=Y(r);w(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:z(G(o.auth_time)),issuedAtTime:z(G(o.iat)),expirationTime:z(G(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function Y(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(o){return p("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function J(e){const t=Y(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&X(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Q(e,V(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ie(o.providerUserInfo):[],a=re(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ee(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ne(e){const t=(0,i.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await D(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=F(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return N(e,"POST","/v2/accounts:revokeToken",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=J(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ae;return n&&(w("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Q(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await Q(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:C,stsTokenManager:I}=t;w(y&&I,e,"internal-error");const S=ae.fromJSON(this.name,I);w("string"===typeof y,e,"internal-error"),ce(u,e.name),ce(h,e.name),w("boolean"===typeof _,e,"internal-error"),w("boolean"===typeof b,e,"internal-error"),ce(d,e.name),ce(p,e.name),ce(f,e.name),ce(m,e.name),ce(g,e.name),ce(v,e.name);const E=new le({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return C&&Array.isArray(C)&&(E.providerData=C.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];w(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ie(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new ae;s.updateFromIdToken(n);const a=new le({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ee(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function he(e){C(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const pe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(he(pe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(pe);const o=fe(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=le._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ce(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||_e(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _e(e=(0,i.ZQ)()){return/crios\//i.test(e)}function we(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function be(e=(0,i.ZQ)()){return/android/i.test(e)}function Ce(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ie(e=(0,i.ZQ)()){return/webos/i.test(e)}function Se(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ee(e=(0,i.ZQ)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Te(){return(0,i.lT)()&&10===document.documentMode}function ke(e=(0,i.ZQ)()){return Se(e)||be(e)||Ie(e)||Ce(e)||/windows phone/i.test(e)||we(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t={}){return N(e,"GET","/v2/passwordPolicy",R(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=6;class Re{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:Le,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.beforeStateQueue=new Oe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await V(this,{idToken:e}),n=await le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pe(this),t=new Re(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,i.Ku)(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function je(e){Fe=e}function Ue(e){return Fe.loadJS(e)}function Be(){return Fe.recaptchaEnterpriseScript}function qe(){return Fe.gapiScript}function $e(e){return`__${e}${Math.floor(1e6*Math.random())}`}const He="recaptcha-enterprise",We="NO_RECAPTCHA";class Ve{constructor(e){this.type=He,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{H(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new $(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;q(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(We)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&q(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Be();0!==t.length&&(t+=n),Ue(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ze(e,t,n,r=!1){const i=new Ve(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ke(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function Ye(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Je(e,t,n){const r=De(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Qe(t),{host:s,port:a}=Xe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||et()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ze(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ze(t)}}}function Ze(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function et(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return N(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}async function it(e,t){return N(e,"POST","/v1/accounts:sendOobCode",R(e,t))}async function ot(e,t){return it(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function at(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends tt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ct(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ct(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,t,"signInWithPassword",rt);case"emailLink":return st(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,n,"signUpPassword",nt);case"emailLink":return at(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="http://localhost";class ht extends tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ht(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,lt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}buildRequest(){const e={requestUri:ut,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function pt(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function ft(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const mt={["USER_NOT_FOUND"]:"user-not-found"};async function gt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),mt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends tt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new vt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return pt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ft(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new vt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _t(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class wt{constructor(e){var t,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=yt(null!==(r=c["mode"])&&void 0!==r?r:null);w(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=_t(e);try{return new wt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(){this.providerId=bt.PROVIDER_ID}static credential(e,t){return ct._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=wt.parseLink(t);return w(n,"argument-error"),ct._fromEmailAndCode(e,n.code,n.tenantId)}}bt.PROVIDER_ID="password",bt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends It{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch(t){return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com",St.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends It{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ht._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Et.credential(t,n)}catch(r){return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com",Et.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends It{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch(t){return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com",Tt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends It{constructor(){super("twitter.com")}static credential(e,t){return ht._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return kt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(e,t){return M(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.TWITTER_SIGN_IN_METHOD="twitter.com",kt.PROVIDER_ID="twitter.com";class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),o=Ot(n),s=new At({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ot(n);return new At({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Pt(e,t,n,r)}}function Lt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r=await Q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return At._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const o="reauthenticate";try{const r=await Q(e,Lt(i,o,t,e),n);w(r.idToken,i,"internal-error");const s=Y(r.idToken);w(s,i,"internal-error");const{sub:a}=s;return w(e.uid===a,i,"user-mismatch"),At._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",o=await Lt(e,i,t),s=await At._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(s.user),s}async function Mt(e,t){return Dt(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ft(e,t,n){var r;w((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),w("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(w(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(w(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Ut(e,t,n){const r=De(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Ft(r,i,n),await Ke(r,i,"getOobCode",ot)}async function Bt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=De(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=Ke(i,o,"signUpPassword",xt),a=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&jt(e),t})),c=await At._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function qt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(v(e)):Mt((0,i.Ku)(e),bt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&jt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Ht(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Wt(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function Vt(e){return(0,i.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Kt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function Gt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Yt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const Jt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jt,"1"),this.storage.removeItem(Jt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){const e=(0,i.ZQ)();return ye(e)||Se(e)}const Zt=1e3,en=10;class tn extends Qt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xt()&&xe(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Te()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,en):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Zt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tn.type="LOCAL";const nn=tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Qt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rn.type="SESSION";const on=rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new an(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await sn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.receivers=[];class ln{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=cn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function hn(e){un().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return"undefined"!==typeof un()["WorkerGlobalScope"]&&"function"===typeof un()["importScripts"]}async function pn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function fn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function mn(){return dn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="firebaseLocalStorageDb",vn=1,yn="firebaseLocalStorage",_n="fbase_key";class wn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function bn(e,t){return e.transaction([yn],t?"readwrite":"readonly").objectStore(yn)}function Cn(){const e=indexedDB.deleteDatabase(gn);return new wn(e).toPromise()}function In(){const e=indexedDB.open(gn,vn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(yn,{keyPath:_n})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(yn)?t(n):(n.close(),await Cn(),t(await In()))}))}))}async function Sn(e,t,n){const r=bn(e,!0).put({[_n]:t,value:n});return new wn(r).toPromise()}async function En(e,t){const n=bn(e,!1).get(t),r=await new wn(n).toPromise();return void 0===r?null:r.value}function Tn(e,t){const n=bn(e,!0).delete(t);return new wn(n).toPromise()}const kn=800,xn=3;class An{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await In()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>xn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=an._getInstance(mn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await pn(),!this.activeServiceWorker)return;this.sender=new ln(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&fn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await In();return await Sn(e,Jt,"1"),await Tn(e,Jt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Sn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>En(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Tn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=bn(e,!1).getAll();return new wn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),kn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}An.type="LOCAL";const On=An;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function Ln(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function Rn(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$e("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nn="recaptcha";async function Dn(e,t,n){var r;const i=await n.verify();try{let o;if(w("string"===typeof i,e,"argument-error"),w(n.type===Nn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){w("enroll"===t.type,e,"internal-error");const n=await zt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;w(n,e,"missing-multi-factor-info");const s=await Pn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await dt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{constructor(e){this.providerId=Mn.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return Dn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return vt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Mn.credentialFromTaggedObject(t)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?vt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e,t){return t?he(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.PROVIDER_ID="phone",Mn.PHONE_SIGN_IN_METHOD="phone";class jn extends tt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Un(e){return Dt(e.auth,new jn(e),e.bypassAuthState)}function Bn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Nt(n,new jn(e),e.bypassAuthState)}async function qn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Rt(n,new jn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Un;case"linkViaPopup":case"linkViaRedirect":return qn;case"reauthViaPopup":case"reauthViaRedirect":return Bn;default:f(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new x(2e3,1e4);async function Wn(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(m(e,"operation-not-supported-in-this-environment"));const i=De(e);y(e,t,Ct);const o=Fn(i,n),s=new Vn(i,"signInViaPopup",t,o);return s.executeNotNull()}class Vn extends $n{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=cn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Hn.get())};e()}}Vn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zn="pendingRedirect",Kn=new Map;class Gn extends $n{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kn.get(this.auth._key());if(!e){try{const t=await Yn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Kn.set(this.auth._key(),e)}return this.bypassAuthState||Kn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Yn(e,t){const n=Xn(t),r=Qn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Jn(e,t){Kn.set(e._key(),t)}function Qn(e){return he(e._redirectPersistence)}function Xn(e){return fe(zn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=De(e),o=Fn(i,t),s=new Gn(i,o,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const er=6e5;class tr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!ir(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!rr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=er&&this.cachedEventUids.clear(),this.cachedEventUids.has(nr(e))}saveEventToCache(e){this.cachedEventUids.add(nr(e)),this.lastProcessedEventTime=Date.now()}}function nr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function rr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ir(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e,t={}){return N(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ar=/^https?/;async function cr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await or(e);for(const r of t)try{if(lr(r))return}catch(n){}f(e,"unauthorized-domain")}function lr(e){const t=I(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ar.test(n))return!1;if(sr.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new x(3e4,6e4);function hr(){const e=un().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function dr(e){return new Promise(((t,n)=>{var r,i,o;function s(){hr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hr(),n(m(e,"network-request-failed"))},timeout:ur.get()})}if(null===(i=null===(r=un().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=un().gapi)||void 0===o?void 0:o.load)){const t=$e("iframefcb");return un()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},Ue(`${qe()}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw pr=null,e}))}let pr=null;function fr(e){return pr=pr||dr(e),pr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new x(5e3,15e3),gr="__/auth/iframe",vr="emulator/auth/iframe",yr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_r=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wr(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,vr):`https://${e.config.authDomain}/${gr}`,o={apiKey:t.apiKey,appName:e.name,v:r.MF},s=_r.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function br(e){const t=await fr(e),n=un().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:wr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),o=un().setTimeout((()=>{r(i)}),mr.get());function s(){un().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ir=500,Sr=600,Er="_blank",Tr="http://localhost";class kr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function xr(e,t,n,r=Ir,o=Sr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Cr),{width:r.toString(),height:o.toString(),top:s,left:a}),u=(0,i.ZQ)().toLowerCase();n&&(c=_e(u)?Er:n),ve(u)&&(t=t||Tr,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ee(u)&&"_self"!==c)return Ar(t||"",c),new kr(null);const d=window.open(t||"",c,h);w(d,e,"popup-blocked");try{d.focus()}catch(p){}return new kr(d)}function Ar(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="__/auth/handler",Pr="emulator/auth/handler",Lr=encodeURIComponent("fac");async function Rr(e,t,n,o,s,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.MF,eventId:s};if(t instanceof Ct){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof It){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const u=await e._getAppCheckToken(),h=u?`#${Lr}=${encodeURIComponent(u)}`:"";return`${Nr(e)}?${(0,i.Am)(l).slice(1)}${h}`}function Nr({config:e}){return e.emulator?A(e,Pr):`https://${e.authDomain}/${Or}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="webStorageSupport";class Mr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=on,this._completeRedirectFn=Zn,this._overrideRedirectResult=Jn}async _openPopup(e,t,n,r){var i;C(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rr(e,t,n,I(),r);return xr(e,o,cn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Rr(e,t,n,I(),r);return hn(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await br(e),n=new tr(e);return t.register("authEvent",(t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Dr,{type:Dr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Dr];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ye()||Se()}}const Fr=Mr;class jr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Ur extends jr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ur(e)}_finalizeEnroll(e,t,n){return Kt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ln(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Br{constructor(){}static assertion(e){return Ur._fromCredential(e)}}Br.FACTOR_ID="phone";class qr{static assertionForEnrollment(e,t){return $r._fromSecret(e,t)}static assertionForSignIn(e,t){return $r._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Gt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Hr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}qr.FACTOR_ID="totp";class $r extends jr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new $r(t,void 0,e)}static _fromEnrollmentId(e,t){return new $r(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),Yt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Rn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Hr{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Hr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Wr(e)||Wr(t))&&(r=!0),r&&(Wr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Wr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Wr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Vr="@firebase/auth",zr="1.7.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;w(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},l=new Ne(r,i,o,c);return Ye(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Kr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Vr,zr,Gr(e)),(0,r.KO)(Vr,zr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=300,Qr=(0,i.XA)("authIdTokenMaxAge")||Jr;let Xr=null;const Zr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qr)return;const i=null===n||void 0===n?void 0:n.token;Xr!==i&&(Xr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ei(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ge(e,{popupRedirectResolver:Fr,persistence:[On,nn,on]}),o=(0,i.XA)("authTokenSyncURL");if(o&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(o,location.origin);if(location.origin===e.origin){const t=Zr(e.toString());Ht(n,t,(()=>t(n.currentUser))),$t(n,(e=>t(e)))}}const s=(0,i.Tj)("auth");return s&&Je(n,`http://${s}`),n}function ti(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}je({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ti().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Yr("Browser")},4161:function(e,t,n){"use strict";n.d(t,{iz:function(){return wa},Jt:function(){return sa},C3:function(){return Oa},pk:function(){return fa},kT:function(){return ga},JK:function(){return ya},VC:function(){return na},P:function(){return ba},KR:function(){return ea},TF:function(){return ra},hZ:function(){return ia},HM:function(){return da},yo:function(){return oa}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(3405),i=n(852),o=n(4046),s=n(1363);const a="@firebase/database",c="1.0.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),m=p("sessionStorage"),g=new s.Vy("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,o.kj)(e),n=new o.gz;n.update(t);const r=n.digest();return o.K3.encodeByteArray(r)},_=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=_.apply(null,r):t+="object"===typeof r?(0,o.As)(r):r,t+=" "}return t};let w=null,b=!0;const C=function(e,t){(0,o.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=s.$b.VERBOSE,w=g.log.bind(g),t&&m.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,m.remove("logging_enabled"))},I=function(...e){if(!0===b&&(b=!1,null===w&&!0===m.get("logging_enabled")&&C(!0)),w){const t=_.apply(null,e);w(t)}},S=function(e){return function(...t){I(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+_(...e);g.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${_(...e)}`;throw g.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+_(...e);g.warn(t)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},O=function(e){if((0,o.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",L="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===P||t===L)return-1;if(t===P||e===L)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},N=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.As)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,o.As)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.As)(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function j(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){(0,o.vA)(!A(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,l;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},B=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function $(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const H=new RegExp("^-?(0*)\\d{1,10}$"),W=-2147483648,V=2147483647,z=function(e){if(H.test(e)){const t=Number(e);if(t>=W&&t<=V)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if((0,o.vA)("string"===typeof t,"typeof type must == string"),(0,o.vA)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return j(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},me={};function ge(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function ve(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="start",we="close",be="pLPCommand",Ce="pRTLPCB",Ie="id",Se="pw",Ee="ser",Te="cb",ke="seg",xe="ts",Ae="d",Oe="dframe",Pe=1870,Le=30,Re=Pe-Le,Ne=25e3,De=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(De)),O((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===_e)this.id=n,this.password=r;else{if(t!==we)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[_e]="t",e[Ee]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,o.$g)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!B()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.KA)(t),r=F(n,Re);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Oe]="t",n[Ie]=e,n[Se]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[be+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){I("frame writing exception"),i.stack&&I(i.stack),I(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||I("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ie]=this.myID,e[Se]=this.myPW,e[Ee]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Le+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+r+"="+e.seg+"&"+xe+r+"="+e.ts+"&"+Ae+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ne)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,o.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{I("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=16384,Ue=45e3;let Be=null;"undefined"!==typeof MozWebSocket?Be=MozWebSocket:"undefined"!==typeof WebSocket&&(Be=WebSocket);class qe{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=ge(t),this.connURL=qe.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[ee]=Z,!(0,o.$g)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(s[ne]=re),t&&(s[te]=t),n&&(s[oe]=n),r&&(s[ae]=r),i&&(s[se]=i),de(e,ce,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,o.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/gallery/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new Be(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Be&&!qe.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,je);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of $e.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);$e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$e.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const He=6e4,We=5e3,Ve=10240,ze=102400,Ke="t",Ge="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new $e(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ve?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?E("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(We))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,o.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,o.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function yt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function _t(e){return e.pieceNum_>=e.pieces_.length}function wt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return wt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){const n=gt(e,0),r=gt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=R(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function It(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class St{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.OE)(this.parts_[n]);kt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.OE)(t),kt(e)}function Tt(e){const t=e.parts_.pop();e.byteLength_-=(0,o.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function kt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+xt(e))}function xt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new At}getInitialEvent(e){return(0,o.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=1e3,Pt=3e5,Lt=3e4,Rt=1.3,Nt=3e4,Dt="server_kill",Mt=3;class Ft extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ft.nextPersistentConnectionId_++,this.log_=S("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ot,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");At.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.As)(i)),(0,o.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.cY,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.vA)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];Ft.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.gR)(e,"w")){const n=(0,o.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+(0,o.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Nt&&(this.reconnectDelay_=Ot),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ft.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(e){(0,o.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)}),i))}catch(E){this.log_("Failed to get token: "+E),s||(this.repoInfo_.nodeAdmin&&k(E),c())}}}interrupt(e){I("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){I("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){I("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Lt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){I("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,o.jZ)()?e["framework.cordova"]=1:(0,o.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,o.Im)(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new jt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new jt(P,e),r=new jt(P,t);return 0!==this.compare(n,r)}minPost(){return jt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class qt extends Ut{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw(0,o.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return jt.MIN}maxPost(){return new jt(L,Bt)}makePost(e,t){return(0,o.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new jt(e,Bt)}toString(){return".key"}}const $t=new qt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Wt.RED,this.left=null!=r?r:zt.EMPTY_NODE,this.right=null!=i?i:zt.EMPTY_NODE}copy(e,t,n,r,i){return new Wt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0,Wt.BLACK=!1;class Vt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ht(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ht(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(e,t){return R(e.name,t.name)}function Gt(e,t){return R(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Jt(e){Yt=e}zt.EMPTY_NODE=new Vt;const Qt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.gR)(t,".sv"),"Priority must be a string or number.")}else(0,o.vA)(e===Yt||e.isEmpty(),"priority of unexpected type.");(0,o.vA)(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _t(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.vA)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:((0,o.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.vA)(r>=0,"Unknown leaf type: "+t),(0,o.vA)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return jt.MIN}maxPost(){return new jt(L,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new jt(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Wt(a,s.node,Wt.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=i(t,c),u=i(c+1,r);return s=e[c],a=n?n(s):s,new Wt(a,s.node,Wt.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const l=i(o+1,a),u=e[o],h=n?n(u):u;c(new Wt(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Wt.BLACK):(a(r,Wt.BLACK),a(r,Wt.RED))}return o},s=new ln(e.length),a=o(s);return new zt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.vA)(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new pn({".priority":dn},{".priority":an}),hn}get(e){const t=(0,o.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return(0,o.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.vA)(e!==$t,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(jt.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?un(n,e.getCompare()):dn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=s,new pn(u,l)}addToIndexes(e,t){const n=(0,o.kH)(this.indexes_,((n,r)=>{const i=(0,o.yw)(this.indexSet_,r);if((0,o.vA)(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(jt.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),un(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new jt(e.name,r))),i.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.kH)(this.indexes_,(n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new jt(e.name,r)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&(0,o.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new mn(new zt(Gt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new jt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?fn:this.priorityNode_;return new mn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,o.vA)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,((o,s)=>{t[o]=s.val(e),n++,i&&mn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new jt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new jt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new jt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,jt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,jt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===$t||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$t||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===$t?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends mn{constructor(){super(new zt(Gt),mn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const vn=new gn;Object.defineProperties(jt,{MIN:{value:new jt(P,mn.EMPTY_NODE)},MAX:{value:new jt(L,vn)}}),qt.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Jt(vn),on(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function _n(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,_n(t))}if(e instanceof Array||!yn){let n=mn.EMPTY_NODE;return j(e,((t,r)=>{if((0,o.gR)(e,t)&&"."!==t.substring(0,1)){const e=_n(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(_n(t))}{const n=[];let r=!1;const i=e;if(j(i,((e,t)=>{if("."!==e.substring(0,1)){const i=_n(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new jt(e,i)))}})),0===n.length)return mn.EMPTY_NODE;const o=un(n,Kt,(e=>e.name),Gt);if(r){const e=un(n,an.getCompare());return new mn(o,_n(t),new pn({".priority":e},{".priority":an}))}return new mn(o,_n(t),pn.Default)}}rn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends Ut{constructor(e){super(),this.indexPath_=e,(0,o.vA)(!_t(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}makePost(e,t){const n=_n(e),r=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new jt(t,r)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new jt(L,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return jt.MIN}maxPost(){return jt.MAX}makePost(e,t){const n=_n(e);return new jt(t,n)}toString(){return".value"}}const Cn=new bn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){return{type:"value",snapshotNode:e}}function Sn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function kn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(En(t,a)):(0,o.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Sn(t,n)):s.trackChildChange(Tn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,((e,r)=>{t.hasChild(e)||n.trackChildChange(En(e,r))})),t.isLeafNode()||t.forEachChild(an,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Tn(t,r,i))}else n.trackChildChange(Sn(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?mn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.indexedFilter_=new xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=An.getStartPost_(e),this.endPost_=An.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new jt(t,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=mn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(mn.EMPTY_NODE);const i=this;return t.forEachChild(an,((e,t)=>{i.matches(new jt(e,t))||(r=r.updateImmediateChild(e,mn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new An(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new jt(t,n))||(n=mn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=mn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(mn.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),i=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);i?n++:r=r.updateImmediateChild(t.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.vA)(a.numChildren()===this.limit_,"");const c=new jt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Tn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(En(t,e));const n=a.updateImmediateChild(t,mn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(Sn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(En(l.name,l.node)),i.trackChildChange(Sn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,mn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:L}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Pn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ln(e){return e.loadsAllData()?new xn(e.getIndex()):e.hasLimit()?new On(e):new An(e)}function Rn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Nn(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Dn(e,t,n){let r;return r=e.index_===$t||n?Nn(e,t,n):Nn(e,t,L),r.startAfterSet_=!0,r}function Mn(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Fn(e,t){const n=e.copy();return n.index_=t,n}function jn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===an?n="$priority":e.index_===Cn?n="$value":e.index_===$t?n="$key":((0,o.vA)(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Un(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=S("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Bn.getListenId_(e,n),a={};this.listens_[s]=a;const c=jn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,o.yw)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Bn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=jn(e._queryParams),n=e._path.toString(),r=new o.cY;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.Am)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.$L)(a.responseText)}catch(e){k("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return{value:null,children:new Map}}function Hn(e,t,n){if(_t(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,$n());const i=e.children.get(r);t=pt(t),Hn(i,t,n)}}function Wn(e,t,n){null!==e.value?n(t,e.value):Vn(e,((e,r)=>{const i=new lt(t.toString()+"/"+e);Wn(r,i,n)}))}function Vn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&j(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=1e4,Gn=3e4,Yn=3e5;class Jn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zn(e);const n=Kn+(Gn-Kn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;j(e,((e,r)=>{r>0&&(0,o.gR)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Yn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn;function Xn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function er(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Qn||(Qn={}));class tr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Qn.ACK_USER_WRITE,this.source=Xn()}operationForChild(e){if(_t(this.path)){if(null!=this.affectedTree.value)return(0,o.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new tr(ut(),t,this.revert)}}return(0,o.vA)(ht(this.path)===e,"operationForChild called for unrelated child."),new tr(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.source=e,this.path=t,this.type=Qn.LISTEN_COMPLETE}operationForChild(e){return _t(this.path)?new nr(this.source,ut()):new nr(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Qn.OVERWRITE}operationForChild(e){return _t(this.path)?new rr(this.source,ut(),this.snap.getImmediateChild(e)):new rr(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Qn.MERGE}operationForChild(e){if(_t(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new rr(this.source,ut(),t.value):new ir(this.source,ut(),t)}return(0,o.vA)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ir(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_t(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ar(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(kn(t.childName,t.snapshotNode))})),cr(e,i,"child_removed",t,r,n),cr(e,i,"child_added",t,r,n),cr(e,i,"child_moved",o,r,n),cr(e,i,"child_changed",t,r,n),cr(e,i,"value",t,r,n),i}function cr(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>ur(e,t,n))),s.forEach((n=>{const r=lr(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function lr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ur(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.Hk)("Should only compare child_ events.");const r=new jt(t.childName,t.snapshotNode),i=new jt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t){return{eventCache:e,serverCache:t}}function dr(e,t,n,r){return hr(new or(t,n,r),e.serverCache)}function pr(e,t,n,r){return hr(e.eventCache,new or(t,n,r))}function fr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function mr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;const vr=()=>(gr||(gr=new zt(N)),gr);class yr{constructor(e,t=vr()){this.value=e,this.children=t}static fromObject(e){let t=new yr(null);return j(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(_t(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(pt(e),t);if(null!=i){const e=yt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(_t(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new yr(null)}}set(e,t){if(_t(e))return new yr(t,this.children);{const n=ht(e),r=this.children.get(n)||new yr(null),i=r.set(pt(e),t),o=this.children.insert(n,i);return new yr(this.value,o)}}remove(e){if(_t(e))return this.children.isEmpty()?new yr(null):new yr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(pt(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new yr(null):new yr(this.value,i)}return this}}get(e){if(_t(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(_t(e))return t;{const n=ht(e),r=this.children.get(n)||new yr(null),i=r.setTree(pt(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new yr(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(yt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(_t(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(pt(e),yt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(_t(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(pt(e),yt(t,r),n):new yr(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(yt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.writeTree_=e}static empty(){return new _r(new yr(null))}}function wr(e,t,n){if(_t(t))return new _r(new yr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=wt(i,t);return o=o.updateChild(s,n),new _r(e.writeTree_.set(i,o))}{const r=new yr(n),i=e.writeTree_.setTree(t,r);return new _r(i)}}}function br(e,t,n){let r=e;return j(n,((e,n)=>{r=wr(r,yt(t,e),n)})),r}function Cr(e,t){if(_t(t))return _r.empty();{const n=e.writeTree_.setTree(t,new yr(null));return new _r(n)}}function Ir(e,t){return null!=Sr(e,t)}function Sr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wt(n.path,t)):null}function Er(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,((e,n)=>{t.push(new jt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new jt(e,n.value))})),t}function Tr(e,t){if(_t(t))return e;{const n=Sr(e,t);return new _r(null!=n?new yr(n):e.writeTree_.subtree(t))}}function kr(e){return e.writeTree_.isEmpty()}function xr(e,t){return Ar(ut(),e.writeTree_,t)}function Ar(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.vA)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ar(yt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(yt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t){return Zr(t,e)}function Pr(e,t,n,r,i){(0,o.vA)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=wr(e.visibleWrites,t,n)),e.lastWriteId=r}function Lr(e,t,n,r){(0,o.vA)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=br(e.visibleWrites,t,n),e.lastWriteId=r}function Rr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Nr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.vA)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Dr(t,r.path)?i=!1:It(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Mr(e),!0;if(r.snap)e.visibleWrites=Cr(e.visibleWrites,r.path);else{const t=r.children;j(t,(t=>{e.visibleWrites=Cr(e.visibleWrites,yt(r.path,t))}))}return!0}return!1}function Dr(e,t){if(e.snap)return It(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&It(yt(e.path,n),t))return!0;return!1}function Mr(e){e.visibleWrites=jr(e.allWrites,Fr,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Fr(e){return e.visible}function jr(e,t,n){let r=_r.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)It(n,e)?(t=wt(n,e),r=wr(r,t,s.snap)):It(e,n)&&(t=wt(e,n),r=wr(r,ut(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.Hk)("WriteRecord should have .snap or .children");if(It(n,e))t=wt(n,e),r=br(r,t,s.children);else if(It(e,n))if(t=wt(e,n),_t(t))r=br(r,ut(),s.children);else{const e=(0,o.yw)(s.children,ht(t));if(e){const n=e.getChild(pt(t));r=wr(r,ut(),n)}}}}}return r}function Ur(e,t,n,r,i){if(r||i){const o=Tr(e.visibleWrites,t);if(!i&&kr(o))return n;if(i||null!=n||Ir(o,ut())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(It(e.path,t)||It(t,e.path))},s=jr(e.allWrites,o,t),a=n||mn.EMPTY_NODE;return xr(s,a)}return null}{const r=Sr(e.visibleWrites,t);if(null!=r)return r;{const r=Tr(e.visibleWrites,t);if(kr(r))return n;if(null!=n||Ir(r,ut())){const e=n||mn.EMPTY_NODE;return xr(r,e)}return null}}}function Br(e,t,n){let r=mn.EMPTY_NODE;const i=Sr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Tr(e.visibleWrites,t);return n.forEachChild(an,((e,t)=>{const n=xr(Tr(i,new lt(e)),t);r=r.updateImmediateChild(e,n)})),Er(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=Tr(e.visibleWrites,t);return Er(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function qr(e,t,n,r,i){(0,o.vA)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=yt(t,n);if(Ir(e.visibleWrites,s))return null;{const t=Tr(e.visibleWrites,s);return kr(t)?i.getChild(n):xr(t,i.getChild(n))}}function $r(e,t,n,r){const i=yt(t,n),o=Sr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Tr(e.visibleWrites,i);return xr(t,r.getNode().getImmediateChild(n))}return null}function Hr(e,t){return Sr(e.visibleWrites,t)}function Wr(e,t,n,r,i,o,s){let a;const c=Tr(e.visibleWrites,t),l=Sr(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=xr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Vr(){return{visibleWrites:_r.empty(),allWrites:[],lastWriteId:-1}}function zr(e,t,n,r){return Ur(e.writeTree,e.treePath,t,n,r)}function Kr(e,t){return Br(e.writeTree,e.treePath,t)}function Gr(e,t,n,r){return qr(e.writeTree,e.treePath,t,n,r)}function Yr(e,t){return Hr(e.writeTree,yt(e.treePath,t))}function Jr(e,t,n,r,i,o){return Wr(e.writeTree,e.treePath,t,n,r,i,o)}function Qr(e,t,n){return $r(e.writeTree,e.treePath,t,n)}function Xr(e,t){return Zr(yt(e.treePath,t),e.writeTree)}function Zr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Tn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,En(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Sn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.Hk)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Tn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const ni=new ti;class ri{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:mr(this.viewCache_),i=Jr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){return{filter:e}}function oi(e,t){(0,o.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function si(e,t,n,r,i){const s=new ei;let a,c;if(n.type===Qn.OVERWRITE){const l=n;l.source.fromUser?a=ui(e,t,l.path,l.snap,r,i,s):((0,o.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!_t(l.path),a=li(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===Qn.MERGE){const l=n;l.source.fromUser?a=di(e,t,l.path,l.children,r,i,s):((0,o.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=fi(e,t,l.path,l.children,r,i,c,s))}else if(n.type===Qn.ACK_USER_WRITE){const o=n;a=o.revert?vi(e,t,o.path,r,i,s):mi(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Qn.LISTEN_COMPLETE)throw(0,o.Hk)("Unknown operation type: "+n.type);a=gi(e,t,n.path,r,s)}const l=s.getChanges();return ai(t,a,l),{viewCache:a,changes:l}}function ai(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=fr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(In(fr(t)))}}function ci(e,t,n,r,i,s){const a=t.eventCache;if(null!=Yr(r,n))return t;{let c,l;if(_t(n))if((0,o.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=mr(t),i=n instanceof mn?n:mn.EMPTY_NODE,o=Kr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=zr(r,mr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ht(n);if(".priority"===u){(0,o.vA)(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const s=Gr(r,n,i,l);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=pt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Gr(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=Qr(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return dr(t,c,a.isFullyInitialized()||_t(n),e.filter.filtersNodes())}}function li(e,t,n,r,i,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(_t(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=pt(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,ni,null)}const h=pr(t,l,c.isFullyInitialized()||_t(n),u.filtersNodes()),d=new ri(i,h,o);return ci(e,h,n,i,d,a)}function ui(e,t,n,r,i,o,s){const a=t.eventCache;let c,l;const u=new ri(i,t,o);if(_t(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=dr(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=dr(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=pt(n),l=a.getNode().getImmediateChild(i);let h;if(_t(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===ft(o)&&e.getChild(vt(o)).isEmpty()?e:e.updateChild(o,r):mn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,u,s);c=dr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function hi(e,t){return e.eventCache.isCompleteForChild(t)}function di(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const l=yt(n,r);hi(t,ht(l))&&(a=ui(e,a,l,c,i,o,s))})),r.foreach(((r,c)=>{const l=yt(n,r);hi(t,ht(l))||(a=ui(e,a,l,c,i,o,s))})),a}function pi(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function fi(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=_t(n)?r:new yr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=pi(e,c,r);l=li(e,l,new lt(n),u,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=pi(e,c,r);l=li(e,l,new lt(n),u,i,o,s,a)}})),l}function mi(e,t,n,r,i,o,s){if(null!=Yr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(_t(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return li(e,t,n,c.getNode().getChild(n),i,o,a,s);if(_t(n)){let r=new yr(null);return c.getNode().forEachChild($t,((e,t)=>{r=r.set(new lt(e),t)})),fi(e,t,n,r,i,o,a,s)}return t}{let l=new yr(null);return r.foreach(((e,t)=>{const r=yt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),fi(e,t,n,l,i,o,a,s)}}function gi(e,t,n,r,i){const o=t.serverCache,s=pr(t,o.getNode(),o.isFullyInitialized()||_t(n),o.isFiltered());return ci(e,s,n,r,ni,i)}function vi(e,t,n,r,i,s){let a;if(null!=Yr(r,n))return t;{const c=new ri(r,t,i),l=t.eventCache.getNode();let u;if(_t(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=zr(r,mr(t));else{const e=t.serverCache.getNode();(0,o.vA)(e instanceof mn,"serverChildren would be complete if leaf node"),n=Kr(r,e)}u=e.filter.updateFullNode(l,n,s)}else{const i=ht(n);let o=Qr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,pt(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,mn.EMPTY_NODE,pt(n),c,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=zr(r,mr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Yr(r,ut()),dr(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new xn(n.getIndex()),i=Ln(n);this.processor_=ii(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),l=new or(a,o.isFullyInitialized(),r.filtersNodes()),u=new or(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=hr(u,l),this.eventGenerator_=new sr(this.query_)}get query(){return this.query_}}function _i(e){return e.viewCache_.serverCache.getNode()}function wi(e){return fr(e.viewCache_)}function bi(e,t){const n=mr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!_t(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function Ci(e){return 0===e.eventRegistrations_.length}function Ii(e,t){e.eventRegistrations_.push(t)}function Si(e,t,n){const r=[];if(n){(0,o.vA)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ei(e,t,n,r){t.type===Qn.MERGE&&null!==t.source.queryId&&((0,o.vA)(mr(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.vA)(fr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=si(e.processor_,i,t,n,r);return oi(e.processor_,s.viewCache),(0,o.vA)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ki(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Ti(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,((e,t)=>{r.push(Sn(e,t))}))}return n.isFullyInitialized()&&r.push(In(n.getNode())),ki(e,r,n.getNode(),t)}function ki(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return ar(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi,Ai;class Oi{constructor(){this.views=new Map}}function Pi(e){(0,o.vA)(!xi,"__referenceConstructor has already been defined"),xi=e}function Li(){return(0,o.vA)(xi,"Reference.ts has not been loaded"),xi}function Ri(e){return 0===e.views.size}function Ni(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.vA)(null!=s,"SyncTree gave us an op for an invalid query."),Ei(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Ei(o,t,n,r));return i}}function Di(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=zr(n,i?r:null),o=!1;e?o=!0:r instanceof mn?(e=Kr(n,r),o=!1):(e=mn.EMPTY_NODE,o=!1);const s=hr(new or(e,o,!1),new or(r,i,!1));return new yi(t,s)}return s}function Mi(e,t,n,r,i,o){const s=Di(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),Ii(s,n),Ti(s,n)}function Fi(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=$i(e);if("default"===i)for(const[c,l]of e.views.entries())s=s.concat(Si(l,n,r)),Ci(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const t=e.views.get(i);t&&(s=s.concat(Si(t,n,r)),Ci(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!$i(e)&&o.push(new(Li())(t._repo,t._path)),{removed:o,events:s}}function ji(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ui(e,t){let n=null;for(const r of e.views.values())n=n||bi(r,t);return n}function Bi(e,t){const n=t._queryParams;if(n.loadsAllData())return Hi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function qi(e,t){return null!=Bi(e,t)}function $i(e){return null!=Hi(e)}function Hi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){(0,o.vA)(!Ai,"__referenceConstructor has already been defined"),Ai=e}function Vi(){return(0,o.vA)(Ai,"Reference.ts has not been loaded"),Ai}let zi=1;class Ki{constructor(e){this.listenProvider_=e,this.syncPointTree_=new yr(null),this.pendingWriteTree_=Vr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gi(e,t,n,r,i){return Pr(e.pendingWriteTree_,t,n,r,i),i?ao(e,new rr(Xn(),t,n)):[]}function Yi(e,t,n,r){Lr(e.pendingWriteTree_,t,n,r);const i=yr.fromObject(n);return ao(e,new ir(Xn(),t,i))}function Ji(e,t,n=!1){const r=Rr(e.pendingWriteTree_,t),i=Nr(e.pendingWriteTree_,t);if(i){let t=new yr(null);return null!=r.snap?t=t.set(ut(),!0):j(r.children,(e=>{t=t.set(new lt(e),!0)})),ao(e,new tr(r.path,t,n))}return[]}function Qi(e,t,n){return ao(e,new rr(Zn(),t,n))}function Xi(e,t,n){const r=yr.fromObject(n);return ao(e,new ir(Zn(),t,r))}function Zi(e,t){return ao(e,new nr(Zn(),t))}function eo(e,t,n){const r=fo(e,n);if(r){const n=mo(r),i=n.path,o=n.queryId,s=wt(i,t),a=new nr(er(o),s);return go(e,i,a)}return[]}function to(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||qi(s,t))){const c=Fi(s,t,n,r);Ri(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>$i(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=vo(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=uo(e,r);e.listenProvider_.startListening(yo(i),ho(e,i),o.hashFn,o.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(yo(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(po(t));e.listenProvider_.stopListening(yo(t),n)}))}_o(e,l)}return a}function no(e,t,n,r){const i=fo(e,r);if(null!=i){const r=mo(i),o=r.path,s=r.queryId,a=wt(o,t),c=new rr(er(s),a,n);return go(e,o,c)}return[]}function ro(e,t,n,r){const i=fo(e,r);if(i){const r=mo(i),o=r.path,s=r.queryId,a=wt(o,t),c=yr.fromObject(n),l=new ir(er(s),a,c);return go(e,o,l)}return[]}function io(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=wt(e,i);s=s||Ui(t,n),a=a||$i(t)}));let c,l=e.syncPointTree_.get(i);if(l?(a=a||$i(l),s=s||Ui(l,ut())):(l=new Oi,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)c=!0;else{c=!1,s=mn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Ui(t,ut());n&&(s=s.updateImmediateChild(e,n))}))}const u=qi(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=po(t);(0,o.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=wo();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Or(e.pendingWriteTree_,i);let d=Mi(l,t,n,h,s,c);if(!u&&!a&&!r){const n=Bi(l,t);d=d.concat(bo(e,t,n))}return d}function oo(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=wt(e,t),i=Ui(n,r);if(i)return i}));return Ur(i,t,o,n,r)}function so(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=wt(e,n);r=r||Ui(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Ui(i,ut()):(i=new Oi,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new or(r,!0,!1):null,a=Or(e.pendingWriteTree_,t._path),c=Di(i,t,a,o?s.getNode():mn.EMPTY_NODE,o);return wi(c)}function ao(e,t){return co(t,e.syncPointTree_,null,Or(e.pendingWriteTree_,ut()))}function co(e,t,n,r){if(_t(e.path))return lo(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Ui(i,ut()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Xr(r,s);o=o.concat(co(a,c,e,t))}return i&&(o=o.concat(Ni(i,e,r,n))),o}}function lo(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Ui(i,ut()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Xr(r,t),c=e.operationForChild(t);c&&(o=o.concat(lo(c,i,s,a)))})),i&&(o=o.concat(Ni(i,e,r,n))),o}function uo(e,t){const n=t.query,r=ho(e,n);return{hashFn:()=>{const e=_i(t)||mn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?eo(e,n._path,r):Zi(e,n._path);{const r=$(t,n);return to(e,n,null,r)}}}}function ho(e,t){const n=po(t);return e.queryToTagMap.get(n)}function po(e){return e._path.toString()+"$"+e._queryIdentifier}function fo(e,t){return e.tagToQueryMap.get(t)}function mo(e){const t=e.indexOf("$");return(0,o.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function go(e,t,n){const r=e.syncPointTree_.get(t);(0,o.vA)(r,"Missing sync point for query tag that we're tracking");const i=Or(e.pendingWriteTree_,t);return Ni(r,n,i,null)}function vo(e){return e.fold(((e,t,n)=>{if(t&&$i(t)){const e=Hi(t);return[e]}{let e=[];return t&&(e=ji(t)),j(n,((t,n)=>{e=e.concat(n)})),e}}))}function yo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Vi())(e._repo,e._path):e}function _o(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=po(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function wo(){return zi++}function bo(e,t,n){const r=t._path,i=ho(e,t),s=uo(e,n),a=e.listenProvider_.startListening(yo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,o.vA)(!$i(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!_t(e)&&t&&$i(t))return[Hi(t).query];{let e=[];return t&&(e=e.concat(ji(t).map((e=>e.query)))),j(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(yo(r),ho(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Co(t)}node(){return this.node_}}class Io{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new Io(this.syncTree_,t)}node(){return oo(this.syncTree_,this.path_)}}const So=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Eo=function(e,t,n){return e&&"object"===typeof e?((0,o.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?To(e[".sv"],t,n):"object"===typeof e[".sv"]?ko(e[".sv"],t):void(0,o.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},To=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.vA)(!1,"Unexpected server value: "+e)}},ko=function(e,t,n){e.hasOwnProperty("increment")||(0,o.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,o.vA)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.vA)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},xo=function(e,t,n,r){return Oo(t,new Io(n,e),r)},Ao=function(e,t,n){return Oo(e,new Co(t),n)};function Oo(e,t,n){const r=e.getPriority().val(),i=Eo(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Eo(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,_n(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(an,((e,r)=>{const i=Oo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Lo(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=(0,o.yw)(r.node.children,i)||{children:{},childCount:0};r=new Po(i,r,e),n=pt(n),i=ht(n)}return r}function Ro(e){return e.node.value}function No(e,t){e.node.value=t,qo(e)}function Do(e){return e.node.childCount>0}function Mo(e){return void 0===Ro(e)&&!Do(e)}function Fo(e,t){j(e.node.children,((n,r)=>{t(new Po(n,e,r))}))}function jo(e,t,n,r){n&&!r&&t(e),Fo(e,(e=>{jo(e,t,!0,r)})),n&&r&&t(e)}function Uo(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Bo(e){return new lt(null===e.parent?e.name:Bo(e.parent)+"/"+e.name)}function qo(e){null!==e.parent&&$o(e.parent,e.name,e)}function $o(e,t,n){const r=Mo(n),i=(0,o.gR)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,qo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,qo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=/[\[\].#$\/\u0000-\u001F\u007F]/,Wo=/[\[\].#$\u0000-\u001F\u007F]/,Vo=10485760,zo=function(e){return"string"===typeof e&&0!==e.length&&!Ho.test(e)},Ko=function(e){return"string"===typeof e&&0!==e.length&&!Wo.test(e)},Go=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ko(e)},Yo=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!A(e)||e&&"object"===typeof e&&(0,o.gR)(e,".sv")},Jo=function(e,t,n,r){r&&void 0===t||Qo((0,o.dI)(e,"value"),t,n)},Qo=function(e,t,n){const r=n instanceof lt?new St(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xt(r));if("function"===typeof t)throw new Error(e+"contains a function "+xt(r)+" with contents = "+t.toString());if(A(t))throw new Error(e+"contains "+t.toString()+" "+xt(r));if("string"===typeof t&&t.length>Vo/3&&(0,o.OE)(t)>Vo)throw new Error(e+"contains a string greater than "+Vo+" utf8 bytes "+xt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(j(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!zo(t)))throw new Error(e+" contains an invalid key ("+t+") "+xt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(r,t),Qo(e,o,r),Tt(r)})),n&&i)throw new Error(e+' contains ".value" child '+xt(r)+" in addition to actual children.")}},Xo=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=gt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!zo(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(bt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&It(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Zo=function(e,t,n,r){if(r&&void 0===t)return;const i=(0,o.dI)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];j(t,((e,t)=>{const r=new lt(e);if(Qo(i,t,yt(n,r)),".priority"===ft(r)&&!Yo(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),Xo(i,s)},es=function(e,t,n,r){if((!r||void 0!==n)&&!zo(n))throw new Error((0,o.dI)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},ts=function(e,t,n,r){if((!r||void 0!==n)&&!Ko(n))throw new Error((0,o.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ns=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ts(e,t,n,r)},rs=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},is=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!zo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Go(n))throw new Error((0,o.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ss(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Ct(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function as(e,t,n){ss(e,n),cs(e,(e=>It(e,t)||It(t,e)))}function cs(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(ls(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ls(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&I("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="repo_interrupt",hs=25;class ds{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new os,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$n(),this.transactionQueueTree_=new Po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ps(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||G())e.server_=new Bn(e.repoInfo_,((t,n,r,i)=>{gs(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>vs(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.As)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Ft(e.repoInfo_,t,((t,n,r,i)=>{gs(e,t,n,r,i)}),(t=>{vs(e,t)}),(t=>{ys(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ve(e.repoInfo_,(()=>new Jn(e.stats_,e.server_))),e.infoData_=new qn,e.infoSyncTree_=new Ki({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Qi(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),_s(e,"connected",!1),e.serverSyncTree_=new Ki({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);as(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function fs(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function ms(e){return So({timestamp:fs(e)})}function gs(e,t,n,r,i){e.dataUpdateCount++;const s=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.kH)(n,(e=>_n(e)));a=ro(e.serverSyncTree_,s,t,i)}else{const t=_n(n);a=no(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.kH)(n,(e=>_n(e)));a=Xi(e.serverSyncTree_,s,t)}else{const t=_n(n);a=Qi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=Ps(e,s)),as(e.eventQueue_,c,a)}function vs(e,t){_s(e,"connected",t),!1===t&&Ss(e)}function ys(e,t){j(t,((t,n)=>{_s(e,t,n)}))}function _s(e,t,n){const r=new lt("/.info/"+t),i=_n(n);e.infoData_.updateSnapshot(r,i);const o=Qi(e.infoSyncTree_,r,i);as(e.eventQueue_,r,o)}function ws(e){return e.nextWriteId_++}function bs(e,t,n){const r=so(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=_n(r).withIndex(t._queryParams.getIndex());let o;if(io(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Qi(e.serverSyncTree_,t._path,i);else{const n=ho(e.serverSyncTree_,t);o=no(e.serverSyncTree_,t._path,i,n)}return as(e.eventQueue_,t._path,o),to(e.serverSyncTree_,t,n,null,!0),i}),(n=>(Ts(e,"get for query "+(0,o.As)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function Cs(e,t,n,r,i){Ts(e,"set",{path:t.toString(),value:n,priority:r});const o=ms(e),s=_n(n,r),a=oo(e.serverSyncTree_,t),c=Ao(s,a,o),l=ws(e),u=Gi(e.serverSyncTree_,t,c,l,!0);ss(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||k("set at "+t+" failed: "+n);const s=Ji(e.serverSyncTree_,l,!o);as(e.eventQueue_,t,s),ks(e,i,n,r)}));const h=Fs(e,t);Ps(e,h),as(e.eventQueue_,h,[])}function Is(e,t,n,r){Ts(e,"update",{path:t.toString(),value:n});let i=!0;const o=ms(e),s={};if(j(n,((n,r)=>{i=!1,s[n]=xo(yt(t,n),_n(r),e.serverSyncTree_,o)})),i)I("update() called with empty data.  Don't do anything."),ks(e,r,"ok",void 0);else{const i=ws(e),o=Yi(e.serverSyncTree_,t,s,i);ss(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||k("update at "+t+" failed: "+n);const a=Ji(e.serverSyncTree_,i,!s),c=a.length>0?Ps(e,t):t;as(e.eventQueue_,c,a),ks(e,r,n,o)})),j(n,(n=>{const r=Fs(e,yt(t,n));Ps(e,r)})),as(e.eventQueue_,t,[])}}function Ss(e){Ts(e,"onDisconnectEvents");const t=ms(e),n=$n();Wn(e.onDisconnect_,ut(),((r,i)=>{const o=xo(r,i,e.serverSyncTree_,t);Hn(n,r,o)}));let r=[];Wn(n,ut(),((t,n)=>{r=r.concat(Qi(e.serverSyncTree_,t,n));const i=Fs(e,t);Ps(e,i)})),e.onDisconnect_=$n(),as(e.eventQueue_,ut(),r)}function Es(e){e.persistentConnection_&&e.persistentConnection_.interrupt(us)}function Ts(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),I(n,...t)}function ks(e,t,n,r){t&&K((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function xs(e,t,n){return oo(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function As(e,t=e.transactionQueueTree_){if(t||Ms(e,t),Ro(t)){const n=Ns(e,t);(0,o.vA)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Os(e,Bo(t),n)}else Do(t)&&Fo(t,(t=>{As(e,t)}))}function Os(e,t,n){const r=n.map((e=>e.currentWriteId)),i=xs(e,t,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,o.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=wt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),l=t;e.server_.put(l.toString(),c,(r=>{Ts(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ji(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ms(e,Lo(e.transactionQueueTree_,t)),As(e,e.transactionQueueTree_),as(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)K(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Ps(e,t)}}),a)}function Ps(e,t){const n=Rs(e,t),r=Bo(n),i=Ns(e,n);return Ls(e,i,r),r}function Ls(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const s=t[c],l=wt(n,s.path);let u,h=!1;if((0,o.vA)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(Ji(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=hs)h=!0,u="maxretry",i=i.concat(Ji(e.serverSyncTree_,s.currentWriteId,!0));else{const n=xs(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Qo("transaction failed: Data returned ",r,s.path);let t=_n(r);const c="object"===typeof r&&null!=r&&(0,o.gR)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=s.currentWriteId,u=ms(e),h=Ao(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ws(e),a.splice(a.indexOf(l),1),i=i.concat(Gi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Ji(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Ji(e.serverSyncTree_,s.currentWriteId,!0))}as(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(u),!1,null)))))}Ms(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)K(r[o]);As(e,e.transactionQueueTree_)}function Rs(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Ro(r))r=Lo(r,n),t=pt(t),n=ht(t);return r}function Ns(e,t){const n=[];return Ds(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ds(e,t,n){const r=Ro(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Fo(t,(t=>{Ds(e,t,n)}))}function Ms(e,t){const n=Ro(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,No(t,n.length>0?n:void 0)}Fo(t,(t=>{Ms(e,t)}))}function Fs(e,t){const n=Bo(Rs(e,t)),r=Lo(e.transactionQueueTree_,t);return Uo(r,(t=>{js(e,t)})),js(e,r),jo(r,(t=>{js(e,t)})),n}function js(e,t){const n=Ro(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.vA)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ji(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?No(t,void 0):n.length=s+1,as(e.eventQueue_,Bo(t),i);for(let e=0;e<r.length;e++)K(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Bs(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const qs=function(e,t){const n=$s(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},$s=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Us(e.substring(u,h)));const d=Bs(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},Hs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ws=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Hs.charAt(n%64),n=Math.floor(n/64);(0,o.vA)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Hs.charAt(t[i]);return(0,o.vA)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.As)(this.snapshot.exportVal())}}class zs{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return _t(this._path)?null:ft(this._path)}get ref(){return new Xs(this._repo,this._path)}get _queryIdentifier(){const e=Un(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Un(this._queryParams)}isEqual(e){if(e=(0,o.Ku)(e),!(e instanceof Gs))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}function Ys(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function Js(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===$t){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==P)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==L)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===an){if(null!=t&&!Yo(t)||null!=n&&!Yo(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,o.vA)(e.getIndex()instanceof wn||e.getIndex()===Cn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Qs(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Xs extends Gs{constructor(e,t){super(e,t,new Pn,!1)}get parent(){const e=vt(this._path);return null===e?null:new Xs(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Zs{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=ta(this.ref,e);return new Zs(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Zs(n,ta(this.ref,t),an))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ea(e,t){return e=(0,o.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?ta(e._root,t):e._root}function ta(e,t){return e=(0,o.Ku)(e),null===ht(e._path)?ns("child","path",t,!1):ts("child","path",t,!1),new Xs(e._repo,yt(e._path,t))}function na(e,t){e=(0,o.Ku)(e),rs("push",e._path),Jo("push",t,e._path,!0);const n=fs(e._repo),r=Ws(n),i=ta(e,r),s=ta(e,r);let a;return a=null!=t?ia(s,t).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function ra(e){return rs("remove",e._path),ia(e,null)}function ia(e,t){e=(0,o.Ku)(e),rs("set",e._path),Jo("set",t,e._path,!1);const n=new o.cY;return Cs(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function oa(e,t){Zo("update",t,e._path,!1);const n=new o.cY;return Is(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function sa(e){e=(0,o.Ku)(e);const t=new Ks((()=>{})),n=new aa(t);return bs(e._repo,e,n).then((t=>new Zs(t,new Xs(e._repo,e._path),e._queryParams.getIndex())))}class aa{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Vs("value",this,new Zs(e.snapshotNode,new Xs(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new zs(this,e,t):null}matches(e){return e instanceof aa&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ca{}class la extends ca{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Jo("endAt",this._value,e._path,!0);const t=Mn(e._queryParams,this._value,this._key);if(Qs(t),Js(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Gs(e._repo,e._path,t,e._orderByCalled)}}class ua extends ca{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Jo("startAt",this._value,e._path,!0);const t=Nn(e._queryParams,this._value,this._key);if(Qs(t),Js(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Gs(e._repo,e._path,t,e._orderByCalled)}}class ha extends ca{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Jo("startAfter",this._value,e._path,!1);const t=Dn(e._queryParams,this._value,this._key);if(Qs(t),Js(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Gs(e._repo,e._path,t,e._orderByCalled)}}function da(e,t){return es("startAfter","key",t,!0),new ha(e,t)}class pa extends ca{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Gs(e._repo,e._path,Rn(e._queryParams,this._limit),e._orderByCalled)}}function fa(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new pa(e)}class ma extends ca{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Ys(e,"orderByChild");const t=new lt(this._path);if(_t(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wn(t),r=Fn(e._queryParams,n);return Js(r),new Gs(e._repo,e._path,r,!0)}}function ga(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ts("orderByChild","path",e,!1),new ma(e)}class va extends ca{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Ys(e,"orderByKey");const t=Fn(e._queryParams,$t);return Js(t),new Gs(e._repo,e._path,t,!0)}}function ya(){return new va}class _a extends ca{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(Jo("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new la(this._value,this._key)._apply(new ua(this._value,this._key)._apply(e))}}function wa(e,t){return es("equalTo","key",t,!0),new _a(e,t)}function ba(e,...t){let n=(0,o.Ku)(e);for(const r of t)n=r._apply(n);return n}Pi(Xs),Wi(Xs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ca="FIREBASE_DATABASE_EMULATOR_HOST",Ia={};let Sa=!1;function Ea(e,t,n,r){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Ta(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=qs(o,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/gallery/"}[Ca]),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=qs(o,i),l=c.repoInfo):s=!c.repoInfo.secure;const u=i&&s?new X(X.OWNER):new Q(e.name,e.options,t);is("Invalid Firebase Database URL",c),_t(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const h=xa(l,e,u,new J(e.name,n));return new Aa(h,e)}function ka(e,t){const n=Ia[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Es(e),delete n[e.key]}function xa(e,t,n,r){let i=Ia[t.name];i||(i={},Ia[t.name]=i);let o=i[e.toURLString()];return o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ds(e,Sa,n,r),i[e.toURLString()]=o,o}class Aa{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ps(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xs(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ka(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function Oa(e=(0,r.Sx)(),t){const n=(0,r.j6)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.yU)("database");e&&Pa(n,...e)}return n}function Pa(e,t,n,r={}){e=(0,o.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new X(X.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,o.Fy)(r.mockUserToken,e.app.options.projectId);s=new X(t)}Ea(i,t,n,s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function La(e){u(r.MF),(0,r.om)(new i.uA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Ta(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(a,c,e),(0,r.KO)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};La()},7844:function(e,t,n){"use strict";n.d(t,{XR:function(){return bt},qk:function(){return wt},c7:function(){return It},KR:function(){return Ct},bp:function(){return _t}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var r=n(3405),i=n(4046),o=n(852);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5,u=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends i.g{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,p;function f(e){return"storage/"+e}function m(){const e="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,e)}function g(e){return new h(d.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function v(e){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,e)}function _(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(e){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function b(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C(){return new h(d.CANCELED,"User canceled the upload/download.")}function I(e){return new h(d.INVALID_URL,"Invalid URL '"+e+"'.")}function S(e){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function E(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function k(){return new h(d.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function x(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function A(e){return new h(d.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function O(e){return new h(d.INVALID_ARGUMENT,e)}function P(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function L(e){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(e,t){return new h(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function N(e){throw new h(d.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));class D{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=D.makeFromUrl(e,t)}catch(r){return new D(e,"")}if(""===n.path)return n;throw S(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),f={bucket:1,path:3},m=t===s?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:p,indices:f,postModify:l},{regex:v,indices:y,postModify:l}];for(let s=0;s<_.length;s++){const t=_[s],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new D(e,i),t.postModify(n);break}}if(null==n)throw I(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(p,c())}),t)}function d(){o&&clearTimeout(o)}function p(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||s;if(n)return d(),void u.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let f=!1;function m(e){f||(f=!0,d(),l||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,m(!0)}),n),m}function j(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return void 0!==e}function B(e){return"function"===typeof e}function q(e){return"object"===typeof e&&!Array.isArray(e)}function $(e){return"string"===typeof e||e instanceof String}function H(e){return W()&&e instanceof Blob}function W(){return"undefined"!==typeof Blob}function V(e,t,n,r){if(r<t)throw O(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw O(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function K(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),o=-1!==t.indexOf(e);return n||i||o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(p||(p={}));class Y{constructor(e,t,n,r,i,o,s,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new J(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===p.NO_ERROR,i=n.getStatus();if(!t||G(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===p.ABORT;return void e(!1,new J(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new J(o,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());U(e)?n(e):n()}catch(o){r(o)}else if(null!==i){const e=m();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?P():C();r(e)}else{const e=b();r(e)}};this.canceled_?t(!1,new J(!1,null,!0)):this.backoffId_=F(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&j(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class J{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Q(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function X(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Z(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ee(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function te(e,t,n,r,i,o,s=!0){const a=K(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return Z(l,t),Q(l,n),X(l,o),ee(l,r),new Y(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function re(...e){const t=ne();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(W())return new Blob(e);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function ie(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if("undefined"===typeof atob)throw A("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ae{constructor(e,t){this.data=e,this.contentType=t||null}}function ce(e,t){switch(e){case se.RAW:return new ae(le(t));case se.BASE64:case se.BASE64URL:return new ae(he(e,t));case se.DATA_URL:return new ae(pe(t),fe(t))}throw m()}function le(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,o=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ue(e){let t;try{t=decodeURIComponent(e)}catch(n){throw R(se.DATA_URL,"Malformed data URL.")}return le(t)}function he(e,t){switch(e){case se.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw R(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case se.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw R(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oe(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw R(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class de{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw R(se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=me(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function pe(e){const t=new de(e);return t.base64?he(se.BASE64,t.rest):ue(t.rest)}function fe(e){const t=new de(e);return t.contentType}function me(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){let n=0,r="";H(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(H(this.data_)){const n=this.data_,r=ie(n,e,t);return null===r?null:new ge(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new ge(n,!0)}}static getBlob(...e){if(W()){const t=e.map((e=>e instanceof ge?e.data_:e));return new ge(re.apply(null,t))}{const t=e.map((e=>$(e)?ce(se.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new ge(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t;try{t=JSON.parse(e)}catch(n){return null}return q(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function _e(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function we(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){return t}class Ce{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||be}}let Ie=null;function Se(e){return!$(e)||e.length<2?e:we(e)}function Ee(){if(Ie)return Ie;const e=[];function t(e,t){return Se(t)}e.push(new Ce("bucket")),e.push(new Ce("generation")),e.push(new Ce("metageneration")),e.push(new Ce("name","fullPath",!0));const n=new Ce("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new Ce("size");return i.xform=r,e.push(i),e.push(new Ce("timeCreated")),e.push(new Ce("updated")),e.push(new Ce("md5Hash",null,!0)),e.push(new Ce("cacheControl",null,!0)),e.push(new Ce("contentDisposition",null,!0)),e.push(new Ce("contentEncoding",null,!0)),e.push(new Ce("contentLanguage",null,!0)),e.push(new Ce("contentType",null,!0)),e.push(new Ce("metadata","customMetadata",!0)),Ie=e,Ie}function Te(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new D(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function ke(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return Te(r,e),r}function xe(e,t,n){const r=ve(t);if(null===r)return null;const i=r;return ke(e,i,n)}function Ae(e,t,n,r){const i=ve(t);if(null===i)return null;if(!$(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map((t=>{const i=e["bucket"],o=e["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=z(a,n,r),l=K({alt:"media",token:t});return c+l}));return c[0]}function Oe(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){if(!e)throw m()}function Re(e,t){function n(n,r){const i=xe(e,r,t);return Le(null!==i),i}return n}function Ne(e,t){function n(n,r){const i=xe(e,r,t);return Le(null!==i),Ae(i,r,e.host,e._protocol)}return n}function De(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?_():y():402===t.getStatus()?v(e.bucket):403===t.getStatus()?w(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Me(e){const t=De(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=g(e.path)),i.serverResponse=r.serverResponse,i}return n}function Fe(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Pe(i,o,Re(e,n),s);return a.errorHandler=Me(t),a}function je(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Pe(i,o,Ne(e,n),s);return a.errorHandler=Me(t),a}function Ue(e,t){const n=t.fullServerUrl(),r=z(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(e,t){}const a=new Pe(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=Me(t),a}function Be(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function qe(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Be(null,t)),r}function $e(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const l=qe(t,r,i),u=Oe(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",p=ge.getBlob(h,r,d);if(null===p)throw T();const f={name:l["fullPath"]},m=z(o,e.host,e._protocol),g="POST",v=e.maxUploadRetryTime,y=new Pe(m,g,Re(e,n),v);return y.urlParams=f,y.headers=s,y.body=p.uploadData(),y.errorHandler=De(t),y}class He{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function We(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Le(!1)}const r=t||["active"];return Le(!!n&&-1!==r.indexOf(n)),n}function Ve(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=qe(t,r,i),a={name:s["fullPath"]},c=z(o,e.host,e._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Oe(s,n),d=e.maxUploadRetryTime;function p(e){let t;We(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Le(!1)}return Le($(t)),t}const f=new Pe(c,l,p,d);return f.urlParams=a,f.headers=u,f.body=h,f.errorHandler=De(t),f}function ze(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(e){const t=We(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Le(!1)}n||Le(!1);const i=Number(n);return Le(!isNaN(i)),new He(i,r.size(),"final"===t)}const s="POST",a=e.maxUploadRetryTime,c=new Pe(n,s,o,a);return c.headers=i,c.errorHandler=De(t),c}const Ke=262144;function Ge(e,t,n,r,i,o,s,a){const c=new He(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw k();const l=c.total-c.current;let u=l;i>0&&(u=Math.min(u,i));const h=c.current,d=h+u;let p="";p=0===u?"finalize":l===u?"upload, finalize":"upload";const f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${c.current}`},m=r.slice(h,d);if(null===m)throw T();function g(e,n){const i=We(e,["active","final"]),s=c.current+u,a=r.size();let l;return l="final"===i?Re(t,o)(e,n):null,new He(s,a,"final"===i,l)}const v="POST",y=t.maxUploadRetryTime,_=new Pe(n,v,g,y);return _.headers=f,_.body=m.uploadData(),_.progressCallback=a||null,_.errorHandler=De(e),_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Je(e){switch(e){case"running":case"pausing":case"canceling":return Ye.RUNNING;case"paused":return Ye.PAUSED;case"success":return Ye.SUCCESS;case"canceled":return Ye.CANCELED;case"error":return Ye.ERROR;default:return Ye.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,n){const r=B(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze=null;class et{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=p.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=p.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw N("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw N("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw N("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw N("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw N("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class tt extends et{initXhr(){this.xhr_.responseType="text"}}function nt(){return Ze?Ze():new tt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Ee(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(d.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(G(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,u),this._needToFetchStatus=!0,void this.completeTransitions_();e=b()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(d.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=Ve(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,nt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=ze(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,nt,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=Ke*this._chunkMultiplier,t=new He(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let o;try{o=Ge(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(o,nt,r,i,!1);this._request=s,s.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=Ke*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=Fe(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,nt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=$e(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,nt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=C(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Je(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new Qe(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Je(this._state)){case Ye.SUCCESS:Xe(this._resolve.bind(null,this.snapshot))();break;case Ye.CANCELED:case Ye.ERROR:const t=this._reject;Xe(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Je(this._state);switch(t){case Ye.RUNNING:case Ye.PAUSED:e.next&&Xe(e.next.bind(e,this.snapshot))();break;case Ye.SUCCESS:e.complete&&Xe(e.complete.bind(e))();break;case Ye.CANCELED:case Ye.ERROR:e.error&&Xe(e.error.bind(e,this._error))();break;default:e.error&&Xe(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this._service=e,this._location=t instanceof D?t:D.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new it(e,t)}get root(){const e=new D(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return we(this._location.path)}get storage(){return this._service}get parent(){const e=ye(this._location.path);if(null===e)return null;const t=new D(this._location.bucket,e);return new it(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw L(e)}}function ot(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new rt(e,new ge(t),n)}function st(e){e._throwIfRoot("getDownloadURL");const t=je(e.storage,e._location,Ee());return e.storage.makeRequestWithTokens(t,nt).then((e=>{if(null===e)throw x();return e}))}function at(e){e._throwIfRoot("deleteObject");const t=Ue(e.storage,e._location);return e.storage.makeRequestWithTokens(t,nt)}function ct(e,t){const n=_e(e._location.path,t),r=new D(e._location.bucket,n);return new it(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){return/^[A-Za-z]+:\/\//.test(e)}function ut(e,t){return new it(e,t)}function ht(e,t){if(e instanceof mt){const n=e;if(null==n._bucket)throw E();const r=new it(n,n._bucket);return null!=t?ht(r,t):r}return void 0!==t?ct(e,t):e}function dt(e,t){if(t&&lt(t)){if(e instanceof mt)return ut(e,t);throw O("To use ref(service, url), the first argument must be a Storage instance.")}return ht(e,t)}function pt(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:D.makeFromBucketSpec(n,e)}function ft(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"===typeof o?o:(0,i.Fy)(o,e.app.options.projectId))}class mt{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?D.makeFromBucketSpec(r,this._host):pt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=D.makeFromBucketSpec(this._url,e):this._bucket=pt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new it(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new M(P());{const o=te(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const gt="@firebase/storage",vt="0.12.5",yt="storage";function _t(e,t,n){return e=(0,i.Ku)(e),ot(e,t,n)}function wt(e){return e=(0,i.Ku)(e),st(e)}function bt(e){return e=(0,i.Ku)(e),at(e)}function Ct(e,t){return e=(0,i.Ku)(e),dt(e,t)}function It(e=(0,r.Sx)(),t){e=(0,i.Ku)(e);const n=(0,r.j6)(e,yt),o=n.getImmediate({identifier:t}),s=(0,i.yU)("storage");return s&&St(o,...s),o}function St(e,t,n,r={}){ft(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new mt(n,i,o,t,r.MF)}function Tt(){(0,r.om)(new o.uA(yt,Et,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(gt,vt,""),(0,r.KO)(gt,vt,"esm2017")}Tt()},5316:function(e,t,n){"use strict";n.d(t,{A:function(){return _e}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===f(e)}const i=1/0;function o(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-i?"-0":t}function s(e){return null==e?"":o(e)}function a(e){return"string"===typeof e}function c(e){return"number"===typeof e}function l(e){return!0===e||!1===e||h(e)&&"[object Boolean]"==f(e)}function u(e){return"object"===typeof e}function h(e){return u(e)&&null!==e}function d(e){return void 0!==e&&null!==e}function p(e){return!e.trim().length}function f(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const m="Incorrect 'index' type",g=e=>`Invalid value for key ${e}`,v=e=>`Pattern length exceeds max of ${e}.`,y=e=>`Missing ${e} property in key`,_=e=>`Property 'weight' in key '${e}' must be a positive integer`,w=Object.prototype.hasOwnProperty;class b{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=C(e);this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function C(e){let t=null,n=null,i=null,o=1,s=null;if(a(e)||r(e))i=e,t=I(e),n=S(e);else{if(!w.call(e,"name"))throw new Error(y("name"));const r=e.name;if(i=r,w.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(_(r));t=I(r),n=S(r),s=e.getFn}return{path:t,id:n,weight:o,src:i,getFn:s}}function I(e){return r(e)?e:e.split(".")}function S(e){return r(e)?e.join("."):e}function E(e,t){let n=[],i=!1;const o=(e,t,u)=>{if(d(e))if(t[u]){let h=t[u];const p=e[h];if(!d(p))return;if(u===t.length-1&&(a(p)||c(p)||l(p)))n.push(s(p));else if(r(p)){i=!0;for(let e=0,n=p.length;e<n;e+=1)o(p[e],t,u+1)}else t.length&&o(p,t,u+1)}else n.push(e)};return o(e,a(t)?t.split("."):t,0),i?n:n[0]}const T={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},k={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},x={location:0,threshold:.6,distance:100},A={useExtendedSearch:!1,getFn:E,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var O={...k,...T,...x,...A};const P=/[^ ]+/g;function L(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(t){const i=t.match(P).length;if(n.has(i))return n.get(i);const o=1/Math.pow(i,.5*e),s=parseFloat(Math.round(o*r)/r);return n.set(i,s),s},clear(){n.clear()}}}class R{constructor({getFn:e=O.getFn,fieldNormWeight:t=O.fieldNormWeight}={}){this.norm=L(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,a(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();a(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!d(e)||p(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,i)=>{let o=t.getFn?t.getFn(e):this.getFn(e,t.path);if(d(o))if(r(o)){let e=[];const t=[{nestedArrIndex:-1,value:o}];while(t.length){const{nestedArrIndex:n,value:i}=t.pop();if(d(i))if(a(i)&&!p(i)){let t={v:i,i:n,n:this.norm.get(i)};e.push(t)}else r(i)&&i.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[i]=e}else if(a(o)&&!p(o)){let e={v:o,n:this.norm.get(o)};n.$[i]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function N(e,t,{getFn:n=O.getFn,fieldNormWeight:r=O.fieldNormWeight}={}){const i=new R({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(C)),i.setSources(t),i.create(),i}function D(e,{getFn:t=O.getFn,fieldNormWeight:n=O.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new R({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function M(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=O.distance,ignoreLocation:o=O.ignoreLocation}={}){const s=t/e.length;if(o)return s;const a=Math.abs(r-n);return i?s+a/i:a?1:s}function F(e=[],t=O.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let s=e.length;o<s;o+=1){let s=e[o];s&&-1===r?r=o:s||-1===r||(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const j=32;function U(e,t,n,{location:r=O.location,distance:i=O.distance,threshold:o=O.threshold,findAllMatches:s=O.findAllMatches,minMatchCharLength:a=O.minMatchCharLength,includeMatches:c=O.includeMatches,ignoreLocation:l=O.ignoreLocation}={}){if(t.length>j)throw new Error(v(j));const u=t.length,h=e.length,d=Math.max(0,Math.min(r,h));let p=o,f=d;const m=a>1||c,g=m?Array(h):[];let y;while((y=e.indexOf(t,f))>-1){let e=M(t,{currentLocation:y,expectedLocation:d,distance:i,ignoreLocation:l});if(p=Math.min(e,p),f=y+u,m){let e=0;while(e<u)g[y+e]=1,e+=1}}f=-1;let _=[],w=1,b=u+h;const C=1<<u-1;for(let v=0;v<u;v+=1){let r=0,o=b;while(r<o){const e=M(t,{errors:v,currentLocation:d+o,expectedLocation:d,distance:i,ignoreLocation:l});e<=p?r=o:b=o,o=Math.floor((b-r)/2+r)}b=o;let a=Math.max(1,d-o+1),c=s?h:Math.min(d+o,h)+u,y=Array(c+2);y[c+1]=(1<<v)-1;for(let s=c;s>=a;s-=1){let r=s-1,o=n[e.charAt(r)];if(m&&(g[r]=+!!o),y[s]=(y[s+1]<<1|1)&o,v&&(y[s]|=(_[s+1]|_[s])<<1|1|_[s+1]),y[s]&C&&(w=M(t,{errors:v,currentLocation:r,expectedLocation:d,distance:i,ignoreLocation:l}),w<=p)){if(p=w,f=r,f<=d)break;a=Math.max(1,2*d-f)}}const I=M(t,{errors:v+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:l});if(I>p)break;_=y}const I={isMatch:f>=0,score:Math.max(.001,w)};if(m){const e=F(g,a);e.length?c&&(I.indices=e):I.isMatch=!1}return I}function B(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}class q{constructor(e,{location:t=O.location,threshold:n=O.threshold,distance:r=O.distance,includeMatches:i=O.includeMatches,findAllMatches:o=O.findAllMatches,minMatchCharLength:s=O.minMatchCharLength,isCaseSensitive:a=O.isCaseSensitive,ignoreLocation:c=O.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:a,ignoreLocation:c},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:B(e),startIndex:t})},u=this.pattern.length;if(u>j){let e=0;const t=u%j,n=u-t;while(e<n)l(this.pattern.substr(e,j),e),e+=j;if(t){const e=u-j;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:a,ignoreLocation:c}=this.options;let l=[],u=0,h=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:p})=>{const{isMatch:f,score:m,indices:g}=U(e,t,d,{location:r+p,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:a,includeMatches:n,ignoreLocation:c});f&&(h=!0),u+=m,f&&g&&(l=[...l,...g])}));let d={isMatch:h,score:h?u/this.chunks.length:1};return h&&n&&(d.indices=l),d}}class ${constructor(e){this.pattern=e}static isMultiMatch(e){return H(e,this.multiRegex)}static isSingleMatch(e){return H(e,this.singleRegex)}search(){}}function H(e,t){const n=e.match(t);return n?n[1]:null}class W extends ${constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class V extends ${constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=e.indexOf(this.pattern),n=-1===t;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class z extends ${constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class K extends ${constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class G extends ${constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Y extends ${constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class J extends ${constructor(e,{location:t=O.location,threshold:n=O.threshold,distance:r=O.distance,includeMatches:i=O.includeMatches,findAllMatches:o=O.findAllMatches,minMatchCharLength:s=O.minMatchCharLength,isCaseSensitive:a=O.isCaseSensitive,ignoreLocation:c=O.ignoreLocation}={}){super(e),this._bitapSearch=new q(e,{location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:a,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Q extends ${constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const r=[],i=this.pattern.length;while((t=e.indexOf(this.pattern,n))>-1)n=t+i,r.push([t,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const X=[W,Q,z,K,Y,G,V,J],Z=X.length,ee=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,te="|";function ne(e,t={}){return e.split(te).map((e=>{let n=e.trim().split(ee).filter((e=>e&&!!e.trim())),r=[];for(let i=0,o=n.length;i<o;i+=1){const e=n[i];let o=!1,s=-1;while(!o&&++s<Z){const n=X[s];let i=n.isMultiMatch(e);i&&(r.push(new n(i,t)),o=!0)}if(!o){s=-1;while(++s<Z){const n=X[s];let i=n.isSingleMatch(e);if(i){r.push(new n(i,t));break}}}}return r}))}const re=new Set([J.type,Q.type]);class ie{constructor(e,{isCaseSensitive:t=O.isCaseSensitive,includeMatches:n=O.includeMatches,minMatchCharLength:r=O.minMatchCharLength,ignoreLocation:i=O.ignoreLocation,findAllMatches:o=O.findAllMatches,location:s=O.location,threshold:a=O.threshold,distance:c=O.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:s,threshold:a,distance:c},this.pattern=t?e:e.toLowerCase(),this.query=ne(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],s=0;for(let a=0,c=t.length;a<c;a+=1){const r=t[a];o.length=0,i=0;for(let t=0,a=r.length;t<a;t+=1){const a=r[t],{isMatch:c,indices:l,score:u}=a.search(e);if(!c){s=0,i=0,o.length=0;break}if(i+=1,s+=u,n){const e=a.constructor.type;re.has(e)?o=[...o,...l]:o.push(l)}}if(i){let e={isMatch:!0,score:s/i};return n&&(e.indices=o),e}}return{isMatch:!1,score:1}}}const oe=[];function se(...e){oe.push(...e)}function ae(e,t){for(let n=0,r=oe.length;n<r;n+=1){let r=oe[n];if(r.condition(e,t))return new r(e,t)}return new q(e,t)}const ce={AND:"$and",OR:"$or"},le={PATH:"$path",PATTERN:"$val"},ue=e=>!(!e[ce.AND]&&!e[ce.OR]),he=e=>!!e[le.PATH],de=e=>!r(e)&&u(e)&&!ue(e),pe=e=>({[ce.AND]:Object.keys(e).map((t=>({[t]:e[t]})))});function fe(e,t,{auto:n=!0}={}){const i=e=>{let o=Object.keys(e);const s=he(e);if(!s&&o.length>1&&!ue(e))return i(pe(e));if(de(e)){const r=s?e[le.PATH]:o[0],i=s?e[le.PATTERN]:e[r];if(!a(i))throw new Error(g(r));const c={keyId:S(r),pattern:i};return n&&(c.searcher=ae(i,t)),c}let c={children:[],operator:o[0]};return o.forEach((t=>{const n=e[t];r(n)&&n.forEach((e=>{c.children.push(i(e))}))})),c};return ue(e)||(e=pe(e)),i(e)}function me(e,{ignoreFieldNorm:t=O.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:r,score:i})=>{const o=e?e.weight:null;n*=Math.pow(0===i&&o?Number.EPSILON:i,(o||1)*(t?1:r))})),e.score=n}))}function ge(e,t){const n=e.matches;t.matches=[],d(n)&&n.forEach((e=>{if(!d(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let i={indices:n,value:r};e.key&&(i.key=e.key.src),e.idx>-1&&(i.refIndex=e.idx),t.matches.push(i)}))}function ve(e,t){t.score=e.score}function ye(e,t,{includeMatches:n=O.includeMatches,includeScore:r=O.includeScore}={}){const i=[];return n&&i.push(ge),r&&i.push(ve),e.map((e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return i.length&&i.forEach((t=>{t(e,r)})),r}))}class _e{constructor(e,t={},n){this.options={...O,...t},this.options.useExtendedSearch,this._keyStore=new b(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof R))throw new Error(m);this._myIndex=t||N(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){d(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:s}=this.options;let l=a(e)?a(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return me(l,{ignoreFieldNorm:s}),i&&l.sort(o),c(t)&&t>-1&&(l=l.slice(0,t)),ye(l,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=ae(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:e,i:n,n:i})=>{if(!d(e))return;const{isMatch:o,score:s,indices:a}=t.searchIn(e);o&&r.push({item:e,idx:n,matches:[{score:s,value:e,norm:i,indices:a}]})})),r}_searchLogical(e){const t=fe(e,this.options),n=(e,t,r)=>{if(!e.children){const{keyId:n,searcher:i}=e,o=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:i});return o&&o.length?[{idx:r,item:t,matches:o}]:[]}const i=[];for(let o=0,s=e.children.length;o<s;o+=1){const s=e.children[o],a=n(s,t,r);if(a.length)i.push(...a);else if(e.operator===ce.AND)return[]}return i},r=this._myIndex.records,i={},o=[];return r.forEach((({$:e,i:r})=>{if(d(e)){let s=n(t,e,r);s.length&&(i[r]||(i[r]={idx:r,item:e,matches:[]},o.push(i[r])),s.forEach((({matches:e})=>{i[r].matches.push(...e)})))}})),o}_searchObjectList(e){const t=ae(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach((({$:e,i:r})=>{if(!d(e))return;let o=[];n.forEach(((n,r)=>{o.push(...this._findMatches({key:n,value:e[r],searcher:t}))})),o.length&&i.push({idx:r,item:e,matches:o})})),i}_findMatches({key:e,value:t,searcher:n}){if(!d(t))return[];let i=[];if(r(t))t.forEach((({v:t,i:r,n:o})=>{if(!d(t))return;const{isMatch:s,score:a,indices:c}=n.searchIn(t);s&&i.push({score:a,key:e,value:t,idx:r,norm:o,indices:c})}));else{const{v:r,n:o}=t,{isMatch:s,score:a,indices:c}=n.searchIn(r);s&&i.push({score:a,key:e,value:r,norm:o,indices:c})}return i}}_e.version="7.0.0",_e.createIndex=N,_e.parseIndex=D,_e.config=O,_e.parseQuery=fe,se(ie)},1387:function(e,t,n){"use strict";n.d(t,{LA:function(){return se},aE:function(){return tt},rd:function(){return rt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(144);
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof document;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const l=()=>{},u=Array.isArray;const h=/#/g,d=/&/g,p=/\//g,f=/=/g,m=/\?/g,g=/\+/g,v=/%5B/g,y=/%5D/g,_=/%5E/g,w=/%60/g,b=/%7B/g,C=/%7C/g,I=/%7D/g,S=/%20/g;function E(e){return encodeURI(""+e).replace(C,"|").replace(v,"[").replace(y,"]")}function T(e){return E(e).replace(b,"{").replace(I,"}").replace(_,"^")}function k(e){return E(e).replace(g,"%2B").replace(S,"+").replace(h,"%23").replace(d,"%26").replace(w,"`").replace(b,"{").replace(I,"}").replace(_,"^")}function x(e){return k(e).replace(f,"%3D")}function A(e){return E(e).replace(h,"%23").replace(m,"%3F")}function O(e){return null==e?"":A(e).replace(p,"%2F")}function P(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const L=/\/$/,R=e=>e.replace(L,"");function N(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=$(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:P(s)}}function D(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&j(t.matched[r],n.matched[i])&&U(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function U(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!B(e[n],t[n]))return!1;return!0}function B(e,t){return u(e)?q(e,t):u(t)?q(t,e):e===t}function q(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function $(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var H,W;(function(e){e["pop"]="pop",e["push"]="push"})(H||(H={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(W||(W={}));function V(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),R(e)}const z=/^[^#]+#/;function K(e,t){return e.replace(z,"#")+t}function G(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function J(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=G(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const X=new Map;function Z(e,t){X.set(e,t)}function ee(e){const t=X.get(e);return X.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const s=M(n,e);return s+r+i}function re(e,t,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=ne(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:H.pop,direction:u?u>0?W.forward:W.back:W.unknown})}))};function l(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:Y()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function ie(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function oe(e){const{history:t,location:n}=window,r={value:ne(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:te()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,ie(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function c(e,n){const s=a({},i.value,t.state,{forward:e,scroll:Y()});o(s.current,s,!0);const c=a({},ie(r.value,e,null),{position:s.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function se(e){e=V(e);const t=oe(e),n=re(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:K.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ae(e){return"string"===typeof e||e&&"object"===typeof e}function ce(e){return"string"===typeof e||"symbol"===typeof e}const le={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ue=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function de(e,t){return a(new Error,{type:e,[ue]:!0},t)}function pe(e,t){return e instanceof Error&&ue in e&&(null==t||!!(e.type&t))}const fe="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ge=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},me,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ge,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;o.push({name:e,repeatable:n,optional:c});const u=l||fe;if(u!==fe){s+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(u(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:l}}function ye(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function _e(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ye(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const be={type:0,value:""},Ce=/[a-zA-Z0-9_]/;function Ie(e){if(!e)return[[]];if("/"===e)return[[be]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function h(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ce.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),s(),i}function Se(e,t,n){const r=ve(Ie(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ee(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,c=ke(e);c.aliasOf=r&&r.record;const h=Pe(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let p,f;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(p=Se(t,n,h),r?r.alias.push(p):(f=f||p,f!==p&&f.alias.push(p),i&&e.name&&!Ae(p)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],p,r&&r.children[t])}r=r||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&u(p)}return f?()=>{s(f)}:l}function s(e){if(ce(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function u(e){let t=0;while(t<n.length&&_e(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Le(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!Ae(e)&&r.set(e.record.name,e)}function h(e,t){let i,o,s,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw de(1,{location:e});0,s=i.record.name,c=a(Te(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Te(e.params,i.keys.map((e=>e.name)))),o=i.stringify(c)}else if(null!=e.path)o=e.path,i=n.find((e=>e.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw de(1,{location:e,currentLocation:t});s=i.record.name,c=a({},t.params,e.params),o=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:o,params:c,matched:l,meta:Oe(l)}}return t=Pe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function Te(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ke(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:xe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function xe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oe(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Le(e,t){return t.children.some((t=>t===e||Le(e,t)))}function Re(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(g," "),n=e.indexOf("="),o=P(n<0?e:e.slice(0,n)),s=n<0?null:P(e.slice(n+1));if(o in t){let e=t[o];u(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=x(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map((e=>e&&k(e))):[r&&k(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function De(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Fe=Symbol(""),je=Symbol(""),Ue=Symbol(""),Be=Symbol("");function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $e(e,t,n,r,i,o=(e=>e())){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):ae(e)?c(de(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),a())},u=o((()=>e.call(r&&r.instances[i],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function He(e,t,n,r,i=(e=>e())){const o=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(We(c)){const s=c.__vccOpts||c,l=s[t];l&&o.push($e(l,n,r,a,e,i))}else{let l=c();0,o.push((()=>l.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=s(o)?o.default:o;a.components[e]=c;const l=c.__vccOpts||c,u=l[t];return u&&$e(u,n,r,a,e,i)()}))))}}}return o}function We(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ve(e){const t=(0,r.WQ)(je),n=(0,r.WQ)(Ue);const o=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),s=(0,r.EW)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(j.bind(null,r));if(s>-1)return s;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(j.bind(null,e[t-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Ye(n.params,o.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&U(n.params,o.value.params)));function u(n={}){return Ge(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(l):Promise.resolve()}return{route:o,href:(0,r.EW)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:u}}const ze=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ve,setup(e,{slots:t}){const n=(0,i.Kh)(Ve(e)),{options:o}=(0,r.WQ)(je),s=(0,r.EW)((()=>({[Qe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ke=ze;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.WQ)(Be),s=(0,r.EW)((()=>e.route||o.value)),c=(0,r.WQ)(Fe,0),l=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.EW)((()=>s.value.matched[l.value]));(0,r.Gt)(Fe,(0,r.EW)((()=>l.value+1))),(0,r.Gt)(Me,u),(0,r.Gt)(Be,s);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&j(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,c=u.value,l=c&&c.components[o];if(!l)return Ze(n.default,{Component:l,route:i});const d=c.props[o],p=d?!0===d?i.params:"function"===typeof d?d(i):d:null,f=e=>{e.component.isUnmounted&&(c.instances[o]=null)},m=(0,r.h)(l,a({},p,t,{onVnodeUnmounted:f,ref:h}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=Ee(e.routes,e),n=e.parseQuery||Re,s=e.stringifyQuery||Ne,h=e.history;const d=qe(),p=qe(),f=qe(),m=(0,i.IJ)(le);let g=le;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(e=>""+e)),y=c.bind(null,O),_=c.bind(null,P);function w(e,n){let r,i;return ce(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function b(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function I(e){return!!t.getRecordMatcher(e)}function S(e,r){if(r=a({},r||m.value),"string"===typeof e){const i=N(n,e,r.path),o=t.resolve({path:i.path},r),s=h.createHref(i.fullPath);return a(i,o,{params:_(o.params),hash:P(i.hash),redirectedFrom:void 0,href:s})}let i;if(null!=e.path)i=a({},e,{path:N(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:y(t)}),r.params=y(r.params)}const o=t.resolve(i,r),c=e.hash||"";o.params=v(_(o.params));const l=D(s,a({},e,{hash:T(c),path:o.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:s===Ne?De(e.query):e.query||{}},o,{redirectedFrom:void 0,href:u})}function E(e){return"string"===typeof e?N(n,e,m.value.path):a({},e)}function k(e,t){if(g!==e)return de(8,{from:t,to:e})}function x(e){return R(e)}function A(e){return x(a(E(e),{replace:!0}))}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=E(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function R(e,t){const n=g=S(e),r=m.value,i=e.state,o=e.force,c=!0===e.replace,l=L(n);if(l)return R(a(E(l),{state:"object"===typeof l?a({},i,l.state):i,force:o,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!o&&F(s,r,n)&&(h=de(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):U(u,r)).catch((e=>pe(e)?pe(e,2)?e:te(e):G(e,u,r))).then((e=>{if(e){if(pe(e,2))return R(a({replace:c},E(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||u)}else e=q(u,r,!0,c,i);return B(u,r,e),e}))}function M(e,t){const n=k(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let n;const[r,i,o]=nt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const s=M.bind(null,e,t);return n.push(s),ae(n).then((()=>{n=[];for(const r of d.list())n.push($e(r,e,t));return n.push(s),ae(n)})).then((()=>{n=He(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(s),ae(n)})).then((()=>{n=[];for(const r of o)if(r.beforeEnter)if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(s),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(o,"beforeRouteEnter",e,t,j),n.push(s),ae(n)))).then((()=>{n=[];for(const r of p.list())n.push($e(r,e,t));return n.push(s),ae(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function B(e,t,n){f.list().forEach((r=>j((()=>r(e,t,n)))))}function q(e,t,n,r,i){const s=k(e,t);if(s)return s;const c=t===le,l=o?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&l&&l.scroll},i)):h.push(e.fullPath,i)),m.value=e,ne(e,t,n,c),te()}let $;function W(){$||($=h.listen(((e,t,n)=>{if(!se.listening)return;const r=S(e),i=L(r);if(i)return void R(a(i,{replace:!0}),r).catch(l);g=r;const s=m.value;o&&Z(Q(s.fullPath,n.delta),Y()),U(r,s).catch((e=>pe(e,12)?e:pe(e,2)?(R(e.to,r).then((e=>{pe(e,20)&&!n.delta&&n.type===H.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),G(e,r,s)))).then((e=>{e=e||q(r,s,!1),e&&(n.delta&&!pe(e,8)?h.go(-n.delta,!1):n.type===H.pop&&pe(e,20)&&h.go(-1,!1)),B(r,s,e)})).catch(l)})))}let V,z=qe(),K=qe();function G(e,t,n){te(e);const r=K.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function X(){return V&&m.value!==le?Promise.resolve():new Promise(((e,t)=>{z.add([e,t])}))}function te(e){return V||(V=!e,W(),z.list().forEach((([t,n])=>e?n(e):t())),z.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&ee(Q(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&J(e))).catch((e=>G(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,se={currentRoute:m,listening:!0,addRoute:w,removeRoute:b,hasRoute:I,getRoutes:C,resolve:S,options:e,push:x,replace:A,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:p.add,afterEach:f.add,onError:K.add,isReady:X,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(m)}),o&&!ie&&m.value===le&&(ie=!0,x(h.location).catch((e=>{0})));const n={};for(const i in le)Object.defineProperty(n,i,{get:()=>m.value[i],enumerable:!0});e.provide(je,t),e.provide(Ue,(0,i.Gc)(n)),e.provide(Be,m);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(g=le,$&&$(),$=null,m.value=le,ie=!1,V=!1),r()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>j(t)))),Promise.resolve())}return se}function nt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>j(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>j(e,a)))||i.push(a))}return[n,r,i]}function rt(){return(0,r.WQ)(je)}}}]);
//# sourceMappingURL=chunk-vendors.527893e8.js.map