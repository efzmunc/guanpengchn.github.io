(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b4"],{"1a43":function(t,e,a){},"602e":function(t,e,a){},"84d9":function(t,e,a){"use strict";var i=a("1a43"),r=a.n(i);r.a},"8bf3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"book"}},[t.isProgress?[a("v-progress-circular",{attrs:{indeterminate:"",color:"indigo darken-2"}})]:t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProgress,expression:"!isProgress"}],staticClass:"contain"},[t._m(0),a("ul",{staticClass:"align"},t._l(t.books,function(e,i){return a("li",{key:i},[a("figure",{staticClass:"book"},[a("ul",{staticClass:"hardcover_front"},[a("li",[a("img",{attrs:{src:e.pic_url,alt:"",width:"100%",height:"100%"},on:{load:t.imageLoaded}})]),a("li")]),a("ul",{staticClass:"page"},[a("li"),a("li",[a("a",{staticClass:"btn",staticStyle:{width:"90px",position:"absolute","margin-top":"70px"},attrs:{href:e.html_url,target:"_blank"}},[t._v("View")]),a("a",{staticClass:"btn",staticStyle:{width:"90px"},attrs:{href:e.download_url}},[t._v("Download")])]),a("li"),a("li"),a("li")]),t._m(1,!0),t._m(2,!0)])])}))])],2)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"45px"}},[a("h2",{staticStyle:{margin:"1em 0 1em","text-align":"center"}},[t._v("请大家多购买正版书籍")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"hardcover_back"},[a("li"),a("li")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"book_spine"},[a("li"),a("li")])}],s=a("365c"),n=a("db49"),l={data:function(){return{books:[],isProgress:!1,imageNum:0,repoName:n["d"].repo}},created:function(){this.getNote()},methods:{getNote:function(){var t=this;this.isProgress=!0,Object(s["a"])(this.repoName).then(function(e){var a=!0,i=!1,r=void 0;try{for(var s,n=e[Symbol.iterator]();!(a=(s=n.next()).done);a=!0){var l=s.value;-1!=l.name.indexOf(".pdf")&&t.books.push({name:l.name.replace(".pdf",""),download_url:l.html_url.replace("blob","raw"),pic_url:l.html_url.replace("blob/master","raw/master/cover").replace("pdf","jpg"),html_url:l.html_url})}}catch(t){i=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}})},imageLoaded:function(){this.imageNum++,this.imageNum==this.books.length&&(this.isProgress=!1)}}},o=l,c=(a("b805"),a("84d9"),a("2877")),u=Object(c["a"])(o,i,r,!1,null,"488969e3",null);e["default"]=u.exports},b805:function(t,e,a){"use strict";var i=a("602e"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-72b4.342479ff.js.map