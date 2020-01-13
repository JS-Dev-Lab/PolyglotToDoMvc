import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.state, editValue: "" };
  }

  render() {
    const { state } = this;
    const { todos, filter, editValue } = state;
    const { commands } = this.props;
    const completed = todos.filter(t => t.completed);
    const notCompleted = todos.filter(t => !t.completed);
    const list =
      filter === "all" ? todos : filter === "active" ? notCompleted : completed;

    return (
      <section className="todoapp">
        <header className="header">
          <form
            onSubmit={e => {
              commands.addTodo(e.target.todo.value);
              e.preventDefault();
              e.target.todo.value = "";
            }}
          >
            <h1>todos</h1>
            <input
              placeholder="What needs to be done?"
              name="todo"
              className="new-todo"
            />
          </form>
        </header>
        <section className="main">
          <input
            id="toggle-all"
            checked={notCompleted.length === 0}
            type="checkbox"
            className="toggle-all"
            onChange={e => commands.updateToDos(e.target.checked)}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {list.map(l => (
              <li
                key={l.id}
                className={`todo ${l.completed ? " completed" : ""} ${
                  l.editing ? " editing" : ""
                  }`}
              >
                <div className="view">
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={l.completed}
                    onChange={e => commands.updateToDo(l, e.target.checked)}
                  />
                  <label
                    onDoubleClick={() => {
                      this.setState({ editValue: l.title });
                      commands.edit(l);
                    }}
                  >
                    {l.title}
                  </label>
                  <button
                    className="destroy"
                    onClick={() => commands.removeTodo(l)}
                  ></button>
                </div>
                <form
                  onSubmit={e => {
                    commands.updateToDoTitle(l, editValue);
                    e.preventDefault();
                  }}
                  onBlur={() => commands.cancelEdit(l)}
                >
                  <input
                    name="title"
                    type="text"
                    className="edit"
                    onBlur={() => commands.cancelEdit(l)}
                    value={editValue}
                    onChange={e => {
                      this.setState({ editValue: e.target.value });
                    }}
                  />
                </form>
              </li>
            ))}
          </ul>
        </section>
        {todos.length !== 0 && (
          <footer className="footer">
            <span className="todo-count">
              <strong>{notCompleted.length}</strong> item(s) left
            </span>
            <ul className="filters">
              {["all", "active", "completed"].map(type => (
                <li key={type}>
                  <a
                    className={`filter ${type === filter ? "selected" : ""}`}
                    href={`#/${type}`}
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
            {completed.length !== 0 && (
              <button
                className="clear-completed"
                onClick={() => commands.removeCompleted()}
              >
                Clear completed
              </button>
            )}
          </footer>
        )}
      </section>
    );
  }
}

export default App;
