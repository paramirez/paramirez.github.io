(this["webpackJsonpparamirez.github.io"]=this["webpackJsonpparamirez.github.io"]||[]).push([[101],{129:function(e,r,t){!function(e){"use strict";e.defineMode("tcl",(function(){function e(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}var r=e("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),t=e("if elseif else and not or eq ne in ni for foreach while switch"),n=/[+\-*&%=<>!?^\/\|]/;function a(e,r,t){return r.tokenize=t,t(e,r)}function o(e,f){var s=f.beforeParams;f.beforeParams=!1;var u,c=e.next();if('"'!=c&&"'"!=c||!f.inParams){if(/[\[\]{}\(\),;\.]/.test(c))return"("==c&&s?f.inParams=!0:")"==c&&(f.inParams=!1),null;if(/\d/.test(c))return e.eatWhile(/[\w\.]/),"number";if("#"==c)return e.eat("*")?a(e,f,i):"#"==c&&e.match(/ *\[ *\[/)?a(e,f,l):(e.skipToEnd(),"comment");if('"'==c)return e.skipTo(/"/),"comment";if("$"==c)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),f.beforeParams=!0,"builtin";if(n.test(c))return e.eatWhile(n),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var p=e.current().toLowerCase();return r&&r.propertyIsEnumerable(p)?"keyword":t&&t.propertyIsEnumerable(p)?(f.beforeParams=!0,"keyword"):null}return a(e,f,(u=c,function(e,r){for(var t,n=!1,a=!1;null!=(t=e.next());){if(t==u&&!n){a=!0;break}n=!n&&"\\"==t}return a&&(r.tokenize=o),"string"}))}function i(e,r){for(var t,n=!1;t=e.next();){if("#"==t&&n){r.tokenize=o;break}n="*"==t}return"comment"}function l(e,r){for(var t,n=0;t=e.next();){if("#"==t&&2==n){r.tokenize=o;break}"]"==t?n++:" "!=t&&(n=0)}return"meta"}return{startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},lineComment:"#"}})),e.defineMIME("text/x-tcl","tcl")}(t(2))}}]);
//# sourceMappingURL=101.b38b5738.chunk.js.map