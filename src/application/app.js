function run(createView, storage, onNavigate) {
  let { id, todos } = storage.load();

  const updateSave = (view, updater) =>
    view.update(s => {
      updater(s);
      storage.save({ id, todos: s.todos });
    });

  const view = createView({
    state: {
      todos,
      filter: "all",
    },
    commands: {
      addTodo(title) {
        if (title === "") {
          return;
        }
        updateSave(view, s =>
          s.todos.push({
            id: id++,
            completed: false,
            editing: false,
            title
          })
        );
      },
      edit(todo) {
        updateSave(view, s => {
          s.todos.forEach(t => (t.editing = false));
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.editing = true;
        });
      },
      cancelEdit(todo) {
        updateSave(view, s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.editing = false;
        });
      },
      updateToDo(todo, completed) {
        updateSave(view, s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.completed = completed;
        });
      },
      updateToDos(completed) {
        updateSave(view, s => {
          s.todos.forEach(todo => {
            todo.completed = completed;
          });
        });
      },
      updateToDoTitle(todo, title) {
        updateSave(view, s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.title = title;
          realTodo.editing = false;
        });
      },
      removeTodo(todo) {
        updateSave(view, s => {
          s.todos = s.todos.filter(t => t.id !== todo.id);
        });
      },
      removeCompleted() {
        updateSave(view, s => {
          s.todos = s.todos.filter(t => !t.completed);
        });
      }
    }
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
