(this["webpackJsonpparamirez.github.io"]=this["webpackJsonpparamirez.github.io"]||[]).push([[53],{81:function(t,e,n){!function(t){"use strict";t.defineMode("haxe",(function(t,e){var n=t.indentUnit;function r(t){return{type:t,style:"keyword"}}var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(t,e,n){return e.tokenize=n,n(t,e)}function v(t,e){for(var n,r=!1;null!=(n=t.next());){if(n==e&&!r)return!0;r=!r&&"\\"==n}}function b(t,e,n){return s=t,a=n,e}function h(t,e){var n=t.next();if('"'==n||"'"==n)return m(t,e,(r=n,function(t,e){return v(t,r)&&(e.tokenize=h),b("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(n))return b(n);if("0"==n&&t.eat(/x/i))return t.eatWhile(/[\da-f]/i),b("number","number");if(/\d/.test(n)||"-"==n&&t.eat(/\d/))return t.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),b("number","number");if(e.reAllowed&&"~"==n&&t.eat(/\//))return v(t,"/"),t.eatWhile(/[gimsu]/),b("regexp","string-2");if("/"==n)return t.eat("*")?m(t,e,y):t.eat("/")?(t.skipToEnd(),b("comment","comment")):(t.eatWhile(p),b("operator",null,t.current()));if("#"==n)return t.skipToEnd(),b("conditional","meta");if("@"==n)return t.eat(/:/),t.eatWhile(/[\w_]/),b("metadata","meta");if(p.test(n))return t.eatWhile(p),b("operator",null,t.current());if(/[A-Z]/.test(n))return t.eatWhile(/[\w_<>]/),b("type","variable-3",a=t.current());t.eatWhile(/[\w_]/);var r,a=t.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&e.kwAllowed?b(i.type,i.style,a):b("variable","variable",a)}function y(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=h;break}r="*"==n}return b("comment","comment")}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function k(t,e,n,r,a,i){this.indented=t,this.column=e,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function w(t,e){for(var n=t.localVars;n;n=n.next)if(n.name==e)return!0}function g(t,e){if(/[a-z]/.test(e.charAt(0)))return!1;for(var n=t.importedtypes.length,r=0;r<n;r++)if(t.importedtypes[r]==e)return!0}function V(t){for(var e=A.state,n=e.importedtypes;n;n=n.next)if(n.name==t)return;e.importedtypes={name:t,next:e.importedtypes}}var A={state:null,column:null,marked:null,cc:null};function S(){for(var t=arguments.length-1;t>=0;t--)A.cc.push(arguments[t])}function z(){return S.apply(null,arguments),!0}function E(t,e){for(var n=e;n;n=n.next)if(n.name==t)return!0;return!1}function W(t){var e=A.state;if(e.context){if(A.marked="def",E(t,e.localVars))return;e.localVars={name:t,next:e.localVars}}else if(e.globalVars){if(E(t,e.globalVars))return;e.globalVars={name:t,next:e.globalVars}}}var M={name:"this",next:null};function C(){A.state.context||(A.state.localVars=M),A.state.context={prev:A.state.context,vars:A.state.localVars}}function T(){A.state.localVars=A.state.context.vars,A.state.context=A.state.context.prev}function Z(t,e){var n=function(){var n=A.state;n.lexical=new k(n.indented,A.stream.column(),t,null,n.lexical,e)};return n.lex=!0,n}function I(){var t=A.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function O(t){return function e(n){return n==t?z():";"==t?S():z(e)}}function P(t){return"@"==t?z(B):"var"==t?z(Z("vardef"),N,O(";"),I):"keyword a"==t?z(Z("form"),_,P,I):"keyword b"==t?z(Z("form"),P,I):"{"==t?z(Z("}"),C,L,I,T):";"==t?z():"attribute"==t?z(j):"function"==t?z(Y):"for"==t?z(Z("form"),O("("),Z(")"),R,O(")"),I,P,I):"variable"==t?z(Z("stat"),q):"switch"==t?z(Z("form"),_,Z("}","switch"),O("{"),L,I,I):"case"==t?z(_,O(":")):"default"==t?z(O(":")):"catch"==t?z(Z("form"),C,O("("),rt,O(")"),P,I,T):"import"==t?z(U,O(";")):"typedef"==t?z($):S(Z("stat"),_,O(";"),I)}function _(t){return x.hasOwnProperty(t)||"type"==t?z(J):"function"==t?z(Y):"keyword c"==t?z(D):"("==t?z(Z(")"),D,O(")"),I,J):"operator"==t?z(_):"["==t?z(Z("]"),K(D,"]"),I,J):"{"==t?z(Z("}"),K(H,"}"),I,J):z()}function D(t){return t.match(/[;\}\)\],]/)?S():S(_)}function J(t,e){return"operator"==t&&/\+\+|--/.test(e)?z(J):"operator"==t||":"==t?z(_):";"!=t?"("==t?z(Z(")"),K(_,")"),I,J):"."==t?z(G,J):"["==t?z(Z("]"),_,O("]"),I,J):void 0:void 0}function j(t){return"attribute"==t?z(j):"function"==t?z(Y):"var"==t?z(N):void 0}function B(t){return":"==t||"variable"==t?z(B):"("==t?z(Z(")"),K(F,")"),I,P):void 0}function F(t){if("variable"==t)return z()}function U(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(V(e),z()):"variable"==t||"property"==t||"."==t||"*"==e?z(U):void 0}function $(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(V(e),z()):"type"==t&&/[A-Z]/.test(e.charAt(0))?z():void 0}function q(t){return":"==t?z(I,P):S(J,O(";"),I)}function G(t){if("variable"==t)return A.marked="property",z()}function H(t){if("variable"==t&&(A.marked="property"),x.hasOwnProperty(t))return z(O(":"),_)}function K(t,e){function n(r){return","==r?z(t,n):r==e?z():z(O(e))}return function(r){return r==e?z():S(t,n)}}function L(t){return"}"==t?z():S(P,L)}function N(t,e){return"variable"==t?(W(e),z(tt,Q)):z()}function Q(t,e){return"="==e?z(_,Q):","==t?z(N):void 0}function R(t,e){return"variable"==t?(W(e),z(X,_)):S()}function X(t,e){if("in"==e)return z()}function Y(t,e){return"variable"==t||"type"==t?(W(e),z(Y)):"new"==e?z(Y):"("==t?z(Z(")"),C,K(rt,")"),I,tt,P,T):void 0}function tt(t){if(":"==t)return z(et)}function et(t){return"type"==t||"variable"==t?z():"{"==t?z(Z("}"),K(nt,"}"),I):void 0}function nt(t){if("variable"==t)return z(tt)}function rt(t,e){if("variable"==t)return W(e),z(tt)}return T.lex=!0,I.lex=!0,{startState:function(t){var r={tokenize:h,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new k((t||0)-n,0,"block",!1),localVars:e.localVars,importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:e.localVars&&{vars:e.localVars},indented:0};return e.globalVars&&"object"==typeof e.globalVars&&(r.globalVars=e.globalVars),r},token:function(t,e){if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"==s?n:(e.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),e.kwAllowed="."!=s,function(t,e,n,r,a){var i=t.cc;for(A.state=t,A.stream=a,A.marked=null,A.cc=i,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;)if((i.length?i.pop():P)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return A.marked?A.marked:"variable"==n&&w(t,r)?"variable-2":"variable"==n&&g(t,r)?"variable-3":e}}(e,n,s,a,t))},indent:function(t,e){if(t.tokenize!=h)return 0;var r=e&&e.charAt(0),a=t.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n):a.indented+(/^(?:case|default)\b/.test(e)?n:2*n)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}})),t.defineMIME("text/x-haxe","haxe"),t.defineMode("hxml",(function(){return{startState:function(){return{define:!1,inString:!1}},token:function(t,e){var n=t.peek(),r=t.sol();if("#"==n)return t.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return t.eat(/-/),"-"==t.peek()&&(t.eat(/-/),a="keyword a"),"D"==t.peek()&&(t.eat(/[D]/),a="keyword c",e.define=!0),t.eatWhile(/[A-Z]/i),a}return n=t.peek(),0==e.inString&&"'"==n&&(e.inString=!0,t.next()),1==e.inString?(t.skipTo("'")||t.skipToEnd(),"'"==t.peek()&&(t.next(),e.inString=!1),"string"):(t.next(),null)},lineComment:"#"}})),t.defineMIME("text/x-hxml","hxml")}(n(2))}}]);
//# sourceMappingURL=53.59f8d277.chunk.js.map