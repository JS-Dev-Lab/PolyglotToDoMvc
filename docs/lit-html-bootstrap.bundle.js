(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(9)(r,o);r.locals&&(e.exports=r.locals)},15:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".todoapp h1 {\r\n    position: absolute;\r\n    top: -155px;\r\n    width: 100%;\r\n    font-size: 100px;\r\n    font-weight: 100;\r\n    text-align: center;\r\n    color: rgba(175, 47, 47, 0.15);\r\n    -webkit-text-rendering: optimizeLegibility;\r\n    -moz-text-rendering: optimizeLegibility;\r\n    text-rendering: optimizeLegibility;\r\n  }\r\n  \r\n  .filters .filter {\r\n    text-transform: capitalize;\r\n  }",""])},7:function(e,t,n){"use strict";n.r(t);var r=n(21);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var s=function(){function e(t,n){l(this,e),this._template=n,this._element=t}return u(e,[{key:"initialRender",value:function(e){return new f(i({},e),this._element,this._template)}}]),e}(),f=function(){function e(t,n,o){l(this,e),this._state=Object.freeze(t),this._element=n,this._template=o,Object(r.f)(o(this._state),n)}return u(e,[{key:"update",value:function(t){var n=i({},this._state);return t(n),new e(n,this._element,this._template)}}]),e}(),d=n(23);function p(){var e=v(['\n        <button class="clear-completed" @click=',">\n          Clear completed\n        </button>"]);return p=function(){return e},e}function m(){var e=v(['<li>\n              <a class="filter ','" href="#/','">',"</a>\n            </li>"]);return m=function(){return e},e}function b(){var e=v(['<footer class="footer">\n        <span class="todo-count"><strong>','</strong> item(s) left</span>\n        <ul class="filters">\n          ',"\n        </ul>\n        ","\n      </footer>"]);return b=function(){return e},e}function g(){var e=v(['\n          <li class="todo',"",'">\n            <div class="view">\n              <input type="checkbox" class="toggle" ?checked='," @change=","> \n              <label @dblclick=",">",'</label> \n              <button class="destroy" @click=',' ""></button>\n            </div>\n            <form @submit=','>\n              <input name="title" type="text" class="edit" @blur=',' value="','">\n            </form >\n        </li>\n        ']);return g=function(){return e},e}function h(){var e=v(['\n  <section class="todoapp">\n    <header class="header" >\n      <form @submit=','>\n        <h1>todos</h1> \n        <input autofocus placeholder="What needs to be done?" name="todo" class="new-todo">\n      </form>\n    </header> \n    <section class="main">\n      <input id="toggle-all" ?checked=',' type="checkbox" class="toggle-all" @click=','> \n      <label  for="toggle-all">Mark all as complete</label> \n      <ul class="todo-list">\n        ',"\n      </ul>\n    </section>\n    ","\n  </section >"]);return h=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n(10),n(12),n(14);n.d(t,"engine",(function(){return O}));var O=new s(document.getElementById("app"),(function(e){var t=e.todos.filter((function(e){return e.completed})),n=e.todos.filter((function(e){return!e.completed})),o="all"===e.filter?e.todos:"active"===e.filter?n:t;return Object(r.d)(h(),(function(t){return e.commands.addTodo(t.target.todo.value)}),0===n.length,(function(t){return e.commands.updateToDos(t.target.checked)}),Object(d.a)(o,(function(t){return Object(r.d)(g(),t.completed?" completed":"",t.editing?" editing":"",t.completed,(function(n){return e.commands.updateToDo(t,n.target.checked)}),(function(){return e.commands.edit(t)}),t.title,(function(){return e.commands.removeTodo(t)}),(function(n){return e.commands.updateToDoTitle(t,n.target.title.value)}),(function(){return e.commands.cancelEdit(t)}),t.title)})),0===e.todos.length?null:Object(r.d)(b(),n.length,["all","active","completed"].map((function(t){return Object(r.d)(m(),t===e.filter?"selected":"",t,t)})),0===t.length?"":Object(r.d)(p(),(function(){return e.commands.removeCompleted()}))))}))}}]);