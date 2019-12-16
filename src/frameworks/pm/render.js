function render(state) {
  const completed = state.todos.filter(t => t.completed);
  const notCompleted = state.todos.filter(t => !t.completed);
  const list = state.todos;
  return `
  <pre>${JSON.stringify(state)}</pre>
  <section class="todoapp">
    <header class="header" >
      <form onSubmit="state.commands.addTodo(this.todo.value)">
        <h1>todos</h1> 
        <input placeholder="What needs to be done?" name="todo" class="new-todo">
      </form>
    </header> 
    <section class="main">
      <input id="toggle-all" type="checkbox" class="toggle-all"> 
      <label  for="toggle-all">Mark all as complete</label> 
      <ul class="todo-list">
        ${list.map(l => `
          <li class="todo${l.completed ? ' completed' : ''}">
            <div class="view">
              <input type="checkbox" class="toggle" ${l.completed ? "checked" : ""} onChange="state.commands.updateToDo({id:${l.id}},this.checked)"> 
              <label>${l.title}</label> 
              <button class="destroy"></button>
            </div>
            <input type="text" class="edit">
        </li>
        `).join("")}
      </ul>
    </section>
    ${state.todos.length === 0 ? "" :
      `<footer class="footer">
        <span class="todo-count"><strong>${notCompleted.length}</strong> item(s) left</span> 
        <ul class="filters">
          <li><a class="filter selected">all</a></li>
          <li><a class="filter">active</a></li>
          <li><a class="filter">completed</a></li>
        </ul>
        ${completed.length === 0 ? "" : `
        <button class="clear-completed" onClick="state.commands.removeCompleted()">
          Clear completed
        </button>`}
      </footer>`
    }
  </section > `;
}

export { render };
