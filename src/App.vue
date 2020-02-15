<template>
  <div>
    <md-toolbar class="md-primary">
      <h3 class="md-title">
        <i class="material-icons">
          done
        </i>
        Tick List
      </h3>
    </md-toolbar>
    <div class="main-content">
      <p>
        Welcome to Tick List. Start off by adding something you want to get
        done.
      </p>
      <!--new todo input code -->
      <md-field>
        <md-input
          v-model="currentTodo"
          @keydown.enter="addTodo()"
          placeholder="Add a todo"
        />
      </md-field>
      <!--Code to let users add a todo-->

      <div
        class="md-layout md-gutter md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <div
          class="md-layout-item todo-card"
          v-for="todo in todos"
          :key="todo.id"
        >
          <md-card md-with-hover>
            <md-card-content>
              <div class="grid-container">
                <div class="grid-item_check">
                  <md-checkbox
                    v-model="todo.isCompleted"
                    @click="updateCheck(todo)"
                  ></md-checkbox>
                </div>
                <div class="grid-item">
                  <span class="todo-item">{{ todo.label }}</span>
                  <span :class="{ hide: !todo.isBeingEdited }">
                    <md-field>
                      <md-input
                        v-model="updatingTodo"
                        @keydown.enter="updateTodo(todo)"
                        :placeholder="todo.label"
                        :class="{ hide: !todo.isBeingEdited }"
                      />
                      <span
                        class="md-caption"
                        :class="{ hide: !todo.isBeingEdited }"
                        >Update your item</span
                      >
                    </md-field></span
                  >
                </div>
                <div class="grid-item">
                  <button class="edit-button" @click="setEditing(todo)">
                    <i class="material-icons">edit</i>
                  </button>
                </div>
              </div> </md-card-content
            ><md-card-actions md-alignment="left">
              <md-button class="md-raised md-primary" @click="removeTodo(todo)"
                >Delete</md-button
              >
            </md-card-actions></md-card
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      //a text input for adding todos
      currentTodo: "",
      updatingTodo: "",
      boolCheck: false
    };
  },
  mounted() {
    if (localStorage.getItem("todos"))
      this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true
    }
  },

  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        isBeingEdited: false
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    updateCheck(todo) {
      var index = this.todos.indexOf(todo);
      this.todos[index].completed = !todo.completed;
    },
    setEditing(todo) {
      var index = this.todos.indexOf(todo);
      this.todos[index].isBeingEdited = !this.todos[index].isBeingEdited;
      this.updatingTodo = this.todos[index].label;
    },
    updateTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos[index].label = this.updatingTodo;
      this.todos[index].isBeingEdited = !this.todos[index].isBeingEdited;
      this.updatingtodo = "";
    }
  }
};
</script>

<style>
.main-content {
  padding: 20px;
}

.hide {
  display: none;
  visibility: hidden;
}

.grid-container {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
}

.grid-item {
  padding: 10px;
}

.grid-item_check {
  margin-top: -5px;
}

.todos {
  list-style: none;
  line-height: 3em;
}

.todo-item {
  font-size: 18px;
}

.todo-card {
  margin-bottom: 20px;
}

.edit-button {
  border: 0px;
}
.edit-button:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>

<!--
<div class="main-content">
      <p>
        Welcome to Tick List. Start off by adding something you want to get
        done.
      </p>
      <md-field>
        <md-input
          v-model="currentTodo"
          @keydown.enter="addTodo()"
          placeholder="Add a todo"
        />
      </md-field>
      <ul class="todos">
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" @click="updateCheck(todo)" />
          <label
            @dblclick="setEditing(todo)"
            :class="{ hide: todo.isBeingEdited }"
            >{{ todo.label }}</label
          >
          <input
            type="text"
            v-model="updatingTodo"
            :placeholder="todo.label"
            @keydown.enter="updateTodo(todo)"
            :class="{ hide: !todo.isBeingEdited }"
          />
          <button @click="removeTodo(todo)">Delete</button>
        </li>
      </ul>
    </div>

-->
