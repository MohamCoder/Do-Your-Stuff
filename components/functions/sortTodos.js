import { todoElement } from "../todoElement"
import { addToLocalStorage } from "./addTolocalStorage"
export function sortTodos(todoList, todosConfig) {
  todoList.sort(todosConfig.sortMethod)
  const todos = document.getElementById("todos")
  for (let todo of todoList) {
    if (todo.interval) clearInterval(todo.interval)
    todos.removeChild(document.getElementById(todo.id))
  }
  for (let todo of todoList) {
    const interval = todoElement(todos, todo, todoList, todosConfig)
    todo.interval = interval
  }
  addToLocalStorage(todoList)
}
