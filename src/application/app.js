function run(uiEngine) {
  let id = 1;

  let view = uiEngine.initialRender({
    todos: [],
    filter: "all",
    commands: {
      setFilter(value){
        view = view.update(s => s.filter = value);
      },
      addTodo(title) {
        if (title === "") {
          return;
        }
        view = view.update(s => s.todos.push({
          id: id++,
          completed: false,
          title
        }));
      },
      updateToDo(todo, completed) {
        view = view.update(s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.completed = completed;
        });
      },
      updateToDos(completed) {
        view = view.update(s => {
          s.todos.forEach(todo => {
            todo.completed = completed;
          });
        });
      },
      updateToDoName(todo, name) {
        view = view.update(s => {
          const realTodo = s.todos.find(t => t.id === todo.id);
          realTodo.title = name;
        });
      },
      removeTodo(todo) {
        view = view.update(s => {
          s.todos = s.todos.filter(t => t.id !== todo.id);
        });
      },
      removeCompleted() {
        view = view.update(s => {
          s.todos = s.todos.filter(t => !t.completed);
        });
      }
    }
  });
}

export { run };
