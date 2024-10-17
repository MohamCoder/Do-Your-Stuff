import { calculateDeadline } from "./calculateDeadline"
import { sortTodos } from "./sortTodos"
import { todoElement } from "../todoElement"
import { getLastId } from "./getLastId"

export function addTodo(screenId, todoList, todosConfig) {
  const lastId = getLastId(todoList)
  const description = document.querySelector("textarea").value
  const time = calculateDeadline()
  const todo = {
    task: description,
    deadline: time,
    id: lastId + 1,
    interval: null
  }
  const todos = document.getElementById("todos")

  const interval = todoElement(todos, todo, todoList, todosConfig)
  todo.interval = interval
  todoList.push(todo)
  if (todosConfig.editing) {
    const todos = document.getElementById("todos")
    const todo = document.getElementById(todosConfig.editTodo.id)
    const interval = todosConfig.editTodo.interval
    interval && clearInterval(interval)
    todos.removeChild(todo)
    todoList.splice(todoList.findIndex(todo => todo.id === todosConfig.editTodo.id), 1)
    todosConfig.editing = false
    todosConfig.editingId = null
  }

  sortTodos(todoList, todosConfig)

  const screen = document.getElementById(screenId)
  screen.className = "hidden"
}

