(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{13:function(e,t,o){var n=o(35);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};o(8)(n,i);n.locals&&(e.exports=n.locals)},34:function(e,t,o){"use strict";var n=o(13);o.n(n).a},35:function(e,t,o){(e.exports=o(7)(!1)).push([e.i,".todoapp h1 {\r\n    position: absolute;\r\n    top: -155px;\r\n    width: 100%;\r\n    font-size: 100px;\r\n    font-weight: 100;\r\n    text-align: center;\r\n    color: rgba(175, 47, 47, 0.15);\r\n    -webkit-text-rendering: optimizeLegibility;\r\n    -moz-text-rendering: optimizeLegibility;\r\n    text-rendering: optimizeLegibility;\n}\n.filters .filter {\r\n    text-transform: capitalize;\n}",""])},4:function(e,t,o){"use strict";o.r(t);var n=o(26);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e}n.a.config.productionTip=!1;var r=function(){function e(t,o){i(this,e),this._selector=t,this._App=o}return s(e,[{key:"initialRender",value:function(e){var t=this._App,o=new n.a({render:function(e){return e(t,{props:{state:this.state}})},data:{state:e},methods:{update:function(e){e(this.state)}}}).$mount(this._selector);return new l(o)}}]),e}(),l=function(){function e(t){i(this,e),this._vueInstance=t}return s(e,[{key:"update",value:function(e){return this._vueInstance.update(e),this}}]),e}(),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"todoapp"},[o("header",{staticClass:"header"},[o("div",[o("h1",[e._v("todos")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{placeholder:"What needs to be done?",autofocus:""},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})])]),e._v(" "),o("section",{directives:[{name:"show",rawName:"v-show",value:e.state.todos.length,expression:"state.todos.length"}],staticClass:"main"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.allDone,expression:"allDone"}],staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:Array.isArray(e.allDone)?e._i(e.allDone,null)>-1:e.allDone},on:{change:function(t){var o=e.allDone,n=t.target,i=!!n.checked;if(Array.isArray(o)){var a=e._i(o,null);n.checked?a<0&&(e.allDone=o.concat([null])):a>-1&&(e.allDone=o.slice(0,a).concat(o.slice(a+1)))}else e.allDone=i}}}),e._v(" "),o("label",{attrs:{for:"toggle-all"}},[e._v("Mark all as complete")]),e._v(" "),o("ul",{staticClass:"todo-list"},e._l(e.filteredTodos,(function(t){return o("li",{key:t.id,staticClass:"todo",class:{completed:t.completed,editing:t==e.editedTodo}},[o("div",{staticClass:"view"},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.completed},on:{input:function(o){return e.state.commands.updateToDo(t,o.target.checked)}}}),e._v(" "),o("label",{on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.title))]),e._v(" "),o("button",{staticClass:"destroy",on:{click:function(o){return e.removeTodo(t)}}})]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.editName,expression:"editName"},{name:"todo-focus",rawName:"v-todo-focus",value:t==e.editedTodo,expression:"todo == editedTodo"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:e.editName},on:{blur:function(o){return e.doneEdit(t)},keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doneEdit(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(t){t.target.composing||(e.editName=t.target.value)}}})])})),0)]),e._v(" "),o("footer",{directives:[{name:"show",rawName:"v-show",value:e.state.todos.length,expression:"state.todos.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",{domProps:{textContent:e._s(e.remaining)}}),e._v(" item(s) left\n    ")]),e._v(" "),o("ul",{staticClass:"filters"},e._l(["all","active","completed"],(function(t){return o("li",{key:t},[o("a",{staticClass:"filter",class:{selected:e.state.filter===t},attrs:{href:"#/"+t}},[e._v(e._s(t))])])})),0),e._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:e.state.todos.length>e.remaining,expression:"state.todos.length > remaining"}],staticClass:"clear-completed",on:{click:e.removeCompleted}},[e._v("Clear completed")])])])};d._withStripped=!0;var c={all:function(e){return e},active:function(e){return e.filter((function(e){return!e.completed}))},completed:function(e){return e.filter((function(e){return e.completed}))}},u={props:{state:{type:Object,required:!0}},data:function(){return{newTodo:"",editedTodo:null,editName:"",allDone:!1}},methods:{addTodo:function(){var e=this.newTodo;this.newTodo="",this.state.commands.addTodo(e)},editTodo:function(e){this.editName=e.title,this.editedTodo=e},doneEdit:function(e){this.editedTodo&&(this.state.commands.updateToDoTitle(e,this.editName),this.editedTodo=null)},cancelEdit:function(e){this.editedTodo=null},removeTodo:function(e){this.state.commands.removeTodo(e)},removeCompleted:function(){this.state.commands.removeCompleted()}},computed:{filteredTodos:function(){return c[this.state.filter](this.state.todos)},remaining:function(){return c.active(this.state.todos).length}},watch:{allDone:function(e){this.state.commands.updateToDos(e)}},directives:{"todo-focus":function(e,t){t.value&&e.focus()}}},p=(o(30),o(32),o(34),o(36)),m=Object(p.a)(u,d,[],!1,null,null,null);m.options.__file="src/frameworks/vue/App.vue";var f=m.exports;o.d(t,"engine",(function(){return v}));var v=new r("#app",f)}}]);