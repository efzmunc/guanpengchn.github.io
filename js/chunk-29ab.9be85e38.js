(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29ab"],{"5e94":function(t,e,a){},"8bf3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"book"}},[t.isProgress?[a("v-progress-circular",{attrs:{indeterminate:"",color:"indigo darken-2"}})]:t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProgress,expression:"!isProgress"}],staticClass:"contain"},[t._m(0),a("ul",{staticClass:"align"},t._l(t.books,function(e,r){return a("li",{key:r},[a("figure",{staticClass:"book"},[a("ul",{staticClass:"hardcover_front"},[a("li",[a("img",{attrs:{src:e.pic_url,alt:"",width:"100%",height:"100%"},on:{load:t.imageLoaded}})]),a("li")]),a("ul",{staticClass:"page"},[a("li"),a("li",[a("a",{staticClass:"btn",staticStyle:{width:"90px",position:"absolute","margin-top":"70px"},attrs:{href:e.html_url,target:"_blank"}},[t._v("View")]),a("a",{staticClass:"btn",staticStyle:{width:"90px"},attrs:{href:e.download_url}},[t._v("Download")])]),a("li"),a("li"),a("li")]),t._m(1,!0),t._m(2,!0)])])})),t._m(3)])],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"45px"}},[a("h2",{staticStyle:{margin:"1em 0 1em","text-align":"center"}},[t._v("请大家多购买正版书籍")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"hardcover_back"},[a("li"),a("li")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"book_spine"},[a("li"),a("li")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"45px"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("感谢书籍特效作者，源码：\n          "),a("a",{attrs:{href:"https://tympanus.net/codrops/2013/07/11/animated-books-with-css-3d-transforms/"}},[t._v("Animated Books with CSS 3D Transforms")])])])}],i=a("365c"),n={data:function(){return{books:[],isProgress:!1,imageNum:0,repoName:"aaron.books"}},created:function(){this.getNote()},methods:{getNote:function(){var t=this;this.isProgress=!0,Object(i["c"])("aaron.books").then(function(e){var a=!0,r=!1,s=void 0;try{for(var i,n=e[Symbol.iterator]();!(a=(i=n.next()).done);a=!0){var o=i.value;-1!=o.name.indexOf(".pdf")&&t.books.push({name:o.name.replace(".pdf",""),download_url:o.html_url.replace("blob","raw"),pic_url:o.html_url.replace("blob/master","raw/master/cover").replace("pdf","jpg"),html_url:o.html_url})}}catch(t){r=!0,s=t}finally{try{a||null==n.return||n.return()}finally{if(r)throw s}}})},imageLoaded:function(){this.imageNum++,this.imageNum==this.books.length&&(this.isProgress=!1)}}},o=n,l=(a("8e79"),a("2877")),c=Object(l["a"])(o,r,s,!1,null,"332cdae6",null);e["default"]=c.exports},"8e79":function(t,e,a){"use strict";var r=a("5e94"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-29ab.9be85e38.js.map