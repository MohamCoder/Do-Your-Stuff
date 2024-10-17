import './style.css'
import { hero } from './src/hero/hero'
import { navBar } from './src/navbar'
import { line } from './components/line'
const todoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []
const remove = []
for (const todo of todoList) {
  const now = new Date().getTime();
  todo.deadline = new Date(Date.parse(todo.deadline))
  const distance = todo.deadline - now;
  if (distance <= 0) {
    remove.push(todo.id)
  }
}
for (const id of remove) {
  todoList.splice(todoList.findIndex(todo => todo.id === id), 1)
}
let todosConfig = {
  editing: false,
  editTodo: null,
  isCountDown: true,
  sortMethod: (a, b) => a.deadline - b.deadline,
  sortType: "asc"
}
const appElement = document.getElementById('app')
navBar(appElement, todoList, todosConfig)
line(appElement)
hero(appElement, todoList, todosConfig)

