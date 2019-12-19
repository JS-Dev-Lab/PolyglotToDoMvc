function run(uiEngine, storage) {
  let { id, todos } = storage.load();

  const updateSave = (view, updater) =>
    view.update(s => {
      updater(s);
      storage.save({ id, todos: s.todos });
    });

  let view = uiEngine.initialRender({
    todos,
    filter: "all",
    commands: {
      setFilter(value) {
        view = view.update(s => (s.filter = value));
      },
      addTodo(title) {
        if (title === "") {
          return;
        }
        view = updateSave(view, s =>
          s.todos.push({
            id: id++,
            completed: false,
            editing: false,
            title
          })
        );
      },
      edit(todo) {
        view = updateSave(view, s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.editing = true;
        });
      },
      cancelEdit(todo) {
        view = updateSave(view, s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.editing = false;
        });
      },
      updateToDo(todo, completed) {
        view = updateSave(view, s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.completed = completed;
        });
      },
      updateToDos(completed) {
        view = updateSave(view, s => {
          s.todos.forEach(todo => {
            todo.completed = completed;
          });
        });
      },
      updateToDoTitle(todo, title) {
        view = updateSave(view, s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.title = title;
          realTodo.editing = false;
        });
      },
      removeTodo(todo) {
        view = updateSave(view, s => {
          s.todos = s.todos.filter(t => t.id !== todo.id);
        });
      },
      removeCompleted() {
        view = updateSave(view, s => {
          s.todos = s.todos.filter(t => !t.completed);
        });
      }
    }
  });
}

export { run };
