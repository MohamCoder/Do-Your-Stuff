import { todoElement } from "../../components/todoElement";

export function todos(parentElement, todoList, todosConfig) {
  const todos = document.createElement("div");
  parentElement.append(todos);
  todos.className = "mt-16 lg:mx-64 md:mx-32 mx-8 flex flex-col space-y-8"
  todos.id = "todos"
  for (const todo of todoList) {
    const interval = todoElement(todos, todo, todoList, todosConfig)
    todo.interval = interval
  }
}
