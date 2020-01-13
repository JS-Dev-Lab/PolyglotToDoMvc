<template>
  <section class="todoapp">
    <header class="header">
      <div>
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </div>
    </header>
    <section
      class="main"
      v-show="state.todos.length"
    >
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        v-model="allDone"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          class="todo"
          v-for="todo in filteredTodos"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editedTodo }"
        >
          <div class="view">
            <input
              class="toggle"
              type="checkbox"
              :checked="todo.completed"
              @input="commands.updateToDo(todo, $event.target.checked)"
            />
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button
              class="destroy"
              @click="removeTodo(todo)"
            ></button>
          </div>
          <input
            class="edit"
            type="text"
            v-model="editName"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          />
        </li>
      </ul>
    </section>

    <footer
      class="footer"
      v-show="state.todos.length"
    >
      <span class="todo-count">
        <strong v-text="remaining"></strong> item(s) left
      </span>

      <ul class="filters">
        <li
          v-for="type in ['all', 'active', 'completed']"
          :key="type"
        >
          <a
            class="filter"
            :href="`#/${type}`"
            :class="{ selected: state.filter === type }"
          >{{ type }}</a>
        </li>
      </ul>
      <button
        class="clear-completed"
        @click="removeCompleted"
        v-show="state.todos.length > remaining"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(todo => !todo.completed);
  },
  completed(todos) {
    return todos.filter(todo => todo.completed);
  }
};

export default {
  props: {
    state: {
      type: Object,
      required: true
    },
    commands: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newTodo: "",
      editedTodo: null,
      editName: "",
      allDone: false
    };
  },
  methods: {
    addTodo() {
      const { newTodo } = this;
      this.newTodo = "";
      this.commands.addTodo(newTodo);
    },
    editTodo(todo) {
      this.editName = todo.title;
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      if (!this.editedTodo) {
        return;
      }
      this.commands.updateToDoTitle(todo, this.editName);
      this.editedTodo = null;
    },
    cancelEdit(todo) {
      this.editedTodo = null;
    },
    removeTodo(todo) {
      this.commands.removeTodo(todo);
    },
    removeCompleted() {
      this.commands.removeCompleted();
    }
  },
  computed: {
    filteredTodos() {
      return filters[this.state.filter](this.state.todos);
    },
    remaining() {
      return filters.active(this.state.todos).length;
    }
  },
  watch: {
    allDone(newValue) {
      this.commands.updateToDos(newValue);
    }
  },
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
};
</script>

<style src="../../../node_modules/todomvc-common/base.css" />
<style src="../../../node_modules//todomvc-app-css/index.css" />
<style src="../../style/style.css" />
