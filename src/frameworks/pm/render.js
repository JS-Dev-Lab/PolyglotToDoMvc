function render(state) {
  const completed = state.todos.filter(t => t.completed);
  const notCompleted = state.todos.filter(t => !t.completed);
  const list = (state.filter === "all") ?  state.todos : (state.filter === "active") ? notCompleted : completed;
  return `
  <section class="todoapp">
    <header class="header" >
      <form onsubmit="state.commands.addTodo(this.todo.value)">
        <h1>todos</h1> 
        <input autofocus placeholder="What needs to be done?" name="todo" class="new-todo">
      </form>
    </header> 
    <section class="main">
      <input id="toggle-all" ${notCompleted.length ===0 ? "checked" : ""} type="checkbox" class="toggle-all" onclick="state.commands.updateToDos(this.checked)"> 
      <label  for="toggle-all">Mark all as complete</label> 
      <ul class="todo-list">
        ${list.map(l => `
          <li class="todo${l.completed ? ' completed' : ''}${l.editing ? ' editing' : ''}">
            <div class="view">
              <input type="checkbox" class="toggle" ${l.completed ? "checked" : ""} onchange="state.commands.updateToDo({id:${l.id}},this.checked)"> 
              <label ondblclick="state.commands.edit({id:${l.id}})">${l.title}</label> 
              <button class="destroy" onclick="state.commands.removeTodo({id:${l.id}})"></button>
            </div>
            <form onsubmit="state.commands.updateToDoTitle({id:${l.id}}, this.title.value)">
              <input name="title" type="text" class="edit" onblur="state.commands.cancelEdit({id:${l.id}})" value="${l.title}">
            </form >
        </li>
        `).join("")}
      </ul>
    </section>
    ${state.todos.length === 0 ? "" :
      `<footer class="footer">
        <span class="todo-count"><strong>${notCompleted.length}</strong> item(s) left</span>
        <form>
          <ul class="filters">
            ${['all','active','completed'].map(type => 
              `<li>
                <a class="filter ${type === state.filter? 'selected': ''}" onclick="state.commands.setFilter('${type}')">${type}</a>
              </li>`).join("")}
          </ul>
        <form>
        ${completed.length === 0 ? "" : `
        <button class="clear-completed" onClick="state.commands.removeCompleted()">
          Clear completed
        </button>`}
      </footer>`
    }
  </section > `;
}

export { render };