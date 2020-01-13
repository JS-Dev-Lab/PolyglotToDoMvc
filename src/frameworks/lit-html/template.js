import { html, nothing } from "lit-html";
import { repeat } from "lit-html/directives/repeat.js";

function template({ state: { todos, filter }, commands }) {
  const completed = todos.filter(t => t.completed);
  const notCompleted = todos.filter(t => !t.completed);
  const list =
    filter === "all" ? todos : filter === "active" ? notCompleted : completed;

  return html`
    <section class="todoapp">
      <header class="header">
        <form
          @submit=${e => {
      commands.addTodo(e.target.todo.value);
      e.preventDefault();
      e.target.todo.value = "";
    }}
        >
          <h1>todos</h1>
          <input
            autofocus
            placeholder="What needs to be done?"
            name="todo"
            class="new-todo"
          />
        </form>
      </header>
      <section class="main">
        <input
          id="toggle-all"
          .checked=${notCompleted.length === 0}
          type="checkbox"
          class="toggle-all"
          @click=${e => commands.updateToDos(e.target.checked)}
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          ${repeat(
      list,
      l => l.id,
      l => html`
              <li
                class="todo${l.completed ? " completed" : ""}${l.editing
          ? " editing"
          : ""}"
              >
                <div class="view">
                  <input
                    type="checkbox"
                    class="toggle"
                    .checked=${l.completed}
                    @change=${e => commands.updateToDo(l, e.target.checked)}
                  />
                  <label @dblclick=${() => commands.edit(l)}>${l.title}</label>
                  <button
                    class="destroy"
                    @click=${() => commands.removeTodo(l)}
                  ></button>
                </div>
                <form
                  @submit=${e => {
          commands.updateToDoTitle(l, e.target.title.value);
          e.preventDefault();
        }}
                >
                  <input
                    name="title"
                    type="text"
                    class="edit"
                    @blur=${e => {
          commands.cancelEdit(l);
          e.target.value = l.title;
        }}
                    value="${l.title}"
                  />
                </form>
              </li>
            `
    )}
        </ul>
      </section>
      ${todos.length === 0
      ? nothing
      : html`
            <footer class="footer">
              <span class="todo-count"
                ><strong>${notCompleted.length}</strong> item(s) left</span
              >
              <ul class="filters">
                ${["all", "active", "completed"].map(
        type =>
          html`
                      <li>
                        <a
                          class="filter ${type === filter ? "selected" : ""}"
                          href="#/${type}"
                          >${type}</a
                        >
                      </li>
                    `
      )}
              </ul>
              ${completed.length === 0
          ? nothing
          : html`
                    <button
                      class="clear-completed"
                      @click=${() => commands.removeCompleted()}
                    >
                      Clear completed
                    </button>
                  `}
            </footer>
          `}
    </section>
  `;
}

export { template };
