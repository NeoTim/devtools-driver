function(){return(function(){function h(a){return function(){return this[a]}}function k(a){return function(){return a}}var aa=this;function l(a){return"string"==typeof a}function ba(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a,b,c){return a.call.apply(a.bind,arguments)}function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function fa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa=da:fa=ea;return fa.apply(null,arguments)}function ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function m(a,b){function c(){}c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.J=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function n(a){if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}m(n,Error);n.prototype.name="CustomError";function ia(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ka(a,b){var c=0;a=ja(String(a)).split(".");b=ja(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=la(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||la(0==f[2].length,0==g[2].length)||la(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}}function la(a,b){return a<b?-1:a>b?1:0};function ma(a,b){b.unshift(a);n.call(this,ia.apply(null,b));b.shift()}m(ma,n);ma.prototype.name="AssertionError";function na(a,b,c){if(!a){var d="Assertion failed";if(b){d+=": "+b;var e=Array.prototype.slice.call(arguments,2)}throw new ma(""+d,e||[]);}};function q(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function r(a,b,c){var d=c;q(a,function(c,f){d=b.call(void 0,d,c,f,a)});return d}function t(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1}function oa(a){return Array.prototype.concat.apply([],arguments)}function pa(a,b,c){na(null!=a.length);return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var u;a:{var qa=aa.navigator;if(qa){var ra=qa.userAgent;if(ra){u=ra;break a}}u=""}function v(a){return-1!=u.indexOf(a)};function sa(){return(v("Chrome")||v("CriOS"))&&!v("Edge")};function ta(){return v("iPhone")&&!v("iPod")&&!v("iPad")};function ua(a){for(;a&&1!=a.nodeType;)a=a.previousSibling;return a}function va(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function wa(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?xa(a,b):!c&&va(e,b)?-1*ya(a,b):!d&&va(f,a)?ya(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}na(a,"Node cannot be null or undefined.");d=9==a.nodeType?a:a.ownerDocument||a.document;c=
d.createRange();c.selectNode(a);c.collapse(!0);a=d.createRange();a.selectNode(b);a.collapse(!0);return c.compareBoundaryPoints(aa.Range.START_TO_END,a)}function ya(a,b){var c=a.parentNode;if(c==b)return-1;for(;b.parentNode!=c;)b=b.parentNode;return xa(b,a)}function xa(a,b){for(;b=b.previousSibling;)if(b==a)return-1;return 1}function za(a,b){for(var c=0;a;){na("parentNode"!=a.name);if(b(a))return a;a=a.parentNode;c++}return null};var Aa=v("Firefox"),Ba=ta()||v("iPod"),Ca=v("iPad"),w=v("Android")&&!(sa()||v("Firefox")||v("Opera")||v("Silk")),Da=sa(),Ea=v("Safari")&&!(sa()||v("Coast")||v("Opera")||v("Edge")||v("Silk")||v("Android"))&&!(ta()||v("iPad")||v("iPod"));/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
function y(a,b,c){this.a=a;this.b=b||1;this.g=c||1};function Fa(a){this.b=a;this.a=0}function Ga(a){a=a.match(Ha);for(var b=0;b<a.length;b++)Ia.test(a[b])&&a.splice(b,1);return new Fa(a)}var Ha=/\$?(?:(?![0-9-])[\w-]+:)?(?![0-9-])[\w-]+|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,Ia=/^\s/;function z(a,b){return a.b[a.a+(b||0)]}function A(a){return a.b[a.a++]}function Ja(a){return a.b.length<=a.a};function B(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;c=0;var d=[];for(b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function D(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function E(a,b,c,d,e){return Ka.call(null,a,b,l(c)?c:null,l(d)?d:null,e||new F)}
function Ka(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),q(b,function(b){a.a(b)&&G(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),q(b,function(b){b.className==d&&a.a(b)&&G(e,b)})):a instanceof H?La(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.g()),q(b,function(a){D(a,c,d)&&G(e,a)}));return e}function La(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)D(b,c,d)&&a.a(b)&&G(e,b),La(a,b,c,d,e)};function F(){this.b=this.a=null;this.l=0}function Ma(a){this.node=a;this.a=this.b=null}function Na(a,b){if(!a.a)return b;if(!b.a)return a;var c=a.a;b=b.a;for(var d=null,e,f=0;c&&b;)c.node==b.node?(e=c,c=c.a,b=b.a):0<wa(c.node,b.node)?(e=b,b=b.a):(e=c,c=c.a),(e.b=d)?d.a=e:a.a=e,d=e,f++;for(e=c||b;e;)e.b=d,d=d.a=e,f++,e=e.a;a.b=d;a.l=f;return a}function Oa(a,b){b=new Ma(b);b.a=a.a;a.b?a.a.b=b:a.a=a.b=b;a.a=b;a.l++}function G(a,b){b=new Ma(b);b.b=a.b;a.a?a.b.a=b:a.a=a.b=b;a.b=b;a.l++}
function Pa(a){return(a=a.a)?a.node:null}function Qa(a){return(a=Pa(a))?B(a):""}function I(a,b){return new Ra(a,!!b)}function Ra(a,b){this.g=a;this.b=(this.s=b)?a.b:a.a;this.a=null}function J(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.s?b.b:b.a;return c.node};function Sa(a){switch(a.nodeType){case 1:return ha(Ta,a);case 9:return Sa(a.documentElement);case 11:case 10:case 6:case 12:return Ua;default:return a.parentNode?Sa(a.parentNode):Ua}}function Ua(){return null}function Ta(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?Ta(a.parentNode,b):null};function K(a){this.i=a;this.b=this.f=!1;this.g=null}function L(a){return"\n  "+a.toString().split("\n").join("\n  ")}function Va(a,b){a.f=b}function Wa(a,b){a.b=b}function M(a,b){a=a.a(b);return a instanceof F?+Qa(a):+a}function N(a,b){a=a.a(b);return a instanceof F?Qa(a):""+a}function O(a,b){a=a.a(b);return a instanceof F?!!a.l:!!a};function P(a,b,c){K.call(this,a.i);this.c=a;this.h=b;this.o=c;this.f=b.f||c.f;this.b=b.b||c.b;this.c==Xa&&(c.b||c.f||4==c.i||0==c.i||!b.g?b.b||b.f||4==b.i||0==b.i||!c.g||(this.g={name:c.g.name,u:b}):this.g={name:b.g.name,u:c})}m(P,K);
function Q(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof F&&c instanceof F){b=I(b);for(d=J(b);d;d=J(b))for(e=I(c),f=J(e);f;f=J(e))if(a(B(d),B(f)))return!0;return!1}if(b instanceof F||c instanceof F){b instanceof F?(e=b,d=c):(e=c,d=b);f=I(e);for(var g=typeof d,p=J(f);p;p=J(f)){switch(g){case "number":p=+B(p);break;case "boolean":p=!!B(p);break;case "string":p=B(p);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(p,d)||e==c&&a(d,p))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}P.prototype.a=function(a){return this.c.m(this.h,this.o,a)};P.prototype.toString=function(){var a="Binary Expression: "+this.c;a+=L(this.h);return a+=L(this.o)};function Ya(a,b,c,d){this.H=a;this.C=b;this.i=c;this.m=d}Ya.prototype.toString=h("H");var Za={};
function R(a,b,c,d){if(Za.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Ya(a,b,c,d);return Za[a.toString()]=a}R("div",6,1,function(a,b,c){return M(a,c)/M(b,c)});R("mod",6,1,function(a,b,c){return M(a,c)%M(b,c)});R("*",6,1,function(a,b,c){return M(a,c)*M(b,c)});R("+",5,1,function(a,b,c){return M(a,c)+M(b,c)});R("-",5,1,function(a,b,c){return M(a,c)-M(b,c)});R("<",4,2,function(a,b,c){return Q(function(a,b){return a<b},a,b,c)});
R(">",4,2,function(a,b,c){return Q(function(a,b){return a>b},a,b,c)});R("<=",4,2,function(a,b,c){return Q(function(a,b){return a<=b},a,b,c)});R(">=",4,2,function(a,b,c){return Q(function(a,b){return a>=b},a,b,c)});var Xa=R("=",3,2,function(a,b,c){return Q(function(a,b){return a==b},a,b,c,!0)});R("!=",3,2,function(a,b,c){return Q(function(a,b){return a!=b},a,b,c,!0)});R("and",2,2,function(a,b,c){return O(a,c)&&O(b,c)});R("or",1,2,function(a,b,c){return O(a,c)||O(b,c)});function $a(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");K.call(this,a.i);this.c=a;this.h=b;this.f=a.f;this.b=a.b}m($a,K);$a.prototype.a=function(a){a=this.c.a(a);return ab(this.h,a)};$a.prototype.toString=function(){var a="Filter:"+L(this.c);return a+=L(this.h)};function bb(a,b){if(b.length<a.B)throw Error("Function "+a.j+" expects at least"+a.B+" arguments, "+b.length+" given");if(null!==a.A&&b.length>a.A)throw Error("Function "+a.j+" expects at most "+a.A+" arguments, "+b.length+" given");a.G&&q(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});K.call(this,a.i);this.v=a;this.c=b;Va(this,a.f||t(b,function(a){return a.f}));Wa(this,a.F&&!b.length||a.D&&!!b.length||t(b,function(a){return a.b}))}m(bb,K);
bb.prototype.a=function(a){return this.v.m.apply(null,oa(a,this.c))};bb.prototype.toString=function(){var a="Function: "+this.v;if(this.c.length){var b=r(this.c,function(a,b){return a+L(b)},"Arguments:");a+=L(b)}return a};function cb(a,b,c,d,e,f,g,p,x){this.j=a;this.i=b;this.f=c;this.F=d;this.D=e;this.m=f;this.B=g;this.A=void 0!==p?p:g;this.G=!!x}cb.prototype.toString=h("j");var db={};
function T(a,b,c,d,e,f,g,p){if(db.hasOwnProperty(a))throw Error("Function already created: "+a+".");db[a]=new cb(a,b,c,d,!1,e,f,g,p)}T("boolean",2,!1,!1,function(a,b){return O(b,a)},1);T("ceiling",1,!1,!1,function(a,b){return Math.ceil(M(b,a))},1);T("concat",3,!1,!1,function(a,b){var c=pa(arguments,1);return r(c,function(b,c){return b+N(c,a)},"")},2,null);T("contains",2,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);return-1!=b.indexOf(a)},2);T("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
T("false",2,!1,!1,k(!1),0);T("floor",1,!1,!1,function(a,b){return Math.floor(M(b,a))},1);T("id",4,!1,!1,function(a,b){var c=a.a,d=9==c.nodeType?c:c.ownerDocument;a=N(b,a).split(/\s+/);var e=[];q(a,function(a){a=d.getElementById(a);var b;if(!(b=!a)){a:if(l(e))b=l(a)&&1==a.length?e.indexOf(a,0):-1;else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=0<=b}b||e.push(a)});e.sort(wa);var f=new F;q(e,function(a){G(f,a)});return f},1);T("lang",2,!1,!1,k(!1),1);
T("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.g},0);T("local-name",3,!1,!0,function(a,b){return(a=b?Pa(b.a(a)):a.a)?a.localName||a.nodeName.toLowerCase():""},0,1,!0);T("name",3,!1,!0,function(a,b){return(a=b?Pa(b.a(a)):a.a)?a.nodeName.toLowerCase():""},0,1,!0);T("namespace-uri",3,!0,!1,k(""),0,1,!0);T("normalize-space",3,!1,!0,function(a,b){return(b?N(b,a):B(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
T("not",2,!1,!1,function(a,b){return!O(b,a)},1);T("number",1,!1,!0,function(a,b){return b?M(b,a):+B(a.a)},0,1);T("position",1,!0,!1,function(a){return a.b},0);T("round",1,!1,!1,function(a,b){return Math.round(M(b,a))},1);T("starts-with",2,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);return 0==b.lastIndexOf(a,0)},2);T("string",3,!1,!0,function(a,b){return b?N(b,a):B(a.a)},0,1);T("string-length",1,!1,!0,function(a,b){return(b?N(b,a):B(a.a)).length},0,1);
T("substring",3,!1,!1,function(a,b,c,d){c=M(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?M(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=N(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);T("substring-after",3,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
T("substring-before",3,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);T("sum",1,!1,!1,function(a,b){a=I(b.a(a));b=0;for(var c=J(a);c;c=J(a))b+=+B(c);return b},1,1,!0);T("translate",3,!1,!1,function(a,b,c,d){b=N(b,a);c=N(c,a);var e=N(d,a);d={};for(var f=0;f<c.length;f++)a=c.charAt(f),a in d||(d[a]=e.charAt(f));c="";for(f=0;f<b.length;f++)a=b.charAt(f),c+=a in d?d[a]:a;return c},3);T("true",2,!1,!1,k(!0),0);function H(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function eb(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}H.prototype.a=function(a){return null===this.b||this.b==a.nodeType};H.prototype.g=h("h");H.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=L(this.c));return a};function fb(a){K.call(this,3);this.c=a.substring(1,a.length-1)}m(fb,K);fb.prototype.a=h("c");fb.prototype.toString=function(){return"Literal: "+this.c};function gb(a,b){this.j=a.toLowerCase();this.b=b?b.toLowerCase():"http://www.w3.org/1999/xhtml"}gb.prototype.a=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.j&&this.j!=a.nodeName.toLowerCase()?!1:this.b==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};gb.prototype.g=h("j");gb.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.b?"":this.b+":")+this.j};function hb(a){K.call(this,1);this.c=a}m(hb,K);hb.prototype.a=h("c");hb.prototype.toString=function(){return"Number: "+this.c};function ib(a,b){K.call(this,a.i);this.h=a;this.c=b;this.f=a.f;this.b=a.b;1==this.c.length&&(a=this.c[0],a.w||a.c!=jb||(a=a.o,"*"!=a.g()&&(this.g={name:a.g(),u:null})))}m(ib,K);function kb(){K.call(this,4)}m(kb,K);kb.prototype.a=function(a){var b=new F;a=a.a;9==a.nodeType?G(b,a):G(b,a.ownerDocument);return b};kb.prototype.toString=k("Root Helper Expression");function lb(){K.call(this,4)}m(lb,K);lb.prototype.a=function(a){var b=new F;G(b,a.a);return b};lb.prototype.toString=k("Context Helper Expression");
function mb(a){return"/"==a||"//"==a}ib.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof F))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=I(b,e.c.s);if(e.f||e.c!=nb)if(e.f||e.c!=ob){var g=J(f);for(b=e.a(new y(g));null!=(g=J(f));)g=e.a(new y(g)),b=Na(b,g)}else g=J(f),b=e.a(new y(g));else{for(g=J(f);(b=J(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new y(g))}}return b};
ib.prototype.toString=function(){var a="Path Expression:"+L(this.h);if(this.c.length){var b=r(this.c,function(a,b){return a+L(b)},"Steps:");a+=L(b)}return a};function pb(a,b){this.a=a;this.s=!!b}
function ab(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=I(b),f=b.l,g,p=0;g=J(e);p++){var x=a.s?f-p:p+1;g=d.a(new y(g,x,f));if("number"==typeof g)x=x==g;else if("string"==typeof g||"boolean"==typeof g)x=!!g;else if(g instanceof F)x=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!x){x=e;g=x.g;var C=x.a;if(!C)throw Error("Next must be called at least once before remove.");var S=C.b;C=C.a;S?S.a=C:g.a=C;C?C.b=S:g.b=S;g.l--;x.a=null}}return b}
pb.prototype.toString=function(){return r(this.a,function(a,b){return a+L(b)},"Predicates:")};function U(a,b,c,d){K.call(this,4);this.c=a;this.o=b;this.h=c||new pb([]);this.w=!!d;b=this.h;b=0<b.a.length?b.a[0].g:null;a.I&&b&&(this.g={name:b.name,u:b.u});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.f||1==c.i||0==c.i){a=!0;break a}a=!1}this.f=a}m(U,K);
U.prototype.a=function(a){var b=a.a,c=this.g,d=null,e=null,f=0;c&&(d=c.name,e=c.u?N(c.u,a):null,f=1);if(this.w)if(this.f||this.c!=qb)if(b=I((new U(rb,new H("node"))).a(a)),c=J(b))for(a=this.m(c,d,e,f);null!=(c=J(b));)a=Na(a,this.m(c,d,e,f));else a=new F;else a=E(this.o,b,d,e),a=ab(this.h,a,f);else a=this.m(a.a,d,e,f);return a};U.prototype.m=function(a,b,c,d){a=this.c.v(this.o,a,b,c);return a=ab(this.h,a,d)};
U.prototype.toString=function(){var a="Step:"+L("Operator: "+(this.w?"//":"/"));this.c.j&&(a+=L("Axis: "+this.c));a+=L(this.o);if(this.h.a.length){var b=r(this.h.a,function(a,b){return a+L(b)},"Predicates:");a+=L(b)}return a};function sb(a,b,c,d){this.j=a;this.v=b;this.s=c;this.I=d}sb.prototype.toString=h("j");var tb={};function V(a,b,c,d){if(tb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new sb(a,b,c,!!d);return tb[a]=b}
V("ancestor",function(a,b){for(var c=new F;b=b.parentNode;)a.a(b)&&Oa(c,b);return c},!0);V("ancestor-or-self",function(a,b){var c=new F;do a.a(b)&&Oa(c,b);while(b=b.parentNode);return c},!0);
var jb=V("attribute",function(a,b){var c=new F,d=a.g();if(b=b.attributes)if(a instanceof H&&null===a.b||"*"==d)for(d=0;a=b[d];d++)G(c,a);else(a=b.getNamedItem(d))&&G(c,a);return c},!1),qb=V("child",function(a,b,c,d,e){c=l(c)?c:null;d=l(d)?d:null;e=e||new F;for(b=b.firstChild;b;b=b.nextSibling)D(b,c,d)&&a.a(b)&&G(e,b);return e},!1,!0);V("descendant",E,!1,!0);
var rb=V("descendant-or-self",function(a,b,c,d){var e=new F;D(b,c,d)&&a.a(b)&&G(e,b);return E(a,b,c,d,e)},!1,!0),nb=V("following",function(a,b,c,d){var e=new F;do for(var f=b;f=f.nextSibling;)D(f,c,d)&&a.a(f)&&G(e,f),e=E(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);V("following-sibling",function(a,b){for(var c=new F;b=b.nextSibling;)a.a(b)&&G(c,b);return c},!1);V("namespace",function(){return new F},!1);
var ub=V("parent",function(a,b){var c=new F;if(9==b.nodeType)return c;if(2==b.nodeType)return G(c,b.ownerElement),c;b=b.parentNode;a.a(b)&&G(c,b);return c},!1),ob=V("preceding",function(a,b,c,d){var e=new F,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,p=f.length;g<p;g++){var x=[];for(b=f[g];b=b.previousSibling;)x.unshift(b);for(var C=0,S=x.length;C<S;C++)b=x[C],D(b,c,d)&&a.a(b)&&G(e,b),e=E(a,b,c,d,e)}return e},!0,!0);
V("preceding-sibling",function(a,b){for(var c=new F;b=b.previousSibling;)a.a(b)&&Oa(c,b);return c},!0);var vb=V("self",function(a,b){var c=new F;a.a(b)&&G(c,b);return c},!1);function wb(a){K.call(this,1);this.c=a;this.f=a.f;this.b=a.b}m(wb,K);wb.prototype.a=function(a){return-M(this.c,a)};wb.prototype.toString=function(){return"Unary Expression: -"+L(this.c)};function xb(a){K.call(this,4);this.c=a;Va(this,t(this.c,function(a){return a.f}));Wa(this,t(this.c,function(a){return a.b}))}m(xb,K);xb.prototype.a=function(a){var b=new F;q(this.c,function(c){c=c.a(a);if(!(c instanceof F))throw Error("Path expression must evaluate to NodeSet.");b=Na(b,c)});return b};xb.prototype.toString=function(){return r(this.c,function(a,b){return a+L(b)},"Union Expression:")};function yb(a,b){this.a=a;this.b=b}function zb(a){for(var b,c=[];;){W(a,"Missing right hand side of binary expression.");b=Ab(a);var d=A(a.a);if(!d)break;var e=(d=Za[d]||null)&&d.C;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].C;)b=new P(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new P(c.pop(),c.pop(),b);return b}function W(a,b){if(Ja(a.a))throw Error(b);}function Bb(a,b){a=A(a.a);if(a!=b)throw Error("Bad token, expected: "+b+" got: "+a);}
function Cb(a){a=A(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Db(a){a=A(a.a);if(2>a.length)throw Error("Unclosed literal string");return new fb(a)}function Eb(a){var b=A(a.a),c=b.indexOf(":");if(-1==c)return new gb(b);var d=b.substring(0,c);a=a.b(d);if(!a)throw Error("Namespace prefix not declared: "+d);b=b.substr(c+1);return new gb(b,a)}
function Fb(a){var b=[];if(mb(z(a.a))){var c=A(a.a);var d=z(a.a);if("/"==c&&(Ja(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new kb;d=new kb;W(a,"Missing next location step.");c=Gb(a,c);b.push(c)}else{a:{c=z(a.a);d=c.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":A(a.a);c=zb(a);W(a,'unclosed "("');Bb(a,")");break;case '"':case "'":c=Db(a);break;default:if(isNaN(+c))if(!eb(c)&&/(?![0-9])[\w]/.test(d)&&"("==z(a.a,1)){c=A(a.a);
c=db[c]||null;A(a.a);for(d=[];")"!=z(a.a);){W(a,"Missing function argument list.");d.push(zb(a));if(","!=z(a.a))break;A(a.a)}W(a,"Unclosed function argument list.");Cb(a);c=new bb(c,d)}else{c=null;break a}else c=new hb(+A(a.a))}"["==z(a.a)&&(d=new pb(Hb(a)),c=new $a(c,d))}if(c)if(mb(z(a.a)))d=c;else return c;else c=Gb(a,"/"),d=new lb,b.push(c)}for(;mb(z(a.a));)c=A(a.a),W(a,"Missing next location step."),c=Gb(a,c),b.push(c);return new ib(d,b)}
function Gb(a,b){if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==z(a.a)){var c=new U(vb,new H("node"));A(a.a);return c}if(".."==z(a.a))return c=new U(ub,new H("node")),A(a.a),c;if("@"==z(a.a)){var d=jb;A(a.a);W(a,"Missing attribute name")}else if("::"==z(a.a,1)){if(!/(?![0-9])[\w]/.test(z(a.a).charAt(0)))throw Error("Bad token: "+A(a.a));var e=A(a.a);d=tb[e]||null;if(!d)throw Error("No axis with name: "+e);A(a.a);W(a,"Missing node name")}else d=qb;e=z(a.a);if(/(?![0-9])[\w]/.test(e.charAt(0)))if("("==
z(a.a,1)){if(!eb(e))throw Error("Invalid node type: "+e);e=A(a.a);if(!eb(e))throw Error("Invalid type name: "+e);Bb(a,"(");W(a,"Bad nodetype");var f=z(a.a).charAt(0),g=null;if('"'==f||"'"==f)g=Db(a);W(a,"Bad nodetype");Cb(a);e=new H(e,g)}else e=Eb(a);else if("*"==e)e=Eb(a);else throw Error("Bad token: "+A(a.a));a=new pb(Hb(a),d.s);return c||new U(d,e,a,"//"==b)}
function Hb(a){for(var b=[];"["==z(a.a);){A(a.a);W(a,"Missing predicate expression.");var c=zb(a);b.push(c);W(a,"Unclosed predicate expression.");Bb(a,"]")}return b}function Ab(a){if("-"==z(a.a))return A(a.a),new wb(Ab(a));var b=Fb(a);if("|"!=z(a.a))a=b;else{for(b=[b];"|"==A(a.a);)W(a,"Missing next union location path."),b.push(Fb(a));a.a.a--;a=new xb(b)}return a};function Ib(a,b){if(!a.length)throw Error("Empty XPath expression.");a=Ga(a);if(Ja(a))throw Error("Invalid XPath expression.");b?"function"==ca(b)||(b=fa(b.lookupNamespaceURI,b)):b=k(null);var c=zb(new yb(a,b));if(!Ja(a))throw Error("Bad token: "+A(a));this.evaluate=function(a,b){a=c.a(new y(a));return new X(a,b)}}
function X(a,b){if(0==b)if(a instanceof F)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof F))throw Error("value could not be converted to the specified type");this.resultType=b;switch(b){case 2:this.stringValue=a instanceof F?Qa(a):""+a;break;case 1:this.numberValue=a instanceof F?+Qa(a):+a;break;case 3:this.booleanValue=a instanceof F?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var c=
I(a);var d=[];for(var e=J(c);e;e=J(c))d.push(e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:this.singleNodeValue=Pa(a);break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=d.length?null:d[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=d.length||0>a?null:d[a]}}X.ANY_TYPE=0;
X.NUMBER_TYPE=1;X.STRING_TYPE=2;X.BOOLEAN_TYPE=3;X.UNORDERED_NODE_ITERATOR_TYPE=4;X.ORDERED_NODE_ITERATOR_TYPE=5;X.UNORDERED_NODE_SNAPSHOT_TYPE=6;X.ORDERED_NODE_SNAPSHOT_TYPE=7;X.ANY_UNORDERED_NODE_TYPE=8;X.FIRST_ORDERED_NODE_TYPE=9;function Jb(a){this.lookupNamespaceURI=Sa(a)}
ba("wgxpath.install",function(a,b){a=a||aa;var c=a.document;if(!c.evaluate||b)a.XPathResult=X,c.evaluate=function(a,b,c,g){return(new Ib(a,c)).evaluate(b,g)},c.createExpression=function(a,b){return new Ib(a,b)},c.createNSResolver=function(a){return new Jb(a)}});function Y(a){return(a=a.exec(u))?a[1]:""}var Kb=function(){if(Aa)return Y(/Firefox\/([0-9.]+)/);if(Da)return ta()||v("iPad")||v("iPod")?Y(/CriOS\/([0-9.]+)/):Y(/Chrome\/([0-9.]+)/);if(Ea&&!(ta()||v("iPad")||v("iPod")))return Y(/Version\/([0-9.]+)/);if(Ba||Ca){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(u);if(a)return a[1]+"."+a[2]}else if(w)return(a=Y(/Android\s+([0-9.]+)/))?a:Y(/Version\/([0-9.]+)/);return""}();function Lb(a){w?ka(Mb,a):ka(Kb,a)}var Nb;if(w){var Ob=/Android\s+([0-9\.]+)/.exec(u);Nb=Ob?Ob[1]:"0"}else Nb="0";var Mb=Nb;w&&Lb(2.3);w&&Lb(4);Ea&&Lb(6);function Z(a,b){b&&"string"!==typeof b&&(b=b.toString());return!!a&&1==a.nodeType&&(!b||a.tagName.toUpperCase()==b)};var Pb="BUTTON INPUT OPTGROUP OPTION SELECT TEXTAREA".split(" ");function Qb(a){return t(Pb,function(b){return Z(a,b)})?a.disabled?!1:a.parentNode&&1==a.parentNode.nodeType&&Z(a,"OPTGROUP")||Z(a,"OPTION")?Qb(a.parentNode):!za(a,function(a){var b=a.parentNode;if(b&&Z(b,"FIELDSET")&&b.disabled){if(!Z(a,"LEGEND"))return!0;for(;a=void 0!==a.previousElementSibling?a.previousElementSibling:ua(a.previousSibling);)if(Z(a,"LEGEND"))return!0}return!1}):!0};ba("_",Qb);;return this._.apply(null,arguments);}).apply({navigator:typeof window!="undefined"?window.navigator:null},arguments);}
