function run(createView, storage, onNavigate) {
  let { id, todos } = storage.load();

  const view = createView({
    state: {
      todos,
      filter: "all"
    },
    commands: {
      addTodo(title) {
        if (title === "") {
          return;
        }
        view.update(s =>
          s.todos.push({
            id: id++,
            completed: false,
            editing: false,
            title
          })
        );
      },
      edit(todo) {
        view.update(s => {
          s.todos.forEach(t => (t.editing = false));
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.editing = true;
        });
      },
      cancelEdit(todo) {
        view.update(s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.editing = false;
        });
      },
      updateToDo(todo, completed) {
        view.update(s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.completed = completed;
        });
      },
      updateToDos(completed) {
        view.update(s => {
          s.todos.forEach(todo => {
            todo.completed = completed;
          });
        });
      },
      updateToDoTitle(todo, title) {
        view.update(s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.title = title;
          realTodo.editing = false;
        });
      },
      removeTodo(todo) {
        view.update(s => {
          s.todos = s.todos.filter(t => t.id !== todo.id);
        });
      },
      removeCompleted() {
        view.update(s => {
          s.todos = s.todos.filter(t => !t.completed);
        });
      }
    }
  });

  view.onStateChanged(s => {
    storage.save({ id, todos: s.todos });
  });

  function getFilter(path) {
    switch (path) {
      case "#/active":
        return "active";

      case "#/completed":
        return "completed";
    }
    return "all";
  }

  onNavigate(path => {
    const filter = getFilter(path);
    view.update(s => (s.filter = filter));
  });
}

export { run };
